import React,{ ReactDOM } from "react";

export default class ShowList extends React.Component{
    render(){
        const {data} = this.props
        console.log(data)
        return(
            <div>
                <ul>
                    {
                        data.map(res=>{
                            return(
                                <div>
                                    <li key={res.node_id}>{res.login}</li>
                                    <img src={res.avatar_url} alt="" />
                                </div>
                            ) 
                        })
                    }
                    {/* {data.map(val=>
                        <li key={val.node_id}>
                            {val.login}
                        </li>)
                    } */}
                </ul>
            </div>
        )
    }
}