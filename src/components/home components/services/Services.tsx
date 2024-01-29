import SectionTitle from "../../section title/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services=[
        {
          "service_title": "Event Planning",
          "service_img": "https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais",
          "services_in_array": [
            "Initial consultation and concept planning",
            "Budget management",
            "Vendor coordination",
            "Logistics and timeline planning",
            "On-site event coordination"
          ]
        },
        {
          "service_title": "Venue Management",
          "service_img": "venue_management.jpg",
          "services_in_array": [
            "Venue selection and negotiation",
            "Space layout and design",
            "Technical and AV setup",
            "Permit acquisition",
            "Guest accommodation coordination"
          ]
        },
        {
          "service_title": "Catering Services",
          "service_img": "catering_services.jpg",
          "services_in_array": [
            "Customized menu planning",
            "Food preparation and presentation",
            "Waitstaff and catering team",
            "Dietary restriction accommodations",
            "Post-event clean-up"
          ]
        },
        {
          "service_title": "Decoration and Design",
          "service_img": "decoration_and_design.jpg",
          "services_in_array": [
            "Theme development",
            "Floral arrangements",
            "Lighting and ambiance",
            "Signage and branding",
            "Rental coordination"
          ]
        },
        {
          "service_title": "Entertainment",
          "service_img": "entertainment.jpg",
          "services_in_array": [
            "Live performances",
            "DJ and music services",
            "Interactive activities",
            "Photo booth rental",
            "Event videography"
          ]
        }
      ]
    return (
        <div>
        <SectionTitle mainTitle={'Our Services'} subTitle={'Our services that present the best of us we give to our customers. Have a look to the detailed documentation'}></SectionTitle>
            <div className="grid grid-cols-3 gap-4 mx-auto w-10/12">
                {
services.map((service,i)=>
<ServiceCard key={i} service={service}></ServiceCard>
)
                }
            </div>
        </div>
    );
};

export default Services;