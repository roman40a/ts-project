import React, { MouseEventHandler } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { Video } from './video-list.model';
import { NavButton, NavButtonType } from '../nav-button/nav-button.component';
import { VideoItem } from '../video-item/video-item.component';

import css from './video-list.module.css';

type Props = {
    data: Video[];
};

type State = {
    currChunk: number;
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
        currChunk: 0,
        selectedVideo: null,
        numberOfElements: 8,
    };

    handleResize = (width: number, height: number) => {
        const horCount = Math.floor(width / (150 + 30));
        const vertCount = Math.floor(height / (150 + 30));

        this.setState({ numberOfElements: horCount * vertCount });
    };

    handleLeftButtonClick = () => {
        this.setState(state => {
            const { currChunk } = state;
            if (currChunk <= 0) {
                return { currChunk };
            }
            return {
                currChunk: currChunk - 1,
            };
        });
    };

    handleRightButtonClick = (chunks: Video[][]) => () => {
        this.setState(state => {
            const { currChunk } = state;
            if (currChunk >= chunks.length - 1) {
                return { currChunk };
            }
            return {
                currChunk: currChunk + 1,
            };
        });
    };

    handleCloseModal: MouseEventHandler<HTMLDivElement> = e => {
        const { target, currentTarget } = e;
        if (target === currentTarget) {
            this.setState({ selectedVideo: null });
        }
    };

    handleVideoSelect = (video: Video) => () =>
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
        const { currChunk, selectedVideo, numberOfElements } = this.state;

        const chunks = getChunks(this.props.data, numberOfElements);

        return (
            <div className={css.container}>
                <div className={css.listWrapper}>
                    <ReactResizeDetector
                        handleHeight={true}
                        handleWidth={true}
                        onResize={this.handleResize}
                    />
                    {chunks[currChunk].map((video, i) => (
                        <VideoItem
                            key={i}
                            data={video}
                            onSelect={this.handleVideoSelect(video)}
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
                {selectedVideo && (
                    <div
                        className={css.modalWrapper}
                        onClick={this.handleCloseModal}
                    >
                        <div className={css.modalMain}>
                            <div className={css.modalContent}>
                                {selectedVideo.title}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}