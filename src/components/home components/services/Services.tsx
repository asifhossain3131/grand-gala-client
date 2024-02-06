// import { QueryObserverResult } from "@tanstack/react-query";
import useServices from "../../../hooks/useServices";
import SectionTitle from "../../section title/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  type ServiceData={
    service_title:string,serviceType:string,service_img:string,services_in_array:[]
  }
  // type FetchDataFunction = () => Promise<QueryObserverResult<{ services: ServiceData[] }, Error>>;

    const{services}:{ services: ServiceData[] | undefined }=useServices()
    return (
        <div>
        <SectionTitle mainTitle={'Our Services'} subTitle={'Our services that present the best of us we give to our customers. Have a look to the detailed documentation'}></SectionTitle>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mx-auto w-10/12">
                {
services?.map((service:ServiceData,i:number)=>
<ServiceCard key={i} service={service}></ServiceCard>
)
                }
            </div>
        </div>
    );
};

export default Services;