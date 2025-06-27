import HeroMobileImg from "../../assets/images/image-hero-mobile.webp"
import HeroTabletImg from "../../assets/images/image-hero-tablet.webp"
import HeroDesktopImg from "../../assets/images/image-hero-desktop.webp"
import ResponsiveImage from "../shared/ResponsiveImage"
import Container from "../shared/Container"
import Ratings from "../shared/Ratings"
import Button from "../shared/Button"
import Arrow from "../shared/Arrow"

function Hero() {
  return (
    <section className="bg-primary-neutral-100 pt-12 pb-20">
        <Container>
            <div className="grid grid-cols-1 gap-16">
                <div>
                    <h1 className="font-bold text-[38px] leading-[1.2] tracking-[-2px]"><span className="block text-transparent bg-clip-text bg-linear-[107deg,#FF9A60_-11.37%,#062630_61.84%]">Join the ultimate tech book club</span></h1>
                    <p className="text-xl leading-[1.4] tracking-[-0.5px] text-primary-neutral-700 mt-6 mb-8">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                    <Button>Review membership options<Arrow direction="downward" /></Button>
                    <Ratings />
                </div>
                <div>
                    <ResponsiveImage mobileSrc={HeroMobileImg} tabletSrc={HeroTabletImg} desktopSrc={HeroDesktopImg} className="rounded-lg w-full bg-cover bg-bottom" alt="Hero Image" />
                </div>
            </div>
        </Container>
    </section>
  )
}
export default Hero