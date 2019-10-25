import React from 'react';
import css from './App.module.css';
import { Screen01 } from '../modules/screen-01/screen-01';

export class App extends React.PureComponent {
    handlePrevButtonClick = () => {
        console.log('Prev button clicked!');
    };

    handleNextButtonClick = () => {
        console.log('Next button clicked!');
    };

    render() {
        return (
            <div className={css.container}>
                <Screen01
                    topText="There is no way I can defeat them if I insert bullets into my gun one by one"
                    bottomText="You wil need to create a function..."
                    src="http://img.allzip.org/g/86/orig/588304.jpg"
                    onPrevButtonClick={this.handlePrevButtonClick}
                    onNextButtonClick={this.handleNextButtonClick}
                />
            </div>
        );
    }
}
