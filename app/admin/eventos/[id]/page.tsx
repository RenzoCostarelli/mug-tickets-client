import s from './evento.module.scss';
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
        <main>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
                <h2 style={{ 
                    marginBottom:2, 
                    marginTop: 2 
                    }}>
                    Crear Evento
                </h2>
            </div>
            <div>                
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        //backgroundColor: 'white',
                        padding: '15px',
                        borderRadius: '10px'
                    }}>
                        <EventForm event={ event }/>
                </div>            
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        //backgroundColor: 'white',
                        padding: 1,
                        borderRadius: '10px'
                    }}>
                        <TicketForm />
                </div>            
            </div>            
        </main>
    ) 
}