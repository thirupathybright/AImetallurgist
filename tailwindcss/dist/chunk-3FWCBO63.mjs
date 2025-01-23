import{a as v}from"./chunk-AZANAYY2.mjs";var U=new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen","transparent","currentcolor","canvas","canvastext","linktext","visitedtext","activetext","buttonface","buttontext","buttonborder","field","fieldtext","highlight","highlighttext","selecteditem","selecteditemtext","mark","marktext","graytext","accentcolor","accentcolortext"]),O=/^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;function S(e){return e.charCodeAt(0)===35||O.test(e)||U.has(e.toLowerCase())}var k=["calc","min","max","clamp","mod","rem","sin","cos","tan","asin","acos","atan","atan2","pow","sqrt","hypot","log","exp","round"],b=["anchor-size"],A=new RegExp(`(${b.join("|")})\\(`,"g");function h(e){return e.indexOf("(")!==-1&&k.some(r=>e.includes(`${r}(`))}function ie(e){if(!k.some(n=>e.includes(n)))return e;let r=!1;b.some(n=>e.includes(n))&&(A.lastIndex=0,e=e.replace(A,(n,o)=>(r=!0,`$${b.indexOf(o)}$(`)));let t="",i=[];for(let n=0;n<e.length;n++){let o=e[n];if(o==="("){t+=o;let m=n;for(let c=n-1;c>=0;c--){let x=e.charCodeAt(c);if(x>=48&&x<=57)m=c;else if(x>=97&&x<=122)m=c;else break}let a=e.slice(m,n);if(k.includes(a)){i.unshift(!0);continue}else if(i[0]&&a===""){i.unshift(!0);continue}i.unshift(!1);continue}else if(o===")")t+=o,i.shift();else if(o===","&&i[0]){t+=", ";continue}else{if(o===" "&&i[0]&&t[t.length-1]===" ")continue;if((o==="+"||o==="*"||o==="/"||o==="-")&&i[0]){let m=t.trimEnd(),a=m[m.length-1];if(a==="+"||a==="*"||a==="/"||a==="-"){t+=o;continue}else if(a==="("||a===","){t+=o;continue}else e[n-1]===" "?t+=`${o} `:t+=` ${o} `}else if(i[0]&&e.startsWith("to-zero",n)){let m=n;n+=7,t+=e.slice(m,n+1)}else t+=o}}return r?t.replace(/\$(\d+)\$/g,(n,o)=>b[o]??n):t}var y=new Uint8Array(256);function u(e,r){let t=0,i=[],n=0,o=e.length,m=r.charCodeAt(0);for(let a=0;a<o;a++){let c=e.charCodeAt(a);if(t===0&&c===m){i.push(e.slice(n,a)),n=a+1;continue}switch(c){case 92:a+=1;break;case 39:case 34:for(;++a<o;){let x=e.charCodeAt(a);if(x===92){a+=1;continue}if(x===c)break}break;case 40:y[t]=41,t++;break;case 91:y[t]=93,t++;break;case 123:y[t]=125,t++;break;case 93:case 125:case 41:t>0&&c===y[t-1]&&t--;break}}return i.push(e.slice(n)),i}var R={color:S,length:C,percentage:E,ratio:j,number:M,integer:p,url:z,position:Q,"bg-size":X,"line-width":D,image:$,"family-name":P,"generic-name":H,"absolute-size":q,"relative-size":B,angle:ee,vector:re};function pe(e,r){if(e.startsWith("var("))return null;for(let t of r)if(R[t]?.(e))return t;return null}var _=/^url\(.*\)$/;function z(e){return _.test(e)}function D(e){return e==="thin"||e==="medium"||e==="thick"}var F=/^(?:element|image|cross-fade|image-set)\(/,I=/^(repeating-)?(conic|linear|radial)-gradient\(/;function $(e){let r=0;for(let t of u(e,","))if(!t.startsWith("var(")){if(z(t)){r+=1;continue}if(I.test(t)){r+=1;continue}if(F.test(t)){r+=1;continue}return!1}return r>0}function H(e){return e==="serif"||e==="sans-serif"||e==="monospace"||e==="cursive"||e==="fantasy"||e==="system-ui"||e==="ui-serif"||e==="ui-sans-serif"||e==="ui-monospace"||e==="ui-rounded"||e==="math"||e==="emoji"||e==="fangsong"}function P(e){let r=0;for(let t of u(e,",")){let i=t.charCodeAt(0);if(i>=48&&i<=57)return!1;t.startsWith("var(")||(r+=1)}return r>0}function q(e){return e==="xx-small"||e==="x-small"||e==="small"||e==="medium"||e==="large"||e==="x-large"||e==="xx-large"||e==="xxx-large"}function B(e){return e==="larger"||e==="smaller"}var g=/[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/,W=new RegExp(`^${g.source}$`);function M(e){return W.test(e)||h(e)}var G=new RegExp(`^${g.source}%$`);function E(e){return G.test(e)||h(e)}var V=new RegExp(`^${g.source}s*/s*${g.source}$`);function j(e){return V.test(e)||h(e)}var K=["cm","mm","Q","in","pc","pt","px","em","ex","ch","rem","lh","rlh","vw","vh","vmin","vmax","vb","vi","svw","svh","lvw","lvh","dvw","dvh","cqw","cqh","cqi","cqb","cqmin","cqmax"],Y=new RegExp(`^${g.source}(${K.join("|")})$`);function C(e){return Y.test(e)||h(e)}function Q(e){let r=0;for(let t of u(e," ")){if(t==="center"||t==="top"||t==="right"||t==="bottom"||t==="left"){r+=1;continue}if(!t.startsWith("var(")){if(C(t)||E(t)){r+=1;continue}return!1}}return r>0}function X(e){let r=0;for(let t of u(e,",")){if(t==="cover"||t==="contain"){r+=1;continue}let i=u(t," ");if(i.length!==1&&i.length!==2)return!1;if(i.every(n=>n==="auto"||C(n)||E(n))){r+=1;continue}}return r>0}var J=["deg","rad","grad","turn"],Z=new RegExp(`^${g.source}(${J.join("|")})$`);function ee(e){return Z.test(e)}var te=new RegExp(`^${g.source} +${g.source} +${g.source}$`);function re(e){return te.test(e)}function p(e){let r=Number(e);return Number.isInteger(r)&&r>=0&&String(r)===String(e)}function ge(e){return N(e,.25)}function ue(e){return N(e,.25)}function N(e,r){let t=Number(e);return t>=0&&t%r===0&&String(t)===String(e)}function f(e){return{__BARE_VALUE__:e}}var l=f(e=>{if(p(e.value))return e.value}),s=f(e=>{if(p(e.value))return`${e.value}%`}),d=f(e=>{if(p(e.value))return`${e.value}px`}),T=f(e=>{if(p(e.value))return`${e.value}ms`}),w=f(e=>{if(p(e.value))return`${e.value}deg`}),ne=f(e=>{if(e.fraction===null)return;let[r,t]=u(e.fraction,"/");if(!(!p(r)||!p(t)))return e.fraction}),L=f(e=>{if(p(Number(e.value)))return`repeat(${e.value}, minmax(0, 1fr))`}),be={accentColor:({theme:e})=>e("colors"),animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},aria:{busy:'busy="true"',checked:'checked="true"',disabled:'disabled="true"',expanded:'expanded="true"',hidden:'hidden="true"',pressed:'pressed="true"',readonly:'readonly="true"',required:'required="true"',selected:'selected="true"'},aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9",...ne},backdropBlur:({theme:e})=>e("blur"),backdropBrightness:({theme:e})=>({...e("brightness"),...s}),backdropContrast:({theme:e})=>({...e("contrast"),...s}),backdropGrayscale:({theme:e})=>({...e("grayscale"),...s}),backdropHueRotate:({theme:e})=>({...e("hueRotate"),...w}),backdropInvert:({theme:e})=>({...e("invert"),...s}),backdropOpacity:({theme:e})=>({...e("opacity"),...s}),backdropSaturate:({theme:e})=>({...e("saturate"),...s}),backdropSepia:({theme:e})=>({...e("sepia"),...s}),backgroundColor:({theme:e})=>e("colors"),backgroundImage:{none:"none","gradient-to-t":"linear-gradient(to top, var(--tw-gradient-stops))","gradient-to-tr":"linear-gradient(to top right, var(--tw-gradient-stops))","gradient-to-r":"linear-gradient(to right, var(--tw-gradient-stops))","gradient-to-br":"linear-gradient(to bottom right, var(--tw-gradient-stops))","gradient-to-b":"linear-gradient(to bottom, var(--tw-gradient-stops))","gradient-to-bl":"linear-gradient(to bottom left, var(--tw-gradient-stops))","gradient-to-l":"linear-gradient(to left, var(--tw-gradient-stops))","gradient-to-tl":"linear-gradient(to top left, var(--tw-gradient-stops))"},backgroundOpacity:({theme:e})=>e("opacity"),backgroundPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{0:"0",none:"",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},borderColor:({theme:e})=>({DEFAULT:"currentColor",...e("colors")}),borderOpacity:({theme:e})=>e("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borderSpacing:({theme:e})=>e("spacing"),borderWidth:{DEFAULT:"1px",0:"0px",2:"2px",4:"4px",8:"8px",...d},boxShadow:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"none"},boxShadowColor:({theme:e})=>e("colors"),brightness:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",200:"2",...s},caretColor:({theme:e})=>e("colors"),colors:()=>({...v}),columns:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",...l},container:{},content:{none:"none"},contrast:{0:"0",50:".5",75:".75",100:"1",125:"1.25",150:"1.5",200:"2",...s},cursor:{auto:"auto",default:"default",pointer:"pointer",wait:"wait",text:"text",move:"move",help:"help","not-allowed":"not-allowed",none:"none","context-menu":"context-menu",progress:"progress",cell:"cell",crosshair:"crosshair","vertical-text":"vertical-text",alias:"alias",copy:"copy","no-drop":"no-drop",grab:"grab",grabbing:"grabbing","all-scroll":"all-scroll","col-resize":"col-resize","row-resize":"row-resize","n-resize":"n-resize","e-resize":"e-resize","s-resize":"s-resize","w-resize":"w-resize","ne-resize":"ne-resize","nw-resize":"nw-resize","se-resize":"se-resize","sw-resize":"sw-resize","ew-resize":"ew-resize","ns-resize":"ns-resize","nesw-resize":"nesw-resize","nwse-resize":"nwse-resize","zoom-in":"zoom-in","zoom-out":"zoom-out"},divideColor:({theme:e})=>e("borderColor"),divideOpacity:({theme:e})=>e("borderOpacity"),divideWidth:({theme:e})=>({...e("borderWidth"),...d}),dropShadow:{sm:"0 1px 1px rgb(0 0 0 / 0.05)",DEFAULT:["0 1px 2px rgb(0 0 0 / 0.1)","0 1px 1px rgb(0 0 0 / 0.06)"],md:["0 4px 3px rgb(0 0 0 / 0.07)","0 2px 2px rgb(0 0 0 / 0.06)"],lg:["0 10px 8px rgb(0 0 0 / 0.04)","0 4px 3px rgb(0 0 0 / 0.1)"],xl:["0 20px 13px rgb(0 0 0 / 0.03)","0 8px 5px rgb(0 0 0 / 0.08)"],"2xl":"0 25px 25px rgb(0 0 0 / 0.15)",none:"0 0 #0000"},fill:({theme:e})=>e("colors"),flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",...e("spacing")}),flexGrow:{0:"0",DEFAULT:"1",...l},flexShrink:{0:"0",DEFAULT:"1",...l},fontFamily:{sans:["ui-sans-serif","system-ui","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"]},fontSize:{xs:["0.75rem",{lineHeight:"1rem"}],sm:["0.875rem",{lineHeight:"1.25rem"}],base:["1rem",{lineHeight:"1.5rem"}],lg:["1.125rem",{lineHeight:"1.75rem"}],xl:["1.25rem",{lineHeight:"1.75rem"}],"2xl":["1.5rem",{lineHeight:"2rem"}],"3xl":["1.875rem",{lineHeight:"2.25rem"}],"4xl":["2.25rem",{lineHeight:"2.5rem"}],"5xl":["3rem",{lineHeight:"1"}],"6xl":["3.75rem",{lineHeight:"1"}],"7xl":["4.5rem",{lineHeight:"1"}],"8xl":["6rem",{lineHeight:"1"}],"9xl":["8rem",{lineHeight:"1"}]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:({theme:e})=>e("spacing"),gradientColorStops:({theme:e})=>e("colors"),gradientColorStopPositions:{"0%":"0%","5%":"5%","10%":"10%","15%":"15%","20%":"20%","25%":"25%","30%":"30%","35%":"35%","40%":"40%","45%":"45%","50%":"50%","55%":"55%","60%":"60%","65%":"65%","70%":"70%","75%":"75%","80%":"80%","85%":"85%","90%":"90%","95%":"95%","100%":"100%",...s},grayscale:{0:"0",DEFAULT:"100%",...s},gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridColumn:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridColumnEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...l},gridColumnStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...l},gridRow:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridRowEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...l},gridRowStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...l},gridTemplateColumns:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))",...L},gridTemplateRows:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))",...L},height:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg",...w},inset:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%",...e("spacing")}),invert:{0:"0",DEFAULT:"100%",...s},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},listStyleType:{none:"none",disc:"disc",decimal:"decimal"},listStyleImage:{none:"none"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),lineClamp:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",...l},maxHeight:({theme:e})=>({none:"none",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),maxWidth:({theme:e})=>({none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch",...e("spacing")}),minHeight:({theme:e})=>({full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),minWidth:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},opacity:{0:"0",5:"0.05",10:"0.1",15:"0.15",20:"0.2",25:"0.25",30:"0.3",35:"0.35",40:"0.4",45:"0.45",50:"0.5",55:"0.55",60:"0.6",65:"0.65",70:"0.7",75:"0.75",80:"0.8",85:"0.85",90:"0.9",95:"0.95",100:"1",...s},order:{first:"-9999",last:"9999",none:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",...l},outlineColor:({theme:e})=>e("colors"),outlineOffset:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...d},outlineWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...d},padding:({theme:e})=>e("spacing"),placeholderColor:({theme:e})=>e("colors"),placeholderOpacity:({theme:e})=>e("opacity"),ringColor:({theme:e})=>({DEFAULT:"currentColor",...e("colors")}),ringOffsetColor:({theme:e})=>e("colors"),ringOffsetWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...d},ringOpacity:({theme:e})=>({DEFAULT:"0.5",...e("opacity")}),ringWidth:{DEFAULT:"3px",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...d},rotate:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",45:"45deg",90:"90deg",180:"180deg",...w},saturate:{0:"0",50:".5",100:"1",150:"1.5",200:"2",...s},scale:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",...s},screens:{sm:"40rem",md:"48rem",lg:"64rem",xl:"80rem","2xl":"96rem"},scrollMargin:({theme:e})=>e("spacing"),scrollPadding:({theme:e})=>e("spacing"),sepia:{0:"0",DEFAULT:"100%",...s},skew:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",...w},space:({theme:e})=>e("spacing"),spacing:{px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},stroke:({theme:e})=>({none:"none",...e("colors")}),strokeWidth:{0:"0",1:"1",2:"2",...l},supports:{},data:{},textColor:({theme:e})=>e("colors"),textDecorationColor:({theme:e})=>e("colors"),textDecorationThickness:{auto:"auto","from-font":"from-font",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...d},textIndent:({theme:e})=>e("spacing"),textOpacity:({theme:e})=>e("opacity"),textUnderlineOffset:{auto:"auto",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...d},transformOrigin:{center:"center",top:"top","top-right":"top right",right:"right","bottom-right":"bottom right",bottom:"bottom","bottom-left":"bottom left",left:"left","top-left":"top left"},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms",...T},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms",...T},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},translate:({theme:e})=>({"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%",...e("spacing")}),size:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),width:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw",svw:"100svw",lvw:"100lvw",dvw:"100dvw",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),willChange:{auto:"auto",scroll:"scroll-position",contents:"contents",transform:"transform"},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50",...l}};export{ie as a,u as b,pe as c,p as d,ge as e,ue as f,be as g};
