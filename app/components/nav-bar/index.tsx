import Link from 'next/link';
import s from './nav-bar.module.scss'

export default function Navbar() {
    return (
        <div className={s.nav_bar}>
            <div className={s.logo}>LOGO</div>
            <nav className={s.main_navigation}>
                <ul className={s.links}>
                    <li className={s.link}><Link href={`/evento`}>Tickets</Link></li>
                    <li className={s.link}><Link href={`/evento`}>Sobre el MUG</Link></li>
                    <li className={s.link}><Link href={`/evento`}>Preguntas frecuentes</Link></li>
                </ul>
            </nav>
            <div className={s.user_area}>
                <ul className={`${s.links} ${s.user_links}`}>
                    <li className={s.link}>
                        <Link href={`/evento`}>Login/Logout</Link>
                    </li>
                    <li className={s.link}>
                        <Link href={`/evento`}>Perfil</Link>
                    </li>
                    <li className={s.link}>
                        <Link href={`/evento`}>Mis compras</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}