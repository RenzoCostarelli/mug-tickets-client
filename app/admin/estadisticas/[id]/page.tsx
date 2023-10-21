import AttendeeList from '@/app/components/attendee-list';
import s from './estadisticas.module.scss'

interface EstadisticasProps {
    id: string;
}

async function getTicketsList(id: string) {
    const res = await fetch(`${process.env.apiUrl}/tickets/query?event=${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
    //   throw new Error("Failed to fetch data from tickets");
    }
    return res.json();
}

export default async function Estadisticas({params} : { params: EstadisticasProps } ) {
    const id = '651f0fb4feec3285525b3a8c'
    // const id = params.id
    const ticketsList = await getTicketsList(id);
    const ticketsPurchased = ticketsList.tickets.length
    const { title } = ticketsList.tickets[0].event
    return (
        <div className={`admin-container`}>
            <h1>Estadisticas del evento</h1>
            {ticketsList && (<>
            
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
            </>

            )}
        </div>
    )
}