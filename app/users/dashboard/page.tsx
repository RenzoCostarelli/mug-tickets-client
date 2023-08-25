
// pagina con historial de tickets comprados + datos del usuario (nombre, apellido, etc)
// mostrar nombre de usuario logueado

import s from '@/app/page.module.scss';
import CardInfo from '@/app/components/card-info';

export default async function Dashboard() {
    return(
        <>
            <div className={s.next_events}>
                <div className="">
                    <h1>User Dashboard</h1>
                    <CardInfo/>
                </div>
            </div>
        </>
    )
}