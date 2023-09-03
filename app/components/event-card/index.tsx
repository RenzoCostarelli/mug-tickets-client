import Image from 'next/image'
import Link from 'next/link';
import s from './event-card.module.scss';

// title, timestamp, description, id, price

export default function EventCard({showInfo}:any) {
    return (
        <Link href={`/eventos/${showInfo.eventId}`}>
            <div className={s.card}>
                <div className={s.card_image}>
                    <Image
                        src={showInfo.image ?? "/images/flyer__test.jpg"}
                        fill={true}
                        alt={showInfo.title}
                        loading='lazy'
                    />
                </div>
                <div className={s.cardBody}>
                    <h1 className={s.cardTitle}>{showInfo.title}</h1>
                    <div className={s.date}>
                        <div className={s.day}>23/02/2023</div>                    
                        <div className={s.time}>23:00hs</div>
                    </div>

                    <p className={s.description}>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </Link>
    )
}