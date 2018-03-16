/*
    Selenium Page Object Generator - to improve agile testing process velocity.
    Copyright (c) 2015, 2016 Richard Huang <rickypc@users.noreply.github.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict";(function(){var e=this;e.LETTERS={LOWER:2,CAMEL:3,NATURAL:4,PROPER:5,UPPER:6},e.VISIBILITIES={HIDDEN:1,VISIBLE:2,ALL:3},Array.filter=function(e,t){e=e||[];for(var r=-1,a=e.length,n=[],o=-1;++r<a;){var i=e[r];t(i,r,e)&&(n[++o]=i)}return n},Object.extend=function(){for(var e,t,r={},a=0;a<arguments.length;a++){t=arguments[a];for(e in t)r[e]=t[e]}return r},"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),e.common={defaults:function(e,t){return this.isEffective(e)?e:t},fetch:function(e){return e=e||{},e.items=e.items||{},$.Deferred(function(t){e.items[e.key]?t.resolve(e.items[e.key]):$.ajax({dataType:e.type,error:function(r,a,n){$.isFunction(e.error)&&e.error.call(this,t,e.key,r,a,n)},success:function(r,a,n){$.isFunction(e.success)&&e.success.call(this,t,e.key,r,a,n)},url:e.url})}).promise()},getDefaultValue:function(e,t){var r="undefined"!=typeof process&&process.env?process.env:null,a="npm_package_config_";return r&&r[a+e]?this.defaults(r[a+e],t):t},getStorage:function(){var e=this;return $.Deferred(function(t){var r=-1,a=[],n={};chrome.storage.local.get(null,function(o){if(n=o||{},n.model=n.model||{name:"",target:""},n.target=n.target||"java",n.targets=n.targets||{cs:{label:"C#"},java:{label:"Java"},robot:{label:"Robot Framework"}},n.timestamp)a[++r]=$.Deferred(function(e){e.resolve()}).promise();else{for(var i in n.targets){var l=n.targets[i];l.config||(a[++r]=e.fetch({error:function(e,t,r,a,n){console.log("error.config",t,r,a,n),e.reject({})},key:i,items:{},success:function(t,r,a,o,i){n.targets[r].config=e.setDefaultValues(a),t.resolve(n.targets[r].config)},type:"json",url:"assets/configs/"+i+".json"})),l.template||(a[++r]=e.fetch({error:function(e,t,r,a,n){console.log("error.template",t,r,a,n),e.reject("")},key:i,items:{},success:function(e,t,r,a,o){n.targets[t].template=r,e.resolve(n.targets[t].template)},type:"text",url:"assets/templates/"+i+".handlebars"}))}a=$.map(a,function(e){var t=$.Deferred();return e.always(t.resolve),t.promise()})}$.when.apply($,a).always(function(){t.resolve(n)})})}).promise()},isEffective:function(e){return"undefined"!=typeof e&&null!==e},setDefaultValues:function(t){return t=t||{},t.attributes=t.attributes||{},t.attributes.letter=t.attributes.letter||this.getDefaultValue("attributes_letter",e.LETTERS.CAMEL),t.attributes.indent=!!t.attributes.indent,t.attributes.indent||(t.attributes.indent=!!this.getDefaultValue("attributes_indent",!1)),t.attributes.separator=this.defaults(t.attributes.separator,this.getDefaultValue("attributes_separator","\n")),t.copyright=t.copyright||{},t.copyright.claimant=t.copyright.claimant||this.getDefaultValue("copyright_claimant",""),t.copyright.year=t.copyright.year||this.getDefaultValue("copyright_year",(new Date).getFullYear()),t.fill=t.fill||{},t.fill.separator=t.fill.separator||this.getDefaultValue("fill_separator",""),t.model=t.model||{},t.model.include=!!t.model.include,t.model.include||(t.model.include=!!this.getDefaultValue("model_include",!1)),t.model.name=t.model.name||this.getDefaultValue("model_name",""),t.model.namespace=t.model.namespace||this.getDefaultValue("model_namespace",""),t.model.target=t.model.target||this.getDefaultValue("model_target",""),t.nodes=t.nodes||{},t.nodes.angular=!!t.nodes.angular,t.nodes.angular||(t.nodes.angular=!!this.getDefaultValue("nodes_angular",!1)),t.nodes.root=t.nodes.root||this.getDefaultValue("nodes_root","body"),t.nodes.selector=t.nodes.selector||this.getDefaultValue("nodes_selector","a,button,input,select,textarea"),t.nodes.visibility=t.nodes.visiblity||this.getDefaultValue("nodes_visibility",e.VISIBILITIES.ALL),t.operations=t.operations||{},t.operations.extras=t.operations.extras||{},t.operations.extras.fill=this.defaults(t.operations.extras.fill,this.getDefaultValue("extras_fill",1)),t.operations.extras["fill.submit"]=this.defaults(t.operations.extras["fill.submit"],this.getDefaultValue("extras_fill_submit",1)),t.operations.extras.submit=this.defaults(t.operations.extras.submit,this.getDefaultValue("extras_submit",1)),t.operations.extras["verify.loaded"]=this.defaults(t.operations.extras["verify.loaded"],this.getDefaultValue("extras_verify_loaded",1)),t.operations.extras["verify.url"]=this.defaults(t.operations.extras["verify.url"],this.getDefaultValue("extras_verify_url",1)),t.operations.letter=t.operations.letter||this.getDefaultValue("operations_letter",e.LETTERS.CAMEL),t.operations.separator=this.defaults(t.operations.separator,this.getDefaultValue("operations_separator","\n")),t.timeout=t.timeout||this.getDefaultValue("timeout",15),t}},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=e),exports.common=e.common,exports.LETTERS=e.LETTERS,exports.VISIBILITIES=e.VISIBILITIES)}).call(this),window.POGLoaded=!!window.POG,window.POG=function(){function e(e,t){var r="",a=t.getAttribute(e);if(a){var n=t.nodeName.toLowerCase();n+="class"===e?"."+a.split(/\s+/g).join("."):"["+e+"='"+a+"']",1===document.querySelectorAll(n).length&&(r=n)}return r}function t(e,t){var r=[].slice.call(t);r.unshift(e);var a=r.length,n=1;n>a&&(n=0);for(var o=0,i=n,l=0;a>l;l++){var s=Math.abs(o-l);s>n&&(n=s,i=l)}return 0===i?null:r[i]}function r(e){for(var t=[],r=-1,a=document.createTreeWalker(e,C,null,!1);a.nextNode();)t[++r]=a.currentNode;return t}function a(e){for(var t="";e&&e.nodeType===A;e=e.parentNode){if(e&&e.id){t="#"+e.id+" "+t;break}var r=e.nodeName,a=r.toLowerCase(),n=g(e,r);n>0?a+=":nth-of-type("+n+")":(""!==e.className&&(a+="."+e.className.split(/\s+/g).join(".")),"INPUT"===r&&(e.getAttribute("type")?a+="[type='"+e.type+"']":e.getAttribute("data-type")&&(a+="[data-type='"+e.getAttribute("data-type")+"']"))),t=a+" "+t}return t.replace(/^html[^\b]*\bbody\b/,"").trim()}function n(e){e=e||{};var t=e.action.toLowerCase(),r=Object.extend(e.buffer);r.attribute=Object.extend(r.attribute),r.operation=Object.extend(r.operation);var a={action:"click"===t?" on":"",label:"set"===t?" Field":""};return a.documentation=" "+u(e.fullText||e.text,LETTERS.NATURAL)+" "+(e.label+a.label.toLowerCase())+".",a.name=" "+e.text+" "+e.label+a.label,e.negate&&(e.action="Un"+t,r.negate=1),e.hasArgument&&(a.action=e.negate?" value from":" value to",r.argument={},r.argument.documentation=e.action+" default"+a.action+a.documentation,r.argument.key=u(e.text,LETTERS.UPPER),r.argument.name=u(e.text+" value",e.letters.attribute)),r.attribute.name=u(e.text,e.letters.attribute),r.operation.documentation=e.action+a.action+a.documentation,r.operation.name=u(e.action+a.name,e.letters.operation,e.action),r}function o(e){return e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("."))}function i(e,t){var r=e.getElementsByTagName("*"),a=t.getElementsByTagName("*"),n=e?Array.filter(e.querySelectorAll("*:not(br):not(img):not(input):not(link):not(option):not(script):not(select):not(style)"),function(e,t){var n=[].indexOf.call(r,e);return a[n].offsetHeight<1||!L(e)}):[];return n}function l(e){var r="";if(e&&e.id&&(r=s(e,"id")),""===r&&e&&e.name&&(r=s(e,"name")),""===r){var a=e&&e.parentNode?e.parentNode.querySelectorAll("label"):[],n=t(e,a);n&&(r=n.textContent||n.innerText||"",r=r.trim())}return r}function s(e,r){var a=e.getAttribute(r)||e[r]||"",n="";if(a){var o=document.querySelector('label[for="'+a+'"]');if(o&&(n=o.textContent||o.innerText||"",n=n.trim()),""===n){var i=a.toLowerCase(),l=Array.filter(document.querySelectorAll("label[for]"),function(e){return e.getAttribute("for").toLowerCase()===i});o=t(e,l),o&&(n=o.textContent||o.innerText||"",n=n.trim())}}return n}function u(e,t,r){if(r=r||"",t=t||LETTERS.CAMEL,t=parseInt(t),e=e||"",t!==LETTERS.NATURAL){var a=e.replace(r,"").trim(),n=/^([\d.]+)/.exec(a);n&&(e=e.replace(n[0],"")+" "+n[0])}switch(t){case LETTERS.LOWER:case LETTERS.UPPER:e=e.replace(/\./g,"_").replace(/\s+|__/g,"_").replace(/^_|_$/g,""),e=t===LETTERS.LOWER?e.toLowerCase():e.toUpperCase();break;case LETTERS.CAMEL:case LETTERS.PROPER:e=e.replace(/\./g," ").trim().replace(/\s\s+/g," ").replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}).replace(/\s+/g,""),t===LETTERS.CAMEL&&(e=e.charAt(0).toLowerCase()+e.substr(1));break;case LETTERS.NATURAL:e=e.trim().replace(/\s\s+/g," ").replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}return e}function c(e){var t=e.querySelector("img"),r="";return t&&(r=t.alt||o(t.src)),r.trim()}function f(t,r){var n={};return r&&(n=m(t)),n.strategy||(t.id?(n.strategy="id",n.value=t.id):t.name?(n.strategy="name",n.value=t.name):(n.strategy="css",t.getAttribute("class")&&(n.value=e("class",t)),!n.value&&t.title&&(n.value=e("title",t)),!n.value&&t.getAttribute("href")&&(n.value=e("href",t)),n.value||(n.value=a(t)))),n}function d(e,t){e=e||"";var r=e.length;return r>t&&(t=r),t}function m(e){for(var t={},r=0,a=R.length;a>r;r++){var n=R[r],o=n.handler(e);o&&(t.strategy=n.strategy,t.value=o)}return t}function p(e){for(var t="",r=0,a=w.length;a>r&&!(t=e.getAttribute(w[r]+"model")||"");r++);return t.trim()}function g(e,t){t=t||e.nodeName;var r=e&&e.parentNode?Array.filter(e.parentNode.children,function(e,r){return e.nodeName===t}):[],a=[].indexOf.call(r,e);return a++,1===a&&a===r.length?0:a}function b(e){var t=l(e);if(""===t){var r=e?e.parentNode:null;if(r){var a=r.cloneNode(!0),n=a.querySelector(e.nodeName.toLowerCase());n.parentNode.removeChild(n),a=S(a,r),t=a.textContent||a.innerText||"",t=y(t.trim())[0]||""}}return""===t&&(t=e?b(e.parentNode):""),t}function v(e){e=e||document.body;var t=e.cloneNode(!0);return t=S(t,e),t.outerHTML}function h(e,t){var r=(e||"").split(/\s+/g);return t&&(r=r.slice(0,t)),r.join(" ").trim().replace(/[^a-zA-Z0-9\. ]/g,"")}function y(e,t){t=t||5;for(var r=-1,a=[],n=e.match(/[^\r\n.!?]+/gi)||[],o=0,i=n.length;i>o;o++){var l=n[o].trim();if(""!==l){var s=(l.match(/\b\w+\b/gi)||[]).length;s>=t&&(a[++r]=l)}}return a}function x(e,t){if("[object Array]"!=={}.toString.call(e))return[];var r=t.tops.length?t.tops:t;e=e.slice(0),e.frequencies={};for(var a=0,n=e.length;n>a;a++){var o=e[a],i=o.toLowerCase();e.frequencies[o]=0;for(var l=0,s=r.length;s>l;l++)i.indexOf(r[l])>-1&&e.frequencies[o]++}return e.sort(function(t,r){return e.frequencies[r]-e.frequencies[t]}),e}function E(e){var t=-1,r=-1,a=[];a.frequencies={},a.tops=[],e.toLowerCase().split(/[\s*\.*\,\;\+?\#\|:\-\/\\\[\]\(\)\{\}$%&0-9*]/).map(function(e,t){e&&e.length>1&&(a.frequencies[e]++||(a.frequencies[e]=1))});for(var n in a.frequencies)a[++t]=n,a.frequencies[n]>1&&(a.tops[++r]=n);return a.sort(function(e,t){return a.frequencies[t]-a.frequencies[e]}),a.tops.sort(function(e,t){return a.frequencies[t]-a.frequencies[e]}),a}function L(e){"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e[0]);var t=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth;return t.left>-1&&t.top>-1&&t.left+t.width<=a&&t.top+t.height<=r}function T(e){var t={}.toString.call(e);if("[object Array]"===t||"[object NodeList]"===t||"[object Object]"===t)for(var r=-1,a=e.length;++r<a;){var n=e[r];n&&(n.parentNode||{removeChild:function(){}}).removeChild(n)}}function S(e,t){var a=r(e),n=e?e.querySelectorAll("img,input,link,option,script,select,style"):[],o=i(e,t);T(a),T(n);var l=e.cloneNode(!0);return T(o),""===e.textContent.trim()&&(e=l),e}function I(e){var t=[],r=document.querySelector(e.nodes.root)||document,a=r?r.querySelectorAll(e.nodes.selector):[],o={}.toString.call(a);if("[object NodeList]"!==o&&"[object Object]"!==o)return e.definitions=t,e;for(var i={},l=!1,s=-1,m=0,p={label:"",text:""},g=document.getElementsByTagName("*"),L={},T={},S=parseInt(e.nodes.visibility)===VISIBILITIES.VISIBLE,I=0,A=a.length;A>I;I++){var w={attribute:{},operation:{}},R={},C=a[I];if(S&&C.offsetHeight>0||!S){var V="",N=!1,D=!1,_="",O=f(C,e.nodes.angular),k=C.textContent||C.innerText||"";switch(w.attribute.strategy=O.strategy,w.attribute.value=O.value,w.sourceIndex=C.sourceIndex||[].indexOf.call(g,C),C.nodeName){case"A":V="Click",w.type="link",_="Link",k=k||c(C),""===p.text&&k.toLowerCase().indexOf("submit")>-1&&(p.label=_,p.text=k);break;case"BUTTON":V="Click",w.type="button",_="Button",""===p.text&&("submit"===(C.type||"").toLowerCase()||k.toLowerCase().indexOf("submit")>-1)&&(p.label=_,p.text=k);break;case"INPUT":var j=C.type||"";if("|button|image|submit|".indexOf("|"+j+"|")>-1)V="Click",w.type="button",_="Button",k=k||C.value||b(C),"submit"===j?(p.label=_,p.text=k):""===p.text&&k.toLowerCase().indexOf("submit")>-1&&(p.label=_,p.text=k);else{if("hidden"===j)break;if("checkbox"===j?D=!0:"|email|number|password|radio|search|tel|text|url|".indexOf("|"+j+"|")>-1&&(N=!0),_=u(j,LETTERS.PROPER),k=k||b(C),"radio"===j){_="Radio Button","name"!==w.attribute.strategy&&C.name&&(w.attribute.strategy="name",w.attribute.value=C.name);var q={attribute:{name:u(h(k,6)+" Value",e.attributes.letter),value:C.value},operation:{},sourceIndex:-1,type:"radio.value"};t[++s]=q,m=d(q.attribute.name,m)}"|email|number|password|search|tel|url|".indexOf("|"+j+"|")>-1&&(j="text"),V="Set",w.type=j}break;case"SELECT":V="Set",w.type="select",N=!0,D=!0,_="Drop Down List",k=b(C);break;case"TEXTAREA":V="Set",w.type="text",N=!0,_="Textarea",k=b(C)}var P=h(k);if(k=h(k,6),""!==k){if(L[k]){if(L[k]++,2===L[k]){var U=k+" 1";R=n({action:V,buffer:t[i[k]],fullText:P,hasArgument:N,label:_,letters:{attribute:e.attributes.letter,operation:e.operations.letter},text:U}),t[i[k]]=R,D&&(R=n({action:V,buffer:t[T[k]],fullText:P,hasArgument:N,label:_,letters:{attribute:e.attributes.letter,operation:e.operations.letter},negate:D,text:U}),t[T[k]]=R)}k=k+" "+L[k]}else i[k]=s+1,L[k]=1,D&&(T[k]=s+2);R=n({action:V,buffer:w,fullText:P,hasArgument:N,label:_,letters:{attribute:e.attributes.letter,operation:e.operations.letter},text:k}),t[++s]=R,m=d(R.attribute.name,m),D&&(R=n({action:V,buffer:w,fullText:P,hasArgument:N,label:_,letters:{attribute:e.attributes.letter,operation:e.operations.letter},negate:D,text:k}),t[++s]=R),l||"Set"!==V||(l=!0)}}}if(l&&e.operations.extras.fill){var w={attribute:{},operation:{documentation:"Fill every fields in the page.",name:u("Fill",e.operations.letter)},negate:!0,sourceIndex:-1,type:"fill"};t[++s]=w}if(l&&""!==p.text&&e.operations.extras["fill.submit"]){var w={attribute:{},operation:{documentation:"Fill every fields in the page and submit it to target page.",name:u("Fill And Submit",e.operations.letter)},negate:!0,sourceIndex:-1,target:{modelName:e.model.target},type:"fill.submit"};t[++s]=w}if(""!==p.text&&e.operations.extras.submit){var w={attribute:{},operation:{documentation:"Submit the form to target page.",name:u("Submit",e.operations.letter)},negate:!0,sourceIndex:-1,target:{modelName:e.model.target,name:u("Click "+h(p.text)+" "+p.label,e.operations.letter)},type:"submit"};t[++s]=w}if(e.operations.extras["verify.loaded"]){var B=v();B=B.replace(/(<([^>]+)>)/gi,"\n");var $=y(B),F=E(B);$=x($,F);var M=$[0]||"";e.attributes.letter!==LETTERS.LOWER&&1!==e.attributes.indent&&""!==e.attributes.separator&&(M=M.replace(/"/g,'\\"'));var w={attribute:{name:u("Page Loaded Text",e.attributes.letter),value:M},operation:{documentation:"Verify that the page loaded completely.",name:u("Verify Page Loaded",e.operations.letter)},sourceIndex:-1,type:"verify.loaded"};t[++s]=w}if(e.operations.extras["verify.url"]){var W=location.href.replace(document.location.origin,""),w={attribute:{name:u("Page Url",e.attributes.letter),value:W},operation:{documentation:"Verify that current page URL matches the expected URL.",name:u("Verify Page Url",e.operations.letter)},sourceIndex:-1,type:"verify.url"};t[++s]=w}return e.attributes.longestName=m,e.definitions=t,e}var A=1,w=["ng-","data-ng-","ng_","x-ng-","ng\\:"],R=[{handler:p,strategy:"model"}],C=128;return{generate:function(e){e=e||{};var t=Object.extend(e);return t=common.setDefaultValues(t),t=I(t),t.url=document.location.href,t},LETTERS:LETTERS,VISIBILITIES:VISIBILITIES}}(),window.POGLoaded||chrome.runtime.onMessage.addListener(function(e,t,r){!t.tab&&e.input&&r(POG.generate(e.input))});