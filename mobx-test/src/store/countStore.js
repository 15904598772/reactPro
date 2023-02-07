import {computed, makeAutoObservable} from 'mobx'

class CounterStore {
    count = 0;
    list=[1,2,3,4,5,6]
    constructor(){
        makeAutoObservable(this,{
            fillterList:computed
        })
    }
    addCount = () =>{
        this.count++
    }
    changeList=()=>{
        this.list.push(7,8,9)
    }
    get fillterList(){
        return this.list.filter(res=>res>2)
    }
}

const counterStore = new CounterStore()
export default counterStore