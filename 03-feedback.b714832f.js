!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(w,t),s?y(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(O(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return u=void 0,m&&o?y(e):(o=i=void 0,f)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(d)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),f}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},T.flush=function(){return void 0===u?f:S(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||u.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form")},O="feedback-form-state",w={};(function(){var e=localStorage.getItem(O);try{w=JSON.parse(e)}catch(e){w.email="",w.message="",console.log(e.name),console.log(e.message)}})(),j.form.email.value=w.email||"",j.form.message.value=w.message||"",j.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(O),this.reset()})),j.form.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w))}),500))}();
//# sourceMappingURL=03-feedback.b714832f.js.map
