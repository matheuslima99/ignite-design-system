var E=Object.defineProperty;var o=(r,e)=>E(r,"name",{value:e,configurable:!0});import"./index.0931afed.js";import{c as u,A as N,M as S}from"./Props.c58b359b.js";import{j as x,a as P}from"./jsx-runtime.f761d169.js";import"./iframe.c92572ad.js";import{c as z}from"./index.20caee8e.js";import"./string.aa9e365f.js";import"./index.b42538a3.js";import"./es.map.constructor.52d0cd6d.js";import"./es.number.to-fixed.0c5466a3.js";function C(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}o(C,"_assertThisInitialized");function m(r,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():o(function(t,n){return t.__proto__=n,t},"_setPrototypeOf"),m(r,e)}o(m,"_setPrototypeOf");function D(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,m(r,e)}o(D,"_inheritsLoose");function F(r){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():o(function(a){return a.__proto__||Object.getPrototypeOf(a)},"_getPrototypeOf"),F(r)}o(F,"_getPrototypeOf");function L(r){return Function.toString.call(r).indexOf("[native code]")!==-1}o(L,"_isNativeFunction");function H(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}o(H,"_isNativeReflectConstruct");function v(r,e,a){return H()?v=Reflect.construct.bind():v=o(function(n,f,i){var s=[null];s.push.apply(s,f);var l=Function.bind.apply(n,s),d=new l;return i&&m(d,i.prototype),d},"_construct"),v.apply(null,arguments)}o(v,"_construct");function O(r){var e=typeof Map=="function"?new Map:void 0;return O=o(function(t){if(t===null||!L(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return v(t,arguments,F(this).constructor)}return o(n,"Wrapper"),n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,t)},"_wrapNativeSuper"),O(r)}o(O,"_wrapNativeSuper");var y=function(r){D(e,r);function e(a){var t;return t=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+a+" for more information.")||this,C(t)}return o(e,"PolishedError"),e}(O(Error));function k(r){return Math.round(r*255)}o(k,"colorToInt");function X(r,e,a){return k(r)+","+k(e)+","+k(a)}o(X,"convertToInt");function M(r,e,a,t){if(t===void 0&&(t=X),e===0)return t(a,a,a);var n=(r%360+360)%360/60,f=(1-Math.abs(2*a-1))*e,i=f*(1-Math.abs(n%2-1)),s=0,l=0,d=0;n>=0&&n<1?(s=f,l=i):n>=1&&n<2?(s=i,l=f):n>=2&&n<3?(l=f,d=i):n>=3&&n<4?(l=i,d=f):n>=4&&n<5?(s=i,d=f):n>=5&&n<6&&(s=f,d=i);var p=a-f/2,b=s+p,c=l+p,w=d+p;return t(b,c,w)}o(M,"hslToRgb");var R={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function B(r){if(typeof r!="string")return r;var e=r.toLowerCase();return R[e]?"#"+R[e]:r}o(B,"nameToHex");var G=/^#[a-fA-F0-9]{6}$/,K=/^#[a-fA-F0-9]{8}$/,U=/^#[a-fA-F0-9]{3}$/,W=/^#[a-fA-F0-9]{4}$/,I=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,J=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Q=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,V=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Y(r){if(typeof r!="string")throw new y(3);var e=B(r);if(e.match(G))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(K)){var a=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:a}}if(e.match(U))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(W)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var n=I.exec(e);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var f=J.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=Q.exec(e);if(i){var s=parseInt(""+i[1],10),l=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,p="rgb("+M(s,l,d)+")",b=I.exec(p);if(!b)throw new y(4,e,p);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var c=V.exec(e.substring(0,50));if(c){var w=parseInt(""+c[1],10),q=parseInt(""+c[2],10)/100,A=parseInt(""+c[3],10)/100,j="rgb("+M(w,q,A)+")",h=I.exec(j);if(!h)throw new y(4,e,j);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new y(5)}o(Y,"parseToRgb");function T(r){if(r==="transparent")return 0;var e=Y(r),a=Object.keys(e).map(function(i){var s=e[i]/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)}),t=a[0],n=a[1],f=a[2];return parseFloat((.2126*t+.7152*n+.0722*f).toFixed(3))}o(T,"getLuminance");function Z(r,e){var a=T(r),t=T(e);return parseFloat((a>t?(a+.05)/(t+.05):(t+.05)/(a+.05)).toFixed(2))}o(Z,"getContrast");function ee(){return Object.entries(z).map(([r,e])=>x("div",{children:x("div",{style:{backgroundColor:e,padding:"2rem"},children:P("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:Z(e,"#FFF")<=3.5?"#000":"#FFF"},children:[P("strong",{children:["$",r]}),x("span",{children:e})]})})},r))}o(ee,"ColorsGrid");function _(){return _=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},_.apply(this,arguments)}o(_,"_extends");const re={},te="wrapper";function $({components:r,...e}){return u(te,_({},re,e,{components:r,mdxType:"MDXLayout"}),u(S,{title:"Tokens/Colors",mdxType:"Meta"}),u("h1",null,"Colors"),u("p",null,"Essas s\xE3o as cores utilizadas no ignite UI."),u(ee,{mdxType:"ColorsGrid"}))}o($,"MDXContent");$.isMDXComponent=!0;const ae=o(()=>{throw new Error("Docs-only story")},"__page");ae.parameters={docsOnly:!0};const g={title:"Tokens/Colors",includeStories:["__page"]},ne={};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:()=>u(N,{mdxStoryNameToKey:ne,mdxComponentAnnotations:g},u($,null))};const ge=["__page"];export{ge as __namedExportsOrder,ae as __page,g as default};
//# sourceMappingURL=colors.stories.04bb2382.js.map
