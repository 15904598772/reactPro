import React,{ ReactDOM } from "react";
import axios from 'axios'

export default class Search extends React.Component{
    state={
        content:''
    }
    searchContainer=React.createRef()
    search=()=>{
        const {value} = this.searchContainer.current
        // console.log('search',value)
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response=>{
                // console.log('成功的数据',response.data.items)
                // this.setState({
                //     content:response.data.items
                // })
                this.props.getSearchData(response.data.items)
            },
            error=>{
                console.log('错误',error)
            }
        )
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.searchContainer} placeholder="请输入" />
                <button onClick={this.search}>查询</button>
            </div>
        )
    }
}