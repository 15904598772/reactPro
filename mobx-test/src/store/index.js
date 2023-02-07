import listStore from "./listStore";
import counterStore from "./countStore";

class RootStore{
    constructor(){
        this.listStore = listStore
        this.counterStore = counterStore
    }
}

const rootStore = new RootStore()

export default rootStore