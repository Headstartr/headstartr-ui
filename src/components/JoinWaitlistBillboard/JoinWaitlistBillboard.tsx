import Image from 'next/image';
import styles from './JoinWaitlistBillboard.module.css';
import topLeft from '@/assets/images/topLeft.svg';
import topRight from '@/assets/images/topRight.svg';
import bottomRight from '@/assets/images/bottomRight.svg';
import bottomLeft from '@/assets/images/bottomLeft.svg';
import hands from '@/assets/images/hands.png';
import JoinWaitlistBtn from '@/components/JoinWaitlistBtn/JoinWaitlistBtn';
import { dmSansBold, gtWalsheinPro500 } from '@/assets/fonts/fonts';

function JoinWaitlistBillboard() {
  return (
    <section className="relative flex flex-col justify-center gap-14 overflow-clip bg-brandBlue p-4 py-10 lg:px-48 lg:py-32 2xl:px-60">
      <div className="">
        <p
          className={`hidden w-fit py-3 pl-1 text-sm font-bold lg:block ${styles.subtitle} ${dmSansBold.className}`}
        >
          Register Now
        </p>
        <h2
          className={`flex flex-col text-3xl font-medium text-white lg:text-4xl ${gtWalsheinPro500.className}`}
        >
          <span>Register early and get a chance to get an</span>
          <span>invitation to the launch party</span>
        </h2>
      </div>

      <div className="">
        <JoinWaitlistBtn type="secondary" />
      </div>

      {/* Decorative Images */}
      <Image
        src={topLeft}
        alt="top left stripe"
        className="absolute -top-2 left-20 hidden lg:inline"
      />
      <Image
        src={topRight}
        alt="top right stripe"
        className="absolute -top-10 right-0 hidden lg:inline"
      />
      <Image
        src={bottomRight}
        alt="bottom right stripe"
        className="absolute bottom-16 hidden lg:right-[25rem] lg:inline 2xl:right-[40rem]"
      />
      <Image
        src={bottomLeft}
        alt="bottom left stripe"
        className="absolute -bottom-5 left-0 hidden lg:inline"
      />
      <Image
        src={hands}
        alt="hands decorative"
        className="absolute hidden lg:-bottom-10 lg:-right-10 lg:inline 2xl:bottom-0"
        priority={true}
      />
    </section>
  );
}

export default JoinWaitlistBillboard;
