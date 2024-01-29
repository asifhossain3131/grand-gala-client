import SectionTitle from "../../section title/SectionTitle";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
    const allPlans=[
        {
          "pricing_pack": "Basic",
          "short_description": "Essential features for small events",
          "price": 99.99,
          "facilities_in_array": [
            "Event planning consultation",
            "Venue selection assistance",
            "Basic decoration",
            "Standard catering (up to 50 guests)"
          ]
        },
        {
          "pricing_pack": "Standard",
          "short_description": "Ideal for medium-sized events",
          "price": 199.99,
          "facilities_in_array": [
            "Detailed event planning",
            "Venue management and setup",
            "Themed decoration",
            "Premium catering (up to 100 guests)"
          ]
        },
        {
          "pricing_pack": "Premium",
          "short_description": "For large and upscale events",
          "price": 399.99,
          "facilities_in_array": [
            "Full-service event planning",
            "Luxury venue selection and customization",
            "Customized decoration and design",
            "Gourmet catering (up to 200 guests)"
          ]
        }
      ]
    return (
        <div>
            <SectionTitle mainTitle="Explore our pricing plans" subTitle="Looking for the best pricing around the city? Check out our service pricing which is the best plan around the city"></SectionTitle>
            <div className="grid grid-cols-3 gap-4 mx-auto w-10/12">
                {
allPlans.map((plan,i)=>
<PricingCard key={i} plan={plan}></PricingCard>
)
                }
            </div>
        </div>
    );
};

export default PricingPlans;