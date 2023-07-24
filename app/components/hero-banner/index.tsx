import Image from 'next/image'
import Link from 'next/link'
import s from './hero-banner.module.scss'

export default function HeroBanner () {
    return (
        <div className={s.hero_banner}>
            <div className={s.banner_content}>
                <div className={s.image}>
                <Image
                        src="https://placehold.jp/1500x500.png"
                        fill={true}
                        alt="Banner"
                    />
                </div>
            </div>
        </div>
    )
}