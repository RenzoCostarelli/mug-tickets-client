import Image from 'next/image'
import Link from 'next/link';
import s from './event-card.module.scss';

export default function EventCard({showInfo}:any) {
    console.log('card props',showInfo)
    return (
        <div className={s.card}>
            <div className={s.card_image}>
                <Image
                    src="/images/flyer__test.jpg"
                    fill={true}
                    alt="Entrada"
                />
            </div>
            <div className={s.cardBody}>
                <h1 className={s.cardTitle}>{showInfo.title}</h1>
                <div className={s.date}>
                    <div className={s.day}>23/02/2023</div>                    
                    <div className={s.time}>23:00hs</div>
                </div>

                <p className={s.description}>Lorem ipsum dolor sit.</p>
                <Link href={`/evento`}>comprar</Link>
            </div>
        </div>
    )
}