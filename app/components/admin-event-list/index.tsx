
import AdminEventCard from "@/app/components/admin-event-card"
import s from './events-lists.module.scss'

// all events

export default function AdminEventsList({ da }: { da: any}) {
  
    return (
      <div className={s.cards_container}>
          {            
            da && (da.events.map((da: { eventType: string }) => (
              <AdminEventCard showInfo={ da }/>
            )))
          }
        </div>
    )
}