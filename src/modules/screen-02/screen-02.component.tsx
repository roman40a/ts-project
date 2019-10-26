import * as React from 'react';
import { Page } from '../../components/page/page';
import { BorderedIframe } from '../../components/bordered-iframe/bordered-iframe.component';

import css from './screen-02.module.css';

export class Screen02 extends React.PureComponent {
    render() {
        return (
            <Page alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}>
                <h1 className={css.header}>Test the game!</h1>
                <BorderedIframe src={'/screen-01'} />
            </Page>
        );
    }
}
