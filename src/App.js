import React, {Fragment} from 'react';
import './css/style.css';
import logo from './logo.svg';
import ComponentFunctional from './components/fundamentals/ComponentFunctional';
import ComponentClasses from './components/fundamentals/ComponentClasses';
import ComponentHook from './components/fundamentals/ComponentHook';
import ComponentFunctionalProps from './components/fundamentals/ComponentFunctionalProps';
import ComponentPropsChildren from './components/fundamentals/ComponentPropsChildren';
import ComponentClassProps from './components/fundamentals/ComponentClassProps';
import ComponentClassState from './components/fundamentals/ComponentClassState';
import ComponentSetState from './components/fundamentals/ComponentSetState';
import ComponentFuntionalEventHandler from './components/fundamentals/ComponentFunctionalEventHandler';
import ComponentClassEventHandler from './components/fundamentals/ComponentClassEventHandler';
import ComponentClassBinding from './components/fundamentals/ComponentClassBinding';

function App() {
  return (
    <Fragment>
      <header style={{backgroundColor: "#0e0f19", color: "#fff", display: "flex", alignItems: "center"}}> 
        <img src={logo} width="70" alt="logo" />
        <span>Learn React Project</span>
      </header>
      <main className="grid-container">
        <ComponentFunctional />
        <ComponentClasses />
        <ComponentHook />
        <ComponentFunctionalProps name="Nelson" />
        <ComponentClassProps name="Jean Pierre" />
        <ComponentPropsChildren>
          <h2>Props Children</h2>
        </ComponentPropsChildren>
        <ComponentClassState />
        <ComponentSetState />
        <ComponentFuntionalEventHandler />
        <ComponentClassBinding />
      </main>
    </Fragment>
  );
}

export default App;
