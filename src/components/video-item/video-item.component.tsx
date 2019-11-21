import React from 'react';
import { Video } from '../video-list/video-list.model';

import css from './video-item.module.css';

type Props = {
    isActive: boolean;
    data: Video;
    onMouseEnter(): void;
    onMouseLeave(): void;
};

export class VideoItem extends React.PureComponent<Props> {
    render() {
        const { data, onMouseEnter, onMouseLeave, isActive } = this.props;
        return (
            <div
                className={css.container}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ backgroundImage: `url(${data.placeholderImg})` }}
            >
                {!isActive ? (
                    data.title
                ) : (
                    <iframe
                        title={data.title}
                        width="100%"
                        height="100%"
                        src={data.src}
                    />
                )}
            </div>
        );
    }
}
