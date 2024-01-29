import Header from '../../components/header/Header';
import PricingPlans from '../../components/home components/pricing plans/PricingPlans';
import Services from '../../components/home components/services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <PricingPlans></PricingPlans>
        </div>
    );
};

export default Home;