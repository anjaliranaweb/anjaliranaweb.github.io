# How to Upload Blog Posts on Sanity.io

This guide explains how to create and publish blog posts using Sanity Studio, which will automatically appear on the website.

## Prerequisites

- Access to the Sanity Studio (either locally or the deployed version)
- Your Sanity account credentials

## Step 1: Access Sanity Studio

### Option A: Local Development
```bash
cd website-cms
npm run dev
```
Open `http://localhost:3333` in your browser.

### Option B: Deployed Studio
Navigate to your deployed Sanity Studio URL (e.g., `https://your-studio.sanity.studio`).

## Step 2: Log In

1. Click **Log in** on the Sanity Studio homepage
2. Sign in with your Sanity account (Google, GitHub, or email)

## Step 3: Create a New Blog Post

1. In the left sidebar, click on **Post** (or your blog post document type)
2. Click the **+ Create** button (or the pencil icon) to create a new post

## Step 4: Fill in the Post Details

Complete the following fields:

### Required Fields

| Field | Description |
|-------|-------------|
| **Title** | The headline of your blog post |
| **Slug** | URL-friendly identifier (e.g., `my-first-post`). Click "Generate" to auto-create from title |
| **Description** | A brief summary for SEO and previews (1-2 sentences) |
| **Published Date** | When the post should be dated |

### Optional Fields

| Field | Description |
|-------|-------------|
| **Hero Image** | Featured image displayed at the top of the post |
| **Body** | The main content of your post (supports rich text, images, code blocks) |

## Step 5: Write Your Content

The **Body** field uses Sanity's Portable Text editor:

- **Bold/Italic**: Select text and use the formatting toolbar
- **Headings**: Use H2, H3, H4 for section headers
- **Links**: Highlight text and click the link icon
- **Images**: Click the image icon to upload or select from library
- **Code blocks**: Use the code block option for technical content
- **Lists**: Create bulleted or numbered lists

### Tips for Good Content

- Use H2 (`##`) for main sections, H3 (`###`) for subsections
- Keep paragraphs short and scannable
- Add alt text to images for accessibility
- Use code blocks for any code snippets

## Step 6: Preview Your Post

1. Click the **Preview** button in the top-right corner
2. Review how your post will appear on the live site
3. Make any necessary adjustments

## Step 7: Publish

1. When satisfied, click the **Publish** button
2. Your post is now live and will appear on the website

> **Note**: Changes may take a few minutes to appear on the live site due to CDN caching.

## Managing Existing Posts

### Edit a Post
1. Click on the post in the sidebar
2. Make your changes
3. Click **Publish** to update

### Unpublish a Post
1. Open the post
2. Click the dropdown arrow next to "Publish"
3. Select **Unpublish**

### Delete a Post
1. Open the post
2. Click the three-dot menu (⋮)
3. Select **Delete**
4. Confirm deletion

## Troubleshooting

### Post not appearing on website?
- Ensure the post is **Published** (not just saved as draft)
- Check that all required fields are filled
- Wait a few minutes for CDN cache to refresh
- Verify the `slug` field is set

### Images not loading?
- Check image file size (keep under 5MB)
- Ensure image format is supported (JPG, PNG, WebP)
- Verify the image was fully uploaded before publishing

### Need help?
Contact the website administrator or check the [Sanity documentation](https://www.sanity.io/docs).
