import React,{ ReactDOM } from "react";
import PubSub from "pubsub-js"

export default class Bro2Page extends React.Component{
    state={
        data:[]
    }
    // 一般在挂载时候进行消息订阅
    componentDidMount(){
        this.token = PubSub.subscribe('onlyName',(_,data)=>{
            this.setState({
                data,
            })
        })
    }
    // 在组件销毁前，除去消息订阅
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render(){
        const {data} = this.state
        return(
            <div>
                <h4>bro1</h4>
                <ul>
                    {
                        data.map((res)=>{
                            return(
                                <li key={res.id}>{res.name}</li>
                            ) 
                        })
                    }
                </ul>
            </div>
        )
    }
}