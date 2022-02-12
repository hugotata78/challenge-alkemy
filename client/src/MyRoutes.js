import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { CreateRecords } from './components/CreateRecords';
import { Register } from './components/Register';
import { Home } from './Pages/Home';
import { FormEditRecord } from './components/FormEditRecord';
import { FilterRecord } from './Pages/FilterRecords';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<Register/>}/>
      <Route path='/record/create' element={ <CreateRecords/>} />
      <Route path='/record/edit/:id' element={ <FormEditRecord/>} />
      <Route path='/category/:categoryId' element={ <FilterRecord/>} />
    </Routes>
  )
};
