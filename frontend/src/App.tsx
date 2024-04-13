import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
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
