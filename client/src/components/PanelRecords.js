import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ModalDelete } from './ModalDelete';

export const PanelRecords = ({ records, handleClick, deleteRecord }) => {

    const [id, setId] = useState('')
    return (

        <div className="table-responsive">
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
                                            onClick={e => handleClick(e, record)}>
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={e => setId(record.id)}
                                            data-bs-toggle="modal" 
                                            data-bs-target="#exampleModal"
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
            <ModalDelete deleteRecord={deleteRecord} id={id} />
        </div>
    )
};
