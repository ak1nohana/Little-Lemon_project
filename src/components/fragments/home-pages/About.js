import Adrian from '../../../assets/adrian.jpg'
import Mario from '../../../assets/mario.jpg'

export default function About() {
    return (
        <div className="container-about">
            <article className="about">
                <section className="about-fr">
                    <img className="pic" src={Mario} alt="Mario"/>
                </section>
                <section className="about-fr">
                    <h1>About us</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </section>
                <section className="about-fr">
                    <img className="pic" src={Adrian} alt="Adrian"/>
                </section>
            </article>
        </div>
    )
}