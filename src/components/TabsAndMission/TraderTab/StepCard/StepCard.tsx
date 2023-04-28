import { StepCardProps } from './StepCard.types';
import Image from 'next/image';
import styles from './StepCard.module.css';
import { useStylesAndAssets } from './StepCard.hooks';
import { gtWalsheinProBold } from '@/assets/fonts/fonts';
import { dmSansNormal } from '@/assets/fonts/fonts';
import useScreenResizeListener from '@/hooks/useScreenSizeListener';

function StepCard({ number, title, description }: StepCardProps) {
  const { isScreenWidthSmallerThan1024 } = useScreenResizeListener();
  const { cardPosition, numberImg, stepIcon } = useStylesAndAssets({
    number,
    title,
  });

  return (
    // NOTE: StepCard position is static for carousel in smaller screens
    <div
      className={`${
        isScreenWidthSmallerThan1024 ? 'static mx-auto mb-12' : 'absolute'
      } bg-white ${cardPosition} h-40 w-44 rounded-[14px] px-1 2xl:h-[11.4rem] 2xl:w-[11.4rem] ${
        styles.cardShadow
      }`}
    >
      <div className="relative flex flex-col gap-3 pl-2 pt-4 lg:pl-4 lg:pt-6">
        {/* Number image */}
        <Image
          src={numberImg}
          alt={number.toString()}
          className="absolute -right-10 h-24 w-auto lg:right-4 lg:top-4 lg:h-fit lg:w-fit"
        />

        {/* Step Icon ImageCard */}
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-[14px] ${styles.stepIconCardShadow} p-[0.4rem]`}
        >
          <Image src={stepIcon} alt={title} className="h-[18px] w-auto" />
        </div>

        {/* Title and description */}
        <div className="flex flex-col gap-3 text-left">
          <h3
            className={`text-xl font-bold text-slate ${gtWalsheinProBold.className}`}
          >
            {title}
          </h3>
          <p className={`text-xs text-lightSlate ${dmSansNormal.className}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepCard;
