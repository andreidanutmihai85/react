import PropTypes from "prop-types";

function List ({fruits, vegetables}){




return(
    <>
const fruit = {fruits}
const vegetable = {vegetables}
</>
);



}



export default List























// fruits.sort((a, b) => a.name.localeCompare(b.name)); Alfabetical
// fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alfabetical
// fruits.sort((a, b) => a.calories - b.calories ); Numeric order

// const lowCal = fruits.filter(fruit => fruit.calories > 44);