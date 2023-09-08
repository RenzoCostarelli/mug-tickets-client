'use client'

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import SignOutButton from '../sign-out-button';
import Image from 'next/image';
import Link from 'next/link';

export default function CardInfo() {
    const { data: session } = useSession();

    const avatarUrl = session?.user.image as string;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (      
         
          <div>
            <button style={{
                backgroundColor: 'transparent',
                padding: '0.7rem 1.5rem',
                border: '0.5px solid lightgrey',
                borderRadius: '5px'
              }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Perfil
            </button>
            <ul
              id="basic-menu"
              //anchorEl={anchorEl}
              //open={open}
              //onClose={handleClose}
              //MenuListProps={{
              //  'aria-labelledby': 'basic-button',
              //}}
            >
              <li>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>           
                  <span>{ session?.user?.email }</span>
                  <Image 
                    style={{
                      borderRadius: '50%'
                    }}
                    width={30}
                    height={30}
                    src={avatarUrl || ''}
                    alt={session?.user?.name || ''}/>
                </div>
              </li>
                <Link 
                  href={`/admin/`}>Dashboard</Link>
              <li>
                <Link 
                  href={`/admin/eventos`}>Eventos</Link>
              </li>
              <li>
                <Link 
                  href={`/admin/validar`}>Qr Scan</Link>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>    
    )
} 