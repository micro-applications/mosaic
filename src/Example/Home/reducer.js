import { NAVBAR } from './actions';

const initialState = {
    accessToken: '',
};

export default function navBarPage(state = initialState, action) {
    switch (action.type) {
        case NAVBAR:
            return {
                ...state,
            };
        default:
            return state;
    }
}