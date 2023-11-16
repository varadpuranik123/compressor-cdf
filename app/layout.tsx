import type { Metadata } from 'next'
import { Monda } from 'next/font/google'
import './globals.css'


const monda = Monda({
  weight: "400",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CDF',
  description: 'Compress your PDFS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className='bg-[#fffff1] text-[#333333]'>
        <main className={monda.className} >
          {children}
        </main>
      </div>
    </html>
  )
}
