import { DM_Sans, Space_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';

const gtWalsheinProNormal = localFont({
  src: './custom-fonts/GTWalsheimPro-Regular.woff2',
});
const gtWalsheinPro500 = localFont({
  src: './custom-fonts/GTWalsheimPro-Medium.woff2',
});
const gtWalsheinProBold = localFont({
  src: './custom-fonts/GTWalsheimPro-Bold.woff2',
});

const dmSansNormal = DM_Sans({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});
const dmSans500 = DM_Sans({
  weight: '500',
  display: 'swap',
  subsets: ['latin'],
});
const dmSansBold = DM_Sans({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
});

const spaceGrotesk500 = Space_Grotesk({
  weight: '500',
  display: 'swap',
  subsets: ['latin'],
});

export {
  gtWalsheinProNormal,
  gtWalsheinPro500,
  gtWalsheinProBold,
  dmSansNormal,
  dmSans500,
  dmSansBold,
  spaceGrotesk500,
};
