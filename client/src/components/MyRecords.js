import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecordsAction } from '../redux/actions/recordsActions';
import { ListRecords } from './ListRecords';

export const MyRecords = ({ id, token }) => {

  const records = useSelector(state => state.recordReducer.get_records)
  const dispatch = useDispatch()

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
      {records && records.length > 0 && <ListRecords records={records} />}
    </div>
  )
};
