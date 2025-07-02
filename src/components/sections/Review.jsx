import StarRating from "../../utilities/StarRating"
import Container from "../shared/Container"
import images from "../../assets/images/assets"

function Review() {
  return (
    <section>
        <Container>
            <div className="space-y-8">
                <StarRating rating={5} size={28} imageSrc={images.icon_star} />
                <p className="font-primary font-semibold text-2xl leading-[1.1 tracking-[-1px] text-primary-neutral-900">"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</p>
                <span className="font-normal text-xl leading-[1.4] tracking-[-.5px] text-primary-neutral-700">Sarah Chen, Software Architect</span>
            </div>
        </Container>
    </section>
  )
}
export default Review