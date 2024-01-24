---
title: Transcending CSS
description: ""
date: 2008-06-02
tags: ["css","design"]
category: Personal
---


I recently read <a href="https://web.archive.org/web/20131211162734/http://transcendingcss.com/">Transcending CSS</a> by Andy Clarke and found much of it compelling.&nbsp; There were a number of ideas in the book that made me think about the way I design and how I could improve upon my designs.&nbsp; Two things in general stuck out and after a couple of weeks, I have come to really like one of the ideas and dislike the other.&nbsp; I will tackle the one I don’t like first.

<h3>Always Using Semantic Code</h3>

Semantic code is great.&nbsp; For those of you not in the web business, it means not making up your own stuff for HTML that exists, i.e., don’t make a class called “heading”, using one of the HTML heading tags.&nbsp; The book encourages the use of semantic code throughout your site.&nbsp; If you have a grouping of pictures on a page, instead of putting them in a general container, but them in a list with each picture being a list item.&nbsp; Then identify the list and each item on the list and use those IDs to style it in CSS.&nbsp; With this method, the world of absolute positioning can open up to you and you can do some really inventive and cool designs, outside of the normal box model.

All of this is well and good if you are the one maintaining the site.&nbsp; This starts to fall apart though when you have end users updating their site and have no knowledge or care of semantic code.&nbsp; Tools like Contribute, Dreamweaver, etc, allow users to make new paragraphs, insert images, and make new lists.&nbsp; This is all good and required, however it might not be what the designer intended.&nbsp; With the power of absolute positioning comes the responsibility of making semantic HTML, and once something unintended is introduced, things can go haywire pretty darn quick with a design.&nbsp; Because of this, a balance has to be struck between perfectly semantic code and something the end user can update easily.&nbsp; If you are doing your own site, then I recommend going crazy with semantics, otherwise, just be reasonable.

<h3>Don’t Design For the Bare Minimum</h3>

When I started as a web designer with CSS, it was always my goal to make the site look the same in all browsers.&nbsp; This sometimes meant some hacks to get some of the “not quite” supported features of CSS to work on all browsers at the time.&nbsp; As time has progressed, different browsers still have differing levels of support for CSS.&nbsp; Combining that with the evolution of CSS and you could make a huge chart of CSS selectors and the browsers they work in, and in fact some people have!&nbsp; By designing for the lowest common denominator, a designer was restricted from the CSS available AND still had to deal with the nuances of each browser.

Clarke proposes different versions of a site for different browsers.&nbsp; If a browser is supporting cool and new technologies, then why shouldn’t we take advantage of them.&nbsp; This isn’t to say that you shouldn’t take other browsers into account, you still have to make your site look nice in Internet Explorer, but there is nothing to say that you can’t make your site look nicer in Firefox or Safari.&nbsp; Yes this takes some extra planning, but as a designer you can play with new technology and encourage other people to use browsers so they can see the stuff that is possible with web standards.&nbsp; On a side note to this, if you want to see what is possible with CSS3, check out <a href="https://web.archive.org/web/20131211162734/http://www.designshack.co.uk/tutorialexamples/css3/css3examples.html">an examples page</a> in the latest update for Safari.

Overall, the book was fantastic.&nbsp; It made me think about the way I am doing design and while I didn’t take everything from it, it was still worth checking out.&nbsp; I know the next design for my blog will incorporate some of the new web standards and will also use a lot of semantic code, I just don’t think I can do the same with the HTML on a customer’s design.
