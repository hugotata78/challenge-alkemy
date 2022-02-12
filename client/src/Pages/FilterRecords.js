import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { recordFilterAction } from '../redux/actions/recordsActions';
import { FilteredRecordsList } from './FilteredRecordsList';

export const FilterRecord = () => {

    const dispatch = useDispatch()
    const records = useSelector(state => state.recordReducer.filter)
    const session = useSelector(state => state.userReducer.session)
    const { categoryId } = useParams()

    useEffect(() => {
        const { id } = session.user
        const { token } = session
        dispatch(recordFilterAction(id, categoryId, token))
    }, [dispatch,session,categoryId])

    

    return (
        <div className='container'>
            <div className='d-flex justify-content-center m-4 p-4'>
                <h1>Categoria {records && records.category.name}</h1>
            </div>
            { records && records.data.length <= 0 && <h3 className='text-info text-center'>No se encontraron registros relacionados a esta categoria</h3>}
            {records && records.data.length > 0 && <FilteredRecordsList records={ records.data} />}
        </div>
    )
};
