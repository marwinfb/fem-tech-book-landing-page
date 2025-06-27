import PatternGlow from '../../assets/images/pattern-glow.svg'
import { journeyListsData } from '../../utilities/content'
import Headline from '../shared/Headline'
// import Headline from '../Headline'
// import Arrow from '../Arrow'

function Journey() {
return (    
    <section>
        <div className="px-4 rounded-xl overflow-hidden relative bg-pattern-light bg-primary-neutral-100 ">
            <img src={PatternGlow} alt="PatternGlow" className="size-[684px] absolute top-0 left-0 z-0" />
            <div className='py-20 relative z-1'>
                <Headline>Your tech reading journey</Headline>
                <div className='flex flex-col gap-10 mt-16'>
                    {journeyListsData.map((list, index) => (
                        <div key={list.id} className="space-y-4">
                            <div className="space-y-4">
                                <span className="font-primary font-semibold text-base size-8 rounded-sm border-2 border-primary-neutral-900 flex justify-center items-center">{list.number}</span>
                            </div>
                            <p className='font-primary font-semibold text-base leading-[1.3] tracking-[-1px]'>{list.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)
}

export default Journey
