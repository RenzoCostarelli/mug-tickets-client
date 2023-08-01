import EventDetail from "../../components/event-detail"

async function getEventById(id: string) {
    const res = await fetch(`${process.env.apiUrl}/events/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch dataa');
    } 
    return res.json();
}

export default async function Event({params}: {params: {id: string}}) {
    const { event }  = await getEventById(params.id);
    return (
        <div>
            <EventDetail />
            <h1>{event.title}</h1>
        </div>
    )
}