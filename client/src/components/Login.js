import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/usersActions';
import { useForm } from 'react-hook-form'


export const Login = () => {

    const dispatch = useDispatch()
    const session = useSelector(state => state.userReducer.session)
    const error = useSelector(state=>state.userReducer.error)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
       const { email, password } = data
        dispatch(loginAction(email, password))
        console.log(session)
        localStorage.setItem('session',JSON.stringify(session))
    }

    return (
        <div className='container d-flex justify-content-center m-4'>
            <form
                className='mt-4 p-4 border border-primary rounded'
                onSubmit={handleSubmit(onSubmit)}
                style={{width:'100%',maxWidth:'400px'}}
            >
                <h2 className='mb-2'>Inciar Sesión</h2>
                <div className='form-group mb-2'>
                    <input
                        id='email'
                        type="text"
                        className='form-control'
                        placeholder='Ingrese su email...'
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Se requiere un email'
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Dirección de email invalida',
                            },
                        })}
                    />
                    <span className='text-danger'>{errors.email && errors.email.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <input
                        id='password'
                        type="password"
                        className='form-control'
                        placeholder='Ingrese su contraseña...'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Se requiere una contraseña'
                            }
                        })}
                    />
                    <span className='text-danger'>{errors.password && errors.password.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <button className='btn btn-primary w-100'>Ingresar</button>
                </div>
                {error && <h5 className='text-danger'>{error}</h5>}
            </form>
        </div>
    )
};
