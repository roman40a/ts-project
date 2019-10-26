import * as React from 'react';
import prevImg from './images/prev.png';
import playImg from './images/play.png';
import pauseImg from './images/pause.png';
import nextImg from './images/next.png';

import css from './player-button.module.css';

type Props = {
    type: PlayerButtonType;
};

export enum PlayerButtonType {
    Prev,
    Play,
    Pause,
    Next,
}

const getImage = (type: PlayerButtonType): string => {
    switch (type) {
        case PlayerButtonType.Prev: {
            return prevImg;
        }
        case PlayerButtonType.Play: {
            return playImg;
        }
        case PlayerButtonType.Pause: {
            return pauseImg;
        }
        case PlayerButtonType.Next: {
            return nextImg;
        }
    }
};

export class PlayerButton extends React.PureComponent<Props> {
    render() {
        const { type } = this.props;
        return (
            <div
                className={css.container}
                style={{ backgroundImage: `url(${getImage(type)})` }}
            />
        );
    }
}
