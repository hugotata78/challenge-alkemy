import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { resetState, updateRecordAction } from '../redux/actions/recordsActions';

export const FormEditRecord = ({ record }) => {

    const dispatch = useDispatch()
    const session = useSelector(state => state.userReducer.session)
    const categories = useSelector(state => state.categoryReducer.categories)
    const result = useSelector(state => state.recordReducer.update_record)
    const error = useSelector(state => state.recordReducer.error)
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    setValue('concept',record.concept)
    setValue('amount',record.amount)
    setValue('operation',record.operation)
    setValue('date',record.date && record.date.split('T')[0])

    const handleOnSubmit = (data, e) => {
        const { concept, amount, operation, date, category } = data
        const { id } = record
        console.log(record)
        const { token } = session
        dispatch(updateRecordAction(concept, amount, operation, date, category, id, token))
        e.target.reset();
    }

    const resetData = (e)=>{
        e.preventDefault()
        dispatch(resetState())
        
    }

    
    return (
        <div className='container d-flex justify-content-center m-4'>
            <form className='mt-4 p-4 border border-primary rounded'
                style={{ width: '100%', maxWidth: '400px' }}
                onSubmit={handleSubmit(handleOnSubmit)}
            >
                <h2 className='mb-2'>Editar registro</h2>
                <div className='form-group mb-2'>
                    <input
                        type="text"
                        className='form-control '
                        placeholder='Concepto'
                        {...register('concept', {
                            required: {
                                value: true,
                                message: 'Debe ingresar el concepto'
                            }
                        })}
                    />
                    <span className='text-danger'>{errors.concept && errors.concept.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <input
                        type="number"
                        className='form-control'
                        placeholder='Monto'
                        {...register('amount', {
                            required: {
                                value: true,
                                message: 'Debe ingresar un monto'
                            }
                        })}
                    />
                    <span className='text-danger'>{errors.amount && errors.amount.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <input
                        type="text"
                        className='form-control '
                        placeholder='Tipo de operación'
                        {...register('operation', {
                            required: {
                                value: true,
                                message: 'Debe ingresar el tipo de operación'
                            }
                        })}
                    />
                    <span className='text-danger'>{errors.operation && errors.operation.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <input
                        type="date"
                        className='form-control '
                        {...register('date', {
                            required: {
                                value: true,
                                message: 'Debe ingresar una fecha'
                            }
                        })}
                    />
                    <span className='text-danger'>{errors.date && errors.date.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <select
                        className='form-control'
                        name="" id=""
                        {...register('category', {
                            required: {
                                value: true,
                                message: 'Debe ingresar una categoria'
                            }
                        })}
                    >
                        <option value="">Seleccionar categoria</option>
                        {
                            categories && categories.map(category => {
                                let id = record.category ? record.category.id : null 
                                return (
                                    category.id === id ? 
                                    <option selected='selected' value={category.id} key={category.id}>{category.name}</option>
                                    :
                                    <option value={category.id} key={category.id}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                    <span className='text-danger'>{errors.category && errors.category.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <button className='btn btn-primary w-100'>Editar</button>
                </div>
                {error && <h5 className='text-danger'>{error}</h5>}
                {result && <h5>Se edito el registro exitosamente! para verlo sn su lista de registros haga click <br /> <button className='btn btn-success' onClick={resetData}>aqui</button></h5>}
            </form>
        </div>
    )
};