import * as React from 'react';
import cn from 'classnames';

import css from './arrow.module.css';

export enum ArrowDirection {
    Top,
    Right,
    Bottom,
    Left,
}

type ArrowProps = {
    where: ArrowDirection;
    distance: number;
};

export class ArrowComponent extends React.PureComponent<ArrowProps> {
    render() {
        const { where, distance } = this.props;
        const arrowContainerClassName = cn(css.container, {
            [css.container__top]: where === ArrowDirection.Top,
            [css.container__bottom]: where === ArrowDirection.Bottom,
            [css.container__right]: where === ArrowDirection.Right,
            [css.container__left]: where === ArrowDirection.Left,
        });
        return (
            <div
                style={{ width: distance }}
                className={arrowContainerClassName}
            />
        );
    }
}
