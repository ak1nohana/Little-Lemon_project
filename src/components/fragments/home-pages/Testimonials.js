import TestimonialsCard from './TestimonialsCard'
import Amanda from '../../../assets/amanda.jpg'
import Derek from '../../../assets/derek.jpg'
import Marylin from '../../../assets/marylin.jpg'
import Samuel from '../../../assets/samuel.jpg'

function Testimonials() {
    return (
        <section className="container-testimonials">
            <h1>Testimonials</h1>
            <article className='rewiews'>
                <TestimonialsCard 
                stars="⭐⭐⭐⭐⭐" 
                image={Amanda}
                name="Amanda" 
                surname="Linn" 
                comment="I really loved the service and interior!"/>
                <TestimonialsCard 
                stars="⭐⭐⭐⭐"
                image={Marylin}
                name="Marylin"
                surname="Morsten"
                comment="The food was amazing! Although sometimes there are too many visitors."
                />
                <TestimonialsCard
                stars="⭐⭐⭐⭐⭐"
                image={Derek}
                name="Derek"
                surname="Joestar"
                comment="Little Lemon is my favourite restaurant ever! Also their website is awesome! I can order food online so easily!"/>
                <TestimonialsCard
                stars="⭐⭐⭐⭐"
                image={Samuel}
                name="Samuel"
                surname="Naomi"
                comment="Well, the place itself is quite lovely, and the food is amazing. But I wish the service was faster."
                />
            </article>
        </section>
    )
}

export default Testimonials;