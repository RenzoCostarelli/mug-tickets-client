"use client";
import { Events } from "@/app/types/events";
import { useState } from "react";
import { TicketType } from "@/app/types/ticket";
import { useRouter } from 'next/navigation';
import  useStore  from '@/lib/store'
import s from "./ticket-piker.module.scss";

interface Ticket {
  event: string;
  purchaser: {
    purchaserFirstName: string;
    purchaserLastName: string;
    purchaserId: string;
    purchaserDni: number;
    purchaserEmail: string;
  };
  attendee: {
    attendeeFirstName: string;
    attendeeLastName: string;
    attendeeDni: number;
  };
  validated: boolean;
  purchased: boolean;
  purchaseDate: string;
  validationDate: string | null;
  ticketNumber: string;
  ticketId: string;
};

export default function TicketsPicker({ event }: { event: Events }) {
  const [globalTotal, setGlobalTotal] = useState<number>(0);
  const [quantityValue, setQuantityValue] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentTicketType, setCurrentTicketType] = useState<string>("");
  const { setTicketIds, ticketIds } = useStore()
  const { push } = useRouter();

  const calculateTotal = (q: number) => {
    let newTotal = q * currentPrice;
    setGlobalTotal(newTotal);
  };

  const handleQuantityChange = (q: number) => {
    setQuantityValue(q);
    calculateTotal(q);
  };

  const handleTicketChange = (type: string) => {
    setQuantityValue(0);
    setGlobalTotal(0);
    setCurrentTicketType(type);
    let ticket = event.ticketsTypeList.filter(
      (e: TicketType) => e._id === type
    );
    setCurrentPrice(ticket[0].price);
  };

  async function createNewTicket() {
    let data = {
      tickets: [
        {
          event: "64c97c216239656a51f8a4d7",
          purchaser: {
            purchaserFirstName: "Robert",
            purchaserLastName: "Benegui",
            purchaserEmail: "benegui@yopmail.com",
            purchaserDni: 123123123,
          },
          attendee: {
            attendeeFirstName: "Renzo",
            attendeeLastName: "Leonard",
            attendeeDni: 12234079,
            email: "test@test.com",
          },
        },
        {
          event: "64c97c216239656a51f8a4d7",
          purchaser: {
            purchaserFirstName: "Roberti",
            purchaserLastName: "Benegui",
            purchaserEmail: "benegui@yopmail.com",
            purchaserDni: 123123123,
          },
          attendee: {
            attendeeFirstName: "Renzo",
            attendeeLastName: "Leonard",
            attendeeDni: 12234079,
            email: "test@test.com",
          },
        },
      ],
    };

    fetch("http://localhost:3000/api/ticketstest", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data.savedTickets[0].ticketId);
        const ids = data.savedTickets.map((ticket: Ticket) => ticket.ticketId);
        console.log('ticket', ids)
        setTicketIds(ids);
        console.log(ticketIds)
        push(`/eventos/ticket/${data.savedTickets[0].ticketId}`)
      })
      .catch((error) => {
        console.error('ERRORRR', error);
      });
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
      <div className="cta_area">
        <button onClick={createNewTicket}>Continuar</button>
      </div>
    </div>
  );
}
