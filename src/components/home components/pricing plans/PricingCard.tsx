import PrimaryButton from "../../buttons/PrimaryButton";

type pricingTypes={
    pricing_pack: string;
    short_description: string;
    price: number;
    facilities_in_array: string[];
}
const PricingCard = ({plan}:{plan:pricingTypes}) => {
    const{price,short_description,pricing_pack,facilities_in_array}=plan||{}
    return (
        <div className="max-w-[330] max-h-[550px] rounded space-y-5 px-[25px] py-[36px] bg-gray-300">
       <div>
       <h2 className=" text-[20px] font-[600]">{pricing_pack}</h2>
        <p className="mt-2 text-sm">{short_description}</p>
       </div>
        <h1 className="text-[40px] font-semibold">${price}</h1>
        <PrimaryButton buttonTopic="Get this package" extendedClasses={'px-[40px] py-[20px] rounded-sm'}></PrimaryButton>
        <ul>
            {
            facilities_in_array.map((item,i)=>
                <li key={i} className="flex gap-3 items-center">
                    <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/594/594586.png" alt="" />
                    <span>{item}</span>
                </li>
                )
            }
        </ul>
    </div>
    );
};

export default PricingCard;