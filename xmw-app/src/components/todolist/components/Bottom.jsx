import React,{ ReactDOM } from "react";

export default class Bottom extends React.Component{
    // state={
    //     listNum:3
    // }
    render(){
        const {listVal,handleBottomChange} = this.props
        const checkedNum = listVal.filter(res=>{
            if(res.done==true){
                return res
            }
        })
        return(
            <div>
                <input type="checkbox" onChange={handleBottomChange} checked={checkedNum.length===listVal.length}/>
                <span>选中的：{checkedNum.length}</span>
                <span>展示：{listVal.length}</span>
            </div>
        )
    }
}