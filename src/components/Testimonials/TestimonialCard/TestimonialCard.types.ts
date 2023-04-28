import { StaticImageData } from 'next/image';

// NOTE: if fetched from API, profileImg type might change to string
export type TestimonialCardProps = {
  name: string;
  profileImg: StaticImageData;
  designation: string;
  feedback: string;
};
