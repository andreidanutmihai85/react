import windowsPic from './assets/windows.jpg'


function Card (){
return(
<div className="card">
<img className='card-image' src={windowsPic} alt="Andrei-image" />
<h2 className='card-title' >Bro Code</h2>
<p className='card-text' >My name is Andrei and I'm from Bucharest - Romania</p>
</div>
);
}

export default Card