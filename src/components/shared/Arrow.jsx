import images from "../../assets/images/assets"

function Arrow({direction}) {
  return (
    <span><img src={direction === "down" ? images.icon_arrow_down : images.icon_arrow_up} alt="Arrow" width={24} height={24} /></span>
  )
}
export default Arrow