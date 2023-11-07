import { EventInfo, Events } from "@/app/types/events";
import AttendeeList from "../attendee-list";
import s from './event-data-list.module.scss'
import { TicketType } from "@/app/types/ticket";
import { Payment, columns } from "../attendee-list/columns";
import { DataTable } from "../attendee-list/data-table";

interface EventDataListProps {
    eventData: EventInfo;
  }

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ]
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
        {/* <AttendeeList ticketsList={tickets} /> */}
        <DataTable columns={columns} data={data}/>
      </section>
    </div>
  );
}
