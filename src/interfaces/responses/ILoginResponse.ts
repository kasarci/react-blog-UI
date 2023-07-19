export interface ILoginResponse {
    token: string;
    refreshToken: string;
    result: boolean;
    errors: string[];
}