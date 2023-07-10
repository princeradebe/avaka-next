import './globals.css'
import Nav from './components/Nav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AVAKA',
  description: 'AVAKA offers services to meet your internal audit, advisory and consulting needs. Utilizing our team of experienced accounting professionals AVAKA can provide your business with a variety of management consulting and other internal audit and advisory services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  )
}
