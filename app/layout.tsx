
import Navbar from './components/nav-bar';
import Provider from './components/provider/provider';
import './styles/global.scss'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MUG | Entradas online',
  description: 'Plataforma de venta de tickets online del MUG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>      
        <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
