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
import { Screen02 } from '../modules/screen-02/screen-02.component';
import { Screen03 } from '../modules/screen-03/screen-03.component';
import { Screen05 } from '../modules/screen-05/screen-05.component';
import { Screen06 } from '../modules/screen-06/screen-06.component';

type NavRoute = {
    url: string;
    component: React.ReactNode;
};

const NAV_ROUTES: NavRoute[] = [
    {
        url: '/screen-01',
        component: <Screen01 />,
    },
    {
        url: '/screen-02',
        component: <Screen02 />,
    },
    {
        url: '/screen-03',
        component: <Screen03 />,
    },
    {
        url: '/screen-05',
        component: <Screen05 />,
    },
    {
        url: '/screen-06',
        component: <Screen06 />,
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
                            <Route key={route.url} path={route.url}>
                                {route.component}
                            </Route>
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
