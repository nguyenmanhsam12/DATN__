export interface IBrand {
    id?: number | string,
    name: string,
    slug:string,
    created_at?: Date | null;
    updated_at?: Date | null;
}
export type FormBrand = Pick<IBrand,'name' | 'slug'>