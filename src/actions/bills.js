import {API_BASE_URL} from '../config';

export const ADD_BILL = 'ADD_BILL';
export const addBill = bill => ({
    type: ADD_BILL,
    bill
});

export const FETCH_BILLS_REQUEST = 'FETCH_BILLS_REQUEST';
export const fetchBillsRequest = () => ({
    type: FETCH_BILLS_REQUEST
});

export const FETCH_BILLS_SUCCESS = 'FETCH_BILLS_SUCCESS';
export const fetchBillsSuccess = data => ({
    type: FETCH_BILLS_SUCCESS,
    data
});

export const FETCH_BILLS_ERROR = 'FETCH_BILLS_ERROR';
export const fetchBillsError = error => ({
    type: FETCH_BILLS_ERROR,
    error
});

export default function getBills(bills) {

  return fetch(`${API_BASE_URL}/bills`).then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(data => data.map(bill => bill));
}

export const fetchBills = bills => dispatch => {
  console.log('Fetching bills....');
  dispatch(fetchBillsRequest());
  getBills(bills)
    .then(bills => {
    console.log('Found:', bills);
    dispatch(fetchBillsSuccess(bills));
    })
    .catch(error => {
    console.log('Could not find:', bills, 'Error:', error);
    dispatch(fetchBillsError(error));
  });

};