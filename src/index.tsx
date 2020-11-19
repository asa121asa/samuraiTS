import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ReactDOM from "react-dom";
import App from "./App";


import Store, {StroreType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App Store={Store}
                 addPost={Store.addPost}
                 addMessage={Store.addMessage}/>,
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree()
Store.subscribe(Store.rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
