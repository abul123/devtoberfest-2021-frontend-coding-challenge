/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(i,t){i.write("<div");i.writeControlData(t);i.addClass("sapUiUfdShellOvrly");if(t._opening){i.addClass("sapUiUfdShellOvrlyCntntHidden");i.addClass("sapUiUfdShellOvrlyOpening")}if(t._getAnimActive()){i.addClass("sapUiUfdShellOvrlyAnim")}i.writeClasses();if(sap.ui.getCore().getConfiguration().getAccessibility()){i.writeAccessibilityState(t,{role:"dialog"})}i.write("><span id='",t.getId(),"-focfirst' tabindex='0'></span><div id='",t.getId(),"-inner'>");i.write("<header class='sapUiUfdShellOvrlyHead'>");i.write("<hr class='sapUiUfdShellOvrlyBrand'>");i.write("<div class='sapUiUfdShellOvrlyHeadCntnt'");if(sap.ui.getCore().getConfiguration().getAccessibility()){i.writeAttribute("role","toolbar")}i.write("><div id='"+t.getId()+"-hdr-center' class='sapUiUfdShellOvrlyHeadCenter'>");e.renderSearch(i,t);i.write("</div>");var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified"),d=r.getText("SHELL_OVERLAY_CLOSE");i.write("<a tabindex='0' href='#' id='"+t.getId()+"-close' class='sapUiUfdShellOvrlyHeadClose'");i.writeAttributeEscaped("title",d);if(sap.ui.getCore().getConfiguration().getAccessibility()){i.writeAttribute("role","button")}i.write(">");i.writeEscaped(d);i.write("</a></div></header>");i.write("<div id='"+t.getId()+"-cntnt' class='sapUiUfdShellOvrlyCntnt'>");e.renderContent(i,t);i.write("</div>");i.write("</div><span id='",t.getId(),"-foclast' tabindex='0'></span></div>")};e.renderSearch=function(e,i){var t=i._getSearchWidth();e.write("<div id='"+i.getId()+"-search' class='sapUiUfdShellOvrlySearch' ");if(t>0&&i._opening){e.addStyle("width",t+"px'");e.writeStyles()}e.write("><div>");var r=i.getSearch();if(r){e.renderControl(r)}e.write("</div></div>")};e.renderContent=function(e,i){e.write("<div>");var t=i.getContent();for(var r=0;r<t.length;r++){e.renderControl(t[r])}e.write("</div>")};return e},true);