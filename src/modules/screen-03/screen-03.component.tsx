import * as React from 'react';
import { Page } from '../../components/page/page';
import { Player } from '../../components/player/player.component';
import { Schema } from '../../components/schema/schema.component';

import css from './screen-03.module.css';

export class Screen03 extends React.PureComponent {
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
                    <div className={css.content}>
                        <div className={css.schemaContainer}>
                            <Schema />
                        </div>
                        <div className={css.media}>media</div>
                    </div>
                </div>
            </Page>
        );
    }
}
