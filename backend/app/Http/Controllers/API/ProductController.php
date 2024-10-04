<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductVariant;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::with(['brand', 'category', 'images'])->get();
            return response()->json([
                'message' => 'Lấy dữ liệu thành công',
                'data' => $products,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Lấy danh sách không thành công'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Lấy danh sách không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeProduct(StoreProductRequest $request)
    {
        try {

            Log::info(['products'], $request->all());

            $validatedData = $request->validated();

            $product = Product::create([
                'name' => $validatedData['name'],
                'description' => $validatedData['description'],
                'price' => $validatedData['price'],
                'brand_id' => $validatedData['brand_id'],
                'category_id' => $validatedData['category_id'],
                'user_id' => auth()->id(),  // ID của người dùng hiện tại
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
                        'product_id' => $product->id,
                        'image_path' => $imagePath,
                        'is_primary' => $isPrimary,
                    ]);
                }
            }

            return response()->json([
                'message' => 'Thêm mới thành công',
                'data' => $product,
            ], Response::HTTP_CREATED);
        } catch (\Throwable $th) {

            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Thêm mới không thành công'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Thêm mới không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getDetailProduct($id)
    {
        try {
            $productDetail = Product::with(['images', 'variants.size', 'variants.color'])->findOrFail($id);

            return response()->json([
                'message' => 'Thành công',
                'data' => $productDetail,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Thất bại'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Thất bại'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateProduct(UpdateProductRequest $request, $id)
    {
        try {
            Log::info(['products_detail'], $request->all());

            $product = Product::findOrFail($id);

            $validatedData = $request->validated();



            $product->update([
                'name' => $validatedData['name'],
                'description' => $validatedData['description'],
                'price' => $validatedData['price'],
                'brand_id' => $validatedData['brand_id'],
                'category_id' => $validatedData['category_id'],
                'user_id' => auth()->id(),  // ID của người dùng hiện tại
            ]);

            // Kiểm tra xem có ảnh mới được gửi không
            if ($request->hasFile('image_path')) {
                $imageFiles = $request->file('image_path'); // Lấy danh sách ảnh từ form

                // Xóa ảnh cũ
                $existingImages = ProductImage::where('product_id', $product->id)->get();

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
                        'product_id' => $product->id,
                        'image_path' => $imagePath,
                        'is_primary' => $isPrimary,
                    ]);
                }
            }

            return response()->json([
                'message' => 'Cập nhập thành công',
                'data' => $product,
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
                'message' => 'Cập nhập không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteProduct($id)
    {
        try {

            // Tìm sản phẩm theo ID
            $product = Product::findOrFail($id);

            // Lấy danh sách ảnh liên quan đến sản phẩm
            $existingImages = ProductImage::where('product_id', $product->id)->get();

            // Xóa ảnh khỏi cơ sở dữ liệu và thư mục storage
            foreach ($existingImages as $existingImage) {
                // Xóa ảnh trong thư mục storage
                if (Storage::disk('public')->exists($existingImage->image_path)) {
                    Storage::disk('public')->delete($existingImage->image_path);
                }
                // Xóa ảnh trong cơ sở dữ liệu
                $existingImage->delete();
            }

            // Xóa các biến thể liên quan đến sản phẩm
            $variants = ProductVariant::where('product_id', $product->id)->get();
            foreach ($variants as $variant) {
                $variant->delete(); // Xóa biến thể
            }

            // Xóa sản phẩm
            $product->delete();
            return response()->json([
                'message' => 'Xóa thành công',
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {

            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Xóa không thành công'
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Xóa không thành công'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
