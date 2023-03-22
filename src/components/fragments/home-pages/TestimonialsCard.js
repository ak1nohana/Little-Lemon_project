// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TestimonialsCard(props) {
    return (
        <article className="rewiew-card">
            <article className="rewiew-content">
                <p>{props.stars}</p>
                <div className="person">
                <img className="avatar" src={props.image} alt="Avatar"/>
                <h3>{props.name} <br/> {props.surname}</h3>
                </div>
                <p>{props.comment}</p>
            </article>
        </article>
    )
}

export default TestimonialsCard;