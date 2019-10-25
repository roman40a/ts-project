import * as React from 'react';

import css from './screen-01.module.css';

export class Screen01 extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.panel}>
                    <div className={css.content}>
                        <div className={css.topTextContainer}>
                            <div className={css.topText}>
                                <div className={css.text}>
                                    There is no way I can defeat them if I
                                    insert bullets into my gun one by one
                                </div>
                                <div className={css.triangleTop} />
                            </div>
                        </div>
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
                        <div className={css.bottomTextContainer}>
                            <div className={css.bottomText}>
                                <div className={css.text}>
                                    You wil need to create a function...
                                </div>
                                <div className={css.triangleBottom} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
