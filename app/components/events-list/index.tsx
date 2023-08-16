import EventCard from "../event-card"

import s from './events-lists.module.scss'

// all events

export default function EventsList({ props = [] }: any) {
    return (
        <div className={s.cardsContainer}>
          {
            props.map((da: {eventType: string}) => (
              <EventCard showInfo={da}/>
            ))
          }
        </div>
    )
}