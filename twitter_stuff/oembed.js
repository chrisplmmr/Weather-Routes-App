'use strict';

(function() {

  var tweetURL = document.currentScript.src.split('?tweet=')[1];
  var apiURL = 'https://publish.twitter.com/oembed?url=';
  var thisScript = document.currentScript;

  if (tweetURL) {
    embedTweet(tweetURL);
  }

  function injectScript(url, defer, async, id) {
    var script = document.createElement('script');
    script.defer = defer;
    script.async = async;
    script.src = url;
    if (id)
      script.id = id;
    document.querySelector("#tweetContainer").appendChild(script);
  }

  function jsonp(url, cb) {
    var fnName = 'fn' + Date.now(),
        prefixChar = (url.indexOf('?') != -1) ? '&' : '?';
    url += prefixChar + 'callback=' + fnName;
    injectScript(url, true);
    window[fnName] = function(result) { cb(result); };
  }

  function embedTweet(tweetURL) {
    var url = apiURL + tweetURL;
    jsonp(url, function(oembed) {
      var div = document.createElement('div');
      div.appendChild(createNode(oembed.html));
      thisScript.parentNode.insertBefore(div, thisScript);
    });

    // TODO: Racey. Widgets not styled when leaving it up to the
    // oembed, or when only pulling in once.
    //
    // Doing this here, for each widget, is the only thing that
    // works consistently. Ugh.
    injectScript('//platform.twitter.com/widgets.js', true);
  }

  function createNode(htmlStr) {
    return new DOMParser().parseFromString(htmlStr, 'text/html').body.firstChild;
  }

})();