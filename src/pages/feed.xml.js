import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();


export async function GET(context) {
  const blogEntries = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  ).slice(0,10)
  return rss({
    // `<title>` field in output xml
    title: 'MyTungsten',
    // `<description>` field in output xml
    description: 'The personal web site of Mark Ahrens',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogEntries.map((blogPostEntry) => ({
      title: blogPostEntry.data.title,
      pubDate: blogPostEntry.data.date,
      description: blogPostEntry.data.description,
      content: sanitizeHtml(parser.render(blogPostEntry.body)),
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${blogPostEntry.id}`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}