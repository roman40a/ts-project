import * as React from 'react';
import cn from 'classnames';

import css from './menu-button.module.css';

type Props = {
    isGreat?: boolean;
    children: string;
};

export class MenuButton extends React.PureComponent<Props> {
    render() {
        const { children, isGreat } = this.props;
        const containerClassName = cn(css.container, {
            [css.container__great]: isGreat,
        });
        const leftAngleClassName = cn(css.leftAngle, {
            [css.leftAngle__great]: isGreat,
        });
        const rightAngleClassName = cn(css.rightAngle, {
            [css.rightAngle__great]: isGreat,
        });
        const textClassName = cn(css.text, {
            [css.text__great]: isGreat,
        });
        return (
            <div className={containerClassName}>
                {isGreat && (
                    <div className={css.topBunch}>
                        <div className={css.secondTopBunch} />
                    </div>
                )}
                <div className={leftAngleClassName} />
                <div className={textClassName}>{children}</div>
                <div className={rightAngleClassName} />
            </div>
        );
    }
}
