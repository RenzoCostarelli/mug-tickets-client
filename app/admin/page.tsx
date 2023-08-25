import CardInfo from '@/app/components/card-info';
import s from '../page.module.scss';

export default async function AdminDashboard() {
    
    return(
        <>
            <div className={s.next_events}>
                <div className="">
                    <h1>Admin Dashboard</h1>
                    <CardInfo/>
                </div>
            </div>
        </>
    )
}
