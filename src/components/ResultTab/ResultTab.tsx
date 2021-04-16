import React from 'react';
import './ResultTab.scss';
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../store/rootReducer";
import {Tab} from '../../store/tabReducer';
import Button from "@material-ui/core/Button";

type ViewForm = {
    name: string,
    value: string
}

type NameType = {
    [key:string]: string
}

const names: NameType =  {
    name: 'Имя',
    surname: 'Фамилия',
    father: 'Отчество',
    date: 'День рождения',
    email: 'E-mail'

}

const ResultTab = () => {
    const tabs: Tab[] = useSelector((store: StoreType) => store.tab.tabs);

    // Сохраняем данные в виде имя:значение
    const getFormData = (tabs: Tab[]) => {
        let result: ViewForm[] = [];
        tabs.forEach(tab => {
            result = [...result, ...tab.forms.map(({attr: {name}, value}) => ({name, value}))];
        })
        return result;
    }

    // Сохраняем данные в виде html-элементов
    const renderFormData = (forms: ViewForm[]) => {
        return forms
            .filter(({name}) => name !== 'password' && name !== 'confirm-password')
            .map(({name, value}) => (
            <div key={name}>
                <span>{names[name]}: </span>
                <span>{value}</span>
            </div>
        ))
    }

    // перезагрузка страницы
    const repeatHandler = () => {
        location.href=location.href;
    }

    return (
        <div className='tab__result-tab result-tab'>
            <div className="result-tab__container">
                {renderFormData(getFormData(tabs))}
            </div>
            <Button
                className='result-tab__btn'
                variant="contained"
                color="primary"
                onClick={repeatHandler}
            >
                В начало
            </Button>
        </div>
    )
}

export default ResultTab;