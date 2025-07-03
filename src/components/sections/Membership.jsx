import Container from "../shared/Container"
import Headline from "../shared/Headline"
import Button from "../shared/Button"
import images from "../../assets/images/assets";
import { membershipCardsData } from "../../utilities/content"

function Membership() {
  return (
    <section>
        <Container>
            <Headline>Membership options</Headline>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {membershipCardsData.map((card, index)=> (
                    <div key={index} className={`p-6 rounded-lg border border-neutral-200 space-y-8 relative overflow-hidden ${index !== 1 ? 'bg-primary-neutral-000' : 'bg-primary-neutral-100'}`}>
                        {index === 1 && <img src={images.pattern_glow} className="absolute z-0 top-[30%] left-[30%] scale-150" alt="Glow" />}
                        <div className="space-y-6 text-xl font-normal leading-[1.4] tracking-[-.5px] text-primary-neutral-700 relative z-10">
                            <h3 className="font-semibold text-2xl tracking-[-1px]">{card.category}</h3>
                            <p className="inline-flex items-center gap-2">
                                <span className="text-[34px] leading-[1.3] tracking-[-1px] font-primary font-semibold text-primary-neutral-900">{card.rate}</span>
                                <span>{index !== membershipCardsData.length - 1 && "/month"}</span>
                            </p>
                            <hr className="h-px bg-primary-neutral-200 border-0"/>
                            <ul className="flex flex-col gap-4">
                                {card.features.map((feature, index)=> (
                                    <li key={index} className="inline-flex items-center gap-3">
                                        <img src={images.icon_check} alt="Check" width={24} height={24}/>
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button>{card.cta_text}</Button>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}
export default Membership