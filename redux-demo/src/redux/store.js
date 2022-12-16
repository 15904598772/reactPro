// store用于存储转接数据，从reducer获取接收的数据，将自己export出去

import {createStore} from "redux"
import countReducer from "./count_reducer"

export default createStore(countReducer)