import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import CommentsList from "../Comments/CommentsList"

function CoffeePage () {
  const [coffee, setCoffee] = useState([])

  function LoadCoffee (id) {
    fetch(`http://localhost:4000/coffees/${id}`)
      .then(r => r.json())
      .then(coffee => {
        setCoffee(coffee);
      })
  }

  const data = useParams();
  useEffect(() => {
    LoadCoffee(data.id);
  }, [data]);
 
  return (
    <div className="coffee_page">
      <h1>{coffee.name}</h1>
      <img width="150" height="100" className="small" src={coffee.image} alt={coffee.name} /> 
      <h3>{coffee.description}</h3>
      
      <CommentsList coffeeId={coffee.id}/>
    </div>
  )
}

export default CoffeePage;