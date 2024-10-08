<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVariantRequest;
use App\Http\Requests\UpdateVariantRequest;
use App\Models\ProductImage;
use App\Models\ProductVariant;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProductVariantController extends Controller
{

    public function index()
    {
        try {
            $variants = ProductVariant::with('product', 'size', 'color')->get();

            return response()->json([
                'message' => 'Lấy dữ liệu thành công',
                'data' => $variants,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {

            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            return response()->json([
                'message' => 'Lấy danh sách không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeVariant(StoreVariantRequest $request)
    {
        try {

            Log::info(['variants'], $request->all());

            $validatedData = $request->validated();

            // Kiểm tra tính duy nhất cho sự kết hợp của product_id, size_id và color_id
            $existingVariant = ProductVariant::where('product_id', $request->product_id)
                ->where('size_id', $request->size_id)
                ->where('color_id', $request->color_id)
                ->first();

            if ($existingVariant) {
                return response()->json([
                    'message' => 'Variant with the same product_id, size_id, and color_id already exists.',
                    'data' => $existingVariant,
                ], 409); // HTTP 409 Conflict
            }

            $variant = ProductVariant::create([
                'product_id' => $validatedData['product_id'],
                'size_id' => $validatedData['size_id'],
                'color_id' => $validatedData['color_id'],
                'sku' => $validatedData['sku'],
                'stock' => $validatedData['stock'],
                'price' => $validatedData['price'],
            ]);

            // Xử lý lưu ảnh sản phẩm
            $imageFiles = $request->file('image_path'); // Lấy danh sách ảnh từ form

            if ($imageFiles) {
                foreach ($imageFiles as $index => $image) {

                    // Lưu ảnh vào thư mục 'public/products'
                    $imagePath = $image->store('products', 'public');

                    // Mặc định ảnh đầu tiên là ảnh chính
                    $isPrimary = ($index == 0) ? 1 : 0;

                    // Lưu thông tin ảnh vào bảng product_images
                    ProductImage::create([
                        'product_variant_id' => $variant->id,
                        'image_path' => $imagePath,
                        'is_primary' => $isPrimary,
                    ]);
                }
            }

            return response()->json([
                'message' => 'Thêm mới thành công',
                'data' => $variant,
            ], Response::HTTP_CREATED);
        } catch (\Throwable $th) {

            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            return response()->json([
                'message' => 'Thêm mới không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateVariant(UpdateVariantRequest $request, $id)
    {
        try {
            // Log dữ liệu được gửi lên
            Log::info(['variant_update'], $request->all());

            // Tìm biến thể theo id
            $variant = ProductVariant::findOrFail($id);

            // Cập nhật biến thể với dữ liệu được validate
            $validatedData = $request->validated();

            // Kiểm tra tính duy nhất cho tổ hợp product_id, size_id, color_id
            $duplicateCheck = ProductVariant::where('product_id', $validatedData['product_id'])
                ->where('size_id', $validatedData['size_id'])
                ->where('color_id', $validatedData['color_id'])
                ->where('id', '!=', $id) // Bỏ qua bản ghi hiện tại
                ->first();

            if ($duplicateCheck) {
                return response()->json([
                    'message' => 'Biến thể với kích thước và màu sắc này đã tồn tại.',
                ], Response::HTTP_UNPROCESSABLE_ENTITY); // 422 Unprocessable Entity
            }

            $variant->update([
                'product_id' => $validatedData['product_id'],
                'size_id' => $validatedData['size_id'],
                'color_id' => $validatedData['color_id'],
                'sku' => $validatedData['sku'],
                'stock' => $validatedData['stock'],
                'price' => $validatedData['price'],
            ]);

            // Kiểm tra xem có ảnh mới được gửi không
            if ($request->hasFile('image_path')) {

                $imageFiles = $request->file('image_path'); // Lấy danh sách ảnh từ form

                // Xóa ảnh cũ
                $existingImages = ProductImage::where('product_variant_id', $variant->id)->get();

                foreach ($existingImages as $existingImage) {
                    // Xóa ảnh trong thư mục storage
                    if (Storage::disk('public')->exists($existingImage->image_path)) {
                        Storage::disk('public')->delete($existingImage->image_path);
                    }
                    // Xóa ảnh trong cơ sở dữ liệu
                    $existingImage->delete();
                }

                // Lưu ảnh mới
                foreach ($imageFiles as $index => $image) {
                    $imagePath = $image->store('products', 'public');
                    $isPrimary = ($index == 0) ? 1 : 0;

                    ProductImage::create([
                        'product_variant_id' => $variant->id,
                        'image_path' => $imagePath,
                        'is_primary' => $isPrimary,
                    ]);
                }
            }

            return response()->json([
                'message' => 'Cập nhật thành công',
                'data' => $variant,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Cập nhập không thành công'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Cập nhật không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteVariant($id)
    {
        try {
            // Tìm biến thể cần xóa theo ID
            $variant = ProductVariant::find($id);

            // Lấy danh sách ảnh liên quan đến sản phẩm
            $existingImages = ProductImage::where('product_variant_id',$variant->id)->get();

            // Xóa ảnh khỏi cơ sở dữ liệu và thư mục storage
            foreach ($existingImages as $existingImage) {
                // Xóa ảnh trong thư mục storage
                if (Storage::disk('public')->exists($existingImage->image_path)) {
                    Storage::disk('public')->delete($existingImage->image_path);
                }
                // Xóa ảnh trong cơ sở dữ liệu
                $existingImage->delete();
            }

            // Kiểm tra xem biến thể có tồn tại không
            if (!$variant) {
                return response()->json([
                    'message' => 'Biến thể không tồn tại'
                ], Response::HTTP_NOT_FOUND);
            }

            // Xóa biến thể
            $variant->delete();

            return response()->json([
                'message' => 'Xóa biến thể thành công',
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            // Log lỗi nếu xảy ra
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            return response()->json([
                'message' => 'Xóa biến thể không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getDetailVariant($id)
    {
        try {
            // Tìm biến thể theo ID, đồng thời lấy kèm thông tin liên quan đến sản phẩm, size và màu sắc
            $variant = ProductVariant::with('product', 'size', 'color')->findOrFail($id);

            return response()->json([
                'message' => 'Lấy thông tin biến thể thành công',
                'data' => $variant,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Biến thể không tồn tại',
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Lấy thông tin biến thể không thành công',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
