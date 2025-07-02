import images from "../../assets/images/assets"
import Container from "../shared/Container"
import FeatureList from "../shared/FeatureList"
import ResponsiveImage from "../shared/ResponsiveImage"
import Headline from "../shared/Headline"

function Feature() {
  return (
    <section>
        <Container className="space-y-16">
            <div className="grid grid-cols-1 gap-10">
                <div className="space-y-6">
                    <Headline>Read together, grow together</Headline>
                    <FeatureList />
                </div> 
                <div className="">
                    <ResponsiveImage mobileSrc={images.image_read_together_mobile} tabletSrc={images.image_read_together_tablet} desktopSrc={images.image_hero_desktop} className="rounded-lg w-full bg-cover bg-bottom" alt="Feature Image" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10">
                <div className="space-y-6">
                    <Headline>Not your average book <span className="inline-block relative">club <img src={images.pattern_circle} alt="" className="absolute select-none inset-0 scale-[1.2]" width={160} height={66} /></span></Headline>
                    <p className="font-normal text-xl leading-[1.4] tracking-[-0.5px]">Connect with a community that speaks your language - from <strong>Python</strong> to <strong>TypeScript</strong> and everything in between. Our discussions blend technical depth with practical applications.</p>
                </div> 
                <div className="">
                    <ResponsiveImage mobileSrc={images.image_not_average_mobile} tabletSrc={images.image_not_average_tablet} desktopSrc={images.image_not_average_desktop} className="rounded-lg w-full bg-cover bg-bottom" alt="Feature Image" />
                </div>
            </div>
        </Container>
    </section>
  )
}
export default Feature