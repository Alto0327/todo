import ToDOImportant from './components/ImportantToDo.js';
import Secondary from './components/Secondary.js';
import Third from './components/Third.js';
import Header from './components/Header.js'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='ToDoContainer'>
        <ToDOImportant/>
        <Secondary/>
        <Third/>
      </div>
    </div>
  );
}

export default App;
