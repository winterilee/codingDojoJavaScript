import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}/>
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"}/>
    </div>
  )
}

export default App
