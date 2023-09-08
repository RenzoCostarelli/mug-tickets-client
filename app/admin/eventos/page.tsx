import EventForm from "@/app/components/dashboard-event-form";
import TicketForm from "@/app/components/dashboard-ticket-form";

type EventData = {
    eventId: string;
    title: string;
    description: string;
    address: string;
    eventType: string;
    ticketsAvailableOnline: number;
    hasLimitedPlaces: boolean;
    //date: string;
    //hour: string;
}

const EVENT_INITIAL_DATA = {
    eventId: "",
    title: "",
    description: "",
    address: "",
    eventType: "",
    ticketsAvailableOnline: 0,
    hasLimitedPlaces: false,
    //date: "",
    //hour: ""
}

export default async function AdminEvents() {
    const event: EventData = EVENT_INITIAL_DATA;
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
            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',                
                flexDirection: 'row',
            }}>
                <div
                    style={{
                        padding: '15px',
                        borderRadius: '10px',
                        width: '50%'
                    }}>
                        <EventForm event={ event }/>
                </div>
                <div
                    style={{
                        padding: '15px',
                        borderRadius: '10px',
                        width: '50%'
                    }}>
                        {/** <TicketForm /> */}
                </div>
            </div>
                        
        </main>
    )
}