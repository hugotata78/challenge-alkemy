import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserAction } from '../redux/actions/usersActions';
import { useForm } from 'react-hook-form'


export const Register = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)
    const error = useSelector(state => state.userReducer.error)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [username,setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleChangeUsername = (e) => {
    //     setUsername(e.target.value)
    // }

    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handleChangePass = (e) => {
    //     setPassword(e.target.value)
    // }

    const onSubmit = (data) => {
        const { username, email, password } = data
        dispatch(createUserAction(username, email, password))
    }


    return (
        <div className='container d-flex justify-content-center m-4'>
            <form
                className='mt-4 p-4 border border-primary rounded'
                onSubmit={handleSubmit(onSubmit)}
                style={{width:'100%',maxWidth:'400px'}}
            >
                <h2 className='mb-2'>Crear cuenta de Usuario</h2>
                <div className='form-group mb-2'>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Ingrese su nombre de Usuario...'
                        {...register('username', {
                            required: {
                                value: true,
                                message: 'Se requiere un nombre de usuario'
                            },
                            minLength: {
                                value: 3,
                                message: 'Nombre de usuario debe contener mínimo 3 carácteres'
                            }
                        })}
                    />
                    <span className='text-danger'>{errors.username && errors.username.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <input
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
                        type="password"
                        className='form-control'
                        placeholder='Ingrese su contraseña...'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Se requiere una contraseña'
                            },
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe contener mínimo 8 carácteres'
                            },
                            maxLength: {
                                value: 16,
                                message: 'La contraseña debe contener maximo 16 carácteres'
                            },
                        })}
                    />
                    <span className='text-danger'>{errors.password && errors.password.message}</span>
                </div>
                <div className='form-group mb-2'>
                    <button className='btn btn-primary w-100'>Ingresar</button>
                </div>
                {error && <h5 className='text-danger'>{error}</h5>}
                {user && <h5>Se creo el usuario exitosamente si desea iniciar sessión has click <Link to='/'>aqui</Link></h5>}
            </form>
        </div>
    )
};
