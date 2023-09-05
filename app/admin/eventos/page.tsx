import EventForm from "@/app/components/dashboard-event-form";
import TicketForm from "@/app/components/dashboard-ticket-form";

export default async function AdminEvents() {

    return(
        <main>
            <div style={{
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
            <div style={{ }}>
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
                            <EventForm />
                    </div>
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
                            <TicketForm />
                    </div>
                </div>
            </div>            
        </main>
    )
}