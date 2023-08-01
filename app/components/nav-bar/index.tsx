import Link from 'next/link';
import s from './nav-bar.module.scss'

export default function Navbar() {
    return (
        <div className={s.nav_bar}>
            <div className={s.logo}>LOGO</div>
            <nav className={s.main_navigation}>
                <ul className={s.links}>
                    <li className={s.link}><Link href={`/`}>Tickets</Link></li>
                    <li className={s.link}><Link href={`/`}>Sobre el MUG</Link></li>
                    <li className={s.link}><Link href={`/`}>Preguntas frecuentes</Link></li>
                </ul>
            </nav>
            <div className={s.user_area}>
                <ul className={`${s.links} ${s.user_links}`}>
                    <li className={s.link}>
                        <Link href={`/`}>Login/Logout</Link>
                    </li>
                    <li className={s.link}>
                        <Link href={`/`}>Perfil</Link>
                    </li>
                    <li className={s.link}>
                        <Link href={`/`}>Mis compras</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}