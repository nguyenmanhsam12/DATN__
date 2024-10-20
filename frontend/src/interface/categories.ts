export interface ICategory{
    id?: number | string,
    name: string,
    slug:string,
    parent_id: number,
    created_at?: Date | null;
    updated_at?: Date | null;
}

export type FormCategories = Pick<ICategory,'name' | 'slug' | 'parent_id'>