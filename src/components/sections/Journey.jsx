import images from "../../assets/images/assets"
import Headline from '../shared/Headline'
import { journeyListsData } from '../../utilities/content'
import Container from "../shared/Container"

function Journey() {
    return (    
        <section>
            <Container>
                <div className="px-4 rounded-xl overflow-hidden bg-pattern-light bg-primary-neutral-100 relative">
                    <img src={images.pattern_glow} alt="Glow" className="absolute left-[40%] top-[40%] scale-200 w-full h-full bg-cover" />
                    <div className='py-20 relative z-1 lg:px-[60px]'>
                        <Headline className="w-2/3 md:w-full lg:text-center lg:w-[500px] lg:mx-auto">Your tech reading journey</Headline>
                        <div className='grid grid-col gap-10 mt-16 lg:grid-cols-4'>
                            {journeyListsData.map((list, index) => (
                                <div key={list.id} className="space-y-4">
                                    <div className="lg:flex lg:justify-between lg:items-center"> 
                                        <span className="font-primary font-semibold text-base size-8 rounded-sm border-2 border-primary-neutral-900 text-primary-neutral-900 flex justify-center items-center">{list.number}</span>
                                        {index !== 3 && <img src={images.pattern_arrow} className="hidden lg:block" alt="Arrow" />}
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
