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
            $products = Product::with(['brand', 'category', 'user'])->get();
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
                'brand_id' => $validatedData['brand_id'],
                'category_id' => $validatedData['category_id'],
                'user_id' => auth()->id(),  // ID của người dùng hiện tại
            ]);

            

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
            $productDetail = Product::with(['variants.size', 'variants.color','variants.images'])->findOrFail($id);

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
                'brand_id' => $validatedData['brand_id'],
                'category_id' => $validatedData['category_id'],
                'user_id' => auth()->id(),  // ID của người dùng hiện tại
            ]);

         

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
