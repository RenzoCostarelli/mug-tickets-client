"use client";
import { useEffect, useState } from "react";
import s from "./list.module.scss";
import { Buyer } from "@/app/types/buyer";
import QrReader from "../qr-reader";

export interface Attendee {
  _id: string;
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
  const [isValidating, setIsValidating] = useState<boolean>(false)
  const [isCameraOpen, setCameraOpen] = useState<boolean>(false)
  const [tickets, setTickets] = useState(ticketsList);
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


  async function validateTicket(id: string) {
    setIsValidating(true)
    try {
      const response = await fetch(`/api/validate/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const res = await response.json();
      if (res.ok === false) {
        console.error("Error al validar");
        return;
      }
      setTickets((prevTickets: any) => {
        return prevTickets.map((ticket: Attendee) => {
          if (ticket._id === id) {
            return { ...ticket, validated: true };
          }
          return ticket;
        });
      });
      setIsValidating(false)
    } catch (error) {}
  }

  return (
    <>
    <div className={s.table_wrapper}>
      {isCameraOpen && (
        <QrReader />
      )}
      <div className={s.filters}>
        <button className={s.camera_button} onClick={e => setCameraOpen(true)}>Abrir camara</button>
        <div className={s.input_filter}>
          <input
            type="text"
            placeholder="Filtrar por DNI"
            value={filterDNI}
            className={s.search_input}
            onChange={(e) => setFilterDNI(e.target.value)}
          />
        </div>

      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Nro</th>
            <th>Dni</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTickets.map((ticket: Attendee, index: number) => (
            <tr
              key={index}
              className={`${ticket.validated ? s.validated : s.not_validated}`}
            >
              <td>
                <label className={`${s.switch} ${isValidating ? s.disabled : ''}`}>
                  <input
                    type="checkbox"
                    checked={ticket.validated}
                    onChange={() => validateTicket(ticket._id)}
                    className={isValidating ? s.disabled : ''}
                    disabled={isValidating}
                  />
                  <span className={`${s.slider} ${s.round}`}></span>
                </label>
              </td>
              <td className={s.name_td}>{ticket.name}</td>
              <td>{ticket.ticketNumber}</td>
              <td>{ticket.dni}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.pagination_wrapper}>
        {totalItems > itemsPerPage && (
          <ul className={s.pagination}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={currentPage === index + 1 ? s.active : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
    </>
  );
}
