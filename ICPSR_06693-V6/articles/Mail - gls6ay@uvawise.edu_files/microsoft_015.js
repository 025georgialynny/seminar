﻿window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.application.textboys.js'] = (new Date()).getTime();
function TextBoysComponents(){}TextBoysComponents.$$cctor=function(){_a.t.a().a(TextBoysComponents)};TextBoysComponents.prototype={b:function(n,t,i){var r=this;n.b(_tb.b,function(){return new _tb.b}).a()},a:function(){return[]}};Type.registerNamespace("_tb");_tb.c=function(n,t,i){_tb.c.initializeBase(this,[n]);this.m=t;this.q=i;var r=this.z.style;r["background-size"]=r["-webkit-background-size"]=r["-ms-background-size"]=r["-moz-background-size"]="cover";this.z.style.backgroundPosition="center"};_tb.c.prototype={f:null,b:null,m:null,q:null,s:!1,y:function(n){if(this.f!==n){this.f=n;this.bw("ImgUrl");this.m.h(this.b);this.b=null;this.l();if(this.f){var t=this;this.m.j(this.f,function(n,i){if(t.f===n){t.b=i;t.r();t.x();t.bk()}})}}return n},bh:function(n){this.s=n;this.x();return n},p:!1,l:function(){if(!this.f||!this.b){this.z.style.backgroundImage="";this.z.style.color=""}},r:function(){if(this.b){this.z.style.backgroundImage="url('"+this.b+"')";this.z.style.color="transparent";this.z.textContent=""}else this.l()},bk:function(){this.b&&this.p&&(this.z.style.backgroundColor="white")},x:function(){if(this.s&&this.b){var n=this;_j.m.a().d(_a.a.h,"CalculateDominantColor",function(){var u=_j.n.b(n.J(),2,"ServerImageControl.CalculateDominantColor");var i=null;var t=null;try{if(n.z){var r=document.createElement("img");r.setAttribute("src",n.b);n.z.appendChild(r);t=n.z.lastChild;if(_j.k.i(t)>0){var f=new ColorThief;i=f.getColor(t)}}}finally{t&&_j.k.e(t);n.q.a(_a.ds,new _a.ds(i))}_j.n.a(u)})}}};_tb.a=function(n,t,i,r){this.t=Function.createDelegate(this,this.u);_tb.a.initializeBase(this,[n,t,r]);this.o=i};_tb.a.prototype={c:null,i:null,a:null,e:null,d:null,j:!1,k:!1,o:null,w:function(n){if(this.c!==n){this.c=n;this.v();this.bw("DisplayName")}return n},g:function(n){if(this.e!==n){_j.h.b(this.e)||this.bu(this.e);this.e=n;_j.h.b(this.c)&&this.n();this.bw("DoughBoyCssClassName")}return n},h:function(n){if(this.d!==n){_j.h.b(this.d)||this.bu(this.d);this.d=n;_j.h.b(this.c)&&this.n();this.bw("FadeInTransitionCssClassName")}return n},be:function(n){if(this.k!==n){this.k=n;this.v()}return n},r:function(){_tb.c.prototype.r.call(this);this.u()},l:function(){_tb.c.prototype.l.call(this);if(!this.j){this.j=!0;this.o.a(this.J(),"AnimatedShowPersonImage",this.t,1500);this.z.style.opacity="0";_j.h.b(this.d)||this.bu(this.d)}},u:function(){if(this.j){this.j=!1;this.z.style.opacity="";_j.h.b(this.d)||this.bm(this.d)}},bf:function(){this.bu(this.e);this.z.style.backgroundColor=this.i;this.z.textContent=this.a},n:function(){this.z.style.backgroundColor="";this.z.textContent="";_j.h.b(this.e)||this.bm(this.e)},H:function(){if(this.k){this.a="?";return}if(!this.c){this.a="";return}var n=this.B(this.c);_tb.a.d.test(n)?this.a="":_tb.a.b.test(n)?this.a="":_tb.a.f.test(n)?this.a="":_tb.a.c.test(n)?this.a=_tb.a.e.test(n)?"":"":this.bc(n)},B:function(n){n=n.replace(_tb.a.i,"");n=n.replace(_tb.a.g," ");return n.trim()},bc:function(n){var t=n.split(" ");if(t.length===2){this.a=t[0].charAt(0).toUpperCase().toString();this.a+=t[1].charAt(0).toUpperCase().toString()}else if(t.length===3){this.a=t[0].charAt(0).toUpperCase().toString();this.a+=t[2].charAt(0).toUpperCase().toString()}else t.length&&(this.a=t[0].charAt(0).toUpperCase().toString())},D:function(){if(this.k){this.i=_tb.a.h;return}this.i="";var t=0;if(this.c)for(var n=this.c.length-1;n>=0;n--){var i=this.c.charCodeAt(n);var r=n%8;t^=(i<<r)+(i>>8-r)}this.i=_tb.a.a[t%_tb.a.a.length]},v:function(){this.H();this.D();_j.h.b(this.a)||this.b?this.n():this.bf()}};_tb.b=function(){this.c={};this.f={};this.b={};this.a=new Array(0);this.e=[]};_tb.b.prototype={d:0,h:function(n){if(_tb.b.a&&!Array.contains(this.a,n)){Array.add(this.a,n);var i=window.URL||window.webkitURL;if(this.a.length>_tb.b.b){var t=this.a[0];Array.removeAt(this.a,0);i.revokeObjectURL(t);var r=this.f[t];delete this.c[r];delete this.f[t]}}},j:function(n,t){if(n in this.c){var i=this.c[n];_tb.b.a&&Array.remove(this.a,i);t(n,this.c[n])}else this.i(n,t)},i:function(n,t){var i;if(n in this.b)i=this.b[n];else{i=[];Array.enqueue(this.e,n);this.b[n]=i}i[i.length]=t;this.g()},g:function(){if(!(this.d>=3)&&this.e.length){var t=Array.dequeue(this.e);this.d++;try{var n=new XMLHttpRequest;n.open("GET",t,!0);_tb.b.a&&(n.responseType="blob");var i=this;n.onreadystatechange=function(){if(n.readyState===4){i.d--;var u=0;var f=null;try{if(n.status===200){var s=n.getResponseHeader("Content-Type");var l=n.getResponseHeader("Content-Length");var a=!!s&&s.toLowerCase().startsWith("image");a?l&&(u=parseInt(n.getResponseHeader("Content-Length"))):u=0;if(_tb.b.a){f=n.response;f&&(u=f.size)}}else{var e=null;try{var h=new _a.P(t);e=_j.h.c("Textboys ServerImageDownloadService request failed. status = {0} , url authority = {1}, absolute path = {2}",n.status,h.d,h.e)}catch(y){e=_j.h.c("Textboys ServerImageDownloadService Invalid url. status = {0} , url = {1}",n.status,t)}_j.e.b(_a.a.ca,e)}}catch(p){}var r=null;if(u>100)if(_tb.b.a){var v=window.URL||window.webkitURL;r=v.createObjectURL(f)}else r=t;i.c[t]=r;var c=i.b[t];delete i.b[t];_tb.b.a&&r&&(i.f[r]=t);for(var o=0;o<c.length;o++)c[o](t,r);i.g()}};n.send(null)}catch(r){}}}};TextBoysComponents.registerClass("TextBoysComponents",null,_a.jR,_j.ce);_tb.c.registerClass("_tb.c",_j.i);_tb.a.registerClass("_tb.a",_tb.c);_tb.b.registerClass("_tb.b");TextBoysComponents.$$cctor();_tb.a.i=new RegExp("\\([^)]*\\)|[\\0-\\u001F\\!-/:-@\\[-`\\{-\\u00BF\\u0250-\\u036F\\uD800-\\uFFFF]","g");_tb.a.g=new RegExp("\\s+","g");_tb.a.d=new RegExp("[\\u0590-\\u05FF]");_tb.a.b=new RegExp("[\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF]");_tb.a.f=new RegExp("[\\u1100-\\u11FF\\u3130-\\u318F\\uA960-\\uA97F\\uAC00-\\uD7AF\\uD7B0-\\uD7FF]");_tb.a.e=new RegExp("\\u3040-\\u309F\\u30A0-\\u30FF");_tb.a.c=new RegExp("[\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFAFF]|[\\uD840-\\uD869][\\uDC00-\\uDED6]");_tb.a.j=new RegExp("^(\\u6B27\\u9633|\\u592A\\u53F2|\\u7AEF\\u6728|\\u4E0A\\u5B98|\\u53F8\\u9A6C|\\u4E1C\\u65B9|\\u72EC\\u5B64|\\u5357\\u5BAB|\\u4E07\\u4FDF|\\u95FB\\u4EBA|\\u590F\\u4FAF|\\u8BF8\\u845B|\\u5C09\\u8FDF|\\u516C\\u7F8A|\\u8D6B\\u8FDE|\\u6FB9\\u53F0|\\u7687\\u752B|\\u5B97\\u653F|\\u6FEE\\u9633|\\u516C\\u51B6|\\u592A\\u53D4|\\u7533\\u5C60|\\u516C\\u5B59|\\u6155\\u5BB9|\\u4EF2\\u5B59|\\u949F\\u79BB|\\u957F\\u5B59|\\u5B87\\u6587|\\u53F8\\u5F92|\\u9C9C\\u4E8E|\\u53F8\\u7A7A|\\u95FE\\u4E18|\\u5B50\\u8F66|\\u4E93\\u5B98|\\u53F8\\u5BC7|\\u5DEB\\u9A6C|\\u516C\\u897F|\\u989B\\u5B59|\\u58E4\\u9A77|\\u516C\\u826F|\\u6F06\\u96D5|\\u4E50\\u6B63|\\u5BB0\\u7236|\\u8C37\\u6881|\\u62D3\\u8DCB|\\u5939\\u8C37|\\u8F69\\u8F95|\\u4EE4\\u72D0|\\u6BB5\\u5E72|\\u767E\\u91CC|\\u547C\\u5EF6|\\u4E1C\\u90ED|\\u5357\\u95E8|\\u7F8A\\u820C|\\u5FAE\\u751F|\\u516C\\u6237|\\u516C\\u7389|\\u516C\\u4EEA|\\u6881\\u4E18|\\u516C\\u4EF2|\\u516C\\u4E0A|\\u516C\\u95E8|\\u516C\\u5C71|\\u516C\\u575A|\\u5DE6\\u4E18|\\u516C\\u4F2F|\\u897F\\u95E8|\\u516C\\u7956|\\u7B2C\\u4E94|\\u516C\\u4E58|\\u8D2F\\u4E18|\\u516C\\u7699|\\u5357\\u8363|\\u4E1C\\u91CC|\\u4E1C\\u5BAB|\\u4EF2\\u957F|\\u5B50\\u4E66|\\u5B50\\u6851|\\u5373\\u58A8|\\u8FBE\\u595A|\\u891A\\u5E08)$");_tb.a.a=["rgb(153, 180, 51)","rgb(107, 165, 231)","rgb(231, 115, 189)","rgb(0, 163, 0)","rgb(30, 113, 69)","rgb(255, 0, 151)","rgb(126, 56, 120)","rgb(96, 60, 186)","rgb(29, 29, 29)","rgb(0, 171, 169)","rgb(45, 137, 239)","rgb(43, 87, 151)","rgb(218, 83, 44)","rgb(185, 29, 71)"];_tb.a.h="rgb(238, 17, 17)";_tb.b.a=!_a.o.a().I||_a.o.a().T;_tb.b.b=100;
window.scriptsLoaded['microsoft.owa.application.textboys.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.application.textboys.js'] = (new Date()).getTime();
