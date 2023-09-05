'use client'

import s from './sign-out-button.module.scss';
import { signOut } from 'next-auth/react';

export default function SignOutButton() { 
    return (
        <button 
            style={{
                backgroundColor: 'transparent'
            }}
            onClick={() => signOut()}>
            Sign out
        </button>
    )
}