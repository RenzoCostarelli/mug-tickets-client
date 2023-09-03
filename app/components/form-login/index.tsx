'use client'
import { Box, Button, Container, CssBaseline, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  
export default function FormLogin() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const data = await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: '/admin'
      });      
    };

    return (             
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
          <Box component="form" onSubmit={ submitHandler }>            
            <TextField
                type="email"
                fullWidth
                margin="normal"
                id="email_field"
                className="form-control"
                //value={email}
                label="Email"
                required
                onChange={(e) => setEmail(e.target.value)}/>
            <TextField
              margin="normal"
              fullWidth
              type="password"
              id="password_field"
              className="form-control"
              autoComplete='current-password'
              required
              label="Password"
              onChange={(e) => setPassword(e.target.value)}/>

            <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 3, mb: 2 }}>
                Sign in
            </Button>                  
          </Box>
      </Box>            
    )
}
