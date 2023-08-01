import Image from 'next/image'
import s from './page.module.scss'
import HeroBanner from './components/hero-banner'
import EventsList from './components/events-list'


export default function Home() {
  
  return (<>
    <header>
      <HeroBanner />
    </header>  
    <main className={s.main}>
      <section className={s.next_events}>
        <h1>PROXIMOS SHOWS</h1>
        <div className={s.event_cards_container}>
          {/* <EventsList /> */}
        </div>
      </section>
    </main>
  </>
  )
}
