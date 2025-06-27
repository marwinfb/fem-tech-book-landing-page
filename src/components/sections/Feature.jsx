import FeatureMobileImg_1 from "../../assets/images/image-read-together-mobile.webp"
import FeatureTabletImg_1 from "../../assets/images/image-read-together-tablet.webp"
import FeatureDesktopImg_1 from "../../assets/images/image-read-together-desktop.webp"
import FeatureMobileImg_2 from "../../assets/images/image-not-average-mobile.webp"
import FeatureTabletImg_2 from "../../assets/images/image-not-average-tablet.webp"
import FeatureDesktopImg_2 from "../../assets/images/image-not-average-desktop.webp"
import Circle from "../../assets/images/pattern-circle.png"
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
                    <ResponsiveImage mobileSrc={FeatureMobileImg_1} tabletSrc={FeatureTabletImg_1} desktopSrc={FeatureDesktopImg_1} className="rounded-lg w-full bg-cover bg-bottom" alt="Feature Image" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10">
                <div className="space-y-6">
                    <Headline>Not your average book <span className="inline-block relative">club <img src={Circle} alt="" className="absolute select-none inset-0 scale-[1.2]" width={160} height={66} /></span></Headline>
                    <p className="font-normal text-xl leading-[1.4] tracking-[-0.5px]">Connect with a community that speaks your language - from <strong>Python</strong> to <strong>TypeScript</strong> and everything in between. Our discussions blend technical depth with practical applications.</p>
                </div> 
                <div className="">
                    <ResponsiveImage mobileSrc={FeatureMobileImg_2} tabletSrc={FeatureTabletImg_2} desktopSrc={FeatureDesktopImg_2} className="rounded-lg w-full bg-cover bg-bottom" alt="Feature Image" />
                </div>
            </div>
        </Container>
    </section>
  )
}
export default Feature