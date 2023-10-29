import { EventInfo, Events } from "@/app/types/events";
import AttendeeList from "../attendee-list";
import s from './event-data-list.module.scss'
import { TicketType } from "@/app/types/ticket";

interface EventDataListProps {
    eventData: EventInfo;
  }

export default function EventDataList(props: EventDataListProps) {
  const e = props.eventData.event
  const tickets = e.tickets
  console.log('ee', tickets)
  return (
    <div className={s.wrapper}>
      <section className={s.event_info}>
        <h1>{e.title}</h1>
        <ul>
          <li>
            <span>Entradas vendidas online:</span> {tickets!.length}
          </li>
          <li>
            <span>Ingresaron:</span> 0
          </li>
          <li>
            <span>No ingresaron:</span> 0
          </li>
        </ul>
      </section>
      <section className={s.tools}>
        <div className={s.tool_bar}>
          <button>Escanear QR</button>
          <button>Ingresar DNI</button>
        </div>
      </section>
      <section className={s.attendees_list}>
        <AttendeeList ticketsList={tickets} />
      </section>
    </div>
  );
}
