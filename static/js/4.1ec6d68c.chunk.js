(this["webpackJsonpseng471-cada"]=this["webpackJsonpseng471-cada"]||[]).push([[4],{572:function(t,e,n){"use strict";n.r(e);var r,a,c=n(22),o=(n(0),n(19)),i=n(641),s=n(88),l=n(712),u=n(689),b=n(651),j=n(664),d=n(55),p=n(71),O=n(716),f=n(233),h=n(652),m=n(28),g=n(715),v=n(662),x=n(661),w=n(5),C=Object(o.c)(p.p)(r||(r=Object(c.a)(["\n\tfont-size: 3rem;\n\tmargin-left: 10px;\n"]))),R=u.a().shape({email:u.c().email().label("Email").required(),password:u.c().label("Password").required()}),k=Object(o.c)(j.a)(a||(a=Object(c.a)(["\n\t","\n"])),(function(t){var e=t.theme;return"\n\t\tbackground-color: ".concat(e.palette.background.level2,";\n\t")})),P=function(t){var e=t.location,n=t.error,r=t.authorizing,a=Object(f.a)().emailLogin,c=null===e||void 0===e?void 0:e.search.replace("?returnUrl=","");return Object(w.jsxs)(b.a,{horizontal:!0,vertical:!0,children:[r&&Object(w.jsxs)(i.a,{container:!0,alignItems:"center",justify:"center",children:[Object(w.jsx)(s.a,{variant:"h3",component:"h1",children:n?"AUTHENTICATION FAILED":"AUTHENTICATING"}),n&&Object(w.jsx)(C,{})||Object(w.jsx)(d.a,{})]})||Object(w.jsx)(O.a,{children:Object(w.jsxs)(k,{padding:"80px",children:[Object(w.jsx)(h.a,{direction:"top",spacing:"4"}),Object(w.jsxs)(b.a,{children:[Object(w.jsx)(s.a,{component:"h1",variant:"h5",children:"Login"}),Object(w.jsx)(h.a,{direction:"top",spacing:"2"})]}),Object(w.jsx)(v.b,{items:[{type:v.a.TEXT,label:"Email",name:"email",required:!0},{type:v.a.PASSWORD,label:"Password",name:"password",required:!0}],schema:R,onSubmit:function(t){return a(t)},submitText:"Login"}),Object(w.jsx)(h.a,{direction:"bottom",spacing:"4"}),Object(w.jsx)(b.a,{children:Object(w.jsxs)(s.a,{component:"span",children:["Don't have an account yet? You can sign up"," ",Object(w.jsxs)(s.a,{component:g.a,to:"".concat(m.a,"/signup?returnUrl=").concat(c),children:[" ","here"," "]}),"."]})}),Object(w.jsx)(h.a,{direction:"bottom",spacing:"4"})]})}),n&&Object(w.jsxs)(i.a,{children:[Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{}),Object(w.jsx)("br",{}),Object(w.jsx)(s.a,{children:n}),Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{})]})]})};P.defaultProps=x.a,e.default=P},651:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r,a=n(7),c=n(33),o=n(22),i=(n(0),n(19)),s=n(641),l=n(4),u=(l.node,l.bool,l.bool,n(5)),b=Object(i.c)(s.a)(r||(r=Object(o.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t","\n"])),(function(t){var e=t.$horizontal,n=t.$vertical;return"\n\t\t".concat(e&&"justify-content: center;","\n\t\t").concat(n&&"height: 100%; align-items: center;","\n\t")})),j=function(t){var e=t.children,n=t.horizontal,r=t.vertical,o=Object(c.a)(t,["children","horizontal","vertical"]);return Object(u.jsx)(b,Object(a.a)(Object(a.a)({$horizontal:n,$vertical:r},o),{},{children:e}))};j.defaultProps={children:"",horizontal:!0,vertical:!1};var d=j},652:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(0);var r,a=n(22),c=n(19).c.span(r||(r=Object(a.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\t","\n"])),(function(t){var e=t.theme,n=t.$direction,r=t.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(e.spacing(r),"px;\n\t")})),o=n(42),i=(o.c.isRequired,o.g,n(5)),s=function(t){var e=t.direction,n=t.spacing;return Object(i.jsx)(c,{$direction:e,$spacing:"string"===typeof n&&parseInt(n,10)||n})};s.defaultProps={spacing:1};var l=s},656:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r,a=n(7),c=n(33),o=n(22),i=n(0),s=n(19),l=n(668),u=n(224),b=n(71),j=n(72),d=n(69),p=n(4),O=(p.string,p.func.isRequired,n(5)),f=Object(s.c)(b.d)(r||(r=Object(o.a)(["\n\tmargin-left: -2px;\n\t",";\n"])),(function(t){var e=t.theme,n=t.$bg,r=t.$size;return n&&"\n\t\t\t\t// & .MuiSvgIcon-root {\n\n\t\t\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t\t\t\twidth: ").concat(r,"px;\n\t\t\t\t\theight: ").concat(r,"px;\n\t\t\t\t\tfill: ").concat(n," !important;\n\t\t\t\t\tcolor: ").concat(n," !important;\n\t\t\t\t\tbackground-color: ").concat(n," !important;\n\t\t\t\t// }\n\t\t")||""})),h=Object(i.forwardRef)((function(t,e){var n=t.color,r=t.onColorChange,o=t.size,i=void 0===o?20:o,s=Object(c.a)(t,["color","onColorChange","size"]);return Object(O.jsx)(u.a,{buttonComponent:Object(O.jsx)(j.a,{tooltip:"Pick a color",onClick:function(t){t()},icon:Object(O.jsx)(f,{$size:i,$bg:n})}),component:Object(O.jsx)(l.a,Object(a.a)(Object(a.a)({colors:[d.b,d.c,"#f44336","#ff9800","#2196f3","#4caf50"],color:n,onChangeComplete:function(t){return r(t.hex)}},s),{},{ref:e})),passCallback:!0})}));h.defaultProps={color:""};var m=h},661:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(4),a=(Object(r.shape)({search:r.string,state:Object(r.shape)({referrer:r.string,to:r.string})}).isRequired,r.string,{error:""});Object(r.shape)({params:Object(r.shape)({id:r.string.isRequired})})},662:function(t,e,n){"use strict";n.d(e,"b",(function(){return L})),n.d(e,"a",(function(){return S}));var r,a=n(7),c=n(33),o=n(0),i=n(773),s=n(641),l=n(677),u=n(681),b=n(651),j=n(72),d=n(652),p=n(59),O=n(22),f=n(19),h=n(774),m=Object(f.c)(h.a)(r||(r=Object(O.a)(["\n\t","\n"])),(function(t){var e=t.theme;return"\n\t\tmargin-bottom: ".concat(e.spacing(2),"px;\n\t")})),g=n(5),v=Object(o.forwardRef)((function(t,e){return Object(g.jsx)(m,Object(a.a)(Object(a.a)({type:"password"},t),{},{ref:e}))})),x=n(772),w=n(646),C=n(4),R=Object(o.forwardRef)((function(t,e){var n=t.label,r=Object(c.a)(t,["label"]);return Object(g.jsx)(x.a,{control:Object(g.jsx)(w.a,Object(a.a)(Object(a.a)({color:"primary"},r),{},{ref:e})),label:n})}));R.propTypes={label:C.string.isRequired};var k=R,P=n(656),y=Object(o.forwardRef)((function(t,e){var n=t.label,r=Object(c.a)(t,["label"]);return Object(g.jsx)(x.a,{control:Object(g.jsx)(P.a,Object(a.a)(Object(a.a)({},r),{},{ref:e})),label:n})}));y.propTypes={label:C.string.isRequired};var E,T=y,S={TEXT:"text",PASSWORD:"password",CHECKBOX:"checkbox",COLOR_PICKER:"colorPicker"},$=S.TEXT,q=S.PASSWORD,I=S.CHECKBOX,z=S.COLOR_PICKER,A=(E={},Object(p.a)(E,$,m),Object(p.a)(E,q,v),Object(p.a)(E,I,k),Object(p.a)(E,z,T),E),L=function(t){var e=t.items,n=t.schema,r=t.onSubmit,p=t.defaultValues,O=t.pending,f=void 0!==O&&O,h=t.submitText,m=void 0===h?"Submit":h,v=t.ignoreAutocomplete,x=void 0!==v&&v,w=Object(c.a)(t,["items","schema","onSubmit","defaultValues","pending","submitText","ignoreAutocomplete"]),C=Object(l.c)({resolver:Object(u.a)(n),defaultValues:p}),R=C.control,k=C.handleSubmit,P=C.errors,y=Object(o.useRef)({});Object(o.useEffect)((function(){e.forEach((function(t){var e=t.name;y.current[e]=Object(o.createRef)()}))}),[e]);return Object(o.useEffect)((function(){})),Object(g.jsxs)("form",Object(a.a)(Object(a.a)({onSubmit:k(r,(function(t){var e=Object.keys(t);if(e.length){var n,r,a=e[0];if(null===(n=y.current)||void 0===n||null===(r=n[a])||void 0===r?void 0:r.current)return void y.current[a].current.focus();setTimeout((function(){var t,e,n;null===(t=y.current)||void 0===t||null===(e=t[a])||void 0===e||null===(n=e.current)||void 0===n||n.focus()}),100)}})),noValidate:!0,autoComplete:"off"},w),{},{children:[Object(g.jsx)(d.a,{direction:"bottom",spacing:"2"}),e.map((function(t,e){var n=t.type,r=t.name,o=t.label,s=t.required,u=void 0!==s&&s,b=t.defaultValue,j=void 0===b?"":b,d=t.variant,p=void 0===d?"outlined":d,O=t.ignoreAutocomplete,f=void 0===O?x:O,h=Object(c.a)(t,["type","name","label","required","defaultValue","variant","ignoreAutocomplete"]),m=A[n],v=y.current[r],w={};n===S.CHECKBOX?w.render=function(t){return Object(g.jsx)(m,{onChange:function(e){return t.onChange(e.target.checked)},checked:t.value,label:o})}:n===S.COLOR_PICKER?w.render=function(t){var e=t.value,n=t.onChange;return Object(g.jsx)(m,{color:e,onColorChange:n,label:o})}:w.as=Object(g.jsx)(m,Object(a.a)(Object(a.a)({},0===e&&{autoFocus:!0}),{},{inputRef:v}));var C=Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({control:R,defaultValue:j,name:r,label:o},p&&{variant:p}),u&&function(t){var e={required:!0,rules:{required:!0}},n=P[t];return n&&(e.helperText="".concat(n.message),e.error=!0),e}(r)),w),h);return f&&(C.inputProps=Object(a.a)(Object(a.a)({},w.inputProps||{}),{},{autoComplete:"ignore"})),Object(g.jsx)(i.a,{children:Object(g.jsx)(l.a,Object(a.a)({},C))},r)})),Object(g.jsx)("input",{hidden:!0}),Object(g.jsx)(d.a,{direction:"bottom",spacing:"2"}),Object(g.jsx)(b.a,{container:!0,children:Object(g.jsx)(s.a,{container:!0,justify:"center",item:!0,xs:12,sm:8,md:6,children:Object(g.jsx)(j.a,{tooltip:m,text:m,type:"submit",fullWidth:!0,bg:"primary",variant:"contained",loading:f})})})]}))}},664:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r,a,c=n(7),o=n(89),i=n(33),s=n(22),l=n(0),u=n(335),b=n(775),j=n(19),d=n(651),p=n(4),O=(p.object,p.object,p.bool,n(5)),f=Object(j.c)(u.a)(r||(r=Object(s.a)(["\n\twidth: 100%;\n\ttext-align: left;\n\t","\n"])),(function(t){var e,n=t.theme,r=t.$bg;return"\n\t\t// margin-bottom: ".concat(n.spacing(2),"px;\n\t\tbackground-color: ").concat(r&&((null===(e=n.palette[r])||void 0===e?void 0:e.main)||n.palette.background[r]||r)||n.palette.background.paper,";\n\t")})),h=j.c.div(a||(a=Object(s.a)(["\n\t","\n"])),(function(t){var e=t.theme;return"\n\t\t& * {\n\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t}\n\t")})),m=function(t){var e=t.containerProps,n=t.paperProps,r=t.noBg,a=Object(i.a)(t,["containerProps","paperProps","noBg"]),s=Object(l.useState)(!1),u=Object(o.a)(s,2),j=u[0],p=u[1],m=Object(O.jsx)(b.a,Object(c.a)({py:2,px:4,textAlign:"left"},a));return Object(O.jsx)(d.a,Object(c.a)(Object(c.a)({},e),{},{children:r&&Object(O.jsx)(h,{children:m})||Object(O.jsx)(f,Object(c.a)(Object(c.a)({elevation:j?3:1,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},n),{},{children:m}))}))};m.defaultProps={containerProps:{},paperProps:{},noBg:!1};var g=m},712:function(t,e,n){"use strict";var r=n(3),a=n(6),c=n(0),o=(n(4),n(8)),i=n(9),s=n(18),l=c.forwardRef((function(t,e){var n=t.absolute,i=void 0!==n&&n,s=t.classes,l=t.className,u=t.component,b=void 0===u?"hr":u,j=t.flexItem,d=void 0!==j&&j,p=t.light,O=void 0!==p&&p,f=t.orientation,h=void 0===f?"horizontal":f,m=t.role,g=void 0===m?"hr"!==b?"separator":void 0:m,v=t.variant,x=void 0===v?"fullWidth":v,w=Object(a.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(b,Object(r.a)({className:Object(o.a)(s.root,l,"fullWidth"!==x&&s[x],i&&s.absolute,d&&s.flexItem,O&&s.light,"vertical"===h&&s.vertical),role:g,ref:e},w))}));e.a=Object(i.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},715:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r,a=n(7),c=n(33),o=n(22),i=(n(0),n(88)),s=n(68),l=n(19),u=n(4),b=(u.string.isRequired,u.bool,u.bool,n(5)),j=Object(l.c)(i.a)(r||(r=Object(o.a)(["\n\t","\n"])),(function(t){var e=t.theme,n=t.$arrow,r=t.$color;return"\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\tcolor: ".concat(r||e.palette.primary.main,";\n\t\ttext-decoration: none;\n\t\t").concat(n?"\n\t\t\t\t\t&::after {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tmargin-left: 5px;\n\t\t\t\t\t\ttransition: margin 0.25s ease-out;\n\t\t\t\t\t\tcontent: '\u2192';\n\t\t\t\t\t}\n\t\t\t\t\t&:hover::after {\n\t\t\t\t\t\tmargin-left: 10px;\n\t\t\t\t\t}\n\t\t\t\t":"","\n\t\t\t\t\n\n\t\t&::before {\n\t\t\tposition: absolute;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 1.5px;\n\t\t\tbackground-color: ").concat(r||e.palette.primary.main,";\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: bottom right;\n\t\t\ttransition: transform 0.25s ease-out;\n\t\t\tcontent: '';\n\t\t}\n\t\t&:hover::before {\n\t\t\theight: 1.5px;\n\t\t\ttransform: scaleX(1);\n\t\t\ttransform-origin: bottom left;\n\t\t}\n\t")})),d=function(t){var e=t.external,n=t.to,r=t.arrow,o=Object(c.a)(t,["external","to","arrow"]);return Object(b.jsx)(j,Object(a.a)(Object(a.a)({$arrow:r},e&&{component:"a",href:n,target:"_blank"}||{to:n,component:s.b}),o))};d.defaultProps={external:!1,arrow:!1};var p=d},716:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r,a,c=n(7),o=n(22),i=(n(0),n(19)),s=n(5),l=i.c.div(r||(r=Object(o.a)(["\n\twidth: 100%;\n"]))),u=i.c.div(a||(a=Object(o.a)(["\n\tmargin: auto;\n\twidth: 90%;\n\t","\n"])),(function(t){var e=t.theme;return"\n\t\t".concat(e.breakpoints.up("sm")," {\n\t\t\twidth: 70%;\n\t\t}\n\t\t").concat(e.breakpoints.up("md")," {\n\t\t\twidth: 50%;\n\t\t}\n\t\t").concat(e.breakpoints.up("lg")," {\n\t\t\twidth: 50%;\n\t\t}\n\t")})),b=function(t){return Object(s.jsx)(l,{children:Object(s.jsx)(u,Object(c.a)({},t))})}}}]);
//# sourceMappingURL=4.1ec6d68c.chunk.js.map