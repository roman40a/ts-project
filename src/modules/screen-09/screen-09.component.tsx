import * as React from 'react';
import { Page } from '../../components/page/page';
import { Menu } from '../../components/menu/menu.component';

import css from './screen-09.module.css';

export class Screen09 extends React.PureComponent {
    handleNavNextClick = () => {
        console.log('Nav Next clicked');
    };
    render() {
        return (
            <Page
                alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                onNextClick={this.handleNavNextClick}
            >
                <div className={css.menuContainer}>
                    <Menu />
                </div>
            </Page>
        );
    }
}
