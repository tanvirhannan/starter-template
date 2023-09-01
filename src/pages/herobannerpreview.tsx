import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CtfHeroGql } from 'src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner-gql';

export default function HeroBannerPreview() {
  const router = useRouter();
  const { id } = router.query; // Assuming the Contentful ID will be a query parameter

  if (!id) {
    return <div>Loading...</div>;
  }

  return <CtfHeroGql id={id as string} locale="en-US" preview={true} />;
}
