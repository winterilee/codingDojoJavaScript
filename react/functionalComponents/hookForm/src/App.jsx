import React, {useState} from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import PersonCard from './components/PersonCard';

function App() {

  const [newUser, setNewUser] = useState(null);

  return (
    <div>
      <CreateUser setNewUser={setNewUser}/>
      <PersonCard newUser={newUser}/>
    </div>
  )
}

export default App
