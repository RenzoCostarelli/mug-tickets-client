import Navbar from '@/app/components/nav-bar';
import '../styles/global.scss';

export const metadata = {
  title: 'User Mug Tickets'
}

export default function UserLayout({
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