import Image from "next/image";
import s from "./evento.module.scss";
import TicketsPicker from "@/app/components/ticket-picker";
import EventCardMain from "@/app/components/event-card-main";
import Notificator from "./components/notificator";

async function getEventById(id: string) {
  const res = await fetch(`${process.env.apiUrl}/events/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata = {
    title: 'MUG | Entradas online',
    description: 'Plataforma de venta de tickets online del MUG',
}

export default async function Event() {
  const { event } = await getEventById('6518771168d2abd27512b941');
  
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
        <EventCardMain event={event}/>
        <div className={s.buy_area}>
        {event!.ticketsTypeList && event!.ticketsTypeList.length > 0 && (
            <>
              <h1 className="special-title">Comprá tu <span>entrada</span></h1>
              <TicketsPicker event={event} />
            </>
        )}
        </div>
      </div>
      <Notificator />
    </main>
  );
}
