import React, {useState} from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import Registration from './components/Registration';

function App() {

  const [newUser, setNewUser] = useState(null);

  return (
    <div>
      <div>
        <Registration setNewUser={setNewUser}/>
      </div>
      <div>
        <PersonCard newUser={newUser}/>
      </div>
    </div>
  )
}

export default App
