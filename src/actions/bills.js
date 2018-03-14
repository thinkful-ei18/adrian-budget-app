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

export function getBills(bills) {

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

export const POST_BILL_REQUEST = 'POST_BILL_REQUEST';
export const postBillRequest = () => ({
    type: POST_BILL_REQUEST
});

export const POST_BILL_SUCCESS = 'POST_BILL_SUCCESS';
export const postBillSuccess = data => ({
    type: POST_BILL_SUCCESS,
    data
});

export const POST_BILL_ERROR = 'POST_BILL_ERROR';
export const postBillError = error => ({
    type: POST_BILL_ERROR,
    error
});

export function postBill(bill) {

    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
      method: 'POST',
      body: JSON.stringify(bill),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers
              .get('content-type')
              .startsWith('application/json')
          ) {
            return res.json().then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
        });
        }
        return;
      })
      .then(() => console.log('Added new bill:', bill))
  }

  export const createBill = bill => dispatch => {
    console.log('Posting bill....');
    dispatch(postBillRequest());
    postBill(bill)
      .then(bill => {
      console.log('Posted:', bill);
      dispatch(postBillSuccess(bill));
      })
      .catch(error => {
      console.log('Could not post:', bill, 'Error:', error);
      dispatch(postBillError(error));
    });
  };