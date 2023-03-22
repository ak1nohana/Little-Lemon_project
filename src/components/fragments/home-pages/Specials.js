import { Link } from "react-router-dom";
import DishCard from "./DishCard";
import GreekSalad from "../../../assets/greek-salad.png";
import Bruschetta from "../../../assets/bruschetta.png";
import LemonDessert from "../../../assets/lemon-dessert.png";

function Specials () {
    return (
        <section className="container-specials">
            <section className="specials">
                <article className="specials-header">
                    <h1>This weeks's specials</h1>
                    <Link to="/menu"><button>Online menu</button></Link>
                </article>
                <article className="dishes">
                    <DishCard image={GreekSalad} name="Greek salad" price="$12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                    <DishCard image={Bruschetta} name="Bruschetta" price="$5.99" description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                    <DishCard image={LemonDessert} name="Lemon dessert" price="$4.99" description="This comes straight from grandma’s recipe book, every last ingredient has been soured and is an authentic as can be imagined." />
                </article>
            </section>
        </section>
    )
}

export default Specials