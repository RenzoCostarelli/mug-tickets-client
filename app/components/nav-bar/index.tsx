'use client'
import Link from 'next/link';
import Image from 'next/image';
import s from './nav-bar.module.scss';

import { useSession } from 'next-auth/react';
import SignOutButton from '../sign-out-button';
import DashboardButton from '../dashboard-button';

import GoogleButton from '../google-button';
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const { data: session } = useSession<boolean>();
    const pathname = usePathname()
    const userType = session?.user.role;
    return (        
        <div className={s.nav_bar}>
            <Image 
                src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1695928585/MUG_LOGO_PNG_tw6x2s.png"
                alt='MUG'
                width={50}
                height={50}/>                
            <nav className={s.main_navigation}>
                <ul className={s.links}>
                    <li className={s.link}>
                        <Link href={`/`}>Entradas</Link>
                    </li>

                </ul>
            </nav>
            <div className={s.user_area}>

            </div>
        </div>        
    )
}