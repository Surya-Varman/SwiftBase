import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {useUser} from '@auth0/nextjs-auth0/client'
import {initAuth0} from '@auth0/nextjs-auth0'
import {createAuth0Client} from '@auth0/auth0-spa-js';
import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from '../node_modules/axios';
import { useEffect } from 'react';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {user,isLoading} = useUser();
  const [isBuyer,setIsBuyer] = React.useState(true);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const router = useRouter();
  const [saved,setSaved] = React.useState(false);
  useEffect(()=>{ 
    if(localStorage.getItem('isBuyer') !== null){
        setIsBuyer(JSON.parse(localStorage.getItem('isBuyer')))
    }
  },[isBuyer])
  if(!isLoading && user && !saved){
    let userTemp = {};
    if(isBuyer){
      userTemp = {...user,isBuyer:true,isSeller:false}
    }
    else{
      userTemp = {...user,isBuyer:false,isSeller:true}
    }
    axios.post('/api/users/uploadUser',userTemp).then((res)=>{}).catch((err)=>{console.log(err)});
    localStorage.setItem('userid',user.sub);
    setSaved(true);
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();

  };
  const handleAccount = () =>{
    setAnchorEl(null);
    handleMobileMenuClose();
    router.push('/myAccount')
  }
  const handleSellerDashboard = () =>{
    setAnchorEl(null);
    handleMobileMenuClose();
    router.push('/seller/Dashboard')
  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleBuyer = async () => {
    localStorage.setItem('isBuyer',true)
    setIsBuyer(true);
    
    setAnchorEl(null);
    handleMobileMenuClose();
  }
  const handleSeller = () => {
    localStorage.setItem('isBuyer',false);
    setIsBuyer(false);
    setAnchorEl(null);
    handleMobileMenuClose();
  }
  const  displayUserDetails = () => {
    if(user){

      let userTemp={};
      if(isBuyer){
        userTemp = {...user,isBuyer:true,isSeller:false}
      }
      else{
        userTemp = {...user,isBuyer:false,isSeller:true}
      }
      axios.post("/api/users/uploadUser",userTemp).then(console.log("successfully added user")).catch(err=>console.log(err))
    }
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    {user ? <div><MenuItem onClick={handleMenuClose}><Link href="/api/auth/logout">Log out</Link></MenuItem> {isBuyer? <MenuItem onClick={handleMenuClose}>Buyer Details</MenuItem>:<div><MenuItem onClick={handleMenuClose}><Link href="/seller/productUploadForm">Upload a product</Link></MenuItem><MenuItem onClick={handleSellerDashboard}>Dashboard</MenuItem> </div>}<MenuItem onClick={displayUserDetails}> User Details</MenuItem></div>
    :
    <div>
      <Link href="/api/auth/login"><MenuItem onClick={handleBuyer}>Buyer Login</MenuItem></Link>
      <Link href="/api/auth/login"><MenuItem onClick={handleSeller}>Seller Login</MenuItem></Link>
    </div>
    }
      <MenuItem onClick={handleAccount}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            
          >
            <span>Swift Buy</span>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                router.push("/myCart");
              }}
            >
              <Badge badgeContent={17} color="error">
               <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {user?<img src={user.picture}                       alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="38"
                      height="38"
                      decode="async"
                      data-testid="navbar-picture-mobile"/> :<AccountCircle />}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      
    </Box>
  );
}