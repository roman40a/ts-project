import * as React from 'react';
import {
    TextWithAngle,
    TextWithAngleType,
} from '../../components/text-with-angle/text-with-angle';

import css from './screen-01.module.css';

export class Screen01 extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.panel}>
                    <div className={css.content}>
                        <TextWithAngle type={TextWithAngleType.Top}>
                            There is no way I can defeat them if I insert
                            bullets into my gun one by one
                        </TextWithAngle>
                        <div className={css.mainContent}>
                            <div className={css.leftButtonContainer}>
                                leftButtonContainer
                            </div>
                            <div className={css.videoContainer}>
                                Video block
                            </div>
                            <div className={css.rightButtonContainer}>
                                rightButtonContainer
                            </div>
                        </div>
                        <TextWithAngle type={TextWithAngleType.Bottom}>
                            You wil need to create a function...
                        </TextWithAngle>
                    </div>
                </div>
            </div>
        );
    }
}
