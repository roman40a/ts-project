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
    description?: string;
    nested?: ArrowProps;
};

export class ArrowComponent extends React.PureComponent<ArrowProps> {
    getContainerClassName = (where: ArrowDirection): string =>
        cn(css.container, {
            [css.container__top]: where === ArrowDirection.Top,
            [css.container__bottom]: where === ArrowDirection.Bottom,
            [css.container__right]: where === ArrowDirection.Right,
            [css.container__left]: where === ArrowDirection.Left,
        });

    getNestedArrowTop = (where: ArrowDirection): string => {
        switch (where) {
            case ArrowDirection.Bottom: {
                return '-50%';
            }
            case ArrowDirection.Top: {
                return '50%';
            }
            case ArrowDirection.Left:
            case ArrowDirection.Right: {
                return '0';
            }
        }
    };

    renderArrowBody = (style?: React.CSSProperties) => (
        where: ArrowDirection,
        distance: number,
        description?: string
    ): React.ReactNode => (
        <div
            style={{ width: distance, ...style }}
            className={this.getContainerClassName(where)}
        >
            {description && (
                <div className={css.description}>{description}</div>
            )}
        </div>
    );

    renderNested = (distance: number) => (
        arrow: ArrowProps
    ): React.ReactNode[] => {
        const arrowBody = this.renderArrowBody({
            position: 'absolute',
            left: distance,
            top: this.getNestedArrowTop(arrow.where),
        })(arrow.where, arrow.distance, arrow.description);
        if (!arrow.nested) {
            return [arrowBody];
        }
        return [arrowBody, ...this.renderNested(arrow.distance)(arrow.nested)];
    };

    render() {
        const { where, distance, description, nested } = this.props;
        return (
            <>
                {this.renderArrowBody()(where, distance, description)}
                {nested && this.renderNested(distance)(nested)}
            </>
        );
    }
}
