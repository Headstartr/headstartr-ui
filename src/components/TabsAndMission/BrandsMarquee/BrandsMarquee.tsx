import Image from 'next/image';
import { brands } from '@/components/TabsAndMission/BrandsMarquee/BrandsMarquee.config';
import { BrandCardProps } from '@/components/TabsAndMission/BrandsMarquee/BrandsMarquee.types';
import Marquee from 'react-fast-marquee';

function BrandCard({ img }: BrandCardProps) {
  return (
    <div className="flex items-center gap-1 px-4 py-2">
      <Image src={img} alt={`brand logo`} className="h-10 w-auto grayscale" />
    </div>
  );
}

function BrandsMarquee() {
  return (
    <section className="bg-offWhite pt-14">
      <Marquee
        direction="right"
        loop={0}
        gradient={false}
        style={{ width: '100vw' }}
        speed={40}
      >
        {[...brands, ...brands].map((brand, index) => (
          <BrandCard key={index} img={brand} />
        ))}
      </Marquee>
    </section>
  );
}

export default BrandsMarquee;
