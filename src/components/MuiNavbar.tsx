import {
  Stack,Button,
  AppBar,Toolbar,IconButton,Typography,
  Menu,MenuItem
}  from "@mui/material"
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react"

const MuiNavbar=()=>{
  const [anchorEl,setAnchorEl]=useState<null|HTMLElement>(null)
  const [loginEl,setLoginEl]=useState<null|HTMLElement>(null)
  const open=Boolean(anchorEl)
  const loginOpen=Boolean(loginEl)
  const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
    setAnchorEl(event.currentTarget)
  }
  const handleClose=()=>{
    setAnchorEl(null)
  }
  const handleLoginClose=()=>{
    setLoginEl(null)
  }
  const loginClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    setLoginEl(e.currentTarget)
  }
    return(
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="logo">
            <CatchingPokemonIcon/>
          </IconButton>
          <Typography variant="body1" component="div" sx={{flexGrow:1}}>
            Santra
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              Feature
            </Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resources-menu":undefined}
              aria-haspopup="true"
              aria-expanded={open?"true":undefined}
              endIcon={<KeyboardArrowDownIcon/>}

            >
              Pricing
            </Button>
            <Button
              color="inherit"
              id="login-btn"
              aria-controls={loginOpen?"login-menu":undefined}
              aria-haspopup="true"
              aria-expanded={loginOpen?"true":undefined}
              endIcon={<KeyboardArrowDownIcon/>}
              onClick={loginClick}
            >
              Login
            </Button>
          </Stack>
          <Menu
            id="login-menu"
            anchorEl={loginEl}
            open={loginOpen}
            MenuListProps={{
              "aria-labelledby":"login-btn"
            }}
            onClose={handleLoginClose}
          >
            <MenuItem onClick={handleLoginClose}>
              User Login
            </MenuItem>
            <MenuItem onClick={handleLoginClose}>
              Others Login
            </MenuItem>
            <MenuItem onClick={handleLoginClose}>
              Admin Login
            </MenuItem>
          </Menu>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              "aria-labelledby":"resources-button"
            }}
            anchorOrigin={{
              vertical:"bottom",
              horizontal:"right"
            }}
            transformOrigin={{
              vertical:"top",
              horizontal:"right"
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} >
              Blog
            </MenuItem>
            <MenuItem onClick={handleClose}>
              Podcast
            </MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    )
}
export default MuiNavbar
