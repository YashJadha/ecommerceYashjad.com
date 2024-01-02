import './globals.css'
import { Inter } from 'next/font/google'
import Menubar from '@/Components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'
import Categories from '@/Components/Apidata'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
        <Categories/>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}