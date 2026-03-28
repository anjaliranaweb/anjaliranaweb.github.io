import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of author/contributor names',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Keywords or categories for this publication',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 6,
      description: 'Summary or abstract of the publication',
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF Download Link',
      type: 'url',
      description: 'Direct link to download the PDF',
    }),
    defineField({
      name: 'journal',
      title: 'Journal/Conference',
      type: 'string',
      description: 'Name of the journal or conference where published',
    }),
    defineField({
      name: 'doi',
      title: 'DOI',
      type: 'string',
      description: 'Digital Object Identifier',
      placeholder: 'Enter DOI without https://doi.org/ prefix',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      contributors: 'contributors',
    },
    prepare(selection) {
      const {title, date, contributors} = selection
      const authorList = contributors?.slice(0, 2).join(', ') || 'No authors'
      return {
        title: title,
        subtitle: `${date || 'No date'} • ${authorList}${contributors?.length > 2 ? '...' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Publication Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
