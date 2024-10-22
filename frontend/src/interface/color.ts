export interface IColor{
    id?:string|number,
    color: string,
    created_at?: Date | null,
    updated_at?: Date | null,
}
export type FormColor = Pick<IColor,'color'>