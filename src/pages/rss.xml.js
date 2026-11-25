import rss from "@astrojs/rss";
import { getPosts } from "../lib/content";
import { SITE } from "../site";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.domain} blog`,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
}
