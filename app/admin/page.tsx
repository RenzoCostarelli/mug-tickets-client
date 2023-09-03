import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import s from '../page.module.scss';
import { Button } from '@mui/material';
import { Session, getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import AdminEventsList from '@/app/components/admin-event-list';
import { getToken } from "next-auth/jwt";

async function getData() {
  const res = await fetch(`${process.env.apiUrl}/events`, {cache: 'no-store'});  
  if (!res.ok) {
    throw new Error('Failed to fetch home data');
  } 
  return res.json();
}

export default async function AdminDashboard() {
   
    const data = await getData();    
    return(
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Typography sx={{ my:2 }}variant="h4" component="h2" gutterBottom>
                    Admin Dashboard
                </Typography>
            </Box>
            <Box component="nav"
                sx={{
                    display: 'flex',
                    flexDirection: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: '15px',
                    borderRadius: '10px',
                }}>
                    <Box  sx={{
                        p: '20px'
                    }}>
                        <Button 
                            variant="text"
                            href={`/admin`}>Eventos</Button>
                    </Box>
                    <Box sx={{
                        p: '20px'
                    }}>                            
                        <Button
                            variant="text"
                            href={`/admin/eventos/`}>Crear Evento</Button>
                    </Box>
                    <Box sx={{
                        p: '20px'
                    }}>
                        <Button
                            variant="text"
                            href={`/admin/validar/`}>Qr Scan</Button>                    
                    </Box>
            </Box>
            <Box sx={{
                border: '1px solid black',
                borderRadius: 3,
                py: 4,
                px: 2
            }}>
                <AdminEventsList da={ data }/>
            </Box>
        </Container>           
    )
}
