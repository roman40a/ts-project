import * as React from 'react';
import { Alien } from '../alien/alien.component';
import background from './images/background.jpg';

import css from './page.module.css';

type Props = {
    alienText: string;
};

export class Page extends React.PureComponent<Props> {
    render() {
        const { alienText, children } = this.props;
        return (
            <div
                style={{ backgroundImage: `url(${background})` }}
                className={css.container}
            >
                {children}
                <Alien text={alienText} />
            </div>
        );
    }
}
