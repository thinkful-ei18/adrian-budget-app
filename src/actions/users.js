import {API_BASE_URL} from '../config';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST
});

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = data => ({
  type: REGISTER_USER_SUCCESS,
  data
});

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = error => ({
  type: REGISTER_USER_ERROR,
  error
});

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  data
});

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUserError = error => ({
  type: LOGIN_USER_ERROR,
  error
});

export const ADD_INCOME_REQUEST = 'ADD_INCOME_REQUEST';
export const addIncomeRequest = () => ({
  type: ADD_INCOME_REQUEST
});

export const ADD_INCOME_SUCCESS =  'ADD_INCOME_SUCCESS';
export const addIncomeSuccess = amount => ({
  type: ADD_INCOME_SUCCESS,
  amount
});

export const ADD_INCOME_ERROR =  'ADD_INCOME_ERROR';
export const addIncomeError = error => ({
  type: ADD_INCOME_ERROR,
  error
});