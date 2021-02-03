// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import {
    HashRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Home } from '../views/Home'
import { About } from '../views/About'

export class App extends React.Component<{}, {}> {
    public render (): JSX.Element | null {
        return <div>
            <HashRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/test">About</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    }
}
