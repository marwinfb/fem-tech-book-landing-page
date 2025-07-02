import images from "../../assets/images/assets"
import Headline from '../shared/Headline'
import { journeyListsData } from '../../utilities/content'
import Container from "../shared/Container"

function Journey() {
    return (    
        <section>
            <Container>
                <div className="px-4 rounded-xl overflow-hidden bg-pattern-light bg-primary-neutral-100 relative">
                    {/* <img src={images.pattern_glow} alt="PatternGlow" className="max-w-full absolute top-[0%] left-[0%] z-0" width={684} height={684} /> */}
                    <div className='py-20 relative z-1'>
                        <Headline className="w-2/3">Your tech reading journey</Headline>
                        <div className='flex flex-col gap-10 mt-16'>
                            {journeyListsData.map((list, index) => (
                                <div key={list.id} className="space-y-4">
                                    <div className="space-y-4">
                                        <span className="font-primary font-semibold text-base size-8 rounded-sm border-2 border-primary-neutral-900 text-primary-neutral-900 flex justify-center items-center">{list.number}</span>
                                    </div>
                                    <p className="font-primary font-semibold text-base leading-[1.3] tracking-[-1px] text-primary-neutral-900">{list.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Journey
