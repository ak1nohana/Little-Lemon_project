import { Link } from "react-router-dom"

export default function DishCard (props) {
    return (
        <article className="dish-card">
          <img src={props.image} alt={props.name}/>
          <section className="desc">
            <h3>{props.name}</h3>
            <h3 className="pr">{props.price}</h3>
            <p>{props.description}</p>
            <Link className="order-link" to="/order"><h3 >Order a delivery</h3></Link>
          </section>
        </article>
    )
}