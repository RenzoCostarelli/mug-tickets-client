
import AdminEventCard from "@/app/components/admin-event-card"
import s from './events-lists.module.scss'

export default function AdminEventsList({ da }: { da: any}) {
  
    return (
      <div className={s.cards_container}>
          {            
            da && (da.events.map((da: { eventType: string }, index: number) => (
              <AdminEventCard showInfo={ da } key={index}/>
            )))
          }
        </div>
    )
}