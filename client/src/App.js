
import './App.css';
import NavBar from './components/NavBar';
import { MyRoutes } from './MyRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import '@popperjs/core'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MyRoutes/>
    </div>
  );
}

export default App;
