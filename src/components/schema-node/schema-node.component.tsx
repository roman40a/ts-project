import * as React from 'react';
import cn from 'classnames';

import css from './schema-node.module.css';
import { ArrowComponent, ArrowDirection } from '../arrow/arrow.component';

type Arrow = {
    where: ArrowDirection;
    distance: number;
};

type Props = {
    isRed?: boolean;
    arrow?: Arrow;
};

export class SchemaNode extends React.PureComponent<Props> {
    getArrowContainerClassName = (direction: ArrowDirection): string =>
        cn(css.arrowContainer, {
            [css.arrowContainer__top]: direction === ArrowDirection.Top,
            [css.arrowContainer__bottom]: direction === ArrowDirection.Bottom,
            [css.arrowContainer__right]: direction === ArrowDirection.Right,
            [css.arrowContainer__left]: direction === ArrowDirection.Left,
        });

    render() {
        const { children, isRed, arrow } = this.props;
        const containerClassName = cn(css.container, {
            [css.container__red]: isRed,
        });

        return (
            <div className={containerClassName}>
                {children}
                {arrow && (
                    <div
                        className={this.getArrowContainerClassName(arrow.where)}
                    >
                        <ArrowComponent
                            where={arrow.where}
                            distance={arrow.distance}
                        />
                    </div>
                )}
            </div>
        );
    }
}
