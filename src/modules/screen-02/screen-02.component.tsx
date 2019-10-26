import * as React from 'react';
import { Page } from '../../components/page/page';
import { BorderedIframe } from '../../components/bordered-iframe/bordered-iframe.component';

export class Screen02 extends React.PureComponent {
    render() {
        return (
            <Page
                alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                headerText={'Test the game!'}
            >
                <BorderedIframe src={'/screen-01'} />
            </Page>
        );
    }
}
