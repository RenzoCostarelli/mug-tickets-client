// ESTA ES LA PAGINA PARA VALIDAR LOS TICKETS
// PEDIR TOKEN
// EVENT: BUSCAR POR TOKEN => TIENE QUE DEVOLVER INFO SOBRE 
// EL EVENTO (CANTIDAD DE ENTRADAS VALIDIADS, ENTRADAS VENDIDAS, 
// LISTA DE PERSONAS QUE INGRESARON. TODA LA INFO ESTÁ EN EL GET DE TICKETS)

import AttendeeList from '../components/attendee-list';
import s from './validar.module.scss'
import QrReader from "@/app/components/qr-reader";

export default async function ValidationPage() {
    const eventTitle = 'Festi Mug tuki tuki'

    return(   
        <main className={s.main}>
            {/* <QrReader /> */}
            <div className={s.wrapper}>
                <section className={s.event_info}>
                    <h1>{ eventTitle }</h1>
                    <ul>
                        <li><span>Entradas vendidas online:</span> 132</li>
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