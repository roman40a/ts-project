import * as React from 'react';

import css from './iframe.module.css';

type Props = {
    src: string;
};

export class Iframe extends React.PureComponent<Props> {
    render() {
        const { src } = this.props;
        return <img className={css.iframe} src={src} alt={'Video block'} />;
    }
}
