  import React from 'react'
  import { Route, Routes } from 'react-router-dom'
  import Home from '../pages/Home'
  import Doctors from '../pages/Doctors/Doctors'
  import DoctorsDetails from '../pages/Doctors/DoctorsDetails'
  import Login from '../pages/Login'
  import Signup from '../pages/Signup'
  import Contect from '../pages/Contect'
  import Service from '../pages/Service'
  import MyAccount from '../Dashboard/user-account/MyAccount'
  import Dashboard from '../Dashboard/doc-account/Dashboard'

  import ProtectRouter from './ProtectRouter'
  function Router() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/users/profile/me' element={<ProtectRouter allowRoles={['patient']}><MyAccount/></ProtectRouter>}/>
        <Route path='/doctors/profile/me' element={<ProtectRouter allowRoles={['doctor']}><Dashboard/></ProtectRouter>}/>
      </Routes>
    )
  }

  export default Router
