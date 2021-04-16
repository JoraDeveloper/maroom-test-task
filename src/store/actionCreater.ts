import {CHANGE_FORMS_VALUE, NEXT_TAB, PREVIOUS_TAB} from "./types";

export const next_tab = () => {
    return {
        type: NEXT_TAB
    }
}

export const previous_tab = () => {
    return {
        type: PREVIOUS_TAB
    }
}

export const change_forms = (payload: any) => {
    return {
        type: CHANGE_FORMS_VALUE,
        payload
    }
}
