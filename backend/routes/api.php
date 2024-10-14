<?php
use App\Http\Controllers\Api\CartController;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BrandController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ColorController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\ProductVariantController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\ReviewAdminController;
use App\Http\Controllers\API\ReviewsController;
use App\Http\Controllers\API\SizeController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\WishlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');
Route::put('/update',[AuthController::class,'update'])->middleware('auth:sanctum');

Route::post('/storeReviews',[ReviewsController::class,'store'])->middleware('auth:sanctum');
Route::get('/detailReview/{id}',[ReviewsController::class,'getDetail'])->middleware('auth:sanctum');


Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);


Route::prefix('admin')->middleware(['auth:sanctum', 'admin'])->group(function() {

    Route::prefix('users')->group(function(){
        Route::get('/', [UserController::class, 'index']);
        Route::post('/add-user', [UserController::class, 'store']);
        Route::put('/update-user/{id}', [UserController::class, 'updateUser']);
        Route::delete('/delete-user/{id}', [UserController::class, 'deleteUser']);
        Route::get('/detail-user/{id}', [UserController::class, 'detailUser']);

    });

    Route::prefix('categories')->group(function(){
        Route::get('/create',[CategoryController::class,'create']);
        Route::get('/',[CategoryController::class,'index']);
        Route::post('/store',[CategoryController::class,'store']);
        Route::put('/update/{id}',[CategoryController::class,'update']);
        Route::delete('/delete/{id}',[CategoryController::class,'delete']);
        Route::get('/detail/{id}',[CategoryController::class,'getDetailCategory']); 
    });

    Route::prefix('brands')->group(function(){
        Route::get('/',[BrandController::class,'index']);
        Route::post('/store',[BrandController::class,'storeBrand']);
        Route::put('/updateBrand/{id}',[BrandController::class,'updateBrand']);
        Route::delete('/deleteBrand/{id}',[BrandController::class,'deleteBrand']);     
        Route::get('/getDetailBrand/{id}',[BrandController::class,'getDetailBrand']);    
    });

    Route::prefix('sizes')->group(function(){
        Route::get('/',[SizeController::class,'index']);
        Route::post('/storeSize',[SizeController::class,'storeSize']);
        Route::put('/updateSize/{id}',[SizeController::class,'updateSize']);
        Route::delete('/deleteSize/{id}',[SizeController::class,'deleteSize']);     
        Route::get('/getDetailSize/{id}',[SizeController::class,'getDetailSize']);    
    });

    Route::prefix('colors')->group(function(){
        Route::get('/',[ColorController::class,'index']);
        Route::post('/storeColor',[ColorController::class,'storeColor']);
        Route::put('/updateColor/{id}',[ColorController::class,'updateColor']);
        Route::delete('/deleteColor/{id}',[ColorController::class,'deleteColor']);     
        Route::get('/getDetailColor/{id}',[ColorController::class,'getDetailColor']);    
    });

    Route::prefix('products')->group(function(){

        Route::get('/',[ProductController::class,'index']);
        Route::post('/storeProduct',[ProductController::class,'storeProduct']);
        Route::get('/getDetailProduct/{id}',[ProductController::class,'getDetailProduct']);
        Route::put('/updateProduct/{id}',[ProductController::class,'updateProduct']);
        Route::delete('/deleteProduct/{id}',[ProductController::class,'deleteProduct']);
        
    }); 


    Route::prefix('variants')->group(function() {
        
        Route::get('/', [ProductVariantController::class, 'index']); // Lấy danh sách biến thể
        Route::post('/storeVariant', [ProductVariantController::class, 'storeVariant']); // Thêm biến thể
        Route::put('/updateVariant/{id}', [ProductVariantController::class, 'updateVariant']); // cập nhập biến thể
        Route::delete('/deleteVariant/{id}', [ProductVariantController::class, 'deleteVariant']);
        Route::get('/getDetailVariant/{id}', [ProductVariantController::class, 'getDetailVariant']);

       
    });
    Route::prefix('reviews')->group(function() {
        Route::get('/', [ReviewAdminController::class, 'index']); // Lấy danh sách biến thể// Route::put('/updateVariant/{id}', [ReviewsController::class, 'updateVariant']); // cập nhập biến thể
        Route::delete('/deleteReview/{id}', [ReviewsController::class, 'deleteReview']);
    });
    
    Route::resource('carts', CartController::class);
    Route::put('/cart/update-cart', [CartController::class, 'updateCart']);
    Route::prefix('orders')->group(function () {
        Route::get('/', [OrderController::class, 'index'])->name('orders.index');
        Route::post('/store', [OrderController::class, 'store']);
    });
    Route::prefix('roles')->group(function(){
        Route::get('/',[RoleController::class,'index']);
        Route::post('/storeRoles',[RoleController::class,'storeRoles']);
        Route::put('/updateRoles/{id}',[RoleController::class,'updateRoles']);
        Route::delete('/deleteRole/{id}',[RoleController::class,'deleteRole']);     
        Route::get('/getDetailRole/{id}',[RoleController::class,'getDetailRole']);    
    });

    Route::prefix('AdminWishlists')->group(function(){
        Route::get('/',[WishlistController::class,'index']);
        Route::post('/storeWishlists',[WishlistController::class,'storeWishlists']);
        Route::delete('/deleteWishlists/{product_id}',[WishlistController::class,'deleteWishlists']);     
       
    });
});
Route::get('/check-payment/{order_id}', [OrderController::class, 'checkPayment'])->name('orders.check_payment');

Route::prefix('wishlists')->group(function(){
    // Lấy danh sách sản phẩm trong wishlist của người dùng
    Route::get('/', [WishlistController::class, 'index'])->middleware('auth:sanctum');

    // Thêm sản phẩm vào wishlist
    Route::post('/storeWishlists', [WishlistController::class, 'storeWishlists'])->middleware('auth:sanctum');

    // Xóa sản phẩm khỏi wishlist
    Route::delete('/deleteWishlists/{product_id}', [WishlistController::class, 'deleteWishlists'])->middleware('auth:sanctum');
});