import { Metadata } from 'next';
import s from 'eventos.module.scss';
import EventsList from '../components/events-list';

export const metadata: Metadata = {
  title: 'Mug - Eventos',
};

async function getData() {
  console.log('asdadasda')
  const res = await fetch(`${process.env.apiUrl}/events/`, {
    method: 'GET',
    headers: {
      'API-Key': '33F85ADC279C7872D63B1B42A1B31'
    },
  });
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch datas');
    return new Promise((res, rej) => res({}));
  }
 
  return res.json();
}
 
export default async function Eventos() {
  const { events } = await getData();
  return (
  <>
    <EventsList props={events}/>
  </>
  );
}