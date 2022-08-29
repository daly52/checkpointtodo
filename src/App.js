
import './App.css';

import Task from './components/Task';
import AddTask from './components/AddTask';
import Particle from './components/Particle';

function App() {

  return (
    <div className="App">
        <Particle/>
      <h1>To DO Liste</h1>
      <AddTask/>

<Task/>
     
    </div>
  );
}

export default App;
