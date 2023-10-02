"use client";
import { Events } from "@/app/types/events";
import { useState } from "react";
import { TicketType } from "@/app/types/ticket";
import { useRouter } from "next/navigation";
import s from "./ticket-piker.module.scss";
import useStore from "@/app/store/formStore";

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

const formatTime = (date: any): string => {
  const time = date.split('T')[1];
  return `${time.split(':')[0]}:${time.split(':')[1]}`;
}

const formatDate = (date: any): string => {
  const d = new Date(date)
  const formatedDate = new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'medium',
    timeZone: 'America/Buenos_Aires'
  }).format(d)
  return formatedDate
}

export default function TicketsPicker({ event }: { event: Events }) {
  
  const [globalTotal, setGlobalTotal] = useState<number>(0);
  const [quantityValue, setQuantityValue] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTicketType, setCurrentTicketType] = useState<string>("");
  const setSubmitting = useStore((state) => state.setSubmitting);
  const isSubmitting = useStore((state) => state.isSubmitting);
  const { push } = useRouter();
  let formatedDate = "";
  let timeStr = "";

  // if (event!.ticketsTypeList && event!.ticketsTypeList.length > 0) {
  //   const date = new Date(event!.ticketsTypeList[0].date);
    
  //   formatedDate = new Intl.DateTimeFormat('es-AR', {
  //     dateStyle: 'medium',
  //     timeZone: 'America/Buenos_Aires'
  //   }).format(date)//date.toLocaleDateString();
  //   timeStr = formatTime(event!.ticketsTypeList[0].date);
  // }

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
    setSubmitting(true)
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

    fetch("/api/offer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        push(`/eventos/ticket/${data.savedNewOrder._id}`);
        setSubmitting(false)
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  }

  return (
    <div className={s.price_grid}>
      <div className={`${s.ticket_form} d-flex`}>
        <div className={s.form_wrapper}>
          <div className="input-area">
            <label htmlFor="ticketType">Tipo de entrada</label>
            <div className="select-wrapper">
              <select
                className="custom-select"
                value={currentTicketType}
                name="ticketType"
                id="ticketType"
                onChange={(e) => handleTicketChange(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Seleccionar
                </option>
                {event.ticketsTypeList.map((ticket: TicketType) => (
                  <option value={ticket.type} key={ticket._id}>
                    {ticket.type} | {formatDate(ticket.date)} - {formatTime(ticket.date)}hs - $ {ticket.price}
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
                className={`custom-select ${s.select_number}`}
                name="quantity"
                id="quantity"
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                disabled={currentTicketType == "" || isSubmitting}
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
        <div className={s.form_footer}>
          <div className={s.total_label}>
           <span>Total: $ {globalTotal}</span>
          </div>
          <div className={s.cta_area}>
            <button onClick={createNewOffer} disabled={quantityValue == 0 || isSubmitting}>Continuar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
