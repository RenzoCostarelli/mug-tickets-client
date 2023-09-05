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
import Image from 'next/image';

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
            <button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Perfil
            </button>
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
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>           
                  <span>{ session?.user?.email }</span>
                  <Image 
                    style={{
                      borderRadius: '50%'
                    }}
                    width={30}
                    height={30}
                    src={avatarUrl || ''}
                    alt={session?.user?.name || ''}/>
                </div>
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