//'use client'
import Link from 'next/link';
import Image from 'next/image';
import s from './nav-bar.module.scss';

import { signOut } from 'next-auth/react';

//import { usePathname } from 'next/navigation';

import { handler } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SignOutButton from '../sign-out-button';


const dataSession = async () => {
    const session = await getServerSession(handler);
    return session;
}

export default function Navbar() {
    //const { data: session } = useSession<boolean>();
    //const pathname = usePathname()
    //const userType = session?.user.role;
    return (        
        <div className={s.nav_bar}>
            <Image 
                src="https://res.cloudinary.com/dkgnaegp9/image/upload/v1695928585/MUG_LOGO_PNG_tw6x2s.png"
                alt='MUG'
                width={50}
                height={50}/>                
            <nav className={s.main_navigation}>
                <ul className={s.links}>
                </ul>
            </nav>
            <div className={s.user_area}>
                <ul className={s.links}>
                    <li className={s.link}>
                        <Link href={`/`}>Entradas</Link>
                    </li>
                    { dataSession().then((session) => {
                        return session && (
                            <>
                                <li className={s.link}>
                                    <Link href={`/admin`}>Admin</Link>
                                </li>
                                <li>
                                    <SignOutButton />
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>        
    )
}