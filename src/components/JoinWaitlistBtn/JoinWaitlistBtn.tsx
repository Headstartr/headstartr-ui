import Link from 'next/link';
import { JoinWaitlistBtnProps } from './JoinWaitlistBtn.types';

function JoinWaitlistBtn({ type }: JoinWaitlistBtnProps) {
  return (
    <Link
      href="https://opt.headstartr.com/?ref=homepage"
      rel="noopener noreferrer"
      target="_blank"
      className={`rounded-[73px] px-9 py-5 text-center font-semibold ${
        type === 'primary'
          ? 'bg-brandBlue text-white'
          : 'bg-white text-brandBlue'
      } lg:w-72 lg:text-lg 2xl:w-80`}
    >
      JOIN THE WAITLIST
    </Link>
  );
}

export default JoinWaitlistBtn;
