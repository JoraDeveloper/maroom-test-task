import { AnyAction } from "redux";
import {
    CHAGE_ACTIVE
} from "./types";

interface Tab {
    title: string,
    forms: string[],
    isActive: boolean
}

interface TabState {
    tabs: Tab[],
}

const initialState: TabState = {
    tabs: [
        {
            title: 'Ваше имя',
            forms: ['1', '2'],
            isActive: false
        }
    ]
}

const tabReducer = (state = initialState , action: AnyAction) => {
    switch (action.type) {
        case CHAGE_ACTIVE:
            return {
                ...state
            }
        default: return state;
    }
}

export default tabReducer;