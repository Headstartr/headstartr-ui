import React from 'react';
import Image from 'next/image';
import { BurgerMenuOverlayProps } from './BurgerMenu.types';
import HeadstartrLogoWithText from '@/components/HeastartrLogoWithText/HeadstartrLogoWithText';
import cross from '@/assets/images/cross.svg';
import JoinCommunityCta from '@/components/JoinCommunityCta/JoinCommunityCta';

/* NOTE: FeatureCard component as instructed */
// function FeatureCard({ isLastIndex }: FeatureCardProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleMouseOver = () => setIsHovered(true);
//   const handleMouseOut = () => setIsHovered(false);

//   return (
//     <Link
//       href="/"
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//       className={`mx-auto flex justify-center gap-5 py-5 ${
//         isLastIndex ? '' : 'border-b border-b-horizontalRuleColor'
//       }`}
//     >
//       <Image
//         src={isHovered ? featureActiveIcon : featureInactiveIcon}
//         alt="feature link"
//       />
//       <p
//         className={`${isHovered ? 'text-brandBlue' : 'text-slate'} ${
//           dmSans500.className
//         }`}
//       >
//         Feature
//       </p>
//     </Link>
//   );
// }

function BurgerMenu({ closeMenu }: BurgerMenuOverlayProps) {
  return (
    <section className="fixed right-0 top-0 z-10 flex h-screen w-screen">
      <div className="hidden h-screen w-full backdrop-contrast-50 lg:block" />
      <div className="z-20 flex h-screen w-full flex-col justify-start gap-10 overflow-y-auto bg-white px-8 py-8 lg:w-[40vw] lg:px-6 xl:w-[30vw] xl:py-10 2xl:px-20 2xl:py-14">
        <div className="flex items-center justify-between">
          <HeadstartrLogoWithText
            imageClasses="h-auto w-12"
            textClasses="text-xl"
            linkClasses="gap-2"
            variant="normal"
          />
          <button onClick={closeMenu} data-testid="burger-close-button">
            <Image
              src={cross}
              alt="close hamburger menu button"
              className="h-7 w-10"
            />
          </button>
        </div>
        {/* NOTE: Commented list of features as instructed */}
        {/* <nav>
          <ul>
            {[...Array(5)].map((item, index) => (
              <FeatureCard key={index} isLastIndex={index === 4} />
            ))}
          </ul>
        </nav> */}

        <JoinCommunityCta />
      </div>
    </section>
  );
}
export default BurgerMenu;
