import TestimonialCard from './TestimonialCard/TestimonialCard';
import { Customer } from './Testimonials.types';

export default function useTestimonialCardCallback() {
  const TestimonialCardCallback = (customer: Customer, index: number) => (
    <TestimonialCard
      key={index}
      feedback={customer.feedback}
      name={customer.name}
      profileImg={customer.profileImg}
      designation={customer.designation}
    />
  );

  return TestimonialCardCallback;
}
