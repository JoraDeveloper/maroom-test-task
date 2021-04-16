# maroom-test-task
## Тестовое задание для maroom.ru

DEMO: https://protected-dusk-49759.herokuapp.com/

## Инструкция по запуску:
```sh
npm install 
npm run go
```
## Используемые технологии:
- HTML, SCSS, TS
- React, Redux
- Webpack

## Зависимости:
 - [MATERIAL-UI](https://material-ui.com/)
 - [React Hook Form](https://react-hook-form.com/)

## Дополнительно: Масштабируемость
### Добавление нового шага:
Достаточно в переменную initialState, объявленную в файле tabReducer.ts, добавить новый объект в массив tab:

| Имя | Тип | Описание | 
| ------ | ------ | ------ |
| id | number | id шага
| title | string | Заголовок шага
| forms | Form[] | Массив полей шага
| isResultTab? | boolean | Добавляется для шага, показывающего результат формы

Пример: 

```JavaScript
const tab = {
    id: 1,
    title: 'E-mail',
    forms: [...]
}
```
Описание для объекта типа Form:

| Имя | Тип | Описание | 
| ------ | ------ | ------ |
| id | number | id поля
| value | string | Значение в поле по умолчанию
| label | string | Описание для поля
| validation? | any | Правила валидации
| attr? | any | Атрибуты формы

Пример поля формы:

```JavaScript
const form = {
    id: 1,
    value: 'George',
    label: 'Name',
    validation: {
        required: true
    },
    attr: {
        name: 'name'
    }
}
```

### Добавление валидации:

Достаточно в поле validation объекта Form указать необходимые правила, согласно добавлению правил в react-hook-form, например: 

```JavaScript
const form = {
    ...
    validation: {
        required: 'You forgot to give a name',
        minLength: {
            value: 3,
            message: 'Min length is 3'
        }
    },
   ...
}
```

