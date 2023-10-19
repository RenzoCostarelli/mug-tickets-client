import EventsList from '../components/events-list';
import s from './eventos.module.scss'

async function getData() {
  const res = await fetch(`${process.env.apiUrl}/events`);
  if (!res.ok) {
    throw new Error('Failed to fetch home data');
  }
  return res.json();
}

export default async function Eventos() {
  const { events } = await getData() || {};
  
  return (
      <>
        <main className={s.main}>
          <section className={s.next_events}>
            <h1 className={'big-title'}>PROXIMOS EVENTOS</h1>
            <div className={s.event_cards_container}>
              {events && (
                <EventsList events={events}/>

              )}
            </div>
          </section>
        </main>
      </>
  )
}
