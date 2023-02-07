// import { counter } from "./store/countStore";
import { observer } from "mobx-react-lite";
import rootStore from "./store";

function App() {
  console.log(rootStore.counterStore)
  const {counterStore,listStore} = rootStore
  return (
    <div className="App">
      {/* <span>{counter.count}</span>
      <button onClick={counter.addCount}>+</button>
      <p></p>
      <span>{counter.fillterList.join('_')}</span>
      <button onClick={counter.changeList}>change</button> */}
      {/* <span>{counterStore.}</span> */}
    </div>
  );
}

export default observer(App);
