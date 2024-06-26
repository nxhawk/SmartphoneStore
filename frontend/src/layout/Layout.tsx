import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='max-w-5xl mx-auto min-h-72'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout