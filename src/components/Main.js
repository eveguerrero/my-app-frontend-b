import React, {useState} from 'react'
import CoffeesList from "./Coffees/CoffeesList"
import CoffeePage from "./Coffees/CoffeePage"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Main({coffees, addCoffee}) {
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory]= useState('All')
    const filteredCoffee = coffees.filter((coffee) => {
            if (selectedCategory === 'All') {
                return true
            }
            else {
                return coffee.name === selectedCategory;
            }
        })
      .filter((coffee)=>{
        return coffee.name.toLowerCase().includes(search.toLowerCase());
    })
    
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <hr />

                <Routes>
                    <Route path="/coffees/:id" element={<CoffeePage />} />
                    <Route path="*" element={<CoffeesList filteredcoffees={filteredCoffee} coffees={coffees} setSelectedCategory={setSelectedCategory } setSearch={setSearch} addCoffee={addCoffee} />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Main;