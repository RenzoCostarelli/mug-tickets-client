'use client'
import Image from 'next/image';
import s from '../page.module.scss';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default async function DashboardAdmin() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        },
    });
    
    return(
        <>
            <div className={s.next_events}>
                <div className="">
                    <h1>DashboardAdmin</h1>
                    <p>{ session?.user?.token ?? 'Mug' }</p>
                    <p>{ session?.user?.firstName }</p>
                    <p>{ session?.user?.email }</p>
                    <Image 
                        src={session?.user?.image ?? '/images/flyer__test.jpg'}
                        alt={session?.user?.firstName ?? 'Mug'}
                        width={50}
                        height={50}/>
                </div>
            </div>
        </>
    )
}
