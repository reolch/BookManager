import React, { FC } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, colors } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  height: '80px',
}));

export const Header: FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  // メニューアイコン押下時処理
  const onClickMenuIcon = () => {
    setDrawerOpen(!drawerOpen);
  }

  // ドロワーメニューの中身を返却する処理
  const list = () => (
    <Box
      sx={{ width: 'auto'}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List disablePadding>
        {['Home', 'Profile', 'Music', 'Lyrics', 'Shop', 'お仕事のご依頼', 'LINK'].map((text, index) => (
          [<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>,
          <Divider key={text + '_'}/>]
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 0, height: '80px' }}>
      <AppBar position="static" sx={{ height: '80px' }} style={{ backgroundColor: '#fc92bf' }}>
        <Toolbar 
          variant="dense"
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <IconButton
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2 }}
            onClick={onClickMenuIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            サンプル
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={onClickMenuIcon}
        sx={{
          width: '240px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '240px',
            boxSizing: 'border-box',
          },
        }}
        // variant="persistent"
      >
        <DrawerHeader>
          <IconButton onClick={onClickMenuIcon}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {list()}
      </Drawer>
    </Box>
  )
}