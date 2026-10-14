(()=>{var us,oe,jr,ba,Wr,_r,hu,os={},Qr=[],$u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function nn(e,t){for(var n in t)e[n]=t[n];return e}function Jr(e){var t=e.parentNode;t&&t.removeChild(e)}function pi(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?us.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return is(e,r,a,s,null)}function is(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++jr};return oe.vnode!=null&&oe.vnode(i),i}function ds(e){return e.children}function va(e,t){this.props=e,this.context=t}function Pn(e,t){if(t==null)return e.__?Pn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Pn(e):null}function Yr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Yr(e)}}function Mr(e){(!e.__d&&(e.__d=!0)&&ba.push(e)&&!ls.__r++||_r!==oe.debounceRendering)&&((_r=oe.debounceRendering)||Wr)(ls)}function ls(){for(var e;ls.__r=ba.length;)e=ba.sort(function(t,n){return t.__v.__b-n.__v.__b}),ba=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=nn({},i)).__v=i.__v+1,fi(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??Pn(i),i.__h),no(a,i),i.__e!=r&&Yr(i)))})}function Xr(e,t,n,a,s,i,r,o,c,p){var d,u,m,f,v,$,h,g=a&&a.__k||Qr,b=g.length;for(n.__k=[],d=0;d<t.length;d++)if((f=n.__k[d]=(f=t[d])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?is(null,f,null,null,f):Array.isArray(f)?is(ds,{children:f},null,null,null):f.__b>0?is(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(m=g[d])===null||m&&f.key==m.key&&f.type===m.type)g[d]=void 0;else for(u=0;u<b;u++){if((m=g[u])&&f.key==m.key&&f.type===m.type){g[u]=void 0;break}m=null}fi(e,f,m=m||os,s,i,r,o,c,p),v=f.__e,(u=f.ref)&&m.ref!=u&&(h||(h=[]),m.ref&&h.push(m.ref,null,f),h.push(u,f.__c||v,f)),v!=null?($==null&&($=v),typeof f.type=="function"&&f.__k!=null&&f.__k===m.__k?f.__d=c=eo(f,c,e):c=to(e,f,m,g,v,c),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=Pn(m))}for(n.__e=$,d=b;d--;)g[d]!=null&&(typeof n.type=="function"&&g[d].__e!=null&&g[d].__e==n.__d&&(n.__d=Pn(a,d+1)),so(g[d],g[d]));if(h)for(d=0;d<h.length;d++)ao(h[d],h[++d],h[++d])}function eo(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?eo(s,t,n):to(n,s,s,e.__k,s.__e,t));return t}function to(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function zr(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||$u.test(t)?n:n+"px"}function ss(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||zr(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||zr(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?Pr:Lr,i):e.removeEventListener(t,i?Pr:Lr,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Lr(e){this.l[e.type+!1](oe.event?oe.event(e):e)}function Pr(e){this.l[e.type+!0](oe.event?oe.event(e):e)}function fi(e,t,n,a,s,i,r,o,c){var p,d,u,m,f,v,$,h,g,b,C,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(p=oe.__b)&&p(t);try{e:if(typeof x=="function"){if(h=t.props,g=(p=x.contextType)&&a[p.__c],b=p?g?g.props.value:p.__:a,n.__c?$=(d=t.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(h,b):(t.__c=d=new va(h,b),d.constructor=x,d.render=vu),g&&g.sub(d),d.props=h,d.state||(d.state={}),d.context=b,d.__n=a,u=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),x.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=nn({},d.__s)),nn(d.__s,x.getDerivedStateFromProps(h,d.__s))),m=d.props,f=d.state,u)x.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(x.getDerivedStateFromProps==null&&h!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(h,b),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(h,d.__s,b)===!1||t.__v===n.__v){d.props=h,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(N){N&&(N.__=t)}),d.__h.length&&r.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(h,d.__s,b),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,f,v)})}d.context=b,d.props=h,d.state=d.__s,(p=oe.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(a=nn(nn({},a),d.getChildContext())),u||d.getSnapshotBeforeUpdate==null||(v=d.getSnapshotBeforeUpdate(m,f)),C=p!=null&&p.type===ds&&p.key==null?p.props.children:p,Xr(e,Array.isArray(C)?C:[C],t,n,a,s,i,r,o,c),d.base=t.__e,t.__h=null,d.__h.length&&r.push(d),$&&(d.__E=d.__=null),d.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=bu(n.__e,t,n,a,s,i,r,c);(p=oe.diffed)&&p(t)}catch(N){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),oe.__e(N,t,n)}}function no(e,t){oe.__c&&oe.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){oe.__e(a,n.__v)}})}function bu(e,t,n,a,s,i,r,o){var c,p,d,u=n.props,m=t.props,f=t.type,v=0;if(f==="svg"&&(s=!0),i!=null){for(;v<i.length;v++)if((c=i[v])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,i[v]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),i=null,o=!1}if(f===null)u===m||o&&e.data===m||(e.data=m);else{if(i=i&&us.call(e.childNodes),p=(u=n.props||os).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!o){if(i!=null)for(u={},v=0;v<e.attributes.length;v++)u[e.attributes[v].name]=e.attributes[v].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if((function($,h,g,b,C){var x;for(x in g)x==="children"||x==="key"||x in h||ss($,x,null,g[x],b);for(x in h)C&&typeof h[x]!="function"||x==="children"||x==="key"||x==="value"||x==="checked"||g[x]===h[x]||ss($,x,h[x],g[x],b)})(e,m,u,s,o),d)t.__k=[];else if(v=t.props.children,Xr(e,Array.isArray(v)?v:[v],t,n,a,s&&f!=="foreignObject",i,r,i?i[0]:n.__k&&Pn(n,0),o),i!=null)for(v=i.length;v--;)i[v]!=null&&Jr(i[v]);o||("value"in m&&(v=m.value)!==void 0&&(v!==e.value||f==="progress"&&!v)&&ss(e,"value",v,u.value,!1),"checked"in m&&(v=m.checked)!==void 0&&v!==e.checked&&ss(e,"checked",v,u.checked,!1))}return e}function ao(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){oe.__e(a,n)}}function so(e,t,n){var a,s;if(oe.unmount&&oe.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||ao(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){oe.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&so(a[s],t,typeof e.type!="function");n||e.__e==null||Jr(e.__e),e.__e=e.__d=void 0}function vu(e,t,n){return this.constructor(e,n)}function gi(e,t,n){var a,s,i;oe.__&&oe.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],fi(t,e=(!a&&n||t).__k=pi(ds,null,[e]),s||os,os,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?us.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),no(i,e)}us=Qr.slice,oe={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},jr=0,va.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=nn({},this.state),typeof e=="function"&&(e=e(nn({},n),this.props)),e&&nn(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Mr(this))},va.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Mr(this))},va.prototype.render=ds,ba=[],Wr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ls.__r=0,hu=0;var Kn,Xe,Kr,cs=0,di=[],Or=oe.__b,Fr=oe.__r,qr=oe.diffed,Zr=oe.__c,Vr=oe.unmount;function ya(e,t){oe.__h&&oe.__h(Xe,e,cs||t),cs=0;var n=Xe.__H||(Xe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return cs=1,yu(ro,e)}function yu(e,t,n){var a=ya(Kn++,2);return a.t=e,a.__c||(a.__=[n?n(t):ro(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=Xe),a.__}function ue(e,t){var n=ya(Kn++,3);!oe.__s&&$i(n.__H,t)&&(n.__=e,n.__H=t,Xe.__H.__h.push(n))}function hi(e,t){var n=ya(Kn++,4);!oe.__s&&$i(n.__H,t)&&(n.__=e,n.__H=t,Xe.__h.push(n))}function Re(e){return cs=5,ke(function(){return{current:e}},[])}function ke(e,t){var n=ya(Kn++,7);return $i(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function io(e){var t=ya(Kn++,10),n=k();return t.__=e,Xe.componentDidCatch||(Xe.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function wu(){di.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(rs),e.__H.__h.forEach(mi),e.__H.__h=[]}catch(t){e.__H.__h=[],oe.__e(t,e.__v)}}),di=[]}oe.__b=function(e){Xe=null,Or&&Or(e)},oe.__r=function(e){Fr&&Fr(e),Kn=0;var t=(Xe=e.__c).__H;t&&(t.__h.forEach(rs),t.__h.forEach(mi),t.__h=[])},oe.diffed=function(e){qr&&qr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(di.push(t)!==1&&Kr===oe.requestAnimationFrame||((Kr=oe.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),Gr&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);Gr&&(a=requestAnimationFrame(s))})(wu)),Xe=void 0},oe.__c=function(e,t){t.some(function(n){try{n.__h.forEach(rs),n.__h=n.__h.filter(function(a){return!a.__||mi(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],oe.__e(a,n.__v)}}),Zr&&Zr(e,t)},oe.unmount=function(e){Vr&&Vr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(rs)}catch(n){oe.__e(n,t.__v)}};var Gr=typeof requestAnimationFrame=="function";function rs(e){var t=Xe;typeof e.__c=="function"&&e.__c(),Xe=t}function mi(e){var t=Xe;e.__c=e.__(),Xe=t}function $i(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function ro(e,t){return typeof t=="function"?t(e):t}var oo=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,oo(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},Hr=new Map,l=function(e){var t=Hr.get(this);return t||(t=new Map,Hr.set(this,t)),(t=oo(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],p=function(m){i===1&&(m||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,r):i===3&&(m||r)?(c.push(3,m,r),i=2):i===2&&r==="..."&&m?c.push(4,m,0):i===2&&r&&!m?c.push(5,0,!0,r):i>=5&&((r||!m&&i===5)&&(c.push(i,0,r,s),i=6),m&&(c.push(i,m,0,s),i=6)),r=""},d=0;d<n.length;d++){d&&(i===1&&p(),p(d));for(var u=0;u<n[d].length;u++)a=n[d][u],i===1?a==="<"?(p(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(p(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[d][u+1]===">")?(p(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(p(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return p(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(pi);var We=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),De=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),wn=e=>String(e).padStart(2,"0");function On(e){return`${e.getFullYear()}-${wn(e.getMonth()+1)}-${wn(e.getDate())}`}var Z=()=>On(new Date),ne=()=>new Date().toISOString();function we(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function wa(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Ce(e,t){let n=wa(e);return n.setDate(n.getDate()+Number(t||0)),On(n)}function qt(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),p=(o%12+12)%12,d=new Date(c,p+1,0).getDate();return`${c}-${wn(p+1)}-${wn(Math.min(r,d))}`}function sn(e,t){let n=wa(t).getTime()-wa(e).getTime();return Math.round(n/864e5)}var ms=e=>Number(e.slice(0,4)),lo=e=>Number(e.slice(5,7)),xa=e=>e.slice(0,7),co=e=>Math.floor((lo(e)-1)/3)+1,uo=e=>`${ms(e)}-Q${co(e)}`;function bi(e,t){let n=`${e}-${wn(t+1)}-01`,a=On(new Date(e,t+1,0));return{from:n,to:a}}function vi(e,t){let n=`${e}-${wn((t-1)*3+1)}-01`,a=On(new Date(e,t*3,0));return{from:n,to:a}}var xn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function ut(e,t=Z(),n={}){let a=ms(t),s=lo(t)-1,i=co(t);switch(e){case"month":return bi(a,s);case"lastMonth":return s===0?bi(a-1,11):bi(a,s-1);case"quarter":return vi(a,i);case"lastQuarter":return i===1?vi(a-1,4):vi(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:we(n.from)?n.from:"0000-01-01",to:we(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var Zt=(e,t)=>!!e&&e>=t.from&&e<=t.to;function mo(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${wn(o+1)}`}return n}function po(e,t=Z()){let n=[];for(let a=e-1;a>=0;a--)n.push(qt(t.slice(0,7)+"-01",-a).slice(0,7));return n}var xu=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ku=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],At=e=>`${xu[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,Fn=e=>ku[Number(e.slice(5,7))-1];function ps(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",p=c==="."?",":".";r=n.split(p).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var an=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Te(e,...t){let n=an(e).trim();if(!n)return!0;let a=an(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function Vt(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function Gt(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function qn(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var yi=3,fo="bbc-finance",wi="2026-10-14",go="Neu: To-dos mit Fälligkeit (bei Kontakten, aus Terminen, im Dashboard) und Nachfrage nach abgelaufenen Terminen.",it=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes","todos"],Zn="USD";var et=["USD","EUR"],fs=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],xt=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],ka={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},xi={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},Du=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],Su=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],Cu=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],Vn=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],kn=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],ht=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Rt={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:Du,serviceCategories:Su,paymentMethods:Cu,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},Bt=()=>({id:We(),createdAt:ne(),updatedAt:ne()});function Da(e={}){return{...Bt(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:Zn,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var Gn=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],ki=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],Hn={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},gs=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],hs=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],rt=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function $s(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...Bt(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:Z(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||rt(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function Sa(e={}){return{...Bt(),title:"",due:"",customerId:"",companyId:"",appointmentId:"",note:"",done:!1,doneAt:null,...e}}function ho(e={}){return{...Bt(),customerId:"",companyId:"",date:Z(),kind:"note",title:"",text:"",...e}}var $o=[{id:"customer",label:"Kunde"},{id:"contact",label:"Kontakt"}],Ee=e=>!e||e.kind!=="contact";function rn(e={}){return{...Bt(),kind:"customer",number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function on(e={}){return{...Bt(),name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:Zn,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function Ca(e={}){return{id:We(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function kt(e,t={}){let n=Z();return{...Bt(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:Zn,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function jn(e,t={}){let n=Z();return{...Bt(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:Zn,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function Ea(e={}){return{...Bt(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:Z(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:Zn,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function Wn(e,t={}){return{...Bt(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:Z(),nextDate:Z(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:Zn,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function G(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function dt(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var Eu=3,Ia=null,ln=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),Iu=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function Qn(e){return e==="counters"||e==="settings"?"key":"id"}var Dt=[...it,"settings","blobs"];function Di(){return Ia||(Ia=new Promise((e,t)=>{let n=indexedDB.open(fo,Eu);n.onupgradeneeded=()=>{let a=n.result;for(let s of Dt){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:Qn(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),Ia=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),Ia)}async function Jn(e){let t=await Di();return ln(t.transaction(e,"readonly").objectStore(e).getAll())}async function bo(e,t){let n=await Di();return ln(n.transaction(e,"readonly").objectStore(e).get(t))}async function Dn(e,t){let a=(await Di()).transaction(e,"readwrite"),s=Iu(a),i={get:(o,c)=>ln(a.objectStore(o).get(c)),put:(o,c)=>ln(a.objectStore(o).put(c)),del:(o,c)=>ln(a.objectStore(o).delete(c)),byIndex:(o,c,p)=>ln(a.objectStore(o).index(c).get(p)),allByIndex:(o,c,p)=>ln(a.objectStore(o).index(c).getAll(p)),clear:o=>ln(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function vo(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function yo(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var y={ready:!1,version:0,settings:De(Rt)},Ut={};for(let e of it)y[e]=[],Ut[e]=new Map;var ys=new Set;function xo(e){return ys.add(e),()=>ys.delete(e)}var bs=0,Si=!1;function ko(){if(y.version+=1,vs.clear(),bs){Si=!0;return}for(let e of ys)e(y.version)}async function Do(e){bs+=1;try{return await e()}finally{if(bs-=1,!bs&&Si){Si=!1;for(let t of ys)t(y.version)}}}var Sn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(Sn=new BroadcastChannel("bbc-finance-sync"),Sn.onmessage=e=>{e.data==="changed"&&Cn()})}catch{Sn=null}var wo=new Set(it.filter(e=>e!=="rates"));async function Cn(){let e=await Promise.all([...it,"settings"].map(n=>Jn(n)));it.forEach((n,a)=>{Ut[n]=new Map(e[a].map(s=>[s[Qn(n)],s])),y[n]=e[a]});let t=De(Rt);for(let n of e[it.length])Object.hasOwn(Rt,n.key)&&(t[n.key]=n.value);y.settings=t,y.ready=!0,ko()}async function So(){await Cn(),yo()}var Be=e=>y[e],w=(e,t)=>t?Ut[e].get(t):void 0,vs=new Map;function Co(e,t){return vs.has(e)||vs.set(e,t()),vs.get(e)}function Eo(e,t){return Co(`group:${e}:${t}`,()=>{let n=new Map;for(let a of y[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var Io=Object.freeze([]),Ve=e=>Eo("payments","invoiceId").get(e)||Io,cn=e=>Eo("reminders","invoiceId").get(e)||Io,Ht=e=>e&&Ut.assets.get(e)?Ut.assets.get(e).dataUrl:"",de=()=>Co("activeCompanies",()=>y.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function pe(){let e=y.settings.activeCompany;if(!e||e==="all")return null;let t=w("companies",e);return t&&!t.archived?t:null}function Ge(e){let t=pe();return!t||e.companyId===t.id}function Nu({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:We(),at:ne(),user:y.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function W(e){let t=[],n=!1,a={},s=await Dn(Dt,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(p,d){return t.push({store:p,value:d}),wo.has(p)&&p!=="audit"&&(n=!0),r.put(p,d)},del(p,d){return t.push({store:p,id:d,del:!0}),wo.has(p)&&(n=!0),r.del(p,d)},clear(p){return t.push({store:p,clear:!0}),r.clear(p)},blobPut:(p,d)=>r.put("blobs",{id:p,blob:d}),blobDel:p=>r.del("blobs",p),audit(p){let d=Nu(p);return t.push({store:"audit",value:d}),r.put("audit",d)},setting(p,d){return a[p]=d,r.put("settings",{key:p,value:d})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let p=await r.get("settings","changesSinceBackup"),d=p&&Number(p.value)||0;a.changesSinceBackup=d+1,await r.put("settings",{key:"changesSinceBackup",value:d+1})}return c}),i=new Set;for(let r of t)Ut[r.store]&&(r.clear?Ut[r.store]=new Map:r.del?Ut[r.store].delete(r.id):Ut[r.store].set(r.value[Qn(r.store)],r.value),i.add(r.store));for(let r of i)y[r]=[...Ut[r].values()];if(Object.keys(a).length&&(y.settings={...y.settings,...a}),ko(),Sn)try{Sn.postMessage("changed")}catch{}return s}function Na(){if(Sn)try{Sn.postMessage("changed")}catch{}}async function tt(e,t){return W(n=>n.setting(e,t))}async function No(e){return W(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=k(y.version);return ue(()=>xo(t=>e(t)),[]),y}var Ei=new Set,En=null,Ta=Ao(),Ci=!1;function Ao(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function Ii(){if(Ci){Ci=!1;return}let e=Ao();if(e.raw!==Ta.raw){if(En){if(!await En()){Ci=!0,location.hash=Ta.raw;return}En=null}Ta=e;for(let t of Ei)t(Ta);window.scrollTo(0,0)}}window.addEventListener("hashchange",Ii);function Y(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),Ii()):location.hash===n?Ii():location.hash=e}function un(e){En=null,Y(e)}function xs(e){En=e}function Nn(){En=null}var Ro=()=>!!En;function Bo(){let[e,t]=k(Ta);return ue(()=>(Ei.add(t),()=>Ei.delete(t)),[]),e}var Tu=0,ws=new Set,In=[];function R(e,t="info",n){let a=++Tu;In=[...In,{id:a,message:String(e),tone:t}].slice(-3),ws.forEach(s=>s(In)),setTimeout(()=>Ai(a),n||(t==="bad"?9e3:4500))}function Ai(e){In=In.filter(t=>t.id!==e),ws.forEach(t=>t(In))}function Uo(){let[e,t]=k(In);return ue(()=>(ws.add(t),()=>ws.delete(t)),[]),e}var _o=0;function Yn(e=2e3){_o=Date.now()+e}var Mo=()=>Date.now()<_o;function Xn(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?R("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?R("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):R(t,"bad")}async function B(e){try{return await e()}catch(t){Xn(t);return}}var Ni=new Set,Ti=null;function To(e){Ti=e,Ni.forEach(t=>t(Ti))}function zo(){let[e,t]=k(Ti);return ue(()=>(Ni.add(t),()=>Ni.delete(t)),[]),e}var Au=0;function le(e){return new Promise(t=>{To({...e,id:++Au,resolve:n=>{To(null),t(n)}})})}var ks=()=>le({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var Ru={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2"};function te({name:e,size:t=18,class:n=""}){let a=Ru[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function Ri(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function Ss(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var Cs=e=>Ss(e,100);var Bu=e=>Ss(e,1e3),Po=e=>Ss(e,100),Lo=e=>Ss(e,1e3);function Bi(e){let t=Bu(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(Po(e.discountPct),0),1e4);return Ri(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function St(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(m=>BigInt(Math.round(m))),s=a.reduce((m,f)=>m+f,0n);if(s===0n&&(a=a.map(m=>m<0n?-m:m),s=a.reduce((m,f)=>m+f,0n),s===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let i=m=>m<0n?-m:m,r=i(s),o=s<0n?a.map(m=>-m):a,c=i(n),p=[],d=[];o.forEach((m,f)=>{let v=c*m,$=v/r,h=v%r;h<0n&&($-=1n,h+=r),p.push($),d.push({i:f,r:h})});let u=c-p.reduce((m,f)=>m+f,0n);d.sort((m,f)=>m.r===f.r?m.i-f.i:m.r>f.r?-1:1);for(let m=0;u>0n&&m<d.length;m++,u-=1n)p[d[m].i]+=1n;return n<0n?p.map(m=>Number(-m)||0):p.map(m=>Number(m)||0)}function Ct(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:Bi(m)})),a=n.reduce((m,f)=>m+f.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let m=Math.min(Po(r),1e4);s=Ri(BigInt(a)*BigInt(m),10000n)}let o=new Map;for(let m of n){let f=Lo(m.taxRate),v=o.get(f)||{rate:m.taxRate,rateMilli:f,subtotalCents:0};v.subtotalCents+=m.cents,o.set(f,v)}let c=[...o.values()].sort((m,f)=>m.rateMilli-f.rateMilli),p=St(s,c.map(m=>m.subtotalCents)),d=0;c.forEach((m,f)=>{m.discountCents=p[f]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=Ri(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),d+=m.taxCents});for(let m of c){let f=n.filter($=>Lo($.taxRate)===m.rateMilli),v=St(m.discountCents,f.map($=>$.cents));f.forEach(($,h)=>{$.netCents=$.cents-(v[h]||0)})}let u=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:u,taxCents:d,totalCents:u+d,taxGroups:c.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var Ds=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function Uu(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function jt(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?Ds(e*s):null;if(t==="EUR"&&n==="USD")return i?Ds(e/s):null;let r=Uu(t,a);if(r==null)return null;let o=e*r;return n==="USD"?Ds(o):n==="EUR"&&i?Ds(o*s):null}var mt=(e,t,n)=>jt(e,t,"USD",n),Et=(e,t,n)=>jt(e,t,"EUR",n);function _t(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var Ae=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function Mt(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=Ae(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function Wt(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-Ae(t),0)}var Ui=e=>e.status!=="draft"&&e.status!=="cancelled";function Tn(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var dn={de:"de-DE",en:"en-US"},_i=new Map;function ea(e,t){let n=e+JSON.stringify(t);return _i.has(n)||_i.set(n,new Intl.NumberFormat(e,t)),_i.get(n)}function H(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return ea(dn[n]||dn.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function Aa(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?ea("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):ea("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function ta(e,t,n){let a=H(e,t,n);return n==="en"?`${a} ${t}`:a}function An(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":ea(dn[t]||dn.de,{maximumFractionDigits:n}).format(Number(e))}function $t(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${ea(dn[t]||dn.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function na(e,t="de"){return Number.isFinite(Number(e))?ea(dn[t]||dn.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function Oo(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Fo(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function V(e,t="de"){if(!e)return"";let n=wa(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function He(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var qo={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},Ko={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},Es=(e,t)=>t==="en"&&Ko[e]?Ko[e]:e||"",bt=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);var _u=0,Rn=(e="f")=>ke(()=>`${e}-${++_u}`,[]);function E({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:p="",...d}){let u=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${p?` ${p}`:""}`;return l`<button type=${s} class=${u} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${d}>
    ${t&&l`<${te} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function xe({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function F({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=Rn();return l`<${xe} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${p=>s&&s(p.target.value)} ...${o} />
  <//>`}function re({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,...r}){let o=Rn();return l`<${xe} label=${e} hint=${t} class=${i} htmlFor=${o}>
    <textarea id=${o} class="input textarea" rows=${s} value=${n??""} onInput=${c=>a&&a(c.target.value)} ...${r}></textarea>
  <//>`}function ce({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let p=Rn();return l`<${xe} label=${e} hint=${t} error=${n} class=${r} htmlFor=${p}>
    <select id=${p} class="input select" value=${a??""} onChange=${d=>s&&s(d.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(d=>{let u=typeof d=="object"?d:{id:d,label:d};return l`<option value=${u.id} selected=${String(u.id)===String(a??"")}>${u.label}</option>`})}
    </select>
  <//>`}function Ye({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...p}){let d=C=>C==null||C===""?"":n==="money"?Oo(C):Fo(C,a),[u,m]=k(d(e)),[f,v]=k(!1),[$,h]=k(!1);ue(()=>{f||m(d(e))},[e,f]);function g(C){if(String(C).trim()===""){h(!1),t(r?null:0);return}let x=ps(C,{decimalOnly:n!=="money"});if(Number.isNaN(x)){h(!0);return}s!=null&&x<s&&(x=s),i!=null&&x>i&&(x=i),h(!1),t(n==="money"?Cs(x):Number(x.toFixed(a)))}let b=l`<input class=${`input num ${$?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${u}
    onFocus=${C=>{v(!0),C.target.select()}}
    onInput=${C=>{m(C.target.value),g(C.target.value)}}
    onBlur=${C=>{v(!1),g(C.target.value)}}
    aria-invalid=${$} ...${p} />`;return c?l`<span class="input-wrap">${b}<span class="input-suffix">${c}</span></span>`:b}function Ue({label:e,hint:t,error:n,class:a,...s}){let i=Rn();return l`<${xe} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${Ye} id=${i} ...${s} />
  <//>`}function qe({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=Rn();return l`<${xe} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function je({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=Rn("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function pt({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function zt({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:p,label:d,id:u,disabled:m}){let f=Rn("cb"),v=u||f,$=e.find(K=>K.id===t),[h,g]=k(!1),[b,C]=k(""),[x,N]=k(0),_=Re(null),S=Re(null),j=r?o??"":h?b:$?$.label:"",A=ke(()=>{let K=an(r?h?o:"":b).trim();return(K?e.filter(J=>an(`${J.label} ${J.sub||""} ${J.search||""}`).includes(K)):e).slice(0,50)},[e,b,o,h,r]);ue(()=>{if(!h)return;let K=P=>{_.current&&!_.current.contains(P.target)&&(g(!1),C(""))};return document.addEventListener("mousedown",K),()=>document.removeEventListener("mousedown",K)},[h]),ue(()=>{p&&S.current&&S.current.focus()},[]);let D=s&&!r,U=A.length+(D?1:0);function M(K){n(K.id,K),g(!1),C("")}function I(K){if(K.key==="ArrowDown")K.preventDefault(),g(!0),N(P=>Math.min(P+1,U-1));else if(K.key==="ArrowUp")K.preventDefault(),N(P=>Math.max(P-1,0));else if(K.key==="Enter"){if(!h)return;if(r&&!A.length){g(!1);return}K.preventDefault(),x<A.length?M(A[x]):D&&(s(b),g(!1),C(""))}else K.key==="Escape"?h&&(K.stopPropagation(),g(!1),C("")):K.key==="Tab"&&(g(!1),C(""))}return l`<div class="combo" ref=${_}>
    <input ref=${S} id=${v} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${h} aria-label=${d} aria-autocomplete="list" disabled=${m}
      placeholder=${h&&$&&!r?$.label:a} value=${j}
      onClick=${()=>{g(!0),N(0)}}
      onInput=${K=>{g(!0),N(0),r?c(K.target.value):C(K.target.value)}}
      onKeyDown=${I} />
    ${!r&&l`<span class="combo-caret"><${te} name="chevronDown" size=${16} /></span>`}
    ${h&&U>0&&l`<ul class="combo-list" role="listbox">
      ${A.map((K,P)=>l`<li role="option" aria-selected=${P===x}
          class=${`combo-item${P===x?" is-active":""}${K.id===t?" is-selected":""}`}
          onMouseEnter=${()=>N(P)}
          onMouseDown=${J=>{J.preventDefault(),M(K)}}>
          <span class="combo-label">${K.label}</span>
          ${K.sub&&l`<span class="combo-sub">${K.sub}</span>`}
        </li>`)}
      ${D&&l`<li role="option" class=${`combo-item combo-create${x===A.length?" is-active":""}`}
          onMouseEnter=${()=>N(A.length)}
          onMouseDown=${K=>{K.preventDefault(),s(b),g(!1),C("")}}>
          <${te} name="plus" size=${16} />
          <span>${b.trim()?`„${b.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${h&&U===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var Mu={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function _e({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${te} name=${n||Mu[e]||"info"} size=${14} />${t}
  </span>`}function ve({title:e,sub:t,back:n,children:a}){return l`<header class="page-head">
    <div class="page-head-text">
      ${n&&l`<a class="back-link" href=${n.href}><${te} name="chevronLeft" size=${16} />${n.label}</a>`}
      <h1>${e}</h1>
      ${t&&l`<p class="page-sub">${t}</p>`}
    </div>
    ${a&&l`<div class="page-actions">${a}</div>`}
  </header>`}function fe({icon:e="file",title:t,text:n,children:a}){return l`<div class="empty">
    <div class="empty-icon"><${te} name=${e} size=${26} /></div>
    <h3>${t}</h3>
    ${n&&l`<p>${n}</p>`}
    ${a&&l`<div class="empty-actions">${a}</div>`}
  </div>`}function Q({title:e,action:t,children:n,class:a="",flush:s}){return l`<section class=${`panel ${a}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${s?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function Ne({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${te} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function Is({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function ft({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=k(!1),o=Re(null);ue(()=>{if(!i)return;let p=u=>{o.current&&!o.current.contains(u.target)&&r(!1)},d=u=>{u.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",d)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${E} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(p=>l`<button type="button" role="menuitem" class=${`menu-item${p.danger?" is-danger":""}`} disabled=${p.disabled}
        onClick=${()=>{r(!1),p.onClick()}}>
        ${p.icon&&l`<${te} name=${p.icon} size=${16} />`}<span>${p.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function Oe({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=Re(null);ue(()=>{let c=document.activeElement,p=r.current;if(p){let u=p.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");u&&u.focus()}let d=u=>{if(u.key==="Escape"&&(u.stopPropagation(),t()),u.key==="Tab"&&p){let m=[...p.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter($=>$.offsetParent!==null);if(!m.length)return;let f=m[0],v=m[m.length-1];u.shiftKey&&document.activeElement===f?(u.preventDefault(),v.focus()):!u.shiftKey&&document.activeElement===v&&(u.preventDefault(),f.focus())}};return document.addEventListener("keydown",d),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",d),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${E} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function Zo(){let e=zo();return e?l`<${zu} key=${e.id} d=${e} />`:null}function zu({d:e}){let[t,n]=k(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${Oe} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${E} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${E} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${re} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${F} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function Vo(){let e=Uo();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${te} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>Ai(t.id)}><${te} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function ot({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,p]=k(s||null),d=ke(()=>{if(!c)return t;let m=e.find(v=>v.key===c.key);if(!m||!m.sort)return t;let f=c.dir==="desc"?-1:1;return[...t].sort((v,$)=>{let h=m.sort(v),g=m.sort($);return h==null&&g==null?0:h==null?1:g==null?-1:typeof h=="number"&&typeof g=="number"?(h-g)*f:String(h).localeCompare(String(g),"de",{numeric:!0})*f})},[t,c,e]);if(!t.length&&r)return r;let u=m=>{m.sort&&p(f=>f&&f.key===m.key?{key:m.key,dir:f.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
    <table class="table">
      <thead><tr>
        ${e.map(m=>l`<th class=${`${m.align==="right"?"r":""} ${m.class||""}`} style=${m.width?`width:${m.width}`:""}
            aria-sort=${c&&c.key===m.key?c.dir==="asc"?"ascending":"descending":void 0}>
          ${m.sort?l`<button type="button" class="th-btn" onClick=${()=>u(m)}>${m.label}
                ${c&&c.key===m.key&&l`<${te} name=${c.dir==="asc"?"arrowUp":"arrowDown"} size=${13} />`}</button>`:m.label}
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
  </div>`}function Lt({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function vt({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${te} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Me({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function mn({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var Lu=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function Mi(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return Lu.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var zi=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),Pu=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function Ku(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function yt(e,t,n={}){let a=Ku(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||w("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||w("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=qo[o],p=e.currency||"USD",d=!s&&e.totals?e.totals:Ct(e),u=z=>H(z,p,o),m=[i.name,zi(i),Mi(i)].filter(Boolean).join(" · "),f=[];if(r){let z=dt(r);r.company&&f.push(r.company),z&&z!==r.company&&f.push(z);let Ie=zi(r);Ie&&f.push(Ie);let Ke=Mi(r);Ke&&f.push(Ke),r.country&&!Pu(r.country,i.country)&&f.push(r.country)}let v=[];r&&r.vatId&&v.push(`${c.vatId}: ${r.vatId}`);let $=e.number||n.previewNumber||"",h=[];h.push([c[`number_${a}`],$||`(${c.draft})`]),h.push([c[`date_${a}`],V(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?h.push([c.servicePeriod,`${V(e.serviceDate,o)} – ${V(e.serviceDateEnd,o)}`]):h.push([c.serviceDate,V(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&h.push([c.dueDate,V(e.dueDate,o)]),a==="quote"&&e.validUntil&&h.push([c.validUntil,V(e.validUntil,o)]),r&&r.number&&r.kind!=="contact"&&h.push([c.customerNo,r.number]);let g="";if(a==="credit_note"&&e.relatedInvoiceId){let z=w("invoices",e.relatedInvoiceId);z&&(g=bt(c.refInvoice,{NUMBER:z.number,DATE:V(z.issueDate,o)}))}let b=e.items||[],C=b.some(z=>Number(z.discountPct)>0),N=new Set(b.map(z=>Number(z.taxRate)||0)).size>1,_=new Map(d.lines.map(z=>[z.id,z])),S=b.map((z,Ie)=>({pos:String(Ie+1),name:z.name||"",description:z.description||"",qty:An(z.qty,o,3),unit:Es(z.unit,o),price:u(z.priceCents),discount:Number(z.discountPct)>0?$t(z.discountPct,o):"",tax:$t(Number(z.taxRate)||0,o),amount:u(_.has(z.id)?_.get(z.id).cents:0)})),j=String(i.taxLabel||"").trim()||c.taxDefault,A=d.taxGroups.filter(z=>Number(z.rate)!==0),D=[],U=d.discountCents!==0;if((U||A.length)&&D.push({label:c.subtotal,value:u(d.subtotalCents)}),U){let z=e.discount||{},Ie=z.type==="abs"?c.discount:`${c.discount} ${$t(z.value,o)}`;D.push({label:Ie,value:u(-d.discountCents)}),A.length&&D.push({label:c.net,value:u(d.netCents)})}for(let z of A){let Ie=A.length>1?` (${u(z.netCents)})`:"";D.push({label:`${j} ${$t(z.rate,o)}${Ie}`,value:u(z.taxCents)})}D.push({label:c[`total_${a}`]||c.total,value:ta(d.totalCents,p,o),strong:!0});let M=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(p==="USD"||p==="EUR")){let z=p==="USD"?"EUR":"USD",Ie=jt(d.totalCents,p,z,e.fx);if(Ie!=null){let Ke=p==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);M={line:`${c.approx} ${ta(Ie,z,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${p} = ${na(Ke,o)} ${z}`}}}let I=[];a==="invoice"&&e.dueDate&&I.push(bt(c.dueLine,{DATE:V(e.dueDate,o)})),a==="quote"&&e.validUntil&&I.push(bt(c.validLine,{DATE:V(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&I.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&I.push(i.taxNote.trim());let K=null;if(a==="invoice"){let z=[];i.accountHolder&&z.push([c.holder,i.accountHolder]),i.bankName&&z.push([c.bank,i.bankName]),i.iban&&z.push(["IBAN",i.iban]),i.bic&&z.push(["BIC",i.bic]);let Ie=[i.altBank,i.otherPayment].map(Ke=>String(Ke||"").trim()).filter(Boolean);(z.length||Ie.length)&&(K={title:c.payment,rows:z,extra:Ie})}let P=[i.name,zi(i),Mi(i),i.country].filter(Boolean),J=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),L=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),ae=G(r),me=$?`${$} ${ae}`:`${c.draft} ${c[a]} ${ae}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:Ht(i.logoAssetId),companyName:i.name||"",title:c[a],number:$,subtitle:g,draftMark:s?c.draftMark:"",senderLine:m,recipient:f,recipientExtra:v,meta:h,intro:String(e.intro||"").trim(),columns:{discount:C,tax:N},labels:c,rows:S,sums:D,secondary:M,notes:I,payment:K,footerCols:[P,J,L].filter(z=>z.length),footerText:String(e.footer||"").trim(),fileName:`${Gt(me)}.pdf`}}var Ou=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function Go(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))Ou.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var Fu=8e3;async function qu(e){let t=new AbortController,n=setTimeout(()=>t.abort(),Fu);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var Li=e=>Number.isFinite(Number(e))&&Number(e)>0,Pi={frankfurterV2(e,t,n){if(!e||!Li(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!Li(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!Li(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function Zu(e,t,n){let a=n&&n<Z(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:Pi.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:Pi.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Pi.erApi}),s}async function Ho(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||Z(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<Z()?n:Z(),s=Vu(e,t,a);if(s)return s;let i=null;for(let o of Zu(e,t,n))try{let c=await qu(o.url),p=o.parse(c,e,t),d={id:`${e}_${t}_${a}`,base:e,quote:t,rate:p.rate,date:p.date||a,requestedDate:a,fetchedAt:ne(),source:p.source};return await W(u=>u.put("rates",d)).catch(()=>{}),d}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function Bn(e){let t=Z();return e&&e<t?e:t}function Vu(e,t,n){let a=`${e}_${t}_${n}`,s=Be("rates").find(i=>i.id===a);return!s||n===Z()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function Ki(e,t){let n=Be("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function Ra(e,t){let n=await Ho("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await Ho(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:Bn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var Gu=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],Hu={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function Pt(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!Gu.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function ju(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function Un(e,t,n,a){return`${e}:${t}:${ju(n,a)}`}function Oi(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function It(e,t){let n=Hu[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function Fi(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=It(e,t),c=Pt(r);if(c)throw new Error(c);let p=Number(a)||0;for(let d=0;d<1e5;d++){p+=1;let u=Oi(r,{prefix:i,dateISO:n,n:p,digits:o});if(!await s(u))return{number:u,n:p}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var be=e=>({...e,updatedAt:ne()}),ye=class extends Error{},q=e=>{throw new ye(e)},Jo={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},aa=e=>we(e)&&e>="2000-01-01"&&e<="2100-12-31";async function Ba(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=Pt(e[r]);o&&q(o)}String(e.name||"").trim()||q("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&q("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of Be("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=It(e,o),p=It(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===p.pattern&&String(c.prefix).trim().toLowerCase()===String(p.prefix).trim().toLowerCase()&&q(`${r.name} verwendet für ${Jo[o]} bereits das Präfix „${p.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=w("companies",e.id),a=be(e),s=null;t&&(s={id:await Wu(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=Vt(n,a,["updatedAt","createdAt"]);return await W(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function Yo(e,t){let n=w("companies",e);if(!n)return;let a=be({...n,archived:t});await W(async s=>{await s.put("companies",a),t&&y.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function Zi(e){return Be("invoices").some(t=>t.companyId===e)||Be("quotes").some(t=>t.companyId===e)||Be("expenses").some(t=>t.companyId===e)||Be("recurring").some(t=>t.companyId===e)}async function Xo(e){let t=w("companies",e);t&&(Zi(e)&&q("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await W(async n=>{await n.del("companies",e),y.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:Vi(t)})}))}async function Wu(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+We()}var Vi=e=>{let t=De(e);return delete t.snapshot,t},el={customer:"K",contact:"KO"},jo=e=>Ee(e)?"customer":"contact",tl=(e,t)=>new RegExp(`^${el[e]}-\\d+$`).test(String(t||""));function pn(e="customer",t=Be("customers")){let n=el[e]||"K",a=new RegExp(`^${n}-(\\d+)$`),s=0;for(let i of t)for(let r of[i.number,...i.formerNumbers||[]]){let o=a.exec(r||"");o&&(s=Math.max(s,Number(o[1])))}return`${n}-${String(s+1).padStart(4,"0")}`}async function Ua(e){G(e)||q("Bitte ein Unternehmen oder einen Namen eintragen.");let t=w("customers",e.id),n=be({...e,kind:jo(e)}),a=t?jo(t):n.kind;t&&a==="customer"&&n.kind==="contact"&&Be("invoices").some(o=>o.customerId===n.id)&&q("Für diesen Kunden gibt es Rechnungen. Er bleibt Kunde."),t&&a!==n.kind&&tl(a,t.number)&&(!String(n.number||"").trim()||n.number===t.number)&&(n.formerNumbers=[...t.formerNumbers||[],t.number],n.number=""),String(n.number||"").trim()||(n.number=pn(n.kind,[...Be("customers").filter(o=>o.id!==n.id),{formerNumbers:n.formerNumbers||[]}]));let s=Be("customers").find(o=>o.id!==n.id&&o.number===n.number);s&&q(`Die Nummer ${n.number} ist bereits vergeben (${G(s)}).`);let i=Vt(t,n,["updatedAt","createdAt"]),r=n.kind==="customer"?"Kunde":"Kontakt";return await W(async o=>{await o.put("customers",n),await o.audit({action:t?a!==n.kind?n.kind==="customer"?"Kontakt zum Kunden gemacht":"Kunde als Kontakt geführt":`${r} geändert`:`${r} angelegt`,entity:"customers",entityId:n.id,label:G(n),prev:t?i.prev:null,next:i.next})}),n}function Gi(e){return Be("invoices").some(t=>t.customerId===e)||Be("quotes").some(t=>t.customerId===e)||Be("recurring").some(t=>t.customerId===e)}async function nl(e){let t=w("customers",e);t&&(Gi(e)&&q("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await W(async n=>{let a=Be("notes").filter(r=>r.customerId===e),s=Be("appointments").filter(r=>r.customerId===e),i=Be("todos").filter(r=>r.customerId===e);for(let r of a)await n.del("notes",r.id);for(let r of s)await n.del("appointments",r.id);for(let r of i)await n.del("todos",r.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:G(t),prev:{...t,...a.length||s.length||i.length?{related:{notes:a,appointments:s,todos:i}}:{}}})}))}async function al(e){w("customers",e.customerId)||q("Bitte einen Kunden wählen."),we(e.date)||q("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&q("Bitte etwas eintragen.");let t=w("notes",e.id),n=be({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=Vt(t,n,["updatedAt","createdAt"]);return await W(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${G(w("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function sl(e){let t=w("notes",e);t&&await W(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:G(w("customers",t.customerId)),prev:t})})}var Wo=/^([01]\d|2[0-3]):[0-5]\d$/,Qu=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function il(e){w("companies",e.companyId)||q("Bitte das Unternehmen wählen, über das der Termin läuft."),aa(e.date)||q("Bitte ein gültiges Datum eintragen."),(!Wo.test(e.start||"")||!Wo.test(e.end||""))&&q("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&q("Das Ende liegt vor dem Beginn.");let t=w("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&q("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=w("appointments",e.id),a=be({...e,title:String(e.title||"").trim()||(t?`Termin mit ${G(t)}`:String(e.contactName||"").trim())});n&&Qu.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=Vt(n,a,["updatedAt","createdAt","sequence"]);return await W(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function rl(e,{outcome:t,nextSteps:n,todos:a=[]}){let s=w("appointments",e);s||q("Termin nicht gefunden.");let i=a.filter(c=>String(c.title||"").trim());for(let c of i)c.due&&!aa(c.due)&&q(`Bitte die Fälligkeit von „${c.title}“ prüfen.`);let r=be({...s,status:"done",outcome:String(t||"").trim(),nextSteps:String(n||"").trim(),followUpAt:null});s.status!=="done"&&(r.sequence=(Number(s.sequence)||0)+1);let o=i.map(c=>Sa({title:String(c.title).trim(),due:c.due||"",customerId:s.customerId||"",companyId:s.companyId||"",appointmentId:s.id}));return await W(async c=>{await c.put("appointments",r);for(let p of o)await c.put("todos",p);await c.audit({action:"Termin dokumentiert",entity:"appointments",entityId:e,label:`${s.date} ${s.start}, ${s.title}`,prev:{status:s.status,outcome:s.outcome||""},next:{status:"done",outcome:r.outcome,nextSteps:r.nextSteps,todos:o.map(p=>p.title).join(", ")}})}),{appointment:r,todos:o}}async function ol(e,t){let n=w("appointments",e);if(!n)return null;let a=be({...n,followUpAt:t});return await W(async s=>{await s.put("appointments",a)}),a}async function Hi(e){String(e.title||"").trim()||q("Bitte beschreiben, was zu tun ist."),e.due&&!aa(e.due)&&q("Bitte die Fälligkeit prüfen.");let t=w("todos",e.id),n=be({...e,title:String(e.title).trim()}),a=Vt(t,n,["updatedAt","createdAt"]);return t&&!a.changed.length||await W(async s=>{await s.put("todos",n),await s.audit({action:t?"To-do geändert":"To-do angelegt",entity:"todos",entityId:n.id,label:n.title,prev:t?a.prev:null,next:t?a.next:{title:n.title,due:n.due}})}),n}async function ll(e,t=!0){let n=w("todos",e);if(!n)return null;let a=be({...n,done:!!t,doneAt:t?ne():null});return await W(async s=>{await s.put("todos",a),await s.audit({action:t?"To-do erledigt":"To-do wieder geöffnet",entity:"todos",entityId:e,label:n.title,prev:{done:n.done},next:{done:!!t}})}),a}async function cl(e){let t=w("todos",e);t&&await W(async n=>{await n.del("todos",e),await n.audit({action:"To-do gelöscht",entity:"todos",entityId:e,label:t.title,prev:t})})}async function Ns(e,t,n){let a=w("appointments",e);a||q("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||q("Unbekannter Status.");let s=be({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await W(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function ul(e){let t=w("appointments",e);t&&await W(async n=>{for(let a of Be("todos").filter(s=>s.appointmentId===e))await n.put("todos",be({...a,appointmentId:""}));await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function Ts(e){String(e.name||"").trim()||q("Bitte einen Namen für die Leistung eintragen.");let t=w("services",e.id),n=be(e),a=Vt(t,n,["updatedAt","createdAt"]);return await W(async s=>{await s.put("services",n),await s.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?a.prev:null,next:a.next})}),n}async function dl(e){let t=w("services",e);t&&await W(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function gt(e,t){return Ca({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function ji(e){return we(e.issueDate)?Ce(e.issueDate,Number(e.paymentTermDays)||0):""}function sa(e){let t=be({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=ji(t)),t.fx&&et.includes(t.currency)&&(t.fx=_t(t.currency,t.fx.usdToEur,t.fx)),t.totals=Ct(t),t}function ml(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new ye(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=De(t[a]):delete e[a];return n}async function As(e){let t=w("invoices",e.id);t&&t.status!=="draft"&&q("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&q("Nur Entwürfe können gespeichert werden.");let n=sa(e);return await W(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new ye("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");ml(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${G(w("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function Wi(e){let t=w("invoices",e);if(t){if(t.number||t.status!=="draft"){await Qi(e);return}await W(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new ye("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await pl(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:Vi(t)})})}}async function Qi(e){let t=w("invoices",e);return t?t.type==="credit_note"?Yi(e):t.status==="draft"&&!t.number?(await Wi(e),{number:""}):W(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await qi(n,r,"credit"));for(let p of s)await n.del("payments",p.id);for(let p of i)await n.del("reminders",p.id);await n.del("invoices",e);let o=await qi(n,a,"invoice");await pl(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:G(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:Ae(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:De(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function Rs(e,t="invoice"){let n=[],a=w("companies",e.companyId);a||n.push("Unternehmen auswählen"),w("customers",e.customerId)||n.push("Kunde auswählen"),we(e.issueDate)?aa(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!we(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&we(e.issueDate)&&e.fx.forDate!==Bn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),et.includes(e.currency)||n.push("Währung wählen"),a&&w("customers",e.customerId)){let i=Go(yt(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=Pt(It(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function _a(e,t,n){if(!e||!we(n))return"";let{pattern:a}=It(e,t);if(Pt(a))return"";let s=Un(e.id,t,a,n),i=w("counters",s),r=new Set([...Be("invoices"),...Be("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await Fi(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Ji(e,t,n,a){let{pattern:s}=It(t,n),i=Un(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await Fi(t,n,a,r.last,async p=>!!await e.byIndex("invoices","number",p)||!!await e.byIndex("quotes","number",p));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function qi(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!we(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=It(i,n);if(Pt(o))return null;let p=Un(i.id,n,o,t.issueDate),d=await e.get("counters",p);if(!d)return null;for(let u=Number(d.last)||0;u>=1;u--)if(Oi(o,{prefix:r,dateISO:t.issueDate,n:u,digits:c})===t.number){a={key:p,n:u};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function pl(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===qt(t.issueDate,Ms(n),n.anchorDay)&&await e.put("recurring",be({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",be({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function fl(e,t,n,a){let{pattern:s}=It(e,t),i=Un(e.id,t,s,n),r=w("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await W(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${Jo[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function gl(e,t){return{company:De(e),customer:De(t),at:ne()}}async function Ma(e){let t=Rs(e,"invoice");t.length&&q(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=w("companies",e.companyId),a=w("customers",e.customerId),s=w("invoices",e.id);s&&s.status!=="draft"&&q("Diese Rechnung ist bereits erstellt.");let i=sa(e);return W(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new ye("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=ml(i,o),p=c?i.reopened||{}:null;if(!c){let u=await Ji(r,n,"invoice",i.issueDate);i.number=u.number,i.numberRef=u.ref}i.status="issued",i.finalizedAt=ne(),i.sentAt=null;let d=await r.get("customers",i.customerId)||a;if(!Ee(d)){let u=d.number,m=be({...d,kind:"customer"});tl("contact",u)&&(m.formerNumbers=[...d.formerNumbers||[],u],m.number=pn("customer",[...Be("customers").filter(f=>f.id!==d.id),{formerNumbers:m.formerNumbers}])),await r.put("customers",m),await r.audit({action:"Kontakt zum Kunden gemacht",entity:"customers",entityId:m.id,label:G(m),prev:{kind:"contact",number:u},next:{kind:"customer",number:m.number,reason:"Erste Rechnung"}}),d=m}if(i.snapshot=gl(n,d),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:p.totalCents,currency:p.currency,issueDate:p.issueDate,customer:p.customer,usdToEur:p.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:G(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let u=await r.get("quotes",i.quoteId);u&&u.status!=="invoiced"&&await r.put("quotes",be({...u,status:"invoiced",invoiceId:i.id}))}return i})}async function hl(e){let t=w("invoices",e);return t||q("Rechnung nicht gefunden."),t.type==="credit_note"&&q("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||q("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),W(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new ye("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:G(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=be({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:De(a)},next:{status:"draft"}}),o})}async function _n(e,t=!0){let n=w("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=be({...n,status:t?"sent":"issued",sentAt:t?ne():null});await W(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function Bs(e,t,n){let a=w(e,t);a&&await W(async s=>{await s.put(e,be({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function za(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=w("invoices",e);r||q("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&q("Zu diesem Beleg können keine Zahlungen erfasst werden."),we(t)||q("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||q("Bitte einen Zahlungsbetrag größer als null eintragen."),o>Wt(r,Ve(e))&&q("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:We(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await W(async p=>{let d=await p.get("invoices",e),u=await p.allByIndex("payments","invoiceId",e);if(!d||d.type==="credit_note"||["draft","cancelled","credited"].includes(d.status))throw new ye("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>Wt(d,u))throw new ye("Der Betrag ist höher als der offene Rechnungsbetrag.");await p.put("payments",c);let m=[...u,c];await p.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:Mt(d,u,Z()),paidCents:Ae(u)},next:{status:Mt(d,m,Z()),paidCents:Ae(m),amountCents:o,date:t,method:a}});let f=String(i||"").trim();f&&(await p.put("invoices",be({...d,clarify:{note:f,at:ne()}})),await p.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:d.clarify?{note:d.clarify.note}:null,next:{note:f}}))}),c}async function $l(e,{date:t,amountCents:n,method:a,note:s}){w("payments",e)||q("Zahlung nicht gefunden."),we(t)||q("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||q("Bitte einen Betrag größer als null eintragen."),W(async o=>{let c=await o.get("payments",e);if(!c)throw new ye("Diese Zahlung gibt es nicht mehr.");let p=c.amountCents<0,d=await o.get("invoices",c.invoiceId),u=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(g=>g.id!==e),m=p?-r:r,f=Ae(u)+m;if(f<0)throw new ye(p?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let v=d&&d.totals?d.totals.totalCents:null;if(!p&&v!=null&&f>v)throw new ye("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let $={...c,date:t,amountCents:m,method:a||"",note:s||"",updatedAt:ne()},h=Vt(c,$,["updatedAt","createdAt"]);return Object.keys(h.next).length&&(await o.put("payments",$),await o.audit({action:p?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:d?d.number:"",prev:h.prev,next:h.next})),$})}async function bl(e,t){let n=String(t||"").trim();return n||q("Bitte kurz notieren, was zu klären ist."),W(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new ye("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=be({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function vl(e,t){return W(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=be({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function yl(e,{date:t,amountCents:n,method:a,note:s}){let i=w("invoices",e);i||q("Rechnung nicht gefunden."),i.status!=="credited"&&q("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),we(t)||q("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||q("Bitte einen Betrag größer als null eintragen.");let o={id:We(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await W(async c=>{let p=await c.allByIndex("payments","invoiceId",e);if(r>Ae(p))throw new ye("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:Ae(p)},next:{paidCents:Ae(p)-r,amountCents:-r,date:t,method:a}})}),o}async function wl(e){let t=w("payments",e);if(!t)return;let n=w("invoices",t.invoiceId);await W(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(Ae(s)<0)throw new ye("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function Us(e,t){let n=w("invoices",e);n&&(n.type==="credit_note"&&q("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||q("Diese Rechnung kann nicht storniert werden."),Ae(Ve(e))>0&&q("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await W(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new ye("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(Ae(i)>0)throw new ye("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=be({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function xl(e){return W(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new ye("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=be({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function _s(e,t){let n=w("invoices",e);n||q("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&q("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=w("companies",n.companyId);a||q("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=Z(),i={...kt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:We(),qty:-Number(r.qty)})),discount:De(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:De(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=Ct(i),W(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new ye("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Ji(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:De(a),customer:De(n.snapshot?n.snapshot.customer:w("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",be({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function Yi(e){let t=w("invoices",e);t||q("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||q("Zu dieser Rechnung gibt es keine Gutschrift."),W(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new ye("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(p=>p.amountCents<0))throw new ye(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await qi(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=be({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:De(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function kl(e){let t=w("companies",e.companyId);return{...kt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:We()})),discount:De(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function Dl(e){let t=w("quotes",e.id);t&&t.status!=="draft"&&q("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=sa(e);return await W(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new ye("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${G(w("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function Sl(e){let t=w("quotes",e);t&&(t.status!=="draft"&&q("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await W(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new ye("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:Vi(t)})}))}async function La(e){let t=Rs(e,"quote");t.length&&q(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=w("companies",e.companyId),a=w("customers",e.customerId),s=w("quotes",e.id);s&&s.status!=="draft"&&q("Dieses Angebot ist bereits erstellt.");let i=sa(e);return W(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new ye("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Ji(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=gl(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var Qo={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function Mn(e,t){let n=w("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!Qo[t])return;let a=be({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await W(async s=>{await s.put("quotes",a),await s.audit({action:Qo[t],entity:"quotes",entityId:e,label:n.number,prev:{status:n.status},next:{status:t}})})}async function Cl(e){let t=w("quotes",e);t||q("Angebot nicht gefunden."),t.status==="draft"&&q("Bitte das Angebot zuerst erstellen."),t.invoiceId&&w("invoices",t.invoiceId)&&q("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=w("companies",t.companyId);n||q("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=w("customers",t.customerId),s=sa({...kt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:We()})),discount:De(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await W(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new ye("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new ye("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",be({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:t.number,next:{invoiceDraftId:s.id}})}),s}async function fn(e){let t=w("expenses",e.id),n=be({...e});n.status!=="review"&&(w("companies",n.companyId)||q("Bitte ein Unternehmen auswählen."),aa(n.invoiceDate)||q("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&q("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||q("Bitte einen Lieferanten eintragen."),n.paymentDate&&!aa(n.paymentDate)&&q("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||q("Bitte den Wechselkurs laden oder eintragen."));let a=Vt(t,n,["updatedAt","createdAt","ai"]);return await W(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function El(e){let t=w("expenses",e);t&&await W(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function Xi({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:We(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await W(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function er(e){await W(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function Ms(e){let t=kn.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function Pa(e){String(e.name||"").trim()||q("Bitte der Vorlage einen Namen geben."),w("companies",e.companyId)||q("Bitte ein Unternehmen auswählen."),w("customers",e.customerId)||q("Bitte einen Kunden auswählen."),(e.items||[]).length||q("Bitte mindestens eine Position hinzufügen."),we(e.nextDate)||q("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!we(e.endDate)&&q("Bitte das Enddatum prüfen.");let t=w("recurring",e.id),n=be({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=Ct(n),await W(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function Il(e){let t=w("recurring",e);t&&await W(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var ia=(e,t=Z())=>!!e&&e.active&&we(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),ra=e=>!!e.endDate&&we(e.nextDate)&&e.nextDate>e.endDate;async function tr(e,{early:t=!1}={}){let n=w("recurring",e);n||q("Vorlage nicht gefunden."),ra(n)&&q("Diese Vorlage hat ihr Enddatum erreicht."),n.active||q("Diese Vorlage ist pausiert."),!t&&n.nextDate>Z()&&q("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=w("companies",n.companyId),s=w("customers",n.customerId);(!a||!s)&&q("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=Ms(n),r=n.nextDate,o=Ce(qt(r,i,n.anchorDay),-1),c=sa({...kt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:We()})),discount:De(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id}),p=qt(r,i,n.anchorDay),d=!!n.endDate&&p>n.endDate,u=be({...n,nextDate:p,generated:(n.generated||0)+1,lastRunAt:ne(),active:d?!1:n.active,endedByRun:d});return await W(async m=>{let f=await m.get("recurring",n.id);if(!f||f.nextDate!==n.nextDate||!f.active)throw new ye("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",c),await m.put("recurring",u),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:p}})}),c}async function Nl(e,t,n){let a=w("invoices",e);if(!a)return null;let s={id:We(),invoiceId:e,level:t,date:Z(),note:n||"",createdAt:ne()};return await W(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}async function nr(){y.companies.length||(await Ba(Da({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await Ba(Da({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await W(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function Tl(){y.settings.seeded||y.companies.length||await nr()}function Ju(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Ka(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=Ju();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function Yu(){let e=Re(null),[t,n]=k(0);return hi(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function Xu(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,p=Math.ceil(Math.max(t,0)/o)*o,d=[];for(let u=c;u<=p+o/2;u+=o)d.push(Math.round(u/o)*o);return{lo:c,hi:p,step:o,ticks:d}}function ar(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function Oa({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=Yu(),[p,d]=k(null),u={top:12,right:8,bottom:26,left:56},m=0,f=0;for(let A of e)if(n==="stacked"){let D=0,U=0;for(let M of t){let I=A.values[M.id]||0;I>=0?D+=I:U+=I}m=Math.max(m,D),f=Math.min(f,U)}else for(let D of t){let U=A.values[D.id]||0;m=Math.max(m,U),f=Math.min(f,U)}let v=Xu(f,m),$=Math.max(c-u.left-u.right,10),h=i-u.top-u.bottom,g=A=>u.top+h-(A-v.lo)/(v.hi-v.lo||1)*h,b=$/Math.max(e.length,1),C=g(0),x=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor($/46)))),N=[];e.forEach((A,D)=>{let U=u.left+D*b;if(n==="stacked"){let M=Math.min(24,Math.max(b-10,3)),I=U+(b-M)/2,K=C,P=C,J=t.filter(me=>(A.values[me.id]||0)!==0),L=[...J].reverse().find(me=>A.values[me.id]>0),ae=[...J].reverse().find(me=>A.values[me.id]<0);for(let me of J){let z=A.values[me.id],Ie=Math.abs(g(z)-C);if(z>0){let Ke=K-Ie,Ln=L&&L.id===me.id,oi=Ln?0:Math.min(2,Ie-1);N.push({d:Ln?ar(I,Ke,M,Ie,4,!0):`M${I},${Ke+oi}H${I+M}V${K}H${I}Z`,color:me.color,key:`${A.key}-${me.id}`}),K=Ke}else{let Ke=ae&&ae.id===me.id,Ln=Ke?0:Math.min(2,Ie-1);N.push({d:Ke?ar(I,P,M,Ie,4,!1):`M${I},${P}H${I+M}V${P+Ie-Ln}H${I}Z`,color:me.color,key:`${A.key}-${me.id}`}),P+=Ie}}}else{let M=t.length,I=Math.min(18,Math.max((b-10-(M-1)*2)/M,2)),K=M*I+(M-1)*2;t.forEach((P,J)=>{let L=A.values[P.id]||0;if(!L)return;let ae=Math.abs(g(L)-C),me=U+(b-K)/2+J*(I+2);N.push({d:ar(me,L>0?C-ae:C,I,ae,4,L>0),color:P.color,key:`${A.key}-${P.id}`})})}});let _=p!=null?e[p]:null,S=p!=null?u.left+p*b+b/2:0,j=S>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${v.ticks.map(A=>l`<g key=${A}>
        <line x1=${u.left} x2=${c-u.right} y1=${g(A)} y2=${g(A)} class=${A===0?"chart-base":"chart-grid"} />
        <text x=${u.left-8} y=${g(A)+4} text-anchor="end" class="chart-tick">${(s||a)(A)}</text>
      </g>`)}
      ${p!=null&&l`<rect x=${u.left+p*b} y=${u.top} width=${b} height=${h} class="chart-hover" />`}
      ${N.map(A=>l`<path key=${A.key} d=${A.d} fill=${A.color} />`)}
      ${e.map((A,D)=>D%x===0&&l`<text key=${A.key} x=${u.left+D*b+b/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${A.label}</text>`)}
      ${e.map((A,D)=>l`<rect key=${`hit-${A.key}`} x=${u.left+D*b} y=${u.top} width=${b} height=${h+u.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${A.title||A.label}: ${t.map(U=>`${U.label} ${a(A.values[U.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>d(D)} onMouseLeave=${()=>d(null)}
        onFocus=${()=>d(D)} onBlur=${()=>d(null)} />`)}
    </svg>`}
    ${_&&l`<div class=${`chart-tip${j?" is-left":""}`} style=${`left:${S}px;top:${u.top}px`}>
      <div class="chart-tip-title">${_.title||_.label}</div>
      ${t.filter(A=>t.length===1||(_.values[A.id]||0)!==0).map(A=>l`<div class="chart-tip-row" key=${A.id}>
        <span class="chart-key" style=${`background:${A.color}`}></span>
        <strong>${a(_.values[A.id]||0)}</strong><span>${A.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((A,D)=>A+(_.values[D.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function ed({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function Fa({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=k(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${ed} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,p)=>l`<td class=${p?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function Qt({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}var gn=(e,t)=>!t||e.companyId===t;function Al(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function nt(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!Ui(i)||!i.totals||!gn(i,t)||a&&i.customerId!==a||n&&!Zt(i.issueDate,n))continue;let r=i.totals,o=mt(r.netCents,i.currency,i.fx)||0,c=Et(r.netCents,i.currency,i.fx)||0,p=mt(r.taxCents,i.currency,i.fx)||0,d=Et(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:p,taxEUR:d,totalUSD:o+p,totalEUR:c+d})}return s}function oa(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!gn(s,t)||n&&!Zt(s.invoiceDate,n))continue;let i=mt(s.netCents,s.currency,s.fx)||0,r=Et(s.netCents,s.currency,s.fx)||0,o=mt(s.taxCents,s.currency,s.fx)||0,c=Et(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function zs(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&gn(r,t)&&(n&&!Zt(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:mt(i.amountCents,r.currency,r.fx)||0,eur:Et(i.amountCents,r.currency,r.fx)||0}))}return s}var se=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function hn(e,{companyId:t}={},n){let a=Al(e.payments),s=[];for(let i of e.invoices){if(!gn(i,t))continue;let r=a.get(i.id)||[],o=Wt(i,r);if(o<=0)continue;let c=Mt(i,r,n),p=i.dueDate&&i.dueDate<n?sn(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:p,openCents:o,paidCents:Ae(r),openUSD:mt(o,i.currency,i.fx)||0,openEUR:Et(o,i.currency,i.fx)||0,bucket:p<=0?"current":p<=30?"d30":p<=60?"d60":p<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var Rl=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function Bl(e,t,n){let a=ut("month",n),s=ut("quarter",n),i=ut("year",n),r=ut("lastMonth",n),o=nt(e,{companyId:t,range:i}),c=b=>o.filter(C=>Zt(C.date,b)),p=c(a),d=c(s),u=nt(e,{companyId:t,range:r}),m=hn(e,{companyId:t},n),f=m.filter(b=>b.status==="overdue"),v=Al(e.payments),$=o.filter(b=>b.inv.type!=="credit_note"&&b.inv.status!=="credited"),h=$.filter(b=>Mt(b.inv,v.get(b.inv.id)||[],n)==="paid"),g=e.customers.filter(b=>b.active!==!1&&b.kind!=="contact");if(t){let b=new Set([...e.invoices.filter(C=>C.companyId===t).map(C=>C.customerId),...(e.quotes||[]).filter(C=>C.companyId===t).map(C=>C.customerId)]);g=g.filter(C=>b.has(C.id))}return{month:{usd:se(p,"netUSD"),eur:se(p,"netEUR"),count:p.length},lastMonth:{usd:se(u,"netUSD"),eur:se(u,"netEUR")},quarter:{usd:se(d,"netUSD"),eur:se(d,"netEUR")},year:{usd:se(o,"netUSD"),eur:se(o,"netEUR")},open:{count:m.length,usd:se(m,"openUSD"),eur:se(m,"openEUR")},overdue:{count:f.length,usd:se(f,"openUSD"),eur:se(f,"openEUR")},paid:{count:h.length,usd:se(h,"totalUSD"),eur:se(h,"totalEUR")},average:{usd:$.length?Math.round(se($,"netUSD")/$.length):0,eur:$.length?Math.round(se($,"netEUR")/$.length):0,count:$.length},activeCustomers:g.length}}function qa(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=nt(e,{companyId:t,range:i}),o=oa(e,{companyId:t,range:i}),c=zs(e,{companyId:t,range:i});return n.map(p=>{let d=r.filter($=>xa($.date)===p),u=o.filter($=>xa($.date)===p),m=c.filter($=>xa($.date)===p),f={},v={};for(let $ of d)f[$.inv.companyId]=(f[$.inv.companyId]||0)+$.netUSD,v[$.inv.companyId]=(v[$.inv.companyId]||0)+$.netEUR;return{key:p,revenueUSD:se(d,"netUSD"),revenueEUR:se(d,"netEUR"),expenseUSD:se(u,"netUSD"),expenseEUR:se(u,"netEUR"),profitUSD:se(d,"netUSD")-se(u,"netUSD"),profitEUR:se(d,"netEUR")-se(u,"netEUR"),paymentsUSD:se(m,"usd"),paymentsEUR:se(m,"eur"),taxUSD:se(d,"taxUSD"),taxEUR:se(d,"taxEUR"),invoices:d.length,byCompany:f,byCompanyUSD:f,byCompanyEUR:v}})}function sr(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function Ul(e,t,n){let a=nt(e,t);return n==="quarter"?sr(a,uo):n==="year"?sr(a,s=>String(ms(s))):sr(a,xa)}function Za(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of nt(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:G(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Va(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of nt(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Ga(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of nt(e,t)){let i=new Map((s.inv.totals.lines||[]).map(d=>[d.id,d])),r=(s.inv.items||[]).filter(d=>i.has(d.id)),o=r.map(d=>{let u=i.get(d.id);return u.netCents!=null?u.netCents:u.cents}),c=St(s.netUSD,o),p=St(s.netEUR,o);r.forEach((d,u)=>{let m=d.serviceId?n.get(d.serviceId):null,f=m?`s:${m.id}`:`n:${String(d.name||"").trim().toLowerCase()}`,v=a.get(f)||{key:f,name:m?m.name:d.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};v.usd+=c[u]||0,v.eur+=p[u]||0,v.qty+=Number(d.qty)||0,a.set(f,v)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function ir(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let p=s.get(o),d=a(c),u=c.serviceId?n.get(c.serviceId):null;return p.has(d)||p.set(d,{key:d,name:u?u.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:u&&u.category||"",unit:c.unit||u&&u.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),p.get(d)};for(let o of nt(e,t)){let c=new Map((o.inv.totals.lines||[]).map(v=>[v.id,v])),p=(o.inv.items||[]).filter(v=>c.has(v.id)),d=p.map(v=>{let $=c.get(v.id);return $.netCents!=null?$.netCents:$.cents}),u=St(o.netUSD,d),m=St(o.netEUR,d),f=o.inv.type==="credit_note";p.forEach((v,$)=>{let h=i(o.inv.customerId,v);h.usd+=u[$]||0,h.eur+=m[$]||0,h.qty+=Number(v.qty)||0,f||(h.invoices.add(o.inv.id),h.companyIds.add(o.inv.companyId),(!h.first||o.date<h.first)&&(h.first=o.date),o.date>h.last&&(h.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&gn(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let p=i(o.customerId,c);p.running=!0,p.interval=o.interval,p.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(p=>({...p,invoices:p.invoices.size,companyIds:[...p.companyIds]})).sort((p,d)=>Number(d.running)-Number(p.running)||d.usd-p.usd));return r}function _l(e,t){let n=new Map;for(let a of nt(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function rr(e,t){let n=new Map;for(let a of oa(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function Ml(e,t,n){let a=nt(e,t),s=oa(e,t),i=zs(e,t),r=hn(e,{companyId:t.companyId},n),o=se(a,"netUSD"),c=se(a,"netEUR"),p=se(s,"netUSD"),d=se(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(u=>u.inv.type!=="credit_note").length},expenses:{usd:p,eur:d,count:s.length},profit:{usd:o-p,eur:c-d},payments:{usd:se(i,"usd"),eur:se(i,"eur"),count:i.length},receivables:{usd:se(r,"openUSD"),eur:se(r,"openEUR"),count:r.length},taxCollected:{usd:se(a,"taxUSD"),eur:se(a,"taxEUR")},taxPaid:{usd:se(s,"taxUSD"),eur:se(s,"taxEUR")},taxBalance:{usd:se(a,"taxUSD")-se(s,"taxUSD"),eur:se(a,"taxEUR")-se(s,"taxEUR")}}}function zl(e,t){let n=new Map;for(let i of nt(e,t)){let r=i.inv.totals.taxGroups||[],o=St(i.taxUSD,r.map(u=>u.taxCents)),c=St(i.netUSD,r.map(u=>u.netCents)),p=St(i.taxEUR,r.map(u=>u.taxCents)),d=St(i.netEUR,r.map(u=>u.netCents));r.forEach((u,m)=>{let f=`${u.rate}|${i.inv.currency}`,v=n.get(f)||{rate:u.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};v.netCents+=u.netCents,v.taxCents+=u.taxCents,v.netUSD+=c[m]||0,v.taxUSD+=o[m]||0,v.netEUR+=d[m]||0,v.taxEUR+=p[m]||0,n.set(f,v)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=oa(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:se(s,"taxUSD"),paidEUR:se(s,"taxEUR")}}function or(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>Ui(o)&&gn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&gn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&gn(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return mo(a,s)}var Jt=()=>({invoices:y.invoices,quotes:y.quotes,payments:y.payments,expenses:y.expenses,customers:y.customers,companies:y.companies,services:y.services,recurring:y.recurring}),Nt=()=>{let e=pe();return e?e.id:null};function Ls(e){return Mt(e,Ve(e.id),Z())}function Ha({inv:e}){let t=Ls(e),n=ka[t]||ka.draft;return l`<span class="badges"><${_e} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${_e} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function ja({quote:e}){let t=Tn(e,Z()),n=xi[t]||xi.draft;return l`<${_e} tone=${n.tone}>${n.label}<//>`}var ie=()=>y.settings.displayCurrency==="EUR"?"EUR":"USD",$n=()=>ie()==="USD"?"EUR":"USD",T=(e,t="",n=ie())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},Se=(e,t="")=>T(e,t,$n()),ee=e=>H(e,ie()),ze=e=>H(e,$n()),at=(e,t,n)=>jt(e,t,ie(),n);function Yt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?Et(n,e.currency,e.fx):mt(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${H(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${H(s,a)}</span>`}
  </span>`}function Le({id:e}){let t=w("companies",e);return t?l`<span class="co-tag"><${Is} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Pe(e){let t=w("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return G(t)||"–"}var la=e=>Wt(e,Ve(e.id));var lr=e=>{let t=pe();return!t||!e.companyId||e.companyId===t.id};function td(e=()=>!0){return y.todos.filter(t=>!t.done&&e(t)).sort(Ps)}var Ps=(e,t)=>(e.due||"9999")<(t.due||"9999")?-1:(e.due||"9999")>(t.due||"9999")?1:e.createdAt<t.createdAt?-1:1;function nd(e,t=Z()){if(!e.due)return{text:"ohne Termin",tone:""};if(e.done)return{text:V(e.due),tone:""};if(e.due<t){let n=sn(e.due,t);return{text:`überfällig seit ${n} ${n===1?"Tag":"Tagen"}`,tone:"bad"}}return e.due===t?{text:"heute",tone:"warn"}:e.due===Ce(t,1)?{text:"morgen",tone:""}:{text:`bis ${V(e.due)}`,tone:""}}var Ll=()=>{let e=Z();return y.todos.filter(t=>!t.done&&t.due&&t.due<=e&&lr(t)).length};async function ad(e){let t=await B(()=>ll(e.id,!e.done));t&&t.done&&R(`Erledigt: ${e.title}`,"good")}function zn({items:e,showCustomer:t=!0,onEdit:n,empty:a}){return e.length?l`<ul class="todo-list">
    ${e.map(s=>{let i=nd(s),r=s.customerId?w("customers",s.customerId):null,o=s.appointmentId?w("appointments",s.appointmentId):null;return l`<li key=${s.id} class=${s.done?"is-done":""}>
        <input type="checkbox" class="todo-check" checked=${!!s.done} aria-label=${`${s.title} ${s.done?"wieder öffnen":"erledigt"}`} onChange=${()=>ad(s)} />
        <button type="button" class="todo-body" onClick=${()=>n&&n(s)}>
          <span class="todo-title">${s.title}</span>
          <span class="cell-sub">
            <span class=${i.tone?`tone-${i.tone}`:""}>${s.done?`erledigt${s.doneAt?` am ${V(s.doneAt.slice(0,10))}`:""}`:i.text}</span>
            ${t&&r&&l` · ${G(r)}`}
            ${o&&l` · aus Termin ${V(o.date)}`}
          </span>
        </button>
        ${s.companyId&&l`<span class="todo-co"><${Le} id=${s.companyId} /></span>`}
      </li>`})}
  </ul>`:a?l`<p class="muted-text">${a}</p>`:null}function Ks({customerId:e="",companyId:t="",withCustomer:n=!1}){let[a,s]=k(""),[i,r]=k(Ce(Z(),7)),[o,c]=k(e),p=y.customers.filter(u=>u.active!==!1).sort((u,m)=>G(u).localeCompare(G(m),"de")).map(u=>({id:u.id,label:G(u),sub:u.number}));async function d(u){if(u&&u.preventDefault(),!a.trim())return;let m=t||(pe()?pe().id:"");await B(()=>Hi(Sa({title:a,due:i,customerId:o||e,companyId:m})))&&(s(""),R("To-do angelegt","good"))}return l`<form class=${`todo-add${n?" with-customer":""}`} onSubmit=${d}>
    <input class="input" placeholder="Neues To-do, z. B. Angebot schicken" aria-label="Neues To-do" value=${a} onInput=${u=>s(u.target.value)} />
    ${n&&l`<${zt} options=${p} value=${o} onChange=${c} placeholder="Kontakt (optional)" label="Kontakt zum To-do" />`}
    <input class="input todo-add-date" type="date" aria-label="Fällig am" value=${i} onInput=${u=>r(u.target.value)} />
    <${E} type="submit" icon="plus" disabled=${!a.trim()}>Hinzufügen<//>
  </form>`}function Os({todo:e,onClose:t}){let n=!w("todos",e.id),[a,s]=k(()=>({...e})),[i,r]=k(!1),o=m=>f=>s(v=>({...v,[m]:f})),c=[...y.customers].sort((m,f)=>G(m).localeCompare(G(f),"de")).map(m=>({id:m.id,label:G(m),sub:m.number})),p=a.appointmentId?w("appointments",a.appointmentId):null;async function d(){r(!0);let m=await B(()=>Hi(a));r(!1),m&&(R(n?"To-do angelegt":"To-do gespeichert","good"),t())}async function u(){if(!await le({title:"To-do löschen?",text:`„${a.title}“ wird gelöscht. Im Protokoll bleibt der Eintrag erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await cl(a.id),!0))&&(R("To-do gelöscht","good"),t())}return l`<${Oe} title=${n?"Neues To-do":"To-do bearbeiten"} onClose=${t} onSubmit=${d}
    footer=${l`${!n&&l`<${E} variant="ghost" icon="trash" onClick=${u}>Löschen<//>`}<span class="spacer"></span>
      <${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${F} class="span-6" label="Was ist zu tun?" value=${a.title} onInput=${o("title")} />
      <${qe} class="span-2" label="Fällig am" value=${a.due} onInput=${o("due")} />
      <${xe} class="span-4" label="Kontakt">
        <${zt} options=${c} value=${a.customerId} onChange=${m=>o("customerId")(m||"")} placeholder="Ohne Kontakt" label="Kontakt" />
      <//>
      <${ce} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${de().map(m=>({id:m.id,label:m.name}))} />
      <div class="span-3 field field-inline">${!n&&l`<label class="check"><input type="checkbox" checked=${!!a.done}
        onChange=${m=>s(f=>({...f,done:m.target.checked,doneAt:m.target.checked?new Date().toISOString():null}))} /> Erledigt</label>`}</div>
      <${re} class="span-6" label="Notiz" value=${a.note} onInput=${o("note")} rows=${3} />
      ${p&&l`<p class="span-6 field-hint">Aus dem Termin „${p.title}“ am ${V(p.date)}.</p>`}
    </div>
  <//>`}function Pl(){let[e,t]=k(null),n=td(lr),a=n.slice(0,8);return l`<${Q} title=${`To-dos${n.length?` (${n.length})`:""}`} class="dash-todos" action=${l`<a class="panel-link" href="#/todos">Alle To-dos</a>`}>
    <${zn} items=${a} onEdit=${t} empty="Keine offenen To-dos." />
    ${n.length>a.length&&l`<p class="cell-sub"><a href="#/todos">${n.length-a.length} weitere</a></p>`}
    <${Ks} withCustomer />
    ${e&&l`<${Os} key=${e.id} todo=${e} onClose=${()=>t(null)} />`}
  <//>`}function Kl(){ge();let[e,t]=k("open"),[n,a]=k(""),[s,i]=k(null),r=Z(),o=y.todos.filter(lr),c={open:o.filter(u=>!u.done),due:o.filter(u=>!u.done&&u.due&&u.due<=r),done:o.filter(u=>u.done)},p=u=>u.customerId?G(w("customers",u.customerId)):"",d=c[e].filter(u=>Te(n,u.title,u.note,p(u)));return d=e==="done"?d.sort((u,m)=>(u.doneAt||"")<(m.doneAt||"")?1:-1):d.sort(Ps),l`
    <${ve} title="To-dos" sub=${pe()?`To-dos für ${pe().name} und ohne Zuordnung`:"Alle To-dos"}>
      <${E} variant="primary" icon="plus" onClick=${()=>i(Sa({due:Ce(r,7),companyId:pe()?pe().id:""}))}>Neues To-do<//>
    <//>
    <div class="filters">
      <input class="input filter-select" type="search" placeholder="To-dos durchsuchen" aria-label="To-dos durchsuchen" value=${n} onInput=${u=>a(u.target.value)} />
      <${Lt} label="Filter" value=${e} onChange=${t} options=${[{id:"open",label:"Offen",count:c.open.length},{id:"due",label:"Fällig",count:c.due.length},{id:"done",label:"Erledigt",count:c.done.length}]} />
    </div>
    <${Q}>
      <${Ks} withCustomer />
      ${d.length?l`<${zn} items=${d} onEdit=${i} />`:l`<${fe} icon="check" title=${e==="done"?"Noch nichts erledigt":"Nichts offen"} text="To-dos legst du hier, beim Kontakt oder beim Dokumentieren eines Termins an." />`}
    <//>
    ${s&&l`<${Os} key=${s.id} todo=${s} onClose=${()=>i(null)} />`}
  `}var Wa=e=>String(e).padStart(2,"0");function Ol(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function Zl(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function Fl(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!Zl(n))return new Date(c);let p=Ol(c,n),d=c-p*6e4,u=Ol(d,n);return u!==p&&(d=c-u*6e4),new Date(d)}function Qa(e,t,n="de"){if(!Zl(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function qs(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function Vl(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function Ja(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var ca=e=>(Gn.find(t=>t.id===e)||{}).label||"",ql=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function Gl(e,t=new Date){if(!e||e.status!=="planned")return!1;let{end:n}=bn(e);return n>t?!1:!e.followUpAt||new Date(e.followUpAt)<=t}function bn(e){let t=Fl(e.date,e.start,e.timeZone),n=Fl(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function sd(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=ca(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function id(e,t){return String(e.contactName||"").trim()||(t?dt(t)||G(t):"")}function Hl(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=bn(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),p={CONTACT:id(e,n),CUSTOMER:n?G(n):String(e.contactName||""),TITLE:c,DATE:Ja(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:Qa(e.timeZone,r,s),MEETING:sd(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:ca(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},d=u=>u.replace(/[ \t]+,/g,",").split(`
`).map(m=>m.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:d(bt(i.subject,p)).replace(/\n/g," "),body:d(bt(i.body,p)),vars:p}}var cr=e=>`${e.getUTCFullYear()}${Wa(e.getUTCMonth()+1)}${Wa(e.getUTCDate())}T${Wa(e.getUTCHours())}${Wa(e.getUTCMinutes())}${Wa(e.getUTCSeconds())}Z`,Fs=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function rd(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function jl(e,{summary:t,description:n}){let{start:a,end:s}=bn(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?ql(i)?i:ca(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${cr(new Date)}`,`DTSTART:${cr(a)}`,`DTEND:${cr(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${Fs(t)}`,n?`DESCRIPTION:${Fs(n)}`:"",r?`LOCATION:${Fs(r)}`:"",ql(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${Fs(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(rd).join(`\r
`)}\r
`}var Zs=null;function Wl(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function od(){return Zs||(Zs=(async()=>{if(await Wl("js/vendor/pdfmake.min.js"),await Wl("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw Zs=null,e})),Zs}var Xa="#16191d",Qe="#5c636b",ur="#d9dde1",Ya=50;function ld(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function es(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:Xa,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:Qe,margin:[0,0,0,6]},...e.recipient.map((f,v)=>({text:f,fontSize:10.5,bold:v===0})),...e.recipientExtra.map(f=>({text:f,fontSize:8.5,color:Qe,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([f,v])=>[{text:f,color:Qe,fontSize:9},{text:v,alignment:"right",fontSize:9,bold:f===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(f=>({text:f.label,fontSize:8,color:Qe,alignment:f.align,noWrap:!0})),c=e.rows.map(f=>r.map(v=>{if(v.key==="desc"){let $=[{text:f.name,bold:!0}];return f.description&&$.push({text:f.description,color:Qe,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:$}}return{text:f[v.key]||"",alignment:v.align,noWrap:v.key!=="unit"}})),p={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(f=>f.width),body:[o,...c]},layout:{hLineWidth:(f,v)=>f===0?0:f===1?1.2:.5,hLineColor:f=>f===1?n:ur,vLineWidth:()=>0,paddingLeft:f=>f===0?0:7,paddingRight:(f,v)=>f===v.table.widths.length-1?0:7,paddingTop:f=>f===0?0:6,paddingBottom:f=>f===0?5:6}},d={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(f=>[{text:f.label,bold:!!f.strong,fontSize:f.strong?11.5:9.5,color:f.strong?Xa:Qe},{text:f.value,bold:!!f.strong,fontSize:f.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(f,v)=>f===v.table.body.length-1&&v.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(f,v)=>f===v.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:Qe,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:Qe,margin:[0,1.5,0,0]}]:[]]:[]]}]},u=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:Qe}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&u.push({text:e.subtitle,color:Qe,margin:[0,2,0,0]}),e.intro&&u.push({text:e.intro,margin:[0,12,0,0]}),u.push(p,d),e.notes.length&&u.push({stack:e.notes.map(f=>({text:f,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&u.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([f,v])=>[{text:f,color:Qe},{text:v}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:f=>f===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(f=>({text:f,margin:[0,4,0,0]}))]});let m=ld(e);return{pageSize:"A4",pageMargins:[Ya,46,Ya,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:Xa},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(f,v)=>({margin:[Ya,0,Ya,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*Ya,y2:0,lineWidth:.5,lineColor:ur}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map($=>({width:"*",stack:$.map((h,g)=>({text:h,fontSize:7.5,color:Qe,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:Qe,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",f).replace("{N}",v),fontSize:7,color:Qe,alignment:"right",margin:[0,5,0,0]}]}),content:u}}async function ua(e){let t=await od();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function st(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Ql({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(d=>({text:d.label,bold:!0,fontSize:8,color:Qe,alignment:d.align||"left"})),...a.map(d=>d.map((u,m)=>({text:u==null?"":String(u),alignment:n[m].align||"left"})))];s&&o.push(s.map((d,u)=>({text:d==null?"":String(d),bold:!0,alignment:n[u].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:Xa},info:{title:e,creator:"BBC Finance"},footer:(d,u)=>({text:`Seite ${d} von ${u}`,alignment:"right",fontSize:7,color:Qe,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:Qe,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((d,u)=>u===0?"*":"auto"),body:o},layout:{hLineWidth:(d,u)=>d===0?0:d===1||s&&d===u.table.body.length-1?1:.5,hLineColor:(d,u)=>d===1||s&&d===u.table.body.length-1?Xa:ur,vLineWidth:()=>0,paddingLeft:d=>d===0?0:6,paddingRight:(d,u)=>d===u.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},p=await ua(c);st(p,i)}var dr=/\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/,Vs=/^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i,Jl={deutschland:"Deutschland",germany:"Deutschland",österreich:"Österreich",oesterreich:"Österreich",austria:"Österreich",schweiz:"Schweiz",switzerland:"Schweiz",suisse:"Schweiz",liechtenstein:"Liechtenstein",luxemburg:"Luxemburg",luxembourg:"Luxemburg",niederlande:"Niederlande",netherlands:"Niederlande",belgien:"Belgien",belgium:"Belgien",frankreich:"Frankreich",france:"Frankreich",italien:"Italien",italy:"Italien",spanien:"Spanien",spain:"Spanien","vereinigte arabische emirate":"Vereinigte Arabische Emirate","united arab emirates":"Vereinigte Arabische Emirate",uae:"Vereinigte Arabische Emirate","united kingdom":"Vereinigtes Königreich",usa:"USA","united states":"USA"},Yl={D:"Deutschland",DE:"Deutschland",A:"Österreich",AT:"Österreich",CH:"Schweiz"},lt=e=>String(e||"").replace(/[   ]/g," ").replace(/[ \t]+/g," ").trim(),cd=(e,t)=>lt(e.replace(t,"").replace(/^[\s:.\-–—]+/,""));function ud(e){let n=lt(e).replace(/\s*\(.*?\)\s*/g," ").replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i,"").trim().split(/\s+/).filter(i=>!/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(i));if(!n.length)return{firstName:"",lastName:""};if(n.length===1)return{firstName:"",lastName:n[0]};let a=/^(von|van|de|der|den|zu|zur|vom|del|la)$/i,s=n.length-1;for(;s>1&&a.test(n[s-1]);)s-=1;return{firstName:n.slice(0,s).join(" "),lastName:n.slice(s).join(" ")}}var dd=e=>lt(String(e).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/,"");function tc(e){let n=String(e||"").replace(/\r/g,"").split(`
`).map(lt).filter(Boolean),a={},s=[],i=n.join(`
`),r=i.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi,"@").replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi,"."),o=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(r);o&&(a.email=o[0].toLowerCase());let c=/\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(i)||/\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(i);c?a.website=c[0].replace(/[.,;)]+$/,""):a.email&&!/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(a.email)&&(a.website=`www.${a.email.split("@")[1]}`),n.forEach((m,f)=>{let v=n[f+1]||"";if(!a.phone&&/^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(m)&&!/fax/i.test(m.split(/[:]/)[0])){let $=/(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(m);$&&(a.phone=lt($[1]).replace(/–/g,"-"))}if(!a.vatId&&/(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(m)){let $=/\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/,h=$.exec(m.replace(/^[^:]*:\s*/,""))||(/:\s*$|umsatzsteuergesetz:?$|id$/i.test(m)?$.exec(v):null);h&&(a.vatId=lt(h[1]))}if(!a.taxId&&/^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(m)&&!/ust|umsatzsteuer|vat/i.test(m)){let $=/([\d][\d\s/]{7,}\d)/.exec(m);$&&(a.taxId=lt($[1]))}if(!a.lastName){let $=/^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(m);if($){let h=cd(m,$[0]);h||(h=v),h=h.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i,"").replace(/^(herrn?|frau)\s+/i,"");let g=dd(h);g&&!dr.test(g)&&/^[\p{L}][\p{L}.' -]+$/u.test(g)&&g.split(/\s+/).length<=5&&(Object.assign(a,ud(g)),s.push(`${/inhaber|owner/i.test($[0])?"Inhaber":"Vertreten durch"}: ${lt(h)}`))}}/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(m)&&(s.some($=>$.includes(m))||s.push(m))});let p=/^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u,d=-1;for(let m=0;m<n.length;m++){let f=n[m].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i,""),v=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(f);if(v&&!Vs.test(v[1])){a.street=lt(v[1]).replace(/,$/,""),a.houseNo=lt(v[2]),a.zip=v[4],a.city=lt(v[5]),v[3]&&(a.country=Yl[v[3].toUpperCase()]),d=m;break}let $=p.exec(f);if($&&!/^(tel|fax|phone)/i.test(f)){a.zip=$[2],a.city=lt($[3]),$[1]&&(a.country=Yl[$[1].toUpperCase()]),d=m;let h=n[m-1]||"",g=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(h.replace(/,$/,""));g&&!Vs.test(h)&&!dr.test(h)?(a.street=lt(g[1]),a.houseNo=lt(g[2])):/^(postfach|p\.?o\.? box)/i.test(h)&&(a.street=h);break}}if(!a.country){let m=[n[d+1],...n].filter(Boolean);for(let f of m){let v=f.toLowerCase().replace(/[.,]/g,"").trim();if(Jl[v]){a.country=Jl[v];break}}}let u=n.find(m=>dr.test(m)&&!Vs.test(m)&&m.length<90&&!/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(m));if(u)a.company=u.replace(/^(firma|company|unternehmen)\s*:\s*/i,"");else if(d>0)for(let m=a.street&&!n[d].includes(",")?d-2:d-1;m>=0&&m>=d-5;m--){let f=n[m];if(!(!f||Vs.test(f)||f.includes(":")||/\d{3,}|@|www\./i.test(f))){a.company=f;break}}for(let m of Object.keys(a))a[m]||delete a[m];return{fields:a,extra:s}}var md="https://api.anthropic.com/v1/messages",pd=["company","firstName","lastName","street","houseNo","zip","city","region","country","email","phone","website","taxId","vatId"],Xl={name:"record_contact",description:"Erfasst die Kontaktdaten aus einem Impressum.",input_schema:{type:"object",properties:{company:{type:"string",description:"Firmenname inklusive Rechtsform, wie im Impressum."},firstName:{type:"string",description:"Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt."},lastName:{type:"string",description:"Nachname dieser Person."},street:{type:"string",description:"Straße ohne Hausnummer."},houseNo:{type:"string",description:"Hausnummer."},zip:{type:"string"},city:{type:"string"},region:{type:"string",description:"Bundesland, Kanton oder Emirat, nur wenn genannt."},country:{type:"string",description:"Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ)."},email:{type:"string"},phone:{type:"string",description:"Telefonnummer (nicht Fax)."},website:{type:"string"},taxId:{type:"string",description:"Steuernummer, nur wenn genannt."},vatId:{type:"string",description:"Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt."},register:{type:"string",description:"Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt."},found:{type:"boolean",description:"false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden."}},required:["found"]}},ec=`Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;function fd(e){return{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}}function gd({model:e,text:t,url:n}){return n?{model:e,max_tokens:1500,tools:[{type:"web_fetch_20250910",name:"web_fetch",max_uses:3,max_content_tokens:2e4},Xl],tool_choice:{type:"auto"},messages:[{role:"user",content:`Rufe diese Seite ab: ${n}
Ist es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.

${ec}`}]}:{model:e,max_tokens:1e3,tools:[Xl],tool_choice:{type:"tool",name:"record_contact"},messages:[{role:"user",content:`Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.

${ec}

---
${String(t).slice(0,2e4)}`}]}}function hd(e){let t=e&&Array.isArray(e.content)?e.content:[],n=t.find(o=>o.type==="web_fetch_tool_result"&&o.content&&o.content.type==="web_fetch_tool_result_error"),a=t.find(o=>o.type==="tool_use"&&o.name==="record_contact");if(!a||!a.input){if(n){let o=n.content.error_code;throw new Error(o==="url_not_accessible"?"Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.":`Die Seite konnte nicht gelesen werden (${o}). Kopiere das Impressum und füge es als Text ein.`)}throw new Error("Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.")}let s=a.input;if(s.found===!1)throw new Error("Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.");let i={};for(let o of pd){let c=typeof s[o]=="string"?s[o].trim():"";c&&(i[o]=c.slice(0,200))}i.email&&(i.email=i.email.toLowerCase());let r=[];return typeof s.register=="string"&&s.register.trim()&&r.push(s.register.trim()),{fields:i,extra:r}}function $d(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Das Auslesen ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function mr({apiKey:e,model:t,text:n,url:a}){if(!e)throw new Error("Dafür braucht es den API-Key aus den Einstellungen.");let s=gd({model:t,text:n,url:a}),i=null;for(let r=0;r<3;r++){let o;try{o=await fetch(md,{method:"POST",headers:fd(e),body:JSON.stringify(s)})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}try{i=await o.json()}catch{i=null}if(!o.ok)throw new Error($d(o.status,i));if(i&&i.stop_reason==="pause_turn"){s.messages=[...s.messages,{role:"assistant",content:i.content}];continue}break}return hd(i)}function nc(e){let t=String(e||"").trim();return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""}var ac={company:"Unternehmen",firstName:"Vorname",lastName:"Nachname",street:"Straße",houseNo:"Hausnummer",zip:"PLZ",city:"Ort",region:"Region",country:"Land",email:"E-Mail",phone:"Telefon",website:"Website",taxId:"Steuer-ID",vatId:"USt-IdNr."};function bd({onApply:e}){let[t,n]=k(!1),[a,s]=k(""),[i,r]=k(""),[o,c]=k(""),p=!!y.settings.aiApiKey;async function d(){if(!a.trim()){R("Bitte zuerst den Text des Impressums einfügen.","info");return}c("text");let m=null;p&&(m=await B(()=>mr({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,text:a}))),m||(m=tc(a)),c(""),e(m)}async function u(){let m=nc(i);if(!m){R("Bitte die Adresse des Impressums eintragen.","info");return}c("url");let f=await B(()=>mr({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,url:m}));c(""),f&&e(f)}return t?l`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${E} variant="ghost" small icon="x" title="Schließen" onClick=${()=>n(!1)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${re} class="span-6" label="Impressum einfügen" value=${a} onInput=${s} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${p?"Wird mit der KI ausgelesen (API-Key aus den Einstellungen).":"Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer."} />
      <div class="span-6"><${E} small variant="primary" busy=${o==="text"} onClick=${d}>Text auslesen<//></div>
      <${F} class="span-4" label="Oder Adresse des Impressums" value=${i} onInput=${r} placeholder="firma.de/impressum"
        hint=${p?"Die Seite wird über die Anthropic-API abgerufen und ausgelesen.":"Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen."} />
      <div class="span-2 field field-inline"><${E} small busy=${o==="url"} disabled=${!p} onClick=${u}>Von Website laden<//></div>
    </div>
  </div>`:l`<div class="imprint-open"><${E} small icon="sparkle" onClick=${()=>n(!0)}>Daten aus Impressum übernehmen<//></div>`}function da({customer:e,onClose:t,onSaved:n}){let a=!e||!w("customers",e.id),[s,i]=k(()=>({...rn(),...e||{}})),[r,o]=k((s.tags||[]).join(", ")),[c,p]=k(!1),d=b=>C=>i(x=>({...x,[b]:C})),u=w("customers",s.id),m=!a&&y.invoices.some(b=>b.customerId===s.id),f=Ee(s)?"customer":"contact",v=(b,C)=>new RegExp(`^${b==="contact"?"KO":"K"}-\\d+$`).test(String(C||""));function $(b){i(C=>{let x=Ee(C)?"customer":"contact";return x===b?C:{...C,kind:b,number:v(x,C.number)?"":C.number}})}function h({fields:b,extra:C}){let x=[],N=[];i(_=>{let S={..._};for(let[A,D]of Object.entries(b))D&&(String(_[A]||"").trim()?String(_[A]).trim()!==D&&N.push(ac[A]||A):(S[A]=D,x.push(ac[A]||A)));let j=(C||[]).filter(A=>!String(_.notes||"").includes(A));return j.length&&(S.notes=[String(_.notes||"").trim(),...j].filter(Boolean).join(`
`),x.push("Notizen")),S}),setTimeout(()=>{x.length?R(`Übernommen: ${x.join(", ")}${N.length?`. Nicht überschrieben: ${N.join(", ")}`:""}.`,"good",8e3):R(N.length?`Nichts übernommen – ${N.join(", ")} ist schon ausgefüllt.`:"Im Impressum wurden keine Kontaktdaten erkannt.","info",7e3)},0)}async function g(){p(!0);let b={...s,tags:r.split(",").map(x=>x.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},C=await B(()=>Ua(b));p(!1),C&&(R(a?`${Ee(C)?"Kunde":"Kontakt"} ${C.number} angelegt`:"Gespeichert","good"),n&&n(C),t())}return l`<${Oe} title=${a?"Neuer Kontakt":`${f==="customer"?"Kunde":"Kontakt"} bearbeiten`} onClose=${t} size="lg" onSubmit=${g}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${c}>Speichern<//>`}>
    <${bd} onApply=${h} />
    <div class="form-grid">
      <${xe} class="span-6" label="Art">
        <div class="inline-controls">
          <${pt} label="Art des Kontakts" value=${f} onChange=${$}
            options=${$o.map(b=>({...b,label:b.id==="contact"&&m?"Kontakt (nicht möglich – hat Rechnungen)":b.label}))} />
          <span class="field-hint">${f==="customer"?"Kunden erhalten Rechnungen. Nummer K-…":"Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden."}</span>
        </div>
      <//>
      <${F} class="span-4" label="Unternehmen" value=${s.company} onInput=${d("company")} />
      <${F} class="span-2" label="Nummer" value=${s.number} onInput=${d("number")}
        placeholder=${pn(f,y.customers.filter(b=>b.id!==s.id))}
        hint=${u&&u.number&&u.number!==s.number&&!s.number?`Bisher ${u.number}. Leer = neue Nummer`:"Leer lassen für automatische Nummer"} />
      <${F} class="span-3" label="Vorname" value=${s.firstName} onInput=${d("firstName")} />
      <${F} class="span-3" label="Nachname" value=${s.lastName} onInput=${d("lastName")} />
      <${F} class="span-6" label="Ansprechpartner (falls abweichend)" value=${s.contact} onInput=${d("contact")} />

      <${F} class="span-4" label="Straße" value=${s.street} onInput=${d("street")} />
      <${F} class="span-2" label="Hausnummer" value=${s.houseNo} onInput=${d("houseNo")} />
      <${F} class="span-2" label="PLZ" value=${s.zip} onInput=${d("zip")} />
      <${F} class="span-4" label="Ort" value=${s.city} onInput=${d("city")} />
      <${F} class="span-3" label="Bundesland / Region" value=${s.region} onInput=${d("region")} />
      <${F} class="span-3" label="Land" value=${s.country} onInput=${d("country")} />

      <${F} class="span-3" label="E-Mail" type="email" value=${s.email} onInput=${d("email")} />
      <${F} class="span-3" label="Telefon" value=${s.phone} onInput=${d("phone")} />
      <${F} class="span-6" label="Website" value=${s.website} onInput=${d("website")} />

      <${F} class="span-3" label="Steuer-ID" value=${s.taxId} onInput=${d("taxId")} />
      <${F} class="span-3" label="USt-IdNr. / VAT ID" value=${s.vatId} onInput=${d("vatId")} />

      <${ce} class="span-2" label="Belegsprache" value=${s.language} onChange=${d("language")}
        placeholder="Wie Unternehmen" options=${xt} />
      <${ce} class="span-2" label="Währung" value=${s.currency} onChange=${d("currency")}
        placeholder="Wie Unternehmen" options=${et} />
      <${Ue} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${d("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${F} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${re} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${d("notes")} rows=${3} />
      <div class="span-6"><${je} label="Aktiv" checked=${s.active!==!1} onChange=${d("active")} /></div>
    </div>
  <//>`}function ic(e){let t=Jt(),n=Z(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of nt(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of hn(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of y.payments){let r=w("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=mt(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=Et(i.amountCents,r.currency,r.fx)||0}return a}function rc(){ge();let[e,t]=k(""),[n,a]=k("active"),[s,i]=k("all"),[r,o]=k(""),[c,p]=k(null),d=Nt(),u=ke(()=>ic(d),[y.version,d]),m=!!c&&!w("customers",c.id),f=ke(()=>ir(Jt(),{companyId:d}),[y.version,d]),v=ke(()=>[...new Set(y.customers.flatMap(g=>g.tags||[]))].sort((g,b)=>g.localeCompare(b,"de")),[y.version]),$=y.customers.filter(g=>n==="active"&&g.active===!1||n==="inactive"&&g.active!==!1||s==="customer"&&!Ee(g)||s==="contact"&&Ee(g)||r&&!(g.tags||[]).includes(r)?!1:Te(e,g.number,g.company,g.firstName,g.lastName,g.contact,g.city,g.country,g.email,(g.tags||[]).join(" "),(f.get(g.id)||[]).map(b=>b.name).join(" "))),h=[{key:"number",label:"Nr.",sort:g=>g.number,width:"90px",render:g=>l`<span class="mono-num">${g.number}</span>`},{key:"name",label:"Name",sort:g=>G(g),render:g=>l`<div class="cell-main">${G(g)}</div>
        ${dt(g)&&dt(g)!==G(g)&&l`<div class="cell-sub">${dt(g)}</div>`}`},{key:"kind",label:"Art",sort:g=>Ee(g)?0:1,render:g=>l`<${_e} tone=${Ee(g)?"info":"neutral"} icon=${Ee(g)?"good":"customers"}>${Ee(g)?"Kunde":"Kontakt"}<//>`},{key:"city",label:"Ort",sort:g=>g.city,render:g=>[g.city,g.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:g=>{let b=f.get(g.id)||[];return b.length?l`<div class="svc-tags">${b.slice(0,3).map(C=>l`<span class="tag" title=${C.running?"Läuft (wiederkehrende Vorlage)":""}>${C.running?"↻ ":""}${C.name}</span>`)}
          ${b.length>3&&l`<span class="tag muted-text">+${b.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:g=>(g.tags||[]).map(b=>l`<span class="tag">${b}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:g=>T(u.get(g.id)),render:g=>{let b=u.get(g.id);return b&&T(b)?ee(T(b)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:g=>T(u.get(g.id),"open"),render:g=>{let b=u.get(g.id);return!b||!T(b,"open")?l`<span class="muted-text">–</span>`:l`<span class=${T(b,"overdue")?"tone-bad":""}>${ee(T(b,"open"))}</span>`}},{key:"status",label:"",render:g=>g.active===!1?l`<${_e} tone="mute">Inaktiv<//>`:""}];return l`
    <${ve} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${E} variant="primary" icon="plus" onClick=${()=>p(rn({kind:"contact"}))}>Neuer Kontakt<//>
    <//>
    ${y.customers.length>0&&l`<div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${Lt} label="Art" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:y.customers.length},{id:"customer",label:"Kunden",count:y.customers.filter(Ee).length},{id:"contact",label:"Kontakte",count:y.customers.filter(g=>!Ee(g)).length}]} />
      <select class="input select filter-select" value=${n} aria-label="Status" onChange=${g=>a(g.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${v.length>0&&l`<select class="input select filter-select" value=${r} aria-label="Nach Tag filtern" onChange=${g=>o(g.target.value)}>
        <option value="">Alle Tags</option>
        ${v.map(g=>l`<option value=${g}>${g}</option>`)}
      </select>`}
    </div>`}
    <${ot} columns=${h} rows=${$} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${g=>Y(`/customers/${g.id}`)}
      empty=${y.customers.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`:l`<${fe} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${E} variant="primary" icon="plus" onClick=${()=>p(rn({kind:"contact"}))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${c&&l`<${da} customer=${c} onClose=${()=>p(null)}
      onSaved=${g=>{m&&Y(`/customers/${g.id}`)}} />`}
  `}function oc({id:e}){ge();let t=w("customers",e),[n,a]=k(!1),[s,i]=k(null),[r,o]=k(null),[c,p]=k(null),[d,u]=k(!1);if(!t)return l`<${fe} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${E} onClick=${()=>Y("/customers")}>Zu den Kontakten<//>
    <//>`;let m=Z(),f=ic(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},v=ir(Jt(),{customerId:e}).get(e)||[],$=y.notes.filter(I=>I.customerId===e),h=ts(y.appointments.filter(I=>I.customerId===e)),g=h.filter(I=>I.status==="planned"&&I.date>=m),b=y.todos.filter(I=>I.customerId===e),C=b.filter(I=>!I.done).sort(Ps),x=b.filter(I=>I.done).sort((I,K)=>(I.doneAt||"")<(K.doneAt||"")?1:-1),N=y.invoices.filter(I=>I.customerId===e).sort((I,K)=>I.issueDate<K.issueDate?1:-1),_=y.quotes.filter(I=>I.customerId===e).sort((I,K)=>I.issueDate<K.issueDate?1:-1),S=[...new Set([...N,..._].map(I=>I.companyId))];async function j(){let I=$.length||h.length?` Mitgelöscht werden ${h.length} ${h.length===1?"Termin":"Termine"} und ${$.length} ${$.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await le({title:`${Ee(t)?"Kunde":"Kontakt"} löschen?`,text:`${G(t)} wird endgültig gelöscht.${I}`,confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await nl(e),!0))&&(R("Gelöscht","good"),Y("/customers"))}async function A(I){let K=I==="customer";if(!await le({title:K?`${G(t)} zum Kunden machen?`:`${G(t)} als Kontakt führen?`,text:K?`Der Kontakt wird Kunde und bekommt eine Kundennummer (${pn("customer")}). Das passiert sonst automatisch mit der ersten Rechnung.`:`Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${pn("contact")}).`,confirmLabel:K?"Zum Kunden machen":"Als Kontakt führen"}))return;let J=await B(()=>Ua({...t,kind:I}));J&&R(`${K?"Kunde":"Kontakt"} ${J.number}`,"good")}let D=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),U=[{key:"number",label:"Nummer",render:I=>l`<a href=${`#/invoices/${I.id}`} class="cell-main">${I.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:I=>l`<${Le} id=${I.companyId} />`},{key:"date",label:"Datum",render:I=>V(I.issueDate)},{key:"due",label:"Fällig",render:I=>V(I.dueDate)},{key:"total",label:"Betrag",align:"right",render:I=>l`<${Yt} doc=${I} />`},{key:"status",label:"Status",render:I=>l`<${Ha} inv=${I} />`}],M=[{key:"number",label:"Nummer",render:I=>l`<a href=${`#/quotes/${I.id}`} class="cell-main">${I.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:I=>l`<${Le} id=${I.companyId} />`},{key:"date",label:"Datum",render:I=>V(I.issueDate)},{key:"valid",label:"Gültig bis",render:I=>V(I.validUntil)},{key:"total",label:"Betrag",align:"right",render:I=>l`<${Yt} doc=${I} />`},{key:"status",label:"Status",render:I=>l`<${ja} quote=${I} />`}];return l`
    <${ve} title=${G(t)} back=${{href:"#/customers",label:"Kontakte"}}
      sub=${l`<span class="badges"><${_e} tone=${Ee(t)?"info":"neutral"} icon=${Ee(t)?"good":"customers"}>${Ee(t)?"Kunde":"Kontakt"}<//>${t.active===!1?l`<${_e} tone="mute">Inaktiv<//>`:""}</span>
        <span class="head-meta">${Ee(t)?"Kundennummer":"Kontaktnummer"} ${t.number}${(t.formerNumbers||[]).length?` (vorher ${t.formerNumbers.join(", ")})`:""}</span>`}>
      <${E} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${E} variant="primary" icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${ft} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>Y(`/quotes/new?customer=${e}`)},!Ee(t)&&{label:"Zum Kunden machen",icon:"good",onClick:()=>A("customer")},Ee(t)&&!N.length&&{label:"Als Kontakt führen",icon:"customers",onClick:()=>A("contact")},{label:"Löschen",icon:"trash",danger:!0,disabled:Gi(e),onClick:j}]} />
    <//>

    <div class="stat-row">
      <${Me} label="Umsatz gesamt (netto)" value=${ee(T(f))} sub=${`≈ ${ze(Se(f))}, ${f.count} Rechnungen`} />
      <${Me} label="Offene Forderungen" value=${ee(T(f,"open"))} sub=${`≈ ${ze(Se(f,"open"))}`} />
      <${Me} label="Davon überfällig" value=${ee(T(f,"overdue"))} tone=${T(f,"overdue")?"bad":""} sub=${`≈ ${ze(Se(f,"overdue"))}`} />
      <${Me} label="Bezahlt" value=${ee(T(f,"paid"))} sub=${`≈ ${ze(Se(f,"paid"))}`} />
    </div>

    <div class="split">
      <div class="split-main">
        <${Q} title=${`To-dos${C.length?` (${C.length})`:""}`} action=${x.length>0&&l`<button type="button" class="link-btn small"
            onClick=${()=>u(!d)}>${d?"Erledigte ausblenden":`${x.length} erledigte zeigen`}</button>`}>
          <${zn} items=${C} showCustomer=${!1} onEdit=${p} />
          ${d&&l`<${zn} items=${x} showCustomer=${!1} onEdit=${p} />`}
          <${Ks} customerId=${e} />
        <//>
        <${yd} rows=${v} />
        <${Q} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${E} small icon="note" onClick=${()=>i(ho({customerId:e}))}>Eintrag<//>
            <${E} small icon="calendar" onClick=${()=>o(vd(t))}>Termin planen<//>
          </div>`}>
          ${g.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${js} items=${g} onOpen=${o} compact />`}
          <${xd} notes=${$} appts=${h.filter(I=>!(I.status==="planned"&&I.date>=m))}
            onNote=${i} onAppt=${o} hasUpcoming=${g.length>0} />
        <//>
        <${Q} title="Rechnungen" flush>
          <${ot} columns=${U} rows=${N} onRowClick=${I=>Y(`/invoices/${I.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${Q} title="Angebote" flush>
          <${ot} columns=${M} rows=${_} onRowClick=${I=>Y(`/quotes/${I.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kunden.</p>`} />
        <//>
      </div>
      <aside class="split-side">
        <${Q} title="Kontakt">
          <${mn} rows=${[["Ansprechpartner",dt(t)],["Adresse",D.length?l`${D.map(I=>l`<div>${I}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(xt.find(I=>I.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(I=>l`<span class="tag">${I}</span>`):""]]} />
        <//>
        <${Q} title="Abgerechnet über">
          ${S.length?l`<ul class="plain-list">${S.map(I=>l`<li><${Le} id=${I} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${Q} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${da} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${kd} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${Gs} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${Os} key=${c.id} todo=${c} onClose=${()=>p(null)} />`}
  `}function vd(e){let t=[...y.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=Nt()&&w("companies",Nt())||t&&w("companies",t.companyId)||de()[0];return $s(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function yd({rows:e}){let t=n=>(kn.find(a=>a.id===n)||{}).label||"";return l`<${Q} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${ie()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${te} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Le} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${An(n.qty)}${n.unit?` ${Es(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${T(n)?l`${ee(T(n))}<div class="cell-sub">≈ ${ze(Se(n))}</div>`:"–"}</td>
            <td>${n.last?V(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var wd={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},sc=e=>(gs.find(t=>t.id===e)||gs[0]).label;function xd({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await le({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await sl(o.id),!0))&&R("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let u=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${te} name=${wd[u.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${u.title||sc(u.kind)}</span>
              <span class="tl-meta">${sc(u.kind)} · ${V(u.date)}</span>${u.companyId&&l`<${Le} id=${u.companyId} />`}</div>
            ${u.text&&l`<div class="tl-text">${u.text}</div>`}
          </div>
          <div class="tl-actions">
            <${E} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(u)} />
            <${E} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(u)} />
          </div>
        </li>`}let c=o.a,p=Hn[c.status]||Hn.planned,d=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${te} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${V(c.date)}, ${c.start} Uhr</span>
            <${_e} tone=${d?"warn":p.tone}>${d?"Nicht dokumentiert":p.label}<//>
            <${Le} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
          ${c.nextSteps&&l`<div class="tl-text"><span class="strong">Nächste Schritte:</span> ${c.nextSteps}</div>`}
          ${(()=>{let u=y.todos.filter(m=>m.appointmentId===c.id);return u.length>0&&l`<div class="tl-todos">${u.map(m=>l`<span class=${`tag${m.done?" is-done":""}`}>${m.done?"✓":"○"} ${m.title}</span>`)}</div>`})()}
        </div>
        <div class="tl-actions">
          ${d&&l`<${E} small onClick=${()=>Hs(c)}>Dokumentieren<//>`}
          <${E} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function kd({note:e,onClose:t}){let n=!w("notes",e.id),[a,s]=k(()=>({...e})),[i,r]=k(!1),o=p=>d=>s(u=>({...u,[p]:d}));async function c(){r(!0);let p=await B(()=>al(a));r(!1),p&&(R(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${Oe} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${ce} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${gs} />
      <${qe} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${ce} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${de().map(p=>({id:p.id,label:p.name}))} />
      <${F} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${re} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var Dd=["Mo","Di","Mi","Do","Fr","Sa","So"],lc=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ts=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),Qs=e=>(w("companies",e)||{}).brandColor||"var(--ink-2)";function Xt(e){let t=w("customers",e.customerId);return t?G(t):e.contactName||""}function uc(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===rt())return n;let{start:a}=bn(e),s=qs(a,rt()),i=Vl(a,rt());return s===e.start&&i===e.date?`${n} ${Qa(e.timeZone,a)}`:`${n} ${Qa(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${V(i)}`:""})`}function Sd(e){let t=[...new Set([rt(),...hs,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${Qa(a,n)})${a===rt()?", dieses Gerät":""}`}))}function Gs({appointment:e,onClose:t}){let n=!w("appointments",e.id),[a,s]=k(()=>({...e})),[i,r]=k(!1),[o,c]=k(null),[p,d]=k(null),u=de(),m=N=>_=>s(S=>({...S,[N]:_})),f=y.customers.filter(N=>N.active!==!1||N.id===a.customerId).sort((N,_)=>G(N).localeCompare(G(_),"de")).map(N=>({id:N.id,label:G(N),sub:[N.kind==="contact"?"Kontakt":"Kunde",N.number,N.city].filter(Boolean).join(", "),search:`${N.firstName} ${N.lastName} ${N.contact} ${N.email}`}));function v(N){let _=w("companies",N),S=w("companies",a.companyId);s(j=>{let A={...j,companyId:N};if(!_)return A;let D=(M,I)=>!j[M]||S&&String(j[M])===String(S[I]||"");D("meetingProvider","meetingProvider")&&(A.meetingProvider=_.meetingProvider||""),D("meetingUrl","meetingUrl")&&(A.meetingUrl=_.meetingUrl||""),D("meetingDetails","meetingDetails")&&(A.meetingDetails=_.meetingDetails||""),_.meetingTimeZone&&(!j.timeZone||S&&j.timeZone===(S.meetingTimeZone||rt()))&&(A.timeZone=_.meetingTimeZone);let U=w("customers",j.customerId);return U&&U.language||(A.language=_.language||"de"),A})}function $(N){let _=w("customers",N),S=w("customers",a.customerId);s(j=>({...j,customerId:N||"",attendees:!j.attendees||S&&j.attendees===S.email?_&&_.email||"":j.attendees,language:_&&_.language?_.language:j.language}))}function h(N){s(_=>{let S=U=>{let[M,I]=String(U||"0:0").split(":").map(Number);return M*60+I},j=Math.max(S(_.end)-S(_.start),15),A=Math.min(S(N)+j,1439),D=/^\d\d:\d\d$/.test(N)?`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`:_.end;return{..._,start:N,end:D}})}async function g(){r(!0);let N=await B(()=>il(a));r(!1),N&&(R(n?"Termin angelegt":"Termin gespeichert","good"),n?d(N):t(N))}async function b(){if(!await le({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${V(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await ul(a.id),!0))&&(R("Termin gelöscht","good"),t())}if(p)return l`<${Td} appointment=${p} justCreated onClose=${()=>t(p)} />`;let C=w("customers",a.customerId),x=w("appointments",a.id);return l`<${Oe} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${g}
    footer=${l`
      ${!n&&l`<${ft} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>d(x||a)},x&&{label:x.status==="done"?"Dokumentation bearbeiten":"Termin dokumentieren",icon:"edit",onClick:()=>{t(),Hs(x)}},x&&x.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>Id(x,t)},x&&x.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await B(()=>Ns(x.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:b}]} />`}
      <span class="spacer"></span>
      <${E} onClick=${()=>t()}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${x&&x.status!=="planned"&&l`<${Ne} tone=${x.status==="done"?"good":"warn"}>
      ${x.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${x.outcome?l`<div class="pre notice-sub">${x.outcome}</div>`:""}
      ${x.nextSteps?l`<div class="pre notice-sub">Nächste Schritte: ${x.nextSteps}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${ce} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${v}
        placeholder="Unternehmen wählen" options=${u.map(N=>({id:N.id,label:N.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${xe} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${zt} id="appt-customer" options=${f} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${$} onCreate=${N=>c({company:N,kind:"contact"})} createLabel="als Kontakt anlegen" />
      <//>
      <${F} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${m("contactName")}
        placeholder=${C?dt(C)||G(C):"Name"} hint="Für die Anrede in der Einladung" />
      <${F} class="span-6" label="Titel" value=${a.title} onInput=${m("title")}
        placeholder=${C?`Termin mit ${G(C)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${qe} class="span-2" label="Datum" value=${a.date} onInput=${m("date")} />
      <${F} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${h} />
      <${F} class="span-1" label="Ende" type="time" value=${a.end} onInput=${m("end")} />
      <${ce} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${m("timeZone")} options=${Sd(a.timeZone)}
        hint=${a.timeZone!==rt()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&qs(bn(a).start,rt())!==a.start?`Bei dir: ${qs(bn(a).start,rt())} Uhr`:""} />
      <${xe} class="span-4" label="Art">
        <${pt} label="Art des Termins" value=${a.kind} onChange=${m("kind")} options=${ki} />
      <//>
      <${xe} class="span-2" label="Sprache der Einladung">
        <${pt} label="Sprache der Einladung" value=${a.language||"de"} onChange=${m("language")} options=${xt} />
      <//>
      ${a.kind==="video"&&l`
        <${ce} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${m("meetingProvider")}
          placeholder="Bitte wählen" options=${Gn} />
        <${F} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${m("meetingUrl")} placeholder="https://…"
          hint=${!a.meetingUrl&&a.companyId?"Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.":""} />
        <${re} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${m("meetingDetails")} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind==="phone"&&l`<${F} class="span-6" label="Telefon" value=${a.location} onInput=${m("location")} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind==="onsite"&&l`<${F} class="span-6" label="Ort" value=${a.location} onInput=${m("location")} placeholder="Adresse oder Treffpunkt" />`}
      <${F} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${m("attendees")}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${re} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${m("agenda")} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${o&&l`<${da} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${N=>$(N.id)} />`}
  <//>`}var dc=null,pr=new Set,mc=e=>{dc=e;for(let t of pr)t(e)};function Hs(e,t){mc({appt:e,done:t})}function pc(){let[e,t]=k(dc);return ue(()=>(pr.add(t),()=>pr.delete(t)),[]),e?l`<${Cd} key=${e.appt.id} appointment=${e.appt}
    onClose=${n=>{mc(null),n&&e.done&&e.done(n)}} />`:null}function Cd({appointment:e,onClose:t}){let n=w("appointments",e.id)||e,[a,s]=k(n.outcome||""),[i,r]=k(n.nextSteps||""),o=Ce(Z(),7),[c,p]=k([{key:1,title:"",due:o}]),[d,u]=k(!1),m=y.todos.filter(h=>h.appointmentId===n.id),f=(h,g)=>p(b=>b.map(C=>C.key===h?{...C,...g}:C)),v=()=>p(h=>[...h,{key:Math.max(0,...h.map(g=>g.key))+1,title:"",due:o}]);async function $(){u(!0);let h=await B(()=>rl(n.id,{outcome:a,nextSteps:i,todos:c}));u(!1),h&&(R(h.todos.length?`Termin dokumentiert, ${h.todos.length} ${h.todos.length===1?"To-do":"To-dos"} angelegt`:"Termin dokumentiert","good"),t(h.appointment))}return l`<${Oe} title="Termin dokumentieren" onClose=${()=>t()} size="lg" onSubmit=${$}
    footer=${l`<${E} onClick=${()=>t()}>Abbrechen<//><${E} variant="primary" type="submit" busy=${d}>Speichern<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${Qs(n.companyId)}`}></span>
      <div><div class="strong">${n.title}</div>
        <div class="muted-text">${Ja(n.date)}, ${n.start}–${n.end}${Xt(n)?` · ${Xt(n)}`:""}</div></div>
    </div>
    <div class="form-grid">
      <${re} class="span-6" label="Ergebnis / kurzes Statement" value=${a} onInput=${s} rows=${3}
        placeholder="Was wurde besprochen, wie ist es gelaufen?" />
      <${re} class="span-6" label="Nächste Schritte" value=${i} onInput=${r} rows=${2}
        placeholder="z. B. Angebot bis Freitag, Folgetermin in zwei Wochen" />
    </div>
    <h3 class="sub-head">To-dos aus diesem Termin</h3>
    ${m.length>0&&l`<${zn} items=${m} showCustomer=${!1} />`}
    <div class="doc-todos">
      ${c.map((h,g)=>l`<div class="doc-todo" key=${h.key}>
        <input class="input" placeholder="To-do, z. B. Angebot schicken" aria-label=${`To-do ${g+1}`} value=${h.title}
          onInput=${b=>f(h.key,{title:b.target.value})}
          onKeyDown=${b=>{b.key==="Enter"&&(b.preventDefault(),h.title.trim()&&v())}} />
        <input class="input" type="date" aria-label=${`To-do ${g+1}: fällig am`} value=${h.due} onInput=${b=>f(h.key,{due:b.target.value})} />
        <${E} variant="ghost" small icon="trash" title="Zeile entfernen" disabled=${c.length===1&&!h.title}
          onClick=${()=>p(b=>b.length===1?[{key:h.key+1,title:"",due:o}]:b.filter(C=>C.key!==h.key))} />
      </div>`)}
      <${E} small icon="plus" onClick=${v}>Weiteres To-do<//>
    </div>
    <p class="field-hint">To-dos erscheinen beim Kontakt, im Dashboard und unter „To-dos“. Leere Zeilen werden ignoriert.</p>
  <//>`}var fr=(e=new Date)=>ts(y.appointments.filter(Ge).filter(t=>Gl(t,e)));async function Ed(e){await B(()=>Ns(e.id,"done",""))&&R("Als stattgefunden vermerkt","good")}async function Ws(e,t){let n=t==="morning"?(()=>{let s=new Date;return s.setDate(s.getDate()+1),s.setHours(9,0,0,0),s})():new Date(Date.now()+t*36e5);await B(()=>ol(e.id,n.toISOString()))&&R(`Erinnerung verschoben auf ${n.toLocaleString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})} Uhr`,"good")}function fc(){let e=fr();return e.length?l`<section class="followups" aria-label="Termine nachbereiten">
    <div class="followups-head"><${te} name="calendar" /><strong>${e.length===1?"Ein Termin ist vorbei":`${e.length} Termine sind vorbei`}</strong>
      <span class="muted-text">Möchtest du Ergebnis, nächste Schritte oder To-dos festhalten?</span></div>
    <ul>
      ${e.slice(0,5).map(t=>l`<li key=${t.id}>
        <span class="followup-what" style=${`--chip:${Qs(t.companyId)}`}>
          <span class="strong">${t.title}</span>
          <span class="cell-sub">${V(t.date)}, ${t.start}–${t.end}${Xt(t)?` · ${Xt(t)}`:""}</span>
        </span>
        <span class="followup-actions">
          <${E} small variant="primary" icon="edit" onClick=${()=>Hs(t)}>Ja, dokumentieren<//>
          <${E} small onClick=${()=>Ed(t)}>Nein<//>
          <${ft} small label="Später" icon="clock" items=${[{label:"In einer Stunde",onClick:()=>Ws(t,1)},{label:"In drei Stunden",onClick:()=>Ws(t,3)},{label:"Morgen früh",onClick:()=>Ws(t,"morning")},{label:"In drei Tagen",onClick:()=>Ws(t,72)}]} />
        </span>
      </li>`)}
    </ul>
    ${e.length>5&&l`<p class="cell-sub">und ${e.length-5} weitere im Kalender</p>`}
  </section>`:null}async function Id(e,t){let n=await le({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await B(()=>Ns(e.id,"cancelled",n));a&&(R("Termin abgesagt","good"),t&&t(a))}async function Nd(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function cc(e){return`${Gt(`Termin ${e.date} ${e.start.replace(":","-")} ${Xt(e)||e.title||""}`.trim())}.ics`}function Td({appointment:e,onClose:t,justCreated:n}){let a=w("companies",e.companyId),s=w("customers",e.customerId),i=ke(()=>Hl(e,{company:a,customer:s,settings:y.settings}),[e.id,e.updatedAt]),[r,o]=k(e.attendees||s&&s.email||""),[c,p]=k(i.subject),[d,u]=k(i.body),[m,f]=k(""),v=typeof navigator<"u"&&!!navigator.canShare,$=()=>new Blob([jl(e,{summary:c,description:d})],{type:"text/calendar;charset=utf-8"});function h(){st($(),cc(e))}async function g(){let x=await Nd(`${c}

${d}`);R(x?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",x?"good":"bad")}function b(){let x=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`;Yn(),window.location.href=x}async function C(){f("share"),await B(async()=>{let x=new File([$()],cc(e),{type:"text/calendar"});if(!navigator.canShare({files:[x]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[x],title:c,text:d})}catch(N){if(!N||N.name!=="AbortError")throw N}}),f("")}return l`<${Oe} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${E} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${Ja(e.date)}, ${uc(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${ca(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${Ne} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${F} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${F} class="span-6" label="Betreff" value=${c} onInput=${p} />
      <${re} class="span-6" label="Text" value=${d} onInput=${u} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${E} icon="calendar" onClick=${h}>Kalenderdatei herunterladen<//>
      <${E} icon="copy" onClick=${g}>Text kopieren<//>
      <${E} icon="mail" onClick=${b} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${v&&l`<${E} icon="send" busy=${m==="share"} onClick=${C}>Teilen<//>`}
    </div>
  <//>`}function Ad(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function Rd({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${Qs(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${Xt(e)?` (${Xt(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function gc({params:e}){ge();let t=Z(),[n,a]=k("month"),[s,i]=k(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=k(()=>e&&e.open&&w("appointments",e.open)?w("appointments",e.open):null),[c,p]=k(!1),[d,u]=k(""),m=pe(),f=ts(y.appointments.filter(Ge)).filter(x=>!d||Te(d,x.title,Xt(x),x.agenda,x.outcome)),v=new Map;for(let x of f)v.has(x.date)||v.set(x.date,[]),v.get(x.date).push(x);function $(x){let N=m||(de().length===1?de()[0]:de()[0]);o($s(N,{date:x||t}))}let h=x=>i(N=>{let _=new Date(Date.UTC(N.y,N.m+x,1));return{y:_.getUTCFullYear(),m:_.getUTCMonth()}}),g=Ad(s.y,s.m),b=f.filter(x=>x.date>=t),C=f.filter(x=>x.date<t).reverse();return l`
    <${ve} title="Termine" sub=${m?`Termine über ${m.name}`:"Alle Termine aller Unternehmen"}>
      <${pt} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${E} variant="primary" icon="plus" onClick=${()=>$(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${E} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>h(-1)} />
        <h2 class="cal-title">${lc[s.m]} ${s.y}</h2>
        <${E} small icon="chevronRight" title="Nächster Monat" onClick=${()=>h(1)} />
        <${E} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${de().map(x=>l`<span class="cal-legend-item"><i style=${`background:${x.brandColor}`}></i>${x.shortName||x.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${lc[s.m]} ${s.y}`}>
        ${Dd.map(x=>l`<div class="cal-wd" role="columnheader">${x}</div>`)}
        ${g.map(x=>{let N=v.get(x.iso)||[];return l`<div role="gridcell" class=${`cal-day${x.inMonth?"":" is-out"}${x.iso===t?" is-today":""}`}
            onClick=${()=>$(x.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(x.iso.slice(8,10))}</span>
            ${N.slice(0,3).map(_=>l`<${Rd} key=${_.id} a=${_} onOpen=${o} />`)}
            ${N.length>3&&l`<button type="button" class="cal-more" onClick=${_=>{_.stopPropagation(),a("list")}}>+${N.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${d} onInput=${x=>u(x.target.value)} />
        <${Lt} label="Zeitraum" value=${c?"past":"next"} onChange=${x=>p(x==="past")}
          options=${[{id:"next",label:"Anstehend",count:b.length},{id:"past",label:"Vergangen",count:C.length}]} />
      </div>
      ${(c?C:b).length?l`<${js} items=${c?C:b} onOpen=${o} showCustomer />`:l`<${fe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${E} variant="primary" icon="plus" onClick=${()=>$(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${Gs} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function js({items:e,onOpen:t,showCustomer:n,compact:a}){let s=Z(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=Hn[r.status]||Hn.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Ce(s,1)?"Morgen, ":""}${Ja(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${Qs(r.companyId)}`}>
            <span class="appt-time">${a?l`${V(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${_e} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&Xt(r),r.kind==="video"?ca(r.meetingProvider)||"Videocall":(ki.find(p=>p.id===r.kind)||{}).label,r.timeZone!==rt()?uc(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Le} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function hc(){let[e,t]=k(null),n=Z(),a=Ce(n,14),s=new Date,i=ts(y.appointments.filter(Ge).filter(r=>r.status==="planned"&&r.date>=n&&r.date<=a&&bn(r).end>s)).slice(0,6);return i.length?l`<${Q} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${js} items=${i} onOpen=${t} showCustomer />
    ${e&&l`<${Gs} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:l`<${Q} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
      <p class="muted-text">Keine Termine in den nächsten 14 Tagen.</p>
    <//>`}async function Js(e,t){let n=yt(e,t),a=await ua(es(n));return st(a,n.fileName),{blob:a,model:n}}function Bd(e,t){let n=e.snapshot&&e.snapshot.company||w("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||w("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?Wt(e,Ve(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:V(e.issueDate,s),DUE:V(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:ta(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:ta(i,e.currency,s),CONTACT:dt(a)||G(a),CUSTOMER:G(a),SENDER:y.settings.userName?`${y.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function Ud(e){let n=cn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,ht.length)}function ns(e,t){if(!(t>0))return 0;let n=y.settings.reminderDays||[7,14,21],a=cn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return ht.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function $c(e){return[...cn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function ma({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=Bd(e,t),[o,c]=k(()=>n==="reminder"?Ud(e.id):0),p=M=>n==="reminder"?((y.settings.reminderTemplates||{})[s]||{})[M]||{subject:"",body:""}:((y.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[d,u]=k(i),[m,f]=k(()=>bt(p(o).subject,r)),[v,$]=k(()=>bt(p(o).body,r)),[h,g]=k(""),[b,C]=k(null),x=typeof navigator<"u"&&!!navigator.canShare;function N(M){let I=Number(M);c(I),f(bt(p(I).subject,r)),$(bt(p(I).body,r))}async function _(){if(b)return b;let M=yt(e,t),K={blob:await ua(es(M)),name:M.fileName};return C(K),K}async function S(){g("pdf"),await B(async()=>{let M=await _();st(M.blob,M.name)}),g("")}function j(){let M=`mailto:${encodeURIComponent(d.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(v)}`;Yn(),window.location.href=M}async function A(){g("share"),await B(async()=>{let M=await _(),I=new File([M.blob],M.name,{type:"application/pdf"});if(!navigator.canShare({files:[I]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[I],title:m,text:v})}catch(K){if(K&&K.name==="AbortError")return;throw K}}),g("")}async function D(){g("done");let M=await B(async()=>(n==="reminder"?await Nl(e.id,o,m):t==="quotes"?await Mn(e.id,"sent"):await _n(e.id,!0),!0));g(""),M&&(R(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let U=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${Oe} title=${U} onClose=${a} size="lg"
    footer=${l`
      <${E} onClick=${a}>Schließen<//>
      <${E} variant="primary" icon="check" busy=${h==="done"} onClick=${D}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${Ne} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${ce} class="span-2" label="Stufe" value=${o} onChange=${N}
        options=${ht.map(M=>({id:M.id,label:M.label}))} />`}
      <${F} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${d} onInput=${u}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${F} class="span-6" label="Betreff" value=${m} onInput=${f} />
      <${re} class="span-6" label="Text" value=${v} onInput=${$} rows=${10} />
    </div>
    <div class="send-steps">
      <${E} icon="download" busy=${h==="pdf"} onClick=${S}>PDF herunterladen<//>
      <${E} icon="mail" onClick=${j} disabled=${!d.trim()}>E-Mail-Programm öffnen<//>
      ${x&&l`<${E} icon="send" busy=${h==="share"} onClick=${A}>Mit PDF teilen<//>`}
    </div>
  <//>`}var _d=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],Md=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],zd=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],Ld=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],Pd=e=>.86+e*37%7/100,pa=(e,t,n)=>{let a=Pd(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:_t(e,a,s)};function Ys(){return Do(Kd)}async function Kd(){if(y.invoices.length||y.customers.length||y.expenses.length||y.services.length)throw new ye("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=de();if(!e.length)throw new ye("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=Z(),a=[];for(let m of _d)a.push(await Ua(rn(m)));let s=[];for(let m of Md)s.push(await Ts(on({...m,currency:"USD"})));let i=[];for(let[m,f,v,$,h,g,b]of zd){let C=t(v),x=a[$],N=qt(n.slice(0,8)+"01",-m,f);N>n&&(N=n);let _=x.currency||"USD",S=pa(_,m,N),j=h.map(([M,I])=>{let K=gt(s[M],C),P=_==="EUR"?Math.round(K.priceCents*S.usdToEur/500)*500:K.priceCents;return{...K,qty:I,priceCents:P}}),A={...kt(C),customerId:x.id,issueDate:N,serviceDate:N,paymentTermDays:x.paymentTermDays!=null&&x.paymentTermDays!==""?Number(x.paymentTermDays):14,currency:_,language:x.language||C.language,items:j,discount:{type:"pct",value:b},fx:S},D=await Ma(A);i.push({inv:D,pay:g,back:m}),(m>0||g!=="none")&&await _n(D.id,!0);let U=D.totals.totalCents;if(g==="full"){let M=Ce(N,9+f%9);await za(D.id,{date:M>n?n:M,amountCents:U,method:"Überweisung",note:""})}else if(g==="half"){let M=Ce(N,12);await za(D.id,{date:M>n?n:M,amountCents:Math.round(U/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(m,f,v)=>{let $=qt(n.slice(0,8)+"01",-v,14),h=m.currency||"USD",g=pa(h,v,$),b=gt(s[f],r);return Ma({...kt(r),customerId:m.id,issueDate:$,serviceDate:$,currency:h,language:m.language||"de",paymentTermDays:14,items:[{...b,priceCents:h==="EUR"?Math.round(b.priceCents*g.usdToEur/500)*500:b.priceCents}],fx:g})},c=await o(a[3],2,4);await Us(c.id,"Beispiel: doppelt ausgestellt");let p=await o(a[4],6,3);await _s(p.id,"Beispiel: Leistung wurde nicht erbracht."),await As({...kt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...gt(s[4],t(1)),qty:6}],fx:pa("USD",0,n)});let d=await La({...jn(t(0)),customerId:a[1].id,issueDate:Ce(n,-6),validUntil:Ce(n,24),currency:"EUR",language:"de",fx:pa("EUR",0,n),items:[{...gt(s[0],t(0)),priceCents:42e4},{...gt(s[1],t(0)),qty:6,priceCents:85e3}]});await Mn(d.id,"sent");let u=await La({...jn(t(1)),customerId:a[5].id,issueDate:Ce(n,-20),validUntil:Ce(n,10),currency:"USD",language:"en",fx:pa("USD",0,n),items:[{...gt(s[5],t(1))}]});await Mn(u.id,"accepted");for(let[m,f,v,$,h,g,b,C,x]of Ld){let N=Ce(n,-m);await fn(Ea({companyId:t(f).id,vendor:v,category:$,description:h,currency:g,invoiceDate:N,paymentDate:Ce(N,2)>n?n:Ce(N,2),netCents:b,taxCents:C,totalCents:b+C,paymentMethod:x,fx:pa(g,Math.floor(m/30),N)}))}return await Pa({...Wn(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[gt(s[1],t(0)),gt(s[2],t(0))]}),await Pa({...Wn(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:qt(n,4),items:[{...gt(s[3],t(0)),qty:12,priceCents:3e3}]}),await W(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:i.length}}async function bc(){let e=new Set(["companies","assets","settings"]);await Dn(Dt,async t=>{for(let n of Dt)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await Cn(),Na()}function Od(){let e=de(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:y.customers.length>0,label:"Ersten Kontakt anlegen",text:"Kunden und Kontakte gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:y.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:y.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=k(!1);async function i(){s(!0);let r=await B(async()=>(await Ys(),!0));s(!1),r&&R("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
    <h1>Willkommen bei BBC Finance</h1>
    <p class="lead">Vier Schritte, dann steht hier deine Finanzübersicht.</p>
    <ol class="steps">
      ${n.map((r,o)=>l`<li class=${r.done?"is-done":""}>
        <a href=${r.href}>
          <span class="step-mark">${r.done?l`<${te} name="check" size=${16} />`:o+1}</span>
          <span class="step-text"><strong>${r.label}</strong><span>${r.text}</span></span>
          <${te} name="chevronRight" size=${16} />
        </a>
      </li>`)}
    </ol>
    <p class="onboarding-alt">
      Erst einmal ansehen, wie es mit Daten aussieht?${" "}
      <button type="button" class="link-btn" disabled=${a} onClick=${i}>${a?"Beispieldaten werden geladen …":"Beispieldaten laden"}</button>.${" "}
      Schon ein Backup vorhanden?${" "}<a href="#/settings">Backup einspielen</a>.
    </p>
  </section>`}var gr=e=>[...e].sort((t,n)=>T(n)-T(t));function vc(){ge();let e=Z(),t=pe(),n=Nt(),a=Jt(),s=de(),i=ke(()=>{let S=po(12,e),j=ut("year",e);return{kpi:Bl(a,n,e),months:S,series:qa(a,{companyId:n,months:S}),byCustomer:Za(a,{companyId:n,range:j}),byService:Ga(a,{companyId:n,range:j}),byCompany:Va(a,{range:j}),rec:hn(a,{companyId:n},e)}},[y.version,n,e]),r=ie();if(!(y.invoices.length||y.expenses.length||y.customers.length||y.services.length))return l`<${Od} />`;let{kpi:c}=i,p=At(e.slice(0,7)),d=i.rec.filter(S=>S.status==="overdue"),u=i.rec.filter(S=>S.status!=="overdue"&&S.inv.dueDate&&S.inv.dueDate<=Ce(e,7)),m=y.recurring.filter(Ge).filter(S=>ia(S,e)),f=y.expenses.filter(S=>S.status==="review"&&(Ge(S)||!S.companyId)),v=y.invoices.filter(Ge).filter(S=>S.status==="draft"),$=v.filter(S=>S.number),h=v.filter(S=>!S.number),g=y.invoices.filter(Ge).filter(S=>S.clarify&&S.status!=="draft"),b=y.quotes.filter(Ge).filter(S=>["open","sent"].includes(Tn(S,e))&&S.validUntil&&S.validUntil<=Ce(e,7)),C=!t&&s.length>1,x=C?s.map(S=>({id:S.id,label:S.shortName||S.name,color:Ka(S.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],N=i.series.map(S=>({key:S.key,label:Fn(S.key),title:At(S.key),values:C?S[`byCompany${ie()}`]:{rev:T(S,"revenue")}})),_={columns:["Monat",...C?x.map(S=>S.label):[],`Umsatz (${ie()})`,`Umsatz (${ie()==="USD"?"EUR":"USD"})`],rows:i.series.map(S=>[At(S.key),...C?x.map(j=>ee(S[`byCompany${ie()}`][j.id]||0)):[],ee(T(S,"revenue")),ze(Se(S,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${p}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${ee(T(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${ze(Se(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${ee(T(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <${fc} />

    <div class="stat-row">
      <${Me} label="Umsatz Quartal" value=${ee(T(c.quarter))} sub=${`≈ ${ze(Se(c.quarter))}`} />
      <${Me} label="Umsatz Jahr" value=${ee(T(c.year))} sub=${`≈ ${ze(Se(c.year))}`} />
      <${Me} label="Offene Rechnungen" value=${ee(T(c.open))} sub=${`${c.open.count} offen, ≈ ${ze(Se(c.open))}`} href="#/invoices?status=open" />
      <${Me} label="Überfällig" value=${ee(T(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${ze(Se(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Me} label="Bezahlt dieses Jahr" value=${ee(T(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Me} label="Rechnung im Schnitt" value=${ee(T(c.average))} sub=${`≈ ${ze(Se(c.average))}`} />
      <${Me} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-crm">
      <${Pl} />
      <${hc} />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${Fa} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${ie()}, nach Rechnungsdatum`} series=${x} table=${_}>
          <${Oa} groups=${N} series=${x} mode="stacked"
            format=${S=>ee(S)} axisFormat=${S=>Aa(S,ie())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${Q} title="Zu erledigen" class="dash-side">
        ${d.length+u.length+m.length+f.length+v.length+b.length+g.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${d.slice(0,5).map(S=>l`<li key=${S.inv.id}>
              <a href=${`#/invoices/${S.inv.id}`}>
                <span class="todo-icon tone-bad"><${te} name="bad" /></span>
                <span class="todo-text"><strong>${S.inv.number}</strong> ${Pe(S.inv)}
                  <span class="cell-sub">seit ${S.overdueDays} ${S.overdueDays===1?"Tag":"Tagen"} überfällig${ns(S.inv,S.overdueDays)?`, ${(ht.find(j=>j.id===ns(S.inv,S.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${H(S.openCents,S.inv.currency)}</span>
              </a>
            </li>`)}
            ${d.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${d.length-5} weitere überfällige Rechnungen</a></li>`}
            ${u.slice(0,3).map(S=>l`<li key=${S.inv.id}>
              <a href=${`#/invoices/${S.inv.id}`}>
                <span class="todo-icon tone-warn"><${te} name="clock" /></span>
                <span class="todo-text"><strong>${S.inv.number}</strong> ${Pe(S.inv)}
                  <span class="cell-sub">fällig am ${V(S.inv.dueDate)}</span></span>
                <span class="todo-amount">${H(S.openCents,S.inv.currency)}</span>
              </a>
            </li>`)}
            ${g.slice(0,5).map(S=>l`<li key=${`c-${S.id}`}><a href=${`#/invoices/${S.id}`}>
              <span class="todo-icon tone-warn"><${te} name="warn" /></span>
              <span class="todo-text"><strong>${S.number}</strong> ${Pe(S)}
                <span class="cell-sub">Klärung nötig: ${S.clarify.note}</span></span></a></li>`)}
            ${g.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${te} name="warn" /></span>
              <span class="todo-text"><strong>${g.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${$.slice(0,5).map(S=>l`<li key=${S.id}><a href=${`#/invoices/${S.id}/edit`}>
              <span class="todo-icon tone-warn"><${te} name="edit" /></span>
              <span class="todo-text"><strong>${S.number}</strong> ${Pe(S)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${m.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${te} name="repeat" /></span>
              <span class="todo-text"><strong>${m.length} wiederkehrende ${m.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${f.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${te} name="expense" /></span>
              <span class="todo-text"><strong>${f.length} ${f.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${h.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${te} name="edit" /></span>
              <span class="todo-text"><strong>${h.length} ${h.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${b.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${te} name="quote" /></span>
              <span class="todo-text"><strong>${b.length} ${b.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
          </ul>`}
      <//>
    </div>


    <div class="dash-lists">
      <${Q} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${Qt} rows=${gr(i.byCustomer).map(S=>({key:S.id,label:S.name,value:T(S),display:ee(T(S)),href:`#/customers/${S.id}`}))} />
      <//>
      <${Q} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${Qt} rows=${gr(i.byService).map(S=>({key:S.key,label:S.name,value:T(S),display:ee(T(S))}))} />
      <//>
      ${!t&&l`<${Q} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${Qt} rows=${gr(i.byCompany).map(S=>({key:S.id,label:S.name,value:T(S),display:ee(T(S)),color:Ka(S.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${ie()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}function fa({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
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
  </div>`}async function Xs(e){let t=Ve(e.id),n=cn(e.id),a=e.creditNoteId?w("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${H(Ae(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await le({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await B(()=>Qi(e.id));return r?(R(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var hr=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function yc({params:e}){ge();let[t,n]=k(""),[a,s]=k(e&&hr.some(b=>b.id===e.status)?e.status:"all"),[i,r]=k("all"),[o,c]=k(null),p=!pe(),d=Z(),u=ke(()=>y.invoices.filter(Ge).map(b=>({inv:b,status:Ls(b)})),[y.version,y.settings.activeCompany]),m=ut(i,d),f=u.filter(b=>i==="all"||Zt(b.inv.issueDate,m)),v=f.filter(b=>hr.find(C=>C.id===a).test(b.status,b.inv)).filter(b=>Te(t,b.inv.number,Pe(b.inv),(w("companies",b.inv.companyId)||{}).name,b.inv.totals?(b.inv.totals.totalCents/100).toFixed(2):"",b.inv.totals?(b.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",(b.inv.items||[]).map(C=>C.name).join(" "))),$=v.reduce((b,C)=>{if(C.status==="draft"||C.status==="cancelled")return b;let x=C.inv.totals?C.inv.totals.totalCents:0;return b.total+=at(x,C.inv.currency,C.inv.fx)||0,b.open+=at(la(C.inv),C.inv.currency,C.inv.fx)||0,b},{total:0,open:0}),h=[{key:"number",label:"Nummer",class:"nw",sort:b=>b.inv.number||"",render:b=>l`<span class="cell-main">${b.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:b=>Pe(b.inv),render:b=>Pe(b.inv)},...p?[{key:"company",label:"Unternehmen",sort:b=>(w("companies",b.inv.companyId)||{}).name||"",render:b=>l`<${Le} id=${b.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:b=>b.inv.issueDate,render:b=>V(b.inv.issueDate)},{key:"due",label:"Fällig",sort:b=>b.inv.dueDate||"",render:b=>b.status==="overdue"?l`<span class="tone-bad">${V(b.inv.dueDate)}</span><div class="cell-sub">seit ${sn(b.inv.dueDate,d)} Tagen</div>`:V(b.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:b=>at(b.inv.totals?b.inv.totals.totalCents:0,b.inv.currency,b.inv.fx)||0,render:b=>l`<${Yt} doc=${b.inv} />`},{key:"open",label:"Offen",align:"right",sort:b=>at(la(b.inv),b.inv.currency,b.inv.fx)||0,render:b=>{let C=la(b.inv);return C?H(C,b.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:b=>b.status,render:b=>l`<${Ha} inv=${b.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:b=>{let C=$c(b.inv.id),x=ns(b.inv,sn(b.inv.dueDate,d)),N=_=>(ht.find(S=>S.id===_)||{}).label||"";return l`<${E} small variant=${x?"primary":"default"} icon="clock" onClick=${()=>c(b.inv)}>${x?N(x):"Erinnern"}<//>
          <span class="cell-sub nw">${C?`Zuletzt: ${N(C.level)}, ${V(C.date)}`:"Noch keine versendet"}</span>`}}]:[]],g=v.length?[`${v.length} ${v.length===1?"Beleg":"Belege"}`,"",...p?[""]:[],"","",l`<span class="strong">${ee($.total)}</span>`,l`<span class="strong">${ee($.open)}</span>`,l`<span class="muted-text">in ${ie()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${ve} title="Rechnungen">
      <${E} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${y.invoices.length>0&&l`<div class="filters">
      <${vt} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${Lt} label="Status" value=${a} onChange=${s}
        options=${hr.map(b=>({id:b.id,label:b.label,count:f.filter(C=>b.test(C.status,C.inv)).length})).filter(b=>b.id!=="clarify"||b.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${b=>r(b.target.value)}>
        ${xn.filter(b=>b.id!=="custom").map(b=>l`<option value=${b.id}>${b.label}</option>`)}
      </select>
    </div>`}
    <${ot} columns=${h} rows=${v} rowKey=${b=>b.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${g}
      rowClass=${b=>b.inv.clarify&&b.status!=="draft"?"row-clarify":""}
      onRowClick=${b=>Y(b.inv.status==="draft"?`/invoices/${b.inv.id}/edit`:`/invoices/${b.inv.id}`)}
      empty=${y.invoices.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${fe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${E} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${ma} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function $r({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?Ve(e.id).filter(S=>S.id!==n.id):Ve(e.id),o=e.totals?e.totals.totalCents:0,c=i?Ae(r):s?Math.max(o-Ae(r),0):la(e),p=y.settings.paymentMethods||[],[d,u]=k(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:Z(),amountCents:c,method:p[0]||"",note:""}),[m,f]=k(!1),[v,$]=k(""),[h,g]=k(!1),b=S=>j=>u(A=>({...A,[S]:j})),C=i?"Erstattung":"Zahlung",x=!i&&!s?c-(Number(d.amountCents)||0):0,N=d.method&&!p.includes(d.method)?[d.method,...p]:p;async function _(){g(!0);let S=x>0&&m?v.trim()||`Differenz von ${H(x,e.currency)} offen (eingegangen: ${H(d.amountCents,e.currency)} am ${V(d.date)}).`:"",j=await B(()=>s?$l(n.id,d):i?yl(e.id,d):za(e.id,{...d,clarify:S}));g(!1),j&&(s?R(`${C} geändert`,"good"):i?R("Erstattung eingetragen","good"):x>0?R(S?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):R("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${Oe} title=${`${C} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${_}
    footer=${l`<${E} onClick=${a}>Abbrechen<//><${E} variant="primary" type="submit" busy=${h}>${s?"Änderung speichern":`${C} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${H(c,e.currency)}.`:s?`Höchstens ${H(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${H(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${Ue} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${d.amountCents} onChange=${b("amountCents")} min=${0} />
      <${qe} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${d.date} onInput=${b("date")} max=${Z()} />
      <${ce} class="span-6" label="Zahlungsart" value=${d.method} onChange=${b("method")} options=${N} placeholder="Keine Angabe" />
      <${F} class="span-6" label="Notiz" value=${d.note} onInput=${b("note")} />
    </div>
    ${x>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${H(x,e.currency)}</strong> offen.</p>
      <${je} label="Differenz muss geklärt werden" checked=${m} onChange=${f}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${re} label="Was ist zu klären?" value=${v} onInput=${$} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function br(e){let t=yt(e.prev.doc,"invoices"),n=await ua(es(t));st(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${V(On(new Date(e.at)))}).pdf`))}function vr({entityId:e}){let[t,n]=k(""),a=y.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await B(()=>br(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${He(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${E} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function wc({id:e}){ge();let t=w("invoices",e),[n,a]=k(null),[s,i]=k(t&&t.internalNotes||""),[r,o]=k("");if(!t)return l`<${fe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${E} onClick=${()=>Y("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=Ls(t),p=[...Ve(e)].sort((L,ae)=>L.date<ae.date?-1:1),d=[...cn(e)].sort((L,ae)=>L.createdAt<ae.createdAt?-1:1),u=Ae(p),m=la(t),f=t.type==="credit_note",v=yt(t,"invoices"),$=t.relatedInvoiceId?w("invoices",t.relatedInvoiceId):null,h=t.creditNoteId?w("invoices",t.creditNoteId):null,g=t.quoteId?w("quotes",t.quoteId):null,b=!f&&m>0,C=!f&&t.status==="credited"&&u>0,x=!f&&["issued","sent"].includes(t.status),N=t.fx?Number(t.fx.usdToEur):null;async function _(){o("pdf"),await B(()=>Js(t,"invoices")),o("")}async function S(){if(u>0){R("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let L=await le({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(L===null)return;await B(async()=>(await Us(e,L),!0))&&R("Rechnung storniert","good")}async function j(){if(!await le({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${p.length?` Die eingetragenen Zahlungen (${H(u,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await B(()=>hl(e))&&(R(`${t.number} ist wieder ein Entwurf`,"good"),Y(`/invoices/${e}/edit`))}async function A(){if(!await le({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await B(()=>xl(e))&&R("Stornierung zurückgenommen","good")}async function D(){let L=f?t:h,ae=f?$:t;if(!L||!await le({title:`Gutschrift ${L.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${ae?` Die Rechnung ${ae.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let z=await B(()=>Yi(L.id));z&&(R(`Gutschrift ${z.creditNumber} zurückgenommen`,"good"),f&&Y(z.invoiceId?`/invoices/${z.invoiceId}`:"/invoices",{replace:!0}))}async function U(){await Xs(t)&&Y("/invoices",{replace:!0})}async function M(){let L=await le({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(L===null)return;await B(()=>bl(e,L))&&R("Klärung vermerkt","good")}async function I(){let L=await le({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${H(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(L===null)return;await B(()=>vl(e,L))&&R("Klärung erledigt","good")}async function K(){let L=await le({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${H(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${u>0?` Zu dieser Rechnung sind bereits ${H(u,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(L===null)return;let ae=await B(()=>_s(e,L));ae&&(R(`Gutschrift ${ae.number} erstellt`,"good"),Y(`/invoices/${ae.id}`))}async function P(L){if(!await le({title:"Zahlung löschen?",text:`Die Zahlung über ${H(L.amountCents,t.currency)} vom ${V(L.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await B(async()=>(await wl(L.id),!0))&&R("Zahlung gelöscht","good")}async function J(){await B(async()=>(await Bs("invoices",e,s),!0))&&R("Notiz gespeichert","good")}return l`
    <${ve} title=${l`${f?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${Ha} inv=${t} /> <span class="head-meta">${Pe(t)}</span>`}>
      <${E} icon="download" busy=${r==="pdf"} onClick=${_}>PDF<//>
      ${!f&&t.status==="issued"&&l`<${E} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${E} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${b&&l`<${E} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${ft} items=${[!f&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>B(()=>_n(e,!0))},!f&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!f&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>B(()=>_n(e,!1))},!f&&m>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},x&&{label:"Zurück in den Entwurf",icon:"edit",onClick:j},!f&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:M},!f&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>Y(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:A},(f||t.status==="credited"&&h)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:f,onClick:D},x&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:K},x&&{label:"Stornieren",icon:"x",danger:!0,onClick:S},!f&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:U}]} />
    <//>

    ${t.clarify&&l`<${Ne} tone="warn" action=${l`<div class="notice-actions">
        <${E} small onClick=${M}>Ändern<//>
        <${E} small variant="primary" icon="check" onClick=${I}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${He(t.clarify.at)} · ${m>0?`offen sind ${H(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${Ne} tone="warn" action=${l`<${E} small icon="undo" onClick=${A}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${He(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${h&&l`<${Ne} tone="info" action=${l`<${E} small onClick=${()=>Y(`/invoices/${h.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${h.number} erstellt.
    <//>`}
    ${$&&l`<${Ne} tone="info" action=${l`<${E} small onClick=${()=>Y(`/invoices/${$.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${$.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${fa} model=${v} />
      </div>
      <aside class="split-side">
        <${Q} title="Stand">
          <${mn} rows=${[["Unternehmen",l`<${Le} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Pe(t)}</a>`],["Gesamtbetrag",l`<${Yt} doc=${t} />`],!f&&["Bezahlt",H(u,t.currency)],!f&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${H(m,t.currency)}</span>`],!f&&t.dueDate&&["Fällig am",l`${V(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${sn(t.dueDate,Z())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",He(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",He(t.firstFinalizedAt)],t.sentAt&&["Versendet",He(t.sentAt)],g&&["Aus Angebot",l`<a href=${`#/quotes/${g.id}`}>${g.number}</a>`]]} />
        <//>

        ${!f&&l`<${Q} title="Zahlungen" action=${b?l`<${E} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:C&&l`<${E} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${p.length?l`<ul class="plain-list">
                ${p.map(L=>l`<li class="row-between" key=${L.id}>
                  <span><span class="strong">${H(L.amountCents,t.currency)}</span>
                    <span class="cell-sub">${L.amountCents<0?"Erstattung, ":""}${V(L.date)}${L.method?`, ${L.method}`:""}${L.note?` – ${L.note}`:""}</span></span>
                  <span class="row-actions">
                    <${E} variant="ghost" small icon="edit" title=${L.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:L})} />
                    <${E} variant="ghost" small icon="trash" title=${L.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>P(L)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${d.length>0&&l`<${Q} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${d.map(L=>l`<li class="row-between" key=${L.id}>
              <span>${(ht.find(ae=>ae.id===L.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${V(L.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${Q} title="Wechselkurs">
          ${N?l`<p class="strong">1 USD = ${na(N)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${V(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${Q} title="Interne Notiz">
          <${re} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${E} small variant="primary" onClick=${J}>Notiz speichern<//></div>`}
        <//>

        <${Q} title="Verlauf"><${vr} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${$r} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${$r} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${$r} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${ma} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${ma} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}var xc=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function kc(){ge();let[e,t]=k(""),[n,a]=k("all"),s=!pe(),i=Z(),r=ke(()=>y.quotes.filter(Ge).map(p=>({quote:p,status:Tn(p,i)})),[y.version,y.settings.activeCompany]),o=r.filter(p=>xc.find(d=>d.id===n).test(p.status)).filter(p=>Te(e,p.quote.number,Pe(p.quote),(p.quote.items||[]).map(d=>d.name).join(" "))),c=[{key:"number",label:"Nummer",class:"nw",sort:p=>p.quote.number||"",render:p=>l`<span class="cell-main">${p.quote.number||"Entwurf"}</span>`},{key:"customer",label:"Kontakt",sort:p=>Pe(p.quote),render:p=>Pe(p.quote)},...s?[{key:"company",label:"Unternehmen",render:p=>l`<${Le} id=${p.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:p=>p.quote.issueDate,render:p=>V(p.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:p=>p.quote.validUntil||"",render:p=>V(p.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:p=>at(p.quote.totals?p.quote.totals.totalCents:0,p.quote.currency,p.quote.fx)||0,render:p=>l`<${Yt} doc=${p.quote} />`},{key:"status",label:"Status",sort:p=>p.status,render:p=>l`<${ja} quote=${p.quote} />`}];return l`
    <${ve} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung.">
      <${E} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Neues Angebot<//>
    <//>
    ${y.quotes.length>0&&l`<div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Nummer, Kontakt, Leistung" />
      <${Lt} label="Status" value=${n} onChange=${a}
        options=${xc.map(p=>({id:p.id,label:p.label,count:r.filter(d=>p.test(d.status)).length}))} />
    </div>`}
    <${ot} columns=${c} rows=${o} rowKey=${p=>p.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${p=>Y(p.quote.status==="draft"?`/quotes/${p.quote.id}/edit`:`/quotes/${p.quote.id}`)}
      empty=${y.quotes.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${fe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${E} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Erstes Angebot schreiben<//>
          <//>`} />
  `}function Dc({id:e}){ge();let t=w("quotes",e),[n,a]=k(null),[s,i]=k(t&&t.internalNotes||""),[r,o]=k("");if(!t)return l`<${fe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${E} onClick=${()=>Y("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=Tn(t,Z()),p=yt(t,"quotes"),d=t.invoiceId?w("invoices",t.invoiceId):null,u=["open","sent","expired"].includes(c);async function m(){o("pdf"),await B(()=>Js(t,"quotes")),o("")}async function f(h,g){await B(async()=>(await Mn(e,h),!0))&&R(g,"good")}async function v(){if(!await le({title:"In Rechnung umwandeln?",text:`Aus dem Angebot ${t.number} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let g=await B(()=>Cl(e));o(""),g&&(R("Rechnungsentwurf angelegt","good"),Y(`/invoices/${g.id}/edit`))}async function $(){await B(async()=>(await Bs("quotes",e,s),!0))&&R("Notiz gespeichert","good")}return l`
    <${ve} title=${`Angebot ${t.number}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${ja} quote=${t} /> <span class="head-meta">${Pe(t)}</span>`}>
      <${E} icon="download" busy=${r==="pdf"} onClick=${m}>PDF<//>
      ${c==="open"&&l`<${E} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${!d&&c!=="declined"&&l`<${E} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${v}>In Rechnung umwandeln<//>`}
      <${ft} items=${[u&&{label:"Als angenommen markieren",icon:"check",onClick:()=>f("accepted","Angebot angenommen")},u&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>f("declined","Angebot abgelehnt")},c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!d&&{label:"Wieder öffnen",icon:"undo",onClick:()=>f("open","Angebot wieder geöffnet")},{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>Y(`/quotes/new?copy=${e}`)}]} />
    <//>

    ${d&&l`<${Ne} tone="info" action=${l`<${E} small onClick=${()=>Y(`/invoices/${d.id}${d.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${d.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${d.number}`}.
    <//>`}
    ${c==="expired"&&l`<${Ne} tone="warn">Dieses Angebot ist seit dem ${V(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main"><${fa} model=${p} /></div>
      <aside class="split-side">
        <${Q} title="Stand">
          <${mn} rows=${[["Unternehmen",l`<${Le} id=${t.companyId} />`],["Kontakt",l`<a href=${`#/customers/${t.customerId}`}>${Pe(t)}</a>`],["Angebotssumme",l`<${Yt} doc=${t} />`],["Gültig bis",V(t.validUntil)],["Erstellt",He(t.finalizedAt)],t.sentAt&&["Versendet",He(t.sentAt)],t.decidedAt&&["Entschieden",He(t.decidedAt)]]} />
        <//>
        <${Q} title="Interne Notiz">
          <${re} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${E} small variant="primary" onClick=${$}>Notiz speichern<//></div>`}
        <//>
        <${Q} title="Verlauf"><${vr} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${ma} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
  `}function yr({service:e,onClose:t,onSaved:n}){let a=!e||!w("services",e.id),[s,i]=k(()=>({...e||on()})),[r,o]=k(!1),c=m=>f=>i(v=>({...v,[m]:f})),p=y.settings.serviceCategories||[],d=Vn.includes(s.unit)||!s.unit?Vn:[...Vn,s.unit];async function u(){o(!0);let m=await B(()=>Ts(s));o(!1),m&&(R(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${Oe} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${u}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${F} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${F} class="span-2" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${re} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${re} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${Ue} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${ce} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${et} />
      <${ce} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${d} />
      <${Ue} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${Ue} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${ce} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${p.includes(s.category)||!s.category?p:[...p,s.category]} />
      <${ce} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${de().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${je} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${je} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function Sc(){ge();let[e,t]=k(""),[n,a]=k(""),[s,i]=k(null),r=Nt(),o=y.services.filter(u=>r&&u.companyId&&u.companyId!==r||n&&u.category!==n?!1:Te(e,u.name,u.internalName,u.description,u.invoiceText,u.category)),c=[...new Set(y.services.map(u=>u.category).filter(Boolean))].sort((u,m)=>u.localeCompare(m,"de"));async function p(u){if(!await le({title:"Leistung löschen?",text:`„${u.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await dl(u.id),!0))&&R("Leistung gelöscht","good")}let d=[{key:"name",label:"Leistung",sort:u=>u.name,render:u=>l`<div class="cell-main">${u.name}${u.active===!1&&l` <${_e} tone="mute">Inaktiv<//>`}</div>
        ${(u.internalName||u.invoiceText)&&l`<div class="cell-sub clamp-1">${u.internalName||u.invoiceText}</div>`}`},{key:"category",label:"Kategorie",sort:u=>u.category,render:u=>u.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:u=>(w("companies",u.companyId)||{}).name||"",render:u=>{let m=w("companies",u.companyId);return m?l`<span class="co-tag"><${Is} company=${m} />${m.shortName||m.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:u=>u.recurring?1:0,render:u=>u.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:u=>u.unit},{key:"tax",label:"Steuer",align:"right",render:u=>u.taxRate!=null&&u.taxRate!==""?$t(u.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:u=>u.priceCents,render:u=>H(u.priceCents,u.currency)},{key:"actions",label:"",align:"right",render:u=>l`<${E} variant="ghost" small icon="trash" title=${`${u.name} löschen`} onClick=${()=>p(u)} />`}];return l`
    <${ve} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <${E} variant="primary" icon="plus" onClick=${()=>i(on({companyId:""}))}>Neue Leistung<//>
    <//>
    ${y.services.length>0&&l`<div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${c.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Kategorien</option>
        ${c.map(u=>l`<option value=${u}>${u}</option>`)}
      </select>`}
    </div>`}
    <${ot} columns=${d} rows=${o} initialSort=${{key:"name",dir:"asc"}} onRowClick=${u=>i(u)}
      empty=${y.services.length?l`<${fe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${fe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${E} variant="primary" icon="plus" onClick=${()=>i(on())}>Erste Leistung anlegen<//>
          <//>`} />
    ${s&&l`<${yr} service=${s} onClose=${()=>i(null)} />`}
  `}var Fd={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function ei(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&et.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function qd(e,t,n){if(t&&t!=="new"){let r=w(e,t);return r?De(r):null}let a=de(),s=pe()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&w("invoices",n.copy))i=kl(w("invoices",n.copy));else if(e==="invoices")i=kt(s);else if(n.copy&&w("quotes",n.copy)){let r=w("quotes",n.copy),o=w("companies",r.companyId)||s;i=jn(o,{validUntil:Ce(Z(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:Ca().id})),discount:De(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=jn(s,{validUntil:Ce(Z(),30)});return n.customer&&w("customers",n.customer)&&(i=ei(i,w("customers",n.customer),w("companies",i.companyId),e)),i}function wr({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=k(null),r=Re(null),o=e.items||[],c=e.currency;ue(()=>{if(!s||!r.current)return;let $=r.current.querySelector(`[data-item="${s}"] .combo-input`);$&&$.focus(),i(null)},[s,o.length]);let p=ke(()=>y.services.filter($=>$.active!==!1&&(!$.companyId||$.companyId===e.companyId)).sort(($,h)=>$.name.localeCompare(h.name,"de")).map($=>({id:$.id,label:$.name,search:`${$.internalName} ${$.category}`,sub:`${H($.priceCents,$.currency)} je ${$.unit}`})),[y.version,e.companyId]),d=($,h)=>n(o.map(g=>g.id===$?{...g,...h}:g)),u=$=>n(o.filter(h=>h.id!==$));function m($,h){let g=$+h;if(g<0||g>=o.length)return;let b=[...o];[b[$],b[g]]=[b[g],b[$]],n(b)}function f(){let $=Ca({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,$]),i($.id)}function v($,h){let g=w("services",h);if(!g)return;let b=gt(g,t),C=b.priceCents;if(g.currency&&g.currency!==c){let x=e.fx?_t(g.currency,e.fx.usdToEur):null,N=x?jt(C,g.currency,c,x):null;N!=null?(C=N,R(`Preis von ${g.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):R(`Die Leistung ist in ${g.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}d($,{...b,id:$,priceCents:C})}return l`<div class="items" ref=${r}>
    ${o.map(($,h)=>l`<div class="item" key=${$.id} data-item=${$.id}>
      <div class="item-top">
        <span class="item-pos">${h+1}</span>
        <div class="item-name">
          <${zt} freeText options=${p} text=${$.name} label=${`Position ${h+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${g=>d($.id,{name:g,serviceId:$.serviceId&&w("services",$.serviceId)&&w("services",$.serviceId).name===g?$.serviceId:""})}
            onChange=${g=>v($.id,g)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${h+1} nach oben`} disabled=${h===0} onClick=${()=>m(h,-1)}><${te} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${h+1} nach unten`} disabled=${h===o.length-1} onClick=${()=>m(h,1)}><${te} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${h+1} entfernen`} onClick=${()=>u($.id)}><${te} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String($.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${h+1}: Beschreibung`}
        value=${$.description} onInput=${g=>d($.id,{description:g.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${Ye} value=${$.qty} digits=${3} onChange=${g=>d($.id,{qty:g})} aria-label=${`Position ${h+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${$.unit} aria-label=${`Position ${h+1}: Einheit`}
            onInput=${g=>d($.id,{unit:g.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${Ye} mode="money" value=${$.priceCents} onChange=${g=>d($.id,{priceCents:g})} aria-label=${`Position ${h+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${Ye} value=${$.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${g=>d($.id,{discountPct:g})} aria-label=${`Position ${h+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${Ye} value=${$.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g=>d($.id,{taxRate:g})} aria-label=${`Position ${h+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${H(Bi($),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${Vn.map($=>l`<option value=${$}></option>`)}</datalist>
    <div class="items-foot">
      <${E} icon="plus" onClick=${f}>Position hinzufügen<//>
      <${E} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function as({coll:e,id:t,params:n}){ge();let a=Fd[e],[s,i]=k(()=>qd(e,t,n||{})),[r,o]=k(!1),[c,p]=k({loading:!1,error:""}),[d,u]=k(""),[m,f]=k(""),[v,$]=k([]),[h,g]=k(null),[b,C]=k(!1),x=Re(0),N=Re(!0),_=O=>{i(O),o(!0)},S=O=>X=>_(Fe=>({...Fe,[O]:X}));ue(()=>(r?xs(ks):Nn(),()=>Nn()),[r]);let j=s?w("companies",s.companyId):null,A=s?w("customers",s.customerId):null,D=s?`${s.currency}|${s.issueDate}`:"";async function U(O){if(!s||!we(s.issueDate)||!O&&s.fx&&s.fx.manual)return;let X=++x.current,Fe=s.currency,tn=s.issueDate;p({loading:!0,error:""});try{let Tt=await Ra(Fe,tn);if(X!==x.current)return;i(Je=>Je.currency===Fe&&Je.issueDate===tn?{...Je,fx:Tt}:Je),O&&o(!0),p({loading:!1,error:""})}catch(Tt){if(X!==x.current)return;i(Je=>Je.fx&&!Je.fx.manual&&Je.fx.forDate&&we(Je.issueDate)&&Je.fx.forDate!==Bn(Je.issueDate)?{...Je,fx:null}:Je),p({loading:!1,error:Tt.message})}}if(ue(()=>{let O=N.current;N.current=!1,!(!s||s.status!=="draft")&&(O&&s.number&&s.fx||U(!1))},[D]),ue(()=>{let O=!0;if(!s||!j){u("");return}if(s.number){u(s.number);return}return _a(j,a.numberKind,s.issueDate).then(X=>{O&&u(X)}).catch(()=>{O&&u("")}),()=>{O=!1}},[s&&s.companyId,s&&s.issueDate,y.version]),!s)return l`<${fe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${E} onClick=${()=>Y(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>un(`${a.list}/${s.id}`),0),null;let M=Ct(s),I=s.fx?_t(s.currency,s.fx.usdToEur,s.fx):null,K={...s,fx:I,totals:M,dueDate:e==="invoices"?ji(s):""},P=yt(K,e,{previewNumber:d}),J=s.currency==="USD"?"EUR":"USD",L=I?jt(M.totalCents,s.currency,J,I):null,ae=de(),me=!!w(e,s.id),z=e==="invoices"&&s.number?s.number:"",Ie=z?s.reopened||{}:null,Ke=z?Ae(Ve(s.id)):0,Ln=y.customers.filter(O=>O.active!==!1||O.id===s.customerId).sort((O,X)=>+!Ee(O)-+!Ee(X)||G(O).localeCompare(G(X),"de")).map(O=>({id:O.id,label:G(O),sub:[Ee(O)?"":"Kontakt",O.number,O.city].filter(Boolean).join(", "),search:`${O.firstName} ${O.lastName} ${O.contact} ${O.email}`}));function oi(O){let X=w("companies",O),Fe=w("companies",s.companyId);if(!X){_(ct=>({...ct,companyId:""}));return}let tn=e==="quotes"?"quoteText":"invoiceText",Tt=(ct,Ot)=>String(ct||"")===String(Ot||"");_(ct=>{let Ot=w("customers",ct.customerId),Ft={...ct,companyId:O};(!ct.intro||Fe&&Tt(ct.intro,Fe[tn]))&&(Ft.intro=X[tn]||""),(!ct.paymentTerms||Fe&&Tt(ct.paymentTerms,Fe.paymentTerms))&&(Ft.paymentTerms=X.paymentTerms||""),(!ct.footer||Fe&&Tt(ct.footer,Fe.footer))&&(Ft.footer=X.footer||""),Ot&&Ot.language||(Ft.language=X.language),Ot&&Ot.currency||(Ft.currency=X.currency),e==="invoices"&&!(Ot&&Ot.paymentTermDays!=null&&Ot.paymentTermDays!=="")&&(Ft.paymentTermDays=X.paymentTermDays),Ft.showSecondary=X.showSecondary;let fu=Fe&&Number(Fe.defaultTaxRate)||0,gu=Number(X.defaultTaxRate)||0;return Ft.items=ct.items.map($a=>{let ui=$a.serviceId?w("services",$a.serviceId):null;return(!ui||ui.taxRate==null||ui.taxRate==="")&&(Number($a.taxRate)||0)===fu?{...$a,taxRate:gu}:$a}),Ft});let Je=w("customers",s.customerId);s.items.length&&!(Je&&Je.currency)&&X.currency!==s.currency&&R(`Währung auf ${X.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function ou(O){let X=w("customers",O),Fe=s.currency,tn=ei(s,X,w("companies",s.companyId),e);_(Tt=>ei(Tt,X,w("companies",Tt.companyId),e)),s.items.length&&tn.currency!==Fe&&R(`Währung auf ${tn.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function lu(O){O!==s.currency&&(s.items.length&&R("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),_(X=>({...X,currency:O,fx:X.fx?_t(O,X.fx.usdToEur,X.fx):X.fx})))}function cu(O){O>0&&(x.current+=1,p({loading:!1,error:""}),_(X=>({...X,fx:_t(X.currency,O,{manual:!0,source:"Von Hand eingetragen",date:Z(),fetchedAt:ne()})})))}function uu(){let O=Ki("USD","EUR");O&&(_(X=>({...X,fx:_t(X.currency,O.rate,{manual:!0,source:`Letzter bekannter Kurs (${O.source})`,date:O.date,fetchedAt:O.fetchedAt})})),p({loading:!1,error:""}))}async function du(){f("save");let O=await B(()=>e==="invoices"?As(s):Dl(s));f(""),O&&(i(De(O)),o(!1),$([]),R("Entwurf gespeichert","good"),(t==="new"||!t)&&(Nn(),Y(`${a.list}/${O.id}/edit`,{replace:!0})))}async function mu(){if(c.loading){R("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let O=Rs(K,e==="quotes"?"quote":"invoice");if($(O),O.length){R("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await le({title:`${a.finalize}?`,text:z?`Die Rechnung behält die Nummer ${z} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${d} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${d} und lässt sich danach nicht mehr ändern.`,list:[`${G(A)}`,`${H(M.totalCents,s.currency)}${L!=null?` (≈ ${H(L,J)})`:""}`,...e==="invoices"&&A&&!Ee(A)?[`${G(A)} ist bisher Kontakt und wird damit Kunde (neue Nummer ${pn("customer")}).`]:[],...Ke>0?[Ke>M.totalCents?`Achtung: Eingegangen sind bereits ${H(Ke,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${H(Ke,s.currency)}`]:[]],confirmLabel:a.finalize}))return;f("finalize");let Fe=await B(()=>e==="invoices"?Ma(K):La(K));f(""),Fe&&(o(!1),R(`${a.one} ${Fe.number} ${z?"neu erstellt":"erstellt"}`,"good"),un(`${a.list}/${Fe.id}`))}async function pu(){if(z){await Xs(w("invoices",s.id)||s)&&un(a.list);return}if(!await le({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await(e==="invoices"?Wi(s.id):Sl(s.id)),!0))&&(R("Entwurf gelöscht","good"),un(a.list))}let li=s.fx?Number(s.fx.usdToEur):null,ci=!!s.serviceDateEnd;return l`
    <${ve} title=${z?`Rechnung ${z} bearbeiten`:me?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${z?"Entwurf – die Nummer bleibt erhalten":d?`Nächste Nummer: ${d}`:j?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${E} class="only-narrow" icon="eye" onClick=${()=>C(!b)}>${b?"Formular":"Vorschau"}<//>
      ${me&&l`<${ft} items=${[{label:z?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:pu}]} />`}
      <${E} icon="check" onClick=${du} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${E} variant="primary" icon="invoice" onClick=${mu} busy=${m==="finalize"} disabled=${!!m}>${a.finalize}<//>
    <//>

    ${z&&l`<${Ne} tone="info">
      Diese Rechnung war bereits erstellt${Ie.finalizedAt?` (${He(Ie.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${z}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${Ke>0?` Die eingetragenen Zahlungen (${H(Ke,s.currency)}) bleiben erhalten.`:""}
      ${Ie.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${v.length>0&&l`<${Ne} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${v.map(O=>l`<li>${O}</li>`)}</ul>
    <//>`}

    <div class=${`editor${b?" show-preview":""}`}>
      <div class="editor-form">
        <${Q} title=${e==="quotes"?"Aussteller und Empfänger":"Aussteller und Kunde"}>
          <div class="form-grid">
            <${ce} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${oi}
              disabled=${!!z} hint=${z?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${ae.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(z&&j&&!ae.some(O=>O.id===j.id)?[j,...ae]:ae).map(O=>({id:O.id,label:O.name}))} />
            <${xe} class="span-3" label=${e==="quotes"?"Kontakt oder Kunde":"Kunde"} htmlFor="doc-customer">
              <${zt} id="doc-customer" options=${Ln} value=${s.customerId} placeholder=${e==="quotes"?"Kontakt suchen":"Kunde suchen"}
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${ou}
                onCreate=${O=>g({type:"customer",seed:O})} createLabel=${e==="quotes"?"als Kontakt anlegen":"als Kunde anlegen"} />
            <//>
            <${qe} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${S("issueDate")} />
            ${e==="invoices"&&l`
              <${qe} class="span-2" label=${ci?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${S("serviceDate")} />
              ${ci?l`<${qe} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${S("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>S("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Ue} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${S("paymentTermDays")}
                hint=${K.dueDate?`Fällig am ${V(K.dueDate)}`:""} />
              ${ci&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>S("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${qe} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${S("validUntil")} min=${s.issueDate} />`}
            <${ce} class="span-2" label="Währung" value=${s.currency} onChange=${lu} options=${et} />
            <${ce} class="span-2" label="Belegsprache" value=${s.language} onChange=${S("language")} options=${xt} />
          </div>
        <//>

        <${Q} title="Positionen">
          <${wr} doc=${s} company=${j} onChange=${O=>_(X=>({...X,items:O}))}
            onNewService=${()=>g({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${pt} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${O=>_(X=>({...X,discount:{type:O,value:0}}))} />
                ${s.discount.type==="abs"?l`<${Ye} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${O=>_(X=>({...X,discount:{type:"abs",value:O}}))} />`:l`<${Ye} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${O=>_(X=>({...X,discount:{type:"pct",value:O}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${H(M.subtotalCents,s.currency)}</dd></div>
              ${M.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${H(-M.discountCents,s.currency)}</dd></div>`}
              ${M.taxGroups.filter(O=>O.rate!==0).map(O=>l`<div><dt>${j&&j.taxLabel||"Steuer"} ${$t(O.rate)}</dt><dd>${H(O.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${H(M.totalCents,s.currency)}</dd></div>
              ${L!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${H(L,J)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${Q} title="Wechselkurs">
          ${c.error&&l`<${Ne} tone="warn" action=${Ki("USD","EUR")&&l`<${E} small onClick=${uu}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${Ye} value=${li} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${cu} />
            <span class="fx-eq">EUR</span>
            <${E} small icon="refresh" busy=${c.loading} onClick=${()=>U(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${V(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&li?` Das entspricht 1 EUR = ${na(1/li)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${je} label=${`Betrag zusätzlich in ${J} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${S("showSecondary")} />
        <//>

        <${Q} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${re} class="span-6" label="Einleitung" value=${s.intro} onInput=${S("intro")} rows=${2} />
            <${re} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${S("paymentTerms")} rows=${2} />
            <${re} class="span-6" label="Fußzeile" value=${s.footer} onInput=${S("footer")} rows=${2} />
          </div>
        <//>

        <${Q} title="Interne Notiz">
          <${re} value=${s.internalNotes} onInput=${S("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${P.fileName}</span>
          </div>
          <${fa} model=${P} />
        </div>
      </div>
    </div>

    ${h&&h.type==="customer"&&l`<${da}
      customer=${rn({company:h.seed||"",kind:e==="quotes"?"contact":"customer"})} onClose=${()=>g(null)}
      onSaved=${O=>_(X=>ei(X,O,w("companies",X.companyId),e))} />`}
    ${h&&h.type==="service"&&l`<${yr}
      service=${on({companyId:"",currency:s.currency})} onClose=${()=>g(null)}
      onSaved=${O=>_(X=>({...X,items:[...X.items,gt(O,w("companies",X.companyId))]}))} />`}
  `}var Zd=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],Vd=15*1024*1024;function Cc(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Gd(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function xr(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function ti(e,t,n){let a=await Gd(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var Hd=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function kr(e,{shrink:t=!0}={}){if(e.size>Vd)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(Hd(e))try{let{canvas:a}=await ti(e,2e3,"#ffffff");return{blob:await xr(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!Zd.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await ti(e,2e3,"#ffffff"),i=await xr(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function Ec(e){let{canvas:t}=await ti(e,1568,"#ffffff");return xr(t,"image/jpeg",.85)}async function Ic(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await ti(e,800,null);return t.toDataURL("image/png")}async function ni(e){let t=await bo("blobs",e);return t?t.blob:null}var Nc="https://api.anthropic.com/v1/messages",Kt=class extends Error{};function jd(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var Wd=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function Qd({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[jd(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:Wd}]}]}}var wt=e=>typeof e=="string"?e.trim():"",Dr=e=>Number.isFinite(Number(e))?Cs(Number(e)):0;function Jd(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(f=>f.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new Kt("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new Kt("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=wt(s.currency).toUpperCase();fs.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=Dr(s.net_amount),c=Dr(s.tax_amount),p=Dr(s.total_amount);p&&o+c!==p&&(!o&&c<=p||Math.abs(o+c-p)<=2?o=p-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let d=we(wt(s.invoice_date))?wt(s.invoice_date):"";d||i.push("Das Belegdatum wurde nicht erkannt.");let u=we(wt(s.payment_date))?wt(s.payment_date):"",m=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:wt(s.vendor).slice(0,200),description:wt(s.description).slice(0,300),invoiceNumber:wt(s.invoice_number).slice(0,80),invoiceDate:d,paymentDate:u,currency:r,netCents:o,taxCents:c,totalCents:p||o+c,paymentMethod:n.includes(wt(s.payment_method))?wt(s.payment_method):"",category:t.includes(wt(s.category))?wt(s.category):""},uncertain:m,warnings:i,usage:e.usage||null}}function Tc(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Ac(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new Kt("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await Ec(e),r="image/jpeg");let o=await Cc(i),c=Qd({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),p;try{p=await fetch(Nc,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new Kt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let d=null;try{d=await p.json()}catch{}if(!p.ok)throw new Kt(Tc(p.status,d));return Jd(d,{categories:a,paymentMethods:s})}async function Rc({apiKey:e,model:t}){if(!e)throw new Kt("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(Nc,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new Kt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new Kt(Tc(n.status,a));return!0}var ai=new Set,Sr=new Set,Bc=()=>Sr.forEach(e=>e(new Set(ai)));function Yd(){let[e,t]=k(new Set(ai));return ue(()=>(Sr.add(t),()=>Sr.delete(t)),[]),e}var Xd=()=>({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,categories:y.settings.expenseCategories||[],paymentMethods:y.settings.paymentMethods||[]});async function Uc(e){let t=await ni(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return Ac(t,Xd())}async function em(e,t){try{return await Ra(e,we(t)?t:Z())}catch{return null}}async function tm(e){let t=await kr(e,{shrink:y.settings.shrinkImages!==!1}),n=pe()||(de().length===1?de()[0]:null),a=Ea({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:y.settings.aiApiKey?"pending":"none"}}),s=await Xi({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await fn(a),!y.settings.aiApiKey)return a;ai.add(a.id),Bc();try{let i=await Uc(s.id),r=i.fields,o=r.currency||a.currency,c=await em(o,r.invoiceDate),p=w("expenses",a.id);p&&p.status==="review"&&(a=await fn({...p,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:y.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=w("expenses",a.id);throw r&&await fn({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{ai.delete(a.id),Bc()}return a}function nm({attachmentId:e}){let[t,n]=k(""),[a,s]=k(!1),i=w("attachments",e);ue(()=>{let o="",c=!0;return n(""),s(!1),ni(e).then(p=>{if(c){if(!p){s(!0);return}o=URL.createObjectURL(p),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await ni(e);o&&st(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${te} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${qn(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function am({expense:e,onClose:t}){let n=!w("expenses",e.id),a=e.status==="review",[s,i]=k(()=>{let P=De(e);if(!P.invoiceDate&&!a&&(P.invoiceDate=Z()),!P.companyId){let J=pe()||(de().length===1?de()[0]:null);J&&(P.companyId=J.id)}return P}),[r,o]=k(""),[c,p]=k(""),[d,u]=k(0),m=Re([]),f=Re(null),v=P=>J=>i(L=>({...L,[P]:J})),$=(s.attachmentIds||[])[0],h=s.ai||{},g=new Set(h.uncertain||[]),b=`${s.currency}|${s.invoiceDate}`;ue(()=>{let P=!0;if(!we(s.invoiceDate)||s.fx&&s.fx.manual)return;let J=(me,z)=>!!me&&me.forCurrency===z.currency&&me.forDate===Bn(z.invoiceDate);if(J(s.fx,s))return;p("");let L=s.currency,ae=s.invoiceDate;return Ra(L,ae).then(me=>{P&&i(z=>z.currency===L&&z.invoiceDate===ae&&!(z.fx&&z.fx.manual)?{...z,fx:me}:z)}).catch(me=>{P&&(i(z=>z.fx&&!z.fx.manual&&z.fx.forDate&&!J(z.fx,z)?{...z,fx:null}:z),p(me.message))}),()=>{P=!1}},[b,d]);function C(P,J){i(L=>{let ae={...L,[P]:J};return P==="totalCents"?ae.netCents=(J||0)-(L.taxCents||0):ae.totalCents=(ae.netCents||0)+(ae.taxCents||0),ae})}function x(P,J){J>0&&i(L=>{let me={...L.fx||{rateToUSD:L.currency==="USD"?1:null,usdToEur:null},[P]:J,manual:!0,source:"Von Hand eingetragen",date:Z(),fetchedAt:ne()};return L.currency==="USD"&&(me.rateToUSD=1),L.currency==="EUR"&&P==="usdToEur"&&(me.rateToUSD=1/J),{...L,fx:me}})}async function N(P){if(!P)return;o("file");let J=await B(async()=>{let L=await kr(P,{shrink:y.settings.shrinkImages!==!1});return Xi({blob:L.blob,name:L.name,ownerType:"expense",ownerId:s.id})});o(""),J&&(m.current.push(J.id),i(L=>({...L,attachmentIds:[J.id,...L.attachmentIds||[]]})))}async function _(){if(!await le({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let J=$;await B(()=>er(J)),i(ae=>({...ae,attachmentIds:(ae.attachmentIds||[]).filter(me=>me!==J)}));let L=w("expenses",s.id);L&&await B(()=>fn({...L,attachmentIds:(L.attachmentIds||[]).filter(ae=>ae!==J)}))}async function S(){if($){o("ai");try{let P=await Uc($),J=P.fields;i(L=>({...L,...J,currency:J.currency||L.currency,fx:null,ai:{status:"done",at:ne(),model:y.settings.aiModel,uncertain:P.uncertain,warnings:P.warnings}})),u(L=>L+1),R("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(P){Xn(P)}o("")}}async function j(){let P=w("expenses",s.id),J=new Set(P?P.attachmentIds||[]:[]);for(let L of m.current)J.has(L)||await er(L).catch(()=>{});t()}async function A(){o("save");let P=await B(()=>fn({...s,status:"booked"}));o(""),P&&(R(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function D(){if(!await le({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await El(s.id),!0))&&(R("Ausgabe gelöscht","good"),t())}let U=P=>g.has(P)?"Von der KI als unsicher markiert – bitte prüfen":"",M=s.fx?mt(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,I=y.settings.expenseCategories||[],K=y.settings.paymentMethods||[];return l`<${Oe} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${j} size="xl" onSubmit=${A}
    footer=${l`
      ${!n&&l`<${E} variant="ghost" icon="trash" onClick=${D} class="push-left">Löschen<//>`}
      <${E} onClick=${j}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${$?l`<${nm} attachmentId=${$} />
              <div class="receipt-actions">
                <${E} small icon="sparkle" busy=${r==="ai"} disabled=${!y.settings.aiApiKey} onClick=${S}
                  title=${y.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${E} small variant="ghost" icon="trash" onClick=${_}>Beleg entfernen<//>
              </div>
              ${!y.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>f.current&&f.current.click()}>
              <${te} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${f} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${P=>{N(P.target.files[0]),P.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${h.status==="done"&&l`<${Ne} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(h.warnings||[]).length>0&&l`<ul class="notice-list">${h.warnings.map(P=>l`<li>${P}</li>`)}</ul>`}
        <//>`}
        ${h.status==="error"&&l`<${Ne} tone="warn">Automatisches Auslesen fehlgeschlagen: ${h.message}<//>`}
        <div class="form-grid">
          <${ce} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${v("companyId")} placeholder="Unternehmen wählen"
            options=${de().map(P=>({id:P.id,label:P.name}))} />
          <${ce} class="span-3" label="Kategorie" value=${s.category} onChange=${v("category")} placeholder="Keine"
            options=${I.includes(s.category)||!s.category?I:[...I,s.category]} hint=${U("category")} />
          <${F} class="span-4" label="Lieferant" value=${s.vendor} onInput=${v("vendor")} hint=${U("vendor")} />
          <${F} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${v("invoiceNumber")} hint=${U("invoice_number")} />
          <${F} class="span-6" label="Beschreibung" value=${s.description} onInput=${v("description")} />
          <${qe} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${v("invoiceDate")} hint=${U("invoice_date")} />
          <${qe} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${v("paymentDate")} hint=${U("payment_date")} />
          <${ce} class="span-2" label="Währung" value=${s.currency} hint=${U("currency")}
            onChange=${P=>i(J=>({...J,currency:P,fx:null}))} options=${fs} />
          <${Ue} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${P=>C("netCents",P)} hint=${U("net_amount")} />
          <${Ue} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${P=>C("taxCents",P)} hint=${U("tax_amount")} />
          <${Ue} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${P=>C("totalCents",P)}
            hint=${U("total_amount")||(M!=null&&s.currency!=="USD"?`≈ ${H(M,"USD")}`:"")} />
          <${ce} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${v("paymentMethod")} placeholder="Keine Angabe"
            options=${K.includes(s.paymentMethod)||!s.paymentMethod?K:[...K,s.paymentMethod]} />
          <${xe} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${V(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${Ye} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${P=>x("rateToUSD",P)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${Ye} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${P=>x("usdToEur",P)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${re} class="span-6" label="Notiz" value=${s.note} onInput=${v("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function _c(){ge();let e=Yd(),[t,n]=k(""),[a,s]=k(""),[i,r]=k("year"),[o,c]=k(null),[p,d]=k(!1),[u,m]=k(0),f=Re(null),v=!pe(),$=Z(),h=ke(()=>y.expenses.filter(D=>Ge(D)||!D.companyId&&D.status==="review"),[y.version,y.settings.activeCompany]),g=h.filter(D=>D.status==="review").sort((D,U)=>D.createdAt<U.createdAt?1:-1),b=ut(i,$),C=h.filter(D=>D.status==="booked"),x=C.filter(D=>i==="all"||Zt(D.invoiceDate,b)).filter(D=>!a||D.category===a).filter(D=>Te(t,D.vendor,D.description,D.invoiceNumber,D.category,D.note,(D.totalCents/100).toFixed(2),(D.totalCents/100).toFixed(2).replace(".",","))),N=[...new Set(C.map(D=>D.category).filter(Boolean))].sort((D,U)=>D.localeCompare(U,"de")),_=x.reduce((D,U)=>(D.net+=at(U.netCents,U.currency,U.fx)||0,D.tax+=at(U.taxCents,U.currency,U.fx)||0,D.total+=at(U.totalCents,U.currency,U.fx)||0,D),{net:0,tax:0,total:0});async function S(D){let U=[...D];if(!U.length)return;if(!de().length){R("Lege zuerst ein Unternehmen an.","bad");return}m(I=>I+U.length);let M=0;for(let I of U)try{await tm(I),M+=1}catch(K){Xn(K)}finally{m(K=>K-1)}M&&R(M===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${M} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let j=[{key:"date",label:"Datum",sort:D=>D.invoiceDate,render:D=>V(D.invoiceDate)},{key:"vendor",label:"Lieferant",sort:D=>D.vendor,render:D=>l`<div class="cell-main">${D.vendor}</div>${D.description&&l`<div class="cell-sub clamp-1">${D.description}</div>`}`},{key:"category",label:"Kategorie",sort:D=>D.category,render:D=>D.category||l`<span class="muted-text">–</span>`},...v?[{key:"company",label:"Unternehmen",render:D=>l`<${Le} id=${D.companyId} />`}]:[],{key:"file",label:"Beleg",render:D=>(D.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${te} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:D=>at(D.netCents,D.currency,D.fx)||0,render:D=>H(D.netCents,D.currency)},{key:"tax",label:"Steuer",align:"right",render:D=>D.taxCents?H(D.taxCents,D.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:D=>at(D.totalCents,D.currency,D.fx)||0,render:D=>l`<span class="dual"><span class="dual-main">${H(D.totalCents,D.currency)}</span>
        ${D.currency!==ie()&&at(D.totalCents,D.currency,D.fx)!=null&&l`<span class="dual-sub">≈ ${ee(at(D.totalCents,D.currency,D.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:D=>D.paymentDate||"",render:D=>D.paymentDate?V(D.paymentDate):l`<span class="muted-text">offen</span>`}],A=x.length?[`${x.length} ${x.length===1?"Ausgabe":"Ausgaben"}`,"","",...v?[""]:[],"",l`<span class="strong">${ee(_.net)}</span>`,l`<span class="strong">${ee(_.tax)}</span>`,l`<span class="strong">${ee(_.total)}</span>`,l`<span class="muted-text">in ${ie()}</span>`]:null;return l`
    <${ve} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${E} icon="plus" onClick=${()=>c(Ea())}>Ausgabe von Hand<//>
      <${E} variant="primary" icon="upload" onClick=${()=>f.current&&f.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${p?" is-drag":""}`}
      onDragOver=${D=>{D.preventDefault(),d(!0)}}
      onDragLeave=${()=>d(!1)}
      onDrop=${D=>{D.preventDefault(),d(!1),S(D.dataTransfer.files)}}>
      <${te} name="upload" size=${24} />
      <div>
        <strong>${u>0?`${u} ${u===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${y.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${f} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${D=>{S(D.target.files),D.target.value=""}} />
    </div>

    ${g.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${g.length}</span></h2>
      <ul class="review-list">
        ${g.map(D=>{let U=e.has(D.id),M=D.ai||{};return l`<li key=${D.id}>
            <button type="button" class="review-item" onClick=${()=>c(D)} disabled=${U}>
              <span class="review-icon"><${te} name=${U?"refresh":"file"} class=${U?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${D.vendor||(w("attachments",(D.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${U?"Wird ausgelesen …":M.status==="error"?`Nicht ausgelesen: ${M.message}`:M.status==="done"?`${D.invoiceDate?V(D.invoiceDate):"Datum fehlt"}, ${D.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${D.totalCents?H(D.totalCents,D.currency):""}</span>
              <span class="review-go">${U?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${C.length>0&&l`<div class="filters">
      <${vt} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${D=>r(D.target.value)}>
        ${xn.filter(D=>D.id!=="custom").map(D=>l`<option value=${D.id}>${D.label}</option>`)}
      </select>
      ${N.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${D=>s(D.target.value)}>
        <option value="">Alle Kategorien</option>
        ${N.map(D=>l`<option value=${D}>${D}</option>`)}
      </select>`}
    </div>`}
    ${(C.length>0||g.length===0)&&l`<${ot} columns=${j} rows=${x} initialSort=${{key:"date",dir:"desc"}} footer=${A} onRowClick=${D=>c(D)}
      empty=${C.length?l`<${fe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${fe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${am} expense=${o} onClose=${()=>c(null)} />`}
  `}function sm(e){let t=kn.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=Ms(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function im({rec:e,onClose:t}){let n=!w("recurring",e.id),[a,s]=k(()=>De(e)),[i,r]=k(!1),o=v=>$=>s(h=>({...h,[v]:$})),c=w("companies",a.companyId),p=Ct(a),d=y.customers.filter(v=>v.active!==!1||v.id===a.customerId).sort((v,$)=>G(v).localeCompare(G($),"de")).map(v=>({id:v.id,label:G(v),sub:[v.number,v.city].filter(Boolean).join(", ")}));function u(v){let $=w("companies",v);s(h=>({...h,companyId:v,...$&&n?{currency:$.currency,language:$.language,paymentTermDays:$.paymentTermDays,intro:h.intro||$.invoiceText}:{}}))}function m(v){let $=w("customers",v);s(h=>({...h,customerId:v,...$&&$.language?{language:$.language}:{},...$&&$.currency&&et.includes($.currency)?{currency:$.currency}:{},...$&&$.paymentTermDays!=null&&$.paymentTermDays!==""?{paymentTermDays:Number($.paymentTermDays)}:{}}))}async function f(){r(!0);let v=await B(()=>Pa(a));r(!1),v&&(R("Vorlage gespeichert","good"),t())}return l`<${Oe} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${f}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${F} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${ce} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${u} placeholder="Unternehmen wählen"
        options=${de().map(v=>({id:v.id,label:v.name}))} />
      <${xe} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${zt} id="rec-customer" options=${d} value=${a.customerId} placeholder="Kunde suchen" onChange=${m} />
      <//>
      <${ce} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${kn.map(v=>({id:v.id,label:v.label}))} />
      ${a.interval==="custom"&&l`<${Ue} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${qe} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${qe} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${Ue} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${ce} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${et} />
      <${ce} class="span-2" label="Belegsprache" value=${a.language} onChange=${o("language")} options=${xt} />
      <div class="span-6">
        <${je} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${v=>o("servicePeriod")(v?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${wr} doc=${a} company=${c} onChange=${v=>s($=>({...$,items:v}))}
      onNewService=${()=>R("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${H(p.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${re} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${je} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function Mc(){ge();let[e,t]=k(null),[n,a]=k(""),s=Z(),i=y.recurring.filter(Ge),r=i.filter(m=>ia(m,s)),o=!pe();async function c(m,f){let v=m.nextDate>s;if(v&&!await le({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${V(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(m.id);let $=await B(()=>tr(m.id,{early:v}));return a(""),$&&(R(`Rechnungsentwurf für ${G(w("customers",m.customerId))} angelegt`,"good"),f&&Y(`/invoices/${$.id}/edit`)),$}async function p(){a("all");let m=0;for(let f of r){let v=0;for(;ia(w("recurring",f.id),s)&&v++<36&&await B(()=>tr(f.id));)m+=1}a(""),m&&(R(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),Y("/invoices?status=draft"))}async function d(m){if(!await le({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await Il(m.id),!0))&&R("Vorlage gelöscht","good")}let u=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${G(w("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Le} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>sm(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>ra(m)?l`<span class="muted-text">beendet</span>`:m.active?ia(m,s)?l`<span class="tone-warn">${V(m.nextDate)}</span><div class="cell-sub">fällig</div>`:V(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>H(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>ra(m)?l`<${_e} tone="mute">Beendet<//>`:m.active?l`<${_e} tone="good">Aktiv<//>`:l`<${_e} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${E} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||ra(m)}
          title=${ra(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(m,!0)}>Jetzt erzeugen<//>
        <${E} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>d(m)} />
      </div>`}];return l`
    <${ve} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${E} variant="primary" icon="plus" onClick=${()=>t(Wn(pe()||(de().length===1?de()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${Ne} tone="warn" action=${l`<${E} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${p}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${ot} columns=${u} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${fe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${E} variant="primary" icon="plus" onClick=${()=>t(Wn(pe()||(de().length===1?de()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${im} rec=${e} onClose=${()=>t(null)} />`}
  `}var si=null;function rm(){return si||(si=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw si=null,e})),si}var ii=e=>e&&typeof e=="object"?e.v:e,zc=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function Cr(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function om(e){let t=[e.columns.map(n=>Cr(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>Cr(ii(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>Cr(ii(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function ri(e){let t=new Blob([om(e)],{type:"text/csv;charset=utf-8"});st(t,`${Gt(e.fileName)}.csv`)}async function Lc(e){let t=await rm(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(ii));e.totals&&n.push(e.totals.map(ii));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let p=t.utils.encode_cell({r:c,c:o}),d=a[p];d&&(typeof d.v=="number"&&r.type==="money"&&(d.z="#,##0.00"),typeof d.v=="string"&&/^[=+\-@]/.test(d.v)&&(d.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,Gt(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});st(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Gt(e.fileName)}.xlsx`)}async function Pc(e){await Ql({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(zc)),totals:e.totals?e.totals.map(zc):null,fileName:`${Gt(e.fileName)}.pdf`,landscape:e.columns.length>6})}function Fc(e="year"){let[t,n]=k(e),[a,s]=k({from:`${Z().slice(0,4)}-01-01`,to:Z()}),i=ut(t,Z(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function lm(e){let t=xn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${V(e.range.from)} bis ${V(e.range.to)}`}function qc({p:e}){let t=pe();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${xn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>we(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>we(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${V(e.range.from)} bis ${V(e.range.to)}`:""}</span>
  </div>`}var Zc=(e,t)=>t?$t(Math.round(e/t*1e3)/10):"–",$e=e=>({v:e/100,t:ee(e)}),yn=e=>({v:e/100,t:ze(e)}),Ze=(e,t)=>({v:e/100,t:H(e,t)}),ga=e=>({v:e||"",t:e?V(e):""}),he={align:"right",type:"money"},vn={align:"right",type:"number"};function Vc(){ge();let e=Fc("year"),t=Z(),n=Nt(),a=pe(),s=Jt(),i=ke(()=>{let u={companyId:n,range:e.range},m=or(e.range,s,n),f=m.slice(-24);return{summary:Ml(s,u,t),truncated:m.length>f.length,series:f.length?qa(s,{companyId:n,months:f,range:e.range}):[],byCompany:Va(s,u),byCustomer:Za(s,u),byService:Ga(s,u),byCategory:rr(s,u)}},[y.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(u=>({key:u.key,label:Fn(u.key),title:At(u.key),values:{rev:T(u,"revenue"),exp:T(u,"expense")}})),p={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(u=>[At(u.key),ee(T(u,"revenue")),ee(T(u,"expense")),ee(T(u,"profit")),ee(T(u,"payments"))])},d=u=>[...u].sort((m,f)=>T(f)-T(m));return l`
    <${ve} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${ie()}, ${$n()} als Zweitwert.`}>
      <${E} icon="reports" onClick=${()=>Y("/reports")}>Reports und Export<//>
    <//>
    <${qc} p=${e} />

    <div class="stat-row stat-row-3">
      <${Me} label="Einnahmen" value=${ee(T(r.income))} sub=${`≈ ${ze(Se(r.income))}, ${r.income.count} Rechnungen`} />
      <${Me} label="Ausgaben" value=${ee(T(r.expenses))} sub=${`≈ ${ze(Se(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Me} label="Gewinn" value=${ee(T(r.profit))} tone=${T(r.profit)<0?"bad":"good"} sub=${`≈ ${ze(Se(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Me} label="Zahlungseingänge" value=${ee(T(r.payments))} sub=${`≈ ${ze(Se(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Me} label="Offene Forderungen (heute)" value=${ee(T(r.receivables))} sub=${`≈ ${ze(Se(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Me} label="Steuern (Saldo)" value=${ee(T(r.taxBalance))}
        sub=${`berechnet ${ee(T(r.taxCollected))}, in Ausgaben ${ee(T(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${Fa} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${ie()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${ie()}`} series=${o} table=${p}>
      <${Oa} groups=${c} series=${o} mode="grouped" format=${u=>ee(u)} axisFormat=${u=>Aa(u,ie())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${Q} title="Umsatz pro Unternehmen">
        <${Qt} rows=${d(i.byCompany).map(u=>({key:u.id,label:u.name,value:T(u),display:ee(T(u)),color:Ka(u.color)}))} />
      <//>`}
      <${Q} title="Umsatz pro Kunde">
        <${Qt} rows=${d(i.byCustomer).map(u=>({key:u.id,label:u.name,value:T(u),display:ee(T(u)),href:`#/customers/${u.id}`}))} />
      <//>
      <${Q} title="Umsatz pro Leistung">
        <${Qt} rows=${d(i.byService).map(u=>({key:u.key,label:u.name,value:T(u),display:ee(T(u))}))} />
      <//>
      <${Q} title="Ausgaben nach Kategorie">
        <${Qt} rows=${d(i.byCategory).map(u=>({key:u.name,label:u.name,value:T(u),display:ee(T(u)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function Er(e,t,n,a,s){let i=Ul(e,t,n),r=i.reduce((o,c)=>({c:o.c+T(c),a:o.a+Se(c),tax:o.tax+T(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...vn},{label:`Umsatz netto (${ie()})`,...he},{label:`Umsatz netto (${$n()})`,...he},{label:`Steuer (${ie()})`,...he}],rows:i.map(o=>[a(o.key),o.count,$e(T(o)),yn(Se(o)),$e(T(o,"tax"))]),totals:["Summe",r.count,$e(r.c),yn(r.a),$e(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?Fn(o.key):a(o.key),title:a(o.key),values:{rev:T(o)}}))}}}function Ir(e,t,n=[]){let a=[...e].sort((i,r)=>T(r)-T(i)),s=a.reduce((i,r)=>({c:i.c+T(r),a:i.a+Se(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${ie()})`,...he},{label:`Umsatz netto (${$n()})`,...he},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),$e(T(i)),yn(Se(i)),Zc(T(i),s.c)]),totals:["Summe",...n.map(()=>""),$e(s.c),yn(s.a),""]}}function Kc(e,t,n,a){let s=hn(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+T(c,"open"),0),r=Rl.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,p)=>c+T(p,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...vn},{label:"Währung"},{label:"Rechnungsbetrag",...he},{label:"Offen",...he},{label:`Offen (${ie()})`,...he}],rows:s.map(o=>[o.inv.number,Pe(o.inv),(w("companies",o.inv.companyId)||{}).name||"",ga(o.inv.issueDate),ga(o.inv.dueDate),o.overdueDays,o.inv.currency,Ze(o.inv.totals.totalCents,o.inv.currency),Ze(o.openCents,o.inv.currency),$e(T(o,"open"))]),totals:["Summe","","","","","","","","",$e(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var Nr=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>Er(e,t,"month",At,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>Er(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>Er(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>Ir(Za(e,t),"Kunde",[{col:{label:"Rechnungen",...vn},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>Ir(Va(e,t),"Unternehmen",[{col:{label:"Rechnungen",...vn},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>Ir(Ga(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...vn},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:An(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=_l(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...vn},{label:"Netto",...he},{label:"Steuer",...he},{label:"Brutto",...he},{label:"Netto in USD",...he},{label:"Netto in EUR",...he}],rows:n.map(a=>[a.currency,a.count,Ze(a.netCents,a.currency),Ze(a.taxCents,a.currency),Ze(a.totalCents,a.currency),Ze(a.usd,"USD"),Ze(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",Ze(n.reduce((a,s)=>a+s.usd,0),"USD"),Ze(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>Kc(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>Kc(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=or(t.range,e,t.companyId),a=n.length?qa(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+T(r,"revenue"),exp:i.exp+T(r,"expense"),alt:i.alt+Se(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${ie()})`,...he},{label:`Ausgaben (${ie()})`,...he},{label:`Gewinn (${ie()})`,...he},{label:`Gewinn (${$n()})`,...he}],rows:a.map(i=>[At(i.key),$e(T(i,"revenue")),$e(T(i,"expense")),$e(T(i,"profit")),yn(Se(i,"profit"))]),totals:["Summe",$e(s.rev),$e(s.exp),$e(s.rev-s.exp),yn(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:Fn(i.key),title:At(i.key),values:{rev:T(i,"revenue"),exp:T(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...rr(e,t)].sort((s,i)=>T(i)-T(s)),a=n.reduce((s,i)=>({c:s.c+T(i),a:s.a+Se(i),tax:s.tax+T(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...vn},{label:`Netto (${ie()})`,...he},{label:`Netto (${$n()})`,...he},{label:`Steuer (${ie()})`,...he},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,$e(T(s)),yn(Se(s)),$e(T(s,"tax")),Zc(T(s),a.c)]),totals:["Summe",a.count,$e(a.c),yn(a.a),$e(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=zl(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...he},{label:"Steuer",...he},{label:`Steuer (${ie()})`,...he}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${$t(a.rate)}`,a.currency,Ze(a.netCents,a.currency),Ze(a.taxCents,a.currency),$e(T(a,"tax"))]),["In Ausgaben enthaltene Steuer",ie(),"","",$e(-T(n,"paid"))]],totals:["Saldo","","","",$e(T(n,"collected")-T(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=nt(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+T(r,"net"),tax:i.tax+T(r,"tax"),total:i.total+T(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...he},{label:"Steuer",...he},{label:"Brutto",...he},{label:`Netto (${ie()})`,...he},{label:"Kurs USD/EUR",...vn},{label:"Bezahlt",...he},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=Ve(r.id),c=Mt(r,o,n);return[r.number,ga(r.issueDate),Pe(r),(w("companies",r.companyId)||{}).name||"",r.currency,Ze(r.totals.netCents,r.currency),Ze(r.totals.taxCents,r.currency),Ze(r.totals.totalCents,r.currency),$e(T(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:An(r.fx.usdToEur,"de",4)}:"",Ze(Ae(o),r.currency),(ka[c]||{}).label||c]}),totals:["Summe","","","",ie(),$e(s.net),$e(s.tax),$e(s.total),$e(s.net),"","",""],note:`Die Summenzeile ist in ${ie()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=zs(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...he},{label:`Betrag (${ie()})`,...he}],rows:n.map(a=>[ga(a.date),a.inv.number,Pe(a.inv),a.pay.method||"",a.inv.currency,Ze(a.pay.amountCents,a.inv.currency),$e(T(a))]),totals:["Summe","","","","","",$e(n.reduce((a,s)=>a+T(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=oa(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+T(i,"net"),tax:s.tax+T(i,"tax"),total:s.total+T(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...he},{label:"Steuer",...he},{label:"Gesamt",...he},{label:`Gesamt (${ie()})`,...he},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[ga(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(w("companies",i.companyId)||{}).name||"",i.currency,Ze(i.netCents,i.currency),Ze(i.taxCents,i.currency),Ze(i.totalCents,i.currency),$e(T(s,"total")),ga(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",ie(),$e(a.net),$e(a.tax),$e(a.total),$e(a.total),"",""],note:`Die Summenzeile ist in ${ie()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],Oc=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function Gc({params:e}){ge();let[t,n]=k(e&&e.r&&Nr.find(h=>h.id===e.r)?e.r:"month"),a=Fc("year"),[s,i]=k(""),r=Z(),o=Nt(),c=pe(),p=Jt(),d=Nr.find(h=>h.id===t),u=ke(()=>d.build(p,{companyId:o,range:a.range},r),[y.version,t,o,a.range.from,a.range.to,ie()]),m=t==="open"||t==="overdue",f=`${c?c.name:"Alle Unternehmen"}, ${m?`Stichtag ${V(r)}`:lm(a)}`,v={title:d.label,subtitle:f,fileName:`${d.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:u.columns,rows:u.rows,totals:u.totals};async function $(h){i(h),await B(async()=>{h==="csv"?ri(v):h==="xlsx"?await Lc(v):await Pc(v)}),i("")}return l`
    <${ve} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${E} icon="download" busy=${s==="csv"} disabled=${!u.rows.length} onClick=${()=>$("csv")}>CSV<//>
      <${E} icon="download" busy=${s==="xlsx"} disabled=${!u.rows.length} onClick=${()=>$("xlsx")}>Excel<//>
      <${E} icon="download" busy=${s==="pdf"} disabled=${!u.rows.length} onClick=${()=>$("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${Nr.map(h=>l`<button type="button" class=${`report-link${h.id===t?" is-on":""}`} aria-current=${h.id===t?"true":void 0}
          onClick=${()=>n(h.id)}>${h.label}</button>`)}
      </nav>
      <div class="report-body">
        <${qc} p=${a} />
        ${u.note&&l`<p class="footnote">${u.note}</p>`}
        ${u.aging&&l`<div class="stat-row stat-row-5">
          ${u.aging.map(h=>l`<${Me} label=${h.label} value=${ee(h.value)} sub=${`${h.count} ${h.count===1?"Rechnung":"Rechnungen"}`} tone=${h.id!=="current"&&h.value?"bad":""} />`)}
        </div>`}
        ${u.chart&&u.chart.groups.length>1&&l`<${Fa} title=${d.label} sub=${`Netto in ${ie()}`} series=${u.chart.series}>
          <${Oa} groups=${u.chart.groups} series=${u.chart.series} mode=${u.chart.mode||"stacked"}
            format=${h=>ee(h)} axisFormat=${h=>Aa(h,ie())} ariaLabel=${d.label} />
        <//>`}
        ${u.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${u.columns.map(h=>l`<th class=${h.align==="right"?"r":""}>${h.label}</th>`)}</tr></thead>
              <tbody>${u.rows.map(h=>l`<tr>${h.map((g,b)=>l`<td class=${u.columns[b].align==="right"?"r":""}>${Oc(g)}</td>`)}</tr>`)}</tbody>
              ${u.totals&&l`<tfoot><tr>${u.totals.map((h,g)=>l`<td class=${u.columns[g].align==="right"?"r":""}>${Oc(h)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${fe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function Hc(){ge();let[e,t]=k({}),n=[...y.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ue(()=>{let a=!0;return Promise.all(n.map(s=>_a(s,"invoice",Z()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[y.version]),l`
    <${ve} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${E} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${fe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${E} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${Ht(a.logoAssetId)?l`<img src=${Ht(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
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
                ${a.archived?l`<${_e} tone="mute">Archiviert<//>`:s.length?l`<${_e} tone="warn">Es fehlt: ${s.join(", ")}<//>`:l`<${_e} tone="good">Vollständig<//>`}
              </span>
            </a>
          </li>`})}
      </ul>`}
  `}function jc({id:e}){ge();let t=e&&e!=="new"?w("companies",e):null,[n,a]=k(()=>t?De(t):Da()),[s,i]=k(null),[r,o]=k(!1),[c,p]=k(!1),[d,u]=k({}),[m,f]=k(null),v=Re(null),$=Z(),h=U=>{a(U),o(!0)},g=U=>M=>h(I=>({...I,[U]:M}));if(ue(()=>(r?xs(ks):Nn(),()=>Nn()),[r]),ue(()=>{let U=!0;return Promise.all(["invoice","quote","credit"].map(M=>_a(n,M,$).catch(()=>""))).then(([M,I,K])=>{U&&u({invoice:M,quote:I,credit:K})}),()=>{U=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,y.version]),e&&e!=="new"&&!t)return l`<${fe} icon="company" title="Unternehmen nicht gefunden"><${E} onClick=${()=>Y("/companies")}>Zur Übersicht<//><//>`;let b=t?w("counters",Un(t.id,"invoice",It(t,"invoice").pattern,$)):null,C=b?b.last:0,x=s||Ht(n.logoAssetId),N={invoice:Pt(n.invoicePattern),quote:Pt(n.quotePattern),credit:Pt(n.creditPattern)};async function _(U){if(!U)return;let M=await B(()=>Ic(U));M&&(i(M),o(!0))}async function S(){p(!0);let U=await B(()=>Ba(n,s));p(!1),U&&(i(null),a(De(U)),o(!1),R("Unternehmen gespeichert","good"),t||un(`/companies/${U.id}`))}async function j(){if(m==null||!t||!await le({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${$.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await B(async()=>(await fl(t,"invoice",$,m),!0))&&(R("Nummernkreis angepasst","good"),f(null))}async function A(){await B(async()=>(await Yo(t.id,!t.archived),!0))&&(R(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(M=>({...M,archived:!t.archived})))}async function D(){if(!await le({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await B(async()=>(await Xo(t.id),!0))&&(R("Unternehmen gelöscht","good"),un("/companies"))}return l`
    <${ve} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${ft} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:A},{label:"Löschen",icon:"trash",danger:!0,disabled:Zi(t.id),onClick:D}]} />`}
      <${E} variant="primary" icon="check" busy=${c} onClick=${S}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${Ne} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${Q} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${F} class="span-4" label="Unternehmensname" value=${n.name} onInput=${g("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${F} class="span-2" label="Kurzname" value=${n.shortName} onInput=${g("shortName")} hint="Für den Company Switcher" />
          <${F} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${g("legalForm")} />
          <${xe} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${U=>g("brandColor")(U.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${xe} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${x?l`<img src=${x} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${E} icon="upload" onClick=${()=>v.current&&v.current.click()}>${x?"Logo ersetzen":"Logo hochladen"}<//>
              ${x&&l`<${E} variant="ghost" icon="trash" onClick=${()=>{i(null),g("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${v} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${U=>{_(U.target.files[0]),U.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${Q} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${F} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${g("street")} />
          <${F} class="span-2" label="PLZ" value=${n.zip} onInput=${g("zip")} />
          <${F} class="span-4" label="Ort" value=${n.city} onInput=${g("city")} />
          <${F} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${g("region")} />
          <${F} class="span-3" label="Land" value=${n.country} onInput=${g("country")} />
          <${F} class="span-2" label="Telefon" value=${n.phone} onInput=${g("phone")} />
          <${F} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${g("email")} />
          <${F} class="span-2" label="Website" value=${n.website} onInput=${g("website")} />
        </div>
      <//>

      <${Q} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${F} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${g("taxId")} />
          <${F} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${g("vatId")} />
          <${F} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${g("registerInfo")} />
        </div>
      <//>

      <${Q} title="Bank und Zahlung">
        <div class="form-grid">
          <${F} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${g("accountHolder")} />
          <${F} class="span-3" label="Bank" value=${n.bankName} onInput=${g("bankName")} />
          <${F} class="span-4" label="IBAN" value=${n.iban} onInput=${g("iban")} />
          <${F} class="span-2" label="BIC" value=${n.bic} onInput=${g("bic")} />
          <${re} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${g("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${re} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${g("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${Q} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${F} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${g("invoicePrefix")} placeholder="z. B. HL" />
          <${F} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${g("invoicePattern")} error=${N.invoice}
            hint=${d.invoice?`Nächste Rechnung: ${d.invoice}`:""} />
          <${Ue} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${g("numberDigits")} />
          <${F} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${g("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${F} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${g("quotePattern")} error=${N.quote}
            hint=${d.quote?`Nächstes Angebot: ${d.quote}`:""} />
          <${F} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${g("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${F} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${g("creditPattern")} error=${N.credit}
            hint=${d.credit?`Nächste Gutschrift: ${d.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${xe} label=${`Zuletzt vergebene laufende Rechnungsnummer ${$.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${Ye} id="counter-last" value=${m??C} digits=${0} min=${0} onChange=${U=>f(U)} />
              <${E} disabled=${m==null||m===C} onClick=${j}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${Q} title="Standards für neue Belege">
        <div class="form-grid">
          <${ce} class="span-2" label="Währung" value=${n.currency} onChange=${g("currency")} options=${et} />
          <${ce} class="span-2" label="Belegsprache" value=${n.language} onChange=${g("language")} options=${xt} />
          <${Ue} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${g("paymentTermDays")} />
          <${Ue} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${F} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${g("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${re} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${g("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${je} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${g("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${je} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${g("showFxNote")} /></div>
        </div>
      <//>

      <${Q} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${ce} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${g("meetingProvider")}
            placeholder="Keiner" options=${Gn} />
          <${F} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${g("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${re} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${g("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${Ue} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${g("meetingDuration")} />
          <${ce} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${g("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${rt()})`} options=${hs.map(U=>({id:U,label:U.replace(/_/g," ")}))}
            hint="Zum Beispiel Europe/Berlin, wenn deine Kunden dieses Unternehmens in Deutschland sitzen" />
        </div>
      <//>

      <${Q} title="Texte auf Belegen">
        <div class="form-grid">
          <${re} class="span-6" label="Einleitung Rechnung" value=${n.invoiceText} onInput=${g("invoiceText")} rows=${2} />
          <${re} class="span-6" label="Einleitung Angebot" value=${n.quoteText} onInput=${g("quoteText")} rows=${2} />
          <${re} class="span-6" label="Zahlungsbedingungen" value=${n.paymentTerms} onInput=${g("paymentTerms")} rows=${2} />
          <${re} class="span-6" label="Fußzeile" value=${n.footer} onInput=${g("footer")} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${E} variant="primary" icon="check" busy=${c} onClick=${S}>Unternehmen speichern<//>
      </div>
    </div>
  `}var Wc=["aiApiKey"],Qc=["lastBackupAt","changesSinceBackup"],Jc="bbc-finance-backup";function cm(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function um(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function Yc(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function Xc({includeFiles:e=!0}={}){let t={};for(let o of it)t[o]=await Jn(o);let n=await Jn("settings"),a={};for(let o of n)Wc.includes(o.key)||Qc.includes(o.key)||(a[o.key]=o.value);let s={format:Jc,schemaVersion:yi,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(it.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await Jn("blobs");for(let c=0;c<o.length;c++){let p=await cm(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(p)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function eu(){await W(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function tu(e){let t=new Map,n=0,a=(d,u)=>{try{t.set(d,um(u))}catch{n+=1}},s=null,i="",r=0,o=!1,c=d=>{r+=1;let u=d.trim();if(!u)return;if(r===1&&/"files":\{$/.test(u)){s=JSON.parse(`${u}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(u==="}}")return;let m=JSON.parse(`{${u.replace(/,$/,"")}}`);for(let[f,v]of Object.entries(m))a(f,v)},p=async()=>{let d;try{d=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(d&&typeof d=="object"&&d.files&&typeof d.files=="object"){for(let[u,m]of Object.entries(d.files))a(u,m);delete d.files}return d};if(!e.stream||typeof TextDecoderStream>"u")return s=await p(),{json:s,files:t,badFiles:n};try{let d=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:u,done:m}=await d.read();if(m)break;i+=u;let f=i.indexOf(`
`);for(;f>=0;)c(i.slice(0,f)),i=i.slice(f+1),f=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(d){if(!(d instanceof SyntaxError))throw d;t.clear(),n=0,s=await p()}return{json:s,files:t,badFiles:n}}var en=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),ha=e=>typeof e=="number"&&Number.isFinite(e);function Tr(e,t){if(!en(e)||e.format!==Jc)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>yi)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!en(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of it){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=Qn(s);for(let o of i)if(!en(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!en(r.totals)||!ha(r.totals.totalCents)||!ha(r.totals.netCents)||!ha(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number)throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!ha(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(ha))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(it.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:en(e.files)?Object.keys(e.files).length:0}}function dm(e){let t={};if(!en(e))return t;for(let n of Object.keys(Rt)){if(!Object.hasOwn(e,n)||Wc.includes(n)||Qc.includes(n))continue;let a=Rt[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?ha(r):typeof r=="string"))continue;t[n]=s}else en(a)?en(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function nu({json:e,files:t,badFiles:n=0}){Tr(e,t);let a=y.settings.aiApiKey||"",s=dm(e.settings);return await Dn(Dt,async r=>{for(let o of Dt)await r.clear(o);for(let o of it)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:We(),at:ne(),user:y.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:en(e.counts)?e.counts:null}})}),await Cn(),Na(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function au(){await Dn(Dt,async e=>{for(let t of Dt)await e.clear(t)}),await Cn(),Na()}async function Rr(e=!0){let t=await Xc({includeFiles:e});return st(t,Yc()),await eu(),t.size}function mm(){let[e,t]=k(""),[n,a]=k(null),s=Re(null);ue(()=>{vo().then(a)},[y.version]);async function i(c){t(c?"full":"lite");let p=await B(()=>Rr(c));t(""),p!=null&&R(`Backup gespeichert (${qn(p)})`,"good")}async function r(c){c&&(t("restore"),await B(async()=>{let p=await tu(c),d=Tr(p.json,p.files),u=d.counts;if(!await le({title:"Backup einspielen?",text:`Das Backup vom ${d.exportedAt?He(d.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${u.companies} Unternehmen, ${u.customers} Kunden, ${u.services} Leistungen`,`${u.invoices} Rechnungen, ${u.quotes} Angebote, ${u.payments} Zahlungen`,`${u.expenses} Ausgaben, ${d.includesFiles?`${d.fileCount} Belegdateien`:"ohne Belegdateien"}`,...u.appointments||u.notes||u.todos?[`${u.appointments||0} Termine, ${u.notes||0} Einträge in der Kundendokumentation, ${u.todos||0} To-dos`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let f=await nu(p);R(f.missingFiles?`Backup eingespielt. ${f.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),Y("/")}),t(""))}let o=y.settings;return l`<${Q} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${mn} rows=${[["Letztes Backup",o.lastBackupAt?He(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${qn(n.usage)}${n.quota?` von ${qn(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${E} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${E} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Belegdateien<//>
      <${E} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${je} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>B(()=>tt("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function pm(){let e=y.settings,[t,n]=k(e.aiApiKey||""),[a,s]=k(e.aiModel||Rt.aiModel),[i,r]=k(!1),[o,c]=k(""),p=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function d(){c("save");let m=await B(async()=>(await No({aiApiKey:t.trim(),aiModel:a.trim()||Rt.aiModel}),!0));c(""),m&&R("KI-Einstellungen gespeichert","good")}async function u(){c("test");let m=await B(()=>Rc({apiKey:t.trim(),model:a.trim()}));c(""),m&&R("Verbindung steht – der API-Key funktioniert.","good")}return l`<${Q} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${xe} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${E} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${xe} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${m=>s(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${E} variant="primary" busy=${o==="save"} disabled=${!p} onClick=${d}>Speichern<//>
      <${E} busy=${o==="test"} disabled=${!t.trim()} onClick=${u}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${E} variant="ghost" icon="trash" onClick=${async()=>{n(""),await B(()=>tt("aiApiKey","")),R("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${je} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>B(()=>tt("shrinkImages",m))} />
  <//>`}function Ar({label:e,settingKey:t,hint:n}){let a=(Array.isArray(y.settings[t])?y.settings[t]:[]).join(`
`),[s,i]=k(a);ue(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(p=>p.trim()).filter(Boolean))];await B(async()=>(await tt(t,o),!0))&&R("Liste gespeichert","good")}return l`<div class="span-2">
    <${re} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${E} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function fm(){let e=y.settings,[t,n]=k("de"),[a,s]=k("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[p,d]=k(c.subject),[u,m]=k(c.body);ue(()=>{d(c.subject),m(c.body)},[t,a,y.version]);let f=p!==c.subject||u!==c.body,v=e.reminderDays||[7,14,21];async function $(){await B(async()=>{if(r){let g=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));g[t]={subject:p,body:u},await tt("appointmentTemplates",g)}else if(i){let g=JSON.parse(JSON.stringify(e.reminderTemplates||{}));g[t]={...g[t]||{},[o]:{subject:p,body:u}},await tt("reminderTemplates",g)}else{let g=JSON.parse(JSON.stringify(e.emailTemplates||{}));g[t]={...g[t]||{},[a]:{subject:p,body:u}},await tt("emailTemplates",g)}return!0})&&R("Vorlage gespeichert","good")}return l`<${Q} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${xe} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${ht.map((h,g)=>l`<label class="mini-field">
            <span>${h.label}</span>
            <${Ye} value=${v[g]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${h.label}: Tage nach Fälligkeit`}
              onChange=${b=>{let C=[...v];C[g]=b,B(()=>tt("reminderDays",C))}} />
          </label>`)}
        </div>
      <//>
      <${ce} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...ht.map(h=>({id:`r${h.id}`,label:h.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${xe} class="span-2" label="Sprache">
        <${pt} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${F} class="span-6" label="Betreff" value=${p} onInput=${d} />
      <${re} class="span-6" label="Text" value=${u} onInput=${m} rows=${9} />
    </div>
    ${f&&l`<div class="button-row"><${E} variant="primary" onClick=${$}>Vorlage speichern<//></div>`}
  <//>`}function gm(){let[e,t]=k(""),n=y.customers.length||y.invoices.length||y.expenses.length||y.services.length;async function a(){t("demo");let r=await B(async()=>(await Ys(),!0));t(""),r&&(R("Beispieldaten geladen","good"),Y("/"))}async function s(){if(!await le({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Termine, Kundendokumentation, To-dos, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await B(async()=>(await bc(),!0));t(""),o&&(R("Daten gelöscht","good"),Y("/"))}async function i(){let r=await le({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){R("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await B(async()=>(await au(),await nr(),!0));t(""),o&&(R("Alle Daten gelöscht","good"),Y("/"))}return l`<${Q} title="Daten">
    ${y.settings.demoLoaded&&l`<${Ne} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${E} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${E} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${E} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var hm=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function su(){ge();let e=y.settings,[t,n]=k(e.userName||"");return ue(()=>{n(e.userName||"")},[e.userName]),l`
    <${ve} title="Einstellungen" />
    <div class="form-page">
      <${Q} title="Profil und Darstellung">
        <div class="form-grid">
          <${xe} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${E} disabled=${t===(e.userName||"")} onClick=${async()=>{await B(async()=>(await tt("userName",t.trim()),!0))&&R("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${xe} class="span-2" label="Darstellung">
            <${pt} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>B(()=>tt("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${mm} />
      <${pm} />
      <${Q} title="Auswahllisten">
        <div class="form-grid">
          <${Ar} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${Ar} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${Ar} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${fm} />
      <${gm} />
      <${Q} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${hm.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var Br={invoices:"Rechnungen",quotes:"Angebote",customers:"Kontakte",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",todos:"To-dos",system:"System"},$m={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",nextSteps:"Nächste Schritte",todos:"To-dos",due:"Fällig",done:"Erledigt",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function iu(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function bm({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${$m[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${iu(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${iu(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function ru(){ge();let[e,t]=k(""),[n,a]=k(""),[s,i]=k(200),[r,o]=k(""),p=ke(()=>[...y.audit].sort((u,m)=>u.at<m.at?1:-1),[y.version]).filter(u=>(!n||u.entity===n)&&Te(e,u.action,u.label,u.user));function d(){ri({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:p.map(u=>[u.at,u.user,u.action,Br[u.entity]||u.entity,u.label,u.prev?JSON.stringify(u.prev):"",u.next?JSON.stringify(u.next):""])})}return l`
    <${ve} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${E} icon="download" disabled=${!p.length} onClick=${d}>CSV<//>
    <//>
    <div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(Br).map(([u,m])=>l`<option value=${u}>${m}</option>`)}
      </select>
      <span class="filter-note">${p.length} ${p.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${p.length===0?l`<${fe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${p.slice(0,s).map(u=>l`<tr key=${u.id}>
              <td class="nw">${He(u.at)}</td>
              <td><span class="cell-main">${u.action}</span><div class="cell-sub">${Br[u.entity]||u.entity}</div></td>
              <td>${u.label}</td>
              <td><${bm} entry=${u} />
                ${u.entity==="invoices"&&u.prev&&u.prev.doc&&l`<${E} small icon="download" busy=${r===u.id}
                  onClick=${async()=>{o(u.id),await B(()=>br(u)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${u.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${p.length>s&&l`<div class="button-row center"><${E} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var vm=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kontakte",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/todos",label:"To-dos",icon:"check"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function ym(){let[e,t]=k(!1),n=Re(null),a=pe(),s=de();ue(()=>{if(!e)return;let o=p=>{n.current&&!n.current.contains(p.target)&&t(!1)},c=p=>{p.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),B(()=>tt("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${Ht(o.logoAssetId)?l`<img src=${Ht(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
    <button type="button" class="switcher-btn" aria-haspopup="listbox" aria-expanded=${e} onClick=${()=>t(!e)}>
      ${r(a)}
      <span class="switcher-text">
        <span class="switcher-label">Unternehmen</span>
        <span class="switcher-name">${a?a.name:"Alle Unternehmen"}</span>
      </span>
      <${te} name="chevronDown" size=${16} />
    </button>
    ${e&&l`<div class="switcher-list" role="listbox" aria-label="Unternehmen wählen">
      <button type="button" role="option" aria-selected=${!a} class=${`switcher-item${a?"":" is-on"}`} onClick=${()=>i("all")}>
        ${r(null)}<span>Alle Unternehmen</span>${!a&&l`<${te} name="check" size=${16} />`}
      </button>
      ${s.map(o=>l`<button type="button" role="option" aria-selected=${a&&a.id===o.id} key=${o.id}
          class=${`switcher-item${a&&a.id===o.id?" is-on":""}`} onClick=${()=>i(o.id)}>
        ${r(o)}<span>${o.name}</span>${a&&a.id===o.id&&l`<${te} name="check" size=${16} />`}
      </button>`)}
      <a class="switcher-manage" href="#/companies" onClick=${()=>t(!1)}>Unternehmen verwalten</a>
    </div>`}
  </div>`}function Ur(e,t){let n=ps(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function wm(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kontakte",y.customers.filter(s=>Te(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:G(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>G(w("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",y.invoices.filter(s=>Te(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||Ur(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:H(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",y.quotes.filter(s=>Te(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||Ur(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:H(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Termine",y.appointments.filter(s=>Te(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("To-dos",y.todos.filter(s=>Te(e,s.title,s.note,a(s))).sort((s,i)=>Number(s.done)-Number(i.done)).map(s=>({key:s.id,label:`${s.done?"✓ ":""}${s.title}`,sub:[a(s),s.due?`fällig ${s.due.split("-").reverse().join(".")}`:""].filter(Boolean).join(", "),href:s.customerId?`/customers/${s.customerId}`:"/todos"}))),n("Leistungen",y.services.filter(s=>Te(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:H(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",y.expenses.filter(s=>Te(e,s.vendor,s.description,s.invoiceNumber,s.category)||Ur(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${H(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",y.companies.filter(s=>Te(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function xm(){let[e,t]=k(""),[n,a]=k(!1),[s,i]=k(0),r=Re(null),o=Re(null),c=ke(()=>an(e).trim().length>=2?wm(e):[],[e,y.version]),p=c.flatMap(f=>f.items);ue(()=>{let f=$=>{($.metaKey||$.ctrlKey)&&$.key.toLowerCase()==="k"&&($.preventDefault(),o.current&&o.current.focus())},v=$=>{r.current&&!r.current.contains($.target)&&a(!1)};return document.addEventListener("keydown",f),document.addEventListener("mousedown",v),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",v)}},[]);function d(f){a(!1),t(""),o.current&&o.current.blur(),Y(f.href)}function u(f){f.key==="ArrowDown"?(f.preventDefault(),i(v=>Math.min(v+1,p.length-1))):f.key==="ArrowUp"?(f.preventDefault(),i(v=>Math.max(v-1,0))):f.key==="Enter"&&p[s]?(f.preventDefault(),d(p[s])):f.key==="Escape"&&(a(!1),f.target.blur())}let m=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${te} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kontakt, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${f=>{t(f.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${u} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&an(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(f=>l`<div class="gsearch-group" key=${f.group}>
        <div class="gsearch-head">${f.group}</div>
        ${f.items.map(v=>{m+=1;let $=m;return l`<button type="button" key=${v.key} class=${`gsearch-item${$===s?" is-active":""}`}
            onMouseEnter=${()=>i($)} onMouseDown=${h=>{h.preventDefault(),d(v)}}>
            <span>${v.label}</span><span class="cell-sub">${v.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function km(){let e=y.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${pt} label="Anzeigewährung" value=${e} onChange=${t=>B(()=>tt("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function Dm(){let[e,t]=k(!1),n=y.settings.changesSinceBackup||0;async function a(){t(!0);let s=await B(()=>Rr(!0));t(!1),s!=null&&R("Backup gespeichert","good")}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${te} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function Sm({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${as} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${as} coll="invoices" id=${n} params=${s} />`:l`<${wc} id=${n} />`:l`<${yc} params=${s} />`:t==="quotes"?n?n==="new"?l`<${as} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${as} coll="quotes" id=${n} params=${s} />`:l`<${Dc} id=${n} />`:l`<${kc} />`:t==="customers"?n?l`<${oc} id=${n} />`:l`<${rc} />`:t==="appointments"?l`<${gc} params=${s} />`:t==="todos"?l`<${Kl} />`:t==="services"?l`<${Sc} />`:t==="expenses"?l`<${_c} />`:t==="recurring"?l`<${Mc} />`:t==="finance"?l`<${Vc} />`:t==="reports"?l`<${Gc} params=${s} />`:t==="companies"?n?l`<${jc} id=${n} />`:l`<${Hc} />`:t==="settings"?l`<${su} />`:t==="audit"?l`<${ru} />`:l`<${fe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${E} onClick=${()=>Y("/")}>Zum Dashboard<//><//>`:l`<${vc} />`}function Cm({route:e}){let[t,n]=io(a=>{console.error(a)});return ue(()=>{t&&n()},[e.raw]),t?l`<${fe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${E} onClick=${()=>{n(),Y("/")}}>Zum Dashboard<//>
    <//>`:l`<${Sm} key=${e.raw} route=${e} />`}function Em(){ge();let e=Bo(),[t,n]=k(!1),a=pe(),s=de();ue(()=>{n(!1)},[e.raw]),ue(()=>{let u=y.settings.theme;u==="light"||u==="dark"?document.documentElement.setAttribute("data-theme",u):document.documentElement.removeAttribute("data-theme")},[y.settings.theme]),ue(()=>{let u=m=>{if(Mo())return;let f=Ro(),v=y.settings.warnOnClose!==!1&&(y.settings.changesSinceBackup||0)>0;(f||v)&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[]);let[i,r]=k(!1);ue(()=>{let u=()=>r(!0);return window.addEventListener("bbc-db-replaced",u),()=>window.removeEventListener("bbc-db-replaced",u)},[]);let o=u=>u.exact?e.path===u.path:e.path===u.path||e.path.startsWith(`${u.path}/`),c=y.expenses.filter(u=>u.status==="review").length,p=fr().length,d=Ll();return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(u=>l`<i key=${u.id} style=${`background:${u.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${vm.map((u,m)=>l`<ul class="nav-group" key=${m}>
            ${u.map(f=>l`<li key=${f.path}>
              <a href=${`#${f.path}`} class=${`nav-link${o(f)?" is-active":""}`} aria-current=${o(f)?"page":void 0}>
                <${te} name=${f.icon} /><span>${f.label}</span>
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
          <button type="button" class="nav-toggle" aria-label="Navigation öffnen" aria-expanded=${t} onClick=${()=>n(!t)}><${te} name="menu" size=${20} /></button>
          <${ym} />
          <${xm} />
          <div class="topbar-actions">
            <${km} />
            <${Dm} />
            <${E} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{Yn(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${y.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${Cm} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${pc} />
    <${Zo} />
    <${Vo} />
  `}async function Im(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await So(),await Tl()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",gi(l`<${Em} />`,e),Nm()}async function Nm(){if(y.settings.appVersion===wi)return;let e={invoices:y.invoices.length,customers:y.customers.length,expenses:y.expenses.length,quotes:y.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await tt("appVersion",wi)}catch{}t&&!y.settings.demoLoaded&&R(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kontakte, ${e.expenses} Ausgaben. ${go}`,"good",15e3)}window.addEventListener("unhandledrejection",e=>{e.reason&&Xn(e.reason)});Im();})();
