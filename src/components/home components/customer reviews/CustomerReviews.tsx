import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from "../../section title/SectionTitle";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const customerReviewsData = [
  {
    id: 1,
    customerName: "Alice Smith",
    customerImg: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph",
    customerReview: "The event management team did an amazing job! Everything was well-organized and exceeded our expectations.",
    ratingStar: 5
  },
  {
    id: 2,
    customerName: "John Doe",
    customerImg: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph",
    customerReview: "I highly recommend this event management company. They were professional, attentive, and made our event truly memorable.",
    ratingStar: 4
  },
  {
    id: 3,
    customerName: "Emily Jones",
    customerImg: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph",
    customerReview: "We had a fantastic experience with this event management team. They went above and beyond to ensure everything ran smoothly.",
    ratingStar: 5
  },
  {
    id: 4,
    customerName: "Michael Brown",
    customerImg: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph",
    customerReview: "Great service and attention to detail. Our event was a huge success thanks to the expertise of this team.",
    ratingStar: 4
  }
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { type: 'spring', stiffness: 100 }
  };

  return (
    <div className="px-[80px]">
      <div className="flex items-center justify-between">
        <SectionTitle mainTitle="What our clients said about us" subTitle="" />
        <div className="flex justify-center items-center gap-4">
          <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + customerReviewsData.length) % customerReviewsData.length)}><ArrowCircleLeftIcon className="text-gray-400 hover:text-yellow-500" /></button>
          <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % customerReviewsData.length)}><ArrowCircleRightIcon className="text-gray-400 hover:text-yellow-500" /></button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 bg-gray-200 rounded min-h-[350px]">
        <motion.div
          key={currentIndex}
          variants={carouselAnimation}
          initial={carouselAnimation.initial}
          animate={carouselAnimation.animate}
          exit={carouselAnimation.exit}
          transition={carouselAnimation.transition}
        >
          <div className='space-y-4'>
            <img className='max-w-[100px] max-h-[100px] rounded-full' src={customerReviewsData[currentIndex].customerImg} alt="" />
            <p className='text-lg font-semibold'>- {customerReviewsData[currentIndex].customerName}</p>
            <p className='text-gray-800'>{customerReviewsData[currentIndex].customerReview}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerReviews;
