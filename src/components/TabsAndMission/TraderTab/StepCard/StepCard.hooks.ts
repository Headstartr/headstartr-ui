import { useMemo } from 'react';
import one from '@/assets/images/one.svg';
import two from '@/assets/images/two.svg';
import three from '@/assets/images/three.svg';
import search from '@/assets/images/search.svg';
import acquire from '@/assets/images/acquire.svg';
import grow from '@/assets/images/grow.svg';
import build from '@/assets/images/build.svg';
import sell from '@/assets/images/sell.svg';
import earn from '@/assets/images/earn.svg';
import useScreenResizeListener from '@/hooks/useScreenSizeListener';

export function useStylesAndAssets({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  const { isScreenWidthSmallerThan1024 } = useScreenResizeListener();
  const { cardPosition, numberImg } = useMemo(() => {
    switch (number) {
      case 1:
        return {
          cardPosition:
            'bottom-0 lg:left-[4rem] xl:left-[10rem] 2xl:left-[15rem]',
          numberImg: one,
        };
      case 2:
        return {
          cardPosition:
            'bottom-[3rem] lg:left-[15rem] xl:left-[25rem] 2xl:bottom-[10rem] 2xl:left-[40rem]',
          numberImg: two,
        };
      case 3:
        return {
          cardPosition: 'lg:right-0 top-0 xl:right-8',
          numberImg: three,
        };
      default:
        return { cardPosition: 'bottom-0 left-0', numberImg: one };
    }
  }, [number]);

  const stepIcon = useMemo(() => {
    switch (title) {
      case 'Search':
        return search;
      case 'Acquire':
        return acquire;
      case 'Grow':
        return grow;
      case 'Build':
        return build;
      case 'Sell':
        return sell;
      case 'Earn':
        return earn;
      default:
        return search;
    }
  }, [title]);

  // NOTE: No position offset for smaller screens
  return {
    cardPosition: isScreenWidthSmallerThan1024 ? '' : cardPosition,
    numberImg,
    stepIcon,
  };
}
