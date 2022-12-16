// 创建actionCrate的function,接收组件的data,并且封装成对象返回
import {INCREMENT,DECREMENT} from './constant'

function incrementActionCreator(value){
    return{
        type:INCREMENT,
        data:value
    }
}

function decrementActionCreator(value){
    return{
        type:DECREMENT,
        data:value
    }
}

export {incrementActionCreator,decrementActionCreator}