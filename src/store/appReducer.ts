import { AnyAction } from "redux";
import {

} from "./types";


interface AppState {
    activeTab: number
}

const initialState: AppState = {
    activeTab: 0
}

const appReducer = (state = initialState , action: AnyAction) => {
    switch (action.type) {
        default: return state;
    }
}

export default appReducer;