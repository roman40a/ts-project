import * as React from 'react';
import { Link } from 'react-router-dom';

import css from './nav-panel.module.css';

type Props = {
    urls: string[];
};

export class NavPanel extends React.PureComponent<Props> {
    render() {
        const { urls } = this.props;
        return (
            <nav className={css.container}>
                <ul className={css.content}>
                    {urls.map(url => (
                        <li className={css.item} key={url}>
                            <Link to={url}>{url}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
