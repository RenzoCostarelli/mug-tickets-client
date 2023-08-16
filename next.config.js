/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: 'https://mug-tickets-server.vercel.app/api',
    },
    images: {
        domains: [
            'placehold.jp',
            'res.cloudinary.com'
        ]
    }
}

module.exports = nextConfig
