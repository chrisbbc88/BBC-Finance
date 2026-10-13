(()=>{var ts,re,Ar,ma,Br,vr,Rc,Ya={},Ur=[],Ac=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Qt(e,t){for(var n in t)e[n]=t[n];return e}function Mr(e){var t=e.parentNode;t&&t.removeChild(e)}function ti(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?ts.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return Qa(e,r,a,s,null)}function Qa(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Ar};return re.vnode!=null&&re.vnode(i),i}function ns(e){return e.children}function pa(e,t){this.props=e,this.context=t}function An(e,t){if(t==null)return e.__?An(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?An(e):null}function _r(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return _r(e)}}function yr(e){(!e.__d&&(e.__d=!0)&&ma.push(e)&&!Xa.__r++||vr!==re.debounceRendering)&&((vr=re.debounceRendering)||Br)(Xa)}function Xa(){for(var e;Xa.__r=ma.length;)e=ma.sort(function(t,n){return t.__v.__b-n.__v.__b}),ma=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=Qt({},i)).__v=i.__v+1,ni(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??An(i),i.__h),Or(a,i),i.__e!=r&&_r(i)))})}function zr(e,t,n,a,s,i,r,o,c,m){var u,d,p,f,g,h,$,b=a&&a.__k||Ur,v=b.length;for(n.__k=[],u=0;u<t.length;u++)if((f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Qa(null,f,null,null,f):Array.isArray(f)?Qa(ns,{children:f},null,null,null):f.__b>0?Qa(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(p=b[u])===null||p&&f.key==p.key&&f.type===p.type)b[u]=void 0;else for(d=0;d<v;d++){if((p=b[d])&&f.key==p.key&&f.type===p.type){b[d]=void 0;break}p=null}ni(e,f,p=p||Ya,s,i,r,o,c,m),g=f.__e,(d=f.ref)&&p.ref!=d&&($||($=[]),p.ref&&$.push(p.ref,null,f),$.push(d,f.__c||g,f)),g!=null?(h==null&&(h=g),typeof f.type=="function"&&f.__k!=null&&f.__k===p.__k?f.__d=c=Lr(f,c,e):c=Pr(e,f,p,b,g,c),m||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&p.__e==c&&c.parentNode!=e&&(c=An(p))}for(n.__e=h,u=v;u--;)b[u]!=null&&(typeof n.type=="function"&&b[u].__e!=null&&b[u].__e==n.__d&&(n.__d=An(a,u+1)),Fr(b[u],b[u]));if($)for(u=0;u<$.length;u++)Kr($[u],$[++u],$[++u])}function Lr(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?Lr(s,t,n):Pr(n,s,s,e.__k,s.__e,t));return t}function Pr(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function wr(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ac.test(t)?n:n+"px"}function ja(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||wr(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||wr(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?kr:xr,i):e.removeEventListener(t,i?kr:xr,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function xr(e){this.l[e.type+!1](re.event?re.event(e):e)}function kr(e){this.l[e.type+!0](re.event?re.event(e):e)}function ni(e,t,n,a,s,i,r,o,c){var m,u,d,p,f,g,h,$,b,v,I,D=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(m=re.__b)&&m(t);try{e:if(typeof D=="function"){if($=t.props,b=(m=D.contextType)&&a[m.__c],v=m?b?b.props.value:m.__:a,n.__c?h=(u=t.__c=n.__c).__=u.__E:("prototype"in D&&D.prototype.render?t.__c=u=new D($,v):(t.__c=u=new pa($,v),u.constructor=D,u.render=Uc),b&&b.sub(u),u.props=$,u.state||(u.state={}),u.context=v,u.__n=a,d=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),D.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Qt({},u.__s)),Qt(u.__s,D.getDerivedStateFromProps($,u.__s))),p=u.props,f=u.state,d)D.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(D.getDerivedStateFromProps==null&&$!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps($,v),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate($,u.__s,v)===!1||t.__v===n.__v){u.props=$,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(w){w&&(w.__=t)}),u.__h.length&&r.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate($,u.__s,v),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,f,g)})}u.context=v,u.props=$,u.state=u.__s,(m=re.__r)&&m(t),u.__d=!1,u.__v=t,u.__P=e,m=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(a=Qt(Qt({},a),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(g=u.getSnapshotBeforeUpdate(p,f)),I=m!=null&&m.type===ns&&m.key==null?m.props.children:m,zr(e,Array.isArray(I)?I:[I],t,n,a,s,i,r,o,c),u.base=t.__e,t.__h=null,u.__h.length&&r.push(u),h&&(u.__E=u.__=null),u.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Bc(n.__e,t,n,a,s,i,r,c);(m=re.diffed)&&m(t)}catch(w){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),re.__e(w,t,n)}}function Or(e,t){re.__c&&re.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){re.__e(a,n.__v)}})}function Bc(e,t,n,a,s,i,r,o){var c,m,u,d=n.props,p=t.props,f=t.type,g=0;if(f==="svg"&&(s=!0),i!=null){for(;g<i.length;g++)if((c=i[g])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,i[g]=null;break}}if(e==null){if(f===null)return document.createTextNode(p);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,p.is&&p),i=null,o=!1}if(f===null)d===p||o&&e.data===p||(e.data=p);else{if(i=i&&ts.call(e.childNodes),m=(d=n.props||Ya).dangerouslySetInnerHTML,u=p.dangerouslySetInnerHTML,!o){if(i!=null)for(d={},g=0;g<e.attributes.length;g++)d[e.attributes[g].name]=e.attributes[g].value;(u||m)&&(u&&(m&&u.__html==m.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if((function(h,$,b,v,I){var D;for(D in b)D==="children"||D==="key"||D in $||ja(h,D,null,b[D],v);for(D in $)I&&typeof $[D]!="function"||D==="children"||D==="key"||D==="value"||D==="checked"||b[D]===$[D]||ja(h,D,$[D],b[D],v)})(e,p,d,s,o),u)t.__k=[];else if(g=t.props.children,zr(e,Array.isArray(g)?g:[g],t,n,a,s&&f!=="foreignObject",i,r,i?i[0]:n.__k&&An(n,0),o),i!=null)for(g=i.length;g--;)i[g]!=null&&Mr(i[g]);o||("value"in p&&(g=p.value)!==void 0&&(g!==e.value||f==="progress"&&!g)&&ja(e,"value",g,d.value,!1),"checked"in p&&(g=p.checked)!==void 0&&g!==e.checked&&ja(e,"checked",g,d.checked,!1))}return e}function Kr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){re.__e(a,n)}}function Fr(e,t,n){var a,s;if(re.unmount&&re.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||Kr(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){re.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&Fr(a[s],t,typeof e.type!="function");n||e.__e==null||Mr(e.__e),e.__e=e.__d=void 0}function Uc(e,t,n){return this.constructor(e,n)}function ai(e,t,n){var a,s,i;re.__&&re.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],ni(t,e=(!a&&n||t).__k=ti(ns,null,[e]),s||Ya,Ya,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?ts.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),Or(i,e)}ts=Ur.slice,re={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},Ar=0,pa.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Qt({},this.state),typeof e=="function"&&(e=e(Qt({},n),this.props)),e&&Qt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),yr(this))},pa.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),yr(this))},pa.prototype.render=ns,ma=[],Br=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xa.__r=0,Rc=0;var Bn,Ye,Dr,es=0,Xs=[],Sr=re.__b,Cr=re.__r,Er=re.diffed,Ir=re.__c,Nr=re.unmount;function fa(e,t){re.__h&&re.__h(Ye,e,es||t),es=0;var n=Ye.__H||(Ye.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return es=1,Mc(Vr,e)}function Mc(e,t,n){var a=fa(Bn++,2);return a.t=e,a.__c||(a.__=[n?n(t):Vr(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=Ye),a.__}function ue(e,t){var n=fa(Bn++,3);!re.__s&&ii(n.__H,t)&&(n.__=e,n.__H=t,Ye.__H.__h.push(n))}function si(e,t){var n=fa(Bn++,4);!re.__s&&ii(n.__H,t)&&(n.__=e,n.__H=t,Ye.__h.push(n))}function Ne(e){return es=5,ve(function(){return{current:e}},[])}function ve(e,t){var n=fa(Bn++,7);return ii(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function qr(e){var t=fa(Bn++,10),n=C();return t.__=e,Ye.componentDidCatch||(Ye.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function _c(){Xs.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Ja),e.__H.__h.forEach(ei),e.__H.__h=[]}catch(t){e.__H.__h=[],re.__e(t,e.__v)}}),Xs=[]}re.__b=function(e){Ye=null,Sr&&Sr(e)},re.__r=function(e){Cr&&Cr(e),Bn=0;var t=(Ye=e.__c).__H;t&&(t.__h.forEach(Ja),t.__h.forEach(ei),t.__h=[])},re.diffed=function(e){Er&&Er(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Xs.push(t)!==1&&Dr===re.requestAnimationFrame||((Dr=re.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),Tr&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);Tr&&(a=requestAnimationFrame(s))})(_c)),Ye=void 0},re.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ja),n.__h=n.__h.filter(function(a){return!a.__||ei(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],re.__e(a,n.__v)}}),Ir&&Ir(e,t)},re.unmount=function(e){Nr&&Nr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Ja)}catch(n){re.__e(n,t.__v)}};var Tr=typeof requestAnimationFrame=="function";function Ja(e){var t=Ye;typeof e.__c=="function"&&e.__c(),Ye=t}function ei(e){var t=Ye;e.__c=e.__(),Ye=t}function ii(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function Vr(e,t){return typeof t=="function"?t(e):t}var Zr=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,Zr(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},Rr=new Map,l=function(e){var t=Rr.get(this);return t||(t=new Map,Rr.set(this,t)),(t=Zr(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],m=function(p){i===1&&(p||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,p,r):i===3&&(p||r)?(c.push(3,p,r),i=2):i===2&&r==="..."&&p?c.push(4,p,0):i===2&&r&&!p?c.push(5,0,!0,r):i>=5&&((r||!p&&i===5)&&(c.push(i,0,r,s),i=6),p&&(c.push(i,p,0,s),i=6)),r=""},u=0;u<n.length;u++){u&&(i===1&&m(),m(u));for(var d=0;d<n[u].length;d++)a=n[u][d],i===1?a==="<"?(m(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(m(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[u][d+1]===">")?(m(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(m(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return m(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(ti);var Ze=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),ye=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),fn=e=>String(e).padStart(2,"0");function Un(e){return`${e.getFullYear()}-${fn(e.getMonth()+1)}-${fn(e.getDate())}`}var q=()=>Un(new Date),ne=()=>new Date().toISOString();function be(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function ga(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Te(e,t){let n=ga(e);return n.setDate(n.getDate()+Number(t||0)),Un(n)}function Lt(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),m=(o%12+12)%12,u=new Date(c,m+1,0).getDate();return`${c}-${fn(m+1)}-${fn(Math.min(r,u))}`}function Mn(e,t){let n=ga(t).getTime()-ga(e).getTime();return Math.round(n/864e5)}var as=e=>Number(e.slice(0,4)),Gr=e=>Number(e.slice(5,7)),ha=e=>e.slice(0,7),Hr=e=>Math.floor((Gr(e)-1)/3)+1,Wr=e=>`${as(e)}-Q${Hr(e)}`;function ri(e,t){let n=`${e}-${fn(t+1)}-01`,a=Un(new Date(e,t+1,0));return{from:n,to:a}}function oi(e,t){let n=`${e}-${fn((t-1)*3+1)}-01`,a=Un(new Date(e,t*3,0));return{from:n,to:a}}var gn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function lt(e,t=q(),n={}){let a=as(t),s=Gr(t)-1,i=Hr(t);switch(e){case"month":return ri(a,s);case"lastMonth":return s===0?ri(a-1,11):ri(a,s-1);case"quarter":return oi(a,i);case"lastQuarter":return i===1?oi(a-1,4):oi(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:be(n.from)?n.from:"0000-01-01",to:be(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var Pt=(e,t)=>!!e&&e>=t.from&&e<=t.to;function jr(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${fn(o+1)}`}return n}function Qr(e,t=q()){let n=[];for(let a=e-1;a>=0;a--)n.push(Lt(t.slice(0,7)+"-01",-a).slice(0,7));return n}var zc=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Lc=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Nt=e=>`${zc[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,_n=e=>Lc[Number(e.slice(5,7))-1];function ss(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",m=c==="."?",":".";r=n.split(m).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var Jt=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Re(e,...t){let n=Jt(e).trim();if(!n)return!0;let a=Jt(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function Yt(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function Ot(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function zn(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var li=2,Jr="bbc-finance",ci="2026-10-13",st=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes"],Ln="USD";var Xe=["USD","EUR"],is=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],vt=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],$a={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},ui={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},Pc=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],Oc=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],Kc=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],Pn=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],hn=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],mt=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Tt={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:Pc,serviceCategories:Oc,paymentMethods:Kc,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},Kt=()=>({id:Ze(),createdAt:ne(),updatedAt:ne()});function ba(e={}){return{...Kt(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:Ln,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var On=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],di=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],Kn={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},rs=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],os=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],it=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function ls(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...Kt(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:q(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||it(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function Yr(e={}){return{...Kt(),customerId:"",companyId:"",date:q(),kind:"note",title:"",text:"",...e}}function Xt(e={}){return{...Kt(),number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function en(e={}){return{...Kt(),name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:Ln,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function va(e={}){return{id:Ze(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function yt(e,t={}){let n=q();return{...Kt(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:Ln,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function Fn(e,t={}){let n=q();return{...Kt(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:Ln,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function ya(e={}){return{...Kt(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:q(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:Ln,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function qn(e,t={}){return{...Kt(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:q(),nextDate:q(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:Ln,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function Y(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function ct(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var Fc=2,wa=null,tn=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),qc=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function Vn(e){return e==="counters"||e==="settings"?"key":"id"}var wt=[...st,"settings","blobs"];function mi(){return wa||(wa=new Promise((e,t)=>{let n=indexedDB.open(Jr,Fc);n.onupgradeneeded=()=>{let a=n.result;for(let s of wt){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:Vn(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),wa=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),wa)}async function Zn(e){let t=await mi();return tn(t.transaction(e,"readonly").objectStore(e).getAll())}async function Xr(e,t){let n=await mi();return tn(n.transaction(e,"readonly").objectStore(e).get(t))}async function $n(e,t){let a=(await mi()).transaction(e,"readwrite"),s=qc(a),i={get:(o,c)=>tn(a.objectStore(o).get(c)),put:(o,c)=>tn(a.objectStore(o).put(c)),del:(o,c)=>tn(a.objectStore(o).delete(c)),byIndex:(o,c,m)=>tn(a.objectStore(o).index(c).get(m)),allByIndex:(o,c,m)=>tn(a.objectStore(o).index(c).getAll(m)),clear:o=>tn(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function eo(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function to(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var y={ready:!1,version:0,settings:ye(Tt)},Rt={};for(let e of st)y[e]=[],Rt[e]=new Map;var ds=new Set;function ao(e){return ds.add(e),()=>ds.delete(e)}var cs=0,pi=!1;function so(){if(y.version+=1,us.clear(),cs){pi=!0;return}for(let e of ds)e(y.version)}async function io(e){cs+=1;try{return await e()}finally{if(cs-=1,!cs&&pi){pi=!1;for(let t of ds)t(y.version)}}}var bn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(bn=new BroadcastChannel("bbc-finance-sync"),bn.onmessage=e=>{e.data==="changed"&&vn()})}catch{bn=null}var no=new Set(st.filter(e=>e!=="rates"));async function vn(){let e=await Promise.all([...st,"settings"].map(n=>Zn(n)));st.forEach((n,a)=>{Rt[n]=new Map(e[a].map(s=>[s[Vn(n)],s])),y[n]=e[a]});let t=ye(Tt);for(let n of e[st.length])Object.hasOwn(Tt,n.key)&&(t[n.key]=n.value);y.settings=t,y.ready=!0,so()}async function ro(){await vn(),to()}var Ke=e=>y[e],x=(e,t)=>t?Rt[e].get(t):void 0,us=new Map;function oo(e,t){return us.has(e)||us.set(e,t()),us.get(e)}function lo(e,t){return oo(`group:${e}:${t}`,()=>{let n=new Map;for(let a of y[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var co=Object.freeze([]),Fe=e=>lo("payments","invoiceId").get(e)||co,nn=e=>lo("reminders","invoiceId").get(e)||co,Ft=e=>e&&Rt.assets.get(e)?Rt.assets.get(e).dataUrl:"",me=()=>oo("activeCompanies",()=>y.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function xe(){let e=y.settings.activeCompany;if(!e||e==="all")return null;let t=x("companies",e);return t&&!t.archived?t:null}function Ge(e){let t=xe();return!t||e.companyId===t.id}function Vc({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:Ze(),at:ne(),user:y.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function W(e){let t=[],n=!1,a={},s=await $n(wt,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(m,u){return t.push({store:m,value:u}),no.has(m)&&m!=="audit"&&(n=!0),r.put(m,u)},del(m,u){return t.push({store:m,id:u,del:!0}),no.has(m)&&(n=!0),r.del(m,u)},clear(m){return t.push({store:m,clear:!0}),r.clear(m)},blobPut:(m,u)=>r.put("blobs",{id:m,blob:u}),blobDel:m=>r.del("blobs",m),audit(m){let u=Vc(m);return t.push({store:"audit",value:u}),r.put("audit",u)},setting(m,u){return a[m]=u,r.put("settings",{key:m,value:u})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let m=await r.get("settings","changesSinceBackup"),u=m&&Number(m.value)||0;a.changesSinceBackup=u+1,await r.put("settings",{key:"changesSinceBackup",value:u+1})}return c}),i=new Set;for(let r of t)Rt[r.store]&&(r.clear?Rt[r.store]=new Map:r.del?Rt[r.store].delete(r.id):Rt[r.store].set(r.value[Vn(r.store)],r.value),i.add(r.store));for(let r of i)y[r]=[...Rt[r].values()];if(Object.keys(a).length&&(y.settings={...y.settings,...a}),so(),bn)try{bn.postMessage("changed")}catch{}return s}function xa(){if(bn)try{bn.postMessage("changed")}catch{}}async function et(e,t){return W(n=>n.setting(e,t))}async function uo(e){return W(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=C(y.version);return ue(()=>ao(t=>e(t)),[]),y}var gi=new Set,yn=null,ka=po(),fi=!1;function po(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function hi(){if(fi){fi=!1;return}let e=po();if(e.raw!==ka.raw){if(yn){if(!await yn()){fi=!0,location.hash=ka.raw;return}yn=null}ka=e;for(let t of gi)t(ka);window.scrollTo(0,0)}}window.addEventListener("hashchange",hi);function j(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),hi()):location.hash===n?hi():location.hash=e}function an(e){yn=null,j(e)}function ps(e){yn=e}function xn(){yn=null}var fo=()=>!!yn;function go(){let[e,t]=C(ka);return ue(()=>(gi.add(t),()=>gi.delete(t)),[]),e}var Zc=0,ms=new Set,wn=[];function _(e,t="info",n){let a=++Zc;wn=[...wn,{id:a,message:String(e),tone:t}].slice(-3),ms.forEach(s=>s(wn)),setTimeout(()=>vi(a),n||(t==="bad"?9e3:4500))}function vi(e){wn=wn.filter(t=>t.id!==e),ms.forEach(t=>t(wn))}function ho(){let[e,t]=C(wn);return ue(()=>(ms.add(t),()=>ms.delete(t)),[]),e}var $o=0;function Gn(e=2e3){$o=Date.now()+e}var bo=()=>Date.now()<$o;function Hn(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?_("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?_("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):_(t,"bad")}async function U(e){try{return await e()}catch(t){Hn(t);return}}var $i=new Set,bi=null;function mo(e){bi=e,$i.forEach(t=>t(bi))}function vo(){let[e,t]=C(bi);return ue(()=>($i.add(t),()=>$i.delete(t)),[]),e}var Gc=0;function oe(e){return new Promise(t=>{mo({...e,id:++Gc,resolve:n=>{mo(null),t(n)}})})}var fs=()=>oe({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var Hc={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2"};function ae({name:e,size:t=18,class:n=""}){let a=Hc[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function yi(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function hs(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var $s=e=>hs(e,100);var Wc=e=>hs(e,1e3),wo=e=>hs(e,100),yo=e=>hs(e,1e3);function wi(e){let t=Wc(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(wo(e.discountPct),0),1e4);return yi(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function xt(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(p=>BigInt(Math.round(p))),s=a.reduce((p,f)=>p+f,0n);if(s===0n&&(a=a.map(p=>p<0n?-p:p),s=a.reduce((p,f)=>p+f,0n),s===0n)){let p=t.map(()=>0);return p[0]=Number(n),p}let i=p=>p<0n?-p:p,r=i(s),o=s<0n?a.map(p=>-p):a,c=i(n),m=[],u=[];o.forEach((p,f)=>{let g=c*p,h=g/r,$=g%r;$<0n&&(h-=1n,$+=r),m.push(h),u.push({i:f,r:$})});let d=c-m.reduce((p,f)=>p+f,0n);u.sort((p,f)=>p.r===f.r?p.i-f.i:p.r>f.r?-1:1);for(let p=0;d>0n&&p<u.length;p++,d-=1n)m[u[p].i]+=1n;return n<0n?m.map(p=>Number(-p)||0):m.map(p=>Number(p)||0)}function kt(e){let n=(e.items||[]).filter(p=>!p.isText).map(p=>({id:p.id,taxRate:Number(p.taxRate)||0,cents:wi(p)})),a=n.reduce((p,f)=>p+f.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let p=Math.min(wo(r),1e4);s=yi(BigInt(a)*BigInt(p),10000n)}let o=new Map;for(let p of n){let f=yo(p.taxRate),g=o.get(f)||{rate:p.taxRate,rateMilli:f,subtotalCents:0};g.subtotalCents+=p.cents,o.set(f,g)}let c=[...o.values()].sort((p,f)=>p.rateMilli-f.rateMilli),m=xt(s,c.map(p=>p.subtotalCents)),u=0;c.forEach((p,f)=>{p.discountCents=m[f]||0,p.netCents=p.subtotalCents-p.discountCents,p.taxCents=yi(BigInt(p.netCents)*BigInt(p.rateMilli),100000n),u+=p.taxCents});for(let p of c){let f=n.filter(h=>yo(h.taxRate)===p.rateMilli),g=xt(p.discountCents,f.map(h=>h.cents));f.forEach((h,$)=>{h.netCents=h.cents-(g[$]||0)})}let d=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:d,taxCents:u,totalCents:d+u,taxGroups:c.map(p=>({rate:p.rate,netCents:p.netCents,taxCents:p.taxCents}))}}var gs=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function jc(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function qt(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?gs(e*s):null;if(t==="EUR"&&n==="USD")return i?gs(e/s):null;let r=jc(t,a);if(r==null)return null;let o=e*r;return n==="USD"?gs(o):n==="EUR"&&i?gs(o*s):null}var ut=(e,t,n)=>qt(e,t,"USD",n),Dt=(e,t,n)=>qt(e,t,"EUR",n);function At(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var Ie=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function Bt(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=Ie(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function Vt(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-Ie(t),0)}var xi=e=>e.status!=="draft"&&e.status!=="cancelled";function kn(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var sn={de:"de-DE",en:"en-US"},ki=new Map;function Wn(e,t){let n=e+JSON.stringify(t);return ki.has(n)||ki.set(n,new Intl.NumberFormat(e,t)),ki.get(n)}function Z(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return Wn(sn[n]||sn.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function Da(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?Wn("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):Wn("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function jn(e,t,n){let a=Z(e,t,n);return n==="en"?`${a} ${t}`:a}function Dn(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":Wn(sn[t]||sn.de,{maximumFractionDigits:n}).format(Number(e))}function pt(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${Wn(sn[t]||sn.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function Qn(e,t="de"){return Number.isFinite(Number(e))?Wn(sn[t]||sn.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function ko(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Do(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function V(e,t="de"){if(!e)return"";let n=ga(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function qe(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var So={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},xo={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},bs=(e,t)=>t==="en"&&xo[e]?xo[e]:e||"",ft=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);var Qc=0,Sn=(e="f")=>ve(()=>`${e}-${++Qc}`,[]);function E({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:m="",...u}){let d=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${m?` ${m}`:""}`;return l`<button type=${s} class=${d} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${u}>
    ${t&&l`<${ae} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function Se({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function O({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=Sn();return l`<${Se} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${m=>s&&s(m.target.value)} ...${o} />
  <//>`}function le({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,...r}){let o=Sn();return l`<${Se} label=${e} hint=${t} class=${i} htmlFor=${o}>
    <textarea id=${o} class="input textarea" rows=${s} value=${n??""} onInput=${c=>a&&a(c.target.value)} ...${r}></textarea>
  <//>`}function ce({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let m=Sn();return l`<${Se} label=${e} hint=${t} error=${n} class=${r} htmlFor=${m}>
    <select id=${m} class="input select" value=${a??""} onChange=${u=>s&&s(u.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(u=>{let d=typeof u=="object"?u:{id:u,label:u};return l`<option value=${d.id} selected=${String(d.id)===String(a??"")}>${d.label}</option>`})}
    </select>
  <//>`}function Je({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...m}){let u=I=>I==null||I===""?"":n==="money"?ko(I):Do(I,a),[d,p]=C(u(e)),[f,g]=C(!1),[h,$]=C(!1);ue(()=>{f||p(u(e))},[e,f]);function b(I){if(String(I).trim()===""){$(!1),t(r?null:0);return}let D=ss(I,{decimalOnly:n!=="money"});if(Number.isNaN(D)){$(!0);return}s!=null&&D<s&&(D=s),i!=null&&D>i&&(D=i),$(!1),t(n==="money"?$s(D):Number(D.toFixed(a)))}let v=l`<input class=${`input num ${h?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${d}
    onFocus=${I=>{g(!0),I.target.select()}}
    onInput=${I=>{p(I.target.value),b(I.target.value)}}
    onBlur=${I=>{g(!1),b(I.target.value)}}
    aria-invalid=${h} ...${m} />`;return c?l`<span class="input-wrap">${v}<span class="input-suffix">${c}</span></span>`:v}function Ae({label:e,hint:t,error:n,class:a,...s}){let i=Sn();return l`<${Se} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${Je} id=${i} ...${s} />
  <//>`}function He({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=Sn();return l`<${Se} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function Ve({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=Sn("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function St({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function Cn({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:m,label:u,id:d,disabled:p}){let f=Sn("cb"),g=d||f,h=e.find(F=>F.id===t),[$,b]=C(!1),[v,I]=C(""),[D,w]=C(0),M=Ne(null),S=Ne(null),H=r?o??"":$?v:h?h.label:"",L=ve(()=>{let F=Jt(r?$?o:"":v).trim();return(F?e.filter(ee=>Jt(`${ee.label} ${ee.sub||""} ${ee.search||""}`).includes(F)):e).slice(0,50)},[e,v,o,$,r]);ue(()=>{if(!$)return;let F=z=>{M.current&&!M.current.contains(z.target)&&(b(!1),I(""))};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[$]),ue(()=>{m&&S.current&&S.current.focus()},[]);let k=s&&!r,T=L.length+(k?1:0);function B(F){n(F.id,F),b(!1),I("")}function G(F){if(F.key==="ArrowDown")F.preventDefault(),b(!0),w(z=>Math.min(z+1,T-1));else if(F.key==="ArrowUp")F.preventDefault(),w(z=>Math.max(z-1,0));else if(F.key==="Enter"){if(!$)return;if(r&&!L.length){b(!1);return}F.preventDefault(),D<L.length?B(L[D]):k&&(s(v),b(!1),I(""))}else F.key==="Escape"?$&&(F.stopPropagation(),b(!1),I("")):F.key==="Tab"&&(b(!1),I(""))}return l`<div class="combo" ref=${M}>
    <input ref=${S} id=${g} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${$} aria-label=${u} aria-autocomplete="list" disabled=${p}
      placeholder=${$&&h&&!r?h.label:a} value=${H}
      onClick=${()=>{b(!0),w(0)}}
      onInput=${F=>{b(!0),w(0),r?c(F.target.value):I(F.target.value)}}
      onKeyDown=${G} />
    ${!r&&l`<span class="combo-caret"><${ae} name="chevronDown" size=${16} /></span>`}
    ${$&&T>0&&l`<ul class="combo-list" role="listbox">
      ${L.map((F,z)=>l`<li role="option" aria-selected=${z===D}
          class=${`combo-item${z===D?" is-active":""}${F.id===t?" is-selected":""}`}
          onMouseEnter=${()=>w(z)}
          onMouseDown=${ee=>{ee.preventDefault(),B(F)}}>
          <span class="combo-label">${F.label}</span>
          ${F.sub&&l`<span class="combo-sub">${F.sub}</span>`}
        </li>`)}
      ${k&&l`<li role="option" class=${`combo-item combo-create${D===L.length?" is-active":""}`}
          onMouseEnter=${()=>w(L.length)}
          onMouseDown=${F=>{F.preventDefault(),s(v),b(!1),I("")}}>
          <${ae} name="plus" size=${16} />
          <span>${v.trim()?`„${v.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${$&&T===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var Jc={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function ze({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${ae} name=${n||Jc[e]||"info"} size=${14} />${t}
  </span>`}function we({title:e,sub:t,back:n,children:a}){return l`<header class="page-head">
    <div class="page-head-text">
      ${n&&l`<a class="back-link" href=${n.href}><${ae} name="chevronLeft" size=${16} />${n.label}</a>`}
      <h1>${e}</h1>
      ${t&&l`<p class="page-sub">${t}</p>`}
    </div>
    ${a&&l`<div class="page-actions">${a}</div>`}
  </header>`}function pe({icon:e="file",title:t,text:n,children:a}){return l`<div class="empty">
    <div class="empty-icon"><${ae} name=${e} size=${26} /></div>
    <h3>${t}</h3>
    ${n&&l`<p>${n}</p>`}
    ${a&&l`<div class="empty-actions">${a}</div>`}
  </div>`}function Q({title:e,action:t,children:n,class:a="",flush:s}){return l`<section class=${`panel ${a}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${s?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function Ce({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${ae} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function vs({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function gt({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=C(!1),o=Ne(null);ue(()=>{if(!i)return;let m=d=>{o.current&&!o.current.contains(d.target)&&r(!1)},u=d=>{d.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",m),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",m),document.removeEventListener("keydown",u)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${E} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(m=>l`<button type="button" role="menuitem" class=${`menu-item${m.danger?" is-danger":""}`} disabled=${m.disabled}
        onClick=${()=>{r(!1),m.onClick()}}>
        ${m.icon&&l`<${ae} name=${m.icon} size=${16} />`}<span>${m.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function We({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=Ne(null);ue(()=>{let c=document.activeElement,m=r.current;if(m){let d=m.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");d&&d.focus()}let u=d=>{if(d.key==="Escape"&&(d.stopPropagation(),t()),d.key==="Tab"&&m){let p=[...m.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(h=>h.offsetParent!==null);if(!p.length)return;let f=p[0],g=p[p.length-1];d.shiftKey&&document.activeElement===f?(d.preventDefault(),g.focus()):!d.shiftKey&&document.activeElement===g&&(d.preventDefault(),f.focus())}};return document.addEventListener("keydown",u),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",u),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${E} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function Co(){let e=vo();return e?l`<${Yc} key=${e.id} d=${e} />`:null}function Yc({d:e}){let[t,n]=C(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${We} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${E} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${E} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${le} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${O} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function Eo(){let e=ho();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${ae} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>vi(t.id)}><${ae} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function rt({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,m]=C(s||null),u=ve(()=>{if(!c)return t;let p=e.find(g=>g.key===c.key);if(!p||!p.sort)return t;let f=c.dir==="desc"?-1:1;return[...t].sort((g,h)=>{let $=p.sort(g),b=p.sort(h);return $==null&&b==null?0:$==null?1:b==null?-1:typeof $=="number"&&typeof b=="number"?($-b)*f:String($).localeCompare(String(b),"de",{numeric:!0})*f})},[t,c,e]);if(!t.length&&r)return r;let d=p=>{p.sort&&m(f=>f&&f.key===p.key?{key:p.key,dir:f.dir==="asc"?"desc":"asc"}:{key:p.key,dir:p.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
    <table class="table">
      <thead><tr>
        ${e.map(p=>l`<th class=${`${p.align==="right"?"r":""} ${p.class||""}`} style=${p.width?`width:${p.width}`:""}
            aria-sort=${c&&c.key===p.key?c.dir==="asc"?"ascending":"descending":void 0}>
          ${p.sort?l`<button type="button" class="th-btn" onClick=${()=>d(p)}>${p.label}
                ${c&&c.key===p.key&&l`<${ae} name=${c.dir==="asc"?"arrowUp":"arrowDown"} size=${13} />`}</button>`:p.label}
        </th>`)}
      </tr></thead>
      <tbody>
        ${u.map(p=>l`<tr key=${a(p)} class=${`${n?"is-click":""} ${o?o(p):""}`}
            tabindex=${n?0:void 0}
            onClick=${n?f=>{f.target.closest("button, a, input, select")||n(p)}:void 0}
            onKeyDown=${n?f=>{f.key==="Enter"&&f.target===f.currentTarget&&n(p)}:void 0}>
          ${e.map(f=>l`<td class=${`${f.align==="right"?"r":""} ${f.class||""}`}>${f.render?f.render(p):p[f.key]}</td>`)}
        </tr>`)}
      </tbody>
      ${i&&l`<tfoot><tr>${i.map((p,f)=>l`<td class=${e[f]&&e[f].align==="right"?"r":""}>${p}</td>`)}</tr></tfoot>`}
    </table>
  </div>`}function rn({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function ht({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${ae} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Be({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function on({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var Xc=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function Di(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return Xc.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var Si=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),eu=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function tu(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function $t(e,t,n={}){let a=tu(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||x("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||x("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=So[o],m=e.currency||"USD",u=!s&&e.totals?e.totals:kt(e),d=R=>Z(R,m,o),p=[i.name,Si(i),Di(i)].filter(Boolean).join(" · "),f=[];if(r){let R=ct(r);r.company&&f.push(r.company),R&&R!==r.company&&f.push(R);let De=Si(r);De&&f.push(De);let _e=Di(r);_e&&f.push(_e),r.country&&!eu(r.country,i.country)&&f.push(r.country)}let g=[];r&&r.vatId&&g.push(`${c.vatId}: ${r.vatId}`);let h=e.number||n.previewNumber||"",$=[];$.push([c[`number_${a}`],h||`(${c.draft})`]),$.push([c[`date_${a}`],V(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?$.push([c.servicePeriod,`${V(e.serviceDate,o)} – ${V(e.serviceDateEnd,o)}`]):$.push([c.serviceDate,V(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&$.push([c.dueDate,V(e.dueDate,o)]),a==="quote"&&e.validUntil&&$.push([c.validUntil,V(e.validUntil,o)]),r&&r.number&&$.push([c.customerNo,r.number]);let b="";if(a==="credit_note"&&e.relatedInvoiceId){let R=x("invoices",e.relatedInvoiceId);R&&(b=ft(c.refInvoice,{NUMBER:R.number,DATE:V(R.issueDate,o)}))}let v=e.items||[],I=v.some(R=>Number(R.discountPct)>0),w=new Set(v.map(R=>Number(R.taxRate)||0)).size>1,M=new Map(u.lines.map(R=>[R.id,R])),S=v.map((R,De)=>({pos:String(De+1),name:R.name||"",description:R.description||"",qty:Dn(R.qty,o,3),unit:bs(R.unit,o),price:d(R.priceCents),discount:Number(R.discountPct)>0?pt(R.discountPct,o):"",tax:pt(Number(R.taxRate)||0,o),amount:d(M.has(R.id)?M.get(R.id).cents:0)})),H=String(i.taxLabel||"").trim()||c.taxDefault,L=u.taxGroups.filter(R=>Number(R.rate)!==0),k=[],T=u.discountCents!==0;if((T||L.length)&&k.push({label:c.subtotal,value:d(u.subtotalCents)}),T){let R=e.discount||{},De=R.type==="abs"?c.discount:`${c.discount} ${pt(R.value,o)}`;k.push({label:De,value:d(-u.discountCents)}),L.length&&k.push({label:c.net,value:d(u.netCents)})}for(let R of L){let De=L.length>1?` (${d(R.netCents)})`:"";k.push({label:`${H} ${pt(R.rate,o)}${De}`,value:d(R.taxCents)})}k.push({label:c[`total_${a}`]||c.total,value:jn(u.totalCents,m,o),strong:!0});let B=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(m==="USD"||m==="EUR")){let R=m==="USD"?"EUR":"USD",De=qt(u.totalCents,m,R,e.fx);if(De!=null){let _e=m==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);B={line:`${c.approx} ${jn(De,R,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${m} = ${Qn(_e,o)} ${R}`}}}let G=[];a==="invoice"&&e.dueDate&&G.push(ft(c.dueLine,{DATE:V(e.dueDate,o)})),a==="quote"&&e.validUntil&&G.push(ft(c.validLine,{DATE:V(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&G.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&G.push(i.taxNote.trim());let F=null;if(a==="invoice"){let R=[];i.accountHolder&&R.push([c.holder,i.accountHolder]),i.bankName&&R.push([c.bank,i.bankName]),i.iban&&R.push(["IBAN",i.iban]),i.bic&&R.push(["BIC",i.bic]);let De=[i.altBank,i.otherPayment].map(_e=>String(_e||"").trim()).filter(Boolean);(R.length||De.length)&&(F={title:c.payment,rows:R,extra:De})}let z=[i.name,Si(i),Di(i),i.country].filter(Boolean),ee=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),A=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),te=Y(r),de=h?`${h} ${te}`:`${c.draft} ${c[a]} ${te}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:Ft(i.logoAssetId),companyName:i.name||"",title:c[a],number:h,subtitle:b,draftMark:s?c.draftMark:"",senderLine:p,recipient:f,recipientExtra:g,meta:$,intro:String(e.intro||"").trim(),columns:{discount:I,tax:w},labels:c,rows:S,sums:k,secondary:B,notes:G,payment:F,footerCols:[z,ee,A].filter(R=>R.length),footerText:String(e.footer||"").trim(),fileName:`${Ot(de)}.pdf`}}var nu=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function Io(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))nu.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var au=8e3;async function su(e){let t=new AbortController,n=setTimeout(()=>t.abort(),au);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var Ci=e=>Number.isFinite(Number(e))&&Number(e)>0,Ei={frankfurterV2(e,t,n){if(!e||!Ci(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!Ci(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!Ci(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function iu(e,t,n){let a=n&&n<q(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:Ei.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:Ei.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Ei.erApi}),s}async function No(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||q(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<q()?n:q(),s=ru(e,t,a);if(s)return s;let i=null;for(let o of iu(e,t,n))try{let c=await su(o.url),m=o.parse(c,e,t),u={id:`${e}_${t}_${a}`,base:e,quote:t,rate:m.rate,date:m.date||a,requestedDate:a,fetchedAt:ne(),source:m.source};return await W(d=>d.put("rates",u)).catch(()=>{}),u}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function En(e){let t=q();return e&&e<t?e:t}function ru(e,t,n){let a=`${e}_${t}_${n}`,s=Ke("rates").find(i=>i.id===a);return!s||n===q()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function Ii(e,t){let n=Ke("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function Sa(e,t){let n=await No("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await No(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:En(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var ou=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],lu={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function Ut(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!ou.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function cu(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function In(e,t,n,a){return`${e}:${t}:${cu(n,a)}`}function Ni(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function Ct(e,t){let n=lu[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function Ti(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=Ct(e,t),c=Ut(r);if(c)throw new Error(c);let m=Number(a)||0;for(let u=0;u<1e5;u++){m+=1;let d=Ni(r,{prefix:i,dateISO:n,n:m,digits:o});if(!await s(d))return{number:d,n:m}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var Ee=e=>({...e,updatedAt:ne()}),$e=class extends Error{},K=e=>{throw new $e(e)},Ao={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},ys=e=>be(e)&&e>="2000-01-01"&&e<="2100-12-31";async function Ca(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=Ut(e[r]);o&&K(o)}String(e.name||"").trim()||K("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&K("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of Ke("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=Ct(e,o),m=Ct(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===m.pattern&&String(c.prefix).trim().toLowerCase()===String(m.prefix).trim().toLowerCase()&&K(`${r.name} verwendet für ${Ao[o]} bereits das Präfix „${m.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=x("companies",e.id),a=Ee(e),s=null;t&&(s={id:await uu(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=Yt(n,a,["updatedAt","createdAt"]);return await W(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function Bo(e,t){let n=x("companies",e);if(!n)return;let a=Ee({...n,archived:t});await W(async s=>{await s.put("companies",a),t&&y.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function Ai(e){return Ke("invoices").some(t=>t.companyId===e)||Ke("quotes").some(t=>t.companyId===e)||Ke("expenses").some(t=>t.companyId===e)||Ke("recurring").some(t=>t.companyId===e)}async function Uo(e){let t=x("companies",e);t&&(Ai(e)&&K("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await W(async n=>{await n.del("companies",e),y.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:Bi(t)})}))}async function uu(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+Ze()}var Bi=e=>{let t=ye(e);return delete t.snapshot,t};function Ui(){let e=0;for(let t of Ke("customers")){let n=/^K-(\d+)$/.exec(t.number||"");n&&(e=Math.max(e,Number(n[1])))}return`K-${String(e+1).padStart(4,"0")}`}async function ws(e){Y(e)||K("Bitte ein Unternehmen oder einen Namen eintragen.");let t=x("customers",e.id),n=Ee({...e});String(n.number||"").trim()||(n.number=Ui());let a=Ke("customers").find(i=>i.id!==n.id&&i.number===n.number);a&&K(`Die Kundennummer ${n.number} ist bereits vergeben (${Y(a)}).`);let s=Yt(t,n,["updatedAt","createdAt"]);return await W(async i=>{await i.put("customers",n),await i.audit({action:t?"Kunde geändert":"Kunde angelegt",entity:"customers",entityId:n.id,label:Y(n),prev:t?s.prev:null,next:s.next})}),n}function Mi(e){return Ke("invoices").some(t=>t.customerId===e)||Ke("quotes").some(t=>t.customerId===e)||Ke("recurring").some(t=>t.customerId===e)}async function Mo(e){let t=x("customers",e);t&&(Mi(e)&&K("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await W(async n=>{let a=Ke("notes").filter(i=>i.customerId===e),s=Ke("appointments").filter(i=>i.customerId===e);for(let i of a)await n.del("notes",i.id);for(let i of s)await n.del("appointments",i.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:Y(t),prev:{...t,...a.length||s.length?{related:{notes:a,appointments:s}}:{}}})}))}async function _o(e){x("customers",e.customerId)||K("Bitte einen Kunden wählen."),be(e.date)||K("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&K("Bitte etwas eintragen.");let t=x("notes",e.id),n=Ee({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=Yt(t,n,["updatedAt","createdAt"]);return await W(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${Y(x("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function zo(e){let t=x("notes",e);t&&await W(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:Y(x("customers",t.customerId)),prev:t})})}var To=/^([01]\d|2[0-3]):[0-5]\d$/,du=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function Lo(e){x("companies",e.companyId)||K("Bitte das Unternehmen wählen, über das der Termin läuft."),ys(e.date)||K("Bitte ein gültiges Datum eintragen."),(!To.test(e.start||"")||!To.test(e.end||""))&&K("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&K("Das Ende liegt vor dem Beginn.");let t=x("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&K("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=x("appointments",e.id),a=Ee({...e,title:String(e.title||"").trim()||(t?`Termin mit ${Y(t)}`:String(e.contactName||"").trim())});n&&du.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=Yt(n,a,["updatedAt","createdAt","sequence"]);return await W(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function xs(e,t,n){let a=x("appointments",e);a||K("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||K("Unbekannter Status.");let s=Ee({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await W(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function Po(e){let t=x("appointments",e);t&&await W(async n=>{await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function ks(e){String(e.name||"").trim()||K("Bitte einen Namen für die Leistung eintragen.");let t=x("services",e.id),n=Ee(e),a=Yt(t,n,["updatedAt","createdAt"]);return await W(async s=>{await s.put("services",n),await s.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?a.prev:null,next:a.next})}),n}async function Oo(e){let t=x("services",e);t&&await W(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function dt(e,t){return va({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function _i(e){return be(e.issueDate)?Te(e.issueDate,Number(e.paymentTermDays)||0):""}function Jn(e){let t=Ee({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=_i(t)),t.fx&&Xe.includes(t.currency)&&(t.fx=At(t.currency,t.fx.usdToEur,t.fx)),t.totals=kt(t),t}function Ko(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new $e(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=ye(t[a]):delete e[a];return n}async function Ds(e){let t=x("invoices",e.id);t&&t.status!=="draft"&&K("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&K("Nur Entwürfe können gespeichert werden.");let n=Jn(e);return await W(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new $e("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");Ko(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${Y(x("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function zi(e){let t=x("invoices",e);if(t){if(t.number||t.status!=="draft"){await Li(e);return}await W(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new $e("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await Fo(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:Bi(t)})})}}async function Li(e){let t=x("invoices",e);return t?t.type==="credit_note"?Oi(e):t.status==="draft"&&!t.number?(await zi(e),{number:""}):W(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await Ri(n,r,"credit"));for(let m of s)await n.del("payments",m.id);for(let m of i)await n.del("reminders",m.id);await n.del("invoices",e);let o=await Ri(n,a,"invoice");await Fo(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Y(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:Ie(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:ye(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function Ss(e,t="invoice"){let n=[],a=x("companies",e.companyId);a||n.push("Unternehmen auswählen"),x("customers",e.customerId)||n.push("Kunde auswählen"),be(e.issueDate)?ys(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!be(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&be(e.issueDate)&&e.fx.forDate!==En(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),Xe.includes(e.currency)||n.push("Währung wählen"),a&&x("customers",e.customerId)){let i=Io($t(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=Ut(Ct(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function Ea(e,t,n){if(!e||!be(n))return"";let{pattern:a}=Ct(e,t);if(Ut(a))return"";let s=In(e.id,t,a,n),i=x("counters",s),r=new Set([...Ke("invoices"),...Ke("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await Ti(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Pi(e,t,n,a){let{pattern:s}=Ct(t,n),i=In(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await Ti(t,n,a,r.last,async m=>!!await e.byIndex("invoices","number",m)||!!await e.byIndex("quotes","number",m));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function Ri(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!be(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=Ct(i,n);if(Ut(o))return null;let m=In(i.id,n,o,t.issueDate),u=await e.get("counters",m);if(!u)return null;for(let d=Number(u.last)||0;d>=1;d--)if(Ni(o,{prefix:r,dateISO:t.issueDate,n:d,digits:c})===t.number){a={key:m,n:d};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function Fo(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===Lt(t.issueDate,Ns(n),n.anchorDay)&&await e.put("recurring",Ee({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",Ee({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function qo(e,t,n,a){let{pattern:s}=Ct(e,t),i=In(e.id,t,s,n),r=x("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await W(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${Ao[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function Vo(e,t){return{company:ye(e),customer:ye(t),at:ne()}}async function Ia(e){let t=Ss(e,"invoice");t.length&&K(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=x("companies",e.companyId),a=x("customers",e.customerId),s=x("invoices",e.id);s&&s.status!=="draft"&&K("Diese Rechnung ist bereits erstellt.");let i=Jn(e);return W(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new $e("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=Ko(i,o),m=c?i.reopened||{}:null;if(!c){let u=await Pi(r,n,"invoice",i.issueDate);i.number=u.number,i.numberRef=u.ref}if(i.status="issued",i.finalizedAt=ne(),i.sentAt=null,i.snapshot=Vo(n,a),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:m.totalCents,currency:m.currency,issueDate:m.issueDate,customer:m.customer,usdToEur:m.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:Y(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let u=await r.get("quotes",i.quoteId);u&&u.status!=="invoiced"&&await r.put("quotes",Ee({...u,status:"invoiced",invoiceId:i.id}))}return i})}async function Zo(e){let t=x("invoices",e);return t||K("Rechnung nicht gefunden."),t.type==="credit_note"&&K("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||K("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),W(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new $e("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Y(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=Ee({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:ye(a)},next:{status:"draft"}}),o})}async function Nn(e,t=!0){let n=x("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=Ee({...n,status:t?"sent":"issued",sentAt:t?ne():null});await W(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function Cs(e,t,n){let a=x(e,t);a&&await W(async s=>{await s.put(e,Ee({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function Na(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=x("invoices",e);r||K("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&K("Zu diesem Beleg können keine Zahlungen erfasst werden."),be(t)||K("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||K("Bitte einen Zahlungsbetrag größer als null eintragen."),o>Vt(r,Fe(e))&&K("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:Ze(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await W(async m=>{let u=await m.get("invoices",e),d=await m.allByIndex("payments","invoiceId",e);if(!u||u.type==="credit_note"||["draft","cancelled","credited"].includes(u.status))throw new $e("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>Vt(u,d))throw new $e("Der Betrag ist höher als der offene Rechnungsbetrag.");await m.put("payments",c);let p=[...d,c];await m.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:Bt(u,d,q()),paidCents:Ie(d)},next:{status:Bt(u,p,q()),paidCents:Ie(p),amountCents:o,date:t,method:a}});let f=String(i||"").trim();f&&(await m.put("invoices",Ee({...u,clarify:{note:f,at:ne()}})),await m.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:u.clarify?{note:u.clarify.note}:null,next:{note:f}}))}),c}async function Go(e,{date:t,amountCents:n,method:a,note:s}){x("payments",e)||K("Zahlung nicht gefunden."),be(t)||K("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||K("Bitte einen Betrag größer als null eintragen."),W(async o=>{let c=await o.get("payments",e);if(!c)throw new $e("Diese Zahlung gibt es nicht mehr.");let m=c.amountCents<0,u=await o.get("invoices",c.invoiceId),d=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(b=>b.id!==e),p=m?-r:r,f=Ie(d)+p;if(f<0)throw new $e(m?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let g=u&&u.totals?u.totals.totalCents:null;if(!m&&g!=null&&f>g)throw new $e("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let h={...c,date:t,amountCents:p,method:a||"",note:s||"",updatedAt:ne()},$=Yt(c,h,["updatedAt","createdAt"]);return Object.keys($.next).length&&(await o.put("payments",h),await o.audit({action:m?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:u?u.number:"",prev:$.prev,next:$.next})),h})}async function Ho(e,t){let n=String(t||"").trim();return n||K("Bitte kurz notieren, was zu klären ist."),W(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new $e("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=Ee({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function Wo(e,t){return W(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=Ee({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function jo(e,{date:t,amountCents:n,method:a,note:s}){let i=x("invoices",e);i||K("Rechnung nicht gefunden."),i.status!=="credited"&&K("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),be(t)||K("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||K("Bitte einen Betrag größer als null eintragen.");let o={id:Ze(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await W(async c=>{let m=await c.allByIndex("payments","invoiceId",e);if(r>Ie(m))throw new $e("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:Ie(m)},next:{paidCents:Ie(m)-r,amountCents:-r,date:t,method:a}})}),o}async function Qo(e){let t=x("payments",e);if(!t)return;let n=x("invoices",t.invoiceId);await W(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(Ie(s)<0)throw new $e("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function Es(e,t){let n=x("invoices",e);n&&(n.type==="credit_note"&&K("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||K("Diese Rechnung kann nicht storniert werden."),Ie(Fe(e))>0&&K("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await W(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new $e("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(Ie(i)>0)throw new $e("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=Ee({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function Jo(e){return W(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new $e("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=Ee({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function Is(e,t){let n=x("invoices",e);n||K("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&K("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=x("companies",n.companyId);a||K("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=q(),i={...yt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:Ze(),qty:-Number(r.qty)})),discount:ye(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:ye(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=kt(i),W(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new $e("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Pi(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:ye(a),customer:ye(n.snapshot?n.snapshot.customer:x("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",Ee({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function Oi(e){let t=x("invoices",e);t||K("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||K("Zu dieser Rechnung gibt es keine Gutschrift."),W(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new $e("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(m=>m.amountCents<0))throw new $e(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await Ri(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=Ee({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:ye(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function Yo(e){let t=x("companies",e.companyId);return{...yt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:Ze()})),discount:ye(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function Xo(e){let t=x("quotes",e.id);t&&t.status!=="draft"&&K("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=Jn(e);return await W(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new $e("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${Y(x("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function el(e){let t=x("quotes",e);t&&(t.status!=="draft"&&K("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await W(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new $e("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:Bi(t)})}))}async function Ta(e){let t=Ss(e,"quote");t.length&&K(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=x("companies",e.companyId),a=x("customers",e.customerId),s=x("quotes",e.id);s&&s.status!=="draft"&&K("Dieses Angebot ist bereits erstellt.");let i=Jn(e);return W(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new $e("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Pi(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=Vo(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var Ro={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function Tn(e,t){let n=x("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!Ro[t])return;let a=Ee({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await W(async s=>{await s.put("quotes",a),await s.audit({action:Ro[t],entity:"quotes",entityId:e,label:n.number,prev:{status:n.status},next:{status:t}})})}async function tl(e){let t=x("quotes",e);t||K("Angebot nicht gefunden."),t.status==="draft"&&K("Bitte das Angebot zuerst erstellen."),t.invoiceId&&x("invoices",t.invoiceId)&&K("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=x("companies",t.companyId);n||K("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=x("customers",t.customerId),s=Jn({...yt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:Ze()})),discount:ye(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await W(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new $e("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new $e("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",Ee({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:t.number,next:{invoiceDraftId:s.id}})}),s}async function ln(e){let t=x("expenses",e.id),n=Ee({...e});n.status!=="review"&&(x("companies",n.companyId)||K("Bitte ein Unternehmen auswählen."),ys(n.invoiceDate)||K("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&K("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||K("Bitte einen Lieferanten eintragen."),n.paymentDate&&!ys(n.paymentDate)&&K("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||K("Bitte den Wechselkurs laden oder eintragen."));let a=Yt(t,n,["updatedAt","createdAt","ai"]);return await W(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function nl(e){let t=x("expenses",e);t&&await W(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function Ki({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:Ze(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await W(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function Fi(e){await W(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function Ns(e){let t=hn.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function Ra(e){String(e.name||"").trim()||K("Bitte der Vorlage einen Namen geben."),x("companies",e.companyId)||K("Bitte ein Unternehmen auswählen."),x("customers",e.customerId)||K("Bitte einen Kunden auswählen."),(e.items||[]).length||K("Bitte mindestens eine Position hinzufügen."),be(e.nextDate)||K("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!be(e.endDate)&&K("Bitte das Enddatum prüfen.");let t=x("recurring",e.id),n=Ee({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=kt(n),await W(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function al(e){let t=x("recurring",e);t&&await W(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var Yn=(e,t=q())=>!!e&&e.active&&be(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),Xn=e=>!!e.endDate&&be(e.nextDate)&&e.nextDate>e.endDate;async function qi(e,{early:t=!1}={}){let n=x("recurring",e);n||K("Vorlage nicht gefunden."),Xn(n)&&K("Diese Vorlage hat ihr Enddatum erreicht."),n.active||K("Diese Vorlage ist pausiert."),!t&&n.nextDate>q()&&K("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=x("companies",n.companyId),s=x("customers",n.customerId);(!a||!s)&&K("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=Ns(n),r=n.nextDate,o=Te(Lt(r,i,n.anchorDay),-1),c=Jn({...yt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(p=>({...p,id:Ze()})),discount:ye(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id}),m=Lt(r,i,n.anchorDay),u=!!n.endDate&&m>n.endDate,d=Ee({...n,nextDate:m,generated:(n.generated||0)+1,lastRunAt:ne(),active:u?!1:n.active,endedByRun:u});return await W(async p=>{let f=await p.get("recurring",n.id);if(!f||f.nextDate!==n.nextDate||!f.active)throw new $e("Dieser Termin wurde bereits erzeugt.");await p.put("invoices",c),await p.put("recurring",d),await p.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:m}})}),c}async function sl(e,t,n){let a=x("invoices",e);if(!a)return null;let s={id:Ze(),invoiceId:e,level:t,date:q(),note:n||"",createdAt:ne()};return await W(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}async function Vi(){y.companies.length||(await Ca(ba({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await Ca(ba({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await W(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function il(){y.settings.seeded||y.companies.length||await Vi()}function mu(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Aa(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=mu();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function pu(){let e=Ne(null),[t,n]=C(0);return si(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function fu(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,m=Math.ceil(Math.max(t,0)/o)*o,u=[];for(let d=c;d<=m+o/2;d+=o)u.push(Math.round(d/o)*o);return{lo:c,hi:m,step:o,ticks:u}}function Zi(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function Ba({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=pu(),[m,u]=C(null),d={top:12,right:8,bottom:26,left:56},p=0,f=0;for(let L of e)if(n==="stacked"){let k=0,T=0;for(let B of t){let G=L.values[B.id]||0;G>=0?k+=G:T+=G}p=Math.max(p,k),f=Math.min(f,T)}else for(let k of t){let T=L.values[k.id]||0;p=Math.max(p,T),f=Math.min(f,T)}let g=fu(f,p),h=Math.max(c-d.left-d.right,10),$=i-d.top-d.bottom,b=L=>d.top+$-(L-g.lo)/(g.hi-g.lo||1)*$,v=h/Math.max(e.length,1),I=b(0),D=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(h/46)))),w=[];e.forEach((L,k)=>{let T=d.left+k*v;if(n==="stacked"){let B=Math.min(24,Math.max(v-10,3)),G=T+(v-B)/2,F=I,z=I,ee=t.filter(de=>(L.values[de.id]||0)!==0),A=[...ee].reverse().find(de=>L.values[de.id]>0),te=[...ee].reverse().find(de=>L.values[de.id]<0);for(let de of ee){let R=L.values[de.id],De=Math.abs(b(R)-I);if(R>0){let _e=F-De,Rn=A&&A.id===de.id,js=Rn?0:Math.min(2,De-1);w.push({d:Rn?Zi(G,_e,B,De,4,!0):`M${G},${_e+js}H${G+B}V${F}H${G}Z`,color:de.color,key:`${L.key}-${de.id}`}),F=_e}else{let _e=te&&te.id===de.id,Rn=_e?0:Math.min(2,De-1);w.push({d:_e?Zi(G,z,B,De,4,!1):`M${G},${z}H${G+B}V${z+De-Rn}H${G}Z`,color:de.color,key:`${L.key}-${de.id}`}),z+=De}}}else{let B=t.length,G=Math.min(18,Math.max((v-10-(B-1)*2)/B,2)),F=B*G+(B-1)*2;t.forEach((z,ee)=>{let A=L.values[z.id]||0;if(!A)return;let te=Math.abs(b(A)-I),de=T+(v-F)/2+ee*(G+2);w.push({d:Zi(de,A>0?I-te:I,G,te,4,A>0),color:z.color,key:`${L.key}-${z.id}`})})}});let M=m!=null?e[m]:null,S=m!=null?d.left+m*v+v/2:0,H=S>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${g.ticks.map(L=>l`<g key=${L}>
        <line x1=${d.left} x2=${c-d.right} y1=${b(L)} y2=${b(L)} class=${L===0?"chart-base":"chart-grid"} />
        <text x=${d.left-8} y=${b(L)+4} text-anchor="end" class="chart-tick">${(s||a)(L)}</text>
      </g>`)}
      ${m!=null&&l`<rect x=${d.left+m*v} y=${d.top} width=${v} height=${$} class="chart-hover" />`}
      ${w.map(L=>l`<path key=${L.key} d=${L.d} fill=${L.color} />`)}
      ${e.map((L,k)=>k%D===0&&l`<text key=${L.key} x=${d.left+k*v+v/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${L.label}</text>`)}
      ${e.map((L,k)=>l`<rect key=${`hit-${L.key}`} x=${d.left+k*v} y=${d.top} width=${v} height=${$+d.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${L.title||L.label}: ${t.map(T=>`${T.label} ${a(L.values[T.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>u(k)} onMouseLeave=${()=>u(null)}
        onFocus=${()=>u(k)} onBlur=${()=>u(null)} />`)}
    </svg>`}
    ${M&&l`<div class=${`chart-tip${H?" is-left":""}`} style=${`left:${S}px;top:${d.top}px`}>
      <div class="chart-tip-title">${M.title||M.label}</div>
      ${t.filter(L=>t.length===1||(M.values[L.id]||0)!==0).map(L=>l`<div class="chart-tip-row" key=${L.id}>
        <span class="chart-key" style=${`background:${L.color}`}></span>
        <strong>${a(M.values[L.id]||0)}</strong><span>${L.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((L,k)=>L+(M.values[k.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function gu({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function Ua({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=C(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${gu} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,m)=>l`<td class=${m?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function Zt({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}var cn=(e,t)=>!t||e.companyId===t;function rl(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function tt(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!xi(i)||!i.totals||!cn(i,t)||a&&i.customerId!==a||n&&!Pt(i.issueDate,n))continue;let r=i.totals,o=ut(r.netCents,i.currency,i.fx)||0,c=Dt(r.netCents,i.currency,i.fx)||0,m=ut(r.taxCents,i.currency,i.fx)||0,u=Dt(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:m,taxEUR:u,totalUSD:o+m,totalEUR:c+u})}return s}function ea(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!cn(s,t)||n&&!Pt(s.invoiceDate,n))continue;let i=ut(s.netCents,s.currency,s.fx)||0,r=Dt(s.netCents,s.currency,s.fx)||0,o=ut(s.taxCents,s.currency,s.fx)||0,c=Dt(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function Ts(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&cn(r,t)&&(n&&!Pt(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:ut(i.amountCents,r.currency,r.fx)||0,eur:Dt(i.amountCents,r.currency,r.fx)||0}))}return s}var se=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function un(e,{companyId:t}={},n){let a=rl(e.payments),s=[];for(let i of e.invoices){if(!cn(i,t))continue;let r=a.get(i.id)||[],o=Vt(i,r);if(o<=0)continue;let c=Bt(i,r,n),m=i.dueDate&&i.dueDate<n?Mn(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:m,openCents:o,paidCents:Ie(r),openUSD:ut(o,i.currency,i.fx)||0,openEUR:Dt(o,i.currency,i.fx)||0,bucket:m<=0?"current":m<=30?"d30":m<=60?"d60":m<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var ol=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function ll(e,t,n){let a=lt("month",n),s=lt("quarter",n),i=lt("year",n),r=lt("lastMonth",n),o=tt(e,{companyId:t,range:i}),c=v=>o.filter(I=>Pt(I.date,v)),m=c(a),u=c(s),d=tt(e,{companyId:t,range:r}),p=un(e,{companyId:t},n),f=p.filter(v=>v.status==="overdue"),g=rl(e.payments),h=o.filter(v=>v.inv.type!=="credit_note"&&v.inv.status!=="credited"),$=h.filter(v=>Bt(v.inv,g.get(v.inv.id)||[],n)==="paid"),b=e.customers.filter(v=>v.active!==!1);if(t){let v=new Set([...e.invoices.filter(I=>I.companyId===t).map(I=>I.customerId),...(e.quotes||[]).filter(I=>I.companyId===t).map(I=>I.customerId)]);b=b.filter(I=>v.has(I.id))}return{month:{usd:se(m,"netUSD"),eur:se(m,"netEUR"),count:m.length},lastMonth:{usd:se(d,"netUSD"),eur:se(d,"netEUR")},quarter:{usd:se(u,"netUSD"),eur:se(u,"netEUR")},year:{usd:se(o,"netUSD"),eur:se(o,"netEUR")},open:{count:p.length,usd:se(p,"openUSD"),eur:se(p,"openEUR")},overdue:{count:f.length,usd:se(f,"openUSD"),eur:se(f,"openEUR")},paid:{count:$.length,usd:se($,"totalUSD"),eur:se($,"totalEUR")},average:{usd:h.length?Math.round(se(h,"netUSD")/h.length):0,eur:h.length?Math.round(se(h,"netEUR")/h.length):0,count:h.length},activeCustomers:b.length}}function Ma(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=tt(e,{companyId:t,range:i}),o=ea(e,{companyId:t,range:i}),c=Ts(e,{companyId:t,range:i});return n.map(m=>{let u=r.filter(h=>ha(h.date)===m),d=o.filter(h=>ha(h.date)===m),p=c.filter(h=>ha(h.date)===m),f={},g={};for(let h of u)f[h.inv.companyId]=(f[h.inv.companyId]||0)+h.netUSD,g[h.inv.companyId]=(g[h.inv.companyId]||0)+h.netEUR;return{key:m,revenueUSD:se(u,"netUSD"),revenueEUR:se(u,"netEUR"),expenseUSD:se(d,"netUSD"),expenseEUR:se(d,"netEUR"),profitUSD:se(u,"netUSD")-se(d,"netUSD"),profitEUR:se(u,"netEUR")-se(d,"netEUR"),paymentsUSD:se(p,"usd"),paymentsEUR:se(p,"eur"),taxUSD:se(u,"taxUSD"),taxEUR:se(u,"taxEUR"),invoices:u.length,byCompany:f,byCompanyUSD:f,byCompanyEUR:g}})}function Gi(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function cl(e,t,n){let a=tt(e,t);return n==="quarter"?Gi(a,Wr):n==="year"?Gi(a,s=>String(as(s))):Gi(a,ha)}function _a(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of tt(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:Y(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function za(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of tt(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function La(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of tt(e,t)){let i=new Map((s.inv.totals.lines||[]).map(u=>[u.id,u])),r=(s.inv.items||[]).filter(u=>i.has(u.id)),o=r.map(u=>{let d=i.get(u.id);return d.netCents!=null?d.netCents:d.cents}),c=xt(s.netUSD,o),m=xt(s.netEUR,o);r.forEach((u,d)=>{let p=u.serviceId?n.get(u.serviceId):null,f=p?`s:${p.id}`:`n:${String(u.name||"").trim().toLowerCase()}`,g=a.get(f)||{key:f,name:p?p.name:u.name||"Ohne Bezeichnung",category:p?p.category:"",usd:0,eur:0,qty:0};g.usd+=c[d]||0,g.eur+=m[d]||0,g.qty+=Number(u.qty)||0,a.set(f,g)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Hi(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let m=s.get(o),u=a(c),d=c.serviceId?n.get(c.serviceId):null;return m.has(u)||m.set(u,{key:u,name:d?d.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:d&&d.category||"",unit:c.unit||d&&d.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),m.get(u)};for(let o of tt(e,t)){let c=new Map((o.inv.totals.lines||[]).map(g=>[g.id,g])),m=(o.inv.items||[]).filter(g=>c.has(g.id)),u=m.map(g=>{let h=c.get(g.id);return h.netCents!=null?h.netCents:h.cents}),d=xt(o.netUSD,u),p=xt(o.netEUR,u),f=o.inv.type==="credit_note";m.forEach((g,h)=>{let $=i(o.inv.customerId,g);$.usd+=d[h]||0,$.eur+=p[h]||0,$.qty+=Number(g.qty)||0,f||($.invoices.add(o.inv.id),$.companyIds.add(o.inv.companyId),(!$.first||o.date<$.first)&&($.first=o.date),o.date>$.last&&($.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&cn(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let m=i(o.customerId,c);m.running=!0,m.interval=o.interval,m.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(m=>({...m,invoices:m.invoices.size,companyIds:[...m.companyIds]})).sort((m,u)=>Number(u.running)-Number(m.running)||u.usd-m.usd));return r}function ul(e,t){let n=new Map;for(let a of tt(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function Wi(e,t){let n=new Map;for(let a of ea(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function dl(e,t,n){let a=tt(e,t),s=ea(e,t),i=Ts(e,t),r=un(e,{companyId:t.companyId},n),o=se(a,"netUSD"),c=se(a,"netEUR"),m=se(s,"netUSD"),u=se(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(d=>d.inv.type!=="credit_note").length},expenses:{usd:m,eur:u,count:s.length},profit:{usd:o-m,eur:c-u},payments:{usd:se(i,"usd"),eur:se(i,"eur"),count:i.length},receivables:{usd:se(r,"openUSD"),eur:se(r,"openEUR"),count:r.length},taxCollected:{usd:se(a,"taxUSD"),eur:se(a,"taxEUR")},taxPaid:{usd:se(s,"taxUSD"),eur:se(s,"taxEUR")},taxBalance:{usd:se(a,"taxUSD")-se(s,"taxUSD"),eur:se(a,"taxEUR")-se(s,"taxEUR")}}}function ml(e,t){let n=new Map;for(let i of tt(e,t)){let r=i.inv.totals.taxGroups||[],o=xt(i.taxUSD,r.map(d=>d.taxCents)),c=xt(i.netUSD,r.map(d=>d.netCents)),m=xt(i.taxEUR,r.map(d=>d.taxCents)),u=xt(i.netEUR,r.map(d=>d.netCents));r.forEach((d,p)=>{let f=`${d.rate}|${i.inv.currency}`,g=n.get(f)||{rate:d.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};g.netCents+=d.netCents,g.taxCents+=d.taxCents,g.netUSD+=c[p]||0,g.taxUSD+=o[p]||0,g.netEUR+=u[p]||0,g.taxEUR+=m[p]||0,n.set(f,g)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=ea(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:se(s,"taxUSD"),paidEUR:se(s,"taxEUR")}}function ji(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>xi(o)&&cn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&cn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&cn(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return jr(a,s)}var Gt=()=>({invoices:y.invoices,quotes:y.quotes,payments:y.payments,expenses:y.expenses,customers:y.customers,companies:y.companies,services:y.services,recurring:y.recurring}),Et=()=>{let e=xe();return e?e.id:null};function Rs(e){return Bt(e,Fe(e.id),q())}function Pa({inv:e}){let t=Rs(e),n=$a[t]||$a.draft;return l`<span class="badges"><${ze} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${ze} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function Oa({quote:e}){let t=kn(e,q()),n=ui[t]||ui.draft;return l`<${ze} tone=${n.tone}>${n.label}<//>`}var ie=()=>y.settings.displayCurrency==="EUR"?"EUR":"USD",dn=()=>ie()==="USD"?"EUR":"USD",N=(e,t="",n=ie())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},ke=(e,t="")=>N(e,t,dn()),X=e=>Z(e,ie()),Ue=e=>Z(e,dn()),nt=(e,t,n)=>qt(e,t,ie(),n);function Ht({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?Dt(n,e.currency,e.fx):ut(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${Z(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${Z(s,a)}</span>`}
  </span>`}function Pe({id:e}){let t=x("companies",e);return t?l`<span class="co-tag"><${vs} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Me(e){let t=x("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return Y(t)||"–"}var ta=e=>Vt(e,Fe(e.id));var Ka=e=>String(e).padStart(2,"0");function pl(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function hl(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function fl(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!hl(n))return new Date(c);let m=pl(c,n),u=c-m*6e4,d=pl(u,n);return d!==m&&(u=c-d*6e4),new Date(u)}function Fa(e,t,n="de"){if(!hl(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function Bs(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function $l(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function Us(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var na=e=>(On.find(t=>t.id===e)||{}).label||"",gl=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function aa(e){let t=fl(e.date,e.start,e.timeZone),n=fl(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function hu(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=na(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function $u(e,t){return String(e.contactName||"").trim()||(t?ct(t)||Y(t):"")}function bl(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=aa(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),m={CONTACT:$u(e,n),CUSTOMER:n?Y(n):String(e.contactName||""),TITLE:c,DATE:Us(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:Fa(e.timeZone,r,s),MEETING:hu(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:na(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},u=d=>d.replace(/[ \t]+,/g,",").split(`
`).map(p=>p.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:u(ft(i.subject,m)).replace(/\n/g," "),body:u(ft(i.body,m)),vars:m}}var Qi=e=>`${e.getUTCFullYear()}${Ka(e.getUTCMonth()+1)}${Ka(e.getUTCDate())}T${Ka(e.getUTCHours())}${Ka(e.getUTCMinutes())}${Ka(e.getUTCSeconds())}Z`,As=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function bu(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function vl(e,{summary:t,description:n}){let{start:a,end:s}=aa(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?gl(i)?i:na(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${Qi(new Date)}`,`DTSTART:${Qi(a)}`,`DTEND:${Qi(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${As(t)}`,n?`DESCRIPTION:${As(n)}`:"",r?`LOCATION:${As(r)}`:"",gl(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${As(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(bu).join(`\r
`)}\r
`}var Ms=null;function yl(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function vu(){return Ms||(Ms=(async()=>{if(await yl("js/vendor/pdfmake.min.js"),await yl("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw Ms=null,e})),Ms}var Va="#16191d",je="#5c636b",Ji="#d9dde1",qa=50;function yu(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function Za(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:Va,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:je,margin:[0,0,0,6]},...e.recipient.map((f,g)=>({text:f,fontSize:10.5,bold:g===0})),...e.recipientExtra.map(f=>({text:f,fontSize:8.5,color:je,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([f,g])=>[{text:f,color:je,fontSize:9},{text:g,alignment:"right",fontSize:9,bold:f===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(f=>({text:f.label,fontSize:8,color:je,alignment:f.align,noWrap:!0})),c=e.rows.map(f=>r.map(g=>{if(g.key==="desc"){let h=[{text:f.name,bold:!0}];return f.description&&h.push({text:f.description,color:je,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:h}}return{text:f[g.key]||"",alignment:g.align,noWrap:g.key!=="unit"}})),m={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(f=>f.width),body:[o,...c]},layout:{hLineWidth:(f,g)=>f===0?0:f===1?1.2:.5,hLineColor:f=>f===1?n:Ji,vLineWidth:()=>0,paddingLeft:f=>f===0?0:7,paddingRight:(f,g)=>f===g.table.widths.length-1?0:7,paddingTop:f=>f===0?0:6,paddingBottom:f=>f===0?5:6}},u={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(f=>[{text:f.label,bold:!!f.strong,fontSize:f.strong?11.5:9.5,color:f.strong?Va:je},{text:f.value,bold:!!f.strong,fontSize:f.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(f,g)=>f===g.table.body.length-1&&g.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(f,g)=>f===g.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:je,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:je,margin:[0,1.5,0,0]}]:[]]:[]]}]},d=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:je}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&d.push({text:e.subtitle,color:je,margin:[0,2,0,0]}),e.intro&&d.push({text:e.intro,margin:[0,12,0,0]}),d.push(m,u),e.notes.length&&d.push({stack:e.notes.map(f=>({text:f,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&d.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([f,g])=>[{text:f,color:je},{text:g}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:f=>f===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(f=>({text:f,margin:[0,4,0,0]}))]});let p=yu(e);return{pageSize:"A4",pageMargins:[qa,46,qa,p+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:Va},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(f,g)=>({margin:[qa,0,qa,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*qa,y2:0,lineWidth:.5,lineColor:Ji}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(h=>({width:"*",stack:h.map(($,b)=>({text:$,fontSize:7.5,color:je,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:je,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",f).replace("{N}",g),fontSize:7,color:je,alignment:"right",margin:[0,5,0,0]}]}),content:d}}async function sa(e){let t=await vu();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function at(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function wl({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(u=>({text:u.label,bold:!0,fontSize:8,color:je,alignment:u.align||"left"})),...a.map(u=>u.map((d,p)=>({text:d==null?"":String(d),alignment:n[p].align||"left"})))];s&&o.push(s.map((u,d)=>({text:u==null?"":String(u),bold:!0,alignment:n[d].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:Va},info:{title:e,creator:"BBC Finance"},footer:(u,d)=>({text:`Seite ${u} von ${d}`,alignment:"right",fontSize:7,color:je,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:je,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((u,d)=>d===0?"*":"auto"),body:o},layout:{hLineWidth:(u,d)=>u===0?0:u===1||s&&u===d.table.body.length-1?1:.5,hLineColor:(u,d)=>u===1||s&&u===d.table.body.length-1?Va:Ji,vLineWidth:()=>0,paddingLeft:u=>u===0?0:6,paddingRight:(u,d)=>u===d.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},m=await sa(c);at(m,i)}function ia({customer:e,onClose:t,onSaved:n}){let a=!e||!x("customers",e.id),[s,i]=C(()=>({...e||Xt()})),[r,o]=C((s.tags||[]).join(", ")),[c,m]=C(!1),u=p=>f=>i(g=>({...g,[p]:f}));async function d(){m(!0);let p={...s,tags:r.split(",").map(g=>g.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},f=await U(()=>ws(p));m(!1),f&&(_(a?"Kunde angelegt":"Kunde gespeichert","good"),n&&n(f),t())}return l`<${We} title=${a?"Neuer Kunde":"Kunde bearbeiten"} onClose=${t} size="lg" onSubmit=${d}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${c}>Kunde speichern<//>`}>
    <div class="form-grid">
      <${O} class="span-4" label="Unternehmen" value=${s.company} onInput=${u("company")} />
      <${O} class="span-2" label="Kundennummer" value=${s.number} onInput=${u("number")} placeholder=${Ui()}
        hint="Leer lassen für automatische Nummer" />
      <${O} class="span-3" label="Vorname" value=${s.firstName} onInput=${u("firstName")} />
      <${O} class="span-3" label="Nachname" value=${s.lastName} onInput=${u("lastName")} />
      <${O} class="span-6" label="Ansprechpartner (falls abweichend)" value=${s.contact} onInput=${u("contact")} />

      <${O} class="span-4" label="Straße" value=${s.street} onInput=${u("street")} />
      <${O} class="span-2" label="Hausnummer" value=${s.houseNo} onInput=${u("houseNo")} />
      <${O} class="span-2" label="PLZ" value=${s.zip} onInput=${u("zip")} />
      <${O} class="span-4" label="Ort" value=${s.city} onInput=${u("city")} />
      <${O} class="span-3" label="Bundesland / Region" value=${s.region} onInput=${u("region")} />
      <${O} class="span-3" label="Land" value=${s.country} onInput=${u("country")} />

      <${O} class="span-3" label="E-Mail" type="email" value=${s.email} onInput=${u("email")} />
      <${O} class="span-3" label="Telefon" value=${s.phone} onInput=${u("phone")} />
      <${O} class="span-6" label="Website" value=${s.website} onInput=${u("website")} />

      <${O} class="span-3" label="Steuer-ID" value=${s.taxId} onInput=${u("taxId")} />
      <${O} class="span-3" label="USt-IdNr. / VAT ID" value=${s.vatId} onInput=${u("vatId")} />

      <${ce} class="span-2" label="Belegsprache" value=${s.language} onChange=${u("language")}
        placeholder="Wie Unternehmen" options=${vt} />
      <${ce} class="span-2" label="Währung" value=${s.currency} onChange=${u("currency")}
        placeholder="Wie Unternehmen" options=${Xe} />
      <${Ae} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${u("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${O} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${le} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${u("notes")} rows=${3} />
      <div class="span-6"><${Ve} label="Kunde ist aktiv" checked=${s.active!==!1} onChange=${u("active")} /></div>
    </div>
  <//>`}function kl(e){let t=Gt(),n=q(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of tt(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of un(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of y.payments){let r=x("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=ut(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=Dt(i.amountCents,r.currency,r.fx)||0}return a}function Dl(){ge();let[e,t]=C(""),[n,a]=C("active"),[s,i]=C(""),[r,o]=C(null),c=Et(),m=ve(()=>kl(c),[y.version,c]),u=ve(()=>Hi(Gt(),{companyId:c}),[y.version,c]),d=ve(()=>[...new Set(y.customers.flatMap(g=>g.tags||[]))].sort((g,h)=>g.localeCompare(h,"de")),[y.version]),p=y.customers.filter(g=>n==="active"&&g.active===!1||n==="inactive"&&g.active!==!1||s&&!(g.tags||[]).includes(s)?!1:Re(e,g.number,g.company,g.firstName,g.lastName,g.contact,g.city,g.country,g.email,(g.tags||[]).join(" "),(u.get(g.id)||[]).map(h=>h.name).join(" "))),f=[{key:"number",label:"Nr.",sort:g=>g.number,width:"90px",render:g=>l`<span class="mono-num">${g.number}</span>`},{key:"name",label:"Kunde",sort:g=>Y(g),render:g=>l`<div class="cell-main">${Y(g)}</div>
        ${ct(g)&&ct(g)!==Y(g)&&l`<div class="cell-sub">${ct(g)}</div>`}`},{key:"city",label:"Ort",sort:g=>g.city,render:g=>[g.city,g.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:g=>{let h=u.get(g.id)||[];return h.length?l`<div class="svc-tags">${h.slice(0,3).map($=>l`<span class="tag" title=${$.running?"Läuft (wiederkehrende Vorlage)":""}>${$.running?"↻ ":""}${$.name}</span>`)}
          ${h.length>3&&l`<span class="tag muted-text">+${h.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:g=>(g.tags||[]).map(h=>l`<span class="tag">${h}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:g=>N(m.get(g.id)),render:g=>{let h=m.get(g.id);return h&&N(h)?X(N(h)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:g=>N(m.get(g.id),"open"),render:g=>{let h=m.get(g.id);return!h||!N(h,"open")?l`<span class="muted-text">–</span>`:l`<span class=${N(h,"overdue")?"tone-bad":""}>${X(N(h,"open"))}</span>`}},{key:"status",label:"",render:g=>g.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}];return l`
    <${we} title="Kunden" sub="Ein Kunde wird einmal angelegt und kann von jedem Unternehmen abgerechnet werden.">
      <${E} variant="primary" icon="plus" onClick=${()=>o(Xt())}>Neuer Kunde<//>
    <//>
    ${y.customers.length>0&&l`<div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${rn} label="Status" value=${n} onChange=${a} options=${[{id:"active",label:"Aktiv"},{id:"inactive",label:"Inaktiv"},{id:"all",label:"Alle"}]} />
      ${d.length>0&&l`<select class="input select filter-select" value=${s} aria-label="Nach Tag filtern" onChange=${g=>i(g.target.value)}>
        <option value="">Alle Tags</option>
        ${d.map(g=>l`<option value=${g}>${g}</option>`)}
      </select>`}
    </div>`}
    <${rt} columns=${f} rows=${p} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${g=>j(`/customers/${g.id}`)}
      empty=${y.customers.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kunden." />`:l`<${pe} icon="customers" title="Noch keine Kunden" text="Lege deinen ersten Kunden an – danach kannst du ihn in jeder Rechnung auswählen.">
            <${E} variant="primary" icon="plus" onClick=${()=>o(Xt())}>Ersten Kunden anlegen<//>
          <//>`} />
    ${r&&l`<${ia} customer=${r} onClose=${()=>o(null)}
      onSaved=${g=>{x("customers",r.id)||j(`/customers/${g.id}`)}} />`}
  `}function Sl({id:e}){ge();let t=x("customers",e),[n,a]=C(!1),[s,i]=C(null),[r,o]=C(null);if(!t)return l`<${pe} icon="customers" title="Kunde nicht gefunden" text="Dieser Kunde existiert nicht mehr.">
      <${E} onClick=${()=>j("/customers")}>Zur Kundenliste<//>
    <//>`;let c=q(),m=kl(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},u=Hi(Gt(),{customerId:e}).get(e)||[],d=y.notes.filter(w=>w.customerId===e),p=_s(y.appointments.filter(w=>w.customerId===e)),f=p.filter(w=>w.status==="planned"&&w.date>=c),g=y.invoices.filter(w=>w.customerId===e).sort((w,M)=>w.issueDate<M.issueDate?1:-1),h=y.quotes.filter(w=>w.customerId===e).sort((w,M)=>w.issueDate<M.issueDate?1:-1),$=[...new Set([...g,...h].map(w=>w.companyId))];async function b(){let w=d.length||p.length?` Mitgelöscht werden ${p.length} ${p.length===1?"Termin":"Termine"} und ${d.length} ${d.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await oe({title:"Kunde löschen?",text:`${Y(t)} wird endgültig gelöscht.${w}`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Mo(e),!0))&&(_("Kunde gelöscht","good"),j("/customers"))}let v=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),I=[{key:"number",label:"Nummer",render:w=>l`<a href=${`#/invoices/${w.id}`} class="cell-main">${w.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:w=>l`<${Pe} id=${w.companyId} />`},{key:"date",label:"Datum",render:w=>V(w.issueDate)},{key:"due",label:"Fällig",render:w=>V(w.dueDate)},{key:"total",label:"Betrag",align:"right",render:w=>l`<${Ht} doc=${w} />`},{key:"status",label:"Status",render:w=>l`<${Pa} inv=${w} />`}],D=[{key:"number",label:"Nummer",render:w=>l`<a href=${`#/quotes/${w.id}`} class="cell-main">${w.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:w=>l`<${Pe} id=${w.companyId} />`},{key:"date",label:"Datum",render:w=>V(w.issueDate)},{key:"valid",label:"Gültig bis",render:w=>V(w.validUntil)},{key:"total",label:"Betrag",align:"right",render:w=>l`<${Ht} doc=${w} />`},{key:"status",label:"Status",render:w=>l`<${Oa} quote=${w} />`}];return l`
    <${we} title=${Y(t)} back=${{href:"#/customers",label:"Kunden"}}
      sub=${l`<span>Kundennummer ${t.number}</span>${t.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}`}>
      <${E} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${E} variant="primary" icon="plus" onClick=${()=>j(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${gt} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>j(`/quotes/new?customer=${e}`)},{label:"Kunde löschen",icon:"trash",danger:!0,disabled:Mi(e),onClick:b}]} />
    <//>

    <div class="stat-row">
      <${Be} label="Umsatz gesamt (netto)" value=${X(N(m))} sub=${`≈ ${Ue(ke(m))}, ${m.count} Rechnungen`} />
      <${Be} label="Offene Forderungen" value=${X(N(m,"open"))} sub=${`≈ ${Ue(ke(m,"open"))}`} />
      <${Be} label="Davon überfällig" value=${X(N(m,"overdue"))} tone=${N(m,"overdue")?"bad":""} sub=${`≈ ${Ue(ke(m,"overdue"))}`} />
      <${Be} label="Bezahlt" value=${X(N(m,"paid"))} sub=${`≈ ${Ue(ke(m,"paid"))}`} />
    </div>

    <div class="split">
      <div class="split-main">
        <${xu} rows=${u} />
        <${Q} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${E} small icon="note" onClick=${()=>i(Yr({customerId:e}))}>Eintrag<//>
            <${E} small icon="calendar" onClick=${()=>o(wu(t))}>Termin planen<//>
          </div>`}>
          ${f.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${Ls} items=${f} onOpen=${o} compact />`}
          <${Du} notes=${d} appts=${p.filter(w=>!(w.status==="planned"&&w.date>=c))}
            onNote=${i} onAppt=${o} hasUpcoming=${f.length>0} />
        <//>
        <${Q} title="Rechnungen" flush>
          <${rt} columns=${I} rows=${g} onRowClick=${w=>j(`/invoices/${w.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${Q} title="Angebote" flush>
          <${rt} columns=${D} rows=${h} onRowClick=${w=>j(`/quotes/${w.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kunden.</p>`} />
        <//>
      </div>
      <aside class="split-side">
        <${Q} title="Kontakt">
          <${on} rows=${[["Ansprechpartner",ct(t)],["Adresse",v.length?l`${v.map(w=>l`<div>${w}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(vt.find(w=>w.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(w=>l`<span class="tag">${w}</span>`):""]]} />
        <//>
        <${Q} title="Abgerechnet über">
          ${$.length?l`<ul class="plain-list">${$.map(w=>l`<li><${Pe} id=${w} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${Q} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${ia} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${Su} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${zs} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function wu(e){let t=[...y.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=Et()&&x("companies",Et())||t&&x("companies",t.companyId)||me()[0];return ls(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function xu({rows:e}){let t=n=>(hn.find(a=>a.id===n)||{}).label||"";return l`<${Q} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${ie()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${ae} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Pe} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${Dn(n.qty)}${n.unit?` ${bs(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${N(n)?l`${X(N(n))}<div class="cell-sub">≈ ${Ue(ke(n))}</div>`:"–"}</td>
            <td>${n.last?V(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var ku={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},xl=e=>(rs.find(t=>t.id===e)||rs[0]).label;function Du({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await oe({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await zo(o.id),!0))&&_("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let d=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${ae} name=${ku[d.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${d.title||xl(d.kind)}</span>
              <span class="tl-meta">${xl(d.kind)} · ${V(d.date)}</span>${d.companyId&&l`<${Pe} id=${d.companyId} />`}</div>
            ${d.text&&l`<div class="tl-text">${d.text}</div>`}
          </div>
          <div class="tl-actions">
            <${E} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(d)} />
            <${E} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(d)} />
          </div>
        </li>`}let c=o.a,m=Kn[c.status]||Kn.planned,u=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${ae} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${V(c.date)}, ${c.start} Uhr</span>
            <${ze} tone=${u?"warn":m.tone}>${u?"Nicht dokumentiert":m.label}<//>
            <${Pe} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
        </div>
        <div class="tl-actions">
          ${u&&l`<${E} small onClick=${()=>Yi(c)}>Dokumentieren<//>`}
          <${E} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function Su({note:e,onClose:t}){let n=!x("notes",e.id),[a,s]=C(()=>({...e})),[i,r]=C(!1),o=m=>u=>s(d=>({...d,[m]:u}));async function c(){r(!0);let m=await U(()=>_o(a));r(!1),m&&(_(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${We} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${ce} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${rs} />
      <${He} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${ce} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${me().map(m=>({id:m.id,label:m.name}))} />
      <${O} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${le} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var Cu=["Mo","Di","Mi","Do","Fr","Sa","So"],Cl=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],_s=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),Il=e=>(x("companies",e)||{}).brandColor||"var(--ink-2)";function Ga(e){let t=x("customers",e.customerId);return t?Y(t):e.contactName||""}function Nl(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===it())return n;let{start:a}=aa(e),s=Bs(a,it()),i=$l(a,it());return s===e.start&&i===e.date?`${n} ${Fa(e.timeZone,a)}`:`${n} ${Fa(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${V(i)}`:""})`}function Eu(e){let t=[...new Set([it(),...os,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${Fa(a,n)})${a===it()?", dieses Gerät":""}`}))}function zs({appointment:e,onClose:t}){let n=!x("appointments",e.id),[a,s]=C(()=>({...e})),[i,r]=C(!1),[o,c]=C(null),[m,u]=C(null),d=me(),p=w=>M=>s(S=>({...S,[w]:M})),f=y.customers.filter(w=>w.active!==!1||w.id===a.customerId).sort((w,M)=>Y(w).localeCompare(Y(M),"de")).map(w=>({id:w.id,label:Y(w),sub:[w.number,w.city].filter(Boolean).join(", "),search:`${w.firstName} ${w.lastName} ${w.contact} ${w.email}`}));function g(w){let M=x("companies",w),S=x("companies",a.companyId);s(H=>{let L={...H,companyId:w};if(!M)return L;let k=(B,G)=>!H[B]||S&&String(H[B])===String(S[G]||"");k("meetingProvider","meetingProvider")&&(L.meetingProvider=M.meetingProvider||""),k("meetingUrl","meetingUrl")&&(L.meetingUrl=M.meetingUrl||""),k("meetingDetails","meetingDetails")&&(L.meetingDetails=M.meetingDetails||""),M.meetingTimeZone&&(!H.timeZone||S&&H.timeZone===(S.meetingTimeZone||it()))&&(L.timeZone=M.meetingTimeZone);let T=x("customers",H.customerId);return T&&T.language||(L.language=M.language||"de"),L})}function h(w){let M=x("customers",w),S=x("customers",a.customerId);s(H=>({...H,customerId:w||"",attendees:!H.attendees||S&&H.attendees===S.email?M&&M.email||"":H.attendees,language:M&&M.language?M.language:H.language}))}function $(w){s(M=>{let S=T=>{let[B,G]=String(T||"0:0").split(":").map(Number);return B*60+G},H=Math.max(S(M.end)-S(M.start),15),L=Math.min(S(w)+H,1439),k=/^\d\d:\d\d$/.test(w)?`${String(Math.floor(L/60)).padStart(2,"0")}:${String(L%60).padStart(2,"0")}`:M.end;return{...M,start:w,end:k}})}async function b(){r(!0);let w=await U(()=>Lo(a));r(!1),w&&(_(n?"Termin angelegt":"Termin gespeichert","good"),n?u(w):t(w))}async function v(){if(!await oe({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${V(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Po(a.id),!0))&&(_("Termin gelöscht","good"),t())}if(m)return l`<${Tu} appointment=${m} justCreated onClose=${()=>t(m)} />`;let I=x("customers",a.customerId),D=x("appointments",a.id);return l`<${We} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${b}
    footer=${l`
      ${!n&&l`<${gt} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>u(D||a)},D&&D.status!=="done"&&{label:"Termin dokumentieren",icon:"edit",onClick:()=>Yi(D,t)},D&&D.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>Iu(D,t)},D&&D.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await U(()=>xs(D.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:v}]} />`}
      <span class="spacer"></span>
      <${E} onClick=${()=>t()}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${D&&D.status!=="planned"&&l`<${Ce} tone=${D.status==="done"?"good":"warn"}>
      ${D.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${D.outcome?l`<div class="pre notice-sub">${D.outcome}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${ce} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${g}
        placeholder="Unternehmen wählen" options=${d.map(w=>({id:w.id,label:w.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${Se} class="span-2" label="Kunde" htmlFor="appt-customer">
        <${Cn} id="appt-customer" options=${f} value=${a.customerId} placeholder="Kunde suchen (optional)"
          onChange=${h} onCreate=${w=>c({company:w})} createLabel="als Kunde anlegen" />
      <//>
      <${O} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${p("contactName")}
        placeholder=${I?ct(I)||Y(I):"Name"} hint="Für die Anrede in der Einladung" />
      <${O} class="span-6" label="Titel" value=${a.title} onInput=${p("title")}
        placeholder=${I?`Termin mit ${Y(I)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${He} class="span-2" label="Datum" value=${a.date} onInput=${p("date")} />
      <${O} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${$} />
      <${O} class="span-1" label="Ende" type="time" value=${a.end} onInput=${p("end")} />
      <${ce} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${p("timeZone")} options=${Eu(a.timeZone)}
        hint=${a.timeZone!==it()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&Bs(aa(a).start,it())!==a.start?`Bei dir: ${Bs(aa(a).start,it())} Uhr`:""} />
      <${Se} class="span-4" label="Art">
        <${St} label="Art des Termins" value=${a.kind} onChange=${p("kind")} options=${di} />
      <//>
      <${Se} class="span-2" label="Sprache der Einladung">
        <${St} label="Sprache der Einladung" value=${a.language||"de"} onChange=${p("language")} options=${vt} />
      <//>
      ${a.kind==="video"&&l`
        <${ce} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${p("meetingProvider")}
          placeholder="Bitte wählen" options=${On} />
        <${O} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${p("meetingUrl")} placeholder="https://…"
          hint=${!a.meetingUrl&&a.companyId?"Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.":""} />
        <${le} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${p("meetingDetails")} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind==="phone"&&l`<${O} class="span-6" label="Telefon" value=${a.location} onInput=${p("location")} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind==="onsite"&&l`<${O} class="span-6" label="Ort" value=${a.location} onInput=${p("location")} placeholder="Adresse oder Treffpunkt" />`}
      <${O} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${p("attendees")}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${le} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${p("agenda")} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${o&&l`<${ia} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${w=>h(w.id)} />`}
  <//>`}async function Yi(e,t){let n=await oe({title:"Termin dokumentieren",text:`${e.title}, ${V(e.date)} ${e.start} Uhr. Was wurde besprochen, was ist vereinbart? Der Eintrag erscheint in der Kundendokumentation.`,input:{label:"Ergebnis und nächste Schritte",value:e.outcome||"",multiline:!0},confirmLabel:"Als stattgefunden speichern"});if(n===null)return;let a=await U(()=>xs(e.id,"done",n));a&&(_("Termin dokumentiert","good"),t&&t(a))}async function Iu(e,t){let n=await oe({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await U(()=>xs(e.id,"cancelled",n));a&&(_("Termin abgesagt","good"),t&&t(a))}async function Nu(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function El(e){return`${Ot(`Termin ${e.date} ${e.start.replace(":","-")} ${Ga(e)||e.title||""}`.trim())}.ics`}function Tu({appointment:e,onClose:t,justCreated:n}){let a=x("companies",e.companyId),s=x("customers",e.customerId),i=ve(()=>bl(e,{company:a,customer:s,settings:y.settings}),[e.id,e.updatedAt]),[r,o]=C(e.attendees||s&&s.email||""),[c,m]=C(i.subject),[u,d]=C(i.body),[p,f]=C(""),g=typeof navigator<"u"&&!!navigator.canShare,h=()=>new Blob([vl(e,{summary:c,description:u})],{type:"text/calendar;charset=utf-8"});function $(){at(h(),El(e))}async function b(){let D=await Nu(`${c}

${u}`);_(D?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",D?"good":"bad")}function v(){let D=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(u)}`;Gn(),window.location.href=D}async function I(){f("share"),await U(async()=>{let D=new File([h()],El(e),{type:"text/calendar"});if(!navigator.canShare({files:[D]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[D],title:c,text:u})}catch(w){if(!w||w.name!=="AbortError")throw w}}),f("")}return l`<${We} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${E} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${Us(e.date)}, ${Nl(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${na(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${Ce} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${O} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${O} class="span-6" label="Betreff" value=${c} onInput=${m} />
      <${le} class="span-6" label="Text" value=${u} onInput=${d} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${E} icon="calendar" onClick=${$}>Kalenderdatei herunterladen<//>
      <${E} icon="copy" onClick=${b}>Text kopieren<//>
      <${E} icon="mail" onClick=${v} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${g&&l`<${E} icon="send" busy=${p==="share"} onClick=${I}>Teilen<//>`}
    </div>
  <//>`}function Ru(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function Au({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${Il(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${Ga(e)?` (${Ga(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function Tl({params:e}){ge();let t=q(),[n,a]=C("month"),[s,i]=C(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=C(()=>e&&e.open&&x("appointments",e.open)?x("appointments",e.open):null),[c,m]=C(!1),[u,d]=C(""),p=xe(),f=_s(y.appointments.filter(Ge)).filter(D=>!u||Re(u,D.title,Ga(D),D.agenda,D.outcome)),g=new Map;for(let D of f)g.has(D.date)||g.set(D.date,[]),g.get(D.date).push(D);function h(D){let w=p||(me().length===1?me()[0]:me()[0]);o(ls(w,{date:D||t}))}let $=D=>i(w=>{let M=new Date(Date.UTC(w.y,w.m+D,1));return{y:M.getUTCFullYear(),m:M.getUTCMonth()}}),b=Ru(s.y,s.m),v=f.filter(D=>D.date>=t),I=f.filter(D=>D.date<t).reverse();return l`
    <${we} title="Termine" sub=${p?`Termine über ${p.name}`:"Alle Termine aller Unternehmen"}>
      <${St} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${E} variant="primary" icon="plus" onClick=${()=>h(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${E} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>$(-1)} />
        <h2 class="cal-title">${Cl[s.m]} ${s.y}</h2>
        <${E} small icon="chevronRight" title="Nächster Monat" onClick=${()=>$(1)} />
        <${E} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${me().map(D=>l`<span class="cal-legend-item"><i style=${`background:${D.brandColor}`}></i>${D.shortName||D.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${Cl[s.m]} ${s.y}`}>
        ${Cu.map(D=>l`<div class="cal-wd" role="columnheader">${D}</div>`)}
        ${b.map(D=>{let w=g.get(D.iso)||[];return l`<div role="gridcell" class=${`cal-day${D.inMonth?"":" is-out"}${D.iso===t?" is-today":""}`}
            onClick=${()=>h(D.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(D.iso.slice(8,10))}</span>
            ${w.slice(0,3).map(M=>l`<${Au} key=${M.id} a=${M} onOpen=${o} />`)}
            ${w.length>3&&l`<button type="button" class="cal-more" onClick=${M=>{M.stopPropagation(),a("list")}}>+${w.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${u} onInput=${D=>d(D.target.value)} />
        <${rn} label="Zeitraum" value=${c?"past":"next"} onChange=${D=>m(D==="past")}
          options=${[{id:"next",label:"Anstehend",count:v.length},{id:"past",label:"Vergangen",count:I.length}]} />
      </div>
      ${(c?I:v).length?l`<${Ls} items=${c?I:v} onOpen=${o} showCustomer />`:l`<${pe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kunden an.">
            <${E} variant="primary" icon="plus" onClick=${()=>h(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${zs} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function Ls({items:e,onOpen:t,showCustomer:n,compact:a}){let s=q(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=Kn[r.status]||Kn.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Te(s,1)?"Morgen, ":""}${Us(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${Il(r.companyId)}`}>
            <span class="appt-time">${a?l`${V(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${ze} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&Ga(r),r.kind==="video"?na(r.meetingProvider)||"Videocall":(di.find(m=>m.id===r.kind)||{}).label,r.timeZone!==it()?Nl(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Pe} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function Rl(){let[e,t]=C(null),n=q(),a=Te(n,14),s=_s(y.appointments.filter(Ge).filter(i=>i.status==="planned"&&i.date>=n&&i.date<=a)).slice(0,6);return s.length?l`<${Q} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${Ls} items=${s} onOpen=${t} showCustomer />
    ${e&&l`<${zs} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:null}async function Ps(e,t){let n=$t(e,t),a=await sa(Za(n));return at(a,n.fileName),{blob:a,model:n}}function Bu(e,t){let n=e.snapshot&&e.snapshot.company||x("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||x("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?Vt(e,Fe(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:V(e.issueDate,s),DUE:V(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:jn(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:jn(i,e.currency,s),CONTACT:ct(a)||Y(a),CUSTOMER:Y(a),SENDER:y.settings.userName?`${y.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function Uu(e){let n=nn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,mt.length)}function Ha(e,t){if(!(t>0))return 0;let n=y.settings.reminderDays||[7,14,21],a=nn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return mt.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function Al(e){return[...nn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function ra({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=Bu(e,t),[o,c]=C(()=>n==="reminder"?Uu(e.id):0),m=B=>n==="reminder"?((y.settings.reminderTemplates||{})[s]||{})[B]||{subject:"",body:""}:((y.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[u,d]=C(i),[p,f]=C(()=>ft(m(o).subject,r)),[g,h]=C(()=>ft(m(o).body,r)),[$,b]=C(""),[v,I]=C(null),D=typeof navigator<"u"&&!!navigator.canShare;function w(B){let G=Number(B);c(G),f(ft(m(G).subject,r)),h(ft(m(G).body,r))}async function M(){if(v)return v;let B=$t(e,t),F={blob:await sa(Za(B)),name:B.fileName};return I(F),F}async function S(){b("pdf"),await U(async()=>{let B=await M();at(B.blob,B.name)}),b("")}function H(){let B=`mailto:${encodeURIComponent(u.trim())}?subject=${encodeURIComponent(p)}&body=${encodeURIComponent(g)}`;Gn(),window.location.href=B}async function L(){b("share"),await U(async()=>{let B=await M(),G=new File([B.blob],B.name,{type:"application/pdf"});if(!navigator.canShare({files:[G]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[G],title:p,text:g})}catch(F){if(F&&F.name==="AbortError")return;throw F}}),b("")}async function k(){b("done");let B=await U(async()=>(n==="reminder"?await sl(e.id,o,p):t==="quotes"?await Tn(e.id,"sent"):await Nn(e.id,!0),!0));b(""),B&&(_(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let T=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${We} title=${T} onClose=${a} size="lg"
    footer=${l`
      <${E} onClick=${a}>Schließen<//>
      <${E} variant="primary" icon="check" busy=${$==="done"} onClick=${k}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${Ce} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${ce} class="span-2" label="Stufe" value=${o} onChange=${w}
        options=${mt.map(B=>({id:B.id,label:B.label}))} />`}
      <${O} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${u} onInput=${d}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${O} class="span-6" label="Betreff" value=${p} onInput=${f} />
      <${le} class="span-6" label="Text" value=${g} onInput=${h} rows=${10} />
    </div>
    <div class="send-steps">
      <${E} icon="download" busy=${$==="pdf"} onClick=${S}>PDF herunterladen<//>
      <${E} icon="mail" onClick=${H} disabled=${!u.trim()}>E-Mail-Programm öffnen<//>
      ${D&&l`<${E} icon="send" busy=${$==="share"} onClick=${L}>Mit PDF teilen<//>`}
    </div>
  <//>`}var Mu=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],_u=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],zu=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],Lu=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],Pu=e=>.86+e*37%7/100,oa=(e,t,n)=>{let a=Pu(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:At(e,a,s)};function Os(){return io(Ou)}async function Ou(){if(y.invoices.length||y.customers.length||y.expenses.length||y.services.length)throw new $e("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=me();if(!e.length)throw new $e("Lege zuerst ein Unternehmen an.");let t=p=>e[p%e.length],n=q(),a=[];for(let p of Mu)a.push(await ws(Xt(p)));let s=[];for(let p of _u)s.push(await ks(en({...p,currency:"USD"})));let i=[];for(let[p,f,g,h,$,b,v]of zu){let I=t(g),D=a[h],w=Lt(n.slice(0,8)+"01",-p,f);w>n&&(w=n);let M=D.currency||"USD",S=oa(M,p,w),H=$.map(([B,G])=>{let F=dt(s[B],I),z=M==="EUR"?Math.round(F.priceCents*S.usdToEur/500)*500:F.priceCents;return{...F,qty:G,priceCents:z}}),L={...yt(I),customerId:D.id,issueDate:w,serviceDate:w,paymentTermDays:D.paymentTermDays!=null&&D.paymentTermDays!==""?Number(D.paymentTermDays):14,currency:M,language:D.language||I.language,items:H,discount:{type:"pct",value:v},fx:S},k=await Ia(L);i.push({inv:k,pay:b,back:p}),(p>0||b!=="none")&&await Nn(k.id,!0);let T=k.totals.totalCents;if(b==="full"){let B=Te(w,9+f%9);await Na(k.id,{date:B>n?n:B,amountCents:T,method:"Überweisung",note:""})}else if(b==="half"){let B=Te(w,12);await Na(k.id,{date:B>n?n:B,amountCents:Math.round(T/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(p,f,g)=>{let h=Lt(n.slice(0,8)+"01",-g,14),$=p.currency||"USD",b=oa($,g,h),v=dt(s[f],r);return Ia({...yt(r),customerId:p.id,issueDate:h,serviceDate:h,currency:$,language:p.language||"de",paymentTermDays:14,items:[{...v,priceCents:$==="EUR"?Math.round(v.priceCents*b.usdToEur/500)*500:v.priceCents}],fx:b})},c=await o(a[3],2,4);await Es(c.id,"Beispiel: doppelt ausgestellt");let m=await o(a[4],6,3);await Is(m.id,"Beispiel: Leistung wurde nicht erbracht."),await Ds({...yt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...dt(s[4],t(1)),qty:6}],fx:oa("USD",0,n)});let u=await Ta({...Fn(t(0)),customerId:a[1].id,issueDate:Te(n,-6),validUntil:Te(n,24),currency:"EUR",language:"de",fx:oa("EUR",0,n),items:[{...dt(s[0],t(0)),priceCents:42e4},{...dt(s[1],t(0)),qty:6,priceCents:85e3}]});await Tn(u.id,"sent");let d=await Ta({...Fn(t(1)),customerId:a[5].id,issueDate:Te(n,-20),validUntil:Te(n,10),currency:"USD",language:"en",fx:oa("USD",0,n),items:[{...dt(s[5],t(1))}]});await Tn(d.id,"accepted");for(let[p,f,g,h,$,b,v,I,D]of Lu){let w=Te(n,-p);await ln(ya({companyId:t(f).id,vendor:g,category:h,description:$,currency:b,invoiceDate:w,paymentDate:Te(w,2)>n?n:Te(w,2),netCents:v,taxCents:I,totalCents:v+I,paymentMethod:D,fx:oa(b,Math.floor(p/30),w)}))}return await Ra({...qn(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[dt(s[1],t(0)),dt(s[2],t(0))]}),await Ra({...qn(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:Lt(n,4),items:[{...dt(s[3],t(0)),qty:12,priceCents:3e3}]}),await W(async p=>{await p.setting("demoLoaded",!0),await p.setting("changesSinceBackup",0)}),{invoices:i.length}}async function Bl(){let e=new Set(["companies","assets","settings"]);await $n(wt,async t=>{for(let n of wt)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await vn(),xa()}function Ku(){let e=me(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:y.customers.length>0,label:"Ersten Kunden anlegen",text:"Kunden gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:y.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:y.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=C(!1);async function i(){s(!0);let r=await U(async()=>(await Os(),!0));s(!1),r&&_("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
    <h1>Willkommen bei BBC Finance</h1>
    <p class="lead">Vier Schritte, dann steht hier deine Finanzübersicht.</p>
    <ol class="steps">
      ${n.map((r,o)=>l`<li class=${r.done?"is-done":""}>
        <a href=${r.href}>
          <span class="step-mark">${r.done?l`<${ae} name="check" size=${16} />`:o+1}</span>
          <span class="step-text"><strong>${r.label}</strong><span>${r.text}</span></span>
          <${ae} name="chevronRight" size=${16} />
        </a>
      </li>`)}
    </ol>
    <p class="onboarding-alt">
      Erst einmal ansehen, wie es mit Daten aussieht?${" "}
      <button type="button" class="link-btn" disabled=${a} onClick=${i}>${a?"Beispieldaten werden geladen …":"Beispieldaten laden"}</button>.${" "}
      Schon ein Backup vorhanden?${" "}<a href="#/settings">Backup einspielen</a>.
    </p>
  </section>`}var Xi=e=>[...e].sort((t,n)=>N(n)-N(t));function Ul(){ge();let e=q(),t=xe(),n=Et(),a=Gt(),s=me(),i=ve(()=>{let S=Qr(12,e),H=lt("year",e);return{kpi:ll(a,n,e),months:S,series:Ma(a,{companyId:n,months:S}),byCustomer:_a(a,{companyId:n,range:H}),byService:La(a,{companyId:n,range:H}),byCompany:za(a,{range:H}),rec:un(a,{companyId:n},e)}},[y.version,n,e]),r=ie();if(!(y.invoices.length||y.expenses.length||y.customers.length||y.services.length))return l`<${Ku} />`;let{kpi:c}=i,m=Nt(e.slice(0,7)),u=i.rec.filter(S=>S.status==="overdue"),d=i.rec.filter(S=>S.status!=="overdue"&&S.inv.dueDate&&S.inv.dueDate<=Te(e,7)),p=y.recurring.filter(Ge).filter(S=>Yn(S,e)),f=y.expenses.filter(S=>S.status==="review"&&(Ge(S)||!S.companyId)),g=y.invoices.filter(Ge).filter(S=>S.status==="draft"),h=g.filter(S=>S.number),$=g.filter(S=>!S.number),b=y.invoices.filter(Ge).filter(S=>S.clarify&&S.status!=="draft"),v=y.quotes.filter(Ge).filter(S=>["open","sent"].includes(kn(S,e))&&S.validUntil&&S.validUntil<=Te(e,7)),I=!t&&s.length>1,D=I?s.map(S=>({id:S.id,label:S.shortName||S.name,color:Aa(S.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],w=i.series.map(S=>({key:S.key,label:_n(S.key),title:Nt(S.key),values:I?S[`byCompany${ie()}`]:{rev:N(S,"revenue")}})),M={columns:["Monat",...I?D.map(S=>S.label):[],`Umsatz (${ie()})`,`Umsatz (${ie()==="USD"?"EUR":"USD"})`],rows:i.series.map(S=>[Nt(S.key),...I?D.map(H=>X(S[`byCompany${ie()}`][H.id]||0)):[],X(N(S,"revenue")),Ue(ke(S,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${m}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${X(N(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${Ue(ke(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${X(N(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <div class="stat-row">
      <${Be} label="Umsatz Quartal" value=${X(N(c.quarter))} sub=${`≈ ${Ue(ke(c.quarter))}`} />
      <${Be} label="Umsatz Jahr" value=${X(N(c.year))} sub=${`≈ ${Ue(ke(c.year))}`} />
      <${Be} label="Offene Rechnungen" value=${X(N(c.open))} sub=${`${c.open.count} offen, ≈ ${Ue(ke(c.open))}`} href="#/invoices?status=open" />
      <${Be} label="Überfällig" value=${X(N(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${Ue(ke(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Be} label="Bezahlt dieses Jahr" value=${X(N(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Be} label="Rechnung im Schnitt" value=${X(N(c.average))} sub=${`≈ ${Ue(ke(c.average))}`} />
      <${Be} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${Ua} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${ie()}, nach Rechnungsdatum`} series=${D} table=${M}>
          <${Ba} groups=${w} series=${D} mode="stacked"
            format=${S=>X(S)} axisFormat=${S=>Da(S,ie())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${Q} title="Zu erledigen" class="dash-side">
        ${u.length+d.length+p.length+f.length+g.length+v.length+b.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${u.slice(0,5).map(S=>l`<li key=${S.inv.id}>
              <a href=${`#/invoices/${S.inv.id}`}>
                <span class="todo-icon tone-bad"><${ae} name="bad" /></span>
                <span class="todo-text"><strong>${S.inv.number}</strong> ${Me(S.inv)}
                  <span class="cell-sub">seit ${S.overdueDays} ${S.overdueDays===1?"Tag":"Tagen"} überfällig${Ha(S.inv,S.overdueDays)?`, ${(mt.find(H=>H.id===Ha(S.inv,S.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${Z(S.openCents,S.inv.currency)}</span>
              </a>
            </li>`)}
            ${u.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${u.length-5} weitere überfällige Rechnungen</a></li>`}
            ${d.slice(0,3).map(S=>l`<li key=${S.inv.id}>
              <a href=${`#/invoices/${S.inv.id}`}>
                <span class="todo-icon tone-warn"><${ae} name="clock" /></span>
                <span class="todo-text"><strong>${S.inv.number}</strong> ${Me(S.inv)}
                  <span class="cell-sub">fällig am ${V(S.inv.dueDate)}</span></span>
                <span class="todo-amount">${Z(S.openCents,S.inv.currency)}</span>
              </a>
            </li>`)}
            ${b.slice(0,5).map(S=>l`<li key=${`c-${S.id}`}><a href=${`#/invoices/${S.id}`}>
              <span class="todo-icon tone-warn"><${ae} name="warn" /></span>
              <span class="todo-text"><strong>${S.number}</strong> ${Me(S)}
                <span class="cell-sub">Klärung nötig: ${S.clarify.note}</span></span></a></li>`)}
            ${b.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${ae} name="warn" /></span>
              <span class="todo-text"><strong>${b.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${h.slice(0,5).map(S=>l`<li key=${S.id}><a href=${`#/invoices/${S.id}/edit`}>
              <span class="todo-icon tone-warn"><${ae} name="edit" /></span>
              <span class="todo-text"><strong>${S.number}</strong> ${Me(S)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${p.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${ae} name="repeat" /></span>
              <span class="todo-text"><strong>${p.length} wiederkehrende ${p.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${f.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${ae} name="expense" /></span>
              <span class="todo-text"><strong>${f.length} ${f.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${$.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${ae} name="edit" /></span>
              <span class="todo-text"><strong>${$.length} ${$.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${v.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${ae} name="quote" /></span>
              <span class="todo-text"><strong>${v.length} ${v.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
          </ul>`}
      <//>
    </div>

    <${Rl} />

    <div class="dash-lists">
      <${Q} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${Zt} rows=${Xi(i.byCustomer).map(S=>({key:S.id,label:S.name,value:N(S),display:X(N(S)),href:`#/customers/${S.id}`}))} />
      <//>
      <${Q} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${Zt} rows=${Xi(i.byService).map(S=>({key:S.key,label:S.name,value:N(S),display:X(N(S))}))} />
      <//>
      ${!t&&l`<${Q} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${Zt} rows=${Xi(i.byCompany).map(S=>({key:S.id,label:S.name,value:N(S),display:X(N(S)),color:Aa(S.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${ie()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}function la({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
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
  </div>`}async function Ks(e){let t=Fe(e.id),n=nn(e.id),a=e.creditNoteId?x("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${Z(Ie(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await oe({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await U(()=>Li(e.id));return r?(_(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var er=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function Ml({params:e}){ge();let[t,n]=C(""),[a,s]=C(e&&er.some(v=>v.id===e.status)?e.status:"all"),[i,r]=C("all"),[o,c]=C(null),m=!xe(),u=q(),d=ve(()=>y.invoices.filter(Ge).map(v=>({inv:v,status:Rs(v)})),[y.version,y.settings.activeCompany]),p=lt(i,u),f=d.filter(v=>i==="all"||Pt(v.inv.issueDate,p)),g=f.filter(v=>er.find(I=>I.id===a).test(v.status,v.inv)).filter(v=>Re(t,v.inv.number,Me(v.inv),(x("companies",v.inv.companyId)||{}).name,v.inv.totals?(v.inv.totals.totalCents/100).toFixed(2):"",v.inv.totals?(v.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",(v.inv.items||[]).map(I=>I.name).join(" "))),h=g.reduce((v,I)=>{if(I.status==="draft"||I.status==="cancelled")return v;let D=I.inv.totals?I.inv.totals.totalCents:0;return v.total+=nt(D,I.inv.currency,I.inv.fx)||0,v.open+=nt(ta(I.inv),I.inv.currency,I.inv.fx)||0,v},{total:0,open:0}),$=[{key:"number",label:"Nummer",class:"nw",sort:v=>v.inv.number||"",render:v=>l`<span class="cell-main">${v.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:v=>Me(v.inv),render:v=>Me(v.inv)},...m?[{key:"company",label:"Unternehmen",sort:v=>(x("companies",v.inv.companyId)||{}).name||"",render:v=>l`<${Pe} id=${v.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:v=>v.inv.issueDate,render:v=>V(v.inv.issueDate)},{key:"due",label:"Fällig",sort:v=>v.inv.dueDate||"",render:v=>v.status==="overdue"?l`<span class="tone-bad">${V(v.inv.dueDate)}</span><div class="cell-sub">seit ${Mn(v.inv.dueDate,u)} Tagen</div>`:V(v.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:v=>nt(v.inv.totals?v.inv.totals.totalCents:0,v.inv.currency,v.inv.fx)||0,render:v=>l`<${Ht} doc=${v.inv} />`},{key:"open",label:"Offen",align:"right",sort:v=>nt(ta(v.inv),v.inv.currency,v.inv.fx)||0,render:v=>{let I=ta(v.inv);return I?Z(I,v.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:v=>v.status,render:v=>l`<${Pa} inv=${v.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:v=>{let I=Al(v.inv.id),D=Ha(v.inv,Mn(v.inv.dueDate,u)),w=M=>(mt.find(S=>S.id===M)||{}).label||"";return l`<${E} small variant=${D?"primary":"default"} icon="clock" onClick=${()=>c(v.inv)}>${D?w(D):"Erinnern"}<//>
          <span class="cell-sub nw">${I?`Zuletzt: ${w(I.level)}, ${V(I.date)}`:"Noch keine versendet"}</span>`}}]:[]],b=g.length?[`${g.length} ${g.length===1?"Beleg":"Belege"}`,"",...m?[""]:[],"","",l`<span class="strong">${X(h.total)}</span>`,l`<span class="strong">${X(h.open)}</span>`,l`<span class="muted-text">in ${ie()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${we} title="Rechnungen">
      <${E} variant="primary" icon="plus" onClick=${()=>j("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${y.invoices.length>0&&l`<div class="filters">
      <${ht} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${rn} label="Status" value=${a} onChange=${s}
        options=${er.map(v=>({id:v.id,label:v.label,count:f.filter(I=>v.test(I.status,I.inv)).length})).filter(v=>v.id!=="clarify"||v.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${v=>r(v.target.value)}>
        ${gn.filter(v=>v.id!=="custom").map(v=>l`<option value=${v.id}>${v.label}</option>`)}
      </select>
    </div>`}
    <${rt} columns=${$} rows=${g} rowKey=${v=>v.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${b}
      rowClass=${v=>v.inv.clarify&&v.status!=="draft"?"row-clarify":""}
      onRowClick=${v=>j(v.inv.status==="draft"?`/invoices/${v.inv.id}/edit`:`/invoices/${v.inv.id}`)}
      empty=${y.invoices.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${pe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${E} variant="primary" icon="plus" onClick=${()=>j("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${ra} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function tr({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?Fe(e.id).filter(S=>S.id!==n.id):Fe(e.id),o=e.totals?e.totals.totalCents:0,c=i?Ie(r):s?Math.max(o-Ie(r),0):ta(e),m=y.settings.paymentMethods||[],[u,d]=C(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:q(),amountCents:c,method:m[0]||"",note:""}),[p,f]=C(!1),[g,h]=C(""),[$,b]=C(!1),v=S=>H=>d(L=>({...L,[S]:H})),I=i?"Erstattung":"Zahlung",D=!i&&!s?c-(Number(u.amountCents)||0):0,w=u.method&&!m.includes(u.method)?[u.method,...m]:m;async function M(){b(!0);let S=D>0&&p?g.trim()||`Differenz von ${Z(D,e.currency)} offen (eingegangen: ${Z(u.amountCents,e.currency)} am ${V(u.date)}).`:"",H=await U(()=>s?Go(n.id,u):i?jo(e.id,u):Na(e.id,{...u,clarify:S}));b(!1),H&&(s?_(`${I} geändert`,"good"):i?_("Erstattung eingetragen","good"):D>0?_(S?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):_("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${We} title=${`${I} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${M}
    footer=${l`<${E} onClick=${a}>Abbrechen<//><${E} variant="primary" type="submit" busy=${$}>${s?"Änderung speichern":`${I} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${Z(c,e.currency)}.`:s?`Höchstens ${Z(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${Z(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${Ae} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${u.amountCents} onChange=${v("amountCents")} min=${0} />
      <${He} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${u.date} onInput=${v("date")} max=${q()} />
      <${ce} class="span-6" label="Zahlungsart" value=${u.method} onChange=${v("method")} options=${w} placeholder="Keine Angabe" />
      <${O} class="span-6" label="Notiz" value=${u.note} onInput=${v("note")} />
    </div>
    ${D>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${Z(D,e.currency)}</strong> offen.</p>
      <${Ve} label="Differenz muss geklärt werden" checked=${p} onChange=${f}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${p&&l`<${le} label="Was ist zu klären?" value=${g} onInput=${h} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function nr(e){let t=$t(e.prev.doc,"invoices"),n=await sa(Za(t));at(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${V(Un(new Date(e.at)))}).pdf`))}function ar({entityId:e}){let[t,n]=C(""),a=y.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await U(()=>nr(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${qe(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${E} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function _l({id:e}){ge();let t=x("invoices",e),[n,a]=C(null),[s,i]=C(t&&t.internalNotes||""),[r,o]=C("");if(!t)return l`<${pe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${E} onClick=${()=>j("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>j(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=Rs(t),m=[...Fe(e)].sort((A,te)=>A.date<te.date?-1:1),u=[...nn(e)].sort((A,te)=>A.createdAt<te.createdAt?-1:1),d=Ie(m),p=ta(t),f=t.type==="credit_note",g=$t(t,"invoices"),h=t.relatedInvoiceId?x("invoices",t.relatedInvoiceId):null,$=t.creditNoteId?x("invoices",t.creditNoteId):null,b=t.quoteId?x("quotes",t.quoteId):null,v=!f&&p>0,I=!f&&t.status==="credited"&&d>0,D=!f&&["issued","sent"].includes(t.status),w=t.fx?Number(t.fx.usdToEur):null;async function M(){o("pdf"),await U(()=>Ps(t,"invoices")),o("")}async function S(){if(d>0){_("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let A=await oe({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(A===null)return;await U(async()=>(await Es(e,A),!0))&&_("Rechnung storniert","good")}async function H(){if(!await oe({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${m.length?` Die eingetragenen Zahlungen (${Z(d,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await U(()=>Zo(e))&&(_(`${t.number} ist wieder ein Entwurf`,"good"),j(`/invoices/${e}/edit`))}async function L(){if(!await oe({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await U(()=>Jo(e))&&_("Stornierung zurückgenommen","good")}async function k(){let A=f?t:$,te=f?h:t;if(!A||!await oe({title:`Gutschrift ${A.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${te?` Die Rechnung ${te.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let R=await U(()=>Oi(A.id));R&&(_(`Gutschrift ${R.creditNumber} zurückgenommen`,"good"),f&&j(R.invoiceId?`/invoices/${R.invoiceId}`:"/invoices",{replace:!0}))}async function T(){await Ks(t)&&j("/invoices",{replace:!0})}async function B(){let A=await oe({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(A===null)return;await U(()=>Ho(e,A))&&_("Klärung vermerkt","good")}async function G(){let A=await oe({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${p>0?` Offen bleiben ${Z(p,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(A===null)return;await U(()=>Wo(e,A))&&_("Klärung erledigt","good")}async function F(){let A=await oe({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${Z(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${d>0?` Zu dieser Rechnung sind bereits ${Z(d,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(A===null)return;let te=await U(()=>Is(e,A));te&&(_(`Gutschrift ${te.number} erstellt`,"good"),j(`/invoices/${te.id}`))}async function z(A){if(!await oe({title:"Zahlung löschen?",text:`Die Zahlung über ${Z(A.amountCents,t.currency)} vom ${V(A.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await U(async()=>(await Qo(A.id),!0))&&_("Zahlung gelöscht","good")}async function ee(){await U(async()=>(await Cs("invoices",e,s),!0))&&_("Notiz gespeichert","good")}return l`
    <${we} title=${l`${f?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${Pa} inv=${t} /> <span class="head-meta">${Me(t)}</span>`}>
      <${E} icon="download" busy=${r==="pdf"} onClick=${M}>PDF<//>
      ${!f&&t.status==="issued"&&l`<${E} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${E} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${v&&l`<${E} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${gt} items=${[!f&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>U(()=>Nn(e,!0))},!f&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!f&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>U(()=>Nn(e,!1))},!f&&p>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},D&&{label:"Zurück in den Entwurf",icon:"edit",onClick:H},!f&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:B},!f&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>j(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:L},(f||t.status==="credited"&&$)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:f,onClick:k},D&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:F},D&&{label:"Stornieren",icon:"x",danger:!0,onClick:S},!f&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:T}]} />
    <//>

    ${t.clarify&&l`<${Ce} tone="warn" action=${l`<div class="notice-actions">
        <${E} small onClick=${B}>Ändern<//>
        <${E} small variant="primary" icon="check" onClick=${G}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${qe(t.clarify.at)} · ${p>0?`offen sind ${Z(p,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${Ce} tone="warn" action=${l`<${E} small icon="undo" onClick=${L}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${qe(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${$&&l`<${Ce} tone="info" action=${l`<${E} small onClick=${()=>j(`/invoices/${$.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${$.number} erstellt.
    <//>`}
    ${h&&l`<${Ce} tone="info" action=${l`<${E} small onClick=${()=>j(`/invoices/${h.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${h.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${la} model=${g} />
      </div>
      <aside class="split-side">
        <${Q} title="Stand">
          <${on} rows=${[["Unternehmen",l`<${Pe} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Me(t)}</a>`],["Gesamtbetrag",l`<${Ht} doc=${t} />`],!f&&["Bezahlt",Z(d,t.currency)],!f&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${Z(p,t.currency)}</span>`],!f&&t.dueDate&&["Fällig am",l`${V(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${Mn(t.dueDate,q())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",qe(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",qe(t.firstFinalizedAt)],t.sentAt&&["Versendet",qe(t.sentAt)],b&&["Aus Angebot",l`<a href=${`#/quotes/${b.id}`}>${b.number}</a>`]]} />
        <//>

        ${!f&&l`<${Q} title="Zahlungen" action=${v?l`<${E} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:I&&l`<${E} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${m.length?l`<ul class="plain-list">
                ${m.map(A=>l`<li class="row-between" key=${A.id}>
                  <span><span class="strong">${Z(A.amountCents,t.currency)}</span>
                    <span class="cell-sub">${A.amountCents<0?"Erstattung, ":""}${V(A.date)}${A.method?`, ${A.method}`:""}${A.note?` – ${A.note}`:""}</span></span>
                  <span class="row-actions">
                    <${E} variant="ghost" small icon="edit" title=${A.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:A})} />
                    <${E} variant="ghost" small icon="trash" title=${A.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>z(A)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${u.length>0&&l`<${Q} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${u.map(A=>l`<li class="row-between" key=${A.id}>
              <span>${(mt.find(te=>te.id===A.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${V(A.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${Q} title="Wechselkurs">
          ${w?l`<p class="strong">1 USD = ${Qn(w)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${V(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${Q} title="Interne Notiz">
          <${le} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${E} small variant="primary" onClick=${ee}>Notiz speichern<//></div>`}
        <//>

        <${Q} title="Verlauf"><${ar} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${tr} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${tr} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${tr} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${ra} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${ra} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}var zl=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function Ll(){ge();let[e,t]=C(""),[n,a]=C("all"),s=!xe(),i=q(),r=ve(()=>y.quotes.filter(Ge).map(m=>({quote:m,status:kn(m,i)})),[y.version,y.settings.activeCompany]),o=r.filter(m=>zl.find(u=>u.id===n).test(m.status)).filter(m=>Re(e,m.quote.number,Me(m.quote),(m.quote.items||[]).map(u=>u.name).join(" "))),c=[{key:"number",label:"Nummer",class:"nw",sort:m=>m.quote.number||"",render:m=>l`<span class="cell-main">${m.quote.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:m=>Me(m.quote),render:m=>Me(m.quote)},...s?[{key:"company",label:"Unternehmen",render:m=>l`<${Pe} id=${m.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:m=>m.quote.issueDate,render:m=>V(m.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:m=>m.quote.validUntil||"",render:m=>V(m.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:m=>nt(m.quote.totals?m.quote.totals.totalCents:0,m.quote.currency,m.quote.fx)||0,render:m=>l`<${Ht} doc=${m.quote} />`},{key:"status",label:"Status",sort:m=>m.status,render:m=>l`<${Oa} quote=${m.quote} />`}];return l`
    <${we} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung.">
      <${E} variant="primary" icon="plus" onClick=${()=>j("/quotes/new")}>Neues Angebot<//>
    <//>
    ${y.quotes.length>0&&l`<div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Nummer, Kunde, Leistung" />
      <${rn} label="Status" value=${n} onChange=${a}
        options=${zl.map(m=>({id:m.id,label:m.label,count:r.filter(u=>m.test(u.status)).length}))} />
    </div>`}
    <${rt} columns=${c} rows=${o} rowKey=${m=>m.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${m=>j(m.quote.status==="draft"?`/quotes/${m.quote.id}/edit`:`/quotes/${m.quote.id}`)}
      empty=${y.quotes.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${pe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${E} variant="primary" icon="plus" onClick=${()=>j("/quotes/new")}>Erstes Angebot schreiben<//>
          <//>`} />
  `}function Pl({id:e}){ge();let t=x("quotes",e),[n,a]=C(null),[s,i]=C(t&&t.internalNotes||""),[r,o]=C("");if(!t)return l`<${pe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${E} onClick=${()=>j("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>j(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=kn(t,q()),m=$t(t,"quotes"),u=t.invoiceId?x("invoices",t.invoiceId):null,d=["open","sent","expired"].includes(c);async function p(){o("pdf"),await U(()=>Ps(t,"quotes")),o("")}async function f($,b){await U(async()=>(await Tn(e,$),!0))&&_(b,"good")}async function g(){if(!await oe({title:"In Rechnung umwandeln?",text:`Aus dem Angebot ${t.number} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let b=await U(()=>tl(e));o(""),b&&(_("Rechnungsentwurf angelegt","good"),j(`/invoices/${b.id}/edit`))}async function h(){await U(async()=>(await Cs("quotes",e,s),!0))&&_("Notiz gespeichert","good")}return l`
    <${we} title=${`Angebot ${t.number}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${Oa} quote=${t} /> <span class="head-meta">${Me(t)}</span>`}>
      <${E} icon="download" busy=${r==="pdf"} onClick=${p}>PDF<//>
      ${c==="open"&&l`<${E} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${!u&&c!=="declined"&&l`<${E} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${g}>In Rechnung umwandeln<//>`}
      <${gt} items=${[d&&{label:"Als angenommen markieren",icon:"check",onClick:()=>f("accepted","Angebot angenommen")},d&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>f("declined","Angebot abgelehnt")},c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!u&&{label:"Wieder öffnen",icon:"undo",onClick:()=>f("open","Angebot wieder geöffnet")},{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>j(`/quotes/new?copy=${e}`)}]} />
    <//>

    ${u&&l`<${Ce} tone="info" action=${l`<${E} small onClick=${()=>j(`/invoices/${u.id}${u.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${u.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${u.number}`}.
    <//>`}
    ${c==="expired"&&l`<${Ce} tone="warn">Dieses Angebot ist seit dem ${V(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main"><${la} model=${m} /></div>
      <aside class="split-side">
        <${Q} title="Stand">
          <${on} rows=${[["Unternehmen",l`<${Pe} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Me(t)}</a>`],["Angebotssumme",l`<${Ht} doc=${t} />`],["Gültig bis",V(t.validUntil)],["Erstellt",qe(t.finalizedAt)],t.sentAt&&["Versendet",qe(t.sentAt)],t.decidedAt&&["Entschieden",qe(t.decidedAt)]]} />
        <//>
        <${Q} title="Interne Notiz">
          <${le} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${E} small variant="primary" onClick=${h}>Notiz speichern<//></div>`}
        <//>
        <${Q} title="Verlauf"><${ar} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${ra} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
  `}function sr({service:e,onClose:t,onSaved:n}){let a=!e||!x("services",e.id),[s,i]=C(()=>({...e||en()})),[r,o]=C(!1),c=p=>f=>i(g=>({...g,[p]:f})),m=y.settings.serviceCategories||[],u=Pn.includes(s.unit)||!s.unit?Pn:[...Pn,s.unit];async function d(){o(!0);let p=await U(()=>ks(s));o(!1),p&&(_(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(p),t())}return l`<${We} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${d}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${O} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${O} class="span-2" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${le} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${le} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${Ae} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${ce} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${Xe} />
      <${ce} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${u} />
      <${Ae} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${Ae} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${ce} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${m.includes(s.category)||!s.category?m:[...m,s.category]} />
      <${ce} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${me().map(p=>({id:p.id,label:p.name}))} />

      <div class="span-3"><${Ve} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${Ve} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function Ol(){ge();let[e,t]=C(""),[n,a]=C(""),[s,i]=C(null),r=Et(),o=y.services.filter(d=>r&&d.companyId&&d.companyId!==r||n&&d.category!==n?!1:Re(e,d.name,d.internalName,d.description,d.invoiceText,d.category)),c=[...new Set(y.services.map(d=>d.category).filter(Boolean))].sort((d,p)=>d.localeCompare(p,"de"));async function m(d){if(!await oe({title:"Leistung löschen?",text:`„${d.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Oo(d.id),!0))&&_("Leistung gelöscht","good")}let u=[{key:"name",label:"Leistung",sort:d=>d.name,render:d=>l`<div class="cell-main">${d.name}${d.active===!1&&l` <${ze} tone="mute">Inaktiv<//>`}</div>
        ${(d.internalName||d.invoiceText)&&l`<div class="cell-sub clamp-1">${d.internalName||d.invoiceText}</div>`}`},{key:"category",label:"Kategorie",sort:d=>d.category,render:d=>d.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:d=>(x("companies",d.companyId)||{}).name||"",render:d=>{let p=x("companies",d.companyId);return p?l`<span class="co-tag"><${vs} company=${p} />${p.shortName||p.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:d=>d.recurring?1:0,render:d=>d.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:d=>d.unit},{key:"tax",label:"Steuer",align:"right",render:d=>d.taxRate!=null&&d.taxRate!==""?pt(d.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:d=>d.priceCents,render:d=>Z(d.priceCents,d.currency)},{key:"actions",label:"",align:"right",render:d=>l`<${E} variant="ghost" small icon="trash" title=${`${d.name} löschen`} onClick=${()=>m(d)} />`}];return l`
    <${we} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <${E} variant="primary" icon="plus" onClick=${()=>i(en({companyId:""}))}>Neue Leistung<//>
    <//>
    ${y.services.length>0&&l`<div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${c.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${d=>a(d.target.value)}>
        <option value="">Alle Kategorien</option>
        ${c.map(d=>l`<option value=${d}>${d}</option>`)}
      </select>`}
    </div>`}
    <${rt} columns=${u} rows=${o} initialSort=${{key:"name",dir:"asc"}} onRowClick=${d=>i(d)}
      empty=${y.services.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${pe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${E} variant="primary" icon="plus" onClick=${()=>i(en())}>Erste Leistung anlegen<//>
          <//>`} />
    ${s&&l`<${sr} service=${s} onClose=${()=>i(null)} />`}
  `}var Fu={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function Fs(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&Xe.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function qu(e,t,n){if(t&&t!=="new"){let r=x(e,t);return r?ye(r):null}let a=me(),s=xe()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&x("invoices",n.copy))i=Yo(x("invoices",n.copy));else if(e==="invoices")i=yt(s);else if(n.copy&&x("quotes",n.copy)){let r=x("quotes",n.copy),o=x("companies",r.companyId)||s;i=Fn(o,{validUntil:Te(q(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:va().id})),discount:ye(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=Fn(s,{validUntil:Te(q(),30)});return n.customer&&x("customers",n.customer)&&(i=Fs(i,x("customers",n.customer),x("companies",i.companyId),e)),i}function ir({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=C(null),r=Ne(null),o=e.items||[],c=e.currency;ue(()=>{if(!s||!r.current)return;let h=r.current.querySelector(`[data-item="${s}"] .combo-input`);h&&h.focus(),i(null)},[s,o.length]);let m=ve(()=>y.services.filter(h=>h.active!==!1&&(!h.companyId||h.companyId===e.companyId)).sort((h,$)=>h.name.localeCompare($.name,"de")).map(h=>({id:h.id,label:h.name,search:`${h.internalName} ${h.category}`,sub:`${Z(h.priceCents,h.currency)} je ${h.unit}`})),[y.version,e.companyId]),u=(h,$)=>n(o.map(b=>b.id===h?{...b,...$}:b)),d=h=>n(o.filter($=>$.id!==h));function p(h,$){let b=h+$;if(b<0||b>=o.length)return;let v=[...o];[v[h],v[b]]=[v[b],v[h]],n(v)}function f(){let h=va({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,h]),i(h.id)}function g(h,$){let b=x("services",$);if(!b)return;let v=dt(b,t),I=v.priceCents;if(b.currency&&b.currency!==c){let D=e.fx?At(b.currency,e.fx.usdToEur):null,w=D?qt(I,b.currency,c,D):null;w!=null?(I=w,_(`Preis von ${b.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):_(`Die Leistung ist in ${b.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}u(h,{...v,id:h,priceCents:I})}return l`<div class="items" ref=${r}>
    ${o.map((h,$)=>l`<div class="item" key=${h.id} data-item=${h.id}>
      <div class="item-top">
        <span class="item-pos">${$+1}</span>
        <div class="item-name">
          <${Cn} freeText options=${m} text=${h.name} label=${`Position ${$+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${b=>u(h.id,{name:b,serviceId:h.serviceId&&x("services",h.serviceId)&&x("services",h.serviceId).name===b?h.serviceId:""})}
            onChange=${b=>g(h.id,b)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${$+1} nach oben`} disabled=${$===0} onClick=${()=>p($,-1)}><${ae} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${$+1} nach unten`} disabled=${$===o.length-1} onClick=${()=>p($,1)}><${ae} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${$+1} entfernen`} onClick=${()=>d(h.id)}><${ae} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String(h.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${$+1}: Beschreibung`}
        value=${h.description} onInput=${b=>u(h.id,{description:b.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${Je} value=${h.qty} digits=${3} onChange=${b=>u(h.id,{qty:b})} aria-label=${`Position ${$+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${h.unit} aria-label=${`Position ${$+1}: Einheit`}
            onInput=${b=>u(h.id,{unit:b.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${Je} mode="money" value=${h.priceCents} onChange=${b=>u(h.id,{priceCents:b})} aria-label=${`Position ${$+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${Je} value=${h.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${b=>u(h.id,{discountPct:b})} aria-label=${`Position ${$+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${Je} value=${h.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${b=>u(h.id,{taxRate:b})} aria-label=${`Position ${$+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${Z(wi(h),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${Pn.map(h=>l`<option value=${h}></option>`)}</datalist>
    <div class="items-foot">
      <${E} icon="plus" onClick=${f}>Position hinzufügen<//>
      <${E} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function Wa({coll:e,id:t,params:n}){ge();let a=Fu[e],[s,i]=C(()=>qu(e,t,n||{})),[r,o]=C(!1),[c,m]=C({loading:!1,error:""}),[u,d]=C(""),[p,f]=C(""),[g,h]=C([]),[$,b]=C(null),[v,I]=C(!1),D=Ne(0),w=Ne(!0),M=P=>{i(P),o(!0)},S=P=>J=>M(Le=>({...Le,[P]:J}));ue(()=>(r?ps(fs):xn(),()=>xn()),[r]);let H=s?x("companies",s.companyId):null,L=s?x("customers",s.customerId):null,k=s?`${s.currency}|${s.issueDate}`:"";async function T(P){if(!s||!be(s.issueDate)||!P&&s.fx&&s.fx.manual)return;let J=++D.current,Le=s.currency,jt=s.issueDate;m({loading:!0,error:""});try{let It=await Sa(Le,jt);if(J!==D.current)return;i(Qe=>Qe.currency===Le&&Qe.issueDate===jt?{...Qe,fx:It}:Qe),P&&o(!0),m({loading:!1,error:""})}catch(It){if(J!==D.current)return;i(Qe=>Qe.fx&&!Qe.fx.manual&&Qe.fx.forDate&&be(Qe.issueDate)&&Qe.fx.forDate!==En(Qe.issueDate)?{...Qe,fx:null}:Qe),m({loading:!1,error:It.message})}}if(ue(()=>{let P=w.current;w.current=!1,!(!s||s.status!=="draft")&&(P&&s.number&&s.fx||T(!1))},[k]),ue(()=>{let P=!0;if(!s||!H){d("");return}if(s.number){d(s.number);return}return Ea(H,a.numberKind,s.issueDate).then(J=>{P&&d(J)}).catch(()=>{P&&d("")}),()=>{P=!1}},[s&&s.companyId,s&&s.issueDate,y.version]),!s)return l`<${pe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${E} onClick=${()=>j(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>an(`${a.list}/${s.id}`),0),null;let B=kt(s),G=s.fx?At(s.currency,s.fx.usdToEur,s.fx):null,F={...s,fx:G,totals:B,dueDate:e==="invoices"?_i(s):""},z=$t(F,e,{previewNumber:u}),ee=s.currency==="USD"?"EUR":"USD",A=G?qt(B.totalCents,s.currency,ee,G):null,te=me(),de=!!x(e,s.id),R=e==="invoices"&&s.number?s.number:"",De=R?s.reopened||{}:null,_e=R?Ie(Fe(s.id)):0,Rn=y.customers.filter(P=>P.active!==!1||P.id===s.customerId).sort((P,J)=>Y(P).localeCompare(Y(J),"de")).map(P=>({id:P.id,label:Y(P),sub:[P.number,P.city].filter(Boolean).join(", "),search:`${P.firstName} ${P.lastName} ${P.contact} ${P.email}`}));function js(P){let J=x("companies",P),Le=x("companies",s.companyId);if(!J){M(ot=>({...ot,companyId:""}));return}let jt=e==="quotes"?"quoteText":"invoiceText",It=(ot,_t)=>String(ot||"")===String(_t||"");M(ot=>{let _t=x("customers",ot.customerId),zt={...ot,companyId:P};(!ot.intro||Le&&It(ot.intro,Le[jt]))&&(zt.intro=J[jt]||""),(!ot.paymentTerms||Le&&It(ot.paymentTerms,Le.paymentTerms))&&(zt.paymentTerms=J.paymentTerms||""),(!ot.footer||Le&&It(ot.footer,Le.footer))&&(zt.footer=J.footer||""),_t&&_t.language||(zt.language=J.language),_t&&_t.currency||(zt.currency=J.currency),e==="invoices"&&!(_t&&_t.paymentTermDays!=null&&_t.paymentTermDays!=="")&&(zt.paymentTermDays=J.paymentTermDays),zt.showSecondary=J.showSecondary;let Nc=Le&&Number(Le.defaultTaxRate)||0,Tc=Number(J.defaultTaxRate)||0;return zt.items=ot.items.map(da=>{let Ys=da.serviceId?x("services",da.serviceId):null;return(!Ys||Ys.taxRate==null||Ys.taxRate==="")&&(Number(da.taxRate)||0)===Nc?{...da,taxRate:Tc}:da}),zt});let Qe=x("customers",s.customerId);s.items.length&&!(Qe&&Qe.currency)&&J.currency!==s.currency&&_(`Währung auf ${J.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function xc(P){let J=x("customers",P),Le=s.currency,jt=Fs(s,J,x("companies",s.companyId),e);M(It=>Fs(It,J,x("companies",It.companyId),e)),s.items.length&&jt.currency!==Le&&_(`Währung auf ${jt.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function kc(P){P!==s.currency&&(s.items.length&&_("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),M(J=>({...J,currency:P,fx:J.fx?At(P,J.fx.usdToEur,J.fx):J.fx})))}function Dc(P){P>0&&(D.current+=1,m({loading:!1,error:""}),M(J=>({...J,fx:At(J.currency,P,{manual:!0,source:"Von Hand eingetragen",date:q(),fetchedAt:ne()})})))}function Sc(){let P=Ii("USD","EUR");P&&(M(J=>({...J,fx:At(J.currency,P.rate,{manual:!0,source:`Letzter bekannter Kurs (${P.source})`,date:P.date,fetchedAt:P.fetchedAt})})),m({loading:!1,error:""}))}async function Cc(){f("save");let P=await U(()=>e==="invoices"?Ds(s):Xo(s));f(""),P&&(i(ye(P)),o(!1),h([]),_("Entwurf gespeichert","good"),(t==="new"||!t)&&(xn(),j(`${a.list}/${P.id}/edit`,{replace:!0})))}async function Ec(){if(c.loading){_("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let P=Ss(F,e==="quotes"?"quote":"invoice");if(h(P),P.length){_("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await oe({title:`${a.finalize}?`,text:R?`Die Rechnung behält die Nummer ${R} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${u} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${u} und lässt sich danach nicht mehr ändern.`,list:[`${Y(L)}`,`${Z(B.totalCents,s.currency)}${A!=null?` (≈ ${Z(A,ee)})`:""}`,..._e>0?[_e>B.totalCents?`Achtung: Eingegangen sind bereits ${Z(_e,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${Z(_e,s.currency)}`]:[]],confirmLabel:a.finalize}))return;f("finalize");let Le=await U(()=>e==="invoices"?Ia(F):Ta(F));f(""),Le&&(o(!1),_(`${a.one} ${Le.number} ${R?"neu erstellt":"erstellt"}`,"good"),an(`${a.list}/${Le.id}`))}async function Ic(){if(R){await Ks(x("invoices",s.id)||s)&&an(a.list);return}if(!await oe({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await(e==="invoices"?zi(s.id):el(s.id)),!0))&&(_("Entwurf gelöscht","good"),an(a.list))}let Qs=s.fx?Number(s.fx.usdToEur):null,Js=!!s.serviceDateEnd;return l`
    <${we} title=${R?`Rechnung ${R} bearbeiten`:de?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${R?"Entwurf – die Nummer bleibt erhalten":u?`Nächste Nummer: ${u}`:H?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${E} class="only-narrow" icon="eye" onClick=${()=>I(!v)}>${v?"Formular":"Vorschau"}<//>
      ${de&&l`<${gt} items=${[{label:R?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:Ic}]} />`}
      <${E} icon="check" onClick=${Cc} busy=${p==="save"} disabled=${!!p}>Entwurf speichern<//>
      <${E} variant="primary" icon="invoice" onClick=${Ec} busy=${p==="finalize"} disabled=${!!p}>${a.finalize}<//>
    <//>

    ${R&&l`<${Ce} tone="info">
      Diese Rechnung war bereits erstellt${De.finalizedAt?` (${qe(De.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${R}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${_e>0?` Die eingetragenen Zahlungen (${Z(_e,s.currency)}) bleiben erhalten.`:""}
      ${De.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${g.length>0&&l`<${Ce} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${g.map(P=>l`<li>${P}</li>`)}</ul>
    <//>`}

    <div class=${`editor${v?" show-preview":""}`}>
      <div class="editor-form">
        <${Q} title="Aussteller und Kunde">
          <div class="form-grid">
            <${ce} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${js}
              disabled=${!!R} hint=${R?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${te.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(R&&H&&!te.some(P=>P.id===H.id)?[H,...te]:te).map(P=>({id:P.id,label:P.name}))} />
            <${Se} class="span-3" label="Kunde" htmlFor="doc-customer">
              <${Cn} id="doc-customer" options=${Rn} value=${s.customerId} placeholder="Kunde suchen"
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${xc}
                onCreate=${P=>b({type:"customer",seed:P})} createLabel="als Kunde anlegen" />
            <//>
            <${He} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${S("issueDate")} />
            ${e==="invoices"&&l`
              <${He} class="span-2" label=${Js?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${S("serviceDate")} />
              ${Js?l`<${He} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${S("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>S("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Ae} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${S("paymentTermDays")}
                hint=${F.dueDate?`Fällig am ${V(F.dueDate)}`:""} />
              ${Js&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>S("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${He} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${S("validUntil")} min=${s.issueDate} />`}
            <${ce} class="span-2" label="Währung" value=${s.currency} onChange=${kc} options=${Xe} />
            <${ce} class="span-2" label="Belegsprache" value=${s.language} onChange=${S("language")} options=${vt} />
          </div>
        <//>

        <${Q} title="Positionen">
          <${ir} doc=${s} company=${H} onChange=${P=>M(J=>({...J,items:P}))}
            onNewService=${()=>b({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${St} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${P=>M(J=>({...J,discount:{type:P,value:0}}))} />
                ${s.discount.type==="abs"?l`<${Je} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${P=>M(J=>({...J,discount:{type:"abs",value:P}}))} />`:l`<${Je} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${P=>M(J=>({...J,discount:{type:"pct",value:P}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${Z(B.subtotalCents,s.currency)}</dd></div>
              ${B.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${Z(-B.discountCents,s.currency)}</dd></div>`}
              ${B.taxGroups.filter(P=>P.rate!==0).map(P=>l`<div><dt>${H&&H.taxLabel||"Steuer"} ${pt(P.rate)}</dt><dd>${Z(P.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${Z(B.totalCents,s.currency)}</dd></div>
              ${A!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${Z(A,ee)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${Q} title="Wechselkurs">
          ${c.error&&l`<${Ce} tone="warn" action=${Ii("USD","EUR")&&l`<${E} small onClick=${Sc}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${Je} value=${Qs} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${Dc} />
            <span class="fx-eq">EUR</span>
            <${E} small icon="refresh" busy=${c.loading} onClick=${()=>T(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${V(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&Qs?` Das entspricht 1 EUR = ${Qn(1/Qs)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${Ve} label=${`Betrag zusätzlich in ${ee} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${S("showSecondary")} />
        <//>

        <${Q} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${le} class="span-6" label="Einleitung" value=${s.intro} onInput=${S("intro")} rows=${2} />
            <${le} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${S("paymentTerms")} rows=${2} />
            <${le} class="span-6" label="Fußzeile" value=${s.footer} onInput=${S("footer")} rows=${2} />
          </div>
        <//>

        <${Q} title="Interne Notiz">
          <${le} value=${s.internalNotes} onInput=${S("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${z.fileName}</span>
          </div>
          <${la} model=${z} />
        </div>
      </div>
    </div>

    ${$&&$.type==="customer"&&l`<${ia}
      customer=${Xt({company:$.seed||""})} onClose=${()=>b(null)}
      onSaved=${P=>M(J=>Fs(J,P,x("companies",J.companyId),e))} />`}
    ${$&&$.type==="service"&&l`<${sr}
      service=${en({companyId:"",currency:s.currency})} onClose=${()=>b(null)}
      onSaved=${P=>M(J=>({...J,items:[...J.items,dt(P,x("companies",J.companyId))]}))} />`}
  `}var Vu=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],Zu=15*1024*1024;function Kl(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Gu(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function rr(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function qs(e,t,n){let a=await Gu(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var Hu=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function or(e,{shrink:t=!0}={}){if(e.size>Zu)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(Hu(e))try{let{canvas:a}=await qs(e,2e3,"#ffffff");return{blob:await rr(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!Vu.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await qs(e,2e3,"#ffffff"),i=await rr(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function Fl(e){let{canvas:t}=await qs(e,1568,"#ffffff");return rr(t,"image/jpeg",.85)}async function ql(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await qs(e,800,null);return t.toDataURL("image/png")}async function Vs(e){let t=await Xr("blobs",e);return t?t.blob:null}var Vl="https://api.anthropic.com/v1/messages",Mt=class extends Error{};function Wu(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var ju=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function Qu({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[Wu(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:ju}]}]}}var bt=e=>typeof e=="string"?e.trim():"",lr=e=>Number.isFinite(Number(e))?$s(Number(e)):0;function Ju(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(f=>f.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new Mt("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new Mt("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=bt(s.currency).toUpperCase();is.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=lr(s.net_amount),c=lr(s.tax_amount),m=lr(s.total_amount);m&&o+c!==m&&(!o&&c<=m||Math.abs(o+c-m)<=2?o=m-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let u=be(bt(s.invoice_date))?bt(s.invoice_date):"";u||i.push("Das Belegdatum wurde nicht erkannt.");let d=be(bt(s.payment_date))?bt(s.payment_date):"",p=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:bt(s.vendor).slice(0,200),description:bt(s.description).slice(0,300),invoiceNumber:bt(s.invoice_number).slice(0,80),invoiceDate:u,paymentDate:d,currency:r,netCents:o,taxCents:c,totalCents:m||o+c,paymentMethod:n.includes(bt(s.payment_method))?bt(s.payment_method):"",category:t.includes(bt(s.category))?bt(s.category):""},uncertain:p,warnings:i,usage:e.usage||null}}function Zl(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Gl(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new Mt("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await Fl(e),r="image/jpeg");let o=await Kl(i),c=Qu({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),m;try{m=await fetch(Vl,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new Mt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let u=null;try{u=await m.json()}catch{}if(!m.ok)throw new Mt(Zl(m.status,u));return Ju(u,{categories:a,paymentMethods:s})}async function Hl({apiKey:e,model:t}){if(!e)throw new Mt("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(Vl,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new Mt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new Mt(Zl(n.status,a));return!0}var Zs=new Set,cr=new Set,Wl=()=>cr.forEach(e=>e(new Set(Zs)));function Yu(){let[e,t]=C(new Set(Zs));return ue(()=>(cr.add(t),()=>cr.delete(t)),[]),e}var Xu=()=>({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,categories:y.settings.expenseCategories||[],paymentMethods:y.settings.paymentMethods||[]});async function jl(e){let t=await Vs(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return Gl(t,Xu())}async function ed(e,t){try{return await Sa(e,be(t)?t:q())}catch{return null}}async function td(e){let t=await or(e,{shrink:y.settings.shrinkImages!==!1}),n=xe()||(me().length===1?me()[0]:null),a=ya({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:y.settings.aiApiKey?"pending":"none"}}),s=await Ki({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await ln(a),!y.settings.aiApiKey)return a;Zs.add(a.id),Wl();try{let i=await jl(s.id),r=i.fields,o=r.currency||a.currency,c=await ed(o,r.invoiceDate),m=x("expenses",a.id);m&&m.status==="review"&&(a=await ln({...m,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:y.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=x("expenses",a.id);throw r&&await ln({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{Zs.delete(a.id),Wl()}return a}function nd({attachmentId:e}){let[t,n]=C(""),[a,s]=C(!1),i=x("attachments",e);ue(()=>{let o="",c=!0;return n(""),s(!1),Vs(e).then(m=>{if(c){if(!m){s(!0);return}o=URL.createObjectURL(m),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await Vs(e);o&&at(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${ae} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${zn(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function ad({expense:e,onClose:t}){let n=!x("expenses",e.id),a=e.status==="review",[s,i]=C(()=>{let z=ye(e);if(!z.invoiceDate&&!a&&(z.invoiceDate=q()),!z.companyId){let ee=xe()||(me().length===1?me()[0]:null);ee&&(z.companyId=ee.id)}return z}),[r,o]=C(""),[c,m]=C(""),[u,d]=C(0),p=Ne([]),f=Ne(null),g=z=>ee=>i(A=>({...A,[z]:ee})),h=(s.attachmentIds||[])[0],$=s.ai||{},b=new Set($.uncertain||[]),v=`${s.currency}|${s.invoiceDate}`;ue(()=>{let z=!0;if(!be(s.invoiceDate)||s.fx&&s.fx.manual)return;let ee=(de,R)=>!!de&&de.forCurrency===R.currency&&de.forDate===En(R.invoiceDate);if(ee(s.fx,s))return;m("");let A=s.currency,te=s.invoiceDate;return Sa(A,te).then(de=>{z&&i(R=>R.currency===A&&R.invoiceDate===te&&!(R.fx&&R.fx.manual)?{...R,fx:de}:R)}).catch(de=>{z&&(i(R=>R.fx&&!R.fx.manual&&R.fx.forDate&&!ee(R.fx,R)?{...R,fx:null}:R),m(de.message))}),()=>{z=!1}},[v,u]);function I(z,ee){i(A=>{let te={...A,[z]:ee};return z==="totalCents"?te.netCents=(ee||0)-(A.taxCents||0):te.totalCents=(te.netCents||0)+(te.taxCents||0),te})}function D(z,ee){ee>0&&i(A=>{let de={...A.fx||{rateToUSD:A.currency==="USD"?1:null,usdToEur:null},[z]:ee,manual:!0,source:"Von Hand eingetragen",date:q(),fetchedAt:ne()};return A.currency==="USD"&&(de.rateToUSD=1),A.currency==="EUR"&&z==="usdToEur"&&(de.rateToUSD=1/ee),{...A,fx:de}})}async function w(z){if(!z)return;o("file");let ee=await U(async()=>{let A=await or(z,{shrink:y.settings.shrinkImages!==!1});return Ki({blob:A.blob,name:A.name,ownerType:"expense",ownerId:s.id})});o(""),ee&&(p.current.push(ee.id),i(A=>({...A,attachmentIds:[ee.id,...A.attachmentIds||[]]})))}async function M(){if(!await oe({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let ee=h;await U(()=>Fi(ee)),i(te=>({...te,attachmentIds:(te.attachmentIds||[]).filter(de=>de!==ee)}));let A=x("expenses",s.id);A&&await U(()=>ln({...A,attachmentIds:(A.attachmentIds||[]).filter(te=>te!==ee)}))}async function S(){if(h){o("ai");try{let z=await jl(h),ee=z.fields;i(A=>({...A,...ee,currency:ee.currency||A.currency,fx:null,ai:{status:"done",at:ne(),model:y.settings.aiModel,uncertain:z.uncertain,warnings:z.warnings}})),d(A=>A+1),_("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(z){Hn(z)}o("")}}async function H(){let z=x("expenses",s.id),ee=new Set(z?z.attachmentIds||[]:[]);for(let A of p.current)ee.has(A)||await Fi(A).catch(()=>{});t()}async function L(){o("save");let z=await U(()=>ln({...s,status:"booked"}));o(""),z&&(_(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function k(){if(!await oe({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await nl(s.id),!0))&&(_("Ausgabe gelöscht","good"),t())}let T=z=>b.has(z)?"Von der KI als unsicher markiert – bitte prüfen":"",B=s.fx?ut(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,G=y.settings.expenseCategories||[],F=y.settings.paymentMethods||[];return l`<${We} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${H} size="xl" onSubmit=${L}
    footer=${l`
      ${!n&&l`<${E} variant="ghost" icon="trash" onClick=${k} class="push-left">Löschen<//>`}
      <${E} onClick=${H}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${h?l`<${nd} attachmentId=${h} />
              <div class="receipt-actions">
                <${E} small icon="sparkle" busy=${r==="ai"} disabled=${!y.settings.aiApiKey} onClick=${S}
                  title=${y.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${E} small variant="ghost" icon="trash" onClick=${M}>Beleg entfernen<//>
              </div>
              ${!y.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>f.current&&f.current.click()}>
              <${ae} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${f} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${z=>{w(z.target.files[0]),z.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${$.status==="done"&&l`<${Ce} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${($.warnings||[]).length>0&&l`<ul class="notice-list">${$.warnings.map(z=>l`<li>${z}</li>`)}</ul>`}
        <//>`}
        ${$.status==="error"&&l`<${Ce} tone="warn">Automatisches Auslesen fehlgeschlagen: ${$.message}<//>`}
        <div class="form-grid">
          <${ce} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${g("companyId")} placeholder="Unternehmen wählen"
            options=${me().map(z=>({id:z.id,label:z.name}))} />
          <${ce} class="span-3" label="Kategorie" value=${s.category} onChange=${g("category")} placeholder="Keine"
            options=${G.includes(s.category)||!s.category?G:[...G,s.category]} hint=${T("category")} />
          <${O} class="span-4" label="Lieferant" value=${s.vendor} onInput=${g("vendor")} hint=${T("vendor")} />
          <${O} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${g("invoiceNumber")} hint=${T("invoice_number")} />
          <${O} class="span-6" label="Beschreibung" value=${s.description} onInput=${g("description")} />
          <${He} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${g("invoiceDate")} hint=${T("invoice_date")} />
          <${He} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${g("paymentDate")} hint=${T("payment_date")} />
          <${ce} class="span-2" label="Währung" value=${s.currency} hint=${T("currency")}
            onChange=${z=>i(ee=>({...ee,currency:z,fx:null}))} options=${is} />
          <${Ae} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${z=>I("netCents",z)} hint=${T("net_amount")} />
          <${Ae} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${z=>I("taxCents",z)} hint=${T("tax_amount")} />
          <${Ae} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${z=>I("totalCents",z)}
            hint=${T("total_amount")||(B!=null&&s.currency!=="USD"?`≈ ${Z(B,"USD")}`:"")} />
          <${ce} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${g("paymentMethod")} placeholder="Keine Angabe"
            options=${F.includes(s.paymentMethod)||!s.paymentMethod?F:[...F,s.paymentMethod]} />
          <${Se} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${V(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${Je} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${z=>D("rateToUSD",z)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${Je} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${z=>D("usdToEur",z)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${le} class="span-6" label="Notiz" value=${s.note} onInput=${g("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function Ql(){ge();let e=Yu(),[t,n]=C(""),[a,s]=C(""),[i,r]=C("year"),[o,c]=C(null),[m,u]=C(!1),[d,p]=C(0),f=Ne(null),g=!xe(),h=q(),$=ve(()=>y.expenses.filter(k=>Ge(k)||!k.companyId&&k.status==="review"),[y.version,y.settings.activeCompany]),b=$.filter(k=>k.status==="review").sort((k,T)=>k.createdAt<T.createdAt?1:-1),v=lt(i,h),I=$.filter(k=>k.status==="booked"),D=I.filter(k=>i==="all"||Pt(k.invoiceDate,v)).filter(k=>!a||k.category===a).filter(k=>Re(t,k.vendor,k.description,k.invoiceNumber,k.category,k.note,(k.totalCents/100).toFixed(2),(k.totalCents/100).toFixed(2).replace(".",","))),w=[...new Set(I.map(k=>k.category).filter(Boolean))].sort((k,T)=>k.localeCompare(T,"de")),M=D.reduce((k,T)=>(k.net+=nt(T.netCents,T.currency,T.fx)||0,k.tax+=nt(T.taxCents,T.currency,T.fx)||0,k.total+=nt(T.totalCents,T.currency,T.fx)||0,k),{net:0,tax:0,total:0});async function S(k){let T=[...k];if(!T.length)return;if(!me().length){_("Lege zuerst ein Unternehmen an.","bad");return}p(G=>G+T.length);let B=0;for(let G of T)try{await td(G),B+=1}catch(F){Hn(F)}finally{p(F=>F-1)}B&&_(B===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${B} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let H=[{key:"date",label:"Datum",sort:k=>k.invoiceDate,render:k=>V(k.invoiceDate)},{key:"vendor",label:"Lieferant",sort:k=>k.vendor,render:k=>l`<div class="cell-main">${k.vendor}</div>${k.description&&l`<div class="cell-sub clamp-1">${k.description}</div>`}`},{key:"category",label:"Kategorie",sort:k=>k.category,render:k=>k.category||l`<span class="muted-text">–</span>`},...g?[{key:"company",label:"Unternehmen",render:k=>l`<${Pe} id=${k.companyId} />`}]:[],{key:"file",label:"Beleg",render:k=>(k.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${ae} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:k=>nt(k.netCents,k.currency,k.fx)||0,render:k=>Z(k.netCents,k.currency)},{key:"tax",label:"Steuer",align:"right",render:k=>k.taxCents?Z(k.taxCents,k.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:k=>nt(k.totalCents,k.currency,k.fx)||0,render:k=>l`<span class="dual"><span class="dual-main">${Z(k.totalCents,k.currency)}</span>
        ${k.currency!==ie()&&nt(k.totalCents,k.currency,k.fx)!=null&&l`<span class="dual-sub">≈ ${X(nt(k.totalCents,k.currency,k.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:k=>k.paymentDate||"",render:k=>k.paymentDate?V(k.paymentDate):l`<span class="muted-text">offen</span>`}],L=D.length?[`${D.length} ${D.length===1?"Ausgabe":"Ausgaben"}`,"","",...g?[""]:[],"",l`<span class="strong">${X(M.net)}</span>`,l`<span class="strong">${X(M.tax)}</span>`,l`<span class="strong">${X(M.total)}</span>`,l`<span class="muted-text">in ${ie()}</span>`]:null;return l`
    <${we} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${E} icon="plus" onClick=${()=>c(ya())}>Ausgabe von Hand<//>
      <${E} variant="primary" icon="upload" onClick=${()=>f.current&&f.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${m?" is-drag":""}`}
      onDragOver=${k=>{k.preventDefault(),u(!0)}}
      onDragLeave=${()=>u(!1)}
      onDrop=${k=>{k.preventDefault(),u(!1),S(k.dataTransfer.files)}}>
      <${ae} name="upload" size=${24} />
      <div>
        <strong>${d>0?`${d} ${d===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${y.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${f} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${k=>{S(k.target.files),k.target.value=""}} />
    </div>

    ${b.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${b.length}</span></h2>
      <ul class="review-list">
        ${b.map(k=>{let T=e.has(k.id),B=k.ai||{};return l`<li key=${k.id}>
            <button type="button" class="review-item" onClick=${()=>c(k)} disabled=${T}>
              <span class="review-icon"><${ae} name=${T?"refresh":"file"} class=${T?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${k.vendor||(x("attachments",(k.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${T?"Wird ausgelesen …":B.status==="error"?`Nicht ausgelesen: ${B.message}`:B.status==="done"?`${k.invoiceDate?V(k.invoiceDate):"Datum fehlt"}, ${k.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${k.totalCents?Z(k.totalCents,k.currency):""}</span>
              <span class="review-go">${T?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${I.length>0&&l`<div class="filters">
      <${ht} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${k=>r(k.target.value)}>
        ${gn.filter(k=>k.id!=="custom").map(k=>l`<option value=${k.id}>${k.label}</option>`)}
      </select>
      ${w.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${k=>s(k.target.value)}>
        <option value="">Alle Kategorien</option>
        ${w.map(k=>l`<option value=${k}>${k}</option>`)}
      </select>`}
    </div>`}
    ${(I.length>0||b.length===0)&&l`<${rt} columns=${H} rows=${D} initialSort=${{key:"date",dir:"desc"}} footer=${L} onRowClick=${k=>c(k)}
      empty=${I.length?l`<${pe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${pe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${ad} expense=${o} onClose=${()=>c(null)} />`}
  `}function sd(e){let t=hn.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=Ns(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function id({rec:e,onClose:t}){let n=!x("recurring",e.id),[a,s]=C(()=>ye(e)),[i,r]=C(!1),o=g=>h=>s($=>({...$,[g]:h})),c=x("companies",a.companyId),m=kt(a),u=y.customers.filter(g=>g.active!==!1||g.id===a.customerId).sort((g,h)=>Y(g).localeCompare(Y(h),"de")).map(g=>({id:g.id,label:Y(g),sub:[g.number,g.city].filter(Boolean).join(", ")}));function d(g){let h=x("companies",g);s($=>({...$,companyId:g,...h&&n?{currency:h.currency,language:h.language,paymentTermDays:h.paymentTermDays,intro:$.intro||h.invoiceText}:{}}))}function p(g){let h=x("customers",g);s($=>({...$,customerId:g,...h&&h.language?{language:h.language}:{},...h&&h.currency&&Xe.includes(h.currency)?{currency:h.currency}:{},...h&&h.paymentTermDays!=null&&h.paymentTermDays!==""?{paymentTermDays:Number(h.paymentTermDays)}:{}}))}async function f(){r(!0);let g=await U(()=>Ra(a));r(!1),g&&(_("Vorlage gespeichert","good"),t())}return l`<${We} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${f}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${O} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${ce} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${d} placeholder="Unternehmen wählen"
        options=${me().map(g=>({id:g.id,label:g.name}))} />
      <${Se} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${Cn} id="rec-customer" options=${u} value=${a.customerId} placeholder="Kunde suchen" onChange=${p} />
      <//>
      <${ce} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${hn.map(g=>({id:g.id,label:g.label}))} />
      ${a.interval==="custom"&&l`<${Ae} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${He} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${He} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${Ae} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${ce} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${Xe} />
      <${ce} class="span-2" label="Belegsprache" value=${a.language} onChange=${o("language")} options=${vt} />
      <div class="span-6">
        <${Ve} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${g=>o("servicePeriod")(g?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${ir} doc=${a} company=${c} onChange=${g=>s(h=>({...h,items:g}))}
      onNewService=${()=>_("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${Z(m.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${le} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${Ve} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function Jl(){ge();let[e,t]=C(null),[n,a]=C(""),s=q(),i=y.recurring.filter(Ge),r=i.filter(p=>Yn(p,s)),o=!xe();async function c(p,f){let g=p.nextDate>s;if(g&&!await oe({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${V(p.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(p.id);let h=await U(()=>qi(p.id,{early:g}));return a(""),h&&(_(`Rechnungsentwurf für ${Y(x("customers",p.customerId))} angelegt`,"good"),f&&j(`/invoices/${h.id}/edit`)),h}async function m(){a("all");let p=0;for(let f of r){let g=0;for(;Yn(x("recurring",f.id),s)&&g++<36&&await U(()=>qi(f.id));)p+=1}a(""),p&&(_(`${p} ${p===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),j("/invoices?status=draft"))}async function u(p){if(!await oe({title:"Vorlage löschen?",text:`„${p.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await al(p.id),!0))&&_("Vorlage gelöscht","good")}let d=[{key:"name",label:"Vorlage",sort:p=>p.name,render:p=>l`<div class="cell-main">${p.name}</div><div class="cell-sub">${Y(x("customers",p.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:p=>l`<${Pe} id=${p.companyId} />`}]:[],{key:"interval",label:"Intervall",render:p=>sd(p)},{key:"next",label:"Nächste Rechnung",sort:p=>p.nextDate,render:p=>Xn(p)?l`<span class="muted-text">beendet</span>`:p.active?Yn(p,s)?l`<span class="tone-warn">${V(p.nextDate)}</span><div class="cell-sub">fällig</div>`:V(p.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:p=>p.totals?p.totals.totalCents:0,render:p=>Z(p.totals?p.totals.totalCents:0,p.currency)},{key:"count",label:"Erzeugt",align:"right",render:p=>p.generated||0},{key:"status",label:"Status",render:p=>Xn(p)?l`<${ze} tone="mute">Beendet<//>`:p.active?l`<${ze} tone="good">Aktiv<//>`:l`<${ze} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:p=>l`<div class="row-actions">
        <${E} small icon="invoice" busy=${n===p.id} disabled=${!!n||!p.active||Xn(p)}
          title=${Xn(p)?"Die Vorlage hat ihr Enddatum erreicht":p.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(p,!0)}>Jetzt erzeugen<//>
        <${E} variant="ghost" small icon="trash" title=${`${p.name} löschen`} onClick=${()=>u(p)} />
      </div>`}];return l`
    <${we} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${E} variant="primary" icon="plus" onClick=${()=>t(qn(xe()||(me().length===1?me()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${Ce} tone="warn" action=${l`<${E} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${m}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${rt} columns=${d} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${p=>t(p)}
      empty=${l`<${pe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${E} variant="primary" icon="plus" onClick=${()=>t(qn(xe()||(me().length===1?me()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${id} rec=${e} onClose=${()=>t(null)} />`}
  `}var Gs=null;function rd(){return Gs||(Gs=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw Gs=null,e})),Gs}var Hs=e=>e&&typeof e=="object"?e.v:e,Yl=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function ur(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function od(e){let t=[e.columns.map(n=>ur(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>ur(Hs(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>ur(Hs(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function Ws(e){let t=new Blob([od(e)],{type:"text/csv;charset=utf-8"});at(t,`${Ot(e.fileName)}.csv`)}async function Xl(e){let t=await rd(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(Hs));e.totals&&n.push(e.totals.map(Hs));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let m=t.utils.encode_cell({r:c,c:o}),u=a[m];u&&(typeof u.v=="number"&&r.type==="money"&&(u.z="#,##0.00"),typeof u.v=="string"&&/^[=+\-@]/.test(u.v)&&(u.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,Ot(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});at(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Ot(e.fileName)}.xlsx`)}async function ec(e){await wl({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(Yl)),totals:e.totals?e.totals.map(Yl):null,fileName:`${Ot(e.fileName)}.pdf`,landscape:e.columns.length>6})}function ac(e="year"){let[t,n]=C(e),[a,s]=C({from:`${q().slice(0,4)}-01-01`,to:q()}),i=lt(t,q(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function ld(e){let t=gn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${V(e.range.from)} bis ${V(e.range.to)}`}function sc({p:e}){let t=xe();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${gn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>be(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>be(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${V(e.range.from)} bis ${V(e.range.to)}`:""}</span>
  </div>`}var ic=(e,t)=>t?pt(Math.round(e/t*1e3)/10):"–",he=e=>({v:e/100,t:X(e)}),pn=e=>({v:e/100,t:Ue(e)}),Oe=(e,t)=>({v:e/100,t:Z(e,t)}),ca=e=>({v:e||"",t:e?V(e):""}),fe={align:"right",type:"money"},mn={align:"right",type:"number"};function rc(){ge();let e=ac("year"),t=q(),n=Et(),a=xe(),s=Gt(),i=ve(()=>{let d={companyId:n,range:e.range},p=ji(e.range,s,n),f=p.slice(-24);return{summary:dl(s,d,t),truncated:p.length>f.length,series:f.length?Ma(s,{companyId:n,months:f,range:e.range}):[],byCompany:za(s,d),byCustomer:_a(s,d),byService:La(s,d),byCategory:Wi(s,d)}},[y.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(d=>({key:d.key,label:_n(d.key),title:Nt(d.key),values:{rev:N(d,"revenue"),exp:N(d,"expense")}})),m={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(d=>[Nt(d.key),X(N(d,"revenue")),X(N(d,"expense")),X(N(d,"profit")),X(N(d,"payments"))])},u=d=>[...d].sort((p,f)=>N(f)-N(p));return l`
    <${we} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${ie()}, ${dn()} als Zweitwert.`}>
      <${E} icon="reports" onClick=${()=>j("/reports")}>Reports und Export<//>
    <//>
    <${sc} p=${e} />

    <div class="stat-row stat-row-3">
      <${Be} label="Einnahmen" value=${X(N(r.income))} sub=${`≈ ${Ue(ke(r.income))}, ${r.income.count} Rechnungen`} />
      <${Be} label="Ausgaben" value=${X(N(r.expenses))} sub=${`≈ ${Ue(ke(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Be} label="Gewinn" value=${X(N(r.profit))} tone=${N(r.profit)<0?"bad":"good"} sub=${`≈ ${Ue(ke(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Be} label="Zahlungseingänge" value=${X(N(r.payments))} sub=${`≈ ${Ue(ke(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Be} label="Offene Forderungen (heute)" value=${X(N(r.receivables))} sub=${`≈ ${Ue(ke(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Be} label="Steuern (Saldo)" value=${X(N(r.taxBalance))}
        sub=${`berechnet ${X(N(r.taxCollected))}, in Ausgaben ${X(N(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${Ua} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${ie()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${ie()}`} series=${o} table=${m}>
      <${Ba} groups=${c} series=${o} mode="grouped" format=${d=>X(d)} axisFormat=${d=>Da(d,ie())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${Q} title="Umsatz pro Unternehmen">
        <${Zt} rows=${u(i.byCompany).map(d=>({key:d.id,label:d.name,value:N(d),display:X(N(d)),color:Aa(d.color)}))} />
      <//>`}
      <${Q} title="Umsatz pro Kunde">
        <${Zt} rows=${u(i.byCustomer).map(d=>({key:d.id,label:d.name,value:N(d),display:X(N(d)),href:`#/customers/${d.id}`}))} />
      <//>
      <${Q} title="Umsatz pro Leistung">
        <${Zt} rows=${u(i.byService).map(d=>({key:d.key,label:d.name,value:N(d),display:X(N(d))}))} />
      <//>
      <${Q} title="Ausgaben nach Kategorie">
        <${Zt} rows=${u(i.byCategory).map(d=>({key:d.name,label:d.name,value:N(d),display:X(N(d)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function dr(e,t,n,a,s){let i=cl(e,t,n),r=i.reduce((o,c)=>({c:o.c+N(c),a:o.a+ke(c),tax:o.tax+N(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...mn},{label:`Umsatz netto (${ie()})`,...fe},{label:`Umsatz netto (${dn()})`,...fe},{label:`Steuer (${ie()})`,...fe}],rows:i.map(o=>[a(o.key),o.count,he(N(o)),pn(ke(o)),he(N(o,"tax"))]),totals:["Summe",r.count,he(r.c),pn(r.a),he(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?_n(o.key):a(o.key),title:a(o.key),values:{rev:N(o)}}))}}}function mr(e,t,n=[]){let a=[...e].sort((i,r)=>N(r)-N(i)),s=a.reduce((i,r)=>({c:i.c+N(r),a:i.a+ke(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${ie()})`,...fe},{label:`Umsatz netto (${dn()})`,...fe},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),he(N(i)),pn(ke(i)),ic(N(i),s.c)]),totals:["Summe",...n.map(()=>""),he(s.c),pn(s.a),""]}}function tc(e,t,n,a){let s=un(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+N(c,"open"),0),r=ol.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,m)=>c+N(m,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...mn},{label:"Währung"},{label:"Rechnungsbetrag",...fe},{label:"Offen",...fe},{label:`Offen (${ie()})`,...fe}],rows:s.map(o=>[o.inv.number,Me(o.inv),(x("companies",o.inv.companyId)||{}).name||"",ca(o.inv.issueDate),ca(o.inv.dueDate),o.overdueDays,o.inv.currency,Oe(o.inv.totals.totalCents,o.inv.currency),Oe(o.openCents,o.inv.currency),he(N(o,"open"))]),totals:["Summe","","","","","","","","",he(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var pr=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>dr(e,t,"month",Nt,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>dr(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>dr(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>mr(_a(e,t),"Kunde",[{col:{label:"Rechnungen",...mn},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>mr(za(e,t),"Unternehmen",[{col:{label:"Rechnungen",...mn},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>mr(La(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...mn},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:Dn(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=ul(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...mn},{label:"Netto",...fe},{label:"Steuer",...fe},{label:"Brutto",...fe},{label:"Netto in USD",...fe},{label:"Netto in EUR",...fe}],rows:n.map(a=>[a.currency,a.count,Oe(a.netCents,a.currency),Oe(a.taxCents,a.currency),Oe(a.totalCents,a.currency),Oe(a.usd,"USD"),Oe(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",Oe(n.reduce((a,s)=>a+s.usd,0),"USD"),Oe(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>tc(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>tc(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=ji(t.range,e,t.companyId),a=n.length?Ma(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+N(r,"revenue"),exp:i.exp+N(r,"expense"),alt:i.alt+ke(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${ie()})`,...fe},{label:`Ausgaben (${ie()})`,...fe},{label:`Gewinn (${ie()})`,...fe},{label:`Gewinn (${dn()})`,...fe}],rows:a.map(i=>[Nt(i.key),he(N(i,"revenue")),he(N(i,"expense")),he(N(i,"profit")),pn(ke(i,"profit"))]),totals:["Summe",he(s.rev),he(s.exp),he(s.rev-s.exp),pn(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:_n(i.key),title:Nt(i.key),values:{rev:N(i,"revenue"),exp:N(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...Wi(e,t)].sort((s,i)=>N(i)-N(s)),a=n.reduce((s,i)=>({c:s.c+N(i),a:s.a+ke(i),tax:s.tax+N(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...mn},{label:`Netto (${ie()})`,...fe},{label:`Netto (${dn()})`,...fe},{label:`Steuer (${ie()})`,...fe},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,he(N(s)),pn(ke(s)),he(N(s,"tax")),ic(N(s),a.c)]),totals:["Summe",a.count,he(a.c),pn(a.a),he(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=ml(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...fe},{label:"Steuer",...fe},{label:`Steuer (${ie()})`,...fe}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${pt(a.rate)}`,a.currency,Oe(a.netCents,a.currency),Oe(a.taxCents,a.currency),he(N(a,"tax"))]),["In Ausgaben enthaltene Steuer",ie(),"","",he(-N(n,"paid"))]],totals:["Saldo","","","",he(N(n,"collected")-N(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=tt(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+N(r,"net"),tax:i.tax+N(r,"tax"),total:i.total+N(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...fe},{label:"Steuer",...fe},{label:"Brutto",...fe},{label:`Netto (${ie()})`,...fe},{label:"Kurs USD/EUR",...mn},{label:"Bezahlt",...fe},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=Fe(r.id),c=Bt(r,o,n);return[r.number,ca(r.issueDate),Me(r),(x("companies",r.companyId)||{}).name||"",r.currency,Oe(r.totals.netCents,r.currency),Oe(r.totals.taxCents,r.currency),Oe(r.totals.totalCents,r.currency),he(N(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:Dn(r.fx.usdToEur,"de",4)}:"",Oe(Ie(o),r.currency),($a[c]||{}).label||c]}),totals:["Summe","","","",ie(),he(s.net),he(s.tax),he(s.total),he(s.net),"","",""],note:`Die Summenzeile ist in ${ie()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=Ts(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...fe},{label:`Betrag (${ie()})`,...fe}],rows:n.map(a=>[ca(a.date),a.inv.number,Me(a.inv),a.pay.method||"",a.inv.currency,Oe(a.pay.amountCents,a.inv.currency),he(N(a))]),totals:["Summe","","","","","",he(n.reduce((a,s)=>a+N(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=ea(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+N(i,"net"),tax:s.tax+N(i,"tax"),total:s.total+N(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...fe},{label:"Steuer",...fe},{label:"Gesamt",...fe},{label:`Gesamt (${ie()})`,...fe},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[ca(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(x("companies",i.companyId)||{}).name||"",i.currency,Oe(i.netCents,i.currency),Oe(i.taxCents,i.currency),Oe(i.totalCents,i.currency),he(N(s,"total")),ca(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",ie(),he(a.net),he(a.tax),he(a.total),he(a.total),"",""],note:`Die Summenzeile ist in ${ie()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],nc=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function oc({params:e}){ge();let[t,n]=C(e&&e.r&&pr.find($=>$.id===e.r)?e.r:"month"),a=ac("year"),[s,i]=C(""),r=q(),o=Et(),c=xe(),m=Gt(),u=pr.find($=>$.id===t),d=ve(()=>u.build(m,{companyId:o,range:a.range},r),[y.version,t,o,a.range.from,a.range.to,ie()]),p=t==="open"||t==="overdue",f=`${c?c.name:"Alle Unternehmen"}, ${p?`Stichtag ${V(r)}`:ld(a)}`,g={title:u.label,subtitle:f,fileName:`${u.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:d.columns,rows:d.rows,totals:d.totals};async function h($){i($),await U(async()=>{$==="csv"?Ws(g):$==="xlsx"?await Xl(g):await ec(g)}),i("")}return l`
    <${we} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${E} icon="download" busy=${s==="csv"} disabled=${!d.rows.length} onClick=${()=>h("csv")}>CSV<//>
      <${E} icon="download" busy=${s==="xlsx"} disabled=${!d.rows.length} onClick=${()=>h("xlsx")}>Excel<//>
      <${E} icon="download" busy=${s==="pdf"} disabled=${!d.rows.length} onClick=${()=>h("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${pr.map($=>l`<button type="button" class=${`report-link${$.id===t?" is-on":""}`} aria-current=${$.id===t?"true":void 0}
          onClick=${()=>n($.id)}>${$.label}</button>`)}
      </nav>
      <div class="report-body">
        <${sc} p=${a} />
        ${d.note&&l`<p class="footnote">${d.note}</p>`}
        ${d.aging&&l`<div class="stat-row stat-row-5">
          ${d.aging.map($=>l`<${Be} label=${$.label} value=${X($.value)} sub=${`${$.count} ${$.count===1?"Rechnung":"Rechnungen"}`} tone=${$.id!=="current"&&$.value?"bad":""} />`)}
        </div>`}
        ${d.chart&&d.chart.groups.length>1&&l`<${Ua} title=${u.label} sub=${`Netto in ${ie()}`} series=${d.chart.series}>
          <${Ba} groups=${d.chart.groups} series=${d.chart.series} mode=${d.chart.mode||"stacked"}
            format=${$=>X($)} axisFormat=${$=>Da($,ie())} ariaLabel=${u.label} />
        <//>`}
        ${d.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${d.columns.map($=>l`<th class=${$.align==="right"?"r":""}>${$.label}</th>`)}</tr></thead>
              <tbody>${d.rows.map($=>l`<tr>${$.map((b,v)=>l`<td class=${d.columns[v].align==="right"?"r":""}>${nc(b)}</td>`)}</tr>`)}</tbody>
              ${d.totals&&l`<tfoot><tr>${d.totals.map(($,b)=>l`<td class=${d.columns[b].align==="right"?"r":""}>${nc($)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${pe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function lc(){ge();let[e,t]=C({}),n=[...y.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ue(()=>{let a=!0;return Promise.all(n.map(s=>Ea(s,"invoice",q()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[y.version]),l`
    <${we} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${E} variant="primary" icon="plus" onClick=${()=>j("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${pe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${E} variant="primary" icon="plus" onClick=${()=>j("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${Ft(a.logoAssetId)?l`<img src=${Ft(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
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
                ${a.archived?l`<${ze} tone="mute">Archiviert<//>`:s.length?l`<${ze} tone="warn">Es fehlt: ${s.join(", ")}<//>`:l`<${ze} tone="good">Vollständig<//>`}
              </span>
            </a>
          </li>`})}
      </ul>`}
  `}function cc({id:e}){ge();let t=e&&e!=="new"?x("companies",e):null,[n,a]=C(()=>t?ye(t):ba()),[s,i]=C(null),[r,o]=C(!1),[c,m]=C(!1),[u,d]=C({}),[p,f]=C(null),g=Ne(null),h=q(),$=T=>{a(T),o(!0)},b=T=>B=>$(G=>({...G,[T]:B}));if(ue(()=>(r?ps(fs):xn(),()=>xn()),[r]),ue(()=>{let T=!0;return Promise.all(["invoice","quote","credit"].map(B=>Ea(n,B,h).catch(()=>""))).then(([B,G,F])=>{T&&d({invoice:B,quote:G,credit:F})}),()=>{T=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,y.version]),e&&e!=="new"&&!t)return l`<${pe} icon="company" title="Unternehmen nicht gefunden"><${E} onClick=${()=>j("/companies")}>Zur Übersicht<//><//>`;let v=t?x("counters",In(t.id,"invoice",Ct(t,"invoice").pattern,h)):null,I=v?v.last:0,D=s||Ft(n.logoAssetId),w={invoice:Ut(n.invoicePattern),quote:Ut(n.quotePattern),credit:Ut(n.creditPattern)};async function M(T){if(!T)return;let B=await U(()=>ql(T));B&&(i(B),o(!0))}async function S(){m(!0);let T=await U(()=>Ca(n,s));m(!1),T&&(i(null),a(ye(T)),o(!1),_("Unternehmen gespeichert","good"),t||an(`/companies/${T.id}`))}async function H(){if(p==null||!t||!await oe({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${h.slice(0,4)} wird auf ${p} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await U(async()=>(await qo(t,"invoice",h,p),!0))&&(_("Nummernkreis angepasst","good"),f(null))}async function L(){await U(async()=>(await Bo(t.id,!t.archived),!0))&&(_(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(B=>({...B,archived:!t.archived})))}async function k(){if(!await oe({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Uo(t.id),!0))&&(_("Unternehmen gelöscht","good"),an("/companies"))}return l`
    <${we} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${gt} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:L},{label:"Löschen",icon:"trash",danger:!0,disabled:Ai(t.id),onClick:k}]} />`}
      <${E} variant="primary" icon="check" busy=${c} onClick=${S}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${Ce} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${Q} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${O} class="span-4" label="Unternehmensname" value=${n.name} onInput=${b("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${O} class="span-2" label="Kurzname" value=${n.shortName} onInput=${b("shortName")} hint="Für den Company Switcher" />
          <${O} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${b("legalForm")} />
          <${Se} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${T=>b("brandColor")(T.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${Se} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${D?l`<img src=${D} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${E} icon="upload" onClick=${()=>g.current&&g.current.click()}>${D?"Logo ersetzen":"Logo hochladen"}<//>
              ${D&&l`<${E} variant="ghost" icon="trash" onClick=${()=>{i(null),b("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${g} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${T=>{M(T.target.files[0]),T.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${Q} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${O} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${b("street")} />
          <${O} class="span-2" label="PLZ" value=${n.zip} onInput=${b("zip")} />
          <${O} class="span-4" label="Ort" value=${n.city} onInput=${b("city")} />
          <${O} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${b("region")} />
          <${O} class="span-3" label="Land" value=${n.country} onInput=${b("country")} />
          <${O} class="span-2" label="Telefon" value=${n.phone} onInput=${b("phone")} />
          <${O} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${b("email")} />
          <${O} class="span-2" label="Website" value=${n.website} onInput=${b("website")} />
        </div>
      <//>

      <${Q} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${O} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${b("taxId")} />
          <${O} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${b("vatId")} />
          <${O} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${b("registerInfo")} />
        </div>
      <//>

      <${Q} title="Bank und Zahlung">
        <div class="form-grid">
          <${O} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${b("accountHolder")} />
          <${O} class="span-3" label="Bank" value=${n.bankName} onInput=${b("bankName")} />
          <${O} class="span-4" label="IBAN" value=${n.iban} onInput=${b("iban")} />
          <${O} class="span-2" label="BIC" value=${n.bic} onInput=${b("bic")} />
          <${le} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${b("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${le} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${b("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${Q} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${O} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${b("invoicePrefix")} placeholder="z. B. HL" />
          <${O} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${b("invoicePattern")} error=${w.invoice}
            hint=${u.invoice?`Nächste Rechnung: ${u.invoice}`:""} />
          <${Ae} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${b("numberDigits")} />
          <${O} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${b("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${O} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${b("quotePattern")} error=${w.quote}
            hint=${u.quote?`Nächstes Angebot: ${u.quote}`:""} />
          <${O} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${b("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${O} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${b("creditPattern")} error=${w.credit}
            hint=${u.credit?`Nächste Gutschrift: ${u.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${Se} label=${`Zuletzt vergebene laufende Rechnungsnummer ${h.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${Je} id="counter-last" value=${p??I} digits=${0} min=${0} onChange=${T=>f(T)} />
              <${E} disabled=${p==null||p===I} onClick=${H}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${Q} title="Standards für neue Belege">
        <div class="form-grid">
          <${ce} class="span-2" label="Währung" value=${n.currency} onChange=${b("currency")} options=${Xe} />
          <${ce} class="span-2" label="Belegsprache" value=${n.language} onChange=${b("language")} options=${vt} />
          <${Ae} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${b("paymentTermDays")} />
          <${Ae} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${b("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${O} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${b("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${le} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${b("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${Ve} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${b("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${Ve} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${b("showFxNote")} /></div>
        </div>
      <//>

      <${Q} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${ce} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${b("meetingProvider")}
            placeholder="Keiner" options=${On} />
          <${O} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${b("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${le} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${b("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${Ae} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${b("meetingDuration")} />
          <${ce} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${b("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${it()})`} options=${os.map(T=>({id:T,label:T.replace(/_/g," ")}))}
            hint="Zum Beispiel Europe/Berlin, wenn deine Kunden dieses Unternehmens in Deutschland sitzen" />
        </div>
      <//>

      <${Q} title="Texte auf Belegen">
        <div class="form-grid">
          <${le} class="span-6" label="Einleitung Rechnung" value=${n.invoiceText} onInput=${b("invoiceText")} rows=${2} />
          <${le} class="span-6" label="Einleitung Angebot" value=${n.quoteText} onInput=${b("quoteText")} rows=${2} />
          <${le} class="span-6" label="Zahlungsbedingungen" value=${n.paymentTerms} onInput=${b("paymentTerms")} rows=${2} />
          <${le} class="span-6" label="Fußzeile" value=${n.footer} onInput=${b("footer")} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${E} variant="primary" icon="check" busy=${c} onClick=${S}>Unternehmen speichern<//>
      </div>
    </div>
  `}var uc=["aiApiKey"],dc=["lastBackupAt","changesSinceBackup"],mc="bbc-finance-backup";function cd(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function ud(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function pc(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function fc({includeFiles:e=!0}={}){let t={};for(let o of st)t[o]=await Zn(o);let n=await Zn("settings"),a={};for(let o of n)uc.includes(o.key)||dc.includes(o.key)||(a[o.key]=o.value);let s={format:mc,schemaVersion:li,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(st.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await Zn("blobs");for(let c=0;c<o.length;c++){let m=await cd(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(m)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function gc(){await W(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function hc(e){let t=new Map,n=0,a=(u,d)=>{try{t.set(u,ud(d))}catch{n+=1}},s=null,i="",r=0,o=!1,c=u=>{r+=1;let d=u.trim();if(!d)return;if(r===1&&/"files":\{$/.test(d)){s=JSON.parse(`${d}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(d==="}}")return;let p=JSON.parse(`{${d.replace(/,$/,"")}}`);for(let[f,g]of Object.entries(p))a(f,g)},m=async()=>{let u;try{u=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(u&&typeof u=="object"&&u.files&&typeof u.files=="object"){for(let[d,p]of Object.entries(u.files))a(d,p);delete u.files}return u};if(!e.stream||typeof TextDecoderStream>"u")return s=await m(),{json:s,files:t,badFiles:n};try{let u=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:d,done:p}=await u.read();if(p)break;i+=d;let f=i.indexOf(`
`);for(;f>=0;)c(i.slice(0,f)),i=i.slice(f+1),f=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(u){if(!(u instanceof SyntaxError))throw u;t.clear(),n=0,s=await m()}return{json:s,files:t,badFiles:n}}var Wt=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),ua=e=>typeof e=="number"&&Number.isFinite(e);function fr(e,t){if(!Wt(e)||e.format!==mc)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>li)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!Wt(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of st){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=Vn(s);for(let o of i)if(!Wt(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!Wt(r.totals)||!ua(r.totals.totalCents)||!ua(r.totals.netCents)||!ua(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number)throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!ua(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(ua))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(st.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:Wt(e.files)?Object.keys(e.files).length:0}}function dd(e){let t={};if(!Wt(e))return t;for(let n of Object.keys(Tt)){if(!Object.hasOwn(e,n)||uc.includes(n)||dc.includes(n))continue;let a=Tt[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?ua(r):typeof r=="string"))continue;t[n]=s}else Wt(a)?Wt(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function $c({json:e,files:t,badFiles:n=0}){fr(e,t);let a=y.settings.aiApiKey||"",s=dd(e.settings);return await $n(wt,async r=>{for(let o of wt)await r.clear(o);for(let o of st)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:Ze(),at:ne(),user:y.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:Wt(e.counts)?e.counts:null}})}),await vn(),xa(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function bc(){await $n(wt,async e=>{for(let t of wt)await e.clear(t)}),await vn(),xa()}async function hr(e=!0){let t=await fc({includeFiles:e});return at(t,pc()),await gc(),t.size}function md(){let[e,t]=C(""),[n,a]=C(null),s=Ne(null);ue(()=>{eo().then(a)},[y.version]);async function i(c){t(c?"full":"lite");let m=await U(()=>hr(c));t(""),m!=null&&_(`Backup gespeichert (${zn(m)})`,"good")}async function r(c){c&&(t("restore"),await U(async()=>{let m=await hc(c),u=fr(m.json,m.files),d=u.counts;if(!await oe({title:"Backup einspielen?",text:`Das Backup vom ${u.exportedAt?qe(u.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${d.companies} Unternehmen, ${d.customers} Kunden, ${d.services} Leistungen`,`${d.invoices} Rechnungen, ${d.quotes} Angebote, ${d.payments} Zahlungen`,`${d.expenses} Ausgaben, ${u.includesFiles?`${u.fileCount} Belegdateien`:"ohne Belegdateien"}`,...d.appointments||d.notes?[`${d.appointments||0} Termine, ${d.notes||0} Einträge in der Kundendokumentation`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let f=await $c(m);_(f.missingFiles?`Backup eingespielt. ${f.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),j("/")}),t(""))}let o=y.settings;return l`<${Q} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${on} rows=${[["Letztes Backup",o.lastBackupAt?qe(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${zn(n.usage)}${n.quota?` von ${zn(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${E} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${E} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Belegdateien<//>
      <${E} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${Ve} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>U(()=>et("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function pd(){let e=y.settings,[t,n]=C(e.aiApiKey||""),[a,s]=C(e.aiModel||Tt.aiModel),[i,r]=C(!1),[o,c]=C(""),m=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function u(){c("save");let p=await U(async()=>(await uo({aiApiKey:t.trim(),aiModel:a.trim()||Tt.aiModel}),!0));c(""),p&&_("KI-Einstellungen gespeichert","good")}async function d(){c("test");let p=await U(()=>Hl({apiKey:t.trim(),model:a.trim()}));c(""),p&&_("Verbindung steht – der API-Key funktioniert.","good")}return l`<${Q} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${Se} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${p=>n(p.target.value)} />
          <${E} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${Se} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${p=>s(p.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${E} variant="primary" busy=${o==="save"} disabled=${!m} onClick=${u}>Speichern<//>
      <${E} busy=${o==="test"} disabled=${!t.trim()} onClick=${d}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${E} variant="ghost" icon="trash" onClick=${async()=>{n(""),await U(()=>et("aiApiKey","")),_("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${Ve} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${p=>U(()=>et("shrinkImages",p))} />
  <//>`}function gr({label:e,settingKey:t,hint:n}){let a=(Array.isArray(y.settings[t])?y.settings[t]:[]).join(`
`),[s,i]=C(a);ue(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(m=>m.trim()).filter(Boolean))];await U(async()=>(await et(t,o),!0))&&_("Liste gespeichert","good")}return l`<div class="span-2">
    <${le} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${E} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function fd(){let e=y.settings,[t,n]=C("de"),[a,s]=C("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[m,u]=C(c.subject),[d,p]=C(c.body);ue(()=>{u(c.subject),p(c.body)},[t,a,y.version]);let f=m!==c.subject||d!==c.body,g=e.reminderDays||[7,14,21];async function h(){await U(async()=>{if(r){let b=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));b[t]={subject:m,body:d},await et("appointmentTemplates",b)}else if(i){let b=JSON.parse(JSON.stringify(e.reminderTemplates||{}));b[t]={...b[t]||{},[o]:{subject:m,body:d}},await et("reminderTemplates",b)}else{let b=JSON.parse(JSON.stringify(e.emailTemplates||{}));b[t]={...b[t]||{},[a]:{subject:m,body:d}},await et("emailTemplates",b)}return!0})&&_("Vorlage gespeichert","good")}return l`<${Q} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${Se} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${mt.map(($,b)=>l`<label class="mini-field">
            <span>${$.label}</span>
            <${Je} value=${g[b]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${$.label}: Tage nach Fälligkeit`}
              onChange=${v=>{let I=[...g];I[b]=v,U(()=>et("reminderDays",I))}} />
          </label>`)}
        </div>
      <//>
      <${ce} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...mt.map($=>({id:`r${$.id}`,label:$.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${Se} class="span-2" label="Sprache">
        <${St} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${O} class="span-6" label="Betreff" value=${m} onInput=${u} />
      <${le} class="span-6" label="Text" value=${d} onInput=${p} rows=${9} />
    </div>
    ${f&&l`<div class="button-row"><${E} variant="primary" onClick=${h}>Vorlage speichern<//></div>`}
  <//>`}function gd(){let[e,t]=C(""),n=y.customers.length||y.invoices.length||y.expenses.length||y.services.length;async function a(){t("demo");let r=await U(async()=>(await Os(),!0));t(""),r&&(_("Beispieldaten geladen","good"),j("/"))}async function s(){if(!await oe({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Termine, Kundendokumentation, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await U(async()=>(await Bl(),!0));t(""),o&&(_("Daten gelöscht","good"),j("/"))}async function i(){let r=await oe({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){_("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await U(async()=>(await bc(),await Vi(),!0));t(""),o&&(_("Alle Daten gelöscht","good"),j("/"))}return l`<${Q} title="Daten">
    ${y.settings.demoLoaded&&l`<${Ce} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${E} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${E} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${E} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var hd=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function vc(){ge();let e=y.settings,[t,n]=C(e.userName||"");return ue(()=>{n(e.userName||"")},[e.userName]),l`
    <${we} title="Einstellungen" />
    <div class="form-page">
      <${Q} title="Profil und Darstellung">
        <div class="form-grid">
          <${Se} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${E} disabled=${t===(e.userName||"")} onClick=${async()=>{await U(async()=>(await et("userName",t.trim()),!0))&&_("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${Se} class="span-2" label="Darstellung">
            <${St} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>U(()=>et("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${md} />
      <${pd} />
      <${Q} title="Auswahllisten">
        <div class="form-grid">
          <${gr} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${gr} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${gr} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${fd} />
      <${gd} />
      <${Q} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${hd.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var $r={invoices:"Rechnungen",quotes:"Angebote",customers:"Kunden",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",system:"System"},$d={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function yc(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function bd({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${$d[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${yc(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${yc(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function wc(){ge();let[e,t]=C(""),[n,a]=C(""),[s,i]=C(200),[r,o]=C(""),m=ve(()=>[...y.audit].sort((d,p)=>d.at<p.at?1:-1),[y.version]).filter(d=>(!n||d.entity===n)&&Re(e,d.action,d.label,d.user));function u(){Ws({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:m.map(d=>[d.at,d.user,d.action,$r[d.entity]||d.entity,d.label,d.prev?JSON.stringify(d.prev):"",d.next?JSON.stringify(d.next):""])})}return l`
    <${we} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${E} icon="download" disabled=${!m.length} onClick=${u}>CSV<//>
    <//>
    <div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${d=>a(d.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries($r).map(([d,p])=>l`<option value=${d}>${p}</option>`)}
      </select>
      <span class="filter-note">${m.length} ${m.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${m.length===0?l`<${pe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${m.slice(0,s).map(d=>l`<tr key=${d.id}>
              <td class="nw">${qe(d.at)}</td>
              <td><span class="cell-main">${d.action}</span><div class="cell-sub">${$r[d.entity]||d.entity}</div></td>
              <td>${d.label}</td>
              <td><${bd} entry=${d} />
                ${d.entity==="invoices"&&d.prev&&d.prev.doc&&l`<${E} small icon="download" busy=${r===d.id}
                  onClick=${async()=>{o(d.id),await U(()=>nr(d)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${d.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${m.length>s&&l`<div class="button-row center"><${E} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var vd=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kunden",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function yd(){let[e,t]=C(!1),n=Ne(null),a=xe(),s=me();ue(()=>{if(!e)return;let o=m=>{n.current&&!n.current.contains(m.target)&&t(!1)},c=m=>{m.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),U(()=>et("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${Ft(o.logoAssetId)?l`<img src=${Ft(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
    <button type="button" class="switcher-btn" aria-haspopup="listbox" aria-expanded=${e} onClick=${()=>t(!e)}>
      ${r(a)}
      <span class="switcher-text">
        <span class="switcher-label">Unternehmen</span>
        <span class="switcher-name">${a?a.name:"Alle Unternehmen"}</span>
      </span>
      <${ae} name="chevronDown" size=${16} />
    </button>
    ${e&&l`<div class="switcher-list" role="listbox" aria-label="Unternehmen wählen">
      <button type="button" role="option" aria-selected=${!a} class=${`switcher-item${a?"":" is-on"}`} onClick=${()=>i("all")}>
        ${r(null)}<span>Alle Unternehmen</span>${!a&&l`<${ae} name="check" size=${16} />`}
      </button>
      ${s.map(o=>l`<button type="button" role="option" aria-selected=${a&&a.id===o.id} key=${o.id}
          class=${`switcher-item${a&&a.id===o.id?" is-on":""}`} onClick=${()=>i(o.id)}>
        ${r(o)}<span>${o.name}</span>${a&&a.id===o.id&&l`<${ae} name="check" size=${16} />`}
      </button>`)}
      <a class="switcher-manage" href="#/companies" onClick=${()=>t(!1)}>Unternehmen verwalten</a>
    </div>`}
  </div>`}function br(e,t){let n=ss(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function wd(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kunden",y.customers.filter(s=>Re(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:Y(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>Y(x("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",y.invoices.filter(s=>Re(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||br(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:Z(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",y.quotes.filter(s=>Re(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||br(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:Z(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Termine",y.appointments.filter(s=>Re(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("Leistungen",y.services.filter(s=>Re(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:Z(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",y.expenses.filter(s=>Re(e,s.vendor,s.description,s.invoiceNumber,s.category)||br(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${Z(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",y.companies.filter(s=>Re(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function xd(){let[e,t]=C(""),[n,a]=C(!1),[s,i]=C(0),r=Ne(null),o=Ne(null),c=ve(()=>Jt(e).trim().length>=2?wd(e):[],[e,y.version]),m=c.flatMap(f=>f.items);ue(()=>{let f=h=>{(h.metaKey||h.ctrlKey)&&h.key.toLowerCase()==="k"&&(h.preventDefault(),o.current&&o.current.focus())},g=h=>{r.current&&!r.current.contains(h.target)&&a(!1)};return document.addEventListener("keydown",f),document.addEventListener("mousedown",g),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",g)}},[]);function u(f){a(!1),t(""),o.current&&o.current.blur(),j(f.href)}function d(f){f.key==="ArrowDown"?(f.preventDefault(),i(g=>Math.min(g+1,m.length-1))):f.key==="ArrowUp"?(f.preventDefault(),i(g=>Math.max(g-1,0))):f.key==="Enter"&&m[s]?(f.preventDefault(),u(m[s])):f.key==="Escape"&&(a(!1),f.target.blur())}let p=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${ae} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kunde, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${f=>{t(f.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${d} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&Jt(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(f=>l`<div class="gsearch-group" key=${f.group}>
        <div class="gsearch-head">${f.group}</div>
        ${f.items.map(g=>{p+=1;let h=p;return l`<button type="button" key=${g.key} class=${`gsearch-item${h===s?" is-active":""}`}
            onMouseEnter=${()=>i(h)} onMouseDown=${$=>{$.preventDefault(),u(g)}}>
            <span>${g.label}</span><span class="cell-sub">${g.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function kd(){let e=y.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${St} label="Anzeigewährung" value=${e} onChange=${t=>U(()=>et("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function Dd(){let[e,t]=C(!1),n=y.settings.changesSinceBackup||0;async function a(){t(!0);let s=await U(()=>hr(!0));t(!1),s!=null&&_("Backup gespeichert","good")}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${ae} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function Sd({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${Wa} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${Wa} coll="invoices" id=${n} params=${s} />`:l`<${_l} id=${n} />`:l`<${Ml} params=${s} />`:t==="quotes"?n?n==="new"?l`<${Wa} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${Wa} coll="quotes" id=${n} params=${s} />`:l`<${Pl} id=${n} />`:l`<${Ll} />`:t==="customers"?n?l`<${Sl} id=${n} />`:l`<${Dl} />`:t==="appointments"?l`<${Tl} params=${s} />`:t==="services"?l`<${Ol} />`:t==="expenses"?l`<${Ql} />`:t==="recurring"?l`<${Jl} />`:t==="finance"?l`<${rc} />`:t==="reports"?l`<${oc} params=${s} />`:t==="companies"?n?l`<${cc} id=${n} />`:l`<${lc} />`:t==="settings"?l`<${vc} />`:t==="audit"?l`<${wc} />`:l`<${pe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${E} onClick=${()=>j("/")}>Zum Dashboard<//><//>`:l`<${Ul} />`}function Cd({route:e}){let[t,n]=qr(a=>{console.error(a)});return ue(()=>{t&&n()},[e.raw]),t?l`<${pe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${E} onClick=${()=>{n(),j("/")}}>Zum Dashboard<//>
    <//>`:l`<${Sd} key=${e.raw} route=${e} />`}function Ed(){ge();let e=go(),[t,n]=C(!1),a=xe(),s=me();ue(()=>{n(!1)},[e.raw]),ue(()=>{let m=y.settings.theme;m==="light"||m==="dark"?document.documentElement.setAttribute("data-theme",m):document.documentElement.removeAttribute("data-theme")},[y.settings.theme]),ue(()=>{let m=u=>{if(bo())return;let d=fo(),p=y.settings.warnOnClose!==!1&&(y.settings.changesSinceBackup||0)>0;(d||p)&&(u.preventDefault(),u.returnValue="")};return window.addEventListener("beforeunload",m),()=>window.removeEventListener("beforeunload",m)},[]);let[i,r]=C(!1);ue(()=>{let m=()=>r(!0);return window.addEventListener("bbc-db-replaced",m),()=>window.removeEventListener("bbc-db-replaced",m)},[]);let o=m=>m.exact?e.path===m.path:e.path===m.path||e.path.startsWith(`${m.path}/`),c=y.expenses.filter(m=>m.status==="review").length;return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(m=>l`<i key=${m.id} style=${`background:${m.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${vd.map((m,u)=>l`<ul class="nav-group" key=${u}>
            ${m.map(d=>l`<li key=${d.path}>
              <a href=${`#${d.path}`} class=${`nav-link${o(d)?" is-active":""}`} aria-current=${o(d)?"page":void 0}>
                <${ae} name=${d.icon} /><span>${d.label}</span>
                ${d.path==="/expenses"&&c>0&&l`<span class="nav-count" title="Belege zu prüfen">${c}</span>`}
              </a>
            </li>`)}
          </ul>`)}
        </nav>
        <p class="sidebar-note">Daten liegen lokal in diesem Browser.</p>
      </aside>
      <div class="main">
        <header class="topbar">
          <button type="button" class="nav-toggle" aria-label="Navigation öffnen" aria-expanded=${t} onClick=${()=>n(!t)}><${ae} name="menu" size=${20} /></button>
          <${yd} />
          <${xd} />
          <div class="topbar-actions">
            <${kd} />
            <${Dd} />
            <${E} variant="primary" icon="plus" onClick=${()=>j("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{Gn(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${y.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${Cd} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${Co} />
    <${Eo} />
  `}async function Id(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await ro(),await il()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",ai(l`<${Ed} />`,e),Nd()}async function Nd(){if(y.settings.appVersion===ci)return;let e={invoices:y.invoices.length,customers:y.customers.length,expenses:y.expenses.length,quotes:y.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await et("appVersion",ci)}catch{}t&&!y.settings.demoLoaded&&_(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kunden, ${e.expenses} Ausgaben. Neu: Termine, Kundendokumentation, Leistungsübersicht und der USD/EUR-Umschalter oben rechts.`,"good",15e3)}window.addEventListener("unhandledrejection",e=>{e.reason&&Hn(e.reason)});Id();})();
