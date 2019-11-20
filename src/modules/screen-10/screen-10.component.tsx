import * as React from 'react';
import { Page } from '../../components/page/page';
import { VideoList } from '../../components/video-list/video-list.component';
import { Video } from '../../components/video-list/video-list.model';

import css from './screen-10.module.css';

const createArray = (n: number): null[] => {
    const arr = new Array(20);
    for (let i = 0; i < n; i++) {
        arr[i] = null;
    }
    return arr;
};

const DATA: Video[] = createArray(20).map((_, i) => ({
    title: `Video-${i}`,
    src: `/video${i}`,
}));

export class Screen10 extends React.PureComponent {
    handleNavNextClick = () => {
        console.log('Nav Next clicked');
    };
    render() {
        return (
            <Page
                alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                headerText={'Select video'}
                onNextClick={this.handleNavNextClick}
            >
                <div className={css.menuContainer}>
                    <VideoList data={DATA} />
                </div>
            </Page>
        );
    }
}
