(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["voiceChat"],{"107c":function(t,e,r){var n=r("d039");t.exports=n((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,r){"use strict";var n=r("d784"),o=r("44e7"),i=r("825a"),a=r("1d80"),c=r("4840"),u=r("8aa5"),s=r("50c4"),l=r("14c3"),f=r("9263"),h=r("9f7f"),d=r("d039"),p=h.UNSUPPORTED_Y,g=[].push,v=Math.min,m=4294967295,y=!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));n("split",(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?m:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,i);var c,u,s,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=new RegExp(t.source,h+"g");while(c=f.call(p,n)){if(u=p.lastIndex,u>d&&(l.push(n.slice(d,c.index)),c.length>1&&c.index<n.length&&g.apply(l,c.slice(1)),s=c[0].length,d=u,l.length>=i))break;p.lastIndex===c.index&&p.lastIndex++}return d===n.length?!s&&p.test("")||l.push(""):l.push(n.slice(d)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,this,t,o,n!==e);if(a.done)return a.value;var f=i(this),h=String(t),d=c(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"g":"y"),x=new d(p?"^(?:"+f.source+")":f,y),w=void 0===o?m:o>>>0;if(0===w)return[];if(0===h.length)return null===l(x,h)?[h]:[];var b=0,E=0,R=[];while(E<h.length){x.lastIndex=p?0:E;var S,I=l(x,p?h.slice(E):h);if(null===I||(S=v(s(x.lastIndex+(p?E:0)),h.length))===b)E=u(h,E,g);else{if(R.push(h.slice(b,E)),R.length===w)return R;for(var L=1;L<=I.length-1;L++)if(R.push(I[L]),R.length===w)return R;E=b=S}}return R.push(h.slice(b)),R}]}),!y,p)},"14c3":function(t,e,r){var n=r("c6b6"),o=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=c;(l||f)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3d1a":function(t,e,r){"use strict";r("6463")},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"466d":function(t,e,r){"use strict";var n=r("d784"),o=r("825a"),i=r("50c4"),a=r("1d80"),c=r("8aa5"),u=r("14c3");n("match",(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,this,t);if(n.done)return n.value;var a=o(this),s=String(t);if(!a.global)return u(a,s);var l=a.unicode;a.lastIndex=0;var f,h=[],d=0;while(null!==(f=u(a,s))){var p=String(f[0]);h[d]=p,""===p&&(a.lastIndex=c(s,i(a.lastIndex),l)),d++}return 0===d?null:h}]}))},"4d63":function(t,e,r){var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("7156"),c=r("9112"),u=r("9bf2").f,s=r("241c").f,l=r("44e7"),f=r("ad6d"),h=r("9f7f"),d=r("6eeb"),p=r("d039"),g=r("5135"),v=r("69f3").enforce,m=r("2626"),y=r("b622"),x=r("fce3"),w=r("107c"),b=y("match"),E=o.RegExp,R=E.prototype,S=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,L=/a/g,O=new E(I)!==I,_=h.UNSUPPORTED_Y,N=n&&(!O||_||x||w||p((function(){return L[b]=!1,E(I)!=I||E(L)==L||"/a/i"!=E(I,"i")}))),P=function(t){for(var e,r=t.length,n=0,o="",i=!1;n<=r;n++)e=t.charAt(n),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+t.charAt(++n);return o},T=function(t){for(var e,r=t.length,n=0,o="",i=[],a={},c=!1,u=!1,s=0,l="";n<=r;n++){if(e=t.charAt(n),"\\"===e)e+=t.charAt(++n);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:S.test(t.slice(n+1))&&(n+=2,u=!0),o+=e,s++;continue;case">"===e&&u:if(""===l||g(a,l))throw new SyntaxError("Invalid capture group name");a[l]=!0,i.push([l,s]),u=!1,l="";continue}u?l+=e:o+=e}return[o,i]};if(i("RegExp",N)){for(var k=function(t,e){var r,n,o,i,u,s,h=this instanceof k,d=l(t),p=void 0===e,g=[],m=t;if(!h&&d&&p&&t.constructor===k)return t;if((d||t instanceof k)&&(t=t.source,p&&(e="flags"in m?m.flags:f.call(m))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),m=t,x&&"dotAll"in I&&(n=!!e&&e.indexOf("s")>-1,n&&(e=e.replace(/s/g,""))),r=e,_&&"sticky"in I&&(o=!!e&&e.indexOf("y")>-1,o&&(e=e.replace(/y/g,""))),w&&(i=T(t),t=i[0],g=i[1]),u=a(E(t,e),h?this:R,k),(n||o||g.length)&&(s=v(u),n&&(s.dotAll=!0,s.raw=k(P(t),r)),o&&(s.sticky=!0),g.length&&(s.groups=g)),t!==m)try{c(u,"source",""===m?"(?:)":m)}catch(y){}return u},U=function(t){t in k||u(k,t,{configurable:!0,get:function(){return E[t]},set:function(e){E[t]=e}})},j=s(E),C=0;j.length>C;)U(j[C++]);R.constructor=k,k.prototype=R,d(o,"RegExp",k)}m("RegExp")},6463:function(t,e,r){},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},"72a0":function(t,e,r){"use strict";r.r(e);var n,o,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chatroom"},[t._v(" 房间地址："),r("input",{directives:[{name:"model",rawName:"v-model",value:t.roomUrl,expression:"roomUrl"}],staticClass:"roomUrl",attrs:{readonly:"true"},domProps:{value:t.roomUrl},on:{input:function(e){e.target.composing||(t.roomUrl=e.target.value)}}}),r("br"),r("video",{attrs:{width:"640px",height:"480px",id:"myVideo"}}),r("video",{attrs:{width:"240px",height:"160px",id:"remoteVideo"}})])},a=[],c=r("1da1"),u=(r("96cf"),r("ac1f"),r("1276"),r("4d63"),r("25f0"),r("466d"),{name:"userMedia",data:function(){return{roomUrl:"",roomName:""}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$nextTick((function(){var e=t.getUrlParam("room");e?(t.roomName="observable-"+e.split("-")[1],t.roomUrl=location.href):(t.roomName="observable-"+Date.now(),t.roomUrl=location.href+"?room=".concat(t.roomName)),t.start()}));case 1:case"end":return e.stop()}}),e)})))()},methods:{getUrlParam:function(t){var e=new RegExp("(\\?|&)"+t+"=([^&]*)(&|$)"),r=window.location.href.substr(1).match(e);return null!=r?unescape(r[2]):null},start:function(){var t=this;n=new window.ScaleDrone("OXo4HSBTCQ8ehrxI"),n.on("open",(function(e){if(e)return console.error(e);var r=n.subscribe(t.roomName);r.on("open",(function(t){t&&this.onError(t)})),r.on("members",(function(e){console.log("MEMBERS",e);var r=2===e.length;t.startWebRTC(r)})),r.on("data",(function(e,r){r.id!==n.clientId&&(e.sdp?(console.log("sdp消息：",e),o.setRemoteDescription(new RTCSessionDescription(e.sdp),(function(){console.log("sdp消息类型：",o.remoteDescription.type),"offer"===o.remoteDescription.type&&o.createAnswer().then((function(e){o.setLocalDescription(e,(function(){t.sendMessage({sdp:o.localDescription})}),t.onError)})).catch(t.onError)}),t.onError)):e.candidate&&(console.log("candidate消息：",e),o.addIceCandidate(new RTCIceCandidate(e.candidate))))}))}))},startWebRTC:function(t){var e=this,r={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};console.log("startWebRTC, connect to stun server"),o=new RTCPeerConnection(r),o.onicecandidate=function(t){t.candidate&&(console.log(">>>>onicecandidate"),e.sendMessage({candidate:t.candidate}))},t&&(o.onnegotiationneeded=function(){o.createOffer().then((function(t){o.setLocalDescription(t,(function(){e.sendMessage({sdp:o.localDescription})}),e.onError)})).catch(e.onError)}),o.onaddstream=function(t){document.querySelector("#remoteVideo").srcObject=t.stream;var e=document.querySelector("#myVideo");e.srcObject=t.stream,e.play()},window.navigator.getUserMedia({audio:!0,video:!0},(function(t){var e=document.querySelector("#myVideo");console.log("start local stream"),e.srcObject=t,e.play(),o.addStream(t)}),this.onError)},sendMessage:function(t){n.publish({room:this.roomName,message:t})},onError:function(t){console.log(t)}}}),s=u,l=(r("3d1a"),r("0c7c")),f=Object(l["a"])(s,i,a,!1,null,"24a0996e",null);e["default"]=f.exports},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),o=r("9f7f"),i=r("5692"),a=r("7c73"),c=r("69f3").get,u=r("fce3"),s=r("107c"),l=RegExp.prototype.exec,f=i("native-string-replace",String.prototype.replace),h=l,d=function(){var t=/a/,e=/b*/g;return l.call(t,"a"),l.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),p=o.UNSUPPORTED_Y||o.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],v=d||g||p||u||s;v&&(h=function(t){var e,r,o,i,u,s,v,m=this,y=c(m),x=y.raw;if(x)return x.lastIndex=m.lastIndex,e=h.call(x,t),m.lastIndex=x.lastIndex,e;var w=y.groups,b=p&&m.sticky,E=n.call(m),R=m.source,S=0,I=t;if(b&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),I=String(t).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==t[m.lastIndex-1])&&(R="(?: "+R+")",I=" "+I,S++),r=new RegExp("^(?:"+R+")",E)),g&&(r=new RegExp("^"+R+"$(?!\\s)",E)),d&&(o=m.lastIndex),i=l.call(b?r:m,I),b?i?(i.input=i.input.slice(S),i[0]=i[0].slice(S),i.index=m.lastIndex,m.lastIndex+=i[0].length):m.lastIndex=0:d&&i&&(m.lastIndex=m.global?i.index+i[0].length:o),g&&i&&i.length>1&&f.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i&&w)for(i.groups=s=a(null),u=0;u<w.length;u++)v=w[u],s[v[0]]=i[v[1]];return i}),t.exports=h},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==n&&o.call(y,a)&&(v=y);var x=S.prototype=E.prototype=Object.create(v);R.prototype=x.constructor=S,S.constructor=R,S[u]=R.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===R||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},I(L.prototype),L.prototype[c]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,r,n){var o=new L(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},I(x),x[u]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function w(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=O(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function E(){}function R(){}function S(){}function I(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,n,i,a){var c=b(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),a)}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return U()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=b(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:U}}function U(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9f7f":function(t,e,r){var n=r("d039"),o=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("9263"),i=r("d039"),a=r("b622"),c=r("9112"),u=a("species"),s=RegExp.prototype;t.exports=function(t,e,r,l){var f=a(t),h=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}));if(!h||!d||r){var p=/./[f],g=e(f,""[t],(function(t,e,r,n,i){var a=e.exec;return a===o||a===s.exec?h&&!i?{done:!0,value:p.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}));n(String.prototype,t,g[0]),n(s,f,g[1])}l&&c(s[f],"sham",!0)}},fce3:function(t,e,r){var n=r("d039");t.exports=n((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=voiceChat.005b21ad.js.map