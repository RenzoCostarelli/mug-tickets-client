'use client'

import { useEffect, useState } from "react";
import TicketForm from "../dashboard-ticket-form"
import { TicketType } from "@/app/types/ticket";
import style from "./page.module.scss"
import EditTicketForm from "../edit-ticket-form";
import useTicketsStore from "@/app/store/ticketsTypeStore";

const TICKET_INITIAL_DATA = {
    eventId: "",
    ticketId: "",
    _id: "",
    type: "",
    date: "",
    hour: "",
    price: 0,
    ticketsAvailableOnline: 0,
    ticketPurchaseDeadline: ""
}

export default function DropdownList({ event }: any) {   
    const { ticketsTypeList = [] } = event;    

    const initTickets = useTicketsStore((state) => state.initTickets);    
    const tickets = useTicketsStore((state) => state.tickets);
    
    const newTicket: TicketType = { 
        ...TICKET_INITIAL_DATA, 
        eventId: event.eventId ?? '' 
    };

    useEffect(() => {
        initTickets(ticketsTypeList)
    }, [ticketsTypeList])

    return (  
        <>
            <div
                style={{
                    border: '0.5px solid #888',
                    borderRadius: 30,
                    padding: 15,
                    marginBottom: '1rem'
                }}>
                <TicketForm ticket={newTicket} />
            </div>
            <div 
                style={{
                    border: '0.5px solid #888',
                    borderRadius: '30px',
                    padding: 15,
                }}>                
                    <div>
                        
                        { 
                            tickets.map((ticket: TicketType, index: number) => (
                                <div 
                                    key={index} 
                                    style={{
                                        marginBottom: 10,
                                        border: '0.5px solid #888',
                                        padding: '15px',
                                        borderRadius: '15px'
                                    }}>
                                    <EditTicketForm key={index} index={index} ticket={ticket} />                               
                                </div>
                            ))
                        }
                        
                    </div>                
            </div>
        </>
    )
}