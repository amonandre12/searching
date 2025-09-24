import NavBar from '@/components/NavBar'
import './globale.css' ;
export default function RootLayout({ children }) {
  return (
    <html lang ="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}

