# 🚀 Srishti Kumari - Data Science & Machine Learning Portfolio

**Rose Gold & Black Premium Edition** - A luxury, elegant portfolio website showcasing data science projects, skills, and achievements. Built with a stunning rose gold and deep black color theme for a premium, Apple-inspired aesthetic.

## ✨ Features

### 🎨 Design & UX - Rose Gold Theme
- **Premium Rose Gold & Black Theme** - Luxury color palette (#C9747A rose gold, #0A0A0F deep black)
- **Fully Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Typed.js typing effects, AOS scroll animations, and glowing effects
- **Rose Gold Accents** - Gradient headings, buttons, skill bars, and card borders
- **Elegant Typography** - Cormorant Garamond (headings) & Poppins (body) with wide letter spacing

### 🔥 Key Sections
1. **Hero Section** - Typing animation with rose gold gradient name and floating tech icons with orbital animation
2. **About Me** - Engaging narrative with rose gold bordered fun fact cards
3. **Technical Skills** - Categorized skills with rose gold gradient progress bars
4. **Featured Projects** - 3 ML projects with architecture breakdowns and clickable live demos
   - Emotion Detection Web App (Streamlit)
   - Car Sales Price Prediction (Gradio/HuggingFace)
   - IRIS Predict Classification (Streamlit)
5. **Achievements** - Rose gold trophy cards highlighting certifications and milestones
   - Deloitte Australia Cyber Security Program (2024)
   - Hacktoberfest 2024 - Level 4 Badge
   - GirlScript Summer of Code 2025
   - Access Denied Workshop
6. **Contact** - Rose gold themed contact form with social links

### ⚡ Performance & Optimization
- **Single HTML File** - Everything embedded (CSS + JS) for easy deployment
- **Fast Load Time** - Minimal dependencies, CDN-based libraries
- **SEO Friendly** - Semantic HTML with proper meta tags
- **Accessible** - ARIA labels and keyboard navigation
- **Cross-browser Compatible** - Works on all modern browsers
- **Mobile First** - Fully responsive design

### 🎯 Interactive Elements & Animations
- **Typed.js** - Typing animation: Data Science Student, ML Engineer, Python Developer, Problem Solver, Open Source Contributor
- **AOS Library** - Fade-in on scroll animations
- **Rose Gold Glowing Border** - Pulsing animation on profile photo
- **Card Hover Effects** - Lift up with rose gold shadow glow
- **Smooth Navbar** - Becomes solid on scroll with backdrop blur
- **Floating Icons** - Orbital animation around profile photo
- **Skill Bar Animation** - Fills on scroll with rose gold gradient
- **Back to Top Button** - Rose gold floating button

## 🛠️ Technologies Used

- **HTML5** - Single standalone file with embedded CSS and JavaScript
- **CSS3** - Custom properties (rose gold theme), Flexbox, Grid, keyframe animations
- **JavaScript (ES6+)** - Vanilla JS for interactions
- **Typed.js** - Typing animation library
- **AOS.js** - Animate On Scroll library
- **Font Awesome 6.4** - Icon library
- **Google Fonts** - Cormorant Garamond & Poppins

## 🎨 Color Palette

```css
--bg-primary: #0A0A0F (Deep Black)
--bg-secondary: #12121A (Rich Dark)
--card-bg: #1A1A25 (Dark Purple-Black)
--accent-primary: #C9747A (Rose Gold)
--accent-secondary: #E8B4B8 (Soft Pink Gold)
--text-primary: #F5F5F5 (Off White)
--text-secondary: #B8B8C5 (Light Gray)
--border-color: #2A2A3A
```

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
