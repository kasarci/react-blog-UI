import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import AuthContext from '../components/shared/Authcontext';
import { IAuthContext } from '../components/shared/IAuthContext';

type Props = {}


const Login: React.FC = () => {
	//const [responseData, setResponseData] = useState<ILoginResponse | any>(null);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const {login, errors}= useContext(AuthContext) as IAuthContext;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await login({email,password});
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
			
			<form onSubmit={handleSubmit} style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width:"100%"
						}}>
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
					type="submit"
					onSubmit={handleSubmit}
					variant="contained"
					color="primary"
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "1rem",
						width: "50%",
						height: '3.5rem'
					}}
					onClick={handleSubmit}
				>
					Login
				</Button>
				
			</form>

			
		</Box>
	)
}

export default Login