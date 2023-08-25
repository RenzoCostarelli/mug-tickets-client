'use client';
import { SessionProvider } from "next-auth/react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Provider({ children, session} : any) {
    return (
        <SessionProvider session={session}>
            { children }
            <ProgressBar
                height="4px"
                color="#ffa500"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </SessionProvider>
    );
}