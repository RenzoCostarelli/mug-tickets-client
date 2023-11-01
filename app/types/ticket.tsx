export interface TicketType {
    _id?: string;
    eventId: string;
    type: string;
    price: number;
    ticketId?: string;
    date?: string;
    hour?: string;
    isActive?: boolean;
    ticketsAvailableOnline?: number;
    ticketPurchaseDeadline?: string;
    ticketsPurchased?: number;
}
