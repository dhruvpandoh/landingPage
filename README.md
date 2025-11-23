# BrandNav Landing Page

A responsive marketing/landing page built with React.  
Designed for a product/company showcase with hero content, feature highlights, and a modern sectioned layout.

## Features
- **Hero Section** with headline + subheading
- **Feature Blocks** and benefit callouts
- **Clean sectioned layout** with custom CSS
- **Responsive design** for desktop and mobile
- Static asset based UI (SVGs/images inside the project)

## Tech Stack
- React (Create React App)
- CSS (custom component styling)

## Project Structure
```
src/
  components/
    Index.js
    index.css
  App.js
  App.css
  index.js
public/
  image/   # SVGs and page assets
```

## Getting Started

### 1. Install
```bash
git clone <your-repo-url>
cd landingPage-main
npm install
```

### 2. Run Dev Server
```bash
npm start
```
Open: `http://localhost:3000`

## Customization
- Main layout lives in `src/components/Index.js`
- Styles live in `src/components/index.css`
- Update images in `public/image/`

## Future Improvements
- Convert repeated UI blocks into reusable components.
- Add smooth scroll navigation.
- Add deployment config (Netlify/Vercel).
