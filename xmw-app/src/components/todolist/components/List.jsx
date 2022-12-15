import React,{ ReactDOM } from "react";

export default class List extends React.Component{
    // state={
    //     listVal:[
    //         {name:'aa',id:'list-aa'},
    //         {name:'bb',id:'list-bb'},
    //         {name:'cc',id:'list-cc'}
    //     ]
    // }
    // del=()=>{
    //     console.log('del')
    // }
    render(){
        const {listVal,del,handleChange} = this.props
        return(
            <div>
                <ul>
                    {listVal.map(val=>
                        <li key={val.id} onClick={this.test}>
                            <input type="checkbox" checked={val.done} onChange={(e)=>handleChange(e,val.id)} />
                            {val.done}
                            {val.name}
                            <button onClick={()=>del(val.id)}>删除</button>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}