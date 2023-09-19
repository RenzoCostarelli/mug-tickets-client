import { create } from 'zustand';
import { TicketTypeData } from '../types/ticket';

type StoreTicketTypes = {
  tickets: TicketTypeData[];
  addTicket: (ticket: TicketTypeData) => void;
  removeTicket: (id: string) => void
  initTickets: (array: TicketTypeData[]) => void
};

const useTicketsStore = create<StoreTicketTypes>((set) => ({
  tickets: [],
  addTicket: (newTicket) => set((state) => ({ tickets: [...state.tickets, newTicket] })),
  removeTicket: (id) => set((state) => ({ tickets: state.tickets.filter(ticket => ticket._id !== id), })),
  initTickets: (ticketsList) => set((state) => ({ tickets: ticketsList  })),
}));

export default useTicketsStore;