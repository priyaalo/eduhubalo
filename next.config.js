
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 Transpile Ant Design and related rc-* packages for SSR
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-table',
    'rc-tabs',
    'rc-select',
  ],
};

module.exports = nextConfig;
