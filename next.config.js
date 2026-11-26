/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Plain HTML/CSS/JS in out/: the content lives in src/data, no server needed
  output: 'export',
  sassOptions: {
    // Removed in Dart Sass 3; harmless while sass stays on 1.x
    silenceDeprecations: ['import'],
  },
}

module.exports = nextConfig
