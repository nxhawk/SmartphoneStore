import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Layout from './layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
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
