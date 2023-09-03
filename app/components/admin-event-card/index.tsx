import Image from 'next/image'
import Link from 'next/link';
import s from './event-card.module.scss';
import { Avatar, Skeleton, Stack, Typography } from '@mui/material';

// title, timestamp, description, id, price

export default function AdminEventCard({ showInfo }: any) {
    
    return (
        <Link href={`/admin/eventos/${showInfo.eventId}`} style={{
            width: '100%',
            display: 'block'
        }}>            
            <Stack 
                direction="row" 
                spacing={3} 
                sx={{
                    border: '0.5px solid rgba(194, 224, 255, 0.08)',
                    borderRadius: 5,
                    overflow: 'hidden',
                    backgroundColor: 'rgb(16, 20, 24)'
                }}
            >
                {
                    showInfo.image ? (
                        <Avatar 
                            src={showInfo.image}
                            alt="Entrada"
                            variant='square'
                            sx={{
                                width: '150px',
                                height: '100%'
                            }}
                        />
                      ) : (<Skeleton variant="rectangular" width={150} height={118} />)
                }
                
                <Typography sx={{ 
                        my: 2,
                        py: 3,
                        fontStyle: 'none', 
                        color: '#d1d1d1'
                    }} 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                >
                    {showInfo.title}
                </Typography>                
            </Stack>
        </Link>
    )
}