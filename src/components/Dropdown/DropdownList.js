import React, {useState, useEffect} from 'react';
import CoffeesList from '../Coffees/CoffeesList'

function DropDownList ({filteredcoffees, setSelectedCategory, setSearch}){

    function handleFilterChange(e){
        setSelectedCategory(e.target.value)
    }

    function handleSearch(e){
        
      setSearch(e.target.value)
  }

    return (
        <div>
        <input
          style={{width:'200px'}}
          type='text'
          id='search'
          placeholder='Search Coffee'
          onChange={handleSearch}/>
          
          
        <select className="dropbtn" name="coffeelist" id="list" onChange={handleFilterChange}>
            {
                filteredcoffees.map(coffee => {
                    return <option key={coffee.id} value={coffee.name}>{coffee.name}</option>
                    // <ListItem key={item.id} item={item} />
                })
            }

        </select>
        <div className="benefits">
            <h3>Benefits of Coffee</h3>
            <h4>Coffee is a beloved beverage known for its ability to fine-tune your focus and boost your energy levels.

In fact, many people depend on their daily cup of joe right when they wake up to get their day started on the right foot.</h4>
<h4>Coffee is a popular beverage that researchers have studied extensively for its many health benefits, including its ability to increase energy levels, promote weight management, enhance athletic performance, and protect against chronic disease.
</h4>


        </div>

        </div>
    )
}

export default DropDownList;