"use strict";if(typeof jQuery==="undefined"){var script=document.createElement("script");script.src="https://code.jquery.com/jquery-latest.min.js";script.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(script)}var _pushassist={};_pushassist.appkey="AIzaSyAExvLquLphb8ImrLNOz_jo_3F47n__LuQ";_pushassist.serverUrl="https://api2.pushassist.com";_pushassist.Url="https://moradox.pushassist.com";_pushassist.assetsURL="https://cdn.pushassist.com/account";_pushassist.subdomain="moradox";_pushassist.safariWebsitePushId="web.com.pushassist.push";_pushassist.intervalTime=1;var _pa;var subdomainUrl="https://"+_pushassist.subdomain+".pushassist.com";function get_values(){var d="https://fonts.googleapis.com/css?family=Roboto:400,100,300",f=document.getElementsByTagName("head")[0],a=document.createElement("link");a.rel="stylesheet",a.href=d,f.appendChild(a);var b="https://cdn1.pushassist.com/account/css/psa-notification.css",e=document.getElementsByTagName("head")[0],c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href=b,e.appendChild(c)}function _pa_params(){var b=[],a;if(typeof _pa==="undefined"){_pa=[]}var c=_pa.length;if(c>0){for(a=0;a<c;++a){b.push(encodeURIComponent(_pa[a]))}return b}}function check_browser_version(){var f=navigator.userAgent;var e,d,c,b,a;if((e=f.indexOf("Opera"))!=-1){d=f.substring(e+6);if((e=f.indexOf("Version"))!=-1){d=f.substring(e+8)}}if((e=f.indexOf("OPR"))!=-1){d=f.substring(e+4)}else{if((e=f.indexOf("Edge"))!=-1){d=f.substring(e+5)}else{if((e=f.indexOf("MSIE"))!=-1){d=f.substring(e+5)}else{if((e=f.indexOf("Chrome"))!=-1){d=f.substring(e+7)}else{if((e=f.indexOf("Safari"))!=-1){d=f.substring(e+7);if((e=f.indexOf("Version"))!=-1){d=f.substring(e+8)}}else{if((e=f.indexOf("Firefox"))!=-1){d=f.substring(e+8)}else{if(f.indexOf("Trident/")!=-1){d=f.substring(f.indexOf("rv:")+3)}else{if((b=f.lastIndexOf(" ")+1)<(e=f.lastIndexOf("/"))){d=f.substring(e+1)}}}}}}}}if((c=d.indexOf(";"))!=-1){d=d.substring(0,c)}if((c=d.indexOf(" "))!=-1){d=d.substring(0,c)}if((c=d.indexOf(")"))!=-1){d=d.substring(0,c)}a=parseInt(""+d,10);if(isNaN(a)){d=""+parseFloat(navigator.appVersion);a=parseInt(navigator.appVersion,10)}return a}function check_browser(){var d=navigator.userAgent;var b,a,c;if((b=d.indexOf("Opera"))!=-1){c="Opera"}if((b=d.indexOf("OPR"))!=-1){c="Opera"}else{if((b=d.indexOf("Edge"))!=-1){c="Edge"}else{if((b=d.indexOf("MSIE"))!=-1){c="Explorer"}else{if(d.match(/(SamsungBrowser)\/?\s*/i)){c="Samsung"}else{if((b=d.indexOf("Chrome"))!=-1){c="Chrome"}else{if((b=d.indexOf("Safari"))!=-1){c="Safari"}else{if((b=d.indexOf("Firefox"))!=-1){c="Firefox"}else{if(d.indexOf("Trident/")!=-1){c="Internet Explorer 11"}else{if((a=d.lastIndexOf(" ")+1)<(b=d.lastIndexOf("/"))){c=d.substring(a,b);if(c.toLowerCase()==c.toUpperCase()){c=navigator.appName}}}}}}}}}}return c}function browser_compatible(){if("Chrome"===check_browser()||"Samsung"===check_browser()){return"Notification" in window&&"serviceWorker" in navigator&&"showNotification" in ServiceWorkerRegistration.prototype&&"PushManager" in window&&check_browser_version()>=42?!0:!1}else{if("Opera"===check_browser()){return"Notification" in window&&"serviceWorker" in navigator&&"showNotification" in ServiceWorkerRegistration.prototype&&"PushManager" in window&&check_browser_version()>=42?!0:!1}else{if("Firefox"===check_browser()){return check_browser_version()>43?!0:!1}else{if("Safari"===check_browser()){return"safari" in window&&"pushNotification" in window.safari?!0:!1}else{if("Edge"===check_browser()){return check_browser_version()>13?!0:!1}}}}}}function setCookie(c,e,d){var f=new Date;f.setTime(f.getTime()+(d*24*60*60*1000));var b="; expires="+f.toUTCString();document.cookie=encodeURIComponent(c)+"="+encodeURIComponent(e)+b+"; path=/"}function getCookie(c){for(var e=c+"=",d=document.cookie.split(";"),f=0;f<d.length;f++){for(var b=d[f];" "==b.charAt(0);){b=b.substring(1)}if(0==b.indexOf(e)){return b.substring(e.length,b.length)}}return""}function notificationPopup(){jQuery("body").append('<div class="pushassist_notification8 top_center"><div class="pushassist_notification8_inner_wraper" id="pushassist_notification_inner_wraper"> <div class="pushassist_notification8_image_wraper"> <img src="https://cdn.pushassist.com/account/uploads/VVVV.png"> </div> <div class="pushassist_notification8_text_wraper"> <span class="pushassist_notification8_title"> Ù‡Ù„ ØªØ±ÙŠØ¯ Ø§Ù„ØØµÙˆÙ„ Ø¹Ù„Ù‰ ÙƒÙ„ Ø£Ø³Ø±Ø§Ø± Ø§Ù„Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ø§Ù„Ù†Øª </span> <p class="pushassist_notification8_message"> Ø£Ù†Øª Ø¹Ù„Ù‰ ÙˆØ´Ùƒ Ø£Ù† ØªØµØ¨Ø ÙˆØ§ØØ¯Ø§ Ù…Ù† Ø£ÙØ±Ø§Ø¯ Ø§Ù„Ø¹Ø§Ø¦Ù„Ø© Ø§Ù„Ù…Ù‚Ø±Ø¨ÙŠÙ† Ùˆ ØªØØµÙ„ Ø¹Ù„Ù‰ ÙƒÙ„ Ù…Ø§ Ù‡Ùˆ ÙØ±ÙŠØ¯ Ùˆ Ù…ØªÙ…ÙŠØ² </p> </div> <div class="pushassist_notification8_footer_wraper"> <a class="pushassist8_branding" target="_blank" href="https://pushassist.com/"> <img src="https://i.imgur.com/JB1FzMC.png"> </a> <span><a class="pushassist8_powered_by" target="_blank" href="https://pushassist.com/">Powered by PushAssist</a></span> <div class="pushassist8_button_wrapper"> <button class="pushassist8_btn_close" id="psa_close">Ù„Ø§ Ø£ÙˆØ§ÙÙ‚</button> <button class="pushassist8_btn_allow" id="psa_allow">Ø£ÙˆØ§ÙÙ‚</button></div> </div> </div> </div>');document.getElementById("psa_close").addEventListener("click",function(){setCookie("pushassist_notification_status","block",2);var a=document.getElementById("pushassist_notification_inner_wraper");a.parentNode.remove(a)});document.getElementById("psa_allow").addEventListener("click",function(){var b=document.getElementById("pushassist_notification_inner_wraper");b.parentNode.remove(b);var d=void 0!==window.screenLeft?window.screenLeft:screen.left,a=void 0!==window.screenTop?window.screenTop:screen.top,h=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,c=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,e=550,i=450,f=h/2-e/2+d,j=c/2-i/2+a,g;if(undefined===_pa_params()){g=window.open(subdomainUrl,"_blank","scrollbars=yes, width="+e+", height="+i+", top="+j+", left="+f)}else{g=window.open(subdomainUrl+"?segment="+_pa_params(),"_blank","scrollbars=yes, width="+e+", height="+i+", top="+j+", left="+f)}return g?(g.focus(),g.height<=0?!1:!0):void 0})}function openFBpopup(b,c){var a=window.open(b,"","width=800,height=600");a.onbeforeunload=function(){setCookie("psa_fb_status","1",14);jQuery(c).hide()}}window.onload=function(){var a=getCookie("psa_fb_status");if(a!==""){jQuery(".psa_fb_login").hide()}};function show_notification_child_window(){var c=void 0!==window.screenLeft?window.screenLeft:screen.left,a=void 0!==window.screenTop?window.screenTop:screen.top,g=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,b=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,d=550,h=450,e=g/2-d/2+c,i=b/2-h/2+a,f;if(undefined===_pa_params()){f=window.open(subdomainUrl,"_blank","scrollbars=yes, width="+d+", height="+h+", top="+i+", left="+e)}else{f=window.open(subdomainUrl+"?segment="+_pa_params(),"_blank","scrollbars=yes, width="+d+", height="+h+", top="+i+", left="+e)}return f?(f.focus(),f.height<=0?!1:!0):void 0}function getChildWindowMessage(a){jQuery.each(a,function(b,c){"new_user"!==b&&setCookie(b,c,730);setCookie(b,c,730)})}function getOrigin(c){var b=document.createElement("a");return b.href=c,b.hostname}window.addEventListener("message",function(a){return getOrigin(a.origin)!==getOrigin(subdomainUrl)?!1:void ("block"===a.data?(setCookie("pushassist_notification_status","block",2),setCookie("pushassist_key","",-1)):getChildWindowMessage(a.data))});function _pa_subscriberID(){var a=decodeURIComponent(getCookie("pushassist_key"));var b=check_browser();var c=JSON.stringify({subscriber_id:"",browser:b});if(a!==""){a=a.replace("%3A",":");c=JSON.stringify({subscriber_id:a,browser:b})}return c}function _pa_isSubscribed(){var b=getCookie("pushassist_key");var a=JSON.stringify({subscribed:false});if(b!==""){var c={json:JSON.stringify({subscriber_key:b,sub_domain:_pushassist.subdomain})};var d=_pushassist.serverUrl+"/js-api/is-subscriber";return fetch(d,{method:"post",body:c.json}).then(function(e){return e.json().then(function(f){if(f.status==="Success"){a=JSON.stringify({subscribed:true})}return a})})}return a}function _pa_addToSegment(d){var b=getCookie("pushassist_key");var a=false;if(b!==""){var c={json:JSON.stringify({subscriber_key:b,sub_domain:_pushassist.subdomain,segment:d})};var e=_pushassist.serverUrl+"/js-api/add-subscriber-segment";return fetch(e,{method:"post",body:c.json}).then(function(f){return f.json().then(function(g){if(g.status==="Success"){a=true}return a})})}return a}function _pa_removeSubscriberFromSegment(){var b=getCookie("pushassist_key");var a=false;if(b!==""){var c={json:JSON.stringify({subscriber_key:b,sub_domain:_pushassist.subdomain,segment:segment})};var d=_pushassist.serverUrl+"/js-api/remove-segment-subscriber";return fetch(d,{method:"post",body:c.json}).then(function(e){return e.json().then(function(f){if(f.status==="Success"){a=true}return a})})}return a}function _pa_changeSegment(c,f,d){var b=getCookie("pushassist_key");var a=false;if(b!==""){var e={json:JSON.stringify({subscriber_key:b,old_segment:c,new_segment:f,remove_from_existing:d})};var g=_pushassist.serverUrl+"/js-api/change-segment";return fetch(g,{method:"post",body:e.json}).then(function(h){return h.json().then(function(i){if(i.status==="Success"){a=true}return a})})}return a}function _pa_subscriberSegments(){var b=getCookie("pushassist_key");var a=JSON.stringify({segments:null});if(b!==""){var c={json:JSON.stringify({subscriber_key:b,sub_domain:_pushassist.subdomain})};var d=_pushassist.serverUrl+"/js-api/subscriber-segment";return fetch(d,{method:"post",body:c.json}).then(function(e){return e.json().then(function(f){if(f.status==="Success"){a=JSON.stringify({segments:f.segments})}return a})})}return a}self.addEventListener("load",function(){get_values();var b=document.getElementsByClassName("psa_show_notification_opt_in");if(b.length===0){if(!0===browser_compatible()){"subscribe"===getCookie("pushassist_notification_status")||"block"===getCookie("pushassist_notification_status")?void 0:setTimeout(function(){notificationPopup()},_pushassist.intervalTime*1000)}}else{for(var a=0;a<b.length;a++){b[a].addEventListener("click",function(){if(!0===browser_compatible()){"subscribe"===getCookie("pushassist_notification_status")||"block"===getCookie("pushassist_notification_status")?void 0:show_notification_child_window()}})}}});
