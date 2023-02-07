import { makeAutoObservable } from "mobx";

class ListStore {
    listNum=0
    constructor(){
        makeAutoObservable(this)
    }
    addListNum=()=>{
        this.listNum++
    }
}
const listStore = new ListStore()

export default listStore