'use client'
import { useRef } from 'react';
import s from './toasty.module.scss'

type Toast = {
    msg: string;
    type: 'danger' | 'warning' | 'success';
    timeOut?: number;
}

export default function Toasty({msg, type, timeOut = 1000}: Toast) {
    const toastyRef = useRef<any>()

    setTimeout(() => {
        if (toastyRef.current) {
            toastyRef.current.style.display = 'none'
        }
    }, timeOut);


    return (
        <>
            <div className={`${s.toast_container} ${type}`} ref={toastyRef}>
                {/* <div className={s.close}>X</div> */}
                <div className={s.message}>
                    { msg }
                </div>
            </div>
        </>
    )
}