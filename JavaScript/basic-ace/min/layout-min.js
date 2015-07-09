define(function(e,t,i){"use strict";var n=e("ace/lib/dom"),r=e("ace/lib/event"),s=e("ace/edit_session").EditSession,o=e("ace/undomanager").UndoManager,a=e("ace/virtual_renderer").VirtualRenderer,c=e("ace/editor").Editor,h=e("ace/multi_select").MultiSelect;n.importCssString("splitter {    border: 1px solid #C6C6D2;    width: 0px;    cursor: ew-resize;    z-index:10}splitter:hover {    margin-left: -2px;    width:3px;    border-color: #B5B4E0;}","splitEditor"),t.edit=function(t){"string"==typeof t&&(t=document.getElementById(t));var i=new c(new a(t,e("ace/theme/textmate")));return i.resize(),r.addListener(window,"resize",function(){i.resize()}),i};var d=function(e,t,i,n){e.style.position=i||"relative",this.container=e,this.getSize=n||this.getSize,this.resize=this.$resize.bind(this),r.addListener(e.ownerDocument.defaultView,"resize",this.resize),this.editor=this.createEditor()};(function(){this.createEditor=function(){var e=document.createElement("div");e.className=this.$editorCSS,e.style.cssText="position: absolute; top:0px; bottom:0px",this.$container.appendChild(e);var t=new s(""),i=new c(new a(e,this.$theme));return this.$editors.push(i),i.setFontSize(this.$fontSize),i},this.$resize=function(){var e=this.getSize(this.container);this.rect={x:e.left,y:e.top,w:e.width,h:e.height},this.item.resize(this.rect)},this.getSize=function(e){return e.getBoundingClientRect()},this.destroy=function(){var e=this.container.ownerDocument.defaultView;r.removeListener(e,"resize",this.resize)}}).call(d.prototype);var u=function(){};(function(){this.execute=function(e){this.$u.execute(e)}}).call(u.prototype),t.singleLineEditor=function(e){var t=new a(e);e.style.overflow="hidden",t.screenToTextCoordinates=function(e,t){var i=this.pixelToScreenCoordinates(e,t);return this.session.screenToDocumentPosition(Math.min(this.session.getScreenLength()-1,Math.max(i.row,0)),Math.max(i.column,0))},t.$maxLines=4,t.setStyle("ace_one-line");var i=new c(t);return new h(i),i.session.setUndoManager(new o),i.setShowPrintMargin(!1),i.renderer.setShowGutter(!1),i.renderer.setHighlightGutterLine(!1),i.$mouseHandler.$focusWaitTimout=0,i}});