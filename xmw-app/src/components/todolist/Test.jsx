import React,{ ReactDOM } from "react";
import { Search,List,Bottom } from "./components";

export default class Test extends React.Component{
    state={
        searchVal:{},
        listVal:[
                    {name:'aa',id:'list-aa',done:true},
                    {name:'bb',id:'list-bb',done:false},
                    {name:'cc',id:'list-cc',done:true}
                ]
    }
    // 获取Search组件传过来的要添加的数据对象，并重新渲染给list组件列表
    getSearchVal=(obj)=>{
        // console.log(obj)
        this.setState({
            listVal:[obj,...this.state.listVal]
        })
    }
    // 删除行
    del=(id)=>{
        // this.state this.state.listVal.filter(res=>{
        //     return id===res.id
        // })
        this.setState({
            listVal:this.state.listVal.filter(res=>{
                // console.log('id',id)
                // console.log('resId',res.id)
                return id!==res.id
            })
        })
    }
    // 勾选
    handleChange=(e,id)=>{
        const {listVal} = this.state
        // console.log(e.target.checked,id)
        const newList = listVal.map(res=>{
            if(id===res.id){
                res.done=e.target.checked
            }
            // console.log(res)
            return res
        })
        this.setState({
            listVal:newList
        })
    }
    // 底部勾选控制全选全部不选
    handleBottomChange=(e)=>{
        const {listVal} = this.state
        console.log(e.target.checked)
        const newList = listVal.map(res=>{
            e.target.checked==true?res.done=true:res.done=false
            return res
        })
        this.setState({
            listVal:newList
        })
    }
    render(){
        const {searchVal,listVal}=this.state
        return(
            <div>
                <Search getSearchVal={this.getSearchVal} />
                <List searchVal={searchVal} listVal={listVal} del={this.del} handleChange={this.handleChange} />
                <Bottom listVal={listVal} handleBottomChange={this.handleBottomChange}/>
            </div>
        )
    }
}