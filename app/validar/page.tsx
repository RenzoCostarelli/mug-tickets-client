// ESTA ES LA PAGINA PARA VALIDAR LOS TICKETS
// PEDIR TOKEN
// EVENT: BUSCAR POR TOKEN => TIENE QUE DEVOLVER INFO SOBRE 
// EL EVENTO (CANTIDAD DE ENTRADAS VALIDIADS, ENTRADAS VENDIDAS, 
// LISTA DE PERSONAS QUE INGRESARON. TODA LA INFO ESTÁ EN EL GET DE TICKETS)

import AttendeeList from '../components/attendee-list';
import s from './validar.module.scss'
import QrReader from "@/app/components/qr-reader";


async function getEventByToken() {
    // devuelve un eventId
    return
}

async function getTicketsList() {
    const res = await fetch(`${process.env.apiUrl}/tickets/query/?event=651f0fb4feec3285525b3a8c`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data from tickets");
    }
    return res.json();
}

export default async function ValidationPage() {
    const ticketsList = await getTicketsList();
    const ticketsPurchased = ticketsList.tickets.length
    const { title } = ticketsList.tickets[0].event
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
                    <AttendeeList ticketsList={ticketsList}/>
                </section>
            </div>
        </main>
    )
}