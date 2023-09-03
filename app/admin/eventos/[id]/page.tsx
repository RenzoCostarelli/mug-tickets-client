import Image from 'next/image';
import s from './evento.module.scss'
import FormPurchase from '@/app/components/form-purchase';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EventForm from '@/app/components/dashboard-event-form';
import TicketForm from '@/app/components/dashboard-ticket-form';

async function getEventById(id: string) {
    const res = await fetch(`${process.env.apiUrl}/events/${id}`, {cache: 'no-store'});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    } 
    return res.json();
}

export default async function PageEvents({params}: {params: {id: string}}) {
    const { event }  = await getEventById(params.id);
    return(
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
                <Typography sx={{ my:2 }} variant="h4" component="h2" gutterBottom>
                    Crear Evento
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            //backgroundColor: 'white',
                            p: '15px',
                            borderRadius: '10px'
                        }}>
                            <EventForm event={ event }/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            //backgroundColor: 'white',
                            p: '15px',
                            borderRadius: '10px'
                        }}>
                            <TicketForm />
                    </Box>
                </Grid>
            </Grid>
            
            
        </Container>
    ) 
}