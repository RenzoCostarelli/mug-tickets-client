import Image from 'next/image'
import Link from 'next/link';
import s from './event-card.module.scss';
import { EventData } from '@/app/types/event';

export default function EventCard({ showInfo }: { showInfo: EventData }) {
    const { title, image, ticketsTypeList, eventId } = showInfo;
    
    const date = new Date(ticketsTypeList[0]?.date?.split('T')[0]);
    const time = ticketsTypeList[0]?.date?.split('T')[1];
    return (
        <Link href={`/eventos/${eventId}`}>
            <div className={s.card}>
                <div className={s.card_image}>
                    <Image
                        src={image ?? "/images/flyer__test.jpg"}
                        fill
                        alt={title}
                    />
                </div>
                <div className={s.cardBody}>
                    <div className={s.date}>
                        <div className={s.day}>{ date.toLocaleDateString() }</div>                    
                        <div className={s.time}>{ time?.split(':')[0] ?? '00' }:{ time?.split(':')[1] ?? '00' }hs</div>
                    </div>
                    <h2 className={s.cardTitle}>{title}</h2>
                </div>
            </div>
        </Link>
    )
}