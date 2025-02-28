# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js 14, featuring a retro-pixel aesthetic with modern interactions.

## 🚀 Features

- **Pixel Art Design**: Custom pixel-perfect UI elements and animations
- **Dark/Light Mode**: System-aware theme switching
- **Interactive Projects Section**: 
  - Category filtering
  - 3D card interactions
  - Modal project previews
- **Responsive Design**: Mobile-first approach
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Font**: Press Start 2P (for pixel-perfect headings)

## 📦 Project Structure

```
portfolio_Next_25/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── projects.tsx # Projects section
│   └── ...         # Other components
├── public/         # Static assets
└── styles/        # Additional styling
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd portfolio_Next_25
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 🎨 Customization

### Themes
Edit the theme variables in `globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  // ...other variables
}
```

### Projects
Modify the projects array in `components/projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    icon: YourIcon,
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/yourusername/project",
    category: "your-category"
  },
  // ...more projects
]
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide Icons](https://lucide.dev/) for the icon set
