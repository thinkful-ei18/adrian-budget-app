import {FETCH_BILLS_REQUEST, FETCH_BILLS_SUCCESS, FETCH_BILLS_ERROR} from '../actions/bills'

const initialState = {
  cheeses:
  [{name: 'Internet',
  amount: 65,
  },
  {name: 'Groceries',
  amount: 250,
  }],
  loading: false,
  error: null
}