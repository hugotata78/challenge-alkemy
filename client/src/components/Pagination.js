import React from 'react'

export const Pagination = (offset,prevPage,nextPage) => {

    console.log(typeof prevPage)

    return (
        <div>
            <div className='d-flex justify-content-center mt-4'>
                <button className='btn btn-success m-2' onClick={prevPage}>Anterior</button>
                <button className='btn btn-success m-2' onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    )
}
