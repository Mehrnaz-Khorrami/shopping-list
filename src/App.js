
import './App.css';
import { useState } from 'react';

function App() {
   
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function addItem(e) {
    e.preventDefault();
    if(!input){
      alert('Enter your item, please!')
    } else {
      setList((addedItem)=> [...addedItem, input]);
      setInput('');
    } 
  }

  function handleDelete(e, id) {
    e.preventDefault();
    const deltet = list.filter((remove) => remove.id !== id);
    setList(deltet);
  }

  return (
    <div className="App">
     <div className='input'>
      <input type="text" placeholder='Add your items...' value={input} onChange={handleChange}/>
      <button className='add' onClick={addItem}>Add</button>
     </div>
     
      {
        list.map((items, id) => (
          <div className='displayItem' key={id}>
            <li>{items}
              <button className='delete' onClick={handleDelete}>Delete</button>
            </li>
          </div>
        ))
      }
     
    </div>
  );
}

export default App;
