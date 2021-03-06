import {API_BASE_URL} from '../config';

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

export const fetchBills = bills => (dispatch, getState) => {

    const token = getState().auth.authToken;
    // console.log('token:', token);
    console.log('state:', getState());

    if (token) {
        dispatch(fetchBillsRequest());

    return fetch(`${API_BASE_URL}/bills`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json(res);
    })
    .then(bills => {
    dispatch(fetchBillsSuccess(bills));
    })
    .catch(error => {
    dispatch(fetchBillsError(error));
  });
    }
};

export const POST_BILL_REQUEST = 'POST_BILL_REQUEST';
export const postBillRequest = () => ({
    type: POST_BILL_REQUEST
});

export const POST_BILL_SUCCESS = 'POST_BILL_SUCCESS';
export const postBillSuccess = bill => ({
    type: POST_BILL_SUCCESS,
    bill
});

export const POST_BILL_ERROR = 'POST_BILL_ERROR';
export const postBillError = error => ({
    type: POST_BILL_ERROR,
    error
});

export const postBill = bill => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

dispatch(postBillRequest());

    return fetch(`${API_BASE_URL}/bills`, {
      method: 'POST',
      body: JSON.stringify(bill),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
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
        return res.json(res);
      })
      .then(bill => {
          dispatch(postBillSuccess(bill))
      })
      .catch(error => {
          dispatch(postBillError(error));
      })
      .then(() => console.log('Added new bill:', bill))
  }