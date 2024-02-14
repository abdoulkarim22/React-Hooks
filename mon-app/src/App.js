import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatateClass from './components/StatateClass';
import FunctionState from './components/FunctionState';


function App() {
  return (
    <div>
    <h1 className="text-center mt-5">useState Hooks</h1>
    <StatateClass/>
    <FunctionState/>
    </div>
  );
}

export default App;
