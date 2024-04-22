export type SocialLink = {}

export type SiteInfo = {
  name: string
  url: string
  description: string
  image: {
    src: string
    alt: string
  }
  socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
  name: 'Nikita Chernov',
  url: 'drimchansky.dev',
  description: 'Personal website of Nikita Chernov',
  image: {
    src: '@todo',
    alt: 'Personal website of Nikita Chernov'
  },
  socialLinks: []
}

export { siteInfo }
