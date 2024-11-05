import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Pages/login/Login'
import Registration from './Pages/registration/Registration'
import Home from './Pages/home/Home'
import Transfer from './Pages/transfer/Transfer'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const Phoenix = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/transfer' element={<Transfer/>}/>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={Phoenix}/>
    <ToastContainer />

    </>
  )
}

export default App
