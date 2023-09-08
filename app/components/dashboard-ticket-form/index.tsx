'use client'

export default function TicketForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        throw new Error('Function not implemented.');
    }

    const handleChange = (e: any): void => {
        e.preventDefault();
        throw new Error('Function not implemented.');
    }

    return (
        <form
            style={{
                backgroundColor: 'white',
                padding: '1 rem 2rem',
                borderRadius: 5
            }}
            onSubmit={handleSubmit}>
                <label>Tipo de entrada</label>
            <input
                id="ticket"
                //label="Tipo de entrada"
                //variant="outlined"
                autoComplete='true'
                placeholder='Título de tu evento'
                //fullWidth
                //size="small"
                //margin="normal"
                required
            />
            <div>
                <label id="select-label">Fecha</label>
                <select
                    //labelId="select-label"
                    id="simple-select"
                    //size='small'                    
                    value={1}
                    //label="Fecha"
                    //onChange={handleChange}
                    required
                >
                <option value={1}>Dia 1</option>
                <option value={2}>Dia 2</option>
                <option value={3}>ABONO</option>
                </select>
            </div>
            <label>Precio</label>
            <input
                id="price"
                //label="Precio"
                //variant="outlined"
                autoComplete='true'
                //fullWidth
               // size="small"
                //margin="normal"
                type='string'
                required
            />
            <label>Cantidad disponible</label>
            <input
                id="quantity"
                //label="Cantidad disponible"
                //variant="outlined"
                autoComplete='true'
                //fullWidth
                //size="small"
                //margin="normal"
                required
            />
            <button
                type="submit">Guardar Entrada</button>
        </form>
    )
}