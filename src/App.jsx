import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";

function App() {

return (
  <>
  <Student name="Andrei" age={44} isStudent={true}/>
  <Student name="Danut" age= {5} isStudent={false}/>
  <Student name="Mihai" age={22} isStudent={true}/>
  <Student/>





  <Card />
  <br />
  <Button/>
  </>

);
}

export default App
