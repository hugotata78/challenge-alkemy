import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categoryActions } from '../redux/actions/categoryActions';
import { logoutAction } from '../redux/actions/usersActions';


const NavBar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const session = useSelector(state => state.userReducer.session)
  const categories = useSelector(state => state.categoryReducer.categories)

  const handleOnClick = (e) => {
    const { id, email } = session.user
    e.preventDefault()
    navigate('/')
    dispatch(logoutAction(email, id))
  }

  useEffect(() => {
    dispatch(categoryActions())
  }, [dispatch])

  console.log(window.location.pathname)
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">App de Registros</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {
            session !== null ?
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                  <Link className='nav-link' to='/record/create'>Agregar registro</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/record/admin'>Administrar registros</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to={window.location.pathname} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar por categoria
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                      categories && categories.map(category => {
                        return (
                          <li><Link className="dropdown-item" to={`/category/${category.id}`} >{category.name}</Link></li>
                        )
                      })
                    }
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to={window.location.pathname} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {session && session.user.username}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/" onClick={handleOnClick}>Cerrar sesión</Link></li>
                  </ul>
                </li>
              </ul>
              :
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to={window.location.pathname} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cuentas de usuario
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Iniciar sesión</Link></li>
                    <li><Link className="dropdown-item" to="/create-user">Registrarse</Link></li>
                  </ul>
                </li>
              </ul>
          }
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
