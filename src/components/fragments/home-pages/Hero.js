import { Link } from "react-router-dom";
function Hero () {
return (
<div className="container">
<section className="hero">
    <article>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>We are a family owned Mediterranean restaurant located in Chicago, Illinois. 
        Our restaurant is focused on traditional recipes served with a modern twist. 
        Visit our restaurant near you for classic Italian dishes and flavours that only come from a brick oven fire – 
        just the way it was when we first opened back in 1995!</p>
    <Link to="/reservations"><button>Reserve a table</button></Link>
</article>
<article>
    <img 
    src={require("../../../assets/restauranfood.png")} 
    alt="Little Lemon food"
    className="hero-img" />
</article>
</section>
</div>
)
}

export default Hero;