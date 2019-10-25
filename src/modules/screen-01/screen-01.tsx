import * as React from 'react';
import {
    TextWithAngle,
    TextWithAngleType,
} from '../../components/text-with-angle/text-with-angle';
import {
    NavButton,
    NavButtonType,
} from '../../components/nav-button/nav-button';

import css from './screen-01.module.css';
import { Iframe } from '../../components/iframe/iframe';

type Props = {
    topText: string;
    bottomText: string;
    src: string;
    onPrevButtonClick(): void;
    onNextButtonClick(): void;
};

export class Screen01 extends React.PureComponent<Props> {
    render() {
        const {
            topText,
            bottomText,
            onPrevButtonClick,
            onNextButtonClick,
            src,
        } = this.props;
        return (
            <div className={css.container}>
                <div className={css.panel}>
                    <div className={css.content}>
                        <TextWithAngle type={TextWithAngleType.Top}>
                            {topText}
                        </TextWithAngle>
                        <div className={css.mainContent}>
                            <div className={css.leftButtonContainer}>
                                <NavButton
                                    onClick={onPrevButtonClick}
                                    type={NavButtonType.Prev}
                                />
                            </div>
                            <div className={css.videoContainer}>
                                <Iframe src={src} />
                            </div>
                            <div className={css.rightButtonContainer}>
                                <NavButton
                                    onClick={onNextButtonClick}
                                    type={NavButtonType.Next}
                                />
                            </div>
                        </div>
                        <TextWithAngle type={TextWithAngleType.Bottom}>
                            {bottomText}
                        </TextWithAngle>
                    </div>
                </div>
            </div>
        );
    }
}
