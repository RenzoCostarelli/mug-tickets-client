import s from './nav-bar.module.scss';

import SignOutButton from '../sign-out-button';

import { Avatar } from '@mui/material';
import CardInfo from '../card-info';
import { handler } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const dataSession = async () => {
    const session = await getServerSession(handler);
    return session;
}

export default function AdminNavbar() {
            
    return (        
        <div className={s.nav_bar}>
            <Avatar 
                src="https://res.cloudinary.com/dxvxzikri/image/upload/v1692558761/dzmlypgcmhpkb5x6seh4.jpg"
                alt='MUG'/>            
            <nav className={s.main_navigation}>                
                {   
                    dataSession().then((session)=>{
                        return session && 
                        (
                            <ul className={`${s.links} ${s.user_links}`}>
                                <li className={s.link}>
                                    <CardInfo />
                                </li>
                            </ul>
                        )
                    })
                }
            </nav>
        </div>        
    )
}