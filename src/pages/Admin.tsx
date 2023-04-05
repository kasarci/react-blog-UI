import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


type Props = {}

const drawerWidth = 240;

const Admin: React.FC = (props: Props) => {
  return (

    <Box>

    <Box sx={{
      display: "flex",
			flexDirection: "column",
			alignItems: "center",
			maxWidth: "500px",
			margin: "auto"
		}}>
      <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Admin</Typography>
    </Box>
      </Box>
  )
}

export default Admin