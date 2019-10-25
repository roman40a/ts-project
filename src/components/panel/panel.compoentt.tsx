import * as React from 'react';
import {
    TextWithAngle,
    TextWithAngleType,
} from '../text-with-angle/text-with-angle.component';
import { NavButton, NavButtonType } from '../nav-button/nav-button.component';
import { Iframe } from '../iframe/iframe.component';

import css from './panel.module.css';

type Props = {
    topText: string;
    bottomText: string;
    src: string;
    onPrevButtonClick(): void;
    onNextButtonClick(): void;
};

export class Panel extends React.PureComponent<Props> {
    render() {
        const {
            topText,
            bottomText,
            onPrevButtonClick,
            onNextButtonClick,
            src,
        } = this.props;
        return (
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
        );
    }
}
