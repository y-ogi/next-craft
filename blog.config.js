const BLOG = {
  title: 'OGIX NET',
  author: 'ogi',
  link: 'https://ogix.vercel.app',
  description: '',
  lang: 'ja-JP', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F2F2F2', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  since: 2022, // If leave this empty, current year will be used.
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  craftConfigShareUrl: 'https://www.craft.do/s/8HPTGHbQDawWFq', // The link to share your craft config
  notesNav: {
    index: 'Home',
    blog: 'My Blog',
    contact: 'Contact'
  },
  notesLink: {
    index: '/',
    blog: 'https://ogix.vercel.app',
    contact: 'https://ogix.vercel.app'
  },
  socialLink: {
    twitter: 'https://twitter.com/',
    github: '',
    telegram: ''
  },
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS']
  },
  analytics: {
    provider: '', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '', // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
