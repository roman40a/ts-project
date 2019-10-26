import React from 'react';
import css from './App.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { NavPanel } from '../components/nav-panel/nav-panel.component';
import { Screen01 } from '../modules/screen-01/screen-01.component';

type NavRoute = {
    url: string;
    component: React.ReactNode;
};

const NAV_ROUTES: NavRoute[] = [
    {
        url: '/screen-01',
        component: <Screen01 />,
    },
];

export class App extends React.PureComponent {
    render() {
        const urls = NAV_ROUTES.map(route => route.url);

        return (
            <Router>
                <div className={css.container}>
                    <NavPanel urls={urls} />
                    <Switch>
                        {NAV_ROUTES.map(route => (
                            <Route path={route.url}>{route.component}</Route>
                        ))}
                        <Redirect
                            to={
                                NAV_ROUTES[0] ? NAV_ROUTES[0].url : '/not-found'
                            }
                        />
                        <Route exact path="/not-found">
                            <div style={{ color: 'white' }}>Page not found</div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
