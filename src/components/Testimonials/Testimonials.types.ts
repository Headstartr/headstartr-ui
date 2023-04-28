import { customers } from './Testimonials.config';

export type TestimonialsMarqueeProps = { direction: 'left' | 'right' };

export type Customer = typeof customers extends Array<infer T> ? T : never;
