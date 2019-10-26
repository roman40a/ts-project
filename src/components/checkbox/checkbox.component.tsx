import * as React from 'react';
import cn from 'classnames';

import css from './checkbox.module.css';

type CheckBoxProps = {
    children: string;
    value: boolean;
    onChange(): void;
};

export class CheckBox extends React.PureComponent<CheckBoxProps> {
    render() {
        const { value, onChange, children } = this.props;
        const checkClassName = cn(css.check, {
            [css.check__checked]: value,
        });
        return (
            <div className={css.container}>
                <div className={checkClassName} onClick={onChange} />
                <div className={css.text}>{children}</div>
            </div>
        );
    }
}
