import { IDecodedToken } from "./Authcontext";

export interface IAuthContext {
    errors: string[] | undefined;
    login: (payload: ILoginPayload) => void;
    logout: () => void;
    isLoggedIn: boolean;
    user: IDecodedToken;
}

export interface ILoginPayload {
	email: string,
	password: string
}