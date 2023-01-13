import { Box, Button, responsiveFontSizes, TextField, Typography } from '@mui/material'
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { LOGIN, setAuthToken } from '../api/api'
import { ILoginResponse } from '../interfaces/ILoginResponse';

type Props = {}


const Login: React.FC = () => {
	const [responseData, setResponseData] = useState<ILoginResponse | any>(null);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [errors, setErrors] = useState<string[] | undefined>(['']);

	const handleSubmit = () => {
		const loginPayload = {
			email ,
			password
		}
		setErrors([''])
		axios.post<ILoginResponse>(LOGIN, loginPayload)
			.then((response) => {
				console.log('no error')
				setErrors(['']);
				const token = response.data.token;
				const refreshToken = response.data.refreshToken;

				localStorage.setItem('token', token);
				localStorage.setItem('refreshToken', refreshToken);

				setAuthToken(token);

				window.location.href = '/admin'
			})
			.catch((err : AxiosError<ILoginResponse>)  => {
				console.log('error line 42:' + err);
				setErrors(err.response?.data.errors);
			});
	}

	return (
		<Box sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			maxWidth: "500px",
			margin: "auto"
		}}>
			<Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Login</Typography>
			<TextField
				style={{
					margin: "1rem",
					width: "100%",
				}}
				id="Email"
				label="Email"
				value={email}
				onChange={(e) => { setEmail(e.target.value) }}
				margin="normal"
			/>
			<TextField
				style={{
					margin: "1rem",
					width: "100%",
				}}
				id="password"
				label="Password"
				value={password}
				onChange={(e) => { setPassword(e.target.value) }}
				margin="normal"
				type="password"
			/>

			{
				errors?.map((error) => {
					return <Typography variant='body2' color='red'>{error}</Typography>
				})
			}



			<Button
				variant="contained"
				color="primary"
				style={{
					margin: "1rem",
					width: "50%",
					height: '3.5rem'
				}}
				onClick={handleSubmit}
			>
				Login
			</Button>
		</Box>
	)
}

export default Login