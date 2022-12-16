import React from "react";
import store from "../../redux/store";
import incrementActionCreator from '../../redux/count_action'

export default class Count extends React.Component{
    number=React.createRef()
    increment=()=>{
        let numberNode=this.number.current.value
        // const action={
        //     type:'increment',
        //     data:numbetNode*1
        // }
        // 调用Action的方法,通过dispatch将action传给store
        store.dispatch(incrementActionCreator(numberNode*1))
        this.setState({})
    }
    render(){
        return(
            <div>
                {/* 通过store.getState()获取store的数据 */}
                <h3>当前数字为:{store.getState()}</h3>
                <select ref={this.number}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>加</button>
            </div>
        )
    }
} 