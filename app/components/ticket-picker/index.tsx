"use client";
import { Events } from "@/app/types/events";
import s from "./ticket-piker.module.scss";
import { useState } from "react";
import { TicketType } from "@/app/types/ticket";

export default function TicketsPicker({ event }: { event: Events }) {
  const [globalTotal, setGlobalTotal] = useState<number>(0)
  const [quantityValue, setQuantityValue] = useState<number>(0)
  const [currentPrice, setCurrentPrice] =  useState<number>(0)
  const [currentTicketType, setCurrentTicketType] = useState<string>("")

  const calculateTotal = (q: number) => {
    let newTotal = q * currentPrice
    setGlobalTotal(newTotal)
    console.log('total', newTotal)
  }

  const handleQuantityChange = (q: number) => {
    setQuantityValue(q)
    console.log('q value', q)
    console.log('state quantity', quantityValue)
    calculateTotal(q)
  };

  const handleTicketChange = (type: string) => {
    setQuantityValue(0)
    setGlobalTotal(0)
    setCurrentTicketType(type)
    let ticket = event.ticketsTypeList.filter((e: TicketType) => e._id === type)
    console.log('ticket', ticket)
    console.log('price', ticket[0].price)
    console.log('state price', currentPrice)
    console.log('type', type)
    console.log('state type', currentTicketType)
    setCurrentPrice(ticket[0].price)
  };
  


  return (
    <div className={s.price_grid}>
      <div className={`${s.ticket_form} d-flex`}>
        <div className="input-area">
          <label htmlFor="ticketType">Tipo de entrada</label>
          <div className="select-wrapper">
            <select
              className="custom-select"
              value={currentTicketType}
              name="ticketType"
              id="ticketType"
              onChange={(e) => handleTicketChange(e.target.value)}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {event.ticketsTypeList.map((ticket: TicketType) => (
                <option value={ticket._id} key={ticket._id}>
                  {ticket.type} - $ {ticket.price}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-area">
          <label htmlFor="quantity">Cantidad</label>
          <div className="select-wrapper">
            <select
              value={quantityValue}
              className="custom-select"
              name="quantity"
              id="quantity"
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
            >
              <option value={0} disabled>
                0
              </option>
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>Total: $ {globalTotal}</div>
    </div>
  );
}
