import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './reducers/rootReducer';
import thunk from 'redux-thunk'
import { restoreSession } from './actions/usersActions';
import { recordFilterAction } from './actions/recordsActions';

export const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
store.dispatch(restoreSession())
//store.dispatch(recordFilterAction(1,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6Imh1Z28iLCJlbWFpbCI6Imh1Z290YXRhNzhAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkN3JSZms0YXpWbVdIajlzTDVOcW1YT2FFdVFxby5WU0JCVlFWM0JRakYxYXRkckF1UXpIREciLCJjcmVhdGVkQXQiOiIyMDIyLTAyLTA5VDIwOjIwOjUzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAyLTA5VDIwOjIwOjUzLjAwMFoifSwiaWF0IjoxNjQ0NjI0MTgyLCJleHAiOjE2NDQ3MTA1ODJ9.GgewWi0fkmmCDJMIRTrq5Sn_PyN-vSHaejXpV6HszDY'))

