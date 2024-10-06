<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CartCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->transform(function($cart) {
                return [
                    'id' => $cart->id,
                    'user_id' => $cart->user_id,
                    'product_variant_id' => $cart->product_variant_id,
                    'quantity' => $cart->quantity,
                    'price' => $cart->price,
                    'created_at' => $cart->created_at,
                    'updated_at' => $cart->updated_at,
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'message' => "success",
            'status' => 200
        ];
    }
}
