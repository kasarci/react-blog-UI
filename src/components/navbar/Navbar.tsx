import {AppBar, Box, Button, InputBase, Link, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material';
import {GitHub, LinkedIn, Menu as MenuIcon} from '@mui/icons-material';
import { useContext, useState } from 'react';
import AuthContext from '../shared/Authcontext';
import { IAuthContext } from '../shared/IAuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import NavbarButtonGroup from './NavbarButtonGroup';
import IMenuItem from './IMenuItem';


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


  const MenuItems : IMenuItem[] = [
    {Name: 'Home', Link: '/', PublicLink: true},
    {Name: 'Blogs', Link: '/blogs', PublicLink: true},
    {Name: 'Contact Me', Link: '/contact',  PublicLink: true},
  ]

  const AdminSubmenuItems: IMenuItem[] = [
    {Name: 'Create Post', Link: '/createPost',  PublicLink: false },
    {Name: 'Manage Posts', Link: '/managePosts',  PublicLink: false },
  ]

  let navigate = useNavigate();
  
  const [open, setOpen] = useState<boolean>(false);
  const { isLoggedIn, logout } = useContext(AuthContext) as IAuthContext;

  const handleLogout = async (e: React.FormEvent) => {
    if(window.location.pathname === "/admin"){
      console.log('redirecting to home.')
      window.location.href = '/'
    }    
    await logout();
	}

  const handleMenuItemClick = (link: string) => {
    navigate(link)
  }
  
  return (
    <AppBar position='static' sx={{ background: 'black',zIndex: 2 }}>
      <StyledToolbar>
        
        <MenuBox sx={{display: {xs: 'none', sm:'none', md:'flex', justifyItems: 'center', alignItems:'center'}}}>
          {
            MenuItems.map((item : IMenuItem) => isLoggedIn || item.PublicLink ? 
            <Button variant='text' color='inherit' onClick={() => {handleMenuItemClick(item.Link)}}>
              {item.Name}
            </Button> : null
            )
          }
          {isLoggedIn ? <NavbarButtonGroup options={AdminSubmenuItems}/> : null}

        </MenuBox>
        

        <MenuIcon 
          onClick={() => {setOpen(true)}}
          sx={{color:'white', cursor: 'pointer', display:{xs:'block', sm:'block', md: 'none'}}} />
     


        <SocialBox >
          { isLoggedIn ? <Button variant='text' color='inherit' onClick={handleLogout}>Logout</Button> : <Button variant='text' color='inherit' onClick={() => navigate('/login')}>Login</Button>}
          <LinkedIn cursor='pointer' onClick={()=> {window.location.href= 'https://www.linkedin.com/in/muhammetkasarci/'}} />
          <GitHub cursor='pointer' onClick={()=> {window.location.href= 'https://github.com/kasarci'}} />
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
              MenuItems.map((item : IMenuItem) => 
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