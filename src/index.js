import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; //new Date(year, month, day, hours, minutes, second);
var curDate = new Date().getHours();

var greeting = ""; var cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning'; cssStyle.color = "green";

} else if (curDate >= 12 && curDate < 20) {
  greeting = 'Good Afternoon'; cssStyle.color = "orange";

} else {

  greeting = 'good night'; cssStyle.color = "bluegit add";

}

ReactDom.render(

  <div>

    <h1> Hello Sir,<span style={cssStyle}>{greeting}</span></h1>

  </div>
  ,document.getElementById("root")

);