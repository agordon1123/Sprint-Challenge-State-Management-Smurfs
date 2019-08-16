import { 
    FETCH_SMURF_DATA_START, 
    FETCH_SMURF_DATA_SUCCESS,
    ERROR } from '../actions';

const initialState = {
    error: '',
    isLoading: false,
    smurfData: []
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                smurfData: action.payload
            };
        case ERROR:
            return {
                ...state,
                error: 'Server error :('
            }
        default:
            return state;
    }
}
