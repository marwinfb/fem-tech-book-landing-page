import images from "../../assets/images/assets"
import StarRating from "../../utilities/StarRating"

function Ratings({isDark}) {
  return (
    <div className="flex items-center gap-3 mt-5">
        <img src={images.image_avatars} width={110} height={40} alt="" />
        <div className="inline-flex flex-col">
            <StarRating rating={5} imageSrc={images.icon_star} />
            <span className={`font-primary font-normal text-sm leading-[1.2] tracking-[-1px]  ${isDark ? 'text-primary-neutral-700' : 'text-primary-neutral-000'}`}>200+ developers joined already</span>
        </div>
    </div>
  )
}
export default Ratings