'use client'

import { Box, Button, FormControlLabel, Input, TextField } from "@mui/material"
import { useSession } from "next-auth/react"
import { styled } from '@mui/system';
import { Switch, switchClasses } from '@mui/base/Switch';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import NumberInput from '@mui/base/Unstable_NumberInput';

export default function EventForm({ event }: any) {
    const { data: session } = useSession();
    /*async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/admin', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        // ...
      }*/
      const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };

      const blue = {
        500: '#007FFF',
      };
      
      const grey = {
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
      };

      const Root = styled('span')(
        ({ theme }) => `
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
        margin: 10px;
        cursor: pointer;
      
        &.${switchClasses.disabled} {
          opacity: 0.4;
          cursor: not-allowed;
        }
      
        & .${switchClasses.track} {
          background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
          border-radius: 16px;
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      
        & .${switchClasses.thumb} {
          display: block;
          width: 16px;
          height: 16px;
          top: 4px;
          left: 4px;
          border-radius: 16px;
          background-color: #fff;
          position: relative;
          
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 120ms;
        }
      
        &.${switchClasses.focusVisible} .${switchClasses.thumb} {
          background-color: ${grey[500]};
          box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
        }
      
        &.${switchClasses.checked} {
          .${switchClasses.thumb} {
            left: 20px;
            top: 4px;
            background-color: #fff;
          }
      
          .${switchClasses.track} {
            background: ${blue[500]};
          }
        }
      
        & .${switchClasses.input} {
          cursor: inherit;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
          margin: 0;
        }
        `,
      );
    
    return (
        <Box component="form" action='/api/admin/eventos' method='POST'
            sx={{
                backgroundColor: 'white',
                px: 2,
                py: 4,
                textAlign: 'center',
                borderRadius: 5
            }}>
            <Input 
                type="hidden"
                name="email"
                value={session?.user.email || ''}/>
            <Input 
                type="hidden"
                name="token"
                value={session?.user.token || ''}/>
            <Input 
                type="hidden"
                name="eventId"
                value={event?.eventId || ''}/>
            <TextField 
                id="title"
                name="title"
                label='Título de tu evento'
                value={event?.title || ''}
                required
                fullWidth
                size="small"
                margin="normal"
                />
                        
            <textarea 
                id="description" 
                name="description"
                aria-label="minimum height"
                placeholder="Minimum 3 rows" 
                value={event?.description || ''}
                ></textarea>
            <TextField 
                id="location" 
                name="location"
                label='Dirección'
                required
                fullWidth
                size="small"
                margin="normal"
                value={event?.address || ''}
                />
            <TextField 
                type="string"
                id="eventType" 
                name="eventType"
                label='Tipo de evento'
                required
                fullWidth
                size="small"
                margin="normal"
                value={event?.eventType || ''}
                />
            <TextField  
                type="number"
                id="availables" 
                name="availables"
                label='Localidades'
                placeholder='Entradas disponibles'
                required
                fullWidth
                size="small"
                margin="normal"
                value={event?.ticketsAvailableOnline || ''}
                />
                  
            <Switch
                slots={{
                root: Root,
                }}
                {...label}
                defaultChecked
            />

            <TextField
                id="date"
                name="date"
                type="date"
                autoComplete='true'
                required
                fullWidth
                size="small"
                margin="normal"
                />
            <Button
                variant='contained'
                size='large'
                fullWidth
                type="submit">Guardar Evento</Button>          
        </Box>
    )
}