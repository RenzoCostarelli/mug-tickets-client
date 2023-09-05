'use client'

import { useSession } from "next-auth/react"

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
   
    return (
        <form action='/api/admin/eventos' method='POST'
            style={{
                backgroundColor: 'white',
                padding: '7px 1rem',
                textAlign: 'center',
                borderRadius: 5
            }}>
            <input 
                type="hidden"
                name="email"
                value={session?.user.email || ''}/>
            <input 
                type="hidden"
                name="token"
                value={session?.user.token || ''}/>
            <input 
                type="hidden"
                name="eventId"
                value={event?.eventId || ''}/>
            <label>Título de tu evento</label>
            <input 
                id="title"
                name="title"
                value={event?.title || ''}
                required
                />
            <label>description</label>       
            <textarea 
                id="description" 
                name="description"
                aria-label="minimum height"
                placeholder="Minimum 3 rows" 
                value={event?.description || ''}
                ></textarea>
            <label>Location</label>
            <input 
                id="location" 
                name="location"
                required
                value={event?.address || ''}
                />
            <label>Tipo de evento</label>
            <input 
                type="string"
                id="eventType" 
                name="eventType"
                required
                value={event?.eventType || ''}
                />
            <label>Localidades</label>
            <input  
                type="number"
                id="availables" 
                name="availables"
                required
                value={event?.ticketsAvailableOnline || ''}
                />
                 <label style={{
                  color:'black'
                 }}>Lugares limitados</label> 
            <input type="checkbox"
              checked={event?.hasLimitedPlaces? true : false}/>

            <input
                id="date"
                name="date"
                type="date"
                autoComplete='true'
                required
                />
            <button
                type="submit">Guardar Evento</button>          
        </form>
    )
}