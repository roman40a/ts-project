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

    render() {
        const { where, distance, description, nested } = this.props;
        return (
            <>
                <div
                    style={{ width: distance }}
                    className={this.getContainerClassName(where)}
                >
                    {description && (
                        <div className={css.description}>{description}</div>
                    )}
                </div>
                {nested && (
                    <div
                        style={{
                            width: nested.distance,
                            position: 'absolute',
                            left: distance,
                            top: this.getNestedArrowTop(nested.where),
                        }}
                        className={this.getContainerClassName(nested.where)}
                    >
                        {description && (
                            <div className={css.description}>
                                {nested.description}
                            </div>
                        )}
                    </div>
                )}
            </>
        );
    }
}
