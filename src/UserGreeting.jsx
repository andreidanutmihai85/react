

function UserGreeting (props){
const welcomeMessage = props.isLoggedIn;
const user = props.username;

return welcomeMessage ? "hello" + user : "go back"
// return (props.isLoggedIn ? <h2 className="welcome-message"> "ok"</h2> : <h2 className="login-prompt">"nu"</h2> )

}


export default UserGreeting