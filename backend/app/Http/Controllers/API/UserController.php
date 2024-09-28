<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index(){
        Log::info('Fetching user list'); // Log trước khi lấy dữ liệu

        $data = User::orderBy('id')->paginate(5);
        return response()->json([
            'message' => 'Danh sách người dùng trang'.request('page', 1),
            'data' => $data
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|min:3',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
                'role_id' => 'required|array',
            ]);

            $validatedData['password'] = Hash::make($validatedData['password']);

            $user = User::create($validatedData);

            if(isset($validatedData['role_id'])){
                $user->roles()->attach($validatedData['role_id']);
            }


            return response()->json([
                'message' => 'Thêm mới người dùng thành công',
            ],Response::HTTP_CREATED);
            
        } catch (\Throwable $th) {

            Log::error(__CLASS__ . '@' . __FUNCTION__ , [
                'line'=>$th->getLine(),
                'message'=>$th->getMessage(),
            ]);

            if($th instanceof ModelNotFoundException){
                return response()->json([
                    'message' => 'Thêm mới không thành công'
                ],Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Thêm mới không thành công',
            ],Response::HTTP_INTERNAL_SERVER_ERROR);
            
        }
    }
}
