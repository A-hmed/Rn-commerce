export interface AuthResponse {
    message: string | null;
    user: User
    token: string
}

export interface User {
    name: string
    email: string
    role: string
}
