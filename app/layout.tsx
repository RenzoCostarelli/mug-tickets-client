import './styles/global.scss'

export const metadata = {
  title: 'MUG tickets',
  description: 'Tickets MUG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
