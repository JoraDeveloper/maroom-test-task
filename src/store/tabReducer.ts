import { AnyAction } from "redux";
import {
    CHANGE_FORMS_VALUE, DEFAULT_STATE, NEXT_TAB, PREVIOUS_TAB
} from "./types";

export interface Form {
    id: number,
    value: string,
    label: string,
    validation?: any,
    attr?: {
        name?:string
        [key:string]: any
    },
}

export interface Tab {
    id: number
    title: string,
    forms: Form[],
    isResultTab?: boolean,
    isActive: boolean
}

export interface TabState {
    tabs: Tab[],
    activeTabId: number
}

export const initialState: TabState = {
    activeTabId: 0,
    tabs: [
        {
            id: 0,
            title: 'ФИО',
            isActive: true,
            forms: [
                {
                    id: 0,
                    value: '',
                    label: 'Фамилия',
                    validation: {
                        required: 'Поле не должно быть пустым',
                        minLength: {
                            value: 3,
                            message: 'Не меньше 3 символов',
                        },
                        pattern: {
                            value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                            message: 'Только латинские символы'
                        }
                    },
                    attr: {
                        name: 'surname'
                    }
                },
                {
                    id: 1,
                    value: '',
                    label: 'Имя',
                    validation: {
                        required: 'Поле не должно быть пустым',
                        minLength: {
                            value: 3,
                            message: 'Не меньше 3 символов',
                        },
                        pattern: {
                            value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                            message: 'Только латинские символы'
                        }
                    },
                    attr: {
                        name: 'name'
                    }
                },
                {
                    id: 2,
                    value: '',
                    label: 'Отчество',
                    validation: {
                        required: 'Поле не должно быть пустым',
                        minLength: {
                            value: 3,
                            message: 'Не меньше 3 символов',
                        },
                        pattern: {
                            value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                            message: 'Только латинские символы'
                        }
                    },
                    attr: {
                        name: 'father'
                    }
                },
                {
                    id: 3,
                    value: '',
                    label: 'Дата рождения',
                    validation: true,
                    attr: {
                        type: 'date',
                        name: 'date',
                    }
                }
            ],
        },
        {
            id: 1,
            title: 'Ваш E-mail',
            isActive: false,
            forms: [
                {
                    id: 4,
                    value: '',
                    label: 'E-mail',
                    validation: {
                        required: 'Поле не должно быть пустым',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Невалидный E-mail'
                        }
                    },
                    attr: {
                        type: 'email',
                        name: 'email'
                    }
                }
            ]

        },
        {
            id:2,
            isActive: false,
            title: 'Пароль',
            forms: [
                {
                    id: 5,
                    value: '',
                    validation: {
                        minLength: {
                            value: 6,
                            message: 'Не менее 6 символов'
                        }
                    },
                    label: 'Пароль',
                    attr: {
                        type: 'password',
                        name: 'password'
                    }
                },
                {
                    id: 6,
                    value: '',
                    validation: true,
                    label: 'Подтверждение пароля',
                    attr: {
                        type: 'password',
                        name: 'confirm-password'
                    }
                }
            ]
        },
        {
            id: 3,
            forms: [],
            title: 'Итог',
            isActive: false,
            isResultTab: true
        }
    ]
}

// Ищем во всех табах все формы, которые надо заменить
const setForm = (tabs: Tab[], payload: {[key:string]: string}): Tab[] => {
    return tabs.map(tab => {
        tab = {
            ...tab,
            forms: tab.forms.map(form => {
                if (payload[form.attr.name]) {
                    form.value = payload[form.attr.name];
                }
                return form;
            })
        }
        return tab;
    })
}


const tabReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case NEXT_TAB:
            return {
                ...state, activeTabId: state.activeTabId + 1
            }
        case PREVIOUS_TAB:
            return {
                ...state, activeTabId: state.activeTabId - 1
            }
        case CHANGE_FORMS_VALUE:
            return {
                ...state, tabs: setForm(state.tabs, action.payload)
            }
        default: return state;
    }
}



export default tabReducer;