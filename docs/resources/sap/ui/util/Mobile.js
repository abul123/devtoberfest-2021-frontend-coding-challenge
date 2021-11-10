/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/base/Log","sap/ui/thirdparty/jquery"],function(e,n,o){"use strict";var t={};var i=false;t.init=function(n){var a=o("head");if(!i){i=true;n=o.extend({},{viewport:true,statusBar:"default",hideBrowser:true,preventScroll:true,preventPhoneNumberDetection:true,useFullScreenHeight:true,homeIconPrecomposed:false,mobileWebAppCapable:"default"},n);if(e.os.ios&&n.preventPhoneNumberDetection){a.append(o('<meta name="format-detection" content="telephone=no">'))}var s=e.os.ios&&e.os.version>=7&&e.os.version<8&&e.browser.name==="sf";if(n.viewport){var l;var c=e.resize.height;var r=e.resize.width;if(s&&e.system.phone){l="minimal-ui, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}else if(s&&e.system.tablet){l="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}else if(e.os.ios&&e.system.phone&&Math.max(window.screen.height,window.screen.width)===568){l="user-scalable=0, initial-scale=1.0"}else if(e.os.android&&e.os.version<3){l="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}else{l="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}a.append(o('<meta name="viewport" content="'+l+'">'));if((c!==window.innerHeight||r!==window.innerWidth)&&e.resize._update){e.resize._update()}}if(n.mobileWebAppCapable==="default"){if(e.os.ios){a.append(o('<meta name="apple-mobile-web-app-capable" content="yes">'))}}if(e.os.ios){a.append(o('<meta name="apple-mobile-web-app-status-bar-style" content="'+n.statusBar+'">'))}if(n.useFullScreenHeight){o(function(){document.documentElement.style.height="100%"})}if(n.preventScroll&&e.os.ios){o(function(){document.documentElement.style.position="fixed";document.documentElement.style.overflow="hidden";document.documentElement.style.height="100%";document.documentElement.style.width="100%"})}}if(n&&n.homeIcon){var p;if(typeof n.homeIcon==="string"){p={phone:n.homeIcon,favicon:n.homeIcon}}else{p=o.extend({},n.homeIcon);p.phone=n.homeIcon.phone||n.homeIcon.icon||p.favicon;p.favicon=p.favicon||n.homeIcon.icon||n.homeIcon.phone;p.icon=undefined}p.precomposed=n.homeIconPrecomposed||p.precomposed;t.setIcons(p)}if(n&&n.mobileWebAppCapable!=="default"){t.setWebAppCapable(n.mobileWebAppCapable)}};t.setIcons=function(e){if(!e||typeof e!=="object"){n.warning("Call to sap/ui/util/Mobile.setIcons() has been ignored because there were no icons given or the argument was not an object.");return}var t=o("head"),i=e.precomposed?"-precomposed":"",a=function(n){return e[n]||e["tablet@2"]||e["phone@2"]||e["phone"]||e["tablet"]},s={phone:"",tablet:"76x76","phone@2":"120x120","tablet@2":"152x152"};if(e["favicon"]){var l=t.find("[rel=icon]");l.each(function(){if(this.rel==="icon"){o(this).remove()}});t.append(o('<link rel="icon" href="'+e["favicon"]+'">'))}if(a("phone")){t.find("[rel=apple-touch-icon]").remove();t.find("[rel=apple-touch-icon-precomposed]").remove()}for(var c in s){e[c]=e[c]||a(c);if(e[c]){var r=s[c];t.append(o('<link rel="apple-touch-icon'+i+'" '+(r?'sizes="'+r+'"':"")+' href="'+e[c]+'">'))}}};t.setWebAppCapable=function(n){if(!e.system.tablet&&!e.system.phone){return}var t=o("head"),i=["","apple"],a="mobile-web-app-capable",s=n?"yes":"no",l,c,r;for(l=0;l<i.length;l++){c=i[l]?i[l]+"-"+a:a;r=t.children('meta[name="'+c+'"]');if(r.length){r.attr("content",s)}else{t.append(o('<meta name="'+c+'" content="'+s+'">'))}}};return t});