'use client'
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default function TicketForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        throw new Error('Function not implemented.');
    }

    const handleChange = (e: SelectChangeEvent<number>): void => {
        e.preventDefault();
        throw new Error('Function not implemented.');
    }

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                px: 2,
                py: 4,
                borderRadius: 5
            }}
            
            component="form" onSubmit={handleSubmit}>
            <TextField
                id="ticket"
                label="Tipo de entrada"
                variant="outlined"
                autoComplete='true'
                placeholder='Título de tu evento'
                fullWidth
                size="small"
                margin="normal"
                required
            />
            <FormControl margin='normal' fullWidth>
                <InputLabel id="select-label">Fecha</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    size='small'                    
                    value={1}
                    label="Fecha"
                    onChange={handleChange}
                    required
                >
                <MenuItem value={1}>Dia 1</MenuItem>
                <MenuItem value={2}>Dia 2</MenuItem>
                <MenuItem value={3}>ABONO</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="price"
                label="Precio"
                variant="outlined"
                autoComplete='true'
                fullWidth
                size="small"
                margin="normal"
                type='string'
                required
            />
            <TextField
                id="quantity"
                label="Cantidad disponible"
                variant="outlined"
                autoComplete='true'
                fullWidth
                size="small"
                margin="normal"
                required
            />
            <Button
                variant='contained'
                size='large'
                fullWidth
                type="submit">Guardar Entrada</Button>
        </Box>
    )
}