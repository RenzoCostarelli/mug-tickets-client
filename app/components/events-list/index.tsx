import EventCard from "../event-card"

import s from './events-lists.module.scss'

export default function EventsList({props}: any) {
    console.log('props',props)
    return (
        <div className={s.cardsContainer}>
          {
          props.map((da: {eventType: string, showInfo: any}) => (
            <EventCard showInfo={da.showInfo}/>
          ))
          }
        </div>
    )
}