import { TestimonialsMarqueeProps } from './Testimonials.types';
import Marquee from 'react-fast-marquee';
import { customers } from '@/components/Testimonials/Testimonials.config';
import { gtWalsheinProBold } from '@/assets/fonts/fonts';
import TestimonialCarousel from './TestimonialCarousel/TestimonialCarousel';
import useTestimonialCardCallback from './Testimonial.hooks';

function TestimonialsMarquee({ direction }: TestimonialsMarqueeProps) {
  const TestimonialCardCallback = useTestimonialCardCallback();

  return (
    <Marquee
      direction={direction}
      loop={0}
      gradient={false}
      style={{ width: '100vw', padding: '1rem' }}
      speed={30}
    >
      {direction === 'left'
        ? [...customers, ...customers].map(TestimonialCardCallback)
        : [...customers, ...customers].map(TestimonialCardCallback)}
    </Marquee>
  );
}

function Testimonials() {
  return (
    <section className="flex flex-col items-center bg-offWhite pb-10">
      <h2
        className={`flex flex-col text-4xl font-bold text-slate lg:py-10 lg:text-5xl ${gtWalsheinProBold.className}`}
      >
        <span>What people</span>
        <span>are saying</span>
      </h2>

      <TestimonialCarousel />

      <div className="hidden lg:block">
        <TestimonialsMarquee direction="right" />
        <TestimonialsMarquee direction="left" />
      </div>
    </section>
  );
}

export default Testimonials;
