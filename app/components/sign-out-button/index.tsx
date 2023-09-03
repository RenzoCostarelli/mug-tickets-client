'use client'
import { Button } from '@mui/material';
import s from './sign-out-button.module.scss';
import { signOut } from 'next-auth/react';

export default function SignOutButton() { 
    return (
        <Button
            variant="outlined"
            fullWidth
            onClick={() => signOut()}>
            Sign out
        </Button>
    )
}