import './asset/style/style.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './router'
import { Provider } from 'mobx-react'
import { stores } from './store'

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('app')
)

// 实现热更新
if (module.hot) {
    module.hot.accept()
}
