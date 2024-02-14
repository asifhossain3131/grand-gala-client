import { useState } from 'react';
import { motion } from 'framer-motion';

type serviceType={
    service_title: string;
    service_img: string;
    services_in_array: string[];
}

const ServiceCard = ({service}:{service:serviceType}) => {
    const {service_title,service_img,services_in_array}=service;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="lg:max-w-[412] max-h-[590px] rounded px-[25px] py-[36px] bg-gray-100" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={service_img} className="w-[362px] h-[253px]" alt="" />
            <h2 className="mt-5 mb-5 text-[20px] font-[600]">{service_title}</h2>
            <ul>
                {
                    services_in_array?.map((item,i)=>
                    <li key={i} className="flex gap-3 items-center">
                        <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/12503/12503776.png" alt="" />
                        <span className="text-sm">{item}</span>
                    </li>
                    )
                }
            </ul>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-10/12 mx-auto mt-6"
            >
                <motion.button 
                    className="text-center h-full w-full bg-yellow-600 px-2 py-2 rounded font-semibold"
                >
                    Check it out
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ServiceCard;
