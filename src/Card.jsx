import myPic from "./assets/windows.jpg"

function Card (){

    return (
<div className="main">
    <img src={myPic} alt="windows picture" />
    <h2>Card Title</h2>
    <p>Text card</p>
</div>
    )
}

export default Card