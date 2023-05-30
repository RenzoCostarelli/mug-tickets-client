import Image from 'next/image'
import Link from 'next/link'
import s from './event-detail.module.scss'

export default function EventDetail({props}: any) {
    console.log('props',props)
    return (
        <div className={s.mainContainer}>
            <div className={s.event}>
                <div className={s.eventHeader}>
                    <Image
                        src="/images/237-1200x1300.jpg"
                        fill={true}
                        alt="Entrada"
                    />
                </div>
                <div className={s.eventBody}>
                    <div className={s.eventInfo}>
                        <div className={s.dateTime}>
                            <div className={s.date}>23/23/23</div>
                            <div className={s.time}>00:00hs</div>
                        </div>
                    </div>
                    <form action="">

                    <select name="quantity" id="ticketsQuantity">
                        {/* lleva al formulario */}
                        <option value="">Cantidad de entradas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <Link href={`/checkout`}>comprar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}