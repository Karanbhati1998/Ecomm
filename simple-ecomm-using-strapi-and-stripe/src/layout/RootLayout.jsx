import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <header>

    </header>
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
    </>
  )
}

export default RootLayout