import * as React from 'react';
import { Alien } from '../alien/alien.component';
import background from './images/background_image.jpeg';

import css from './page.module.css';
import { NavButton, NavButtonType } from '../nav-button/nav-button.component';
import { BackButton } from '../back-button/back-button.component';

type Props = {
    alienText: string;
    headerText?: string;
    onNextClick?(): void;
    onPrevClick?(): void;
};

export class Page extends React.PureComponent<Props> {
    render() {
        const {
            alienText,
            headerText,
            onNextClick,
            onPrevClick,
            children,
        } = this.props;
        return (
            <div
                style={{ backgroundImage: `url(${background})` }}
                className={css.container}
            >
                {headerText && <h1 className={css.header}>{headerText}</h1>}
                <div className={css.content}>{children}</div>
                <Alien text={alienText} />
                {onNextClick && (
                    <div className={css.navButtonNextContainer}>
                        <NavButton
                            type={NavButtonType.Next}
                            onClick={onNextClick}
                        />
                    </div>
                )}
                {onPrevClick && (
                    <div className={css.navButtonPrevContainer}>
                        <BackButton onBack={onPrevClick} />
                    </div>
                )}
            </div>
        );
    }
}
