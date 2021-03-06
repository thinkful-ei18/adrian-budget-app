import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {billsReducer} from './reducers/bills';
import {usersReducer} from './reducers/users';
import authReducer from './reducers/auth';



export default createStore (
  combineReducers({
    users: usersReducer,
    auth: authReducer,
    bills: billsReducer,
    form: formReducer
  }), composeWithDevTools(
      applyMiddleware(thunk),
  )
);