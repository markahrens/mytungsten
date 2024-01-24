---
title: Anatomy of a New Design
description: ""
date: 2009-02-08
tags: ["design"]
category: Personal
---


If you have been to my site in the last couple of weeks, you have likely noticed the new design for the site.&nbsp; In the past, with a new design I just made a post about it and tossed it out there for the “I like it!” comments. This time, I wanted to write a post about how this design came about, some details about it and where I see it going in the future.

<h2>The Front Page</h2>

I realize that the front page might not always be the landing spot for people searching, so I decided to take some of the actual content off the front and instead try to cram as much about me as possible out there. For example, on the previous design I linked to my Last.fm and Flickr profiles.&nbsp; This time, I wanted to bring a little bit of that content here, so the bottom of the front page now has that info.

In eliminating posts from the front page, I did want to leave a teaser for posts out there, so I am taking advantage of the excerpt field to display a byline of sorts for each post. I think this is a good middle ground where people can see what a post is about but not have a lengthy page to navigate to see posts they may have missed.

<h2>Organization</h2>

Awhile back, I decided to take advantage of only a few categories and then use lots of tags to organize stuff on the site. This worked pretty much, but I found that some content didn’t warrant a new category, but would be useful to navigate back and forth through. For this I found the <a href="https://web.archive.org/web/20131211115525/http://unfoldingneurons.com/neurotic-plugins/organize-series-wordpress-plugin">Organize Series plugin</a>. An example of this is the <a href="https://web.archive.org/web/20131211115525/http://www.marktopia.net/series/2008-albums">2008 Albums</a> series. Instead of trying to fit my top ten list into a tag called bestof2008, now I can create a series so you can quickly navigate through the albums or songs for the year. This would also work for the American’s Guide to Soccer, I just need to port the content from pages to posts and put them in a series.

<h2>Design</h2>

When starting work on the design, I wanted to keep the elements fairly simple.&nbsp; To start, I decided to use just one typeface. I love messing with typefaces, but I wanted to challenge myself to see if I could use just one type throughout the site. For this I went with Helvetica Neue with Arial as a backup. This works for a couple of reasons.&nbsp; First, if you compare the two “versions” you can see there is a distinct difference between Helvetica and Arial. Second, it makes the site nicer for Mac users since Windows doesn’t provide Helvetica by default.

Another example of making it simple is to limit the use of graphics in the design. The only real graphics in the design are the logos for the social sites on the front page. Everything else is handled using just CSS styling. Because I wanted to focus on CSS styling only, I decided to go with the model of graded browser support. For browser that support some CSS3 properties, the site will have some little touches, such as the rounded bottom on the Marktopia banner.&nbsp; I plan on tweaking a few more elements to take advantage of these new properties. This means that people using browsers that are leading edge will have a little nicer experience while IE6 users can still use the site.

I also realize that I have gone through designs on this site fairly regularly and that some people like those old designs. If you are one of those people, then feel free to use the theme switcher on the sidebar. I won’t be making sure that posts like perfect in those old designs though, so don’t complain if images or text look funny.

<h2>How I Made the Design</h2>

Using WordPress, the default theme can be a fickle beast. Because of that, I decided to start from scratch with my CSS on the design. This gets rid of any weird things and allows me to make sure that the only things styled are things I want. Because it is easier to work locally, I decided to go with <a href="https://web.archive.org/web/20131211115525/http://www.mamp.info/">MAMP</a> and get WordPress installed on my machine, then used <a href="https://web.archive.org/web/20131211115525/http://macromates.com/">Textmate</a> to create the CSS and edit any template files I needed to.

Content for WordPress posts can be rather varied and with over 500 posts, it would be difficult to test my new design on all of them. To help with this, I found an <a href="https://web.archive.org/web/20131211115525/http://andi.saleh.web.id/wordpress-sample-content/">import of content</a> that has all of the common (and not so common) content types in it. I then designed around that and got all of the CSS the way I wanted. After that, I did a full import from my blog to the local site to double check there was no obvious weirdness.

For page navigation, I found <a href="https://web.archive.org/web/20131211115525/http://lesterchan.net/portfolio/programming/php/">another plugin</a> that creates something a little more elaborate than “Older Posts” and “Newer Posts”. Mimicking many forums or news sites, the paging allows you to jump a page or two back, or all the way to the beginning of the site easily.

Comments are also styled a little nicer with this design. I took advantage of the new threaded comments in 2.7, did some light zebra striping of multiple comments and called out when I post a comment on the site. Comments usually suffered in my previous designs, so I hope these are a little nicer to read.

<h2>What Next?</h2>

In the past, when I got tired of a design, I would always start over. The average lifespan of a design was usually about 3-4 months. The last design lasted 8 months and this one I want to last for even longer, but with some tweaks along the way. A few of these I am aware of include:

<ul>

<li>Messing with the logos for the social sites</li>

<li>Adding a teaser about myself on the front page</li>

<li>Tinker with the Last.fm view to have albums instead of songs</li>

<li>Better styling of the delicious posts</li>

<li>More CSS3 stuff (Rounded corners and box shadows for some elements)</li>

</ul>

I am always open to suggestions, so if you have questions about my process, thoughts about the design or just general ideas about the site, feel free to post them in the comments!
