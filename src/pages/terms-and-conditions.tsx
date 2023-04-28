import HeadstartrHead from '@/components/HeadstartrHead/HeadstartrHead';
import Layout from '@/components/Layout/Layout';
import LegalDoc from '@/components/LegalDoc/LegalDoc';
import { termsAndConditions } from '@/configs/docs';

function TermsAndConditions() {
  return (
    <>
      <HeadstartrHead
        title="headstartr - Terms and conditions"
        description="Read terms & conditions of headstartr before you join and start trading projects."
      />
      <Layout>
        <LegalDoc
          docHeading="Terms and conditions"
          sections={termsAndConditions}
        />
      </Layout>
    </>
  );
}

export default TermsAndConditions;
