!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self)["bootstrap-typeahead"]={},t.jQuery)}(this,function(t,e){"use strict";!function(t){var e,n,i={isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(t){return!t||/^\s*$/.test(t)},escapeRegExChars:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:t.isArray,isFunction:t.isFunction,isObject:t.isPlainObject,isUndefined:function(t){return void 0===t},isElement:function(t){return!(!t||1!==t.nodeType)},isJQuery:function(e){return e instanceof t},toStr:function(t){return i.isUndefined(t)||null===t?"":t+""},bind:t.proxy,each:function(e,n){t.each(e,function(t,e){return n(e,t)})},map:t.map,filter:t.grep,every:function(e,n){var i=!0;return e?(t.each(e,function(t,s){if(!(i=n.call(null,s,t,e)))return!1}),!!i):i},some:function(e,n){var i=!1;return e?(t.each(e,function(t,s){if(i=n.call(null,s,t,e))return!1}),!!i):i},mixin:t.extend,identity:function(t){return t},clone:function(e){return t.extend(!0,{},e)},getIdGenerator:function(){var t=0;return function(){return t++}},templatify:function(e){return t.isFunction(e)?e:function(){return String(e)}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i,s;return function(){var r,a,o=this,u=arguments;return r=function(){i=null,n||(s=t.apply(o,u))},a=n&&!i,clearTimeout(i),i=setTimeout(r,e),a&&(s=t.apply(o,u)),s}},throttle:function(t,e){var n,i,s,r,a,o;return a=0,o=function(){a=new Date,s=null,r=t.apply(n,i)},function(){var u=new Date,c=e-(u-a);return n=this,i=arguments,c<=0?(clearTimeout(s),s=null,a=u,r=t.apply(n,i)):s||(s=setTimeout(o,c)),r}},stringify:function(t){return i.isString(t)?t:JSON.stringify(t)},noop:function(){}},s=function(){var t={wrapper:"bootstrap-typeahead",input:"tt-input",hint:"tt-hint",menu:"dropdown-menu",dataset:"tt-dataset",suggestion:"dropdown-item",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"active",highlight:"tt-highlight"};return function(n){var s,r,a,o;return r=i.mixin({},t,n),{css:(s={css:(a={wrapper:{position:"relative",display:"inline-block",width:"100%"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none",width:"100%"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}},i.isMsie()&&i.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),a),classes:r,html:(o=r,{wrapper:'<span class="'+o.wrapper+'"></span>',menu:'<div class="'+o.menu+'"></div>'}),selectors:e(r)}).css,html:s.html,classes:s.classes,selectors:s.selectors,mixin:function(t){i.mixin(t,s)}}};function e(t){var e={};return i.each(t,function(t,n){e[n]="."+t}),e}}(),r=function(){var e;function n(e){e&&e.el||t.error("EventBus initialized without el"),this.$el=t(e.el)}return e={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},i.mixin(n.prototype,{_trigger:function(e,n){var i;return i=t.Event("typeahead:"+e),(n=n||[]).unshift(i),this.$el.trigger.apply(this.$el,n),i},before:function(t){var e;return e=[].slice.call(arguments,1),this._trigger("before"+t,e).isDefaultPrevented()},trigger:function(t){var n;this._trigger(t,[].slice.call(arguments,1)),(n=e[t])&&this._trigger(n,[].slice.call(arguments,1))}}),n}(),a=function(){var t=/\s+/,e=window.setImmediate?function(t){setImmediate(function(){t()})}:function(t){setTimeout(function(){t()},0)};return{onSync:function(t,e,i){return n.call(this,"sync",t,e,i)},onAsync:function(t,e,i){return n.call(this,"async",t,e,i)},off:function(e){var n;if(!this._callbacks)return this;for(e=e.split(t);n=e.shift();)delete this._callbacks[n];return this},trigger:function(n){var s,r,a,o,u;if(!this._callbacks)return this;for(n=n.split(t),a=[].slice.call(arguments,1);(s=n.shift())&&(r=this._callbacks[s]);)o=i(r.sync,this,[s].concat(a)),u=i(r.async,this,[s].concat(a)),o()&&e(u);return this}};function n(e,n,i,s){var r;if(!i)return this;for(n=n.split(t),i=s?function(t,e){return t.bind?t.bind(e):function(){t.apply(e,[].slice.call(arguments,0))}}(i,s):i,this._callbacks=this._callbacks||{};r=n.shift();)this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]},this._callbacks[r][e].push(i);return this}function i(t,e,n){return function(){for(var i,s=0,r=t.length;!i&&s<r;s+=1)i=!1===t[s].apply(e,n);return!i}}}(),o=(e=window.document,n={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1},function(t){var s;(t=i.mixin({},n,t)).node&&t.pattern&&(t.pattern=i.isArray(t.pattern)?t.pattern:[t.pattern],s=function(t,e,n){for(var s,r=[],a=0,o=t.length;a<o;a++)r.push(i.escapeRegExChars(t[a]));return s=n?"\\b("+r.join("|")+")\\b":"("+r.join("|")+")",e?new RegExp(s):new RegExp(s,"i")}(t.pattern,t.caseSensitive,t.wordsOnly),function t(e,n){for(var i,s=0;s<e.childNodes.length;s++)3===(i=e.childNodes[s]).nodeType?s+=n(i)?1:0:t(i,n)}(t.node,function(n){var i,r,a;return(i=s.exec(n.data))&&(a=e.createElement(t.tagName),t.className&&(a.className=t.className),(r=n.splitText(i.index)).splitText(i[0].length),a.appendChild(r.cloneNode(!0)),n.parentNode.replaceChild(a,r)),!!i}))}),u=function(){var e;function n(e,n){var s;(e=e||{}).input||t.error("input is missing"),n.mixin(this),this.$hint=t(e.hint),this.$input=t(e.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=(s=this.$input,t('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:s.css("font-family"),fontSize:s.css("font-size"),fontStyle:s.css("font-style"),fontVariant:s.css("font-variant"),fontWeight:s.css("font-weight"),wordSpacing:s.css("word-spacing"),letterSpacing:s.css("letter-spacing"),textIndent:s.css("text-indent"),textRendering:s.css("text-rendering"),textTransform:s.css("text-transform")}).insertAfter(s)),this._checkLanguageDirection(),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=i.noop)}return e={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},n.normalizeQuery=function(t){return i.toStr(t).replace(/^\s*/g,"").replace(/\s{2,}/g," ")},i.mixin(n.prototype,a,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(t){var n=e[t.which||t.keyCode];this._managePreventDefault(n,t),n&&this._shouldTrigger(n,t)&&this.trigger(n+"Keyed",t)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(t,e){var n;switch(t){case"up":case"down":n=!s(e);break;default:n=!1}n&&e.preventDefault()},_shouldTrigger:function(t,e){var n;switch(t){case"tab":n=!s(e);break;default:n=!0}return n},_checkLanguageDirection:function(){var t=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==t&&(this.dir=t,this.$hint.attr("dir",t),this.trigger("langDirChanged",t))},_setQuery:function(t,e){var i,s,r,a;r=t,a=this.query,i=n.normalizeQuery(r)===n.normalizeQuery(a),s=!!i&&this.query.length!==t.length,this.query=t,e||i?!e&&s&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},bind:function(){var t,n,s,r,a=this;return t=i.bind(this._onBlur,this),n=i.bind(this._onFocus,this),s=i.bind(this._onKeydown,this),r=i.bind(this._onInput,this),this.$input.on("blur.tt",t).on("focus.tt",n).on("keydown.tt",s),!i.isMsie()||i.isMsie()>9?this.$input.on("input.tt",r):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(t){e[t.which||t.keyCode]||i.defer(i.bind(a._onInput,a,t))}),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(t,e){this.setInputValue(t),this._setQuery(t,e)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(t){this.$input.val(t),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(t){this.$hint.val(t)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var t,e,n;t=this.getInputValue(),e=this.getHint(),n=t!==e&&0===e.indexOf(t),(""===t||!n||this.hasOverflow())&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var t=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var t,e,n;return t=this.$input.val().length,e=this.$input[0].selectionStart,i.isNumber(e)?e===t:!document.selection||((n=document.selection.createRange()).moveStart("character",-t),t===n.text.length)},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=t("<div>")}}),n;function s(t){return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}}(),c=function(){var e,n;function s(e,s){var r,a,o,u;(e=e||{}).templates=e.templates||{},e.templates.notFound=e.templates.notFound||e.templates.empty,e.source||t.error("missing source"),e.node||t.error("missing node"),e.name&&(r=e.name,!/^[_a-zA-Z0-9-]+$/.test(r))&&t.error("invalid dataset name: "+e.name),s.mixin(this),this.highlight=!!e.highlight,this.name=e.name||n(),this.limit=e.limit||5,this.displayFn=(u=(u=e.display||e.displayKey)||i.stringify,i.isFunction(u)?u:function(t){return t[u]}),this.templates=(a=e.templates,o=this.displayFn,{notFound:a.notFound&&i.templatify(a.notFound),pending:a.pending&&i.templatify(a.pending),header:a.header&&i.templatify(a.header),footer:a.footer&&i.templatify(a.footer),suggestion:a.suggestion||function(e){return t("<div>").text(o(e))}}),this.source=e.source.__ttAdapter?e.source.__ttAdapter():e.source,this.async=i.isUndefined(e.async)?this.source.length>2:!!e.async,this._resetLastSuggestion(),this.$el=t(e.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}return e={val:"tt-selectable-display",obj:"tt-selectable-object"},n=i.getIdGenerator(),s.extractData=function(n){var i=t(n);return i.data(e.obj)?{val:i.data(e.val)||"",obj:i.data(e.obj)||null}:null},i.mixin(s.prototype,a,{_overwrite:function(t,e){(e=e||[]).length?this._renderSuggestions(t,e):this.async&&this.templates.pending?this._renderPending(t):!this.async&&this.templates.notFound?this._renderNotFound(t):this._empty(),this.trigger("rendered",this.name,e,!1)},_append:function(t,e){(e=e||[]).length&&this.$lastSuggestion.length?this._appendSuggestions(t,e):e.length?this._renderSuggestions(t,e):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(t),this.trigger("rendered",this.name,e,!0)},_renderSuggestions:function(t,e){var n;n=this._getSuggestionsFragment(t,e),this.$lastSuggestion=n.children().last(),this.$el.html(n).prepend(this._getHeader(t,e)).append(this._getFooter(t,e))},_appendSuggestions:function(t,e){var n,i;n=this._getSuggestionsFragment(t,e),i=n.children().last(),this.$lastSuggestion.after(n),this.$lastSuggestion=i},_renderPending:function(t){var e=this.templates.pending;this._resetLastSuggestion(),e&&this.$el.html(e({query:t,dataset:this.name}))},_renderNotFound:function(t){var e=this.templates.notFound;this._resetLastSuggestion(),e&&this.$el.html(e({query:t,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(n,s){var r,a=this;return r=document.createDocumentFragment(),i.each(s,function(i){var s,o;o=a._injectQuery(n,i),s=t(a.templates.suggestion(o)).data(e.obj,i).data(e.val,a.displayFn(i)).addClass(a.classes.suggestion+" "+a.classes.selectable).css({cursor:"pointer"}),r.appendChild(s[0])}),this.highlight&&o({className:this.classes.highlight,node:r,pattern:n}),t(r)},_getFooter:function(t,e){return this.templates.footer?this.templates.footer({query:t,suggestions:e,dataset:this.name}):null},_getHeader:function(t,e){return this.templates.header?this.templates.header({query:t,suggestions:e,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=t()},_injectQuery:function(t,e){return i.isObject(e)?i.mixin({_query:t},e):e},update:function(e){var n=this,i=!1,s=!1,r=0;function a(t){s||(s=!0,t=(t||[]).slice(0,n.limit),r=t.length,n._overwrite(e,t),r<n.limit&&n.async&&n.trigger("asyncRequested",e))}this.cancel(),this.cancel=function(){i=!0,n.cancel=t.noop,n.async&&n.trigger("asyncCanceled",e)},this.source(e,a,function(s){s=s||[],!i&&r<n.limit&&(n.cancel=t.noop,r+=s.length,n._append(e,s.slice(0,n.limit-r)),n.async&&n.trigger("asyncReceived",e))}),!s&&a([])},cancel:t.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=t("<div>")}}),s}(),h=function(){function e(e,n){var s=this;(e=e||{}).node||t.error("node is required"),n.mixin(this),this.$node=t(e.node),this.query=null,this.datasets=i.map(e.datasets,function(e){var i=s.$node.find(e.node).first();return e.node=i.length?i:t("<div>").appendTo(s.$node),new c(e,n)})}return i.mixin(e.prototype,a,{_onSelectableClick:function(e){this.trigger("selectableClicked",t(e.currentTarget))},_onRendered:function(t,e,n,i){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",e,n,i)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){return i.every(this.datasets,function(t){return t.isEmpty()})},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var t=this.getActiveSelectable();t&&t.removeClass(this.classes.cursor)},_ensureVisible:function(t){var e,n,i,s;e=t.position().top,n=e+t.outerHeight(!0),i=this.$node.scrollTop(),s=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),e<0?this.$node.scrollTop(i+e):s<n&&this.$node.scrollTop(i+(n-s))},bind:function(){var t,e=this;return t=i.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,t),i.each(this.datasets,function(t){t.onSync("asyncRequested",e._propagate,e).onSync("asyncCanceled",e._propagate,e).onSync("asyncReceived",e._propagate,e).onSync("rendered",e._onRendered,e).onSync("cleared",e._onCleared,e)}),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.addClass(this.classes.open)},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(t){this.$node.attr("dir",t)},selectableRelativeToCursor:function(t){var e,n,i,s;return n=this.getActiveSelectable(),e=this._getSelectables(),i=n?e.index(n):-1,-1===(s=(s=((s=i+t)+1)%(e.length+1)-1)<-1?e.length-1:s)?null:e.eq(s)},setCursor:function(t){this._removeCursor(),(t=t&&t.first())&&(t.addClass(this.classes.cursor),this._ensureVisible(t))},getSelectableData:function(t){return t&&t.length?c.extractData(t):null},getActiveSelectable:function(){var t=this._getSelectables().filter(this.selectors.cursor).first();return t.length?t:null},getTopSelectable:function(){var t=this._getSelectables().first();return t.length?t:null},update:function(t){var e=t!==this.query;return e&&(this.query=t,i.each(this.datasets,function(e){e.update(t)})),e},empty:function(){i.each(this.datasets,function(t){t.clear()}),this.query=null,this.$node.addClass(this.classes.empty)},destroy:function(){this.$node.off(".tt"),this.$node=t("<div>"),i.each(this.datasets,function(t){t.destroy()})}}),e}(),l=function(){var t=h.prototype;function e(){h.apply(this,[].slice.call(arguments,0))}return i.mixin(e.prototype,h.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),t.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),t.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),t._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),t._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(e){return this.$node.css("ltr"===e?this.css.ltr:this.css.rtl),t.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),e}(),d=function(){function e(e,s){var r,a,o,u,c,h,l,d,p,f,g;(e=e||{}).input||t.error("missing input"),e.menu||t.error("missing menu"),e.eventBus||t.error("missing event bus"),s.mixin(this),this.eventBus=e.eventBus,this.minLength=i.isNumber(e.minLength)?e.minLength:1,this.input=e.input,this.menu=e.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),r=n(this,"activate","open","_onFocused"),a=n(this,"deactivate","_onBlurred"),o=n(this,"isActive","isOpen","_onEnterKeyed"),u=n(this,"isActive","isOpen","_onTabKeyed"),c=n(this,"isActive","_onEscKeyed"),h=n(this,"isActive","open","_onUpKeyed"),l=n(this,"isActive","open","_onDownKeyed"),d=n(this,"isActive","isOpen","_onLeftKeyed"),p=n(this,"isActive","isOpen","_onRightKeyed"),f=n(this,"_openIfActive","_onQueryChanged"),g=n(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",r,this).onSync("blurred",a,this).onSync("enterKeyed",o,this).onSync("tabKeyed",u,this).onSync("escKeyed",c,this).onSync("upKeyed",h,this).onSync("downKeyed",l,this).onSync("leftKeyed",d,this).onSync("rightKeyed",p,this).onSync("queryChanged",f,this).onSync("whitespaceChanged",g,this).onSync("langDirChanged",this._onLangDirChanged,this)}return i.mixin(e.prototype,{_hacks:function(){var e,n;e=this.input.$input||t("<div>"),n=this.menu.$node||t("<div>"),e.on("blur.tt",function(t){var s,r,a;s=document.activeElement,r=n.is(s),a=n.has(s).length>0,i.isMsie()&&(r||a)&&(t.preventDefault(),t.stopImmediatePropagation(),i.defer(function(){e.focus()}))}),n.on("mousedown.tt",function(t){t.preventDefault()})},_onSelectableClicked:function(t,e){this.select(e)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(t,e,n,i){this._updateHint(),this.eventBus.trigger("render",n,i,e)},_onAsyncRequested:function(t,e,n){this.eventBus.trigger("asyncrequest",n,e)},_onAsyncCanceled:function(t,e,n){this.eventBus.trigger("asynccancel",n,e)},_onAsyncReceived:function(t,e,n){this.eventBus.trigger("asyncreceive",n,e)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(t,e){var n;(n=this.menu.getActiveSelectable())&&this.select(n)&&e.preventDefault()},_onTabKeyed:function(t,e){var n;(n=this.menu.getActiveSelectable())?this.select(n)&&e.preventDefault():(n=this.menu.getTopSelectable())&&this.autocomplete(n)&&e.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onRightKeyed:function(){"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onQueryChanged:function(t,e){this._minLengthMet(e)?this.menu.update(e):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(t,e){this.dir!==e&&(this.dir=e,this.menu.setLanguageDirection(e))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(t){return(t=i.isString(t)?t:this.input.getQuery()||"").length>=this.minLength},_updateHint:function(){var t,e,n,s,r,a,o;t=this.menu.getTopSelectable(),e=this.menu.getSelectableData(t),n=this.input.getInputValue(),!e||i.isBlankString(n)||this.input.hasOverflow()?this.input.clearHint():(s=u.normalizeQuery(n),r=i.escapeRegExChars(s),a=new RegExp("^(?:"+r+")(.+$)","i"),(o=a.exec(e.val))&&this.input.setHint(n+o[1]))},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return!!this.isActive()||!(!this.isEnabled()||this.eventBus.before("active"))&&(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return!this.isActive()||!this.eventBus.before("idle")&&(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0)},isOpen:function(){return this.menu.isOpen()},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(t){this.input.setQuery(i.toStr(t))},getVal:function(){return this.input.getQuery()},select:function(t){var e=this.menu.getSelectableData(t);return!(!e||this.eventBus.before("select",e.obj)||(this.input.setQuery(e.val,!0),this.eventBus.trigger("select",e.obj),this.close(),0))},autocomplete:function(t){var e,n;return e=this.input.getQuery(),!(!(n=this.menu.getSelectableData(t))||e===n.val||this.eventBus.before("autocomplete",n.obj)||(this.input.setQuery(n.val),this.eventBus.trigger("autocomplete",n.obj),0))},moveCursor:function(t){var e,n,i,s;return e=this.input.getQuery(),n=this.menu.selectableRelativeToCursor(t),i=this.menu.getSelectableData(n),s=i?i.obj:null,!(this._minLengthMet()&&this.menu.update(e)||this.eventBus.before("cursorchange",s)||(this.menu.setCursor(n),i?this.input.setInputValue(i.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",s),0))},destroy:function(){this.input.destroy(),this.menu.destroy()}}),e;function n(t){var e=[].slice.call(arguments,1);return function(){var n=[].slice.call(arguments);i.each(e,function(e){return t[e].apply(t,n)})}}}();!function(){var e,n,a;function o(e,i){e.each(function(){var e,s=t(this);(e=s.data(n.typeahead))&&i(e,s)})}function c(e){var n,s;return n=i.isJQuery(e)||i.isElement(e),(s=n?t(e).first():[]).length?s:null}e=t.fn.typeahead,n={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},a={initialize:function(e,a){var o;return a=i.isArray(a)?a:[].slice.call(arguments,1),o=s((e=e||{}).classNames),this.each(function(){var s,p,f,g,y,m,v,_,b,S,w;i.each(a,function(t){t.highlight=!!e.highlight}),s=t(this),p=t(o.html.wrapper),f=c(e.hint),g=c(e.menu),y=!1!==e.hint&&!f,m=!1!==e.menu&&!g,y&&(f=function(t,e){return t.clone().addClass(e.classes.hint).removeData().css(e.css.hint).css((n=t,{backgroundAttachment:n.css("background-attachment"),backgroundClip:n.css("background-clip"),backgroundColor:n.css("background-color"),backgroundImage:n.css("background-image"),backgroundOrigin:n.css("background-origin"),backgroundPosition:n.css("background-position"),backgroundRepeat:n.css("background-repeat"),backgroundSize:n.css("background-size")})).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1});var n}(s,o)),m&&(g=t(o.html.menu).css(o.css.menu)),f&&f.val(""),s=function(t,e){t.data(n.attrs,{dir:t.attr("dir"),autocomplete:t.attr("autocomplete"),spellcheck:t.attr("spellcheck"),style:t.attr("style")}),t.addClass(e.classes.input).attr({autocomplete:"off",spellcheck:!1});try{!t.attr("dir")&&t.attr("dir","auto")}catch(t){}return t}(s,o),(y||m)&&(p.css(o.css.wrapper),s.css(y?o.css.input:o.css.inputWithNoHint),s.wrap(p).parent().prepend(y?f:null).append(m?g:null)),w=m?l:h,v=new r({el:s}),_=new u({hint:f,input:s},o),b=new w({node:g,datasets:a},o),S=new d({input:_,menu:b,eventBus:v,minLength:e.minLength},o),s.data(n.www,o),s.data(n.typeahead,S)})},isEnabled:function(){var t;return o(this.first(),function(e){t=e.isEnabled()}),t},enable:function(){return o(this,function(t){t.enable()}),this},disable:function(){return o(this,function(t){t.disable()}),this},isActive:function(){var t;return o(this.first(),function(e){t=e.isActive()}),t},activate:function(){return o(this,function(t){t.activate()}),this},deactivate:function(){return o(this,function(t){t.deactivate()}),this},isOpen:function(){var t;return o(this.first(),function(e){t=e.isOpen()}),t},open:function(){return o(this,function(t){t.open()}),this},close:function(){return o(this,function(t){t.close()}),this},select:function(e){var n=!1,i=t(e);return o(this.first(),function(t){n=t.select(i)}),n},autocomplete:function(e){var n=!1,i=t(e);return o(this.first(),function(t){n=t.autocomplete(i)}),n},moveCursor:function(t){var e=!1;return o(this.first(),function(n){e=n.moveCursor(t)}),e},val:function(t){var e;return arguments.length?(o(this,function(e){e.setVal(t)}),this):(o(this.first(),function(t){e=t.getVal()}),e)},destroy:function(){return o(this,function(t,e){!function(t){var e,s;e=t.data(n.www),s=t.parent().filter(e.selectors.wrapper),i.each(t.data(n.attrs),function(e,n){i.isUndefined(e)?t.removeAttr(n):t.attr(n,e)}),t.removeData(n.typeahead).removeData(n.www).removeData(n.attr).removeClass(e.classes.input),s.length&&(t.detach().insertAfter(s),s.remove())}(e),t.destroy()}),this}},t.fn.typeahead=function(t){return a[t]?a[t].apply(this,[].slice.call(arguments,1)):a.initialize.apply(this,arguments)},t.fn.typeahead.noConflict=function(){return t.fn.typeahead=e,this}}()}(e=e&&e.hasOwnProperty("default")?e.default:e);var n=e.fn.typeahead;t.Typeahead=n,Object.defineProperty(t,"__esModule",{value:!0})});