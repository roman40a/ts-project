import * as React from 'react';
import { Page } from '../../components/page/page';
import { Player } from '../../components/player/player.component';

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
                <Player
                    onPrevClick={this.handlePrevClick}
                    onNextClick={this.handleNextClick}
                    onPlayClick={this.handlePlayClick}
                    onPauseClick={this.handlePauseClick}
                />
            </Page>
        );
    }
}
