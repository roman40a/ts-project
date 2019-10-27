import * as React from 'react';
import cn from 'classnames';
import alien from './images/alien.png';
import dialog from './images/dialog.png';

import css from './alien.module.css';

type State = {
    isClicked: boolean;
};

type Props = {
    text: string;
};

export class Alien extends React.PureComponent<Props, State> {
    readonly state = {
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

    handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        this.setState(state => ({ isClicked: !state.isClicked }));
    };

    render() {
        const { text } = this.props;
        const { isClicked } = this.state;

        const alienClassName = cn.default(css.alien, {
            [css.alien__clicked]: isClicked,
        });

        const dialogClassName = cn.default(css.dialog, {
            [css.dialog__opened]: isClicked,
        });
        return (
            <div className={css.container}>
                <div
                    className={alienClassName}
                    style={{ backgroundImage: `url(${alien})` }}
                    onClick={this.handleClick}
                >
                    <div
                        className={dialogClassName}
                        style={{
                            backgroundImage: `url(${dialog})`,
                        }}
                    >
                        <div className={css.text}>{text}</div>
                    </div>
                </div>
            </div>
        );
    }
}
