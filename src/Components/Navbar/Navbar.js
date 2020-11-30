import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './Drawer';
import firebaseConfig from "../firebase";
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Link: {
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function Navbar() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleSignOut() {
        firebaseConfig.authentication.signOut()
    }

  const comprobarUsuario = () => {
    let user = firebaseConfig.authentication.currentUser;
    if(user) {
        return(
                
                <div className={classes.containerAvatar}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <Avatar className={classes.Avatar}>U</Avatar>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose, handleSignOut}><Link to="/login" className={classes.LinkMenu}>Logout</Link></MenuItem>
                </Menu>
              </div>
        )
    }else {
        return(
            <Link to="/login" className={classes.Link}>Iniciar sesión</Link>
        )
    }       
}



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <TemporaryDrawer />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DEMO routeo privado 
          </Typography>
          <Button>{comprobarUsuario()}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}