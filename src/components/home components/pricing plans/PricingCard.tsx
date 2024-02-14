import { useState } from "react";
import PrimaryButton from "../../buttons/PrimaryButton";

type pricingTypes={
    pricing_pack: string;
    short_description: string;
    price: number;
    facilities_in_array: string[];
}
const PricingCard = ({plan}:{plan:pricingTypes}) => {
    const{price,short_description,pricing_pack,facilities_in_array}=plan||{}
    const[onHover,setOnHover]=useState(false)
    return (
    <div
    onMouseEnter={()=>setOnHover(!onHover)}
    onMouseLeave={()=>setOnHover(!onHover)}
    className={`max-w-[330] flex flex-col max-h-[550px] rounded ${onHover?'bg-yellow-500':'bg-white'} shadow-lg border`}>
            <div className=" space-y-5 px-[25px] py-[36px] ">
       <div>
       <h2 className=" text-[20px] font-[600]">{pricing_pack}</h2>
        <p className="mt-2 text-sm">{short_description}</p>
       </div>
        <h1 className="text-[40px] font-semibold">${price}</h1>
        <PrimaryButton buttonTopic="Get this package" extendedClasses={`px-[40px] py-[20px] ${onHover?'bg-white':'bg-yellow-600'}  w-full rounded-sm`}></PrimaryButton>
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
    <button className={`${onHover?'bg-yellow-600':'bg-gray-100'} min-w-full flex-grow p-4 font-semibold`}>See All Features</button>
    </div>
    );
};

export default PricingCard;