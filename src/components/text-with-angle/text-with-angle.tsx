import * as React from 'react';
import cn from 'classnames';

import css from './text-with-angle.module.css';

export enum TextWithAngleType {
    Top,
    Bottom,
}

type Props = {
    type: TextWithAngleType;
};

export class TextWithAngle extends React.PureComponent<Props> {
    render() {
        const { type, children } = this.props;

        const containerClassName = cn.default({
            [css.topTextContainer as string]: type === TextWithAngleType.Top,
            [css.bottomTextContainer as string]:
                type === TextWithAngleType.Bottom,
        });

        const contentClassName = cn.default({
            [css.topText as string]: type === TextWithAngleType.Top,
            [css.bottomText as string]: type === TextWithAngleType.Bottom,
        });

        const triangleClassName = cn.default({
            [css.triangleTop as string]: type === TextWithAngleType.Top,
            [css.triangleBottom as string]: type === TextWithAngleType.Bottom,
        });

        return (
            <div className={containerClassName}>
                <div className={contentClassName}>
                    <div className={css.text}>{children}</div>
                    <div className={triangleClassName} />
                </div>
            </div>
        );
    }
}
