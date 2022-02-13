import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecordsAction } from '../redux/actions/recordsActions';
import { ListRecords } from './ListRecords';
import { Pagination } from './Pagination';

export const MyRecords = ({ id, token }) => {

  const records = useSelector(state => state.recordReducer.get_records)
  const dispatch = useDispatch()
  const [offset,setOffset] = useState(0)
  const [limit,setLimit] = useState(10)
  const [dif,setDif] = useState(records && records.length - offset)

  const prevPage = (e)=>{
    e.preventDefault()
    setOffset(offset <= 0 ? 0: offset - 10)
    console.log(offset)
  }

  const nextPage = (e)=>{
    e.preventDefault()
    setLimit(dif < 10 ? limit + dif: limit + 10)
    console.log(limit)
  }

  useEffect(() => {
    dispatch(getRecordsAction(id, token))
  }, [dispatch, id, token])

  console.log(records)
  return (
    <div className='container'>
      <div className='d-flex justify-content-center m-4 p-4'>
        <h1>Mis Registros</h1>
      </div>
      {records && records.length <= 0 && <h3 className='text-info'>Todavía no has agregado registros! has clik <Link to='/record/create'>Aqui</Link> para ingresar un nuevo registro</h3>}
      {records && records.length > 0 && <ListRecords records={records.length <= 10 ? records : records.slice(offset,limit)} />}
      {records && records.length > 10 && <Pagination offset={offset} prevPage={prevPage} nextPage={nextPage} />}
    </div>
  )
};
