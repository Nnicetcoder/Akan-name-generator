var date = document.getElementById("input-date");
var DD,MM,CC,YY;
DD=parseInt(date.slice(0,2));
MM=parseInt(date.slice(3,5));
CC=parseInt(date.slice(6,8));
YY=parseInt(date.slice(8,10));
var weekday= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7