"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{60521:function(e,t){function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},90414:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(26927),o=r._(n(86006)),l=n(74495),u=n(90757),f=n(30330),a=n(57707),i=n(5271),c=n(28923),s=n(96996),d=n(56723),p=n(60521),y=n(20325),b=n(80245),h=new Set;function v(e,t,n,r,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}let f=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function g(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let _=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:h,children:_,prefetch:m=null,passHref:C,replace:k,shallow:M,scroll:P,locale:j,onClick:O,onMouseEnter:E,onTouchStart:L,legacyBehavior:x=!1,...R}=e;n=_,x&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let w=!1!==m,I=null===m?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,T=o.default.useContext(c.RouterContext),S=o.default.useContext(s.AppRouterContext),U=null!=T?T:S,K=!T,{href:A,as:D}=o.default.useMemo(()=>{if(!T){let e=g(f);return{href:e,as:h?g(h):e}}let[e,t]=(0,l.resolveHref)(T,f,!0);return{href:e,as:h?(0,l.resolveHref)(T,h):t||e}},[T,f,h]),N=o.default.useRef(A),H=o.default.useRef(D);x&&(r=o.default.Children.only(n));let q=x?r&&"object"==typeof r&&r.ref:t,[z,B,F]=(0,d.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(H.current!==D||N.current!==A)&&(F(),H.current=D,N.current=A),z(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[D,q,A,F,z]);o.default.useEffect(()=>{U&&B&&w&&v(U,A,D,{locale:j},{kind:I},K)},[D,A,B,j,w,null==T?void 0:T.locale,U,K,I]);let J={ref:G,onClick(e){x||"function"!=typeof O||O(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,n,r,l,f,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:f,locale:i,scroll:a}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};c?o.default.startTransition(y):y()}(e,U,A,D,k,M,P,j,K,w)},onMouseEnter(e){x||"function"!=typeof E||E(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),U&&(w||!K)&&v(U,A,D,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:I},K)},onTouchStart(e){x||"function"!=typeof L||L(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),U&&(w||!K)&&v(U,A,D,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:I},K)}};if((0,a.isAbsoluteUrl)(D))J.href=D;else if(!x||C||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,p.getDomainLocale)(D,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);J.href=t||(0,y.addBasePath)((0,i.addLocale)(D,e,null==T?void 0:T.defaultLocale))}return x?o.default.cloneElement(r,J):o.default.createElement("a",{...R,...J},n)}),m=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},56723:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(86006),o=n(30408),l="function"==typeof IntersectionObserver,u=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!l,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},f.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]);let y=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);