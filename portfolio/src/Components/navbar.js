import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import pdf from "../res/Resume_NitinDhiman.pdf";

const drawerWidth = 240;
const navItems = ['home', 'skills', 'work', 'education', 'contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NitinDhiman
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton sx={{ textAlign: 'left' }}>
            <ListItemText primary="Resume" />
        </ListItemButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: "100px"}} >
      <CssBaseline />
      <AppBar component="nav" style={{background: "transparent"}} elevation={0}>
        <Toolbar style={{margin: "20px 0", boxShadow: "0 0px"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NitinDhiman
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, transform: "translate(-50%)", position: "absolute", left: "50%" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', mx: "15px" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button 
            href={pdf} 
            target='_blank' 
            rel='noreferrer' 
            variant='contained' 
            color='secondary' 
            sx={{ display: { xs: 'none', sm: 'block' }, borderRadius: "30px" }}
          >Resume</Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default DrawerAppBar;