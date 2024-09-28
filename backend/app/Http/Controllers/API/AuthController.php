<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Role;
use App\Models\User;
use App\Models\UserAddress;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        try {
            $data = $request->validated();

            Log::info('data',$data);

            
            $data['password'] = Hash::make($data['password']);
            
            $user = User::create($data);

            // lấy vai trò
            $userRole = Role::where('name','user')->first();
            
            if($userRole){
                $user->roles()->attach($userRole->id);
            }
            
            return response()->json([
                'message'=>'Đăng ký thành công',
                'data'=>$user,
            ]);
        
        } catch(\Throwable $th) {
            
            return response()->json([
                'errors' => $th->getMessage()
            ],Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function login(Request $request){
        try {

            $request->validate([
                'email'=>'required|email',
                'password'=>'required|min:6',
            ]);

            $user = User::where('email',$request->email)->first();

            if(!$user || !Hash::check($request->password,$user->password)){
                throw ValidationException::withMessages([
                    'email'=>['Thông tin bạn cung cấp không chính xác']
                ]);
            }

            // Kiểm tra vai trò
            $roles = $user->roles()->pluck('name')->toArray();  //lấy các vai trò của user(nếu nhiều vai trò)

            $token = $user->createToken($user->id)->plainTextToken;

            return response()->json([
                'message'=>'Login Success',
                'token'=>$token,
                'roles'=>$roles
            ]);

        } catch (\Throwable $th) {
            if($th instanceof ValidationException){
                return response()->json([
                    'errors'=>$th->errors()
                ],Response::HTTP_BAD_REQUEST);
            }

            return response()->json([
                'errors' => $th->getMessage()
            ],Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function logout(){
        try { 
            // currentAccessToken : hàm này tự động lấy ra access_Token truyền lên
            request()->user()->currentAccessToken()->delete();

            return response()->json([
                'message'=>'Logout Success'
            ]);
            
        } catch (\Throwable $th) {
            return response()->json([
                'erros'=>$th->getMessage()
            ],Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function update(UpdateUserRequest $request) {
        try {
            // Lấy người dùng hiện tại
            $user = $request->user();

            if(!$user){
                return response()->json(['errors' => 'Người dùng chưa được xác thực.'], Response::HTTP_UNAUTHORIZED);
            }

            // Cập nhật thông tin người dùng
            $user->update($request->validated());
         
            return response()->json([
                'message' => 'Cập nhật thành công',
                'data' => $user,
            ]);

        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__ , [
                'line'=>$th->getLine(),
                'message'=>$th->getMessage(),
            ]);

            if($th instanceof ModelNotFoundException){
                return response()->json([
                    'message' => 'Cập nhập người dùng không thành công'
                ],Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                'message' => 'Cập nhập người dùng không thành công',
            ],Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

   

}
