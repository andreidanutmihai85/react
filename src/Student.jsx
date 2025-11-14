import PropTypes from 'prop-types';


function Student ({name ,age, isStudent}) { 
return( 
<div className="student"> 
    <p>Name: {name}</p>
     <p>Age: {age}</p> 
     <p>Is a student: {isStudent ? "Este student" : "Nu este student"}</p> 
     </div>
      );
     } 


     Student.propTypes = {
         name: string, 
         age: number, 
         isStudent: bool, 
        };



export default Student

