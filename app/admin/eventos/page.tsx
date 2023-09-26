import EventForm from "@/app/components/dashboard-event-form";
import DropdownList from "@/app/components/dashboard-form-wrapper";
import { EventData } from "@/app/types/event";
import s from './page.module.scss';

const EVENT_INITIAL_DATA = {
    eventId: "",
    title: "",
    description: "",
    address: "",
    image:"",
    eventType: "",
    price: 0,
    ticketsAvailableOnline: 0,
    hasLimitedPlaces: false,
    ticketsTypeList: [],
    purchasedTicketsList: []
}

export default async function AdminEvents() {
    const event: EventData = EVENT_INITIAL_DATA;

    return(
        <main className={s.main}>
            <div 
                className={s.title_header}>
                <h2 style={{ 
                    marginBottom:2,
                    marginTop: 2 ,
                    textTransform: 'uppercase',
                    }}>
                    CREAR EVENTO
                </h2>
            </div>            
            <div
                className={s.main_container}>
                <div
                    className={s.event_form_container}>
                        <EventForm event={ event }/>
                        {/**<DropdownList event={ event }/> */}
                </div>
            </div>                        
        </main>
    )
}