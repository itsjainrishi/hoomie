import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
  },
}

export default withPlaiceholder(nextConfig);