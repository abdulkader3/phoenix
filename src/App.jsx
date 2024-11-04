import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Pages/login/Login'
import Registration from './Pages/registration/Registration'
import Home from './Pages/Home'

function App() {

  const Phoenix = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/home' element={<Home/>}/>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={Phoenix}/>

    </>
  )
}

export default App
