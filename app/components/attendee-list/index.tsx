"use client";
import { useEffect, useState } from "react";
import s from "./list.module.scss";
import { Buyer } from "@/app/types/buyer";

export interface Attendee {
  name: string;
  dni: string;
  ticketType: string;
  ticketNumber?: number;
  email?: string;
  orderData?: { type: string };
  purchaser?: Buyer;
  validated?: boolean;
  tickets?: any;
}

export default function AttendeeList({ ticketsList }: { ticketsList: any }) {
  const tickets = ticketsList;
  const [filterDNI, setFilterDNI] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const filteredTickets = tickets.filter((ticket: Attendee) =>
    ticket.dni.includes(filterDNI)
  );

  const totalItems = filteredTickets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Filter by DNI"
        value={filterDNI}
        onChange={(e) => setFilterDNI(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Ticket Number</th>
            <th>Dni</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTickets.map((ticket: Attendee, index: number) => (
            <tr key={index}>
              <td className={`${ticket.validated ? s.validated : s.not_validated}`}>Estado</td>
              <td>{ticket.name}</td>
              <td>{ticket.ticketNumber}</td>
              <td>{ticket.dni}</td>
              {/* <td>{ticket.ticketType.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {totalItems > itemsPerPage && (
          <ul className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <div className={s.info_grid}>
        <div className={s.table_body}>
        <div className={`${s.table_row} ${s.table_head}`}>
        <div className={`${s.name} ${s.sort_button}`}>Nombre</div>
            <div className={`${s.dni} ${s.sort_button}`}>DNI</div>
            <div className={`${s.tipo} ${s.sort_button}`}>Nro</div>
        </div>
        {ticketsList.map((attendee: Attendee) => (
            <div key={attendee.ticketNumber} className={`${s.table_row} ${attendee.validated ? s.validated : s.not_validated}`}>
                <div className={s.name}>{attendee.name}</div>
                <div className={s.dni}>{attendee.dni}</div>
                <div className={s.tipo}>{attendee.ticketNumber}</div>
            </div>
        ))}
        </div>
    </div> */}
    </>
  );
}
