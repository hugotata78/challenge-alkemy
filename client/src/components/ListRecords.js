import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecordAction } from '../redux/actions/recordsActions';


export const ListRecords = ({ records }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const result = useSelector(state => state.recordReducer.delete_record)
    const session = useSelector(state => state.userReducer.session)
    const error = useSelector(state => state.recordReducer.error)

    const navigateFormEdit = (e, id) => {
        e.preventDefault()
        navigate(`/record/edit/${id}`)
    }

    const deleteRecord = (e, id) => {
        dispatch(deleteRecordAction(id, session.token))
        window.location.reload()
    }

    return (

        <div className="table-responsive">
            {error && <h4 className='text-danger'>Ha ocurrido un error al intentar eliminar el registro!</h4>}
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Tipo de Operación</th>
                        <th>Fecha</th>
                        <th>Categoria</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records && records.map((record, index) => {
                            return (
                                <tr key={record.id}>
                                    <td>{index + 1}</td>
                                    <td>{record.concept}</td>
                                    <td>{record.amount}</td>
                                    <td>{record.operation}</td>
                                    <td>{record.date.split('T')[0]}</td>
                                    <td>{record.category.name}</td>
                                    <td>
                                        <button
                                            className='btn btn-success'
                                            onClick={e => navigateFormEdit(e, record.id)}
                                        >
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={e=>deleteRecord(e,record.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};
