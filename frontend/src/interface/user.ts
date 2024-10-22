export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number?: string | null;
    address?: string | null;
    city?: string | null;
    role:string
}
export type FormUser = Pick<IUser, 'name' | 'email' | 'password' | 'phone_number' | 'address' | 'city' | 'role'>