import Navbar from '@/app/components/nav-bar';
import '../styles/global.scss';

export const metadata = {
  title: 'Evento Mug Tickets'
}

export default function EventLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Navbar />
        <section>
            {children}
        </section>  
    </>
  )
}