'use client'

import s from './sign-out-button.module.scss';
import { signOut } from 'next-auth/react';

export default function SignOutButton() { 
    return (
        <button 
            style={{
                backgroundColor: 'transparent',
                color: '#e4e4e4',
                border: '0.6px solid #888',
                padding: '8px 22px',
                borderRadius: '50px'
            }}
            onClick={() => signOut()}>
            Sign out
        </button>
    )
}