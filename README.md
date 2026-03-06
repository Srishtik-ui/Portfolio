# 🚀 Srishti Kumari - Data Science & Machine Learning Portfolio

A modern, professional portfolio website showcasing data science projects, skills, and achievements. Built with clean HTML, CSS, and JavaScript for optimal performance and user experience.

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme** with light mode toggle
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Fade-ins, scroll reveals, and interactive elements
- **Gradient Accents** - Eye-catching purple/blue gradient design
- **Professional Typography** - Poppins & Inter font families

### 🔥 Key Sections
1. **Hero Section** - Dynamic typewriter effect with compelling tagline
2. **About Me** - Engaging narrative with mission statement and statistics
3. **Technical Skills** - Organized by proficiency level with animated progress bars
4. **Featured Projects** - Detailed project showcases with methodology and results
5. **Education** - Academic background with coursework and certifications
6. **Achievements** - Extracurricular activities and 2025 goals
7. **Technical Blog** - Articles demonstrating communication skills
8. **Contact** - Multiple contact methods with functional form

### ⚡ Performance & Optimization
- **Fast Load Time** - Optimized for under 3 seconds
- **SEO Friendly** - Semantic HTML with proper meta tags
- **Accessible** - WCAG compliant with keyboard navigation
- **Cross-browser Compatible** - Works on all modern browsers
- **Mobile First** - Responsive design approach

### 🎯 Interactive Elements
- Smooth scrolling navigation
- Active section highlighting
- Animated skill bars and progress indicators
- Floating particles in hero section
- Hover effects on cards and buttons
- Mobile hamburger menu
- Back to top button
- Theme toggle (dark/light mode)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)** - Modern vanilla JS
- **Font Awesome** - Icons
- **Google Fonts** - Poppins & Inter

## 📦 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🚀 Quick Start

### 1. Local Development

Simply open `index.html` in your browser:

```bash
# Navigate to project directory
cd portfolio

# Open with default browser (Windows)
start index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

### 2. Deploy to GitHub Pages

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create GitHub repository and push
git remote add origin https://github.com/Srishtik-ui/portfolio.git
git branch -M main
git push -u origin main

# Enable GitHub Pages
# Go to Settings > Pages > Source: main branch > Save
```

Your site will be live at: `https://Srishtik-ui.github.io/portfolio/`

### 3. Deploy to Netlify

1. **Drag & Drop Method:**
   - Go to [Netlify](https://netlify.com)
   - Drag your project folder to the drop zone
   - Done! Your site is live

2. **Git Integration:**
   - Connect your GitHub repository
   - Deploy automatically on every commit

### 4. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live instantly!

## 🎨 Customization Guide

### Update Personal Information

**1. Hero Section (index.html, line ~45):**
```html
<h1>Hi, I'm <span class="gradient-text">Your Name</span></h1>
```

**2. Contact Information (index.html, line ~1250):**
```html
<a href="mailto:your.email@gmail.com">your.email@gmail.com</a>
```

**3. Social Links (index.html, line ~95):**
```html
<a href="https://github.com/yourusername" target="_blank">
```

### Modify Colors

Edit CSS variables in `styles.css` (line ~2):
```css
:root {
    --primary-color: #4158D0;      /* Change primary color */
    --secondary-color: #C850C0;    /* Change secondary color */
    --accent-color: #FFCC70;       /* Change accent color */
}
```

### Add/Remove Sections

Simply copy/paste section blocks in `index.html` and adjust IDs and navigation links accordingly.

### Update Projects

Edit the projects section starting at line ~670 in `index.html`. Each project follows this structure:
```html
<div class="project-card">
    <div class="project-card-header">
        <div class="project-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <h3>Project Title</h3>
    </div>
    <!-- Project details -->
</div>
```

## 📊 Analytics Integration

To add Google Analytics:

1. Get your tracking ID from [Google Analytics](https://analytics.google.com)
2. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🔧 Advanced Features

### Add Resume Download

1. Add your resume PDF to the project folder
2. Update the download button in `script.js` (line ~225):

```javascript
downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'resume.pdf'; // Your resume file
});
```

### Enable Contact Form Backend

The form currently shows a notification. To make it functional:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Netlify Forms**
Add `netlify` attribute to form:
```html
<form name="contact" netlify>
```

**Option 3: Custom Backend**
Update the form submission handler in `script.js` to send to your API.

## 🎯 SEO Optimization

### Update Meta Tags

Edit `index.html` head section:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Custom, Keywords">
```

### Add Open Graph Tags

```html
<meta property="og:title" content="Srishti Kumari | Data Science Portfolio">
<meta property="og:description" content="Explore my data science projects and skills">
<meta property="og:image" content="https://yoursite.com/preview-image.jpg">
<meta property="og:url" content="https://yoursite.com">
```

## 📱 Progressive Web App (Optional)

To make it a PWA:

1. Create `manifest.json`:
```json
{
  "name": "Srishti Kumari Portfolio",
  "short_name": "SK Portfolio",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0e27",
  "theme_color": "#4158D0",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

2. Add to `index.html` head:
```html
<link rel="manifest" href="manifest.json">
```

3. Uncomment service worker code in `script.js` (line ~501)

## 🐛 Troubleshooting

### Icons not showing?
- Check internet connection (Font Awesome loads from CDN)
- Or download Font Awesome locally

### Animations not working?
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure all files are in the same directory

### Mobile menu not closing?
- Check if JavaScript is enabled
- Try hard refresh (Ctrl+Shift+R)

## 📈 Performance Tips

1. **Optimize Images** - Use WebP format and compress images
2. **Minify Code** - Use tools like UglifyJS for production
3. **Enable Caching** - Add cache headers if using custom hosting
4. **CDN** - Use CDN for libraries (already implemented)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

## 📞 Support

For questions or issues:
- **Email:** srishti717@gmail.com
- **GitHub Issues:** [Create an issue](https://github.com/Srishtik-ui/portfolio/issues)
- **LinkedIn:** [Connect with me](https://www.linkedin.com/in/srishti-kumari-60a8502a6/)

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Built with 💜 by Srishti Kumari**

*Last Updated: February 2025*

## 🔮 Future Enhancements

- [ ] Add blog CMS integration
- [ ] Implement dark/light theme animations
- [ ] Add project filtering functionality
- [ ] Create case study pages for projects
- [ ] Integrate real-time GitHub stats
- [ ] Add testimonials section
- [ ] Implement contact form backend
- [ ] Add Google Analytics dashboard
- [ ] Create downloadable resume generator
- [ ] Add multilanguage support

---

### 🌟 Star this repository if you find it helpful!
