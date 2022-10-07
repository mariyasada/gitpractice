import logo from './logo.svg';
import './App.css';
import Hedear from './Component/Hedear';
import Login from './Component/login';
import Signup from './Component/signup';
import Registration from './Component/registration';

function App() {
  return (
    <div className="App">
      <Hedear/>
      <Login/>
      <Signup/>
      <Registration/>
    </div>
  );
}

export default App;
