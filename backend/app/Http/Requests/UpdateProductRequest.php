<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $productId = $this->route('id');  //lấy id từ router

        return [
            'name'=>['required','string','max:255',Rule::unique('products')->ignore($productId)],
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric|min:0',
            'brand_id' => 'required|exists:brands,id',
            'category_id' => 'required|exists:categories,id',
            'image_path' => 'nullable|array|min:1',  // Validate nhiều ảnh
            'image_path.*' => 'image|mimes:jpeg,png,jpg,gif,webp|max:2048',  // Mỗi ảnh phải là file ảnh và không quá 2MB
        ];
    }
}
