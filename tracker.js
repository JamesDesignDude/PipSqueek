//	tracker.js
//	gets performance.timing data (in JSON) and appends it to an image URL
//

var times = performance.timing.toJSON();
var start = times.navigationStart;
var data = "";
var currentLocation = location.pathname.substring(1);
data += "psid=" + pip;
data += "&pg=" + currentLocation;
for (var prop in times) {
    var justMS = times[prop] - start;
    if (justMS < 0) {var justMS = 0;}
    data += "&" + prop + "=" + justMS;
   }


var pt = document.createElement('img'); pt.src = "//domain.com/path/to/image/pip.png?" + data; pt.id = "performanceData";
var b = document.getElementsByTagName('script')[0]; 
b.parentNode.insertBefore(pt, b);
pt.parentNode.removeChild(pt);