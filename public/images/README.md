# Profile Images

## How to Add Your Photo

1. **Upload your photo** to the `public/` folder
2. **Name it** `prodip-sarker-full-stack-developer.jpg`
3. **Recommended size**: 1200px wide or larger
4. **File formats**: JPG, PNG, or WebP

## Current Setup

The portfolio is configured to look for:
- **Primary**: `/prodip-sarker-full-stack-developer.jpg`
- **Social preview**: `/og-image.jpg`
- **Fallback**: If image not found, it will show a code icon

## File Structure

```
public/
├── images/
│   └── README.md       ← This file
├── prodip-sarker-full-stack-developer.jpg
├── og-image.jpg
├── resume/
│   └── Prodip Sarker.pdf
├── robots.txt
└── sitemap.xml
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: 1200px wide recommended
- **Quality**: High resolution for crisp display
- **File size**: Under 2MB for fast loading

The image is cropped by the UI and shown with a gradient border and hover effects.
