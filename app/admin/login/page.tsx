
import FormLogin from '@/app/components/form-login';
import a from './login.module.scss';
import { Box, Container, Typography } from '@mui/material';

export default function LoginAdmin() {
  
  return (
    <main>
      <Container maxWidth="sm">
          <Box
            sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                p: '15px',
                marginTop: '1rem',
                borderRadius: '10px'
            }}>            
            <Box>
              <Typography color="text.primary" variant="h4" component="h2" gutterBottom>
                Login
              </Typography>
            </Box>
            <FormLogin />            
          </Box>
      </Container>            
    </main>
  );
}
