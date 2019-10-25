import * as React from 'react';
import { Alien } from '../../components/alien/alien.component';
import { Panel } from '../../components/panel/panel.compoentt';

import css from './screen-01.module.css';

export class Screen01 extends React.PureComponent {
    handlePrevButtonClick = () => {
        console.log('Prev button clicked!');
    };

    handleNextButtonClick = () => {
        console.log('Next button clicked!');
    };

    render() {
        return (
            <div className={css.container}>
                <Panel
                    topText="There is no way I can defeat them if I insert bullets into my gun one by one"
                    bottomText="You wil need to create a function..."
                    src="http://img.allzip.org/g/86/orig/588304.jpg"
                    onPrevButtonClick={this.handlePrevButtonClick}
                    onNextButtonClick={this.handleNextButtonClick}
                />
                <Alien
                    text={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                />
            </div>
        );
    }
}
