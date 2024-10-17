<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreOrderRequest extends FormRequest
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
        return [
            'payment_method' => 'required',
            'address_order' => 'required',
            'city' => 'required',
            'cart_item_ids' => 'required|array',
            'cart_item_ids.*' => 'exists:cart_items,id',
        ];
    }

    public function messages()
    {
        return [
            'payment_method.required' => 'Phương thức thanh toán là bắt buộc.',
            'address_order.required' => 'Địa chỉ giao hàng là bắt buộc.',
            'city.required' => 'Thành phố là bắt buộc.',
            'cart_item_ids.array' => 'Trường ID mặt hàng trong giỏ hàng phải là một mảng.',
            'cart_item_ids.*.exists' => 'Một hoặc nhiều sản phẩm trong giỏ hàng không tồn tại.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        throw new HttpResponseException(
            response()->json([
                'status' => 'error',
                'message' => 'Dữ liệu không hợp lệ.',
                'errors' => $errors,
            ], 422)
        );
    }


}
