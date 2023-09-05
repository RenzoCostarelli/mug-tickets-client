'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default async function AdminInfo() {
    const { data: session } = useSession();

    const avatarUrl = session?.user.image as string;
    
    return ( 
        <div style={{
                display: 'flex',
            }}>           
            <p style={{
                    color: 'black'
                }}>{ session?.user?.email }</p>
                <Image 
                    src={avatarUrl}
                    alt={session?.user?.name ?? ''}
                    width={24}
                    height={24}
                    />
        </div>
    )
}