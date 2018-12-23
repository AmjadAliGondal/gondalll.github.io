/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.7.1
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(d){function w(){x=d.innerWidth||document.documentElement.clientWidth;g=d.innerHeight||document.documentElement.clientHeight}function q(b,a,c){b.addEventListener?b.addEventListener(a,c):b.attachEvent("on"+a,function(){c.call(b)})}function r(b){d.requestAnimationFrame(function(){"scroll"!==b.type&&w();for(var a=0,c=k.length;a<c;a++)"scroll"!==b.type&&(k[a].coverImage(),k[a].clipContainer()),k[a].onScroll()})}Date.now||(Date.now=function(){return(new Date).getTime()});d.requestAnimationFrame||
function(){for(var b=["webkit","moz"],a=0;a<b.length&&!d.requestAnimationFrame;++a){var c=b[a];d.requestAnimationFrame=d[c+"RequestAnimationFrame"];d.cancelAnimationFrame=d[c+"CancelAnimationFrame"]||d[c+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(d.navigator.userAgent)||!d.requestAnimationFrame||!d.cancelAnimationFrame){var e=0;d.requestAnimationFrame=function(a){var b=Date.now(),c=Math.max(e+16,b);return setTimeout(function(){a(e=c)},c-b)};d.cancelAnimationFrame=clearTimeout}}();
var t=function(){if(!d.getComputedStyle)return!1;var b=document.createElement("p"),a,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};(document.body||document.documentElement).insertBefore(b,null);for(var e in c)"undefined"!==typeof b.style[e]&&(b.style[e]="translate3d(1px,1px,1px)",a=d.getComputedStyle(b).getPropertyValue(c[e]));(document.body||document.documentElement).removeChild(b);return"undefined"!==
typeof a&&0<a.length&&"none"!==a}(),y=-1<navigator.userAgent.toLowerCase().indexOf("android"),z=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!d.MSStream,B=!!d.opera,C=/Edge\/\d+/.test(navigator.userAgent),D=/Trident.*rv[ :]*11\./.test(navigator.userAgent),E=!!Function("/*@cc_on return document.documentMode===10@*/")(),v=document.all&&!d.atob,x,g;w();var k=[],h=function(){var b=0;return function(a,c){var e;this.$item=a;this.defaults={type:"scroll",speed:.5,imgSrc:null,imgWidth:null,imgHeight:null,
enableTransform:!0,elementInViewport:null,zIndex:-100,noAndroid:!1,noIos:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};e=JSON.parse(this.$item.getAttribute("data-jarallax")||"{}");this.options=this.extend({},this.defaults,e,c);y&&this.options.noAndroid||z&&this.options.noIos||(this.options.speed=Math.min(2,Math.max(-1,parseFloat(this.options.speed))),(e=this.options.elementInViewport)&&"object"===typeof e&&"undefined"!==typeof e.length&&(e=e[0]),!e instanceof Element&&(e=null),this.options.elementInViewport=
e,this.instanceID=b++,this.image={src:this.options.imgSrc||null,$container:null,$item:null,width:this.options.imgWidth||null,height:this.options.imgHeight||null,useImgTag:z||y||B||D||E||C},this.initImg()&&this.init())}}();h.prototype.css=function(b,a){if("string"===typeof a)return d.getComputedStyle?d.getComputedStyle(b).getPropertyValue(a):b.style[a];a.transform&&(a.WebkitTransform=a.MozTransform=a.transform);for(var c in a)b.style[c]=a[c];return b};h.prototype.extend=function(b){b=b||{};for(var a=
1;a<arguments.length;a++)if(arguments[a])for(var c in arguments[a])arguments[a].hasOwnProperty(c)&&(b[c]=arguments[a][c]);return b};h.prototype.initImg=function(){null===this.image.src&&(this.image.src=this.css(this.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,""));return!(!this.image.src||"none"===this.image.src)};h.prototype.init=function(){function b(){a.coverImage();a.clipContainer();a.onScroll(!0);a.$item.setAttribute("data-jarallax-original-styles",a.$item.getAttribute("style"));
a.options.onInit&&a.options.onInit.call(a);setTimeout(function(){a.$item&&a.css(a.$item,{"background-image":"none","background-attachment":"scroll","background-size":"auto"})},0)}var a=this,c={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},e={position:"fixed"};a.image.$container=document.createElement("div");a.css(a.image.$container,c);a.css(a.image.$container,{visibility:"hidden","z-index":a.options.zIndex});a.image.$container.setAttribute("id",
"jarallax-container-"+a.instanceID);a.$item.appendChild(a.image.$container);a.image.useImgTag&&t&&a.options.enableTransform?(a.image.$item=document.createElement("img"),a.image.$item.setAttribute("src",a.image.src),e=a.extend({"max-width":"none"},c,e)):(a.image.$item=document.createElement("div"),e=a.extend({"background-position":"50% 50%","background-size":"100% auto","background-repeat":"no-repeat no-repeat","background-image":'url("'+a.image.src+'")'},c,e));v&&(e.backgroundAttachment="fixed");
a.parentWithTransform=0;for(c=a.$item;null!==c&&c!==document&&0===a.parentWithTransform;){var d=a.css(c,"-webkit-transform")||a.css(c,"-moz-transform")||a.css(c,"transform");d&&"none"!==d&&(a.parentWithTransform=1,a.css(a.image.$container,{transform:"translateX(0) translateY(0)"}));c=c.parentNode}a.css(a.image.$item,e);a.image.$container.appendChild(a.image.$item);a.image.width&&a.image.height?b():a.getImageSize(a.image.src,function(c,e){a.image.width=c;a.image.height=e;b()});k.push(a)};h.prototype.destroy=
function(){for(var b=0,a=k.length;b<a;b++)if(k[b].instanceID===this.instanceID){k.splice(b,1);break}b=this.$item.getAttribute("data-jarallax-original-styles");this.$item.removeAttribute("data-jarallax-original-styles");"null"===b?this.$item.removeAttribute("style"):this.$item.setAttribute("style",b);this.$clipStyles&&this.$clipStyles.parentNode.removeChild(this.$clipStyles);this.image.$container.parentNode.removeChild(this.image.$container);this.options.onDestroy&&this.options.onDestroy.call(this);
delete this.$item.jarallax;for(var c in this)delete this[c]};h.prototype.getImageSize=function(b,a){if(b&&a){var c=new Image;c.onload=function(){a(c.width,c.height)};c.src=b}};h.prototype.clipContainer=function(){if(!v){var b=this.image.$container.getBoundingClientRect(),a=b.width,b=b.height;this.$clipStyles||(this.$clipStyles=document.createElement("style"),this.$clipStyles.setAttribute("type","text/css"),this.$clipStyles.setAttribute("id","#jarallax-clip-"+this.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles));
a=["#jarallax-container-"+this.instanceID+" {","   clip: rect(0 "+a+"px "+b+"px 0);","   clip: rect(0, "+a+"px, "+b+"px, 0);","}"].join("\n");this.$clipStyles.styleSheet?this.$clipStyles.styleSheet.cssText=a:this.$clipStyles.innerHTML=a}};h.prototype.coverImage=function(){if(this.image.width&&this.image.height){var b=this.image.$container.getBoundingClientRect(),a=b.width,c=b.height,b=b.left,e=this.image.width,d=this.image.height,f=this.options.speed,h="scroll"===this.options.type||"scroll-opacity"===
this.options.type,k=0,m=0,l=c,p=0,n=0;if(h){k=f*(c+g)/2;if(0>f||1<f)k=f*Math.max(c,g)/2;l=0>f||1<f?Math.max(c,g)+2*Math.abs(k):l+Math.abs(g-c)*(1-f)}m=l*e/d;m<a&&(m=a,l=m*d/e);this.bgPosVerticalCenter=0;!(h&&l<g)||t&&this.options.enableTransform||(this.bgPosVerticalCenter=(g-l)/2,l=g);h?(p=b+(a-m)/2,n=(g-l)/2):(p=(a-m)/2,n=(c-l)/2);t&&this.options.enableTransform&&this.parentWithTransform&&(p-=b);this.parallaxScrollDistance=k;this.css(this.image.$item,{width:m+"px",height:l+"px",marginLeft:p+"px",
marginTop:n+"px"});this.options.onCoverImage&&this.options.onCoverImage.call(this)}};h.prototype.isVisible=function(){return this.isElementInViewport||!1};h.prototype.onScroll=function(b){if(this.image.width&&this.image.height){var a=this.$item.getBoundingClientRect(),c=a.top,e=a.height,d={position:"absolute",visibility:"visible",backgroundPosition:"50% 50%"},f=a;this.options.elementInViewport&&(f=this.options.elementInViewport.getBoundingClientRect());this.isElementInViewport=0<=f.bottom&&0<=f.right&&
f.top<=g&&f.left<=x;if(b||this.isElementInViewport){b=Math.max(0,c);var f=Math.max(0,e+c),h=Math.max(0,-c),k=Math.max(0,c+e-g),m=Math.max(0,e-(c+e-g)),l=Math.max(0,-c+g-e),p=1-2*(g-c)/(g+e),n=1;e<g?n=1-(h||k)/e:f<=g?n=f/g:m<=g&&(n=m/g);if("opacity"===this.options.type||"scale-opacity"===this.options.type||"scroll-opacity"===this.options.type)d.transform="translate3d(0, 0, 0)",d.opacity=n;if("scale"===this.options.type||"scale-opacity"===this.options.type)e=1,e=0>this.options.speed?e-this.options.speed*
n:e+this.options.speed*(1-n),d.transform="scale("+e+") translate3d(0, 0, 0)";if("scroll"===this.options.type||"scroll-opacity"===this.options.type)e=this.parallaxScrollDistance*p,t&&this.options.enableTransform?(this.parentWithTransform&&(e-=c),d.transform="translate3d(0, "+e+"px, 0)"):this.image.useImgTag?d.top=e+"px":(this.bgPosVerticalCenter&&(e+=this.bgPosVerticalCenter),d.backgroundPosition="50% "+e+"px"),d.position=v?"absolute":"fixed";this.css(this.image.$item,d);this.options.onScroll&&this.options.onScroll.call(this,
{section:a,beforeTop:b,beforeTopEnd:f,afterTop:h,beforeBottom:k,beforeBottomEnd:m,afterBottom:l,visiblePercent:n,fromViewportCenter:p})}}};q(d,"scroll",r);q(d,"resize",r);q(d,"orientationchange",r);q(d,"load",r);var u=function(b){if("object"===typeof HTMLElement?b instanceof HTMLElement:b&&"object"===typeof b&&null!==b&&1===b.nodeType&&"string"===typeof b.nodeName)b=[b];var a=arguments[1],c=Array.prototype.slice.call(arguments,2),e=b.length,d=0,f;for(d;d<e;d++)if("object"===typeof a||"undefined"===
typeof a?b[d].jarallax||(b[d].jarallax=new h(b[d],a)):b[d].jarallax&&(f=b[d].jarallax[a].apply(b[d].jarallax,c)),"undefined"!==typeof f)return f;return b};u.constructor=h;var F=d.jarallax;d.jarallax=u;d.jarallax.noConflict=function(){d.jarallax=F;return this};if("undefined"!==typeof jQuery){var A=function(){var b=arguments||[];Array.prototype.unshift.call(b,this);b=u.apply(d,b);return"object"!==typeof b?b:this};A.constructor=h;var G=jQuery.fn.jarallax;jQuery.fn.jarallax=A;jQuery.fn.jarallax.noConflict=
function(){jQuery.fn.jarallax=G;return this}}q(d,"DOMContentLoaded",function(){u(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))})})(window);