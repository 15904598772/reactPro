import React,{ ReactDOM } from "react";
import PubSub from "pubsub-js"

export default class Bro2Page extends React.Component{
    state={
        listArr:[
            {name:'aa',id:'aa-1'},
            {name:'bb',id:'bb-1'}
        ]
    }
    // 消息发布
    pubClick=()=>{
        const {listArr} = this.state
        PubSub.publish('onlyName',listArr)
    }
    render(){
        return(
            <div>
                <h4>bro2</h4>
                <button onClick={this.pubClick}>发布消息</button>
            </div>
        )
    }
}