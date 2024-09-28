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
        Schema::table('user_address', function (Blueprint $table) {
            Schema::dropIfExists('user_address'); // Xóa bảng user_address
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('user_address', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('address_line1');
            $table->string('address_line2')->nullable();
            $table->string('city');
            $table->boolean('is_default')->default(false);
            $table->timestamps();
        });
    }
};
