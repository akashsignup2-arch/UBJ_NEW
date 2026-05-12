# Image Replacement Guide: UBJ Houseboats

This guide explains how to replace the high-quality placeholder images currently used on the website with your final professional photoshoot assets.

## Next.js Image Optimization Note
Currently, the website uses standard `<img>` tags pointing to Unsplash URLs for elegant placeholders. When you switch to your final assets, it is highly recommended to use Next.js's native `<Image />` component from `next/image` for automatic optimization, WebP formatting, and lazy loading.

To use `<Image />` with local files:
1. Place your images in the `public/images/` folder (you will need to create this folder).
2. Import the image in the component: `import heroBg from '@/public/images/hero-bg.jpg';`
3. Replace `<img src="..." />` with `<Image src={heroBg} alt="..." fill className="object-cover" />` (Note: the parent container must have `relative` or `absolute` positioning when using `fill`).

## Where to find and replace images

### 1. Hero Section (`src/components/Hero.tsx`)
- **Current:** Unsplash URL in inline style (`backgroundImage`).
- **Recommended Size:** At least 1920x1080 (Landscape).
- **Style:** Cinematic, mist on water, traditional boat silhouette, dark/moody.
- **How to replace:** Change the URL in `style={{ backgroundImage: "url('...')" }}` on line 25.

### 2. Brand Story Section (`src/components/BrandStory.tsx`)
- **Current:** Unsplash URL in `<img>` tag.
- **Recommended Size:** 800x1000 (Portrait, aspect ratio 4:5).
- **Style:** Close-up of wooden boat texture, traditional details, or a high-quality portrait of the founders (Unni, Biju, Jayan).
- **How to replace:** Update the `src` attribute on line 21.

### 3. Houseboats Section (`src/components/Houseboats.tsx`)
- **Current:** Two Unsplash URLs in the `boats` array.
- **Recommended Size:** 1200x900 (Landscape, aspect ratio 4:3).
- **Style:** Bright, premium exterior or interior shots of 'Vinayaka' and 'Mahadeva'.
- **How to replace:** Update the `image` property in the `boats` array for each vessel (lines 13 and 23).

### 4. Gallery Section (`src/components/Gallery.tsx`)
- **Current:** Array of 5 Unsplash URLs.
- **Recommended Size:** Mix of landscape (1200x800) and portrait (800x1200) to fit the masonry layout.
- **Style:** Immersive moments—food, water, bedrooms, relaxing on deck.
- **How to replace:** Update the `src` URLs in the `images` array starting on line 12.

### 5. SEO / Open Graph Image (`src/app/layout.tsx` and `src/app/page.tsx`)
- **Current:** Unsplash URL in metadata.
- **Recommended Size:** 1200x630.
- **Style:** The best, most iconic wide shot of the boat on the water.
- **How to replace:** Update the `url` property in `openGraph.images` in `src/app/layout.tsx` (line 28), and the `image` property in the Schema Markup JSON in `src/app/page.tsx` (line 28).

## Creating Placeholders
If you need temporary local placeholders before the final shoot, simply create a `public/images` directory, save your images there (e.g., `hero.jpg`), and reference them as `/images/hero.jpg` in the `src` attributes.
