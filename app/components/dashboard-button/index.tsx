'use client'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function DashboardButton() { 

    const { data: session } = useSession();

    return (
        <Link href={session?.user?.role === 'admin'? '/admin' : '/users/dashboard'}>Dashboard</Link>
    )
}