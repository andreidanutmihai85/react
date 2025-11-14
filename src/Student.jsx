import PropTypes from 'prop-types';


function Student ( {name="guest", age=99, isStudent=false}) { 
return( 
<div className="student"> 
    <p>Name: {name}</p>
     <p>Age: {age}</p> 
     <p>Is a student: {isStudent ? "Este student" : "Nu este student"}</p> 
     </div>
      );
     } 


     Student.propTypes = {
         name: PropTypes.string, 
         age: PropTypes.number, 
         isStudent: PropTypes.bool, 
        };



export default Student


























// ==========================================================

// for default props:
// function Student ( {name="guest", age=99, isStudent=false}) { 
// return( 
// <div className="student"> 
//     <p>Name: {name}</p>
//      <p>Age: {age}</p> 
//      <p>Is a student: {isStudent ? "Este student" : "Nu este student"}</p> 
//      </div>
//       );
//      } 