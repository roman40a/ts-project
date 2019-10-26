import * as React from 'react';
import { SchemaNode } from '../schema-node/schema-node.component';

import css from './schema.module.css';
import { ArrowDirection } from '../arrow/arrow.component';

export class Schema extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.row}>
                    <SchemaNode
                        arrows={[
                            { where: ArrowDirection.Bottom, distance: 70 },
                        ]}
                    >
                        Start of while loop
                    </SchemaNode>
                </div>
                <div className={css.row}>
                    <SchemaNode isRed={true}>Stop running</SchemaNode>
                    <SchemaNode
                        arrows={[
                            {
                                where: ArrowDirection.Left,
                                distance: 70,
                                description: 'False',
                            },
                            {
                                where: ArrowDirection.Bottom,
                                distance: 70,
                                description: 'True',
                            },
                        ]}
                    >
                        "Energy > 0"
                    </SchemaNode>
                    <SchemaNode
                        arrows={[{ where: ArrowDirection.Left, distance: 70 }]}
                    >
                        Reduce Energy
                    </SchemaNode>
                </div>
                <div className={css.row}>
                    <SchemaNode>Run</SchemaNode>
                </div>
            </div>
        );
    }
}
