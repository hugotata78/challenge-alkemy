import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './reducers/rootReducer';
import thunk from 'redux-thunk'
import { restoreSession } from './actions/usersActions';

export const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
store.dispatch(restoreSession())
