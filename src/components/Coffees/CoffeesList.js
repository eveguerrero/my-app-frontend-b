import React from 'react'
import CoffeeItem from "./CoffeeItem"
import CoffeeForm from "./CoffeeForm"
import Dropdown from "../Dropdown/Dropdown"

function CoffeesList({filteredcoffees, coffees,setSelectedCategory, setSearch, addCoffee}) {
    return (
        <div>
            <Dropdown coffees={coffees} setSelectedCategory={setSelectedCategory } setSearch={setSearch}/>
            <div>
            <CoffeeForm addCoffee={addCoffee} />
            </div>
            <div className="coffeesList">
                <ul>
                    { filteredcoffees.map(coffee => <CoffeeItem key={coffee.id} value={coffee.name} coffee={coffee}/>) }
                </ul>
            </div>
           
        </div>
    )
}

export default CoffeesList;