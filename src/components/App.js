import '../App.css';
import React, {useState, useEffect} from 'react'
import Header from "./Header"
import Main from "./Main"





function App() {
  const [coffees, setCoffees] = useState([])
  const [issueRequest, setIssueRequest] = useState(false)


  function loadsCoffees(){
    fetch("http://localhost:4000/coffees")
      .then(r => r.json())
      .then(data => {
        setCoffees(data)
      })
  }

  useEffect(() => {
    loadsCoffees()
  }, [issueRequest])

  function addCoffee(newCoffee) {
    newCoffee.id = coffees.length + 1
    setCoffees([...coffees, newCoffee])
  }

  return (
    <div className="App">
      <Header />
      <Main coffees={coffees} addCoffee={addCoffee} />
    </div>
  );
}

export default App;
