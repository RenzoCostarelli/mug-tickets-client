'use client'
import { 
  Avatar, 
  Box, 
  Button, 
  Link, 
  Menu, 
  MenuItem, 
  Stack, 
  ThemeProvider, 
  Typography, 
  CssBaseline, 
  createTheme } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import SignOutButton from '../sign-out-button';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function CardInfo() {
    const { data: session } = useSession();

    const avatarUrl = session?.user.image as string;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (      
         
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Perfil
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem disabled>
                <Stack direction="row" spacing={2}>           
                    <Typography style={{

                      }} 
                      component="span">{ session?.user?.email }</Typography>
                        <Avatar 
                            sx={{ width: 24, height: 24 }}
                            src={avatarUrl}
                            alt={session?.user?.name}/>
                </Stack>
              </MenuItem>
              <MenuItem 
                component={ Link }
                href={`/admin/`}>Dashboard</MenuItem>
              <MenuItem 
                component={ Link }
                href={`/admin/eventos`}>Eventos</MenuItem>
              <MenuItem 
                component={ Link }
                href={`/admin/validar`}>Qr Scan</MenuItem>
              <MenuItem>
                <SignOutButton />
              </MenuItem>
            </Menu>
          </div>    
    )
} 