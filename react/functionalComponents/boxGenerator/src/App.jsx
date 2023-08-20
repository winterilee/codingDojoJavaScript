import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [boxList, setBoxList] = useState([]);

  return (
    <div>
      <BoxForm boxList={boxList} setBoxList={setBoxList} />
      <BoxDisplay boxList={boxList}/>
    </div>
  )
}

export default App
