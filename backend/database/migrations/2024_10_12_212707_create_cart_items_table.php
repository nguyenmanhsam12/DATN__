<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id(); // Tạo trường id tự tăng
            $table->unsignedBigInteger('cart_id'); // Khóa ngoại cho cart
            $table->unsignedBigInteger('product_variant_id'); // Khóa ngoại cho product variant
            $table->timestamps(); // Tạo created_at và updated_at
            $table->unsignedInteger('quantity'); // Số lượng
            
            // Nếu bạn muốn thêm các khóa ngoại
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart_items');
    }
}
