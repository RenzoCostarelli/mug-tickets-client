/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        apiUrl: 'https://mug-tickets-server.vercel.app/api',
        apiKey: '33F85ADC279C7872D63B1B42A1B31',
        MP_PUBLIC_KEY: 'TEST-9bb1f31d-e54b-4a9c-9698-f8f984e21b01',
        MP_ACCESS_TOKEN: 'TEST-8251247267654899-080408-97c4c8db3fb366628f0449948c58e464-54797482',
        GOOGLE_ID: '426944037353-doj012lil9vjrbb60o8gghbrs0khh1sp.apps.googleusercontent.com', 
        GOOGLE_SECRET: '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 '
    },
    images: {
        domains: [
            'placehold.jp',
            'res.cloudinary.com',
            'lh3.googleusercontent.com'
        ]
    }
}

module.exports = nextConfig
