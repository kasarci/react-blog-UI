import axios, { AxiosError } from "axios";
import { createContext, useState } from "react";
import React, { ReactNode } from "react";
import jwt_decode from "jwt-decode";
import { ILoginResponse } from "../../interfaces/ILoginResponse";
import { LOGIN, REFRESH, setAuthToken } from "../../api/api";
import { ILoginPayload } from "./IAuthContext";

interface Props {
	children?: ReactNode
	// any props that come into the component
}

const AuthContext: React.Context<any> = createContext(null);

export const AuthContextProvider = (props: Props) => {
	//const navigate = useNavigate();
	const [errors, setErrors] = useState<string[] | undefined>([""]);
	const [user, setUser] = useState(() => {
		const token = localStorage.getItem("token");
		if (token) {
			return jwt_decode(token);
		}
		return null;
	});

	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		const token = localStorage.getItem("token");
		if (token) {
			return true;
		}
		return false;
	});

	const login = async (loginPayload: ILoginPayload) => {
		setErrors([''])
		axios.post<ILoginResponse>(LOGIN, loginPayload)
			.then((response) => {

				setErrors(['']);
				const token = response.data.token;
				const refreshToken = response.data.refreshToken;

				localStorage.setItem('token', token);
				localStorage.setItem('refreshToken', refreshToken);

				setUser(jwt_decode(response.data.token))

				setAuthToken(token);
				setIsLoggedIn(true);

				window.location.href = '/admin'
			})
			.catch((err: AxiosError<ILoginResponse>) => {
				console.log('error line 42:' + err);
				setErrors(err.response?.data.errors);
			});
	}

	const logout = async () => {
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
		setUser(null);
		setIsLoggedIn(false);
		//navigate("/");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoggedIn, errors }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;