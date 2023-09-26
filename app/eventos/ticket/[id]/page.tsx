'use client'
import s from './ticket.module.scss'
import useStore from '@/lib/store'

export default function BuyTicket ({params}:{params: {id: string}}) {
    console.log('id', params.id)
    const {id} = params
    const ticketsIds = useStore()
    console.log('íd',ticketsIds)
    return (<>
        <h1>hola { id }</h1>
        <div>
            {/* {ticketsIds.map((id: string, index: number) => (
                <li key={index}>{id}</li>
            ))} */}
        </div>
    
    </>
    )
}