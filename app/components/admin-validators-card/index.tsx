'use client'
import { Validador } from '@/app/types/validador'
import s from './validators-card.module.scss'
import { formatDate } from '@/app/utils/forrmatDate'
import { ToastContainer, toast } from 'react-toastify'


const copyToClipboard = async(text: string, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    try {
        await navigator.clipboard.writeText(text)
        toast.success('Token copiado', { autoClose: 1500 ,closeOnClick: true,
            pauseOnHover: false})     
    } catch (error) {
        console.error('Fallo al copiar: ', error)
    }
}
export default function ValidatorCard({props, onDelete}: {props: Validador, onDelete: (validadorId: string) => void}){
    const date = formatDate(new Date(props.creationDate))
    
    return (
        <>
        <div className={s.card}>
            <div className={s.card_column}>
                <div className={s.token} onClick={(e) =>copyToClipboard(props.token, e)}>{props.token}</div>
                <div className={s.date}><span>Fecha de creación: </span>{date}</div>
            </div>
            <div className={s.tool_bar}>
                <button className={s.delete} onClick={() => onDelete(props._id!)}><img className={s.icon} src='/images/icons/eliminar.svg' alt="Icono de eliminar" /></button>
            </div>
        </div>
        <ToastContainer />
        </>
        
    )
}