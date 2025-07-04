import ResponsiveImage from "../shared/ResponsiveImage"
import Container from "../shared/Container"
import Ratings from "../shared/Ratings"
import Button from "../shared/Button"
import Arrow from "../shared/Arrow"
import images from "../../assets/images/assets";

function Hero() {
  return (
    <section className="bg-primary-neutral-100 pt-12 lg:pt-20 pb-20 overflow-hidden relative bg-pattern-light">
        <img src={images.pattern_glow} alt="PatternGlow" className="absolute right-[-50%] bottom-[-50%] scale-150 w-full h-full bg-cover" />
        <Container>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col items-start">
                    <h1 className="font-bold text-[38px] md:text-[62px] leading-[1.2] tracking-[-2px] max-w-xl"><span className="block text-transparent bg-clip-text bg-linear-[107deg,#FF9A60_-11.37%,#062630_61.84%]">Join the ultimate tech book club</span></h1>
                    <p className="text-xl leading-[1.4] tracking-[-0.5px] text-primary-neutral-700 mt-6 mb-8">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                    <Button isFull={false} >Review membership options<Arrow direction="down" /></Button>
                    <Ratings isDark />
                </div>
                <div className="relative z-10">
                    <ResponsiveImage mobileSrc={images.image_hero_mobile} tabletSrc={images.image_hero_tablet} desktopSrc={images.image_hero_desktop} className="rounded-lg w-full bg-cover bg-bottom" alt="Hero Image" />
                </div>
            </div>
        </Container>
    </section>
  )
}
export default Hero