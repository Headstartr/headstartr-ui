import { apiEndpoint } from '@/configs/env';
import axios from 'axios';

type SubmitFormDataParams = {
  parsedEmail: string;
  twitterHandle: string;
  isWaitlisterSeller: boolean;
  isWaitlisterBuyer: boolean;
};

export default async function submitFormData({
  parsedEmail,
  twitterHandle,
  isWaitlisterSeller,
  isWaitlisterBuyer,
}: SubmitFormDataParams) {
  const formId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  await axios.post(`${apiEndpoint}/subscribe`, {
    formId,
    email: parsedEmail,
    twitterHandle,
    isWaitlisterSeller,
    isWaitlisterBuyer,
  });
}
