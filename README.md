# Kiran Consulting Portfolio

A polished, single-page Next.js site designed to position Kiran as a Unity and game engineering consultant. The page highlights core services, a free one-hour audit offering, credibility markers, testimonials, and multiple contact pathways while keeping the messaging discreet about current employment.

## ✨ Highlights
- Senior-level value proposition in a conversion-focused hero section.
- Modular sections for services, free audit flow, experience timeline, testimonials, and contact options.
- Centralised `siteCopy` configuration to keep contact links and personal details easy to update.
- Responsive, mobile-first layout built with Tailwind CSS and modern typography.

## 🧱 Project Structure
```
app/
  (site)/
    components/       // shared UI like SectionHeading
    sections/         // individual content sections used on the home page
  layout.tsx          // metadata, global layout, and background treatment
  page.tsx            // assembles sections for the homepage
lib/
  site-config.ts      // edit contact links + personal identifiers here
```

## 🚀 Getting Started
1. Ensure you have **Node.js 18+** installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the live preview. Hot reloading is enabled, so edits refresh automatically.

### Production-style Preview
When you want to inspect the optimized build locally:
```bash
npm run preview
```
This command runs `next build` and then serves the result with `next start`.

## ✏️ Customisation Checklist
1. **Update contact details** in [`lib/site-config.ts`](lib/site-config.ts) with your actual email, WhatsApp/phone number, LinkedIn profile, and calendar link.
2. **Swap placeholder company names & stats** inside the relevant section files in `app/(site)/sections/`.
3. **Adjust metadata** in [`app/layout.tsx`](app/layout.tsx) for real URLs/OG images.
4. **Add real testimonials or case studies** when available.

## 🌐 Deploying on GitHub Pages
1. Build the static export (the `GITHUB_PAGES` flag ensures assets resolve under `/kiran_portfolio`):
   ```bash
   GITHUB_PAGES=true npm run build
   ```
   > On Windows PowerShell, run `$env:GITHUB_PAGES="true"; npm run build` instead.

   The generated files will be placed in the `out/` directory.
2. Publish the contents of `out/` to a `gh-pages` branch. One option is to run:
   ```bash
   npx gh-pages -d out
   ```
   (The first invocation downloads the `gh-pages` CLI if it is not already installed.)
3. In your repository settings, enable GitHub Pages and choose the `gh-pages` branch (with the `/` root) as the source.
4. After GitHub finishes deploying, your portfolio will be available at `https://<username>.github.io/<repository>/`.

_Vercel_ remains the most seamless option for previews and custom domains, but the above steps keep everything within GitHub if you prefer.

## ✅ Quality Checks
- `npm run lint`
- Manual review across mobile, tablet, and desktop breakpoints.

Feel free to extend the component library or integrate a lightweight CMS if you need frequent copy updates.
