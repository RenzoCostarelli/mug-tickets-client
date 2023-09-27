export interface TicketType {
    _id: string;
    eventId: string;
    type: string;
    price: number;
    ticketId?: string;
    date: string;
    hour?: string;
    ticketsAvailableOnline?: number;
    ticketPurchaseDeadline?: string;
}
