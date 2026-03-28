# How to Upload Publications on Sanity.io

This guide explains how to add new academic publications to your website using Sanity Studio.

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

## Step 3: Create a New Publication

1. In the left sidebar, click on **Publication**
2. Click the **+ Create** button to create a new publication

## Step 4: Fill in the Publication Details

### Required Fields

| Field | Description |
|-------|-------------|
| **Title** | The title of your publication |
| **Slug** | URL-friendly identifier (click "Generate" to auto-create from title) |
| **Published At** | Publication date |

### Optional Fields

| Field | Description |
|-------|-------------|
| **Contributors** | List of author names (add each separately) |
| **Tags** | Keywords/topics for categorization |
| **Abstract** | Full abstract text |
| **PDF URL** | Direct link to download the PDF |
| **Journal** | Name of the journal/conference |
| **DOI** | Digital Object Identifier (without https://doi.org/ prefix) |

## Step 5: Adding Contributors

Contributors are stored as an array of text strings:

1. Click the **+** button in the Contributors field
2. Enter the author name (e.g., "Anjali Rana")
3. Repeat for each co-author
4. Drag to reorder authors as needed

## Step 6: Adding Tags

Tags help categorize your publications:

1. Click in the Tags field
2. Type a tag (e.g., "microbiome", "genomics")
3. Press Enter or comma to add
4. Add multiple tags as needed

## Step 7: PDF and DOI Links

### PDF URL
- Use a direct link to the PDF file
- Can be from your institutional repository, ResearchGate, or cloud storage
- Example: `https://your-repo.edu/papers/your-paper.pdf`

### DOI
- Enter only the DOI identifier, NOT the full URL
- Example: `10.1016/j.microbio.2024.001234`
- The website will automatically link to `https://doi.org/your-doi`

## Step 8: Publish

1. Review all content for accuracy
2. Click **Publish** to make the publication live
3. The website will automatically update (may take a few minutes for cache to clear)

## How Publications Display

Once published, your publication will appear:

1. **On the Publications page** - with title, contributors, date, abstract preview, and tags
2. **On its own detail page** - with full abstract and download/DOI buttons
3. **In the RSS feed** - for readers using feed readers

## Best Practices

- **List all contributors** in the order they appear on the paper
- **Use consistent tags** across publications (e.g., always "Microbiome" not sometimes "microbiome")
- **Always include DOI** when available for citation purposes
- **Set accurate publication dates** for proper chronological ordering

## Managing Existing Publications

### Edit a Publication
1. Click on the publication in the sidebar
2. Make your changes
3. Click **Publish** to update

### Unpublish a Publication
1. Open the publication
2. Click the dropdown arrow next to "Publish"
3. Select **Unpublish**

### Delete a Publication
1. Open the publication
2. Click the three-dot menu (⋮)
3. Select **Delete**
4. Confirm deletion

## Troubleshooting

### Publication not appearing on website?
- Ensure the publication is **Published** (not just saved as draft)
- Check that Title, Slug, and Published At are filled
- Verify the slug is unique
- Wait a few minutes for CDN cache to refresh

### PDF link not working?
- Verify the URL is accessible (test in a new browser tab)
- Ensure the URL points directly to the PDF, not a landing page
- Check file permissions on the hosting service

### Need help?
Contact the website administrator or check the [Sanity documentation](https://www.sanity.io/docs).
