// 简单的表格查询删除功能
import React from "react";
import { Input , Table , Popconfirm } from 'antd';

export default class User extends React.Component{
    // handle=()=>{
    //     console.log(this)
    // }
    state={
        list:[
            {
                key:'1',
                name:'aa',
                age:21,
                sex:'男'
            },
            {
                key:'2',
                name:'bb',
                age:22,
                sex:'女'
            },
            {
                key:'3',
                name:'cc',
                age:21,
                sex:'男'
            }
        ],
        columns:[
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title:'操作',
                dataIndex: 'operation',
                render: (_, record) =>
                   
                    <Popconfirm 
                        title="确定删除？" 
                        onConfirm={() => this.handleDelete(record.key)}
                    >
                        <a>删除</a>
                    </Popconfirm>
            }
        ]
    }
    onSearch=(value)=>{
        // console.log(value)
        let newList = this.state.list.filter(res=>{
            return res.name==value
        })
        this.setState({
            list:newList
        })
    }
    handleDelete(id){
        console.log('del',id)
        let newList = this.state.list.filter(res=>{
            // console.log(res.key)
            return res.key!=id
        })
        // console.log(newList)
        this.setState({
            list:newList
        })
    }
    render(){
        const { Search } = Input;
        const {list,columns} = this.state
        return(
            <div>
                User1
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={this.onSearch}
                />
                <Table dataSource={list} columns={columns}></Table>
            </div>
        )
    }
} 