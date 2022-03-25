import {Link} from "react-router-dom";

function CoffeeItem ({coffee}){

    const {id, image, name} = coffee;

    return (
        <li className="each_coffee">
            <Link to={`/coffees/${id}`}>
                <button className="button">
                    <p>View Coffee</p>
                </button>
            </Link>
            <h4 className="h4">{name}</h4>
            <img width="150" height="100" className="small" src={image} alt={name} />
        </li>
    )
}
export default CoffeeItem;
