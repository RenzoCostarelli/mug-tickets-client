import s from './page.module.scss';
import EventForm from '@/app/components/dashboard-event-form';
import DropdownList from '@/app/components/dashboard-form-wrapper';
import { TicketTypeData } from "@/app/types/ticket";
import TicketForm from '@/app/components/dashboard-ticket-form';

async function getEventById(id: string) {
    const res = await fetch(`${process.env.apiUrl}/events/${id}`, {cache: 'no-store'});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    } 
    return res.json();
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

export default async function PageEvents({ params }: { params: { id: string } }) {
    const { event }  = await getEventById(params.id);
    const ticket: TicketTypeData = TICKET_INITIAL_DATA;
    ticket.eventId = event.eventId ?? '';

    return(
        <main className={s.main}>
            <div 
                className={s.title_header}>
                <h2 style={{ 
                    marginBottom:2, 
                    marginTop: 2 
                    }}>
                    Crear Evento
                </h2>
            </div>
            <div className={s.main_container}>                
                <div
                    className={s.event_form_container}>
                        <EventForm event={ event }/>
                </div>            
                <div
                    className={s.ticket_form_container}>
                        <DropdownList event={ event }/>
                </div>            
            </div>            
        </main>
    ) 
}