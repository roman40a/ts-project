import * as React from 'react';
import { Page } from '../../components/page/page';
import { VideoList } from '../../components/video-list/video-list.component';
import image from './images/camera.png';

import css from './screen-10.module.css';

const createArray = (n: number): null[] => {
    const arr = new Array(20);
    for (let i = 0; i < n; i++) {
        arr[i] = null;
    }
    return arr;
};

const DATA = createArray(50).map((_, i) => ({
    id: `${i}`,
    title: `Video-${i}`,
    src:
        'https://youix.com/get_file/4/b2b9ac11b04ff426e1142474879b573a11841107da/22000/22448/22448_480x320_youix_com.mp4/?br=489',
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
