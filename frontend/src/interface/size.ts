export interface Sizes{
    id?:string|number,
    size: string,
    created_at?: Date | null,
    updated_at?: Date | null,
}
export type Formsize = Pick<Sizes,'size'>