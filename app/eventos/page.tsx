import { Metadata } from 'next';
import s from 'eventos.module.scss';
import EventsList from '../components/events-list';

export const metadata: Metadata = {
  title: 'Mug - Eventos',
};

async function getData() {
  const res = await fetch('http://localhost:8080/api/events/');
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch dataa');
  }
 
  return res.json();
}
 
export default async function Eventos() {
  const { events } = await getData();
  return (
  <>
    <h1>Holisss from eventos</h1>
    <EventsList props={events}/>
  </>
  );
}