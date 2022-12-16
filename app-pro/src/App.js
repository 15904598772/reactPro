import {Route,Routes} from 'react-router-dom'
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes.map(routeObj => <Route key={ routeObj.path } {...routeObj} />)
        }
      </Routes>
    </div>
  );
}

export default App;
