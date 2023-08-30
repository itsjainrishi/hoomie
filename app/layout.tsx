import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

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
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
