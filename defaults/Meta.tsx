import Head from "next/head";
import React, { FunctionComponent } from "react";

type Props = {
  title: string | undefined;
  desc: string | undefined;
  keywords?: string | undefined;
};

const Meta: FunctionComponent<Props> = ({ title, desc, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#171717" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="" />

      <link rel="icon" type="image/x-icon" href="" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "TYIG",
  desc: "Thank You Image Generator",
  keywords: "Thank you, image, generator, revivar, assessment",
};

export default Meta;
