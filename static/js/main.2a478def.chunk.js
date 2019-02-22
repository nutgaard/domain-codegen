(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=(n(13),n(3)),u=n(6),l=function(){function t(e,n,r,a){this.message=e,this.expected=n,this.found=r,this.location=a,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return function(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}(t,Error),t.buildMessage=function(t,e){var n={literal:function(t){return'"'+a(t.text)+'"'},class:function(t){var e,n="";for(e=0;e<t.parts.length;e++)n+=t.parts[e]instanceof Array?c(t.parts[e][0])+"-"+c(t.parts[e][1]):c(t.parts[e]);return"["+(t.inverted?"^":"")+n+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function a(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}function c(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}return"Expected "+function(t){var e,r,a,c=new Array(t.length);for(e=0;e<t.length;e++)c[e]=(a=t[e],n[a.type](a));if(c.sort(),c.length>0){for(e=1,r=1;e<c.length;e++)c[e-1]!==c[e]&&(c[r]=c[e],r++);c.length=r}switch(c.length){case 1:return c[0];case 2:return c[0]+" or "+c[1];default:return c.slice(0,-1).join(", ")+", or "+c[c.length-1]}}(t)+" but "+function(t){return t?'"'+a(t)+'"':"end of input"}(e)+" found."},{SyntaxError:t,parse:function(e,n){n=void 0!==n?n:{};var r,a={},c={Definitions:Ot},o=Ot,i="\n",l=Ct("\n",!1),s=function(t){return t.filter(function(t){return t&&"string"!==typeof t})},f="define",p=Ct("define",!1),d=function(t,e){return{identifier:t,fields:e}},h="//",g=Ct("//",!1),v=/^[^\n]/,m=Ft(["\n"],!0,!1),y=function(t){return null},b="{",A=Ct("{",!1),x="}",E=Ct("}",!1),S=function(t){return t.filter(function(t){return t})},C=function(t,e,n){return Object(u.a)({field:t},e,n)},F=function(t){return t},_="Array<",w=Ct("Array<",!1),k=">",j=Ct(">",!1),D=function(t){return{primitive:!0,type:"Array",generics:[t]}},O="Map<",B=Ct("Map<",!1),M=",",N=Ct(",",!1),I=function(t,e){return{primitive:!0,type:"Map",generics:[t,e]}},L="Long",z=Ct("Long",!1),K="Int",R=Ct("Int",!1),Z="Short",J=Ct("Short",!1),T="Byte",U=Ct("Byte",!1),q="Double",G=Ct("Double",!1),H="Float",P=Ct("Float",!1),Q="Boolean",V=Ct("Boolean",!1),W="String",X=Ct("String",!1),Y=function(){return{primitive:!0,type:St(),generics:[]}},$=function(t){return{primitive:!1,type:t,generics:[]}},tt="?",et=Ct("?",!1),nt="!",rt=Ct("!",!1),at=":",ct=Ct(":",!1),ot=function(t,e){return{optional:"?"==t,mutable:"!"==e}},it=/^[_A-Za-z0-9]/,ut=Ft(["_",["A","Z"],["a","z"],["0","9"]],!1,!1),lt=function(){return St()},st=/^[A-Z]/,ft=Ft([["A","Z"]],!1,!1),pt=/^[a-z0-9]/,dt=Ft([["a","z"],["0","9"]],!1,!1),ht=_t("whitespace"),gt=/^[ \t\n\r]/,vt=Ft([" ","\t","\n","\r"],!1,!1),mt=0,yt=0,bt=[{line:1,column:1}],At=0,xt=[],Et=0;if("startRule"in n){if(!(n.startRule in c))throw new Error("Can't start parsing from rule \""+n.startRule+'".');o=c[n.startRule]}function St(){return e.substring(yt,mt)}function Ct(t,e){return{type:"literal",text:t,ignoreCase:e}}function Ft(t,e,n){return{type:"class",parts:t,inverted:e,ignoreCase:n}}function _t(t){return{type:"other",description:t}}function wt(t){var n,r=bt[t];if(r)return r;for(n=t-1;!bt[n];)n--;for(r={line:(r=bt[n]).line,column:r.column};n<t;)10===e.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++;return bt[t]=r,r}function kt(t,e){var n=wt(t),r=wt(e);return{start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:r.line,column:r.column}}}function jt(t){mt<At||(mt>At&&(At=mt,xt=[]),xt.push(t))}function Dt(e,n,r){return new t(t.buildMessage(e,n),e,n,r)}function Ot(){var t,n,r;for(t=mt,n=[],(r=Bt())===a&&(r=Mt())===a&&(10===e.charCodeAt(mt)?(r=i,mt++):(r=a,0===Et&&jt(l)));r!==a;)n.push(r),(r=Bt())===a&&(r=Mt())===a&&(10===e.charCodeAt(mt)?(r=i,mt++):(r=a,0===Et&&jt(l)));return n!==a&&(yt=t,n=s(n)),t=n}function Bt(){var t,n,r,c;return t=mt,e.substr(mt,6)===f?(n=f,mt+=6):(n=a,0===Et&&jt(p)),n!==a&&zt()!==a&&(r=Lt())!==a&&zt()!==a&&(c=function(){var t,n,r,c,o;if(t=mt,123===e.charCodeAt(mt)?(n=b,mt++):(n=a,0===Et&&jt(A)),n!==a)if(zt()!==a){for(r=[],(c=Nt())===a&&(c=Mt());c!==a;)r.push(c),(c=Nt())===a&&(c=Mt());r!==a&&(c=zt())!==a?(125===e.charCodeAt(mt)?(o=x,mt++):(o=a,0===Et&&jt(E)),o!==a?(yt=t,n=S(r),t=n):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a;else mt=t,t=a;return t}())!==a?(yt=t,t=n=d(r,c)):(mt=t,t=a),t}function Mt(){var t,n,r,c;if(t=mt,e.substr(mt,2)===h?(n=h,mt+=2):(n=a,0===Et&&jt(g)),n!==a){if(r=[],v.test(e.charAt(mt))?(c=e.charAt(mt),mt++):(c=a,0===Et&&jt(m)),c!==a)for(;c!==a;)r.push(c),v.test(e.charAt(mt))?(c=e.charAt(mt),mt++):(c=a,0===Et&&jt(m));else r=a;r!==a&&(c=zt())!==a?(yt=t,t=n=y(r)):(mt=t,t=a)}else mt=t,t=a;return t}function Nt(){var t,n,r,c;return t=mt,(n=function(){var t,n,r;if(t=mt,n=[],it.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&jt(ut)),r!==a)for(;r!==a;)n.push(r),it.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===Et&&jt(ut));else n=a;return n!==a&&(yt=t,n=lt()),t=n}())!==a&&(r=function(){var t,n,r,c;return t=mt,63===e.charCodeAt(mt)?(n=tt,mt++):(n=a,0===Et&&jt(et)),n===a&&(n=null),n!==a?(33===e.charCodeAt(mt)?(r=nt,mt++):(r=a,0===Et&&jt(rt)),r===a&&(r=null),r!==a?(58===e.charCodeAt(mt)?(c=at,mt++):(c=a,0===Et&&jt(ct)),c!==a?(yt=t,n=ot(n,r),t=n):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}())!==a&&zt()!==a&&(c=It())!==a&&zt()!==a?(yt=t,t=n=C(n,r,c)):(mt=t,t=a),t}function It(){var t,n;return t=mt,(n=function(){var t,n;return t=mt,e.substr(mt,4)===L?(n=L,mt+=4):(n=a,0===Et&&jt(z)),n===a&&(e.substr(mt,3)===K?(n=K,mt+=3):(n=a,0===Et&&jt(R)),n===a&&(e.substr(mt,5)===Z?(n=Z,mt+=5):(n=a,0===Et&&jt(J)),n===a&&(e.substr(mt,4)===T?(n=T,mt+=4):(n=a,0===Et&&jt(U)),n===a&&(e.substr(mt,6)===q?(n=q,mt+=6):(n=a,0===Et&&jt(G)),n===a&&(e.substr(mt,5)===H?(n=H,mt+=5):(n=a,0===Et&&jt(P)),n===a&&(e.substr(mt,7)===Q?(n=Q,mt+=7):(n=a,0===Et&&jt(V)),n===a&&(e.substr(mt,6)===W?(n=W,mt+=6):(n=a,0===Et&&jt(X))))))))),n!==a&&(yt=t,n=Y()),t=n}())===a&&(n=function(){var t,n,r,c;return t=mt,e.substr(mt,6)===_?(n=_,mt+=6):(n=a,0===Et&&jt(w)),n!==a&&(r=It())!==a?(62===e.charCodeAt(mt)?(c=k,mt++):(c=a,0===Et&&jt(j)),c!==a?(yt=t,n=D(r),t=n):(mt=t,t=a)):(mt=t,t=a),t}())===a&&(n=function(){var t,n,r,c,o,i;return t=mt,e.substr(mt,4)===O?(n=O,mt+=4):(n=a,0===Et&&jt(B)),n!==a&&zt()!==a&&(r=It())!==a&&zt()!==a?(44===e.charCodeAt(mt)?(c=M,mt++):(c=a,0===Et&&jt(N)),c!==a&&zt()!==a&&(o=It())!==a&&zt()!==a?(62===e.charCodeAt(mt)?(i=k,mt++):(i=a,0===Et&&jt(j)),i!==a?(yt=t,n=I(r,o),t=n):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}())===a&&(n=function(){var t,e;return t=mt,(e=Lt())!==a&&(yt=t,e=$(e)),t=e}()),n!==a&&(yt=t,n=F(n)),t=n}function Lt(){var t,n,r,c;if(t=mt,st.test(e.charAt(mt))?(n=e.charAt(mt),mt++):(n=a,0===Et&&jt(ft)),n!==a){for(r=[],pt.test(e.charAt(mt))?(c=e.charAt(mt),mt++):(c=a,0===Et&&jt(dt));c!==a;)r.push(c),pt.test(e.charAt(mt))?(c=e.charAt(mt),mt++):(c=a,0===Et&&jt(dt));r!==a?(yt=t,t=n=lt()):(mt=t,t=a)}else mt=t,t=a;return t}function zt(){var t,n;for(Et++,t=[],gt.test(e.charAt(mt))?(n=e.charAt(mt),mt++):(n=a,0===Et&&jt(vt));n!==a;)t.push(n),gt.test(e.charAt(mt))?(n=e.charAt(mt),mt++):(n=a,0===Et&&jt(vt));return Et--,t===a&&(n=a,0===Et&&jt(ht)),t}if((r=o())!==a&&mt===e.length)return r;throw r!==a&&mt<e.length&&jt({type:"end"}),Dt(xt,At<e.length?e.charAt(At):null,At<e.length?kt(At,At+1):kt(At,At))}}}();n(15);function s(t,e){return t.map(function(t){var n=e.startDefine(t.identifier),r=t.fields.map(e.processField).join("\n"),a=e.endDefine();return"".concat(n).concat(r).concat(a)}).join("")}var f=n(1),p=n(2);function d(t){return"function"===typeof t?t:function(){return t}}var h={String:d("string"),Long:d("number"),Int:d("number"),Short:d("number"),Byte:d("number"),Double:d("number"),Float:d("number"),Boolean:d("boolean"),Array:function(t){return"Array<".concat(g(t.generics[0]),">")},Map:function(t){return"{ [ key: ".concat(g(t.generics[0]),"]: ").concat(g(t.generics[1])," }")}};function g(t){return t.primitive?h[t.type](t):t.type}var v=function(){function t(){Object(f.a)(this,t)}return Object(p.a)(t,[{key:"startDefine",value:function(t){return"export interface ".concat(t," {\n")}},{key:"endDefine",value:function(){return"\n}\n\n"}},{key:"processField",value:function(t){return"    ".concat(t.mutable?"":"readonly ").concat(t.field).concat(t.optional?"?":"",": ").concat(g(t),";")}}]),t}();function m(t){return t.type}var y={String:m,Long:m,Int:m,Short:m,Byte:m,Double:m,Float:m,Boolean:m,Array:function(t){return"List<".concat(b(t.generics[0]),">")},Map:function(t){return"Map<".concat(b(t.generics[0]),", ").concat(b(t.generics[1]),">")}};function b(t){return t.primitive?y[t.type](t):t.type}var A=function(){function t(){Object(f.a)(this,t)}return Object(p.a)(t,[{key:"startDefine",value:function(t){return"data class ".concat(t,"(\n")}},{key:"endDefine",value:function(){return"\n)\n\n"}},{key:"processField",value:function(t,e,n){n.length;return"    ".concat(t.mutable?"var":"val"," ").concat(t.field,": ").concat(b(t)).concat(t.optional?"?":"").concat("")}}]),t}();var x="define Kunde {\n  id?: String\n  navn!: String\n  kontoer: Array<Konto>\n  bekjente: Map<String, Kunde>\n}\n\ndefine Konto {\n  id: String\n  kroner: Int\n  ore: Int\n}";var E=function(){var t=function(t){var e=Object(r.useState)(t),n=Object(i.a)(e,2),a=n[0],c=n[1];return[a,function(t){return c(t.target.value)}]}(x),e=Object(i.a)(t,2),n=e[0],c=e[1],o=function(t){try{return{ast:l.parse(t),error:void 0}}catch(e){return{ast:[],error:e.message}}}(n),u=s(o.ast,new v),f=s(o.ast,new A);return a.a.createElement("div",{className:"application"},a.a.createElement("div",{className:"editor"},a.a.createElement("div",{className:"editor__textarea editor__definition"},a.a.createElement("label",{htmlFor:"definitiontxt"},"Definition"),a.a.createElement("textarea",{id:"definitiontxt",value:n,onChange:c})),a.a.createElement("div",{className:"editor__textarea editor__ast"},a.a.createElement("label",{htmlFor:"asttxt"},"AST"),a.a.createElement("textarea",{id:"asttxt",value:JSON.stringify(o.ast,null,2),readOnly:!0})),a.a.createElement("div",{className:"editor__textarea editor__code"},a.a.createElement("label",{htmlFor:"codetxt"},"Code"),a.a.createElement("textarea",{id:"codetxt",value:u,readOnly:!0})),a.a.createElement("div",{className:"editor__textarea editor__code"},a.a.createElement("label",{htmlFor:"codetxt"},"Code"),a.a.createElement("textarea",{id:"codetxt",value:f,readOnly:!0}))),a.a.createElement("div",{className:"feedback"},o.error))};o.a.render(a.a.createElement(E,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(17)}},[[7,2,1]]]);
//# sourceMappingURL=main.2a478def.chunk.js.map