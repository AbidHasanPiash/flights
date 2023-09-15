import Nav from '@/components/common/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero/Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flight',
  description: 'Developed by Abid Hasan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Nav/>
        <Hero/>
        <main className='spacing'>
          {children}
        </main>
      </body>
    </html>
  )
}
