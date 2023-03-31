import {AppBar, Box, Button, InputBase, Link, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material';
import {GitHub, LinkedIn, Menu as MenuIcon} from '@mui/icons-material';
import { useContext, useState } from 'react';
import AuthContext from '../shared/Authcontext';
import { IAuthContext } from '../shared/IAuthContext';
import { Navigate } from 'react-router-dom';


interface Props {}

function Navbar({}: Props) {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  }) as typeof Toolbar;
  
  const SocialBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
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

  const LogoutBox = styled(Box)({
    display: 'flex',
    gap: 30
  }) as typeof Box;

  interface MenuItem {
    Name: string,
    Link: string,
    PublicLink: boolean;
  }
  const MenuItems : MenuItem[] = [
    {Name: 'Home', Link: '/', PublicLink: true},
    {Name: 'Blogs', Link: '/blogs', PublicLink: true},
    {Name: 'Contact Me', Link: '/contact',  PublicLink: true},
    {Name: 'Admin', Link: '/admin',  PublicLink: false }
  ]

  const [open, setOpen] = useState<boolean>(false);
  const { isLoggedIn, logout } = useContext(AuthContext) as IAuthContext;

  const handleLogout = async (e: React.FormEvent) => {
    if(window.location.pathname === "/admin"){
      console.log('redirecting to home.')
      window.location.href = '/'
    }    
    await logout();
	}
  
  return (
    <AppBar position='static' sx={{ background: 'black' }}>
      <StyledToolbar>
        
        <MenuBox sx={{display: {xs: 'none', sm:'none', md:'flex', justifyItems: 'center', alignItems:'center'}}}>
          {
            MenuItems.map((item : MenuItem) => isLoggedIn || item.PublicLink ? 
            <Link href={item.Link} underline="none" variant='body1' color='inherit'>
              {item.Name}
            </Link> : null

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
          { isLoggedIn ? <Button variant='text' color='inherit' onClick={handleLogout}>Logout</Button> : null}
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
                <MenuItem sx={{ cursor: 'pointer', fontSize: '14px' }}>
                  <Link href={item.Link} underline="none" variant='body1' color='inherit'>
                    {item.Name}   
                  </Link>
                </MenuItem>
              )
            }
          </Box>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar