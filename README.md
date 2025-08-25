# GAINAI.ONLINE - AI Consultancy Website

A professional, modern website for AI consultancy and automation services built with Next.js and TailwindCSS.

## 🚀 Features

### Design & UI
- **Modern, Premium Design**: Clean, minimal aesthetic with professional color scheme
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Fade-in, slide-up animations and hover effects
- **Professional Typography**: Inter and Poppins fonts for optimal readability

### Sections
1. **Sticky Navigation**: Logo, menu items, and call-to-action button
2. **Hero Section**: Compelling headline with visual elements and CTA
3. **Services**: Card-based layout showcasing AI consultancy services
4. **n8n Workflows**: Grid display of automation workflow examples
5. **Projects/Case Studies**: Portfolio of past work and achievements
6. **Client Reviews**: Interactive testimonial carousel with client feedback
7. **Contact Section**: Contact form and multiple communication channels
8. **Footer**: Quick links, social media, and company information

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **TailwindCSS**: Utility-first CSS framework for rapid development
- **Lucide Icons**: Beautiful, consistent icon set
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Form Handling**: Interactive contact form with state management

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, PostCSS
- **Icons**: Lucide React
- **Fonts**: Inter, Poppins (Google Fonts)
- **Development**: ESLint, Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-consultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ai-consultancy/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and TailwindCSS
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── Navbar.tsx         # Navigation component
│   ├── HeroSection.tsx    # Hero section
│   ├── ServicesSection.tsx # Services showcase
│   ├── WorkflowsSection.tsx # n8n workflows
│   ├── ProjectsSection.tsx # Projects/case studies
│   ├── ClientReviewsSection.tsx # Client testimonials
│   ├── ContactSection.tsx # Contact form and info
│   └── Footer.tsx         # Footer component
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Colors
The website uses a professional color palette defined in `tailwind.config.js`:
- **Primary**: Blue tones (#0ea5e9, #0284c7)
- **Accent**: Green tones (#22c55e, #16a34a)
- **Gray**: Neutral grays for text and backgrounds

### Content
- **Services**: Update the services array in `ServicesSection.tsx`
- **Workflows**: Modify the workflows array in `WorkflowsSection.tsx`
- **Projects**: Edit the projects array in `ProjectsSection.tsx`
- **Testimonials**: Update client reviews in `ClientReviewsSection.tsx`
- **Contact Info**: Modify contact details in `ContactSection.tsx`

### Styling
- **Typography**: Font families are configured in `tailwind.config.js`
- **Animations**: Custom animations are defined in the TailwindCSS config
- **Components**: Reusable component classes are in `globals.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update the navigation menu in `Navbar.tsx` if needed

### Styling Guidelines
- Use TailwindCSS utility classes for consistent styling
- Follow the established color scheme and spacing patterns
- Maintain responsive design principles
- Use the predefined component classes from `globals.css`

### Performance Optimization
- Images are optimized with Next.js Image component
- CSS is purged in production builds
- Components are lazy-loaded where appropriate
- Smooth scrolling and animations are hardware-accelerated

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be configured in Vercel dashboard

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Connect repository and build automatically
- **Traditional hosting**: Build locally and upload the `.next` folder

## 📞 Support

For questions or support:
- **Email**: hello@aiconsultancy.com
- **WhatsApp**: +1 (555) 123-4567
- **LinkedIn**: [AI Consultancy](https://linkedin.com/in/aiconsultancy)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and TailwindCSS

