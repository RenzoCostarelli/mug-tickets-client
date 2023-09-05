
import Provider from './components/provider/provider';
import './styles/global.scss'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '-MUG- tickets',
  description: 'Tickets MUG',
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
          {children}
        </Provider>
      </body>
    </html>
  )
}
