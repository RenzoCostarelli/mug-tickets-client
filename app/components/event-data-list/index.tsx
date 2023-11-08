import { EventInfo, Events } from "@/app/types/events";
import AttendeeList from "../attendee-list";
import s from "./event-data-list.module.scss";
import { TicketType } from "@/app/types/ticket";

export interface EventDataListProps {
  eventData: EventInfo;
}

export default function EventDataList(props: EventDataListProps) {
  const e = props.eventData.event;
  const { tickets, ticketsTypeList } = e;
  return (
    <div className={s.wrapper}>
      <section className={s.event_info}>
        <h1>{e.title}</h1>
        <div className={s.details}>
          <ul>
            <li>
              <span>Entradas vendidas online:</span> {tickets!.length}
            </li>
            {ticketsTypeList.map((t, index) => (
              <li key={index}>
                <span>{t.type}:</span> {t.ticketsPurchased}
              </li>
            ))}
            <li>
              <span>Ingresaron:</span> 0
            </li>
            <li>
              <span>No ingresaron:</span> 0
            </li>
          </ul>
        </div>
      </section>
      <section className={s.tools}>
        <div className={s.tool_bar}>
          <button>Escanear QR</button>
        </div>
      </section>
      <section className={s.attendees_list}>
        <AttendeeList ticketsList={tickets} />
      </section>
    </div>
  );
}
