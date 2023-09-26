import '../styles/global.scss';
import Navbar from '@/app/components/nav-bar';

export const metadata = {
  title: 'User Mug Tickets'
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <>{children}</>
  )
}