import { Box, Typography } from "@mui/material"


type Props = {}

const Admin: React.FC = (props: Props) => {
  return (
    <Box sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			maxWidth: "500px",
			margin: "auto"
		}}>
      <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Admin</Typography>
    </Box>
  )
}

export default Admin