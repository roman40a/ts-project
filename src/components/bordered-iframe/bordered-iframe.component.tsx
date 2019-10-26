import * as React from 'react';
import css from './bordered-iframe.module.css';

type Props = {
    src: string;
};

export class BorderedIframe extends React.PureComponent<Props> {
    render() {
        const { src } = this.props;
        return (
            <div className={css.container}>
                <iframe
                    src={src}
                    title={'Game iframe'}
                    className={css.iframe}
                />
            </div>
        );
    }
}
