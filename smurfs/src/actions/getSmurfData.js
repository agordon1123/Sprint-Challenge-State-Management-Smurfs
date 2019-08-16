import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const ERROR = 'ERROR';

export const getSmurfData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_DATA_START });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log('err ', err)
                // disptach({ type: ERROR, payload: err })
            })
    }
}
