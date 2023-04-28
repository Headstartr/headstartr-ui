import Image from 'next/image';
import stars from '@/assets/images/stars.svg';
import { TestimonialCardProps } from './TestimonialCard.types';
import { dmSans500, dmSansBold, dmSansNormal } from '@/assets/fonts/fonts';

function TestimonialCard({
  name,
  profileImg,
  designation,
  feedback,
}: TestimonialCardProps) {
  return (
    <div className="mx-auto flex h-[12.5rem] w-[18rem] flex-col items-start gap-6 overflow-y-auto rounded-[20px] border bg-white p-4 lg:mx-5 lg:h-[17.5rem] lg:w-[25rem] lg:px-8 lg:py-6">
      {/* profile, name and designation */}
      <div className="flex w-full items-center gap-5">
        <Image
          src={profileImg}
          alt={`${name} profile picture`}
          style={{ width: '64px', height: '64px', borderRadius: '55%' }}
        />

        <div className="flex flex-col items-start gap-1">
          <h3 className={`font-bold text-darkSlate ${dmSansBold.className}`}>
            {name}
          </h3>
          <p
            className={`text-left text-sm text-lightSlate ${dmSansNormal.className}`}
          >
            {designation}
          </p>
        </div>
      </div>

      {/* feedback */}
      <p
        className={`text-left font-medium text-darkSlate ${dmSans500.className}`}
      >
        {feedback}
      </p>

      {/* stars */}
      <Image
        src={stars}
        alt="star rating"
        style={{ height: '1.5rem', width: '8rem' }}
      />
    </div>
  );
}

export default TestimonialCard;
