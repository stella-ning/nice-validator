/*! Nice Validator 0.1.0
 * (c) 2012-2013 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e,t){"use strict";function i(s,a){var l,u,o,d=this;return!d instanceof i?new i(s,a):(E(a)&&(a={success:a}),o=I(s,"data-"+h+"-option"),o=o&&"{"===o.charAt(0)?Function("return "+o)():null,l=d.options=e.extend({},H,a,o),u=l.theme,u&&L[u]&&(l=e.extend(l,L[u],a)),d.$el=e(s),d.rules=new r(l.rules,!0),d.messages=new n(l.messages,!0),d.fields={},d.elements={},d.isValid=!0,d._init(),t)}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(N(e))for(var n in e)i[n]=s(e[n])}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(N(e))for(var r in e){if(!e[r])return;i[r]=e[r]}}function s(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){if(t&&t.tagName){var i=t;switch(t.tagName.toUpperCase()){case"INPUT":case"SELECT":case"TEXTAREA":i=t.form||e(t).closest(".n-"+h)}return e(i).data(h)||e(i)[h]().data(h)}}function u(i,r){var n=e.trim(I(i,"data-rule-"+r));if(n)return n=Function("return "+n)(),n?s(n):t}function o(e,t,i){var r=t.msg;return N(r)&&i&&(r=r[i]),j(r)||(r=I(e,"data-msg-"+i)||""),r}function d(e){if(!e)return"";var t=F.exec(e);return t?t[1]:""}function c(e){return(e||H.msgTemplate).replace("{#msg}",'<span class="msg-wrap"></span>')}function f(t,i,r){var n,s,a,l,u;if(i.target?(n=e(i.target,r),n.length&&(t=n[0])):(u=I(t,"data-target"),u&&(u=e(u,r)),u&&u.length&&u.is("."+w)&&(s=u)),a=t.name||"#"+t.id,s=s||e("."+w+'[data-for="'+a+'"]',r),!s.length)if(n=e(u||t),l=c(i.tpl),s=e(l).addClass(w).attr({tabindex:-1,role:"alert",style:i.style||"","data-for":a}),i.cls&&s.addClass(i.cls),n.is(":checkbox,:radio")){var o=n.parent();s.appendTo(o.is("label")?o.parent():o)}else s[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](n);return s}function g(t,i,r){var n,s,a,l,u=i.effect;n={error:v,ok:m,tip:y,loading:b}[i.type||(i.type="error")],a=f(t,i,r),l=a.find("span.msg-wrap"),l.length||(l=e('<span class="msg-wrap"></span>').appendTo(a)),-1!==a[0].className.indexOf("bottom")&&(l[0].style.top=e(t).outerHeight()-(S?parseInt(e(t).css("padding-top"))+4:0)+"px"),l[0].innerHTML=(i.arrow||"")+(i.icon||"")+'<span class="n-msg">'+i.msg+"</span>",l[0].className="msg-wrap "+n,a[0].style.display="",u&&(E(u)?s=u:q(u)&&E(u[0])&&(s=u[0]),s&&s(l,i.type))}function p(e,t,i){t=t||{};var r,n=f(e,t,i),s=t.effect;n.length&&(q(s)&&E(s[1])?(r=n.find("span.msg-wrap"),n[0].style.display="",s[1](r,t.type)):n[0].style.display="none")}var h="validator",m="n-ok",v="n-error",y="n-tip",b="n-loading",k="n-invalid",w="msg-box",_="aria-invalid",x="data-inputstatus",M=":input:not(:button,:submit,:reset,:disabled)",O=/(\w+)(?:[\[\(]([^\]\)]*)[\]\)])?/,$=/(?:([^:\[]*):)?\s*(.*)/,A=/[^\x00-\xff]/g,F=/^.*(top|right|bottom|left).*$/,C=/(?:(post|get):)?(.+)/i,T=/<|>|&lt;|&gt;/g,R=e.noop,V=e.proxy,E=e.isFunction,q=e.isArray,j=function(e){return"string"==typeof e},N=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},S=!(!window.ActiveXObject||!document.querySelector),I=function(e,i,r){return r===t?e.getAttribute(i):(null===r?e.removeAttribute(i):e.setAttribute(i,""+r),t)},D=window.console||{log:R,info:R,warn:R},H={debug:0,timely:2,stopOnError:0,showError:1,showOk:1,defaultMsg:"{0} is not valid.",loadingMsg:"Validating...",msgTemplate:"<span>{#msg}</span>",msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",formClass:"n-default",ignore:"",valid:R,invalid:R},L={"default":{msgClass:"n-right",showOk:""}};e.fn[h]=function(t){var r=this,n=arguments;return r.is(":input")?r:(!r.is("form")&&(r=this.find("form")),!r.length&&(r=this),r.each(function(){if(j(t)){if("_"===t.charAt(0))return;var r=e(this).data(h);r&&r[t].apply(r,Array.prototype.slice.call(n,1))}else new i(this,t)}),this)},e.fn.isValid=function(){var e=this[0],t=l(e);return t?t._checkField(e):!0},i.prototype={_init:function(){var t=this,i=t.options,r=t.fields;q(i.groups)&&e.map(i.groups,function(i){if(!j(i.fields)||!E(i.callback))return null;var n=e(a(i.fields),t.$el),s=function(){return i.callback.call(t,n)};e.extend(s,i),e.map(i.fields.split(" "),function(e){r[e]=r[e]||{},r[e].group=s})}),N(i.fields)&&e.each(i.fields,function(e,t){t&&(r[e]=j(t)?{rule:t}:t)}),e(M,t.$el).each(function(){var e,n=this,s=n.id;s&&"#"+s in r||(s=n.name),s&&(e=r[s]||{},e.rule||(e.rule=I(n,"data-rule")||""),e.rules=[],I(n,"data-rule",null),e.rule&&(e.name=e.name||n.name,e.key=s,e.required=-1!==e.rule.indexOf("required"),e.must=-1!==e.rule.indexOf("match")||-1!==e.rule.indexOf("checked"),e.required&&I(n,"aria-required",!0),("timely"in e&&!e.timely||!i.timely)&&I(n,"notimely",!0),j(e.target)&&I(n,"data-target",e.target),j(e.tip)&&I(n,"data-tip",e.tip),r[s]=t._parseField(e)))}),t.msgOpt={type:"error",tpl:c(i.msgTemplate),pos:d(i.msgClass),cls:i.msgClass,icon:i.msgIcon,arrow:i.msgArrow,style:i.msgStyle,effect:i.effect},t.$el.data(h)||(t.$el.on("submit",V(t,"_submit")).on("reset",V(t,"_reset")).on("validated.field",M,V(t,"_validatedField")).on("validated.rule",M,V(t,"_validatedRule")).on("focusin",M,V(t,"_focus")).on("focusout validate",M,V(t,"_blur")).on("click",":radio,:checkbox",V(t,"_click")),2===i.timely&&t.$el.on("keyup",M,V(t,"_blur")),t.$el.data(h,t).addClass("n-"+h+" "+i.formClass),I(t.$el[0],"novalidate","true"))},_submit:function(i){var r,n=this,s=n.options,a=i.target,l="focus.field",u=e(M,n.$el);n._reset(),n.submiting=!0,s.ignore&&(u=u.not(s.ignore)),u.each(function(i,r){if(!e(r).is("[novalidate]")){var a=n.getField(this);if(a)return n._validate(this,a),!n.isValid&&s.stopOnError?(e(this).trigger(l).trigger(l),!1):t}}),n.isValid||s.stopOnError||e(":input."+k+":first",n.$el).trigger(l).trigger(l),(!n.isValid||!I(a,"action")&&i)&&i.preventDefault(),r=n.isValid||2===s.debug?"valid":"invalid",s[r].call(n,a),n.$el.trigger(r+".form",[a]),n.submiting=!1},_reset:function(){var t=this,i=t.options.showError;j(i)?e(i).html(""):(e("[data-for]."+w,t.$el).map(function(){this.style.display="none"}),e(M,t.$el).map(function(){I(this,x,null),I(this,_,null),e(this).removeClass(k)})),t.isValid=!0},_focus:function(e){var t=e.target;this.submiting||""!==t.value&&("false"===I(t,_)||"tip"===I(t,x))||this.showMsg(t,{msg:I(t,"data-tip"),type:"tip"})},_blur:function(t,i){var r,n,s=this,a=s.options,l=t.target,u=100;if(!i){if("validate"===t.type)n=!0;else{if(e(l).is("[notimely]"))return;if(2===a.timely&&"keyup"!==t.type)return}if(a.ignore&&e(l).is(a.ignore))return;if("keyup"===t.type){var o=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(48>o&&!d[o])return;u=500}}r=s.getField(l),r&&(r.timeout&&clearTimeout(r.timeout),r.timeout=setTimeout(function(){s._validate(l,r,n)},u))},_click:function(e){this._blur(e,!0)},_parseField:function(i){var r,n=$.exec(i.rule);if(n)return i.display=n[1],r=(n[2]||"").split(";"),e.map(r,function(r){var n=O.exec(r);return n?(i.rules.push({method:n[1],params:n[2]?e.trim(n[2]).split(", "):t}),t):null}),i.vid=0,i.rid=i.rules[0].method,i},_validatedField:function(i,r,n){var s=this,a=s.options,l=a.showError,u=i.target,o=r.isValid=!!n.valid;if(o&&(n.type="ok"),e(u)[o?"removeClass":"addClass"](k).trigger((o?"valid":"invalid")+".field",[r,n]).attr(_,!o),r.old.ret=n,s.elements[r.key]=u,l){if(j(l))e(l).html(n.msg||"");else if(n.msg||n.showOk)return s.showMsg(u,n),t;(u.value||s.submiting)&&s.hideMsg(u,n)}},_validatedRule:function(i,r,n,s){n=n||a.getField(u);var a=this,l=a.options,u=i.target,d="",c=n.rid,f=!1,g=!1;if(s=s||{},n.old=n.old||{},r!==!0?(d=o(u,n,c),d||(j(r)?(d=r,r={error:d}):N(r)&&(r.error?d=r.error:(f=!0,r.ok&&j(r.ok)&&(g=!0),d=r.ok))),s.msg=(f?d:d||a.messages[c]||H.defaultMsg).replace("{0}",n.display||"")):f=!0,f){if(s.valid=!0,!g){var p=n.ok||I(u,"data-ok");p?(g=!0,s.msg=p):j(l.showOk)&&(g=!0,s.msg=l.showOk)}s.showOk=g,e(u).trigger("valid.rule",[c])}else a.isValid=!1,e(u).trigger("invalid.rule",[c]);l.debug&&D[f?"info":"warn"](n.vid+": "+c+" -> "+(s.msg||!0)),f&&n.old.value!==t&&n.old.value!==u.value?(n.vid=0,a._checkRule(u,n)):f&&n.vid<n.rules.length-1?(n.vid++,a._checkRule(u,n)):(n.vid=0,e(u).trigger("validated.field",[n,s]))},_checkRule:function(i,r){var n,s=this,a=r.rules[r.vid],l=a.method,o=a.params;r.rid=l,r.old.value=i.value,n=(u(i,l)||s.rules[l]||function(){return!0}).call(s,i,o,r),n!==t?e(i).trigger("validated.rule",[n,r]):s.isValid=!1},_checkField:function(e,t){return(t=t||this.getField(e))?(this._validate(e,t,!0),t.isValid):!0},_validate:function(i,r,n){var s,a,l=this,u=l.options,o=e(i),d={},c=r.group,f=I(i,x),g=r.isValid=!0;if(r&&r.rules&&!i.disabled&&!o.is("[novalidate]")){if(s=r.old=r.old||{},n=n||r.must,r.required||""!==i.value||c)if(!n&&s&&s.ret!==t&&s.value===i.value){if(s.ret.valid||(g=l.isValid=!1),"tip"===f)return;if(""!==i.value)return d=s.ret,o.trigger("validated.field",[r,d]),t}else c&&(e.extend(d,c),a=c.call(l),a===!0?(a=t,l.hideMsg(i,d)):(j(a)&&(a={error:a}),l.hideMsg(i),r.vid=0,r.rid="group",g=!1));else{if("tip"===f)return;if(l._focus({target:i}),s.value="",!o.is(":checkbox,:radio"))return o.trigger("validated.field",[r,{valid:!0}]),t}u.debug&&D.log(i),a!==t?o.trigger("validated.rule",[a,r,d]):r.rule&&l._checkRule(i,r)}},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,i.fields[t]},test:function(i,r){var n,s,a,l=O.exec(r);return l?(s=l[1],a=l[2]?e.trim(l[2]).split(", "):t,s in this.rules&&(n=this.rules[s].call(this,i,a)),n===!0||n===t||n):!0},getRangeMsg:function(e,t,i,r){if(t){var n=this,s=n.messages[i]||"",a=t[0].split("~"),l=a[0],u=a[1],o="rg",d=[""],c=+e===+e;if(2===a.length){if(l&&u){if(c&&e>=+l&&+u>=e)return!0;d=d.concat(a)}else if(l&&!u){if(c&&e>=+l)return!0;d.push(l),o="gt"}else if(!l&&u){if(c&&+u>=e)return!0;d.push(u),o="lt"}}else{if(e===+l)return!0;d.push(l),o="eq"}return s&&(r&&r+o in s&&(o=r+o),d[0]=s[o]),n.renderMsg.apply(null,d)}},_getMsgOpt:function(t){return e.extend({},this.msgOpt,j(t)?{msg:t}:t)},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},showMsg:function(t,i){i=this._getMsgOpt(i),(i.msg||i.showOk)&&(t=e(t).get(0),I(t,x,i.type),g(t,i,this.$el))},hideMsg:function(t,i){i=this._getMsgOpt(i),p(e(t).get(0),i,this.$el)},mapMsg:function(t){var i=this;e.each(t,function(t,r){var n=i.elements[t]||e(':input[name="'+t+'"]',i.$el)[0];i.showMsg(n,r)})},setMsg:function(e){new n(e,this.messages)},setRule:function(e){new r(e,this.rules)},setField:function(i,r){var n=this,s={};if(j(i)){if(null===r)return e.map(i.split(" "),function(e){e&&n.fields[e]&&(n.fields[e]=null)}),t;r&&(s[i]=r)}else N(i)&&(s=i);e.extend(!0,n.options.fields,s),n._init()},destroy:function(){this.$el.off().removeData(h)}},e(function(){e("body").on("focusin",":input[data-rule]",function(){l(this)?e(this).trigger("focusin"):e(this).removeAttr("data-rule")}).on("click submit","form:not([novalidate])",function(t){var i,r=e(this);r.data(h)||(i=r[h]().data(h),e.isEmptyObject(i.fields)?r.attr("novalidate",!0).removeData(h):"submit"===t.type&&i._submit(t))})}),new r({required:function(t){return!!e.trim(t.value)},integer:function(e,t){var i,r="0|",n="[1-9]\\d*",s=t?t[0]:"*";switch(s){case"+":i=n;break;case"-":i="-"+n;break;case"+0":i=r+n;break;case"-0":i=r+"-"+n;break;default:i=r+"-?"+n}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[s]},match:function(t,i){var r,n,s,a,l,u=t.value,o="eq";if(i&&(1===i.length?n=i[0]:(o=i[0],n=i[1]),a=e("#"===n.charAt(0)?n:':input[name="'+n+'"]',this.$el)[0]))switch(l=this.getField(a),s=this.messages.match[o].replace("{1}",l.display||n),r=a.value,o){case"lt":return+r>+u||s;case"lte":return+r>=+u||s;case"gte":return+u>=+r||s;case"gt":return+u>+r||s;default:return u===r||s}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i){if(!e(t).is(":radio,:checkbox"))return!0;var r=e('input[name="'+t.name+'"]',this.$el).filter(function(){return!this.disabled&&this.checked&&e(this).is(":visible")}).length;return i?this.getRangeMsg(r,i,"checked"):!!r||this.messages.required},length:function(e,t){var i=e.value,r=(t[1]?i.replace(A,"xx"):i).length;return t&&"~"===t[0].charAt(0)&&(t[0]="0"+t[0]),this.getRangeMsg(r,t,"length",t[1]?"2_":"")},remote:function(i,r,n){var s,a=this,l={},u=function(e){return j(e)||N(e)&&("error"in e||"ok"in e)?e:t};return r?(s=C.exec(r[0]),l[i.name]=i.value,r[1]&&e.map(r.slice(1),function(t){l[t]=e(':input[name="'+t+'"]',this.$el).val()}),a.showMsg(i,{type:"loading",msg:a.options.loadingMsg}),e.ajax({url:s[2],type:s[1]||"POST",data:l,cache:!1,complete:function(r,s){var a,l=r.responseText;""===l?l=!0:l||"error"!==s?"{"===l.charAt(0)&&(l=e.parseJSON(l)||{},a=u(l),a===t&&(a=u(l.data)),l=a||"success"===s):l="Net error",e(i).trigger("validated.rule",[l,n])}}),t):!0},filter:function(e,t){var i=t?RegExp("["+t[0]+"]","g"):T;return e.value=e.value.replace(i,""),!0}}),i.defaults=H,i.setTheme=function(t,i){N(t)?e.each(t,function(e,t){L[e]=t}):j(t)&&N(i)&&(L[t]=i)},i.config=function(t){e.each(t,function(e,t){"rules"===e?new r(t):"messages"===e?new n(t):H[e]=t})},e[h]=i}(jQuery);
