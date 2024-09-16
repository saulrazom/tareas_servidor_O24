interface UserAddress{
    street: string;
}

export interface User {
    id?: string;
    name: string;
    email?: string;
    role?: string;
    password?: string;
    address?: UserAddress;
}
