'use client'
import s from './sign-out-button.module.scss';
import { signOut } from 'next-auth/react';

export default function SignOutButton() { 
    return (
        <button 
            className={s.button} 
            onClick={() => signOut()}>
            Sing out
        </button>
    )
}