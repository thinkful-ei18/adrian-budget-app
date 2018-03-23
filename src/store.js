import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {billsReducer} from './reducers/bills';
import {usersReducer} from './reducers/users';



export default createStore (
  combineReducers({
    users: usersReducer,
    bills: billsReducer,
    form: formReducer
  }), composeWithDevTools(
      applyMiddleware(thunk),
  )
);