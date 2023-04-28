import Head from 'next/head';
import { HeadstartrsHeadProps } from './HeadstartrHead.types';
import { previewImage } from '@/configs/urls';

function HeadstartrHead({ title, description }: HeadstartrsHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* OG Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://headstartr.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="og:image" content={previewImage} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@headstartr" />
      <meta name="twitter:creator" content="@headstartr" />
      <meta property="twitter:url" content="https://headstartr.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={previewImage} />
    </Head>
  );
}

export default HeadstartrHead;
