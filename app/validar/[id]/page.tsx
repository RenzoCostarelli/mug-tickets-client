// ESTA ES LA PAGINA PARA VALIDAR LOS TICKETS
// PEDIR TOKEN
// EVENT: BUSCAR POR TOKEN => TIENE QUE DEVOLVER INFO SOBRE 
// EL EVENTO (CANTIDAD DE ENTRADAS VALIDIADS, ENTRADAS VENDIDAS, 
// LISTA DE PERSONAS QUE INGRESARON. TODA LA INFO ESTÁ EN EL GET DE TICKETS)

import AttendeeList from '../../components/attendee-list';
import s from './validar.module.scss'
import QrReader from "@/app/components/qr-reader";

async function getEventById(id: string) {
    const res = await fetch(`${process.env.apiUrl}/events/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function ValidationPage({ params }: { params: { id: string } }) {
    const { event } = await getEventById(params.id);
    console.log('event', event)
    const { ticketsPurchased, title} = event
    return(   
        <main className={s.main}>
            {/* <QrReader /> */}
            <div className={s.wrapper}>
                <section className={s.event_info}>
                    <h1>{ title }</h1>
                    <ul>
                        <li><span>Entradas vendidas online:</span> { ticketsPurchased }</li>
                        <li><span>Ingresaron:</span> 120</li>
                        <li><span>No ingresaron:</span> 12</li>
                    </ul>
                </section>
                <section className={s.tools}>
                    <div className={s.tool_bar}>
                        <button>Escanear QR</button>
                        <button>Ingresar DNI</button>
                    </div>
                </section>
                <section className={s.attendees_list}>
                    <AttendeeList />
                </section>
            </div>
        </main>
    )
}