'use client'
import Link from 'next/link';
import Image from 'next/image';
import s from './nav-bar.module.scss';

import { useSession } from 'next-auth/react';
import SignOutButton from '../sign-out-button';
import DashboardButton from '../dashboard-button';

export default function Navbar() {
    const { data: session } = useSession();
        
    return (
        <>
            <div className={s.nav_bar}>
                <div className={s.logo}>
                    <Image 
                        src="https://res.cloudinary.com/dxvxzikri/image/upload/v1692558761/dzmlypgcmhpkb5x6seh4.jpg"
                        alt='MUG'
                        width={50}
                        height={50}
                        />
                    </div>
                <nav className={s.main_navigation}>
                    <ul className={s.links}>
                    <li className={s.link}>
                            <Link href={`/`}>Home</Link>
                        </li>
                        <li className={s.link}>
                            <Link href={`/eventos`}>Eventos</Link>
                        </li>
                        <li className={s.link}>
                            <Link href={`/`}>FAQ</Link>
                        </li>
                    </ul>
                </nav>
                <div className={s.user_area}>
                    <ul className={`${s.links} ${s.user_links}`}>
                        {!session ? (
                            <li className={s.link}>
                                <Link href={`/users/login`}>Login</Link>
                            </li>
                        ) : (
                            <>
                                <li className={s.link}>
                                    <DashboardButton />
                                </li>
                                <li className={s.link}>
                                    <SignOutButton />
                                </li>
                            </>
                        )}                
                    </ul>
                </div>
            </div>            
        </>
    )
}