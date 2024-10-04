<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVariantRequest;
use App\Http\Requests\UpdateVariantRequest;
use App\Models\ProductVariant;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

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

            $variant = ProductVariant::create([
                'product_id' => $validatedData['product_id'],
                'size_id' => $validatedData['size_id'],
                'color_id' => $validatedData['color_id'],
                'sku' => $validatedData['sku'],
                'stock' => $validatedData['stock'],
            ]);

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

            $variant->update([
                'product_id' => $validatedData['product_id'],
                'size_id' => $validatedData['size_id'],
                'color_id' => $validatedData['color_id'],
                'sku' => $validatedData['sku'],
                'stock' => $validatedData['stock'],
            ]);

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
