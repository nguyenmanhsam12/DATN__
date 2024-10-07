<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class SlidersController extends Controller
{
    public function index()
    {
        try {
            $slider = Slider::all();
            return response()->json([
                'message' => 'Lấy dữ liệu thành công',
                'data' => $slider,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Lấy danh sách không thành công',
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Lấy danh sách không thành công',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'image_path' => 'required|image|mimes:jpg,jpeg,png,bmp|max:2048',
                'status' => 'required|boolean',
            ]);

            $imagePath = $request->file('image_path')->store('sliders', 'public');

            $slider = Slider::create([
                'title' => $request->title,
                'image_path' => $imagePath,
                'status' => $request->status,
            ]);
            return response()->json([
                'message' => 'Thêm mới thành công',
                'data' => $slider,
            ], Response::HTTP_CREATED);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ValidationException) {
                return response()->json([
                    'message' => 'Thêm mới không thành công',
                    'errors' => $th->errors(),
                ]);
            }
            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Thêm mới không thành công',
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Thêm mới không thành công',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    // Hiển thị chi tiết một slider

    public function getDetail($id)
    {
        try {
            $slider = Slider::find($id);

            if (!$slider) {
                return response()->json([
                    'message' => 'Slider không tồn tại',
                ], Response::HTTP_NOT_FOUND);
            }
            return response()->json([
                'message' => 'Lấy dữ liệu thành công',
                'data' => $slider,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);

            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Thất bại',
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Thất bại',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id)
    {
        $slider = Slider::find($id);

        if (!$slider) {
            return response()->json([
                'message' => 'Slider không tồn tại',
            ], Response::HTTP_NOT_FOUND);
        }

        // Xóa file hình ảnh nếu có
        Storage::disk('public')->delete($slider->image_path);
        $slider->delete();

        return response()->json([
            'message' => 'Slider đã xóa thành công',
        ], Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        try {
            Log::info(['slider_update'], $request->all());
    
            // Xác thực dữ liệu đầu vào
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',  // Kiểm tra title
                'image_path' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048', // Đường dẫn ảnh là bắt buộc và phải là file
                'status' => 'required|boolean',  // Trạng thái là bắt buộc
            ]);
    
            // Tìm slider theo id
            $slider = Slider::findOrFail($id);
    
            // Cập nhật thông tin slider
            $slider->title = $validatedData['title'];
            $slider->status = $validatedData['status'];
    
            // Kiểm tra xem có ảnh mới được gửi không
            if ($request->hasFile('image_path')) {
                // Xóa ảnh cũ trong thư mục storage
                if (Storage::disk('public')->exists($slider->image_path)) {
                    Storage::disk('public')->delete($slider->image_path);
                }
    
                // Lưu ảnh mới
                $imagePath = $request->file('image_path')->store('sliders', 'public');
                $slider->image_path = $imagePath; // Cập nhật đường dẫn ảnh mới
            }
    
            // Lưu lại thông tin slider đã được cập nhật
            $slider->save();
    
            return response()->json([
                'message' => 'Cập nhật thành công',
                'data' => $slider,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                'line' => $th->getLine(),
                'message' => $th->getMessage(),
            ]);
    
            if ($th instanceof ModelNotFoundException) {
                return response()->json([
                    'message' => 'Slider không tồn tại',
                ], Response::HTTP_NOT_FOUND);
            }
    
            return response()->json([
                'message' => 'Cập nhật không thành công',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    

}

