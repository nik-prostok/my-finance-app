// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import {
    HashRouter,
    Route,
    Link,
    Routes
} from 'react-router-dom'
import { Home } from '../views/Home'
import { About } from '../views/About'

export class App extends React.Component<{}, {}> {
    public render (): JSX.Element | null {
        return <div>
            <HashRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </HashRouter>
        </div>
    }
}
