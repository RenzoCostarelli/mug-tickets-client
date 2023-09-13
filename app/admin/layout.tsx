import AdminNavbar from '@/app/components/admin-navbar';
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
    <>{children}</>
  )
}