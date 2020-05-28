import React from 'react';
import Head from 'next/head';

export const Meta = ({ title, description, image, type, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          image
            ? image
            : ''
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta
        property="og:image"
        content={
          image
            ? image
            : ''
        }
      />
      {children}
    </Head>
  );
};