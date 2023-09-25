import s from './events-lists.module.scss';
import EventCard from "../event-card";

export default function EventsList({ events } : {events : Event[]}) {
    return (
        <div className={s.cardsContainer}>
          {
            events.map((event) => (
              <EventCard showInfo={event}/>
            ))
          }
        </div>
    )
}