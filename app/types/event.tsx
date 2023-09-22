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
    ticketsTypeList: TicketTypeData[]
    price: number
    purchasedTicketsList: string[]
}