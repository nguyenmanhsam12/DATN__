<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id(); // Khóa chính
            $table->unsignedBigInteger('user_id'); // ID người dùng
            $table->unsignedBigInteger('product_variant_id'); // ID biến thể sản phẩm
            $table->integer('quantity'); // Số lượng
            $table->decimal('price', 10, 2); // Giá

            // Khóa ngoại
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('product_variant_id')->references('id')->on('product_variants')->onDelete('cascade');

            $table->timestamps(); // Các trường created_at và updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
