import React,{ ReactDOM } from "react";
import Bro2Page from "../bro2/Bro2Page";
import Bro1Page from "../bro1/Bro1Page";

export default class PubListPage extends React.Component{
    render(){
        return(
            <div>
                <Bro1Page/>
                <Bro2Page/>
            </div>
        )
    }
}