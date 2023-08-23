'use client'
import Link from 'next/link';
import Image from 'next/image';
import s from './nav-bar.module.scss';
import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();
        
    return (
        <div className={s.nav_bar}>
            <div className={s.logo}>
                <Image 
                    src="https://res.cloudinary.com/dxvxzikri/image/upload/v1692558761/dzmlypgcmhpkb5x6seh4.jpg"
                    alt='MUG'
                    width={50}
                    height={50}
                    />
                </div>
            <nav className={s.main_navigation}>
                <ul className={s.links}>
                <li className={s.link}>
                        <Link href={`/`}>Home</Link>
                    </li>
                    <li className={s.link}>
                        <Link href={`/eventos`}>Eventos</Link>
                    </li>
                    <li className={s.link}>
                        <Link href={`/`}>FAQ</Link>
                    </li>
                </ul>
            </nav>
            <div className={s.user_area}>
                    {!session ? (
                        <>
                            <ul className={`${s.links} ${s.user_links}`}>
                                <li className={s.link}>
                                    <Link href={`/api/auth/signin`}>Login</Link>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className={`${s.links} ${s.user_links}`}>
                                <li className={s.link}>
                                    <Link href={`/admin`}>Dashboard</Link>
                                </li>
                                <li className={s.link}>
                                    <button 
                                        type="button"
                                        onClick={() => signOut()}
                                        className=""> Sing out</button>
                                </li>
                            </ul>
                        </>
                    )}                
            </div>
        </div>
    )
}