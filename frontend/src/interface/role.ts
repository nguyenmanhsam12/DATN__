export interface Irole{
    id?: string | number;
    name:string,
    display_name:string,
}
export type RoleForm = Pick<Irole, 'name' | 'display_name'>