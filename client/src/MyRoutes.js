import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { CreateRecords } from './components/CreateRecords';
import { PanelAdmin } from './Pages/PanelAdmin';
import { Register } from './components/Register';
import { Home } from './Pages/Home';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<Register/>}/>
      <Route path='/record/create' element={ <CreateRecords/>} />
      <Route path='/record/admin' element={ <PanelAdmin/>} />
    </Routes>
  )
};
