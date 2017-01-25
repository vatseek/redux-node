import {INCREMENT_COUNTER} from 'redux/actions/counterActions';

const initialState = {value: 0};

export default function (state = initialState, action) {
    if (action.type === INCREMENT_COUNTER) {
        return {value: state.value + 1};
    } else {
        return state;
    }
}
