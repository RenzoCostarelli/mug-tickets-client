import { TicketTypeData } from "./ticket";

export type EventData = {
    eventId: string
    title: string
    description: string
    address: string
    eventType: string
    image: string
    ticketsAvailableOnline: number
    hasLimitedPlaces: boolean
    price: number
    purchasedTicketsList: string[]
    ticketsTypeList: TicketTypeData[]
}