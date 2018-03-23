import {FETCH_BILLS_REQUEST, FETCH_BILLS_SUCCESS, FETCH_BILLS_ERROR, POST_BILL_REQUEST, POST_BILL_SUCCESS, POST_BILL_ERROR} from '../actions/bills'

const initialState = {
  list:
  [{name: 'Good Vibes',
  amount: 0,
  },
  {name: 'Happiness',
  amount: 0,
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
      list: action.data,
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
  else if (action.type === POST_BILL_REQUEST) {
    return Object.assign({}, state,
    {
      loading: true,
      error: null
    });
  }
  else if (action.type === POST_BILL_SUCCESS) {

    return Object.assign({}, state,
      {
      list: [...state.list, action.bill],
      loading: false,
      error: null
      });
  }
  else if (action.type === POST_BILL_ERROR) {
    return Object.assign({}, state,
      {
        error: action.error,
        loading: false
      });
  }

  return state;
}