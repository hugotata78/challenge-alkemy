import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './reducers/rootReducer';
import thunk from 'redux-thunk'
import { createUserAction, loginAction, logoutAction, restoreSession } from './actions/usersActions';
import { createRecordAction, deleteRecordAction, getRecordsAction, updateRecordAction } from './actions/recordsActions';

export const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
store.dispatch(restoreSession())
//store.dispatch(logoutAction('user12345@gmail.com',2))