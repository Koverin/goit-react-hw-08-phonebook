"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[960],{960:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(4270),u=t(9434),i=t(5280),o=t(2056),a=t(184),c=function(){var e=(0,u.I0)(),n=(0,u.v9)(i.NH);return(0,a.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,o.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},autoComplete:"off",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("label",{children:(0,a.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email"})})}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("label",{children:(0,a.jsx)("input",{type:"password",name:"password",required:!0,placeholder:"Password"})})}),(0,a.jsx)("button",{type:"submit",disabled:n,children:"Log In"})]})};function l(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.q,{children:(0,a.jsx)("title",{children:"Login"})}),(0,a.jsx)(c,{})]})}},5280:function(e,n,t){t.d(n,{F4:function(){return p},Af:function(){return l},AD:function(){return f},NH:function(){return s}});var r="NOT_FOUND";var u=function(e,n){return e===n};function i(e,n){var t="object"===typeof n?n:{equalityCheck:n},i=t.equalityCheck,o=void 0===i?u:i,a=t.maxSize,c=void 0===a?1:a,l=t.resultEqualityCheck,f=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(o),s=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:r},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(f):function(e,n){var t=[];function u(e){var u=t.findIndex((function(t){return n(e,t.key)}));if(u>-1){var i=t[u];return u>0&&(t.splice(u,1),t.unshift(i)),i.value}return r}return{get:u,put:function(n,i){u(n)===r&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,f);function p(){var n=s.get(arguments);if(n===r){if(n=e.apply(null,arguments),l){var t=s.getEntries(),u=t.find((function(e){return l(e.value,n)}));u&&(n=u.value)}s.put(arguments,n)}return n}return p.clearCache=function(){return s.clear()},p}function o(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function a(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var i,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=c,s=f.memoizeOptions,p=void 0===s?t:s,v=Array.isArray(p)?p:[p],d=o(r),m=e.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(v)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return i=m.apply(null,e)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:m,dependencies:d,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return u}var c=a(i),l=function(e){return e.contacts.items},f=function(e){return e.filter},s=function(e){return e.isLoading},p=c([l,f],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase().trim())}))}))}}]);
//# sourceMappingURL=960.1f4b6d38.chunk.js.map