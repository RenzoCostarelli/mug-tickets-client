import EventCard from "../event-card"

import s from './events-lists.module.scss'

// all events
async function getData() {
  const res = await fetch('https://mug-tickets-server.vercel.app/api/events/');
  if (!res.ok) {
    throw new Error('Failed to fetch dataa');
  } 
  return res.json();
}

export default async function EventsList({props}: any) {  

  const { events } = await getData();
    return (
        <div className={s.cardsContainer}>
          {
          events.map((da: {eventType: string}) => (
            <EventCard showInfo={da}/>
          ))
          }
        </div>
    )
}