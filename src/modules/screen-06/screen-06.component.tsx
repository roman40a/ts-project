import * as React from 'react';
import { Page } from '../../components/page/page';
import {
    FormItem,
    UnderstandingForm,
} from '../../components/understanding-form/understanding-form.component';

import css from './screen-06.module.css';

const FORM_ITEMS: FormItem[] = [
    {
        id: '0',
        text:
            'Driving a car from town A to town B which involves a lot of random left and right turns.',
    },
    {
        id: '1',
        text:
            'The steps taken to open the internet browser and log into your email.',
    },
    {
        id: '2',
        text: 'A teacher stapling a bunch of exam papers.',
    },
    {
        id: '3',
        text: 'Listening to different songs on your album.',
    },
];

export class Screen06 extends React.PureComponent {
    handleSubmit = (ids: string[]): void => {
        console.log(ids);
    };

    render() {
        return (
            <Page
                alienText={'Some text jshd sdfsdf sdf sdfsdf sdf s dfs df '}
                headerText={'TEST YOUR UNDERSTANDING'}
            >
                <div className={css.formContainer}>
                    <UnderstandingForm
                        title="Which of the following scenario can be modeled using loops?"
                        items={FORM_ITEMS}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </Page>
        );
    }
}
