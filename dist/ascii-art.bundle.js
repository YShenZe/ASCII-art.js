!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AsciiArt=t():e.AsciiArt=t()}("undefined"!=typeof self?self:this,(()=>{return e={439:function(e){var t,r;t="undefined"!=typeof window?window:this,r=function(){"use strict";var e;e="undefined"!=typeof Image?Image:function(){throw new Error("当前环境不支持 Image 对象，请在浏览器环境或提供 polyfill 后使用。")};var t={width:100,height:void 0,asciiRamp:"@%#*+=-:. "};return{convert:function(r,n){return n=function(e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);if(e)for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r}(n),new Promise((function(t,o){var i,a;"string"==typeof r?(a=r,i=new Promise((function(t,r){var n;try{n=new e}catch(e){return r(e)}n.onload=function(){t(n)},n.onerror=function(){r(new Error("加载图片失败："+a))},n.src=a}))):i=Promise.resolve(r),i.then((function(e){var r,i=e.height/e.width,a=n.width,f=n.height||Math.round(a*i);try{r=function(e,t){if("undefined"!=typeof document&&"function"==typeof document.createElement){var r=document.createElement("canvas");return r.width=e,r.height=t,r}if("undefined"!=typeof OffscreenCanvas)return new OffscreenCanvas(e,t);throw new Error("当前环境不支持 Canvas，请在浏览器环境或提供 polyfill 后使用。")}(a,f)}catch(e){return o(e)}var c,u=r.getContext("2d");u.drawImage(e,0,0,a,f);try{c=u.getImageData(0,0,a,f).data}catch(e){return o(new Error("无法获取图像像素数据，可能是跨域问题。"))}for(var s="",d=n.asciiRamp,p=0;p<f;p++){for(var h=0;h<a;h++){var v=4*(p*a+h),w=.299*c[v]+.587*c[v+1]+.114*c[v+2],y=Math.floor(w/255*(d.length-1));s+=d.charAt(y)}s+="\n"}t(s)})).catch((function(e){o(e)}))}))}}},"object"==typeof e.exports?e.exports=r():t.AsciiArt=r()}},t={},function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(439);var e,t}));