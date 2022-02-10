import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContainerPanel } from '../components/ContainerPanel';
import { getRecordsAction } from '../redux/actions/recordsActions';

export const PanelAdmin = () => {

    const dispatch = useDispatch()
    const records = useSelector(state => state.recordReducer.get_records)
    const session = useSelector(state => state.userReducer.session)

    useEffect(() => {
        const { id } = session.user
        const { token } = session
        dispatch(getRecordsAction(id, token))
    }, [dispatch,session])

    return (
        <div className='container'>
            <div className='d-flex justify-content-center m-4 p-4'>
                <h1>Administrar mis registros</h1>
            </div>
            { records && records.length <= 0 && <h3 className='text-info text-center'>No cuentas con registros para realizar alguna operación! has clik <Link to='/record/create'>Aqui</Link> para ingresar un nuevo registro</h3>}
            {records && records.length > 0 && <ContainerPanel records={records} />}
        </div>
    )
};
