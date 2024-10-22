export interface Images{
    id?:string|string,
    image_path: string
}

export interface IVariant{
    id?:number|string, 
    product_id: number | string,
    size_id : number | string,
    color_id: number | string,
    sku: string,
    stock: number,
    selled: number,
    price: number,
    created_at?: Date | null,
    updated_at?: Date | null,
    image_path: Images[]
}
export type FormVariant = Pick<IVariant,'product_id'| 'size_id'| 'color_id'|'sku' | 'stock'|'price'|'image_path'>