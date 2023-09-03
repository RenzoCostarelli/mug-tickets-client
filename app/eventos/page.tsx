import { Metadata } from 'next';
import s from 'eventos.module.scss';
import EventsList from '../components/events-list';

export const metadata: Metadata = {
  title: 'Mug - Eventos',
};

async function getData() {
  const res = await fetch(`${process.env.apiUrl}/events`, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch dataa');
  }
 
  return res.json();
}
 
export default async function Eventos() {
  const { events } = await getData();
  return (
    <EventsList props={events}/>  
  );
}