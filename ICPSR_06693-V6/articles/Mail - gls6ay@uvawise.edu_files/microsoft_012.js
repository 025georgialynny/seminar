﻿window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.o365.suiteapiskypeintegration.js'] = (new Date()).getTime();
Type.registerNamespace("_sk");_sk.m=function(){};_sk.m.registerInterface("_sk.m");_sk.w=function(){};_sk.w.registerInterface("_sk.w");Type.registerNamespace("Microsoft.O365.SuiteApi.SkypeIntegration");Microsoft.O365.SuiteApi.SkypeIntegration.Modality=function(){};Microsoft.O365.SuiteApi.SkypeIntegration.Modality.prototype={Undefined:0,Chat:1,Audio:2,Video:3,Sharing:4};Microsoft.O365.SuiteApi.SkypeIntegration.Modality.registerEnum("Microsoft.O365.SuiteApi.SkypeIntegration.Modality",!1);_sk.h=function(){};_sk.h.prototype={implicitOAuth:1};_sk.h.registerEnum("_sk.h",!1);_sk.z=function(){};_sk.z.prototype={Chat:0,Audio:1,Video:2,ContactRequest:3,PluginInstall:4,UnreadMessage:5,SignInRequest:6,Unknown:7};_sk.z.registerEnum("_sk.z",!1);Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState=function(){};Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.prototype={Unknown:0,Online:1,Busy:2,DoNotDisturb:3,BeRightBack:4,Away:5,Offline:6,Hidden:7,ResetPresenceStatus:8};Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.registerEnum("Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState",!1);_sk.n=function(n){this.a=new _sk.f(n.unreadConversations,_sk.d.f)};_sk.n.prototype={a:null};_sk.a=function(n){this.i=Function.createDelegate(this,this.n);this.h=Function.createDelegate(this,this.k);this.d=new _j.q;this.b=n;this.b.setNotificationHandler(this.h)};_sk.a.e=function(n,t,i){if(!_sk.a.d||i){var r=new _sk.a(n);r.c=null;t(r,_sk.a.f)}};_sk.a.a=function(n){_sk.a.g(n)||_sk.a.b.c(n);_sk.a.d&&n(_sk.a.d)};_sk.a.h=function(n){for(var t=new _j.q,r=n,f=r.length,i=0;i<f;++i){var u=r[i];t.c(Microsoft.O365.SuiteApi.SkypeIntegration.Modality.toString(u));u===1&&t.c("Messaging")}return t.i()};_sk.a.g=function(n){for(var t=0;t<_sk.a.b.d.length;t++)if(_sk.a.b.d[t]===n)return!0;return!1};_sk.a.f=function(n){_sk.b.a(6);_sk.a.d=n;for(var t=0;t<_sk.a.b.d.length;t++)_sk.a.b.d[t](n)};_sk.a.prototype={b:null,c:null,a:function(){this.c||(this.c=new _sk.q(this.b.me));return this.c},l:function(){return new _sk.n(this.b.activity)},e:function(){return new _sk.p(this.b.flags)},f:function(n){this.d.c(n)},o:function(n){this.b.renderContent(n)},p:function(n){this.b.renderSidebar(n)},j:function(n){if(n in _sk.a.c)return _sk.a.c[n];var t=new _sk.i(this.b.contact(n),this.i);_sk.a.c[n]=t;return t},t:function(n,t){var i=this,r=this;this.b.startConversation(n,_sk.a.h(t),function(){_sk.c.a.a(1)},function(n){O365.Log.WriteShellLog(401112,6,2,0,n)})},q:function(n){this.b.setAuthProvider(n,!1)},r:function(n){this.b.setFocus(n)},s:function(n,t){var i=this;this.b.signIn(n,function(n){if(i.m(n)){O365.Log.WriteShellLog(401113,6,2,0,n,n.name,n.message,n.reason);_sk.b.a(4)}else _sk.b.a(5);t&&t(n)})},g:function(n,t){this.b.signOut(n,t)},k:function(n){for(var i=new _sk.t(n),t=0;t<this.d.d.length;t++)this.d.d[t](i)},n:function(n){delete _sk.a.c[n.a.c.toString()]},m:function(n){return n.message!=="invalid_grant"}};_sk.o=function(n){this.type=n};_sk.o.prototype={type:null};_sk.i=function(n,t){var r=this;var i=new _sk.v(function(n){t&&window.setTimeout(function(){n.a||t(r)},3e3)});this.a=new _sk.j(n,i);this.b=new _sk.f(n.status,_sk.d.b,i)};_sk.i.prototype={b:null,a:null};_sk.j=function(n,t){if(n){this.a=new _sk.f(n.avatar,_sk.d.a,t);this.b=new _sk.f(n.displayName,_sk.d.a,t);this.c=new _sk.f(n.uri,_sk.d.a,t)}else{var i=t?"SkypeContact":"SkypeMe";throw Error.argumentNull(String.format("Contact was null when creating SkypeContactBase. Source: {0}",i));}};_sk.j.prototype={a:null,b:null,c:null};_sk.p=function(n){this.a=new _sk.k(n.flags,_sk.d.a,_sk.d.h)};_sk.p.prototype={a:null};_sk.b=function(){this.a=new _j.q};_sk.b.a=function(n){_sk.b.b.a.c(n);switch(n){case 1:case 20:case 6:_sk.b.c();break}};_sk.b.c=function(){if(_sk.b.b.a.d.length){for(var t=new Sys.StringBuilder(_sk.b.b.a.d[0].toString()),n=1;n<_sk.b.b.a.d.length;n++)t.append(","+_sk.b.b.a.d[n]);O365.Log.WriteShellLog(416957,1,1,0,t.toString())}else O365.Log.WriteShellLog(416958,1,1,0);_sk.b.b=new _sk.b};_sk.b.prototype={a:null};_sk.b.d=function(){};_sk.b.d.prototype={flightedToSkype:0,notFlightedToSkype:1,unconditionalAutoSignIn:2,conditionalAutoSignIn:3,signInError:4,signInNonBlockingError:5,skypeApiOnReady:6,readSkypeSettingSuccess:7,neverManuallySignedIn:8,autoSignInTriggered:9,keepUserSignedOut:10,unableToReadSignInPreference:11,readSkypeSettingTimedOut:12,skypeScriptLoaded:13,skypeReInitSuccess:14,skypeInitSuccess:15,signInAttempted:16,signInSuccess:17,signInFailure:18,authenticationError:19,skypeInitError:20};_sk.b.d.registerEnum("_sk.b.d",!1);_sk.c=function(){};_sk.c.prototype={c:function(n){_sk.c.c.addHandler(_sk.c.b.toString(2),n)},b:function(n){_sk.c.c.addHandler(_sk.c.b.toString(1),n)},f:function(n){_sk.c.c.addHandler(_sk.c.b.toString(3),n)},d:function(n){_sk.c.c.addHandler(_sk.c.b.toString(5),n)},e:function(n){_sk.c.c.addHandler(_sk.c.b.toString(6),n)},a:function(n){O365.Log.WriteShellLog(403023,0,2,0,_sk.c.b.toString(n));var t=_sk.c.c.getHandler(_sk.c.b.toString(n));t&&t()}};_sk.c.b=function(){};_sk.c.b.prototype={conversationStarted:1,notificationAccepted:2,skypeUnavailable:3,notificationReceived:4,skypeFirstRun:5,skypeFirstRunOpenFlexPane:6};_sk.c.b.registerEnum("_sk.c.b",!1);_sk.g=function(){};_sk.g.c=function(n){_sk.g.a.addHandler("signIn",n)};_sk.g.d=function(){_sk.g.b=!0;var n=_sk.g.a.getHandler("signIn");n&&n()};_sk.e=function(n,t,i){this.e=Function.createDelegate(this,this.p);this.f=Function.createDelegate(this,this.t);this.g=Function.createDelegate(this,this.u);this.h=Function.createDelegate(this,this.v);this.i=Function.createDelegate(this,this.w);this.n=Function.createDelegate(this,this.r);this.l=n;this.m=t;this.b=new _sk.l(i);this.b.b=i.b?i.b:this.q(i.a);this.d=!1};_sk.e.prototype={b:null,m:null,l:null,d:!1,c:0,a:function(){if(_sk.e.a)O365.Log.WriteShellLog(413867,6,1,0);else{_sk.e.a=this;var n=this.m||"https://swx.cdn.skype.com/shared/v/1.2.29/SkypeBootstrap.min.js";O365.Log.WriteShellLog(419936,1,1,0,n);this.l.a(n,this.n)}},k:function(){this.b.d=!0;this.j(this.i,this.h)},r:function(){_sk.b.a(13);this.j(this.g,this.f)},w:function(n){_sk.b.a(14);this.c=0;_sk.a.e(n,this.e,!0)},u:function(n){_sk.b.a(15);this.c=0;_sk.a.e(n,this.e,!1)},p:function(n,t){var i=this;n.a().b.a(function(n){if(n){_sk.g.d();i.d=!0}else if(i.d){i.s("Authentication failed or you are disconnected from UCWA");i.d=!1}});n.q(new _sk.o(_sk.h.toString(1)));if(this.b.d)try{_sk.b.a(16);var r=this,f=this;n.s(function(){t(n);_sk.b.a(17);(r.b.a&1)!=1&&_sk.c.a.a(5);O365.Log.WriteShellLog(413864,1,1,0)},function(i){t(n);_sk.b.a(18)})}catch(u){_sk.b.a(18);O365.Log.WriteShellLog(413863,6,1,0,u)}else t(n)},s:function(n){O365.Log.WriteShellLog(403840,6,2,0,n);_sk.b.a(19);_sk.c.a.a(3)},t:function(n){this.o(n,this.g,this.f)},v:function(n){this.o(n,this.i,this.h)},o:function(n,t,i){O365.Log.WriteShellLog(400942,6,2,0,n,this.c);_sk.b.a(20);this.c++;if(this.c>3)_sk.c.a.a(3);else{var r=this;_j.m.a().a(_ff.c.a,"SkypeLoader",function(){r.j(t,i)},this.c*1e3)}},q:function(n){return(n&1)==1?"b28f4819-da61-4880-94ab-4198414ff64c":"b32c0389-1143-4a42-b15f-7b860f9eafbb"},j:function(n,t){var f=0;var u=!1;do try{f++;u=!1;var r,i;var e=(i=new _sk.r,i.apiKey=this.b.b,i.locale=this.b.c,i.resigninAllowed=this.b.l,i.disableTelemetry=this.b.i,i.correlationIds=(r=new _sk.s,r.userAppId=this.b.f,r.hostProperty=this.b.h,r.userId=this.b.g,r.tid=this.b.n,r.sessionId=this.b.e,r.upn=this.b.o,r),i.taskRunner=this.b.m,i.business=(this.b.a&1)!=1,i.dogfood=(this.b.a&2)==2,i.exoFrontDoorUrl=this.b.j,i.onprem=this.b.k,i);Skype.initialize(e,n,t)}catch(o){O365.Log.WriteShellLog(419946,6,1,0,o.message);u=!0}while(u&&f<3);O365.Log.WriteShellLog(419947,1,1,0,this.c,f,!u);u&&t(Error.create("Skype.Initialize() failed to be called."))}};_sk.d=function(){};_sk.d.b=function(n){var t=0;switch(n){case"Online":t=1;break;case"Offline":case"Hidden":t=6;break;case"BeRightBack":t=4;break;case"Away":case"Idle":t=5;break;case"Busy":t=2;break;case"DoNotDisturb":t=3;break}return t};_sk.d.g=function(n){var t="";switch(n){case 1:t="Online";break;case 6:t="Offline";break;case 4:t="BeRightBack";break;case 5:t="Away";break;case 2:t="Busy";break;case 3:t="DoNotDisturb";break;case 7:t="Hidden";break}return t};_sk.d.c=function(n){return n};_sk.d.a=function(n){return n};_sk.d.h=function(n){return n};_sk.d.f=function(n){return n};_sk.d.d=function(n){var t="Unknown";switch(n){case"Chat":t="Chat";break;case"Audio":t="Audio";break;case"Video":t="Video";break;case"ContactRequest":t="ContactRequest";break;case"PluginInstall":t="PluginInstall";break;case"SignInRequest":t="SignInRequest";break;case"UnreadMessage":t="UnreadMessage";break}return t};_sk.d.e=function(n){var t="";switch(n){case 1:t="Chat";break;case 2:t="Audio";break;case 3:t="Video";break;case 4:t="Sharing";break}return t};_sk.q=function(n){this.b=new _sk.f(n.authenticated,_sk.d.c);this.a=new _sk.k(n.status,_sk.d.b,_sk.d.g);this.e=new _sk.j(n,null);this.c=n};_sk.q.prototype={b:null,a:null,e:null,c:null,d:function(){this.c.resetStatus()}};_sk.s=function(){};_sk.s.prototype={hostProperty:null,userId:null,sessionId:null,userAppId:null,tabId:null,experienceId:null,upn:null,tid:null};_sk.y=function(){};_sk.y.prototype={senderUri:null,message:null,time:null,description:null};_sk.x=function(){};_sk.x.prototype={id:null,execute:function(){}};_sk.r=function(){};_sk.r.prototype={correlationIds:null,apiKey:null,locale:null,resigninAllowed:!1,disableTelemetry:!1,taskRunner:null,business:!1,dogfood:!1,onprem:!1,exoFrontDoorUrl:null};_sk.t=function(n){this.g=n;this.c=new _sk.f(n.active,_sk.d.c);this.f=new _sk.f(n.description,_sk.d.a);this.e=new _sk.i(n.sender);this.j=new _sk.f(n.title,_sk.d.a);this.b=_sk.d.d(n.type);this.a=n.sound};_sk.t.prototype={c:null,f:null,g:null,e:null,j:null,b:"Chat",a:null,i:function(){return this.b==="Chat"||this.b==="Audio"||this.b==="Video"},d:function(n){this.g.accept(_sk.d.e(n))},h:function(){this.g.decline()}};_sk.k=function(n,t,i){_sk.k.initializeBase(this,[n,t]);this.i=i};_sk.k.prototype={i:null,b:function(n){var t=this.i(n);this.e(t)}};_sk.u=function(n,t){this.b=n;this.a=t};_sk.u.prototype={b:null,a:null};_sk.v=function(n){this.b=n};_sk.v.prototype={a:0,b:null,c:function(){this.a-=1;this.a||this.b(this)}};_sk.f=function(n,t,i){this.h=new _j.q;this.e=n;this.g=t;this.f=i};_sk.f.prototype={e:null,g:null,f:null,c:function(){return this.g(this.e())},a:function(n){var t=this.g(this.e());n(t);var i=this.j(n);if(!i){var r=this;var u=function(t){n(r.g(t))};var f=this.e.subscribe(u);var e=new _sk.u(n,f);this.h.c(e);this.f&&(this.f.a+=1)}},d:function(n){var t=this.j(n);if(t){t.a.dispose();this.h.n(t);this.f&&this.f.c()}},j:function(n){for(var i=this.h.i(),u=i.length,t=0;t<u;++t){var r=i[t];if(r.b===n)return r}return null}};_sk.l=function(n){if(n){this.a=n.a;this.c=n.c;this.h=n.h;this.g=n.g;this.o=n.o;this.n=n.n;this.e=n.e;this.f=n.f;this.b=n.b;this.d=n.d;this.l=n.l;this.i=n.i;this.m=n.m;this.j=n.j;this.k=n.k}};_sk.l.prototype={a:0,c:null,h:null,g:null,n:null,o:null,e:null,f:null,b:null,d:!1,l:!1,i:!1,m:null,j:null,k:!1};_sk.a.registerClass("_sk.a");_sk.i.registerClass("_sk.i");_sk.e.registerClass("_sk.e",null,_o365su.j);_sk.t.registerClass("_sk.t");_sk.f.registerClass("_sk.f");_sk.k.registerClass("_sk.k",_sk.f);_sk.u.registerClass("_sk.u");_sk.v.registerClass("_sk.v");_sk.l.registerClass("_sk.l");_sk.a.b=new _j.q;_sk.a.d=null;_sk.a.c={};_sk.b.b=new _sk.b;_sk.c.a=new _sk.c;_sk.c.c=new Sys.EventHandlerList;_sk.g.a=new Sys.EventHandlerList;_sk.g.b=!1;_sk.e.a=null;
window.scriptsLoaded['microsoft.o365.suiteapiskypeintegration.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.o365.suiteapiskypeintegration.js'] = (new Date()).getTime();
