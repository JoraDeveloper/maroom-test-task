import React from 'react';
import {render} from "react-dom";
import './style.scss';

const App = () => {
    return <h1>maroom-test-task</h1>
}

let root = document.getElementById('root');
render(<App/>, root);