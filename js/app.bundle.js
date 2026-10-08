(()=>{var za,te,Xr,Wn,ei,Kr,_l,_a={},ti=[],Ml=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Lt(e,t){for(var n in t)e[n]=t[n];return e}function ni(e){var t=e.parentNode;t&&t.removeChild(e)}function Es(e,t,n){var s,a,r,i={};for(r in t)r=="key"?s=t[r]:r=="ref"?a=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?za.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return Ba(e,i,s,a,null)}function Ba(e,t,n,s,a){var r={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Xr};return te.vnode!=null&&te.vnode(r),r}function La(e){return e.children}function jn(e,t){this.props=e,this.context=t}function bn(e,t){if(t==null)return e.__?bn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?bn(e):null}function ai(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ai(e)}}function Fr(e){(!e.__d&&(e.__d=!0)&&Wn.push(e)&&!Ma.__r++||Kr!==te.debounceRendering)&&((Kr=te.debounceRendering)||ei)(Ma)}function Ma(){for(var e;Ma.__r=Wn.length;)e=Wn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Wn=[],e.some(function(t){var n,s,a,r,i,o;t.__d&&(i=(r=(n=t).__v).__e,(o=n.__P)&&(s=[],(a=Lt({},r)).__v=r.__v+1,Is(o,r,a,n.__n,o.ownerSVGElement!==void 0,r.__h!=null?[i]:null,s,i??bn(r),r.__h),oi(s,r),r.__e!=i&&ai(r)))})}function si(e,t,n,s,a,r,i,o,u,d){var c,f,m,p,h,g,$,v=s&&s.__k||ti,b=v.length;for(n.__k=[],c=0;c<t.length;c++)if((p=n.__k[c]=(p=t[c])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Ba(null,p,null,null,p):Array.isArray(p)?Ba(La,{children:p},null,null,null):p.__b>0?Ba(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(m=v[c])===null||m&&p.key==m.key&&p.type===m.type)v[c]=void 0;else for(f=0;f<b;f++){if((m=v[f])&&p.key==m.key&&p.type===m.type){v[f]=void 0;break}m=null}Is(e,p,m=m||_a,a,r,i,o,u,d),h=p.__e,(f=p.ref)&&m.ref!=f&&($||($=[]),m.ref&&$.push(m.ref,null,p),$.push(f,p.__c||h,p)),h!=null?(g==null&&(g=h),typeof p.type=="function"&&p.__k!=null&&p.__k===m.__k?p.__d=u=ri(p,u,e):u=ii(e,p,m,v,h,u),d||n.type!=="option"?typeof n.type=="function"&&(n.__d=u):e.value=""):u&&m.__e==u&&u.parentNode!=e&&(u=bn(m))}for(n.__e=g,c=b;c--;)v[c]!=null&&(typeof n.type=="function"&&v[c].__e!=null&&v[c].__e==n.__d&&(n.__d=bn(s,c+1)),ci(v[c],v[c]));if($)for(c=0;c<$.length;c++)li($[c],$[++c],$[++c])}function ri(e,t,n){var s,a;for(s=0;s<e.__k.length;s++)(a=e.__k[s])&&(a.__=e,t=typeof a.type=="function"?ri(a,t,n):ii(n,a,a,e.__k,a.__e,t));return t}function ii(e,t,n,s,a,r){var i,o,u;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=r||a.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(a),i=null;else{for(o=r,u=0;(o=o.nextSibling)&&u<s.length;u+=2)if(o==a)break e;e.insertBefore(a,r),i=r}return i!==void 0?i:a.nextSibling}function Or(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ml.test(t)?n:n+"px"}function Ra(e,t,n,s,a){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Or(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||Or(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?s||e.addEventListener(t,r?Vr:qr,r):e.removeEventListener(t,r?Vr:qr,r);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function qr(e){this.l[e.type+!1](te.event?te.event(e):e)}function Vr(e){this.l[e.type+!0](te.event?te.event(e):e)}function Is(e,t,n,s,a,r,i,o,u){var d,c,f,m,p,h,g,$,v,b,E,I=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,o=t.__e=n.__e,t.__h=null,r=[o]),(d=te.__b)&&d(t);try{e:if(typeof I=="function"){if($=t.props,v=(d=I.contextType)&&s[d.__c],b=d?v?v.props.value:d.__:s,n.__c?g=(c=t.__c=n.__c).__=c.__E:("prototype"in I&&I.prototype.render?t.__c=c=new I($,b):(t.__c=c=new jn($,b),c.constructor=I,c.render=zl),v&&v.sub(c),c.props=$,c.state||(c.state={}),c.context=b,c.__n=s,f=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),I.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Lt({},c.__s)),Lt(c.__s,I.getDerivedStateFromProps($,c.__s))),m=c.props,p=c.state,f)I.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(I.getDerivedStateFromProps==null&&$!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps($,b),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate($,c.__s,b)===!1||t.__v===n.__v){c.props=$,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(O){O&&(O.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate($,c.__s,b),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,p,h)})}c.context=b,c.props=$,c.state=c.__s,(d=te.__r)&&d(t),c.__d=!1,c.__v=t,c.__P=e,d=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(s=Lt(Lt({},s),c.getChildContext())),f||c.getSnapshotBeforeUpdate==null||(h=c.getSnapshotBeforeUpdate(m,p)),E=d!=null&&d.type===La&&d.key==null?d.props.children:d,si(e,Array.isArray(E)?E:[E],t,n,s,a,r,i,o,u),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),g&&(c.__E=c.__=null),c.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Tl(n.__e,t,n,s,a,r,i,u);(d=te.diffed)&&d(t)}catch(O){t.__v=null,(u||r!=null)&&(t.__e=o,t.__h=!!u,r[r.indexOf(o)]=null),te.__e(O,t,n)}}function oi(e,t){te.__c&&te.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){te.__e(s,n.__v)}})}function Tl(e,t,n,s,a,r,i,o){var u,d,c,f=n.props,m=t.props,p=t.type,h=0;if(p==="svg"&&(a=!0),r!=null){for(;h<r.length;h++)if((u=r[h])&&(u===e||(p?u.localName==p:u.nodeType==3))){e=u,r[h]=null;break}}if(e==null){if(p===null)return document.createTextNode(m);e=a?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,m.is&&m),r=null,o=!1}if(p===null)f===m||o&&e.data===m||(e.data=m);else{if(r=r&&za.call(e.childNodes),d=(f=n.props||_a).dangerouslySetInnerHTML,c=m.dangerouslySetInnerHTML,!o){if(r!=null)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(c||d)&&(c&&(d&&c.__html==d.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if((function(g,$,v,b,E){var I;for(I in v)I==="children"||I==="key"||I in $||Ra(g,I,null,v[I],b);for(I in $)E&&typeof $[I]!="function"||I==="children"||I==="key"||I==="value"||I==="checked"||v[I]===$[I]||Ra(g,I,$[I],v[I],b)})(e,m,f,a,o),c)t.__k=[];else if(h=t.props.children,si(e,Array.isArray(h)?h:[h],t,n,s,a&&p!=="foreignObject",r,i,r?r[0]:n.__k&&bn(n,0),o),r!=null)for(h=r.length;h--;)r[h]!=null&&ni(r[h]);o||("value"in m&&(h=m.value)!==void 0&&(h!==e.value||p==="progress"&&!h)&&Ra(e,"value",h,f.value,!1),"checked"in m&&(h=m.checked)!==void 0&&h!==e.checked&&Ra(e,"checked",h,f.checked,!1))}return e}function li(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){te.__e(s,n)}}function ci(e,t,n){var s,a;if(te.unmount&&te.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||li(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(r){te.__e(r,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&ci(s[a],t,typeof e.type!="function");n||e.__e==null||ni(e.__e),e.__e=e.__d=void 0}function zl(e,t,n){return this.constructor(e,n)}function Us(e,t,n){var s,a,r;te.__&&te.__(e,t),a=(s=typeof n=="function")?null:n&&n.__k||t.__k,r=[],Is(t,e=(!s&&n||t).__k=Es(La,null,[e]),a||_a,_a,t.ownerSVGElement!==void 0,!s&&n?[n]:a?null:t.firstChild?za.call(t.childNodes):null,r,!s&&n?n:a?a.__e:t.firstChild,s),oi(r,e)}za=ti.slice,te={__e:function(e,t){for(var n,s,a;t=t.__;)if((n=t.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(e)),a=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),a=n.__d),a)return n.__E=n}catch(r){e=r}throw e}},Xr=0,jn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Lt({},this.state),typeof e=="function"&&(e=e(Lt({},n),this.props)),e&&Lt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Fr(this))},jn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Fr(this))},jn.prototype.render=La,Wn=[],ei=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ma.__r=0,_l=0;var vn,qe,Zr,Ta=0,Ss=[],Gr=te.__b,Hr=te.__r,Wr=te.diffed,jr=te.__c,Qr=te.unmount;function Qn(e,t){te.__h&&te.__h(qe,e,Ta||t),Ta=0;var n=qe.__H||(qe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return Ta=1,Ll(di,e)}function Ll(e,t,n){var s=Qn(vn++,2);return s.t=e,s.__c||(s.__=[n?n(t):di(void 0,t),function(a){var r=s.t(s.__[0],a);s.__[0]!==r&&(s.__=[r,s.__[1]],s.__c.setState({}))}],s.__c=qe),s.__}function se(e,t){var n=Qn(vn++,3);!te.__s&&Rs(n.__H,t)&&(n.__=e,n.__H=t,qe.__H.__h.push(n))}function Ns(e,t){var n=Qn(vn++,4);!te.__s&&Rs(n.__H,t)&&(n.__=e,n.__H=t,qe.__h.push(n))}function De(e){return Ta=5,be(function(){return{current:e}},[])}function be(e,t){var n=Qn(vn++,7);return Rs(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ui(e){var t=Qn(vn++,10),n=k();return t.__=e,qe.componentDidCatch||(qe.componentDidCatch=function(s){t.__&&t.__(s),n[1](s)}),[n[0],function(){n[1](void 0)}]}function Pl(){Ss.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Aa),e.__H.__h.forEach(Cs),e.__H.__h=[]}catch(t){e.__H.__h=[],te.__e(t,e.__v)}}),Ss=[]}te.__b=function(e){qe=null,Gr&&Gr(e)},te.__r=function(e){Hr&&Hr(e),vn=0;var t=(qe=e.__c).__H;t&&(t.__h.forEach(Aa),t.__h.forEach(Cs),t.__h=[])},te.diffed=function(e){Wr&&Wr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Ss.push(t)!==1&&Zr===te.requestAnimationFrame||((Zr=te.requestAnimationFrame)||function(n){var s,a=function(){clearTimeout(r),Jr&&cancelAnimationFrame(s),setTimeout(n)},r=setTimeout(a,100);Jr&&(s=requestAnimationFrame(a))})(Pl)),qe=void 0},te.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Aa),n.__h=n.__h.filter(function(s){return!s.__||Cs(s)})}catch(s){t.some(function(a){a.__h&&(a.__h=[])}),t=[],te.__e(s,n.__v)}}),jr&&jr(e,t)},te.unmount=function(e){Qr&&Qr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Aa)}catch(n){te.__e(n,t.__v)}};var Jr=typeof requestAnimationFrame=="function";function Aa(e){var t=qe;typeof e.__c=="function"&&e.__c(),qe=t}function Cs(e){var t=qe;e.__c=e.__(),qe=t}function Rs(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function di(e,t){return typeof t=="function"?t(e):t}var mi=function(e,t,n,s){var a;t[0]=0;for(var r=1;r<t.length;r++){var i=t[r++],o=t[r]?(t[0]|=i?1:2,n[t[r++]]):t[++r];i===3?s[0]=o:i===4?s[1]=Object.assign(s[1]||{},o):i===5?(s[1]=s[1]||{})[t[++r]]=o:i===6?s[1][t[++r]]+=o+"":i?(a=e.apply(o,mi(e,o,n,["",null])),s.push(a),o[0]?t[0]|=2:(t[r-2]=0,t[r]=a)):s.push(o)}return s},Yr=new Map,l=function(e){var t=Yr.get(this);return t||(t=new Map,Yr.set(this,t)),(t=mi(this,t.get(e)||(t.set(e,t=(function(n){for(var s,a,r=1,i="",o="",u=[0],d=function(m){r===1&&(m||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,m,i):r===3&&(m||i)?(u.push(3,m,i),r=2):r===2&&i==="..."&&m?u.push(4,m,0):r===2&&i&&!m?u.push(5,0,!0,i):r>=5&&((i||!m&&r===5)&&(u.push(r,0,i,a),r=6),m&&(u.push(r,m,0,a),r=6)),i=""},c=0;c<n.length;c++){c&&(r===1&&d(),d(c));for(var f=0;f<n[c].length;f++)s=n[c][f],r===1?s==="<"?(d(),u=[u],r=3):i+=s:r===4?i==="--"&&s===">"?(r=1,i=""):i=s+i[0]:o?s===o?o="":i+=s:s==='"'||s==="'"?o=s:s===">"?(d(),r=1):r&&(s==="="?(r=5,a=i,i=""):s==="/"&&(r<5||n[c][f+1]===">")?(d(),r===3&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):s===" "||s==="	"||s===`
`||s==="\r"?(d(),r=2):i+=s),r===3&&i==="!--"&&(r=4,u=u[0])}return d(),u})(e)),t),arguments,[])).length>1?t:t[0]}.bind(Es);var ze=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),ge=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),Qt=e=>String(e).padStart(2,"0");function yn(e){return`${e.getFullYear()}-${Qt(e.getMonth()+1)}-${Qt(e.getDate())}`}var F=()=>yn(new Date),Y=()=>new Date().toISOString();function fe(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,s]=e.split("-").map(Number),a=new Date(t,n-1,s);return a.getFullYear()===t&&a.getMonth()===n-1&&a.getDate()===s}function Jn(e){let[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function Be(e,t){let n=Jn(e);return n.setDate(n.getDate()+Number(t||0)),yn(n)}function Ct(e,t,n){let[s,a,r]=e.split("-").map(Number),i=n||r,o=a-1+Number(t||0),u=s+Math.floor(o/12),d=(o%12+12)%12,c=new Date(u,d+1,0).getDate();return`${u}-${Qt(d+1)}-${Qt(Math.min(i,c))}`}function wn(e,t){let n=Jn(t).getTime()-Jn(e).getTime();return Math.round(n/864e5)}var Pa=e=>Number(e.slice(0,4)),pi=e=>Number(e.slice(5,7)),Yn=e=>e.slice(0,7),fi=e=>Math.floor((pi(e)-1)/3)+1,gi=e=>`${Pa(e)}-Q${fi(e)}`;function Bs(e,t){let n=`${e}-${Qt(t+1)}-01`,s=yn(new Date(e,t+1,0));return{from:n,to:s}}function As(e,t){let n=`${e}-${Qt((t-1)*3+1)}-01`,s=yn(new Date(e,t*3,0));return{from:n,to:s}}var Jt=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function Ye(e,t=F(),n={}){let s=Pa(t),a=pi(t)-1,r=fi(t);switch(e){case"month":return Bs(s,a);case"lastMonth":return a===0?Bs(s-1,11):Bs(s,a-1);case"quarter":return As(s,r);case"lastQuarter":return r===1?As(s-1,4):As(s,r-1);case"year":return{from:`${s}-01-01`,to:`${s}-12-31`};case"lastYear":return{from:`${s-1}-01-01`,to:`${s-1}-12-31`};case"custom":return{from:fe(n.from)?n.from:"0000-01-01",to:fe(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var Et=(e,t)=>!!e&&e>=t.from&&e<=t.to;function hi(e,t){let n=[],s=e.slice(0,7),a=t.slice(0,7),r=0;for(;s<=a&&r++<600;){n.push(s);let[i,o]=s.split("-").map(Number);s=o===12?`${i+1}-01`:`${i}-${Qt(o+1)}`}return n}function $i(e,t=F()){let n=[];for(let s=e-1;s>=0;s--)n.push(Ct(t.slice(0,7)+"-01",-s).slice(0,7));return n}var Kl=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Fl=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],gt=e=>`${Kl[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,xn=e=>Fl[Number(e.slice(5,7))-1];function Ka(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let s=!1;if(/^\(.*\)$/.test(n)&&(s=!0,n=n.slice(1,-1)),n.startsWith("-")?(s=!s,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let a=n.lastIndexOf("."),r=n.lastIndexOf(","),i;if(a>=0&&r>=0){let u=a>r?".":",",d=u==="."?",":".";i=n.split(d).join("").replace(u,".")}else if(r>=0){if(i=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(i.match(/\./g)||[]).length>1)return NaN}else if(a>=0){let u=(n.match(/\./g)||[]).length;if(i=/^\d{1,3}(\.\d{3})+$/.test(n)&&(u>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(i.match(/\./g)||[]).length>1)return NaN}else i=n;let o=Number(i);return Number.isFinite(o)?s?-o:o:NaN}var Pt=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Ae(e,...t){let n=Pt(e).trim();if(!n)return!0;let s=Pt(t.filter(a=>a!=null).join("  "));return n.split(/\s+/).every(a=>s.includes(a))}function Dn(e,t,n=[]){let s=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),a={},r={};for(let i of s){if(n.includes(i))continue;let o=e?e[i]:void 0,u=t?t[i]:void 0;JSON.stringify(o??null)!==JSON.stringify(u??null)&&(a[i]=o??null,r[i]=u??null)}return{prev:a,next:r,changed:Object.keys(r)}}function Yt(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function kn(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var _s=1,bi="bbc-finance",Ge=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets"],Sn="USD";var Ve=["USD","EUR"],Fa=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],It=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],Xn={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},Ms={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},Ol=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],ql=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],Vl=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],Cn=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],ea=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],at=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],ht={userName:"",theme:"auto",activeCompany:"all",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:Ol,serviceCategories:ql,paymentMethods:Vl,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}},reminderTemplates:{de:{1:{subject:"Zahlungserinnerung zur Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},Xt=()=>({id:ze(),createdAt:Y(),updatedAt:Y()});function ta(e={}){return{...Xt(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:Sn,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",archived:!1,...e}}function Kt(e={}){return{...Xt(),number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function Ft(e={}){return{...Xt(),name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:Sn,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function na(e={}){return{id:ze(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function ct(e,t={}){let n=F();return{...Xt(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:Sn,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function En(e,t={}){let n=F();return{...Xt(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:Sn,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function aa(e={}){return{...Xt(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:F(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:Sn,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function In(e,t={}){return{...Xt(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:F(),nextDate:F(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:Sn,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function ne(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function Ut(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var Zl=1,Oa=null,Ot=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),Gl=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function Un(e){return e==="counters"||e==="settings"?"key":"id"}var ut=[...Ge,"settings","blobs"];function Ts(){return Oa||(Oa=new Promise((e,t)=>{let n=indexedDB.open(bi,Zl);n.onupgradeneeded=()=>{let s=n.result;for(let a of ut){if(s.objectStoreNames.contains(a))continue;let r=s.createObjectStore(a,{keyPath:Un(a)});(a==="invoices"||a==="quotes")&&r.createIndex("number","number",{unique:!0}),(a==="payments"||a==="reminders")&&r.createIndex("invoiceId","invoiceId"),a==="audit"&&r.createIndex("at","at")}},n.onsuccess=()=>{let s=n.result;s.onversionchange=()=>s.close(),e(s)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),Oa)}async function Nn(e){let t=await Ts();return Ot(t.transaction(e,"readonly").objectStore(e).getAll())}async function vi(e,t){let n=await Ts();return Ot(n.transaction(e,"readonly").objectStore(e).get(t))}async function en(e,t){let s=(await Ts()).transaction(e,"readwrite"),a=Gl(s),r={get:(o,u)=>Ot(s.objectStore(o).get(u)),put:(o,u)=>Ot(s.objectStore(o).put(u)),del:(o,u)=>Ot(s.objectStore(o).delete(u)),byIndex:(o,u,d)=>Ot(s.objectStore(o).index(u).get(d)),allByIndex:(o,u,d)=>Ot(s.objectStore(o).index(u).getAll(d)),clear:o=>Ot(s.objectStore(o).clear())},i;try{i=await t(r)}catch(o){try{s.abort()}catch{}throw await a.catch(()=>{}),o}return await a,i}async function yi(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function wi(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var y={ready:!1,version:0,settings:ge(ht)},$t={};for(let e of Ge)y[e]=[],$t[e]=new Map;var Za=new Set;function Di(e){return Za.add(e),()=>Za.delete(e)}var qa=0,zs=!1;function ki(){if(y.version+=1,Va.clear(),qa){zs=!0;return}for(let e of Za)e(y.version)}async function Si(e){qa+=1;try{return await e()}finally{if(qa-=1,!qa&&zs){zs=!1;for(let t of Za)t(y.version)}}}var tn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(tn=new BroadcastChannel("bbc-finance-sync"),tn.onmessage=e=>{e.data==="changed"&&nn()})}catch{tn=null}var xi=new Set(Ge.filter(e=>e!=="rates"));async function nn(){let e=await Promise.all([...Ge,"settings"].map(n=>Nn(n)));Ge.forEach((n,s)=>{$t[n]=new Map(e[s].map(a=>[a[Un(n)],a])),y[n]=e[s]});let t=ge(ht);for(let n of e[Ge.length])Object.hasOwn(ht,n.key)&&(t[n.key]=n.value);y.settings=t,y.ready=!0,ki()}async function Ci(){await nn(),wi()}var Fe=e=>y[e],D=(e,t)=>t?$t[e].get(t):void 0,Va=new Map;function Ei(e,t){return Va.has(e)||Va.set(e,t()),Va.get(e)}function Ii(e,t){return Ei(`group:${e}:${t}`,()=>{let n=new Map;for(let s of y[e]){let a=s[t];n.has(a)||n.set(a,[]),n.get(a).push(s)}return n})}var Ui=Object.freeze([]),_e=e=>Ii("payments","invoiceId").get(e)||Ui,qt=e=>Ii("reminders","invoiceId").get(e)||Ui,Nt=e=>e&&$t.assets.get(e)?$t.assets.get(e).dataUrl:"",ve=()=>Ei("activeCompanies",()=>y.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function ye(){let e=y.settings.activeCompany;if(!e||e==="all")return null;let t=D("companies",e);return t&&!t.archived?t:null}function He(e){let t=ye();return!t||e.companyId===t.id}function Hl({action:e,entity:t,entityId:n,label:s,prev:a,next:r}){return{id:ze(),at:Y(),user:y.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:s||"",prev:a??null,next:r??null}}async function Q(e){let t=[],n=!1,s={},a=await en(ut,async i=>{let o={get:i.get,byIndex:i.byIndex,allByIndex:i.allByIndex,put(d,c){return t.push({store:d,value:c}),xi.has(d)&&d!=="audit"&&(n=!0),i.put(d,c)},del(d,c){return t.push({store:d,id:c,del:!0}),xi.has(d)&&(n=!0),i.del(d,c)},clear(d){return t.push({store:d,clear:!0}),i.clear(d)},blobPut:(d,c)=>i.put("blobs",{id:d,blob:c}),blobDel:d=>i.del("blobs",d),audit(d){let c=Hl(d);return t.push({store:"audit",value:c}),i.put("audit",c)},setting(d,c){return s[d]=c,i.put("settings",{key:d,value:c})}},u=await e(o);if(n&&!("changesSinceBackup"in s)){let d=await i.get("settings","changesSinceBackup"),c=d&&Number(d.value)||0;s.changesSinceBackup=c+1,await i.put("settings",{key:"changesSinceBackup",value:c+1})}return u}),r=new Set;for(let i of t)$t[i.store]&&(i.clear?$t[i.store]=new Map:i.del?$t[i.store].delete(i.id):$t[i.store].set(i.value[Un(i.store)],i.value),r.add(i.store));for(let i of r)y[i]=[...$t[i].values()];if(Object.keys(s).length&&(y.settings={...y.settings,...s}),ki(),tn)try{tn.postMessage("changed")}catch{}return a}function sa(){if(tn)try{tn.postMessage("changed")}catch{}}async function st(e,t){return Q(n=>n.setting(e,t))}async function Ni(e){return Q(async t=>{for(let[n,s]of Object.entries(e))await t.setting(n,s)})}function de(){let[,e]=k(y.version);return se(()=>Di(t=>e(t)),[]),y}var Ps=new Set,an=null,ra=Bi(),Ls=!1;function Bi(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),s=t.split("/").filter(Boolean).map(r=>{try{return decodeURIComponent(r)}catch{return r}}),a=Object.fromEntries(new URLSearchParams(n));return{path:"/"+s.join("/"),parts:s,params:a,raw:e}}async function Ks(){if(Ls){Ls=!1;return}let e=Bi();if(e.raw!==ra.raw){if(an){if(!await an()){Ls=!0,location.hash=ra.raw;return}an=null}ra=e;for(let t of Ps)t(ra);window.scrollTo(0,0)}}window.addEventListener("hashchange",Ks);function Z(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),Ks()):location.hash===n?Ks():location.hash=e}function Vt(e){an=null,Z(e)}function Ha(e){an=e}function rn(){an=null}var Ai=()=>!!an;function _i(){let[e,t]=k(ra);return se(()=>(Ps.add(t),()=>Ps.delete(t)),[]),e}var Wl=0,Ga=new Set,sn=[];function T(e,t="info",n){let s=++Wl;sn=[...sn,{id:s,message:String(e),tone:t}].slice(-3),Ga.forEach(a=>a(sn)),setTimeout(()=>qs(s),n||(t==="bad"?9e3:4500))}function qs(e){sn=sn.filter(t=>t.id!==e),Ga.forEach(t=>t(sn))}function Mi(){let[e,t]=k(sn);return se(()=>(Ga.add(t),()=>Ga.delete(t)),[]),e}var Ti=0;function zi(e=2e3){Ti=Date.now()+e}var Li=()=>Date.now()<Ti;function Rn(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?T("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?T("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):T(t,"bad")}async function M(e){try{return await e()}catch(t){Rn(t);return}}var Fs=new Set,Os=null;function Ri(e){Os=e,Fs.forEach(t=>t(Os))}function Pi(){let[e,t]=k(Os);return se(()=>(Fs.add(t),()=>Fs.delete(t)),[]),e}var jl=0;function ie(e){return new Promise(t=>{Ri({...e,id:++jl,resolve:n=>{Ri(null),t(n)}})})}var Wa=()=>ie({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var Ql={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010"};function ee({name:e,size:t=18,class:n=""}){let s=Ql[e];return s?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${s} />
  </svg>`:null}function Vs(e,t){let n=BigInt(e),s=BigInt(t);s<0n&&(n=-n,s=-s);let a=n<0n;a&&(n=-n);let r=(2n*n+s)/(2n*s);return Number(a?-r:r)}function Qa(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let s=Number((Math.abs(n)*t).toFixed(4)),a=Math.round(s);return n<0?-a:a}var Ja=e=>Qa(e,100);var Jl=e=>Qa(e,1e3),Fi=e=>Qa(e,100),Ki=e=>Qa(e,1e3);function Zs(e){let t=Jl(e.qty),n=Math.round(Number(e.priceCents)||0),s=Math.min(Math.max(Fi(e.discountPct),0),1e4);return Vs(BigInt(t)*BigInt(n)*BigInt(1e4-s),1000n*10000n)}function on(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),s=t.map(m=>BigInt(Math.round(m))),a=s.reduce((m,p)=>m+p,0n);if(a===0n&&(s=s.map(m=>m<0n?-m:m),a=s.reduce((m,p)=>m+p,0n),a===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let r=m=>m<0n?-m:m,i=r(a),o=a<0n?s.map(m=>-m):s,u=r(n),d=[],c=[];o.forEach((m,p)=>{let h=u*m,g=h/i,$=h%i;$<0n&&(g-=1n,$+=i),d.push(g),c.push({i:p,r:$})});let f=u-d.reduce((m,p)=>m+p,0n);c.sort((m,p)=>m.r===p.r?m.i-p.i:m.r>p.r?-1:1);for(let m=0;f>0n&&m<c.length;m++,f-=1n)d[c[m].i]+=1n;return n<0n?d.map(m=>Number(-m)||0):d.map(m=>Number(m)||0)}function dt(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:Zs(m)})),s=n.reduce((m,p)=>m+p.cents,0),a=0,r=e.discount||{},i=Number(r.value)||0;if(i>0)if(r.type==="abs")a=Math.round(i),s>=0?a=Math.min(a,s):a=-Math.min(a,-s);else{let m=Math.min(Fi(i),1e4);a=Vs(BigInt(s)*BigInt(m),10000n)}let o=new Map;for(let m of n){let p=Ki(m.taxRate),h=o.get(p)||{rate:m.taxRate,rateMilli:p,subtotalCents:0};h.subtotalCents+=m.cents,o.set(p,h)}let u=[...o.values()].sort((m,p)=>m.rateMilli-p.rateMilli),d=on(a,u.map(m=>m.subtotalCents)),c=0;u.forEach((m,p)=>{m.discountCents=d[p]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=Vs(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),c+=m.taxCents});for(let m of u){let p=n.filter(g=>Ki(g.taxRate)===m.rateMilli),h=on(m.discountCents,p.map(g=>g.cents));p.forEach((g,$)=>{g.netCents=g.cents-(h[$]||0)})}let f=s-a;return{lines:n,subtotalCents:s,discountCents:a,netCents:f,taxCents:c,totalCents:f+c,taxGroups:u.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var ja=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function Yl(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let s=Number(t.usdToEur);return Number.isFinite(s)&&s>0?1/s:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function ln(e,t,n,s){if(t===n)return e;if(!s)return null;let a=Number(s.usdToEur),r=Number.isFinite(a)&&a>0;if(t==="USD"&&n==="EUR")return r?ja(e*a):null;if(t==="EUR"&&n==="USD")return r?ja(e/a):null;let i=Yl(t,s);if(i==null)return null;let o=e*i;return n==="USD"?ja(o):n==="EUR"&&r?ja(o*a):null}var we=(e,t,n)=>ln(e,t,"USD",n),mt=(e,t,n)=>ln(e,t,"EUR",n);function bt(e,t,n={}){let s=Number(t);return!Number.isFinite(s)||s<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/s:Number(n.rateToUSD)||null,usdToEur:s,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var xe=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function vt(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let s=e.totals?e.totals.totalCents:0,a=xe(t);return a>=s?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":a>0?"partial":e.status==="sent"?"sent":"issued"}function Rt(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-xe(t),0)}var Gs=e=>e.status!=="draft"&&e.status!=="cancelled";function cn(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var Zt={de:"de-DE",en:"en-US"},Hs=new Map;function Bn(e,t){let n=e+JSON.stringify(t);return Hs.has(n)||Hs.set(n,new Intl.NumberFormat(e,t)),Hs.get(n)}function S(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let s=Number(e)/100;try{return Bn(Zt[n]||Zt.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(s)}catch{return`${s.toFixed(2)} ${t}`}}function ia(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?Bn("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):Bn("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function An(e,t,n){let s=S(e,t,n);return n==="en"?`${s} ${t}`:s}function oa(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":Bn(Zt[t]||Zt.de,{maximumFractionDigits:n}).format(Number(e))}function rt(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${Bn(Zt[t]||Zt.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function _n(e,t="de"){return Number.isFinite(Number(e))?Bn(Zt[t]||Zt.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function qi(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Vi(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function q(e,t="de"){if(!e)return"";let n=Jn(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function Me(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var Zi={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},Oi={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},Gi=(e,t)=>t==="en"&&Oi[e]?Oi[e]:e||"",Bt=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,s)=>s in t?t[s]:n);var Xl=0,un=(e="f")=>be(()=>`${e}-${++Xl}`,[]);function C({variant:e="default",icon:t,onClick:n,disabled:s,type:a="button",title:r,small:i,busy:o,children:u,class:d="",...c}){let f=`btn btn-${e}${i?" btn-small":""}${u?"":" btn-icon"}${d?` ${d}`:""}`;return l`<button type=${a} class=${f} onClick=${n} disabled=${s||o}
    title=${r} aria-label=${u?void 0:r} ...${c}>
    ${t&&l`<${ee} name=${o?"refresh":t} size=${i?16:18} class=${o?"spin":""} />`}
    ${u&&l`<span>${u}</span>`}
  </button>`}function Ce({label:e,hint:t,error:n,children:s,class:a="",htmlFor:r}){return l`<div class=${`field ${a}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${r}>${e}</label>`}
    ${s}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function K({label:e,hint:t,error:n,value:s,onInput:a,type:r="text",class:i,...o}){let u=un();return l`<${Ce} label=${e} hint=${t} error=${n} class=${i} htmlFor=${u}>
    <input id=${u} class="input" type=${r} value=${s??""} onInput=${d=>a&&a(d.target.value)} ...${o} />
  <//>`}function le({label:e,hint:t,value:n,onInput:s,rows:a=3,class:r,...i}){let o=un();return l`<${Ce} label=${e} hint=${t} class=${r} htmlFor=${o}>
    <textarea id=${o} class="input textarea" rows=${a} value=${n??""} onInput=${u=>s&&s(u.target.value)} ...${i}></textarea>
  <//>`}function me({label:e,hint:t,error:n,value:s,onChange:a,options:r,class:i,placeholder:o,...u}){let d=un();return l`<${Ce} label=${e} hint=${t} error=${n} class=${i} htmlFor=${d}>
    <select id=${d} class="input select" value=${s??""} onChange=${c=>a&&a(c.target.value)} ...${u}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${r.map(c=>{let f=typeof c=="object"?c:{id:c,label:c};return l`<option value=${f.id} selected=${String(f.id)===String(s??"")}>${f.label}</option>`})}
    </select>
  <//>`}function Oe({value:e,onChange:t,mode:n="number",digits:s=3,min:a,max:r,allowEmpty:i,class:o="",suffix:u,...d}){let c=E=>E==null||E===""?"":n==="money"?qi(E):Vi(E,s),[f,m]=k(c(e)),[p,h]=k(!1),[g,$]=k(!1);se(()=>{p||m(c(e))},[e,p]);function v(E){if(String(E).trim()===""){$(!1),t(i?null:0);return}let I=Ka(E,{decimalOnly:n!=="money"});if(Number.isNaN(I)){$(!0);return}a!=null&&I<a&&(I=a),r!=null&&I>r&&(I=r),$(!1),t(n==="money"?Ja(I):Number(I.toFixed(s)))}let b=l`<input class=${`input num ${g?"is-bad":""} ${u?`has-suffix${String(u).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${f}
    onFocus=${E=>{h(!0),E.target.select()}}
    onInput=${E=>{m(E.target.value),v(E.target.value)}}
    onBlur=${E=>{h(!1),v(E.target.value)}}
    aria-invalid=${g} ...${d} />`;return u?l`<span class="input-wrap">${b}<span class="input-suffix">${u}</span></span>`:b}function Ee({label:e,hint:t,error:n,class:s,...a}){let r=un();return l`<${Ce} label=${e} hint=${t} error=${n} class=${s} htmlFor=${r}>
    <${Oe} id=${r} ...${a} />
  <//>`}function Xe({label:e,hint:t,error:n,value:s,onInput:a,class:r,...i}){let o=un();return l`<${Ce} label=${e} hint=${t} error=${n} class=${r} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${s??""} onInput=${u=>a(u.target.value)} ...${i} />
  <//>`}function Te({label:e,checked:t,onChange:n,hint:s,disabled:a}){let r=un("c");return l`<div class="check">
    <input id=${r} type="checkbox" checked=${!!t} disabled=${a} onChange=${i=>n(i.target.checked)} />
    <label for=${r}>${e}${s&&l`<span class="check-hint">${s}</span>`}</label>
  </div>`}function la({value:e,onChange:t,options:n,label:s}){return l`<div class="seg" role="group" aria-label=${s}>
    ${n.map(a=>l`<button type="button" class=${`seg-btn${String(a.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(a.id)===String(e)} onClick=${()=>t(a.id)}>${a.label}</button>`)}
  </div>`}function ca({options:e,value:t,onChange:n,placeholder:s,onCreate:a,createLabel:r,freeText:i,text:o,onText:u,autoFocus:d,label:c,id:f,disabled:m}){let p=un("cb"),h=f||p,g=e.find(L=>L.id===t),[$,v]=k(!1),[b,E]=k(""),[I,O]=k(0),x=De(null),V=De(null),ce=i?o??"":$?b:g?g.label:"",z=be(()=>{let L=Pt(i?$?o:"":b).trim();return(L?e.filter(W=>Pt(`${W.label} ${W.sub||""} ${W.search||""}`).includes(L)):e).slice(0,50)},[e,b,o,$,i]);se(()=>{if(!$)return;let L=A=>{x.current&&!x.current.contains(A.target)&&(v(!1),E(""))};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[$]),se(()=>{d&&V.current&&V.current.focus()},[]);let w=a&&!i,R=z.length+(w?1:0);function B(L){n(L.id,L),v(!1),E("")}function G(L){if(L.key==="ArrowDown")L.preventDefault(),v(!0),O(A=>Math.min(A+1,R-1));else if(L.key==="ArrowUp")L.preventDefault(),O(A=>Math.max(A-1,0));else if(L.key==="Enter"){if(!$)return;if(i&&!z.length){v(!1);return}L.preventDefault(),I<z.length?B(z[I]):w&&(a(b),v(!1),E(""))}else L.key==="Escape"?$&&(L.stopPropagation(),v(!1),E("")):L.key==="Tab"&&(v(!1),E(""))}return l`<div class="combo" ref=${x}>
    <input ref=${V} id=${h} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${$} aria-label=${c} aria-autocomplete="list" disabled=${m}
      placeholder=${$&&g&&!i?g.label:s} value=${ce}
      onClick=${()=>{v(!0),O(0)}}
      onInput=${L=>{v(!0),O(0),i?u(L.target.value):E(L.target.value)}}
      onKeyDown=${G} />
    ${!i&&l`<span class="combo-caret"><${ee} name="chevronDown" size=${16} /></span>`}
    ${$&&R>0&&l`<ul class="combo-list" role="listbox">
      ${z.map((L,A)=>l`<li role="option" aria-selected=${A===I}
          class=${`combo-item${A===I?" is-active":""}${L.id===t?" is-selected":""}`}
          onMouseEnter=${()=>O(A)}
          onMouseDown=${W=>{W.preventDefault(),B(L)}}>
          <span class="combo-label">${L.label}</span>
          ${L.sub&&l`<span class="combo-sub">${L.sub}</span>`}
        </li>`)}
      ${w&&l`<li role="option" class=${`combo-item combo-create${I===z.length?" is-active":""}`}
          onMouseEnter=${()=>O(z.length)}
          onMouseDown=${L=>{L.preventDefault(),a(b),v(!1),E("")}}>
          <${ee} name="plus" size=${16} />
          <span>${b.trim()?`„${b.trim()}“ ${r||"neu anlegen"}`:r?`Neu: ${r}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${$&&R===0&&!i&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var ec={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function Le({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${ee} name=${n||ec[e]||"info"} size=${14} />${t}
  </span>`}function he({title:e,sub:t,back:n,children:s}){return l`<header class="page-head">
    <div class="page-head-text">
      ${n&&l`<a class="back-link" href=${n.href}><${ee} name="chevronLeft" size=${16} />${n.label}</a>`}
      <h1>${e}</h1>
      ${t&&l`<p class="page-sub">${t}</p>`}
    </div>
    ${s&&l`<div class="page-actions">${s}</div>`}
  </header>`}function ue({icon:e="file",title:t,text:n,children:s}){return l`<div class="empty">
    <div class="empty-icon"><${ee} name=${e} size=${26} /></div>
    <h3>${t}</h3>
    ${n&&l`<p>${n}</p>`}
    ${s&&l`<div class="empty-actions">${s}</div>`}
  </div>`}function j({title:e,action:t,children:n,class:s="",flush:a}){return l`<section class=${`panel ${s}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${a?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function ke({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${ee} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function Ya({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function yt({label:e="Mehr",icon:t="more",items:n,variant:s="default",small:a}){let[r,i]=k(!1),o=De(null);se(()=>{if(!r)return;let d=f=>{o.current&&!o.current.contains(f.target)&&i(!1)},c=f=>{f.key==="Escape"&&i(!1)};return document.addEventListener("mousedown",d),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",d),document.removeEventListener("keydown",c)}},[r]);let u=n.filter(Boolean);return u.length?l`<div class="menu" ref=${o}>
    <${C} variant=${s} icon=${t} small=${a} onClick=${()=>i(!r)} aria-haspopup="menu" aria-expanded=${r}>${e}<//>
    ${r&&l`<div class="menu-list" role="menu">
      ${u.map(d=>l`<button type="button" role="menuitem" class=${`menu-item${d.danger?" is-danger":""}`} disabled=${d.disabled}
        onClick=${()=>{i(!1),d.onClick()}}>
        ${d.icon&&l`<${ee} name=${d.icon} size=${16} />`}<span>${d.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function et({title:e,onClose:t,children:n,footer:s,size:a="md",onSubmit:r}){let i=De(null);se(()=>{let u=document.activeElement,d=i.current;if(d){let f=d.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");f&&f.focus()}let c=f=>{if(f.key==="Escape"&&(f.stopPropagation(),t()),f.key==="Tab"&&d){let m=[...d.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(g=>g.offsetParent!==null);if(!m.length)return;let p=m[0],h=m[m.length-1];f.shiftKey&&document.activeElement===p?(f.preventDefault(),h.focus()):!f.shiftKey&&document.activeElement===h&&(f.preventDefault(),p.focus())}};return document.addEventListener("keydown",c),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",c),document.body.classList.remove("modal-open"),u&&u.focus&&u.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${C} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${s&&l`<div class="modal-foot">${s}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${u=>{u.target===u.currentTarget&&t()}}>
    ${r?l`<form class=${`modal modal-${a}`} ref=${i} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${u=>{u.preventDefault(),r()}}>${o}</form>`:l`<div class=${`modal modal-${a}`} ref=${i} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function Hi(){let e=Pi();return e?l`<${tc} key=${e.id} d=${e} />`:null}function tc({d:e}){let[t,n]=k(e.input&&e.input.value||""),s=()=>e.resolve(e.input?null:!1),a=()=>e.resolve(e.input?t:!0);return l`<${et} title=${e.title} onClose=${s} size="sm" onSubmit=${a}
    footer=${l`
      <${C} onClick=${s}>${e.cancelLabel||"Abbrechen"}<//>
      <${C} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(r=>l`<li>${r}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${le} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${K} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function Wi(){let e=Mi();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${ee} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>qs(t.id)}><${ee} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function We({columns:e,rows:t,onRowClick:n,rowKey:s=u=>u.id,initialSort:a,footer:r,empty:i,rowClass:o}){let[u,d]=k(a||null),c=be(()=>{if(!u)return t;let m=e.find(h=>h.key===u.key);if(!m||!m.sort)return t;let p=u.dir==="desc"?-1:1;return[...t].sort((h,g)=>{let $=m.sort(h),v=m.sort(g);return $==null&&v==null?0:$==null?1:v==null?-1:typeof $=="number"&&typeof v=="number"?($-v)*p:String($).localeCompare(String(v),"de",{numeric:!0})*p})},[t,u,e]);if(!t.length&&i)return i;let f=m=>{m.sort&&d(p=>p&&p.key===m.key?{key:m.key,dir:p.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
    <table class="table">
      <thead><tr>
        ${e.map(m=>l`<th class=${`${m.align==="right"?"r":""} ${m.class||""}`} style=${m.width?`width:${m.width}`:""}
            aria-sort=${u&&u.key===m.key?u.dir==="asc"?"ascending":"descending":void 0}>
          ${m.sort?l`<button type="button" class="th-btn" onClick=${()=>f(m)}>${m.label}
                ${u&&u.key===m.key&&l`<${ee} name=${u.dir==="asc"?"arrowUp":"arrowDown"} size=${13} />`}</button>`:m.label}
        </th>`)}
      </tr></thead>
      <tbody>
        ${c.map(m=>l`<tr key=${s(m)} class=${`${n?"is-click":""} ${o?o(m):""}`}
            tabindex=${n?0:void 0}
            onClick=${n?p=>{p.target.closest("button, a, input, select")||n(m)}:void 0}
            onKeyDown=${n?p=>{p.key==="Enter"&&p.target===p.currentTarget&&n(m)}:void 0}>
          ${e.map(p=>l`<td class=${`${p.align==="right"?"r":""} ${p.class||""}`}>${p.render?p.render(m):m[p.key]}</td>`)}
        </tr>`)}
      </tbody>
      ${r&&l`<tfoot><tr>${r.map((m,p)=>l`<td class=${e[p]&&e[p].align==="right"?"r":""}>${m}</td>`)}</tr></tfoot>`}
    </table>
  </div>`}function Mn({options:e,value:t,onChange:n,label:s}){return l`<div class="chips" role="group" aria-label=${s}>
    ${e.map(a=>l`<button type="button" class=${`chip${a.id===t?" is-on":""}`} aria-pressed=${a.id===t}
      onClick=${()=>n(a.id)}>${a.label}${a.count!=null&&l`<span class="chip-count">${a.count}</span>`}</button>`)}
  </div>`}function it({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${ee} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${s=>t(s.target.value)} />
  </div>`}function Ie({label:e,value:t,sub:n,tone:s,href:a,title:r}){let i=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${s?` tone-${s}`:""}`} title=${r}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return a?l`<a class="stat is-link" href=${a}>${i}</a>`:l`<div class="stat">${i}</div>`}function Gt({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var nc=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function Ws(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),s=String(e.region||"").trim();return nc.test(String(e.country||"").trim())?[n?s?`${n},`:n:"",s,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var js=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),ac=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function sc(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function ot(e,t,n={}){let s=sc(e,t),a=e.status==="draft",r=e.snapshot&&e.snapshot.company||D("companies",e.companyId)||{},i=e.snapshot&&e.snapshot.customer||D("customers",e.customerId)||null,o=e.language==="en"?"en":"de",u=Zi[o],d=e.currency||"USD",c=!a&&e.totals?e.totals:dt(e),f=U=>S(U,d,o),m=[r.name,js(r),Ws(r)].filter(Boolean).join(" · "),p=[];if(i){let U=Ut(i);i.company&&p.push(i.company),U&&U!==i.company&&p.push(U);let $e=js(i);$e&&p.push($e);let Ne=Ws(i);Ne&&p.push(Ne),i.country&&!ac(i.country,r.country)&&p.push(i.country)}let h=[];i&&i.vatId&&h.push(`${u.vatId}: ${i.vatId}`);let g=e.number||n.previewNumber||"",$=[];$.push([u[`number_${s}`],g||`(${u.draft})`]),$.push([u[`date_${s}`],q(e.issueDate,o)]),s!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?$.push([u.servicePeriod,`${q(e.serviceDate,o)} – ${q(e.serviceDateEnd,o)}`]):$.push([u.serviceDate,q(e.serviceDate,o)])),s==="invoice"&&e.dueDate&&$.push([u.dueDate,q(e.dueDate,o)]),s==="quote"&&e.validUntil&&$.push([u.validUntil,q(e.validUntil,o)]),i&&i.number&&$.push([u.customerNo,i.number]);let v="";if(s==="credit_note"&&e.relatedInvoiceId){let U=D("invoices",e.relatedInvoiceId);U&&(v=Bt(u.refInvoice,{NUMBER:U.number,DATE:q(U.issueDate,o)}))}let b=e.items||[],E=b.some(U=>Number(U.discountPct)>0),O=new Set(b.map(U=>Number(U.taxRate)||0)).size>1,x=new Map(c.lines.map(U=>[U.id,U])),V=b.map((U,$e)=>({pos:String($e+1),name:U.name||"",description:U.description||"",qty:oa(U.qty,o,3),unit:Gi(U.unit,o),price:f(U.priceCents),discount:Number(U.discountPct)>0?rt(U.discountPct,o):"",tax:rt(Number(U.taxRate)||0,o),amount:f(x.has(U.id)?x.get(U.id).cents:0)})),ce=String(r.taxLabel||"").trim()||u.taxDefault,z=c.taxGroups.filter(U=>Number(U.rate)!==0),w=[],R=c.discountCents!==0;if((R||z.length)&&w.push({label:u.subtotal,value:f(c.subtotalCents)}),R){let U=e.discount||{},$e=U.type==="abs"?u.discount:`${u.discount} ${rt(U.value,o)}`;w.push({label:$e,value:f(-c.discountCents)}),z.length&&w.push({label:u.net,value:f(c.netCents)})}for(let U of z){let $e=z.length>1?` (${f(U.netCents)})`:"";w.push({label:`${ce} ${rt(U.rate,o)}${$e}`,value:f(U.taxCents)})}w.push({label:u[`total_${s}`]||u.total,value:An(c.totalCents,d,o),strong:!0});let B=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(d==="USD"||d==="EUR")){let U=d==="USD"?"EUR":"USD",$e=ln(c.totalCents,d,U,e.fx);if($e!=null){let Ne=d==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);B={line:`${u.approx} ${An($e,U,o)}`,fx:r.showFxNote===!1?"":`${u.fxUsed}: 1 ${d} = ${_n(Ne,o)} ${U}`}}}let G=[];s==="invoice"&&e.dueDate&&G.push(Bt(u.dueLine,{DATE:q(e.dueDate,o)})),s==="quote"&&e.validUntil&&G.push(Bt(u.validLine,{DATE:q(e.validUntil,o)})),s!=="credit_note"&&String(e.paymentTerms||"").trim()&&G.push(e.paymentTerms.trim()),String(r.taxNote||"").trim()&&G.push(r.taxNote.trim());let L=null;if(s==="invoice"){let U=[];r.accountHolder&&U.push([u.holder,r.accountHolder]),r.bankName&&U.push([u.bank,r.bankName]),r.iban&&U.push(["IBAN",r.iban]),r.bic&&U.push(["BIC",r.bic]);let $e=[r.altBank,r.otherPayment].map(Ne=>String(Ne||"").trim()).filter(Boolean);(U.length||$e.length)&&(L={title:u.payment,rows:U,extra:$e})}let A=[r.name,js(r),Ws(r),r.country].filter(Boolean),W=[r.phone?`${u.phone} ${r.phone}`:"",r.email,r.website].filter(Boolean),N=[r.taxId?`${u.taxId}: ${r.taxId}`:"",r.vatId?`${u.vatId}: ${r.vatId}`:"",r.registerInfo].filter(Boolean),J=ne(i),ae=g?`${g} ${J}`:`${u.draft} ${u[s]} ${J}`;return{kind:s,lang:o,isDraft:a,brandColor:/^#[0-9a-f]{6}$/i.test(r.brandColor||"")?r.brandColor:"#1E4D8C",logoUrl:Nt(r.logoAssetId),companyName:r.name||"",title:u[s],number:g,subtitle:v,draftMark:a?u.draftMark:"",senderLine:m,recipient:p,recipientExtra:h,meta:$,intro:String(e.intro||"").trim(),columns:{discount:E,tax:O},labels:u,rows:V,sums:w,secondary:B,notes:G,payment:L,footerCols:[A,W,N].filter(U=>U.length),footerText:String(e.footer||"").trim(),fileName:`${Yt(ae)}.pdf`}}var rc=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function ji(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(s=>[s.name,s.description,s.unit]),...e.sums.flatMap(s=>[s.label,s.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let s of t)for(let a of String(s||""))rc.test(a)||n.add(a);return[...n].slice(0,16).join(" ")}var ic=8e3;async function oc(e){let t=new AbortController,n=setTimeout(()=>t.abort(),ic);try{let s=await fetch(e,{signal:t.signal,cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);return await s.json()}finally{clearTimeout(n)}}var Qs=e=>Number.isFinite(Number(e))&&Number(e)>0,Js={frankfurterV2(e,t,n){if(!e||!Qs(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let s=e&&e.rates&&e.rates[n];if(!Qs(s))throw new Error("Unerwartete Antwort");return{rate:Number(s),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let s=e&&e.result==="success"&&e.rates&&e.rates[n];if(!Qs(s))throw new Error("Unerwartete Antwort");let a=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(s),date:a,source:"ExchangeRate-API (open.er-api.com)"}}};function lc(e,t,n){let s=n&&n<F(),a=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${s?`?date=${n}`:""}`,parse:Js.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${s?n:"latest"}?base=${e}&symbols=${t}`,parse:Js.frankfurterV1}];return s||a.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Js.erApi}),a}async function Qi(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||F(),fetchedAt:Y(),source:"gleiche Währung"};let s=n&&n<F()?n:F(),a=cc(e,t,s);if(a)return a;let r=null;for(let o of lc(e,t,n))try{let u=await oc(o.url),d=o.parse(u,e,t),c={id:`${e}_${t}_${s}`,base:e,quote:t,rate:d.rate,date:d.date||s,requestedDate:s,fetchedAt:Y(),source:d.source};return await Q(f=>f.put("rates",c)).catch(()=>{}),c}catch(u){r=u}let i=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw i.cause=r,i}function dn(e){let t=F();return e&&e<t?e:t}function cc(e,t,n){let s=`${e}_${t}_${n}`,a=Fe("rates").find(r=>r.id===s);return!a||n===F()&&Date.now()-new Date(a.fetchedAt).getTime()>6*3600*1e3?null:a}function Ys(e,t){let n=Fe("rates").filter(s=>s.base===e&&s.quote===t);return n.length?n.sort((s,a)=>s.fetchedAt<a.fetchedAt?1:-1)[0]:null}async function ua(e,t){let n=await Qi("USD","EUR",t),s=1,a=n.source;if(e==="EUR")s=1/n.rate;else if(e!=="USD"){let r=await Qi(e,"USD",t);s=r.rate,a=r.source}return{rateToUSD:s,usdToEur:n.rate,date:n.date,forDate:dn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:a,manual:!1}}var uc=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],dc={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function wt(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(s=>!uc.includes(s));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function mc(e,t){let n=String(e||""),s=t.slice(0,4),a=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${s}-${a}`:`M${a}-${s}`:n.includes("{YEAR}")?s:"all"}function mn(e,t,n,s){return`${e}:${t}:${mc(n,s)}`}function Xs(e,{prefix:t,dateISO:n,n:s,digits:a}){let r=Math.min(Math.max(Number(a)||3,1),10),i={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(s).padStart(r,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>i[o]).replace(/\s+/g," ").trim()}function pt(e,t){let n=dc[t],s=e[n.prefix];return t==="credit"&&!String(s||"").trim()&&(s=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(s||"").trim()&&(s=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:s,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function er(e,t,n,s,a){let{prefix:r,pattern:i,digits:o}=pt(e,t),u=wt(i);if(u)throw new Error(u);let d=Number(s)||0;for(let c=0;c<1e5;c++){d+=1;let f=Xs(i,{prefix:r,dateISO:n,n:d,digits:o});if(!await a(f))return{number:f,n:d}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var Se=e=>({...e,updatedAt:Y()}),pe=class extends Error{},P=e=>{throw new pe(e)},Yi={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},tr=e=>fe(e)&&e>="2000-01-01"&&e<="2100-12-31";async function da(e,t){for(let i of["invoicePattern","quotePattern","creditPattern"]){let o=wt(e[i]);o&&P(o)}String(e.name||"").trim()||P("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&P("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let i of Fe("companies"))if(!(i.id===e.id||i.archived))for(let o of["invoice","quote","credit"]){let u=pt(e,o),d=pt(i,o);u.pattern.includes("{COMPANY}")&&u.pattern===d.pattern&&String(u.prefix).trim().toLowerCase()===String(d.prefix).trim().toLowerCase()&&P(`${i.name} verwendet für ${Yi[o]} bereits das Präfix „${d.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=D("companies",e.id),s=Se(e),a=null;t&&(a={id:await pc(t),dataUrl:t,createdAt:Y()},s={...s,logoAssetId:a.id});let r=Dn(n,s,["updatedAt","createdAt"]);return await Q(async i=>{a&&await i.put("assets",a),await i.put("companies",s),await i.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:s.id,label:s.name,prev:n?r.prev:null,next:r.next})}),s}async function Xi(e,t){let n=D("companies",e);if(!n)return;let s=Se({...n,archived:t});await Q(async a=>{await a.put("companies",s),t&&y.settings.activeCompany===e&&await a.setting("activeCompany","all"),await a.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function ar(e){return Fe("invoices").some(t=>t.companyId===e)||Fe("quotes").some(t=>t.companyId===e)||Fe("expenses").some(t=>t.companyId===e)||Fe("recurring").some(t=>t.companyId===e)}async function eo(e){let t=D("companies",e);t&&(ar(e)&&P("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await Q(async n=>{await n.del("companies",e),y.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:sr(t)})}))}async function pc(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+ze()}var sr=e=>{let t=ge(e);return delete t.snapshot,t};function rr(){let e=0;for(let t of Fe("customers")){let n=/^K-(\d+)$/.exec(t.number||"");n&&(e=Math.max(e,Number(n[1])))}return`K-${String(e+1).padStart(4,"0")}`}async function Xa(e){ne(e)||P("Bitte ein Unternehmen oder einen Namen eintragen.");let t=D("customers",e.id),n=Se({...e});String(n.number||"").trim()||(n.number=rr());let s=Fe("customers").find(r=>r.id!==n.id&&r.number===n.number);s&&P(`Die Kundennummer ${n.number} ist bereits vergeben (${ne(s)}).`);let a=Dn(t,n,["updatedAt","createdAt"]);return await Q(async r=>{await r.put("customers",n),await r.audit({action:t?"Kunde geändert":"Kunde angelegt",entity:"customers",entityId:n.id,label:ne(n),prev:t?a.prev:null,next:a.next})}),n}function ir(e){return Fe("invoices").some(t=>t.customerId===e)||Fe("quotes").some(t=>t.customerId===e)||Fe("recurring").some(t=>t.customerId===e)}async function to(e){let t=D("customers",e);t&&(ir(e)&&P("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await Q(async n=>{await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:ne(t),prev:t})}))}async function es(e){String(e.name||"").trim()||P("Bitte einen Namen für die Leistung eintragen.");let t=D("services",e.id),n=Se(e),s=Dn(t,n,["updatedAt","createdAt"]);return await Q(async a=>{await a.put("services",n),await a.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?s.prev:null,next:s.next})}),n}async function no(e){let t=D("services",e);t&&await Q(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function tt(e,t){return na({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function or(e){return fe(e.issueDate)?Be(e.issueDate,Number(e.paymentTermDays)||0):""}function Tn(e){let t=Se({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=or(t)),t.fx&&Ve.includes(t.currency)&&(t.fx=bt(t.currency,t.fx.usdToEur,t.fx)),t.totals=dt(t),t}function ao(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new pe(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let s of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[s]!=null?e[s]=ge(t[s]):delete e[s];return n}async function ts(e){let t=D("invoices",e.id);t&&t.status!=="draft"&&P("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&P("Nur Entwürfe können gespeichert werden.");let n=Tn(e);return await Q(async s=>{let a=await s.get("invoices",n.id);if(a&&a.status!=="draft")throw new pe("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");ao(n,a),await s.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await s.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await s.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${ne(D("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function lr(e){let t=D("invoices",e);if(t){if(t.number||t.status!=="draft"){await cr(e);return}await Q(async n=>{let s=await n.get("invoices",e);if(s&&(s.status!=="draft"||s.number))throw new pe("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await so(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:sr(t)})})}}async function cr(e){let t=D("invoices",e);return t?t.type==="credit_note"?dr(e):t.status==="draft"&&!t.number?(await lr(e),{number:""}):Q(async n=>{let s=await n.get("invoices",e);if(!s)return null;let a=await n.allByIndex("payments","invoiceId",e),r=await n.allByIndex("reminders","invoiceId",e),i=s.creditNoteId?await n.get("invoices",s.creditNoteId):null;i&&(await n.del("invoices",i.id),await nr(n,i,"credit"));for(let d of a)await n.del("payments",d.id);for(let d of r)await n.del("reminders",d.id);await n.del("invoices",e);let o=await nr(n,s,"invoice");await so(n,s);let u=s.snapshot&&s.snapshot.customer||await n.get("customers",s.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:s.number,prev:{number:s.number,status:s.status,totalCents:s.totals?s.totals.totalCents:0,currency:s.currency,issueDate:s.issueDate,customer:ne(u)||"",...a.length?{paymentsDeleted:a.length,paidCents:xe(a)}:{},...r.length?{remindersDeleted:r.length}:{},...i?{creditNote:i.number}:{},doc:ge(s),related:{payments:a,reminders:r,creditNote:i||null}},next:{freedNumber:o||""}}),{number:s.number,freed:o,payments:a.length,reminders:r.length,creditNumber:i?i.number:""}}):null}function ns(e,t="invoice"){let n=[],s=D("companies",e.companyId);s||n.push("Unternehmen auswählen"),D("customers",e.customerId)||n.push("Kunde auswählen"),fe(e.issueDate)?tr(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let a=e.items||[];if(a.length||n.push("Mindestens eine Position hinzufügen"),a.some(r=>!String(r.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!fe(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&fe(e.issueDate)&&e.fx.forDate!==dn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),Ve.includes(e.currency)||n.push("Währung wählen"),s&&D("customers",e.customerId)){let r=ji(ot(e,t==="quote"?"quotes":"invoices"));r&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${r} – bitte in lateinischer Schrift eintragen`)}if(s){let r=wt(pt(s,t==="quote"?"quote":"invoice").pattern);r&&n.push(r)}return n}async function ma(e,t,n){if(!e||!fe(n))return"";let{pattern:s}=pt(e,t);if(wt(s))return"";let a=mn(e.id,t,s,n),r=D("counters",a),i=new Set([...Fe("invoices"),...Fe("quotes")].map(u=>u.number).filter(Boolean)),{number:o}=await er(e,t,n,r?r.last:0,u=>i.has(u));return o}async function ur(e,t,n,s){let{pattern:a}=pt(t,n),r=mn(t.id,n,a,s),i=await e.get("counters",r)||{key:r,companyId:t.id,kind:n,last:0},{number:o,n:u}=await er(t,n,s,i.last,async d=>!!await e.byIndex("invoices","number",d)||!!await e.byIndex("quotes","number",d));return await e.put("counters",{...i,last:u,updatedAt:Y()}),{number:o,ref:{key:r,n:u}}}async function nr(e,t,n){if(!t||!t.number)return null;let s=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!s){let r=await e.get("companies",t.companyId);if(!r||!fe(t.issueDate))return null;let{prefix:i,pattern:o,digits:u}=pt(r,n);if(wt(o))return null;let d=mn(r.id,n,o,t.issueDate),c=await e.get("counters",d);if(!c)return null;for(let f=Number(c.last)||0;f>=1;f--)if(Xs(o,{prefix:i,dateISO:t.issueDate,n:f,digits:u})===t.number){s={key:d,n:f};break}if(!s)return null}let a=await e.get("counters",s.key);return a?((Number(a.last)||0)>=s.n&&await e.put("counters",{...a,last:s.n-1,updatedAt:Y()}),t.number):null}async function so(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===Ct(t.issueDate,is(n),n.anchorDay)&&await e.put("recurring",Se({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",Se({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function ro(e,t,n,s){let{pattern:a}=pt(e,t),r=mn(e.id,t,a,n),i=D("counters",r),o=Math.max(0,Math.floor(Number(s)||0));await Q(async u=>{await u.put("counters",{key:r,companyId:e.id,kind:t,last:o,updatedAt:Y()}),await u.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${Yi[t]||t}`,prev:{last:i?i.last:0},next:{last:o}})})}function io(e,t){return{company:ge(e),customer:ge(t),at:Y()}}async function pa(e){let t=ns(e,"invoice");t.length&&P(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=D("companies",e.companyId),s=D("customers",e.customerId),a=D("invoices",e.id);a&&a.status!=="draft"&&P("Diese Rechnung ist bereits erstellt.");let r=Tn(e);return Q(async i=>{let o=await i.get("invoices",r.id);if(o&&o.status!=="draft")throw new pe("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let u=ao(r,o),d=u?r.reopened||{}:null;if(!u){let c=await ur(i,n,"invoice",r.issueDate);r.number=c.number,r.numberRef=c.ref}if(r.status="issued",r.finalizedAt=Y(),r.sentAt=null,r.snapshot=io(n,s),u&&(r.revision=(Number(r.revision)||0)+1,delete r.reopened),await i.put("invoices",r),await i.audit({action:u?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:r.id,label:r.number,prev:u?{totalCents:d.totalCents,currency:d.currency,issueDate:d.issueDate,customer:d.customer,usdToEur:d.usdToEur}:void 0,next:{number:r.number,totalCents:r.totals.totalCents,currency:r.currency,...u?{issueDate:r.issueDate,customer:ne(s)}:{},usdToEur:r.fx.usdToEur,fxSource:r.fx.source,fxManual:r.fx.manual}}),r.quoteId){let c=await i.get("quotes",r.quoteId);c&&c.status!=="invoiced"&&await i.put("quotes",Se({...c,status:"invoiced",invoiceId:r.id}))}return r})}async function oo(e){let t=D("invoices",e);return t||P("Rechnung nicht gefunden."),t.type==="credit_note"&&P("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||P("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),Q(async n=>{let s=await n.get("invoices",e);if(!s||s.type==="credit_note"||!["issued","sent"].includes(s.status))throw new pe("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let a=s.snapshot&&s.snapshot.customer||await n.get("customers",s.customerId),r={totalCents:s.totals?s.totals.totalCents:0,currency:s.currency,issueDate:s.issueDate,customer:ne(a)||"",usdToEur:s.fx?s.fx.usdToEur:null},i=Y(),o=Se({...s,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:s.firstFinalizedAt||s.finalizedAt||null,reopened:{at:i,finalizedAt:s.finalizedAt||null,wasSent:s.status==="sent",sentAt:s.sentAt||null,...r}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:s.number,prev:{status:s.status,...r,doc:ge(s)},next:{status:"draft"}}),o})}async function pn(e,t=!0){let n=D("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let s=Se({...n,status:t?"sent":"issued",sentAt:t?Y():null});await Q(async a=>{await a.put("invoices",s),await a.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:s.status}})})}async function as(e,t,n){let s=D(e,t);s&&await Q(async a=>{await a.put(e,Se({...s,internalNotes:n})),await a.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:s.number||"Entwurf",prev:{internalNotes:s.internalNotes},next:{internalNotes:n}})})}async function fa(e,{date:t,amountCents:n,method:s,note:a,clarify:r}){let i=D("invoices",e);i||P("Rechnung nicht gefunden."),(i.type==="credit_note"||["draft","cancelled","credited"].includes(i.status))&&P("Zu diesem Beleg können keine Zahlungen erfasst werden."),fe(t)||P("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||P("Bitte einen Zahlungsbetrag größer als null eintragen."),o>Rt(i,_e(e))&&P("Der Betrag ist höher als der offene Rechnungsbetrag.");let u={id:ze(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:o,currency:i.currency,method:s||"",note:a||"",createdAt:Y()};return await Q(async d=>{let c=await d.get("invoices",e),f=await d.allByIndex("payments","invoiceId",e);if(!c||c.type==="credit_note"||["draft","cancelled","credited"].includes(c.status))throw new pe("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>Rt(c,f))throw new pe("Der Betrag ist höher als der offene Rechnungsbetrag.");await d.put("payments",u);let m=[...f,u];await d.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{status:vt(c,f,F()),paidCents:xe(f)},next:{status:vt(c,m,F()),paidCents:xe(m),amountCents:o,date:t,method:s}});let p=String(r||"").trim();p&&(await d.put("invoices",Se({...c,clarify:{note:p,at:Y()}})),await d.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:i.number,prev:c.clarify?{note:c.clarify.note}:null,next:{note:p}}))}),u}async function lo(e,{date:t,amountCents:n,method:s,note:a}){D("payments",e)||P("Zahlung nicht gefunden."),fe(t)||P("Bitte ein gültiges Zahlungsdatum eintragen.");let i=Math.round(Number(n));return i>0||P("Bitte einen Betrag größer als null eintragen."),Q(async o=>{let u=await o.get("payments",e);if(!u)throw new pe("Diese Zahlung gibt es nicht mehr.");let d=u.amountCents<0,c=await o.get("invoices",u.invoiceId),f=(await o.allByIndex("payments","invoiceId",u.invoiceId)).filter(v=>v.id!==e),m=d?-i:i,p=xe(f)+m;if(p<0)throw new pe(d?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let h=c&&c.totals?c.totals.totalCents:null;if(!d&&h!=null&&p>h)throw new pe("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let g={...u,date:t,amountCents:m,method:s||"",note:a||"",updatedAt:Y()},$=Dn(u,g,["updatedAt","createdAt"]);return Object.keys($.next).length&&(await o.put("payments",g),await o.audit({action:d?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:u.invoiceId,label:c?c.number:"",prev:$.prev,next:$.next})),g})}async function co(e,t){let n=String(t||"").trim();return n||P("Bitte kurz notieren, was zu klären ist."),Q(async s=>{let a=await s.get("invoices",e);if(!a||a.status==="draft")throw new pe("Zu diesem Beleg lässt sich keine Klärung vermerken.");let r=Se({...a,clarify:{note:n,at:a.clarify&&a.clarify.at||Y()}});return await s.put("invoices",r),await s.audit({action:a.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:a.number,prev:a.clarify?{note:a.clarify.note}:null,next:{note:n}}),r})}async function uo(e,t){return Q(async n=>{let s=await n.get("invoices",e);if(!s||!s.clarify)return s;let a=Se({...s});return delete a.clarify,await n.put("invoices",a),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:s.number,prev:{note:s.clarify.note},next:{result:String(t||"").trim()}}),a})}async function mo(e,{date:t,amountCents:n,method:s,note:a}){let r=D("invoices",e);r||P("Rechnung nicht gefunden."),r.status!=="credited"&&P("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),fe(t)||P("Bitte ein gültiges Datum eintragen.");let i=Math.round(Number(n));i>0||P("Bitte einen Betrag größer als null eintragen.");let o={id:ze(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:-i,currency:r.currency,method:s||"",note:a||"",kind:"refund",createdAt:Y()};return await Q(async u=>{let d=await u.allByIndex("payments","invoiceId",e);if(i>xe(d))throw new pe("Der Betrag ist höher als die eingegangenen Zahlungen.");await u.put("payments",o),await u.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{paidCents:xe(d)},next:{paidCents:xe(d)-i,amountCents:-i,date:t,method:s}})}),o}async function po(e){let t=D("payments",e);if(!t)return;let n=D("invoices",t.invoiceId);await Q(async s=>{let a=(await s.allByIndex("payments","invoiceId",t.invoiceId)).filter(r=>r.id!==e);if(xe(a)<0)throw new pe("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await s.del("payments",e),await s.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function ss(e,t){let n=D("invoices",e);n&&(n.type==="credit_note"&&P("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||P("Diese Rechnung kann nicht storniert werden."),xe(_e(e))>0&&P("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await Q(async s=>{let a=await s.get("invoices",e),r=await s.allByIndex("payments","invoiceId",e);if(!a||!["issued","sent"].includes(a.status))throw new pe("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(xe(r)>0)throw new pe("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let i=Se({...a,status:"cancelled",statusBeforeCancel:a.status,cancelledAt:Y(),cancelReason:t||""});await s.put("invoices",i),await s.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function fo(e){return Q(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new pe("Diese Rechnung ist nicht storniert.");let s=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",a=Se({...n,status:s});return delete a.statusBeforeCancel,delete a.cancelledAt,delete a.cancelReason,await t.put("invoices",a),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:s}}),a})}async function rs(e,t){let n=D("invoices",e);n||P("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&P("Für diesen Beleg kann keine Gutschrift erstellt werden.");let s=D("companies",n.companyId);s||P("Das Unternehmen dieser Rechnung existiert nicht mehr.");let a=F(),r={...ct(s),type:"credit_note",customerId:n.customerId,issueDate:a,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(i=>({...i,id:ze(),qty:-Number(i.qty)})),discount:ge(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:ge(n.fx),relatedInvoiceId:n.id,status:"issued"};return r.totals=dt(r),Q(async i=>{let o=await i.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new pe("Die Rechnung wurde zwischenzeitlich geändert.");let u=await ur(i,s,"credit",r.issueDate);return r.number=u.number,r.numberRef=u.ref,r.finalizedAt=Y(),r.snapshot={company:ge(s),customer:ge(n.snapshot?n.snapshot.customer:D("customers",n.customerId)),at:Y()},await i.put("invoices",r),await i.put("invoices",Se({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:r.id})),await i.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${r.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:r.number,totalCents:r.totals.totalCents,reason:t||""}}),r})}async function dr(e){let t=D("invoices",e);t||P("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||P("Zu dieser Rechnung gibt es keine Gutschrift."),Q(async s=>{let a=await s.get("invoices",n);if(!a||a.type!=="credit_note")throw new pe("Diese Gutschrift gibt es nicht mehr.");let r=a.relatedInvoiceId?await s.get("invoices",a.relatedInvoiceId):null;if(r&&(await s.allByIndex("payments","invoiceId",r.id)).some(d=>d.amountCents<0))throw new pe(`Zur Rechnung ${r.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await s.del("invoices",n);let i=await nr(s,a,"credit"),o="";if(r&&r.status==="credited"){o=["issued","sent"].includes(r.statusBeforeCredit)?r.statusBeforeCredit:r.sentAt?"sent":"issued";let u=Se({...r,status:o});delete u.creditNoteId,delete u.statusBeforeCredit,await s.put("invoices",u)}return await s.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:r?r.id:n,label:r?`${a.number} zu ${r.number}`:a.number,prev:{status:r?r.status:"credit_note",creditNote:a.number,totalCents:a.totals?a.totals.totalCents:0,doc:ge(a)},next:{...o?{status:o}:{},freedNumber:i||""}}),{creditNumber:a.number,invoiceId:r?r.id:"",invoiceNumber:r?r.number:""}})}function go(e){let t=D("companies",e.companyId);return{...ct(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:ze()})),discount:ge(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function ho(e){let t=D("quotes",e.id);t&&t.status!=="draft"&&P("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=Tn(e);return await Q(async s=>{let a=await s.get("quotes",n.id);if(a&&a.status!=="draft")throw new pe("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await s.put("quotes",n),await s.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${ne(D("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function $o(e){let t=D("quotes",e);t&&(t.status!=="draft"&&P("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await Q(async n=>{let s=await n.get("quotes",e);if(s&&s.status!=="draft")throw new pe("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:sr(t)})}))}async function ga(e){let t=ns(e,"quote");t.length&&P(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=D("companies",e.companyId),s=D("customers",e.customerId),a=D("quotes",e.id);a&&a.status!=="draft"&&P("Dieses Angebot ist bereits erstellt.");let r=Tn(e);return Q(async i=>{let o=await i.get("quotes",r.id);if(o&&o.status!=="draft")throw new pe("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let u=await ur(i,n,"quote",r.issueDate);return r.number=u.number,r.numberRef=u.ref,r.status="open",r.finalizedAt=Y(),r.snapshot=io(n,s),await i.put("quotes",r),await i.audit({action:"Angebot erstellt",entity:"quotes",entityId:r.id,label:r.number,next:{number:r.number,totalCents:r.totals.totalCents,currency:r.currency}}),r})}var Ji={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function fn(e,t){let n=D("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!Ji[t])return;let s=Se({...n,status:t,sentAt:t==="sent"?Y():n.sentAt,decidedAt:["accepted","declined"].includes(t)?Y():null});await Q(async a=>{await a.put("quotes",s),await a.audit({action:Ji[t],entity:"quotes",entityId:e,label:n.number,prev:{status:n.status},next:{status:t}})})}async function bo(e){let t=D("quotes",e);t||P("Angebot nicht gefunden."),t.status==="draft"&&P("Bitte das Angebot zuerst erstellen."),t.invoiceId&&D("invoices",t.invoiceId)&&P("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=D("companies",t.companyId);n||P("Das Unternehmen dieses Angebots existiert nicht mehr.");let s=D("customers",t.customerId),a=Tn({...ct(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(r=>({...r,id:ze()})),discount:ge(t.discount),paymentTermDays:s&&s.paymentTermDays!=null&&s.paymentTermDays!==""?Number(s.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await Q(async r=>{let i=await r.get("quotes",t.id);if(!i||i.status==="draft")throw new pe("Das Angebot wurde zwischenzeitlich geändert.");if(i.invoiceId&&await r.get("invoices",i.invoiceId))throw new pe("Zu diesem Angebot gibt es bereits eine Rechnung.");await r.put("invoices",a),await r.put("quotes",Se({...i,status:i.status==="declined"?i.status:"accepted",invoiceId:a.id,decidedAt:i.decidedAt||Y()})),await r.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:t.number,next:{invoiceDraftId:a.id}})}),a}async function Ht(e){let t=D("expenses",e.id),n=Se({...e});n.status!=="review"&&(D("companies",n.companyId)||P("Bitte ein Unternehmen auswählen."),tr(n.invoiceDate)||P("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&P("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||P("Bitte einen Lieferanten eintragen."),n.paymentDate&&!tr(n.paymentDate)&&P("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||P("Bitte den Wechselkurs laden oder eintragen."));let s=Dn(t,n,["updatedAt","createdAt","ai"]);return await Q(async a=>{await a.put("expenses",n),await a.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?s.prev:null,next:s.next})}),n}async function vo(e){let t=D("expenses",e);t&&await Q(async n=>{for(let s of t.attachmentIds||[])await n.del("attachments",s),await n.blobDel(s);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function mr({blob:e,name:t,ownerType:n,ownerId:s}){let a={id:ze(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:s||"",createdAt:Y()};return await Q(async r=>{await r.blobPut(a.id,e),await r.put("attachments",a)}),a}async function pr(e){await Q(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function is(e){let t=ea.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function ha(e){String(e.name||"").trim()||P("Bitte der Vorlage einen Namen geben."),D("companies",e.companyId)||P("Bitte ein Unternehmen auswählen."),D("customers",e.customerId)||P("Bitte einen Kunden auswählen."),(e.items||[]).length||P("Bitte mindestens eine Position hinzufügen."),fe(e.nextDate)||P("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!fe(e.endDate)&&P("Bitte das Enddatum prüfen.");let t=D("recurring",e.id),n=Se({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=dt(n),await Q(async s=>{await s.put("recurring",n),await s.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function yo(e){let t=D("recurring",e);t&&await Q(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var zn=(e,t=F())=>!!e&&e.active&&fe(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),Ln=e=>!!e.endDate&&fe(e.nextDate)&&e.nextDate>e.endDate;async function fr(e,{early:t=!1}={}){let n=D("recurring",e);n||P("Vorlage nicht gefunden."),Ln(n)&&P("Diese Vorlage hat ihr Enddatum erreicht."),n.active||P("Diese Vorlage ist pausiert."),!t&&n.nextDate>F()&&P("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let s=D("companies",n.companyId),a=D("customers",n.customerId);(!s||!a)&&P("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let r=is(n),i=n.nextDate,o=Be(Ct(i,r,n.anchorDay),-1),u=Tn({...ct(s),customerId:n.customerId,issueDate:i,serviceDate:i,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:ze()})),discount:ge(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id}),d=Ct(i,r,n.anchorDay),c=!!n.endDate&&d>n.endDate,f=Se({...n,nextDate:d,generated:(n.generated||0)+1,lastRunAt:Y(),active:c?!1:n.active,endedByRun:c});return await Q(async m=>{let p=await m.get("recurring",n.id);if(!p||p.nextDate!==n.nextDate||!p.active)throw new pe("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",u),await m.put("recurring",f),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:u.id,issueDate:i,nextDate:d}})}),u}async function wo(e,t,n){let s=D("invoices",e);if(!s)return null;let a={id:ze(),invoiceId:e,level:t,date:F(),note:n||"",createdAt:Y()};return await Q(async r=>{await r.put("reminders",a),await r.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:s.number,next:{level:t,date:a.date}})}),a}async function gr(){y.companies.length||(await da(ta({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await da(ta({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await Q(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function xo(){y.settings.seeded||y.companies.length||await gr()}function fc(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function $a(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),a=[n>>16&255,n>>8&255,n&255].map(o=>{let u=o/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}),r=.2126*a[0]+.7152*a[1]+.0722*a[2],i=fc();return i&&r<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!i&&r>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function gc(){let e=De(null),[t,n]=k(0);return Ns(()=>{let s=e.current;if(!s||(n(s.clientWidth),typeof ResizeObserver>"u"))return;let a=new ResizeObserver(r=>n(Math.round(r[0].contentRect.width)));return a.observe(s),()=>a.disconnect()},[]),[e,t]}function hc(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let a=(Math.max(t,0)-Math.min(e,0))/n,r=Math.pow(10,Math.floor(Math.log10(a))),i=a/r,o=(i<=1?1:i<=2?2:i<=2.5?2.5:i<=5?5:10)*r,u=Math.floor(Math.min(e,0)/o)*o,d=Math.ceil(Math.max(t,0)/o)*o,c=[];for(let f=u;f<=d+o/2;f+=o)c.push(Math.round(f/o)*o);return{lo:u,hi:d,step:o,ticks:c}}function hr(e,t,n,s,a,r){let i=Math.min(a,n/2,s);return s<=0?"":r?`M${e},${t+s}V${t+i}Q${e},${t} ${e+i},${t}H${e+n-i}Q${e+n},${t} ${e+n},${t+i}V${t+s}Z`:`M${e},${t}V${t+s-i}Q${e},${t+s} ${e+i},${t+s}H${e+n-i}Q${e+n},${t+s} ${e+n},${t+s-i}V${t}Z`}function ba({groups:e,series:t,mode:n="stacked",format:s,axisFormat:a,height:r=240,ariaLabel:i}){let[o,u]=gc(),[d,c]=k(null),f={top:12,right:8,bottom:26,left:56},m=0,p=0;for(let z of e)if(n==="stacked"){let w=0,R=0;for(let B of t){let G=z.values[B.id]||0;G>=0?w+=G:R+=G}m=Math.max(m,w),p=Math.min(p,R)}else for(let w of t){let R=z.values[w.id]||0;m=Math.max(m,R),p=Math.min(p,R)}let h=hc(p,m),g=Math.max(u-f.left-f.right,10),$=r-f.top-f.bottom,v=z=>f.top+$-(z-h.lo)/(h.hi-h.lo||1)*$,b=g/Math.max(e.length,1),E=v(0),I=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(g/46)))),O=[];e.forEach((z,w)=>{let R=f.left+w*b;if(n==="stacked"){let B=Math.min(24,Math.max(b-10,3)),G=R+(b-B)/2,L=E,A=E,W=t.filter(ae=>(z.values[ae.id]||0)!==0),N=[...W].reverse().find(ae=>z.values[ae.id]>0),J=[...W].reverse().find(ae=>z.values[ae.id]<0);for(let ae of W){let U=z.values[ae.id],$e=Math.abs(v(U)-E);if(U>0){let Ne=L-$e,$n=N&&N.id===ae.id,ws=$n?0:Math.min(2,$e-1);O.push({d:$n?hr(G,Ne,B,$e,4,!0):`M${G},${Ne+ws}H${G+B}V${L}H${G}Z`,color:ae.color,key:`${z.key}-${ae.id}`}),L=Ne}else{let Ne=J&&J.id===ae.id,$n=Ne?0:Math.min(2,$e-1);O.push({d:Ne?hr(G,A,B,$e,4,!1):`M${G},${A}H${G+B}V${A+$e-$n}H${G}Z`,color:ae.color,key:`${z.key}-${ae.id}`}),A+=$e}}}else{let B=t.length,G=Math.min(18,Math.max((b-10-(B-1)*2)/B,2)),L=B*G+(B-1)*2;t.forEach((A,W)=>{let N=z.values[A.id]||0;if(!N)return;let J=Math.abs(v(N)-E),ae=R+(b-L)/2+W*(G+2);O.push({d:hr(ae,N>0?E-J:E,G,J,4,N>0),color:A.color,key:`${z.key}-${A.id}`})})}});let x=d!=null?e[d]:null,V=d!=null?f.left+d*b+b/2:0,ce=V>u*.6;return l`<div class="chart" ref=${o} style=${`height:${r}px`}>
    ${u>0&&l`<svg width=${u} height=${r} role="img" aria-label=${i}>
      ${h.ticks.map(z=>l`<g key=${z}>
        <line x1=${f.left} x2=${u-f.right} y1=${v(z)} y2=${v(z)} class=${z===0?"chart-base":"chart-grid"} />
        <text x=${f.left-8} y=${v(z)+4} text-anchor="end" class="chart-tick">${(a||s)(z)}</text>
      </g>`)}
      ${d!=null&&l`<rect x=${f.left+d*b} y=${f.top} width=${b} height=${$} class="chart-hover" />`}
      ${O.map(z=>l`<path key=${z.key} d=${z.d} fill=${z.color} />`)}
      ${e.map((z,w)=>w%I===0&&l`<text key=${z.key} x=${f.left+w*b+b/2} y=${r-8}
        text-anchor="middle" class="chart-tick">${z.label}</text>`)}
      ${e.map((z,w)=>l`<rect key=${`hit-${z.key}`} x=${f.left+w*b} y=${f.top} width=${b} height=${$+f.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${z.title||z.label}: ${t.map(R=>`${R.label} ${s(z.values[R.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>c(w)} onMouseLeave=${()=>c(null)}
        onFocus=${()=>c(w)} onBlur=${()=>c(null)} />`)}
    </svg>`}
    ${x&&l`<div class=${`chart-tip${ce?" is-left":""}`} style=${`left:${V}px;top:${f.top}px`}>
      <div class="chart-tip-title">${x.title||x.label}</div>
      ${t.filter(z=>t.length===1||(x.values[z.id]||0)!==0).map(z=>l`<div class="chart-tip-row" key=${z.id}>
        <span class="chart-key" style=${`background:${z.color}`}></span>
        <strong>${s(x.values[z.id]||0)}</strong><span>${z.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${s(t.reduce((z,w)=>z+(x.values[w.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function $c({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function va({title:e,sub:t,series:n=[],table:s,children:a}){let[r,i]=k(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${s&&l`<button type="button" class="link-btn" aria-pressed=${r} onClick=${()=>i(!r)}>
        ${r?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!r&&l`<${$c} series=${n} />`}
    ${r&&s?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${s.columns.map((o,u)=>l`<th class=${u?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${s.rows.map(o=>l`<tr>${o.map((u,d)=>l`<td class=${d?"r":""}>${u}</td>`)}</tr>`)}</tbody>
        </table></div>`:a}
  </figure>`}function At({rows:e,max:t,limit:n=6,emptyText:s="Noch keine Daten in diesem Zeitraum."}){let a=e.slice(0,n),r=t||Math.max(0,...a.map(i=>i.value));return a.length?l`<ol class="barlist">
    ${a.map(i=>{let o=r>0?Math.max(Math.max(i.value,0)/r*100,i.value>0?1.5:0):0,u=i.href?l`<a href=${i.href}>${i.label}</a>`:i.label;return l`<li key=${i.key}>
        <div class="barlist-top">
          <span class="barlist-label">${u}${i.sub&&l`<span class="barlist-sub">${i.sub}</span>`}</span>
          <span class="barlist-value">${i.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${i.color?`background:${i.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${s}</p>`}var gn=(e,t)=>!t||e.companyId===t;function Do(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function je(e,{companyId:t,range:n}={}){let s=[];for(let a of e.invoices){if(!Gs(a)||!a.totals||!gn(a,t)||n&&!Et(a.issueDate,n))continue;let r=a.totals,i=we(r.netCents,a.currency,a.fx)||0,o=mt(r.netCents,a.currency,a.fx)||0,u=we(r.taxCents,a.currency,a.fx)||0,d=mt(r.taxCents,a.currency,a.fx)||0;s.push({inv:a,date:a.issueDate,netUSD:i,netEUR:o,taxUSD:u,taxEUR:d,totalUSD:i+u,totalEUR:o+d})}return s}function Pn(e,{companyId:t,range:n}={}){let s=[];for(let a of e.expenses){if(a.status!=="booked"||!gn(a,t)||n&&!Et(a.invoiceDate,n))continue;let r=we(a.netCents,a.currency,a.fx)||0,i=mt(a.netCents,a.currency,a.fx)||0,o=we(a.taxCents,a.currency,a.fx)||0,u=mt(a.taxCents,a.currency,a.fx)||0;s.push({exp:a,date:a.invoiceDate,netUSD:r,netEUR:i,taxUSD:o,taxEUR:u,totalUSD:r+o,totalEUR:i+u})}return s}function os(e,{companyId:t,range:n}={}){let s=new Map(e.invoices.map(r=>[r.id,r])),a=[];for(let r of e.payments){let i=s.get(r.invoiceId);i&&gn(i,t)&&(n&&!Et(r.date,n)||a.push({pay:r,inv:i,date:r.date,usd:we(r.amountCents,i.currency,i.fx)||0,eur:mt(r.amountCents,i.currency,i.fx)||0}))}return a}var X=(e,t)=>e.reduce((n,s)=>n+(s[t]||0),0);function Wt(e,{companyId:t}={},n){let s=Do(e.payments),a=[];for(let r of e.invoices){if(!gn(r,t))continue;let i=s.get(r.id)||[],o=Rt(r,i);if(o<=0)continue;let u=vt(r,i,n),d=r.dueDate&&r.dueDate<n?wn(r.dueDate,n):0;a.push({inv:r,status:u,overdueDays:d,openCents:o,paidCents:xe(i),openUSD:we(o,r.currency,r.fx)||0,openEUR:mt(o,r.currency,r.fx)||0,bucket:d<=0?"current":d<=30?"d30":d<=60?"d60":d<=90?"d90":"d90plus"})}return a.sort((r,i)=>(r.inv.dueDate||"9999")<(i.inv.dueDate||"9999")?-1:1),a}var ko=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function So(e,t,n){let s=Ye("month",n),a=Ye("quarter",n),r=Ye("year",n),i=Ye("lastMonth",n),o=je(e,{companyId:t,range:r}),u=b=>o.filter(E=>Et(E.date,b)),d=u(s),c=u(a),f=je(e,{companyId:t,range:i}),m=Wt(e,{companyId:t},n),p=m.filter(b=>b.status==="overdue"),h=Do(e.payments),g=o.filter(b=>b.inv.type!=="credit_note"&&b.inv.status!=="credited"),$=g.filter(b=>vt(b.inv,h.get(b.inv.id)||[],n)==="paid"),v=e.customers.filter(b=>b.active!==!1);if(t){let b=new Set([...e.invoices.filter(E=>E.companyId===t).map(E=>E.customerId),...(e.quotes||[]).filter(E=>E.companyId===t).map(E=>E.customerId)]);v=v.filter(E=>b.has(E.id))}return{month:{usd:X(d,"netUSD"),eur:X(d,"netEUR"),count:d.length},lastMonth:{usd:X(f,"netUSD"),eur:X(f,"netEUR")},quarter:{usd:X(c,"netUSD"),eur:X(c,"netEUR")},year:{usd:X(o,"netUSD"),eur:X(o,"netEUR")},open:{count:m.length,usd:X(m,"openUSD"),eur:X(m,"openEUR")},overdue:{count:p.length,usd:X(p,"openUSD"),eur:X(p,"openEUR")},paid:{count:$.length,usd:X($,"totalUSD"),eur:X($,"totalEUR")},average:{usd:g.length?Math.round(X(g,"netUSD")/g.length):0,eur:g.length?Math.round(X(g,"netEUR")/g.length):0,count:g.length},activeCustomers:v.length}}function ya(e,{companyId:t,months:n,range:s}){let a={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},r=s?{from:s.from>a.from?s.from:a.from,to:s.to<a.to?s.to:a.to}:a,i=je(e,{companyId:t,range:r}),o=Pn(e,{companyId:t,range:r}),u=os(e,{companyId:t,range:r});return n.map(d=>{let c=i.filter(h=>Yn(h.date)===d),f=o.filter(h=>Yn(h.date)===d),m=u.filter(h=>Yn(h.date)===d),p={};for(let h of c)p[h.inv.companyId]=(p[h.inv.companyId]||0)+h.netUSD;return{key:d,revenueUSD:X(c,"netUSD"),revenueEUR:X(c,"netEUR"),expenseUSD:X(f,"netUSD"),expenseEUR:X(f,"netEUR"),profitUSD:X(c,"netUSD")-X(f,"netUSD"),profitEUR:X(c,"netEUR")-X(f,"netEUR"),paymentsUSD:X(m,"usd"),paymentsEUR:X(m,"eur"),taxUSD:X(c,"taxUSD"),invoices:c.length,byCompany:p}})}function $r(e,t){let n=new Map;for(let s of e){let a=t(s.date),r=n.get(a)||{key:a,usd:0,eur:0,taxUSD:0,count:0};r.usd+=s.netUSD,r.eur+=s.netEUR,r.taxUSD+=s.taxUSD,r.count+=1,n.set(a,r)}return[...n.values()].sort((s,a)=>s.key<a.key?-1:1)}function Co(e,t,n){let s=je(e,t);return n==="quarter"?$r(s,gi):n==="year"?$r(s,a=>String(Pa(a))):$r(s,Yn)}function wa(e,t){let n=new Map(e.customers.map(a=>[a.id,a])),s=new Map;for(let a of je(e,t)){let r=a.inv.customerId,i=a.inv.snapshot&&a.inv.snapshot.customer,o=s.get(r)||{id:r,name:ne(n.get(r)||i)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=a.netUSD,o.eur+=a.netEUR,a.inv.type!=="credit_note"&&(o.count+=1),s.set(r,o)}return[...s.values()].sort((a,r)=>r.usd-a.usd)}function xa(e,t){let n=new Map(e.companies.map(a=>[a.id,a])),s=new Map;for(let a of je(e,t)){let r=a.inv.companyId,i=n.get(r),o=s.get(r)||{id:r,name:i?i.name:"Unbekannt",color:i?i.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=a.netUSD,o.eur+=a.netEUR,a.inv.type!=="credit_note"&&(o.count+=1),s.set(r,o)}return[...s.values()].sort((a,r)=>r.usd-a.usd)}function Da(e,t){let n=new Map(e.services.map(a=>[a.id,a])),s=new Map;for(let a of je(e,t)){let r=new Map((a.inv.totals.lines||[]).map(c=>[c.id,c])),i=(a.inv.items||[]).filter(c=>r.has(c.id)),o=i.map(c=>{let f=r.get(c.id);return f.netCents!=null?f.netCents:f.cents}),u=on(a.netUSD,o),d=on(a.netEUR,o);i.forEach((c,f)=>{let m=c.serviceId?n.get(c.serviceId):null,p=m?`s:${m.id}`:`n:${String(c.name||"").trim().toLowerCase()}`,h=s.get(p)||{key:p,name:m?m.name:c.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};h.usd+=u[f]||0,h.eur+=d[f]||0,h.qty+=Number(c.qty)||0,s.set(p,h)})}return[...s.values()].sort((a,r)=>r.usd-a.usd)}function Eo(e,t){let n=new Map;for(let s of je(e,t)){let a=s.inv.currency,r=n.get(a)||{currency:a,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};r.netCents+=s.inv.totals.netCents,r.taxCents+=s.inv.totals.taxCents,r.totalCents+=s.inv.totals.totalCents,r.usd+=s.netUSD,r.eur+=s.netEUR,s.inv.type!=="credit_note"&&(r.count+=1),n.set(a,r)}return[...n.values()].sort((s,a)=>a.usd-s.usd)}function br(e,t){let n=new Map;for(let s of Pn(e,t)){let a=s.exp.category||"Ohne Kategorie",r=n.get(a)||{name:a,usd:0,eur:0,taxUSD:0,count:0};r.usd+=s.netUSD,r.eur+=s.netEUR,r.taxUSD+=s.taxUSD,r.count+=1,n.set(a,r)}return[...n.values()].sort((s,a)=>a.usd-s.usd)}function Io(e,t,n){let s=je(e,t),a=Pn(e,t),r=os(e,t),i=Wt(e,{companyId:t.companyId},n),o=X(s,"netUSD"),u=X(s,"netEUR"),d=X(a,"netUSD"),c=X(a,"netEUR");return{income:{usd:o,eur:u,count:s.filter(f=>f.inv.type!=="credit_note").length},expenses:{usd:d,eur:c,count:a.length},profit:{usd:o-d,eur:u-c},payments:{usd:X(r,"usd"),eur:X(r,"eur"),count:r.length},receivables:{usd:X(i,"openUSD"),eur:X(i,"openEUR"),count:i.length},taxCollected:{usd:X(s,"taxUSD"),eur:X(s,"taxEUR")},taxPaid:{usd:X(a,"taxUSD"),eur:X(a,"taxEUR")},taxBalance:{usd:X(s,"taxUSD")-X(a,"taxUSD"),eur:X(s,"taxEUR")-X(a,"taxEUR")}}}function Uo(e,t){let n=new Map;for(let r of je(e,t)){let i=r.inv.totals.taxGroups||[],o=on(r.taxUSD,i.map(d=>d.taxCents)),u=on(r.netUSD,i.map(d=>d.netCents));i.forEach((d,c)=>{let f=`${d.rate}|${r.inv.currency}`,m=n.get(f)||{rate:d.rate,currency:r.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0};m.netCents+=d.netCents,m.taxCents+=d.taxCents,m.netUSD+=u[c]||0,m.taxUSD+=o[c]||0,n.set(f,m)})}let s=[...n.values()].sort((r,i)=>r.rate-i.rate||r.currency.localeCompare(i.currency)),a=Pn(e,t);return{collected:s,collectedUSD:s.reduce((r,i)=>r+i.taxUSD,0),paidUSD:X(a,"taxUSD")}}function vr(e,t,n){let s=e.from,a=e.to;if(s<"1900"||a>"2200"){let r=new Map(t.invoices.map(o=>[o.id,o])),i=[...t.invoices.filter(o=>Gs(o)&&gn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&gn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>r.has(o.invoiceId)&&gn(r.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!i.length)return[];s<"1900"&&(s=i[0]),a>"2200"&&(a=i[i.length-1])}return hi(s,a)}var hn=()=>({invoices:y.invoices,quotes:y.quotes,payments:y.payments,expenses:y.expenses,customers:y.customers,companies:y.companies,services:y.services}),_t=()=>{let e=ye();return e?e.id:null};function ls(e){return vt(e,_e(e.id),F())}function ka({inv:e}){let t=ls(e),n=Xn[t]||Xn.draft;return l`<span class="badges"><${Le} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${Le} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function Sa({quote:e}){let t=cn(e,F()),n=Ms[t]||Ms.draft;return l`<${Le} tone=${n.tone}>${n.label}<//>`}function Mt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),s=e.currency==="USD"?"EUR":"USD",a=e.fx?s==="EUR"?mt(n,e.currency,e.fx):we(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${S(n,e.currency)}</span>
    ${a!=null&&l`<span class="dual-sub">≈ ${S(a,s)}</span>`}
  </span>`}function Qe({id:e}){let t=D("companies",e);return t?l`<span class="co-tag"><${Ya} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Ue(e){let t=D("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return ne(t)||"–"}var Kn=e=>Rt(e,_e(e.id));var cs=null;function No(e){return new Promise((t,n)=>{let s=document.createElement("script");s.src=e,s.onload=()=>t(),s.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(s)})}function bc(){return cs||(cs=(async()=>{if(await No("js/vendor/pdfmake.min.js"),await No("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw cs=null,e})),cs}var Ea="#16191d",Pe="#5c636b",yr="#d9dde1",Ca=50;function vc(e){let t=Math.max(0,...e.footerCols.map(s=>s.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function Ia(e){let t=e.labels,n=e.brandColor,s=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:Ea,margin:[0,6,0,30]},a={width:"*",stack:[{text:e.senderLine,fontSize:7,color:Pe,margin:[0,0,0,6]},...e.recipient.map((p,h)=>({text:p,fontSize:10.5,bold:h===0})),...e.recipientExtra.map(p=>({text:p,fontSize:8.5,color:Pe,margin:[0,4,0,0]}))]},r={width:210,table:{widths:["auto","*"],body:e.meta.map(([p,h])=>[{text:p,color:Pe,fontSize:9},{text:h,alignment:"right",fontSize:9,bold:p===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},i=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&i.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&i.push({key:"tax",label:t.tax,width:"auto",align:"right"}),i.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=i.map(p=>({text:p.label,fontSize:8,color:Pe,alignment:p.align,noWrap:!0})),u=e.rows.map(p=>i.map(h=>{if(h.key==="desc"){let g=[{text:p.name,bold:!0}];return p.description&&g.push({text:p.description,color:Pe,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:g}}return{text:p[h.key]||"",alignment:h.align,noWrap:h.key!=="unit"}})),d={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:i.map(p=>p.width),body:[o,...u]},layout:{hLineWidth:(p,h)=>p===0?0:p===1?1.2:.5,hLineColor:p=>p===1?n:yr,vLineWidth:()=>0,paddingLeft:p=>p===0?0:7,paddingRight:(p,h)=>p===h.table.widths.length-1?0:7,paddingTop:p=>p===0?0:6,paddingBottom:p=>p===0?5:6}},c={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(p=>[{text:p.label,bold:!!p.strong,fontSize:p.strong?11.5:9.5,color:p.strong?Ea:Pe},{text:p.value,bold:!!p.strong,fontSize:p.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(p,h)=>p===h.table.body.length-1&&h.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(p,h)=>p===h.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:Pe,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:Pe,margin:[0,1.5,0,0]}]:[]]:[]]}]},f=[s,{columns:[a,r],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:Pe}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&f.push({text:e.subtitle,color:Pe,margin:[0,2,0,0]}),e.intro&&f.push({text:e.intro,margin:[0,12,0,0]}),f.push(d,c),e.notes.length&&f.push({stack:e.notes.map(p=>({text:p,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&f.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([p,h])=>[{text:p,color:Pe},{text:h}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:p=>p===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(p=>({text:p,margin:[0,4,0,0]}))]});let m=vc(e);return{pageSize:"A4",pageMargins:[Ca,46,Ca,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:Ea},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(p,h)=>({margin:[Ca,0,Ca,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*Ca,y2:0,lineWidth:.5,lineColor:yr}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(g=>({width:"*",stack:g.map(($,v)=>({text:$,fontSize:7.5,color:Pe,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:Pe,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",p).replace("{N}",h),fontSize:7,color:Pe,alignment:"right",margin:[0,5,0,0]}]}),content:f}}async function Fn(e){let t=await bc();return new Promise((n,s)=>{try{t.createPdf(e).getBlob(a=>n(a))}catch(a){s(a)}})}function nt(e,t){let n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Ro({title:e,subtitle:t,columns:n,rows:s,totals:a,fileName:r,landscape:i}){let o=[n.map(c=>({text:c.label,bold:!0,fontSize:8,color:Pe,alignment:c.align||"left"})),...s.map(c=>c.map((f,m)=>({text:f==null?"":String(f),alignment:n[m].align||"left"})))];a&&o.push(a.map((c,f)=>({text:c==null?"":String(c),bold:!0,alignment:n[f].align||"left"})));let u={pageSize:"A4",pageOrientation:i?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:Ea},info:{title:e,creator:"BBC Finance"},footer:(c,f)=>({text:`Seite ${c} von ${f}`,alignment:"right",fontSize:7,color:Pe,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:Pe,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((c,f)=>f===0?"*":"auto"),body:o},layout:{hLineWidth:(c,f)=>c===0?0:c===1||a&&c===f.table.body.length-1?1:.5,hLineColor:(c,f)=>c===1||a&&c===f.table.body.length-1?Ea:yr,vLineWidth:()=>0,paddingLeft:c=>c===0?0:6,paddingRight:(c,f)=>c===f.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},d=await Fn(u);nt(d,r)}async function us(e,t){let n=ot(e,t),s=await Fn(Ia(n));return nt(s,n.fileName),{blob:s,model:n}}function yc(e,t){let n=e.snapshot&&e.snapshot.company||D("companies",e.companyId)||{},s=e.snapshot&&e.snapshot.customer||D("customers",e.customerId)||{},a=e.language==="en"?"en":"de",r=t==="invoices"?Rt(e,_e(e.id)):0;return{lang:a,email:s.email||"",vars:{NUMBER:e.number||"",DATE:q(e.issueDate,a),DUE:q(t==="quotes"?e.validUntil:e.dueDate,a),TOTAL:An(e.totals?e.totals.totalCents:0,e.currency,a),OPEN:An(r,e.currency,a),CONTACT:Ut(s)||ne(s),CUSTOMER:ne(s),SENDER:y.settings.userName?`${y.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function wc(e){let n=qt(e).reduce((s,a)=>Math.max(s,a.level),0);return Math.min(n+1,at.length)}function Ua(e,t){if(!(t>0))return 0;let n=y.settings.reminderDays||[7,14,21],s=qt(e.id).reduce((r,i)=>Math.max(r,i.level),0),a=0;return at.forEach((r,i)=>{t>=(Number(n[i])||0)&&(a=r.id)}),a>s?Math.min(s+1,a):0}function Bo(e){return[...qt(e)].sort((n,s)=>n.createdAt<s.createdAt?1:-1)[0]||null}function On({doc:e,coll:t,mode:n="send",onClose:s}){let{lang:a,email:r,vars:i}=yc(e,t),[o,u]=k(()=>n==="reminder"?wc(e.id):0),d=B=>n==="reminder"?((y.settings.reminderTemplates||{})[a]||{})[B]||{subject:"",body:""}:((y.settings.emailTemplates||{})[a]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[c,f]=k(r),[m,p]=k(()=>Bt(d(o).subject,i)),[h,g]=k(()=>Bt(d(o).body,i)),[$,v]=k(""),[b,E]=k(null),I=typeof navigator<"u"&&!!navigator.canShare;function O(B){let G=Number(B);u(G),p(Bt(d(G).subject,i)),g(Bt(d(G).body,i))}async function x(){if(b)return b;let B=ot(e,t),L={blob:await Fn(Ia(B)),name:B.fileName};return E(L),L}async function V(){v("pdf"),await M(async()=>{let B=await x();nt(B.blob,B.name)}),v("")}function ce(){let B=`mailto:${encodeURIComponent(c.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(h)}`;zi(),window.location.href=B}async function z(){v("share"),await M(async()=>{let B=await x(),G=new File([B.blob],B.name,{type:"application/pdf"});if(!navigator.canShare({files:[G]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[G],title:m,text:h})}catch(L){if(L&&L.name==="AbortError")return;throw L}}),v("")}async function w(){v("done");let B=await M(async()=>(n==="reminder"?await wo(e.id,o,m):t==="quotes"?await fn(e.id,"sent"):await pn(e.id,!0),!0));v(""),B&&(T(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),s())}let R=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${et} title=${R} onClose=${s} size="lg"
    footer=${l`
      <${C} onClick=${s}>Schließen<//>
      <${C} variant="primary" icon="check" busy=${$==="done"} onClick=${w}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${ke} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${me} class="span-2" label="Stufe" value=${o} onChange=${O}
        options=${at.map(B=>({id:B.id,label:B.label}))} />`}
      <${K} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${c} onInput=${f}
        hint=${r?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${K} class="span-6" label="Betreff" value=${m} onInput=${p} />
      <${le} class="span-6" label="Text" value=${h} onInput=${g} rows=${10} />
    </div>
    <div class="send-steps">
      <${C} icon="download" busy=${$==="pdf"} onClick=${V}>PDF herunterladen<//>
      <${C} icon="mail" onClick=${ce} disabled=${!c.trim()}>E-Mail-Programm öffnen<//>
      ${I&&l`<${C} icon="send" busy=${$==="share"} onClick=${z}>Mit PDF teilen<//>`}
    </div>
  <//>`}var xc=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],Dc=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],kc=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],Sc=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],Cc=e=>.86+e*37%7/100,qn=(e,t,n)=>{let s=Cc(t),a={date:n,fetchedAt:Y(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:s,...a,manual:!1}:bt(e,s,a)};function ds(){return Si(Ec)}async function Ec(){if(y.invoices.length||y.customers.length||y.expenses.length||y.services.length)throw new pe("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=ve();if(!e.length)throw new pe("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=F(),s=[];for(let m of xc)s.push(await Xa(Kt(m)));let a=[];for(let m of Dc)a.push(await es(Ft({...m,currency:"USD"})));let r=[];for(let[m,p,h,g,$,v,b]of kc){let E=t(h),I=s[g],O=Ct(n.slice(0,8)+"01",-m,p);O>n&&(O=n);let x=I.currency||"USD",V=qn(x,m,O),ce=$.map(([B,G])=>{let L=tt(a[B],E),A=x==="EUR"?Math.round(L.priceCents*V.usdToEur/500)*500:L.priceCents;return{...L,qty:G,priceCents:A}}),z={...ct(E),customerId:I.id,issueDate:O,serviceDate:O,paymentTermDays:I.paymentTermDays!=null&&I.paymentTermDays!==""?Number(I.paymentTermDays):14,currency:x,language:I.language||E.language,items:ce,discount:{type:"pct",value:b},fx:V},w=await pa(z);r.push({inv:w,pay:v,back:m}),(m>0||v!=="none")&&await pn(w.id,!0);let R=w.totals.totalCents;if(v==="full"){let B=Be(O,9+p%9);await fa(w.id,{date:B>n?n:B,amountCents:R,method:"Überweisung",note:""})}else if(v==="half"){let B=Be(O,12);await fa(w.id,{date:B>n?n:B,amountCents:Math.round(R/2),method:"Überweisung",note:"Anzahlung"})}}let i=t(0),o=async(m,p,h)=>{let g=Ct(n.slice(0,8)+"01",-h,14),$=m.currency||"USD",v=qn($,h,g),b=tt(a[p],i);return pa({...ct(i),customerId:m.id,issueDate:g,serviceDate:g,currency:$,language:m.language||"de",paymentTermDays:14,items:[{...b,priceCents:$==="EUR"?Math.round(b.priceCents*v.usdToEur/500)*500:b.priceCents}],fx:v})},u=await o(s[3],2,4);await ss(u.id,"Beispiel: doppelt ausgestellt");let d=await o(s[4],6,3);await rs(d.id,"Beispiel: Leistung wurde nicht erbracht."),await ts({...ct(t(1)),customerId:s[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...tt(a[4],t(1)),qty:6}],fx:qn("USD",0,n)});let c=await ga({...En(t(0)),customerId:s[1].id,issueDate:Be(n,-6),validUntil:Be(n,24),currency:"EUR",language:"de",fx:qn("EUR",0,n),items:[{...tt(a[0],t(0)),priceCents:42e4},{...tt(a[1],t(0)),qty:6,priceCents:85e3}]});await fn(c.id,"sent");let f=await ga({...En(t(1)),customerId:s[5].id,issueDate:Be(n,-20),validUntil:Be(n,10),currency:"USD",language:"en",fx:qn("USD",0,n),items:[{...tt(a[5],t(1))}]});await fn(f.id,"accepted");for(let[m,p,h,g,$,v,b,E,I]of Sc){let O=Be(n,-m);await Ht(aa({companyId:t(p).id,vendor:h,category:g,description:$,currency:v,invoiceDate:O,paymentDate:Be(O,2)>n?n:Be(O,2),netCents:b,taxCents:E,totalCents:b+E,paymentMethod:I,fx:qn(v,Math.floor(m/30),O)}))}return await ha({...In(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:s[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[tt(a[1],t(0)),tt(a[2],t(0))]}),await ha({...In(t(0)),name:"Hosting Nordlicht Immobilien",customerId:s[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:Ct(n,4),items:[{...tt(a[3],t(0)),qty:12,priceCents:3e3}]}),await Q(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:r.length}}async function Ao(){let e=new Set(["companies","assets","settings"]);await en(ut,async t=>{for(let n of ut)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await nn(),sa()}function Ic(){let e=ve(),t=e.filter(i=>!i.street||!i.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:y.customers.length>0,label:"Ersten Kunden anlegen",text:"Kunden gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:y.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:y.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[s,a]=k(!1);async function r(){a(!0);let i=await M(async()=>(await ds(),!0));a(!1),i&&T("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
    <h1>Willkommen bei BBC Finance</h1>
    <p class="lead">Vier Schritte, dann steht hier deine Finanzübersicht.</p>
    <ol class="steps">
      ${n.map((i,o)=>l`<li class=${i.done?"is-done":""}>
        <a href=${i.href}>
          <span class="step-mark">${i.done?l`<${ee} name="check" size=${16} />`:o+1}</span>
          <span class="step-text"><strong>${i.label}</strong><span>${i.text}</span></span>
          <${ee} name="chevronRight" size=${16} />
        </a>
      </li>`)}
    </ol>
    <p class="onboarding-alt">
      Erst einmal ansehen, wie es mit Daten aussieht?${" "}
      <button type="button" class="link-btn" disabled=${s} onClick=${r}>${s?"Beispieldaten werden geladen …":"Beispieldaten laden"}</button>.${" "}
      Schon ein Backup vorhanden?${" "}<a href="#/settings">Backup einspielen</a>.
    </p>
  </section>`}function _o(){de();let e=F(),t=ye(),n=_t(),s=hn(),a=ve(),r=be(()=>{let x=$i(12,e),V=Ye("year",e);return{kpi:So(s,n,e),months:x,series:ya(s,{companyId:n,months:x}),byCustomer:wa(s,{companyId:n,range:V}),byService:Da(s,{companyId:n,range:V}),byCompany:xa(s,{range:V}),rec:Wt(s,{companyId:n},e)}},[y.version,n,e]);if(!(y.invoices.length||y.expenses.length||y.customers.length||y.services.length))return l`<${Ic} />`;let{kpi:o}=r,u=gt(e.slice(0,7)),d=r.rec.filter(x=>x.status==="overdue"),c=r.rec.filter(x=>x.status!=="overdue"&&x.inv.dueDate&&x.inv.dueDate<=Be(e,7)),f=y.recurring.filter(He).filter(x=>zn(x,e)),m=y.expenses.filter(x=>x.status==="review"&&(He(x)||!x.companyId)),p=y.invoices.filter(He).filter(x=>x.status==="draft"),h=p.filter(x=>x.number),g=p.filter(x=>!x.number),$=y.invoices.filter(He).filter(x=>x.clarify&&x.status!=="draft"),v=y.quotes.filter(He).filter(x=>["open","sent"].includes(cn(x,e))&&x.validUntil&&x.validUntil<=Be(e,7)),b=!t&&a.length>1,E=b?a.map(x=>({id:x.id,label:x.shortName||x.name,color:$a(x.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],I=r.series.map(x=>({key:x.key,label:xn(x.key),title:gt(x.key),values:b?x.byCompany:{rev:x.revenueUSD}})),O={columns:["Monat",...b?E.map(x=>x.label):[],"Umsatz (USD)","Umsatz (EUR)"],rows:r.series.map(x=>[gt(x.key),...b?E.map(V=>S(x.byCompany[V.id]||0,"USD")):[],S(x.revenueUSD,"USD"),S(x.revenueEUR,"EUR")])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${u}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${S(o.month.usd,"USD")}</div>
        <div class="hero-sub">
          <span>≈ ${S(o.month.eur,"EUR")}</span>
          <span>netto, ${o.month.count} ${o.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${S(o.lastMonth.usd,"USD")}</span>
        </div>
      </div>
    </section>

    <div class="stat-row">
      <${Ie} label="Umsatz Quartal" value=${S(o.quarter.usd,"USD")} sub=${`≈ ${S(o.quarter.eur,"EUR")}`} />
      <${Ie} label="Umsatz Jahr" value=${S(o.year.usd,"USD")} sub=${`≈ ${S(o.year.eur,"EUR")}`} />
      <${Ie} label="Offene Rechnungen" value=${S(o.open.usd,"USD")} sub=${`${o.open.count} offen, ≈ ${S(o.open.eur,"EUR")}`} href="#/invoices?status=open" />
      <${Ie} label="Überfällig" value=${S(o.overdue.usd,"USD")} tone=${o.overdue.count?"bad":""}
        sub=${`${o.overdue.count} überfällig, ≈ ${S(o.overdue.eur,"EUR")}`} href="#/invoices?status=overdue" />
      <${Ie} label="Bezahlt dieses Jahr" value=${S(o.paid.usd,"USD")} sub=${`${o.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Ie} label="Rechnung im Schnitt" value=${S(o.average.usd,"USD")} sub=${`≈ ${S(o.average.eur,"EUR")}`} />
      <${Ie} label="Aktive Kunden" value=${String(o.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${va} title="Umsatz der letzten 12 Monate" sub="Netto in USD, nach Rechnungsdatum" series=${E} table=${O}>
          <${ba} groups=${I} series=${E} mode="stacked"
            format=${x=>S(x,"USD")} axisFormat=${x=>ia(x,"USD")}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${j} title="Zu erledigen" class="dash-side">
        ${d.length+c.length+f.length+m.length+p.length+v.length+$.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${d.slice(0,5).map(x=>l`<li key=${x.inv.id}>
              <a href=${`#/invoices/${x.inv.id}`}>
                <span class="todo-icon tone-bad"><${ee} name="bad" /></span>
                <span class="todo-text"><strong>${x.inv.number}</strong> ${Ue(x.inv)}
                  <span class="cell-sub">seit ${x.overdueDays} ${x.overdueDays===1?"Tag":"Tagen"} überfällig${Ua(x.inv,x.overdueDays)?`, ${(at.find(V=>V.id===Ua(x.inv,x.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${S(x.openCents,x.inv.currency)}</span>
              </a>
            </li>`)}
            ${d.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${d.length-5} weitere überfällige Rechnungen</a></li>`}
            ${c.slice(0,3).map(x=>l`<li key=${x.inv.id}>
              <a href=${`#/invoices/${x.inv.id}`}>
                <span class="todo-icon tone-warn"><${ee} name="clock" /></span>
                <span class="todo-text"><strong>${x.inv.number}</strong> ${Ue(x.inv)}
                  <span class="cell-sub">fällig am ${q(x.inv.dueDate)}</span></span>
                <span class="todo-amount">${S(x.openCents,x.inv.currency)}</span>
              </a>
            </li>`)}
            ${$.slice(0,5).map(x=>l`<li key=${`c-${x.id}`}><a href=${`#/invoices/${x.id}`}>
              <span class="todo-icon tone-warn"><${ee} name="warn" /></span>
              <span class="todo-text"><strong>${x.number}</strong> ${Ue(x)}
                <span class="cell-sub">Klärung nötig: ${x.clarify.note}</span></span></a></li>`)}
            ${$.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${ee} name="warn" /></span>
              <span class="todo-text"><strong>${$.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${h.slice(0,5).map(x=>l`<li key=${x.id}><a href=${`#/invoices/${x.id}/edit`}>
              <span class="todo-icon tone-warn"><${ee} name="edit" /></span>
              <span class="todo-text"><strong>${x.number}</strong> ${Ue(x)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${f.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${ee} name="repeat" /></span>
              <span class="todo-text"><strong>${f.length} wiederkehrende ${f.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${m.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${ee} name="expense" /></span>
              <span class="todo-text"><strong>${m.length} ${m.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${g.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${ee} name="edit" /></span>
              <span class="todo-text"><strong>${g.length} ${g.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${v.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${ee} name="quote" /></span>
              <span class="todo-text"><strong>${v.length} ${v.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
          </ul>`}
      <//>
    </div>

    <div class="dash-lists">
      <${j} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${At} rows=${r.byCustomer.map(x=>({key:x.id,label:x.name,value:x.usd,display:S(x.usd,"USD"),href:`#/customers/${x.id}`}))} />
      <//>
      <${j} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${At} rows=${r.byService.map(x=>({key:x.key,label:x.name,value:x.usd,display:S(x.usd,"USD")}))} />
      <//>
      ${!t&&l`<${j} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${At} rows=${r.byCompany.map(x=>({key:x.id,label:x.name,value:x.usd,display:S(x.usd,"USD"),color:$a(x.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in USD. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}function Vn({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
    <article class="sheet" style=${`--doc-brand:${e.brandColor}`} lang=${e.lang}>
      ${e.draftMark&&l`<div class="sheet-mark" aria-hidden="true">${e.draftMark}</div>`}
      <div class="sheet-head">
        ${e.logoUrl?l`<img class="sheet-logo" src=${e.logoUrl} alt=${e.companyName} />`:l`<div class="sheet-company">${e.companyName||" "}</div>`}
      </div>
      <div class="sheet-top">
        <div class="sheet-address">
          <div class="sheet-sender">${e.senderLine}</div>
          ${e.recipient.length?e.recipient.map((s,a)=>l`<div class=${a===0?"sheet-strong":""}>${s}</div>`):l`<div class="sheet-placeholder">${e.lang==="en"?"Customer":"Kunde"}</div>`}
          ${e.recipientExtra.map(s=>l`<div class="sheet-small">${s}</div>`)}
        </div>
        <dl class="sheet-meta">
          ${e.meta.map(([s,a],r)=>l`<div><dt>${s}</dt><dd class=${r===0?"sheet-strong":""}>${a}</dd></div>`)}
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
          ${e.rows.map(s=>l`<tr>
            <td>${s.pos}</td>
            <td><div class="sheet-strong">${s.name||" "}</div>${s.description&&l`<div class="sheet-desc">${s.description}</div>`}</td>
            <td class="r nw">${s.qty}</td>
            <td>${s.unit}</td>
            <td class="r nw">${s.price}</td>
            ${n.discount&&l`<td class="r nw">${s.discount}</td>`}
            ${n.tax&&l`<td class="r nw">${s.tax}</td>`}
            <td class="r nw">${s.amount}</td>
          </tr>`)}
          ${!e.rows.length&&l`<tr><td colspan="8" class="sheet-placeholder">${e.lang==="en"?"No items yet":"Noch keine Positionen"}</td></tr>`}
        </tbody>
      </table>
      <div class="sheet-sums">
        <table>
          ${e.sums.map(s=>l`<tr class=${s.strong?"is-total":""}><td>${s.label}</td><td class="r nw">${s.value}</td></tr>`)}
        </table>
        ${e.secondary&&l`<div class="sheet-secondary">${e.secondary.line}</div>`}
        ${e.secondary&&e.secondary.fx&&l`<div class="sheet-fx">${e.secondary.fx}</div>`}
      </div>
      ${e.notes.length>0&&l`<div class="sheet-notes">${e.notes.map(s=>l`<p>${s}</p>`)}</div>`}
      ${e.payment&&l`<div class="sheet-payment">
        <div class="sheet-strong">${e.payment.title}</div>
        ${e.payment.rows.length>0&&l`<table>${e.payment.rows.map(([s,a])=>l`<tr><td class="sheet-muted">${s}</td><td>${a}</td></tr>`)}</table>`}
        ${e.payment.extra.map(s=>l`<p>${s}</p>`)}
      </div>`}
      <footer class="sheet-footer">
        <div class="sheet-footer-cols">
          ${e.footerCols.map(s=>l`<div>${s.map(a=>l`<div>${a}</div>`)}</div>`)}
        </div>
        ${e.footerText&&l`<div class="sheet-footer-text">${e.footerText}</div>`}
      </footer>
    </article>
  </div>`}async function ms(e){let t=_e(e.id),n=qt(e.id),s=e.creditNoteId?D("invoices",e.creditNoteId):null,a=[];if(t.length&&a.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${S(xe(t),e.currency)}`),s&&a.push(`Gutschrift ${s.number}`),n.length&&a.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await ie({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${a.length?" Mitgelöscht werden:":""}`,list:a.length?a:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let i=await M(()=>cr(e.id));return i?(T(i.freed?`Rechnung gelöscht – ${i.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var wr=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function Mo({params:e}){de();let[t,n]=k(""),[s,a]=k(e&&wr.some(b=>b.id===e.status)?e.status:"all"),[r,i]=k("all"),[o,u]=k(null),d=!ye(),c=F(),f=be(()=>y.invoices.filter(He).map(b=>({inv:b,status:ls(b)})),[y.version,y.settings.activeCompany]),m=Ye(r,c),p=f.filter(b=>r==="all"||Et(b.inv.issueDate,m)),h=p.filter(b=>wr.find(E=>E.id===s).test(b.status,b.inv)).filter(b=>Ae(t,b.inv.number,Ue(b.inv),(D("companies",b.inv.companyId)||{}).name,b.inv.totals?(b.inv.totals.totalCents/100).toFixed(2):"",b.inv.totals?(b.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",(b.inv.items||[]).map(E=>E.name).join(" "))),g=h.reduce((b,E)=>{if(E.status==="draft"||E.status==="cancelled")return b;let I=E.inv.totals?E.inv.totals.totalCents:0;return b.total+=we(I,E.inv.currency,E.inv.fx)||0,b.open+=we(Kn(E.inv),E.inv.currency,E.inv.fx)||0,b},{total:0,open:0}),$=[{key:"number",label:"Nummer",class:"nw",sort:b=>b.inv.number||"",render:b=>l`<span class="cell-main">${b.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:b=>Ue(b.inv),render:b=>Ue(b.inv)},...d?[{key:"company",label:"Unternehmen",sort:b=>(D("companies",b.inv.companyId)||{}).name||"",render:b=>l`<${Qe} id=${b.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:b=>b.inv.issueDate,render:b=>q(b.inv.issueDate)},{key:"due",label:"Fällig",sort:b=>b.inv.dueDate||"",render:b=>b.status==="overdue"?l`<span class="tone-bad">${q(b.inv.dueDate)}</span><div class="cell-sub">seit ${wn(b.inv.dueDate,c)} Tagen</div>`:q(b.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:b=>we(b.inv.totals?b.inv.totals.totalCents:0,b.inv.currency,b.inv.fx)||0,render:b=>l`<${Mt} doc=${b.inv} />`},{key:"open",label:"Offen",align:"right",sort:b=>we(Kn(b.inv),b.inv.currency,b.inv.fx)||0,render:b=>{let E=Kn(b.inv);return E?S(E,b.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:b=>b.status,render:b=>l`<${ka} inv=${b.inv} />`},...s==="overdue"?[{key:"reminder",label:"Erinnerung",render:b=>{let E=Bo(b.inv.id),I=Ua(b.inv,wn(b.inv.dueDate,c)),O=x=>(at.find(V=>V.id===x)||{}).label||"";return l`<${C} small variant=${I?"primary":"default"} icon="clock" onClick=${()=>u(b.inv)}>${I?O(I):"Erinnern"}<//>
          <span class="cell-sub nw">${E?`Zuletzt: ${O(E.level)}, ${q(E.date)}`:"Noch keine versendet"}</span>`}}]:[]],v=h.length?[`${h.length} ${h.length===1?"Beleg":"Belege"}`,"",...d?[""]:[],"","",l`<span class="strong">${S(g.total,"USD")}</span>`,l`<span class="strong">${S(g.open,"USD")}</span>`,l`<span class="muted-text">in USD</span>`,...s==="overdue"?[""]:[]]:null;return l`
    <${he} title="Rechnungen">
      <${C} variant="primary" icon="plus" onClick=${()=>Z("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${y.invoices.length>0&&l`<div class="filters">
      <${it} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${Mn} label="Status" value=${s} onChange=${a}
        options=${wr.map(b=>({id:b.id,label:b.label,count:p.filter(E=>b.test(E.status,E.inv)).length})).filter(b=>b.id!=="clarify"||b.count>0||s==="clarify")} />
      <select class="input select filter-select" value=${r} aria-label="Zeitraum" onChange=${b=>i(b.target.value)}>
        ${Jt.filter(b=>b.id!=="custom").map(b=>l`<option value=${b.id}>${b.label}</option>`)}
      </select>
    </div>`}
    <${We} columns=${$} rows=${h} rowKey=${b=>b.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${v}
      rowClass=${b=>b.inv.clarify&&b.status!=="draft"?"row-clarify":""}
      onRowClick=${b=>Z(b.inv.status==="draft"?`/invoices/${b.inv.id}/edit`:`/invoices/${b.inv.id}`)}
      empty=${y.invoices.length?l`<${ue} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${ue} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${C} variant="primary" icon="plus" onClick=${()=>Z("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${On} doc=${o} coll="invoices" mode="reminder" onClose=${()=>u(null)} />`}
  `}function xr({inv:e,refund:t,payment:n,onClose:s}){let a=!!n,r=a?n.amountCents<0:!!t,i=a?_e(e.id).filter(V=>V.id!==n.id):_e(e.id),o=e.totals?e.totals.totalCents:0,u=r?xe(i):a?Math.max(o-xe(i),0):Kn(e),d=y.settings.paymentMethods||[],[c,f]=k(a?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:F(),amountCents:u,method:d[0]||"",note:""}),[m,p]=k(!1),[h,g]=k(""),[$,v]=k(!1),b=V=>ce=>f(z=>({...z,[V]:ce})),E=r?"Erstattung":"Zahlung",I=!r&&!a?u-(Number(c.amountCents)||0):0,O=c.method&&!d.includes(c.method)?[c.method,...d]:d;async function x(){v(!0);let V=I>0&&m?h.trim()||`Differenz von ${S(I,e.currency)} offen (eingegangen: ${S(c.amountCents,e.currency)} am ${q(c.date)}).`:"",ce=await M(()=>a?lo(n.id,c):r?mo(e.id,c):fa(e.id,{...c,clarify:V}));v(!1),ce&&(a?T(`${E} geändert`,"good"):r?T("Erstattung eingetragen","good"):I>0?T(V?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):T("Zahlung eingetragen – Rechnung ist bezahlt","good"),s())}return l`<${et} title=${`${E} zu ${e.number}${a?" ändern":""}`} onClose=${s} size="sm" onSubmit=${x}
    footer=${l`<${C} onClick=${s}>Abbrechen<//><${C} variant="primary" type="submit" busy=${$}>${a?"Änderung speichern":`${E} eintragen`}<//>`}>
    <p class="dialog-text">${r?`${a?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${S(u,e.currency)}.`:a?`Höchstens ${S(u,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${S(u,e.currency)}.`}</p>
    <div class="form-grid">
      <${Ee} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${c.amountCents} onChange=${b("amountCents")} min=${0} />
      <${Xe} class="span-3" label=${r?"Datum":"Zahlungsdatum"} value=${c.date} onInput=${b("date")} max=${F()} />
      <${me} class="span-6" label="Zahlungsart" value=${c.method} onChange=${b("method")} options=${O} placeholder="Keine Angabe" />
      <${K} class="span-6" label="Notiz" value=${c.note} onInput=${b("note")} />
    </div>
    ${I>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${S(I,e.currency)}</strong> offen.</p>
      <${Te} label="Differenz muss geklärt werden" checked=${m} onChange=${p}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${le} label="Was ist zu klären?" value=${h} onInput=${g} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function Dr(e){let t=ot(e.prev.doc,"invoices"),n=await Fn(Ia(t));nt(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${q(yn(new Date(e.at)))}).pdf`))}function kr({entityId:e}){let[t,n]=k(""),s=y.audit.filter(r=>r.entityId===e).sort((r,i)=>r.at<i.at?1:-1);if(!s.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let a=async r=>{n(r.id),await M(()=>Dr(r)),n("")};return l`<ol class="timeline">
    ${s.map(r=>l`<li key=${r.id}>
      <div class="timeline-what">${r.action}</div>
      <div class="timeline-when">${Me(r.at)}, ${r.user}</div>
      ${r.entity==="invoices"&&r.prev&&r.prev.doc&&l`<div class="timeline-extra">
        <${C} small icon="download" busy=${t===r.id} onClick=${()=>a(r)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function To({id:e}){de();let t=D("invoices",e),[n,s]=k(null),[a,r]=k(t&&t.internalNotes||""),[i,o]=k("");if(!t)return l`<${ue} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${C} onClick=${()=>Z("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Z(`/invoices/${e}/edit`,{replace:!0}),0),null;let u=ls(t),d=[..._e(e)].sort((N,J)=>N.date<J.date?-1:1),c=[...qt(e)].sort((N,J)=>N.createdAt<J.createdAt?-1:1),f=xe(d),m=Kn(t),p=t.type==="credit_note",h=ot(t,"invoices"),g=t.relatedInvoiceId?D("invoices",t.relatedInvoiceId):null,$=t.creditNoteId?D("invoices",t.creditNoteId):null,v=t.quoteId?D("quotes",t.quoteId):null,b=!p&&m>0,E=!p&&t.status==="credited"&&f>0,I=!p&&["issued","sent"].includes(t.status),O=t.fx?Number(t.fx.usdToEur):null;async function x(){o("pdf"),await M(()=>us(t,"invoices")),o("")}async function V(){if(f>0){T("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let N=await ie({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(N===null)return;await M(async()=>(await ss(e,N),!0))&&T("Rechnung storniert","good")}async function ce(){if(!await ie({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${d.length?` Die eingetragenen Zahlungen (${S(f,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await M(()=>oo(e))&&(T(`${t.number} ist wieder ein Entwurf`,"good"),Z(`/invoices/${e}/edit`))}async function z(){if(!await ie({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await M(()=>fo(e))&&T("Stornierung zurückgenommen","good")}async function w(){let N=p?t:$,J=p?g:t;if(!N||!await ie({title:`Gutschrift ${N.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${J?` Die Rechnung ${J.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let U=await M(()=>dr(N.id));U&&(T(`Gutschrift ${U.creditNumber} zurückgenommen`,"good"),p&&Z(U.invoiceId?`/invoices/${U.invoiceId}`:"/invoices",{replace:!0}))}async function R(){await ms(t)&&Z("/invoices",{replace:!0})}async function B(){let N=await ie({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(N===null)return;await M(()=>co(e,N))&&T("Klärung vermerkt","good")}async function G(){let N=await ie({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${S(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(N===null)return;await M(()=>uo(e,N))&&T("Klärung erledigt","good")}async function L(){let N=await ie({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${S(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${f>0?` Zu dieser Rechnung sind bereits ${S(f,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(N===null)return;let J=await M(()=>rs(e,N));J&&(T(`Gutschrift ${J.number} erstellt`,"good"),Z(`/invoices/${J.id}`))}async function A(N){if(!await ie({title:"Zahlung löschen?",text:`Die Zahlung über ${S(N.amountCents,t.currency)} vom ${q(N.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await M(async()=>(await po(N.id),!0))&&T("Zahlung gelöscht","good")}async function W(){await M(async()=>(await as("invoices",e,a),!0))&&T("Notiz gespeichert","good")}return l`
    <${he} title=${l`${p?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${ka} inv=${t} /> <span class="head-meta">${Ue(t)}</span>`}>
      <${C} icon="download" busy=${i==="pdf"} onClick=${x}>PDF<//>
      ${!p&&t.status==="issued"&&l`<${C} icon="mail" onClick=${()=>s("send")}>Versenden<//>`}
      ${u==="overdue"&&l`<${C} icon="clock" onClick=${()=>s("reminder")}>Erinnern<//>`}
      ${b&&l`<${C} variant="primary" icon="money" onClick=${()=>s("payment")}>Zahlung eintragen<//>`}
      <${yt} items=${[!p&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>M(()=>pn(e,!0))},!p&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>s("send")},!p&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>M(()=>pn(e,!1))},!p&&m>0&&u!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>s("reminder")},I&&{label:"Zurück in den Entwurf",icon:"edit",onClick:ce},!p&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:B},!p&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>Z(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:z},(p||t.status==="credited"&&$)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:p,onClick:w},I&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:L},I&&{label:"Stornieren",icon:"x",danger:!0,onClick:V},!p&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:R}]} />
    <//>

    ${t.clarify&&l`<${ke} tone="warn" action=${l`<div class="notice-actions">
        <${C} small onClick=${B}>Ändern<//>
        <${C} small variant="primary" icon="check" onClick=${G}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${Me(t.clarify.at)} · ${m>0?`offen sind ${S(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${ke} tone="warn" action=${l`<${C} small icon="undo" onClick=${z}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${Me(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${$&&l`<${ke} tone="info" action=${l`<${C} small onClick=${()=>Z(`/invoices/${$.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${$.number} erstellt.
    <//>`}
    ${g&&l`<${ke} tone="info" action=${l`<${C} small onClick=${()=>Z(`/invoices/${g.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${g.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${Vn} model=${h} />
      </div>
      <aside class="split-side">
        <${j} title="Stand">
          <${Gt} rows=${[["Unternehmen",l`<${Qe} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Ue(t)}</a>`],["Gesamtbetrag",l`<${Mt} doc=${t} />`],!p&&["Bezahlt",S(f,t.currency)],!p&&["Offen",l`<span class=${u==="overdue"?"tone-bad strong":"strong"}>${S(m,t.currency)}</span>`],!p&&t.dueDate&&["Fällig am",l`${q(t.dueDate)}${u==="overdue"?l` <span class="tone-bad">(seit ${wn(t.dueDate,F())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",Me(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",Me(t.firstFinalizedAt)],t.sentAt&&["Versendet",Me(t.sentAt)],v&&["Aus Angebot",l`<a href=${`#/quotes/${v.id}`}>${v.number}</a>`]]} />
        <//>

        ${!p&&l`<${j} title="Zahlungen" action=${b?l`<${C} small icon="plus" onClick=${()=>s("payment")}>Zahlung<//>`:E&&l`<${C} small icon="undo" onClick=${()=>s("refund")}>Erstattung<//>`}>
          ${d.length?l`<ul class="plain-list">
                ${d.map(N=>l`<li class="row-between" key=${N.id}>
                  <span><span class="strong">${S(N.amountCents,t.currency)}</span>
                    <span class="cell-sub">${N.amountCents<0?"Erstattung, ":""}${q(N.date)}${N.method?`, ${N.method}`:""}${N.note?` – ${N.note}`:""}</span></span>
                  <span class="row-actions">
                    <${C} variant="ghost" small icon="edit" title=${N.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>s({edit:N})} />
                    <${C} variant="ghost" small icon="trash" title=${N.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>A(N)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${c.length>0&&l`<${j} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${c.map(N=>l`<li class="row-between" key=${N.id}>
              <span>${(at.find(J=>J.id===N.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${q(N.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${j} title="Wechselkurs">
          ${O?l`<p class="strong">1 USD = ${_n(O)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${q(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${j} title="Interne Notiz">
          <${le} value=${a} onInput=${r} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${a!==(t.internalNotes||"")&&l`<div class="panel-actions"><${C} small variant="primary" onClick=${W}>Notiz speichern<//></div>`}
        <//>

        <${j} title="Verlauf"><${kr} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${xr} inv=${t} onClose=${()=>s(null)} />`}
    ${n==="refund"&&l`<${xr} inv=${t} refund onClose=${()=>s(null)} />`}
    ${n&&n.edit&&l`<${xr} inv=${t} payment=${n.edit} onClose=${()=>s(null)} />`}
    ${n==="send"&&l`<${On} doc=${t} coll="invoices" mode="send" onClose=${()=>s(null)} />`}
    ${n==="reminder"&&l`<${On} doc=${t} coll="invoices" mode="reminder" onClose=${()=>s(null)} />`}
  `}var zo=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function Lo(){de();let[e,t]=k(""),[n,s]=k("all"),a=!ye(),r=F(),i=be(()=>y.quotes.filter(He).map(d=>({quote:d,status:cn(d,r)})),[y.version,y.settings.activeCompany]),o=i.filter(d=>zo.find(c=>c.id===n).test(d.status)).filter(d=>Ae(e,d.quote.number,Ue(d.quote),(d.quote.items||[]).map(c=>c.name).join(" "))),u=[{key:"number",label:"Nummer",class:"nw",sort:d=>d.quote.number||"",render:d=>l`<span class="cell-main">${d.quote.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:d=>Ue(d.quote),render:d=>Ue(d.quote)},...a?[{key:"company",label:"Unternehmen",render:d=>l`<${Qe} id=${d.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:d=>d.quote.issueDate,render:d=>q(d.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:d=>d.quote.validUntil||"",render:d=>q(d.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:d=>we(d.quote.totals?d.quote.totals.totalCents:0,d.quote.currency,d.quote.fx)||0,render:d=>l`<${Mt} doc=${d.quote} />`},{key:"status",label:"Status",sort:d=>d.status,render:d=>l`<${Sa} quote=${d.quote} />`}];return l`
    <${he} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung.">
      <${C} variant="primary" icon="plus" onClick=${()=>Z("/quotes/new")}>Neues Angebot<//>
    <//>
    ${y.quotes.length>0&&l`<div class="filters">
      <${it} value=${e} onInput=${t} placeholder="Nummer, Kunde, Leistung" />
      <${Mn} label="Status" value=${n} onChange=${s}
        options=${zo.map(d=>({id:d.id,label:d.label,count:i.filter(c=>d.test(c.status)).length}))} />
    </div>`}
    <${We} columns=${u} rows=${o} rowKey=${d=>d.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${d=>Z(d.quote.status==="draft"?`/quotes/${d.quote.id}/edit`:`/quotes/${d.quote.id}`)}
      empty=${y.quotes.length?l`<${ue} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${ue} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${C} variant="primary" icon="plus" onClick=${()=>Z("/quotes/new")}>Erstes Angebot schreiben<//>
          <//>`} />
  `}function Po({id:e}){de();let t=D("quotes",e),[n,s]=k(null),[a,r]=k(t&&t.internalNotes||""),[i,o]=k("");if(!t)return l`<${ue} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${C} onClick=${()=>Z("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Z(`/quotes/${e}/edit`,{replace:!0}),0),null;let u=cn(t,F()),d=ot(t,"quotes"),c=t.invoiceId?D("invoices",t.invoiceId):null,f=["open","sent","expired"].includes(u);async function m(){o("pdf"),await M(()=>us(t,"quotes")),o("")}async function p($,v){await M(async()=>(await fn(e,$),!0))&&T(v,"good")}async function h(){if(!await ie({title:"In Rechnung umwandeln?",text:`Aus dem Angebot ${t.number} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let v=await M(()=>bo(e));o(""),v&&(T("Rechnungsentwurf angelegt","good"),Z(`/invoices/${v.id}/edit`))}async function g(){await M(async()=>(await as("quotes",e,a),!0))&&T("Notiz gespeichert","good")}return l`
    <${he} title=${`Angebot ${t.number}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${Sa} quote=${t} /> <span class="head-meta">${Ue(t)}</span>`}>
      <${C} icon="download" busy=${i==="pdf"} onClick=${m}>PDF<//>
      ${u==="open"&&l`<${C} icon="mail" onClick=${()=>s("send")}>Versenden<//>`}
      ${!c&&u!=="declined"&&l`<${C} variant="primary" icon="invoice" busy=${i==="convert"} onClick=${h}>In Rechnung umwandeln<//>`}
      <${yt} items=${[f&&{label:"Als angenommen markieren",icon:"check",onClick:()=>p("accepted","Angebot angenommen")},f&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>p("declined","Angebot abgelehnt")},u==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>s("send")},["accepted","declined"].includes(u)&&!c&&{label:"Wieder öffnen",icon:"undo",onClick:()=>p("open","Angebot wieder geöffnet")},{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>Z(`/quotes/new?copy=${e}`)}]} />
    <//>

    ${c&&l`<${ke} tone="info" action=${l`<${C} small onClick=${()=>Z(`/invoices/${c.id}${c.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${c.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${c.number}`}.
    <//>`}
    ${u==="expired"&&l`<${ke} tone="warn">Dieses Angebot ist seit dem ${q(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main"><${Vn} model=${d} /></div>
      <aside class="split-side">
        <${j} title="Stand">
          <${Gt} rows=${[["Unternehmen",l`<${Qe} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Ue(t)}</a>`],["Angebotssumme",l`<${Mt} doc=${t} />`],["Gültig bis",q(t.validUntil)],["Erstellt",Me(t.finalizedAt)],t.sentAt&&["Versendet",Me(t.sentAt)],t.decidedAt&&["Entschieden",Me(t.decidedAt)]]} />
        <//>
        <${j} title="Interne Notiz">
          <${le} value=${a} onInput=${r} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${a!==(t.internalNotes||"")&&l`<div class="panel-actions"><${C} small variant="primary" onClick=${g}>Notiz speichern<//></div>`}
        <//>
        <${j} title="Verlauf"><${kr} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${On} doc=${t} coll="quotes" mode="send" onClose=${()=>s(null)} />`}
  `}function ps({customer:e,onClose:t,onSaved:n}){let s=!e||!D("customers",e.id),[a,r]=k(()=>({...e||Kt()})),[i,o]=k((a.tags||[]).join(", ")),[u,d]=k(!1),c=m=>p=>r(h=>({...h,[m]:p}));async function f(){d(!0);let m={...a,tags:i.split(",").map(h=>h.trim()).filter(Boolean),paymentTermDays:a.paymentTermDays===""?null:a.paymentTermDays},p=await M(()=>Xa(m));d(!1),p&&(T(s?"Kunde angelegt":"Kunde gespeichert","good"),n&&n(p),t())}return l`<${et} title=${s?"Neuer Kunde":"Kunde bearbeiten"} onClose=${t} size="lg" onSubmit=${f}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${u}>Kunde speichern<//>`}>
    <div class="form-grid">
      <${K} class="span-4" label="Unternehmen" value=${a.company} onInput=${c("company")} />
      <${K} class="span-2" label="Kundennummer" value=${a.number} onInput=${c("number")} placeholder=${rr()}
        hint="Leer lassen für automatische Nummer" />
      <${K} class="span-3" label="Vorname" value=${a.firstName} onInput=${c("firstName")} />
      <${K} class="span-3" label="Nachname" value=${a.lastName} onInput=${c("lastName")} />
      <${K} class="span-6" label="Ansprechpartner (falls abweichend)" value=${a.contact} onInput=${c("contact")} />

      <${K} class="span-4" label="Straße" value=${a.street} onInput=${c("street")} />
      <${K} class="span-2" label="Hausnummer" value=${a.houseNo} onInput=${c("houseNo")} />
      <${K} class="span-2" label="PLZ" value=${a.zip} onInput=${c("zip")} />
      <${K} class="span-4" label="Ort" value=${a.city} onInput=${c("city")} />
      <${K} class="span-3" label="Bundesland / Region" value=${a.region} onInput=${c("region")} />
      <${K} class="span-3" label="Land" value=${a.country} onInput=${c("country")} />

      <${K} class="span-3" label="E-Mail" type="email" value=${a.email} onInput=${c("email")} />
      <${K} class="span-3" label="Telefon" value=${a.phone} onInput=${c("phone")} />
      <${K} class="span-6" label="Website" value=${a.website} onInput=${c("website")} />

      <${K} class="span-3" label="Steuer-ID" value=${a.taxId} onInput=${c("taxId")} />
      <${K} class="span-3" label="USt-IdNr. / VAT ID" value=${a.vatId} onInput=${c("vatId")} />

      <${me} class="span-2" label="Belegsprache" value=${a.language} onChange=${c("language")}
        placeholder="Wie Unternehmen" options=${It} />
      <${me} class="span-2" label="Währung" value=${a.currency} onChange=${c("currency")}
        placeholder="Wie Unternehmen" options=${Ve} />
      <${Ee} class="span-2" label="Zahlungsziel (Tage)" value=${a.paymentTermDays} onChange=${c("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${K} class="span-6" label="Tags" value=${i} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${le} class="span-6" label="Notizen (intern)" value=${a.notes} onInput=${c("notes")} rows=${3} />
      <div class="span-6"><${Te} label="Kunde ist aktiv" checked=${a.active!==!1} onChange=${c("active")} /></div>
    </div>
  <//>`}function Ko(e){let t=hn(),n=F(),s=new Map,a=r=>(s.has(r)||s.set(r,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),s.get(r));for(let r of je(t,{companyId:e})){let i=a(r.inv.customerId);i.usd+=r.netUSD,i.eur+=r.netEUR,r.inv.type!=="credit_note"&&(i.count+=1),r.date>i.last&&(i.last=r.date)}for(let r of Wt(t,{companyId:e},n)){let i=a(r.inv.customerId);i.openUSD+=r.openUSD,i.openEUR+=r.openEUR,r.status==="overdue"&&(i.overdueUSD+=r.openUSD,i.overdueEUR+=r.openEUR)}for(let r of y.payments){let i=D("invoices",r.invoiceId);if(!i||e&&i.companyId!==e)continue;let o=a(i.customerId);o.paidUSD+=we(r.amountCents,i.currency,i.fx)||0,o.paidEUR+=mt(r.amountCents,i.currency,i.fx)||0}return s}function Fo(){de();let[e,t]=k(""),[n,s]=k("active"),[a,r]=k(""),[i,o]=k(null),u=_t(),d=be(()=>Ko(u),[y.version,u]),c=be(()=>[...new Set(y.customers.flatMap(p=>p.tags||[]))].sort((p,h)=>p.localeCompare(h,"de")),[y.version]),f=y.customers.filter(p=>n==="active"&&p.active===!1||n==="inactive"&&p.active!==!1||a&&!(p.tags||[]).includes(a)?!1:Ae(e,p.number,p.company,p.firstName,p.lastName,p.contact,p.city,p.country,p.email,(p.tags||[]).join(" "))),m=[{key:"number",label:"Nr.",sort:p=>p.number,width:"90px",render:p=>l`<span class="mono-num">${p.number}</span>`},{key:"name",label:"Kunde",sort:p=>ne(p),render:p=>l`<div class="cell-main">${ne(p)}</div>
        ${Ut(p)&&Ut(p)!==ne(p)&&l`<div class="cell-sub">${Ut(p)}</div>`}`},{key:"city",label:"Ort",sort:p=>p.city,render:p=>[p.city,p.country].filter(Boolean).join(", ")},{key:"tags",label:"Tags",render:p=>(p.tags||[]).map(h=>l`<span class="tag">${h}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:p=>(d.get(p.id)||{}).usd||0,render:p=>{let h=d.get(p.id);return h&&h.usd?S(h.usd,"USD"):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:p=>(d.get(p.id)||{}).openUSD||0,render:p=>{let h=d.get(p.id);return!h||!h.openUSD?l`<span class="muted-text">–</span>`:l`<span class=${h.overdueUSD?"tone-bad":""}>${S(h.openUSD,"USD")}</span>`}},{key:"status",label:"",render:p=>p.active===!1?l`<${Le} tone="mute">Inaktiv<//>`:""}];return l`
    <${he} title="Kunden" sub="Ein Kunde wird einmal angelegt und kann von jedem Unternehmen abgerechnet werden.">
      <${C} variant="primary" icon="plus" onClick=${()=>o(Kt())}>Neuer Kunde<//>
    <//>
    ${y.customers.length>0&&l`<div class="filters">
      <${it} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail" />
      <${Mn} label="Status" value=${n} onChange=${s} options=${[{id:"active",label:"Aktiv"},{id:"inactive",label:"Inaktiv"},{id:"all",label:"Alle"}]} />
      ${c.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Nach Tag filtern" onChange=${p=>r(p.target.value)}>
        <option value="">Alle Tags</option>
        ${c.map(p=>l`<option value=${p}>${p}</option>`)}
      </select>`}
    </div>`}
    <${We} columns=${m} rows=${f} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${p=>Z(`/customers/${p.id}`)}
      empty=${y.customers.length?l`<${ue} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kunden." />`:l`<${ue} icon="customers" title="Noch keine Kunden" text="Lege deinen ersten Kunden an – danach kannst du ihn in jeder Rechnung auswählen.">
            <${C} variant="primary" icon="plus" onClick=${()=>o(Kt())}>Ersten Kunden anlegen<//>
          <//>`} />
    ${i&&l`<${ps} customer=${i} onClose=${()=>o(null)}
      onSaved=${p=>{D("customers",i.id)||Z(`/customers/${p.id}`)}} />`}
  `}function Oo({id:e}){de();let t=D("customers",e),[n,s]=k(!1);if(!t)return l`<${ue} icon="customers" title="Kunde nicht gefunden" text="Dieser Kunde existiert nicht mehr.">
      <${C} onClick=${()=>Z("/customers")}>Zur Kundenliste<//>
    <//>`;let a=F(),r=Ko(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},i=y.invoices.filter(g=>g.customerId===e).sort((g,$)=>g.issueDate<$.issueDate?1:-1),o=y.quotes.filter(g=>g.customerId===e).sort((g,$)=>g.issueDate<$.issueDate?1:-1),u=[...new Set([...i,...o].map(g=>g.companyId))],d=new Map;for(let g of i)if(!(g.status==="draft"||g.status==="cancelled"||g.type==="credit_note"))for(let $ of g.items||[]){let v=$.serviceId||`n:${$.name}`,b=d.get(v)||{name:$.name,times:0,last:""};b.times+=1,g.issueDate>b.last&&(b.last=g.issueDate),d.set(v,b)}let c=[...d.values()].sort((g,$)=>$.times-g.times);async function f(){if(!await ie({title:"Kunde löschen?",text:`${ne(t)} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await M(async()=>(await to(e),!0))&&(T("Kunde gelöscht","good"),Z("/customers"))}let m=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),p=[{key:"number",label:"Nummer",render:g=>l`<a href=${`#/invoices/${g.id}`} class="cell-main">${g.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:g=>l`<${Qe} id=${g.companyId} />`},{key:"date",label:"Datum",render:g=>q(g.issueDate)},{key:"due",label:"Fällig",render:g=>q(g.dueDate)},{key:"total",label:"Betrag",align:"right",render:g=>l`<${Mt} doc=${g} />`},{key:"status",label:"Status",render:g=>l`<${ka} inv=${g} />`}],h=[{key:"number",label:"Nummer",render:g=>l`<a href=${`#/quotes/${g.id}`} class="cell-main">${g.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:g=>l`<${Qe} id=${g.companyId} />`},{key:"date",label:"Datum",render:g=>q(g.issueDate)},{key:"valid",label:"Gültig bis",render:g=>q(g.validUntil)},{key:"total",label:"Betrag",align:"right",render:g=>l`<${Mt} doc=${g} />`},{key:"status",label:"Status",render:g=>l`<${Sa} quote=${g} />`}];return l`
    <${he} title=${ne(t)} back=${{href:"#/customers",label:"Kunden"}}
      sub=${l`<span>Kundennummer ${t.number}</span>${t.active===!1?l`<${Le} tone="mute">Inaktiv<//>`:""}`}>
      <${C} icon="edit" onClick=${()=>s(!0)}>Bearbeiten<//>
      <${C} variant="primary" icon="plus" onClick=${()=>Z(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${yt} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>Z(`/quotes/new?customer=${e}`)},{label:"Kunde löschen",icon:"trash",danger:!0,disabled:ir(e),onClick:f}]} />
    <//>

    <div class="stat-row">
      <${Ie} label="Umsatz gesamt (netto)" value=${S(r.usd,"USD")} sub=${`≈ ${S(r.eur,"EUR")}, ${r.count} Rechnungen`} />
      <${Ie} label="Offene Forderungen" value=${S(r.openUSD,"USD")} sub=${`≈ ${S(r.openEUR,"EUR")}`} />
      <${Ie} label="Davon überfällig" value=${S(r.overdueUSD,"USD")} tone=${r.overdueUSD?"bad":""} sub=${`≈ ${S(r.overdueEUR,"EUR")}`} />
      <${Ie} label="Bezahlt" value=${S(r.paidUSD,"USD")} sub=${`≈ ${S(r.paidEUR,"EUR")}`} />
    </div>

    <div class="split">
      <div class="split-main">
        <${j} title="Rechnungen" flush>
          <${We} columns=${p} rows=${i} onRowClick=${g=>Z(`/invoices/${g.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${j} title="Angebote" flush>
          <${We} columns=${h} rows=${o} onRowClick=${g=>Z(`/quotes/${g.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kunden.</p>`} />
        <//>
      </div>
      <aside class="split-side">
        <${j} title="Kontakt">
          <${Gt} rows=${[["Ansprechpartner",Ut(t)],["Adresse",m.length?l`${m.map(g=>l`<div>${g}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(It.find(g=>g.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(g=>l`<span class="tag">${g}</span>`):""]]} />
        <//>
        <${j} title="Abgerechnet über">
          ${u.length?l`<ul class="plain-list">${u.map(g=>l`<li><${Qe} id=${g} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${j} title="Gebuchte Leistungen">
          ${c.length?l`<ul class="plain-list">${c.slice(0,12).map(g=>l`<li class="row-between">
                <span>${g.name}</span><span class="muted-text">${g.times}×, zuletzt ${q(g.last)}</span></li>`)}</ul>`:l`<p class="muted-text">Noch keine abgerechneten Leistungen.</p>`}
        <//>
        <${j} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${ps} customer=${t} onClose=${()=>s(!1)} />`}
  `}function Sr({service:e,onClose:t,onSaved:n}){let s=!e||!D("services",e.id),[a,r]=k(()=>({...e||Ft()})),[i,o]=k(!1),u=m=>p=>r(h=>({...h,[m]:p})),d=y.settings.serviceCategories||[],c=Cn.includes(a.unit)||!a.unit?Cn:[...Cn,a.unit];async function f(){o(!0);let m=await M(()=>es(a));o(!1),m&&(T(s?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${et} title=${s?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${f}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${K} class="span-4" label="Name" value=${a.name} onInput=${u("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${K} class="span-2" label="Interne Bezeichnung" value=${a.internalName} onInput=${u("internalName")} />
      <${le} class="span-6" label="Beschreibung auf der Rechnung" value=${a.invoiceText} onInput=${u("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${le} class="span-6" label="Interne Beschreibung" value=${a.description} onInput=${u("description")} rows=${2} />

      <${Ee} class="span-2" label="Einzelpreis (netto)" mode="money" value=${a.priceCents} onChange=${u("priceCents")} min=${0} />
      <${me} class="span-1" label="Währung" value=${a.currency} onChange=${u("currency")} options=${Ve} />
      <${me} class="span-2" label="Einheit" value=${a.unit} onChange=${u("unit")} options=${c} />
      <${Ee} class="span-1" label="Menge" value=${a.defaultQty} onChange=${u("defaultQty")} digits=${3} min=${0} />

      <${Ee} class="span-2" label="Steuersatz" value=${a.taxRate} onChange=${u("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${me} class="span-2" label="Kategorie" value=${a.category} onChange=${u("category")} placeholder="Keine"
        options=${d.includes(a.category)||!a.category?d:[...d,a.category]} />
      <${me} class="span-2" label="Nur für Unternehmen" value=${a.companyId} onChange=${u("companyId")} placeholder="Alle Unternehmen"
        options=${ve().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${Te} label="Wiederkehrende Leistung" checked=${a.recurring} onChange=${u("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${Te} label="Aktiv" checked=${a.active!==!1} onChange=${u("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function qo(){de();let[e,t]=k(""),[n,s]=k(""),[a,r]=k(null),i=_t(),o=y.services.filter(f=>i&&f.companyId&&f.companyId!==i||n&&f.category!==n?!1:Ae(e,f.name,f.internalName,f.description,f.invoiceText,f.category)),u=[...new Set(y.services.map(f=>f.category).filter(Boolean))].sort((f,m)=>f.localeCompare(m,"de"));async function d(f){if(!await ie({title:"Leistung löschen?",text:`„${f.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await M(async()=>(await no(f.id),!0))&&T("Leistung gelöscht","good")}let c=[{key:"name",label:"Leistung",sort:f=>f.name,render:f=>l`<div class="cell-main">${f.name}${f.active===!1&&l` <${Le} tone="mute">Inaktiv<//>`}</div>
        ${(f.internalName||f.invoiceText)&&l`<div class="cell-sub clamp-1">${f.internalName||f.invoiceText}</div>`}`},{key:"category",label:"Kategorie",sort:f=>f.category,render:f=>f.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:f=>(D("companies",f.companyId)||{}).name||"",render:f=>{let m=D("companies",f.companyId);return m?l`<span class="co-tag"><${Ya} company=${m} />${m.shortName||m.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:f=>f.recurring?1:0,render:f=>f.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:f=>f.unit},{key:"tax",label:"Steuer",align:"right",render:f=>f.taxRate!=null&&f.taxRate!==""?rt(f.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:f=>f.priceCents,render:f=>S(f.priceCents,f.currency)},{key:"actions",label:"",align:"right",render:f=>l`<${C} variant="ghost" small icon="trash" title=${`${f.name} löschen`} onClick=${()=>d(f)} />`}];return l`
    <${he} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <${C} variant="primary" icon="plus" onClick=${()=>r(Ft({companyId:""}))}>Neue Leistung<//>
    <//>
    ${y.services.length>0&&l`<div class="filters">
      <${it} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${u.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${f=>s(f.target.value)}>
        <option value="">Alle Kategorien</option>
        ${u.map(f=>l`<option value=${f}>${f}</option>`)}
      </select>`}
    </div>`}
    <${We} columns=${c} rows=${o} initialSort=${{key:"name",dir:"asc"}} onRowClick=${f=>r(f)}
      empty=${y.services.length?l`<${ue} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${ue} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${C} variant="primary" icon="plus" onClick=${()=>r(Ft())}>Erste Leistung anlegen<//>
          <//>`} />
    ${a&&l`<${Sr} service=${a} onClose=${()=>r(null)} />`}
  `}var Uc={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function fs(e,t,n,s){let a={...e,customerId:t?t.id:""};return t&&(t.language?a.language=t.language:n&&(a.language=n.language),t.currency&&Ve.includes(t.currency)?a.currency=t.currency:n&&(a.currency=n.currency),s==="invoices"&&(a.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),a}function Nc(e,t,n){if(t&&t!=="new"){let i=D(e,t);return i?ge(i):null}let s=ve(),a=ye()||(s.length===1?s[0]:null),r;if(e==="invoices"&&n.copy&&D("invoices",n.copy))r=go(D("invoices",n.copy));else if(e==="invoices")r=ct(a);else if(n.copy&&D("quotes",n.copy)){let i=D("quotes",n.copy),o=D("companies",i.companyId)||a;r=En(o,{validUntil:Be(F(),30),customerId:i.customerId,currency:i.currency,language:i.language,items:i.items.map(u=>({...u,id:na().id})),discount:ge(i.discount),intro:i.intro,paymentTerms:i.paymentTerms,footer:i.footer,showSecondary:i.showSecondary})}else r=En(a,{validUntil:Be(F(),30)});return n.customer&&D("customers",n.customer)&&(r=fs(r,D("customers",n.customer),D("companies",r.companyId),e)),r}function Cr({doc:e,company:t,onChange:n,onNewService:s}){let[a,r]=k(null),i=De(null),o=e.items||[],u=e.currency;se(()=>{if(!a||!i.current)return;let g=i.current.querySelector(`[data-item="${a}"] .combo-input`);g&&g.focus(),r(null)},[a,o.length]);let d=be(()=>y.services.filter(g=>g.active!==!1&&(!g.companyId||g.companyId===e.companyId)).sort((g,$)=>g.name.localeCompare($.name,"de")).map(g=>({id:g.id,label:g.name,search:`${g.internalName} ${g.category}`,sub:`${S(g.priceCents,g.currency)} je ${g.unit}`})),[y.version,e.companyId]),c=(g,$)=>n(o.map(v=>v.id===g?{...v,...$}:v)),f=g=>n(o.filter($=>$.id!==g));function m(g,$){let v=g+$;if(v<0||v>=o.length)return;let b=[...o];[b[g],b[v]]=[b[v],b[g]],n(b)}function p(){let g=na({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,g]),r(g.id)}function h(g,$){let v=D("services",$);if(!v)return;let b=tt(v,t),E=b.priceCents;if(v.currency&&v.currency!==u){let I=e.fx?bt(v.currency,e.fx.usdToEur):null,O=I?ln(E,v.currency,u,I):null;O!=null?(E=O,T(`Preis von ${v.currency} in ${u} umgerechnet – bitte prüfen.`,"info")):T(`Die Leistung ist in ${v.currency} hinterlegt. Bitte den Preis in ${u} prüfen.`,"info")}c(g,{...b,id:g,priceCents:E})}return l`<div class="items" ref=${i}>
    ${o.map((g,$)=>l`<div class="item" key=${g.id} data-item=${g.id}>
      <div class="item-top">
        <span class="item-pos">${$+1}</span>
        <div class="item-name">
          <${ca} freeText options=${d} text=${g.name} label=${`Position ${$+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${v=>c(g.id,{name:v,serviceId:g.serviceId&&D("services",g.serviceId)&&D("services",g.serviceId).name===v?g.serviceId:""})}
            onChange=${v=>h(g.id,v)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${$+1} nach oben`} disabled=${$===0} onClick=${()=>m($,-1)}><${ee} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${$+1} nach unten`} disabled=${$===o.length-1} onClick=${()=>m($,1)}><${ee} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${$+1} entfernen`} onClick=${()=>f(g.id)}><${ee} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String(g.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${$+1}: Beschreibung`}
        value=${g.description} onInput=${v=>c(g.id,{description:v.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${Oe} value=${g.qty} digits=${3} onChange=${v=>c(g.id,{qty:v})} aria-label=${`Position ${$+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${g.unit} aria-label=${`Position ${$+1}: Einheit`}
            onInput=${v=>c(g.id,{unit:v.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${Oe} mode="money" value=${g.priceCents} onChange=${v=>c(g.id,{priceCents:v})} aria-label=${`Position ${$+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${Oe} value=${g.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${v=>c(g.id,{discountPct:v})} aria-label=${`Position ${$+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${Oe} value=${g.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${v=>c(g.id,{taxRate:v})} aria-label=${`Position ${$+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${S(Zs(g),u)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${Cn.map(g=>l`<option value=${g}></option>`)}</datalist>
    <div class="items-foot">
      <${C} icon="plus" onClick=${p}>Position hinzufügen<//>
      <${C} variant="ghost" icon="services" onClick=${s}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function Na({coll:e,id:t,params:n}){de();let s=Uc[e],[a,r]=k(()=>Nc(e,t,n||{})),[i,o]=k(!1),[u,d]=k({loading:!1,error:""}),[c,f]=k(""),[m,p]=k(""),[h,g]=k([]),[$,v]=k(null),[b,E]=k(!1),I=De(0),O=De(!0),x=_=>{r(_),o(!0)},V=_=>H=>x(Re=>({...Re,[_]:H}));se(()=>(i?Ha(Wa):rn(),()=>rn()),[i]);let ce=a?D("companies",a.companyId):null,z=a?D("customers",a.customerId):null,w=a?`${a.currency}|${a.issueDate}`:"";async function R(_){if(!a||!fe(a.issueDate)||!_&&a.fx&&a.fx.manual)return;let H=++I.current,Re=a.currency,zt=a.issueDate;d({loading:!0,error:""});try{let ft=await ua(Re,zt);if(H!==I.current)return;r(Ke=>Ke.currency===Re&&Ke.issueDate===zt?{...Ke,fx:ft}:Ke),_&&o(!0),d({loading:!1,error:""})}catch(ft){if(H!==I.current)return;r(Ke=>Ke.fx&&!Ke.fx.manual&&Ke.fx.forDate&&fe(Ke.issueDate)&&Ke.fx.forDate!==dn(Ke.issueDate)?{...Ke,fx:null}:Ke),d({loading:!1,error:ft.message})}}if(se(()=>{let _=O.current;O.current=!1,!(!a||a.status!=="draft")&&(_&&a.number&&a.fx||R(!1))},[w]),se(()=>{let _=!0;if(!a||!ce){f("");return}if(a.number){f(a.number);return}return ma(ce,s.numberKind,a.issueDate).then(H=>{_&&f(H)}).catch(()=>{_&&f("")}),()=>{_=!1}},[a&&a.companyId,a&&a.issueDate,y.version]),!a)return l`<${ue} title=${`${s.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${C} onClick=${()=>Z(s.list)}>Zur Übersicht<//>
    <//>`;if(a.status!=="draft")return setTimeout(()=>Vt(`${s.list}/${a.id}`),0),null;let B=dt(a),G=a.fx?bt(a.currency,a.fx.usdToEur,a.fx):null,L={...a,fx:G,totals:B,dueDate:e==="invoices"?or(a):""},A=ot(L,e,{previewNumber:c}),W=a.currency==="USD"?"EUR":"USD",N=G?ln(B.totalCents,a.currency,W,G):null,J=ve(),ae=!!D(e,a.id),U=e==="invoices"&&a.number?a.number:"",$e=U?a.reopened||{}:null,Ne=U?xe(_e(a.id)):0,$n=y.customers.filter(_=>_.active!==!1||_.id===a.customerId).sort((_,H)=>ne(_).localeCompare(ne(H),"de")).map(_=>({id:_.id,label:ne(_),sub:[_.number,_.city].filter(Boolean).join(", "),search:`${_.firstName} ${_.lastName} ${_.contact} ${_.email}`}));function ws(_){let H=D("companies",_),Re=D("companies",a.companyId);if(!H){x(Je=>({...Je,companyId:""}));return}let zt=e==="quotes"?"quoteText":"invoiceText",ft=(Je,kt)=>String(Je||"")===String(kt||"");x(Je=>{let kt=D("customers",Je.customerId),St={...Je,companyId:_};(!Je.intro||Re&&ft(Je.intro,Re[zt]))&&(St.intro=H[zt]||""),(!Je.paymentTerms||Re&&ft(Je.paymentTerms,Re.paymentTerms))&&(St.paymentTerms=H.paymentTerms||""),(!Je.footer||Re&&ft(Je.footer,Re.footer))&&(St.footer=H.footer||""),kt&&kt.language||(St.language=H.language),kt&&kt.currency||(St.currency=H.currency),e==="invoices"&&!(kt&&kt.paymentTermDays!=null&&kt.paymentTermDays!=="")&&(St.paymentTermDays=H.paymentTermDays),St.showSecondary=H.showSecondary;let Bl=Re&&Number(Re.defaultTaxRate)||0,Al=Number(H.defaultTaxRate)||0;return St.items=Je.items.map(Hn=>{let ks=Hn.serviceId?D("services",Hn.serviceId):null;return(!ks||ks.taxRate==null||ks.taxRate==="")&&(Number(Hn.taxRate)||0)===Bl?{...Hn,taxRate:Al}:Hn}),St});let Ke=D("customers",a.customerId);a.items.length&&!(Ke&&Ke.currency)&&H.currency!==a.currency&&T(`Währung auf ${H.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Sl(_){let H=D("customers",_),Re=a.currency,zt=fs(a,H,D("companies",a.companyId),e);x(ft=>fs(ft,H,D("companies",ft.companyId),e)),a.items.length&&zt.currency!==Re&&T(`Währung auf ${zt.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Cl(_){_!==a.currency&&(a.items.length&&T("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),x(H=>({...H,currency:_,fx:H.fx?bt(_,H.fx.usdToEur,H.fx):H.fx})))}function El(_){_>0&&(I.current+=1,d({loading:!1,error:""}),x(H=>({...H,fx:bt(H.currency,_,{manual:!0,source:"Von Hand eingetragen",date:F(),fetchedAt:Y()})})))}function Il(){let _=Ys("USD","EUR");_&&(x(H=>({...H,fx:bt(H.currency,_.rate,{manual:!0,source:`Letzter bekannter Kurs (${_.source})`,date:_.date,fetchedAt:_.fetchedAt})})),d({loading:!1,error:""}))}async function Ul(){p("save");let _=await M(()=>e==="invoices"?ts(a):ho(a));p(""),_&&(r(ge(_)),o(!1),g([]),T("Entwurf gespeichert","good"),(t==="new"||!t)&&(rn(),Z(`${s.list}/${_.id}/edit`,{replace:!0})))}async function Nl(){if(u.loading){T("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let _=ns(L,e==="quotes"?"quote":"invoice");if(g(_),_.length){T("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await ie({title:`${s.finalize}?`,text:U?`Die Rechnung behält die Nummer ${U} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${c} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${c} und lässt sich danach nicht mehr ändern.`,list:[`${ne(z)}`,`${S(B.totalCents,a.currency)}${N!=null?` (≈ ${S(N,W)})`:""}`,...Ne>0?[Ne>B.totalCents?`Achtung: Eingegangen sind bereits ${S(Ne,a.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${S(Ne,a.currency)}`]:[]],confirmLabel:s.finalize}))return;p("finalize");let Re=await M(()=>e==="invoices"?pa(L):ga(L));p(""),Re&&(o(!1),T(`${s.one} ${Re.number} ${U?"neu erstellt":"erstellt"}`,"good"),Vt(`${s.list}/${Re.id}`))}async function Rl(){if(U){await ms(D("invoices",a.id)||a)&&Vt(s.list);return}if(!await ie({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await M(async()=>(await(e==="invoices"?lr(a.id):$o(a.id)),!0))&&(T("Entwurf gelöscht","good"),Vt(s.list))}let xs=a.fx?Number(a.fx.usdToEur):null,Ds=!!a.serviceDateEnd;return l`
    <${he} title=${U?`Rechnung ${U} bearbeiten`:ae?s.editTitle:s.newTitle} back=${{href:`#${s.list}`,label:s.listLabel}}
      sub=${U?"Entwurf – die Nummer bleibt erhalten":c?`Nächste Nummer: ${c}`:ce?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${C} class="only-narrow" icon="eye" onClick=${()=>E(!b)}>${b?"Formular":"Vorschau"}<//>
      ${ae&&l`<${yt} items=${[{label:U?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:Rl}]} />`}
      <${C} icon="check" onClick=${Ul} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${C} variant="primary" icon="invoice" onClick=${Nl} busy=${m==="finalize"} disabled=${!!m}>${s.finalize}<//>
    <//>

    ${U&&l`<${ke} tone="info">
      Diese Rechnung war bereits erstellt${$e.finalizedAt?` (${Me($e.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${U}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${Ne>0?` Die eingetragenen Zahlungen (${S(Ne,a.currency)}) bleiben erhalten.`:""}
      ${$e.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${h.length>0&&l`<${ke} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${h.map(_=>l`<li>${_}</li>`)}</ul>
    <//>`}

    <div class=${`editor${b?" show-preview":""}`}>
      <div class="editor-form">
        <${j} title="Aussteller und Kunde">
          <div class="form-grid">
            <${me} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${ws}
              disabled=${!!U} hint=${U?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${J.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(U&&ce&&!J.some(_=>_.id===ce.id)?[ce,...J]:J).map(_=>({id:_.id,label:_.name}))} />
            <${Ce} class="span-3" label="Kunde" htmlFor="doc-customer">
              <${ca} id="doc-customer" options=${$n} value=${a.customerId} placeholder="Kunde suchen"
                autoFocus=${!!a.companyId&&!a.customerId}
                onChange=${Sl}
                onCreate=${_=>v({type:"customer",seed:_})} createLabel="als Kunde anlegen" />
            <//>
            <${Xe} class="span-2" label=${s.dateLabel} value=${a.issueDate} onInput=${V("issueDate")} />
            ${e==="invoices"&&l`
              <${Xe} class="span-2" label=${Ds?"Leistung von":"Leistungsdatum"} value=${a.serviceDate} onInput=${V("serviceDate")} />
              ${Ds?l`<${Xe} class="span-2" label="Leistung bis" value=${a.serviceDateEnd} onInput=${V("serviceDateEnd")} min=${a.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>V("serviceDateEnd")(a.serviceDate||a.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Ee} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${V("paymentTermDays")}
                hint=${L.dueDate?`Fällig am ${q(L.dueDate)}`:""} />
              ${Ds&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>V("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${Xe} class="span-2" label="Gültig bis" value=${a.validUntil} onInput=${V("validUntil")} min=${a.issueDate} />`}
            <${me} class="span-2" label="Währung" value=${a.currency} onChange=${Cl} options=${Ve} />
            <${me} class="span-2" label="Belegsprache" value=${a.language} onChange=${V("language")} options=${It} />
          </div>
        <//>

        <${j} title="Positionen">
          <${Cr} doc=${a} company=${ce} onChange=${_=>x(H=>({...H,items:_}))}
            onNewService=${()=>v({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${la} label="Art des Rabatts" value=${a.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:a.currency}]}
                  onChange=${_=>x(H=>({...H,discount:{type:_,value:0}}))} />
                ${a.discount.type==="abs"?l`<${Oe} mode="money" value=${a.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${_=>x(H=>({...H,discount:{type:"abs",value:_}}))} />`:l`<${Oe} value=${a.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${_=>x(H=>({...H,discount:{type:"pct",value:_}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${S(B.subtotalCents,a.currency)}</dd></div>
              ${B.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${S(-B.discountCents,a.currency)}</dd></div>`}
              ${B.taxGroups.filter(_=>_.rate!==0).map(_=>l`<div><dt>${ce&&ce.taxLabel||"Steuer"} ${rt(_.rate)}</dt><dd>${S(_.taxCents,a.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${S(B.totalCents,a.currency)}</dd></div>
              ${N!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${S(N,W)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${j} title="Wechselkurs">
          ${u.error&&l`<${ke} tone="warn" action=${Ys("USD","EUR")&&l`<${C} small onClick=${Il}>Letzten bekannten Kurs verwenden<//>`}>
            ${u.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${Oe} value=${xs} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${El} />
            <span class="fx-eq">EUR</span>
            <${C} small icon="refresh" busy=${u.loading} onClick=${()=>R(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${a.fx?l`${a.fx.manual?a.fx.source:`Quelle: ${a.fx.source}`}${a.fx.date?`, Stand ${q(a.fx.date)}`:""}.
                  ${a.currency==="EUR"&&xs?` Das entspricht 1 EUR = ${_n(1/xs)} USD.`:""}`:u.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${Te} label=${`Betrag zusätzlich in ${W} auf dem Beleg zeigen`} checked=${a.showSecondary} onChange=${V("showSecondary")} />
        <//>

        <${j} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${le} class="span-6" label="Einleitung" value=${a.intro} onInput=${V("intro")} rows=${2} />
            <${le} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${a.paymentTerms} onInput=${V("paymentTerms")} rows=${2} />
            <${le} class="span-6" label="Fußzeile" value=${a.footer} onInput=${V("footer")} rows=${2} />
          </div>
        <//>

        <${j} title="Interne Notiz">
          <${le} value=${a.internalNotes} onInput=${V("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${A.fileName}</span>
          </div>
          <${Vn} model=${A} />
        </div>
      </div>
    </div>

    ${$&&$.type==="customer"&&l`<${ps}
      customer=${Kt({company:$.seed||""})} onClose=${()=>v(null)}
      onSaved=${_=>x(H=>fs(H,_,D("companies",H.companyId),e))} />`}
    ${$&&$.type==="service"&&l`<${Sr}
      service=${Ft({companyId:"",currency:a.currency})} onClose=${()=>v(null)}
      onSaved=${_=>x(H=>({...H,items:[...H.items,tt(_,D("companies",H.companyId))]}))} />`}
  `}var Rc=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],Bc=15*1024*1024;function Vo(e){return new Promise((t,n)=>{let s=new FileReader;s.onload=()=>t(String(s.result).split(",")[1]||""),s.onerror=()=>n(s.error),s.readAsDataURL(e)})}function Ac(e){return new Promise((t,n)=>{let s=URL.createObjectURL(e),a=new Image;a.onload=()=>{URL.revokeObjectURL(s),t(a)},a.onerror=()=>{URL.revokeObjectURL(s),n(new Error("Das Bild konnte nicht gelesen werden."))},a.src=s})}function Er(e,t,n){return new Promise((s,a)=>{e.toBlob(r=>r?s(r):a(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function gs(e,t,n){let s=await Ac(e),a=s.naturalWidth||s.width,r=s.naturalHeight||s.height;if(!a||!r)throw new Error("Das Bild hat keine lesbare Größe.");let i=Math.min(1,t/Math.max(a,r)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(a*i)),o.height=Math.max(1,Math.round(r*i));let u=o.getContext("2d");return n&&(u.fillStyle=n,u.fillRect(0,0,o.width,o.height)),u.imageSmoothingQuality="high",u.drawImage(s,0,0,o.width,o.height),{canvas:o,scaled:i<1}}var _c=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function Ir(e,{shrink:t=!0}={}){if(e.size>Bc)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(_c(e))try{let{canvas:s}=await gs(e,2e3,"#ffffff");return{blob:await Er(s,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!Rc.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:s,scaled:a}=await gs(e,2e3,"#ffffff"),r=await Er(s,"image/jpeg",.85);return!a&&r.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:r,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function Zo(e){let{canvas:t}=await gs(e,1568,"#ffffff");return Er(t,"image/jpeg",.85)}async function Go(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await gs(e,800,null);return t.toDataURL("image/png")}async function hs(e){let t=await vi("blobs",e);return t?t.blob:null}var Ho="https://api.anthropic.com/v1/messages",xt=class extends Error{};function Mc(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var Tc=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function zc({model:e,base64:t,mime:n,categories:s,paymentMethods:a}){let r={type:"base64",media_type:n,data:t},i=n==="application/pdf"?{type:"document",source:r}:{type:"image",source:r};return{model:e,max_tokens:1024,tools:[Mc(s,a)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[i,{type:"text",text:Tc}]}]}}var lt=e=>typeof e=="string"?e.trim():"",Ur=e=>Number.isFinite(Number(e))?Ja(Number(e)):0;function Lc(e,{categories:t,paymentMethods:n}){let s=e&&Array.isArray(e.content)?e.content.find(p=>p.type==="tool_use"):null;if(!s||!s.input||typeof s.input!="object")throw new xt("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let a=s.input;if(a.is_receipt===!1)throw new xt("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let r=[],i=lt(a.currency).toUpperCase();Fa.includes(i)||(i&&r.push(`Die Währung ${i} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),i="");let o=Ur(a.net_amount),u=Ur(a.tax_amount),d=Ur(a.total_amount);d&&o+u!==d&&(!o&&u<=d||Math.abs(o+u-d)<=2?o=d-u:r.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let c=fe(lt(a.invoice_date))?lt(a.invoice_date):"";c||r.push("Das Belegdatum wurde nicht erkannt.");let f=fe(lt(a.payment_date))?lt(a.payment_date):"",m=Array.isArray(a.uncertain_fields)?a.uncertain_fields.map(String):[];return{fields:{vendor:lt(a.vendor).slice(0,200),description:lt(a.description).slice(0,300),invoiceNumber:lt(a.invoice_number).slice(0,80),invoiceDate:c,paymentDate:f,currency:i,netCents:o,taxCents:u,totalCents:d||o+u,paymentMethod:n.includes(lt(a.payment_method))?lt(a.payment_method):"",category:t.includes(lt(a.category))?lt(a.category):""},uncertain:m,warnings:r,usage:e.usage||null}}function Wo(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function jo(e,{apiKey:t,model:n,categories:s,paymentMethods:a}){if(!t)throw new xt("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let r=e,i=e.type;i!=="application/pdf"&&(r=await Zo(e),i="image/jpeg");let o=await Vo(r),u=zc({model:n,base64:o,mime:i,categories:s,paymentMethods:a}),d;try{d=await fetch(Ho,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(u)})}catch{throw new xt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let c=null;try{c=await d.json()}catch{}if(!d.ok)throw new xt(Wo(d.status,c));return Lc(c,{categories:s,paymentMethods:a})}async function Qo({apiKey:e,model:t}){if(!e)throw new xt("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(Ho,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new xt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let s=null;try{s=await n.json()}catch{}if(!n.ok)throw new xt(Wo(n.status,s));return!0}var $s=new Set,Nr=new Set,Jo=()=>Nr.forEach(e=>e(new Set($s)));function Pc(){let[e,t]=k(new Set($s));return se(()=>(Nr.add(t),()=>Nr.delete(t)),[]),e}var Kc=()=>({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,categories:y.settings.expenseCategories||[],paymentMethods:y.settings.paymentMethods||[]});async function Yo(e){let t=await hs(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return jo(t,Kc())}async function Fc(e,t){try{return await ua(e,fe(t)?t:F())}catch{return null}}async function Oc(e){let t=await Ir(e,{shrink:y.settings.shrinkImages!==!1}),n=ye()||(ve().length===1?ve()[0]:null),s=aa({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:y.settings.aiApiKey?"pending":"none"}}),a=await mr({blob:t.blob,name:t.name,ownerType:"expense",ownerId:s.id});if(s.attachmentIds=[a.id],s=await Ht(s),!y.settings.aiApiKey)return s;$s.add(s.id),Jo();try{let r=await Yo(a.id),i=r.fields,o=i.currency||s.currency,u=await Fc(o,i.invoiceDate),d=D("expenses",s.id);d&&d.status==="review"&&(s=await Ht({...d,...i,currency:o,fx:u,ai:{status:"done",at:Y(),model:y.settings.aiModel,uncertain:r.uncertain,warnings:r.warnings}}))}catch(r){let i=D("expenses",s.id);throw i&&await Ht({...i,ai:{status:"error",message:r.message,at:Y()}}).catch(()=>{}),r}finally{$s.delete(s.id),Jo()}return s}function qc({attachmentId:e}){let[t,n]=k(""),[s,a]=k(!1),r=D("attachments",e);se(()=>{let o="",u=!0;return n(""),a(!1),hs(e).then(d=>{if(u){if(!d){a(!0);return}o=URL.createObjectURL(d),n(o)}}).catch(()=>u&&a(!0)),()=>{u=!1,o&&URL.revokeObjectURL(o)}},[e]);async function i(){let o=await hs(e);o&&nt(o,r?r.name:"Beleg")}return s||!r?l`<div class="receipt receipt-missing"><${ee} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?r.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${r.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${r.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${r.name}</span>
      <span class="muted-text">${kn(r.size)}</span>
      <button type="button" class="link-btn" onClick=${i}>Herunterladen</button>
    </div>
  </div>`}function Vc({expense:e,onClose:t}){let n=!D("expenses",e.id),s=e.status==="review",[a,r]=k(()=>{let A=ge(e);if(!A.invoiceDate&&!s&&(A.invoiceDate=F()),!A.companyId){let W=ye()||(ve().length===1?ve()[0]:null);W&&(A.companyId=W.id)}return A}),[i,o]=k(""),[u,d]=k(""),[c,f]=k(0),m=De([]),p=De(null),h=A=>W=>r(N=>({...N,[A]:W})),g=(a.attachmentIds||[])[0],$=a.ai||{},v=new Set($.uncertain||[]),b=`${a.currency}|${a.invoiceDate}`;se(()=>{let A=!0;if(!fe(a.invoiceDate)||a.fx&&a.fx.manual)return;let W=(ae,U)=>!!ae&&ae.forCurrency===U.currency&&ae.forDate===dn(U.invoiceDate);if(W(a.fx,a))return;d("");let N=a.currency,J=a.invoiceDate;return ua(N,J).then(ae=>{A&&r(U=>U.currency===N&&U.invoiceDate===J&&!(U.fx&&U.fx.manual)?{...U,fx:ae}:U)}).catch(ae=>{A&&(r(U=>U.fx&&!U.fx.manual&&U.fx.forDate&&!W(U.fx,U)?{...U,fx:null}:U),d(ae.message))}),()=>{A=!1}},[b,c]);function E(A,W){r(N=>{let J={...N,[A]:W};return A==="totalCents"?J.netCents=(W||0)-(N.taxCents||0):J.totalCents=(J.netCents||0)+(J.taxCents||0),J})}function I(A,W){W>0&&r(N=>{let ae={...N.fx||{rateToUSD:N.currency==="USD"?1:null,usdToEur:null},[A]:W,manual:!0,source:"Von Hand eingetragen",date:F(),fetchedAt:Y()};return N.currency==="USD"&&(ae.rateToUSD=1),N.currency==="EUR"&&A==="usdToEur"&&(ae.rateToUSD=1/W),{...N,fx:ae}})}async function O(A){if(!A)return;o("file");let W=await M(async()=>{let N=await Ir(A,{shrink:y.settings.shrinkImages!==!1});return mr({blob:N.blob,name:N.name,ownerType:"expense",ownerId:a.id})});o(""),W&&(m.current.push(W.id),r(N=>({...N,attachmentIds:[W.id,...N.attachmentIds||[]]})))}async function x(){if(!await ie({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let W=g;await M(()=>pr(W)),r(J=>({...J,attachmentIds:(J.attachmentIds||[]).filter(ae=>ae!==W)}));let N=D("expenses",a.id);N&&await M(()=>Ht({...N,attachmentIds:(N.attachmentIds||[]).filter(J=>J!==W)}))}async function V(){if(g){o("ai");try{let A=await Yo(g),W=A.fields;r(N=>({...N,...W,currency:W.currency||N.currency,fx:null,ai:{status:"done",at:Y(),model:y.settings.aiModel,uncertain:A.uncertain,warnings:A.warnings}})),f(N=>N+1),T("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(A){Rn(A)}o("")}}async function ce(){let A=D("expenses",a.id),W=new Set(A?A.attachmentIds||[]:[]);for(let N of m.current)W.has(N)||await pr(N).catch(()=>{});t()}async function z(){o("save");let A=await M(()=>Ht({...a,status:"booked"}));o(""),A&&(T(s?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function w(){if(!await ie({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await M(async()=>(await vo(a.id),!0))&&(T("Ausgabe gelöscht","good"),t())}let R=A=>v.has(A)?"Von der KI als unsicher markiert – bitte prüfen":"",B=a.fx?we(a.totalCents,a.currency,a.fx):a.currency==="USD"?a.totalCents:null,G=y.settings.expenseCategories||[],L=y.settings.paymentMethods||[];return l`<${et} title=${n?"Neue Ausgabe":s?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${ce} size="xl" onSubmit=${z}
    footer=${l`
      ${!n&&l`<${C} variant="ghost" icon="trash" onClick=${w} class="push-left">Löschen<//>`}
      <${C} onClick=${ce}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${i==="save"}>${s?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${g?l`<${qc} attachmentId=${g} />
              <div class="receipt-actions">
                <${C} small icon="sparkle" busy=${i==="ai"} disabled=${!y.settings.aiApiKey} onClick=${V}
                  title=${y.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${C} small variant="ghost" icon="trash" onClick=${x}>Beleg entfernen<//>
              </div>
              ${!y.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>p.current&&p.current.click()}>
              <${ee} name="upload" size=${22} />
              <span>${i==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${p} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${A=>{O(A.target.files[0]),A.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${$.status==="done"&&l`<${ke} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${($.warnings||[]).length>0&&l`<ul class="notice-list">${$.warnings.map(A=>l`<li>${A}</li>`)}</ul>`}
        <//>`}
        ${$.status==="error"&&l`<${ke} tone="warn">Automatisches Auslesen fehlgeschlagen: ${$.message}<//>`}
        <div class="form-grid">
          <${me} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${h("companyId")} placeholder="Unternehmen wählen"
            options=${ve().map(A=>({id:A.id,label:A.name}))} />
          <${me} class="span-3" label="Kategorie" value=${a.category} onChange=${h("category")} placeholder="Keine"
            options=${G.includes(a.category)||!a.category?G:[...G,a.category]} hint=${R("category")} />
          <${K} class="span-4" label="Lieferant" value=${a.vendor} onInput=${h("vendor")} hint=${R("vendor")} />
          <${K} class="span-2" label="Rechnungsnummer" value=${a.invoiceNumber} onInput=${h("invoiceNumber")} hint=${R("invoice_number")} />
          <${K} class="span-6" label="Beschreibung" value=${a.description} onInput=${h("description")} />
          <${Xe} class="span-3" label="Rechnungsdatum" value=${a.invoiceDate} onInput=${h("invoiceDate")} hint=${R("invoice_date")} />
          <${Xe} class="span-3" label="Zahlungsdatum" value=${a.paymentDate} onInput=${h("paymentDate")} hint=${R("payment_date")} />
          <${me} class="span-2" label="Währung" value=${a.currency} hint=${R("currency")}
            onChange=${A=>r(W=>({...W,currency:A,fx:null}))} options=${Fa} />
          <${Ee} class="span-2" label="Nettobetrag" mode="money" value=${a.netCents} onChange=${A=>E("netCents",A)} hint=${R("net_amount")} />
          <${Ee} class="span-2" label="Steuer" mode="money" value=${a.taxCents} onChange=${A=>E("taxCents",A)} hint=${R("tax_amount")} />
          <${Ee} class="span-3" label="Gesamtbetrag" mode="money" value=${a.totalCents} onChange=${A=>E("totalCents",A)}
            hint=${R("total_amount")||(B!=null&&a.currency!=="USD"?`≈ ${S(B,"USD")}`:"")} />
          <${me} class="span-3" label="Zahlungsart" value=${a.paymentMethod} onChange=${h("paymentMethod")} placeholder="Keine Angabe"
            options=${L.includes(a.paymentMethod)||!a.paymentMethod?L:[...L,a.paymentMethod]} />
          <${Ce} class="span-6" label="Wechselkurs" error=${u&&!(a.fx&&a.fx.usdToEur)?u:""}
            hint=${a.fx?`${a.fx.manual?a.fx.source:`Quelle: ${a.fx.source}`}${a.fx.date?`, Stand ${q(a.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${a.currency!=="USD"&&a.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${a.currency} =</span>
                <${Oe} class="fx-input" value=${a.fx?a.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${a.currency} in US-Dollar`}
                  onChange=${A=>I("rateToUSD",A)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${Oe} class="fx-input" value=${a.fx?a.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${A=>I("usdToEur",A)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${le} class="span-6" label="Notiz" value=${a.note} onInput=${h("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function Xo(){de();let e=Pc(),[t,n]=k(""),[s,a]=k(""),[r,i]=k("year"),[o,u]=k(null),[d,c]=k(!1),[f,m]=k(0),p=De(null),h=!ye(),g=F(),$=be(()=>y.expenses.filter(w=>He(w)||!w.companyId&&w.status==="review"),[y.version,y.settings.activeCompany]),v=$.filter(w=>w.status==="review").sort((w,R)=>w.createdAt<R.createdAt?1:-1),b=Ye(r,g),E=$.filter(w=>w.status==="booked"),I=E.filter(w=>r==="all"||Et(w.invoiceDate,b)).filter(w=>!s||w.category===s).filter(w=>Ae(t,w.vendor,w.description,w.invoiceNumber,w.category,w.note,(w.totalCents/100).toFixed(2),(w.totalCents/100).toFixed(2).replace(".",","))),O=[...new Set(E.map(w=>w.category).filter(Boolean))].sort((w,R)=>w.localeCompare(R,"de")),x=I.reduce((w,R)=>(w.net+=we(R.netCents,R.currency,R.fx)||0,w.tax+=we(R.taxCents,R.currency,R.fx)||0,w.total+=we(R.totalCents,R.currency,R.fx)||0,w),{net:0,tax:0,total:0});async function V(w){let R=[...w];if(!R.length)return;if(!ve().length){T("Lege zuerst ein Unternehmen an.","bad");return}m(G=>G+R.length);let B=0;for(let G of R)try{await Oc(G),B+=1}catch(L){Rn(L)}finally{m(L=>L-1)}B&&T(B===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${B} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let ce=[{key:"date",label:"Datum",sort:w=>w.invoiceDate,render:w=>q(w.invoiceDate)},{key:"vendor",label:"Lieferant",sort:w=>w.vendor,render:w=>l`<div class="cell-main">${w.vendor}</div>${w.description&&l`<div class="cell-sub clamp-1">${w.description}</div>`}`},{key:"category",label:"Kategorie",sort:w=>w.category,render:w=>w.category||l`<span class="muted-text">–</span>`},...h?[{key:"company",label:"Unternehmen",render:w=>l`<${Qe} id=${w.companyId} />`}]:[],{key:"file",label:"Beleg",render:w=>(w.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${ee} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:w=>we(w.netCents,w.currency,w.fx)||0,render:w=>S(w.netCents,w.currency)},{key:"tax",label:"Steuer",align:"right",render:w=>w.taxCents?S(w.taxCents,w.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:w=>we(w.totalCents,w.currency,w.fx)||0,render:w=>l`<span class="dual"><span class="dual-main">${S(w.totalCents,w.currency)}</span>
        ${w.currency!=="USD"&&l`<span class="dual-sub">≈ ${S(we(w.totalCents,w.currency,w.fx),"USD")}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:w=>w.paymentDate||"",render:w=>w.paymentDate?q(w.paymentDate):l`<span class="muted-text">offen</span>`}],z=I.length?[`${I.length} ${I.length===1?"Ausgabe":"Ausgaben"}`,"","",...h?[""]:[],"",l`<span class="strong">${S(x.net,"USD")}</span>`,l`<span class="strong">${S(x.tax,"USD")}</span>`,l`<span class="strong">${S(x.total,"USD")}</span>`,l`<span class="muted-text">in USD</span>`]:null;return l`
    <${he} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${C} icon="plus" onClick=${()=>u(aa())}>Ausgabe von Hand<//>
      <${C} variant="primary" icon="upload" onClick=${()=>p.current&&p.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${d?" is-drag":""}`}
      onDragOver=${w=>{w.preventDefault(),c(!0)}}
      onDragLeave=${()=>c(!1)}
      onDrop=${w=>{w.preventDefault(),c(!1),V(w.dataTransfer.files)}}>
      <${ee} name="upload" size=${24} />
      <div>
        <strong>${f>0?`${f} ${f===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${y.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${p} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${w=>{V(w.target.files),w.target.value=""}} />
    </div>

    ${v.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${v.length}</span></h2>
      <ul class="review-list">
        ${v.map(w=>{let R=e.has(w.id),B=w.ai||{};return l`<li key=${w.id}>
            <button type="button" class="review-item" onClick=${()=>u(w)} disabled=${R}>
              <span class="review-icon"><${ee} name=${R?"refresh":"file"} class=${R?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${w.vendor||(D("attachments",(w.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${R?"Wird ausgelesen …":B.status==="error"?`Nicht ausgelesen: ${B.message}`:B.status==="done"?`${w.invoiceDate?q(w.invoiceDate):"Datum fehlt"}, ${w.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${w.totalCents?S(w.totalCents,w.currency):""}</span>
              <span class="review-go">${R?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${E.length>0&&l`<div class="filters">
      <${it} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${r} aria-label="Zeitraum" onChange=${w=>i(w.target.value)}>
        ${Jt.filter(w=>w.id!=="custom").map(w=>l`<option value=${w.id}>${w.label}</option>`)}
      </select>
      ${O.length>0&&l`<select class="input select filter-select" value=${s} aria-label="Kategorie" onChange=${w=>a(w.target.value)}>
        <option value="">Alle Kategorien</option>
        ${O.map(w=>l`<option value=${w}>${w}</option>`)}
      </select>`}
    </div>`}
    ${(E.length>0||v.length===0)&&l`<${We} columns=${ce} rows=${I} initialSort=${{key:"date",dir:"desc"}} footer=${z} onRowClick=${w=>u(w)}
      empty=${E.length?l`<${ue} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${ue} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${Vc} expense=${o} onClose=${()=>u(null)} />`}
  `}function Zc(e){let t=ea.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=is(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function Gc({rec:e,onClose:t}){let n=!D("recurring",e.id),[s,a]=k(()=>ge(e)),[r,i]=k(!1),o=h=>g=>a($=>({...$,[h]:g})),u=D("companies",s.companyId),d=dt(s),c=y.customers.filter(h=>h.active!==!1||h.id===s.customerId).sort((h,g)=>ne(h).localeCompare(ne(g),"de")).map(h=>({id:h.id,label:ne(h),sub:[h.number,h.city].filter(Boolean).join(", ")}));function f(h){let g=D("companies",h);a($=>({...$,companyId:h,...g&&n?{currency:g.currency,language:g.language,paymentTermDays:g.paymentTermDays,intro:$.intro||g.invoiceText}:{}}))}function m(h){let g=D("customers",h);a($=>({...$,customerId:h,...g&&g.language?{language:g.language}:{},...g&&g.currency&&Ve.includes(g.currency)?{currency:g.currency}:{},...g&&g.paymentTermDays!=null&&g.paymentTermDays!==""?{paymentTermDays:Number(g.paymentTermDays)}:{}}))}async function p(){i(!0);let h=await M(()=>ha(s));i(!1),h&&(T("Vorlage gespeichert","good"),t())}return l`<${et} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${p}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${r}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${K} class="span-6" label="Name der Vorlage" value=${s.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${me} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${f} placeholder="Unternehmen wählen"
        options=${ve().map(h=>({id:h.id,label:h.name}))} />
      <${Ce} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${ca} id="rec-customer" options=${c} value=${s.customerId} placeholder="Kunde suchen" onChange=${m} />
      <//>
      <${me} class="span-2" label="Intervall" value=${s.interval} onChange=${o("interval")} options=${ea.map(h=>({id:h.id,label:h.label}))} />
      ${s.interval==="custom"&&l`<${Ee} class="span-2" label="Alle … Monate" value=${s.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${Xe} class="span-2" label="Nächste Rechnung am" value=${s.nextDate} onInput=${o("nextDate")} />
      <${Xe} class="span-2" label="Endet am (optional)" value=${s.endDate} onInput=${o("endDate")} min=${s.nextDate} />
      <${Ee} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${me} class="span-2" label="Währung" value=${s.currency} onChange=${o("currency")} options=${Ve} />
      <${me} class="span-2" label="Belegsprache" value=${s.language} onChange=${o("language")} options=${It} />
      <div class="span-6">
        <${Te} label="Leistungszeitraum auf die Rechnung schreiben" checked=${s.servicePeriod==="month"}
          onChange=${h=>o("servicePeriod")(h?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${Cr} doc=${s} company=${u} onChange=${h=>a(g=>({...g,items:h}))}
      onNewService=${()=>T("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${S(d.totalCents,s.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${le} class="span-6" label="Einleitung auf der Rechnung" value=${s.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${Te} label="Vorlage ist aktiv" checked=${s.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function el(){de();let[e,t]=k(null),[n,s]=k(""),a=F(),r=y.recurring.filter(He),i=r.filter(m=>zn(m,a)),o=!ye();async function u(m,p){let h=m.nextDate>a;if(h&&!await ie({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${q(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;s(m.id);let g=await M(()=>fr(m.id,{early:h}));return s(""),g&&(T(`Rechnungsentwurf für ${ne(D("customers",m.customerId))} angelegt`,"good"),p&&Z(`/invoices/${g.id}/edit`)),g}async function d(){s("all");let m=0;for(let p of i){let h=0;for(;zn(D("recurring",p.id),a)&&h++<36&&await M(()=>fr(p.id));)m+=1}s(""),m&&(T(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),Z("/invoices?status=draft"))}async function c(m){if(!await ie({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await M(async()=>(await yo(m.id),!0))&&T("Vorlage gelöscht","good")}let f=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${ne(D("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Qe} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>Zc(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>Ln(m)?l`<span class="muted-text">beendet</span>`:m.active?zn(m,a)?l`<span class="tone-warn">${q(m.nextDate)}</span><div class="cell-sub">fällig</div>`:q(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>S(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>Ln(m)?l`<${Le} tone="mute">Beendet<//>`:m.active?l`<${Le} tone="good">Aktiv<//>`:l`<${Le} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${C} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||Ln(m)}
          title=${Ln(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>u(m,!0)}>Jetzt erzeugen<//>
        <${C} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>c(m)} />
      </div>`}];return l`
    <${he} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${C} variant="primary" icon="plus" onClick=${()=>t(In(ye()||(ve().length===1?ve()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${i.length>0&&l`<${ke} tone="warn" action=${l`<${C} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${d}>Alle Entwürfe anlegen<//>`}>
      ${i.length===1?"Eine Vorlage ist fällig.":`${i.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${We} columns=${f} rows=${r} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${ue} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${C} variant="primary" icon="plus" onClick=${()=>t(In(ye()||(ve().length===1?ve()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${Gc} rec=${e} onClose=${()=>t(null)} />`}
  `}var bs=null;function Hc(){return bs||(bs=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw bs=null,e})),bs}var vs=e=>e&&typeof e=="object"?e.v:e,tl=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function Rr(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function Wc(e){let t=[e.columns.map(n=>Rr(n.label)).join(";")];for(let n of e.rows)t.push(n.map(s=>Rr(vs(s))).join(";"));return e.totals&&t.push(e.totals.map(n=>Rr(vs(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function ys(e){let t=new Blob([Wc(e)],{type:"text/csv;charset=utf-8"});nt(t,`${Yt(e.fileName)}.csv`)}async function nl(e){let t=await Hc(),n=[e.columns.map(i=>i.label)];for(let i of e.rows)n.push(i.map(vs));e.totals&&n.push(e.totals.map(vs));let s=t.utils.aoa_to_sheet(n);e.columns.forEach((i,o)=>{for(let u=1;u<n.length;u++){let d=t.utils.encode_cell({r:u,c:o}),c=s[d];c&&(typeof c.v=="number"&&i.type==="money"&&(c.z="#,##0.00"),typeof c.v=="string"&&/^[=+\-@]/.test(c.v)&&(c.t="s"))}}),s["!cols"]=e.columns.map((i,o)=>({wch:Math.min(48,Math.max(i.label.length,...n.slice(1).map(u=>String(u[o]==null?"":u[o]).length))+2)}));let a=t.utils.book_new();t.utils.book_append_sheet(a,s,Yt(e.title).slice(0,31)||"Report");let r=t.write(a,{bookType:"xlsx",type:"array"});nt(new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Yt(e.fileName)}.xlsx`)}async function al(e){await Ro({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(tl)),totals:e.totals?e.totals.map(tl):null,fileName:`${Yt(e.fileName)}.pdf`,landscape:e.columns.length>6})}function il(e="year"){let[t,n]=k(e),[s,a]=k({from:`${F().slice(0,4)}-01-01`,to:F()}),r=Ye(t,F(),s);return{period:t,setPeriod:n,custom:s,setCustom:a,range:r}}function jc(e){let t=Jt.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${q(e.range.from)} bis ${q(e.range.to)}`}function ol({p:e}){let t=ye();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${Jt.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>fe(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>fe(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${q(e.range.from)} bis ${q(e.range.to)}`:""}</span>
  </div>`}var ll=(e,t)=>t?rt(Math.round(e/t*1e3)/10):"–",re=e=>({v:e/100,t:S(e,"USD")}),Dt=e=>({v:e/100,t:S(e,"EUR")}),Ze=(e,t)=>({v:e/100,t:S(e,t)}),Zn=e=>({v:e||"",t:e?q(e):""}),oe={align:"right",type:"money"},jt={align:"right",type:"number"};function cl(){de();let e=il("year"),t=F(),n=_t(),s=ye(),a=hn(),r=be(()=>{let c={companyId:n,range:e.range},f=vr(e.range,a,n),m=f.slice(-24);return{summary:Io(a,c,t),truncated:f.length>m.length,series:m.length?ya(a,{companyId:n,months:m,range:e.range}):[],byCompany:xa(a,c),byCustomer:wa(a,c),byService:Da(a,c),byCategory:br(a,c)}},[y.version,n,e.range.from,e.range.to]),i=r.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],u=r.series.map(c=>({key:c.key,label:xn(c.key),title:gt(c.key),values:{rev:c.revenueUSD,exp:c.expenseUSD}})),d={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:r.series.map(c=>[gt(c.key),S(c.revenueUSD,"USD"),S(c.expenseUSD,"USD"),S(c.profitUSD,"USD"),S(c.paymentsUSD,"USD")])};return l`
    <${he} title="Finanzübersicht" sub="Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in USD, Euro als Zweitwert.">
      <${C} icon="reports" onClick=${()=>Z("/reports")}>Reports und Export<//>
    <//>
    <${ol} p=${e} />

    <div class="stat-row stat-row-3">
      <${Ie} label="Einnahmen" value=${S(i.income.usd,"USD")} sub=${`≈ ${S(i.income.eur,"EUR")}, ${i.income.count} Rechnungen`} />
      <${Ie} label="Ausgaben" value=${S(i.expenses.usd,"USD")} sub=${`≈ ${S(i.expenses.eur,"EUR")}, ${i.expenses.count} Belege`} />
      <${Ie} label="Gewinn" value=${S(i.profit.usd,"USD")} tone=${i.profit.usd<0?"bad":"good"} sub=${`≈ ${S(i.profit.eur,"EUR")}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Ie} label="Zahlungseingänge" value=${S(i.payments.usd,"USD")} sub=${`≈ ${S(i.payments.eur,"EUR")}, ${i.payments.count} Zahlungen`} />
      <${Ie} label="Offene Forderungen (heute)" value=${S(i.receivables.usd,"USD")} sub=${`≈ ${S(i.receivables.eur,"EUR")}, ${i.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Ie} label="Steuern (Saldo)" value=${S(i.taxBalance.usd,"USD")}
        sub=${`berechnet ${S(i.taxCollected.usd,"USD")}, in Ausgaben ${S(i.taxPaid.usd,"USD")}`} />
    </div>

    ${r.series.length>0&&l`<${va} title="Einnahmen und Ausgaben je Monat"
      sub=${r.truncated?"Netto in USD. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.":"Netto in USD"} series=${o} table=${d}>
      <${ba} groups=${u} series=${o} mode="grouped" format=${c=>S(c,"USD")} axisFormat=${c=>ia(c,"USD")}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!s&&l`<${j} title="Umsatz pro Unternehmen">
        <${At} rows=${r.byCompany.map(c=>({key:c.id,label:c.name,value:c.usd,display:S(c.usd,"USD"),color:$a(c.color)}))} />
      <//>`}
      <${j} title="Umsatz pro Kunde">
        <${At} rows=${r.byCustomer.map(c=>({key:c.id,label:c.name,value:c.usd,display:S(c.usd,"USD"),href:`#/customers/${c.id}`}))} />
      <//>
      <${j} title="Umsatz pro Leistung">
        <${At} rows=${r.byService.map(c=>({key:c.key,label:c.name,value:c.usd,display:S(c.usd,"USD")}))} />
      <//>
      <${j} title="Ausgaben nach Kategorie">
        <${At} rows=${r.byCategory.map(c=>({key:c.name,label:c.name,value:c.usd,display:S(c.usd,"USD"),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function Br(e,t,n,s,a){let r=Co(e,t,n),i=r.reduce((o,u)=>({usd:o.usd+u.usd,eur:o.eur+u.eur,tax:o.tax+u.taxUSD,count:o.count+u.count}),{usd:0,eur:0,tax:0,count:0});return{columns:[{label:a},{label:"Belege",...jt},{label:"Umsatz netto (USD)",...oe},{label:"Umsatz netto (EUR)",...oe},{label:"Steuer (USD)",...oe}],rows:r.map(o=>[s(o.key),o.count,re(o.usd),Dt(o.eur),re(o.taxUSD)]),totals:["Summe",i.count,re(i.usd),Dt(i.eur),re(i.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:r.map(o=>({key:o.key,label:n==="month"?xn(o.key):s(o.key),title:s(o.key),values:{rev:o.usd}}))}}}function Ar(e,t,n=[]){let s=e.reduce((a,r)=>({usd:a.usd+r.usd,eur:a.eur+r.eur}),{usd:0,eur:0});return{columns:[{label:t},...n.map(a=>a.col),{label:"Umsatz netto (USD)",...oe},{label:"Umsatz netto (EUR)",...oe},{label:"Anteil",align:"right"}],rows:e.map(a=>[a.name,...n.map(r=>r.cell(a)),re(a.usd),Dt(a.eur),ll(a.usd,s.usd)]),totals:["Summe",...n.map(()=>""),re(s.usd),Dt(s.eur),""]}}function sl(e,t,n,s){let a=Wt(e,{companyId:t.companyId},n);s&&(a=a.filter(o=>o.status==="overdue"));let r=a.reduce((o,u)=>o+u.openUSD,0),i=ko.map(o=>({...o,usd:a.filter(u=>u.bucket===o.id).reduce((u,d)=>u+d.openUSD,0),count:a.filter(u=>u.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...jt},{label:"Währung"},{label:"Rechnungsbetrag",...oe},{label:"Offen",...oe},{label:"Offen (USD)",...oe}],rows:a.map(o=>[o.inv.number,Ue(o.inv),(D("companies",o.inv.companyId)||{}).name||"",Zn(o.inv.issueDate),Zn(o.inv.dueDate),o.overdueDays,o.inv.currency,Ze(o.inv.totals.totalCents,o.inv.currency),Ze(o.openCents,o.inv.currency),re(o.openUSD)]),totals:["Summe","","","","","","","","",re(r)],aging:s?null:i,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var _r=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>Br(e,t,"month",gt,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>Br(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>Br(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>Ar(wa(e,t),"Kunde",[{col:{label:"Rechnungen",...jt},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>Ar(xa(e,t),"Unternehmen",[{col:{label:"Rechnungen",...jt},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>Ar(Da(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...jt},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:oa(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=Eo(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...jt},{label:"Netto",...oe},{label:"Steuer",...oe},{label:"Brutto",...oe},{label:"Netto in USD",...oe},{label:"Netto in EUR",...oe}],rows:n.map(s=>[s.currency,s.count,Ze(s.netCents,s.currency),Ze(s.taxCents,s.currency),Ze(s.totalCents,s.currency),re(s.usd),Dt(s.eur)]),totals:["Summe",n.reduce((s,a)=>s+a.count,0),"","","",re(n.reduce((s,a)=>s+a.usd,0)),Dt(n.reduce((s,a)=>s+a.eur,0))]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>sl(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>sl(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=vr(t.range,e,t.companyId),s=n.length?ya(e,{companyId:t.companyId,months:n,range:t.range}):[],a=s.reduce((r,i)=>({rev:r.rev+i.revenueUSD,exp:r.exp+i.expenseUSD,eur:r.eur+i.profitEUR}),{rev:0,exp:0,eur:0});return{columns:[{label:"Monat"},{label:"Einnahmen (USD)",...oe},{label:"Ausgaben (USD)",...oe},{label:"Gewinn (USD)",...oe},{label:"Gewinn (EUR)",...oe}],rows:s.map(r=>[gt(r.key),re(r.revenueUSD),re(r.expenseUSD),re(r.profitUSD),Dt(r.profitEUR)]),totals:["Summe",re(a.rev),re(a.exp),re(a.rev-a.exp),Dt(a.eur)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:s.slice(-24).map(r=>({key:r.key,label:xn(r.key),title:gt(r.key),values:{rev:r.revenueUSD,exp:r.expenseUSD}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=br(e,t),s=n.reduce((a,r)=>({usd:a.usd+r.usd,eur:a.eur+r.eur,tax:a.tax+r.taxUSD,count:a.count+r.count}),{usd:0,eur:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...jt},{label:"Netto (USD)",...oe},{label:"Netto (EUR)",...oe},{label:"Steuer (USD)",...oe},{label:"Anteil",align:"right"}],rows:n.map(a=>[a.name,a.count,re(a.usd),Dt(a.eur),re(a.taxUSD),ll(a.usd,s.usd)]),totals:["Summe",s.count,re(s.usd),Dt(s.eur),re(s.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=Uo(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...oe},{label:"Steuer",...oe},{label:"Steuer (USD)",...oe}],rows:[...n.collected.map(s=>[`Berechnet in Rechnungen, Satz ${rt(s.rate)}`,s.currency,Ze(s.netCents,s.currency),Ze(s.taxCents,s.currency),re(s.taxUSD)]),["In Ausgaben enthaltene Steuer","USD","","",re(-n.paidUSD)]],totals:["Saldo","","","",re(n.collectedUSD-n.paidUSD)],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let s=je(e,t).sort((r,i)=>r.date<i.date?-1:1),a=s.reduce((r,i)=>({net:r.net+i.netUSD,tax:r.tax+i.taxUSD,total:r.total+i.totalUSD}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...oe},{label:"Steuer",...oe},{label:"Brutto",...oe},{label:"Netto (USD)",...oe},{label:"Kurs USD/EUR",...jt},{label:"Bezahlt",...oe},{label:"Status"}],rows:s.map(r=>{let i=r.inv,o=_e(i.id),u=vt(i,o,n);return[i.number,Zn(i.issueDate),Ue(i),(D("companies",i.companyId)||{}).name||"",i.currency,Ze(i.totals.netCents,i.currency),Ze(i.totals.taxCents,i.currency),Ze(i.totals.totalCents,i.currency),re(r.netUSD),i.fx?{v:Number(i.fx.usdToEur),t:oa(i.fx.usdToEur,"de",4)}:"",Ze(xe(o),i.currency),(Xn[u]||{}).label||u]}),totals:["Summe","","","","USD",re(a.net),re(a.tax),re(a.total),re(a.net),"","",""],note:"Die Summenzeile ist in USD umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung."}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=os(e,t).sort((s,a)=>s.date<a.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...oe},{label:"Betrag (USD)",...oe}],rows:n.map(s=>[Zn(s.date),s.inv.number,Ue(s.inv),s.pay.method||"",s.inv.currency,Ze(s.pay.amountCents,s.inv.currency),re(s.usd)]),totals:["Summe","","","","","",re(n.reduce((s,a)=>s+a.usd,0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=Pn(e,t).sort((a,r)=>a.date<r.date?-1:1),s=n.reduce((a,r)=>({net:a.net+r.netUSD,tax:a.tax+r.taxUSD,total:a.total+r.totalUSD}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...oe},{label:"Steuer",...oe},{label:"Gesamt",...oe},{label:"Gesamt (USD)",...oe},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(a=>{let r=a.exp;return[Zn(r.invoiceDate),r.vendor,r.category,r.description,r.invoiceNumber,(D("companies",r.companyId)||{}).name||"",r.currency,Ze(r.netCents,r.currency),Ze(r.taxCents,r.currency),Ze(r.totalCents,r.currency),re(a.totalUSD),Zn(r.paymentDate),r.paymentMethod]}),totals:["Summe","","","","","","USD",re(s.net),re(s.tax),re(s.total),re(s.total),"",""],note:"Die Summenzeile ist in USD umgerechnet; die Zeilen zeigen die Beträge in Belegwährung."}}}],rl=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function ul({params:e}){de();let[t,n]=k(e&&e.r&&_r.find($=>$.id===e.r)?e.r:"month"),s=il("year"),[a,r]=k(""),i=F(),o=_t(),u=ye(),d=hn(),c=_r.find($=>$.id===t),f=be(()=>c.build(d,{companyId:o,range:s.range},i),[y.version,t,o,s.range.from,s.range.to]),m=t==="open"||t==="overdue",p=`${u?u.name:"Alle Unternehmen"}, ${m?`Stichtag ${q(i)}`:jc(s)}`,h={title:c.label,subtitle:p,fileName:`${c.label} ${u?u.shortName||u.name:"Alle Unternehmen"} ${i}`,columns:f.columns,rows:f.rows,totals:f.totals};async function g($){r($),await M(async()=>{$==="csv"?ys(h):$==="xlsx"?await nl(h):await al(h)}),r("")}return l`
    <${he} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${C} icon="download" busy=${a==="csv"} disabled=${!f.rows.length} onClick=${()=>g("csv")}>CSV<//>
      <${C} icon="download" busy=${a==="xlsx"} disabled=${!f.rows.length} onClick=${()=>g("xlsx")}>Excel<//>
      <${C} icon="download" busy=${a==="pdf"} disabled=${!f.rows.length} onClick=${()=>g("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${_r.map($=>l`<button type="button" class=${`report-link${$.id===t?" is-on":""}`} aria-current=${$.id===t?"true":void 0}
          onClick=${()=>n($.id)}>${$.label}</button>`)}
      </nav>
      <div class="report-body">
        <${ol} p=${s} />
        ${f.note&&l`<p class="footnote">${f.note}</p>`}
        ${f.aging&&l`<div class="stat-row stat-row-5">
          ${f.aging.map($=>l`<${Ie} label=${$.label} value=${S($.usd,"USD")} sub=${`${$.count} ${$.count===1?"Rechnung":"Rechnungen"}`} tone=${$.id!=="current"&&$.usd?"bad":""} />`)}
        </div>`}
        ${f.chart&&f.chart.groups.length>1&&l`<${va} title=${c.label} sub="Netto in USD" series=${f.chart.series}>
          <${ba} groups=${f.chart.groups} series=${f.chart.series} mode=${f.chart.mode||"stacked"}
            format=${$=>S($,"USD")} axisFormat=${$=>ia($,"USD")} ariaLabel=${c.label} />
        <//>`}
        ${f.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${f.columns.map($=>l`<th class=${$.align==="right"?"r":""}>${$.label}</th>`)}</tr></thead>
              <tbody>${f.rows.map($=>l`<tr>${$.map((v,b)=>l`<td class=${f.columns[b].align==="right"?"r":""}>${rl(v)}</td>`)}</tr>`)}</tbody>
              ${f.totals&&l`<tfoot><tr>${f.totals.map(($,v)=>l`<td class=${f.columns[v].align==="right"?"r":""}>${rl($)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${ue} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function dl(){de();let[e,t]=k({}),n=[...y.companies].sort((s,a)=>s.archived===a.archived?s.createdAt<a.createdAt?-1:1:s.archived?1:-1);return se(()=>{let s=!0;return Promise.all(n.map(a=>ma(a,"invoice",F()).catch(()=>""))).then(a=>{s&&t(Object.fromEntries(n.map((r,i)=>[r.id,a[i]])))}),()=>{s=!1}},[y.version]),l`
    <${he} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${C} variant="primary" icon="plus" onClick=${()=>Z("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${ue} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${C} variant="primary" icon="plus" onClick=${()=>Z("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(s=>{let a=[!s.street||!s.city?"Adresse":"",!s.iban&&!s.altBank&&!s.otherPayment?"Zahlungsinformationen":"",s.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${s.id}>
            <a class=${`company-card${s.archived?" is-archived":""}`} href=${`#/companies/${s.id}`}>
              <span class="company-swatch" style=${`background:${s.brandColor}`}>
                ${Nt(s.logoAssetId)?l`<img src=${Nt(s.logoAssetId)} alt="" />`:(s.invoicePrefix||s.name.slice(0,2)).slice(0,3)}
              </span>
              <span class="company-info">
                <strong>${s.name}</strong>
                <span class="cell-sub">${[s.city,s.country].filter(Boolean).join(", ")||"Adresse noch nicht hinterlegt"}</span>
              </span>
              <span class="company-meta">
                <span class="cell-sub">Nächste Rechnung</span>
                <span class="mono-num">${e[s.id]||"–"}</span>
              </span>
              <span class="company-state">
                ${s.archived?l`<${Le} tone="mute">Archiviert<//>`:a.length?l`<${Le} tone="warn">Es fehlt: ${a.join(", ")}<//>`:l`<${Le} tone="good">Vollständig<//>`}
              </span>
            </a>
          </li>`})}
      </ul>`}
  `}function ml({id:e}){de();let t=e&&e!=="new"?D("companies",e):null,[n,s]=k(()=>t?ge(t):ta()),[a,r]=k(null),[i,o]=k(!1),[u,d]=k(!1),[c,f]=k({}),[m,p]=k(null),h=De(null),g=F(),$=R=>{s(R),o(!0)},v=R=>B=>$(G=>({...G,[R]:B}));if(se(()=>(i?Ha(Wa):rn(),()=>rn()),[i]),se(()=>{let R=!0;return Promise.all(["invoice","quote","credit"].map(B=>ma(n,B,g).catch(()=>""))).then(([B,G,L])=>{R&&f({invoice:B,quote:G,credit:L})}),()=>{R=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,y.version]),e&&e!=="new"&&!t)return l`<${ue} icon="company" title="Unternehmen nicht gefunden"><${C} onClick=${()=>Z("/companies")}>Zur Übersicht<//><//>`;let b=t?D("counters",mn(t.id,"invoice",pt(t,"invoice").pattern,g)):null,E=b?b.last:0,I=a||Nt(n.logoAssetId),O={invoice:wt(n.invoicePattern),quote:wt(n.quotePattern),credit:wt(n.creditPattern)};async function x(R){if(!R)return;let B=await M(()=>Go(R));B&&(r(B),o(!0))}async function V(){d(!0);let R=await M(()=>da(n,a));d(!1),R&&(r(null),s(ge(R)),o(!1),T("Unternehmen gespeichert","good"),t||Vt(`/companies/${R.id}`))}async function ce(){if(m==null||!t||!await ie({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${g.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await M(async()=>(await ro(t,"invoice",g,m),!0))&&(T("Nummernkreis angepasst","good"),p(null))}async function z(){await M(async()=>(await Xi(t.id,!t.archived),!0))&&(T(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),s(B=>({...B,archived:!t.archived})))}async function w(){if(!await ie({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await M(async()=>(await eo(t.id),!0))&&(T("Unternehmen gelöscht","good"),Vt("/companies"))}return l`
    <${he} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${yt} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:z},{label:"Löschen",icon:"trash",danger:!0,disabled:ar(t.id),onClick:w}]} />`}
      <${C} variant="primary" icon="check" busy=${u} onClick=${V}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${ke} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${j} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${K} class="span-4" label="Unternehmensname" value=${n.name} onInput=${v("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${K} class="span-2" label="Kurzname" value=${n.shortName} onInput=${v("shortName")} hint="Für den Company Switcher" />
          <${K} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${v("legalForm")} />
          <${Ce} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${R=>v("brandColor")(R.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${Ce} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${I?l`<img src=${I} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${C} icon="upload" onClick=${()=>h.current&&h.current.click()}>${I?"Logo ersetzen":"Logo hochladen"}<//>
              ${I&&l`<${C} variant="ghost" icon="trash" onClick=${()=>{r(null),v("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${h} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${R=>{x(R.target.files[0]),R.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${j} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${K} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${v("street")} />
          <${K} class="span-2" label="PLZ" value=${n.zip} onInput=${v("zip")} />
          <${K} class="span-4" label="Ort" value=${n.city} onInput=${v("city")} />
          <${K} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${v("region")} />
          <${K} class="span-3" label="Land" value=${n.country} onInput=${v("country")} />
          <${K} class="span-2" label="Telefon" value=${n.phone} onInput=${v("phone")} />
          <${K} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${v("email")} />
          <${K} class="span-2" label="Website" value=${n.website} onInput=${v("website")} />
        </div>
      <//>

      <${j} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${K} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${v("taxId")} />
          <${K} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${v("vatId")} />
          <${K} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${v("registerInfo")} />
        </div>
      <//>

      <${j} title="Bank und Zahlung">
        <div class="form-grid">
          <${K} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${v("accountHolder")} />
          <${K} class="span-3" label="Bank" value=${n.bankName} onInput=${v("bankName")} />
          <${K} class="span-4" label="IBAN" value=${n.iban} onInput=${v("iban")} />
          <${K} class="span-2" label="BIC" value=${n.bic} onInput=${v("bic")} />
          <${le} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${v("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${le} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${v("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${j} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${K} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${v("invoicePrefix")} placeholder="z. B. HL" />
          <${K} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${v("invoicePattern")} error=${O.invoice}
            hint=${c.invoice?`Nächste Rechnung: ${c.invoice}`:""} />
          <${Ee} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${v("numberDigits")} />
          <${K} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${v("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${K} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${v("quotePattern")} error=${O.quote}
            hint=${c.quote?`Nächstes Angebot: ${c.quote}`:""} />
          <${K} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${v("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${K} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${v("creditPattern")} error=${O.credit}
            hint=${c.credit?`Nächste Gutschrift: ${c.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${Ce} label=${`Zuletzt vergebene laufende Rechnungsnummer ${g.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${Oe} id="counter-last" value=${m??E} digits=${0} min=${0} onChange=${R=>p(R)} />
              <${C} disabled=${m==null||m===E} onClick=${ce}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${j} title="Standards für neue Belege">
        <div class="form-grid">
          <${me} class="span-2" label="Währung" value=${n.currency} onChange=${v("currency")} options=${Ve} />
          <${me} class="span-2" label="Belegsprache" value=${n.language} onChange=${v("language")} options=${It} />
          <${Ee} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${v("paymentTermDays")} />
          <${Ee} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${v("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${K} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${v("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${le} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${v("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${Te} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${v("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${Te} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${v("showFxNote")} /></div>
        </div>
      <//>

      <${j} title="Texte auf Belegen">
        <div class="form-grid">
          <${le} class="span-6" label="Einleitung Rechnung" value=${n.invoiceText} onInput=${v("invoiceText")} rows=${2} />
          <${le} class="span-6" label="Einleitung Angebot" value=${n.quoteText} onInput=${v("quoteText")} rows=${2} />
          <${le} class="span-6" label="Zahlungsbedingungen" value=${n.paymentTerms} onInput=${v("paymentTerms")} rows=${2} />
          <${le} class="span-6" label="Fußzeile" value=${n.footer} onInput=${v("footer")} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${C} variant="primary" icon="check" busy=${u} onClick=${V}>Unternehmen speichern<//>
      </div>
    </div>
  `}var pl=["aiApiKey"],fl=["lastBackupAt","changesSinceBackup"],gl="bbc-finance-backup";function Qc(e){return new Promise((t,n)=>{let s=new FileReader;s.onload=()=>t(s.result),s.onerror=()=>n(s.error),s.readAsDataURL(e)})}function Jc(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],s=String(e).slice(t[0].length),a=/;base64$/i.test(n),r=n.replace(/;base64$/i,"")||"application/octet-stream";if(a){let i=atob(s),o=new Uint8Array(i.length);for(let u=0;u<i.length;u++)o[u]=i.charCodeAt(u);return new Blob([o],{type:r})}return new Blob([decodeURIComponent(s)],{type:r})}function hl(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function $l({includeFiles:e=!0}={}){let t={};for(let o of Ge)t[o]=await Nn(o);let n=await Nn("settings"),s={};for(let o of n)pl.includes(o.key)||fl.includes(o.key)||(s[o.key]=o.value);let a={format:gl,schemaVersion:_s,exportedAt:Y(),includesFiles:e,counts:Object.fromEntries(Ge.map(o=>[o,t[o].length])),settings:s,data:t},i=[`${JSON.stringify(a).slice(0,-1)},"files":{`];if(e){let o=await Nn("blobs");for(let u=0;u<o.length;u++){let d=await Qc(o[u].blob);i.push(new Blob([`
${JSON.stringify(o[u].id)}:${JSON.stringify(d)}${u<o.length-1?",":""}`]))}}return i.push(`
}}
`),new Blob(i,{type:"application/json"})}async function bl(){await Q(async e=>{await e.setting("lastBackupAt",Y()),await e.setting("changesSinceBackup",0)})}async function vl(e){let t=new Map,n=0,s=(c,f)=>{try{t.set(c,Jc(f))}catch{n+=1}},a=null,r="",i=0,o=!1,u=c=>{i+=1;let f=c.trim();if(!f)return;if(i===1&&/"files":\{$/.test(f)){a=JSON.parse(`${f}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(f==="}}")return;let m=JSON.parse(`{${f.replace(/,$/,"")}}`);for(let[p,h]of Object.entries(m))s(p,h)},d=async()=>{let c;try{c=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(c&&typeof c=="object"&&c.files&&typeof c.files=="object"){for(let[f,m]of Object.entries(c.files))s(f,m);delete c.files}return c};if(!e.stream||typeof TextDecoderStream>"u")return a=await d(),{json:a,files:t,badFiles:n};try{let c=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:f,done:m}=await c.read();if(m)break;r+=f;let p=r.indexOf(`
`);for(;p>=0;)u(r.slice(0,p)),r=r.slice(p+1),p=r.indexOf(`
`);if(!o&&r.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(r.trim()&&u(r),!o||!a)throw new SyntaxError("kein Zeilenformat")}catch(c){if(!(c instanceof SyntaxError))throw c;t.clear(),n=0,a=await d()}return{json:a,files:t,badFiles:n}}var Tt=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Gn=e=>typeof e=="number"&&Number.isFinite(e);function Mr(e,t){if(!Tt(e)||e.format!==gl)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>_s)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!Tt(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(a,r)=>new Error(`Das Backup ist beschädigt (Sammlung „${a}“: ${r}).`);for(let a of Ge){let r=e.data[a];if(r==null)continue;if(!Array.isArray(r))throw n(a,"keine Liste");let i=Un(a);for(let o of r)if(!Tt(o)||typeof o[i]!="string"||!o[i])throw n(a,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let a of["invoices","quotes"]){let r=new Set;for(let i of e.data[a]||[]){if(!Array.isArray(i.items))throw n(a,"Beleg ohne Positionsliste");if(typeof i.status!="string")throw n(a,"Beleg ohne Status");if(i.number!=null&&typeof i.number!="string")throw n(a,"ungültige Belegnummer");if(i.status!=="draft"){if(!Tt(i.totals)||!Gn(i.totals.totalCents)||!Gn(i.totals.netCents)||!Gn(i.totals.taxCents))throw n(a,`Beleg ${i.number||""} ohne Summen`);if(!i.number)throw n(a,"erstellter Beleg ohne Nummer")}if(i.number){if(r.has(i.number))throw new Error(`Das Backup enthält die Belegnummer ${i.number} doppelt.`);r.add(i.number)}}}for(let a of e.data.payments||[])if(!Gn(a.amountCents)||typeof a.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let a of e.data.expenses||[])if(![a.netCents,a.taxCents,a.totalCents].every(Gn))throw n("expenses","Ausgabe ohne Beträge");for(let a of e.data.assets||[])if(typeof a.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(a.dataUrl))throw n("assets","ungültiges Logo");let s=Object.fromEntries(Ge.map(a=>[a,(e.data[a]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:s,fileCount:t?t.size:Tt(e.files)?Object.keys(e.files).length:0}}function Yc(e){let t={};if(!Tt(e))return t;for(let n of Object.keys(ht)){if(!Object.hasOwn(e,n)||pl.includes(n)||fl.includes(n))continue;let s=ht[n],a=e[n];if(Array.isArray(s)){let r=typeof s[0]=="number";if(!Array.isArray(a)||!a.every(i=>r?Gn(i):typeof i=="string"))continue;t[n]=a}else Tt(s)?Tt(a)&&(t[n]=a):typeof a==typeof s&&(t[n]=a)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function yl({json:e,files:t,badFiles:n=0}){Mr(e,t);let s=y.settings.aiApiKey||"",a=Yc(e.settings);return await en(ut,async i=>{for(let o of ut)await i.clear(o);for(let o of Ge)for(let u of e.data[o]||[])await i.put(o,u);for(let[o,u]of t)await i.put("blobs",{id:o,blob:u});for(let[o,u]of Object.entries(a))await i.put("settings",{key:o,value:u});s&&await i.put("settings",{key:"aiApiKey",value:s}),await i.put("settings",{key:"seeded",value:!0}),await i.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:Y()}),await i.put("settings",{key:"changesSinceBackup",value:0}),await i.put("audit",{id:ze(),at:Y(),user:y.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:Tt(e.counts)?e.counts:null}})}),await nn(),sa(),{missingFiles:(e.data.attachments||[]).filter(i=>!t.has(i.id)).length,badFiles:n}}async function wl(){await en(ut,async e=>{for(let t of ut)await e.clear(t)}),await nn(),sa()}async function zr(e=!0){let t=await $l({includeFiles:e});return nt(t,hl()),await bl(),t.size}function Xc(){let[e,t]=k(""),[n,s]=k(null),a=De(null);se(()=>{yi().then(s)},[y.version]);async function r(u){t(u?"full":"lite");let d=await M(()=>zr(u));t(""),d!=null&&T(`Backup gespeichert (${kn(d)})`,"good")}async function i(u){u&&(t("restore"),await M(async()=>{let d=await vl(u),c=Mr(d.json,d.files),f=c.counts;if(!await ie({title:"Backup einspielen?",text:`Das Backup vom ${c.exportedAt?Me(c.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${f.companies} Unternehmen, ${f.customers} Kunden, ${f.services} Leistungen`,`${f.invoices} Rechnungen, ${f.quotes} Angebote, ${f.payments} Zahlungen`,`${f.expenses} Ausgaben, ${c.includesFiles?`${c.fileCount} Belegdateien`:"ohne Belegdateien"}`],confirmLabel:"Daten ersetzen",danger:!0}))return;let p=await yl(d);T(p.missingFiles?`Backup eingespielt. ${p.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),Z("/")}),t(""))}let o=y.settings;return l`<${j} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${Gt} rows=${[["Letztes Backup",o.lastBackupAt?Me(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${kn(n.usage)}${n.quota?` von ${kn(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${C} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>r(!0)}>Backup herunterladen<//>
      <${C} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>r(!1)}>Ohne Belegdateien<//>
      <${C} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>a.current&&a.current.click()}>Backup einspielen<//>
      <input ref=${a} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${u=>{i(u.target.files[0]),u.target.value=""}} />
    </div>
    <${Te} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${u=>M(()=>st("warnOnClose",u))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function eu(){let e=y.settings,[t,n]=k(e.aiApiKey||""),[s,a]=k(e.aiModel||ht.aiModel),[r,i]=k(!1),[o,u]=k(""),d=t!==(e.aiApiKey||"")||s!==(e.aiModel||"");async function c(){u("save");let m=await M(async()=>(await Ni({aiApiKey:t.trim(),aiModel:s.trim()||ht.aiModel}),!0));u(""),m&&T("KI-Einstellungen gespeichert","good")}async function f(){u("test");let m=await M(()=>Qo({apiKey:t.trim(),model:s.trim()}));u(""),m&&T("Verbindung steht – der API-Key funktioniert.","good")}return l`<${j} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${Ce} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${r?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${C} onClick=${()=>i(!r)}>${r?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${Ce} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${s} onInput=${m=>a(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${C} variant="primary" busy=${o==="save"} disabled=${!d} onClick=${c}>Speichern<//>
      <${C} busy=${o==="test"} disabled=${!t.trim()} onClick=${f}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${C} variant="ghost" icon="trash" onClick=${async()=>{n(""),await M(()=>st("aiApiKey","")),T("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${Te} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>M(()=>st("shrinkImages",m))} />
  <//>`}function Tr({label:e,settingKey:t,hint:n}){let s=(Array.isArray(y.settings[t])?y.settings[t]:[]).join(`
`),[a,r]=k(s);se(()=>{r(s)},[s]);async function i(){let o=[...new Set(a.split(`
`).map(d=>d.trim()).filter(Boolean))];await M(async()=>(await st(t,o),!0))&&T("Liste gespeichert","good")}return l`<div class="span-2">
    <${le} label=${e} value=${a} onInput=${r} rows=${8} hint=${n} />
    ${a!==s&&l`<${C} small variant="primary" onClick=${i}>Speichern<//>`}
  </div>`}function tu(){let e=y.settings,[t,n]=k("de"),[s,a]=k("invoice"),r=/^r\d$/.test(s),i=r?Number(s.slice(1)):0,o=r?((e.reminderTemplates||{})[t]||{})[i]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[s]||{subject:"",body:""},[u,d]=k(o.subject),[c,f]=k(o.body);se(()=>{d(o.subject),f(o.body)},[t,s,y.version]);let m=u!==o.subject||c!==o.body,p=e.reminderDays||[7,14,21];async function h(){await M(async()=>{if(r){let $=JSON.parse(JSON.stringify(e.reminderTemplates||{}));$[t]={...$[t]||{},[i]:{subject:u,body:c}},await st("reminderTemplates",$)}else{let $=JSON.parse(JSON.stringify(e.emailTemplates||{}));$[t]={...$[t]||{},[s]:{subject:u,body:c}},await st("emailTemplates",$)}return!0})&&T("Vorlage gespeichert","good")}return l`<${j} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${Ce} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${at.map((g,$)=>l`<label class="mini-field">
            <span>${g.label}</span>
            <${Oe} value=${p[$]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${g.label}: Tage nach Fälligkeit`}
              onChange=${v=>{let b=[...p];b[$]=v,M(()=>st("reminderDays",b))}} />
          </label>`)}
        </div>
      <//>
      <${me} class="span-4" label="Vorlage" value=${s} onChange=${a} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...at.map(g=>({id:`r${g.id}`,label:g.label}))]} />
      <${Ce} class="span-2" label="Sprache">
        <${la} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      <${K} class="span-6" label="Betreff" value=${u} onInput=${d} />
      <${le} class="span-6" label="Text" value=${c} onInput=${f} rows=${9} />
    </div>
    ${m&&l`<div class="button-row"><${C} variant="primary" onClick=${h}>Vorlage speichern<//></div>`}
  <//>`}function nu(){let[e,t]=k(""),n=y.customers.length||y.invoices.length||y.expenses.length||y.services.length;async function s(){t("demo");let i=await M(async()=>(await ds(),!0));t(""),i&&(T("Beispieldaten geladen","good"),Z("/"))}async function a(){if(!await ie({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await M(async()=>(await Ao(),!0));t(""),o&&(T("Daten gelöscht","good"),Z("/"))}async function r(){let i=await ie({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(i===null)return;if(String(i).trim().toUpperCase()!=="LÖSCHEN"){T("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await M(async()=>(await wl(),await gr(),!0));t(""),o&&(T("Alle Daten gelöscht","good"),Z("/"))}return l`<${j} title="Daten">
    ${y.settings.demoLoaded&&l`<${ke} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${C} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${s}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${C} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${a}>Kunden, Leistungen und Belege löschen<//>
      <${C} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${r}>Alles löschen<//>
    </div>
  <//>`}var au=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function xl(){de();let e=y.settings,[t,n]=k(e.userName||"");return se(()=>{n(e.userName||"")},[e.userName]),l`
    <${he} title="Einstellungen" />
    <div class="form-page">
      <${j} title="Profil und Darstellung">
        <div class="form-grid">
          <${Ce} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${s=>n(s.target.value)} />
              <${C} disabled=${t===(e.userName||"")} onClick=${async()=>{await M(async()=>(await st("userName",t.trim()),!0))&&T("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${Ce} class="span-2" label="Darstellung">
            <${la} label="Darstellung" value=${e.theme||"auto"} onChange=${s=>M(()=>st("theme",s))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${Xc} />
      <${eu} />
      <${j} title="Auswahllisten">
        <div class="form-grid">
          <${Tr} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${Tr} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${Tr} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${tu} />
      <${nu} />
      <${j} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${au.map(([s,a])=>l`<div><dt>${s}</dt><dd>${a}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var Lr={invoices:"Rechnungen",quotes:"Angebote",customers:"Kunden",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",system:"System"},su={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function Dl(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let s=JSON.stringify(t);return s.length>140?`${s.slice(0,140)} …`:s}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function ru({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${su[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${Dl(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${Dl(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function kl(){de();let[e,t]=k(""),[n,s]=k(""),[a,r]=k(200),[i,o]=k(""),d=be(()=>[...y.audit].sort((f,m)=>f.at<m.at?1:-1),[y.version]).filter(f=>(!n||f.entity===n)&&Ae(e,f.action,f.label,f.user));function c(){ys({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:d.map(f=>[f.at,f.user,f.action,Lr[f.entity]||f.entity,f.label,f.prev?JSON.stringify(f.prev):"",f.next?JSON.stringify(f.next):""])})}return l`
    <${he} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${C} icon="download" disabled=${!d.length} onClick=${c}>CSV<//>
    <//>
    <div class="filters">
      <${it} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${f=>s(f.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(Lr).map(([f,m])=>l`<option value=${f}>${m}</option>`)}
      </select>
      <span class="filter-note">${d.length} ${d.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${d.length===0?l`<${ue} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${d.slice(0,a).map(f=>l`<tr key=${f.id}>
              <td class="nw">${Me(f.at)}</td>
              <td><span class="cell-main">${f.action}</span><div class="cell-sub">${Lr[f.entity]||f.entity}</div></td>
              <td>${f.label}</td>
              <td><${ru} entry=${f} />
                ${f.entity==="invoices"&&f.prev&&f.prev.doc&&l`<${C} small icon="download" busy=${i===f.id}
                  onClick=${async()=>{o(f.id),await M(()=>Dr(f)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${f.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${d.length>a&&l`<div class="button-row center"><${C} onClick=${()=>r(a+300)}>Weitere Einträge zeigen<//></div>`}
  `}var iu=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kunden",icon:"customers"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function ou(){let[e,t]=k(!1),n=De(null),s=ye(),a=ve();se(()=>{if(!e)return;let o=d=>{n.current&&!n.current.contains(d.target)&&t(!1)},u=d=>{d.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",u)}},[e]);let r=o=>{t(!1),M(()=>st("activeCompany",o))},i=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${Nt(o.logoAssetId)?l`<img src=${Nt(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${a.slice(0,4).map(u=>l`<i style=${`background:${u.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
    <button type="button" class="switcher-btn" aria-haspopup="listbox" aria-expanded=${e} onClick=${()=>t(!e)}>
      ${i(s)}
      <span class="switcher-text">
        <span class="switcher-label">Unternehmen</span>
        <span class="switcher-name">${s?s.name:"Alle Unternehmen"}</span>
      </span>
      <${ee} name="chevronDown" size=${16} />
    </button>
    ${e&&l`<div class="switcher-list" role="listbox" aria-label="Unternehmen wählen">
      <button type="button" role="option" aria-selected=${!s} class=${`switcher-item${s?"":" is-on"}`} onClick=${()=>r("all")}>
        ${i(null)}<span>Alle Unternehmen</span>${!s&&l`<${ee} name="check" size=${16} />`}
      </button>
      ${a.map(o=>l`<button type="button" role="option" aria-selected=${s&&s.id===o.id} key=${o.id}
          class=${`switcher-item${s&&s.id===o.id?" is-on":""}`} onClick=${()=>r(o.id)}>
        ${i(o)}<span>${o.name}</span>${s&&s.id===o.id&&l`<${ee} name="check" size=${16} />`}
      </button>`)}
      <a class="switcher-manage" href="#/companies" onClick=${()=>t(!1)}>Unternehmen verwalten</a>
    </div>`}
  </div>`}function Pr(e,t){let n=Ka(e);if(Number.isNaN(n)||t==null)return!1;let s=t/100;return Math.abs(s-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(s))===Math.abs(n)}function lu(e){let t=[],n=(a,r)=>{r.length&&t.push({group:a,items:r.slice(0,5)})};n("Kunden",y.customers.filter(a=>Ae(e,a.number,a.company,a.firstName,a.lastName,a.contact,a.email,a.city)).map(a=>({key:a.id,label:ne(a),sub:[a.number,a.city].filter(Boolean).join(", "),href:`/customers/${a.id}`})));let s=a=>ne(D("customers",a.customerId)||a.snapshot&&a.snapshot.customer);return n("Rechnungen",y.invoices.filter(a=>Ae(e,a.number,s(a),(a.items||[]).map(r=>r.name).join(" "))||Pr(e,a.totals&&a.totals.totalCents)).sort((a,r)=>a.issueDate<r.issueDate?1:-1).map(a=>({key:a.id,label:`${a.number||"Entwurf"}, ${s(a)||"ohne Kunde"}`,sub:S(a.totals?a.totals.totalCents:0,a.currency),href:a.status==="draft"?`/invoices/${a.id}/edit`:`/invoices/${a.id}`}))),n("Angebote",y.quotes.filter(a=>Ae(e,a.number,s(a),(a.items||[]).map(r=>r.name).join(" "))||Pr(e,a.totals&&a.totals.totalCents)).map(a=>({key:a.id,label:`${a.number||"Entwurf"}, ${s(a)||"ohne Kunde"}`,sub:S(a.totals?a.totals.totalCents:0,a.currency),href:a.status==="draft"?`/quotes/${a.id}/edit`:`/quotes/${a.id}`}))),n("Leistungen",y.services.filter(a=>Ae(e,a.name,a.internalName,a.category,a.description)).map(a=>({key:a.id,label:a.name,sub:S(a.priceCents,a.currency),href:"/services"}))),n("Ausgaben",y.expenses.filter(a=>Ae(e,a.vendor,a.description,a.invoiceNumber,a.category)||Pr(e,a.totalCents)).sort((a,r)=>(a.invoiceDate||"")<(r.invoiceDate||"")?1:-1).map(a=>({key:a.id,label:a.vendor||"Beleg",sub:`${a.category||"Ausgabe"}, ${S(a.totalCents,a.currency)}`,href:"/expenses"}))),n("Unternehmen",y.companies.filter(a=>Ae(e,a.name,a.shortName,a.invoicePrefix)).map(a=>({key:a.id,label:a.name,sub:a.invoicePrefix,href:`/companies/${a.id}`}))),t}function cu(){let[e,t]=k(""),[n,s]=k(!1),[a,r]=k(0),i=De(null),o=De(null),u=be(()=>Pt(e).trim().length>=2?lu(e):[],[e,y.version]),d=u.flatMap(p=>p.items);se(()=>{let p=g=>{(g.metaKey||g.ctrlKey)&&g.key.toLowerCase()==="k"&&(g.preventDefault(),o.current&&o.current.focus())},h=g=>{i.current&&!i.current.contains(g.target)&&s(!1)};return document.addEventListener("keydown",p),document.addEventListener("mousedown",h),()=>{document.removeEventListener("keydown",p),document.removeEventListener("mousedown",h)}},[]);function c(p){s(!1),t(""),o.current&&o.current.blur(),Z(p.href)}function f(p){p.key==="ArrowDown"?(p.preventDefault(),r(h=>Math.min(h+1,d.length-1))):p.key==="ArrowUp"?(p.preventDefault(),r(h=>Math.max(h-1,0))):p.key==="Enter"&&d[a]?(p.preventDefault(),c(d[a])):p.key==="Escape"&&(s(!1),p.target.blur())}let m=-1;return l`<div class="gsearch" ref=${i} role="search">
    <${ee} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kunde, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${p=>{t(p.target.value),s(!0),r(0)}}
      onFocus=${()=>s(!0)} onKeyDown=${f} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&Pt(e).trim().length>=2&&l`<div class="gsearch-list">
      ${u.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${u.map(p=>l`<div class="gsearch-group" key=${p.group}>
        <div class="gsearch-head">${p.group}</div>
        ${p.items.map(h=>{m+=1;let g=m;return l`<button type="button" key=${h.key} class=${`gsearch-item${g===a?" is-active":""}`}
            onMouseEnter=${()=>r(g)} onMouseDown=${$=>{$.preventDefault(),c(h)}}>
            <span>${h.label}</span><span class="cell-sub">${h.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function uu(){let[e,t]=k(!1),n=y.settings.changesSinceBackup||0;async function s(){t(!0);let a=await M(()=>zr(!0));t(!1),a!=null&&T("Backup gespeichert","good")}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${s} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${ee} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function du({route:e}){let[t,n,s]=e.parts,a=e.params;return t?t==="invoices"?n?n==="new"?l`<${Na} coll="invoices" id="new" params=${a} />`:s==="edit"?l`<${Na} coll="invoices" id=${n} params=${a} />`:l`<${To} id=${n} />`:l`<${Mo} params=${a} />`:t==="quotes"?n?n==="new"?l`<${Na} coll="quotes" id="new" params=${a} />`:s==="edit"?l`<${Na} coll="quotes" id=${n} params=${a} />`:l`<${Po} id=${n} />`:l`<${Lo} />`:t==="customers"?n?l`<${Oo} id=${n} />`:l`<${Fo} />`:t==="services"?l`<${qo} />`:t==="expenses"?l`<${Xo} />`:t==="recurring"?l`<${el} />`:t==="finance"?l`<${cl} />`:t==="reports"?l`<${ul} params=${a} />`:t==="companies"?n?l`<${ml} id=${n} />`:l`<${dl} />`:t==="settings"?l`<${xl} />`:t==="audit"?l`<${kl} />`:l`<${ue} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${C} onClick=${()=>Z("/")}>Zum Dashboard<//><//>`:l`<${_o} />`}function mu({route:e}){let[t,n]=ui(s=>{console.error(s)});return se(()=>{t&&n()},[e.raw]),t?l`<${ue} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${C} onClick=${()=>{n(),Z("/")}}>Zum Dashboard<//>
    <//>`:l`<${du} key=${e.raw} route=${e} />`}function pu(){de();let e=_i(),[t,n]=k(!1),s=ye(),a=ve();se(()=>{n(!1)},[e.raw]),se(()=>{let o=y.settings.theme;o==="light"||o==="dark"?document.documentElement.setAttribute("data-theme",o):document.documentElement.removeAttribute("data-theme")},[y.settings.theme]),se(()=>{let o=u=>{if(Li())return;let d=Ai(),c=y.settings.warnOnClose!==!1&&(y.settings.changesSinceBackup||0)>0;(d||c)&&(u.preventDefault(),u.returnValue="")};return window.addEventListener("beforeunload",o),()=>window.removeEventListener("beforeunload",o)},[]);let r=o=>o.exact?e.path===o.path:e.path===o.path||e.path.startsWith(`${o.path}/`),i=y.expenses.filter(o=>o.status==="review").length;return l`
    <div class="brandband" aria-hidden="true">
      ${s?l`<i style=${`background:${s.brandColor}`}></i>`:a.length?a.map(o=>l`<i key=${o.id} style=${`background:${o.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${s?s.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${iu.map((o,u)=>l`<ul class="nav-group" key=${u}>
            ${o.map(d=>l`<li key=${d.path}>
              <a href=${`#${d.path}`} class=${`nav-link${r(d)?" is-active":""}`} aria-current=${r(d)?"page":void 0}>
                <${ee} name=${d.icon} /><span>${d.label}</span>
                ${d.path==="/expenses"&&i>0&&l`<span class="nav-count" title="Belege zu prüfen">${i}</span>`}
              </a>
            </li>`)}
          </ul>`)}
        </nav>
        <p class="sidebar-note">Daten liegen lokal in diesem Browser.</p>
      </aside>
      <div class="main">
        <header class="topbar">
          <button type="button" class="nav-toggle" aria-label="Navigation öffnen" aria-expanded=${t} onClick=${()=>n(!t)}><${ee} name="menu" size=${20} /></button>
          <${ou} />
          <${cu} />
          <div class="topbar-actions">
            <${uu} />
            <${C} variant="primary" icon="plus" onClick=${()=>Z("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${y.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${mu} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${Hi} />
    <${Wi} />
  `}async function fu(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,s=new Promise((a,r)=>{n=setTimeout(()=>r(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await Ci(),await xo()})(),s])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let s=document.createElement("div");s.className="boot-error";let a=document.createElement("h1");a.textContent="Das Tool konnte nicht starten";let r=document.createElement("p");if(r.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,s.append(a,r),t){let i=document.createElement("p");i.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",s.append(i)}e.append(s);return}e.innerHTML="",Us(l`<${pu} />`,e)}window.addEventListener("unhandledrejection",e=>{e.reason&&Rn(e.reason)});fu();})();
