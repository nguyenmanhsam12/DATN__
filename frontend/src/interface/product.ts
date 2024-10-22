import { IBrand } from "./brand"
import { ICategory } from "./categories"
import { IUser } from "./user"

export interface IProduct{
    id?:string|number,
    name:string,
    slug:string,
    description: string,
    brand_id?: number|string,
    brand:IBrand,
    category_id?: number|string,
    category: ICategory,
    user_id?:number|string,
    user: IUser
    created_at?: Date | null,
    updated_at?: Date | null,
}
export type FormProduct = Pick<IProduct,'name' | 'description'| 'brand_id'|'category_id'>