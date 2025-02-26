export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Behold Group",
  description: "Behold what we can do for you.",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "About",
      href: "/about",
      dropdownItems: [
        { name: 'Company Overview', href: '/about/overview', description: 'Learn about our mission, vision, and approach' },
        { name: 'Our Team', href: '/about/team', description: 'Meet our founders and leadership team' },
        { name: 'Our Approach', href: '/about/approach', description: 'How we transform small businesses' },
        { name: 'Focus Areas', href: '/about/focus', description: 'Digital transformation and exit planning expertise' }
      ]
    },
    {
      label: "Services",
      href: "/services",
      dropdownItems: [
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Modernize your business with cutting-edge solutions' },
        { name: 'Exit Planning', href: '/services/exit-planning', description: 'Strategic planning for successful business exits' },
        { name: 'Business Consulting', href: '/services/consulting', description: 'Expert guidance for business growth' },
        { name: 'Technology Solutions', href: '/services/technology', description: 'Custom technology solutions and implementations' }
      ]
    },
    {
      label: "Resources",
      href: "/resources",
      dropdownItems: [
        { name: 'Guides & Playbooks', href: '/resources/guides', description: 'Comprehensive guides for business success' },
        { name: 'Templates', href: '/resources/templates', description: 'Ready-to-use business templates' },
        { name: 'Case Studies', href: '/resources/case-studies', description: 'Real success stories from our clients' },
        { name: 'Blog', href: '/blog', description: 'Latest insights and thought leadership' }
      ]
    },
    {
      label: "Partnerships",
      href: "/partnerships",
      dropdownItems: [
        { name: 'Partnership Application Form', href: '/partnerships/apply', description: 'Join our partner ecosystem' },
        { name: 'Partnership Journey', href: '/partnerships/journey', description: 'Learn the steps to partnering' },
        // { name: 'Channel Partners', href: '/partnerships/channel', description: 'Expand your service offerings' }
      ]
    },
    {
      label: "Contact",
      href: "/contact",
      dropdownItems: [
        { name: 'Get in Touch', href: '/contact', description: 'Reach out to our team' },
        { name: 'Support', href: '/contact/support', description: 'Technical support and assistance' },
        { name: 'Careers', href: '/contact/careers', description: 'Join our growing team' }
      ]
    },
    {
      label: "Blog",
      href: "/blog",
      // dropdownItems: [
      //   { name: 'Get in Touch', href: '/contact', description: 'Reach out to our team' },
      //   { name: 'Support', href: '/contact/support', description: 'Technical support and assistance' },
      //   { name: 'Careers', href: '/contact/careers', description: 'Join our growing team' }
      // ]
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
