# The Behold Group Website

A modern React-based website for The Behold Group, built with React, React Router, and HeroUI components.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Dark/Light Theme**: Theme switching with persistent user preferences
- **React Router**: Smooth navigation with React Router
- **Modern UI Components**: Built using HeroUI component library
- **Tailwind CSS**: Styling with Tailwind CSS for rapid development

## 📋 Pages

- **Home**: Landing page with main messaging
- **About**: Company information and team details
- **Services**: Service offerings and capabilities
- **Partnerships**: Partnership information and opportunities
- **Resources**: Helpful resources and materials
- **Blog**: Company blog and articles
- **Contact**: Contact information and form
- **Pricing**: Pricing information (currently inactive)

## 🛠️ Tech Stack

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation between pages
- **HeroUI**: UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server

## 🏗️ Project Structure

```
/
├── components/         # Reusable React components
│   ├── icons.tsx       # SVG icons
│   ├── navbar.tsx      # Navigation bar
│   ├── primitives.ts   # Design primitives
│   └── theme-switch.tsx # Theme toggle component
├── config/
│   └── site.ts         # Site configuration
├── hooks/
│   └── use-theme.ts    # Theme management hook
├── layouts/
│   └── default.tsx     # Default page layout
├── pages/              # Application pages
│   ├── about.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── index.tsx
│   ├── partnerships.tsx
│   ├── pricing.tsx
│   ├── resources.tsx
│   └── services.tsx
├── styles/
│   └── globals.css     # Global styles
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── provider.tsx        # Application providers
```

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/behold-group-website.git
cd behold-group-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🚀 Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## 🔧 Configuration

Site configuration is managed in `config/site.ts`. You can modify:

- Navigation items
- Social media links
- Site metadata

## 🎨 Customization

### Theming

The site supports light and dark modes. The theme switching is handled by the `useTheme` hook in `hooks/use-theme.ts`.

### Components

The project uses HeroUI components. Check the [HeroUI documentation](https://heroui.com) for more details on component usage and customization.

### Styling

Styling is done using Tailwind CSS. Customize the design by modifying the Tailwind configuration or adding custom CSS in the `styles` directory.

## 📄 License

[MIT](LICENSE)

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please contact us at [contact@beholdgroup.com](mailto:contact@beholdgroup.com)
