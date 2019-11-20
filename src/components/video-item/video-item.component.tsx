import React from 'react';
import { Video } from '../video-list/video-list.model';

import css from './video-item.module.css';

type Props = {
    data: Video;
    onSelect(): void;
};

export class VideoItem extends React.PureComponent<Props> {
    render() {
        const { data, onSelect } = this.props;
        return (
            <div className={css.container} onClick={onSelect}>
                {data.title}
            </div>
        );
    }
}
