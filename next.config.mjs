/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: 'localhost',
            port: '8080',
            // pathname: ''
        },{
            protocol: 'http',
            hostname: '192.168.0.101',
            port: '9000',
            // pathname: ''
        }]
    },
    env: {
        BACKEND_DOMAIN: process.env.BACKEND_DOMAIN,
        FRONTEND_DOMAIN: process.env.FRONTEND_DOMAIN,
    },

};

export default nextConfig;
