import React from 'react';
import HeadstartrLogoWithText from '@/components/HeastartrLogoWithText/HeadstartrLogoWithText';
import Link from 'next/link';
import Image from 'next/image';
import socialTwitterLogo from '@/assets/images/socialTwitterLogo.svg';
import socialYoutubeLogo from '@/assets/images/socialYouTube.svg';
import { gtWalsheinPro500, gtWalsheinProNormal } from '@/assets/fonts/fonts';

function SocialMediaLinks() {
  return (
    <>
      <Link
        href="https://twitter.com/headstartr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={socialTwitterLogo} alt="Twitter link" className="h-6 w-6" />
      </Link>

      <Link
        href="https://www.youtube.com/@headstartr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={socialYoutubeLogo} alt="YouTube link" className="h-6 w-6" />
      </Link>
    </>
  );
}

function SiteLinks() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link
        href="https://medium.com/headstartr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </Link>
    </>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-offWhite px-[14%]">
      {/* footer upper section */}
      <div className="flex flex-col items-center justify-between gap-8 border-b border-b-footerHorizontalRuleColor py-6 lg:flex-row lg:gap-0 lg:py-10">
        <HeadstartrLogoWithText
          imageClasses="h-auto w-12"
          textClasses="text-xl"
          variant="gradient"
          linkClasses="gap-2"
        />

        <div
          className={`hidden justify-center gap-12 text-slate lg:flex xl:gap-36 ${gtWalsheinPro500.className}`}
        >
          <SiteLinks />
        </div>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <SocialMediaLinks />
        </div>
      </div>
      {/* footer lower section */}
      <div
        className={`flex flex-col justify-between gap-3 py-6 text-footerSubtextColor lg:flex-row lg:gap-0 lg:py-10 ${gtWalsheinProNormal.className}`}
      >
        <div
          className={`flex justify-center gap-5 pb-4 text-slate lg:hidden ${gtWalsheinPro500.className}`}
        >
          <SiteLinks />
        </div>

        <p className="mx-auto text-sm lg:m-0 lg:text-base">
          © Copyright {currentYear}, All Rights Reserved
        </p>
        <div className="flex justify-center gap-5  text-xs lg:justify-between lg:text-base">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
