import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.svg';
import gradientLogo from '@/assets/images/gradientLogo.svg';
import { HeadstartrLogoProps } from './HeadstartrLogoWithText.types';
import { gtWalsheinProNormal } from '@/assets/fonts/fonts';

function HeadstartrLogoWithText({
  imageClasses = '',
  textClasses = '',
  linkClasses = '',
  variant = 'normal',
}: HeadstartrLogoProps) {
  return (
    <Link href="/" className={`flex items-center ${linkClasses}`}>
      <Image
        src={variant === 'normal' ? logo : gradientLogo}
        alt="headstartr logo"
        className={imageClasses}
      />
      <p
        className={`${textClasses} ${gtWalsheinProNormal.className} text-slate`}
      >
        headstartr
      </p>
    </Link>
  );
}

export default HeadstartrLogoWithText;
