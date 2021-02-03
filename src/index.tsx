// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './router/App'

document.addEventListener('DOMContentLoaded', event => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
})
