'use client'
import { Avatar, Stack, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function AdminInfo() {
    const { data: session } = useSession();

    const avatarUrl = session?.user.image as string;
    
    return ( 
        <Stack direction="row" spacing={2}>           
            <Typography paragraph={true}>{ session?.user?.email }</Typography>
                <Avatar 
                    sx={{ width: 24, height: 24 }}
                    src={avatarUrl}
                    alt={session?.user?.name}/>
        </Stack>
    )
}