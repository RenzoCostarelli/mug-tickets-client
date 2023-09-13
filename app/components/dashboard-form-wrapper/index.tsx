'use client'

import { useState } from "react";
import TicketForm from "../dashboard-ticket-form"
import { TicketTypeData } from "@/app/types/ticket";
import style from "./page.module.scss"

const TICKET_INITIAL_DATA = {
    eventId: "",
    _id: "",
    type: "",
    date: "",
    hour: "",
    price: 0,
    ticketsAvailableOnline: 0,
    ticketPurchaseDeadline: ""
}

export default function DropdownList({ event }: any) {    
    const [data, setData] = useState<TicketTypeData[]>(event.ticketsTypeList);

    const newTicket: TicketTypeData = TICKET_INITIAL_DATA;
    newTicket.eventId = event.eventId ?? '';

    return (  
        <div 
            style={{
                border: '0.5px solid #888',
                borderRadius: '1rem',
                padding: 15,
            }}>
                <div style={{                    
                    maxHeight: '68vh',
                    overflowX: 'hidden',
                    overflowY: 'scroll', 
                }}>
                    { 
                        data.length? data.map((ticket: TicketTypeData) => (
                            <TicketForm ticket={ ticket }/>
                        )) : (<TicketForm ticket={ newTicket }/>)
                    }
                </div>
            <button style={{
                marginTop: 15,
            }}>+ Ticket</button>
        </div>
    )
}