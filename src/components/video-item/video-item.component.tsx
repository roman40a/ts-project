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
            <div
                className={css.container}
                // onMouseEnter={onSelect}
                style={{ backgroundImage: `url(${data.placeholderImg})` }}
            >
                {data.title}
            </div>
        );
    }
}
