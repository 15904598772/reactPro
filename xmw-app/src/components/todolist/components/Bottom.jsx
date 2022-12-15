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
        const bottomChecked=listVal.length&&checkedNum.length===listVal.length
        const disabled = listVal.length?false:true
        // console.log(bottomChecked)
        return(
            <div>
                <input type="checkbox" onChange={handleBottomChange} checked={bottomChecked} disabled={disabled} />
                <span>选中的：{checkedNum.length}</span>
                <span>展示：{listVal.length}</span>
            </div>
        )
    }
}