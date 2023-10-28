import AttendeeList from '../components/attendee-list';
import ValidatorContainer from '../components/validator-container';
import ValidatorDialog from '../components/validator-token-form';
import s from './validar.module.scss'
import QrReader from "@/app/components/qr-reader";


async function getEventByToken() {
    // devuelve un eventId
    return
}

async function getTicketsList() {
    const res = await fetch(`${process.env.apiUrl}/events/query?_id=${process.env.MAIN_EVENT}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data from tickets");
    }
    return res.json();
}


export default async function ValidationPage() {
    const ticketsList = await getTicketsList();
    const {title, tickets} = ticketsList.event
    const ticketsPurchased = tickets.length
    
    return(   
        <main className={s.main}>
            <ValidatorContainer />
            {/* <QrReader /> */}           
        </main>
    )
}