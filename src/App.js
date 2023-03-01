
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

  function handleDelete(index) {
    const deltet = list.filter((_, i) => i !== index);
    setList(deltet);
    
  }

  return (
    <div className="App">
     <div className='input'>
      <input type="text" placeholder='Add your items...' value={input} onChange={handleChange}/>
      <button className='add' onClick={addItem}>Add</button>
     </div>
     
      {
        list.map((items, index) => (
          <div className='displayItem' key={index}>
            <li>{items}
              <button className='delete' onClick={() =>handleDelete(index)}>Delete</button>
            </li>
          </div>
        ))
      }
     
    </div>
  );
}

export default App;
