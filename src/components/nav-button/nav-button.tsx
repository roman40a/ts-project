import * as React from 'react';
import cn from 'classnames';

import css from './nav-button.module.css';

export enum NavButtonType {
    Prev,
    Next,
}

type Props = {
    type: NavButtonType;
    onClick(): void;
};

export class NavButton extends React.PureComponent<Props> {
    render() {
        const { type, onClick } = this.props;
        const svgClassName = cn.default(css.svg, {
            [css.svg__next]: type === NavButtonType.Next,
            [css.svg__prev]: type === NavButtonType.Prev,
        });

        const innerSvgClassName = cn.default(css.innerSvg, {
            [css.innerSvg__next]: type === NavButtonType.Next,
            [css.innerSvg__prev]: type === NavButtonType.Prev,
        });

        return (
            <div className={css.container} onClick={onClick}>
                <div className={css.arrowIconContainer}>
                    <svg
                        className={svgClassName}
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                    >
                        <path
                            className={css.polygon}
                            d="M13.035898384862 4.0455173280957a4 4 0 0 1 6.9282032302755 0l12.071796769724 20.908965343809a4 4 0 0 1 -3.4641016151378 6l-24.143593539449 0a4 4 0 0 1 -3.4641016151378 -6 l 12 -21"
                        />
                    </svg>
                    <svg
                        className={innerSvgClassName}
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                    >
                        <path
                            className={css.innerPolygon}
                            stroke="none"
                            fill="#20be86"
                            d="M12.767949192431 3.0766062413412a2 2 0 0 1 3.4641016151378 0l12.035898384862 20.846787517318a2 2 0 0 1 -1.7320508075689 3l-24.071796769724 0a2 2 0 0 1 -1.7320508075689 -3"
                        />
                        <linearGradient id="gradient-horizontal">
                            <stop offset={0} stopColor={'#f67227'} />
                            <stop offset={'100%'} stopColor={'#ffdd91'} />
                        </linearGradient>
                    </svg>
                </div>
            </div>
        );
    }
}
