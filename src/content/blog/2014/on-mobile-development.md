---
title: On Mobile Development & Design
description: ""
date: 2014-12-19
tags: ["ios","android","development"]
category: Technology
---

At the University, we don't have a dedicated mobile team so we have had to think creatively to develop mobile apps for iOS and Android. To accomplish this, we have used a tool called <a href="http://www.appcelerator.com/titanium/">Appcelerator Titanium</a> for a few years now, starting when it was called Titanium Desktop. The product has matured quite a bit in that time, but I think it, and other products like it, are at a bit of a crossroads.

For the earlier part of both iOS and Android, building a basic app consisted of a table view of rows that you would navigate down to get more information. Because of this common design practice, a tool like Titanium that allowed you to create a single code-base and compile to each platform made a lot of sense. Having to know a single programming language to write to both platforms helped us cut development time, especially since that language was Javascript, one we were familiar with already.

As both iOS and Android mature, we have noticed that Titanium is having a trickier time keeping up. Sure, it can still make the tables of rows that drill down, but apps that limited are not what users are looking for anymore. The design patterns for iOS and Android are dramatically different now. Each platform has it's own personality now so trying to build a single interface is at best going to look uncomfortable on each platform and at worst, just not work at all. Oh, and let's not forget that iOS and Android are not going to be limited to phones anymore, so there are whole product categories that the Titanium development methodology just won't work for.

### So where do we go?

It seems there are two routes. The first would be diving into the native languages for each platform, Swift for iOS and Java for Android. There is a decent amount of work to get up to speed for each platform, but once that is done, our team would be in a position to take advantage of all features on the systems and build something that feels like it belongs there.

The second option would be a tool like Phonegap that just shows a web interface. We would need to build an interface that is unique from the standard one on each platform, but still works on mobile without feeling a performance hit. Instead of the technical challenge of learning new languages, this one is developing a user interface that is good enough to provide a rationale for not using native tools.

I am not sure which of these options is going to be easier or make sense for our users, but I will say, I am interested to start heading down the road and see where it gets us.


    