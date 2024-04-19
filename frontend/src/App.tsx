import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Layout from './layout/Layout'
import News from './pages/News'
import Hiring from './pages/Hiring'
import About from './pages/About'
import Maintenance from './pages/Maintenance'
import Contact from './pages/Contact'
import AllProduct from './pages/AllProduct'
import ProductDetails from './pages/ProductDetails'
import DetailUser from './pages/detailUser'
import Cart from './pages/Cart'
import RedirectRoute from './routes/RedirectRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute'
import CheckLoginRoute from './routes/CheckLoginRoute'
import ForgotPassword from './pages/ForgotPassword'
import RegisterSuccess from './pages/RegisterSuccess'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route element={<CheckLoginRoute/>}>
                <Route index element={<Home/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/hiring' element={<Hiring/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/maintenance' element={<Maintenance/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/showall' element={<AllProduct/>}/>
                <Route path='/product/:productId' element={<ProductDetails/>}/>
              
                // authentication
                <Route element={<PrivateRoute/>}>
                  <Route path='/detailUser' element={<DetailUser/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                </Route>
              </Route>

          </Route>
          <Route path='/auth' element={<RedirectRoute/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='forgotPassword' element={<ForgotPassword/>}/>
            <Route path='success' element={<RegisterSuccess/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
