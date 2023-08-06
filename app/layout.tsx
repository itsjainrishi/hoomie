import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan, Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hoomie',
  description: 'Hoomie | Find your perfect place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={leagueSpartan.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
