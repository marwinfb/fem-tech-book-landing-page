import ArrowDown from "../../assets/images/icon-arrow-down.svg"
import ArrowUp from "../../assets/images/icon-arrow-up.svg"

function Arrow({direction}) {
  return (
    <span><img src={direction === "downward" ? ArrowDown : ArrowUp} alt="Arrow" width={24} height={24} /></span>
  )
}
export default Arrow