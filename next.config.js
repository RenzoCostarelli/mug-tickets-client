/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: 'https://mug-tickets-server.vercel.app/api',
        apiKey: '33F85ADC279C7872D63B1B42A1B31',
        //apiUrl: 'http://localhost:27017/api',
    },
    images: {
        domains: [
            'placehold.jp',
            'res.cloudinary.com'
        ]
    }
}

module.exports = nextConfig
