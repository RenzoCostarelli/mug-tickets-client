"use client";
import { Events } from "@/app/types/events";
import { useState } from "react";
import { TicketType } from "@/app/types/ticket";
import { useRouter } from "next/navigation";
import s from "./ticket-piker.module.scss";

interface offersBody {
    eventId: string,
    quantity: number,
    ticketType: {
        price: number,
        date: string,
        type: string
    },
    expirationDate: string
}

export default function TicketsPicker({ event }: { event: Events }) {
  
  const [globalTotal, setGlobalTotal] = useState<number>(0);
  const [quantityValue, setQuantityValue] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTicketType, setCurrentTicketType] = useState<string>("");
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
      (e: TicketType) => e.type === type
    );
    setCurrentPrice(ticket[0].price);
    setCurrentDate(ticket[0].date!)
  };

  async function createNewOffer() {
    let data: offersBody = {
      eventId: event.eventId,
      quantity: quantityValue,
      ticketType: {
        price: currentPrice,
        date: currentDate,
        type: currentTicketType,
      },
      expirationDate: "2023-12-29T20:30:00.000Z",
    };

    fetch("http://localhost:3000/api/offer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        push(`/eventos/ticket/${data.savedNewOrder._id}`);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  }

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
                <option value={ticket.type} key={ticket._id}>
                  {ticket.type} {ticket.date} - $ {ticket.price}
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
        <button onClick={createNewOffer}>Continuar</button>
      </div>
    </div>
  );
}
