import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import path from '@/assets/images/path.svg';
import StepCard from '@/components/TabsAndMission/TraderTab/StepCard/StepCard';
import { dmSans500, dmSansBold, gtWalsheinProBold } from '@/assets/fonts/fonts';
import useScreenResizeListener from '@/hooks/useScreenSizeListener';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { buyerSteps, sellerSteps } from './TraderTab.config';
import { TraderTabProps } from './TraderTab.types';

import useRenderIndicatorCallback from './TraderTab.hooks';

function TraderTab({ traderType, action, traderCopy }: TraderTabProps) {
  const { isScreenWidthSmallerThan1024 } = useScreenResizeListener();

  const StepCardCallback = (
    item: { title: string; description: string },
    index: number
  ) => (
    <StepCard
      key={index}
      description={item.description}
      number={index + 1}
      title={item.title}
    />
  );

  const renderIndicatorCallback = useRenderIndicatorCallback();

  return (
    <section className="mt-14 w-full rounded-[20px] bg-white p-4 lg:px-20 lg:py-10">
      {/* upper section  */}
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-6">
          <p
            className={`text-sm font-bold text-brandBlue ${dmSansBold.className}`}
          >
            I AM A {traderType}
          </p>
          <h2
            className={`flex flex-row flex-wrap gap-1 text-3xl font-bold lg:flex-col lg:text-4xl xl:text-6xl ${gtWalsheinProBold.className}`}
          >
            <span>I want to </span>{' '}
            <span
              className={`${
                action === 'acquire'
                  ? 'border-b-primaryHighlight'
                  : 'border-b-secondaryHiglight'
              } w-fit border-b-8`}
            >
              {action}
            </span>{' '}
            <span>a product</span>
          </h2>
        </div>

        <p
          className={`border-b-[#63629930] pb-6 font-medium text-[#343653CC] lg:w-[400px] lg:border-b-4 lg:text-[21px] 2xl:w-[750px] ${dmSans500.className}`}
        >
          {traderCopy}
        </p>
      </div>

      {/* infographic */}
      {isScreenWidthSmallerThan1024 ? (
        <Carousel
          showStatus={false}
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          // milliseconds
          interval={1500}
          className=""
          renderIndicator={renderIndicatorCallback}
        >
          {traderType === 'BUYER'
            ? buyerSteps.map(StepCardCallback)
            : sellerSteps.map(StepCardCallback)}
        </Carousel>
      ) : (
        <div className="relative mt-12 hidden lg:block">
          <Image src={path} alt="curve" className="w-full" priority={true} />
          {traderType === 'BUYER'
            ? buyerSteps.map(StepCardCallback)
            : sellerSteps.map(StepCardCallback)}
        </div>
      )}
    </section>
  );
}

export default TraderTab;
