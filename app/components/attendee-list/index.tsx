"use client";
import { useEffect, useRef, useState } from "react";
import s from "./list.module.scss";
import { Buyer } from "@/app/types/buyer";
import QrReader from "../qr-reader";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

const Spinner = () => {
  return (
    <div className={s.loader_wrapper}>
      <h4>Validando</h4>
      <div className={s.lds_grid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default function AttendeeList({ ticketsList }: { ticketsList: any }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [isCameraOpen, setCameraOpen] = useState<boolean>(false);
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
    setIsValidating(true);
    try {
      const response = await fetch(`/api/validate/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const res = await response.json();
      console.log("res", res);
      if (res.ok === false) {
        toast.error(res.error, {
          autoClose: 500,
          closeOnClick: true,
          pauseOnHover: false,
        });
        console.error("Error al validar", res);
        setIsValidating(false);
        if (dialogRef.current!.open) {
          handleCloseModal()
        }
        return;
      }
      if (res.ok === true) {
        toast.success("Ticket validado", {
          autoClose: 500,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }
      setTickets((prevTickets: any) => {
        return prevTickets.map((ticket: Attendee) => {
          if (ticket._id === id) {
            return { ...ticket, validated: true };
          }
          return ticket;
        });
      });
      if (dialogRef.current!.open) {
        handleCloseModal()
      }
      setIsValidating(false);
    } catch (error) {}
  }

  const handleCloseModal = () => {
    dialogRef.current!.close();
    setCameraOpen(false);
  };
  const handleOpenModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setCameraOpen(true);
    }
  };
  return (
    <>
      <div className={s.table_wrapper}>
        <div className={s.filters}>
          <button className={s.camera_button} onClick={handleOpenModal}>
            Abrir camara
          </button>
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
                className={`${
                  ticket.validated ? s.validated : s.not_validated
                }`}
              >
                <td>
                  <label
                    className={`${s.switch} ${isValidating ? s.disabled : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={ticket.validated}
                      onChange={() => validateTicket(ticket._id)}
                      className={isValidating ? s.disabled : ""}
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
        <dialog className={s.scanner_dialog} ref={dialogRef}>
          {/* <button onClick={handleCloseModal} className={s.close}>✖</button> */}
          {isValidating && <Spinner />}
          {isCameraOpen && <QrReader onOk={validateTicket} onClose={handleCloseModal}/>}
        </dialog>
      </div>
      <ToastContainer />
    </>
  );
}
