import Image from 'next/image';
import idea from '@/assets/images/idea.svg';
import { gtWalsheinPro500 } from '@/assets/fonts/fonts';

function OurMission() {
  return (
    <div
      className={`relative flex-1 overflow-clip rounded-[20px] bg-brandBlue p-4 lg:px-12 lg:py-10`}
    >
      <Image
        src={idea}
        alt="idea"
        className="absolute -bottom-14 right-0 h-[407px] w-[407px]"
      />

      <h2
        className={`relative z-10 flex flex-wrap items-start text-2xl font-medium text-white lg:flex-col lg:text-4xl ${gtWalsheinPro500.className}`}
      >
        <span>
          Our <span className="text-primaryHighlight">Mission</span> is To
        </span>
        <span>empower the next</span>
        <span>generation of</span>
        <span>entrepreneurs to build</span>
        <span>and acquire innovative,</span>
        <span>life-changing</span>
        <span>businesses.</span>
      </h2>
    </div>
  );
}

export default OurMission;
