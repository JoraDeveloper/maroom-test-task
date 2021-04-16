import {combineReducers} from 'redux';
import tabReducer from "./tabReducer";
import {TabState} from "./tabReducer";

export interface StoreType {
    tab: TabState,
}

export default combineReducers({
    tab: tabReducer,
})