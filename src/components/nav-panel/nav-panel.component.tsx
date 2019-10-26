import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    urls: string[];
};

export class NavPanel extends React.PureComponent<Props> {
    render() {
        const { urls } = this.props;
        return (
            <nav>
                <ul>
                    {urls.map(url => (
                        <li key={url}>
                            <Link to={url}>{url}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
