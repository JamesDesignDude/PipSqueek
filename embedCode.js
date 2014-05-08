// Embed code into pages to receive data
//
// Inspired by Google Analytics tracking code

var pid = "pdr-1";
  (function() {
	var tc = document.createElement('script'); 
		tc.type = 'text/javascript'; 
		tc.async = true;
		tc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'domain.com/path/to/tracker.js';

	var fs = document.getElementsByTagName('script')[0]; 
	fs.parentNode.insertBefore(tc, fs);	
  })();
