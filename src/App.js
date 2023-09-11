
import { useState } from 'react';
import './App.css';
import Button from './UI/Button';
import Card from './UI/Card';
import Todo from './components/Todo';
import { addTodo } from './redux/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  
  return (
    <div className="App">
      <div className='container p-0 m-0'>
    <div className='row'>

      <div className='col-auto'>

     <input placeholder='Task name' onChange={(e) => {setName(e.target.value)}} className='d-flex justify-self-start ms-3 mt-3 ' />
      </div>
      <div className='col-auto'>
      <input placeholder='Task description' onChange={(e) => {setDesc(e.target.value)}} className='d-flex justify-self-start ms-3 mt-3 ' />
      </div>
      <div className='col-auto'>
        
      <Button color="primary mt-2" onClick={() => {
        dispatch(addTodo({
          pos: uuidv4(),
          name:name,
          task:desc
        }));
      
      }}> Add </Button>
      </div>
      </div>
      </div>
      <Todo name="Work" task="I have to work on CSS" />
    </div>
  );
}

export default App;
