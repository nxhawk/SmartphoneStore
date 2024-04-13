import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Layout from './layout/Layout'
import News from './pages/News'
import Hiring from './pages/Hiring'
import About from './pages/About'
import Maintenance from './pages/Maintenance'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/hiring' element={<Hiring/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/maintenance' element={<Maintenance/>}/>
          </Route>
          <Route path='/auth'>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
