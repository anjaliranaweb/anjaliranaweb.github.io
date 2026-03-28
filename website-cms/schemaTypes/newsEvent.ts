import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsEvent',
  title: 'News & Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Brief description of the news or event',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Year of the event (e.g., 2024)',
      validation: (Rule) => Rule.required().min(1900).max(2100),
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          {title: 'January', value: 'january'},
          {title: 'February', value: 'february'},
          {title: 'March', value: 'march'},
          {title: 'April', value: 'april'},
          {title: 'May', value: 'may'},
          {title: 'June', value: 'june'},
          {title: 'July', value: 'july'},
          {title: 'August', value: 'august'},
          {title: 'September', value: 'september'},
          {title: 'October', value: 'october'},
          {title: 'November', value: 'november'},
          {title: 'December', value: 'december'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Conference', value: 'conference'},
          {title: 'Poster Presentation', value: 'poster'},
          {title: 'Publication Release', value: 'publication'},
          {title: 'Award', value: 'award'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'General News', value: 'general'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional longer description of the event',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Optional link for more details',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      month: 'month',
      eventType: 'eventType',
    },
    prepare(selection) {
      const {title, year, month, eventType} = selection
      const monthCapitalized = month ? month.charAt(0).toUpperCase() + month.slice(1) : ''
      const typeLabels: Record<string, string> = {
        conference: '🎤 Conference',
        poster: '📋 Poster',
        publication: '📄 Publication',
        award: '🏆 Award',
        workshop: '🔧 Workshop',
        general: '📰 News',
      }
      return {
        title: title,
        subtitle: `${monthCapitalized} ${year} • ${typeLabels[eventType] || eventType}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [
        {field: 'year', direction: 'desc'},
        {field: 'month', direction: 'desc'},
      ],
    },
    {
      title: 'Date, Oldest',
      name: 'dateAsc',
      by: [
        {field: 'year', direction: 'asc'},
        {field: 'month', direction: 'asc'},
      ],
    },
  ],
})
