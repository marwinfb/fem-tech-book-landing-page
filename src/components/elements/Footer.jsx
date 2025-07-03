import Headline from "../shared/Headline"
import Container from "../shared/Container"
import Button from "../shared/Button"
import Ratings from "../shared/Ratings"
import Arrow from "../shared/Arrow"
import images from "../../assets/images/assets"

function Footer() {
  return (
    <footer className="bg-primary-neutral-900 rounded-2xl mt-16 bg-pattern-dark">
      <Container>
        <div className="flex flex-col items-center pt-12 pb-16">
            <Headline className="text-center text-primary-neutral-100 mt-12">Ready to debug your reading list?</Headline>
            <div className="mt-10 flex flex-col gap-y-6">
                <Button type="outlined">Review membership options<Arrow direction="up" /></Button>
                <Ratings isDark={false} />
            </div>
        </div>
        <hr className="h-px bg-primary-neutral-700 border-0"/>
        <div className="flex flex-col justify-center items-center py-6 gap-4">
          <small className="font-normal text-sm leading-[1.2] tracking-[-1px] text-primary-neutral-000">&copy; 2024 - Tech Book Club</small>
          <ul className="flex items-center gap-6">
            <li><a href="#"><img src={images.logo_bluesky} width={22} height={22} alt="Bluesky Logo" /></a></li>
            <li><a href="#"><img src={images.logo_linkedin} width={22} height={22} alt="Bluesky Logo" /></a></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
