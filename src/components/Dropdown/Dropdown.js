import React, {useState, useEffect} from 'react'
import DropDownList from './DropdownList'




function Dropdown({coffees, setSelectedCategory, setSearch}){
    return (
    
        <DropDownList filteredcoffees={coffees} setSelectedCategory={setSelectedCategory} setSearch={setSearch}/>
        
    )
}

export default Dropdown;
