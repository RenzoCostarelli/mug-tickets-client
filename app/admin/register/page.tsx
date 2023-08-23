"use client";
import Image from 'next/image';
import s from '../page.module.scss';
//import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
//import { handler } from '../../api/auth/[...nextauth]/route';
import { useSession } from "next-auth/react";

export default function DashboardAdmin() {
    const { data: session } = useSession();
    
    if(!session) {
        redirect('/admin/login');
    }
    
    return(
        <>
        <section className={s.next_events}>
            <div className="">
                <h1>DashboardAdmin</h1>
                <p>{ session?.user?.firstName }</p>
                <p>{ session?.user?.email }</p>
                <Image 
                    src={session?.user?.image ?? '/images/flyer__test.jpg'}
                    alt={session?.user?.firstName ?? 'Mug'}
                    width={50}
                    height={50}/>
            </div>
        </section>
        </>
    )
}
