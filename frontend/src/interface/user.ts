export interface IUser {
    id: number;
    name: string;
    email: string;
    email_verified_at?: Date | null;
    password: string;
    phone_number?: string | null;
    remember_token?: string | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    address?: string | null;
    city?: string | null;
  }