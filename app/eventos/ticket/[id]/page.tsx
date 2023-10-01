import EventCardMain from "@/app/components/event-card-main";
import s from "./ticket.module.scss";
import Image from "next/image";
import { MpButton } from "@/app/components/mp-button";
import { Product } from "@/app/types/product";
import OrderDataForm from "@/app/components/order-user-data-fom";


async function getOffer(id: string) {
  const res = await fetch(`${process.env.apiUrl}/orders/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
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


export default async function BuyTicket({params}: {params: { id: string }}) {
  const { id } = params;
  const { order } = await getOffer(id);
  let event = order.event;
  console.log('buy ticket form')

  const date = order.ticketType.date;
  const dateStr = formatDate(date);
  const timeStr = formatTime(date)

  const calculateTotal = (pri: number, qty: number) => {
    let total = pri * qty;
    return total;
  };

  return (
    <main>
      <div className={s.header}>
        {
          <Image
            src={event.image ?? "/images/flyer__test.jpg"}
            alt={event.title ?? "Mug"}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        }
      </div>
      <div className={s.event_wrapper}>
        <EventCardMain event={event} />
        <div className={s.container}>
          <div className={`${s.wrapper}`}>
            <h1 className="special-title">
              Confirmar <span>compra</span>
            </h1>
            <p className={s.info_area}>
              Tu reserva es por tiempo limitado. <br /> Una vez vencida no se
              podrá realizar la compra
            </p>
            <h1 className="backLine-title">Datos de tu reserva</h1>
            <div className={s.info_grid}>
              <div className={s.ticket_type}>
                <span className="fw-bold">{order.ticketType.type}</span> | {dateStr} {timeStr}hs
              </div>
              <div className={s.quantity}>{order.quantity}</div>
              <div className={s.price_table}>
                <div className={`${s.row} ${s.accent}`}>
                  <p className="fw-bold">Total</p>
                  <p>
                    ${" "}
                    {calculateTotal(
                      order.ticketType.price,
                      order.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <p className={s.info_area}>
              TU RESERVA VENCE EN <span>14:59</span>
            </p>
            <h1 className="backLine-title">Tus datos</h1>
            <p className={s.info_area}>
              Una vez que completes tus datos podrás realizar el pago.
              <br />
              Vas a recibir los Tickets en tu casilla de e-mail.
            </p>
            <OrderDataForm order={order}/>
          </div>
        </div>
      </div>
    </main>
  );
}
