import * as React from 'react';
import { Page } from '../../components/page/page';
import { VideoList } from '../../components/video-list/video-list.component';
import { Video } from '../../components/video-list/video-list.model';
import image from './images/camera.png';

import css from './screen-10.module.css';

const createArray = (n: number): null[] => {
    const arr = new Array(20);
    for (let i = 0; i < n; i++) {
        arr[i] = null;
    }
    return arr;
};

const DATA = createArray(20).map((_, i) => ({
    title: `Video-${i}`,
    src: `/video${i}`,
    placeholderImg: image,
}));

export class Screen10 extends React.PureComponent {
    handleNavPrevClick = () => {
        console.log('Nav Next clicked');
    };
    render() {
        return (
            <Page
                alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                headerText={'Select video'}
                onPrevClick={this.handleNavPrevClick}
            >
                <div className={css.menuContainer}>
                    <VideoList data={DATA} />
                </div>
            </Page>
        );
    }
}
