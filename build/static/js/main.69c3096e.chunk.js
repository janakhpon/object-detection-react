(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t){},134:function(e,t){},135:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},181:function(e,t,n){},87:function(e,t,n){e.exports=n.p+"static/media/giphy.b7c48bfb.gif"},90:function(e,t,n){e.exports=n(91)},91:function(e,t,n){"use strict";n.r(t);var a=n(82),i=n(83),o=n(88),c=n(84),r=n(89),s=n(11),u=n.n(s),d=n(85),l=n.n(d),f=n(86),m=(n(182),n(87)),h=n.n(m),b=(n(181),function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).detectFrame=function(e,t){t.detect(e).then(function(a){n.renderPredictions(a),requestAnimationFrame(function(){n.detectFrame(e,t)})})},n.renderPredictions=function(e){var t=document.getElementById("canvas").getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="16px sans-serif";t.font=n,t.textBaseline="top",e.forEach(function(e){var a=e.bbox[0],i=e.bbox[1],o=e.bbox[2],c=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=4,t.strokeRect(a,i,o,c),t.fillStyle="#00FFFF";var r=t.measureText(e.class).width,s=parseInt(n,20);t.fillRect(a,i,r+4,s+4)}),e.forEach(function(e){var n=e.bbox[0],a=e.bbox[1];t.fillStyle="#000000",t.fillText(e.class,n,a)})},n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("video"),n=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:900,height:500}}).then(function(e){return t.srcObject=e,new Promise(function(e,n){t.onloadedmetadata=function(){t.play(),e()}})}),a=f.a();Promise.all([a,n]).then(function(n){e.detectFrame(t,n[0])})}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),u.a.createElement("video",{id:"video",width:"900",height:"500"}),u.a.createElement("canvas",{id:"canvas",width:"900",height:"500"}))}}]),t}(u.a.Component)),v=document.getElementById("root");l.a.render(u.a.createElement(b,null),v)},99:function(e,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.69c3096e.chunk.js.map