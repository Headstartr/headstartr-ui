import React, { useState } from 'react';
import TraderTab from '@/components/TabsAndMission/TraderTab/TraderTab';
import MissionAndJoinCommunity from '@/components/TabsAndMission/MissionAndJoinCommunity/MissionAndJoinCommunity';
import BrandsMarquee from '@/components/TabsAndMission/BrandsMarquee/BrandsMarquee';
import { gtWalsheinPro500 } from '@/assets/fonts/fonts';
import useScreenResizeListener from '@/hooks/useScreenSizeListener';
import styles from './TabsAndMission.module.css';

function BuyerAndBuilderTabs() {
  const { isScreenWidthSmallerThan1024 } = useScreenResizeListener();

  const [isBuyerSelected, setIsBuyerSelected] = useState(true);
  const switchToBuilder = () => setIsBuyerSelected(false);
  const switchToBuyer = () => setIsBuyerSelected(true);

  const selectedTabClasses = 'text-xl text-white bg-brandBlue';
  const unselectedTabClasses = 'text-lg text-lighterSlate';

  return (
    <section
      className={`flex flex-col items-center bg-offWhite px-[14%] py-14 ${
        isScreenWidthSmallerThan1024 ? styles.mobileGradient : ''
      }`}
    >
      {/* Switch */}
      <div
        className={`flex w-max rounded-[253px] bg-white p-2 lg:p-3 ${gtWalsheinPro500.className}`}
      >
        <button
          className={`rounded-[253px] p-3 lg:p-4 ${
            isBuyerSelected ? selectedTabClasses : unselectedTabClasses
          }`}
          onClick={switchToBuyer}
        >
          I am a Buyer
        </button>
        <button
          className={`rounded-[253px] p-3 lg:p-4 ${
            !isBuyerSelected ? selectedTabClasses : unselectedTabClasses
          }`}
          onClick={switchToBuilder}
        >
          I am a Seller
        </button>
      </div>

      {/* Current Trader (Buyer/ Seller) Tab */}
      {isBuyerSelected ? (
        <TraderTab
          traderType="BUYER"
          action="acquire"
          traderCopy="With headstartr, you can buy innovative products directly from the builders without wasting years of time and money researching ideas and building them on your own."
        />
      ) : (
        <TraderTab
          traderType="SELLER"
          action="sell"
          traderCopy="Turn your passion for building into profits! Register as a seller and reach our network of potential buyers by showcasing your products."
        />
      )}

      {/* Mission & JoinCommunityCta */}
      <MissionAndJoinCommunity />

      {/* Brands Marquee */}
      <BrandsMarquee />
    </section>
  );
}

export default BuyerAndBuilderTabs;
