import React from 'react'

export const FilteredRecordsList = ({ records }) => {

    console.log(records)
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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
