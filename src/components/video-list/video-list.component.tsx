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

    horCount: number;
    vertCount: number;
};

function getChunks<T>(data: T[], hor: number, vert: number): T[][][] {
    return data
        .reduce(
            (prev, _) => {
                const index = prev.index + hor * vert;
                const bigChunk = data.slice(prev.index, index);
                const chunk: T[][] = bigChunk
                    .reduce(
                        (prev, _) => {
                            const index = prev.index + hor;
                            const arr = [
                                ...prev.arr,
                                bigChunk.slice(prev.index, index),
                            ];
                            return { arr, index };
                        },
                        { arr: [] as T[][], index: 0 }
                    )
                    .arr.filter(arr => arr.length > 0);
                const arr = [...prev.arr, chunk];
                return { arr, index };
            },
            { arr: [] as T[][][], index: 0 }
        )
        .arr.filter(arr => arr.length > 0);
}

export class VideoList extends React.PureComponent<Props, State> {
    readonly state: State = {
        currChunkIndex: 0,
        selectedVideo: null,
        horCount: 0,
        vertCount: 0,
    };

    handleResize = (width: number, height: number) => {
        const horCount = Math.floor(width / 320);
        const vertCount = Math.floor(height / 180);

        const reducesHorCount = Math.min(
            4,
            horCount > 1 ? horCount - 1 : horCount
        );
        const reducesVertCount = Math.min(2, vertCount);

        this.setState({
            horCount: reducesHorCount,
            vertCount: reducesVertCount,
        });
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

    handleRightButtonClick = (chunks: Video[][][]) => () => {
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
        const {
            currChunkIndex,
            selectedVideo,
            horCount,
            vertCount,
        } = this.state;

        const chunks = getChunks(this.props.data, horCount, vertCount);
        const currChunk: Video[][] | null = chunks[currChunkIndex];

        return (
            <div className={css.container}>
                <div className={css.listContainer}>
                    <ReactResizeDetector
                        handleHeight={true}
                        handleWidth={true}
                        onResize={this.handleResize}
                    />
                    <div className={css.listWrapper}>
                        {currChunk &&
                            currChunk.map((videoRow, i) => (
                                <div key={i} className={css.listRow}>
                                    {videoRow.map((video, i) => (
                                        <VideoItem
                                            isActive={
                                                !!selectedVideo &&
                                                selectedVideo.id === video.id
                                            }
                                            key={i}
                                            data={video}
                                            onMouseEnter={this.handleVideoSelect(
                                                video
                                            )}
                                            onMouseLeave={this.handleVideoSelect(
                                                null
                                            )}
                                        />
                                    ))}
                                </div>
                            ))}
                    </div>
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
