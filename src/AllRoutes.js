import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Grievances from './components/grievances/Grievances'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Grievances' element={<Grievances/>} />
        </Routes>
    </>
  )
}

export default AllRoutes
