!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,r,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function x(e){return c=e,f=setTimeout(h,t),s?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function h(){var e=p();if(S(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,d&&i?y(e):(i=r=void 0,u)}function w(){var e=p(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return x(l);if(m)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},w.flush=function(){return void 0===f?u:O(p())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var x={form:document.querySelector(".feedback-form"),input:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]')},S="feedback-form-state",h={email:"",message:""};function O(e){h.email=x.input.value,h.message=x.textarea.value,localStorage.setItem(S,JSON.stringify(h))}(function(){var e=localStorage.getItem(S);try{var t=JSON.parse(e);h.email=t.email,h.message=t.message}catch(e){h.email="",h.message="",console.log(e.name),console.log(e.message)}})(),x.input.value=null!==h.email&&""!==h.email?h.email:"",x.textarea.value=null!==h.message&&""!==h.message?h.message:"",x.input.addEventListener("input",e(t)(O,500)),x.textarea.addEventListener("input",e(t)(O,500)),x.form.addEventListener("submit",(function(e){e.preventDefault(),O(),console.log(h),localStorage.removeItem(S),x.form.reset()}))}();
//# sourceMappingURL=03-feedback.d3cecb70.js.map
