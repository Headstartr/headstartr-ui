import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/HeroSection/HeroSection';
import TabsAndMission from '@/components/TabsAndMission/TabsAndMission';
import JoinWaitlistBillboard from '@/components/JoinWaitlistBillboard/JoinWaitlistBillboard';
import Testimonials from '@/components/Testimonials/Testimonials';
import HeadstartrHead from '@/components/HeadstartrHead/HeadstartrHead';

export default function Home() {
  return (
    <>
      <HeadstartrHead
        title="Headstartr - P2P Marketplace for Innovative Business Tools"
        description="Headstartr empowers entrepreneurs to acquire and sell innovative products and headstart their dream business"
      />
      {/* NOTE: Commented as instructed */}
      {/* <WaitlsitFormStatusProvider> */}
      <Layout>
        <HeroSection />
        <TabsAndMission />
        <Testimonials />
        <JoinWaitlistBillboard />
        {/* NOTE: Commented as instructed */}
        {/* <WaitlistForm /> */}
      </Layout>
      {/* </WaitlsitFormStatusProvider> */}
    </>
  );
}
