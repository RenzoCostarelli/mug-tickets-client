import Image from 'next/image'
import Link from 'next/link';
import s from './event-card.module.scss';

export default function AdminEventCard({ showInfo }: any) {
    
    return (
        <Link href={`/admin/eventos/${showInfo.eventId}`} 
            style={{
                width: '100%',
                display: 'block'
            }}>            
            <div style={{
                    border: '0.5px solid rgba(194, 224, 255, 0.08)',
                    borderRadius: 5,
                    overflow: 'hidden',
                    backgroundColor: 'rgb(16, 20, 24)'
                }}>
                
                <Image 
                    src={ showInfo.image ?? "/images/flyer__test.jpg" }
                    alt="Entrada"                    
                    width='150'
                    height='100'                   
                />
                    
                <h3 style={{ 
                        margin: '1rem 0',
                        padding: '0 1rem',
                        fontStyle: 'none', 
                        color: '#d1d1d1'
                    }}>
                    {showInfo.title}
                </h3>                
            </div>
        </Link>
    )
}