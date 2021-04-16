import React, {useRef, useEffect} from 'react';
import {Icon} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import MuiTextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {useForm, Controller} from "react-hook-form";
import './Tab.scss';
import {Form, Tab} from '../../store/tabReducer';
import {change_forms, next_tab, previous_tab} from "../../store/actionCreater";
import ResultTab from "../ResultTab/ResultTab";

const Button = styled(MuiButton)(spacing);
const TextField = styled(MuiTextField)(spacing)

interface TabProps extends Tab {
    isLast: boolean,
    isFirst: boolean
}

const Tab: React.FC<TabProps> = ({title, forms, isFirst, isLast, isResultTab, id}) => {
    const dispatch = useDispatch();
    const {handleSubmit, formState: {errors}, watch, control, reset} = useForm();

    // Устанавливает значения сохраненных ранее форм
    useEffect(() => {
        const defaultValues = forms?.reduce((acc:any, form: Form) => {
            acc[form.attr.name] = form.value;
            return acc;
        }, {})
        reset(defaultValues);
    }, [id])

    // Для валидации совпадающего пароля
    const password = useRef({});
    password.current = watch("password", "");

    const previousStepHandler = () => {
        dispatch(previous_tab())
    }

    const onSubmit = handleSubmit((data) => {
        dispatch(change_forms(data));
        dispatch(next_tab());
    })


    return (
        <div className='app__tab tab'>
            <h1 className='tab__title'>{title}</h1>
            {
                isResultTab
                    ?
                    <ResultTab />
                    :
                    <form className='tab__form form' onSubmit={onSubmit}>
                        <div className='form__inputs'>
                            {
                                forms.map(form => {
                                    const error = errors[form.attr.name];
                                    let myValidation: any = null;

                                    if (form.attr.name === 'confirm-password') {
                                        myValidation = {
                                            validate: (value: any) =>
                                                value === password.current || "Пароли не совпадают"
                                        }
                                    }
                                    return (
                                        <Controller
                                            key={form.id + form.label}
                                            name={form.attr.name}
                                            rules={myValidation || form.validation}
                                            control={control}
                                            render={({field}) => (
                                                <TextField
                                                    {...field}
                                                    error={error}
                                                    helperText={error ? error.message : ''}
                                                    {...form.attr}
                                                    label={form.label}
                                                    className='form__field'
                                                    m='auto'
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                />
                                            )}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="form__buttons buttons">
                            {
                                !isFirst
                                &&
                                <Button
                                    onClick={previousStepHandler}
                                    variant="contained"
                                    className='buttons__btn'
                                    m={1.2}
                                >Назад</Button>
                            }
                            {
                                isLast ?
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className='buttons__btn'
                                        endIcon={<Icon>send</Icon>}
                                        m={1.2}
                                    >
                                        отправить
                                    </Button>
                                    :
                                    <Button
                                        onClick={onSubmit}
                                        type='submit'
                                        variant="contained"
                                        color="primary"
                                        className='buttons__btn'
                                        m={1.2}
                                    >
                                        Вперед
                                    </Button>
                            }
                        </div>
                    </form>
            }
        </div>
    )
}

export default Tab;