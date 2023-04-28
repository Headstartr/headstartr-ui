import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { customers } from '../Testimonials.config';
import leftArrow from '@/assets/images/leftArrow.svg';
import rightArrow from '@/assets/images/rightArrow.svg';
import useTestimonialCardCallback from '../Testimonial.hooks';
import Image from 'next/image';

function TestimonialCarousel() {
  const TestimonialCardCallback = useTestimonialCardCallback();
  const customerList = [...customers, ...customers];
  const [customerIndex, setCustomerIndex] = useState(0);
  const gotoNextFeedback = () =>
    setCustomerIndex((prevCustomerIndex) =>
      customerIndex === customers.length - 1 ? 0 : prevCustomerIndex + 1
    );
  const gotoPreviousFeedback = () =>
    setCustomerIndex((prevCustomerIndex) =>
      customerIndex === 0 ? customers.length - 1 : prevCustomerIndex - 1
    );

  return (
    <div className="mt-4 flex flex-col items-center lg:hidden">
      <Carousel
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        // milliseconds
        interval={5000}
        className="max-h-fit w-screen text-center text-sm"
        selectedItem={customerIndex}
        centerMode={true}
        centerSlidePercentage={80}
        swipeable={false}
      >
        {customerList.map(TestimonialCardCallback)}
      </Carousel>
      <div className="mt-4 flex">
        <button onClick={gotoPreviousFeedback}>
          <Image src={leftArrow} alt="previous feedback" />
        </button>
        <button onClick={gotoNextFeedback}>
          <Image src={rightArrow} alt="previous feedback" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
