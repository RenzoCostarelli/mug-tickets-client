import { create } from 'zustand';
import { TicketType } from '../types/ticket';

type StoreTicketTypes = {
  tickets: TicketType[];
  addTicket: (ticket: TicketType) => void;
  removeTicket: (id: string) => void
  initTickets: (array: TicketType[]) => void
};

const useTicketsStore = create<StoreTicketTypes>((set) => ({
  tickets: [],
  addTicket: (newTicket) => set((state) => ({ tickets: [...state.tickets, newTicket] })),
  removeTicket: (id) => set((state) => ({ tickets: state.tickets.filter(ticket => ticket._id !== id), })),
  initTickets: (ticketsList) => set((state) => ({ tickets: ticketsList  })),
}));

export default useTicketsStore;