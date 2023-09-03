import EventForm from "@/app/components/dashboard-event-form";
import TicketForm from "@/app/components/dashboard-ticket-form";
import { Box, Container, Grid, Typography } from "@mui/material";

export default async function AdminEvents() {

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
                <Grid xs={12} md={6}>
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
                            <EventForm />
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
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