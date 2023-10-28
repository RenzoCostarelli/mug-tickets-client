import { TicketType } from "./ticket";
export interface Events {
    eventId: string;
    title: string;
    description: string;
    address: string;
    eventType: string;
    ticketsAvailableOnline: number;
    hasLimitedPlaces: boolean;
    ticketsTypeList: TicketType[];
    image: string;
    price: number;
    purchasedTicketsList: string[];
    tickets?: TicketType[];
}

export interface EventInfo {
    eventId: string;
    title: string;
    description: string;
    address: string;
    eventType: string;
    ticketsAvailableOnline: number;
    hasLimitedPlaces: boolean;
    tickets: TicketType[];
    purchasedTicketsList: string[];
    event: Events;
}