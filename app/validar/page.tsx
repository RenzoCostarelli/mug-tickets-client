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
    const res = await fetch(`${process.env.apiUrl}/events/query/?_id=651f0fb4feec3285525b3a8c`, {
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
            {/* <QrReader /> */}
            <div className={s.wrapper}>
                <section className={s.event_info}>
                    <h1>{ title }</h1>
                    <ul>
                        <li><span>Entradas vendidas online:</span> { ticketsPurchased }</li>
                        <li><span>Ingresaron:</span> 0</li>
                        <li><span>No ingresaron:</span> 0</li>
                    </ul>
                </section>
                <section className={s.tools}>
                    <div className={s.tool_bar}>
                        <button>Escanear QR</button>
                        <button>Ingresar DNI</button>
                    </div>
                </section>
                <section className={s.attendees_list}>
                    <AttendeeList ticketsList={tickets}/>
                </section>
                {/* <ValidatorContainer /> */}
            </div>
        </main>
    )
}