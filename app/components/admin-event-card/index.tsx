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
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: 'rgb(16, 20, 24)',
                    position: 'relative',                    
                    height: '100%',
                }}>
                
                <Image 
                    src={ showInfo.image ?? "/images/flyer__test.jpg" }
                    alt="Entrada"                    
                    fill={true}
                    style={{
                        objectFit: 'cover',
                    }}
                    loading='lazy'
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