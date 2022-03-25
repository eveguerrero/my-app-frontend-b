import React, {useState} from 'react';

function CoffeeForm({addCoffee}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    function handleNewCoffee(e) {
        e.preventDefault()
        const newCoffee = {
          name: name,
          description: description,
          image: image
        }

        fetch(`http://localhost:4000/coffees`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
        });

        setName('');
        setDescription('');
        setImage('')
        addCoffee(newCoffee);
    }
    

    return (
        <div>
            <form onSubmit={handleNewCoffee}>
                <input type="text" name="name" placeholder="type new Coffee Name..." value={name} onChange={(e)=>{
                    setName(e.target.value)
                    }}
                />
                <input type="text" name="description" placeholder="type description..." value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                    }}
                />
                <input type="text" name="image" placeholder="new image..." value={image} onChange={(e)=>{
                    setImage(e.target.value)
                    }}
                />
                <button>add Coffee</button>
            </form>
        </div>
    );
}

export default CoffeeForm;