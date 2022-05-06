import { Route } from 'react-router-dom';
import Main from 'pages/Main';
import Home from 'pages/Home';

function App() {
  return (
    <div>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/home" component={Home}></Route>
    </div>
  );
}

export default App;
