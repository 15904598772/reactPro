// 创建actionCrate的function,接收组件的data,并且封装成对象返回

export default function incrementActionCreator(value){
    return{
        type:'increment',
        data:value
    }
}