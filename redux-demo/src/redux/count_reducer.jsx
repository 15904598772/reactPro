// reducer用于接收stores传的pre和actions对象，进行加工操作，并返回给store
import {INCREMENT,DECREMENT} from './constant'

export default function countReducer(pre=0,action){
    const {type,data} = action
    console.log(pre,action)
    switch (type) {
        case INCREMENT:
            return pre+data
        case DECREMENT:
            return pre-data
        default:
            return pre
    }
}