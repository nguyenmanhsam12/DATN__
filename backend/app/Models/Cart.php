<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'product_variant_id', 'quantity', 'price'];

    public static function getPaginatedCarts($page, $user_id)
    {
        return self::query()
            ->where('user_id', $user_id)
            ->paginate($page);
    }

    public function productVariant()
    {
        return $this->belongsTo(ProductVariant::class, 'product_variant_id');
    }

    public static function addOrUpdateCartItem($userId, $product, $quantity)
    {
        $cartItem = self::where('user_id', $userId)
            ->where('product_variant_id', $product->id)
            ->first();

        if ($cartItem) {
            $cartItem->quantity += $quantity;
            $cartItem->save();
        } else {
            $cartItem = self::create([
                'user_id' => $userId,
                'product_variant_id' => $product->id,
                'quantity' => $quantity,
                'price' => $product->price,
            ]);
        }

        return $cartItem;
    }

    public static function updateCart($userId, $cartItemsData, $productIdsToDelete)
    {
        $updatedCartItems = collect();
        if (!empty($productIdsToDelete)) {
            self::where('user_id', $userId)
                ->whereIn('id', $productIdsToDelete)
                ->delete();
        }
        if (!empty($cartItemsData)) {
            foreach ($cartItemsData as $itemData) {
                $cartItem = self::where('user_id', $userId)
                    ->where('id', $itemData['cart_id'])
                    ->first();
//            $productVariant = ProductVariant::find($cartItem->product_variant_id);

                if ($cartItem) {
                    if ($itemData['quantity'] > 0) {

//                    if ($itemData['quantity'] > $productVariant->quantity) {
//                        return response()->json([
//                            'message' => 'Số lượng yêu cầu vượt quá số lượng có sẵn của sản phẩm.',
//                        ], 400);
//                    }

                        $cartItem->quantity = $itemData['quantity'];
                        $cartItem->save();
                        $updatedCartItems->push($cartItem);
                    } else {
                        $cartItem->delete();
                    }
                }
            }
        }
        return $updatedCartItems;
    }
}

