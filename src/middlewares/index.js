import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware, compose } from 'redux'

export default compose(
    applyMiddleware(thunk/* , logger */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)