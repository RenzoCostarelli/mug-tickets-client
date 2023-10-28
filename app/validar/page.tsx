import AttendeeList from '../components/attendee-list';
import ValidatorContainer from '../components/validator-container';
import ValidatorDialog from '../components/validator-token-form';
import s from './validar.module.scss'
import QrReader from "@/app/components/qr-reader";


async function getEventByToken() {
    // devuelve un eventId
    return
}

export default async function ValidationPage() {
   
    return(   
        <main className={s.main}>
            <ValidatorContainer />
            {/* <QrReader /> */}           
        </main>
    )
}