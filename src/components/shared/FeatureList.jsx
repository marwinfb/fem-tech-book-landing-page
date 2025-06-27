import {featureListsData} from "../../utilities/content"
import CheckIcon from "../../assets/images/icon-check.svg"

function FeatureList() {
    return (
        <ul className="space-y-4">
            {featureListsData.map((list) => (
                <li key={list.id} className="inline-flex items-center gap-3.5">
                    <img src={CheckIcon} widht={28} height={28} alt="Check Icon" />
                    <p className="text-lg leading-[1.4] tracking-[-.5px]">{list.text}</p>
                </li>
            ))}
        </ul>
    );
}
export default FeatureList