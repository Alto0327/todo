import ToDoRow from './components/ToDoRow.js';
import Header from './components/Header.js'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='ToDoContainer'>
        <ToDoRow spacing={10}>
          <div className='PrimaryToDo container'>hi</div>
          <div className='SecondaryToDo container'>test</div>
          <div className='ThirdToDo container'>yo</div>
        </ToDoRow>
      </div>
    </div>
  );
}

export default App;
