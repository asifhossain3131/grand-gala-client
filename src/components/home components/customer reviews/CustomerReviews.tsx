import SectionTitle from "../../section title/SectionTitle";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const CustomerReviews = () => {
    return (
        <div className="px-[80px]">
            <div className="flex items-center justify-between">
                <SectionTitle mainTitle="What our clients said about us" subTitle=""></SectionTitle>
                 <div className="flex justify-center items-center gap-4">
                    <button><ArrowCircleLeftIcon className="text-gray-400 hover:text-yellow-500 "></ArrowCircleLeftIcon></button>
                    <button><ArrowCircleRightIcon className="text-gray-400 hover:text-yellow-500"></ArrowCircleRightIcon></button>
                 </div>
            </div>
        </div>
    );
};

export default CustomerReviews;