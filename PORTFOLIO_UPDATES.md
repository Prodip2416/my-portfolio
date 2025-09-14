# Portfolio Update Guide

## 🚀 Easy Day-by-Day Updates

This guide shows you how to easily update your portfolio as you create new projects in the next 1-2 months.

## 📁 Main Update File

**File to edit:** `src/data/portfolioData.ts`

This is your single source of truth for all portfolio content. Update this file whenever you want to add new projects, skills, or achievements.

## 🔄 How to Add New Projects

### 1. Add to Projects Array

In `src/data/portfolioData.ts`, find the `projects` array and add your new project:

```typescript
{
  title: 'Your New React Project',
  description: 'Brief description of what your project does and its key features',
  image: 'https://images.unsplash.com/photo-xxxxx', // Find a relevant image
  tech: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
  demoLink: 'https://your-live-demo.com',
  githubLink: 'https://github.com/prodip2416/your-repo',
  featured: true, // Set to true to show in Featured Projects
  category: 'Full Stack', // Frontend, Backend, Full Stack, Learning
  status: 'Live', // Live, In Development, Coming Soon
},
```

### 2. Update Skills (if needed)

Add new technologies to the skills arrays:

```typescript
skills: {
  frontend: [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'New Technology Here', // Add your new skill
  ],
  // ... other categories
}
```

### 3. Update Achievements (if applicable)

Add new achievements to the achievements object:

```typescript
achievements: {
  stats: [
    // Add new metrics here
    { icon: 'NewIcon', title: 'New Achievement', description: 'Description', value: '100%', color: 'bg-blue-500' },
  ],
  awards: [
    // Add new awards here
    {
      title: 'New Award',
      company: 'Company Name',
      year: '2024',
      description: 'Award description',
    },
  ],
}
```

## 🎨 Visual Updates

### Project Images

- Use Unsplash for high-quality images: `https://images.unsplash.com/photo-xxxxx`
- Choose images that represent your project's purpose
- Ensure images are 800x600 or similar aspect ratio

### Categories and Status

- **Categories:** Frontend, Backend, Full Stack, Learning, Mobile, AI/ML
- **Status:** Live, In Development, Coming Soon, Archived

## 📊 GitHub Integration

Your GitHub stats are automatically pulled from:

- Username: `prodip2416`
- Repositories: 61
- Stars: 1
- Followers: 17

These update automatically based on your GitHub activity.

## 🔧 Quick Commands

### Add New Project (Template)

```bash
# Copy this template and fill in your details
{
  title: 'Project Name',
  description: 'Project description',
  image: 'https://images.unsplash.com/photo-xxxxx',
  tech: ['React', 'Node.js', 'TypeScript'],
  demoLink: 'https://your-demo.com',
  githubLink: 'https://github.com/prodip2416/your-repo',
  featured: true,
  category: 'Full Stack',
  status: 'Live',
},
```

### Update Personal Info

```typescript
personal: {
  name: "Prodip Sarker",
  title: "Software Specialist at SSL Wireless",
  // Update any personal information here
}
```

## 🚀 Deployment

After making changes:

1. Save the `portfolioData.ts` file
2. The changes will automatically appear in your development server
3. Deploy to your hosting platform (Netlify, Vercel, etc.)

## 📝 Best Practices

1. **Keep descriptions concise** - 1-2 sentences max
2. **Use relevant images** - Choose images that represent your project
3. **Update regularly** - Add new projects as you complete them
4. **Test links** - Ensure all demo and GitHub links work
5. **Categorize properly** - Use consistent categories for better organization

## 🎯 Next 1-2 Months Plan

As you create new React and Node.js projects:

1. **Week 1-2:** Add 1-2 new projects
2. **Week 3-4:** Update skills with new technologies
3. **Week 5-6:** Add achievements and metrics
4. **Week 7-8:** Polish and optimize existing content

## 📞 Support

If you need help updating your portfolio, refer to this guide or check the component files in `src/components/` for more advanced customizations.

---

**Remember:** The `portfolioData.ts` file is your main control center. Update it regularly to keep your portfolio fresh and engaging for recruiters!
