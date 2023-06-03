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
    { name: 'FinTech' },
    { name: 'DeFi' },
    { name: 'Play2Earn' },
    { name: 'Gaming' },
    { name: 'NFT' },
    { name: 'LLM' },
    { name: 'GLM' },
    { name: 'Web3' },
    { name: 'Blockchain' },
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
      <div className="flex flex-col items-center gap-3">
        <h1
          className={`flex flex-col items-center p-4 text-4xl font-bold lg:text-6xl ${gtWalsheinProBold.className}`}
        >
          <span>P2P marketplace</span>
          <span>
            for{' '}
            innovative applications and tools
          </span>
        </h1>
        <p className="text-center lg:w-[55%]">
        Save months of time and effort on development by acquiring innovative solutions and Headstart your dream project
        </p>
      </div>

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
