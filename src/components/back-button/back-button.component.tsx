import React from 'react';

import css from './back-button.module.css';

type Props = {
    onBack(): void;
};

export class BackButton extends React.PureComponent<Props> {
    render() {
        return <div className={css.container} />;
    }
}
