import * as React from 'react';
import { Page } from '../../components/page/page';
import { Player } from '../../components/player/player.component';
import { CodePanel } from '../../components/code-panel/code-panel.component';

import css from './screen-05.module.css';

const CODE_LINES = [
    {
        text: 'Energy = 3;',
    },
    {
        text: 'while(Energy > 0):',
        subText: [
            {
                text: 'run();',
            },
            { text: 'Energy = Energy - 1;' },
        ],
    },
    {
        text: 'stopRunning();',
        subText: [
            {
                text: 'Energy = 3;',
            },
            {
                text: 'while(Energy > 0):',
                subText: [
                    {
                        text: 'run();',
                    },
                    { text: 'Energy = Energy - 1;' },
                ],
            },
            {
                text: 'stopRunning();',
            },
        ],
    },
];

export class Screen05 extends React.PureComponent {
    handlePrevClick = () => {
        console.log('Prev clicked');
    };

    handleNextClick = () => {
        console.log('Next clicked');
    };

    handlePlayClick = () => {
        console.log('Play clicked');
    };

    handlePauseClick = () => {
        console.log('Pause clicked');
    };

    handleNavNextClick = () => {
        console.log('Nav Next clicked');
    };

    render() {
        return (
            <Page
                alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                headerText={'While loops...'}
                onNextClick={this.handleNavNextClick}
            >
                <div className={css.wrapper}>
                    <div className={css.playerContainer}>
                        <Player
                            onPrevClick={this.handlePrevClick}
                            onNextClick={this.handleNextClick}
                            onPlayClick={this.handlePlayClick}
                            onPauseClick={this.handlePauseClick}
                        />
                    </div>
                    <div className={css.codePanelContainer}>
                        <CodePanel codeLines={CODE_LINES} />
                    </div>
                </div>
            </Page>
        );
    }
}
