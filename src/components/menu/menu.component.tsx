import * as React from 'react';
import { MenuButton } from '../menu-button/menu-button.component';

import css from './menu.module.css';

export class Menu extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <MenuButton isGreat={true}>Main Menu</MenuButton>
                <MenuButton>New game</MenuButton>
                <MenuButton>High Scores</MenuButton>
                <MenuButton>Options</MenuButton>
                <MenuButton>Exit</MenuButton>
            </div>
        );
    }
}
