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
          traderCopy="With headstartr, you can acquire businesses or buy innovative applications directly from the builders without wasting years of time and money researching ideas and building them by your own."
        />
      ) : (
        <TraderTab
          traderType="SELLER"
          action="sell"
          traderCopy="Have an innovative product you want to sell? Become a HS Seller and get acquired without hassle. If you're a serial shipper and born to build. Have an innovative product to showcase to the world and earn money from your side products."
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
