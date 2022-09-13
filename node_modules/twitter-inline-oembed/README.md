twitter-inline-oembed
=========

Easily embed Tweets inline in your web pages.

No fussing around with oembed, CMS modding and whatnot.

# Usage

* Add oembed.js to your project

```
npm install twitter-inline-oembed
```

* Use the following format anywhere you want a Tweet embedded

```
<script src="/path/to/oembed.js?tweet=https://twitter.com/dietrich/status/834597640411152384"></script>
```

The Tweet will be embedded in your page, right where you put the `<script>` tag.

Voila.

# TODO

* CDNify
* support oembed api params https://dev.twitter.com/rest/reference/get/statuses/oembed
* support embedded tweet params https://dev.twitter.com/web/embedded-tweets/parameters
* option to place on page via selector

# Known Issues

* Sometimes some or all of the Tweets are not styled, sometimes not even rendered. I don't know why yet.

* I haven't yet found a way to stop Twitter's widget.js file from being included per-embbeded-tweet while also having the widgets rendered correctly. This means that there are multiple redundant network requests for that file :(

