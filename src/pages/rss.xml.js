import rss from '@astrojs/rss';
import { sanityClient } from 'sanity:client';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const publications = await sanityClient.fetch(`
		*[_type == "publication" && defined(slug.current)] | order(publishedAt desc) {
			title,
			"slug": slug.current,
			publishedAt,
			abstract,
			contributors,
			journal
		}
	`);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: publications.map((pub) => ({
			title: pub.title,
			pubDate: pub.publishedAt ? new Date(pub.publishedAt) : new Date(),
			description: pub.abstract || '',
			author: pub.contributors ? pub.contributors.join(', ') : '',
			link: `/publications/${pub.slug}/`,
		})),
	});
}
