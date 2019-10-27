import * as React from 'react';
import { Panel } from '../../components/panel/panel.compoentt';
import { Page } from '../../components/page/page';
import panelImage from './images/panel-image.jpg';

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
            <Page alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}>
                <div className={css.panelContainer}>
                    <Panel
                        topText="There is no way I can defeat them if I insert bullets into my gun one by one"
                        bottomText="You wil need to create a function..."
                        src={panelImage}
                        onPrevButtonClick={this.handlePrevButtonClick}
                        onNextButtonClick={this.handleNextButtonClick}
                    />
                </div>
            </Page>
        );
    }
}
