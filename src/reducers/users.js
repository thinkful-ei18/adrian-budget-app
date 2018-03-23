import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, ADD_INCOME_REQUEST, ADD_INCOME_SUCCESS, ADD_INCOME_ERROR } from '../actions/users';

const initialState = {
  userId: 0,
  income: 0
};

export function usersReducer(state=initialState, action) {

  if (action.type === REGISTER_USER_REQUEST) {
    return Object.assign({}, state,
    {
      loading: true,
      error: null
    });
  }
  else if (action.type === REGISTER_USER_SUCCESS) {

    return Object.assign({}, state,
      {
      userId: action.data,
      loading: false,
      error: null
      });
  }
  else if (action.type === REGISTER_USER_ERROR) {
    return Object.assign({}, state,
      {
        error: action.error,
        loading: false
      });
  }

  else if (action.type === LOGIN_USER_REQUEST) {
    return Object.assign({}, state,
    {
      loading: true,
      error: null
    });
  }
  else if (action.type === LOGIN_USER_SUCCESS) {

    return Object.assign({}, state,
      {
      userId: action.data,
      loading: false,
      error: null
      });
  }
  else if (action.type === LOGIN_USER_ERROR) {
    return Object.assign({}, state,
      {
        error: action.error,
        loading: false
      });
  }

  else if (action.type === ADD_INCOME_REQUEST) {
    return Object.assign({}, state,
    {
      loading: true,
      error: null
    });
  }
  else if (action.type === ADD_INCOME_SUCCESS) {

    return Object.assign({}, state,
      {
      income: action.amount,
      loading: false,
      error: null
      });
  }
  else if (action.type === ADD_INCOME_ERROR) {
    return Object.assign({}, state,
      {
        error: action.error,
        loading: false
      });
  }

}