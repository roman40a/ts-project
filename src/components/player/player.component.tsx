import * as React from 'react';
import {
    PlayerButtonType,
    PlayerButton,
} from '../player-button/player-button.component';

import css from './player.module.css';

type Props = {
    onPrevClick(): void;
    onNextClick(): void;
    onPlayClick(): void;
    onPauseClick(): void;
};

export class Player extends React.PureComponent<Props> {
    render() {
        return (
            <div className={css.container}>
                <PlayerButton type={PlayerButtonType.Prev} />
                <PlayerButton type={PlayerButtonType.Play} />
                <PlayerButton type={PlayerButtonType.Pause} />
                <PlayerButton type={PlayerButtonType.Next} />
            </div>
        );
    }
}
