// 最核心的管理者

// 从redux中引入createStore，用于创建最核心的store对象
import {createStore,applyMiddleware} from 'redux'
// 引入reducer
import reducers from './reducers'
// 引入redux-thunk
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))