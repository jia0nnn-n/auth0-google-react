import React from 'react';
import './App.css';
import SafeZone from './components/SafeZone';
import Index from './components/Index';
import Transition from './components/Transition';
import NotFound from './components/NotFound';

function App(props) {
  let component = null;
  switch (props.state.location) {
    case "":
      component = <Index state={props.state} />;
      break;
    case "user-privacy":
      let result = props.state.auth.isAuthenticated()
      component = result ? <SafeZone state={props.state} /> : <NotFound />;
      break;
    case "va":
      component = <Transition state={props.state} />;
      break;
    default:
      component = <NotFound state={props.state} />;
      break;
  }


  return (
    <div className="App">
      <header className="App-header">
        {component}
      </header>
    </div>
  );
}

export default App;
