# Wayne Trout - AI Architect & Code Alchemist

An epic, technically sophisticated personal website showcasing expertise in AI, data science, and technology leadership. Built with cutting-edge web technologies featuring interactive animations, advanced visualizations, and comprehensive project showcases.

## 🚀 **Live Website**: https://tizrgnthdwdnk.ok.kimi.link

## 🌟 Features

### Design & User Experience
- **Futuristic Aesthetic**: Dark theme with cyan/blue glow effects and advanced animations
- **Technical Sophistication**: Terminal-style elements, code-inspired design
- **Interactive Animations**: Vanta.js backgrounds, typing effects, and smooth transitions
- **Responsive Design**: Fully optimized for all devices with mobile-first approach
- **Performance Optimized**: Fast loading with modern web standards

### Technical Features
- **Dynamic Backgrounds**: Vanta.js animated backgrounds (network effects)
- **Interactive Charts**: Plotly.js data visualizations for skills radar and project analytics
- **Terminal Interface**: Live coding terminal with animated commands
- **Multi-Platform Integration**: Links to Instagram, TikTok, LinkedIn, GitHub, Kaggle
- **Advanced Form Handling**: Interactive contact form with validation and animations
- **Real-time Status**: Availability indicator with pulse animation

### Content Sections
- **Hero Section**: Futuristic introduction with Vanta.js network background and live terminal
- **About Page**: Professional journey with timeline, skills radar chart, and interactive elements
- **Projects Portfolio**: Detailed showcases with architecture diagrams, live stats, and technical deep-dives
- **Contact Page**: Multi-platform integration (Instagram, TikTok, LinkedIn, GitHub, Kaggle) with animated contact form
- **Skills Visualization**: Interactive radar charts and animated progress indicators
- **Social Integration**: Complete social media presence with Instagram and TikTok integration

## 🛠 Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with Flexbox, Grid, and custom animations
- **JavaScript (ES6+)**: Modern JavaScript with interactive features
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

### Libraries & Frameworks
- **Vanta.js**: Animated background effects (Network)
- **Plotly.js**: Interactive data visualizations (Radar charts, timelines)
- **Typed.js**: Advanced typing animations
- **Splitting.js**: Text animation effects
- **Font Awesome**: Professional icon library
- **Google Fonts (Inter + JetBrains Mono)**: Modern typography with code font
- **Three.js**: 3D graphics and effects

### Performance Optimizations
- **Responsive Images**: Optimized for different screen sizes
- **Lazy Loading**: Improved page load times
- **CSS Minification**: Reduced file sizes
- **JavaScript Bundling**: Efficient script loading

## 📁 Project Structure

```
├── index.html          # Main landing page
├── about.html          # Professional background and experience
├── projects.html       # Project portfolio and case studies
├── contact.html        # Contact information and form
├── main.js            # Core JavaScript functionality
├── README.md          # Project documentation
└── resources/         # Images and media assets
```

## 🚀 GitHub Pages Deployment Guide

### Method 1: Automatic Deployment (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Create a new repository named "waynetrout-portfolio"
   git init
   git add .
   git commit -m "Initial portfolio website commit"
   git branch -M main
   git remote add origin https://github.com/wtrout187/waynetrout-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access Your Website**
   - Your site will be available at: `https://wtrout187.github.io/waynetrout-portfolio/`
   - Changes pushed to the main branch will automatically deploy

### Method 2: Manual Deployment

1. **Prepare Files**
   ```bash
   # Ensure all files are in the repository root
   ls -la
   # Should show: index.html, about.html, projects.html, contact.html, main.js, README.md
   ```

2. **Create gh-pages Branch**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r /path/to/your/files/* .
   git add .
   git commit -m "Deploy portfolio website"
   git push origin gh-pages
   ```

3. **Configure GitHub Pages**
   - Go to **Settings** → **Pages**
   - Select **gh-pages** branch
   - Your site will be live in 5-10 minutes

### Method 3: Using GitHub Desktop

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Clone Your Repository** or create a new one
3. **Add Files**: Drag and drop all website files to the repository
4. **Commit and Push**: Write a commit message and push to main branch
5. **Enable Pages**: Follow steps in Method 1

## 🎨 Customization Guide

### Personal Information
Update the following in each HTML file:
- **Name**: Replace "Wayne Trout" with your name
- **Contact Links**: Update LinkedIn, GitHub, Kaggle URLs
- **Email**: Replace placeholder email addresses
- **Project URLs**: Update with your actual project links

### Content Customization
- **About Page**: Update professional journey, experience, and achievements
- **Projects**: Replace with your actual projects and technologies
- **Skills**: Modify skill levels and categories in the radar chart
- **Contact Information**: Update availability status and services offered

### Visual Customization
- **Colors**: Modify CSS custom properties in the `:root` selector
- **Fonts**: Change Google Fonts import and font-family declarations
- **Images**: Replace placeholder images in the resources folder
- **Animations**: Adjust timing and effects in the JavaScript files

## 📊 Analytics Integration

### Google Analytics
Add your tracking ID to the `<head>` section of each HTML file:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
The website includes built-in performance monitoring that logs:
- Page load times
- First paint metrics
- User interaction timing

## 🔧 Development Tips

### Local Development
```bash
# Start a local server
python -m http.server 8000
# or
npx serve .

# Access at http://localhost:8000
```

### Debugging
- Use browser Developer Tools (F12)
- Check Console for JavaScript errors
- Monitor Network tab for asset loading
- Use Lighthouse for performance audits

### Browser Compatibility
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Ensure mobile responsiveness
- Verify all interactive elements work correctly

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly interface elements
- Optimized typography for small screens
- Efficient image loading for mobile networks

## 🎯 SEO Optimization

Built-in SEO features include:
- Semantic HTML structure
- Meta tags for social sharing
- Open Graph protocol support
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 🔒 Security Considerations

- All external links open in new tabs with `rel="noopener noreferrer"`
- Form validation to prevent XSS attacks
- Secure contact form handling
- No sensitive data exposure

## 📈 Performance Metrics

Target performance goals:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute as needed.

## 🆘 Support

If you encounter issues with deployment or customization:
1. Check the browser console for error messages
2. Verify all file paths are correct
3. Ensure GitHub Pages is enabled in repository settings
4. Try clearing browser cache and hard refresh
5. Open an issue in this repository for additional help

---

**Built with ❤️ for the AI and data science community**