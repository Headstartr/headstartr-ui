import React from 'react';
import check from '@/assets/images/check.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import styles from './HeroSection.module.css';
import JoinWaitlistBtn from '@/components/JoinWaitlistBtn/JoinWaitlistBtn';
import {
  dmSansNormal,
  gtWalsheinProBold,
  spaceGrotesk500,
} from '@/assets/fonts/fonts';
import useScreenResizeListener from '@/hooks/useScreenSizeListener';

function ProjectTypeTicker() {
  const projectTypes = [
    { name: 'AI' },
    { name: 'Metaverse' },
    { name: 'NFT' },
    { name: 'Fintech' },
    { name: 'DeFi' },
    { name: 'Web3' },
  ];

  const MarqueChildrenCallback = [
    ...projectTypes,
    ...projectTypes,
    ...projectTypes,
    ...projectTypes,
  ].map((projectType, index) => (
    <div
      key={index}
      className={`mx-2 rounded-[230px] bg-white px-4 py-2 text-lighterSlate shadow-sm ${styles.chipShadow} ${spaceGrotesk500.className}`}
    >
      {projectType.name}
    </div>
  ));

  const { isScreenWidthSmallerThan1024 } = useScreenResizeListener();

  return (
    <div className={`flex flex-col gap-5`}>
      <Marquee
        pauseOnHover
        direction="right"
        loop={0}
        gradient={false}
        style={{ width: '100vw' }}
      >
        {MarqueChildrenCallback}
      </Marquee>
      {isScreenWidthSmallerThan1024 ? (
        <Marquee
          pauseOnHover
          direction="left"
          loop={0}
          gradient={false}
          style={{ width: '100vw' }}
        >
          {MarqueChildrenCallback}
        </Marquee>
      ) : null}
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className={`flex flex-col items-center gap-16 px-[10%] py-8 lg:px-0 ${styles.backgroundGradient}`}
    >
      <h1
        className={`flex flex-col items-center p-4 text-4xl font-bold lg:text-6xl ${gtWalsheinProBold.className}`}
      >
        <span>Ultimate Marketplace</span>
        <span>
          to{' '}
          <span className="w-fit border-b-8 border-b-primaryHighlight">
            Buy
          </span>{' '}
          and{' '}
          <span className="w-fit border-b-8 border-b-secondaryHiglight">
            Sell
          </span>{' '}
          Innovative Products
        </span>
      </h1>

      <div className="flex flex-col items-center gap-6">
        <JoinWaitlistBtn type="primary" />

        <ul
          className={`features-list flex flex-col gap-4 ${dmSansNormal.className}`}
        >
          <li className="flex items-center gap-3">
            <Image src={check} alt="check" className="" />
            <p className="text-sm">Peer to peer transactions</p>
          </li>
          <li className="flex items-center gap-3">
            <Image src={check} alt="check" className="" />
            <p className="text-sm">Escrow contract for secure transactions</p>
          </li>
          <li className="flex items-center gap-3">
            <Image src={check} alt="check" className="" />
            <p className="text-sm">Curated products for highest quality</p>
          </li>
        </ul>
      </div>

      <ProjectTypeTicker />
    </section>
  );
}

export default HeroSection;
