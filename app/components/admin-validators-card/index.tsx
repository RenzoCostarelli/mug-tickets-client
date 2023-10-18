'use client'
import { Validador } from '@/app/types/validador'
import s from './validators-card.module.scss'
import { formatDate } from '@/app/utils/forrmatDate'


const copyToClipboard = async(text: string, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    try {
        await navigator.clipboard.writeText(text)        
    } catch (error) {
        console.error('Failed to copy to clipboard: ', error)
    }
}
export default function ValidatorCard({props}: {props: Validador}){
    const date = formatDate(props.createdDate)
    
    return (
        <div className={s.card}>
            {/* <div className={s.title}>{props.eventTitle}</div> */}
            <div className={s.token} onClick={(e) =>copyToClipboard(props.token, e)}>{props.token} <img className={s.icon} src='/images/icons/share.svg' alt="Icono de copiar" /></div>
            <div className={s.date}><span>Token creado: </span>{date}</div>
            <div className={s.tool_bar}>
                <button className={s.delete}><img className={s.icon} src='/images/icons/eliminar.svg' alt="Icono de eliminar" /></button>
            </div>
        </div>
    )
}