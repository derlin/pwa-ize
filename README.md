# PWA-ize


Transform any website into a PWA that feels like a regular mobile application.

**➙ https://derlin.github.io/pwa-ize ✨**


## What is it ?

PWA-ize is a simple app that can turn any website into a PWA (**P**rogressive **W**eb **A**pp).
When adding a PWA to your mobile phone's homescreen (using _Settings_ ➙ "_Add to home screen_"),
the shortcut will open in a standalone browser instance, instead of launching the website into a new browser tab.

Under the hood, what PWA-ize does is generate a manifest with the target website icon and a `start_url` that will automatically
redirect to the target site. This is fairly simple and works well.

## Demo

**Usage**

Here is a comparison of how [dev.to](https://dev.to) behaves when added to home screen with and without PWA-ize.

<details>
  <summary>Demo without PWA</summary>
  <br />
  <img src="https://user-images.githubusercontent.com/5463445/138928901-e3c6575c-cecd-4a81-ad77-31364bd2561c.gif" alt="regular app" />
</details>

<details>
  <summary>Demo with PWA-ized app</summary>
  <br />
  <img src="https://user-images.githubusercontent.com/5463445/138928877-339b3ca5-2b8e-423b-875c-d6ad165f5bd7.gif" alt="PWA-ized app" />
</details>

**Full install**

Here are the full gifs with also the install phase. Note that the PWA-ize install is quite long: this is due to the fetching of icons from GoogleS2 and processing the manifest, not from this code 😉. This is only once on install though.

<details>
  <summary>Full install without PWA</summary>
  <br />
  <img src="https://user-images.githubusercontent.com/5463445/138927804-ff461e90-1d3a-4121-96b0-c6c2690b405c.gif" alt="regular app" />
</details>

<details>
  <summary>Full install with PWA-ize</summary>
  <br />
  <img src="https://user-images.githubusercontent.com/5463445/138927653-ce5a3cf7-333d-4b7a-bfcf-0d4084d7ec48.gif" alt="PWA-ized app" />
</details>



## Why this project ?

I don't know about you, but personally I never use the Chrome app on my Android phone. Well, I use it, but only for bookmarking.
All my browsing is done inside the _Google Now_ app, or app shortcuts (aka PWAs).
This stems from my laziness: I know that once I close _Google Now_, there is nothing left; I don't have to clean tabs, and don't have
to manage 46 opened tabs that drain my battery.

Anyway, most of the sites I use daily are either available through an app (reddit), or have a manifest (HN).
Well, until I decided to increase my tech reading and started looking at [Lobsters](https://lobste.rs),
[dev.to](https://dev.to) or [Pythonic News](https://news.python.sc/).
When added to home screen, they will open into a new Chrome tab (even if it is already opened in another !!!!!).
So annoying.

Hence PWA-ize.

I now have more than 10 PWA-ize shortcuts on my homescreen, that I use daily to check the meteo, register to gym classes,
checking the canteen's menu, and do my tech readings.

## About PWAs and PWA-ize

The only requirements for a website to open in a dedicated browser window when added to the home screen are for the page to:

1. reference a valid [Web Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) (`<meta name="manifest" src="...">`),
2. have the `display` property in the manifest set to something different from `browser`.

PWA-ize generates this valid manifest for a target URL you give, adding also some icons (grabbed from Google S2,
e.g. https://www.google.com/s2/favicons?sz=64&domain_url=yahoo.com).
Since a manifest cannot set a `start_url` outside of the domain of the current page, it is set to `redirect.html?url=target-site`,
which will automatically do a redirect on load.

That's it.

<div align="center">
⇨ https://derlin.github.io/pwa-ize/ ⇦
</div>
