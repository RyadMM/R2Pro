"use client";

import Head from 'next/head';

export default function HeadComponent() {
  return (
    <Head>
      <link rel="preload" href="/app/globals.css" as="style" onLoad={(event) => (event.target as HTMLLinkElement).rel = 'stylesheet'} />
    </Head>
  );
}
