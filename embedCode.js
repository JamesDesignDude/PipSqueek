//	Embed code into pages to receive data
//	Inspired by Google Analytics tracking code
//
//	Variables:
//		squeek - where your tracker script is hosted, no http/https required
//		pip - Unique ID for site/page/etc...
//


var squeek = "domain.com/path/to/tracker.js";
var pip = "xxxx-xxxx-xxxx-xxxx";

  (function() {
	var tc = document.createElement('script'); 
		tc.type = 'text/javascript'; 
		tc.async = true;
		tc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + pip;
	var fs = document.getElementsByTagName('script')[0]; 
	fs.parentNode.insertBefore(tc, fs);	
  })();
