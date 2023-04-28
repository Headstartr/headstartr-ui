import HeadstartrHead from '@/components/HeadstartrHead/HeadstartrHead';
import Layout from '@/components/Layout/Layout';
import LegalDoc from '@/components/LegalDoc/LegalDoc';
import { privacyPolicySections } from '@/configs/docs';

function PrivacyPolicy() {
  return (
    <>
      <HeadstartrHead
        title="headstartr - Privacy Policy"
        description="Check our privacy policy to know how we protect your data on our platform."
      />
      <Layout>
        <LegalDoc
          docHeading="Privacy Policy"
          sections={privacyPolicySections}
        />
      </Layout>
    </>
  );
}

export default PrivacyPolicy;
