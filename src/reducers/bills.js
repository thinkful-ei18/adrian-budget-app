import {FETCH_BILLS_REQUEST, FETCH_BILLS_SUCCESS, FETCH_BILLS_ERROR} from '../actions/bills'

const initialState = {
  list:
  [{name: 'Internet',
  amount: 65,
  },
  {name: 'Groceries',
  amount: 250,
  }],
  loading: false,
  error: null
}

export function billsReducer(state=initialState, action) {

  if (action.type === FETCH_BILLS_REQUEST) {
    return Object.assign({}, state,
    {
      loading: true,
      error: null
    });
  }
  else if (action.type === FETCH_BILLS_SUCCESS) {

    return Object.assign({}, state,
      {
      cheeses: action.data,
      loading: false,
      error: null
      });
  }
  else if (action.type === FETCH_BILLS_ERROR) {
    return Object.assign({}, state,
      {
        error: action.error,
        loading: false
      });
  }
  return state;
}