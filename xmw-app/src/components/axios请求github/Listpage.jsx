import React,{ ReactDOM } from "react";
import { Search,ShowList } from "./components";

export default class ListPage extends React.Component{
    state={
        data:[]
    }
    getSearchData=(data)=>{
        this.setState({
            data,
        })
    }
    render(){
        return(
            <div>
                <Search getSearchData={this.getSearchData} />
                <ShowList data={this.state.data} />
            </div>
        )
    }
}