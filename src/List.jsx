import PropTypes from "prop-types";

function List ({cat}){


const itemList = items;
const cat = category;

    const listItems= itemList.map( item => <li key={item.id}>{item.name}: &nbsp;{item.calories}</li>);

return(
    <>
    <h2>{cat}</h2>
<ul>{listItems }</ul>
</>
);



}

List.defaultProps = {
  cat: 'Hello, world!',
};

export default List























// fruits.sort((a, b) => a.name.localeCompare(b.name)); Alfabetical
// fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alfabetical
// fruits.sort((a, b) => a.calories - b.calories ); Numeric order

// const lowCal = fruits.filter(fruit => fruit.calories > 44);