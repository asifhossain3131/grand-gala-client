import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import CustomerReviews from '../../components/home components/customer reviews/CustomerReviews';
import EventItems from '../../components/home components/event items/EventItems';
import Gallery from '../../components/home components/gallery/Gallery';
import PricingPlans from '../../components/home components/pricing plans/PricingPlans';
import Services from '../../components/home components/services/Services';
import Sponsors from '../../components/home components/sponsors/Sponsors';

const Home = () => {
    return (
        <div className='space-y-[130px]'>
            <Header></Header>
            <Services></Services>
            <EventItems></EventItems>
            <PricingPlans></PricingPlans>
            <Gallery></Gallery>
            <CustomerReviews></CustomerReviews>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    );
};

export default Home;