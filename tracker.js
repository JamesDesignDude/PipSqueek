//tracker.js

var times = performance.timing.toJSON();
var start = times.navigationStart;
var data = "";
var curLoc = location.pathname.substring(1);
data += "pid=" + pid;
data += "&pg=" + curLoc;
for (var prop in times) {
    var justMS = times[prop] - start;
    if (justMS < 0) {var justMS = 0;}
    data += "&" + prop + "=" + justMS;
   }


var pt = document.createElement('img'); pt.src = "//domain.com/pip.png?" + data; pt.id = "performanceData";
var b = document.getElementsByTagName('script')[0]; 
b.parentNode.insertBefore(pt, b);
pt.parentNode.removeChild(pt);