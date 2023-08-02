/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir:true},
  images: {
    loader: 'lottie',
    path: '/public/Animation1.json', // Replace with the base URL where your Lottie animation JSON files are hosted
  },
}

// module.exports = nextConfig
