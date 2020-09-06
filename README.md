# PWA-ize

Transform any website into a PWA that can be launched in a separate Chrome container on Android

**➙ https://derlin.github.io/pwa-ize ✨**

## What is it ?

PWA-ize is a simple app that can turn any website into a PWA. 
What I mean by that is that if you "_Add to home screen_" from a mobile phone, the shortcut will actually open in a standalone Chrome container,
instead of launching the website into a new Chrome tab.

Under the hood, what I do is generate a manifest with the target website icon and a `start_url` that will automatically redirect to the target site on open.
This is fairly simple and works well.

## Why this project ?

I don't know about you, but personally I never use the Chrome app on my Android phone. Well, I use it, but only for bookmarking.
All my browsing is done inside the _Google Now_ app, or app shortcuts (aka PWAs).
This stems from my laziness: I know that once I close _Google Now_, there is nothing left; I don't have to clean tabs, and don't have 
to manage 46 opened tabs that drain my battery.

Anyway, most of the sites I use daily are either available through an app (reddit), or have a manifest (HN). 
Well, until I decided to increase my tech reading and started looking at [Lobsters](https://lobste.rs) or [Pythonic News](https://news.python.sc/).
When added to home screen, both will open into a new Chrome tab (even if it is already opened in another !!!!!). 
So annoying.

Hence PWA-ize.

## About PWAs and PWA-ize

The only requirement for a website to be a _Progressive Web App_ is to reference a valid manifest file (`<meta name="manifest" src="...">`).
The manifest itself should have a name, a start URL, and a bunch of icons. What PWA-ize does is to generate a valid manifest on the fly with
a target website Icon (grabbed from Google S2, e.g. https://www.google.com/s2/favicons?sz=64&domain_url=yahoo.com).
Since the start URL must be in the same domain, it sets it to `redirect.html?url=target-site`, which will automatically redirect on load.
That's it.

<div align="center">
⇨ https://derlin.github.io/pwa-ize/ ⇦
</div>