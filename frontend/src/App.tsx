import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth'>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
