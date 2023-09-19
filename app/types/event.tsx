import { TicketTypeData } from "./ticket";

export type EventData = {
    eventId: string;
    title: string;
    description: string;
    address: string;
    eventType: string;
    ticketsAvailableOnline: number;
    hasLimitedPlaces: boolean;
    ticketsTypeList: TicketTypeData[]
}