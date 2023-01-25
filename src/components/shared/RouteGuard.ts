import jwt_decode, { JwtPayload } from "jwt-decode";
import axios, { AxiosError } from "axios";
import { REFRESH, setAuthToken } from "../../api/api";
import { ILoginResponse } from "../../interfaces/ILoginResponse";

let sendingRequest = false;

export function hasValidJWT(): boolean {
	const token = localStorage.getItem("token");

	if (!token) {
		return false;
	}

	var decodedToken = jwt_decode<JwtPayload>(token);
	var currentTime = new Date().getTime();

	if (!decodedToken.exp) {
		return false;
	}
	if (decodedToken.exp * 1000 < currentTime) {
		const refreshToken = localStorage.getItem("refreshToken");
		if (!refreshToken) {
			return false;
		}

		const payload = { token, refreshToken };

		return refresh(payload);
	}

	return true;
}

function refresh(payload: { token: string; refreshToken: string; }): boolean {
	if(!sendingRequest){
		sendingRequest = true;
		axios.post<ILoginResponse>(REFRESH, payload)
		.then((response) => {
			if (response.data.errors[0]) {
				return false;
			}

			const newToken = response.data.token;
			const newRefreshToken = response.data.refreshToken;

			if (!newToken || !newRefreshToken) {
				return false;
			}

			localStorage.setItem('token', newToken);
			localStorage.setItem('refreshToken', newRefreshToken);

			setAuthToken(newToken);
			sendingRequest = false;
			return true;
		})
		.catch((err: AxiosError<ILoginResponse>) => {
			console.log(err);
			sendingRequest = false;
			return false;
		});
	}
	return false;
}

