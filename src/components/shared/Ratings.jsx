import Avatars from "../../assets/images/image-avatars.webp"
import Stars from "../../assets/images/icon-star.svg"
import StarRating from "../../utilities/StarRating"

function Ratings() {
  return (
    <div className="flex items-center gap-3 mt-5">
        <img src={Avatars} width={110} height={40} alt="" />
        <div className="inline-flex flex-col">
            <StarRating rating={5} imageSrc={Stars} />
            <span className="font-primary font-normal text-sm leading-[1.2] tracking-[-1px] text-primary-neutral-700">200+ developers joined already</span>
        </div>
    </div>
  )
}
export default Ratings