import { Link } from "react-router-dom";

export default function Confirmation() {
    return(
        <>
        <div className="container-conf">
            <div className="frame">
                <h1>Success!</h1>
                <h3>You have successfully reserved a table.</h3>
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        </div>
        </>
    )
}