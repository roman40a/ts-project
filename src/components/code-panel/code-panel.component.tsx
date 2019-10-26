import * as React from 'react';

import css from './code-panel.module.css';

type CodeLineText = {
    text: string;
    subText?: CodeLineText[];
};

type Props = {
    codeLines: CodeLineText[];
};

type CodeLineProps = {
    text: string;
    children?: React.ReactNode | React.ReactNode[];
};

class CodeLine extends React.PureComponent<CodeLineProps> {
    render() {
        const { text, children } = this.props;
        return (
            <div className={css.codeLine}>
                {text}
                {children && (
                    <div className={css.subLineContainer}>{children}</div>
                )}
            </div>
        );
    }
}

export class CodePanel extends React.PureComponent<Props> {
    renderRecursive = (codeLine: CodeLineText): React.ReactNode => {
        const { text, subText } = codeLine;
        if (!subText) {
            return <CodeLine text={text} />;
        }
        return (
            <CodeLine text={text}>
                {subText.map(codeLine => this.renderRecursive(codeLine))}
            </CodeLine>
        );
    };

    render() {
        const { codeLines } = this.props;
        return (
            <div className={css.container}>
                <div className={css.code}>
                    {codeLines.map(codeLine => this.renderRecursive(codeLine))}
                </div>
                <div className={css.media}>media</div>
            </div>
        );
    }
}
