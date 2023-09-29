/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        apiUrl: 'https://mug-tickets-server.vercel.app/api',
        apiKey: '33F85ADC279C7872D63B1B42A1B31',
        MP_PUBLIC_KEY: 'TEST-8c6b35f8-ec70-4f96-a5e3-6266d2da6ea7',
        MP_ACCESS_TOKEN: 'TEST-5729491792342125-092816-da6d7a81ec2e80006bdef11bd14ef032-1449054997',
        GOOGLE_ID: '426944037353-doj012lil9vjrbb60o8gghbrs0khh1sp.apps.googleusercontent.com', 
        GOOGLE_SECRET: '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'
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
