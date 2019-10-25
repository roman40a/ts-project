import React from 'react';
import css from './App.module.css';
import { Screen01 } from '../modules/screen-01/screen-01';

export class App extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <Screen01 />
            </div>
        );
    }
}
