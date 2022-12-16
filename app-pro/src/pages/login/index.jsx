import React from "react";
import { Input , Menu , Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import './index.css'

export default class Login extends React.Component{
    items = [
        {
          label: '登录界面',
          key: 'mail',
          icon: <LoginOutlined />
        }
    ];
    state={
        userName:'',
        authorCode:''
    }
    userInp=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    authorInp=(e)=>{
        // console.log(e.target.value)
        this.setState({
            authorCode:e.target.value
        })
    }
    login=()=>{
        const {userName,authorCode}=this.state
        console.log(userName,authorCode)
    }
    render(){
        return(
            <div className="box">
                <Menu mode="horizontal" items={this.items} />
                <Input className="userInp" placeholder="请输入用户名" onChange={this.userInp} />
                <div className="authorBox">
                    <Input className="authorInp" placeholder="请输入验证码" onChange={this.authorInp} />
                    <Button type="link">获取验证码</Button>
                </div>
                {/* <Input className="authorInp" placeholder="请输入验证码" />
                <Button type="link">Link Button</Button> */}
                <Button className="loginBtn" type="primary" block onClick={this.login}>登录</Button>
            </div>
        )
    }
} 