
import Navbar from './components/nav-bar';
import Provider from './components/provider/provider';
import './styles/global.scss'
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900', '700', '500', '400'] })

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
      <body className={montserrat.className}>
        <Provider>      
        <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
