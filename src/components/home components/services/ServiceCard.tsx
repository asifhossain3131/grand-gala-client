type serviceType={
    service_title: string;
    service_img: string;
    services_in_array: string[];
}
const ServiceCard = ({service}:{service:serviceType}) => {
    const {service_title,service_img,services_in_array}=service
    return (
        <div className="w-[412] h-[590px] rounded px-[25px] py-[36px] bg-gray-300">
            <img src={service_img} className="w-[362px] h-[253px]" alt="" />
            <h2 className="mt-5 mb-5 text-[20px] font-[600]">{service_title}</h2>
            <ul>
                {
                    services_in_array.map((item,i)=>
                    <li key={i} className="flex gap-3 items-center">
                        <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/12503/12503776.png" alt="" />
                        <span>{item}</span>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ServiceCard;