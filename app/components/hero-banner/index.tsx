import Image from 'next/image'
import Link from 'next/link'
import s from './hero-banner.module.scss'

export default function HeroBanner () {
    return (
        <div className={s.hero_banner}>
            <div className={s.banner_content}>
                <div className={s.image}>
                <Image
                        src="https://res.cloudinary.com/dxvxzikri/image/upload/v1692124952/xmghxgj6ujbb2myq3vgx.jpg"
                        fill={true}
                        alt="Banner"
                    />
                </div>
            </div>
        </div>
    )
}