import React from 'react';
import { dmSans500, gtWalsheinProBold } from '@/assets/fonts/fonts';
import JoinWaitlistBtn from '../JoinWaitlistBtn/JoinWaitlistBtn';

function JoinCommunityCta() {
  return (
    <section className="flex flex-col justify-between gap-8">
      <h1
        className={`flex flex-col text-3xl font-bold ${gtWalsheinProBold.className}`}
      >
        <span>Join our </span>
        <span>Growing</span>
        <span className="w-fit border-b-8 border-b-secondaryHiglight">
          Community
        </span>
      </h1>

      <p className={`text-sm ${dmSans500.className}`}>
        Join thousand users and teams contributing to the community.
      </p>

      {/* NOTE: Commented +28k temporarily */}
      {/* <div className="flex items-center gap-6">
        <Image
          src={users}
          alt="community user avatars"
          className="h-14 w-auto"
        />
        <div>
          <p
            className={`text-3xl font-bold text-darkSlate ${dmSansBold.className}`}
          >
            +28k
          </p>
          <p
            className={`text-sm font-bold text-lightSlate ${dmSansBold.className}`}
          >
            Happy Members
          </p>
        </div>
      </div> */}

      <JoinWaitlistBtn type="primary" />
    </section>
  );
}

export default JoinCommunityCta;
