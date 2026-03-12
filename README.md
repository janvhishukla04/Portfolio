# Janvhi Shukla - Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js installed on your machine
- Git installed

### Installation

1. **Clone or download this project**

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Go to `http://localhost:3000`

## ✏️ Customization

### Update Your Information

Open `app/page.tsx` and update:

1. **Contact Links** (around line 51):
   - Replace `mailto:your.email@example.com` with your actual email
   - Update LinkedIn URL (line 227)

2. **Project Details**:
   - Add your JobFlow GitHub link (line 129)
   - Add JobFlow live demo link if you have one (line 135)
   - Update project description if needed

3. **Skills**: 
   - Modify the skills arrays (lines 158-183) to match your actual skillset

### Add Your Second Project

When ready, replace the "Coming Soon" project card (starting around line 143) with:

```tsx
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
  <div className="p-8">
    <h3 className="text-2xl font-bold mb-3">Your Project Name</h3>
    <p className="text-gray-600 mb-4">
      Your project description here
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tech1</span>
      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tech2</span>
    </div>
    <div className="flex gap-4">
      <a href="YOUR_GITHUB_LINK" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-primary transition">
        <FaGithub /> Code
      </a>
      <a href="YOUR_LIVE_LINK" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-primary transition">
        <FaExternalLinkAlt /> Live Demo
      </a>
    </div>
  </div>
</div>
```

## 🌐 Deploy to Vercel (FREE)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio"

# Create a new repository on GitHub (github.com/new)
# Then connect and push:
git remote add origin https://github.com/janvhishukla04/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your portfolio repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)
6. Done! Your site is live in ~2 minutes

### Your live URL will be:
`https://portfolio-janvhishukla04.vercel.app` (or similar)

You can add a custom domain later if you want.

## 📝 Making Updates

After deployment, any time you push changes to GitHub, Vercel will automatically redeploy your site.

```bash
# Make your changes, then:
git add .
git commit -m "Updated project details"
git push
```

## 🎨 Color Customization

To change the color scheme, edit `tailwind.config.js`:

```js
colors: {
  primary: '#3b82f6',  // Change this to your preferred color
  secondary: '#8b5cf6',
}
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Modern glassmorphism effects
- ✅ Clean, professional design
- ✅ Fast loading with Next.js
- ✅ SEO optimized

## 🛠️ Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- React Icons

---

Good luck with your job search! 🚀
