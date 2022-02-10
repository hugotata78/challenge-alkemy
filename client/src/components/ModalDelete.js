import React from 'react'

export const ModalDelete = ({ deleteRecord, id }) => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger" id="exampleModalLabel">Atención!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h6 className='text-warning'>Está seguro de que desea eliminar el registro?</h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e=>deleteRecord(id)}>Eliminar registro</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
