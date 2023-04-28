import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

// const API_KEY = process.env.CONVERTKIT_API_KEY;
// const BASE_URL = 'https://api.convertkit.com/v3';

const schema = z.object({
  formId: z.string(),
  email: z.string().email(),
  twitterHandle: z.string(),
  isWaitlisterSeller: z.boolean(),
  isWaitlisterBuyer: z.boolean(),
});

// function subscribeToForm(params: { formId: string; email: string }) {
//   const url = [BASE_URL, `forms`, params.formId, 'subscribe'].join('/');

//   const headers = new Headers({
//     'Content-Type': 'application/json; charset=utf-8',
//   });

//   return fetch(url, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({
//       api_key: API_KEY,
//       email: params.email,
//     }),
//   });
// }

async function subscribeToFormHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      formId,
      email,
      twitterHandle,
      isWaitlisterBuyer,
      isWaitlisterSeller,
    } = schema.parse(req.body);

    console.log({
      formId,
      email,
      twitterHandle,
      isWaitlisterBuyer,
      isWaitlisterSeller,
    });

    // TODO: add compatible body params for twitterHandle, isWaitlisterBuyer, and isWaitlisterSeller
    // for convertkit API
    // await subscribeToForm({
    //   formId,
    //   email,
    // });

    return res.status(200).json({ success: true, data: null });
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message });
  }
}

export default subscribeToFormHandler;
