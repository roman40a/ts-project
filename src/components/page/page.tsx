import * as React from 'react';
import { Alien } from '../alien/alien.component';
import background from './images/background_image.jpeg';

import css from './page.module.css';
import { NavButton, NavButtonType } from '../nav-button/nav-button.component';

type Props = {
    alienText: string;
    headerText?: string;
    onNextClick?(): void;
};

export class Page extends React.PureComponent<Props> {
    render() {
        const { alienText, headerText, onNextClick, children } = this.props;
        return (
            <div
                style={{ backgroundImage: `url(${background})` }}
                className={css.container}
            >
                {headerText && <h1 className={css.header}>{headerText}</h1>}
                {children}
                <Alien text={alienText} />
                {onNextClick && (
                    <div className={css.navButtonContainer}>
                        <NavButton
                            type={NavButtonType.Next}
                            onClick={onNextClick}
                        />
                    </div>
                )}
            </div>
        );
    }
}
