'use client'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SignOutButton from '../sign-out-button';

export default function CardInfo() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        },
    });
    
    return (
        <>
            <p>{ session?.user?.token ?? 'Mug' }</p>
            <p>{ session?.user?.name }</p>
            <p>{ session?.user?.email }</p>
            <Image 
                src={session?.user?.image ?? '/images/flyer__test.jpg'}
                alt={session?.user?.name ?? 'Mug admin'}
                width={50}
                height={50}/>
                <SignOutButton/>
        </>
    )
} 