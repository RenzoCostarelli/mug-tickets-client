(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{57455:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(46750),a=r(40431),o=r(86006),i=r(63831),l=r(47562),s=r(95457),c=r(18006),d=r(46975),u=r(9268),p=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(88539),h=r(13809);function v(e){return(0,h.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,l.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},v,t)},b=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),y=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,s.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),x=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:d,component:p="div",imgProps:m,sizes:h,src:v,srcSet:x,variant:k="circular"}=r,w=(0,n.Z)(r,g),C=null,M=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){let[a,i]=o.useState(!1);return o.useEffect(()=>{if(!r&&!n)return;i(!1);let a=!0,o=new Image;return o.onload=()=>{a&&i("loaded")},o.onerror=()=>{a&&i("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,n&&(o.srcset=n),()=>{a=!1}},[e,t,r,n]),a}((0,a.Z)({},m,{src:v,srcSet:x})),$=v||x,S=$&&"error"!==M,j=(0,a.Z)({},r,{colorDefault:!S,component:p,variant:k}),R=f(j);return C=S?(0,u.jsx)(y,(0,a.Z)({alt:l,src:v,srcSet:x,sizes:h,ownerState:j,className:R.img},m)):null!=s?s:$&&l?l[0]:(0,u.jsx)(Z,{ownerState:j,className:R.fallback}),(0,u.jsx)(b,(0,a.Z)({as:p,ownerState:j,className:(0,i.Z)(R.root,d),ref:t},w,{children:C}))});var k=x},79715:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(46750),a=r(40431),o=r(86006),i=r(63831),l=r(47562),s=r(23343),c=r(95457),d=r(18006),u=r(22879),p=r(73569),m=r(76837),h=r(84414),v=r(88539);let g=(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),f=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),b=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var y=r(13809);function Z(e){return(0,y.Z)("MuiMenuItem",e)}let x=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var k=r(9268);let w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],C=(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]},M=e=>{let{disabled:t,dense:r,divider:n,disableGutters:o,selected:i,classes:s}=e,c=(0,l.Z)({root:["root",r&&"dense",t&&"disabled",!o&&"gutters",n&&"divider",i&&"selected"]},Z,s);return(0,a.Z)({},s,c)},$=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:C})(({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.inset}`]:{marginLeft:52},[`& .${b.root}`]:{marginTop:0,marginBottom:0},[`& .${b.inset}`]:{paddingLeft:36},[`& .${f.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${f.root} svg`]:{fontSize:"1.25rem"}}))),S=o.forwardRef(function(e,t){let r;let l=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:v=!1,disableGutters:g=!1,focusVisibleClassName:f,role:b="menuitem",tabIndex:y,className:Z}=l,x=(0,n.Z)(l,w),C=o.useContext(u.Z),S=o.useMemo(()=>({dense:p||C.dense||!1,disableGutters:g}),[C.dense,p,g]),j=o.useRef(null);(0,m.Z)(()=>{s&&j.current&&j.current.focus()},[s]);let R=(0,a.Z)({},l,{dense:S.dense,divider:v,disableGutters:g}),P=M(l),O=(0,h.Z)(j,t);return l.disabled||(r=void 0!==y?y:-1),(0,k.jsx)(u.Z.Provider,{value:S,children:(0,k.jsx)($,(0,a.Z)({ref:O,role:b,tabIndex:r,component:c,focusVisibleClassName:(0,i.Z)(P.focusVisible,f),className:(0,i.Z)(P.root,Z)},x,{ownerState:R,classes:P}))})});var j=S},25549:function(e,t,r){Promise.resolve().then(r.bind(r,92473)),Promise.resolve().then(r.t.bind(r,48984,23)),Promise.resolve().then(r.t.bind(r,15408,23)),Promise.resolve().then(r.bind(r,56119))},56119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(9268),a=r(2516),o=r(47931),i=r(65521),l=r(79715),s=r(24493),c=r(95457),d=r(18006);let u=(0,s.Z)({createStyledComponent:(0,c.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,d.Z)({props:e,name:"MuiStack"})});var p=r(46750),m=r(40431),h=r(86006),v=r(63831),g=r(86601),f=r(47562),b=r(78473),y=r(88539),Z=r(13809);function x(e){return(0,Z.Z)("MuiTypography",e)}(0,y.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);let k=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],w=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:a,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,b.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,f.Z)(l,x,i)},C=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,b.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,m.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),M={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=e=>$[e]||e,j=h.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiTypography"}),a=S(r.color),o=(0,g.Z)((0,m.Z)({},r,{color:a})),{align:i="inherit",className:l,component:s,gutterBottom:c=!1,noWrap:u=!1,paragraph:h=!1,variant:f="body1",variantMapping:b=M}=o,y=(0,p.Z)(o,k),Z=(0,m.Z)({},o,{align:i,color:a,className:l,component:s,gutterBottom:c,noWrap:u,paragraph:h,variant:f,variantMapping:b}),x=s||(h?"p":b[f]||M[f])||"span",$=w(Z);return(0,n.jsx)(C,(0,m.Z)({as:x,ref:t,ownerState:Z,className:(0,v.Z)($.root,l)},y))});var R=r(57455),P=r(91724),O=r(84414);function D(e){return(0,Z.Z)("MuiLink",e)}let A=(0,y.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var B=r(95247),I=r(23343);let F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},N=e=>F[e]||e,_=({theme:e,ownerState:t})=>{let r=N(t.color),n=(0,B.DW)(e,`palette.${r}`,!1)||t.color,a=(0,B.DW)(e,`palette.${r}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,I.Fq)(n,.4)},T=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],W=e=>{let{classes:t,component:r,focusVisible:n,underline:a}=e,o={root:["root",`underline${(0,b.Z)(a)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,f.Z)(o,D,t)},L=(0,c.ZP)(j,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`underline${(0,b.Z)(r.underline)}`],"button"===r.component&&t.button]}})(({theme:e,ownerState:t})=>(0,m.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,m.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:_({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${A.focusVisible}`]:{outline:"auto"}})),V=h.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiLink"}),{className:a,color:o="primary",component:i="a",onBlur:l,onFocus:s,TypographyClasses:c,underline:u="always",variant:g="inherit",sx:f}=r,b=(0,p.Z)(r,T),{isFocusVisibleRef:y,onBlur:Z,onFocus:x,ref:k}=(0,P.Z)(),[w,C]=h.useState(!1),M=(0,O.Z)(t,k),$=e=>{Z(e),!1===y.current&&C(!1),l&&l(e)},S=e=>{x(e),!0===y.current&&C(!0),s&&s(e)},j=(0,m.Z)({},r,{color:o,component:i,focusVisible:w,underline:u,variant:g}),R=W(j);return(0,n.jsx)(L,(0,m.Z)({color:o,className:(0,v.Z)(R.root,a),classes:c,component:i,onBlur:$,onFocus:S,ref:M,ownerState:j,variant:g,sx:[...Object.keys(F).includes(o)?[]:[{color:o}],...Array.isArray(f)?f:[f]]},b))});var z=r(34751),q=r(93626);function E(){var e,t;let{data:r}=(0,z.useSession)(),a=null==r?void 0:r.user.image,[s,c]=(0,h.useState)(null),d=!!s,p=e=>{c(e.currentTarget)},m=()=>{c(null)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{id:"basic-button","aria-controls":d?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,onClick:p,children:"Perfil"}),(0,n.jsxs)(i.Z,{id:"basic-menu",anchorEl:s,open:d,onClose:m,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,n.jsx)(l.Z,{disabled:!0,children:(0,n.jsxs)(u,{direction:"row",spacing:2,children:[(0,n.jsx)(j,{style:{},component:"span",children:null==r?void 0:null===(e=r.user)||void 0===e?void 0:e.email}),(0,n.jsx)(R.Z,{sx:{width:24,height:24},src:a,alt:null==r?void 0:null===(t=r.user)||void 0===t?void 0:t.name})]})}),(0,n.jsx)(l.Z,{component:V,href:"/admin/",children:"Dashboard"}),(0,n.jsx)(l.Z,{component:V,href:"/admin/eventos",children:"Eventos"}),(0,n.jsx)(l.Z,{component:V,href:"/admin/validar",children:"Qr Scan"}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(q.Z,{})})]})]})}(0,a.Z)({palette:{mode:"dark"}})},93626:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(9268),a=r(47931),o=r(34751);function i(){return(0,n.jsx)(a.Z,{variant:"outlined",fullWidth:!0,onClick:()=>(0,o.signOut)(),children:"Sign out"})}},15408:function(e){e.exports={nav_bar:"nav-bar_nav_bar__wZYo3",links:"nav-bar_links__8wd3n"},e.exports.__checksum="5f9e266652dd"},92473:function(e,t,r){"use strict";r.r(t),t.default="282c841a4d9e"}},function(e){e.O(0,[751,497,773,493,431,202,984,667,139,744],function(){return e(e.s=25549)}),_N_E=e.O()}]);