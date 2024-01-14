import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'El Gran Hotel',
  description: 'El Gran Hotel es un hotel de gran lujo ubicado en San Miguel Petapa Guatemala,\
  cuenta con una gran variedad de servicios y habitaciones para que su estadia sea de lo mejor.\
  Además cuenta con una bella vista a la ciudad de Guatemala y al lago de Amatitlán.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
