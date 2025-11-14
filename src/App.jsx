import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
      const fruits = [
        {name: "apple", calories:95, id: 55},
        {name: "orange", calories:33, id: 44},
       ];

      const vegetables= [
        {name: "carrot", calories:955, id: 56},
        {name: "corn", calories:433, id: 46},
       ];

return (

<>
  {fruits.length > 0 ? <List items={fruits} /> : "nimic"}



<List items={vegetables} />
</>
);
}

export default App



















// =================================================
// return (
//   <>
//   <Student name="Andrei" age={33} isStudent={true}/>
//   <Student name="Danut" age= {5} isStudent={false}/>
//   <Student name="Mihai" age={22} isStudent={true}/>
//   <Student/>





//   <Card />
//   <br />
//   <Button/>
//   </>

// );


  /* <Student name="Andrei" age={33} isStudent={true}/>
  <Student name="Danut" age= {5} isStudent={false}/>
  <Student name="Mihai" age={22} isStudent={true}/>
  <Student/>





  <Card />
  <br />
  <Button/> */



    // <UserGreeting isLoggedIn={"s"} username="BroCode"/>