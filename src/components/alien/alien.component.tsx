import * as React from 'react';
import cn from 'classnames';
import alien from './images/alien.png';
import dialog from './images/dialog.png';

import css from './alien.module.css';

type State = {
    isHovered: boolean;
    isClicked: boolean;
};

type Props = {
    text: string;
};

export class Alien extends React.PureComponent<Props, State> {
    readonly state = {
        isHovered: false,
        isClicked: false,
    };

    handleAlienHidden = () => {
        this.setState(state => {
            if (state.isClicked) {
                return {
                    ...state,
                    isClicked: false,
                };
            }
            return state;
        });
    };

    componentDidMount(): void {
        window.addEventListener('click', this.handleAlienHidden);
    }

    componentWillUnmount(): void {
        window.removeEventListener('click', this.handleAlienHidden);
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        this.setState(state => ({ isClicked: !state.isClicked }));
    };

    render() {
        const { text } = this.props;
        const { isClicked, isHovered } = this.state;
        const isAlienShowed = isHovered || isClicked;

        const containerClassName = cn.default(css.container, {
            [css.container__opened]: isAlienShowed,
        });

        const dialogClassName = cn.default(css.dialog, {
            [css.dialog__opened]: isClicked,
        });
        return (
            <div className={containerClassName}>
                <div
                    className={css.alien}
                    style={{ backgroundImage: `url(${alien})` }}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.handleClick}
                />
                <div
                    className={dialogClassName}
                    style={{ backgroundImage: `url(${dialog})` }}
                >
                    <div className={css.text}>{text}</div>
                </div>
            </div>
        );
    }
}
