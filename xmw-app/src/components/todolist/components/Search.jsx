import React,{ ReactDOM } from "react";
import {nanoid} from 'nanoid'

export default class Search extends React.Component{
    state={
        newVal:{}
    }
    add=(e)=>{
        if(e.keyCode===13){
            let newVal={
                name:e.target.value,
                id:nanoid(),
                done:false
            }
            // console.log(newVal)
            this.setState({
                newVal,
            },()=>{
                // setState第二个参数回调，解决异步问题
                this.props.getSearchVal(this.state.newVal)
                e.target.value=''
            })
        }
    }
    render(){
        return(
            <div>
                <h2>列表案例</h2>
                <input type="text" placeholder="请输入内容" onKeyUp={this.add}/>
            </div>
        )
    }
}