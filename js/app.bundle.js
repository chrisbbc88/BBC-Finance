(()=>{var Qs,pe,ml,ja,pl,Xo,gm,js={},fl=[],hm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $n(e,t){for(var n in t)e[n]=t[n];return e}function gl(e){var t=e.parentNode;t&&t.removeChild(e)}function fr(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?Qs.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return Zs(e,r,a,s,null)}function Zs(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++ml};return pe.vnode!=null&&pe.vnode(i),i}function Js(e){return e.children}function Ha(e,t){this.props=e,this.context=t}function ca(e,t){if(t==null)return e.__?ca(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ca(e):null}function hl(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return hl(e)}}function el(e){(!e.__d&&(e.__d=!0)&&ja.push(e)&&!Hs.__r++||Xo!==pe.debounceRendering)&&((Xo=pe.debounceRendering)||pl)(Hs)}function Hs(){for(var e;Hs.__r=ja.length;)e=ja.sort(function(t,n){return t.__v.__b-n.__v.__b}),ja=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=$n({},i)).__v=i.__v+1,gr(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??ca(i),i.__h),vl(a,i),i.__e!=r&&hl(i)))})}function $l(e,t,n,a,s,i,r,o,c,p){var d,u,m,f,$,y,b,g=a&&a.__k||fl,h=g.length;for(n.__k=[],d=0;d<t.length;d++)if((f=n.__k[d]=(f=t[d])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Zs(null,f,null,null,f):Array.isArray(f)?Zs(Js,{children:f},null,null,null):f.__b>0?Zs(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(m=g[d])===null||m&&f.key==m.key&&f.type===m.type)g[d]=void 0;else for(u=0;u<h;u++){if((m=g[u])&&f.key==m.key&&f.type===m.type){g[u]=void 0;break}m=null}gr(e,f,m=m||js,s,i,r,o,c,p),$=f.__e,(u=f.ref)&&m.ref!=u&&(b||(b=[]),m.ref&&b.push(m.ref,null,f),b.push(u,f.__c||$,f)),$!=null?(y==null&&(y=$),typeof f.type=="function"&&f.__k!=null&&f.__k===m.__k?f.__d=c=bl(f,c,e):c=yl(e,f,m,g,$,c),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=ca(m))}for(n.__e=y,d=h;d--;)g[d]!=null&&(typeof n.type=="function"&&g[d].__e!=null&&g[d].__e==n.__d&&(n.__d=ca(a,d+1)),xl(g[d],g[d]));if(b)for(d=0;d<b.length;d++)wl(b[d],b[++d],b[++d])}function bl(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?bl(s,t,n):yl(n,s,s,e.__k,s.__e,t));return t}function yl(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function tl(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||hm.test(t)?n:n+"px"}function Vs(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||tl(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||tl(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?al:nl,i):e.removeEventListener(t,i?al:nl,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function nl(e){this.l[e.type+!1](pe.event?pe.event(e):e)}function al(e){this.l[e.type+!0](pe.event?pe.event(e):e)}function gr(e,t,n,a,s,i,r,o,c){var p,d,u,m,f,$,y,b,g,h,I,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(p=pe.__b)&&p(t);try{e:if(typeof S=="function"){if(b=t.props,g=(p=S.contextType)&&a[p.__c],h=p?g?g.props.value:p.__:a,n.__c?y=(d=t.__c=n.__c).__=d.__E:("prototype"in S&&S.prototype.render?t.__c=d=new S(b,h):(t.__c=d=new Ha(b,h),d.constructor=S,d.render=bm),g&&g.sub(d),d.props=b,d.state||(d.state={}),d.context=h,d.__n=a,u=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),S.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=$n({},d.__s)),$n(d.__s,S.getDerivedStateFromProps(b,d.__s))),m=d.props,f=d.state,u)S.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(S.getDerivedStateFromProps==null&&b!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,h),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,h)===!1||t.__v===n.__v){d.props=b,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(x){x&&(x.__=t)}),d.__h.length&&r.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,h),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,f,$)})}d.context=h,d.props=b,d.state=d.__s,(p=pe.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(a=$n($n({},a),d.getChildContext())),u||d.getSnapshotBeforeUpdate==null||($=d.getSnapshotBeforeUpdate(m,f)),I=p!=null&&p.type===Js&&p.key==null?p.props.children:p,$l(e,Array.isArray(I)?I:[I],t,n,a,s,i,r,o,c),d.base=t.__e,t.__h=null,d.__h.length&&r.push(d),y&&(d.__E=d.__=null),d.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=$m(n.__e,t,n,a,s,i,r,c);(p=pe.diffed)&&p(t)}catch(x){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),pe.__e(x,t,n)}}function vl(e,t){pe.__c&&pe.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){pe.__e(a,n.__v)}})}function $m(e,t,n,a,s,i,r,o){var c,p,d,u=n.props,m=t.props,f=t.type,$=0;if(f==="svg"&&(s=!0),i!=null){for(;$<i.length;$++)if((c=i[$])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,i[$]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),i=null,o=!1}if(f===null)u===m||o&&e.data===m||(e.data=m);else{if(i=i&&Qs.call(e.childNodes),p=(u=n.props||js).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!o){if(i!=null)for(u={},$=0;$<e.attributes.length;$++)u[e.attributes[$].name]=e.attributes[$].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if((function(y,b,g,h,I){var S;for(S in g)S==="children"||S==="key"||S in b||Vs(y,S,null,g[S],h);for(S in b)I&&typeof b[S]!="function"||S==="children"||S==="key"||S==="value"||S==="checked"||g[S]===b[S]||Vs(y,S,b[S],g[S],h)})(e,m,u,s,o),d)t.__k=[];else if($=t.props.children,$l(e,Array.isArray($)?$:[$],t,n,a,s&&f!=="foreignObject",i,r,i?i[0]:n.__k&&ca(n,0),o),i!=null)for($=i.length;$--;)i[$]!=null&&gl(i[$]);o||("value"in m&&($=m.value)!==void 0&&($!==e.value||f==="progress"&&!$)&&Vs(e,"value",$,u.value,!1),"checked"in m&&($=m.checked)!==void 0&&$!==e.checked&&Vs(e,"checked",$,u.checked,!1))}return e}function wl(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){pe.__e(a,n)}}function xl(e,t,n){var a,s;if(pe.unmount&&pe.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||wl(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){pe.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&xl(a[s],t,typeof e.type!="function");n||e.__e==null||gl(e.__e),e.__e=e.__d=void 0}function bm(e,t,n){return this.constructor(e,n)}function hr(e,t,n){var a,s,i;pe.__&&pe.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],gr(t,e=(!a&&n||t).__k=fr(Js,null,[e]),s||js,js,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?Qs.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),vl(i,e)}Qs=fl.slice,pe={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},ml=0,Ha.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$n({},this.state),typeof e=="function"&&(e=e($n({},n),this.props)),e&&$n(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),el(this))},Ha.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),el(this))},Ha.prototype.render=Js,ja=[],pl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Hs.__r=0,gm=0;var ua,lt,sl,Ws=0,mr=[],il=pe.__b,rl=pe.__r,ol=pe.diffed,ll=pe.__c,cl=pe.unmount;function Wa(e,t){pe.__h&&pe.__h(lt,e,Ws||t),Ws=0;var n=lt.__H||(lt.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function D(e){return Ws=1,ym(Dl,e)}function ym(e,t,n){var a=Wa(ua++,2);return a.t=e,a.__c||(a.__=[n?n(t):Dl(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=lt),a.__}function ce(e,t){var n=Wa(ua++,3);!pe.__s&&br(n.__H,t)&&(n.__=e,n.__H=t,lt.__H.__h.push(n))}function $r(e,t){var n=Wa(ua++,4);!pe.__s&&br(n.__H,t)&&(n.__=e,n.__H=t,lt.__h.push(n))}function ve(e){return Ws=5,Se(function(){return{current:e}},[])}function Se(e,t){var n=Wa(ua++,7);return br(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function kl(e){var t=Wa(ua++,10),n=D();return t.__=e,lt.componentDidCatch||(lt.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function vm(){mr.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Gs),e.__H.__h.forEach(pr),e.__H.__h=[]}catch(t){e.__H.__h=[],pe.__e(t,e.__v)}}),mr=[]}pe.__b=function(e){lt=null,il&&il(e)},pe.__r=function(e){rl&&rl(e),ua=0;var t=(lt=e.__c).__H;t&&(t.__h.forEach(Gs),t.__h.forEach(pr),t.__h=[])},pe.diffed=function(e){ol&&ol(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(mr.push(t)!==1&&sl===pe.requestAnimationFrame||((sl=pe.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),ul&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);ul&&(a=requestAnimationFrame(s))})(vm)),lt=void 0},pe.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Gs),n.__h=n.__h.filter(function(a){return!a.__||pr(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],pe.__e(a,n.__v)}}),ll&&ll(e,t)},pe.unmount=function(e){cl&&cl(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Gs)}catch(n){pe.__e(n,t.__v)}};var ul=typeof requestAnimationFrame=="function";function Gs(e){var t=lt;typeof e.__c=="function"&&e.__c(),lt=t}function pr(e){var t=lt;e.__c=e.__(),lt=t}function br(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function Dl(e,t){return typeof t=="function"?t(e):t}var Sl=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,Sl(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},dl=new Map,l=function(e){var t=dl.get(this);return t||(t=new Map,dl.set(this,t)),(t=Sl(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],p=function(m){i===1&&(m||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,r):i===3&&(m||r)?(c.push(3,m,r),i=2):i===2&&r==="..."&&m?c.push(4,m,0):i===2&&r&&!m?c.push(5,0,!0,r):i>=5&&((r||!m&&i===5)&&(c.push(i,0,r,s),i=6),m&&(c.push(i,m,0,s),i=6)),r=""},d=0;d<n.length;d++){d&&(i===1&&p(),p(d));for(var u=0;u<n[d].length;u++)a=n[d][u],i===1?a==="<"?(p(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(p(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[d][u+1]===">")?(p(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(p(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return p(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(fr);var Fe=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),we=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),zn=e=>String(e).padStart(2,"0");function da(e){return`${e.getFullYear()}-${zn(e.getMonth()+1)}-${zn(e.getDate())}`}var F=()=>da(new Date),ne=()=>new Date().toISOString();function be(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function Qa(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Ce(e,t){let n=Qa(e);return n.setDate(n.getDate()+Number(t||0)),da(n)}function _t(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),p=(o%12+12)%12,d=new Date(c,p+1,0).getDate();return`${c}-${zn(p+1)}-${zn(Math.min(r,d))}`}function yn(e,t){let n=Qa(t).getTime()-Qa(e).getTime();return Math.round(n/864e5)}var Ys=e=>Number(e.slice(0,4)),Cl=e=>Number(e.slice(5,7)),Ja=e=>e.slice(0,7),Il=e=>Math.floor((Cl(e)-1)/3)+1,El=e=>`${Ys(e)}-Q${Il(e)}`;function yr(e,t){let n=`${e}-${zn(t+1)}-01`,a=da(new Date(e,t+1,0));return{from:n,to:a}}function vr(e,t){let n=`${e}-${zn((t-1)*3+1)}-01`,a=da(new Date(e,t*3,0));return{from:n,to:a}}var Pn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function kt(e,t=F(),n={}){let a=Ys(t),s=Cl(t)-1,i=Il(t);switch(e){case"month":return yr(a,s);case"lastMonth":return s===0?yr(a-1,11):yr(a,s-1);case"quarter":return vr(a,i);case"lastQuarter":return i===1?vr(a-1,4):vr(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:be(n.from)?n.from:"0000-01-01",to:be(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var on=(e,t)=>!!e&&e>=t.from&&e<=t.to;function Nl(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${zn(o+1)}`}return n}function Tl(e,t=F()){let n=[];for(let a=e-1;a>=0;a--)n.push(_t(t.slice(0,7)+"-01",-a).slice(0,7));return n}var wm=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],xm=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Gt=e=>`${wm[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,ma=e=>xm[Number(e.slice(5,7))-1];function vn(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",p=c==="."?",":".";r=n.split(p).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var bn=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Te(e,...t){let n=bn(e).trim();if(!n)return!0;let a=bn(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function zt(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function jt(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function Ht(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var wr=4,Al="bbc-finance",xr="2026-10-20.2",Rl="Neu: Belegsprache wechseln übersetzt Positionen und Texte automatisch (mit API-Key) – in Rechnungen, Angeboten, Vorlagen und Verträgen. Dazu Verträge mit einmaligen und laufenden Positionen.",ft=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes","todos","contracts"],Ln="USD";var Be=["USD","EUR"],Xs=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],Pt=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],Ya={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},pa={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},km=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],Dm=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],Sm=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],fa=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],Dt={starter:{label:"Starter",tone:"good"},standard:{label:"Standard",tone:"info"}},Kn=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],Tt=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Wt={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:km,serviceCategories:Dm,paymentMethods:Sm,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

anbei erhalten Sie die Rechnung {NUMBER} vom {DATE} über {TOTAL}. Der Betrag ist bis zum {DUE} fällig.

Vielen Dank für die Zusammenarbeit.

Viele Grüße
{SENDER}`},quote:{subject:"Angebot {NUMBER}",body:`Guten Tag {CONTACT},

anbei erhalten Sie das Angebot {NUMBER} vom {DATE} über {TOTAL}. Es ist gültig bis zum {DUE}.

Bei Fragen melden Sie sich gern.

Viele Grüße
{SENDER}`}},en:{invoice:{subject:"Invoice {NUMBER}",body:`Hello {CONTACT},

please find attached invoice {NUMBER} dated {DATE} for {TOTAL}. Payment is due by {DUE}.

Thank you for your business.

Best regards
{SENDER}`},quote:{subject:"Quote {NUMBER}",body:`Hello {CONTACT},

please find attached quote {NUMBER} dated {DATE} for {TOTAL}. It is valid until {DUE}.

Please let me know if you have any questions.

Best regards
{SENDER}`}}},appointmentTemplates:{de:{subject:"Termin am {DATE} um {TIME} Uhr: {TITLE}",body:`Guten Tag {CONTACT},

hiermit bestätige ich unseren Termin:

{TITLE}
{DATE}, {TIME} bis {END} Uhr ({TIMEZONE})

{MEETING}

{AGENDA}

Ich freue mich auf unser Gespräch.

Viele Grüße
{SENDER}
{COMPANY}`},en:{subject:"Meeting on {DATE} at {TIME}: {TITLE}",body:`Hello {CONTACT},

I am pleased to confirm our meeting:

{TITLE}
{DATE}, {TIME} to {END} ({TIMEZONE})

{MEETING}

{AGENDA}

Looking forward to speaking with you.

Best regards
{SENDER}
{COMPANY}`}},reminderTemplates:{de:{1:{subject:"Zahlungserinnerung zur Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

sicher ist es Ihnen nur entgangen: Die Rechnung {NUMBER} vom {DATE} über {OPEN} war am {DUE} fällig und ist noch offen.

Ich freue mich über einen kurzen Ausgleich in den nächsten Tagen. Die Rechnung hänge ich noch einmal an.

Sollte sich die Zahlung mit dieser Nachricht überschnitten haben, betrachten Sie sie bitte als gegenstandslos.

Viele Grüße
{SENDER}`},2:{subject:"1. Mahnung zur Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

zur Rechnung {NUMBER} vom {DATE} konnte ich bisher keinen Zahlungseingang feststellen. Der offene Betrag von {OPEN} war am {DUE} fällig.

Bitte überweisen Sie den Betrag innerhalb von 7 Tagen.

Viele Grüße
{SENDER}`},3:{subject:"2. Mahnung zur Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

trotz Erinnerung ist die Rechnung {NUMBER} vom {DATE} weiterhin offen. Der Betrag von {OPEN} ist seit dem {DUE} fällig.

Bitte gleichen Sie die Rechnung umgehend aus.

Viele Grüße
{SENDER}`}},en:{1:{subject:"Payment reminder for invoice {NUMBER}",body:`Hello {CONTACT},

this is a friendly reminder that invoice {NUMBER} dated {DATE} for {OPEN} was due on {DUE} and is still open.

I would appreciate payment within the next few days. The invoice is attached again for your reference.

If your payment has crossed with this message, please disregard it.

Best regards
{SENDER}`},2:{subject:"Second reminder for invoice {NUMBER}",body:`Hello {CONTACT},

I have not yet received payment for invoice {NUMBER} dated {DATE}. The open amount of {OPEN} was due on {DUE}.

Please settle the amount within 7 days.

Best regards
{SENDER}`},3:{subject:"Final reminder for invoice {NUMBER}",body:`Hello {CONTACT},

despite earlier reminders, invoice {NUMBER} dated {DATE} remains unpaid. The amount of {OPEN} has been due since {DUE}.

Please settle the invoice immediately.

Best regards
{SENDER}`}}}},Lt=()=>({id:Fe(),createdAt:ne(),updatedAt:ne()});function Xa(e={}){return{...Lt(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:Ln,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var ga=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],es=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],ha={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},$a=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],ei=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],st=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function ba(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...Lt(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:F(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||st(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function On(e={}){return{...Lt(),title:"",due:"",customerId:"",companyId:"",appointmentId:"",note:"",done:!1,doneAt:null,...e}}function ti(e={}){return{...Lt(),customerId:"",companyId:"",date:F(),kind:"note",title:"",text:"",...e}}var Bl=[{id:"customer",label:"Kunde"},{id:"contact",label:"Kontakt"}],Ue=e=>!e||e.kind!=="contact";function Qt(e={}){return{...Lt(),kind:"customer",number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function Jt(e={}){return{...Lt(),code:"",tier:"",name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:Ln,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function Yt(e={}){return{id:Fe(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function gt(e,t={}){let n=F();return{...Lt(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:Ln,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function Fn(e,t={}){let n=F();return{...Lt(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:Ln,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function Je(e){return e?e.number?e.number:e.source==="upload"?e.refNumber||e.title||"PDF-Angebot":"Entwurf":""}function Ul(e,t={}){return Fn(e,{source:"upload",status:"open",title:"",refNumber:"",attachmentIds:[],validUntil:"",intro:"",paymentTerms:"",footer:"",...t})}var ya={open:{label:"Offen",tone:"info"},signed:{label:"Unterschrieben",tone:"good"},ended:{label:"Beendet",tone:"mute"},declined:{label:"Nicht zustande gekommen",tone:"mute"}};function qn(e,t={}){return{...Lt(),companyId:e?e.id:"",customerId:"",title:"",refNumber:"",status:"open",signedDate:"",startDate:"",endDate:"",noticePeriod:"",items:[],currency:e?e.currency:Ln,quoteId:"",attachmentIds:[],notes:"",...t}}function ts(e={}){return{...Lt(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:F(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:Ln,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function wn(e,t={}){return{...Lt(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:F(),nextDate:F(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:Ln,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function Z(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function ct(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var Cm=4,ns=null,xn=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),Im=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function va(e){return e==="counters"||e==="settings"?"key":"id"}var Kt=[...ft,"settings","blobs"];function kr(){return ns||(ns=new Promise((e,t)=>{let n=indexedDB.open(Al,Cm);n.onupgradeneeded=()=>{let a=n.result;for(let s of Kt){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:va(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),ns=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),ns)}async function wa(e){let t=await kr();return xn(t.transaction(e,"readonly").objectStore(e).getAll())}async function Ml(e,t){let n=await kr();return xn(n.transaction(e,"readonly").objectStore(e).get(t))}async function Vn(e,t){let a=(await kr()).transaction(e,"readwrite"),s=Im(a),i={get:(o,c)=>xn(a.objectStore(o).get(c)),put:(o,c)=>xn(a.objectStore(o).put(c)),del:(o,c)=>xn(a.objectStore(o).delete(c)),byIndex:(o,c,p)=>xn(a.objectStore(o).index(c).get(p)),allByIndex:(o,c,p)=>xn(a.objectStore(o).index(c).getAll(p)),clear:o=>xn(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function _l(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function zl(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var v={ready:!1,version:0,settings:we(Wt)},Xt={};for(let e of ft)v[e]=[],Xt[e]=new Map;var si=new Set;function Ll(e){return si.add(e),()=>si.delete(e)}var ni=0,Dr=!1;function Kl(){if(v.version+=1,ai.clear(),ni){Dr=!0;return}for(let e of si)e(v.version)}async function Ol(e){ni+=1;try{return await e()}finally{if(ni-=1,!ni&&Dr){Dr=!1;for(let t of si)t(v.version)}}}var Zn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(Zn=new BroadcastChannel("bbc-finance-sync"),Zn.onmessage=e=>{e.data==="changed"&&Gn()})}catch{Zn=null}var Pl=new Set(ft.filter(e=>e!=="rates"));async function Gn(){let e=await Promise.all([...ft,"settings"].map(n=>wa(n)));ft.forEach((n,a)=>{Xt[n]=new Map(e[a].map(s=>[s[va(n)],s])),v[n]=e[a]});let t=we(Wt);for(let n of e[ft.length])Object.hasOwn(Wt,n.key)&&(t[n.key]=n.value);v.settings=t,v.ready=!0,Kl()}async function Fl(){await Gn(),zl()}var Ee=e=>v[e],w=(e,t)=>t?Xt[e].get(t):void 0,ai=new Map;function ql(e,t){return ai.has(e)||ai.set(e,t()),ai.get(e)}function Vl(e,t){return ql(`group:${e}:${t}`,()=>{let n=new Map;for(let a of v[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var Zl=Object.freeze([]),Ye=e=>Vl("payments","invoiceId").get(e)||Zl,kn=e=>Vl("reminders","invoiceId").get(e)||Zl,ln=e=>e&&Xt.assets.get(e)?Xt.assets.get(e).dataUrl:"",re=()=>ql("activeCompanies",()=>v.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function de(){let e=v.settings.activeCompany;if(!e||e==="all")return null;let t=w("companies",e);return t&&!t.archived?t:null}function qe(e){let t=de();return!t||e.companyId===t.id}function Em({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:Fe(),at:ne(),user:v.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function J(e){let t=[],n=!1,a={},s=await Vn(Kt,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(p,d){return t.push({store:p,value:d}),Pl.has(p)&&p!=="audit"&&(n=!0),r.put(p,d)},del(p,d){return t.push({store:p,id:d,del:!0}),Pl.has(p)&&(n=!0),r.del(p,d)},clear(p){return t.push({store:p,clear:!0}),r.clear(p)},blobPut:(p,d)=>r.put("blobs",{id:p,blob:d}),blobDel:p=>r.del("blobs",p),audit(p){let d=Em(p);return t.push({store:"audit",value:d}),r.put("audit",d)},setting(p,d){return a[p]=d,r.put("settings",{key:p,value:d})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let p=await r.get("settings","changesSinceBackup"),d=p&&Number(p.value)||0;a.changesSinceBackup=d+1,await r.put("settings",{key:"changesSinceBackup",value:d+1})}return c}),i=new Set;for(let r of t)Xt[r.store]&&(r.clear?Xt[r.store]=new Map:r.del?Xt[r.store].delete(r.id):Xt[r.store].set(r.value[va(r.store)],r.value),i.add(r.store));for(let r of i)v[r]=[...Xt[r].values()];if(Object.keys(a).length&&(v.settings={...v.settings,...a}),Kl(),Zn)try{Zn.postMessage("changed")}catch{}return s}function as(){if(Zn)try{Zn.postMessage("changed")}catch{}}async function ut(e,t){return J(n=>n.setting(e,t))}async function Gl(e){return J(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=D(v.version);return ce(()=>Ll(t=>e(t)),[]),v}var Cr=new Set,jn=null,ss=Hl(),Sr=!1;function Hl(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function Ir(){if(Sr){Sr=!1;return}let e=Hl();if(e.raw!==ss.raw){if(jn){if(!await jn()){Sr=!0,location.hash=ss.raw;return}jn=null}ss=e;for(let t of Cr)t(ss);window.scrollTo(0,0)}}window.addEventListener("hashchange",Ir);function Y(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),Ir()):location.hash===n?Ir():location.hash=e}function Dn(e){jn=null,Y(e)}function ri(e){jn=e}function cn(){jn=null}var Wl=()=>!!jn;function Ql(){let[e,t]=D(ss);return ce(()=>(Cr.add(t),()=>Cr.delete(t)),[]),e}var Nm=0,ii=new Set,Hn=[];function M(e,t="info",n){let a=++Nm;Hn=[...Hn,{id:a,message:String(e),tone:t}].slice(-3),ii.forEach(s=>s(Hn)),setTimeout(()=>Tr(a),n||(t==="bad"?9e3:4500))}function Tr(e){Hn=Hn.filter(t=>t.id!==e),ii.forEach(t=>t(Hn))}function Jl(){let[e,t]=D(Hn);return ce(()=>(ii.add(t),()=>ii.delete(t)),[]),e}var Yl=0;function xa(e=2e3){Yl=Date.now()+e}var Xl=()=>Date.now()<Yl;function ka(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?M("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?M("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):M(t,"bad")}async function _(e){try{return await e()}catch(t){ka(t);return}}var Er=new Set,Nr=null;function jl(e){Nr=e,Er.forEach(t=>t(Nr))}function ec(){let[e,t]=D(Nr);return ce(()=>(Er.add(t),()=>Er.delete(t)),[]),e}var Tm=0;function ue(e){return new Promise(t=>{jl({...e,id:++Tm,resolve:n=>{jl(null),t(n)}})})}var oi=()=>ue({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var Am={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2",mic:"M10 3a2.500 2.500 0 0 1 2.500 2.500v4a2.500 2.500 0 0 1-5 0v-4A2.500 2.500 0 0 1 10 3zM5.500 9.500a4.500 4.500 0 0 0 9 0M10 14v3M7.500 17h5"};function W({name:e,size:t=18,class:n=""}){let a=Am[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function Ar(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function ci(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var Da=e=>ci(e,100);var Rm=e=>ci(e,1e3),nc=e=>ci(e,100),tc=e=>ci(e,1e3);function Rr(e){let t=Rm(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(nc(e.discountPct),0),1e4);return Ar(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function Ot(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(m=>BigInt(Math.round(m))),s=a.reduce((m,f)=>m+f,0n);if(s===0n&&(a=a.map(m=>m<0n?-m:m),s=a.reduce((m,f)=>m+f,0n),s===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let i=m=>m<0n?-m:m,r=i(s),o=s<0n?a.map(m=>-m):a,c=i(n),p=[],d=[];o.forEach((m,f)=>{let $=c*m,y=$/r,b=$%r;b<0n&&(y-=1n,b+=r),p.push(y),d.push({i:f,r:b})});let u=c-p.reduce((m,f)=>m+f,0n);d.sort((m,f)=>m.r===f.r?m.i-f.i:m.r>f.r?-1:1);for(let m=0;u>0n&&m<d.length;m++,u-=1n)p[d[m].i]+=1n;return n<0n?p.map(m=>Number(-m)||0):p.map(m=>Number(m)||0)}function ht(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:Rr(m)})),a=n.reduce((m,f)=>m+f.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let m=Math.min(nc(r),1e4);s=Ar(BigInt(a)*BigInt(m),10000n)}let o=new Map;for(let m of n){let f=tc(m.taxRate),$=o.get(f)||{rate:m.taxRate,rateMilli:f,subtotalCents:0};$.subtotalCents+=m.cents,o.set(f,$)}let c=[...o.values()].sort((m,f)=>m.rateMilli-f.rateMilli),p=Ot(s,c.map(m=>m.subtotalCents)),d=0;c.forEach((m,f)=>{m.discountCents=p[f]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=Ar(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),d+=m.taxCents});for(let m of c){let f=n.filter(y=>tc(y.taxRate)===m.rateMilli),$=Ot(m.discountCents,f.map(y=>y.cents));f.forEach((y,b)=>{y.netCents=y.cents-($[b]||0)})}let u=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:u,taxCents:d,totalCents:u+d,taxGroups:c.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var li=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function Bm(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function un(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?li(e*s):null;if(t==="EUR"&&n==="USD")return i?li(e/s):null;let r=Bm(t,a);if(r==null)return null;let o=e*r;return n==="USD"?li(o):n==="EUR"&&i?li(o*s):null}var St=(e,t,n)=>un(e,t,"USD",n),Ft=(e,t,n)=>un(e,t,"EUR",n);function en(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var Me=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function tn(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=Me(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function dn(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-Me(t),0)}var Br=e=>e.status!=="draft"&&e.status!=="cancelled";function qt(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var Sn={de:"de-DE",en:"en-US"},Ur=new Map;function Sa(e,t){let n=e+JSON.stringify(t);return Ur.has(n)||Ur.set(n,new Intl.NumberFormat(e,t)),Ur.get(n)}function j(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return Sa(Sn[n]||Sn.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function is(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?Sa("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):Sa("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function Ca(e,t,n){let a=j(e,t,n);return n==="en"?`${a} ${t}`:a}function Wn(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":Sa(Sn[t]||Sn.de,{maximumFractionDigits:n}).format(Number(e))}function At(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${Sa(Sn[t]||Sn.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function Ia(e,t="de"){return Number.isFinite(Number(e))?Sa(Sn[t]||Sn.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function sc(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function ic(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function O(e,t="de"){if(!e)return"";let n=Qa(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function Xe(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var rc={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},ac={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},ui=(e,t)=>t==="en"&&ac[e]?ac[e]:e||"",Rt=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);function rs(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}var Um={"not-allowed":"Der Browser darf das Mikrofon nicht verwenden. Bitte in den Website-Einstellungen das Mikrofon erlauben.","service-not-allowed":"Die Spracherkennung ist in diesem Browser gesperrt. In Safari muss auf dem Mac die Diktierfunktion eingeschaltet sein (Systemeinstellungen → Tastatur → Diktierfunktion).",network:"Die Spracherkennung braucht eine Internetverbindung.","audio-capture":"Es wurde kein Mikrofon gefunden.","language-not-supported":"Deutsch wird von der Spracherkennung dieses Browsers nicht unterstützt."},Mm=e=>Um[e]||`Die Spracherkennung ist fehlgeschlagen (${e}).`;function di({lang:e="de-DE",onFinal:t,onInterim:n,onEnd:a,onError:s}){let i=window.SpeechRecognition||window.webkitSpeechRecognition,r=new i;return r.lang=e,r.continuous=!0,r.interimResults=!0,r.onresult=o=>{let c="";for(let p=o.resultIndex;p<o.results.length;p++){let d=o.results[p][0].transcript;o.results[p].isFinal?t&&t(d.trim()):c+=d}n&&n(c.trim())},r.onerror=o=>{o.error!=="no-speech"&&o.error!=="aborted"&&s&&s(Mm(o.error))},r.onend=()=>{a&&a()},r.start(),()=>{try{r.stop()}catch{}}}function mi(e,t){let n=String(t||"").trim();if(!n)return e||"";let a=String(e||"");if(!a.trim())return n.charAt(0).toUpperCase()+n.slice(1);let s=/[\s\n]$/.test(a)?"":" ",i=/[.!?]\s*$/.test(a)?n.charAt(0).toUpperCase()+n.slice(1):n;return a+s+i}var _m=0,Qn=(e="f")=>Se(()=>`${e}-${++_m}`,[]);function C({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:p="",...d}){let u=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${p?` ${p}`:""}`;return l`<button type=${s} class=${u} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${d}>
    ${t&&l`<${W} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function xe({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function q({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=Qn();return l`<${xe} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${p=>s&&s(p.target.value)} ...${o} />
  <//>`}function zm({onText:e,label:t="Diktieren",small:n=!0,class:a=""}){let[s,i]=D(!1),[r,o]=D(""),c=ve(null);if(ce(()=>()=>{c.current&&c.current()},[]),!rs())return null;function p(){if(s){c.current&&c.current();return}try{c.current=di({onFinal:d=>e(d),onInterim:o,onEnd:()=>{i(!1),o(""),c.current=null},onError:d=>Mr(d)}),i(!0)}catch(d){Mr(d.message||String(d))}}return l`<span class=${`mic-wrap ${a}`}>
    <button type="button" class=${`mic-btn${s?" is-on":""}${n?" is-small":""}`} onClick=${p}
      title=${s?"Zuhören beenden":t} aria-label=${s?"Zuhören beenden":t} aria-pressed=${s}>
      <${W} name="mic" size=${n?15:20} />
    </button>
    ${s&&r&&l`<span class="mic-interim" aria-live="polite">${r}</span>`}
  </span>`}var Mr=e=>{console.warn(e)},oc=e=>{Mr=e};function ie({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,dictate:r=!0,...o}){let c=Qn(),p=ve(null),d=u=>{let m=p.current?p.current.value:n;a&&a(mi(m,u))};return l`<${xe} label=${e} hint=${t} class=${i} htmlFor=${c}>
    <div class=${r&&rs()?"dictate-wrap":""}>
      <textarea id=${c} ref=${p} class="input textarea" rows=${s} value=${n??""} onInput=${u=>a&&a(u.target.value)} ...${o}></textarea>
      ${r&&a&&l`<${zm} onText=${d} class="dictate-mic" />`}
    </div>
  <//>`}function se({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let p=Qn();return l`<${xe} label=${e} hint=${t} error=${n} class=${r} htmlFor=${p}>
    <select id=${p} class="input select" value=${a??""} onChange=${d=>s&&s(d.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(d=>{let u=typeof d=="object"?d:{id:d,label:d};return l`<option value=${u.id} selected=${String(u.id)===String(a??"")}>${u.label}</option>`})}
    </select>
  <//>`}function je({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...p}){let d=I=>I==null||I===""?"":n==="money"?sc(I):ic(I,a),[u,m]=D(d(e)),[f,$]=D(!1),[y,b]=D(!1);ce(()=>{f||m(d(e))},[e,f]);function g(I){if(String(I).trim()===""){b(!1),t(r?null:0);return}let S=vn(I,{decimalOnly:n!=="money"});if(Number.isNaN(S)){b(!0);return}s!=null&&S<s&&(S=s),i!=null&&S>i&&(S=i),b(!1),t(n==="money"?Da(S):Number(S.toFixed(a)))}let h=l`<input class=${`input num ${y?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${u}
    onFocus=${I=>{$(!0),I.target.select()}}
    onInput=${I=>{m(I.target.value),g(I.target.value)}}
    onBlur=${I=>{$(!1),g(I.target.value)}}
    aria-invalid=${y} ...${p} />`;return c?l`<span class="input-wrap">${h}<span class="input-suffix">${c}</span></span>`:h}function _e({label:e,hint:t,error:n,class:a,...s}){let i=Qn();return l`<${xe} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${je} id=${i} ...${s} />
  <//>`}function ze({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=Qn();return l`<${xe} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function He({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=Qn("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function Ct({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function $t({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:p,label:d,id:u,disabled:m}){let f=Qn("cb"),$=u||f,y=e.find(T=>T.id===t),[b,g]=D(!1),[h,I]=D(""),[S,x]=D(0),B=ve(null),V=ve(null),E=r?o??"":b?h:y?y.label:"",A=Se(()=>{let T=bn(r?b?o:"":h).trim();return(T?e.filter(Q=>bn(`${Q.label} ${Q.sub||""} ${Q.search||""}`).includes(T)):e).slice(0,50)},[e,h,o,b,r]);ce(()=>{if(!b)return;let T=R=>{B.current&&!B.current.contains(R.target)&&(g(!1),I(""))};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[b]),ce(()=>{p&&V.current&&V.current.focus()},[]);let k=s&&!r,U=A.length+(k?1:0);function z(T){n(T.id,T),g(!1),I("")}function H(T){if(T.key==="ArrowDown")T.preventDefault(),g(!0),x(R=>Math.min(R+1,U-1));else if(T.key==="ArrowUp")T.preventDefault(),x(R=>Math.max(R-1,0));else if(T.key==="Enter"){if(!b)return;if(r&&!A.length){g(!1);return}T.preventDefault(),S<A.length?z(A[S]):k&&(s(h),g(!1),I(""))}else T.key==="Escape"?b&&(T.stopPropagation(),g(!1),I("")):T.key==="Tab"&&(g(!1),I(""))}return l`<div class="combo" ref=${B}>
    <input ref=${V} id=${$} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${b} aria-label=${d} aria-autocomplete="list" disabled=${m}
      placeholder=${b&&y&&!r?y.label:a} value=${E}
      onClick=${()=>{g(!0),x(0)}}
      onInput=${T=>{g(!0),x(0),r?c(T.target.value):I(T.target.value)}}
      onKeyDown=${H} />
    ${!r&&l`<span class="combo-caret"><${W} name="chevronDown" size=${16} /></span>`}
    ${b&&U>0&&l`<ul class="combo-list" role="listbox">
      ${A.map((T,R)=>l`<li role="option" aria-selected=${R===S}
          class=${`combo-item${R===S?" is-active":""}${T.id===t?" is-selected":""}`}
          onMouseEnter=${()=>x(R)}
          onMouseDown=${Q=>{Q.preventDefault(),z(T)}}>
          <span class="combo-label">${T.label}</span>
          ${T.sub&&l`<span class="combo-sub">${T.sub}</span>`}
        </li>`)}
      ${k&&l`<li role="option" class=${`combo-item combo-create${S===A.length?" is-active":""}`}
          onMouseEnter=${()=>x(A.length)}
          onMouseDown=${T=>{T.preventDefault(),s(h),g(!1),I("")}}>
          <${W} name="plus" size=${16} />
          <span>${h.trim()?`„${h.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${b&&U===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var Pm={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function Pe({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${W} name=${n||Pm[e]||"info"} size=${14} />${t}
  </span>`}function ke({title:e,sub:t,back:n,children:a}){return l`<header class="page-head">
    <div class="page-head-text">
      ${n&&l`<a class="back-link" href=${n.href}><${W} name="chevronLeft" size=${16} />${n.label}</a>`}
      <h1>${e}</h1>
      ${t&&l`<p class="page-sub">${t}</p>`}
    </div>
    ${a&&l`<div class="page-actions">${a}</div>`}
  </header>`}function fe({icon:e="file",title:t,text:n,children:a}){return l`<div class="empty">
    <div class="empty-icon"><${W} name=${e} size=${26} /></div>
    <h3>${t}</h3>
    ${n&&l`<p>${n}</p>`}
    ${a&&l`<div class="empty-actions">${a}</div>`}
  </div>`}function X({title:e,action:t,children:n,class:a="",flush:s}){return l`<section class=${`panel ${a}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${s?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function he({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${W} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function pi({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function It({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=D(!1),o=ve(null);ce(()=>{if(!i)return;let p=u=>{o.current&&!o.current.contains(u.target)&&r(!1)},d=u=>{u.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",d)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${C} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(p=>l`<button type="button" role="menuitem" class=${`menu-item${p.danger?" is-danger":""}`} disabled=${p.disabled}
        onClick=${()=>{r(!1),p.onClick()}}>
        ${p.icon&&l`<${W} name=${p.icon} size=${16} />`}<span>${p.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function Le({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=ve(null);ce(()=>{let c=document.activeElement,p=r.current;if(p){let u=p.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");u&&u.focus()}let d=u=>{if(u.key==="Escape"&&(u.stopPropagation(),t()),u.key==="Tab"&&p){let m=[...p.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(y=>y.offsetParent!==null);if(!m.length)return;let f=m[0],$=m[m.length-1];u.shiftKey&&document.activeElement===f?(u.preventDefault(),$.focus()):!u.shiftKey&&document.activeElement===$&&(u.preventDefault(),f.focus())}};return document.addEventListener("keydown",d),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",d),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${C} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function lc(){let e=ec();return e?l`<${Lm} key=${e.id} d=${e} />`:null}function Lm({d:e}){let[t,n]=D(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${Le} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${C} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${C} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${ie} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${q} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function cc(){let e=Jl();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${W} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>Tr(t.id)}><${W} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function tt({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,p]=D(s||null),d=Se(()=>{if(!c)return t;let m=e.find($=>$.key===c.key);if(!m||!m.sort)return t;let f=c.dir==="desc"?-1:1;return[...t].sort(($,y)=>{let b=m.sort($),g=m.sort(y);return b==null&&g==null?0:b==null?1:g==null?-1:typeof b=="number"&&typeof g=="number"?(b-g)*f:String(b).localeCompare(String(g),"de",{numeric:!0})*f})},[t,c,e]);if(!t.length&&r)return r;let u=m=>{m.sort&&p(f=>f&&f.key===m.key?{key:m.key,dir:f.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
    <table class="table">
      <thead><tr>
        ${e.map(m=>l`<th class=${`${m.align==="right"?"r":""} ${m.class||""}`} style=${m.width?`width:${m.width}`:""}
            aria-sort=${c&&c.key===m.key?c.dir==="asc"?"ascending":"descending":void 0}>
          ${m.sort?l`<button type="button" class="th-btn" onClick=${()=>u(m)}>${m.label}
                ${c&&c.key===m.key&&l`<${W} name=${c.dir==="asc"?"arrowUp":"arrowDown"} size=${13} />`}</button>`:m.label}
        </th>`)}
      </tr></thead>
      <tbody>
        ${d.map(m=>l`<tr key=${a(m)} class=${`${n?"is-click":""} ${o?o(m):""}`}
            tabindex=${n?0:void 0}
            onClick=${n?f=>{f.target.closest("button, a, input, select")||n(m)}:void 0}
            onKeyDown=${n?f=>{f.key==="Enter"&&f.target===f.currentTarget&&n(m)}:void 0}>
          ${e.map(f=>l`<td class=${`${f.align==="right"?"r":""} ${f.class||""}`}>${f.render?f.render(m):m[f.key]}</td>`)}
        </tr>`)}
      </tbody>
      ${i&&l`<tfoot><tr>${i.map((m,f)=>l`<td class=${e[f]&&e[f].align==="right"?"r":""}>${m}</td>`)}</tr></tfoot>`}
    </table>
  </div>`}function bt({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function yt({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${W} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Ve({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function Cn({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var _r=[{id:"once",label:"Einmalig"},{id:"monthly",label:"Monatlich"},{id:"quarterly",label:"Quartalsweise"},{id:"semiannual",label:"Halbjährlich"},{id:"yearly",label:"Jährlich"}],vt={monthly:"Monat",quarterly:"Quartal",semiannual:"Halbjahr",yearly:"Jahr"},Km=["monthly","quarterly","semiannual","yearly"],os=e=>!!vt[e];function Jn(e={}){return{id:Fe(),serviceId:"",name:"",description:"",qty:1,unit:"Pauschal",priceCents:0,taxRate:0,billing:"once",...e}}function Yn(e){if(!e)return[];if(Array.isArray(e.items)&&e.items.length)return e.items;if(e.amountCents!=null&&e.amountCents!==""){let t=os(e.billing)?e.billing:"once";return[Jn({id:`legacy-${e.id||"x"}`,name:e.title||"Vertragsleistung",qty:1,unit:vt[t]||"Pauschal",priceCents:Math.round(Number(e.amountCents))||0,taxRate:Number(e.taxRate)||0,billing:t})]}return[]}var Ea=e=>Math.round((Number(e.qty)||0)*(Number(e.priceCents)||0));function In(e){let t={once:0,intervals:{},hasOnce:!1,intervalIds:[]};for(let n of Yn(e))os(n.billing)?t.intervals[n.billing]=(t.intervals[n.billing]||0)+Ea(n):(t.once+=Ea(n),t.hasOnce=!0);return t.intervalIds=Km.filter(n=>n in t.intervals),t}function ls(e,t){let n=In(e),a=[];n.hasOnce&&a.push(`${t(n.once)} einmalig`);for(let s of n.intervalIds)a.push(`${t(n.intervals[s])} / ${vt[s]}`);return a.join(" · ")}function zr(e){return!e||!e.recurring?"once":/jahr/i.test(e.unit||"")&&!/halb/i.test(e.unit||"")?"yearly":/halbjahr/i.test(e.unit||"")?"semiannual":/quartal/i.test(e.unit||"")?"quarterly":"monthly"}function Om(e){let t=String(e||"").toLowerCase();return t==="monat"?"monthly":t==="quartal"?"quarterly":t==="halbjahr"?"semiannual":t==="jahr"?"yearly":"once"}function fi(e,t=()=>null){return(e.items||[]).filter(n=>!n.isText).map(n=>{let a=n.serviceId?t(n.serviceId):null,s=Number(n.discountPct)||0;return Jn({serviceId:n.serviceId||"",name:n.name||"",description:n.description||"",qty:Number(n.qty)||1,unit:n.unit||"Pauschal",priceCents:Math.round(s?(Number(n.priceCents)||0)*(1-s/100):Number(n.priceCents)||0),taxRate:Number(n.taxRate)||0,billing:e.source==="upload"?"once":a?zr(a):Om(n.unit)})})}function cs(e,t="once"){return Yn(e).filter(n=>t==="all"?!0:t==="once"?!os(n.billing):n.billing===t).map(n=>({id:Fe(),serviceId:n.serviceId||"",name:n.name,discountPct:0,description:n.description||(e.refNumber?`Gemäß Vertrag ${e.refNumber}`:""),qty:Number(n.qty)||1,unit:n.unit||vt[n.billing]||"Pauschal",priceCents:Math.round(Number(n.priceCents)||0),taxRate:Number(n.taxRate)||0}))}function uc(e){for(let[t,n]of(e||[]).entries()){if(!String(n.name||"").trim())return`Position ${t+1}: Bitte eine Bezeichnung eintragen.`;if(!(Number(n.qty)>0))return`Position ${t+1}: Die Menge muss größer als 0 sein.`;if(!(Number(n.priceCents)>=0))return`Position ${t+1}: Bitte den Preis prüfen.`;if(!_r.some(a=>a.id===n.billing))return`Position ${t+1}: Unbekannte Abrechnung.`}return""}var Fm=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function Pr(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return Fm.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var Lr=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),qm=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function Vm(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function Bt(e,t,n={}){let a=Vm(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||w("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||w("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=rc[o],p=e.currency||"USD",d=!s&&e.totals?e.totals:ht(e),u=G=>j(G,p,o),m=[i.name,Lr(i),Pr(i)].filter(Boolean).join(" · "),f=[];if(r){let G=ct(r);r.company&&f.push(r.company),G&&G!==r.company&&f.push(G);let Re=Lr(r);Re&&f.push(Re);let Qe=Pr(r);Qe&&f.push(Qe),r.country&&!qm(r.country,i.country)&&f.push(r.country)}let $=[];r&&r.vatId&&$.push(`${c.vatId}: ${r.vatId}`);let y=e.number||n.previewNumber||"",b=[];b.push([c[`number_${a}`],y||`(${c.draft})`]),b.push([c[`date_${a}`],O(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?b.push([c.servicePeriod,`${O(e.serviceDate,o)} – ${O(e.serviceDateEnd,o)}`]):b.push([c.serviceDate,O(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&b.push([c.dueDate,O(e.dueDate,o)]),a==="quote"&&e.validUntil&&b.push([c.validUntil,O(e.validUntil,o)]),r&&r.number&&r.kind!=="contact"&&b.push([c.customerNo,r.number]);let g="";if(a==="credit_note"&&e.relatedInvoiceId){let G=w("invoices",e.relatedInvoiceId);G&&(g=Rt(c.refInvoice,{NUMBER:G.number,DATE:O(G.issueDate,o)}))}let h=e.items||[],I=h.some(G=>Number(G.discountPct)>0),x=new Set(h.map(G=>Number(G.taxRate)||0)).size>1,B=new Map(d.lines.map(G=>[G.id,G])),V=h.map((G,Re)=>({pos:String(Re+1),name:G.name||"",description:G.description||"",qty:Wn(G.qty,o,3),unit:ui(G.unit,o),price:u(G.priceCents),discount:Number(G.discountPct)>0?At(G.discountPct,o):"",tax:At(Number(G.taxRate)||0,o),amount:u(B.has(G.id)?B.get(G.id).cents:0)})),E=String(i.taxLabel||"").trim()||c.taxDefault,A=d.taxGroups.filter(G=>Number(G.rate)!==0),k=[],U=d.discountCents!==0;if((U||A.length)&&k.push({label:c.subtotal,value:u(d.subtotalCents)}),U){let G=e.discount||{},Re=G.type==="abs"?c.discount:`${c.discount} ${At(G.value,o)}`;k.push({label:Re,value:u(-d.discountCents)}),A.length&&k.push({label:c.net,value:u(d.netCents)})}for(let G of A){let Re=A.length>1?` (${u(G.netCents)})`:"";k.push({label:`${E} ${At(G.rate,o)}${Re}`,value:u(G.taxCents)})}k.push({label:c[`total_${a}`]||c.total,value:Ca(d.totalCents,p,o),strong:!0});let z=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(p==="USD"||p==="EUR")){let G=p==="USD"?"EUR":"USD",Re=un(d.totalCents,p,G,e.fx);if(Re!=null){let Qe=p==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);z={line:`${c.approx} ${Ca(Re,G,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${p} = ${Ia(Qe,o)} ${G}`}}}let H=[];a==="invoice"&&e.dueDate&&H.push(Rt(c.dueLine,{DATE:O(e.dueDate,o)})),a==="quote"&&e.validUntil&&H.push(Rt(c.validLine,{DATE:O(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&H.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&H.push(i.taxNote.trim());let T=null;if(a==="invoice"){let G=[];i.accountHolder&&G.push([c.holder,i.accountHolder]),i.bankName&&G.push([c.bank,i.bankName]),i.iban&&G.push(["IBAN",i.iban]),i.bic&&G.push(["BIC",i.bic]);let Re=[i.altBank,i.otherPayment].map(Qe=>String(Qe||"").trim()).filter(Boolean);(G.length||Re.length)&&(T={title:c.payment,rows:G,extra:Re})}let R=[i.name,Lr(i),Pr(i),i.country].filter(Boolean),Q=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),N=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),te=Z(r),me=y?`${y} ${te}`:`${c.draft} ${c[a]} ${te}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:ln(i.logoAssetId),companyName:i.name||"",title:c[a],number:y,subtitle:g,draftMark:s?c.draftMark:"",senderLine:m,recipient:f,recipientExtra:$,meta:b,intro:String(e.intro||"").trim(),columns:{discount:I,tax:x},labels:c,rows:V,sums:k,secondary:z,notes:H,payment:T,footerCols:[R,Q,N].filter(G=>G.length),footerText:String(e.footer||"").trim(),fileName:`${jt(me)}.pdf`}}var Zm=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function dc(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))Zm.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var Gm=8e3;async function jm(e){let t=new AbortController,n=setTimeout(()=>t.abort(),Gm);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var Kr=e=>Number.isFinite(Number(e))&&Number(e)>0,Or={frankfurterV2(e,t,n){if(!e||!Kr(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!Kr(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!Kr(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function Hm(e,t,n){let a=n&&n<F(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:Or.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:Or.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Or.erApi}),s}async function mc(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||F(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<F()?n:F(),s=Wm(e,t,a);if(s)return s;let i=null;for(let o of Hm(e,t,n))try{let c=await jm(o.url),p=o.parse(c,e,t),d={id:`${e}_${t}_${a}`,base:e,quote:t,rate:p.rate,date:p.date||a,requestedDate:a,fetchedAt:ne(),source:p.source};return await J(u=>u.put("rates",d)).catch(()=>{}),d}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function Xn(e){let t=F();return e&&e<t?e:t}function Wm(e,t,n){let a=`${e}_${t}_${n}`,s=Ee("rates").find(i=>i.id===a);return!s||n===F()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function Fr(e,t){let n=Ee("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function ea(e,t){let n=await mc("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await mc(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:Xn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var Qm=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],Jm={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function nn(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!Qm.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function Ym(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function ta(e,t,n,a){return`${e}:${t}:${Ym(n,a)}`}function qr(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function Vt(e,t){let n=Jm[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function Vr(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=Vt(e,t),c=nn(r);if(c)throw new Error(c);let p=Number(a)||0;for(let d=0;d<1e5;d++){p+=1;let u=qr(r,{prefix:i,dateISO:n,n:p,digits:o});if(!await s(u))return{number:u,n:p}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var $e=e=>({...e,updatedAt:ne()}),Ie=class extends Error{},L=e=>{throw new Ie(e)},hc={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},mn=e=>be(e)&&e>="2000-01-01"&&e<="2100-12-31";async function us(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=nn(e[r]);o&&L(o)}String(e.name||"").trim()||L("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&L("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of Ee("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=Vt(e,o),p=Vt(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===p.pattern&&String(c.prefix).trim().toLowerCase()===String(p.prefix).trim().toLowerCase()&&L(`${r.name} verwendet für ${hc[o]} bereits das Präfix „${p.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=w("companies",e.id),a=$e(e),s=null;t&&(s={id:await Xm(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=zt(n,a,["updatedAt","createdAt"]);return await J(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function $c(e,t){let n=w("companies",e);if(!n)return;let a=$e({...n,archived:t});await J(async s=>{await s.put("companies",a),t&&v.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function Gr(e){return Ee("invoices").some(t=>t.companyId===e)||Ee("quotes").some(t=>t.companyId===e)||Ee("expenses").some(t=>t.companyId===e)||Ee("recurring").some(t=>t.companyId===e)}async function bc(e){let t=w("companies",e);t&&(Gr(e)&&L("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await J(async n=>{await n.del("companies",e),v.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:gi(t)})}))}async function Xm(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+Fe()}var gi=e=>{let t=we(e);return delete t.snapshot,t},yc={customer:"K",contact:"KO"},pc=e=>Ue(e)?"customer":"contact",vc=(e,t)=>new RegExp(`^${yc[e]}-\\d+$`).test(String(t||""));function En(e="customer",t=Ee("customers")){let n=yc[e]||"K",a=new RegExp(`^${n}-(\\d+)$`),s=0;for(let i of t)for(let r of[i.number,...i.formerNumbers||[]]){let o=a.exec(r||"");o&&(s=Math.max(s,Number(o[1])))}return`${n}-${String(s+1).padStart(4,"0")}`}async function na(e){Z(e)||L("Bitte ein Unternehmen oder einen Namen eintragen.");let t=w("customers",e.id),n=$e({...e,kind:pc(e)}),a=t?pc(t):n.kind;t&&a==="customer"&&n.kind==="contact"&&Ee("invoices").some(o=>o.customerId===n.id)&&L("Für diesen Kunden gibt es Rechnungen. Er bleibt Kunde."),t&&a!==n.kind&&vc(a,t.number)&&(!String(n.number||"").trim()||n.number===t.number)&&(n.formerNumbers=[...t.formerNumbers||[],t.number],n.number=""),String(n.number||"").trim()||(n.number=En(n.kind,[...Ee("customers").filter(o=>o.id!==n.id),{formerNumbers:n.formerNumbers||[]}]));let s=Ee("customers").find(o=>o.id!==n.id&&o.number===n.number);s&&L(`Die Nummer ${n.number} ist bereits vergeben (${Z(s)}).`);let i=zt(t,n,["updatedAt","createdAt"]),r=n.kind==="customer"?"Kunde":"Kontakt";return await J(async o=>{await o.put("customers",n),await o.audit({action:t?a!==n.kind?n.kind==="customer"?"Kontakt zum Kunden gemacht":"Kunde als Kontakt geführt":`${r} geändert`:`${r} angelegt`,entity:"customers",entityId:n.id,label:Z(n),prev:t?i.prev:null,next:i.next})}),n}function jr(e){return Ee("invoices").some(t=>t.customerId===e)||Ee("quotes").some(t=>t.customerId===e)||Ee("recurring").some(t=>t.customerId===e)||Ee("contracts").some(t=>t.customerId===e)}async function wc(e){let t=w("customers",e);t&&(jr(e)&&L("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await J(async n=>{let a=Ee("notes").filter(r=>r.customerId===e),s=Ee("appointments").filter(r=>r.customerId===e),i=Ee("todos").filter(r=>r.customerId===e);for(let r of a)await n.del("notes",r.id);for(let r of s)await n.del("appointments",r.id);for(let r of i)await n.del("todos",r.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:Z(t),prev:{...t,...a.length||s.length||i.length?{related:{notes:a,appointments:s,todos:i}}:{}}})}))}async function hi(e){w("customers",e.customerId)||L("Bitte einen Kunden wählen."),be(e.date)||L("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&L("Bitte etwas eintragen.");let t=w("notes",e.id),n=$e({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=zt(t,n,["updatedAt","createdAt"]);return await J(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${Z(w("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function xc(e){let t=w("notes",e);t&&await J(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:Z(w("customers",t.customerId)),prev:t})})}var fc=/^([01]\d|2[0-3]):[0-5]\d$/,ep=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function $i(e){w("companies",e.companyId)||L("Bitte das Unternehmen wählen, über das der Termin läuft."),mn(e.date)||L("Bitte ein gültiges Datum eintragen."),(!fc.test(e.start||"")||!fc.test(e.end||""))&&L("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&L("Das Ende liegt vor dem Beginn.");let t=w("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&L("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=w("appointments",e.id),a=$e({...e,title:String(e.title||"").trim()||(t?`Termin mit ${Z(t)}`:String(e.contactName||"").trim())});n&&ep.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=zt(n,a,["updatedAt","createdAt","sequence"]);return await J(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function bi(e,{outcome:t,nextSteps:n,todos:a=[]}){let s=w("appointments",e);s||L("Termin nicht gefunden.");let i=a.filter(c=>String(c.title||"").trim());for(let c of i)c.due&&!mn(c.due)&&L(`Bitte die Fälligkeit von „${c.title}“ prüfen.`);let r=$e({...s,status:"done",outcome:String(t||"").trim(),nextSteps:String(n||"").trim(),followUpAt:null});s.status!=="done"&&(r.sequence=(Number(s.sequence)||0)+1);let o=i.map(c=>On({title:String(c.title).trim(),due:c.due||"",customerId:s.customerId||"",companyId:s.companyId||"",appointmentId:s.id}));return await J(async c=>{await c.put("appointments",r);for(let p of o)await c.put("todos",p);await c.audit({action:"Termin dokumentiert",entity:"appointments",entityId:e,label:`${s.date} ${s.start}, ${s.title}`,prev:{status:s.status,outcome:s.outcome||""},next:{status:"done",outcome:r.outcome,nextSteps:r.nextSteps,todos:o.map(p=>p.title).join(", ")}})}),{appointment:r,todos:o}}async function kc(e,t){let n=w("appointments",e);if(!n)return null;let a=$e({...n,followUpAt:t});return await J(async s=>{await s.put("appointments",a)}),a}async function ds(e){String(e.title||"").trim()||L("Bitte beschreiben, was zu tun ist."),e.due&&!mn(e.due)&&L("Bitte die Fälligkeit prüfen.");let t=w("todos",e.id),n=$e({...e,title:String(e.title).trim()}),a=zt(t,n,["updatedAt","createdAt"]);return t&&!a.changed.length||await J(async s=>{await s.put("todos",n),await s.audit({action:t?"To-do geändert":"To-do angelegt",entity:"todos",entityId:n.id,label:n.title,prev:t?a.prev:null,next:t?a.next:{title:n.title,due:n.due}})}),n}async function Dc(e,t=!0){let n=w("todos",e);if(!n)return null;let a=$e({...n,done:!!t,doneAt:t?ne():null});return await J(async s=>{await s.put("todos",a),await s.audit({action:t?"To-do erledigt":"To-do wieder geöffnet",entity:"todos",entityId:e,label:n.title,prev:{done:n.done},next:{done:!!t}})}),a}async function Sc(e){let t=w("todos",e);t&&await J(async n=>{await n.del("todos",e),await n.audit({action:"To-do gelöscht",entity:"todos",entityId:e,label:t.title,prev:t})})}async function yi(e,t,n){let a=w("appointments",e);a||L("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||L("Unbekannter Status.");let s=$e({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await J(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function Cc(e){let t=w("appointments",e);t&&await J(async n=>{for(let a of Ee("todos").filter(s=>s.appointmentId===e))await n.put("todos",$e({...a,appointmentId:""}));await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function vi(e){String(e.name||"").trim()||L("Bitte einen Namen für die Leistung eintragen.");let t=w("services",e.id),n=$e({...e,code:String(e.code||"").trim()}),a=n.code&&Ee("services").find(i=>i.id!==n.id&&(i.code||"").toLowerCase()===n.code.toLowerCase());a&&L(`Die Leistungsnummer ${n.code} ist bereits vergeben (${a.name}).`);let s=zt(t,n,["updatedAt","createdAt"]);return await J(async i=>{await i.put("services",n),await i.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?s.prev:null,next:s.next})}),n}async function Ic(e,{companyId:t="",update:n=!1}={}){t&&!w("companies",t)&&L("Das gewählte Unternehmen existiert nicht.");let a=new Map(Ee("services").filter(p=>p.code).map(p=>[p.code.toLowerCase(),p])),s=[],i=[],r=[];for(let p of e){let{company:d,...u}=p,m=String(u.name||"").trim();if(!m)continue;let f=String(u.code||"").trim(),$=f?a.get(f.toLowerCase()):null;if($&&!n){r.push($);continue}let y=$||Jt(),b=$e({...y,...u,name:m,code:f,companyId:t||u.companyId||y.companyId||"",id:y.id,createdAt:y.createdAt});$?i.push({before:$,rec:b}):s.push(b),f&&a.set(f.toLowerCase(),b)}let o=v.settings.serviceCategories||[],c=[...new Set([...s,...i.map(p=>p.rec)].map(p=>p.category).filter(p=>p&&!o.includes(p)))];return await J(async p=>{for(let d of s)await p.put("services",d);for(let{rec:d}of i)await p.put("services",d);c.length&&await p.setting("serviceCategories",[...o,...c]),await p.audit({action:"Leistungen importiert",entity:"services",entityId:"",label:`${s.length} neu, ${i.length} aktualisiert, ${r.length} übersprungen`,prev:i.length?{aktualisiert:i.map(d=>({code:d.before.code,name:d.before.name,priceCents:d.before.priceCents}))}:null,next:{neu:s.map(d=>d.code||d.name),...c.length?{kategorien:c}:{}}})}),{added:s.length,updated:i.length,skipped:r.length,categories:c}}async function Ec(e){let t=w("services",e);t&&await J(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function dt(e,t){return Yt({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function Hr(e){return be(e.issueDate)?Ce(e.issueDate,Number(e.paymentTermDays)||0):""}function aa(e){let t=$e({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=Hr(t)),t.fx&&Be.includes(t.currency)&&(t.fx=en(t.currency,t.fx.usdToEur,t.fx)),t.totals=ht(t),t}function Nc(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new Ie(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=we(t[a]):delete e[a];return n}async function Na(e){let t=w("invoices",e.id);t&&t.status!=="draft"&&L("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&L("Nur Entwürfe können gespeichert werden.");let n=aa(e);return await J(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new Ie("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");Nc(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${Z(w("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function Wr(e){let t=w("invoices",e);if(t){if(t.number||t.status!=="draft"){await Qr(e);return}await J(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new Ie("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await Tc(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:gi(t)})})}}async function Qr(e){let t=w("invoices",e);return t?t.type==="credit_note"?Xr(e):t.status==="draft"&&!t.number?(await Wr(e),{number:""}):J(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await Zr(n,r,"credit"));for(let p of s)await n.del("payments",p.id);for(let p of i)await n.del("reminders",p.id);await n.del("invoices",e);let o=await Zr(n,a,"invoice");await Tc(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Z(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:Me(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:we(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function wi(e,t="invoice"){let n=[],a=w("companies",e.companyId);a||n.push("Unternehmen auswählen"),w("customers",e.customerId)||n.push("Kunde auswählen"),be(e.issueDate)?mn(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!be(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&be(e.issueDate)&&e.fx.forDate!==Xn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),Be.includes(e.currency)||n.push("Währung wählen"),a&&w("customers",e.customerId)){let i=dc(Bt(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=nn(Vt(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function ms(e,t,n){if(!e||!be(n))return"";let{pattern:a}=Vt(e,t);if(nn(a))return"";let s=ta(e.id,t,a,n),i=w("counters",s),r=new Set([...Ee("invoices"),...Ee("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await Vr(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Jr(e,t,n,a){let{pattern:s}=Vt(t,n),i=ta(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await Vr(t,n,a,r.last,async p=>!!await e.byIndex("invoices","number",p)||!!await e.byIndex("quotes","number",p));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function Zr(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!be(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=Vt(i,n);if(nn(o))return null;let p=ta(i.id,n,o,t.issueDate),d=await e.get("counters",p);if(!d)return null;for(let u=Number(d.last)||0;u>=1;u--)if(qr(o,{prefix:r,dateISO:t.issueDate,n:u,digits:c})===t.number){a={key:p,n:u};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function Tc(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===_t(t.issueDate,Ci(n),n.anchorDay)&&await e.put("recurring",$e({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",$e({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function Ac(e,t,n,a){let{pattern:s}=Vt(e,t),i=ta(e.id,t,s,n),r=w("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await J(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${hc[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function Yr(e,t){return{company:we(e),customer:we(t),at:ne()}}async function ps(e){let t=wi(e,"invoice");t.length&&L(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=w("companies",e.companyId),a=w("customers",e.customerId),s=w("invoices",e.id);s&&s.status!=="draft"&&L("Diese Rechnung ist bereits erstellt.");let i=aa(e);return J(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new Ie("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=Nc(i,o),p=c?i.reopened||{}:null;if(!c){let u=await Jr(r,n,"invoice",i.issueDate);i.number=u.number,i.numberRef=u.ref}i.status="issued",i.finalizedAt=ne(),i.sentAt=null;let d=await r.get("customers",i.customerId)||a;if(!Ue(d)){let u=d.number,m=$e({...d,kind:"customer"});vc("contact",u)&&(m.formerNumbers=[...d.formerNumbers||[],u],m.number=En("customer",[...Ee("customers").filter(f=>f.id!==d.id),{formerNumbers:m.formerNumbers}])),await r.put("customers",m),await r.audit({action:"Kontakt zum Kunden gemacht",entity:"customers",entityId:m.id,label:Z(m),prev:{kind:"contact",number:u},next:{kind:"customer",number:m.number,reason:"Erste Rechnung"}}),d=m}if(i.snapshot=Yr(n,d),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:p.totalCents,currency:p.currency,issueDate:p.issueDate,customer:p.customer,usdToEur:p.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:Z(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let u=await r.get("quotes",i.quoteId);u&&u.status!=="invoiced"&&await r.put("quotes",$e({...u,status:"invoiced",invoiceId:i.id}))}return i})}async function Rc(e){let t=w("invoices",e);return t||L("Rechnung nicht gefunden."),t.type==="credit_note"&&L("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||L("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),J(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Z(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=$e({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:we(a)},next:{status:"draft"}}),o})}async function sa(e,t=!0){let n=w("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=$e({...n,status:t?"sent":"issued",sentAt:t?ne():null});await J(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function xi(e,t,n){let a=w(e,t);a&&await J(async s=>{await s.put(e,$e({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function fs(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=w("invoices",e);r||L("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&L("Zu diesem Beleg können keine Zahlungen erfasst werden."),be(t)||L("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||L("Bitte einen Zahlungsbetrag größer als null eintragen."),o>dn(r,Ye(e))&&L("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:Fe(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await J(async p=>{let d=await p.get("invoices",e),u=await p.allByIndex("payments","invoiceId",e);if(!d||d.type==="credit_note"||["draft","cancelled","credited"].includes(d.status))throw new Ie("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>dn(d,u))throw new Ie("Der Betrag ist höher als der offene Rechnungsbetrag.");await p.put("payments",c);let m=[...u,c];await p.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:tn(d,u,F()),paidCents:Me(u)},next:{status:tn(d,m,F()),paidCents:Me(m),amountCents:o,date:t,method:a}});let f=String(i||"").trim();f&&(await p.put("invoices",$e({...d,clarify:{note:f,at:ne()}})),await p.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:d.clarify?{note:d.clarify.note}:null,next:{note:f}}))}),c}async function Bc(e,{date:t,amountCents:n,method:a,note:s}){w("payments",e)||L("Zahlung nicht gefunden."),be(t)||L("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||L("Bitte einen Betrag größer als null eintragen."),J(async o=>{let c=await o.get("payments",e);if(!c)throw new Ie("Diese Zahlung gibt es nicht mehr.");let p=c.amountCents<0,d=await o.get("invoices",c.invoiceId),u=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(g=>g.id!==e),m=p?-r:r,f=Me(u)+m;if(f<0)throw new Ie(p?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let $=d&&d.totals?d.totals.totalCents:null;if(!p&&$!=null&&f>$)throw new Ie("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let y={...c,date:t,amountCents:m,method:a||"",note:s||"",updatedAt:ne()},b=zt(c,y,["updatedAt","createdAt"]);return Object.keys(b.next).length&&(await o.put("payments",y),await o.audit({action:p?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:d?d.number:"",prev:b.prev,next:b.next})),y})}async function Uc(e,t){let n=String(t||"").trim();return n||L("Bitte kurz notieren, was zu klären ist."),J(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new Ie("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=$e({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function Mc(e,t){return J(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=$e({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function _c(e,{date:t,amountCents:n,method:a,note:s}){let i=w("invoices",e);i||L("Rechnung nicht gefunden."),i.status!=="credited"&&L("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),be(t)||L("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||L("Bitte einen Betrag größer als null eintragen.");let o={id:Fe(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await J(async c=>{let p=await c.allByIndex("payments","invoiceId",e);if(r>Me(p))throw new Ie("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:Me(p)},next:{paidCents:Me(p)-r,amountCents:-r,date:t,method:a}})}),o}async function zc(e){let t=w("payments",e);if(!t)return;let n=w("invoices",t.invoiceId);await J(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(Me(s)<0)throw new Ie("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function ki(e,t){let n=w("invoices",e);n&&(n.type==="credit_note"&&L("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||L("Diese Rechnung kann nicht storniert werden."),Me(Ye(e))>0&&L("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await J(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(Me(i)>0)throw new Ie("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=$e({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function Pc(e){return J(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new Ie("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=$e({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function Di(e,t){let n=w("invoices",e);n||L("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&L("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=w("companies",n.companyId);a||L("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=F(),i={...gt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:Fe(),qty:-Number(r.qty)})),discount:we(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:we(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=ht(i),J(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Jr(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:we(a),customer:we(n.snapshot?n.snapshot.customer:w("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",$e({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function Xr(e){let t=w("invoices",e);t||L("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||L("Zu dieser Rechnung gibt es keine Gutschrift."),J(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new Ie("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(p=>p.amountCents<0))throw new Ie(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await Zr(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=$e({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:we(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function Lc(e){let t=w("companies",e.companyId);return{...gt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:Fe()})),discount:we(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function Kc(e){let t=w("quotes",e.id);t&&t.status!=="draft"&&L("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=aa(e);return await J(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${Z(w("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function Oc(e){let t=w("quotes",e);t&&(t.status!=="draft"&&L("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await J(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:gi(t)})}))}async function gs(e){let t=wi(e,"quote");t.length&&L(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=w("companies",e.companyId),a=w("customers",e.customerId),s=w("quotes",e.id);s&&s.status!=="draft"&&L("Dieses Angebot ist bereits erstellt.");let i=aa(e);return J(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new Ie("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Jr(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=Yr(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var gc={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function ia(e,t){let n=w("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!gc[t])return;let a=$e({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await J(async s=>{await s.put("quotes",a),await s.audit({action:gc[t],entity:"quotes",entityId:e,label:Je(n),prev:{status:n.status},next:{status:t}})})}async function Fc(e){let t=w("quotes",e);t||L("Angebot nicht gefunden."),t.status==="draft"&&L("Bitte das Angebot zuerst erstellen."),t.invoiceId&&w("invoices",t.invoiceId)&&L("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=w("companies",t.companyId);n||L("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=w("customers",t.customerId),s=aa({...gt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:Fe()})),discount:we(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await J(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new Ie("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new Ie("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",$e({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:Je(t),next:{invoiceDraftId:s.id}})}),s}async function qc(e,t,n,a){let s={id:Fe(),name:t.name||"Dokument.pdf",mime:t.blob.type||"application/pdf",size:t.blob.size,ownerType:n,ownerId:a,createdAt:ne()};return await e.blobPut(s.id,t.blob),await e.put("attachments",s),s}async function Si(e,t){await e.del("attachments",t),await e.blobDel(t)}var tp=["open","sent","accepted","declined"];async function Vc(e,t=null){let n=w("quotes",e.id);n&&n.source!=="upload"&&L("Nur hochgeladene Angebote lassen sich so bearbeiten.");let a=w("companies",e.companyId),s=w("customers",e.customerId);a||L("Bitte das Unternehmen wählen, von dem das Angebot stammt."),s||L("Bitte den Kontakt wählen."),String(e.title||"").trim()||L("Bitte eine Bezeichnung eintragen, z. B. „Website-Relaunch“."),mn(e.issueDate)||L("Bitte das Angebotsdatum eintragen."),e.validUntil&&(!mn(e.validUntil)||e.validUntil<e.issueDate)&&L("„Gültig bis“ muss nach dem Angebotsdatum liegen."),Be.includes(e.currency)||L("Bitte USD oder EUR wählen.");let i=e.items||[];(i.length!==1||!(Number(i[0].priceCents)>=0))&&L("Bitte den Betrag des Angebots eintragen.");let r=n&&n.status==="invoiced";!r&&!tp.includes(e.status)&&L("Unbekannter Status."),!t&&!(e.attachmentIds||[]).length&&L("Bitte das PDF des Angebots auswählen.");let o=aa({...e,source:"upload",number:null,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim()});o.items=[{...i[0],name:o.title,qty:1}],o.totals=ht(o),r&&(o.status="invoiced"),o.finalizedAt=n&&n.finalizedAt||ne(),o.status==="sent"&&!o.sentAt&&(o.sentAt=ne()),["accepted","declined"].includes(o.status)&&!o.decidedAt&&(o.decidedAt=ne()),["open","sent"].includes(o.status)&&(o.decidedAt=null),o.snapshot=Yr(a,s);let c=zt(n,o,["updatedAt","createdAt","snapshot","totals","fx","attachmentIds"]);return J(async p=>{if(t){for(let u of o.attachmentIds||[])await Si(p,u);let d=await qc(p,t,"quote",o.id);o.attachmentIds=[d.id]}return await p.put("quotes",o),await p.audit({action:n?t?"PDF-Angebot ersetzt":"PDF-Angebot geändert":"PDF-Angebot hochgeladen",entity:"quotes",entityId:o.id,label:Je(o),prev:n?c.prev:null,next:n?c.next:{title:o.title,totalCents:o.totals.totalCents,currency:o.currency}}),o})}async function Zc(e){let t=w("quotes",e);t&&(t.source!=="upload"&&L("Im Tool erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),t.invoiceId&&w("invoices",t.invoiceId)&&L("Zu diesem Angebot gibt es eine Rechnung. Es bleibt deshalb erhalten."),await J(async n=>{for(let a of t.attachmentIds||[])await Si(n,a);for(let a of Ee("contracts").filter(s=>s.quoteId===e))await n.put("contracts",$e({...a,quoteId:""}));await n.del("quotes",e),await n.audit({action:"PDF-Angebot gelöscht",entity:"quotes",entityId:e,label:Je(t),prev:gi(t)})}))}async function hs(e,{files:t=[],removeIds:n=[]}={}){let a=w("contracts",e.id);w("companies",e.companyId)||L("Bitte das Unternehmen wählen, mit dem der Vertrag besteht."),w("customers",e.customerId)||L("Bitte den Kontakt wählen."),String(e.title||"").trim()||L("Bitte eine Bezeichnung eintragen, z. B. „SEO-Betreuung“."),ya[e.status]||L("Unbekannter Status.");for(let[c,p]of[["signedDate","Unterschrieben am"],["startDate","Beginn"],["endDate","Ende"]])e[c]&&!mn(e[c])&&L(`Bitte das Datum „${p}“ prüfen.`);e.startDate&&e.endDate&&e.endDate<e.startDate&&L("Das Vertragsende liegt vor dem Beginn."),Be.includes(e.currency)||L("Bitte USD oder EUR wählen."),e.quoteId&&!w("quotes",e.quoteId)&&L("Das verknüpfte Angebot existiert nicht mehr.");let s=(e.items||[]).map(c=>({...c,id:c.id&&!String(c.id).startsWith("legacy-")?c.id:Fe(),name:String(c.name||"").trim(),qty:Number(c.qty)||0,priceCents:Math.round(Number(c.priceCents)||0),taxRate:Number(c.taxRate)||0})),i=uc(s);i&&L(i);let r=$e({...e,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim(),items:s,attachmentIds:(e.attachmentIds||[]).filter(c=>!n.includes(c))});s.length&&r.amountCents!=null&&(r.amountCents=null,r.billing="none");let o=zt(a,r,["updatedAt","createdAt","attachmentIds"]);return J(async c=>{for(let d of n)await Si(c,d);for(let d of t)r.attachmentIds.push((await qc(c,d,"contract",r.id)).id);await c.put("contracts",r);let p=[t.length&&`${t.length} PDF hinzugefügt`,n.length&&`${n.length} PDF entfernt`].filter(Boolean).join(", ");return await c.audit({action:a?"Vertrag geändert":"Vertrag angelegt",entity:"contracts",entityId:r.id,label:r.title,prev:a?o.prev:null,next:a?{...o.next,...p?{dateien:p}:{}}:{title:r.title,status:r.status,positionen:s.length,...p?{dateien:p}:{}}}),r})}async function Gc(e){let t=w("contracts",e);t&&await J(async n=>{for(let a of t.attachmentIds||[])await Si(n,a);for(let a of Ee("invoices").filter(s=>s.contractId===e)){let s=await n.get("invoices",a.id);s&&await n.put("invoices",{...s,contractId:""})}for(let a of Ee("recurring").filter(s=>s.contractId===e))await n.put("recurring",$e({...a,contractId:""}));await n.del("contracts",e),await n.audit({action:"Vertrag gelöscht",entity:"contracts",entityId:e,label:t.title,prev:t})})}async function Nn(e){let t=w("expenses",e.id),n=$e({...e});n.status!=="review"&&(w("companies",n.companyId)||L("Bitte ein Unternehmen auswählen."),mn(n.invoiceDate)||L("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&L("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||L("Bitte einen Lieferanten eintragen."),n.paymentDate&&!mn(n.paymentDate)&&L("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||L("Bitte den Wechselkurs laden oder eintragen."));let a=zt(t,n,["updatedAt","createdAt","ai"]);return await J(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function jc(e){let t=w("expenses",e);t&&await J(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function eo({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:Fe(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await J(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function to(e){await J(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function Ci(e){let t=Kn.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function $s(e){String(e.name||"").trim()||L("Bitte der Vorlage einen Namen geben."),w("companies",e.companyId)||L("Bitte ein Unternehmen auswählen."),w("customers",e.customerId)||L("Bitte einen Kunden auswählen."),(e.items||[]).length||L("Bitte mindestens eine Position hinzufügen."),be(e.nextDate)||L("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!be(e.endDate)&&L("Bitte das Enddatum prüfen.");let t=w("recurring",e.id),n=$e({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=ht(n),await J(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function Hc(e){let t=w("recurring",e);t&&await J(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var Ta=(e,t=F())=>!!e&&e.active&&be(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),Aa=e=>!!e.endDate&&be(e.nextDate)&&e.nextDate>e.endDate;async function no(e,{early:t=!1}={}){let n=w("recurring",e);n||L("Vorlage nicht gefunden."),Aa(n)&&L("Diese Vorlage hat ihr Enddatum erreicht."),n.active||L("Diese Vorlage ist pausiert."),!t&&n.nextDate>F()&&L("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=w("companies",n.companyId),s=w("customers",n.customerId);(!a||!s)&&L("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=Ci(n),r=n.nextDate,o=Ce(_t(r,i,n.anchorDay),-1),c=aa({...gt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:Fe()})),discount:we(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id,...n.contractId?{contractId:n.contractId,contractPart:n.contractInterval||n.interval}:{}}),p=_t(r,i,n.anchorDay),d=!!n.endDate&&p>n.endDate,u=$e({...n,nextDate:p,generated:(n.generated||0)+1,lastRunAt:ne(),active:d?!1:n.active,endedByRun:d});return await J(async m=>{let f=await m.get("recurring",n.id);if(!f||f.nextDate!==n.nextDate||!f.active)throw new Ie("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",c),await m.put("recurring",u),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:p}})}),c}async function Wc(e,t,n){let a=w("invoices",e);if(!a)return null;let s={id:Fe(),invoiceId:e,level:t,date:F(),note:n||"",createdAt:ne()};return await J(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}var np="https://api.anthropic.com/v1/messages",ap=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],Qc=/^([01]\d|2[0-3]):[0-5]\d$/;function Jc(e,{today:t,timeZone:n,now:a=new Date}){let s={},i=[],r=(g,h,I)=>{let S=`${g}${h+1}`;return s[S]=I,S},o=e.companies.filter(g=>!g.archived);i.push("UNTERNEHMEN (über welches Konto etwas läuft):"),o.forEach((g,h)=>i.push(`${r("U",h,g.id)}: ${g.name}${g.shortName&&g.shortName!==g.name?` (${g.shortName})`:""}${g.meetingProvider?`, Meetings über ${g.meetingProvider}`:""}`));let c=e.customers.filter(g=>g.active!==!1).slice(0,600);i.push("","KONTAKTE (K = Kürzel; Art: Kunde oder Kontakt/Interessent):"),c.forEach((g,h)=>{let I=ct(g);i.push(`${r("K",h,g.id)}: ${Z(g)}${I&&I!==Z(g)?` – ${I}`:""} [${g.kind==="contact"?"Kontakt":"Kunde"} ${g.number||""}]${g.city?`, ${g.city}`:""}`)});let p=new Map(Object.entries(s).map(([g,h])=>[h,g])),d=e.services.filter(g=>g.active!==!1).slice(0,200);d.length&&(i.push("","LEISTUNGEN (für Rechnungsentwürfe):"),d.forEach((g,h)=>i.push(`${r("L",h,g.id)}: ${g.name}${g.tier?` (Tarif ${g.tier==="starter"?"Starter":"Standard"})`:""}${g.code?` [${g.code}]`:""} – ${((g.priceCents||0)/100).toFixed(2)} ${g.currency||""} je ${g.unit||"Stück"}`)));let u=new Date(a.getTime()-14*864e5).toISOString().slice(0,10),m=new Date(a.getTime()+30*864e5).toISOString().slice(0,10),f=e.appointments.filter(g=>g.date>=u&&g.date<=m).sort((g,h)=>`${g.date}${g.start}`<`${h.date}${h.start}`?-1:1).slice(0,80);f.length&&(i.push("","TERMINE (letzte 14 und nächste 30 Tage):"),f.forEach((g,h)=>i.push(`${r("T",h,g.id)}: ${g.date} ${g.start}–${g.end}, ${g.title}${g.customerId&&p.get(g.customerId)?` (${p.get(g.customerId)})`:""}, ${g.status==="done"?"dokumentiert":g.status==="cancelled"?"abgesagt":"geplant"}`)));let $=e.todos.filter(g=>!g.done).sort((g,h)=>(g.due||"9")<(h.due||"9")?-1:1).slice(0,60);$.length&&(i.push("","OFFENE TO-DOS:"),$.forEach(g=>i.push(`- ${g.title}${g.due?` (fällig ${g.due})`:""}${g.customerId&&p.get(g.customerId)?` (${p.get(g.customerId)})`:""}`)));let y=new Date(`${t}T12:00:00Z`);return{text:`${`Heute ist ${ap[y.getUTCDay()]}, ${t}. Zeitzone: ${n}. Uhrzeit jetzt: ${a.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",timeZone:n})}.`}

${i.join(`
`)}`,map:s}}var Ii={type:"string",description:"Kürzel eines Kontakts (K…) oder die ref eines im selben Befehl neu angelegten Kontakts (NEU1 …)."},Ei={type:"string",description:"Datum YYYY-MM-DD. Relative Angaben („Freitag“, „in zwei Wochen“) vom heutigen Datum aus berechnen."},sp=[{name:"create_todos",description:"Legt ein oder mehrere To-dos an.",input_schema:{type:"object",properties:{todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:Ei,contact:Ii,company:{type:"string",description:"Kürzel U…, optional"}},required:["title"]}}},required:["todos"]}},{name:"create_appointment",description:"Plant einen Termin. Meeting-Link und Zugangsdaten setzt das Tool automatisch aus dem Unternehmen.",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U… – über welches Unternehmen der Termin läuft. Pflicht; nur raten, wenn es genau ein Unternehmen gibt."},contact:Ii,contact_name:{type:"string",description:"Gesprächspartner, falls kein Kontakt passt oder eine bestimmte Person gemeint ist."},title:{type:"string"},date:Ei,start:{type:"string",description:"Beginn HH:MM (24 h)."},duration_minutes:{type:"number",description:"Dauer in Minuten, wenn genannt."},kind:{type:"string",enum:["video","phone","onsite"],description:"Standard video."},location:{type:"string",description:"Ort bei Vor-Ort-Terminen bzw. Telefonnummer."},agenda:{type:"string"}},required:["company","date","start"]}},{name:"add_note",description:"Trägt eine Notiz in die Kundendokumentation ein (Telefonat, Gespräch, E-Mail, Notiz).",input_schema:{type:"object",properties:{contact:Ii,kind:{type:"string",enum:["note","call","email","meeting","task"]},title:{type:"string"},text:{type:"string"},date:Ei},required:["contact","text"]}},{name:"create_contact",description:"Legt einen neuen Kontakt oder Kunden an. Nur, wenn ausdrücklich ein neuer Kontakt gemeint ist und keiner aus der Liste passt.",input_schema:{type:"object",properties:{ref:{type:"string",description:"NEU1, NEU2 … – damit andere Aufrufe im selben Befehl darauf verweisen können."},kind:{type:"string",enum:["contact","customer"],description:"Standard contact."},company:{type:"string"},first_name:{type:"string"},last_name:{type:"string"},email:{type:"string"},phone:{type:"string"},city:{type:"string"},notes:{type:"string"}},required:["ref"]}},{name:"document_appointment",description:"Dokumentiert einen Termin aus der Liste: Ergebnis, nächste Schritte, To-dos.",input_schema:{type:"object",properties:{appointment:{type:"string",description:"Kürzel T…"},outcome:{type:"string"},next_steps:{type:"string"},todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:Ei},required:["title"]}}},required:["appointment"]}},{name:"create_invoice_draft",description:"Legt einen Rechnungsentwurf an (nur Entwurf – erstellt wird er im Tool per Klick).",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U…"},contact:Ii,items:{type:"array",items:{type:"object",properties:{service:{type:"string",description:"Kürzel L…, wenn eine Leistung passt"},name:{type:"string",description:"Bezeichnung, wenn keine Leistung passt"},quantity:{type:"number"},unit_price:{type:"number",description:"Einzelpreis netto, nur wenn genannt"}}}}},required:["company","contact","items"]}},{name:"answer",description:"Antwortet in Textform: auf Fragen („Was steht heute an?“) oder mit einer Rückfrage, wenn etwas unklar ist (z. B. welcher Kontakt gemeint ist).",input_schema:{type:"object",properties:{text:{type:"string"}},required:["text"]}}],ip=`Du bist die Sprachsteuerung von BBC Finance, einem Rechnungs- und CRM-Tool. Der Nutzer spricht Deutsch; der Text stammt aus einer Spracherkennung und kann Hörfehler enthalten.
Setze den Befehl ausschließlich mit den Werkzeugen um. Du darfst mehrere Werkzeuge in einer Antwort aufrufen.
Regeln:
- Verwende nur Kürzel aus der Übersicht. Ordne Namen großzügig zu (Hörfehler, Vor- oder Nachname, Firmenname). Passen mehrere Kontakte gleich gut oder keiner, frage mit answer nach statt zu raten.
- Fehlt beim Termin das Unternehmen und gibt es mehr als eines, frage mit answer nach.
- Datumsangaben immer als YYYY-MM-DD, Uhrzeiten als HH:MM. „Nächste Woche“ ohne Tag = Montag der nächsten Woche.
- To-do-Titel kurz und als Aufgabe formulieren („Angebot schicken“).
- Rechnungen gibt es nur als Entwurf. Löschen, Stornieren und Zahlungen sind nicht per Sprache möglich – erkläre das mit answer.
- Fragen beantwortest du knapp mit answer anhand der Übersicht.`;function rp({model:e,text:t,context:n}){return{model:e,max_tokens:2e3,system:ip,tools:sp,tool_choice:{type:"any"},messages:[{role:"user",content:`${n}

---
BEFEHL: ${t}`}]}}var Ra=(e,t,n)=>typeof t=="string"&&t.startsWith(n)&&e[t]?e[t]:"",bs=e=>typeof e=="string"&&be(e)?e:"";function op(e,t){let n=e&&Array.isArray(e.content)?e.content.filter(o=>o.type==="tool_use"):[];if(!n.length)throw new Error("Der Befehl wurde nicht verstanden. Bitte anders formulieren.");let a=[],s=[],i=new Set(n.filter(o=>o.name==="create_contact").map(o=>String((o.input||{}).ref||""))),r=(o,c)=>{if(!o)return"";if(i.has(o))return`ref:${o}`;let p=Ra(t,o,"K");return p||c.push(`Kontakt „${o}“ nicht gefunden – wird ohne Kontakt angelegt.`),p};for(let o of n){let c=o.input||{},p=[];if(o.name==="answer"){c.text&&s.push(String(c.text));continue}if(o.name==="create_todos"){let d=(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:bs(u.due),customerId:r(u.contact,p),companyId:Ra(t,u.company,"U")}));d.length&&a.push({type:"todos",items:d,warnings:p})}else if(o.name==="create_appointment"){let d=Ra(t,c.company,"U");d||p.push("Unternehmen nicht erkannt – bitte nach dem Anlegen prüfen."),bs(c.date)||p.push("Datum nicht erkannt."),Qc.test(String(c.start||""))||p.push("Uhrzeit nicht erkannt."),a.push({type:"appointment",companyId:d,customerId:r(c.contact,p),contactName:String(c.contact_name||"").trim(),title:String(c.title||"").trim(),date:bs(c.date),start:Qc.test(String(c.start||""))?c.start:"",duration:Number(c.duration_minutes)>0?Math.min(Math.round(Number(c.duration_minutes)),600):0,kind:["video","phone","onsite"].includes(c.kind)?c.kind:"video",location:String(c.location||"").trim(),agenda:String(c.agenda||"").trim(),warnings:p})}else if(o.name==="add_note"){let d=r(c.contact,p);if(!d)continue;a.push({type:"note",customerId:d,kind:["note","call","email","meeting","task"].includes(c.kind)?c.kind:"note",title:String(c.title||"").trim(),text:String(c.text||"").trim(),date:bs(c.date),warnings:p})}else if(o.name==="create_contact")a.push({type:"contact",ref:String(c.ref||""),kind:c.kind==="customer"?"customer":"contact",company:String(c.company||"").trim(),firstName:String(c.first_name||"").trim(),lastName:String(c.last_name||"").trim(),email:String(c.email||"").trim().toLowerCase(),phone:String(c.phone||"").trim(),city:String(c.city||"").trim(),notes:String(c.notes||"").trim(),warnings:p});else if(o.name==="document_appointment"){let d=Ra(t,c.appointment,"T");if(!d){s.push("Der Termin zum Dokumentieren wurde nicht gefunden.");continue}a.push({type:"document",appointmentId:d,outcome:String(c.outcome||"").trim(),nextSteps:String(c.next_steps||"").trim(),todos:(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:bs(u.due)})),warnings:p})}else if(o.name==="create_invoice_draft"){let d=Ra(t,c.company,"U"),u=r(c.contact,p);if(!d||!u){s.push("Für den Rechnungsentwurf fehlen Unternehmen oder Kunde.");continue}let m=(Array.isArray(c.items)?c.items:[]).map(f=>({serviceId:Ra(t,f.service,"L"),name:String(f.name||"").trim(),qty:Number(f.quantity)>0?Number(f.quantity):1,priceCents:Number.isFinite(Number(f.unit_price))&&f.unit_price!=null?Math.round(Number(f.unit_price)*100):null})).filter(f=>f.serviceId||f.name);m.length&&a.push({type:"invoice",companyId:d,customerId:u,items:m,warnings:p})}}return{actions:a,answers:s}}function lp(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===404?`Das eingestellte KI-Modell wurde nicht gefunden${n}.`:e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Der Sprachbefehl ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Yc({apiKey:e,model:t,text:n,context:a,map:s}){if(!e)throw new Error("Für Sprachbefehle braucht es den API-Key aus den Einstellungen.");let i;try{i=await fetch(np,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(rp({model:t,text:n,context:a}))})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let r=null;try{r=await i.json()}catch{}if(!i.ok)throw new Error(lp(i.status,r));return{...op(r,s),usage:r.usage||null}}var pn=()=>({invoices:v.invoices,quotes:v.quotes,payments:v.payments,expenses:v.expenses,customers:v.customers,companies:v.companies,services:v.services,recurring:v.recurring}),wt=()=>{let e=de();return e?e.id:null};function Ni(e){return tn(e,Ye(e.id),F())}function Tn({inv:e}){let t=Ni(e),n=Ya[t]||Ya.draft;return l`<span class="badges"><${Pe} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${Pe} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function ys({quote:e}){let t=qt(e,F()),n=pa[t]||pa.draft;return l`<${Pe} tone=${n.tone}>${n.label}<//>`}var oe=()=>v.settings.displayCurrency==="EUR"?"EUR":"USD",An=()=>oe()==="USD"?"EUR":"USD",P=(e,t="",n=oe())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},Ae=(e,t="")=>P(e,t,An()),ae=e=>j(e,oe()),Ze=e=>j(e,An()),mt=(e,t,n)=>un(e,t,oe(),n);function Zt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?Ft(n,e.currency,e.fx):St(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${j(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${j(s,a)}</span>`}
  </span>`}function Ke({id:e}){let t=w("companies",e);return t?l`<span class="co-tag"><${pi} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Ge(e){let t=w("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return Z(t)||"–"}var Ba=e=>dn(e,Ye(e.id));var ao=e=>{let t=de();return!t||!e.companyId||e.companyId===t.id};function cp(e=()=>!0){return v.todos.filter(t=>!t.done&&e(t)).sort(Ti)}var Ti=(e,t)=>(e.due||"9999")<(t.due||"9999")?-1:(e.due||"9999")>(t.due||"9999")?1:e.createdAt<t.createdAt?-1:1;function up(e,t=F()){if(!e.due)return{text:"ohne Termin",tone:""};if(e.done)return{text:O(e.due),tone:""};if(e.due<t){let n=yn(e.due,t);return{text:`überfällig seit ${n} ${n===1?"Tag":"Tagen"}`,tone:"bad"}}return e.due===t?{text:"heute fällig",tone:"good"}:e.due===Ce(t,1)?{text:"morgen",tone:""}:{text:`bis ${O(e.due)}`,tone:""}}var Xc=()=>{let e=F();return v.todos.filter(t=>!t.done&&t.due&&t.due<=e&&ao(t)).length};async function dp(e){let t=await _(()=>Dc(e.id,!e.done));t&&t.done&&M(`Erledigt: ${e.title}`,"good")}function ra({items:e,showCustomer:t=!0,onEdit:n,empty:a}){return e.length?l`<ul class="todo-list">
    ${e.map(s=>{let i=up(s),r=s.customerId?w("customers",s.customerId):null,o=s.appointmentId?w("appointments",s.appointmentId):null,c=s.done?"is-done":i.tone==="bad"?"is-overdue":i.tone==="good"?"is-today":"";return l`<li key=${s.id} class=${c}>
        <input type="checkbox" class="todo-check" checked=${!!s.done} aria-label=${`${s.title} ${s.done?"wieder öffnen":"erledigt"}`} onChange=${()=>dp(s)} />
        <button type="button" class="todo-body" onClick=${()=>n&&n(s)}>
          <span class="todo-title">${s.title}</span>
          <span class="cell-sub">
            <span class=${i.tone?`tone-${i.tone}`:""}>${s.done?`erledigt${s.doneAt?` am ${O(s.doneAt.slice(0,10))}`:""}`:i.text}</span>
            ${t&&r&&l` · ${Z(r)}`}
            ${o&&l` · aus Termin ${O(o.date)}`}
          </span>
        </button>
        ${s.companyId&&l`<span class="todo-co"><${Ke} id=${s.companyId} /></span>`}
      </li>`})}
  </ul>`:a?l`<p class="muted-text">${a}</p>`:null}function Ai({customerId:e="",companyId:t="",withCustomer:n=!1}){let[a,s]=D(""),[i,r]=D(Ce(F(),7)),[o,c]=D(e),p=v.customers.filter(u=>u.active!==!1).sort((u,m)=>Z(u).localeCompare(Z(m),"de")).map(u=>({id:u.id,label:Z(u),sub:u.number}));async function d(u){if(u&&u.preventDefault(),!a.trim())return;let m=t||(de()?de().id:"");await _(()=>ds(On({title:a,due:i,customerId:o||e,companyId:m})))&&(s(""),M("To-do angelegt","good"))}return l`<form class=${`todo-add${n?" with-customer":""}`} onSubmit=${d}>
    <input class="input" placeholder="Neues To-do, z. B. Angebot schicken" aria-label="Neues To-do" value=${a} onInput=${u=>s(u.target.value)} />
    ${n&&l`<${$t} options=${p} value=${o} onChange=${c} placeholder="Kontakt (optional)" label="Kontakt zum To-do" />`}
    <input class="input todo-add-date" type="date" aria-label="Fällig am" value=${i} onInput=${u=>r(u.target.value)} />
    <${C} type="submit" icon="plus" disabled=${!a.trim()}>Hinzufügen<//>
  </form>`}function Ri({todo:e,onClose:t}){let n=!w("todos",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),o=m=>f=>s($=>({...$,[m]:f})),c=[...v.customers].sort((m,f)=>Z(m).localeCompare(Z(f),"de")).map(m=>({id:m.id,label:Z(m),sub:m.number})),p=a.appointmentId?w("appointments",a.appointmentId):null;async function d(){r(!0);let m=await _(()=>ds(a));r(!1),m&&(M(n?"To-do angelegt":"To-do gespeichert","good"),t())}async function u(){if(!await ue({title:"To-do löschen?",text:`„${a.title}“ wird gelöscht. Im Protokoll bleibt der Eintrag erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Sc(a.id),!0))&&(M("To-do gelöscht","good"),t())}return l`<${Le} title=${n?"Neues To-do":"To-do bearbeiten"} onClose=${t} onSubmit=${d}
    footer=${l`${!n&&l`<${C} variant="ghost" icon="trash" onClick=${u}>Löschen<//>`}<span class="spacer"></span>
      <${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${q} class="span-6" label="Was ist zu tun?" value=${a.title} onInput=${o("title")} />
      <${ze} class="span-2" label="Fällig am" value=${a.due} onInput=${o("due")} />
      <${xe} class="span-4" label="Kontakt">
        <${$t} options=${c} value=${a.customerId} onChange=${m=>o("customerId")(m||"")} placeholder="Ohne Kontakt" label="Kontakt" />
      <//>
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${re().map(m=>({id:m.id,label:m.name}))} />
      <div class="span-3 field field-inline">${!n&&l`<label class="check"><input type="checkbox" checked=${!!a.done}
        onChange=${m=>s(f=>({...f,done:m.target.checked,doneAt:m.target.checked?new Date().toISOString():null}))} /> Erledigt</label>`}</div>
      <${ie} class="span-6" label="Notiz" value=${a.note} onInput=${o("note")} rows=${3} />
      ${p&&l`<p class="span-6 field-hint">Aus dem Termin „${p.title}“ am ${O(p.date)}.</p>`}
    </div>
  <//>`}function eu(){let[e,t]=D(null),n=cp(ao),a=n.slice(0,8);return l`<${X} title=${`To-dos${n.length?` (${n.length})`:""}`} class="dash-todos" action=${l`<a class="panel-link" href="#/todos">Alle To-dos</a>`}>
    <${ra} items=${a} onEdit=${t} empty="Keine offenen To-dos." />
    ${n.length>a.length&&l`<p class="cell-sub"><a href="#/todos">${n.length-a.length} weitere</a></p>`}
    <${Ai} withCustomer />
    ${e&&l`<${Ri} key=${e.id} todo=${e} onClose=${()=>t(null)} />`}
  <//>`}function tu(){ge();let[e,t]=D("open"),[n,a]=D(""),[s,i]=D(null),r=F(),o=v.todos.filter(ao),c={open:o.filter(u=>!u.done),due:o.filter(u=>!u.done&&u.due&&u.due<=r),done:o.filter(u=>u.done)},p=u=>u.customerId?Z(w("customers",u.customerId)):"",d=c[e].filter(u=>Te(n,u.title,u.note,p(u)));return d=e==="done"?d.sort((u,m)=>(u.doneAt||"")<(m.doneAt||"")?1:-1):d.sort(Ti),l`
    <${ke} title="To-dos" sub=${de()?`To-dos für ${de().name} und ohne Zuordnung`:"Alle To-dos"}>
      <${C} variant="primary" icon="plus" onClick=${()=>i(On({due:Ce(r,7),companyId:de()?de().id:""}))}>Neues To-do<//>
    <//>
    <div class="filters">
      <input class="input filter-select" type="search" placeholder="To-dos durchsuchen" aria-label="To-dos durchsuchen" value=${n} onInput=${u=>a(u.target.value)} />
      <${bt} label="Filter" value=${e} onChange=${t} options=${[{id:"open",label:"Offen",count:c.open.length},{id:"due",label:"Fällig",count:c.due.length},{id:"done",label:"Erledigt",count:c.done.length}]} />
    </div>
    <${X}>
      <${Ai} withCustomer />
      ${d.length?l`<${ra} items=${d} onEdit=${i} />`:l`<${fe} icon="check" title=${e==="done"?"Noch nichts erledigt":"Nichts offen"} text="To-dos legst du hier, beim Kontakt oder beim Dokumentieren eines Termins an." />`}
    <//>
    ${s&&l`<${Ri} key=${s.id} todo=${s} onClose=${()=>i(null)} />`}
  `}var vs=e=>String(e).padStart(2,"0");function nu(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function iu(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function au(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!iu(n))return new Date(c);let p=nu(c,n),d=c-p*6e4,u=nu(d,n);return u!==p&&(d=c-u*6e4),new Date(d)}function ws(e,t,n="de"){if(!iu(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function Ui(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function ru(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function xs(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var Ua=e=>(ga.find(t=>t.id===e)||{}).label||"",su=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function ou(e,t=new Date){if(!e||e.status!=="planned")return!1;let{end:n}=Rn(e);return n>t?!1:!e.followUpAt||new Date(e.followUpAt)<=t}function Rn(e){let t=au(e.date,e.start,e.timeZone),n=au(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function mp(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=Ua(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function pp(e,t){return String(e.contactName||"").trim()||(t?ct(t)||Z(t):"")}function lu(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=Rn(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),p={CONTACT:pp(e,n),CUSTOMER:n?Z(n):String(e.contactName||""),TITLE:c,DATE:xs(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:ws(e.timeZone,r,s),MEETING:mp(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:Ua(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},d=u=>u.replace(/[ \t]+,/g,",").split(`
`).map(m=>m.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:d(Rt(i.subject,p)).replace(/\n/g," "),body:d(Rt(i.body,p)),vars:p}}var so=e=>`${e.getUTCFullYear()}${vs(e.getUTCMonth()+1)}${vs(e.getUTCDate())}T${vs(e.getUTCHours())}${vs(e.getUTCMinutes())}${vs(e.getUTCSeconds())}Z`,Bi=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function fp(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function cu(e,{summary:t,description:n}){let{start:a,end:s}=Rn(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?su(i)?i:Ua(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${so(new Date)}`,`DTSTART:${so(a)}`,`DTEND:${so(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${Bi(t)}`,n?`DESCRIPTION:${Bi(n)}`:"",r?`LOCATION:${Bi(r)}`:"",su(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${Bi(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(fp).join(`\r
`)}\r
`}var Mi=null;function uu(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function gp(){return Mi||(Mi=(async()=>{if(await uu("js/vendor/pdfmake.min.js"),await uu("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw Mi=null,e})),Mi}var Ds="#16191d",nt="#5c636b",io="#d9dde1",ks=50;function hp(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function Ss(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:Ds,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:nt,margin:[0,0,0,6]},...e.recipient.map((f,$)=>({text:f,fontSize:10.5,bold:$===0})),...e.recipientExtra.map(f=>({text:f,fontSize:8.5,color:nt,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([f,$])=>[{text:f,color:nt,fontSize:9},{text:$,alignment:"right",fontSize:9,bold:f===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(f=>({text:f.label,fontSize:8,color:nt,alignment:f.align,noWrap:!0})),c=e.rows.map(f=>r.map($=>{if($.key==="desc"){let y=[{text:f.name,bold:!0}];return f.description&&y.push({text:f.description,color:nt,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:y}}return{text:f[$.key]||"",alignment:$.align,noWrap:$.key!=="unit"}})),p={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(f=>f.width),body:[o,...c]},layout:{hLineWidth:(f,$)=>f===0?0:f===1?1.2:.5,hLineColor:f=>f===1?n:io,vLineWidth:()=>0,paddingLeft:f=>f===0?0:7,paddingRight:(f,$)=>f===$.table.widths.length-1?0:7,paddingTop:f=>f===0?0:6,paddingBottom:f=>f===0?5:6}},d={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(f=>[{text:f.label,bold:!!f.strong,fontSize:f.strong?11.5:9.5,color:f.strong?Ds:nt},{text:f.value,bold:!!f.strong,fontSize:f.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(f,$)=>f===$.table.body.length-1&&$.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(f,$)=>f===$.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:nt,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:nt,margin:[0,1.5,0,0]}]:[]]:[]]}]},u=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:nt}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&u.push({text:e.subtitle,color:nt,margin:[0,2,0,0]}),e.intro&&u.push({text:e.intro,margin:[0,12,0,0]}),u.push(p,d),e.notes.length&&u.push({stack:e.notes.map(f=>({text:f,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&u.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([f,$])=>[{text:f,color:nt},{text:$}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:f=>f===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(f=>({text:f,margin:[0,4,0,0]}))]});let m=hp(e);return{pageSize:"A4",pageMargins:[ks,46,ks,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:Ds},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(f,$)=>({margin:[ks,0,ks,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*ks,y2:0,lineWidth:.5,lineColor:io}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(y=>({width:"*",stack:y.map((b,g)=>({text:b,fontSize:7.5,color:nt,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:nt,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",f).replace("{N}",$),fontSize:7,color:nt,alignment:"right",margin:[0,5,0,0]}]}),content:u}}async function Ma(e){let t=await gp();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function et(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function du({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(d=>({text:d.label,bold:!0,fontSize:8,color:nt,alignment:d.align||"left"})),...a.map(d=>d.map((u,m)=>({text:u==null?"":String(u),alignment:n[m].align||"left"})))];s&&o.push(s.map((d,u)=>({text:d==null?"":String(d),bold:!0,alignment:n[u].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:Ds},info:{title:e,creator:"BBC Finance"},footer:(d,u)=>({text:`Seite ${d} von ${u}`,alignment:"right",fontSize:7,color:nt,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:nt,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((d,u)=>u===0?"*":"auto"),body:o},layout:{hLineWidth:(d,u)=>d===0?0:d===1||s&&d===u.table.body.length-1?1:.5,hLineColor:(d,u)=>d===1||s&&d===u.table.body.length-1?Ds:io,vLineWidth:()=>0,paddingLeft:d=>d===0?0:6,paddingRight:(d,u)=>d===u.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},p=await Ma(c);et(p,i)}var ro=/\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/,_i=/^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i,mu={deutschland:"Deutschland",germany:"Deutschland",österreich:"Österreich",oesterreich:"Österreich",austria:"Österreich",schweiz:"Schweiz",switzerland:"Schweiz",suisse:"Schweiz",liechtenstein:"Liechtenstein",luxemburg:"Luxemburg",luxembourg:"Luxemburg",niederlande:"Niederlande",netherlands:"Niederlande",belgien:"Belgien",belgium:"Belgien",frankreich:"Frankreich",france:"Frankreich",italien:"Italien",italy:"Italien",spanien:"Spanien",spain:"Spanien","vereinigte arabische emirate":"Vereinigte Arabische Emirate","united arab emirates":"Vereinigte Arabische Emirate",uae:"Vereinigte Arabische Emirate","united kingdom":"Vereinigtes Königreich",usa:"USA","united states":"USA"},pu={D:"Deutschland",DE:"Deutschland",A:"Österreich",AT:"Österreich",CH:"Schweiz"},xt=e=>String(e||"").replace(/[   ]/g," ").replace(/[ \t]+/g," ").trim(),$p=(e,t)=>xt(e.replace(t,"").replace(/^[\s:.\-–—]+/,""));function bp(e){let n=xt(e).replace(/\s*\(.*?\)\s*/g," ").replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i,"").trim().split(/\s+/).filter(i=>!/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(i));if(!n.length)return{firstName:"",lastName:""};if(n.length===1)return{firstName:"",lastName:n[0]};let a=/^(von|van|de|der|den|zu|zur|vom|del|la)$/i,s=n.length-1;for(;s>1&&a.test(n[s-1]);)s-=1;return{firstName:n.slice(0,s).join(" "),lastName:n.slice(s).join(" ")}}var yp=e=>xt(String(e).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/,"");function hu(e){let n=String(e||"").replace(/\r/g,"").split(`
`).map(xt).filter(Boolean),a={},s=[],i=n.join(`
`),r=i.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi,"@").replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi,"."),o=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(r);o&&(a.email=o[0].toLowerCase());let c=/\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(i)||/\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(i);c?a.website=c[0].replace(/[.,;)]+$/,""):a.email&&!/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(a.email)&&(a.website=`www.${a.email.split("@")[1]}`),n.forEach((m,f)=>{let $=n[f+1]||"";if(!a.phone&&/^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(m)&&!/fax/i.test(m.split(/[:]/)[0])){let y=/(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(m);y&&(a.phone=xt(y[1]).replace(/–/g,"-"))}if(!a.vatId&&/(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(m)){let y=/\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/,b=y.exec(m.replace(/^[^:]*:\s*/,""))||(/:\s*$|umsatzsteuergesetz:?$|id$/i.test(m)?y.exec($):null);b&&(a.vatId=xt(b[1]))}if(!a.taxId&&/^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(m)&&!/ust|umsatzsteuer|vat/i.test(m)){let y=/([\d][\d\s/]{7,}\d)/.exec(m);y&&(a.taxId=xt(y[1]))}if(!a.lastName){let y=/^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(m);if(y){let b=$p(m,y[0]);b||(b=$),b=b.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i,"").replace(/^(herrn?|frau)\s+/i,"");let g=yp(b);g&&!ro.test(g)&&/^[\p{L}][\p{L}.' -]+$/u.test(g)&&g.split(/\s+/).length<=5&&(Object.assign(a,bp(g)),s.push(`${/inhaber|owner/i.test(y[0])?"Inhaber":"Vertreten durch"}: ${xt(b)}`))}}/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(m)&&(s.some(y=>y.includes(m))||s.push(m))});let p=/^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u,d=-1;for(let m=0;m<n.length;m++){let f=n[m].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i,""),$=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(f);if($&&!_i.test($[1])){a.street=xt($[1]).replace(/,$/,""),a.houseNo=xt($[2]),a.zip=$[4],a.city=xt($[5]),$[3]&&(a.country=pu[$[3].toUpperCase()]),d=m;break}let y=p.exec(f);if(y&&!/^(tel|fax|phone)/i.test(f)){a.zip=y[2],a.city=xt(y[3]),y[1]&&(a.country=pu[y[1].toUpperCase()]),d=m;let b=n[m-1]||"",g=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(b.replace(/,$/,""));g&&!_i.test(b)&&!ro.test(b)?(a.street=xt(g[1]),a.houseNo=xt(g[2])):/^(postfach|p\.?o\.? box)/i.test(b)&&(a.street=b);break}}if(!a.country){let m=[n[d+1],...n].filter(Boolean);for(let f of m){let $=f.toLowerCase().replace(/[.,]/g,"").trim();if(mu[$]){a.country=mu[$];break}}}let u=n.find(m=>ro.test(m)&&!_i.test(m)&&m.length<90&&!/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(m));if(u)a.company=u.replace(/^(firma|company|unternehmen)\s*:\s*/i,"");else if(d>0)for(let m=a.street&&!n[d].includes(",")?d-2:d-1;m>=0&&m>=d-5;m--){let f=n[m];if(!(!f||_i.test(f)||f.includes(":")||/\d{3,}|@|www\./i.test(f))){a.company=f;break}}for(let m of Object.keys(a))a[m]||delete a[m];return{fields:a,extra:s}}var vp="https://api.anthropic.com/v1/messages",wp=["company","firstName","lastName","street","houseNo","zip","city","region","country","email","phone","website","taxId","vatId"],fu={name:"record_contact",description:"Erfasst die Kontaktdaten aus einem Impressum.",input_schema:{type:"object",properties:{company:{type:"string",description:"Firmenname inklusive Rechtsform, wie im Impressum."},firstName:{type:"string",description:"Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt."},lastName:{type:"string",description:"Nachname dieser Person."},street:{type:"string",description:"Straße ohne Hausnummer."},houseNo:{type:"string",description:"Hausnummer."},zip:{type:"string"},city:{type:"string"},region:{type:"string",description:"Bundesland, Kanton oder Emirat, nur wenn genannt."},country:{type:"string",description:"Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ)."},email:{type:"string"},phone:{type:"string",description:"Telefonnummer (nicht Fax)."},website:{type:"string"},taxId:{type:"string",description:"Steuernummer, nur wenn genannt."},vatId:{type:"string",description:"Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt."},register:{type:"string",description:"Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt."},found:{type:"boolean",description:"false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden."}},required:["found"]}},gu=`Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;function xp(e){return{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}}function kp({model:e,text:t,url:n}){return n?{model:e,max_tokens:1500,tools:[{type:"web_fetch_20250910",name:"web_fetch",max_uses:3,max_content_tokens:2e4},fu],tool_choice:{type:"auto"},messages:[{role:"user",content:`Rufe diese Seite ab: ${n}
Ist es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.

${gu}`}]}:{model:e,max_tokens:1e3,tools:[fu],tool_choice:{type:"tool",name:"record_contact"},messages:[{role:"user",content:`Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.

${gu}

---
${String(t).slice(0,2e4)}`}]}}function Dp(e){let t=e&&Array.isArray(e.content)?e.content:[],n=t.find(o=>o.type==="web_fetch_tool_result"&&o.content&&o.content.type==="web_fetch_tool_result_error"),a=t.find(o=>o.type==="tool_use"&&o.name==="record_contact");if(!a||!a.input){if(n){let o=n.content.error_code;throw new Error(o==="url_not_accessible"?"Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.":`Die Seite konnte nicht gelesen werden (${o}). Kopiere das Impressum und füge es als Text ein.`)}throw new Error("Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.")}let s=a.input;if(s.found===!1)throw new Error("Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.");let i={};for(let o of wp){let c=typeof s[o]=="string"?s[o].trim():"";c&&(i[o]=c.slice(0,200))}i.email&&(i.email=i.email.toLowerCase());let r=[];return typeof s.register=="string"&&s.register.trim()&&r.push(s.register.trim()),{fields:i,extra:r}}function Sp(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Das Auslesen ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function oo({apiKey:e,model:t,text:n,url:a}){if(!e)throw new Error("Dafür braucht es den API-Key aus den Einstellungen.");let s=kp({model:t,text:n,url:a}),i=null;for(let r=0;r<3;r++){let o;try{o=await fetch(vp,{method:"POST",headers:xp(e),body:JSON.stringify(s)})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}try{i=await o.json()}catch{i=null}if(!o.ok)throw new Error(Sp(o.status,i));if(i&&i.stop_reason==="pause_turn"){s.messages=[...s.messages,{role:"assistant",content:i.content}];continue}break}return Dp(i)}function $u(e){let t=String(e||"").trim();return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""}var Bn=(e,t)=>!t||e.companyId===t;function bu(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function pt(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!Br(i)||!i.totals||!Bn(i,t)||a&&i.customerId!==a||n&&!on(i.issueDate,n))continue;let r=i.totals,o=St(r.netCents,i.currency,i.fx)||0,c=Ft(r.netCents,i.currency,i.fx)||0,p=St(r.taxCents,i.currency,i.fx)||0,d=Ft(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:p,taxEUR:d,totalUSD:o+p,totalEUR:c+d})}return s}function _a(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!Bn(s,t)||n&&!on(s.invoiceDate,n))continue;let i=St(s.netCents,s.currency,s.fx)||0,r=Ft(s.netCents,s.currency,s.fx)||0,o=St(s.taxCents,s.currency,s.fx)||0,c=Ft(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function zi(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&Bn(r,t)&&(n&&!on(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:St(i.amountCents,r.currency,r.fx)||0,eur:Ft(i.amountCents,r.currency,r.fx)||0}))}return s}var le=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function Un(e,{companyId:t}={},n){let a=bu(e.payments),s=[];for(let i of e.invoices){if(!Bn(i,t))continue;let r=a.get(i.id)||[],o=dn(i,r);if(o<=0)continue;let c=tn(i,r,n),p=i.dueDate&&i.dueDate<n?yn(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:p,openCents:o,paidCents:Me(r),openUSD:St(o,i.currency,i.fx)||0,openEUR:Ft(o,i.currency,i.fx)||0,bucket:p<=0?"current":p<=30?"d30":p<=60?"d60":p<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var yu=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function vu(e,t,n){let a=kt("month",n),s=kt("quarter",n),i=kt("year",n),r=kt("lastMonth",n),o=pt(e,{companyId:t,range:i}),c=h=>o.filter(I=>on(I.date,h)),p=c(a),d=c(s),u=pt(e,{companyId:t,range:r}),m=Un(e,{companyId:t},n),f=m.filter(h=>h.status==="overdue"),$=bu(e.payments),y=o.filter(h=>h.inv.type!=="credit_note"&&h.inv.status!=="credited"),b=y.filter(h=>tn(h.inv,$.get(h.inv.id)||[],n)==="paid"),g=e.customers.filter(h=>h.active!==!1&&h.kind!=="contact");if(t){let h=new Set([...e.invoices.filter(I=>I.companyId===t).map(I=>I.customerId),...(e.quotes||[]).filter(I=>I.companyId===t).map(I=>I.customerId)]);g=g.filter(I=>h.has(I.id))}return{month:{usd:le(p,"netUSD"),eur:le(p,"netEUR"),count:p.length},lastMonth:{usd:le(u,"netUSD"),eur:le(u,"netEUR")},quarter:{usd:le(d,"netUSD"),eur:le(d,"netEUR")},year:{usd:le(o,"netUSD"),eur:le(o,"netEUR")},open:{count:m.length,usd:le(m,"openUSD"),eur:le(m,"openEUR")},overdue:{count:f.length,usd:le(f,"openUSD"),eur:le(f,"openEUR")},paid:{count:b.length,usd:le(b,"totalUSD"),eur:le(b,"totalEUR")},average:{usd:y.length?Math.round(le(y,"netUSD")/y.length):0,eur:y.length?Math.round(le(y,"netEUR")/y.length):0,count:y.length},activeCustomers:g.length}}function Cs(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=pt(e,{companyId:t,range:i}),o=_a(e,{companyId:t,range:i}),c=zi(e,{companyId:t,range:i});return n.map(p=>{let d=r.filter(y=>Ja(y.date)===p),u=o.filter(y=>Ja(y.date)===p),m=c.filter(y=>Ja(y.date)===p),f={},$={};for(let y of d)f[y.inv.companyId]=(f[y.inv.companyId]||0)+y.netUSD,$[y.inv.companyId]=($[y.inv.companyId]||0)+y.netEUR;return{key:p,revenueUSD:le(d,"netUSD"),revenueEUR:le(d,"netEUR"),expenseUSD:le(u,"netUSD"),expenseEUR:le(u,"netEUR"),profitUSD:le(d,"netUSD")-le(u,"netUSD"),profitEUR:le(d,"netEUR")-le(u,"netEUR"),paymentsUSD:le(m,"usd"),paymentsEUR:le(m,"eur"),taxUSD:le(d,"taxUSD"),taxEUR:le(d,"taxEUR"),invoices:d.length,byCompany:f,byCompanyUSD:f,byCompanyEUR:$}})}function lo(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function wu(e,t,n){let a=pt(e,t);return n==="quarter"?lo(a,El):n==="year"?lo(a,s=>String(Ys(s))):lo(a,Ja)}function Is(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of pt(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:Z(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Es(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of pt(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Ns(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of pt(e,t)){let i=new Map((s.inv.totals.lines||[]).map(d=>[d.id,d])),r=(s.inv.items||[]).filter(d=>i.has(d.id)),o=r.map(d=>{let u=i.get(d.id);return u.netCents!=null?u.netCents:u.cents}),c=Ot(s.netUSD,o),p=Ot(s.netEUR,o);r.forEach((d,u)=>{let m=d.serviceId?n.get(d.serviceId):null,f=m?`s:${m.id}`:`n:${String(d.name||"").trim().toLowerCase()}`,$=a.get(f)||{key:f,name:m?m.name:d.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};$.usd+=c[u]||0,$.eur+=p[u]||0,$.qty+=Number(d.qty)||0,a.set(f,$)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function co(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let p=s.get(o),d=a(c),u=c.serviceId?n.get(c.serviceId):null;return p.has(d)||p.set(d,{key:d,name:u?u.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:u&&u.category||"",unit:c.unit||u&&u.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),p.get(d)};for(let o of pt(e,t)){let c=new Map((o.inv.totals.lines||[]).map($=>[$.id,$])),p=(o.inv.items||[]).filter($=>c.has($.id)),d=p.map($=>{let y=c.get($.id);return y.netCents!=null?y.netCents:y.cents}),u=Ot(o.netUSD,d),m=Ot(o.netEUR,d),f=o.inv.type==="credit_note";p.forEach(($,y)=>{let b=i(o.inv.customerId,$);b.usd+=u[y]||0,b.eur+=m[y]||0,b.qty+=Number($.qty)||0,f||(b.invoices.add(o.inv.id),b.companyIds.add(o.inv.companyId),(!b.first||o.date<b.first)&&(b.first=o.date),o.date>b.last&&(b.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&Bn(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let p=i(o.customerId,c);p.running=!0,p.interval=o.interval,p.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(p=>({...p,invoices:p.invoices.size,companyIds:[...p.companyIds]})).sort((p,d)=>Number(d.running)-Number(p.running)||d.usd-p.usd));return r}function xu(e,t){let n=new Map;for(let a of pt(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function uo(e,t){let n=new Map;for(let a of _a(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function ku(e,t,n){let a=pt(e,t),s=_a(e,t),i=zi(e,t),r=Un(e,{companyId:t.companyId},n),o=le(a,"netUSD"),c=le(a,"netEUR"),p=le(s,"netUSD"),d=le(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(u=>u.inv.type!=="credit_note").length},expenses:{usd:p,eur:d,count:s.length},profit:{usd:o-p,eur:c-d},payments:{usd:le(i,"usd"),eur:le(i,"eur"),count:i.length},receivables:{usd:le(r,"openUSD"),eur:le(r,"openEUR"),count:r.length},taxCollected:{usd:le(a,"taxUSD"),eur:le(a,"taxEUR")},taxPaid:{usd:le(s,"taxUSD"),eur:le(s,"taxEUR")},taxBalance:{usd:le(a,"taxUSD")-le(s,"taxUSD"),eur:le(a,"taxEUR")-le(s,"taxEUR")}}}function Du(e,t){let n=new Map;for(let i of pt(e,t)){let r=i.inv.totals.taxGroups||[],o=Ot(i.taxUSD,r.map(u=>u.taxCents)),c=Ot(i.netUSD,r.map(u=>u.netCents)),p=Ot(i.taxEUR,r.map(u=>u.taxCents)),d=Ot(i.netEUR,r.map(u=>u.netCents));r.forEach((u,m)=>{let f=`${u.rate}|${i.inv.currency}`,$=n.get(f)||{rate:u.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};$.netCents+=u.netCents,$.taxCents+=u.taxCents,$.netUSD+=c[m]||0,$.taxUSD+=o[m]||0,$.netEUR+=d[m]||0,$.taxEUR+=p[m]||0,n.set(f,$)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=_a(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:le(s,"taxUSD"),paidEUR:le(s,"taxEUR")}}function mo(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>Br(o)&&Bn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&Bn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&Bn(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return Nl(a,s)}var Cp=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],Su=15*1024*1024;async function Cu(e){if(!e)throw new Error("Keine Datei ausgewählt.");if(e.size>Su)throw new Error(`„${e.name}“ ist größer als 15 MB.`);if(await Ip(e,5)!=="%PDF-")throw new Error(`„${e.name}“ ist keine PDF-Datei. Bitte das Dokument als PDF speichern und erneut hochladen.`);let n=/\.pdf$/i.test(e.name||"")?e.name:`${e.name||"Dokument"}.pdf`;return{blob:e.type==="application/pdf"?e:new Blob([e],{type:"application/pdf"}),name:n}}function Ip(e,t){return new Promise((n,a)=>{let s=new FileReader;s.onload=()=>n(String.fromCharCode(...new Uint8Array(s.result))),s.onerror=()=>a(s.error),s.readAsArrayBuffer(e.slice(0,t))})}function Iu(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Ep(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function po(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function Pi(e,t,n){let a=await Ep(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var Np=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function fo(e,{shrink:t=!0}={}){if(e.size>Su)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(Np(e))try{let{canvas:a}=await Pi(e,2e3,"#ffffff");return{blob:await po(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!Cp.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await Pi(e,2e3,"#ffffff"),i=await po(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function Eu(e){let{canvas:t}=await Pi(e,1568,"#ffffff");return po(t,"image/jpeg",.85)}async function Nu(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await Pi(e,800,null);return t.toDataURL("image/png")}async function za(e){let t=await Ml("blobs",e);return t?t.blob:null}var Li=e=>(t,n)=>(t[e]||"")<(n[e]||"")?1:(t[e]||"")>(n[e]||"")?-1:0;function Tu(e,t,n){let a=(e.appointments||[]).filter(g=>g.customerId===t&&g.status!=="cancelled"),s=a.filter(g=>g.status==="done"||g.status==="planned"&&g.date<n).sort(Li("date")),i=a.filter(g=>g.status==="planned"&&g.date>=n).sort((g,h)=>g.date+g.start<h.date+h.start?-1:1)[0]||null,r=(e.quotes||[]).filter(g=>g.customerId===t),o=r.filter(g=>g.status!=="draft").sort(Li("issueDate")),c=o.map(g=>qt(g,n)),p=r.length-o.length,d=(e.contracts||[]).filter(g=>g.customerId===t).sort(Li("createdAt")),u=(e.invoices||[]).filter(g=>g.customerId===t&&g.type!=="credit_note"),m=u.filter(g=>!["draft","cancelled"].includes(g.status)).sort(Li("issueDate")),f=u.filter(g=>g.status==="draft").length,$=[{id:"meeting",label:"Termin",state:s.length?"done":i?"active":"todo",count:s.length,last:s[0]||null,next:i},{id:"quote",label:"Angebot",state:c.some(g=>g==="accepted"||g==="invoiced")?"done":c.some(g=>g==="open"||g==="sent")||p?"active":"todo",count:o.length,drafts:p,latest:o[0]||null,latestStatus:c[0]||""},{id:"contract",label:"Vertrag",state:d.some(g=>g.status==="signed"||g.status==="ended")?"done":d.some(g=>g.status==="open")?"active":"todo",count:d.length,latest:d[0]||null},{id:"invoice",label:"Rechnung",state:m.length?"done":f?"active":"todo",count:m.length,drafts:f,latest:m[0]||null}],y=-1;$.forEach((g,h)=>{g.state==="done"&&(y=h)}),$.forEach((g,h)=>{h<y&&g.state==="todo"&&(g.state="skipped")});let b=$.findIndex((g,h)=>h>y&&g.state!=="done");return{steps:$,current:b===-1?null:b}}function go(e,t,n=60){return e.status==="signed"&&!!e.endDate&&e.endDate>=t&&e.endDate<=Ce(t,n)}function ho(e,t){return e.status==="signed"&&!!e.endDate&&e.endDate<t}function Ki(e,t){return ho(e,t)?"expired":go(e,t)?"ending":e.status}function Pa({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
    <article class="sheet" style=${`--doc-brand:${e.brandColor}`} lang=${e.lang}>
      ${e.draftMark&&l`<div class="sheet-mark" aria-hidden="true">${e.draftMark}</div>`}
      <div class="sheet-head">
        ${e.logoUrl?l`<img class="sheet-logo" src=${e.logoUrl} alt=${e.companyName} />`:l`<div class="sheet-company">${e.companyName||" "}</div>`}
      </div>
      <div class="sheet-top">
        <div class="sheet-address">
          <div class="sheet-sender">${e.senderLine}</div>
          ${e.recipient.length?e.recipient.map((a,s)=>l`<div class=${s===0?"sheet-strong":""}>${a}</div>`):l`<div class="sheet-placeholder">${e.lang==="en"?"Customer":"Kunde"}</div>`}
          ${e.recipientExtra.map(a=>l`<div class="sheet-small">${a}</div>`)}
        </div>
        <dl class="sheet-meta">
          ${e.meta.map(([a,s],i)=>l`<div><dt>${a}</dt><dd class=${i===0?"sheet-strong":""}>${s}</dd></div>`)}
        </dl>
      </div>
      <h1 class="sheet-title">${e.title}${e.number&&l` <span>${e.number}</span>`}</h1>
      ${e.subtitle&&l`<div class="sheet-subtitle">${e.subtitle}</div>`}
      ${e.intro&&l`<p class="sheet-text">${e.intro}</p>`}
      <table class="sheet-items">
        <thead><tr>
          <th>${t.pos}</th>
          <th>${t.description}</th>
          <th class="r">${t.qty}</th>
          <th>${t.unit}</th>
          <th class="r">${t.price}</th>
          ${n.discount&&l`<th class="r">${t.discount}</th>`}
          ${n.tax&&l`<th class="r">${t.tax}</th>`}
          <th class="r">${t.amount}</th>
        </tr></thead>
        <tbody>
          ${e.rows.map(a=>l`<tr>
            <td>${a.pos}</td>
            <td><div class="sheet-strong">${a.name||" "}</div>${a.description&&l`<div class="sheet-desc">${a.description}</div>`}</td>
            <td class="r nw">${a.qty}</td>
            <td>${a.unit}</td>
            <td class="r nw">${a.price}</td>
            ${n.discount&&l`<td class="r nw">${a.discount}</td>`}
            ${n.tax&&l`<td class="r nw">${a.tax}</td>`}
            <td class="r nw">${a.amount}</td>
          </tr>`)}
          ${!e.rows.length&&l`<tr><td colspan="8" class="sheet-placeholder">${e.lang==="en"?"No items yet":"Noch keine Positionen"}</td></tr>`}
        </tbody>
      </table>
      <div class="sheet-sums">
        <table>
          ${e.sums.map(a=>l`<tr class=${a.strong?"is-total":""}><td>${a.label}</td><td class="r nw">${a.value}</td></tr>`)}
        </table>
        ${e.secondary&&l`<div class="sheet-secondary">${e.secondary.line}</div>`}
        ${e.secondary&&e.secondary.fx&&l`<div class="sheet-fx">${e.secondary.fx}</div>`}
      </div>
      ${e.notes.length>0&&l`<div class="sheet-notes">${e.notes.map(a=>l`<p>${a}</p>`)}</div>`}
      ${e.payment&&l`<div class="sheet-payment">
        <div class="sheet-strong">${e.payment.title}</div>
        ${e.payment.rows.length>0&&l`<table>${e.payment.rows.map(([a,s])=>l`<tr><td class="sheet-muted">${a}</td><td>${s}</td></tr>`)}</table>`}
        ${e.payment.extra.map(a=>l`<p>${a}</p>`)}
      </div>`}
      <footer class="sheet-footer">
        <div class="sheet-footer-cols">
          ${e.footerCols.map(a=>l`<div>${a.map(s=>l`<div>${s}</div>`)}</div>`)}
        </div>
        ${e.footerText&&l`<div class="sheet-footer-text">${e.footerText}</div>`}
      </footer>
    </article>
  </div>`}async function Oi(e){let t=Ye(e.id),n=kn(e.id),a=e.creditNoteId?w("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${j(Me(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await ue({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await _(()=>Qr(e.id));return r?(M(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var Au="https://api.anthropic.com/v1/messages",an=class extends Error{};function Tp(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var Ap=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function Rp({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[Tp(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:Ap}]}]}}var Ut=e=>typeof e=="string"?e.trim():"",$o=e=>Number.isFinite(Number(e))?Da(Number(e)):0;function Bp(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(f=>f.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new an("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new an("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=Ut(s.currency).toUpperCase();Xs.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=$o(s.net_amount),c=$o(s.tax_amount),p=$o(s.total_amount);p&&o+c!==p&&(!o&&c<=p||Math.abs(o+c-p)<=2?o=p-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let d=be(Ut(s.invoice_date))?Ut(s.invoice_date):"";d||i.push("Das Belegdatum wurde nicht erkannt.");let u=be(Ut(s.payment_date))?Ut(s.payment_date):"",m=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:Ut(s.vendor).slice(0,200),description:Ut(s.description).slice(0,300),invoiceNumber:Ut(s.invoice_number).slice(0,80),invoiceDate:d,paymentDate:u,currency:r,netCents:o,taxCents:c,totalCents:p||o+c,paymentMethod:n.includes(Ut(s.payment_method))?Ut(s.payment_method):"",category:t.includes(Ut(s.category))?Ut(s.category):""},uncertain:m,warnings:i,usage:e.usage||null}}function Fi(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Ru(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new an("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await Eu(e),r="image/jpeg");let o=await Iu(i),c=Rp({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),p;try{p=await fetch(Au,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new an("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let d=null;try{d=await p.json()}catch{}if(!p.ok)throw new an(Fi(p.status,d));return Bp(d,{categories:a,paymentMethods:s})}async function Bu({apiKey:e,model:t}){if(!e)throw new an("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(Au,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new an("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new an(Fi(n.status,a));return!0}var Up="https://api.anthropic.com/v1/messages",qi={de:"Deutsch",en:"Englisch"},Mp={name:"translations",description:"Gibt die übersetzten Texte zurück, je Text mit derselben id.",input_schema:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{id:{type:"string"},text:{type:"string",description:"Der Text in der Zielsprache."},source:{type:"string",enum:["de","en","other"],description:"Erkannte Sprache des Ausgangstextes."}},required:["id","text"]}}},required:["items"]}},_p=e=>`Du übersetzt Texte auf Rechnungen, Angeboten und Verträgen einer Agentur bzw. Beratung ins ${qi[e]}.
Regeln:
- Erkenne die Sprache jedes Textes selbst. Ist er schon ${qi[e]}, gib ihn unverändert zurück.
- Übersetze sinngemäß und geschäftlich, so wie ein Muttersprachler es auf einer Rechnung schreiben würde – kurz, ohne Zusätze.
- Unverändert lassen: Firmen-, Personen- und Produktnamen, Marken (z. B. Google Ads, Leadinfo, SEO, GEO), E-Mail-Adressen, URLs, IBAN, BIC, Steuernummern, Registerangaben, Adressen, Beträge, Zahlen, Daten und Platzhalter in geschweiften Klammern wie {number}.
- Zeilenumbrüche, Aufzählungszeichen und Leerzeilen genau beibehalten.
- Jede id genau einmal zurückgeben.`;function zp({model:e,texts:t,target:n}){return{model:e,max_tokens:Math.min(8e3,400+t.reduce((a,s)=>a+Math.ceil(s.text.length/2),0)),system:_p(n),tools:[Mp],tool_choice:{type:"tool",name:"translations"},messages:[{role:"user",content:`Zielsprache: ${qi[n]}

${JSON.stringify(t.map(({id:a,text:s})=>({id:a,text:s})))}`}]}}function Pp(e,t){let n=(e&&e.content||[]).find(r=>r.type==="tool_use"&&r.name==="translations");if(!n||!n.input||!Array.isArray(n.input.items))throw new Error("Die Übersetzung kam nicht zurück. Bitte noch einmal versuchen.");let a=new Set(t.map(r=>r.id)),s={},i={};for(let r of n.input.items)!r||!a.has(String(r.id))||typeof r.text!="string"||(s[r.id]=r.text,r.source&&(i[r.id]=r.source));return{map:s,sources:i}}async function Vi({apiKey:e,model:t,texts:n,target:a}){if(!e)throw new Error("Für die Übersetzung braucht es den API-Key aus den Einstellungen (derselbe wie für Belege).");if(!qi[a])throw new Error("Unbekannte Zielsprache.");let s=n.filter(c=>String(c.text||"").trim());if(!s.length)return{map:{},sources:{},count:0};let i;try{i=await fetch(Up,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(zp({model:t,texts:s,target:a}))})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let r=null;try{r=await i.json()}catch{}if(!i.ok)throw new Error(Fi(i.status,r));let o=Pp(r,s);return{...o,count:Object.keys(o.map).filter(c=>o.map[c]!==(s.find(p=>p.id===c)||{}).text).length}}function sn(e){let t=[];(e.items||[]).forEach(n=>{n.name&&t.push({id:`i:${n.id}:name`,text:n.name}),n.description&&t.push({id:`i:${n.id}:description`,text:n.description})});for(let n of["title","intro","paymentTerms","footer"])e[n]&&t.push({id:`d:${n}`,text:e[n]});return t}function La(e,t){let n={...e,items:(e.items||[]).map(a=>({...a}))};for(let[a,s]of Object.entries(t)){let[i,r,o]=a.split(":");if(i==="d"&&r in n&&(n[r]=s),i==="i"){let c=n.items.find(p=>String(p.id)===r);c&&(o==="name"||o==="description")&&(c[o]=s)}}return n}var Lp=[{field:"code",label:"Nr.",keys:["nr","nr.","nummer","leistungsnummer","code","artikelnummer"]},{field:"name",label:"Name",keys:["name","leistung","bezeichnung"]},{field:"tier",label:"Tarif",keys:["tarif","tier","paket"]},{field:"category",label:"Kategorie",keys:["kategorie","category"]},{field:"unit",label:"Einheit",keys:["einheit","unit"]},{field:"price",label:"Preis netto",keys:["preis netto","preis","einzelpreis","einzelpreis netto","price"]},{field:"currency",label:"Währung",keys:["währung","waehrung","currency"]},{field:"kind",label:"Art",keys:["art","abrechnung","wiederkehrend"]},{field:"qty",label:"Menge",keys:["menge","standardmenge","qty"]},{field:"taxRate",label:"Steuersatz %",keys:["steuersatz %","steuersatz","steuer","ust","mwst"]},{field:"invoiceText",label:"Rechnungstext",keys:["rechnungstext","beschreibung auf der rechnung","text"]},{field:"internalName",label:"Interne Bezeichnung",keys:["interne bezeichnung","intern"]},{field:"description",label:"Interne Beschreibung",keys:["interne beschreibung","beschreibung","notiz"]},{field:"company",label:"Unternehmen",keys:["unternehmen","firma","company"]},{field:"active",label:"Aktiv",keys:["aktiv","active"]}],Zi=e=>String(e??"").trim().toLowerCase().replace(/\s+/g," "),at=e=>e==null?"":String(e).trim();function Kp(e){let t=Zi(e);return t?t==="s"||t.startsWith("start")?"starter":t==="std"||t.startsWith("stand")?"standard":null:""}function Op(e){let t=Zi(e);return t?["einmalig","einmal","nein","no","false","0","once"].includes(t)?!1:["wiederkehrend","laufend","monatlich","ja","yes","true","1","x"].includes(t)||t.startsWith("wieder")?!0:null:null}function Fp(e){let t=Zi(e);return t?!["nein","no","false","0","inaktiv"].includes(t):!0}function Uu(e){let t=[...new Set(e.flatMap(o=>Object.keys(o)))],n={},a=[];for(let o of t){let c=Lp.find(p=>p.keys.includes(Zi(o)));c&&!n[c.field]?n[c.field]=o:c||a.push(o)}let s=(o,c)=>n[c]!=null?o[n[c]]:void 0,i=[];e.forEach((o,c)=>{let p=at(s(o,"name")),d=at(s(o,"code"));if(!p&&!d&&Object.values(o).every(B=>at(B)===""))return;let u=[];p||u.push("Name fehlt");let m=Kp(s(o,"tier"));m===null&&u.push(`Tarif „${at(s(o,"tier"))}“ unbekannt (Starter oder Standard)`);let f=s(o,"price"),$=typeof f=="number"?f:vn(at(f));at(f)===""||Number.isNaN($)?u.push("Preis fehlt oder ist keine Zahl"):$<0&&u.push("Preis ist negativ");let y=at(s(o,"currency")).toUpperCase()||"EUR";Be.includes(y)||u.push(`Währung ${y} wird für Rechnungen nicht unterstützt (USD oder EUR)`);let b=Op(s(o,"kind")),g=at(s(o,"unit"))||"Stück",h=s(o,"qty"),I=at(h)===""?1:typeof h=="number"?h:vn(at(h));(Number.isNaN(I)||I<0)&&u.push("Menge ist keine Zahl");let S=s(o,"taxRate"),x=null;at(S)!==""&&(x=typeof S=="number"?S:vn(at(S).replace("%","")),(Number.isNaN(x)||x<0||x>100)&&(u.push("Steuersatz ist ungültig"),x=null)),i.push({row:c+2,problems:u,service:{code:d,name:p,tier:m||"",category:at(s(o,"category")),unit:g,priceCents:Number.isNaN($)?0:Da($),currency:Be.includes(y)?y:"EUR",recurring:b??/monat|jahr|quartal/i.test(g),defaultQty:Number.isNaN(I)?1:I,taxRate:x,invoiceText:at(s(o,"invoiceText")),internalName:at(s(o,"internalName")),description:at(s(o,"description")),company:at(s(o,"company")),active:Fp(s(o,"active"))}})});let r=new Map;for(let o of i){let c=o.service.code;c&&(r.has(c)?o.problems.push(`Nr. ${c} steht doppelt in der Datei (Zeile ${r.get(c)})`):r.set(c,o.row))}return{items:i,unknownColumns:a,columns:n}}function Mu(e,t=()=>""){return e.map(n=>({"Nr.":n.code||"",Name:n.name,Tarif:n.tier?Dt[n.tier].label:"",Kategorie:n.category||"",Einheit:n.unit||"","Preis netto":(n.priceCents||0)/100,Währung:n.currency||"",Art:n.recurring?"Wiederkehrend":"Einmalig",Menge:n.defaultQty==null?1:n.defaultQty,"Steuersatz %":n.taxRate==null||n.taxRate===""?"":n.taxRate,Rechnungstext:n.invoiceText||"","Interne Bezeichnung":n.internalName||"","Interne Beschreibung":n.description||"",Unternehmen:t(n.companyId),Aktiv:n.active===!1?"Nein":"Ja"}))}var Gi=null;function yo(){return Gi||(Gi=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw Gi=null,e})),Gi}var ji=e=>e&&typeof e=="object"?e.v:e,_u=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function bo(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function qp(e){let t=[e.columns.map(n=>bo(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>bo(ji(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>bo(ji(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function Hi(e){let t=new Blob([qp(e)],{type:"text/csv;charset=utf-8"});et(t,`${jt(e.fileName)}.csv`)}async function zu(e){let t=await yo(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(ji));e.totals&&n.push(e.totals.map(ji));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let p=t.utils.encode_cell({r:c,c:o}),d=a[p];d&&(typeof d.v=="number"&&r.type==="money"&&(d.z="#,##0.00"),typeof d.v=="string"&&/^[=+\-@]/.test(d.v)&&(d.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,jt(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});et(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${jt(e.fileName)}.xlsx`)}async function Pu(e){await du({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(_u)),totals:e.totals?e.totals.map(_u):null,fileName:`${jt(e.fileName)}.pdf`,landscape:e.columns.length>6})}async function Lu(e){if(e.size>5*1024*1024)throw new Error(`„${e.name}“ ist größer als 5 MB.`);if(!/\.(xlsx|xls|csv)$/i.test(e.name||""))throw new Error("Bitte eine Excel-Datei (.xlsx) oder CSV-Datei wählen.");let t=await yo(),n=/\.csv$/i.test(e.name),a;if(n){let i=(await e.text()).replace(/^﻿/,""),r=i.split(/\r?\n/)[0]||"",o=(r.match(/;/g)||[]).length>=(r.match(/,/g)||[]).length?";":",";a=t.read(i,{type:"string",FS:o,raw:!0})}else a=t.read(new Uint8Array(await e.arrayBuffer()),{type:"array"});let s=a.Sheets[a.SheetNames[0]];if(!s)throw new Error("Die Datei enthält keine Tabelle.");return t.utils.sheet_to_json(s,{defval:"",raw:!n})}async function Ku(e,{fileName:t,sheet:n="Tabelle",moneyColumns:a=[]}={}){let s=await yo(),i=s.utils.json_to_sheet(e),r=e.length?Object.keys(e[0]):[];r.forEach((p,d)=>{for(let u=1;u<=e.length;u++){let m=i[s.utils.encode_cell({r:u,c:d})];m&&(typeof m.v=="number"&&a.includes(p)&&(m.z="#,##0.00"),typeof m.v=="string"&&/^[=+\-@]/.test(m.v)&&(m.t="s"))}}),i["!cols"]=r.map(p=>({wch:Math.min(60,Math.max(p.length,...e.map(d=>String(d[p]==null?"":d[p]).length))+2)}));let o=s.utils.book_new();s.utils.book_append_sheet(o,i,n.slice(0,31));let c=s.write(o,{bookType:"xlsx",type:"array"});et(new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${jt(t)}.xlsx`)}function vo(e){let t=e.code||"";if(!t)return`zzzz ${e.name}`;let n=/^(.*-)(\d)(\d{2})$/.exec(t);return n?`${n[1]}${n[3]}-${n[2]}`:t}function Ou({tier:e}){let t=Dt[e];return t?l`<${Pe} tone=${t.tone}>${t.label}<//>`:null}function wo({service:e,onClose:t,onSaved:n}){let a=!e||!w("services",e.id),[s,i]=D(()=>({...e||Jt()})),[r,o]=D(!1),c=m=>f=>i($=>({...$,[m]:f})),p=v.settings.serviceCategories||[],d=fa.includes(s.unit)||!s.unit?fa:[...fa,s.unit];async function u(){o(!0);let m=await _(()=>vi(s));o(!1),m&&(M(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${Le} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${u}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${q} class="span-2" label="Leistungsnummer" value=${s.code} onInput=${c("code")} placeholder="z. B. HL-WEB-101" hint="optional, eindeutig" />
      <${q} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${se} class="span-2" label="Tarif" value=${s.tier||""} onChange=${c("tier")} placeholder="Ohne Tarif"
        options=${Object.entries(Dt).map(([m,f])=>({id:m,label:f.label}))} />
      <${q} class="span-4" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${ie} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${ie} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${_e} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${se} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${Be} />
      <${se} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${d} />
      <${_e} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${_e} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${se} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${p.includes(s.category)||!s.category?p:[...p,s.category]} />
      <${se} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${re().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${He} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${He} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function Fu(){ge();let[e,t]=D(""),[n,a]=D(""),[s,i]=D("all"),[r,o]=D(null),[c,p]=D(null),d=ve(null),u=wt(),m=v.services.filter(x=>u&&x.companyId&&x.companyId!==u||n&&x.category!==n||s!=="all"&&(x.tier||"")!==(s==="none"?"":s)?!1:Te(e,x.code,x.name,x.internalName,x.description,x.invoiceText,x.category,x.tier&&Dt[x.tier]&&Dt[x.tier].label)),f=v.services.filter(x=>!(u&&x.companyId&&x.companyId!==u)),$=x=>f.filter(B=>(B.tier||"")===x).length,y=f.some(x=>x.tier);async function b(x){if(!x)return;let B=await _(async()=>{let V=await Lu(x),E=Uu(V);if(!E.items.length)throw new Error("In der Datei wurden keine Leistungen gefunden. Erwartet wird eine Tabelle mit Überschriften wie „Nr.“, „Name“, „Tarif“, „Preis netto“.");if(!E.columns.name)throw new Error("Die Spalte „Name“ fehlt.");if(!E.columns.price)throw new Error("Die Spalte „Preis netto“ fehlt.");return E});B&&p({...B,fileName:x.name})}async function g(){let x=[...m].sort((B,V)=>vo(B).localeCompare(vo(V),"de"));await _(()=>Ku(Mu(x,B=>(w("companies",B)||{}).name||""),{fileName:`Leistungen ${F()}`,sheet:"Leistungen",moneyColumns:["Preis netto"]}))}let h=[...new Set(v.services.map(x=>x.category).filter(Boolean))].sort((x,B)=>x.localeCompare(B,"de"));async function I(x){if(!await ue({title:"Leistung löschen?",text:`„${x.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Ec(x.id),!0))&&M("Leistung gelöscht","good")}let S=[{key:"code",label:"Nr.",class:"nw",sort:vo,render:x=>x.code?l`<span class="mono-code">${x.code}</span>`:l`<span class="muted-text">–</span>`},{key:"name",label:"Leistung",sort:x=>x.name,render:x=>l`<div class="cell-main">${x.name}${x.active===!1&&l` <${Pe} tone="mute">Inaktiv<//>`}</div>
        ${(x.invoiceText||x.internalName)&&l`<div class="cell-sub clamp-1">${x.invoiceText||x.internalName}</div>`}`},{key:"tier",label:"Tarif",sort:x=>x.tier||"zzzz",render:x=>l`<${Ou} tier=${x.tier} />`},{key:"category",label:"Kategorie",sort:x=>x.category,render:x=>x.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:x=>(w("companies",x.companyId)||{}).name||"",render:x=>{let B=w("companies",x.companyId);return B?l`<span class="co-tag"><${pi} company=${B} />${B.shortName||B.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:x=>x.recurring?1:0,render:x=>x.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:x=>x.unit},{key:"tax",label:"Steuer",align:"right",render:x=>x.taxRate!=null&&x.taxRate!==""?At(x.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:x=>x.priceCents,render:x=>j(x.priceCents,x.currency)},{key:"actions",label:"",align:"right",render:x=>l`<${C} variant="ghost" small icon="trash" title=${`${x.name} löschen`} onClick=${()=>I(x)} />`}];return l`
    <${ke} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <input ref=${d} type="file" class="visually-hidden" accept=".xlsx,.xls,.csv" tabindex="-1" aria-label="Leistungen importieren"
        onChange=${x=>{let B=x.target.files[0];x.target.value="",b(B)}} />
      <${C} icon="upload" onClick=${()=>d.current&&d.current.click()}>Importieren<//>
      ${v.services.length>0&&l`<${C} icon="download" onClick=${g}>Excel<//>`}
      <${C} variant="primary" icon="plus" onClick=${()=>o(Jt({companyId:""}))}>Neue Leistung<//>
    <//>
    ${v.services.length>0&&l`<div class="filters">
      <${yt} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${h.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${x=>a(x.target.value)}>
        <option value="">Alle Kategorien</option>
        ${h.map(x=>l`<option value=${x}>${x}</option>`)}
      </select>`}
      ${y&&l`<${bt} label="Tarif" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:f.length},{id:"starter",label:"Starter",count:$("starter")},{id:"standard",label:"Standard",count:$("standard")},...$("")?[{id:"none",label:"Ohne Tarif",count:$("")}]:[]]} />`}
    </div>`}
    <${tt} columns=${S} rows=${m} initialSort=${{key:"code",dir:"asc"}} onRowClick=${x=>o(x)}
      empty=${v.services.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${fe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${C} variant="primary" icon="plus" onClick=${()=>o(Jt())}>Erste Leistung anlegen<//>
          <//>`} />
    ${r&&l`<${wo} service=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${Vp} data=${c} onClose=${()=>p(null)} />`}
  `}function Vp({data:e,onClose:t}){let n=re(),a=[...new Set(e.items.map(h=>h.service.company).filter(Boolean))],s=a.length===1?n.find(h=>[h.name,h.shortName,h.invoicePrefix].filter(Boolean).some(I=>I.toLowerCase()===a[0].toLowerCase())):null,[i,r]=D((s||de()||{}).id||""),[o,c]=D(!1),[p,d]=D(!1),u=new Set(v.services.map(h=>(h.code||"").toLowerCase()).filter(Boolean)),m=e.items.filter(h=>!h.problems.length),f=e.items.filter(h=>h.problems.length),$=h=>h.service.code&&u.has(h.service.code.toLowerCase()),y=m.filter(h=>!$(h)).length,b=m.length-y;async function g(){d(!0);let h=await _(()=>Ic(m.map(S=>S.service),{companyId:i,update:o}));if(d(!1),!h)return;let I=[h.added&&`${h.added} ${h.added===1?"Leistung":"Leistungen"} angelegt`,h.updated&&`${h.updated} aktualisiert`,h.skipped&&`${h.skipped} unverändert übersprungen`].filter(Boolean);M(`${I.join(", ")}.`,"good",7e3),t()}return l`<${Le} title="Leistungen importieren" size="xl" onClose=${t} onSubmit=${g}
    footer=${l`<${C} onClick=${t}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${p} disabled=${!(y||o&&b)}>
        ${y?`${y} ${y===1?"Leistung":"Leistungen"} anlegen`:"Übernehmen"}${o&&b?`, ${b} aktualisieren`:""}<//>`}>
    <p class="modal-lead">${e.fileName}: ${e.items.length} Zeilen gelesen. Bestehende Leistungen werden nie gelöscht.</p>
    <div class="form-grid">
      <${se} class="span-3" label="Gilt für Unternehmen" value=${i} onChange=${r} placeholder="Alle Unternehmen"
        options=${n.map(h=>({id:h.id,label:h.name}))} hint=${a.length?`In der Datei: ${a.join(", ")}`:"Leer: in allen Unternehmen wählbar"} />
      ${b>0&&l`<div class="span-3 import-update"><${He} label=${`${b} vorhandene Leistungen mit gleicher Nr. aktualisieren`} checked=${o} onChange=${c}
        hint="Sonst werden sie übersprungen und bleiben unverändert." /></div>`}
    </div>
    ${f.length>0&&l`<${he} tone="warn">${f.length} ${f.length===1?"Zeile wird":"Zeilen werden"} nicht übernommen:
      ${f.slice(0,5).map(h=>l`<div>Zeile ${h.row}: ${h.problems.join(", ")}</div>`)}${f.length>5?l`<div>…</div>`:""}<//>`}
    ${e.unknownColumns.length>0&&l`<p class="muted-text small">Nicht verwendete Spalten: ${e.unknownColumns.join(", ")}</p>`}
    <div class="table-wrap import-preview">
      <table class="table">
        <thead><tr><th>Nr.</th><th>Leistung</th><th>Tarif</th><th>Kategorie</th><th>Art</th><th class="r">Preis netto</th><th></th></tr></thead>
        <tbody>${e.items.map(h=>l`<tr key=${h.row} class=${h.problems.length?"is-bad":""}>
          <td class="nw"><span class="mono-code">${h.service.code||"–"}</span></td>
          <td><div class="cell-main">${h.service.name||"–"}</div>${h.service.invoiceText&&l`<div class="cell-sub clamp-1">${h.service.invoiceText}</div>`}</td>
          <td><${Ou} tier=${h.service.tier} /></td>
          <td>${h.service.category}</td>
          <td>${h.service.recurring?`je ${h.service.unit}`:h.service.unit==="Pauschal"?"einmalig":`je ${h.service.unit}`}</td>
          <td class="r">${j(h.service.priceCents,h.service.currency)}</td>
          <td>${h.problems.length?l`<span class="tone-bad small">${h.problems[0]}</span>`:$(h)?l`<span class="muted-text small">${o?"wird aktualisiert":"vorhanden, übersprungen"}</span>`:l`<span class="tone-good small">neu</span>`}</td>
        </tr>`)}</tbody>
      </table>
    </div>
  <//>`}var Zp={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function Ts(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&Be.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function Gp(e,t,n){if(t&&t!=="new"){let r=w(e,t);return r?we(r):null}let a=re(),s=de()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&w("invoices",n.copy))i=Lc(w("invoices",n.copy));else if(e==="invoices"&&n.contract&&w("contracts",n.contract)){let r=w("contracts",n.contract),o=w("companies",r.companyId)||s,c=r.quoteId?w("quotes",r.quoteId):null,p=["once","all","monthly","quarterly","semiannual","yearly"].includes(n.part)?n.part:"once";return i=Ts(gt(o,{contractId:r.id,contractPart:p}),w("customers",r.customerId),o,e),i.currency=r.currency,i.items=cs(r,p),i.items.length||(i.items=cs(r,"all")),c&&!c.invoiceId&&c.status!=="draft"&&p==="once"&&(i.quoteId=c.id),i}else if(e==="invoices")i=gt(s);else if(n.copy&&w("quotes",n.copy)){let r=w("quotes",n.copy),o=w("companies",r.companyId)||s;i=Fn(o,{validUntil:Ce(F(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:Yt().id})),discount:we(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=Fn(s,{validUntil:Ce(F(),30)});return n.customer&&w("customers",n.customer)&&(i=Ts(i,w("customers",n.customer),w("companies",i.companyId),e)),i}function xo({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=D(null),r=ve(null),o=e.items||[],c=e.currency;ce(()=>{if(!s||!r.current)return;let y=r.current.querySelector(`[data-item="${s}"] .combo-input`);y&&y.focus(),i(null)},[s,o.length]);let p=Se(()=>v.services.filter(y=>y.active!==!1&&(!y.companyId||y.companyId===e.companyId)).sort((y,b)=>y.name.localeCompare(b.name,"de")).map(y=>({id:y.id,label:y.name,search:`${y.code||""} ${y.internalName} ${y.category} ${y.tier?Dt[y.tier].label:""}`,sub:[y.tier?Dt[y.tier].label:"",y.code,`${j(y.priceCents,y.currency)} je ${y.unit}`].filter(Boolean).join(" · ")})),[v.version,e.companyId]),d=(y,b)=>n(o.map(g=>g.id===y?{...g,...b}:g)),u=y=>n(o.filter(b=>b.id!==y));function m(y,b){let g=y+b;if(g<0||g>=o.length)return;let h=[...o];[h[y],h[g]]=[h[g],h[y]],n(h)}function f(){let y=Yt({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,y]),i(y.id)}function $(y,b){let g=w("services",b);if(!g)return;let h=dt(g,t),I=h.priceCents;if(g.currency&&g.currency!==c){let S=e.fx?en(g.currency,e.fx.usdToEur):null,x=S?un(I,g.currency,c,S):null;x!=null?(I=x,M(`Preis von ${g.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):M(`Die Leistung ist in ${g.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}d(y,{...h,id:y,priceCents:I})}return l`<div class="items" ref=${r}>
    ${o.map((y,b)=>l`<div class="item" key=${y.id} data-item=${y.id}>
      <div class="item-top">
        <span class="item-pos">${b+1}</span>
        <div class="item-name">
          <${$t} freeText options=${p} text=${y.name} label=${`Position ${b+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${g=>d(y.id,{name:g,serviceId:y.serviceId&&w("services",y.serviceId)&&w("services",y.serviceId).name===g?y.serviceId:""})}
            onChange=${g=>$(y.id,g)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${b+1} nach oben`} disabled=${b===0} onClick=${()=>m(b,-1)}><${W} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${b+1} nach unten`} disabled=${b===o.length-1} onClick=${()=>m(b,1)}><${W} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${b+1} entfernen`} onClick=${()=>u(y.id)}><${W} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String(y.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${b+1}: Beschreibung`}
        value=${y.description} onInput=${g=>d(y.id,{description:g.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${je} value=${y.qty} digits=${3} onChange=${g=>d(y.id,{qty:g})} aria-label=${`Position ${b+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${y.unit} aria-label=${`Position ${b+1}: Einheit`}
            onInput=${g=>d(y.id,{unit:g.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${je} mode="money" value=${y.priceCents} onChange=${g=>d(y.id,{priceCents:g})} aria-label=${`Position ${b+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${je} value=${y.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${g=>d(y.id,{discountPct:g})} aria-label=${`Position ${b+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${je} value=${y.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g=>d(y.id,{taxRate:g})} aria-label=${`Position ${b+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${j(Rr(y),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${fa.map(y=>l`<option value=${y}></option>`)}</datalist>
    <div class="items-foot">
      <${C} icon="plus" onClick=${f}>Position hinzufügen<//>
      <${C} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function As({coll:e,id:t,params:n}){ge();let a=Zp[e],[s,i]=D(()=>Gp(e,t,n||{})),[r,o]=D(!1),[c,p]=D({loading:!1,error:""}),[d,u]=D(""),[m,f]=D(""),[$,y]=D([]),[b,g]=D(null),[h,I]=D(!1),S=ve(0),x=ve(!0),B=K=>{i(K),o(!0)},V=K=>ee=>B(Ne=>({...Ne,[K]:ee})),[E,A]=D(null);async function k(K){let ee=s;if(B(Ne=>({...Ne,language:K})),K!==ee.language){if(!v.settings.aiApiKey){A({lang:K,noKey:!0});return}await U(K,ee)}}async function U(K,ee=s){let Ne=sn(ee);if(!Ne.length){A(null);return}f("translate");let Et=await _(()=>Vi({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,texts:Ne,target:K}));if(f(""),!Et)return;let Nt=Object.fromEntries(Ne.map(Oe=>[Oe.id,Oe.text]));B(Oe=>{let rt=Object.fromEntries(sn(Oe).map(ot=>[ot.id,ot.text])),Mt=Object.fromEntries(Object.entries(Et.map).filter(([ot])=>rt[ot]===Nt[ot]));return{...La(Oe,Mt),language:K}}),A({lang:K,count:Et.count,before:ee})}function z(){if(!E||!E.before)return;let K=E.before;B(ee=>({...La(ee,Object.fromEntries(sn(K).map(Ne=>[Ne.id,Ne.text]))),language:K.language})),A(null)}ce(()=>(r?ri(oi):cn(),()=>cn()),[r]);let H=s?w("companies",s.companyId):null,T=s?w("customers",s.customerId):null,R=s?`${s.currency}|${s.issueDate}`:"";async function Q(K){if(!s||!be(s.issueDate)||!K&&s.fx&&s.fx.manual)return;let ee=++S.current,Ne=s.currency,Et=s.issueDate;p({loading:!0,error:""});try{let Nt=await ea(Ne,Et);if(ee!==S.current)return;i(Oe=>Oe.currency===Ne&&Oe.issueDate===Et?{...Oe,fx:Nt}:Oe),K&&o(!0),p({loading:!1,error:""})}catch(Nt){if(ee!==S.current)return;i(Oe=>Oe.fx&&!Oe.fx.manual&&Oe.fx.forDate&&be(Oe.issueDate)&&Oe.fx.forDate!==Xn(Oe.issueDate)?{...Oe,fx:null}:Oe),p({loading:!1,error:Nt.message})}}if(ce(()=>{let K=x.current;x.current=!1,!(!s||s.status!=="draft")&&(K&&s.number&&s.fx||Q(!1))},[R]),ce(()=>{let K=!0;if(!s||!H){u("");return}if(s.number){u(s.number);return}return ms(H,a.numberKind,s.issueDate).then(ee=>{K&&u(ee)}).catch(()=>{K&&u("")}),()=>{K=!1}},[s&&s.companyId,s&&s.issueDate,v.version]),!s)return l`<${fe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${C} onClick=${()=>Y(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>Dn(`${a.list}/${s.id}`),0),null;let N=ht(s),te=s.fx?en(s.currency,s.fx.usdToEur,s.fx):null,me={...s,fx:te,totals:N,dueDate:e==="invoices"?Hr(s):""},G=Bt(me,e,{previewNumber:d}),Re=s.currency==="USD"?"EUR":"USD",Qe=te?un(N.totalCents,s.currency,Re,te):null,rn=re(),qs=!!w(e,s.id),it=e==="invoices"&&s.number?s.number:"",lr=it?s.reopened||{}:null,la=it?Me(Ye(s.id)):0,sm=v.customers.filter(K=>K.active!==!1||K.id===s.customerId).sort((K,ee)=>+!Ue(K)-+!Ue(ee)||Z(K).localeCompare(Z(ee),"de")).map(K=>({id:K.id,label:Z(K),sub:[Ue(K)?"":"Kontakt",K.number,K.city].filter(Boolean).join(", "),search:`${K.firstName} ${K.lastName} ${K.contact} ${K.email}`}));function im(K){let ee=w("companies",K),Ne=w("companies",s.companyId);if(!ee){B(rt=>({...rt,companyId:""}));return}let Et=e==="quotes"?"quoteText":"invoiceText",Nt=(rt,Mt)=>String(rt||"")===String(Mt||"");B(rt=>{let Mt=w("customers",rt.customerId),ot={...rt,companyId:K};(!rt.intro||Ne&&Nt(rt.intro,Ne[Et]))&&(ot.intro=ee[Et]||""),(!rt.paymentTerms||Ne&&Nt(rt.paymentTerms,Ne.paymentTerms))&&(ot.paymentTerms=ee.paymentTerms||""),(!rt.footer||Ne&&Nt(rt.footer,Ne.footer))&&(ot.footer=ee.footer||""),Mt&&Mt.language||(ot.language=ee.language),Mt&&Mt.currency||(ot.currency=ee.currency),e==="invoices"&&!(Mt&&Mt.paymentTermDays!=null&&Mt.paymentTermDays!=="")&&(ot.paymentTermDays=ee.paymentTermDays),ot.showSecondary=ee.showSecondary;let pm=Ne&&Number(Ne.defaultTaxRate)||0,fm=Number(ee.defaultTaxRate)||0;return ot.items=rt.items.map(Ga=>{let dr=Ga.serviceId?w("services",Ga.serviceId):null;return(!dr||dr.taxRate==null||dr.taxRate==="")&&(Number(Ga.taxRate)||0)===pm?{...Ga,taxRate:fm}:Ga}),ot});let Oe=w("customers",s.customerId);s.items.length&&!(Oe&&Oe.currency)&&ee.currency!==s.currency&&M(`Währung auf ${ee.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function rm(K){let ee=w("customers",K),Ne=s.currency,Et=Ts(s,ee,w("companies",s.companyId),e);B(Nt=>Ts(Nt,ee,w("companies",Nt.companyId),e)),s.items.length&&Et.currency!==Ne&&M(`Währung auf ${Et.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function om(K){K!==s.currency&&(s.items.length&&M("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),B(ee=>({...ee,currency:K,fx:ee.fx?en(K,ee.fx.usdToEur,ee.fx):ee.fx})))}function lm(K){K>0&&(S.current+=1,p({loading:!1,error:""}),B(ee=>({...ee,fx:en(ee.currency,K,{manual:!0,source:"Von Hand eingetragen",date:F(),fetchedAt:ne()})})))}function cm(){let K=Fr("USD","EUR");K&&(B(ee=>({...ee,fx:en(ee.currency,K.rate,{manual:!0,source:`Letzter bekannter Kurs (${K.source})`,date:K.date,fetchedAt:K.fetchedAt})})),p({loading:!1,error:""}))}async function um(){f("save");let K=await _(()=>e==="invoices"?Na(s):Kc(s));f(""),K&&(i(we(K)),o(!1),cn(),y([]),M("Entwurf gespeichert","good"),(t==="new"||!t)&&(cn(),Y(`${a.list}/${K.id}/edit`,{replace:!0})))}async function dm(){if(c.loading){M("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let K=wi(me,e==="quotes"?"quote":"invoice");if(y(K),K.length){M("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await ue({title:`${a.finalize}?`,text:it?`Die Rechnung behält die Nummer ${it} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${d} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${d} und lässt sich danach nicht mehr ändern.`,list:[`${Z(T)}`,`${j(N.totalCents,s.currency)}${Qe!=null?` (≈ ${j(Qe,Re)})`:""}`,...e==="invoices"&&T&&!Ue(T)?[`${Z(T)} ist bisher Kontakt und wird damit Kunde (neue Nummer ${En("customer")}).`]:[],...la>0?[la>N.totalCents?`Achtung: Eingegangen sind bereits ${j(la,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${j(la,s.currency)}`]:[]],confirmLabel:a.finalize}))return;f("finalize");let Ne=await _(()=>e==="invoices"?ps(me):gs(me));f(""),Ne&&(o(!1),M(`${a.one} ${Ne.number} ${it?"neu erstellt":"erstellt"}`,"good"),Dn(`${a.list}/${Ne.id}`))}async function mm(){if(it){await Oi(w("invoices",s.id)||s)&&Dn(a.list);return}if(!await ue({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await(e==="invoices"?Wr(s.id):Oc(s.id)),!0))&&(M("Entwurf gelöscht","good"),Dn(a.list))}let cr=s.fx?Number(s.fx.usdToEur):null,ur=!!s.serviceDateEnd;return l`
    <${ke} title=${it?`Rechnung ${it} bearbeiten`:qs?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${it?"Entwurf – die Nummer bleibt erhalten":d?`Nächste Nummer: ${d}`:H?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${C} class="only-narrow" icon="eye" onClick=${()=>I(!h)}>${h?"Formular":"Vorschau"}<//>
      ${qs&&l`<${It} items=${[{label:it?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:mm}]} />`}
      <${C} icon="check" onClick=${um} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${C} variant="primary" icon="invoice" onClick=${dm} busy=${m==="finalize"} disabled=${!!m}>${a.finalize}<//>
    <//>

    ${it&&l`<${he} tone="info">
      Diese Rechnung war bereits erstellt${lr.finalizedAt?` (${Xe(lr.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${it}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${la>0?` Die eingetragenen Zahlungen (${j(la,s.currency)}) bleiben erhalten.`:""}
      ${lr.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${$.length>0&&l`<${he} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${$.map(K=>l`<li>${K}</li>`)}</ul>
    <//>`}

    <div class=${`editor${h?" show-preview":""}`}>
      <div class="editor-form">
        <${X} title=${e==="quotes"?"Aussteller und Empfänger":"Aussteller und Kunde"}>
          <div class="form-grid">
            <${se} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${im}
              disabled=${!!it} hint=${it?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${rn.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(it&&H&&!rn.some(K=>K.id===H.id)?[H,...rn]:rn).map(K=>({id:K.id,label:K.name}))} />
            <${xe} class="span-3" label=${e==="quotes"?"Kontakt oder Kunde":"Kunde"} htmlFor="doc-customer">
              <${$t} id="doc-customer" options=${sm} value=${s.customerId} placeholder=${e==="quotes"?"Kontakt suchen":"Kunde suchen"}
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${rm}
                onCreate=${K=>g({type:"customer",seed:K})} createLabel=${e==="quotes"?"als Kontakt anlegen":"als Kunde anlegen"} />
            <//>
            <${ze} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${V("issueDate")} />
            ${e==="invoices"&&l`
              <${ze} class="span-2" label=${ur?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${V("serviceDate")} />
              ${ur?l`<${ze} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${V("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>V("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${_e} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${V("paymentTermDays")}
                hint=${me.dueDate?`Fällig am ${O(me.dueDate)}`:""} />
              ${ur&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>V("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${ze} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${V("validUntil")} min=${s.issueDate} />`}
            <${se} class="span-2" label="Währung" value=${s.currency} onChange=${om} options=${Be} />
            <${se} class="span-2" label="Belegsprache" value=${s.language} onChange=${k} options=${Pt}
              disabled=${m==="translate"} hint=${m==="translate"?"Wird übersetzt …":""} />
          </div>
          ${E&&E.noKey&&l`<${he} tone="info">Positionen und Texte bleiben, wie sie sind. Mit dem API-Key aus den Einstellungen übersetzt das Tool sie beim Sprachwechsel automatisch.<//>`}
          ${E&&!E.noKey&&l`<${he} tone="good" action=${l`<${C} small onClick=${z}>Rückgängig<//>`}>
            ${E.count?`${E.count} ${E.count===1?"Text":"Texte"} ins ${E.lang==="en"?"Englische":"Deutsche"} übersetzt – bitte kurz prüfen.`:`Alle Texte waren schon ${E.lang==="en"?"Englisch":"Deutsch"}.`}<//>`}
          ${v.settings.aiApiKey&&sn(s).length>0&&l`<div class="translate-row">
            <button type="button" class="link-btn" disabled=${m==="translate"} onClick=${()=>U(s.language)}>
              ${m==="translate"?"Wird übersetzt …":`Alle Texte ins ${s.language==="en"?"Englische":"Deutsche"} übersetzen`}</button>
          </div>`}
        <//>

        <${X} title="Positionen">
          <${xo} doc=${s} company=${H} onChange=${K=>B(ee=>({...ee,items:K}))}
            onNewService=${()=>g({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${Ct} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${K=>B(ee=>({...ee,discount:{type:K,value:0}}))} />
                ${s.discount.type==="abs"?l`<${je} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${K=>B(ee=>({...ee,discount:{type:"abs",value:K}}))} />`:l`<${je} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${K=>B(ee=>({...ee,discount:{type:"pct",value:K}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${j(N.subtotalCents,s.currency)}</dd></div>
              ${N.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${j(-N.discountCents,s.currency)}</dd></div>`}
              ${N.taxGroups.filter(K=>K.rate!==0).map(K=>l`<div><dt>${H&&H.taxLabel||"Steuer"} ${At(K.rate)}</dt><dd>${j(K.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${j(N.totalCents,s.currency)}</dd></div>
              ${Qe!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${j(Qe,Re)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${X} title="Wechselkurs">
          ${c.error&&l`<${he} tone="warn" action=${Fr("USD","EUR")&&l`<${C} small onClick=${cm}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${je} value=${cr} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${lm} />
            <span class="fx-eq">EUR</span>
            <${C} small icon="refresh" busy=${c.loading} onClick=${()=>Q(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${O(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&cr?` Das entspricht 1 EUR = ${Ia(1/cr)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${He} label=${`Betrag zusätzlich in ${Re} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${V("showSecondary")} />
        <//>

        <${X} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${ie} class="span-6" label="Einleitung" value=${s.intro} onInput=${V("intro")} rows=${2} />
            <${ie} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${V("paymentTerms")} rows=${2} />
            <${ie} class="span-6" label="Fußzeile" value=${s.footer} onInput=${V("footer")} rows=${2} />
          </div>
        <//>

        <${X} title="Interne Notiz">
          <${ie} value=${s.internalNotes} onInput=${V("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${G.fileName}</span>
          </div>
          <${Pa} model=${G} />
        </div>
      </div>
    </div>

    ${b&&b.type==="customer"&&l`<${Ka}
      customer=${Qt({company:b.seed||"",kind:e==="quotes"?"contact":"customer"})} onClose=${()=>g(null)}
      onSaved=${K=>B(ee=>Ts(ee,K,w("companies",ee.companyId),e))} />`}
    ${b&&b.type==="service"&&l`<${wo}
      service=${Jt({companyId:"",currency:s.currency})} onClose=${()=>g(null)}
      onSaved=${K=>B(ee=>({...ee,items:[...ee.items,dt(K,w("companies",ee.companyId))]}))} />`}
  `}function Wi(e,t){let[n,a]=D(!1),[s,i]=D(null);async function r(p,d=e,{setLanguage:u=!1}={}){if(!v.settings.aiApiKey){i({noKey:!0});return}let m=sn(d);if(!m.length)return;a(!0);let f=await _(()=>Vi({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,texts:m,target:p}));if(a(!1),!f)return;let $=Object.fromEntries(m.map(y=>[y.id,y.text]));t(y=>{let b=Object.fromEntries(sn(y).map(h=>[h.id,h.text])),g=Object.fromEntries(Object.entries(f.map).filter(([h])=>b[h]===$[h]));return{...La(y,g),...u?{language:p}:{}}}),i({lang:p,count:f.count,before:d})}function o(){if(!s||!s.before)return;let p=s.before;t(d=>({...La(d,Object.fromEntries(sn(p).map(u=>[u.id,u.text]))),..."language"in p?{language:p.language}:{}})),i(null)}let c=s&&(s.noKey?l`<${he} tone="info">Zum Übersetzen braucht es den API-Key aus den Einstellungen.<//>`:l`<${he} tone="good" action=${l`<${C} small onClick=${o}>Rückgängig<//>`}>
        ${s.count?`${s.count} ${s.count===1?"Text":"Texte"} ins ${s.lang==="en"?"Englische":"Deutsche"} übersetzt – bitte kurz prüfen.`:`Alle Texte waren schon ${s.lang==="en"?"Englisch":"Deutsch"}.`}<//>`);return{translate:r,busy:n,notice:c,hasKey:!!v.settings.aiApiKey}}function qu({tr:e,base:t,label:n="Positionen übersetzen"}){return!e.hasKey||!sn(t).length?null:l`<span class="translate-buttons"><span class="muted-text">${n}:</span>
    <button type="button" class="link-btn" disabled=${e.busy} onClick=${()=>e.translate("de",t)}>Deutsch</button>
    <button type="button" class="link-btn" disabled=${e.busy} onClick=${()=>e.translate("en",t)}>Englisch</button>
    ${e.busy&&l`<span class="muted-text">wird übersetzt …</span>`}</span>`}function jp(e){let t=Kn.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=Ci(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function ko({rec:e,onClose:t}){let n=!w("recurring",e.id),[a,s]=D(()=>we(e)),[i,r]=D(!1),o=b=>g=>s(h=>({...h,[b]:g})),c=Wi(a,s);function p(b){let g=a;s(h=>({...h,language:b})),b!==g.language&&c.hasKey&&c.translate(b,g,{setLanguage:!0})}let d=w("companies",a.companyId),u=ht(a),m=v.customers.filter(b=>b.active!==!1||b.id===a.customerId).sort((b,g)=>Z(b).localeCompare(Z(g),"de")).map(b=>({id:b.id,label:Z(b),sub:[b.number,b.city].filter(Boolean).join(", ")}));function f(b){let g=w("companies",b);s(h=>({...h,companyId:b,...g&&n?{currency:g.currency,language:g.language,paymentTermDays:g.paymentTermDays,intro:h.intro||g.invoiceText}:{}}))}function $(b){let g=w("customers",b);s(h=>({...h,customerId:b,...g&&g.language?{language:g.language}:{},...g&&g.currency&&Be.includes(g.currency)?{currency:g.currency}:{},...g&&g.paymentTermDays!=null&&g.paymentTermDays!==""?{paymentTermDays:Number(g.paymentTermDays)}:{}}))}async function y(){r(!0);let b=await _(()=>$s(a));r(!1),b&&(M("Vorlage gespeichert","good"),t())}return l`<${Le} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${y}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${q} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${f} placeholder="Unternehmen wählen"
        options=${re().map(b=>({id:b.id,label:b.name}))} />
      <${xe} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${$t} id="rec-customer" options=${m} value=${a.customerId} placeholder="Kunde suchen" onChange=${$} />
      <//>
      <${se} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${Kn.map(b=>({id:b.id,label:b.label}))} />
      ${a.interval==="custom"&&l`<${_e} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${ze} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${ze} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${_e} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${se} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${Be} />
      <${se} class="span-2" label="Belegsprache" value=${a.language} onChange=${p} options=${Pt}
        disabled=${c.busy} hint=${c.busy?"Wird übersetzt …":c.hasKey?"Wechsel übersetzt Positionen und Texte":""} />
      <div class="span-6">
        <${He} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${b=>o("servicePeriod")(b?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    ${c.notice}
    <h3 class="sub-head">Positionen</h3>
    <${xo} doc=${a} company=${d} onChange=${b=>s(g=>({...g,items:b}))}
      onNewService=${()=>M("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${j(u.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${He} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function Vu(){ge();let[e,t]=D(null),[n,a]=D(""),s=F(),i=v.recurring.filter(qe),r=i.filter(m=>Ta(m,s)),o=!de();async function c(m,f){let $=m.nextDate>s;if($&&!await ue({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${O(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(m.id);let y=await _(()=>no(m.id,{early:$}));return a(""),y&&(M(`Rechnungsentwurf für ${Z(w("customers",m.customerId))} angelegt`,"good"),f&&Y(`/invoices/${y.id}/edit`)),y}async function p(){a("all");let m=0;for(let f of r){let $=0;for(;Ta(w("recurring",f.id),s)&&$++<36&&await _(()=>no(f.id));)m+=1}a(""),m&&(M(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),Y("/invoices?status=draft"))}async function d(m){if(!await ue({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Hc(m.id),!0))&&M("Vorlage gelöscht","good")}let u=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${Z(w("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Ke} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>jp(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>Aa(m)?l`<span class="muted-text">beendet</span>`:m.active?Ta(m,s)?l`<span class="tone-warn">${O(m.nextDate)}</span><div class="cell-sub">fällig</div>`:O(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>j(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>Aa(m)?l`<${Pe} tone="mute">Beendet<//>`:m.active?l`<${Pe} tone="good">Aktiv<//>`:l`<${Pe} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${C} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||Aa(m)}
          title=${Aa(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(m,!0)}>Jetzt erzeugen<//>
        <${C} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>d(m)} />
      </div>`}];return l`
    <${ke} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${C} variant="primary" icon="plus" onClick=${()=>t(wn(de()||(re().length===1?re()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${he} tone="warn" action=${l`<${C} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${p}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${tt} columns=${u} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${fe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${C} variant="primary" icon="plus" onClick=${()=>t(wn(de()||(re().length===1?re()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${ko} rec=${e} onClose=${()=>t(null)} />`}
  `}var Qi=new Set,Do=new Set,Zu=()=>Do.forEach(e=>e(new Set(Qi)));function Hp(){let[e,t]=D(new Set(Qi));return ce(()=>(Do.add(t),()=>Do.delete(t)),[]),e}var Wp=()=>({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,categories:v.settings.expenseCategories||[],paymentMethods:v.settings.paymentMethods||[]});async function Gu(e){let t=await za(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return Ru(t,Wp())}async function Qp(e,t){try{return await ea(e,be(t)?t:F())}catch{return null}}async function Jp(e){let t=await fo(e,{shrink:v.settings.shrinkImages!==!1}),n=de()||(re().length===1?re()[0]:null),a=ts({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:v.settings.aiApiKey?"pending":"none"}}),s=await eo({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await Nn(a),!v.settings.aiApiKey)return a;Qi.add(a.id),Zu();try{let i=await Gu(s.id),r=i.fields,o=r.currency||a.currency,c=await Qp(o,r.invoiceDate),p=w("expenses",a.id);p&&p.status==="review"&&(a=await Nn({...p,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:v.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=w("expenses",a.id);throw r&&await Nn({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{Qi.delete(a.id),Zu()}return a}function Rs({attachmentId:e}){let[t,n]=D(""),[a,s]=D(!1),i=w("attachments",e);ce(()=>{let o="",c=!0;return n(""),s(!1),za(e).then(p=>{if(c){if(!p){s(!0);return}o=URL.createObjectURL(p),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await za(e);o&&et(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${W} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${Ht(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function Yp({expense:e,onClose:t}){let n=!w("expenses",e.id),a=e.status==="review",[s,i]=D(()=>{let R=we(e);if(!R.invoiceDate&&!a&&(R.invoiceDate=F()),!R.companyId){let Q=de()||(re().length===1?re()[0]:null);Q&&(R.companyId=Q.id)}return R}),[r,o]=D(""),[c,p]=D(""),[d,u]=D(0),m=ve([]),f=ve(null),$=R=>Q=>i(N=>({...N,[R]:Q})),y=(s.attachmentIds||[])[0],b=s.ai||{},g=new Set(b.uncertain||[]),h=`${s.currency}|${s.invoiceDate}`;ce(()=>{let R=!0;if(!be(s.invoiceDate)||s.fx&&s.fx.manual)return;let Q=(me,G)=>!!me&&me.forCurrency===G.currency&&me.forDate===Xn(G.invoiceDate);if(Q(s.fx,s))return;p("");let N=s.currency,te=s.invoiceDate;return ea(N,te).then(me=>{R&&i(G=>G.currency===N&&G.invoiceDate===te&&!(G.fx&&G.fx.manual)?{...G,fx:me}:G)}).catch(me=>{R&&(i(G=>G.fx&&!G.fx.manual&&G.fx.forDate&&!Q(G.fx,G)?{...G,fx:null}:G),p(me.message))}),()=>{R=!1}},[h,d]);function I(R,Q){i(N=>{let te={...N,[R]:Q};return R==="totalCents"?te.netCents=(Q||0)-(N.taxCents||0):te.totalCents=(te.netCents||0)+(te.taxCents||0),te})}function S(R,Q){Q>0&&i(N=>{let me={...N.fx||{rateToUSD:N.currency==="USD"?1:null,usdToEur:null},[R]:Q,manual:!0,source:"Von Hand eingetragen",date:F(),fetchedAt:ne()};return N.currency==="USD"&&(me.rateToUSD=1),N.currency==="EUR"&&R==="usdToEur"&&(me.rateToUSD=1/Q),{...N,fx:me}})}async function x(R){if(!R)return;o("file");let Q=await _(async()=>{let N=await fo(R,{shrink:v.settings.shrinkImages!==!1});return eo({blob:N.blob,name:N.name,ownerType:"expense",ownerId:s.id})});o(""),Q&&(m.current.push(Q.id),i(N=>({...N,attachmentIds:[Q.id,...N.attachmentIds||[]]})))}async function B(){if(!await ue({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let Q=y;await _(()=>to(Q)),i(te=>({...te,attachmentIds:(te.attachmentIds||[]).filter(me=>me!==Q)}));let N=w("expenses",s.id);N&&await _(()=>Nn({...N,attachmentIds:(N.attachmentIds||[]).filter(te=>te!==Q)}))}async function V(){if(y){o("ai");try{let R=await Gu(y),Q=R.fields;i(N=>({...N,...Q,currency:Q.currency||N.currency,fx:null,ai:{status:"done",at:ne(),model:v.settings.aiModel,uncertain:R.uncertain,warnings:R.warnings}})),u(N=>N+1),M("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(R){ka(R)}o("")}}async function E(){let R=w("expenses",s.id),Q=new Set(R?R.attachmentIds||[]:[]);for(let N of m.current)Q.has(N)||await to(N).catch(()=>{});t()}async function A(){o("save");let R=await _(()=>Nn({...s,status:"booked"}));o(""),R&&(M(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function k(){if(!await ue({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await jc(s.id),!0))&&(M("Ausgabe gelöscht","good"),t())}let U=R=>g.has(R)?"Von der KI als unsicher markiert – bitte prüfen":"",z=s.fx?St(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,H=v.settings.expenseCategories||[],T=v.settings.paymentMethods||[];return l`<${Le} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${E} size="xl" onSubmit=${A}
    footer=${l`
      ${!n&&l`<${C} variant="ghost" icon="trash" onClick=${k} class="push-left">Löschen<//>`}
      <${C} onClick=${E}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${y?l`<${Rs} attachmentId=${y} />
              <div class="receipt-actions">
                <${C} small icon="sparkle" busy=${r==="ai"} disabled=${!v.settings.aiApiKey} onClick=${V}
                  title=${v.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${C} small variant="ghost" icon="trash" onClick=${B}>Beleg entfernen<//>
              </div>
              ${!v.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>f.current&&f.current.click()}>
              <${W} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${f} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${R=>{x(R.target.files[0]),R.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${b.status==="done"&&l`<${he} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(b.warnings||[]).length>0&&l`<ul class="notice-list">${b.warnings.map(R=>l`<li>${R}</li>`)}</ul>`}
        <//>`}
        ${b.status==="error"&&l`<${he} tone="warn">Automatisches Auslesen fehlgeschlagen: ${b.message}<//>`}
        <div class="form-grid">
          <${se} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${$("companyId")} placeholder="Unternehmen wählen"
            options=${re().map(R=>({id:R.id,label:R.name}))} />
          <${se} class="span-3" label="Kategorie" value=${s.category} onChange=${$("category")} placeholder="Keine"
            options=${H.includes(s.category)||!s.category?H:[...H,s.category]} hint=${U("category")} />
          <${q} class="span-4" label="Lieferant" value=${s.vendor} onInput=${$("vendor")} hint=${U("vendor")} />
          <${q} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${$("invoiceNumber")} hint=${U("invoice_number")} />
          <${q} class="span-6" label="Beschreibung" value=${s.description} onInput=${$("description")} />
          <${ze} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${$("invoiceDate")} hint=${U("invoice_date")} />
          <${ze} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${$("paymentDate")} hint=${U("payment_date")} />
          <${se} class="span-2" label="Währung" value=${s.currency} hint=${U("currency")}
            onChange=${R=>i(Q=>({...Q,currency:R,fx:null}))} options=${Xs} />
          <${_e} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${R=>I("netCents",R)} hint=${U("net_amount")} />
          <${_e} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${R=>I("taxCents",R)} hint=${U("tax_amount")} />
          <${_e} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${R=>I("totalCents",R)}
            hint=${U("total_amount")||(z!=null&&s.currency!=="USD"?`≈ ${j(z,"USD")}`:"")} />
          <${se} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${$("paymentMethod")} placeholder="Keine Angabe"
            options=${T.includes(s.paymentMethod)||!s.paymentMethod?T:[...T,s.paymentMethod]} />
          <${xe} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${O(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${je} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${R=>S("rateToUSD",R)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${je} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${R=>S("usdToEur",R)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${ie} class="span-6" label="Notiz" value=${s.note} onInput=${$("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function ju(){ge();let e=Hp(),[t,n]=D(""),[a,s]=D(""),[i,r]=D("year"),[o,c]=D(null),[p,d]=D(!1),[u,m]=D(0),f=ve(null),$=!de(),y=F(),b=Se(()=>v.expenses.filter(k=>qe(k)||!k.companyId&&k.status==="review"),[v.version,v.settings.activeCompany]),g=b.filter(k=>k.status==="review").sort((k,U)=>k.createdAt<U.createdAt?1:-1),h=kt(i,y),I=b.filter(k=>k.status==="booked"),S=I.filter(k=>i==="all"||on(k.invoiceDate,h)).filter(k=>!a||k.category===a).filter(k=>Te(t,k.vendor,k.description,k.invoiceNumber,k.category,k.note,(k.totalCents/100).toFixed(2),(k.totalCents/100).toFixed(2).replace(".",","))),x=[...new Set(I.map(k=>k.category).filter(Boolean))].sort((k,U)=>k.localeCompare(U,"de")),B=S.reduce((k,U)=>(k.net+=mt(U.netCents,U.currency,U.fx)||0,k.tax+=mt(U.taxCents,U.currency,U.fx)||0,k.total+=mt(U.totalCents,U.currency,U.fx)||0,k),{net:0,tax:0,total:0});async function V(k){let U=[...k];if(!U.length)return;if(!re().length){M("Lege zuerst ein Unternehmen an.","bad");return}m(H=>H+U.length);let z=0;for(let H of U)try{await Jp(H),z+=1}catch(T){ka(T)}finally{m(T=>T-1)}z&&M(z===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${z} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let E=[{key:"date",label:"Datum",sort:k=>k.invoiceDate,render:k=>O(k.invoiceDate)},{key:"vendor",label:"Lieferant",sort:k=>k.vendor,render:k=>l`<div class="cell-main">${k.vendor}</div>${k.description&&l`<div class="cell-sub clamp-1">${k.description}</div>`}`},{key:"category",label:"Kategorie",sort:k=>k.category,render:k=>k.category||l`<span class="muted-text">–</span>`},...$?[{key:"company",label:"Unternehmen",render:k=>l`<${Ke} id=${k.companyId} />`}]:[],{key:"file",label:"Beleg",render:k=>(k.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${W} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:k=>mt(k.netCents,k.currency,k.fx)||0,render:k=>j(k.netCents,k.currency)},{key:"tax",label:"Steuer",align:"right",render:k=>k.taxCents?j(k.taxCents,k.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:k=>mt(k.totalCents,k.currency,k.fx)||0,render:k=>l`<span class="dual"><span class="dual-main">${j(k.totalCents,k.currency)}</span>
        ${k.currency!==oe()&&mt(k.totalCents,k.currency,k.fx)!=null&&l`<span class="dual-sub">≈ ${ae(mt(k.totalCents,k.currency,k.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:k=>k.paymentDate||"",render:k=>k.paymentDate?O(k.paymentDate):l`<span class="muted-text">offen</span>`}],A=S.length?[`${S.length} ${S.length===1?"Ausgabe":"Ausgaben"}`,"","",...$?[""]:[],"",l`<span class="strong">${ae(B.net)}</span>`,l`<span class="strong">${ae(B.tax)}</span>`,l`<span class="strong">${ae(B.total)}</span>`,l`<span class="muted-text">in ${oe()}</span>`]:null;return l`
    <${ke} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${C} icon="plus" onClick=${()=>c(ts())}>Ausgabe von Hand<//>
      <${C} variant="primary" icon="upload" onClick=${()=>f.current&&f.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${p?" is-drag":""}`}
      onDragOver=${k=>{k.preventDefault(),d(!0)}}
      onDragLeave=${()=>d(!1)}
      onDrop=${k=>{k.preventDefault(),d(!1),V(k.dataTransfer.files)}}>
      <${W} name="upload" size=${24} />
      <div>
        <strong>${u>0?`${u} ${u===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${v.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${f} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${k=>{V(k.target.files),k.target.value=""}} />
    </div>

    ${g.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${g.length}</span></h2>
      <ul class="review-list">
        ${g.map(k=>{let U=e.has(k.id),z=k.ai||{};return l`<li key=${k.id}>
            <button type="button" class="review-item" onClick=${()=>c(k)} disabled=${U}>
              <span class="review-icon"><${W} name=${U?"refresh":"file"} class=${U?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${k.vendor||(w("attachments",(k.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${U?"Wird ausgelesen …":z.status==="error"?`Nicht ausgelesen: ${z.message}`:z.status==="done"?`${k.invoiceDate?O(k.invoiceDate):"Datum fehlt"}, ${k.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${k.totalCents?j(k.totalCents,k.currency):""}</span>
              <span class="review-go">${U?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${I.length>0&&l`<div class="filters">
      <${yt} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${k=>r(k.target.value)}>
        ${Pn.filter(k=>k.id!=="custom").map(k=>l`<option value=${k.id}>${k.label}</option>`)}
      </select>
      ${x.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${k=>s(k.target.value)}>
        <option value="">Alle Kategorien</option>
        ${x.map(k=>l`<option value=${k}>${k}</option>`)}
      </select>`}
    </div>`}
    ${(I.length>0||g.length===0)&&l`<${tt} columns=${E} rows=${S} initialSort=${{key:"date",dir:"desc"}} footer=${A} onRowClick=${k=>c(k)}
      empty=${I.length?l`<${fe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${fe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${Yp} expense=${o} onClose=${()=>c(null)} />`}
  `}var Wu={...ya,ending:{label:"Endet bald",tone:"warn"},expired:{label:"Ende überschritten",tone:"bad"}},Qu={monthly:"Monatlich",quarterly:"Quartalsweise",semiannual:"Halbjährlich",yearly:"Jährlich"};function Ji({contract:e}){let t=Wu[Ki(e,F())]||ya.open;return l`<${Pe} tone=${t.tone}>${t.label}<//>`}function Ju(e){return ls(e,t=>j(t,e.currency))}function So(e){let t=v.invoices.filter(i=>i.contractId===e.id&&i.type!=="credit_note"),n=t.filter(i=>i.contractPart==="once"||i.contractPart==="all"||!i.contractPart&&!i.recurringId),a=v.recurring.filter(i=>i.contractId===e.id);return{invoices:t,onceInvoices:n,templates:a,templateFor:i=>a.filter(r=>(r.contractInterval||r.interval)===i)}}function Bs(e){return!e.startDate&&!e.endDate?"":e.startDate&&!e.endDate?`ab ${O(e.startDate)}, unbefristet`:e.startDate?`${O(e.startDate)} – ${O(e.endDate)}`:`bis ${O(e.endDate)}`}var Xp=async(e,t)=>{try{return await ea(e,be(t)?t:F())}catch{return null}};function Yu(e){return v.customers.filter(t=>t.active!==!1||t.id===e).sort((t,n)=>Z(t).localeCompare(Z(n),"de")).map(t=>({id:t.id,label:Z(t),sub:[t.number,t.city].filter(Boolean).join(", ")}))}function Xu(e){if(wt())return w("companies",wt());let t=[...v.invoices,...v.quotes].filter(n=>n.customerId===e).sort((n,a)=>(n.issueDate||"")<(a.issueDate||"")?1:-1);return t[0]&&w("companies",t[0].companyId)||de()||re()[0]||null}async function Co(e){let t=w("attachments",e),n=await za(e);if(!n)throw new Error("Die Datei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).");et(n,t?t.name:"Dokument.pdf")}function oa(e=""){let t=e?Xu(e):de()||(re().length===1?re()[0]:null),n=e?w("customers",e):null;return Ul(t,{customerId:e,...n&&n.currency&&Be.includes(n.currency)?{currency:n.currency}:{},...n&&n.language?{language:n.language}:{}})}function Us(e){let t=w("companies",e.companyId),n=(e.items||[]).find(a=>!a.isText);return qn(t,{customerId:e.customerId,title:e.title||(n?n.name:""),items:fi(e,a=>w("services",a)),currency:e.currency,quoteId:e.id})}function Yi(e){let t=F(),n=new Set(v.contracts.map(s=>s.quoteId).filter(Boolean)),a=v.quotes.filter(s=>s.customerId===e&&["accepted","invoiced"].includes(qt(s,t))&&!n.has(s.id)).sort((s,i)=>(s.issueDate||"")<(i.issueDate||"")?1:-1)[0];return a?Us(a):qn(Xu(e),{customerId:e})}function ef(e,t){let n=w("companies",e.companyId),a=w("customers",e.customerId),s=e.startDate&&e.startDate>F()?e.startDate:F(),i=In(e).intervalIds.length>1;return wn(n,{name:`${e.title} – ${Z(a)}${i?` (${Qu[t].toLowerCase()})`:""}`,customerId:e.customerId,interval:t,startDate:s,nextDate:s,endDate:e.endDate||"",currency:e.currency,...a&&a.language?{language:a.language}:{},...a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?{paymentTermDays:Number(a.paymentTermDays)}:{},items:cs(e,t),contractId:e.id,contractInterval:t})}function ed({multiple:e,onFiles:t,label:n,sub:a}){let s=ve(null),[i,r]=D(!1);async function o(c){let p=[];for(let d of c)try{p.push(await Cu(d))}catch(u){M(u.message,"bad",7e3)}p.length&&t(e?p:p.slice(0,1))}return l`<div class=${`dropzone pdf-drop${i?" is-drag":""}`} role="button" tabindex="0"
      onClick=${()=>s.current&&s.current.click()}
      onKeyDown=${c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),s.current.click())}}
      onDragOver=${c=>{c.preventDefault(),r(!0)}}
      onDragLeave=${()=>r(!1)}
      onDrop=${c=>{c.preventDefault(),r(!1),o([...c.dataTransfer.files||[]])}}>
    <${W} name="upload" size=${22} />
    <div><strong>${n}</strong><span class="muted-text">${a||"PDF hierher ziehen oder klicken, höchstens 15 MB"}</span></div>
    <input ref=${s} type="file" class="visually-hidden" accept="application/pdf,.pdf" multiple=${!!e} tabindex="-1"
      aria-label=${n}
      onChange=${c=>{let p=[...c.target.files];c.target.value="",o(p)}} />
  </div>`}function td({ids:e,onRemove:t,preview:n,setPreview:a}){return e.length?l`<ul class="file-list">
    ${e.map(s=>{let i=w("attachments",s);return l`<li key=${s}>
        <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${i?i.name:"Datei fehlt"}</span>
          ${i&&l`<span class="muted-text">${Ht(i.size)}</span>`}</span>
        <span class="file-actions">
          <button type="button" class="link-btn" onClick=${()=>a(n===s?"":s)}>${n===s?"Ausblenden":"Ansehen"}</button>
          <button type="button" class="link-btn" onClick=${()=>_(()=>Co(s))}>Herunterladen</button>
          ${t&&l`<button type="button" class="link-btn tone-bad" onClick=${()=>t(s)}>Entfernen</button>`}
        </span>
      </li>`})}
  </ul>
  ${n&&e.includes(n)&&l`<div class="file-preview"><${Rs} attachmentId=${n} /></div>`}`:null}function nd({files:e,onRemove:t}){return e.length?l`<ul class="file-list is-new">
    ${e.map((n,a)=>l`<li key=${a}>
      <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${n.name}</span>
        <span class="muted-text">${Ht(n.blob.size)} · wird beim Speichern hochgeladen</span></span>
      <span class="file-actions"><button type="button" class="link-btn tone-bad" onClick=${()=>t(a)}>Entfernen</button></span>
    </li>`)}
  </ul>`:null}var tf=["open","sent","accepted","declined"].map(e=>({id:e,label:pa[e].label}));function Ms({quote:e,onClose:t,onSaved:n}){let a=!w("quotes",e.id),s=(e.items||[])[0],[i,r]=D(()=>we(e)),[o,c]=D(s?s.priceCents:null),[p,d]=D(()=>{if(s)return Number(s.taxRate)||0;let E=w("companies",e.companyId);return E&&Number(E.defaultTaxRate)||0}),[u,m]=D(null),[f,$]=D(""),[y,b]=D(!1),g=E=>A=>r(k=>({...k,[E]:A})),h=i.status==="invoiced",I=ht({items:[Yt({priceCents:o||0,taxRate:p})],discount:null});function S(E){let A=w("companies",E);r(k=>({...k,companyId:E,...A&&a?{currency:k.customerId&&w("customers",k.customerId)&&w("customers",k.customerId).currency?k.currency:A.currency}:{}})),A&&a&&d(Number(A.defaultTaxRate)||0)}function x(E){let A=w("customers",E);r(k=>({...k,customerId:E,...A&&A.currency&&Be.includes(A.currency)?{currency:A.currency}:{},...A&&A.language?{language:A.language}:{}}))}async function B(){if(o==null){M("Bitte den Betrag des Angebots eintragen.","bad");return}b(!0);let E=w("quotes",i.id),k=!i.fx||!E||E.currency!==i.currency||E.issueDate!==i.issueDate?await Xp(i.currency,i.issueDate):i.fx,U={...i,fx:k,items:[Yt({...s?{id:s.id}:{},name:i.title,qty:1,unit:"Pauschale",priceCents:o,taxRate:p})]},z=await _(()=>Vc(U,u));b(!1),z&&(M(a?`Angebot „${z.title}“ hochgeladen`:"Angebot gespeichert","good"),t(),n&&n(z))}let V=i.attachmentIds||[];return l`<${Le} title=${a?"Angebot hochladen (PDF)":"Hochgeladenes Angebot bearbeiten"} size="lg" onClose=${t} onSubmit=${B}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${y}>${a?"Hochladen":"Speichern"}<//>`}>
    <p class="modal-lead">Für Angebote, die du mit einem anderen Programm gestaltet hast – auch ältere. Das PDF bleibt unverändert,
      das Tool merkt sich Kontakt, Betrag und Status. Es bekommt keine Nummer aus deinem Nummernkreis.</p>
    ${u?l`<${nd} files=${[u]} onRemove=${()=>m(null)} />`:l`<${td} ids=${V} preview=${f} setPreview=${$} />`}
    <${ed} label=${u||V.length?"Anderes PDF wählen":"PDF des Angebots auswählen"} onFiles=${E=>m(E[0])} />
    <div class="form-grid">
      <${se} class="span-3" label="Unternehmen" value=${i.companyId} onChange=${S} placeholder="Unternehmen wählen"
        options=${re().map(E=>({id:E.id,label:E.name}))} />
      <${xe} class="span-3" label="Kontakt" htmlFor="uq-customer">
        <${$t} id="uq-customer" options=${Yu(i.customerId)} value=${i.customerId} placeholder="Kontakt suchen" onChange=${x} />
      <//>
      <${q} class="span-4" label="Bezeichnung" value=${i.title} onInput=${g("title")} placeholder="z. B. Website-Relaunch mit SEO-Paket" />
      <${q} class="span-2" label="Nummer im Dokument" hint="optional" value=${i.refNumber} onInput=${g("refNumber")} />
      <${ze} class="span-2" label="Angebotsdatum" value=${i.issueDate} onInput=${g("issueDate")} />
      <${ze} class="span-2" label="Gültig bis" hint="optional" value=${i.validUntil} onInput=${g("validUntil")} />
      <${se} class="span-2" label="Status" value=${h?"invoiced":i.status} onChange=${g("status")} disabled=${h}
        options=${h?[{id:"invoiced",label:"Abgerechnet"}]:tf} />
      <${_e} class="span-2" label="Betrag netto" mode="money" value=${o} allowEmpty onChange=${c} />
      <${_e} class="span-2" label="Steuersatz" value=${p} digits=${2} min=${0} max=${100} suffix="%" onChange=${d} />
      <${se} class="span-2" label="Währung" value=${i.currency} onChange=${g("currency")} options=${Be} />
      <div class="span-6 upload-sum">Gesamt laut Angaben: <strong>${j(I.totalCents,i.currency)}</strong>${I.taxCents?` (davon Steuer ${j(I.taxCents,i.currency)})`:""}</div>
      <${ie} class="span-6" label="Interne Notiz" value=${i.internalNotes} onInput=${g("internalNotes")} rows=${2} />
    </div>
  <//>`}function nf({items:e,onChange:t,companyId:n,currency:a}){let s=w("companies",n),i=v.services.filter(u=>u.active!==!1&&(!u.companyId||u.companyId===n)).sort((u,m)=>u.name.localeCompare(m.name,"de")).map(u=>({id:u.id,label:u.name,search:`${u.code||""} ${u.internalName||""} ${u.category||""} ${u.tier?Dt[u.tier].label:""}`,sub:[u.tier?Dt[u.tier].label:"",u.code,`${j(u.priceCents,u.currency)} je ${u.unit}`,u.recurring?"laufend":"einmalig"].filter(Boolean).join(" · ")})),r=(u,m)=>t(e.map(f=>f.id===u?{...f,...m}:f)),o=u=>t(e.filter(m=>m.id!==u)),c=(u="once")=>t([...e,Jn({billing:u,unit:vt[u]||"Pauschal",taxRate:s&&Number(s.defaultTaxRate)||0})]);function p(u,m){let f=w("services",m);f&&(f.currency&&f.currency!==a&&M(`„${f.name}“ ist in ${f.currency} hinterlegt, der Vertrag in ${a}. Bitte den Preis prüfen.`,"info",7e3),r(u,{serviceId:f.id,name:f.name,description:f.invoiceText||"",qty:Number(f.defaultQty)||1,unit:f.unit||"Pauschal",priceCents:f.priceCents||0,taxRate:f.taxRate!=null&&f.taxRate!==""?Number(f.taxRate):s&&Number(s.defaultTaxRate)||0,billing:zr(f)}))}let d=In({items:e});return l`<div class="items ct-items">
    ${e.map((u,m)=>l`<div class=${`item ct-item${os(u.billing)?" is-recurring":""}`} key=${u.id}>
      <div class="item-top">
        <span class="item-pos">${m+1}</span>
        <div class="item-name">
          <${$t} freeText options=${i} text=${u.name} label=${`Vertragsposition ${m+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${f=>r(u.id,{name:f,serviceId:u.serviceId&&w("services",u.serviceId)&&w("services",u.serviceId).name===f?u.serviceId:""})}
            onChange=${f=>p(u.id,f)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Vertragsposition ${m+1} entfernen`} onClick=${()=>o(u.id)}><${W} name="trash" size=${15} /></button>
        </div>
      </div>
      <div class="item-fields">
        <label class="item-field ct-billing"><span>Abrechnung</span>
          <select class="input select" value=${u.billing} aria-label=${`Vertragsposition ${m+1}: Abrechnung`}
            onChange=${f=>{let $=f.target.value;r(u.id,{billing:$,...vt[$]&&(!u.unit||u.unit==="Pauschal"||Object.values(vt).includes(u.unit))?{unit:vt[$]}:!vt[$]&&Object.values(vt).includes(u.unit)?{unit:"Pauschal"}:{}})}}>
            ${_r.map(f=>l`<option value=${f.id} selected=${f.id===u.billing}>${f.label}</option>`)}
          </select></label>
        <label class="item-field"><span>Menge</span>
          <${je} value=${u.qty} digits=${3} onChange=${f=>r(u.id,{qty:f})} aria-label=${`Vertragsposition ${m+1}: Menge`} /></label>
        <label class="item-field"><span>Einzelpreis netto</span>
          <${je} mode="money" value=${u.priceCents} onChange=${f=>r(u.id,{priceCents:f})} aria-label=${`Vertragsposition ${m+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${je} value=${u.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${f=>r(u.id,{taxRate:f})} aria-label=${`Vertragsposition ${m+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${j(Ea(u),a)}${vt[u.billing]?l`<small>${" / "}${vt[u.billing]}</small>`:""}</strong></div>
      </div>
    </div>`)}
    ${!e.length&&l`<p class="muted-text ct-empty">Noch keine Positionen. Lege z. B. die Website als einmalige Position und den Website-Service als monatliche Position an.</p>`}
    <div class="items-foot">
      <${C} icon="plus" onClick=${()=>c("once")}>Einmalige Position<//>
      <${C} icon="repeat" onClick=${()=>c("monthly")}>Laufende Position<//>
      ${e.length>0&&l`<span class="ct-sums">${ls({items:e},u=>j(u,a))} <span class="muted-text">netto</span></span>`}
    </div>
  </div>`}function af({c:e,sums:t,billing:n,busy:a,onOnce:s,onInterval:i,onClose:r}){return!t.hasOnce&&!t.intervalIds.length?null:l`<div class="ct-billing-box">
    ${t.hasOnce&&l`<div class="ct-bill-row">
      <div><strong>Einmalig</strong> · ${j(t.once,e.currency)} netto
        ${n.onceInvoices.length>0&&l`<div class="cell-sub">Abgerechnet: ${n.onceInvoices.map((o,c)=>l`${c?", ":""}<a href=${`#/invoices/${o.id}${o.status==="draft"?"/edit":""}`} onClick=${r}>${o.number||"Entwurf"}</a>`)}</div>`}
      </div>
      <${C} small icon="invoice" busy=${a==="once"} onClick=${s}>${n.onceInvoices.length?"Weitere Rechnung":"Rechnung erstellen"}<//>
    </div>`}
    ${t.intervalIds.map(o=>{let c=n.templateFor(o);return l`<div class="ct-bill-row" key=${o}>
        <div><strong>${Qu[o]}</strong> · ${j(t.intervals[o],e.currency)} netto / ${vt[o]}
          ${c.length>0&&l`<div class="cell-sub">Vorlage ${c.map((p,d)=>l`${d?", ":""}<a href="#/recurring" onClick=${r}>„${p.name}“</a> ${p.active?`– nächste Rechnung ${O(p.nextDate)}`:"– pausiert oder beendet"}`)}</div>`}
        </div>
        <${C} small icon="repeat" busy=${a===o} onClick=${()=>i(o)}>${c.length?"Weitere Vorlage":"Wiederkehrende Rechnung anlegen"}<//>
      </div>`})}
  </div>`}function _s({contract:e,onClose:t}){ge();let n=!w("contracts",e.id),[a,s]=D(()=>{let T=we(e);return T.items=Yn(e).map(R=>({...R})),T}),[i,r]=D([]),[o,c]=D([]),[p,d]=D(""),[u,m]=D(""),[f,$]=D(null),y=T=>R=>s(Q=>({...Q,[T]:R})),b=Wi({items:a.items||[]},T=>s(R=>({...R,items:T({items:R.items||[]}).items})));if(f)return l`<${ko} rec=${f} onClose=${t} />`;let g=v.quotes.filter(T=>T.customerId===a.customerId&&T.status!=="draft").sort((T,R)=>(T.issueDate||"")<(R.issueDate||"")?1:-1),h=n?[]:v.invoices.filter(T=>T.contractId===a.id).sort((T,R)=>(T.issueDate||"")<(R.issueDate||"")?1:-1),I=n?[]:v.recurring.filter(T=>T.contractId===a.id),S=(a.attachmentIds||[]).filter(T=>!o.includes(T));function x(T){let R=w("companies",T);s(Q=>({...Q,companyId:T,...R&&n&&!(Q.items||[]).length?{currency:R.currency}:{}}))}function B(T){let R=w("quotes",T);if(!R){s(N=>({...N,quoteId:""}));return}let Q=Us(R);s(N=>({...N,quoteId:T,companyId:N.companyId||Q.companyId,title:N.title||Q.title,...(N.items||[]).length?{}:{items:Q.items,currency:Q.currency}}))}async function V(){let T=await _(()=>hs(a,{files:i,removeIds:o}));return T?(s(we(T)),r([]),c([]),T):null}async function E(){m("save");let T=await V();m(""),T&&(M(n?`Vertrag „${T.title}“ angelegt`:"Vertrag gespeichert","good"),t())}async function A(){m("once");let T=await V();m(""),T&&(t(),Y(`/invoices/new?contract=${T.id}&part=once`))}async function k(T){m(T);let R=await V();m(""),R&&$(ef(R,T))}async function U(){let T=h.length+I.length;if(!await ue({title:"Vertrag löschen?",text:`„${a.title}“ wird samt ${S.length===1?"PDF":`${S.length} PDFs`} gelöscht.${T?" Verknüpfte Rechnungen und Vorlagen bleiben erhalten.":""}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Gc(a.id),!0))&&(M("Vertrag gelöscht","good"),t())}let z=In(a),H=n?{invoices:[],onceInvoices:[],templates:[],templateFor:()=>[]}:So(a);return l`<${Le} title=${n?"Neuer Vertrag":"Vertrag"} size="xl" onClose=${t} onSubmit=${E}
    footer=${l`
      ${!n&&l`<${C} variant="ghost" icon="trash" class="push-left" onClick=${U}>Löschen<//>`}
      <${C} onClick=${t}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${u==="save"}>Speichern<//>`}>
    <div class="form-grid">
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${x} placeholder="Unternehmen wählen"
        options=${re().map(T=>({id:T.id,label:T.name}))} />
      <${xe} class="span-3" label="Kontakt" htmlFor="ct-customer">
        <${$t} id="ct-customer" options=${Yu(a.customerId)} value=${a.customerId} placeholder="Kontakt suchen"
          onChange=${T=>s(R=>({...R,customerId:T,quoteId:R.customerId===T?R.quoteId:""}))} />
      <//>
      <${q} class="span-4" label="Bezeichnung" value=${a.title} onInput=${y("title")} placeholder="z. B. SEO-Betreuung 12 Monate" />
      <${q} class="span-2" label="Vertragsnummer" hint="optional" value=${a.refNumber} onInput=${y("refNumber")} />
      <${se} class="span-2" label="Status" value=${a.status} onChange=${y("status")}
        options=${Object.entries(ya).map(([T,R])=>({id:T,label:R.label}))} />
      <${ze} class="span-2" label="Unterschrieben am" value=${a.signedDate} onInput=${y("signedDate")} />
      <${se} class="span-2" label="Aus Angebot" value=${a.quoteId} onChange=${B} placeholder=${g.length?"Kein Angebot":"Keine Angebote vorhanden"}
        options=${g.map(T=>({id:T.id,label:`${Je(T)} · ${O(T.issueDate)} · ${j(T.totals?T.totals.totalCents:0,T.currency)}`}))} />
      <${ze} class="span-2" label="Beginn" value=${a.startDate} onInput=${y("startDate")} />
      <${ze} class="span-2" label="Ende" hint="leer = unbefristet" value=${a.endDate} onInput=${y("endDate")} min=${a.startDate||void 0} />
      <${q} class="span-2" label="Kündigungsfrist" hint="optional" value=${a.noticePeriod} onInput=${y("noticePeriod")} placeholder="z. B. 3 Monate zum Laufzeitende" />
      <${se} class="span-2" label="Währung" value=${a.currency} onChange=${y("currency")} options=${Be} />
      <${ie} class="span-6" label="Notizen" value=${a.notes} onInput=${y("notes")} rows=${2} placeholder="z. B. Sonderkonditionen, Ansprechpartner, Verlängerung" />
    </div>
    <div class="sub-head-row"><h3 class="sub-head">Positionen</h3><${qu} tr=${b} base=${{items:a.items||[]}} /></div>
    ${b.notice}
    <${nf} items=${a.items||[]} onChange=${T=>s(R=>({...R,items:T}))} companyId=${a.companyId} currency=${a.currency} />
    ${a.status!=="declined"&&(z.hasOnce||z.intervalIds.length>0)&&l`<h3 class="sub-head">Abrechnen</h3>
      <${af} c=${a} sums=${z} billing=${H} busy=${u} onOnce=${A} onInterval=${k} onClose=${t} />`}
    <h3 class="sub-head">Vertragsdokumente</h3>
    <${td} ids=${S} preview=${p} setPreview=${d} onRemove=${T=>c(R=>[...R,T])} />
    <${nd} files=${i} onRemove=${T=>r(R=>R.filter((Q,N)=>N!==T))} />
    ${o.length>0&&l`<p class="muted-text small">${o.length===1?"Ein PDF wird":`${o.length} PDFs werden`} beim Speichern entfernt.
      <button type="button" class="link-btn" onClick=${()=>c([])}>Rückgängig</button></p>`}
    <${ed} multiple label="Vertrag als PDF hinzufügen" sub="Auch mehrere Dateien, z. B. Vertrag und Nachtrag" onFiles=${T=>r(R=>[...R,...T])} />
    ${h.length>0&&l`<h3 class="sub-head">Rechnungen zu diesem Vertrag</h3>
      <ul class="plain-list linked-list">
        ${h.map(T=>l`<li key=${T.id}><${W} name=${T.contractPart&&T.contractPart!=="once"&&T.contractPart!=="all"?"repeat":"invoice"} size=${14} />
          <a href=${`#/invoices/${T.id}${T.status==="draft"?"/edit":""}`} onClick=${t}>${T.number||"Entwurf"}</a>
          <span class="muted-text">${O(T.issueDate)}</span> <${Zt} doc=${T} /> <${Tn} inv=${T} /></li>`)}
      </ul>`}
  <//>`}var Hu=[{id:"all",label:"Alle",test:()=>!0},{id:"open",label:"Offen",test:e=>e==="open"},{id:"running",label:"Laufend",test:e=>e==="signed"||e==="ending"||e==="expired"},{id:"ending",label:"Endet bald",test:e=>e==="ending"||e==="expired"},{id:"closed",label:"Beendet",test:e=>e==="ended"||e==="declined"}];function ad({params:e={}}){ge();let[t,n]=D(""),[a,s]=D("all"),[i,r]=D(()=>e.open&&w("contracts",e.open)||null),o=F(),c=!de(),p=Se(()=>v.contracts.filter(qe).map($=>({c:$,s:Ki($,o)})),[v.version,v.settings.activeCompany]),d=p.filter($=>Hu.find(y=>y.id===a).test($.s)).filter($=>Te(t,$.c.title,$.c.refNumber,Z(w("customers",$.c.customerId)),$.c.notes)),u=p.filter($=>$.s==="ending"||$.s==="expired").length,m=[{key:"title",label:"Vertrag",sort:$=>$.c.title,render:$=>l`<div class="cell-main">${$.c.title}</div>${$.c.refNumber&&l`<div class="cell-sub">${$.c.refNumber}</div>`}`},{key:"customer",label:"Kontakt",sort:$=>Z(w("customers",$.c.customerId)),render:$=>Z(w("customers",$.c.customerId))||"–"},...c?[{key:"company",label:"Unternehmen",render:$=>l`<${Ke} id=${$.c.companyId} />`}]:[],{key:"term",label:"Laufzeit",sort:$=>$.c.endDate||$.c.startDate||"",render:$=>Bs($.c)||l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag netto",align:"right",sort:$=>{let y=In($.c);return y.once+Object.values(y.intervals).reduce((b,g)=>b+g,0)},render:$=>Ju($.c)||l`<span class="muted-text">–</span>`},{key:"files",label:"PDF",align:"right",render:$=>($.c.attachmentIds||[]).length?l`<span class="file-count" title="Vertragsdokumente"><${W} name="file" size=${14} />${$.c.attachmentIds.length}</span>`:""},{key:"status",label:"Status",sort:$=>$.s,render:$=>l`<${Ji} contract=${$.c} />`}],f=()=>r(qn(de()||(re().length===1?re()[0]:null)));return l`
    <${ke} title="Verträge" sub="Welcher Kontakt hat welchen Vertrag – mit PDF, Laufzeit und Abrechnung.">
      <${C} variant="primary" icon="plus" onClick=${f}>Neuer Vertrag<//>
    <//>
    ${u>0&&l`<${he} tone="warn">${u===1?"Ein Vertrag endet":`${u} Verträge enden`} in den nächsten 60 Tagen oder ${u===1?"hat":"haben"} das Enddatum überschritten.<//>`}
    ${v.contracts.length>0&&l`<div class="filters">
      <${yt} value=${t} onInput=${n} placeholder="Vertrag, Nummer, Kontakt" />
      <${bt} label="Status" value=${a} onChange=${s}
        options=${Hu.map($=>({id:$.id,label:$.label,count:p.filter(y=>$.test(y.s)).length}))} />
    </div>`}
    <${tt} columns=${m} rows=${d} rowKey=${$=>$.c.id} initialSort=${{key:"term",dir:"desc"}} onRowClick=${$=>r($.c)}
      empty=${v.contracts.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Vertrag." />`:l`<${fe} icon="file" title="Noch keine Verträge" text="Lege Verträge mit PDF, Laufzeit und Betrag an – auch ältere. Aus einem Vertrag wird mit einem Klick die Rechnung oder eine wiederkehrende Abrechnung.">
            <${C} variant="primary" icon="plus" onClick=${f}>Ersten Vertrag anlegen<//>
          <//>`} />
    ${i&&l`<${_s} key=${i.id} contract=${i} onClose=${()=>r(null)} />`}
  `}var sf={done:"Erledigt",active:"Läuft",todo:"Offen",skipped:"Nicht erfasst"};function sd({customerId:e,on:t}){let n=F(),{steps:a,current:s}=Tu({appointments:v.appointments,quotes:v.quotes,contracts:v.contracts,invoices:v.invoices},e,n),[i,r,o,c]=a,p=v.contracts.filter(f=>f.customerId===e&&f.status==="signed"),d=p.find(f=>In(f).hasOnce&&!So(f).onceInvoices.length),u=p.find(f=>In(f).intervalIds.some($=>!So(f).templateFor($).length)),m={meeting:l`
      ${i.next&&l`<p>Nächster Termin: <strong>${O(i.next.date)}, ${i.next.start} Uhr</strong></p>`}
      ${i.last&&l`<p class="muted-text">Zuletzt ${O(i.last.date)}${i.count>1?` · ${i.count} Termine`:""}</p>`}
      ${!i.next&&!i.last&&l`<p class="muted-text">Noch kein Termin.</p>`}
      <div class="flow-actions"><${C} small icon="calendar" onClick=${t.appointment}>Termin planen<//></div>`,quote:l`
      ${r.latest?l`<p><a href=${`#/quotes/${r.latest.id}`}>${Je(r.latest)}</a>${r.latest.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}${" · "}${(pa[r.latestStatus]||{}).label||""}</p>
          <p class="muted-text">${O(r.latest.issueDate)} · ${j(r.latest.totals?r.latest.totals.totalCents:0,r.latest.currency)}${r.count>1?` · ${r.count} Angebote`:""}</p>`:l`<p class="muted-text">${r.drafts?`${r.drafts} ${r.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch kein Angebot."}</p>`}
      <div class="flow-actions">
        <${C} small icon="quote" onClick=${()=>Y(`/quotes/new?customer=${e}`)}>Schreiben<//>
        <${C} small icon="upload" onClick=${t.uploadQuote}>PDF hochladen<//>
      </div>`,contract:l`
      ${o.latest?l`<p><button type="button" class="link-btn" onClick=${()=>t.openContract(o.latest)}>${o.latest.title}</button>${" · "}${(Wu[Ki(o.latest,n)]||{}).label}</p>
          <p class="muted-text">${[Bs(o.latest),o.count>1?`${o.count} Verträge`:""].filter(Boolean).join(" · ")||" "}</p>`:l`<p class="muted-text">Noch kein Vertrag.</p>`}
      <div class="flow-actions"><${C} small icon="file" onClick=${()=>t.contract(Yi(e))}>Vertrag anlegen<//></div>`,invoice:l`
      ${c.latest?l`<p><a href=${`#/invoices/${c.latest.id}`}>${c.latest.number}</a>${" "}<${Tn} inv=${c.latest} /></p>
          <p class="muted-text">${O(c.latest.issueDate)}${c.count>1?` · ${c.count} Rechnungen`:""}</p>`:l`<p class="muted-text">${c.drafts?`${c.drafts} ${c.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch keine Rechnung."}</p>`}
      <div class="flow-actions">
        ${d&&l`<${C} small variant="primary" icon="invoice" onClick=${()=>Y(`/invoices/new?contract=${d.id}&part=once`)}>Aus Vertrag<//>`}
        ${u&&l`<${C} small icon="repeat" onClick=${()=>t.openContract(u)}>Laufend abrechnen<//>`}
        <${C} small icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Schreiben<//>
      </div>`};return l`<${X} title="Ablauf" class="flow-panel">
    <ol class="flow">
      ${a.map((f,$)=>l`<li key=${f.id} class=${`flow-step is-${f.state}${s===$?" is-current":""}`}>
        <div class="flow-head">
          <span class="flow-dot">${f.state==="done"?l`<${W} name="check" size=${13} />`:$+1}</span>
          <span class="flow-label">${f.label}</span>
          <span class="flow-state">${s===$?"Nächster Schritt":sf[f.state]}</span>
        </div>
        <div class="flow-body">${m[f.id]}</div>
      </li>`)}
    </ol>
  <//>`}function id({customerId:e,onOpen:t}){let n=v.contracts.filter(s=>s.customerId===e).sort((s,i)=>(s.startDate||s.createdAt)<(i.startDate||i.createdAt)?1:-1);return l`<${tt} columns=${[{key:"title",label:"Vertrag",render:s=>l`<span class="cell-main">${s.title}</span>${s.refNumber&&l`<div class="cell-sub">${s.refNumber}</div>`}`},{key:"company",label:"Unternehmen",render:s=>l`<${Ke} id=${s.companyId} />`},{key:"term",label:"Laufzeit",render:s=>Bs(s)||"–"},{key:"amount",label:"Betrag netto",align:"right",render:s=>Ju(s)||"–"},{key:"files",label:"PDF",align:"right",render:s=>(s.attachmentIds||[]).length?l`<span class="file-count"><${W} name="file" size=${14} />${s.attachmentIds.length}</span>`:""},{key:"status",label:"Status",render:s=>l`<${Ji} contract=${s} />`}]} rows=${n} onRowClick=${t}
    empty=${l`<p class="panel-empty">Noch keine Verträge für diesen Kontakt.</p>`} />`}var rd={company:"Unternehmen",firstName:"Vorname",lastName:"Nachname",street:"Straße",houseNo:"Hausnummer",zip:"PLZ",city:"Ort",region:"Region",country:"Land",email:"E-Mail",phone:"Telefon",website:"Website",taxId:"Steuer-ID",vatId:"USt-IdNr."};function rf({onApply:e}){let[t,n]=D(!1),[a,s]=D(""),[i,r]=D(""),[o,c]=D(""),p=!!v.settings.aiApiKey;async function d(){if(!a.trim()){M("Bitte zuerst den Text des Impressums einfügen.","info");return}c("text");let m=null;p&&(m=await _(()=>oo({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,text:a}))),m||(m=hu(a)),c(""),e(m)}async function u(){let m=$u(i);if(!m){M("Bitte die Adresse des Impressums eintragen.","info");return}c("url");let f=await _(()=>oo({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,url:m}));c(""),f&&e(f)}return t?l`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${C} variant="ghost" small icon="x" title="Schließen" onClick=${()=>n(!1)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${ie} class="span-6" label="Impressum einfügen" value=${a} onInput=${s} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${p?"Wird mit der KI ausgelesen (API-Key aus den Einstellungen).":"Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer."} />
      <div class="span-6"><${C} small variant="primary" busy=${o==="text"} onClick=${d}>Text auslesen<//></div>
      <${q} class="span-4" label="Oder Adresse des Impressums" value=${i} onInput=${r} placeholder="firma.de/impressum"
        hint=${p?"Die Seite wird über die Anthropic-API abgerufen und ausgelesen.":"Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen."} />
      <div class="span-2 field field-inline"><${C} small busy=${o==="url"} disabled=${!p} onClick=${u}>Von Website laden<//></div>
    </div>
  </div>`:l`<div class="imprint-open"><${C} small icon="sparkle" onClick=${()=>n(!0)}>Daten aus Impressum übernehmen<//></div>`}function Ka({customer:e,onClose:t,onSaved:n}){let a=!e||!w("customers",e.id),[s,i]=D(()=>({...Qt(),...e||{}})),[r,o]=D((s.tags||[]).join(", ")),[c,p]=D(!1),d=h=>I=>i(S=>({...S,[h]:I})),u=w("customers",s.id),m=!a&&v.invoices.some(h=>h.customerId===s.id),f=Ue(s)?"customer":"contact",$=(h,I)=>new RegExp(`^${h==="contact"?"KO":"K"}-\\d+$`).test(String(I||""));function y(h){i(I=>{let S=Ue(I)?"customer":"contact";return S===h?I:{...I,kind:h,number:$(S,I.number)?"":I.number}})}function b({fields:h,extra:I}){let S=[],x=[];i(B=>{let V={...B};for(let[A,k]of Object.entries(h))k&&(String(B[A]||"").trim()?String(B[A]).trim()!==k&&x.push(rd[A]||A):(V[A]=k,S.push(rd[A]||A)));let E=(I||[]).filter(A=>!String(B.notes||"").includes(A));return E.length&&(V.notes=[String(B.notes||"").trim(),...E].filter(Boolean).join(`
`),S.push("Notizen")),V}),setTimeout(()=>{S.length?M(`Übernommen: ${S.join(", ")}${x.length?`. Nicht überschrieben: ${x.join(", ")}`:""}.`,"good",8e3):M(x.length?`Nichts übernommen – ${x.join(", ")} ist schon ausgefüllt.`:"Im Impressum wurden keine Kontaktdaten erkannt.","info",7e3)},0)}async function g(){p(!0);let h={...s,tags:r.split(",").map(S=>S.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},I=await _(()=>na(h));p(!1),I&&(M(a?`${Ue(I)?"Kunde":"Kontakt"} ${I.number} angelegt`:"Gespeichert","good"),n&&n(I),t())}return l`<${Le} title=${a?"Neuer Kontakt":`${f==="customer"?"Kunde":"Kontakt"} bearbeiten`} onClose=${t} size="lg" onSubmit=${g}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${c}>Speichern<//>`}>
    <${rf} onApply=${b} />
    <div class="form-grid">
      <${xe} class="span-6" label="Art">
        <div class="inline-controls">
          <${Ct} label="Art des Kontakts" value=${f} onChange=${y}
            options=${Bl.map(h=>({...h,label:h.id==="contact"&&m?"Kontakt (nicht möglich – hat Rechnungen)":h.label}))} />
          <span class="field-hint">${f==="customer"?"Kunden erhalten Rechnungen. Nummer K-…":"Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden."}</span>
        </div>
      <//>
      <${q} class="span-4" label="Unternehmen" value=${s.company} onInput=${d("company")} />
      <${q} class="span-2" label="Nummer" value=${s.number} onInput=${d("number")}
        placeholder=${En(f,v.customers.filter(h=>h.id!==s.id))}
        hint=${u&&u.number&&u.number!==s.number&&!s.number?`Bisher ${u.number}. Leer = neue Nummer`:"Leer lassen für automatische Nummer"} />
      <${q} class="span-3" label="Vorname" value=${s.firstName} onInput=${d("firstName")} />
      <${q} class="span-3" label="Nachname" value=${s.lastName} onInput=${d("lastName")} />
      <${q} class="span-6" label="Ansprechpartner (falls abweichend)" value=${s.contact} onInput=${d("contact")} />

      <${q} class="span-4" label="Straße" value=${s.street} onInput=${d("street")} />
      <${q} class="span-2" label="Hausnummer" value=${s.houseNo} onInput=${d("houseNo")} />
      <${q} class="span-2" label="PLZ" value=${s.zip} onInput=${d("zip")} />
      <${q} class="span-4" label="Ort" value=${s.city} onInput=${d("city")} />
      <${q} class="span-3" label="Bundesland / Region" value=${s.region} onInput=${d("region")} />
      <${q} class="span-3" label="Land" value=${s.country} onInput=${d("country")} />

      <${q} class="span-3" label="E-Mail" type="email" value=${s.email} onInput=${d("email")} />
      <${q} class="span-3" label="Telefon" value=${s.phone} onInput=${d("phone")} />
      <${q} class="span-6" label="Website" value=${s.website} onInput=${d("website")} />

      <${q} class="span-3" label="Steuer-ID" value=${s.taxId} onInput=${d("taxId")} />
      <${q} class="span-3" label="USt-IdNr. / VAT ID" value=${s.vatId} onInput=${d("vatId")} />

      <${se} class="span-2" label="Belegsprache" value=${s.language} onChange=${d("language")}
        placeholder="Wie Unternehmen" options=${Pt} />
      <${se} class="span-2" label="Währung" value=${s.currency} onChange=${d("currency")}
        placeholder="Wie Unternehmen" options=${Be} />
      <${_e} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${d("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${q} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${ie} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${d("notes")} rows=${3} />
      <div class="span-6"><${He} label="Aktiv" checked=${s.active!==!1} onChange=${d("active")} /></div>
    </div>
  <//>`}function cd(e){let t=pn(),n=F(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of pt(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of Un(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of v.payments){let r=w("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=St(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=Ft(i.amountCents,r.currency,r.fx)||0}return a}function ud(){ge();let[e,t]=D(""),[n,a]=D("active"),[s,i]=D("all"),[r,o]=D(""),[c,p]=D(null),d=wt(),u=Se(()=>cd(d),[v.version,d]),m=!!c&&!w("customers",c.id),f=Se(()=>co(pn(),{companyId:d}),[v.version,d]),$=Se(()=>[...new Set(v.customers.flatMap(g=>g.tags||[]))].sort((g,h)=>g.localeCompare(h,"de")),[v.version]),y=v.customers.filter(g=>n==="active"&&g.active===!1||n==="inactive"&&g.active!==!1||s==="customer"&&!Ue(g)||s==="contact"&&Ue(g)||r&&!(g.tags||[]).includes(r)?!1:Te(e,g.number,g.company,g.firstName,g.lastName,g.contact,g.city,g.country,g.email,(g.tags||[]).join(" "),(f.get(g.id)||[]).map(h=>h.name).join(" "))),b=[{key:"number",label:"Nr.",sort:g=>g.number,width:"90px",render:g=>l`<span class="mono-num">${g.number}</span>`},{key:"name",label:"Name",sort:g=>Z(g),render:g=>l`<div class="cell-main">${Z(g)}</div>
        ${ct(g)&&ct(g)!==Z(g)&&l`<div class="cell-sub">${ct(g)}</div>`}`},{key:"kind",label:"Art",sort:g=>Ue(g)?0:1,render:g=>l`<${Pe} tone=${Ue(g)?"info":"neutral"} icon=${Ue(g)?"good":"customers"}>${Ue(g)?"Kunde":"Kontakt"}<//>`},{key:"city",label:"Ort",sort:g=>g.city,render:g=>[g.city,g.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:g=>{let h=f.get(g.id)||[];return h.length?l`<div class="svc-tags">${h.slice(0,3).map(I=>l`<span class="tag" title=${I.running?"Läuft (wiederkehrende Vorlage)":""}>${I.running?"↻ ":""}${I.name}</span>`)}
          ${h.length>3&&l`<span class="tag muted-text">+${h.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:g=>(g.tags||[]).map(h=>l`<span class="tag">${h}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:g=>P(u.get(g.id)),render:g=>{let h=u.get(g.id);return h&&P(h)?ae(P(h)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:g=>P(u.get(g.id),"open"),render:g=>{let h=u.get(g.id);return!h||!P(h,"open")?l`<span class="muted-text">–</span>`:l`<span class=${P(h,"overdue")?"tone-bad":""}>${ae(P(h,"open"))}</span>`}},{key:"status",label:"",render:g=>g.active===!1?l`<${Pe} tone="mute">Inaktiv<//>`:""}];return l`
    <${ke} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${C} variant="primary" icon="plus" onClick=${()=>p(Qt({kind:"contact"}))}>Neuer Kontakt<//>
    <//>
    ${v.customers.length>0&&l`<div class="filters">
      <${yt} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${bt} label="Art" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:v.customers.length},{id:"customer",label:"Kunden",count:v.customers.filter(Ue).length},{id:"contact",label:"Kontakte",count:v.customers.filter(g=>!Ue(g)).length}]} />
      <select class="input select filter-select" value=${n} aria-label="Status" onChange=${g=>a(g.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${$.length>0&&l`<select class="input select filter-select" value=${r} aria-label="Nach Tag filtern" onChange=${g=>o(g.target.value)}>
        <option value="">Alle Tags</option>
        ${$.map(g=>l`<option value=${g}>${g}</option>`)}
      </select>`}
    </div>`}
    <${tt} columns=${b} rows=${y} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${g=>Y(`/customers/${g.id}`)}
      empty=${v.customers.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`:l`<${fe} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${C} variant="primary" icon="plus" onClick=${()=>p(Qt({kind:"contact"}))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${c&&l`<${Ka} customer=${c} onClose=${()=>p(null)}
      onSaved=${g=>{m&&Y(`/customers/${g.id}`)}} />`}
  `}function dd({id:e}){ge();let t=w("customers",e),[n,a]=D(!1),[s,i]=D(null),[r,o]=D(null),[c,p]=D(null),[d,u]=D(null),[m,f]=D(null),[$,y]=D(!1);if(!t)return l`<${fe} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${C} onClick=${()=>Y("/customers")}>Zu den Kontakten<//>
    <//>`;let b=F(),g=cd(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},h=co(pn(),{customerId:e}).get(e)||[],I=v.notes.filter(N=>N.customerId===e),S=zs(v.appointments.filter(N=>N.customerId===e)),x=S.filter(N=>N.status==="planned"&&N.date>=b),B=v.todos.filter(N=>N.customerId===e),V=B.filter(N=>!N.done).sort(Ti),E=B.filter(N=>N.done).sort((N,te)=>(N.doneAt||"")<(te.doneAt||"")?1:-1),A=v.invoices.filter(N=>N.customerId===e).sort((N,te)=>N.issueDate<te.issueDate?1:-1),k=v.quotes.filter(N=>N.customerId===e).sort((N,te)=>N.issueDate<te.issueDate?1:-1),U=[...new Set([...A,...k].map(N=>N.companyId))];async function z(){let N=I.length||S.length?` Mitgelöscht werden ${S.length} ${S.length===1?"Termin":"Termine"} und ${I.length} ${I.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await ue({title:`${Ue(t)?"Kunde":"Kontakt"} löschen?`,text:`${Z(t)} wird endgültig gelöscht.${N}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await wc(e),!0))&&(M("Gelöscht","good"),Y("/customers"))}async function H(N){let te=N==="customer";if(!await ue({title:te?`${Z(t)} zum Kunden machen?`:`${Z(t)} als Kontakt führen?`,text:te?`Der Kontakt wird Kunde und bekommt eine Kundennummer (${En("customer")}). Das passiert sonst automatisch mit der ersten Rechnung.`:`Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${En("contact")}).`,confirmLabel:te?"Zum Kunden machen":"Als Kontakt führen"}))return;let G=await _(()=>na({...t,kind:N}));G&&M(`${te?"Kunde":"Kontakt"} ${G.number}`,"good")}let T=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),R=[{key:"number",label:"Nummer",render:N=>l`<a href=${`#/invoices/${N.id}`} class="cell-main">${N.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:N=>l`<${Ke} id=${N.companyId} />`},{key:"date",label:"Datum",render:N=>O(N.issueDate)},{key:"due",label:"Fällig",render:N=>O(N.dueDate)},{key:"total",label:"Betrag",align:"right",render:N=>l`<${Zt} doc=${N} />`},{key:"status",label:"Status",render:N=>l`<${Tn} inv=${N} />`}],Q=[{key:"number",label:"Nummer",render:N=>l`<a href=${`#/quotes/${N.id}${N.status==="draft"?"/edit":""}`} class="cell-main">${Je(N)}</a>${N.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}`},{key:"company",label:"Unternehmen",render:N=>l`<${Ke} id=${N.companyId} />`},{key:"date",label:"Datum",render:N=>O(N.issueDate)},{key:"valid",label:"Gültig bis",render:N=>O(N.validUntil)},{key:"total",label:"Betrag",align:"right",render:N=>l`<${Zt} doc=${N} />`},{key:"status",label:"Status",render:N=>l`<${ys} quote=${N} />`}];return l`
    <${ke} title=${Z(t)} back=${{href:"#/customers",label:"Kontakte"}}
      sub=${l`<span class="badges"><${Pe} tone=${Ue(t)?"info":"neutral"} icon=${Ue(t)?"good":"customers"}>${Ue(t)?"Kunde":"Kontakt"}<//>${t.active===!1?l`<${Pe} tone="mute">Inaktiv<//>`:""}</span>
        <span class="head-meta">${Ue(t)?"Kundennummer":"Kontaktnummer"} ${t.number}${(t.formerNumbers||[]).length?` (vorher ${t.formerNumbers.join(", ")})`:""}</span>`}>
      <${C} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${C} variant="primary" icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${It} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>Y(`/quotes/new?customer=${e}`)},{label:"Angebot hochladen (PDF)",icon:"upload",onClick:()=>f(oa(e))},{label:"Vertrag anlegen",icon:"file",onClick:()=>u(Yi(e))},!Ue(t)&&{label:"Zum Kunden machen",icon:"good",onClick:()=>H("customer")},Ue(t)&&!A.length&&{label:"Als Kontakt führen",icon:"customers",onClick:()=>H("contact")},{label:"Löschen",icon:"trash",danger:!0,disabled:jr(e),onClick:z}]} />
    <//>

    <div class="stat-row">
      <${Ve} label="Umsatz gesamt (netto)" value=${ae(P(g))} sub=${`≈ ${Ze(Ae(g))}, ${g.count} Rechnungen`} />
      <${Ve} label="Offene Forderungen" value=${ae(P(g,"open"))} sub=${`≈ ${Ze(Ae(g,"open"))}`} />
      <${Ve} label="Davon überfällig" value=${ae(P(g,"overdue"))} tone=${P(g,"overdue")?"bad":""} sub=${`≈ ${Ze(Ae(g,"overdue"))}`} />
      <${Ve} label="Bezahlt" value=${ae(P(g,"paid"))} sub=${`≈ ${Ze(Ae(g,"paid"))}`} />
    </div>

    <${sd} customerId=${e} on=${{appointment:()=>o(od(t)),uploadQuote:()=>f(oa(e)),contract:u,openContract:u}} />

    <div class="split">
      <div class="split-main">
        <${X} title=${`To-dos${V.length?` (${V.length})`:""}`} action=${E.length>0&&l`<button type="button" class="link-btn small"
            onClick=${()=>y(!$)}>${$?"Erledigte ausblenden":`${E.length} erledigte zeigen`}</button>`}>
          <${ra} items=${V} showCustomer=${!1} onEdit=${p} />
          ${$&&l`<${ra} items=${E} showCustomer=${!1} onEdit=${p} />`}
          <${Ai} customerId=${e} />
        <//>
        <${of} rows=${h} />
        <${X} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${C} small icon="note" onClick=${()=>i(ti({customerId:e}))}>Eintrag<//>
            <${C} small icon="calendar" onClick=${()=>o(od(t))}>Termin planen<//>
          </div>`}>
          ${x.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${tr} items=${x} onOpen=${o} compact />`}
          <${cf} notes=${I} appts=${S.filter(N=>!(N.status==="planned"&&N.date>=b))}
            onNote=${i} onAppt=${o} hasUpcoming=${x.length>0} />
        <//>
        <${X} title="Rechnungen" flush>
          <${tt} columns=${R} rows=${A} onRowClick=${N=>Y(`/invoices/${N.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${X} title="Angebote" flush action=${l`<div class="panel-head-actions">
            <${C} small icon="upload" onClick=${()=>f(oa(e))}>PDF hochladen<//>
            <${C} small icon="quote" onClick=${()=>Y(`/quotes/new?customer=${e}`)}>Schreiben<//>
          </div>`}>
          <${tt} columns=${Q} rows=${k} onRowClick=${N=>Y(`/quotes/${N.id}${N.status==="draft"?"/edit":""}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kontakt.</p>`} />
        <//>
        <${X} title="Verträge" flush action=${l`<div class="panel-head-actions">
            <${C} small icon="file" onClick=${()=>u(Yi(e))}>Vertrag anlegen<//>
          </div>`}>
          <${id} customerId=${e} onOpen=${u} />
        <//>
      </div>
      <aside class="split-side">
        <${X} title="Kontakt">
          <${Cn} rows=${[["Ansprechpartner",ct(t)],["Adresse",T.length?l`${T.map(N=>l`<div>${N}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(Pt.find(N=>N.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(N=>l`<span class="tag">${N}</span>`):""]]} />
        <//>
        <${X} title="Abgerechnet über">
          ${U.length?l`<ul class="plain-list">${U.map(N=>l`<li><${Ke} id=${N} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${X} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${Ka} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${uf} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${Xi} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${Ri} key=${c.id} todo=${c} onClose=${()=>p(null)} />`}
    ${d&&l`<${_s} key=${d.id} contract=${d} onClose=${()=>u(null)} />`}
    ${m&&l`<${Ms} key=${m.id} quote=${m} onClose=${()=>f(null)} />`}
  `}function od(e){let t=[...v.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=wt()&&w("companies",wt())||t&&w("companies",t.companyId)||re()[0];return ba(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function of({rows:e}){let t=n=>(Kn.find(a=>a.id===n)||{}).label||"";return l`<${X} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${oe()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${W} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Ke} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${Wn(n.qty)}${n.unit?` ${ui(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${P(n)?l`${ae(P(n))}<div class="cell-sub">≈ ${Ze(Ae(n))}</div>`:"–"}</td>
            <td>${n.last?O(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var lf={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},ld=e=>($a.find(t=>t.id===e)||$a[0]).label;function cf({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await ue({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await xc(o.id),!0))&&M("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let u=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${W} name=${lf[u.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${u.title||ld(u.kind)}</span>
              <span class="tl-meta">${ld(u.kind)} · ${O(u.date)}</span>${u.companyId&&l`<${Ke} id=${u.companyId} />`}</div>
            ${u.text&&l`<div class="tl-text">${u.text}</div>`}
          </div>
          <div class="tl-actions">
            <${C} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(u)} />
            <${C} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(u)} />
          </div>
        </li>`}let c=o.a,p=ha[c.status]||ha.planned,d=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${W} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${O(c.date)}, ${c.start} Uhr</span>
            <${Pe} tone=${d?"warn":p.tone}>${d?"Nicht dokumentiert":p.label}<//>
            <${Ke} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
          ${c.nextSteps&&l`<div class="tl-text"><span class="strong">Nächste Schritte:</span> ${c.nextSteps}</div>`}
          ${(()=>{let u=v.todos.filter(m=>m.appointmentId===c.id);return u.length>0&&l`<div class="tl-todos">${u.map(m=>l`<span class=${`tag${m.done?" is-done":""}`}>${m.done?"✓":"○"} ${m.title}</span>`)}</div>`})()}
        </div>
        <div class="tl-actions">
          ${d&&l`<${C} small onClick=${()=>er(c)}>Dokumentieren<//>`}
          <${C} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function uf({note:e,onClose:t}){let n=!w("notes",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),o=p=>d=>s(u=>({...u,[p]:d}));async function c(){r(!0);let p=await _(()=>hi(a));r(!1),p&&(M(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${Le} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${se} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${$a} />
      <${ze} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${se} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${re().map(p=>({id:p.id,label:p.name}))} />
      <${q} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${ie} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var df=["Mo","Di","Mi","Do","Fr","Sa","So"],md=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],zs=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),ar=e=>(w("companies",e)||{}).brandColor||"var(--ink-2)";function fn(e){let t=w("customers",e.customerId);return t?Z(t):e.contactName||""}function fd(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===st())return n;let{start:a}=Rn(e),s=Ui(a,st()),i=ru(a,st());return s===e.start&&i===e.date?`${n} ${ws(e.timeZone,a)}`:`${n} ${ws(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${O(i)}`:""})`}function mf(e){let t=[...new Set([st(),...ei,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${ws(a,n)})${a===st()?", dieses Gerät":""}`}))}function Xi({appointment:e,onClose:t}){let n=!w("appointments",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),[o,c]=D(null),[p,d]=D(null),u=re(),m=x=>B=>s(V=>({...V,[x]:B})),f=v.customers.filter(x=>x.active!==!1||x.id===a.customerId).sort((x,B)=>Z(x).localeCompare(Z(B),"de")).map(x=>({id:x.id,label:Z(x),sub:[x.kind==="contact"?"Kontakt":"Kunde",x.number,x.city].filter(Boolean).join(", "),search:`${x.firstName} ${x.lastName} ${x.contact} ${x.email}`}));function $(x){let B=w("companies",x),V=w("companies",a.companyId);s(E=>{let A={...E,companyId:x};if(!B)return A;let k=(z,H)=>!E[z]||V&&String(E[z])===String(V[H]||"");k("meetingProvider","meetingProvider")&&(A.meetingProvider=B.meetingProvider||""),k("meetingUrl","meetingUrl")&&(A.meetingUrl=B.meetingUrl||""),k("meetingDetails","meetingDetails")&&(A.meetingDetails=B.meetingDetails||""),B.meetingTimeZone&&(!E.timeZone||V&&E.timeZone===(V.meetingTimeZone||st()))&&(A.timeZone=B.meetingTimeZone);let U=w("customers",E.customerId);return U&&U.language||(A.language=B.language||"de"),A})}function y(x){let B=w("customers",x),V=w("customers",a.customerId);s(E=>({...E,customerId:x||"",attendees:!E.attendees||V&&E.attendees===V.email?B&&B.email||"":E.attendees,language:B&&B.language?B.language:E.language}))}function b(x){s(B=>{let V=U=>{let[z,H]=String(U||"0:0").split(":").map(Number);return z*60+H},E=Math.max(V(B.end)-V(B.start),15),A=Math.min(V(x)+E,1439),k=/^\d\d:\d\d$/.test(x)?`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`:B.end;return{...B,start:x,end:k}})}async function g(){r(!0);let x=await _(()=>$i(a));r(!1),x&&(M(n?"Termin angelegt":"Termin gespeichert","good"),n?d(x):t(x))}async function h(){if(!await ue({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${O(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Cc(a.id),!0))&&(M("Termin gelöscht","good"),t())}if(p)return l`<${No} appointment=${p} justCreated onClose=${()=>t(p)} />`;let I=w("customers",a.customerId),S=w("appointments",a.id);return l`<${Le} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${g}
    footer=${l`
      ${!n&&l`<${It} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>d(S||a)},S&&{label:S.status==="done"?"Dokumentation bearbeiten":"Termin dokumentieren",icon:"edit",onClick:()=>{t(),er(S)}},S&&S.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>gf(S,t)},S&&S.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await _(()=>yi(S.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:h}]} />`}
      <span class="spacer"></span>
      <${C} onClick=${()=>t()}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${S&&S.status!=="planned"&&l`<${he} tone=${S.status==="done"?"good":"warn"}>
      ${S.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${S.outcome?l`<div class="pre notice-sub">${S.outcome}</div>`:""}
      ${S.nextSteps?l`<div class="pre notice-sub">Nächste Schritte: ${S.nextSteps}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${se} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${$}
        placeholder="Unternehmen wählen" options=${u.map(x=>({id:x.id,label:x.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${xe} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${$t} id="appt-customer" options=${f} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${y} onCreate=${x=>c({company:x,kind:"contact"})} createLabel="als Kontakt anlegen" />
      <//>
      <${q} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${m("contactName")}
        placeholder=${I?ct(I)||Z(I):"Name"} hint="Für die Anrede in der Einladung" />
      <${q} class="span-6" label="Titel" value=${a.title} onInput=${m("title")}
        placeholder=${I?`Termin mit ${Z(I)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${ze} class="span-2" label="Datum" value=${a.date} onInput=${m("date")} />
      <${q} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${b} />
      <${q} class="span-1" label="Ende" type="time" value=${a.end} onInput=${m("end")} />
      <${se} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${m("timeZone")} options=${mf(a.timeZone)}
        hint=${a.timeZone!==st()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&Ui(Rn(a).start,st())!==a.start?`Bei dir: ${Ui(Rn(a).start,st())} Uhr`:""} />
      <${xe} class="span-4" label="Art">
        <${Ct} label="Art des Termins" value=${a.kind} onChange=${m("kind")} options=${es} />
      <//>
      <${xe} class="span-2" label="Sprache der Einladung">
        <${Ct} label="Sprache der Einladung" value=${a.language||"de"} onChange=${m("language")} options=${Pt} />
      <//>
      ${a.kind==="video"&&l`
        <${se} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${m("meetingProvider")}
          placeholder="Bitte wählen" options=${ga} />
        <${q} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${m("meetingUrl")} placeholder="https://…"
          hint=${!a.meetingUrl&&a.companyId?"Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.":""} />
        <${ie} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${m("meetingDetails")} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind==="phone"&&l`<${q} class="span-6" label="Telefon" value=${a.location} onInput=${m("location")} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind==="onsite"&&l`<${q} class="span-6" label="Ort" value=${a.location} onInput=${m("location")} placeholder="Adresse oder Treffpunkt" />`}
      <${q} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${m("attendees")}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${ie} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${m("agenda")} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${o&&l`<${Ka} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${x=>y(x.id)} />`}
  <//>`}var gd=null,Io=new Set,hd=e=>{gd=e;for(let t of Io)t(e)};function er(e,t){hd({appt:e,done:t})}function $d(){let[e,t]=D(gd);return ce(()=>(Io.add(t),()=>Io.delete(t)),[]),e?l`<${pf} key=${e.appt.id} appointment=${e.appt}
    onClose=${n=>{hd(null),n&&e.done&&e.done(n)}} />`:null}function pf({appointment:e,onClose:t}){let n=w("appointments",e.id)||e,[a,s]=D(n.outcome||""),[i,r]=D(n.nextSteps||""),o=Ce(F(),7),[c,p]=D([{key:1,title:"",due:o}]),[d,u]=D(!1),m=v.todos.filter(b=>b.appointmentId===n.id),f=(b,g)=>p(h=>h.map(I=>I.key===b?{...I,...g}:I)),$=()=>p(b=>[...b,{key:Math.max(0,...b.map(g=>g.key))+1,title:"",due:o}]);async function y(){u(!0);let b=await _(()=>bi(n.id,{outcome:a,nextSteps:i,todos:c}));u(!1),b&&(M(b.todos.length?`Termin dokumentiert, ${b.todos.length} ${b.todos.length===1?"To-do":"To-dos"} angelegt`:"Termin dokumentiert","good"),t(b.appointment))}return l`<${Le} title="Termin dokumentieren" onClose=${()=>t()} size="lg" onSubmit=${y}
    footer=${l`<${C} onClick=${()=>t()}>Abbrechen<//><${C} variant="primary" type="submit" busy=${d}>Speichern<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${ar(n.companyId)}`}></span>
      <div><div class="strong">${n.title}</div>
        <div class="muted-text">${xs(n.date)}, ${n.start}–${n.end}${fn(n)?` · ${fn(n)}`:""}</div></div>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Ergebnis / kurzes Statement" value=${a} onInput=${s} rows=${3}
        placeholder="Was wurde besprochen, wie ist es gelaufen?" />
      <${ie} class="span-6" label="Nächste Schritte" value=${i} onInput=${r} rows=${2}
        placeholder="z. B. Angebot bis Freitag, Folgetermin in zwei Wochen" />
    </div>
    <h3 class="sub-head">To-dos aus diesem Termin</h3>
    ${m.length>0&&l`<${ra} items=${m} showCustomer=${!1} />`}
    <div class="doc-todos">
      ${c.map((b,g)=>l`<div class="doc-todo" key=${b.key}>
        <input class="input" placeholder="To-do, z. B. Angebot schicken" aria-label=${`To-do ${g+1}`} value=${b.title}
          onInput=${h=>f(b.key,{title:h.target.value})}
          onKeyDown=${h=>{h.key==="Enter"&&(h.preventDefault(),b.title.trim()&&$())}} />
        <input class="input" type="date" aria-label=${`To-do ${g+1}: fällig am`} value=${b.due} onInput=${h=>f(b.key,{due:h.target.value})} />
        <${C} variant="ghost" small icon="trash" title="Zeile entfernen" disabled=${c.length===1&&!b.title}
          onClick=${()=>p(h=>h.length===1?[{key:b.key+1,title:"",due:o}]:h.filter(I=>I.key!==b.key))} />
      </div>`)}
      <${C} small icon="plus" onClick=${$}>Weiteres To-do<//>
    </div>
    <p class="field-hint">To-dos erscheinen beim Kontakt, im Dashboard und unter „To-dos“. Leere Zeilen werden ignoriert.</p>
  <//>`}var Eo=(e=new Date)=>zs(v.appointments.filter(qe).filter(t=>ou(t,e)));async function ff(e){await _(()=>yi(e.id,"done",""))&&M("Als stattgefunden vermerkt","good")}async function nr(e,t){let n=t==="morning"?(()=>{let s=new Date;return s.setDate(s.getDate()+1),s.setHours(9,0,0,0),s})():new Date(Date.now()+t*36e5);await _(()=>kc(e.id,n.toISOString()))&&M(`Erinnerung verschoben auf ${n.toLocaleString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})} Uhr`,"good")}function bd(){let e=Eo();return e.length?l`<section class="followups" aria-label="Termine nachbereiten">
    <div class="followups-head"><${W} name="calendar" /><strong>${e.length===1?"Ein Termin ist vorbei":`${e.length} Termine sind vorbei`}</strong>
      <span class="muted-text">Möchtest du Ergebnis, nächste Schritte oder To-dos festhalten?</span></div>
    <ul>
      ${e.slice(0,5).map(t=>l`<li key=${t.id}>
        <span class="followup-what" style=${`--chip:${ar(t.companyId)}`}>
          <span class="strong">${t.title}</span>
          <span class="cell-sub">${O(t.date)}, ${t.start}–${t.end}${fn(t)?` · ${fn(t)}`:""}</span>
        </span>
        <span class="followup-actions">
          <${C} small variant="primary" icon="edit" onClick=${()=>er(t)}>Ja, dokumentieren<//>
          <${C} small onClick=${()=>ff(t)}>Nein<//>
          <${It} small label="Später" icon="clock" items=${[{label:"In einer Stunde",onClick:()=>nr(t,1)},{label:"In drei Stunden",onClick:()=>nr(t,3)},{label:"Morgen früh",onClick:()=>nr(t,"morning")},{label:"In drei Tagen",onClick:()=>nr(t,72)}]} />
        </span>
      </li>`)}
    </ul>
    ${e.length>5&&l`<p class="cell-sub">und ${e.length-5} weitere im Kalender</p>`}
  </section>`:null}async function gf(e,t){let n=await ue({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await _(()=>yi(e.id,"cancelled",n));a&&(M("Termin abgesagt","good"),t&&t(a))}async function hf(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function pd(e){return`${jt(`Termin ${e.date} ${e.start.replace(":","-")} ${fn(e)||e.title||""}`.trim())}.ics`}function No({appointment:e,onClose:t,justCreated:n}){let a=w("companies",e.companyId),s=w("customers",e.customerId),i=Se(()=>lu(e,{company:a,customer:s,settings:v.settings}),[e.id,e.updatedAt]),[r,o]=D(e.attendees||s&&s.email||""),[c,p]=D(i.subject),[d,u]=D(i.body),[m,f]=D(""),$=typeof navigator<"u"&&!!navigator.canShare,y=()=>new Blob([cu(e,{summary:c,description:d})],{type:"text/calendar;charset=utf-8"});function b(){et(y(),pd(e))}async function g(){let S=await hf(`${c}

${d}`);M(S?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",S?"good":"bad")}function h(){let S=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`;xa(),window.location.href=S}async function I(){f("share"),await _(async()=>{let S=new File([y()],pd(e),{type:"text/calendar"});if(!navigator.canShare({files:[S]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[S],title:c,text:d})}catch(x){if(!x||x.name!=="AbortError")throw x}}),f("")}return l`<${Le} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${C} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${xs(e.date)}, ${fd(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${Ua(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${he} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${q} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${q} class="span-6" label="Betreff" value=${c} onInput=${p} />
      <${ie} class="span-6" label="Text" value=${d} onInput=${u} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${C} icon="calendar" onClick=${b}>Kalenderdatei herunterladen<//>
      <${C} icon="copy" onClick=${g}>Text kopieren<//>
      <${C} icon="mail" onClick=${h} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${$&&l`<${C} icon="send" busy=${m==="share"} onClick=${I}>Teilen<//>`}
    </div>
  <//>`}function $f(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function bf({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${ar(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${fn(e)?` (${fn(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function yd({params:e}){ge();let t=F(),[n,a]=D("month"),[s,i]=D(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=D(()=>e&&e.open&&w("appointments",e.open)?w("appointments",e.open):null),[c,p]=D(!1),[d,u]=D(""),m=de(),f=zs(v.appointments.filter(qe)).filter(S=>!d||Te(d,S.title,fn(S),S.agenda,S.outcome)),$=new Map;for(let S of f)$.has(S.date)||$.set(S.date,[]),$.get(S.date).push(S);function y(S){let x=m||(re().length===1?re()[0]:re()[0]);o(ba(x,{date:S||t}))}let b=S=>i(x=>{let B=new Date(Date.UTC(x.y,x.m+S,1));return{y:B.getUTCFullYear(),m:B.getUTCMonth()}}),g=$f(s.y,s.m),h=f.filter(S=>S.date>=t),I=f.filter(S=>S.date<t).reverse();return l`
    <${ke} title="Termine" sub=${m?`Termine über ${m.name}`:"Alle Termine aller Unternehmen"}>
      <${Ct} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${C} variant="primary" icon="plus" onClick=${()=>y(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${C} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>b(-1)} />
        <h2 class="cal-title">${md[s.m]} ${s.y}</h2>
        <${C} small icon="chevronRight" title="Nächster Monat" onClick=${()=>b(1)} />
        <${C} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${re().map(S=>l`<span class="cal-legend-item"><i style=${`background:${S.brandColor}`}></i>${S.shortName||S.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${md[s.m]} ${s.y}`}>
        ${df.map(S=>l`<div class="cal-wd" role="columnheader">${S}</div>`)}
        ${g.map(S=>{let x=$.get(S.iso)||[];return l`<div role="gridcell" class=${`cal-day${S.inMonth?"":" is-out"}${S.iso===t?" is-today":""}`}
            onClick=${()=>y(S.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(S.iso.slice(8,10))}</span>
            ${x.slice(0,3).map(B=>l`<${bf} key=${B.id} a=${B} onOpen=${o} />`)}
            ${x.length>3&&l`<button type="button" class="cal-more" onClick=${B=>{B.stopPropagation(),a("list")}}>+${x.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${d} onInput=${S=>u(S.target.value)} />
        <${bt} label="Zeitraum" value=${c?"past":"next"} onChange=${S=>p(S==="past")}
          options=${[{id:"next",label:"Anstehend",count:h.length},{id:"past",label:"Vergangen",count:I.length}]} />
      </div>
      ${(c?I:h).length?l`<${tr} items=${c?I:h} onOpen=${o} showCustomer />`:l`<${fe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${C} variant="primary" icon="plus" onClick=${()=>y(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${Xi} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function tr({items:e,onOpen:t,showCustomer:n,compact:a}){let s=F(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=ha[r.status]||ha.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Ce(s,1)?"Morgen, ":""}${xs(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${ar(r.companyId)}`}>
            <span class="appt-time">${a?l`${O(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${Pe} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&fn(r),r.kind==="video"?Ua(r.meetingProvider)||"Videocall":(es.find(p=>p.id===r.kind)||{}).label,r.timeZone!==st()?fd(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Ke} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function vd(){let[e,t]=D(null),n=F(),a=Ce(n,14),s=new Date,i=zs(v.appointments.filter(qe).filter(r=>r.status==="planned"&&r.date>=n&&r.date<=a&&Rn(r).end>s)).slice(0,6);return i.length?l`<${X} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${tr} items=${i} onOpen=${t} showCustomer />
    ${e&&l`<${Xi} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:l`<${X} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
      <p class="muted-text">Keine Termine in den nächsten 14 Tagen.</p>
    <//>`}var wd=(e,t)=>(e.find(n=>n.id===t)||{}).label||"",To=e=>(w("companies",e)||{}).name||"";function Ps(e,t){if(!e)return"";if(e.startsWith("ref:")){let n=t.actions.find(a=>a.type==="contact"&&a.ref===e.slice(4));return n?`${Z(n)||"neuer Kontakt"} (neu)`:"neuer Kontakt"}return Z(w("customers",e))}var yf=(e,t)=>{let[n,a]=e.split(":").map(Number),s=Math.min(n*60+a+t,1439);return`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`};async function vf(e){let t=[],n={},a=i=>i&&i.startsWith("ref:")?n[i.slice(4)]||"":i||"",s=[...e.actions.filter(i=>i.type==="contact"),...e.actions.filter(i=>i.type!=="contact")];for(let i of s)if(!i.off)try{if(i.type==="contact"){let r=await na(Qt({kind:i.kind,company:i.company,firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone,city:i.city,notes:i.notes}));n[i.ref]=r.id,t.push({ok:!0,text:`${i.kind==="customer"?"Kunde":"Kontakt"} ${Z(r)} (${r.number}) angelegt`,href:`/customers/${r.id}`})}else if(i.type==="todos"){let r=i.items.filter(o=>!o.off);for(let o of r)await ds(On({title:o.title,due:o.due,customerId:a(o.customerId),companyId:o.companyId}));r.length&&t.push({ok:!0,text:`${r.length} ${r.length===1?"To-do":"To-dos"} angelegt`,href:"/todos"})}else if(i.type==="appointment"){let r=w("companies",i.companyId),o=ba(r,{start:i.start||"10:00"}),c=w("customers",a(i.customerId)),p=await $i({...o,customerId:c?c.id:"",contactName:i.contactName,title:i.title,date:i.date||F(),end:i.duration?yf(i.start,i.duration):o.end,kind:i.kind,location:i.location,agenda:i.agenda,attendees:c&&c.email?c.email:"",language:c&&c.language?c.language:o.language});t.push({ok:!0,text:`Termin „${p.title}“ am ${O(p.date)} um ${p.start} Uhr angelegt`,appointment:p})}else if(i.type==="note"){let r=await hi(ti({customerId:a(i.customerId),kind:i.kind,title:i.title,text:i.text,date:i.date||F()}));t.push({ok:!0,text:`Notiz bei ${Z(w("customers",r.customerId))} eingetragen`,href:`/customers/${r.customerId}`})}else if(i.type==="document"){let r=await bi(i.appointmentId,{outcome:i.outcome,nextSteps:i.nextSteps,todos:i.todos.filter(o=>!o.off)});t.push({ok:!0,text:`Termin „${r.appointment.title}“ dokumentiert${r.todos.length?`, ${r.todos.length} To-dos`:""}`,href:r.appointment.customerId?`/customers/${r.appointment.customerId}`:"/appointments"})}else if(i.type==="invoice"){let r=w("companies",i.companyId),o=w("customers",a(i.customerId)),c=gt(r);c.customerId=o.id,o.currency&&Be.includes(o.currency)&&(c.currency=o.currency),o.language&&(c.language=o.language),o.paymentTermDays!=null&&o.paymentTermDays!==""&&(c.paymentTermDays=Number(o.paymentTermDays)),c.items=i.items.map(d=>{let u=d.serviceId?w("services",d.serviceId):null;return{...u?dt(u,r):Yt({name:d.name,taxRate:Number(r.defaultTaxRate)||0}),qty:d.qty,...d.priceCents!=null?{priceCents:d.priceCents}:{},...d.name&&!u?{name:d.name}:{}}});let p=await Na(c);t.push({ok:!0,text:`Rechnungsentwurf für ${Z(o)} angelegt (${j(p.totals.totalCents,p.currency)})`,href:`/invoices/${p.id}/edit`})}}catch(r){t.push({ok:!1,text:r.message||String(r)})}return t}function wf({a:e,plan:t,onToggle:n,onToggleItem:a}){let s=(o,c)=>l`<div class="voice-action-head">
    <input type="checkbox" checked=${!e.off} onChange=${n} aria-label=${`${c} ausführen`} />
    <${W} name=${o} size=${16} /><span>${c}</span></div>`,i=null,r="";if(e.type==="todos")return r=`${e.items.length} ${e.items.length===1?"To-do":"To-dos"}`,i=l`<ul>${e.items.map((o,c)=>l`<li key=${c}><label>
      <input type="checkbox" checked=${!o.off} onChange=${()=>a(c)} />
      <span><strong>${o.title}</strong>${o.due?` · bis ${O(o.due)}`:""}${o.customerId?` · ${Ps(o.customerId,t)}`:""}${o.companyId?` · ${To(o.companyId)}`:""}</span></label></li>`)}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("check",r)}${i}${Oa(e)}</div>`;if(e.type==="appointment")return r=`Termin: ${e.title||(e.customerId?`Termin mit ${Ps(e.customerId,t)}`:"ohne Titel")}`,i=l`<ul>
      <li>${e.date?O(e.date):"–"}, ${e.start||"–"} Uhr${e.duration?`, ${e.duration} Min.`:""} · ${wd(es,e.kind)}</li>
      <li>Über ${To(e.companyId)||"–"}${e.customerId?` · mit ${Ps(e.customerId,t)}`:""}${e.contactName?` (${e.contactName})`:""}</li>
      ${e.location&&l`<li>${e.location}</li>`}
      ${e.agenda&&l`<li>Themen: ${e.agenda}</li>`}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("calendar",r)}${i}${Oa(e)}</div>`;if(e.type==="note")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("note",`${wd($a,e.kind)} bei ${Ps(e.customerId,t)}`)}
      <ul><li>${e.title&&l`<strong>${e.title}: </strong>`}${e.text}</li></ul>${Oa(e)}</div>`;if(e.type==="contact")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("customers",`Neuer ${e.kind==="customer"?"Kunde":"Kontakt"}: ${Z(e)||"–"}`)}
      <ul><li>${[e.firstName&&`${e.firstName} ${e.lastName}`,e.email,e.phone,e.city].filter(Boolean).join(" · ")||"keine weiteren Angaben"}</li></ul>${Oa(e)}</div>`;if(e.type==="document"){let o=w("appointments",e.appointmentId);return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("edit",`Termin dokumentieren: ${o?`${o.title}, ${O(o.date)}`:""}`)}
      <ul>${e.outcome&&l`<li>Ergebnis: ${e.outcome}</li>`}${e.nextSteps&&l`<li>Nächste Schritte: ${e.nextSteps}</li>`}
        ${e.todos.map((c,p)=>l`<li key=${p}><label><input type="checkbox" checked=${!c.off} onChange=${()=>a(p)} />
          <span>To-do: <strong>${c.title}</strong>${c.due?` · bis ${O(c.due)}`:""}</span></label></li>`)}</ul>${Oa(e)}</div>`}return e.type==="invoice"?l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("invoice",`Rechnungsentwurf für ${Ps(e.customerId,t)} über ${To(e.companyId)}`)}
      <ul>${e.items.map((o,c)=>{let p=o.serviceId?w("services",o.serviceId):null;return l`<li key=${c}>${o.qty} × ${p?p.name:o.name}${o.priceCents!=null?` à ${j(o.priceCents,(w("companies",e.companyId)||{}).currency||"USD")}`:p?` à ${j(p.priceCents,p.currency||"USD")}`:""}</li>`})}</ul>
      <p class="field-hint">Nur Entwurf – du prüfst und erstellst ihn danach im Editor.</p>${Oa(e)}</div>`:null}var Oa=e=>e.warnings&&e.warnings.length?l`<p class="field-hint tone-warn">${e.warnings.join(" ")}</p>`:null;function xf({onClose:e}){let[t,n]=D(""),[a,s]=D(""),[i,r]=D(!1),[o,c]=D(""),[p,d]=D(null),[u,m]=D(null),[f,$]=D(null),y=ve(null),b=ve("");b.current=t;let g=!!v.settings.aiApiKey,h=rs();function I(){if(i){y.current&&y.current();return}try{y.current=di({onFinal:k=>n(U=>mi(U,k)),onInterim:s,onEnd:()=>{r(!1),s(""),y.current=null},onError:k=>M(k,"bad",8e3)}),r(!0),d(null),m(null)}catch(k){M(k.message||String(k),"bad")}}ce(()=>(h&&g&&I(),()=>{y.current&&y.current()}),[]),ce(()=>{let k=U=>{U.key==="Escape"&&!document.querySelector(".modal-backdrop")&&e()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[e]);async function S(){y.current&&y.current();let k=b.current.trim();if(!k){M("Bitte zuerst etwas sagen oder eintippen.","info");return}c("ai");let U=Jc({customers:v.customers,companies:v.companies,services:v.services,appointments:v.appointments,todos:v.todos},{today:F(),timeZone:st()}),z=await _(()=>Yc({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,text:k,context:U.text,map:U.map}));c(""),z&&(d(z),m(null))}async function x(){c("run");let k=await vf(p);c(""),m(k),d(null);let U=k.filter(z=>z.ok).length;U&&M(`${U} ${U===1?"Eintrag":"Einträge"} angelegt`,"good")}let B=k=>d(U=>({...U,actions:U.actions.map((z,H)=>H===k?{...z,off:!z.off}:z)})),V=(k,U)=>d(z=>({...z,actions:z.actions.map((H,T)=>{if(T!==k)return H;let R=H.type==="todos"?"items":"todos";return{...H,[R]:H[R].map((Q,N)=>N===U?{...Q,off:!Q.off}:Q)}})})),E=p?p.actions.filter(k=>!k.off).length:0,A=l`
      ${!u&&!p&&l`<${C} variant="primary" icon="sparkle" busy=${o==="ai"} disabled=${!g||!t.trim()} onClick=${S}>Verstehen<//>`}
      ${p&&l`<${C} onClick=${()=>d(null)}>Ändern<//>`}
      ${p&&p.actions.length>0&&l`<${C} variant="primary" icon="check" busy=${o==="run"} disabled=${!E} onClick=${x}>Ausführen<//>`}
      ${u&&l`<${C} onClick=${e}>Fertig<//>`}
      ${u&&l`<${C} variant="primary" icon="mic" onClick=${()=>{n(""),m(null),I()}}>Nächster Befehl<//>`}`;return l`<section class="voice-panel" role="dialog" aria-label="Sprachbefehl">
    <header class="voice-panel-head">
      <span class=${`voice-panel-dot${i?" is-on":""}`}><${W} name="mic" size=${15} /></span>
      <strong>Sprachbefehl</strong>
      ${i&&l`<span class="voice-panel-live">hört zu</span>`}
      <button type="button" class="voice-panel-close" onClick=${e} title="Schließen" aria-label="Schließen"><${W} name="x" size=${17} /></button>
    </header>
    <div class="voice-panel-body">
      ${!g&&l`<${he} tone="warn">Sprachbefehle laufen über die Anthropic-API. Trage dafür unter Einstellungen den API-Key ein (derselbe wie für die Belegerkennung).<//>`}
      ${!u&&!p&&l`
        <div class="voice-stage">
          ${h?l`<button type="button" class=${`mic-btn${i?" is-on":""}`} onClick=${I} aria-pressed=${i}
                title=${i?"Zuhören beenden":"Mikrofon einschalten"} aria-label=${i?"Zuhören beenden":"Mikrofon einschalten"}><${W} name="mic" size=${22} /></button>`:l`<p class="muted-text">Dieser Browser hat keine Spracherkennung (Chrome oder Safari verwenden). Du kannst den Befehl auch eintippen.</p>`}
          <div class="voice-stage-text">
            ${i?l`<span class="strong">Ich höre zu …</span>`:h&&l`<span class="muted-text">Auf das Mikrofon tippen und sprechen</span>`}
            ${a&&l`<span class="mic-interim">${a}</span>`}
          </div>
        </div>
        <textarea class="input textarea" rows="3" aria-label="Befehl" placeholder="Was soll ich tun?" value=${t} onInput=${k=>n(k.target.value)}></textarea>
        <details class="voice-examples">
          <summary>Beispiele</summary>
          <ul>
            <li>„Trag für Nordlicht Immobilien drei To-dos ein: Angebot schicken bis Freitag, Referenzen raussuchen, Rückruf Montag.“</li>
            <li>„Termin mit Frau Petersen nächsten Dienstag um 10 Uhr über Build Buddy Consulting, eine Stunde, Thema Website-Relaunch.“</li>
            <li>„Den Termin von heute mit Alpenblick dokumentieren: Budget steht, nächste Woche Angebot. To-do: Angebot bis Mittwoch.“</li>
            <li>„Was steht heute an?“</li>
          </ul>
        </details>`}
      ${p&&l`
        <p class="muted-text voice-said">„${t}“</p>
        ${p.answers.map(k=>l`<div class="voice-answer">${k}</div>`)}
        ${p.actions.length>0&&l`<p class="field-hint">Bitte prüfen. Abgewählte Punkte werden nicht angelegt.</p>`}
        <div class="voice-plan">
          ${p.actions.map((k,U)=>l`<${wf} key=${U} a=${k} plan=${p} onToggle=${()=>B(U)} onToggleItem=${z=>V(U,z)} />`)}
        </div>`}
      ${u&&l`<ul class="voice-done">
        ${u.map(k=>l`<li class=${k.ok?"":"tone-bad"}>${k.ok?"✓":"✕"} ${k.text}
          ${k.href&&l` · <a href=${`#${k.href}`}>Öffnen</a>`}
          ${k.appointment&&l` · <button type="button" class="link-btn" onClick=${()=>$(k.appointment)}>Einladung</button>`}</li>`)}
      </ul>`}
    </div>
    <footer class="voice-panel-foot">${A}</footer>
  </section>
  ${f&&l`<${No} appointment=${f} justCreated onClose=${()=>$(null)} />`}`}var Ro=!1,Ao=new Set;function xd(e){Ro=e,Ao.forEach(t=>t(e))}var kf=()=>xd(!Ro);function kd(){let[e,t]=D(Ro);return ce(()=>(Ao.add(t),()=>Ao.delete(t)),[]),e}function Dd(){return kd()?l`<${xf} onClose=${()=>xd(!1)} />`:null}function Sd(){let e=kd();return l`<button type="button" class=${`backup-btn voice-btn${e?" is-open":""}`} onClick=${kf} aria-pressed=${e}
    title="Sprachbefehl: To-dos, Termine, Notizen per Sprache">
    <${W} name="mic" /><span>Sprechen</span>
  </button>`}async function Bo(){v.companies.length||(await us(Xa({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await us(Xa({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await J(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function Cd(){v.settings.seeded||v.companies.length||await Bo()}function Df(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Ls(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=Df();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function Sf(){let e=ve(null),[t,n]=D(0);return $r(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function Cf(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,p=Math.ceil(Math.max(t,0)/o)*o,d=[];for(let u=c;u<=p+o/2;u+=o)d.push(Math.round(u/o)*o);return{lo:c,hi:p,step:o,ticks:d}}function Uo(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function Ks({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=Sf(),[p,d]=D(null),u={top:12,right:8,bottom:26,left:56},m=0,f=0;for(let A of e)if(n==="stacked"){let k=0,U=0;for(let z of t){let H=A.values[z.id]||0;H>=0?k+=H:U+=H}m=Math.max(m,k),f=Math.min(f,U)}else for(let k of t){let U=A.values[k.id]||0;m=Math.max(m,U),f=Math.min(f,U)}let $=Cf(f,m),y=Math.max(c-u.left-u.right,10),b=i-u.top-u.bottom,g=A=>u.top+b-(A-$.lo)/($.hi-$.lo||1)*b,h=y/Math.max(e.length,1),I=g(0),S=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(y/46)))),x=[];e.forEach((A,k)=>{let U=u.left+k*h;if(n==="stacked"){let z=Math.min(24,Math.max(h-10,3)),H=U+(h-z)/2,T=I,R=I,Q=t.filter(me=>(A.values[me.id]||0)!==0),N=[...Q].reverse().find(me=>A.values[me.id]>0),te=[...Q].reverse().find(me=>A.values[me.id]<0);for(let me of Q){let G=A.values[me.id],Re=Math.abs(g(G)-I);if(G>0){let Qe=T-Re,rn=N&&N.id===me.id,qs=rn?0:Math.min(2,Re-1);x.push({d:rn?Uo(H,Qe,z,Re,4,!0):`M${H},${Qe+qs}H${H+z}V${T}H${H}Z`,color:me.color,key:`${A.key}-${me.id}`}),T=Qe}else{let Qe=te&&te.id===me.id,rn=Qe?0:Math.min(2,Re-1);x.push({d:Qe?Uo(H,R,z,Re,4,!1):`M${H},${R}H${H+z}V${R+Re-rn}H${H}Z`,color:me.color,key:`${A.key}-${me.id}`}),R+=Re}}}else{let z=t.length,H=Math.min(18,Math.max((h-10-(z-1)*2)/z,2)),T=z*H+(z-1)*2;t.forEach((R,Q)=>{let N=A.values[R.id]||0;if(!N)return;let te=Math.abs(g(N)-I),me=U+(h-T)/2+Q*(H+2);x.push({d:Uo(me,N>0?I-te:I,H,te,4,N>0),color:R.color,key:`${A.key}-${R.id}`})})}});let B=p!=null?e[p]:null,V=p!=null?u.left+p*h+h/2:0,E=V>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${$.ticks.map(A=>l`<g key=${A}>
        <line x1=${u.left} x2=${c-u.right} y1=${g(A)} y2=${g(A)} class=${A===0?"chart-base":"chart-grid"} />
        <text x=${u.left-8} y=${g(A)+4} text-anchor="end" class="chart-tick">${(s||a)(A)}</text>
      </g>`)}
      ${p!=null&&l`<rect x=${u.left+p*h} y=${u.top} width=${h} height=${b} class="chart-hover" />`}
      ${x.map(A=>l`<path key=${A.key} d=${A.d} fill=${A.color} />`)}
      ${e.map((A,k)=>k%S===0&&l`<text key=${A.key} x=${u.left+k*h+h/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${A.label}</text>`)}
      ${e.map((A,k)=>l`<rect key=${`hit-${A.key}`} x=${u.left+k*h} y=${u.top} width=${h} height=${b+u.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${A.title||A.label}: ${t.map(U=>`${U.label} ${a(A.values[U.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>d(k)} onMouseLeave=${()=>d(null)}
        onFocus=${()=>d(k)} onBlur=${()=>d(null)} />`)}
    </svg>`}
    ${B&&l`<div class=${`chart-tip${E?" is-left":""}`} style=${`left:${V}px;top:${u.top}px`}>
      <div class="chart-tip-title">${B.title||B.label}</div>
      ${t.filter(A=>t.length===1||(B.values[A.id]||0)!==0).map(A=>l`<div class="chart-tip-row" key=${A.id}>
        <span class="chart-key" style=${`background:${A.color}`}></span>
        <strong>${a(B.values[A.id]||0)}</strong><span>${A.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((A,k)=>A+(B.values[k.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function If({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function Os({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=D(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${If} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,p)=>l`<td class=${p?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function gn({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}async function sr(e,t){let n=Bt(e,t),a=await Ma(Ss(n));return et(a,n.fileName),{blob:a,model:n}}function Ef(e,t){let n=e.snapshot&&e.snapshot.company||w("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||w("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?dn(e,Ye(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:O(e.issueDate,s),DUE:O(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:Ca(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:Ca(i,e.currency,s),CONTACT:ct(a)||Z(a),CUSTOMER:Z(a),SENDER:v.settings.userName?`${v.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function Nf(e){let n=kn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,Tt.length)}function Fs(e,t){if(!(t>0))return 0;let n=v.settings.reminderDays||[7,14,21],a=kn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return Tt.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function Id(e){return[...kn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function Fa({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=Ef(e,t),[o,c]=D(()=>n==="reminder"?Nf(e.id):0),p=z=>n==="reminder"?((v.settings.reminderTemplates||{})[s]||{})[z]||{subject:"",body:""}:((v.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[d,u]=D(i),[m,f]=D(()=>Rt(p(o).subject,r)),[$,y]=D(()=>Rt(p(o).body,r)),[b,g]=D(""),[h,I]=D(null),S=typeof navigator<"u"&&!!navigator.canShare;function x(z){let H=Number(z);c(H),f(Rt(p(H).subject,r)),y(Rt(p(H).body,r))}async function B(){if(h)return h;let z=Bt(e,t),T={blob:await Ma(Ss(z)),name:z.fileName};return I(T),T}async function V(){g("pdf"),await _(async()=>{let z=await B();et(z.blob,z.name)}),g("")}function E(){let z=`mailto:${encodeURIComponent(d.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent($)}`;xa(),window.location.href=z}async function A(){g("share"),await _(async()=>{let z=await B(),H=new File([z.blob],z.name,{type:"application/pdf"});if(!navigator.canShare({files:[H]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[H],title:m,text:$})}catch(T){if(T&&T.name==="AbortError")return;throw T}}),g("")}async function k(){g("done");let z=await _(async()=>(n==="reminder"?await Wc(e.id,o,m):t==="quotes"?await ia(e.id,"sent"):await sa(e.id,!0),!0));g(""),z&&(M(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let U=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${Le} title=${U} onClose=${a} size="lg"
    footer=${l`
      <${C} onClick=${a}>Schließen<//>
      <${C} variant="primary" icon="check" busy=${b==="done"} onClick=${k}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${he} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${se} class="span-2" label="Stufe" value=${o} onChange=${x}
        options=${Tt.map(z=>({id:z.id,label:z.label}))} />`}
      <${q} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${d} onInput=${u}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${q} class="span-6" label="Betreff" value=${m} onInput=${f} />
      <${ie} class="span-6" label="Text" value=${$} onInput=${y} rows=${10} />
    </div>
    <div class="send-steps">
      <${C} icon="download" busy=${b==="pdf"} onClick=${V}>PDF herunterladen<//>
      <${C} icon="mail" onClick=${E} disabled=${!d.trim()}>E-Mail-Programm öffnen<//>
      ${S&&l`<${C} icon="send" busy=${b==="share"} onClick=${A}>Mit PDF teilen<//>`}
    </div>
  <//>`}var Tf=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],Af=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],Rf=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],Bf=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],Uf=e=>.86+e*37%7/100,qa=(e,t,n)=>{let a=Uf(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:en(e,a,s)};function ir(){return Ol(Mf)}async function Mf(){if(v.invoices.length||v.customers.length||v.expenses.length||v.services.length)throw new Ie("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=re();if(!e.length)throw new Ie("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=F(),a=[];for(let m of Tf)a.push(await na(Qt(m)));let s=[];for(let m of Af)s.push(await vi(Jt({...m,currency:"USD"})));let i=[];for(let[m,f,$,y,b,g,h]of Rf){let I=t($),S=a[y],x=_t(n.slice(0,8)+"01",-m,f);x>n&&(x=n);let B=S.currency||"USD",V=qa(B,m,x),E=b.map(([z,H])=>{let T=dt(s[z],I),R=B==="EUR"?Math.round(T.priceCents*V.usdToEur/500)*500:T.priceCents;return{...T,qty:H,priceCents:R}}),A={...gt(I),customerId:S.id,issueDate:x,serviceDate:x,paymentTermDays:S.paymentTermDays!=null&&S.paymentTermDays!==""?Number(S.paymentTermDays):14,currency:B,language:S.language||I.language,items:E,discount:{type:"pct",value:h},fx:V},k=await ps(A);i.push({inv:k,pay:g,back:m}),(m>0||g!=="none")&&await sa(k.id,!0);let U=k.totals.totalCents;if(g==="full"){let z=Ce(x,9+f%9);await fs(k.id,{date:z>n?n:z,amountCents:U,method:"Überweisung",note:""})}else if(g==="half"){let z=Ce(x,12);await fs(k.id,{date:z>n?n:z,amountCents:Math.round(U/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(m,f,$)=>{let y=_t(n.slice(0,8)+"01",-$,14),b=m.currency||"USD",g=qa(b,$,y),h=dt(s[f],r);return ps({...gt(r),customerId:m.id,issueDate:y,serviceDate:y,currency:b,language:m.language||"de",paymentTermDays:14,items:[{...h,priceCents:b==="EUR"?Math.round(h.priceCents*g.usdToEur/500)*500:h.priceCents}],fx:g})},c=await o(a[3],2,4);await ki(c.id,"Beispiel: doppelt ausgestellt");let p=await o(a[4],6,3);await Di(p.id,"Beispiel: Leistung wurde nicht erbracht."),await Na({...gt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...dt(s[4],t(1)),qty:6}],fx:qa("USD",0,n)});let d=await gs({...Fn(t(0)),customerId:a[1].id,issueDate:Ce(n,-6),validUntil:Ce(n,24),currency:"EUR",language:"de",fx:qa("EUR",0,n),items:[{...dt(s[0],t(0)),priceCents:42e4},{...dt(s[1],t(0)),qty:6,priceCents:85e3}]});await ia(d.id,"sent");let u=await gs({...Fn(t(1)),customerId:a[5].id,issueDate:Ce(n,-20),validUntil:Ce(n,10),currency:"USD",language:"en",fx:qa("USD",0,n),items:[{...dt(s[5],t(1))}]});await ia(u.id,"accepted"),await hs(qn(t(1),{customerId:a[5].id,title:u.items[0].name,quoteId:u.id,status:"open",currency:"USD",items:fi(u,m=>w("services",m))})),await hs(qn(t(0),{customerId:a[2].id,title:"SEO-Betreuung",refNumber:"V-2025-07",status:"signed",signedDate:_t(n,-11),startDate:Ce(_t(n,-11),1),endDate:Ce(n,25),noticePeriod:"1 Monat zum Laufzeitende",currency:"USD",items:[Jn({serviceId:s[1].id,name:s[1].name,qty:1,unit:"Monat",priceCents:s[1].priceCents,billing:"monthly"}),Jn({name:"Einrichtung SEO-Monitoring",qty:1,unit:"Pauschal",priceCents:45e3,billing:"once"})],notes:"Beispiel: läuft in Kürze aus – Verlängerung ansprechen."}));for(let[m,f,$,y,b,g,h,I,S]of Bf){let x=Ce(n,-m);await Nn(ts({companyId:t(f).id,vendor:$,category:y,description:b,currency:g,invoiceDate:x,paymentDate:Ce(x,2)>n?n:Ce(x,2),netCents:h,taxCents:I,totalCents:h+I,paymentMethod:S,fx:qa(g,Math.floor(m/30),x)}))}return await $s({...wn(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[dt(s[1],t(0)),dt(s[2],t(0))]}),await $s({...wn(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:_t(n,4),items:[{...dt(s[3],t(0)),qty:12,priceCents:3e3}]}),await J(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:i.length}}async function Ed(){let e=new Set(["companies","assets","settings"]);await Vn(Kt,async t=>{for(let n of Kt)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await Gn(),as()}function _f(){let e=re(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:v.customers.length>0,label:"Ersten Kontakt anlegen",text:"Kunden und Kontakte gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:v.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:v.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=D(!1);async function i(){s(!0);let r=await _(async()=>(await ir(),!0));s(!1),r&&M("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
    <h1>Willkommen bei BBC Finance</h1>
    <p class="lead">Vier Schritte, dann steht hier deine Finanzübersicht.</p>
    <ol class="steps">
      ${n.map((r,o)=>l`<li class=${r.done?"is-done":""}>
        <a href=${r.href}>
          <span class="step-mark">${r.done?l`<${W} name="check" size=${16} />`:o+1}</span>
          <span class="step-text"><strong>${r.label}</strong><span>${r.text}</span></span>
          <${W} name="chevronRight" size=${16} />
        </a>
      </li>`)}
    </ol>
    <p class="onboarding-alt">
      Erst einmal ansehen, wie es mit Daten aussieht?${" "}
      <button type="button" class="link-btn" disabled=${a} onClick=${i}>${a?"Beispieldaten werden geladen …":"Beispieldaten laden"}</button>.${" "}
      Schon ein Backup vorhanden?${" "}<a href="#/settings">Backup einspielen</a>.
    </p>
  </section>`}var Mo=e=>[...e].sort((t,n)=>P(n)-P(t));function Nd(){ge();let e=F(),t=de(),n=wt(),a=pn(),s=re(),i=Se(()=>{let E=Tl(12,e),A=kt("year",e);return{kpi:vu(a,n,e),months:E,series:Cs(a,{companyId:n,months:E}),byCustomer:Is(a,{companyId:n,range:A}),byService:Ns(a,{companyId:n,range:A}),byCompany:Es(a,{range:A}),rec:Un(a,{companyId:n},e)}},[v.version,n,e]),r=oe();if(!(v.invoices.length||v.expenses.length||v.customers.length||v.services.length))return l`<${_f} />`;let{kpi:c}=i,p=Gt(e.slice(0,7)),d=i.rec.filter(E=>E.status==="overdue"),u=i.rec.filter(E=>E.status!=="overdue"&&E.inv.dueDate&&E.inv.dueDate<=Ce(e,7)),m=v.recurring.filter(qe).filter(E=>Ta(E,e)),f=v.expenses.filter(E=>E.status==="review"&&(qe(E)||!E.companyId)),$=v.invoices.filter(qe).filter(E=>E.status==="draft"),y=$.filter(E=>E.number),b=$.filter(E=>!E.number),g=v.invoices.filter(qe).filter(E=>E.clarify&&E.status!=="draft"),h=v.quotes.filter(qe).filter(E=>["open","sent"].includes(qt(E,e))&&E.validUntil&&E.validUntil<=Ce(e,7)),I=v.contracts.filter(qe).filter(E=>go(E,e,30)||ho(E,e)),S=!t&&s.length>1,x=S?s.map(E=>({id:E.id,label:E.shortName||E.name,color:Ls(E.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],B=i.series.map(E=>({key:E.key,label:ma(E.key),title:Gt(E.key),values:S?E[`byCompany${oe()}`]:{rev:P(E,"revenue")}})),V={columns:["Monat",...S?x.map(E=>E.label):[],`Umsatz (${oe()})`,`Umsatz (${oe()==="USD"?"EUR":"USD"})`],rows:i.series.map(E=>[Gt(E.key),...S?x.map(A=>ae(E[`byCompany${oe()}`][A.id]||0)):[],ae(P(E,"revenue")),Ze(Ae(E,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${p}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${ae(P(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${Ze(Ae(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${ae(P(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <${bd} />

    <div class="stat-row">
      <${Ve} label="Umsatz Quartal" value=${ae(P(c.quarter))} sub=${`≈ ${Ze(Ae(c.quarter))}`} />
      <${Ve} label="Umsatz Jahr" value=${ae(P(c.year))} sub=${`≈ ${Ze(Ae(c.year))}`} />
      <${Ve} label="Offene Rechnungen" value=${ae(P(c.open))} sub=${`${c.open.count} offen, ≈ ${Ze(Ae(c.open))}`} href="#/invoices?status=open" />
      <${Ve} label="Überfällig" value=${ae(P(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${Ze(Ae(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Ve} label="Bezahlt dieses Jahr" value=${ae(P(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Ve} label="Rechnung im Schnitt" value=${ae(P(c.average))} sub=${`≈ ${Ze(Ae(c.average))}`} />
      <${Ve} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-crm">
      <${eu} />
      <${vd} />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${Os} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${oe()}, nach Rechnungsdatum`} series=${x} table=${V}>
          <${Ks} groups=${B} series=${x} mode="stacked"
            format=${E=>ae(E)} axisFormat=${E=>is(E,oe())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${X} title="Zu erledigen" class="dash-side">
        ${d.length+u.length+m.length+f.length+$.length+h.length+g.length+I.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${d.slice(0,5).map(E=>l`<li key=${E.inv.id}>
              <a href=${`#/invoices/${E.inv.id}`}>
                <span class="todo-icon tone-bad"><${W} name="bad" /></span>
                <span class="todo-text"><strong>${E.inv.number}</strong> ${Ge(E.inv)}
                  <span class="cell-sub">seit ${E.overdueDays} ${E.overdueDays===1?"Tag":"Tagen"} überfällig${Fs(E.inv,E.overdueDays)?`, ${(Tt.find(A=>A.id===Fs(E.inv,E.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${j(E.openCents,E.inv.currency)}</span>
              </a>
            </li>`)}
            ${d.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${d.length-5} weitere überfällige Rechnungen</a></li>`}
            ${u.slice(0,3).map(E=>l`<li key=${E.inv.id}>
              <a href=${`#/invoices/${E.inv.id}`}>
                <span class="todo-icon tone-warn"><${W} name="clock" /></span>
                <span class="todo-text"><strong>${E.inv.number}</strong> ${Ge(E.inv)}
                  <span class="cell-sub">fällig am ${O(E.inv.dueDate)}</span></span>
                <span class="todo-amount">${j(E.openCents,E.inv.currency)}</span>
              </a>
            </li>`)}
            ${g.slice(0,5).map(E=>l`<li key=${`c-${E.id}`}><a href=${`#/invoices/${E.id}`}>
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${E.number}</strong> ${Ge(E)}
                <span class="cell-sub">Klärung nötig: ${E.clarify.note}</span></span></a></li>`)}
            ${g.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${g.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${y.slice(0,5).map(E=>l`<li key=${E.id}><a href=${`#/invoices/${E.id}/edit`}>
              <span class="todo-icon tone-warn"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${E.number}</strong> ${Ge(E)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${m.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${W} name="repeat" /></span>
              <span class="todo-text"><strong>${m.length} wiederkehrende ${m.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${f.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${W} name="expense" /></span>
              <span class="todo-text"><strong>${f.length} ${f.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${b.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${b.length} ${b.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${h.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${W} name="quote" /></span>
              <span class="todo-text"><strong>${h.length} ${h.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
            ${I.length>0&&l`<li><a href="#/contracts">
              <span class="todo-icon"><${W} name="file" /></span>
              <span class="todo-text"><strong>${I.length} ${I.length===1?"Vertrag endet":"Verträge enden"}</strong>
                <span class="cell-sub">in den nächsten 30 Tagen oder sind abgelaufen</span></span></a></li>`}
          </ul>`}
      <//>
    </div>


    <div class="dash-lists">
      <${X} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${gn} rows=${Mo(i.byCustomer).map(E=>({key:E.id,label:E.name,value:P(E),display:ae(P(E)),href:`#/customers/${E.id}`}))} />
      <//>
      <${X} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${gn} rows=${Mo(i.byService).map(E=>({key:E.key,label:E.name,value:P(E),display:ae(P(E))}))} />
      <//>
      ${!t&&l`<${X} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${gn} rows=${Mo(i.byCompany).map(E=>({key:E.id,label:E.name,value:P(E),display:ae(P(E)),color:Ls(E.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${oe()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}var _o=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function Td({params:e}){ge();let[t,n]=D(""),[a,s]=D(e&&_o.some(h=>h.id===e.status)?e.status:"all"),[i,r]=D("all"),[o,c]=D(null),p=!de(),d=F(),u=Se(()=>v.invoices.filter(qe).map(h=>({inv:h,status:Ni(h)})),[v.version,v.settings.activeCompany]),m=kt(i,d),f=u.filter(h=>i==="all"||on(h.inv.issueDate,m)),$=f.filter(h=>_o.find(I=>I.id===a).test(h.status,h.inv)).filter(h=>Te(t,h.inv.number,Ge(h.inv),(w("companies",h.inv.companyId)||{}).name,h.inv.totals?(h.inv.totals.totalCents/100).toFixed(2):"",h.inv.totals?(h.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",(h.inv.items||[]).map(I=>I.name).join(" "))),y=$.reduce((h,I)=>{if(I.status==="draft"||I.status==="cancelled")return h;let S=I.inv.totals?I.inv.totals.totalCents:0;return h.total+=mt(S,I.inv.currency,I.inv.fx)||0,h.open+=mt(Ba(I.inv),I.inv.currency,I.inv.fx)||0,h},{total:0,open:0}),b=[{key:"number",label:"Nummer",class:"nw",sort:h=>h.inv.number||"",render:h=>l`<span class="cell-main">${h.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:h=>Ge(h.inv),render:h=>Ge(h.inv)},...p?[{key:"company",label:"Unternehmen",sort:h=>(w("companies",h.inv.companyId)||{}).name||"",render:h=>l`<${Ke} id=${h.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:h=>h.inv.issueDate,render:h=>O(h.inv.issueDate)},{key:"due",label:"Fällig",sort:h=>h.inv.dueDate||"",render:h=>h.status==="overdue"?l`<span class="tone-bad">${O(h.inv.dueDate)}</span><div class="cell-sub">seit ${yn(h.inv.dueDate,d)} Tagen</div>`:O(h.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:h=>mt(h.inv.totals?h.inv.totals.totalCents:0,h.inv.currency,h.inv.fx)||0,render:h=>l`<${Zt} doc=${h.inv} />`},{key:"open",label:"Offen",align:"right",sort:h=>mt(Ba(h.inv),h.inv.currency,h.inv.fx)||0,render:h=>{let I=Ba(h.inv);return I?j(I,h.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:h=>h.status,render:h=>l`<${Tn} inv=${h.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:h=>{let I=Id(h.inv.id),S=Fs(h.inv,yn(h.inv.dueDate,d)),x=B=>(Tt.find(V=>V.id===B)||{}).label||"";return l`<${C} small variant=${S?"primary":"default"} icon="clock" onClick=${()=>c(h.inv)}>${S?x(S):"Erinnern"}<//>
          <span class="cell-sub nw">${I?`Zuletzt: ${x(I.level)}, ${O(I.date)}`:"Noch keine versendet"}</span>`}}]:[]],g=$.length?[`${$.length} ${$.length===1?"Beleg":"Belege"}`,"",...p?[""]:[],"","",l`<span class="strong">${ae(y.total)}</span>`,l`<span class="strong">${ae(y.open)}</span>`,l`<span class="muted-text">in ${oe()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${ke} title="Rechnungen">
      <${C} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${v.invoices.length>0&&l`<div class="filters">
      <${yt} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${bt} label="Status" value=${a} onChange=${s}
        options=${_o.map(h=>({id:h.id,label:h.label,count:f.filter(I=>h.test(I.status,I.inv)).length})).filter(h=>h.id!=="clarify"||h.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${h=>r(h.target.value)}>
        ${Pn.filter(h=>h.id!=="custom").map(h=>l`<option value=${h.id}>${h.label}</option>`)}
      </select>
    </div>`}
    <${tt} columns=${b} rows=${$} rowKey=${h=>h.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${g}
      rowClass=${h=>h.inv.clarify&&h.status!=="draft"?"row-clarify":""}
      onRowClick=${h=>Y(h.inv.status==="draft"?`/invoices/${h.inv.id}/edit`:`/invoices/${h.inv.id}`)}
      empty=${v.invoices.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${fe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${C} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${Fa} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function zo({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?Ye(e.id).filter(V=>V.id!==n.id):Ye(e.id),o=e.totals?e.totals.totalCents:0,c=i?Me(r):s?Math.max(o-Me(r),0):Ba(e),p=v.settings.paymentMethods||[],[d,u]=D(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:F(),amountCents:c,method:p[0]||"",note:""}),[m,f]=D(!1),[$,y]=D(""),[b,g]=D(!1),h=V=>E=>u(A=>({...A,[V]:E})),I=i?"Erstattung":"Zahlung",S=!i&&!s?c-(Number(d.amountCents)||0):0,x=d.method&&!p.includes(d.method)?[d.method,...p]:p;async function B(){g(!0);let V=S>0&&m?$.trim()||`Differenz von ${j(S,e.currency)} offen (eingegangen: ${j(d.amountCents,e.currency)} am ${O(d.date)}).`:"",E=await _(()=>s?Bc(n.id,d):i?_c(e.id,d):fs(e.id,{...d,clarify:V}));g(!1),E&&(s?M(`${I} geändert`,"good"):i?M("Erstattung eingetragen","good"):S>0?M(V?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):M("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${Le} title=${`${I} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${B}
    footer=${l`<${C} onClick=${a}>Abbrechen<//><${C} variant="primary" type="submit" busy=${b}>${s?"Änderung speichern":`${I} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${j(c,e.currency)}.`:s?`Höchstens ${j(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${j(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${_e} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${d.amountCents} onChange=${h("amountCents")} min=${0} />
      <${ze} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${d.date} onInput=${h("date")} max=${F()} />
      <${se} class="span-6" label="Zahlungsart" value=${d.method} onChange=${h("method")} options=${x} placeholder="Keine Angabe" />
      <${q} class="span-6" label="Notiz" value=${d.note} onInput=${h("note")} />
    </div>
    ${S>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${j(S,e.currency)}</strong> offen.</p>
      <${He} label="Differenz muss geklärt werden" checked=${m} onChange=${f}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${ie} label="Was ist zu klären?" value=${$} onInput=${y} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function Po(e){let t=Bt(e.prev.doc,"invoices"),n=await Ma(Ss(t));et(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${O(da(new Date(e.at)))}).pdf`))}function Lo({entityId:e}){let[t,n]=D(""),a=v.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await _(()=>Po(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${Xe(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${C} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function Ad({id:e}){ge();let t=w("invoices",e),[n,a]=D(null),[s,i]=D(t&&t.internalNotes||""),[r,o]=D("");if(!t)return l`<${fe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${C} onClick=${()=>Y("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=Ni(t),p=[...Ye(e)].sort((N,te)=>N.date<te.date?-1:1),d=[...kn(e)].sort((N,te)=>N.createdAt<te.createdAt?-1:1),u=Me(p),m=Ba(t),f=t.type==="credit_note",$=Bt(t,"invoices"),y=t.relatedInvoiceId?w("invoices",t.relatedInvoiceId):null,b=t.creditNoteId?w("invoices",t.creditNoteId):null,g=t.quoteId?w("quotes",t.quoteId):null,h=!f&&m>0,I=!f&&t.status==="credited"&&u>0,S=!f&&["issued","sent"].includes(t.status),x=t.fx?Number(t.fx.usdToEur):null;async function B(){o("pdf"),await _(()=>sr(t,"invoices")),o("")}async function V(){if(u>0){M("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let N=await ue({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(N===null)return;await _(async()=>(await ki(e,N),!0))&&M("Rechnung storniert","good")}async function E(){if(!await ue({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${p.length?` Die eingetragenen Zahlungen (${j(u,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await _(()=>Rc(e))&&(M(`${t.number} ist wieder ein Entwurf`,"good"),Y(`/invoices/${e}/edit`))}async function A(){if(!await ue({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await _(()=>Pc(e))&&M("Stornierung zurückgenommen","good")}async function k(){let N=f?t:b,te=f?y:t;if(!N||!await ue({title:`Gutschrift ${N.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${te?` Die Rechnung ${te.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let G=await _(()=>Xr(N.id));G&&(M(`Gutschrift ${G.creditNumber} zurückgenommen`,"good"),f&&Y(G.invoiceId?`/invoices/${G.invoiceId}`:"/invoices",{replace:!0}))}async function U(){await Oi(t)&&Y("/invoices",{replace:!0})}async function z(){let N=await ue({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(N===null)return;await _(()=>Uc(e,N))&&M("Klärung vermerkt","good")}async function H(){let N=await ue({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${j(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(N===null)return;await _(()=>Mc(e,N))&&M("Klärung erledigt","good")}async function T(){let N=await ue({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${j(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${u>0?` Zu dieser Rechnung sind bereits ${j(u,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(N===null)return;let te=await _(()=>Di(e,N));te&&(M(`Gutschrift ${te.number} erstellt`,"good"),Y(`/invoices/${te.id}`))}async function R(N){if(!await ue({title:"Zahlung löschen?",text:`Die Zahlung über ${j(N.amountCents,t.currency)} vom ${O(N.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await _(async()=>(await zc(N.id),!0))&&M("Zahlung gelöscht","good")}async function Q(){await _(async()=>(await xi("invoices",e,s),!0))&&M("Notiz gespeichert","good")}return l`
    <${ke} title=${l`${f?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${Tn} inv=${t} /> <span class="head-meta">${Ge(t)}</span>`}>
      <${C} icon="download" busy=${r==="pdf"} onClick=${B}>PDF<//>
      ${!f&&t.status==="issued"&&l`<${C} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${C} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${h&&l`<${C} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${It} items=${[!f&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>_(()=>sa(e,!0))},!f&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!f&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>_(()=>sa(e,!1))},!f&&m>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},S&&{label:"Zurück in den Entwurf",icon:"edit",onClick:E},!f&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:z},!f&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>Y(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:A},(f||t.status==="credited"&&b)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:f,onClick:k},S&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:T},S&&{label:"Stornieren",icon:"x",danger:!0,onClick:V},!f&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:U}]} />
    <//>

    ${t.clarify&&l`<${he} tone="warn" action=${l`<div class="notice-actions">
        <${C} small onClick=${z}>Ändern<//>
        <${C} small variant="primary" icon="check" onClick=${H}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${Xe(t.clarify.at)} · ${m>0?`offen sind ${j(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${he} tone="warn" action=${l`<${C} small icon="undo" onClick=${A}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${Xe(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${b&&l`<${he} tone="info" action=${l`<${C} small onClick=${()=>Y(`/invoices/${b.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${b.number} erstellt.
    <//>`}
    ${y&&l`<${he} tone="info" action=${l`<${C} small onClick=${()=>Y(`/invoices/${y.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${y.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${Pa} model=${$} />
      </div>
      <aside class="split-side">
        <${X} title="Stand">
          <${Cn} rows=${[["Unternehmen",l`<${Ke} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Ge(t)}</a>`],["Gesamtbetrag",l`<${Zt} doc=${t} />`],!f&&["Bezahlt",j(u,t.currency)],!f&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${j(m,t.currency)}</span>`],!f&&t.dueDate&&["Fällig am",l`${O(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${yn(t.dueDate,F())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",Xe(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",Xe(t.firstFinalizedAt)],t.sentAt&&["Versendet",Xe(t.sentAt)],g&&["Aus Angebot",l`<a href=${`#/quotes/${g.id}`}>${Je(g)}</a>`],t.contractId&&w("contracts",t.contractId)&&["Zu Vertrag",l`<a href=${`#/contracts?open=${t.contractId}`}>${w("contracts",t.contractId).title}</a>`]]} />
        <//>

        ${!f&&l`<${X} title="Zahlungen" action=${h?l`<${C} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:I&&l`<${C} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${p.length?l`<ul class="plain-list">
                ${p.map(N=>l`<li class="row-between" key=${N.id}>
                  <span><span class="strong">${j(N.amountCents,t.currency)}</span>
                    <span class="cell-sub">${N.amountCents<0?"Erstattung, ":""}${O(N.date)}${N.method?`, ${N.method}`:""}${N.note?` – ${N.note}`:""}</span></span>
                  <span class="row-actions">
                    <${C} variant="ghost" small icon="edit" title=${N.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:N})} />
                    <${C} variant="ghost" small icon="trash" title=${N.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>R(N)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${d.length>0&&l`<${X} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${d.map(N=>l`<li class="row-between" key=${N.id}>
              <span>${(Tt.find(te=>te.id===N.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${O(N.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${X} title="Wechselkurs">
          ${x?l`<p class="strong">1 USD = ${Ia(x)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${O(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${X} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${C} small variant="primary" onClick=${Q}>Notiz speichern<//></div>`}
        <//>

        <${X} title="Verlauf"><${Lo} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${zo} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${zo} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${zo} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${Fa} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${Fa} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}function zf({quote:e}){return l`<span class="cell-main">${Je(e)}</span>${e.source==="upload"&&l` <span class="pdf-tag" title="Hochgeladenes PDF">PDF</span>`}
    ${e.source==="upload"&&e.refNumber&&e.title&&l`<div class="cell-sub">${e.title}</div>`}`}var Rd=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function Bd(){ge();let[e,t]=D(""),[n,a]=D("all"),[s,i]=D(null),r=!de(),o=F(),c=Se(()=>v.quotes.filter(qe).map(u=>({quote:u,status:qt(u,o)})),[v.version,v.settings.activeCompany]),p=c.filter(u=>Rd.find(m=>m.id===n).test(u.status)).filter(u=>Te(e,u.quote.number,u.quote.refNumber,u.quote.title,Ge(u.quote),(u.quote.items||[]).map(m=>m.name).join(" "))),d=[{key:"number",label:"Nummer",class:"nw",sort:u=>Je(u.quote),render:u=>l`<${zf} quote=${u.quote} />`},{key:"customer",label:"Kontakt",sort:u=>Ge(u.quote),render:u=>Ge(u.quote)},...r?[{key:"company",label:"Unternehmen",render:u=>l`<${Ke} id=${u.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:u=>u.quote.issueDate,render:u=>O(u.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:u=>u.quote.validUntil||"",render:u=>O(u.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:u=>mt(u.quote.totals?u.quote.totals.totalCents:0,u.quote.currency,u.quote.fx)||0,render:u=>l`<${Zt} doc=${u.quote} />`},{key:"status",label:"Status",sort:u=>u.status,render:u=>l`<${ys} quote=${u.quote} />`}];return l`
    <${ke} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung. Extern gestaltete Angebote lädst du als PDF hoch.">
      <${C} icon="upload" onClick=${()=>i(oa())}>PDF hochladen<//>
      <${C} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Neues Angebot<//>
    <//>
    ${v.quotes.length>0&&l`<div class="filters">
      <${yt} value=${e} onInput=${t} placeholder="Nummer, Kontakt, Leistung" />
      <${bt} label="Status" value=${n} onChange=${a}
        options=${Rd.map(u=>({id:u.id,label:u.label,count:c.filter(m=>u.test(m.status)).length}))} />
    </div>`}
    <${tt} columns=${d} rows=${p} rowKey=${u=>u.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${u=>Y(u.quote.status==="draft"?`/quotes/${u.quote.id}/edit`:`/quotes/${u.quote.id}`)}
      empty=${v.quotes.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${fe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${C} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Erstes Angebot schreiben<//>
            <${C} icon="upload" onClick=${()=>i(oa())}>PDF hochladen<//>
          <//>`} />
    ${s&&l`<${Ms} quote=${s} onClose=${()=>i(null)} onSaved=${u=>Y(`/quotes/${u.id}`)} />`}
  `}function Ud({id:e}){ge();let t=w("quotes",e),[n,a]=D(null),[s,i]=D(t&&t.internalNotes||""),[r,o]=D("");if(!t)return l`<${fe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${C} onClick=${()=>Y("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=qt(t,F()),p=t.source==="upload",d=p?null:Bt(t,"quotes"),u=v.contracts.filter(S=>S.quoteId===e),m=Je(t),f=t.invoiceId?w("invoices",t.invoiceId):null,$=["open","sent","expired"].includes(c);async function y(){o("pdf"),await _(()=>p?Co((t.attachmentIds||[])[0]):sr(t,"quotes")),o("")}async function b(){if(!await ue({title:"Angebot löschen?",text:`„${m}“ wird samt PDF gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Zc(e),!0))&&(M("Angebot gelöscht","good"),Y("/quotes"))}async function g(S,x){await _(async()=>(await ia(e,S),!0))&&M(x,"good")}async function h(){if(!await ue({title:"In Rechnung umwandeln?",text:p?`Aus dem Angebot „${m}“ entsteht ein Rechnungsentwurf mit dem Angebotsbetrag als Position. Du kannst ihn vor dem Erstellen noch anpassen, z. B. in einzelne Leistungen aufteilen.`:`Aus dem Angebot ${m} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let x=await _(()=>Fc(e));o(""),x&&(M("Rechnungsentwurf angelegt","good"),Y(`/invoices/${x.id}/edit`))}async function I(){await _(async()=>(await xi("quotes",e,s),!0))&&M("Notiz gespeichert","good")}return l`
    <${ke} title=${`Angebot ${m}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${ys} quote=${t} />${p?l` <span class="pdf-tag">PDF</span>`:""} <span class="head-meta">${Ge(t)}</span>`}>
      <${C} icon="download" busy=${r==="pdf"} onClick=${y}>PDF<//>
      ${p&&l`<${C} icon="edit" onClick=${()=>a("edit")}>Bearbeiten<//>`}
      ${!p&&c==="open"&&l`<${C} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${["accepted","invoiced"].includes(c)&&!u.length&&l`<${C} icon="file" onClick=${()=>a({contract:Us(t)})}>Vertrag anlegen<//>`}
      ${!f&&c!=="declined"&&l`<${C} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${h}>In Rechnung umwandeln<//>`}
      <${It} items=${[$&&{label:"Als angenommen markieren",icon:"check",onClick:()=>g("accepted","Angebot angenommen")},$&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>g("declined","Angebot abgelehnt")},p&&c==="open"&&{label:"Als versendet markieren",icon:"send",onClick:()=>g("sent","Als versendet markiert")},!p&&c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!f&&{label:"Wieder öffnen",icon:"undo",onClick:()=>g("open","Angebot wieder geöffnet")},u.length>0&&{label:"Weiteren Vertrag anlegen",icon:"file",onClick:()=>a({contract:Us(t)})},!p&&{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>Y(`/quotes/new?copy=${e}`)},p&&{label:"Löschen",icon:"trash",danger:!0,disabled:!!f,onClick:b}]} />
    <//>

    ${f&&l`<${he} tone="info" action=${l`<${C} small onClick=${()=>Y(`/invoices/${f.id}${f.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${f.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${f.number}`}.
    <//>`}
    ${c==="expired"&&l`<${he} tone="warn">Dieses Angebot ist seit dem ${O(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main">${p?l`<div class="doc-upload">${(t.attachmentIds||[])[0]?l`<${Rs} attachmentId=${t.attachmentIds[0]} />`:l`<${he} tone="warn">Zu diesem Angebot ist kein PDF gespeichert.<//>`}</div>`:l`<${Pa} model=${d} />`}</div>
      <aside class="split-side">
        <${X} title="Stand">
          <${Cn} rows=${[["Unternehmen",l`<${Ke} id=${t.companyId} />`],["Kontakt",l`<a href=${`#/customers/${t.customerId}`}>${Ge(t)}</a>`],p&&["Bezeichnung",t.title],p&&t.refNumber&&["Nummer im Dokument",t.refNumber],["Angebotssumme",l`<${Zt} doc=${t} />`],["Angebotsdatum",O(t.issueDate)],["Gültig bis",O(t.validUntil)],[p?"Hochgeladen":"Erstellt",Xe(t.finalizedAt)],t.sentAt&&["Versendet",Xe(t.sentAt)],t.decidedAt&&["Entschieden",Xe(t.decidedAt)]]} />
        <//>
        ${u.length>0&&l`<${X} title="Vertrag">
          <ul class="plain-list linked-list">${u.map(S=>l`<li key=${S.id}>
            <button type="button" class="link-btn" onClick=${()=>a({contract:S})}>${S.title}</button>
            <${Ji} contract=${S} /> <span class="muted-text">${Bs(S)}</span></li>`)}</ul>
        <//>`}
        <${X} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${C} small variant="primary" onClick=${I}>Notiz speichern<//></div>`}
        <//>
        <${X} title="Verlauf"><${Lo} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${Fa} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
    ${n==="edit"&&l`<${Ms} quote=${t} onClose=${()=>a(null)} />`}
    ${n&&n.contract&&l`<${_s} key=${n.contract.id} contract=${n.contract} onClose=${()=>a(null)} />`}
  `}function zd(e="year"){let[t,n]=D(e),[a,s]=D({from:`${F().slice(0,4)}-01-01`,to:F()}),i=kt(t,F(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function Pf(e){let t=Pn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${O(e.range.from)} bis ${O(e.range.to)}`}function Pd({p:e}){let t=de();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${Pn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>be(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>be(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${O(e.range.from)} bis ${O(e.range.to)}`:""}</span>
  </div>`}var Ld=(e,t)=>t?At(Math.round(e/t*1e3)/10):"–",De=e=>({v:e/100,t:ae(e)}),_n=e=>({v:e/100,t:Ze(e)}),We=(e,t)=>({v:e/100,t:j(e,t)}),Va=e=>({v:e||"",t:e?O(e):""}),ye={align:"right",type:"money"},Mn={align:"right",type:"number"};function Kd(){ge();let e=zd("year"),t=F(),n=wt(),a=de(),s=pn(),i=Se(()=>{let u={companyId:n,range:e.range},m=mo(e.range,s,n),f=m.slice(-24);return{summary:ku(s,u,t),truncated:m.length>f.length,series:f.length?Cs(s,{companyId:n,months:f,range:e.range}):[],byCompany:Es(s,u),byCustomer:Is(s,u),byService:Ns(s,u),byCategory:uo(s,u)}},[v.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(u=>({key:u.key,label:ma(u.key),title:Gt(u.key),values:{rev:P(u,"revenue"),exp:P(u,"expense")}})),p={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(u=>[Gt(u.key),ae(P(u,"revenue")),ae(P(u,"expense")),ae(P(u,"profit")),ae(P(u,"payments"))])},d=u=>[...u].sort((m,f)=>P(f)-P(m));return l`
    <${ke} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${oe()}, ${An()} als Zweitwert.`}>
      <${C} icon="reports" onClick=${()=>Y("/reports")}>Reports und Export<//>
    <//>
    <${Pd} p=${e} />

    <div class="stat-row stat-row-3">
      <${Ve} label="Einnahmen" value=${ae(P(r.income))} sub=${`≈ ${Ze(Ae(r.income))}, ${r.income.count} Rechnungen`} />
      <${Ve} label="Ausgaben" value=${ae(P(r.expenses))} sub=${`≈ ${Ze(Ae(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Ve} label="Gewinn" value=${ae(P(r.profit))} tone=${P(r.profit)<0?"bad":"good"} sub=${`≈ ${Ze(Ae(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Ve} label="Zahlungseingänge" value=${ae(P(r.payments))} sub=${`≈ ${Ze(Ae(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Ve} label="Offene Forderungen (heute)" value=${ae(P(r.receivables))} sub=${`≈ ${Ze(Ae(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Ve} label="Steuern (Saldo)" value=${ae(P(r.taxBalance))}
        sub=${`berechnet ${ae(P(r.taxCollected))}, in Ausgaben ${ae(P(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${Os} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${oe()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${oe()}`} series=${o} table=${p}>
      <${Ks} groups=${c} series=${o} mode="grouped" format=${u=>ae(u)} axisFormat=${u=>is(u,oe())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${X} title="Umsatz pro Unternehmen">
        <${gn} rows=${d(i.byCompany).map(u=>({key:u.id,label:u.name,value:P(u),display:ae(P(u)),color:Ls(u.color)}))} />
      <//>`}
      <${X} title="Umsatz pro Kunde">
        <${gn} rows=${d(i.byCustomer).map(u=>({key:u.id,label:u.name,value:P(u),display:ae(P(u)),href:`#/customers/${u.id}`}))} />
      <//>
      <${X} title="Umsatz pro Leistung">
        <${gn} rows=${d(i.byService).map(u=>({key:u.key,label:u.name,value:P(u),display:ae(P(u))}))} />
      <//>
      <${X} title="Ausgaben nach Kategorie">
        <${gn} rows=${d(i.byCategory).map(u=>({key:u.name,label:u.name,value:P(u),display:ae(P(u)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function Ko(e,t,n,a,s){let i=wu(e,t,n),r=i.reduce((o,c)=>({c:o.c+P(c),a:o.a+Ae(c),tax:o.tax+P(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...Mn},{label:`Umsatz netto (${oe()})`,...ye},{label:`Umsatz netto (${An()})`,...ye},{label:`Steuer (${oe()})`,...ye}],rows:i.map(o=>[a(o.key),o.count,De(P(o)),_n(Ae(o)),De(P(o,"tax"))]),totals:["Summe",r.count,De(r.c),_n(r.a),De(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?ma(o.key):a(o.key),title:a(o.key),values:{rev:P(o)}}))}}}function Oo(e,t,n=[]){let a=[...e].sort((i,r)=>P(r)-P(i)),s=a.reduce((i,r)=>({c:i.c+P(r),a:i.a+Ae(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${oe()})`,...ye},{label:`Umsatz netto (${An()})`,...ye},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),De(P(i)),_n(Ae(i)),Ld(P(i),s.c)]),totals:["Summe",...n.map(()=>""),De(s.c),_n(s.a),""]}}function Md(e,t,n,a){let s=Un(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+P(c,"open"),0),r=yu.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,p)=>c+P(p,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...Mn},{label:"Währung"},{label:"Rechnungsbetrag",...ye},{label:"Offen",...ye},{label:`Offen (${oe()})`,...ye}],rows:s.map(o=>[o.inv.number,Ge(o.inv),(w("companies",o.inv.companyId)||{}).name||"",Va(o.inv.issueDate),Va(o.inv.dueDate),o.overdueDays,o.inv.currency,We(o.inv.totals.totalCents,o.inv.currency),We(o.openCents,o.inv.currency),De(P(o,"open"))]),totals:["Summe","","","","","","","","",De(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var Fo=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>Ko(e,t,"month",Gt,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>Ko(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>Ko(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>Oo(Is(e,t),"Kunde",[{col:{label:"Rechnungen",...Mn},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>Oo(Es(e,t),"Unternehmen",[{col:{label:"Rechnungen",...Mn},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>Oo(Ns(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...Mn},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:Wn(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=xu(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...Mn},{label:"Netto",...ye},{label:"Steuer",...ye},{label:"Brutto",...ye},{label:"Netto in USD",...ye},{label:"Netto in EUR",...ye}],rows:n.map(a=>[a.currency,a.count,We(a.netCents,a.currency),We(a.taxCents,a.currency),We(a.totalCents,a.currency),We(a.usd,"USD"),We(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",We(n.reduce((a,s)=>a+s.usd,0),"USD"),We(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>Md(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>Md(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=mo(t.range,e,t.companyId),a=n.length?Cs(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+P(r,"revenue"),exp:i.exp+P(r,"expense"),alt:i.alt+Ae(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${oe()})`,...ye},{label:`Ausgaben (${oe()})`,...ye},{label:`Gewinn (${oe()})`,...ye},{label:`Gewinn (${An()})`,...ye}],rows:a.map(i=>[Gt(i.key),De(P(i,"revenue")),De(P(i,"expense")),De(P(i,"profit")),_n(Ae(i,"profit"))]),totals:["Summe",De(s.rev),De(s.exp),De(s.rev-s.exp),_n(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:ma(i.key),title:Gt(i.key),values:{rev:P(i,"revenue"),exp:P(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...uo(e,t)].sort((s,i)=>P(i)-P(s)),a=n.reduce((s,i)=>({c:s.c+P(i),a:s.a+Ae(i),tax:s.tax+P(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...Mn},{label:`Netto (${oe()})`,...ye},{label:`Netto (${An()})`,...ye},{label:`Steuer (${oe()})`,...ye},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,De(P(s)),_n(Ae(s)),De(P(s,"tax")),Ld(P(s),a.c)]),totals:["Summe",a.count,De(a.c),_n(a.a),De(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=Du(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...ye},{label:"Steuer",...ye},{label:`Steuer (${oe()})`,...ye}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${At(a.rate)}`,a.currency,We(a.netCents,a.currency),We(a.taxCents,a.currency),De(P(a,"tax"))]),["In Ausgaben enthaltene Steuer",oe(),"","",De(-P(n,"paid"))]],totals:["Saldo","","","",De(P(n,"collected")-P(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=pt(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+P(r,"net"),tax:i.tax+P(r,"tax"),total:i.total+P(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...ye},{label:"Steuer",...ye},{label:"Brutto",...ye},{label:`Netto (${oe()})`,...ye},{label:"Kurs USD/EUR",...Mn},{label:"Bezahlt",...ye},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=Ye(r.id),c=tn(r,o,n);return[r.number,Va(r.issueDate),Ge(r),(w("companies",r.companyId)||{}).name||"",r.currency,We(r.totals.netCents,r.currency),We(r.totals.taxCents,r.currency),We(r.totals.totalCents,r.currency),De(P(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:Wn(r.fx.usdToEur,"de",4)}:"",We(Me(o),r.currency),(Ya[c]||{}).label||c]}),totals:["Summe","","","",oe(),De(s.net),De(s.tax),De(s.total),De(s.net),"","",""],note:`Die Summenzeile ist in ${oe()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=zi(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...ye},{label:`Betrag (${oe()})`,...ye}],rows:n.map(a=>[Va(a.date),a.inv.number,Ge(a.inv),a.pay.method||"",a.inv.currency,We(a.pay.amountCents,a.inv.currency),De(P(a))]),totals:["Summe","","","","","",De(n.reduce((a,s)=>a+P(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=_a(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+P(i,"net"),tax:s.tax+P(i,"tax"),total:s.total+P(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...ye},{label:"Steuer",...ye},{label:"Gesamt",...ye},{label:`Gesamt (${oe()})`,...ye},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[Va(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(w("companies",i.companyId)||{}).name||"",i.currency,We(i.netCents,i.currency),We(i.taxCents,i.currency),We(i.totalCents,i.currency),De(P(s,"total")),Va(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",oe(),De(a.net),De(a.tax),De(a.total),De(a.total),"",""],note:`Die Summenzeile ist in ${oe()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],_d=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function Od({params:e}){ge();let[t,n]=D(e&&e.r&&Fo.find(b=>b.id===e.r)?e.r:"month"),a=zd("year"),[s,i]=D(""),r=F(),o=wt(),c=de(),p=pn(),d=Fo.find(b=>b.id===t),u=Se(()=>d.build(p,{companyId:o,range:a.range},r),[v.version,t,o,a.range.from,a.range.to,oe()]),m=t==="open"||t==="overdue",f=`${c?c.name:"Alle Unternehmen"}, ${m?`Stichtag ${O(r)}`:Pf(a)}`,$={title:d.label,subtitle:f,fileName:`${d.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:u.columns,rows:u.rows,totals:u.totals};async function y(b){i(b),await _(async()=>{b==="csv"?Hi($):b==="xlsx"?await zu($):await Pu($)}),i("")}return l`
    <${ke} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${C} icon="download" busy=${s==="csv"} disabled=${!u.rows.length} onClick=${()=>y("csv")}>CSV<//>
      <${C} icon="download" busy=${s==="xlsx"} disabled=${!u.rows.length} onClick=${()=>y("xlsx")}>Excel<//>
      <${C} icon="download" busy=${s==="pdf"} disabled=${!u.rows.length} onClick=${()=>y("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${Fo.map(b=>l`<button type="button" class=${`report-link${b.id===t?" is-on":""}`} aria-current=${b.id===t?"true":void 0}
          onClick=${()=>n(b.id)}>${b.label}</button>`)}
      </nav>
      <div class="report-body">
        <${Pd} p=${a} />
        ${u.note&&l`<p class="footnote">${u.note}</p>`}
        ${u.aging&&l`<div class="stat-row stat-row-5">
          ${u.aging.map(b=>l`<${Ve} label=${b.label} value=${ae(b.value)} sub=${`${b.count} ${b.count===1?"Rechnung":"Rechnungen"}`} tone=${b.id!=="current"&&b.value?"bad":""} />`)}
        </div>`}
        ${u.chart&&u.chart.groups.length>1&&l`<${Os} title=${d.label} sub=${`Netto in ${oe()}`} series=${u.chart.series}>
          <${Ks} groups=${u.chart.groups} series=${u.chart.series} mode=${u.chart.mode||"stacked"}
            format=${b=>ae(b)} axisFormat=${b=>is(b,oe())} ariaLabel=${d.label} />
        <//>`}
        ${u.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${u.columns.map(b=>l`<th class=${b.align==="right"?"r":""}>${b.label}</th>`)}</tr></thead>
              <tbody>${u.rows.map(b=>l`<tr>${b.map((g,h)=>l`<td class=${u.columns[h].align==="right"?"r":""}>${_d(g)}</td>`)}</tr>`)}</tbody>
              ${u.totals&&l`<tfoot><tr>${u.totals.map((b,g)=>l`<td class=${u.columns[g].align==="right"?"r":""}>${_d(b)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${fe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function Fd(){ge();let[e,t]=D({}),n=[...v.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ce(()=>{let a=!0;return Promise.all(n.map(s=>ms(s,"invoice",F()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[v.version]),l`
    <${ke} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${C} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${fe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${C} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${ln(a.logoAssetId)?l`<img src=${ln(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
              </span>
              <span class="company-info">
                <strong>${a.name}</strong>
                <span class="cell-sub">${[a.city,a.country].filter(Boolean).join(", ")||"Adresse noch nicht hinterlegt"}</span>
              </span>
              <span class="company-meta">
                <span class="cell-sub">Nächste Rechnung</span>
                <span class="mono-num">${e[a.id]||"–"}</span>
              </span>
              <span class="company-state">
                ${a.archived?l`<${Pe} tone="mute">Archiviert<//>`:s.length?l`<${Pe} tone="warn">Es fehlt: ${s.join(", ")}<//>`:l`<${Pe} tone="good">Vollständig<//>`}
              </span>
            </a>
          </li>`})}
      </ul>`}
  `}function qd({id:e}){ge();let t=e&&e!=="new"?w("companies",e):null,[n,a]=D(()=>t?we(t):Xa()),[s,i]=D(null),[r,o]=D(!1),[c,p]=D(!1),[d,u]=D({}),[m,f]=D(null),$=ve(null),y=F(),b=U=>{a(U),o(!0)},g=U=>z=>b(H=>({...H,[U]:z}));if(ce(()=>(r?ri(oi):cn(),()=>cn()),[r]),ce(()=>{let U=!0;return Promise.all(["invoice","quote","credit"].map(z=>ms(n,z,y).catch(()=>""))).then(([z,H,T])=>{U&&u({invoice:z,quote:H,credit:T})}),()=>{U=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,v.version]),e&&e!=="new"&&!t)return l`<${fe} icon="company" title="Unternehmen nicht gefunden"><${C} onClick=${()=>Y("/companies")}>Zur Übersicht<//><//>`;let h=t?w("counters",ta(t.id,"invoice",Vt(t,"invoice").pattern,y)):null,I=h?h.last:0,S=s||ln(n.logoAssetId),x={invoice:nn(n.invoicePattern),quote:nn(n.quotePattern),credit:nn(n.creditPattern)};async function B(U){if(!U)return;let z=await _(()=>Nu(U));z&&(i(z),o(!0))}async function V(){p(!0);let U=await _(()=>us(n,s));p(!1),U&&(i(null),a(we(U)),o(!1),cn(),M("Unternehmen gespeichert","good"),t||Dn(`/companies/${U.id}`))}async function E(){if(m==null||!t||!await ue({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${y.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await _(async()=>(await Ac(t,"invoice",y,m),!0))&&(M("Nummernkreis angepasst","good"),f(null))}async function A(){await _(async()=>(await $c(t.id,!t.archived),!0))&&(M(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(z=>({...z,archived:!t.archived})))}async function k(){if(!await ue({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await bc(t.id),!0))&&(M("Unternehmen gelöscht","good"),Dn("/companies"))}return l`
    <${ke} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${It} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:A},{label:"Löschen",icon:"trash",danger:!0,disabled:Gr(t.id),onClick:k}]} />`}
      <${C} variant="primary" icon="check" busy=${c} onClick=${V}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${he} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${X} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${q} class="span-4" label="Unternehmensname" value=${n.name} onInput=${g("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${q} class="span-2" label="Kurzname" value=${n.shortName} onInput=${g("shortName")} hint="Für den Company Switcher" />
          <${q} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${g("legalForm")} />
          <${xe} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${U=>g("brandColor")(U.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${xe} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${S?l`<img src=${S} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${C} icon="upload" onClick=${()=>$.current&&$.current.click()}>${S?"Logo ersetzen":"Logo hochladen"}<//>
              ${S&&l`<${C} variant="ghost" icon="trash" onClick=${()=>{i(null),g("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${$} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${U=>{B(U.target.files[0]),U.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${X} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${q} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${g("street")} />
          <${q} class="span-2" label="PLZ" value=${n.zip} onInput=${g("zip")} />
          <${q} class="span-4" label="Ort" value=${n.city} onInput=${g("city")} />
          <${q} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${g("region")} />
          <${q} class="span-3" label="Land" value=${n.country} onInput=${g("country")} />
          <${q} class="span-2" label="Telefon" value=${n.phone} onInput=${g("phone")} />
          <${q} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${g("email")} />
          <${q} class="span-2" label="Website" value=${n.website} onInput=${g("website")} />
        </div>
      <//>

      <${X} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${q} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${g("taxId")} />
          <${q} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${g("vatId")} />
          <${q} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${g("registerInfo")} />
        </div>
      <//>

      <${X} title="Bank und Zahlung">
        <div class="form-grid">
          <${q} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${g("accountHolder")} />
          <${q} class="span-3" label="Bank" value=${n.bankName} onInput=${g("bankName")} />
          <${q} class="span-4" label="IBAN" value=${n.iban} onInput=${g("iban")} />
          <${q} class="span-2" label="BIC" value=${n.bic} onInput=${g("bic")} />
          <${ie} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${g("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${ie} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${g("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${X} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${q} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${g("invoicePrefix")} placeholder="z. B. HL" />
          <${q} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${g("invoicePattern")} error=${x.invoice}
            hint=${d.invoice?`Nächste Rechnung: ${d.invoice}`:""} />
          <${_e} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${g("numberDigits")} />
          <${q} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${g("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${q} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${g("quotePattern")} error=${x.quote}
            hint=${d.quote?`Nächstes Angebot: ${d.quote}`:""} />
          <${q} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${g("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${q} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${g("creditPattern")} error=${x.credit}
            hint=${d.credit?`Nächste Gutschrift: ${d.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${xe} label=${`Zuletzt vergebene laufende Rechnungsnummer ${y.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${je} id="counter-last" value=${m??I} digits=${0} min=${0} onChange=${U=>f(U)} />
              <${C} disabled=${m==null||m===I} onClick=${E}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${X} title="Standards für neue Belege">
        <div class="form-grid">
          <${se} class="span-2" label="Währung" value=${n.currency} onChange=${g("currency")} options=${Be} />
          <${se} class="span-2" label="Belegsprache" value=${n.language} onChange=${g("language")} options=${Pt} />
          <${_e} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${g("paymentTermDays")} />
          <${_e} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${q} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${g("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${ie} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${g("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${He} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${g("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${He} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${g("showFxNote")} /></div>
        </div>
      <//>

      <${X} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${se} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${g("meetingProvider")}
            placeholder="Keiner" options=${ga} />
          <${q} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${g("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${ie} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${g("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${_e} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${g("meetingDuration")} />
          <${se} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${g("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${st()})`} options=${ei.map(U=>({id:U,label:U.replace(/_/g," ")}))}
            hint="Zum Beispiel Europe/Berlin, wenn deine Kunden dieses Unternehmens in Deutschland sitzen" />
        </div>
      <//>

      <${X} title="Texte auf Belegen">
        <div class="form-grid">
          <${ie} class="span-6" label="Einleitung Rechnung" value=${n.invoiceText} onInput=${g("invoiceText")} rows=${2} />
          <${ie} class="span-6" label="Einleitung Angebot" value=${n.quoteText} onInput=${g("quoteText")} rows=${2} />
          <${ie} class="span-6" label="Zahlungsbedingungen" value=${n.paymentTerms} onInput=${g("paymentTerms")} rows=${2} />
          <${ie} class="span-6" label="Fußzeile" value=${n.footer} onInput=${g("footer")} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${C} variant="primary" icon="check" busy=${c} onClick=${V}>Unternehmen speichern<//>
      </div>
    </div>
  `}var Vd=["aiApiKey"],Zd=["lastBackupAt","changesSinceBackup"],Gd="bbc-finance-backup";function Lf(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Kf(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function jd(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function qo({includeFiles:e=!0}={}){let t={};for(let o of ft)t[o]=await wa(o);let n=await wa("settings"),a={};for(let o of n)Vd.includes(o.key)||Zd.includes(o.key)||(a[o.key]=o.value);let s={format:Gd,schemaVersion:wr,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(ft.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await wa("blobs");for(let c=0;c<o.length;c++){let p=await Lf(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(p)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function Hd(){await J(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function Wd(e){let t=new Map,n=0,a=(d,u)=>{try{t.set(d,Kf(u))}catch{n+=1}},s=null,i="",r=0,o=!1,c=d=>{r+=1;let u=d.trim();if(!u)return;if(r===1&&/"files":\{$/.test(u)){s=JSON.parse(`${u}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(u==="}}")return;let m=JSON.parse(`{${u.replace(/,$/,"")}}`);for(let[f,$]of Object.entries(m))a(f,$)},p=async()=>{let d;try{d=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(d&&typeof d=="object"&&d.files&&typeof d.files=="object"){for(let[u,m]of Object.entries(d.files))a(u,m);delete d.files}return d};if(!e.stream||typeof TextDecoderStream>"u")return s=await p(),{json:s,files:t,badFiles:n};try{let d=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:u,done:m}=await d.read();if(m)break;i+=u;let f=i.indexOf(`
`);for(;f>=0;)c(i.slice(0,f)),i=i.slice(f+1),f=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(d){if(!(d instanceof SyntaxError))throw d;t.clear(),n=0,s=await p()}return{json:s,files:t,badFiles:n}}var hn=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Za=e=>typeof e=="number"&&Number.isFinite(e);function Vo(e,t){if(!hn(e)||e.format!==Gd)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>wr)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!hn(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of ft){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=va(s);for(let o of i)if(!hn(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!hn(r.totals)||!Za(r.totals.totalCents)||!Za(r.totals.netCents)||!Za(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number&&!(s==="quotes"&&r.source==="upload"))throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!Za(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(Za))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(ft.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:hn(e.files)?Object.keys(e.files).length:0}}function Of(e){let t={};if(!hn(e))return t;for(let n of Object.keys(Wt)){if(!Object.hasOwn(e,n)||Vd.includes(n)||Zd.includes(n))continue;let a=Wt[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?Za(r):typeof r=="string"))continue;t[n]=s}else hn(a)?hn(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function Qd({json:e,files:t,badFiles:n=0}){Vo(e,t);let a=v.settings.aiApiKey||"",s=Of(e.settings);return await Vn(Kt,async r=>{for(let o of Kt)await r.clear(o);for(let o of ft)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:Fe(),at:ne(),user:v.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:hn(e.counts)?e.counts:null}})}),await Gn(),as(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function Jd(){await Vn(Kt,async e=>{for(let t of Kt)await e.clear(t)}),await Gn(),as()}var Ff="bbc-finance-device",rr="handles",Zo="backupFolder",Go=()=>typeof window<"u"&&typeof window.showDirectoryPicker=="function"&&window.isSecureContext!==!1;function qf(){return new Promise((e,t)=>{let n=indexedDB.open(Ff,1);n.onupgradeneeded=()=>{n.result.objectStoreNames.contains(rr)||n.result.createObjectStore(rr)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function jo(e,t){let n=await qf();try{return await new Promise((a,s)=>{let i=n.transaction(rr,e),r=t(i.objectStore(rr));i.oncomplete=()=>a(r&&r.result),i.onerror=()=>s(i.error),i.onabort=()=>s(i.error)})}finally{n.close()}}async function Ho(){if(!Go())return null;try{return await jo("readonly",e=>e.get(Zo))||null}catch{return null}}async function Yd(){let e;try{e=await window.showDirectoryPicker({id:"bbc-finance-backups",mode:"readwrite",startIn:"documents"})}catch(t){if(t&&t.name==="AbortError")return null;throw new Error("Der Ordner konnte nicht gewählt werden. Systemordner wie „Downloads“ oder der Schreibtisch selbst sind teils gesperrt – bitte einen Unterordner wählen.")}return await jo("readwrite",t=>t.put(e,Zo)),e}async function Xd(){try{await jo("readwrite",e=>e.delete(Zo))}catch{}}async function Vf(e){let t={mode:"readwrite"};return typeof e.queryPermission=="function"&&await e.queryPermission(t)==="granted"?!0:typeof e.requestPermission=="function"?await e.requestPermission(t)==="granted":typeof e.queryPermission!="function"}async function em(e,t){let n=await Ho();if(!n)return{saved:!1,reason:"none"};let a=!1;try{a=await Vf(n)}catch{a=!1}if(!a)return{saved:!1,reason:"denied",folder:n.name};let s=await t();try{let r=await(await n.getFileHandle(e,{create:!0})).createWritable();return await r.write(s),await r.close(),{saved:!0,folder:n.name,size:s.size,blob:s}}catch(i){return{saved:!1,reason:"error",folder:n.name,blob:s,message:i&&i.message}}}async function Qo(e=!0){let t=jd(),n=await em(t,()=>qo({includeFiles:e})),a="";if(!n.saved){let s=n.blob||await qo({includeFiles:e});et(s,t),n.size=s.size,n.reason==="denied"&&(a=`Kein Zugriff auf den Ordner „${n.folder}“ – unter Downloads gespeichert.`),n.reason==="error"&&(a=`Der Ordner „${n.folder}“ war nicht beschreibbar (verschoben oder gelöscht?) – unter Downloads gespeichert.`)}return await Hd(),{size:n.size,folder:n.saved?n.folder:"",note:a}}function Jo(e){if(e){if(e.note){M(e.note,"info",9e3);return}M(e.folder?`Backup im Ordner „${e.folder}“ gespeichert (${Ht(e.size)})`:`Backup gespeichert (${Ht(e.size)})`,"good")}}function Zf(){let[e,t]=D(void 0);if(ce(()=>{Ho().then(s=>t(s?s.name:""))},[]),!Go())return l`<p class="field-hint">Einen festen Backup-Ordner kann nur Chrome oder Edge ansteuern. In diesem Browser landen Backups im Download-Ordner.</p>`;if(e===void 0)return null;async function n(){let s=await _(()=>Yd());s&&(t(s.name),M(`Backups werden ab jetzt im Ordner „${s.name}“ gespeichert.`,"good"))}async function a(){await Xd(),t(""),M("Backups landen wieder im Download-Ordner.","info")}return l`<div class="backup-folder">
    <div class="backup-folder-info">
      <span class="backup-folder-label">Backup-Ordner</span>
      ${e?l`<strong class="backup-folder-name"><${W} name="file" size=${15} /> ${e}</strong>`:l`<span class="muted-text">Download-Ordner des Browsers</span>`}
    </div>
    <div class="button-row">
      <${C} small icon="file" onClick=${n}>${e?"Anderen Ordner wählen":"Ordner wählen"}<//>
      ${e&&l`<${C} small variant="ghost" onClick=${a}>Wieder Downloads verwenden<//>`}
    </div>
    <p class="field-hint">${e?"Ein Klick auf „Backup“ speichert direkt in diesen Ordner. Nach einem Neustart von Chrome fragt der Browser beim ersten Backup einmal nach der Erlaubnis – „Bei jedem Besuch erlauben“ wählen, dann entfällt auch das.":"Wähle einmal einen Ordner, z. B. „BBC Finance Backups“ in Dokumenten oder in deinem Cloud-Ordner. Danach genügt ein Klick auf „Backup“."}</p>
  </div>`}function Gf(){let[e,t]=D(""),[n,a]=D(null),s=ve(null);ce(()=>{_l().then(a)},[v.version]);async function i(c){t(c?"full":"lite");let p=await _(()=>Qo(c));t(""),Jo(p)}async function r(c){c&&(t("restore"),await _(async()=>{let p=await Wd(c),d=Vo(p.json,p.files),u=d.counts;if(!await ue({title:"Backup einspielen?",text:`Das Backup vom ${d.exportedAt?Xe(d.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${u.companies} Unternehmen, ${u.customers} Kunden, ${u.services} Leistungen`,`${u.invoices} Rechnungen, ${u.quotes} Angebote, ${u.payments} Zahlungen`,`${u.expenses} Ausgaben, ${d.includesFiles?`${d.fileCount} Dateien (Belege, PDFs)`:"ohne Dateien"}`,...u.contracts?[`${u.contracts} Verträge`]:[],...u.appointments||u.notes||u.todos?[`${u.appointments||0} Termine, ${u.notes||0} Einträge in der Kundendokumentation, ${u.todos||0} To-dos`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let f=await Qd(p);M(f.missingFiles?`Backup eingespielt. ${f.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),Y("/")}),t(""))}let o=v.settings;return l`<${X} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${Cn} rows=${[["Letztes Backup",o.lastBackupAt?Xe(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${Ht(n.usage)}${n.quota?` von ${Ht(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${C} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${C} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Dateien<//>
      <${C} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${Zf} />
    <${He} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>_(()=>ut("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function jf(){let e=v.settings,[t,n]=D(e.aiApiKey||""),[a,s]=D(e.aiModel||Wt.aiModel),[i,r]=D(!1),[o,c]=D(""),p=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function d(){c("save");let m=await _(async()=>(await Gl({aiApiKey:t.trim(),aiModel:a.trim()||Wt.aiModel}),!0));c(""),m&&M("KI-Einstellungen gespeichert","good")}async function u(){c("test");let m=await _(()=>Bu({apiKey:t.trim(),model:a.trim()}));c(""),m&&M("Verbindung steht – der API-Key funktioniert.","good")}return l`<${X} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${xe} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${C} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${xe} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${m=>s(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${C} variant="primary" busy=${o==="save"} disabled=${!p} onClick=${d}>Speichern<//>
      <${C} busy=${o==="test"} disabled=${!t.trim()} onClick=${u}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${C} variant="ghost" icon="trash" onClick=${async()=>{n(""),await _(()=>ut("aiApiKey","")),M("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${He} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>_(()=>ut("shrinkImages",m))} />
  <//>`}function Wo({label:e,settingKey:t,hint:n}){let a=(Array.isArray(v.settings[t])?v.settings[t]:[]).join(`
`),[s,i]=D(a);ce(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(p=>p.trim()).filter(Boolean))];await _(async()=>(await ut(t,o),!0))&&M("Liste gespeichert","good")}return l`<div class="span-2">
    <${ie} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${C} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function Hf(){let e=v.settings,[t,n]=D("de"),[a,s]=D("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[p,d]=D(c.subject),[u,m]=D(c.body);ce(()=>{d(c.subject),m(c.body)},[t,a,v.version]);let f=p!==c.subject||u!==c.body,$=e.reminderDays||[7,14,21];async function y(){await _(async()=>{if(r){let g=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));g[t]={subject:p,body:u},await ut("appointmentTemplates",g)}else if(i){let g=JSON.parse(JSON.stringify(e.reminderTemplates||{}));g[t]={...g[t]||{},[o]:{subject:p,body:u}},await ut("reminderTemplates",g)}else{let g=JSON.parse(JSON.stringify(e.emailTemplates||{}));g[t]={...g[t]||{},[a]:{subject:p,body:u}},await ut("emailTemplates",g)}return!0})&&M("Vorlage gespeichert","good")}return l`<${X} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${xe} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${Tt.map((b,g)=>l`<label class="mini-field">
            <span>${b.label}</span>
            <${je} value=${$[g]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${b.label}: Tage nach Fälligkeit`}
              onChange=${h=>{let I=[...$];I[g]=h,_(()=>ut("reminderDays",I))}} />
          </label>`)}
        </div>
      <//>
      <${se} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...Tt.map(b=>({id:`r${b.id}`,label:b.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${xe} class="span-2" label="Sprache">
        <${Ct} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${q} class="span-6" label="Betreff" value=${p} onInput=${d} />
      <${ie} class="span-6" label="Text" value=${u} onInput=${m} rows=${9} />
    </div>
    ${f&&l`<div class="button-row"><${C} variant="primary" onClick=${y}>Vorlage speichern<//></div>`}
  <//>`}function Wf(){let[e,t]=D(""),n=v.customers.length||v.invoices.length||v.expenses.length||v.services.length;async function a(){t("demo");let r=await _(async()=>(await ir(),!0));t(""),r&&(M("Beispieldaten geladen","good"),Y("/"))}async function s(){if(!await ue({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Verträge, hochgeladene PDFs, Termine, Kundendokumentation, To-dos, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await _(async()=>(await Ed(),!0));t(""),o&&(M("Daten gelöscht","good"),Y("/"))}async function i(){let r=await ue({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){M("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await _(async()=>(await Jd(),await Bo(),!0));t(""),o&&(M("Alle Daten gelöscht","good"),Y("/"))}return l`<${X} title="Daten">
    ${v.settings.demoLoaded&&l`<${he} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${C} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${C} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${C} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var Qf=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function tm(){ge();let e=v.settings,[t,n]=D(e.userName||"");return ce(()=>{n(e.userName||"")},[e.userName]),l`
    <${ke} title="Einstellungen" />
    <div class="form-page">
      <${X} title="Profil und Darstellung">
        <div class="form-grid">
          <${xe} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${C} disabled=${t===(e.userName||"")} onClick=${async()=>{await _(async()=>(await ut("userName",t.trim()),!0))&&M("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${xe} class="span-2" label="Darstellung">
            <${Ct} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>_(()=>ut("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${Gf} />
      <${jf} />
      <${X} title="Auswahllisten">
        <div class="form-grid">
          <${Wo} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${Wo} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${Wo} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${Hf} />
      <${Wf} />
      <${X} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${Qf.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var Yo={invoices:"Rechnungen",quotes:"Angebote",customers:"Kontakte",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",todos:"To-dos",system:"System"},Jf={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",nextSteps:"Nächste Schritte",todos:"To-dos",due:"Fällig",done:"Erledigt",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function nm(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function Yf({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${Jf[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${nm(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${nm(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function am(){ge();let[e,t]=D(""),[n,a]=D(""),[s,i]=D(200),[r,o]=D(""),p=Se(()=>[...v.audit].sort((u,m)=>u.at<m.at?1:-1),[v.version]).filter(u=>(!n||u.entity===n)&&Te(e,u.action,u.label,u.user));function d(){Hi({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:p.map(u=>[u.at,u.user,u.action,Yo[u.entity]||u.entity,u.label,u.prev?JSON.stringify(u.prev):"",u.next?JSON.stringify(u.next):""])})}return l`
    <${ke} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${C} icon="download" disabled=${!p.length} onClick=${d}>CSV<//>
    <//>
    <div class="filters">
      <${yt} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(Yo).map(([u,m])=>l`<option value=${u}>${m}</option>`)}
      </select>
      <span class="filter-note">${p.length} ${p.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${p.length===0?l`<${fe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${p.slice(0,s).map(u=>l`<tr key=${u.id}>
              <td class="nw">${Xe(u.at)}</td>
              <td><span class="cell-main">${u.action}</span><div class="cell-sub">${Yo[u.entity]||u.entity}</div></td>
              <td>${u.label}</td>
              <td><${Yf} entry=${u} />
                ${u.entity==="invoices"&&u.prev&&u.prev.doc&&l`<${C} small icon="download" busy=${r===u.id}
                  onClick=${async()=>{o(u.id),await _(()=>Po(u)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${u.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${p.length>s&&l`<div class="button-row center"><${C} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var Xf=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/contracts",label:"Verträge",icon:"file"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kontakte",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/todos",label:"To-dos",icon:"check"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function eg(){let[e,t]=D(!1),n=ve(null),a=de(),s=re();ce(()=>{if(!e)return;let o=p=>{n.current&&!n.current.contains(p.target)&&t(!1)},c=p=>{p.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),_(()=>ut("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${ln(o.logoAssetId)?l`<img src=${ln(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
    <button type="button" class="switcher-btn" aria-haspopup="listbox" aria-expanded=${e} onClick=${()=>t(!e)}>
      ${r(a)}
      <span class="switcher-text">
        <span class="switcher-label">Unternehmen</span>
        <span class="switcher-name">${a?a.name:"Alle Unternehmen"}</span>
      </span>
      <${W} name="chevronDown" size=${16} />
    </button>
    ${e&&l`<div class="switcher-list" role="listbox" aria-label="Unternehmen wählen">
      <button type="button" role="option" aria-selected=${!a} class=${`switcher-item${a?"":" is-on"}`} onClick=${()=>i("all")}>
        ${r(null)}<span>Alle Unternehmen</span>${!a&&l`<${W} name="check" size=${16} />`}
      </button>
      ${s.map(o=>l`<button type="button" role="option" aria-selected=${a&&a.id===o.id} key=${o.id}
          class=${`switcher-item${a&&a.id===o.id?" is-on":""}`} onClick=${()=>i(o.id)}>
        ${r(o)}<span>${o.name}</span>${a&&a.id===o.id&&l`<${W} name="check" size=${16} />`}
      </button>`)}
      <a class="switcher-manage" href="#/companies" onClick=${()=>t(!1)}>Unternehmen verwalten</a>
    </div>`}
  </div>`}function or(e,t){let n=vn(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function tg(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kontakte",v.customers.filter(s=>Te(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:Z(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>Z(w("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",v.invoices.filter(s=>Te(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||or(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",v.quotes.filter(s=>Te(e,s.number,s.refNumber,s.title,a(s),(s.items||[]).map(i=>i.name).join(" "))||or(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${Je(s)}${s.source==="upload"?" (PDF)":""}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Verträge",v.contracts.filter(s=>Te(e,s.title,s.refNumber,a(s),s.notes,Yn(s).map(i=>i.name).join(" "))||Yn(s).some(i=>or(e,Ea(i)))).map(s=>({key:s.id,label:`${s.title}, ${a(s)||"ohne Kontakt"}`,sub:[s.refNumber,ls(s,i=>j(i,s.currency))].filter(Boolean).join(", "),href:`/contracts?open=${s.id}`}))),n("Termine",v.appointments.filter(s=>Te(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("To-dos",v.todos.filter(s=>Te(e,s.title,s.note,a(s))).sort((s,i)=>Number(s.done)-Number(i.done)).map(s=>({key:s.id,label:`${s.done?"✓ ":""}${s.title}`,sub:[a(s),s.due?`fällig ${s.due.split("-").reverse().join(".")}`:""].filter(Boolean).join(", "),href:s.customerId?`/customers/${s.customerId}`:"/todos"}))),n("Leistungen",v.services.filter(s=>Te(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:j(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",v.expenses.filter(s=>Te(e,s.vendor,s.description,s.invoiceNumber,s.category)||or(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${j(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",v.companies.filter(s=>Te(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function ng(){let[e,t]=D(""),[n,a]=D(!1),[s,i]=D(0),r=ve(null),o=ve(null),c=Se(()=>bn(e).trim().length>=2?tg(e):[],[e,v.version]),p=c.flatMap(f=>f.items);ce(()=>{let f=y=>{(y.metaKey||y.ctrlKey)&&y.key.toLowerCase()==="k"&&(y.preventDefault(),o.current&&o.current.focus())},$=y=>{r.current&&!r.current.contains(y.target)&&a(!1)};return document.addEventListener("keydown",f),document.addEventListener("mousedown",$),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",$)}},[]);function d(f){a(!1),t(""),o.current&&o.current.blur(),Y(f.href)}function u(f){f.key==="ArrowDown"?(f.preventDefault(),i($=>Math.min($+1,p.length-1))):f.key==="ArrowUp"?(f.preventDefault(),i($=>Math.max($-1,0))):f.key==="Enter"&&p[s]?(f.preventDefault(),d(p[s])):f.key==="Escape"&&(a(!1),f.target.blur())}let m=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${W} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kontakt, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${f=>{t(f.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${u} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&bn(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(f=>l`<div class="gsearch-group" key=${f.group}>
        <div class="gsearch-head">${f.group}</div>
        ${f.items.map($=>{m+=1;let y=m;return l`<button type="button" key=${$.key} class=${`gsearch-item${y===s?" is-active":""}`}
            onMouseEnter=${()=>i(y)} onMouseDown=${b=>{b.preventDefault(),d($)}}>
            <span>${$.label}</span><span class="cell-sub">${$.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function ag(){let e=v.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${Ct} label="Anzeigewährung" value=${e} onChange=${t=>_(()=>ut("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function sg(){let[e,t]=D(!1),n=v.settings.changesSinceBackup||0;async function a(){t(!0);let s=await _(()=>Qo(!0));t(!1),Jo(s)}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${W} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function ig({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${As} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${As} coll="invoices" id=${n} params=${s} />`:l`<${Ad} id=${n} />`:l`<${Td} params=${s} />`:t==="quotes"?n?n==="new"?l`<${As} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${As} coll="quotes" id=${n} params=${s} />`:l`<${Ud} id=${n} />`:l`<${Bd} />`:t==="customers"?n?l`<${dd} id=${n} />`:l`<${ud} />`:t==="appointments"?l`<${yd} params=${s} />`:t==="todos"?l`<${tu} />`:t==="contracts"?l`<${ad} key=${s.open||"list"} params=${s} />`:t==="services"?l`<${Fu} />`:t==="expenses"?l`<${ju} />`:t==="recurring"?l`<${Vu} />`:t==="finance"?l`<${Kd} />`:t==="reports"?l`<${Od} params=${s} />`:t==="companies"?n?l`<${qd} id=${n} />`:l`<${Fd} />`:t==="settings"?l`<${tm} />`:t==="audit"?l`<${am} />`:l`<${fe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${C} onClick=${()=>Y("/")}>Zum Dashboard<//><//>`:l`<${Nd} />`}function rg({route:e}){let[t,n]=kl(a=>{console.error(a)});return ce(()=>{t&&n()},[e.raw]),t?l`<${fe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${C} onClick=${()=>{n(),Y("/")}}>Zum Dashboard<//>
    <//>`:l`<${ig} key=${e.raw} route=${e} />`}function og(){ge();let e=Ql(),[t,n]=D(!1),a=de(),s=re();ce(()=>{n(!1)},[e.raw]),ce(()=>{let u=v.settings.theme;u==="light"||u==="dark"?document.documentElement.setAttribute("data-theme",u):document.documentElement.removeAttribute("data-theme")},[v.settings.theme]),ce(()=>{let u=m=>{if(Xl())return;let f=Wl(),$=v.settings.warnOnClose!==!1&&(v.settings.changesSinceBackup||0)>0;(f||$)&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[]);let[i,r]=D(!1);ce(()=>{let u=()=>r(!0);return window.addEventListener("bbc-db-replaced",u),()=>window.removeEventListener("bbc-db-replaced",u)},[]);let o=u=>u.exact?e.path===u.path:e.path===u.path||e.path.startsWith(`${u.path}/`),c=v.expenses.filter(u=>u.status==="review").length,p=Eo().length,d=Xc();return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(u=>l`<i key=${u.id} style=${`background:${u.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${Xf.map((u,m)=>l`<ul class="nav-group" key=${m}>
            ${u.map(f=>l`<li key=${f.path}>
              <a href=${`#${f.path}`} class=${`nav-link${o(f)?" is-active":""}`} aria-current=${o(f)?"page":void 0}>
                <${W} name=${f.icon} /><span>${f.label}</span>
                ${f.path==="/expenses"&&c>0&&l`<span class="nav-count" title="Belege zu prüfen">${c}</span>`}
                ${f.path==="/appointments"&&p>0&&l`<span class="nav-count" title="Termine nachbereiten">${p}</span>`}
                ${f.path==="/todos"&&d>0&&l`<span class="nav-count" title="Fällige To-dos">${d}</span>`}
              </a>
            </li>`)}
          </ul>`)}
        </nav>
        <p class="sidebar-note">Daten liegen lokal in diesem Browser.</p>
      </aside>
      <div class="main">
        <header class="topbar">
          <button type="button" class="nav-toggle" aria-label="Navigation öffnen" aria-expanded=${t} onClick=${()=>n(!t)}><${W} name="menu" size=${20} /></button>
          <${eg} />
          <${ng} />
          <div class="topbar-actions">
            <${Sd} />
            <${ag} />
            <${sg} />
            <${C} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{xa(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${v.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${rg} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${$d} />
    <${Dd} />
    <${lc} />
    <${cc} />
  `}async function lg(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await Fl(),await Cd()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",hr(l`<${og} />`,e),cg()}async function cg(){if(v.settings.appVersion===xr)return;let e={invoices:v.invoices.length,customers:v.customers.length,expenses:v.expenses.length,quotes:v.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await ut("appVersion",xr)}catch{}t&&!v.settings.demoLoaded&&M(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kontakte, ${e.expenses} Ausgaben. ${Rl}`,"good",15e3)}oc(e=>M(e,"bad",9e3));window.addEventListener("unhandledrejection",e=>{e.reason&&ka(e.reason)});lg();})();
