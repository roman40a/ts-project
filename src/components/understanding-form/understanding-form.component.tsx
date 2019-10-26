import * as React from 'react';

import css from './understanding-form.module.css';
import { CheckBox } from '../checkbox/checkbox.component';

export type FormItem = {
    id: string;
    text: string;
};

type Props = {
    title: string;
    items: FormItem[];
    onSubmit(ids: string[]): void;
};

type State = {
    checkedIds: string[];
};

export class UnderstandingForm extends React.PureComponent<Props, State> {
    readonly state: State = {
        checkedIds: [],
    };

    handleChange = (id: string) => () => {
        const { checkedIds } = this.state;
        const isIdChecked = checkedIds.includes(id);

        if (isIdChecked) {
            this.setState({
                checkedIds: checkedIds.filter(checkedId => checkedId !== id),
            });
        } else {
            this.setState({
                checkedIds: [...checkedIds, id],
            });
        }
    };

    handleSubmit = (ids: string[]) => () => {
        this.props.onSubmit(ids);
    };

    render() {
        const { title, items } = this.props;
        const { checkedIds } = this.state;
        return (
            <div className={css.container}>
                <div className={css.content}>
                    <div className={css.title}>{title}</div>
                    <div className={css.content}>
                        {items.map(item => (
                            <CheckBox
                                key={item.id}
                                value={checkedIds.includes(item.id)}
                                onChange={this.handleChange(item.id)}
                            >
                                {item.text}
                            </CheckBox>
                        ))}
                    </div>
                    <div className={css.footer}>
                        <div
                            className={css.submit}
                            onClick={this.handleSubmit(checkedIds)}
                        >
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
