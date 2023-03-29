export interface IAuthContext {
    errors: string[] | undefined;
    login: (payload: ILoginPayload) => void;
    logout: () => void;

}

export interface ILoginPayload {
	email: string,
	password: string
}