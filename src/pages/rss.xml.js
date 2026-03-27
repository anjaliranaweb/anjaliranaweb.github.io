import rss from '@astrojs/rss';
import { sanityClient } from 'sanity:client';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await sanityClient.fetch(`
		*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
			title,
			"slug": slug.current,
			publishedAt,
			excerpt
		}
	`);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.title,
			pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
			description: post.excerpt || '',
			link: `/blog/${post.slug}/`,
		})),
	});
}
