import {AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material';
import {GitHub, LinkedIn, Menu as MenuIcon} from '@mui/icons-material';
import { useState } from 'react';


interface Props {}

function Navbar({}: Props) {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  }) as typeof Toolbar;
  
  const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10
  }) as typeof Box;

  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
  }) as typeof Box;

  const SearchBox = styled(Box)({
    display: 'flex',
    padding: '0',
    margin: '0',
    marginBottom: '100',
    gap: 30
  }) as typeof Box;

  interface MenuItem {
    Name: string,
    Link: string
  }
  const MenuItems : MenuItem[] = [
    {Name: 'Home', Link: '/'},
    {Name: 'Blogs', Link: '/blogs'},
    {Name: 'Contact Me', Link: '/contact'}
  ]

  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <AppBar position='static' sx={{ background: 'black' }}>
      <StyledToolbar>
        
        <MenuBox sx={{display: {xs: 'none', sm:'none', md:'flex', justifyItems: 'center', alignItems:'center'}}}>
          {
            MenuItems.map((item : MenuItem) => 
              <Typography sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</Typography>
            )
          }
          <SearchBox>
            <InputBase placeholder='Search...' sx={{color: 'white'}} />
          </SearchBox>
        </MenuBox>
        

        <MenuIcon 
          onClick={() => {setOpen(true)}}
          sx={{color:'white', cursor: 'pointer', display:{xs:'block', sm:'block', md: 'none'}}} />
     
        <SearchBox sx={{display: {xs:'block', sm:'block', md: 'none'}}}>
            <InputBase placeholder='Search...' sx={{color: 'white'}} />
          </SearchBox>

        <SocialBox >
          <LinkedIn />
          <GitHub />
        </SocialBox>
        
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => {setOpen(!open)}}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box sx={{ width:'360px', height: '94vh'}}>
            {
              MenuItems.map((item : MenuItem) => 
                <MenuItem sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</MenuItem>
              )
            }
          </Box>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar