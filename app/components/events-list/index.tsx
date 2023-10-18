import s from './events-lists.module.scss';
import EventCard from "../event-card";
import { Events } from '@/app/types/events';

export default function EventsList({ events } : {events : Events[]}) {
    return (
        <div className={s.cardsContainer}>
          {
            events.map((event) => (
              <EventCard showInfo={event} key={event.eventId}/>
            ))
          }
        </div>
    )
}