import { combineReducers } from 'redux';

import getDataReducer from "./getDataReducer";
import getUserReducer from "./getUserReducer";

const rootReducer = combineReducers({
    data: getDataReducer,
    dataUser: getUserReducer
});

export default rootReducer;
