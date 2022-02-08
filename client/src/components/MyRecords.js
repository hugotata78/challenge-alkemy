import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecordsAction } from '../redux/actions/recordsActions';
import { ListRecords } from './ListRecords';

export const MyRecords = ({ id, token }) => {

  const records = useSelector(state => state.recordReducer.get_records)
  const session = useSelector(state => state.userReducer.session)
  const dispatch = useDispatch()

  useEffect(() => {
    const { id } = session.user
    dispatch(getRecordsAction(id, token))
  }, [dispatch, id, token])

 // console.log(records)
  return (
    <div className='container'>
      <div className='d-flex justify-content-center m-4 p-4'>
        <h1>Mis Registros</h1>
      </div>
     <ListRecords records={records}/>
    </div>
  )
};
