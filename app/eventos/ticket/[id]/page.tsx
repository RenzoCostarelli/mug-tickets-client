import EventCardMain from "@/app/components/event-card-main";
import s from "./ticket.module.scss";
import Image from "next/image";
import { QuerystringParser } from "formidable/parsers";

async function getEvent(id: string) {
  const res = await fetch(`${process.env.apiUrl}/orders/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log('res', res)
  return res.json();
}

export default async function BuyTicket({params}: { params: { id: string }}) {
  const { id } = params;
  const { order } = await getEvent(id);
  let event = order.event

  const date = new Date(order.ticketType.date);
  const dateStr = date.toLocaleDateString()
  const timeStr = `${date.toLocaleTimeString().split(":")[0]}:${date.toLocaleTimeString().split(":")[1]}`;

  const calculateTotal = (pri: number, qty:number) => {
    let total = pri * qty
    return total
  } 

  console.log('order', order)
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
            <h1>Datos de tu reserva</h1>
            <div className={s.info_grid}>
              <div className={s.ticket_type}>{ order.ticketType.type } {dateStr} { timeStr }</div>
              <div className={s.quantity}>{order.quantity}</div>
              <div className={s.price_table}>
                {/* <div className={s.row}>
                  <p>Subtotal</p>
                  <p>$ 12333</p>
                </div> */}
                <div className={`${s.row} ${s.accent}`}>
                  <p>Total</p>
                  <p>$ {calculateTotal(order.ticketType.price, order.quantity)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.wrapper}>
            <h1>Tus datos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sapiente at incidunt deleniti libero labore aliquam quibusdam
              voluptatum qui quos.
            </p>
            <div className={s.form_wrapper}>
              <form action="/api/tickets" method="POST" className={s.buy_form}>
                <div className={s.columns}>
                  <div className={s.form_area}>
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Nombre"
                    />
                  </div>
                  <div className={s.form_area}>
                    <label htmlFor="dni">DNI</label>
                    <input
                      type="text"
                      name="dni"
                      id="dni"
                      required
                      placeholder="DNI"
                    />
                  </div>
                  <div className={s.form_area}>
                    <label htmlFor="last-name">Apellido</label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      placeholder="Apellido"
                    />
                  </div>
                  <div className={s.form_area}>
                    <label htmlFor="phone">Telefono</label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      required
                      placeholder="Telefono"
                    />
                  </div>
                </div>
                <div className={s.form_area}>
                  <label htmlFor="email">E-MAIL</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email"
                  />
                </div>
                <div className={s.form_area_inline}>
                  <input type="checkbox" name="terms" id="terms" required />
                  <label htmlFor="terms">
                    He leido y acepto los Terminos y condiciones
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
