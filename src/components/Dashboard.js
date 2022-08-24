import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from 'react-router-dom';
import Logo from './xxpay-pequeno.png'

const drawerWidth = 240;

export default function Dashboard() {

  let navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >

        <List>
            <ListItem disablePadding>
                <Box sx={{width: 240, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                    <img 
                    style={{width: 125, height: 40}}
                    src={Logo} 
                    alt='logo'/>
                </Box>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/')}}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </ListItem>
        </List>

        <Divider />

        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/estabelecimentos')}}>
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Estabelecimentos" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/executivos')}}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Executivos" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/comissoes-pagas')}}>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pagamentos" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/nao-pagas')}}>
                    <ListItemIcon>
                        <MoneyOffIcon />
                    </ListItemIcon>
                    <ListItemText primary="Não pagas" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/estornos')}}>
                    <ListItemIcon>
                        <MoneyOffIcon />
                    </ListItemIcon>
                    <ListItemText primary="Estornos" />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {navigate('/cadastro')}}>
                    <ListItemIcon>
                        <AddBusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cadastrar estabelecimento" />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider sx={{marginTop: 25}}/>
        <List sx={{marginTop: -3, marginBottom: -2}}>
            <ListItem disablePadding>
                <ListItemIcon>
                    <BusinessIcon sx={{marginLeft: 1.9, marginTop: 1.0, marginBottom: -7}} />
                </ListItemIcon>
                <ListItemText sx={{marginLeft: 0, marginBottom: -2.3, marginTop: 2.9}} secondary="All rights reserved" />
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar sx={{marginBottom: -7}} />
      </Box>
    </Box>
  );
}
