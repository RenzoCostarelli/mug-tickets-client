import Image from 'next/image'
import s from './page.module.scss'
import HeroBanner from './components/hero-banner'
import EventsList from './components/events-list'

async function getData() {
  const res = await fetch(`${process.env.apiUrl}/events`, {cache: 'no-store'});
  if (!res.ok) {
    throw new Error('Failed to fetch dataa');
  } 
  return res.json();
}

export default async function Home() {

  const { events } = await getData() || {};
  console.log('Home')
  return (
  <>
    <header>
      <HeroBanner />
    </header>  
    <main className={s.main}>
      <section className={s.next_events}>
        <h1>PROXIMOS SHOWS</h1>
        <div className={s.event_cards_container}>
          <EventsList props={events}/>
        </div>
      </section>
    </main>
  </>
  )
}
