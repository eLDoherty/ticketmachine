/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Exclude SVGs from file-loader
      const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.toString().includes('svg')
      );
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }
  
      // Add a new rule to handle SVGs
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
 export default nextConfig;
  