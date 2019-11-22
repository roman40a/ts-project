import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { Video } from './video-list.model';
import { NavButton, NavButtonType } from '../nav-button/nav-button.component';
import { VideoItem } from '../video-item/video-item.component';

import css from './video-list.module.css';

type Props = {
    data: Video[];
};

type State = {
    currChunkIndex: number;
    selectedVideo: Video | null;
    numberOfElements: number;
};

function getChunks<T>(data: T[], n: number): T[][] {
    return data
        .reduce(
            (prev, _) => {
                const index = prev.index + n;
                const arr = [...prev.arr, data.slice(prev.index, index)];
                return { arr, index };
            },
            { arr: [] as T[][], index: 0 }
        )
        .arr.filter(arr => arr.length > 0);
}

export class VideoList extends React.PureComponent<Props, State> {
    readonly state: State = {
        currChunkIndex: 0,
        selectedVideo: null,
        numberOfElements: 8,
    };

    handleResize = (width: number, height: number) => {
        const horCount = Math.floor(width / (300 + 60));
        const vertCount = Math.floor(height / (300 + 60));

        this.setState({ numberOfElements: horCount * vertCount });
    };

    handleLeftButtonClick = () => {
        this.setState(state => {
            const { currChunkIndex } = state;
            if (currChunkIndex <= 0) {
                return { currChunkIndex: currChunkIndex };
            }
            return {
                currChunkIndex: currChunkIndex - 1,
            };
        });
    };

    handleRightButtonClick = (chunks: Video[][]) => () => {
        this.setState(state => {
            const { currChunkIndex } = state;
            if (currChunkIndex >= chunks.length - 1) {
                return { currChunkIndex };
            }
            return {
                currChunkIndex: currChunkIndex + 1,
            };
        });
    };

    handleVideoSelect = (video: Video | null) => () =>
        this.setState({ selectedVideo: video });

    handlePrevClick = () => {
        console.log('Prev clicked');
    };

    handleNextClick = () => {
        console.log('Next clicked');
    };

    handlePlayClick = () => {
        console.log('Play clicked');
    };

    handlePauseClick = () => {
        console.log('Pause clicked');
    };

    handleNavNextClick = () => {
        console.log('Nav Next clicked');
    };

    render() {
        const { currChunkIndex, selectedVideo, numberOfElements } = this.state;

        const chunks = getChunks(this.props.data, numberOfElements);
        const currChunk: Video[] | null = chunks[currChunkIndex];

        return (
            <div className={css.container}>
                <div className={css.listWrapper}>
                    <ReactResizeDetector
                        handleHeight={true}
                        handleWidth={true}
                        onResize={this.handleResize}
                    />
                    {currChunk &&
                        currChunk.map((video, i) => (
                            <VideoItem
                                isActive={
                                    !!selectedVideo &&
                                    selectedVideo.id === video.id
                                }
                                key={i}
                                data={video}
                                onMouseEnter={this.handleVideoSelect(video)}
                                onMouseLeave={this.handleVideoSelect(null)}
                            />
                        ))}
                </div>
                <div className={css.navWrapper}>
                    <div className={css.leftButton}>
                        <NavButton
                            onClick={this.handleLeftButtonClick}
                            type={NavButtonType.Prev}
                        />
                    </div>
                    <div className={css.rightButton}>
                        <NavButton
                            onClick={this.handleRightButtonClick(chunks)}
                            type={NavButtonType.Next}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
