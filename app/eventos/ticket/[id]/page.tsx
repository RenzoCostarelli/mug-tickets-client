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


export default async function BuyTicket({params}: {params: { id: string }}) {
  const { id } = params;
  const { order } = await getOffer(id);
  let event = order.event;


  const date = new Date(order.ticketType.date);
  const dateStr = date.toLocaleDateString();
  const timeStr = `${date.toLocaleTimeString().split(":")[0]}:${
    date.toLocaleTimeString().split(":")[1]
  }`;

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
                {order.ticketType.type} {dateStr} {timeStr}
              </div>
              <div className={s.quantity}>{order.quantity}</div>
              <div className={s.price_table}>
                <div className={`${s.row} ${s.accent}`}>
                  <p>Total</p>
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
            {/* <div className={s.form_wrapper}>
              <form className={s.buy_form}>
                <div className={s.row}>
                  <div className={s.form_area}>
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="custom-input"
                      required
                      placeholder="Nombre"
                    />
                  </div>
                  <div className={s.form_area}>
                    <label htmlFor="last-name">Apellido</label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="custom-input"
                      required
                      placeholder="Apellido"
                    />
                  </div>

                </div>
                <div className={s.row}>
                <div className={s.form_area}>
                    <label htmlFor="dni">DNI</label>
                    <input
                      type="text"
                      name="dni"
                      id="dni"
                      className="custom-input"
                      required
                      placeholder="DNI"
                    />
                  </div>
                  <div className={s.form_area}>
                    <label htmlFor="phone">Telefono</label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      className="custom-input"
                      required
                      placeholder="Telefono"
                    />
                  </div>
                </div>
                <div className={`${s.form_area} ${s.full}`}>
                  <label htmlFor="email">E-MAIL</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="custom-input"
                    required
                    placeholder="email"
                  />
                </div>
                <div className={s.form_area_inline}>
                  <input type="checkbox" name="terms" id="terms" required />
                  <label htmlFor="terms">
                    He leido y acepto los <span>Terminos y condiciones</span>
                  </label>
                </div>
                <div className={s.form_area_inline}>
                  <MpButton prod={orderMpInfo} offerId={order._id} isEnabled={false}/>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
