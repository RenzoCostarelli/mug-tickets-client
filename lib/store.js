import { create } from 'zustand';

const useStore = create((set) => ({
    ticketIds: [],
    addTicketId: (ticketId) => set((state) => ({ ticketIds: [...state.ticketIds, ticketId] })),
    setTicketIds: (ticketIds) => set({ ticketIds })
}));

export default useStore;