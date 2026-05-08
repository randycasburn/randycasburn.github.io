# CryptoTrader Website

A professional static website for the CryptoTrader Electron application. This website explains what the app does, how to set it up, and how to use it.

## Pages

### 1. **Home (index.html)**
The landing page featuring:
- Overview of what CryptoTrader does
- Key features showcased with icons
- Three-step getting started process
- Call-to-action buttons

### 2. **Setting Up (setup.html)**
Comprehensive setup guide including:
- Available settings and their explanations
- Detailed configuration options (coins, profit margins, timeframes, etc.)
- Step-by-step setup process (8 steps from installation to live trading)
- Best practices and dos/don'ts
- Tips for getting started

### 3. **How To Use (usage.html)**
Detailed usage guide covering:
- Simulation Mode vs Live Mode comparison
- All dashboard panels explained (Process Status, Account Status, Charts, Trading Signals, PnL, Trade History, Neural Status, Alerts)
- Common tasks (starting training, trading, stopping, switching modes, monitoring)
- Troubleshooting guide for common issues
- Best practices for ongoing use

## Design

The website uses a color scheme inspired by the CryptoTrader app icon:
- **Primary Cyan**: #1ADBCF (primary accent)
- **Primary Gold**: #FFD700 (secondary accent)
- **Primary Green**: #7CBA3C (success state)
- **Primary Red**: #F64A3C (warning/alert state)
- **Dark Background**: #0F1419 (professional dark theme)

### Features
- Fully responsive design (works on desktop, tablet, mobile)
- No external dependencies (pure HTML/CSS/JavaScript)
- Smooth animations and transitions
- Semantic HTML structure
- Accessible color contrasts
- Fast loading (minimal CSS/JS)

## File Structure

```
website/
├── index.html          # Home page
├── setup.html          # Setting Up guide
├── usage.html          # How To Use guide
├── styles.css          # Shared styling
├── script.js           # Navigation and interactivity
└── README.md           # This file
```

## Viewing the Website

### Local Development
Simply open any HTML file in a web browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Or just double-click the file in your file explorer
```

### Deployment Options

#### 1. **GitHub Pages**
1. Create a `gh-pages` branch in your repo
2. Copy the website folder contents to the root
3. Enable GitHub Pages in repository settings
4. Site will be available at `https://username.github.io/CryptoTraderElectron`

#### 2. **Static Hosting (Vercel, Netlify, etc.)**
- Both services support drag-and-drop deployment
- Just upload the website folder
- Get a live URL instantly

#### 3. **Your Own Server**
```bash
# Copy files to your web server
scp -r website/* user@yourserver.com:/var/www/html/cryptotrader
```

#### 4. **Python HTTP Server (Quick Test)**
```bash
cd website
python -m http.server 8000
# Then open http://localhost:8000
```

## Navigation

- **Mouse**: Click navigation links at the top
- **Keyboard**: Alt+Left/Right arrows to navigate between pages
- **Mobile**: Responsive menu works on all screen sizes

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-cyan: #1ADBCF;
    --primary-gold: #FFD700;
    /* ... etc */
}
```

### Content
Edit HTML files directly - no build process needed. Changes appear immediately when you refresh.

### Styling
All styles are in `styles.css`. Modify as needed for your brand.

## Performance

- **No external dependencies** - Fast loading
- **Minimal CSS** - ~15KB gzipped
- **Minimal JavaScript** - ~3KB gzipped
- **No animations on load** - Instant page display
- **Mobile optimized** - Responsive from 320px to 4K displays

## SEO

Each page includes:
- Descriptive title tags
- Meta viewport for mobile
- Semantic HTML structure
- Clear heading hierarchy
- Descriptive alt text areas for customization

## Maintenance

To update content:
1. Edit the relevant `.html` file
2. Preserve the structure and CSS classes
3. No rebuilding or compilation needed
4. Test in a browser to verify

## License

Same license as the CryptoTrader application.

---

**Last Updated**: May 2024  
**Website Version**: 1.0
