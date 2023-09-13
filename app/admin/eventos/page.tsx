import EventForm from "@/app/components/dashboard-event-form";
import TicketForm from "@/app/components/dashboard-ticket-form";
import { EventData } from "@/app/types/event";
import { TicketTypeData } from "@/app/types/ticket";


const EVENT_INITIAL_DATA = {
    eventId: "",
    title: "",
    description: "",
    address: "",
    eventType: "",
    ticketsAvailableOnline: 0,
    hasLimitedPlaces: false
}

const TICKET_INITIAL_DATA = {
    eventId: "",
    _id: "",
    type: "",
    date: "",
    hour: "",
    price: 0,
    ticketsAvailableOnline: 0,
    ticketPurchaseDeadline: ""
}

export default async function AdminEvents() {
    const event: EventData = EVENT_INITIAL_DATA;
    const ticket: TicketTypeData = TICKET_INITIAL_DATA;

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
                        <TicketForm ticket={ ticket }/>
                </div>
            </div>
                        
        </main>
    )
}