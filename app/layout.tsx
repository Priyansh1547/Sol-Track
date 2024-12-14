import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sol-Track',
  description: 'View your Solana transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

