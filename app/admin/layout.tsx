import Navbar from '../components/nav-bar';
import '../styles/global.scss';

export const metadata = {
  title: 'Admin Mug Tickets'
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>  
  )
}