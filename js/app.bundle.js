(()=>{var is,re,zr,ga,Lr,Dr,jc,ns={},Pr=[],Wc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Yt(e,t){for(var n in t)e[n]=t[n];return e}function Kr(e){var t=e.parentNode;t&&t.removeChild(e)}function ii(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?is.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return es(e,r,a,s,null)}function es(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++zr};return re.vnode!=null&&re.vnode(i),i}function rs(e){return e.children}function ha(e,t){this.props=e,this.context=t}function _n(e,t){if(t==null)return e.__?_n(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?_n(e):null}function Or(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Or(e)}}function Sr(e){(!e.__d&&(e.__d=!0)&&ga.push(e)&&!as.__r++||Dr!==re.debounceRendering)&&((Dr=re.debounceRendering)||Lr)(as)}function as(){for(var e;as.__r=ga.length;)e=ga.sort(function(t,n){return t.__v.__b-n.__v.__b}),ga=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=Yt({},i)).__v=i.__v+1,ri(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??_n(i),i.__h),Vr(a,i),i.__e!=r&&Or(i)))})}function Fr(e,t,n,a,s,i,r,o,c,p){var u,d,m,f,$,h,v,g=a&&a.__k||Pr,b=g.length;for(n.__k=[],u=0;u<t.length;u++)if((f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?es(null,f,null,null,f):Array.isArray(f)?es(rs,{children:f},null,null,null):f.__b>0?es(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(m=g[u])===null||m&&f.key==m.key&&f.type===m.type)g[u]=void 0;else for(d=0;d<b;d++){if((m=g[d])&&f.key==m.key&&f.type===m.type){g[d]=void 0;break}m=null}ri(e,f,m=m||ns,s,i,r,o,c,p),$=f.__e,(d=f.ref)&&m.ref!=d&&(v||(v=[]),m.ref&&v.push(m.ref,null,f),v.push(d,f.__c||$,f)),$!=null?(h==null&&(h=$),typeof f.type=="function"&&f.__k!=null&&f.__k===m.__k?f.__d=c=qr(f,c,e):c=Zr(e,f,m,g,$,c),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=_n(m))}for(n.__e=h,u=b;u--;)g[u]!=null&&(typeof n.type=="function"&&g[u].__e!=null&&g[u].__e==n.__d&&(n.__d=_n(a,u+1)),Hr(g[u],g[u]));if(v)for(u=0;u<v.length;u++)Gr(v[u],v[++u],v[++u])}function qr(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?qr(s,t,n):Zr(n,s,s,e.__k,s.__e,t));return t}function Zr(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function Cr(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Wc.test(t)?n:n+"px"}function Xa(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||Cr(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||Cr(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?Ir:Er,i):e.removeEventListener(t,i?Ir:Er,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Er(e){this.l[e.type+!1](re.event?re.event(e):e)}function Ir(e){this.l[e.type+!0](re.event?re.event(e):e)}function ri(e,t,n,a,s,i,r,o,c){var p,u,d,m,f,$,h,v,g,b,C,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(p=re.__b)&&p(t);try{e:if(typeof x=="function"){if(v=t.props,g=(p=x.contextType)&&a[p.__c],b=p?g?g.props.value:p.__:a,n.__c?h=(u=t.__c=n.__c).__=u.__E:("prototype"in x&&x.prototype.render?t.__c=u=new x(v,b):(t.__c=u=new ha(v,b),u.constructor=x,u.render=Qc),g&&g.sub(u),u.props=v,u.state||(u.state={}),u.context=b,u.__n=a,d=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),x.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Yt({},u.__s)),Yt(u.__s,x.getDerivedStateFromProps(v,u.__s))),m=u.props,f=u.state,d)x.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(x.getDerivedStateFromProps==null&&v!==m&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,b),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,b)===!1||t.__v===n.__v){u.props=v,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(N){N&&(N.__=t)}),u.__h.length&&r.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,b),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(m,f,$)})}u.context=b,u.props=v,u.state=u.__s,(p=re.__r)&&p(t),u.__d=!1,u.__v=t,u.__P=e,p=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(a=Yt(Yt({},a),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||($=u.getSnapshotBeforeUpdate(m,f)),C=p!=null&&p.type===rs&&p.key==null?p.props.children:p,Fr(e,Array.isArray(C)?C:[C],t,n,a,s,i,r,o,c),u.base=t.__e,t.__h=null,u.__h.length&&r.push(u),h&&(u.__E=u.__=null),u.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Jc(n.__e,t,n,a,s,i,r,c);(p=re.diffed)&&p(t)}catch(N){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),re.__e(N,t,n)}}function Vr(e,t){re.__c&&re.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){re.__e(a,n.__v)}})}function Jc(e,t,n,a,s,i,r,o){var c,p,u,d=n.props,m=t.props,f=t.type,$=0;if(f==="svg"&&(s=!0),i!=null){for(;$<i.length;$++)if((c=i[$])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,i[$]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),i=null,o=!1}if(f===null)d===m||o&&e.data===m||(e.data=m);else{if(i=i&&is.call(e.childNodes),p=(d=n.props||ns).dangerouslySetInnerHTML,u=m.dangerouslySetInnerHTML,!o){if(i!=null)for(d={},$=0;$<e.attributes.length;$++)d[e.attributes[$].name]=e.attributes[$].value;(u||p)&&(u&&(p&&u.__html==p.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if((function(h,v,g,b,C){var x;for(x in g)x==="children"||x==="key"||x in v||Xa(h,x,null,g[x],b);for(x in v)C&&typeof v[x]!="function"||x==="children"||x==="key"||x==="value"||x==="checked"||g[x]===v[x]||Xa(h,x,v[x],g[x],b)})(e,m,d,s,o),u)t.__k=[];else if($=t.props.children,Fr(e,Array.isArray($)?$:[$],t,n,a,s&&f!=="foreignObject",i,r,i?i[0]:n.__k&&_n(n,0),o),i!=null)for($=i.length;$--;)i[$]!=null&&Kr(i[$]);o||("value"in m&&($=m.value)!==void 0&&($!==e.value||f==="progress"&&!$)&&Xa(e,"value",$,d.value,!1),"checked"in m&&($=m.checked)!==void 0&&$!==e.checked&&Xa(e,"checked",$,d.checked,!1))}return e}function Gr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){re.__e(a,n)}}function Hr(e,t,n){var a,s;if(re.unmount&&re.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||Gr(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){re.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&Hr(a[s],t,typeof e.type!="function");n||e.__e==null||Kr(e.__e),e.__e=e.__d=void 0}function Qc(e,t,n){return this.constructor(e,n)}function oi(e,t,n){var a,s,i;re.__&&re.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],ri(t,e=(!a&&n||t).__k=ii(rs,null,[e]),s||ns,ns,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?is.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),Vr(i,e)}is=Pr.slice,re={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},zr=0,ha.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Yt({},this.state),typeof e=="function"&&(e=e(Yt({},n),this.props)),e&&Yt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Sr(this))},ha.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Sr(this))},ha.prototype.render=rs,ga=[],Lr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,as.__r=0,jc=0;var Mn,Xe,Nr,ss=0,ai=[],Tr=re.__b,Ar=re.__r,Rr=re.diffed,Br=re.__c,Ur=re.unmount;function $a(e,t){re.__h&&re.__h(Xe,e,ss||t),ss=0;var n=Xe.__H||(Xe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function S(e){return ss=1,Yc(Wr,e)}function Yc(e,t,n){var a=$a(Mn++,2);return a.t=e,a.__c||(a.__=[n?n(t):Wr(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=Xe),a.__}function ue(e,t){var n=$a(Mn++,3);!re.__s&&ci(n.__H,t)&&(n.__=e,n.__H=t,Xe.__H.__h.push(n))}function li(e,t){var n=$a(Mn++,4);!re.__s&&ci(n.__H,t)&&(n.__=e,n.__H=t,Xe.__h.push(n))}function Te(e){return ss=5,ve(function(){return{current:e}},[])}function ve(e,t){var n=$a(Mn++,7);return ci(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function jr(e){var t=$a(Mn++,10),n=S();return t.__=e,Xe.componentDidCatch||(Xe.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function Xc(){ai.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(ts),e.__H.__h.forEach(si),e.__H.__h=[]}catch(t){e.__H.__h=[],re.__e(t,e.__v)}}),ai=[]}re.__b=function(e){Xe=null,Tr&&Tr(e)},re.__r=function(e){Ar&&Ar(e),Mn=0;var t=(Xe=e.__c).__H;t&&(t.__h.forEach(ts),t.__h.forEach(si),t.__h=[])},re.diffed=function(e){Rr&&Rr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ai.push(t)!==1&&Nr===re.requestAnimationFrame||((Nr=re.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),_r&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);_r&&(a=requestAnimationFrame(s))})(Xc)),Xe=void 0},re.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ts),n.__h=n.__h.filter(function(a){return!a.__||si(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],re.__e(a,n.__v)}}),Br&&Br(e,t)},re.unmount=function(e){Ur&&Ur(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ts)}catch(n){re.__e(n,t.__v)}};var _r=typeof requestAnimationFrame=="function";function ts(e){var t=Xe;typeof e.__c=="function"&&e.__c(),Xe=t}function si(e){var t=Xe;e.__c=e.__(),Xe=t}function ci(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function Wr(e,t){return typeof t=="function"?t(e):t}var Jr=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,Jr(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},Mr=new Map,l=function(e){var t=Mr.get(this);return t||(t=new Map,Mr.set(this,t)),(t=Jr(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],p=function(m){i===1&&(m||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,r):i===3&&(m||r)?(c.push(3,m,r),i=2):i===2&&r==="..."&&m?c.push(4,m,0):i===2&&r&&!m?c.push(5,0,!0,r):i>=5&&((r||!m&&i===5)&&(c.push(i,0,r,s),i=6),m&&(c.push(i,m,0,s),i=6)),r=""},u=0;u<n.length;u++){u&&(i===1&&p(),p(u));for(var d=0;d<n[u].length;d++)a=n[u][d],i===1?a==="<"?(p(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(p(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[u][d+1]===">")?(p(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(p(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return p(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(ii);var Ge=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),ye=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),$n=e=>String(e).padStart(2,"0");function zn(e){return`${e.getFullYear()}-${$n(e.getMonth()+1)}-${$n(e.getDate())}`}var q=()=>zn(new Date),ne=()=>new Date().toISOString();function be(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function ba(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Ae(e,t){let n=ba(e);return n.setDate(n.getDate()+Number(t||0)),zn(n)}function Kt(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),p=(o%12+12)%12,u=new Date(c,p+1,0).getDate();return`${c}-${$n(p+1)}-${$n(Math.min(r,u))}`}function Ln(e,t){let n=ba(t).getTime()-ba(e).getTime();return Math.round(n/864e5)}var os=e=>Number(e.slice(0,4)),Qr=e=>Number(e.slice(5,7)),va=e=>e.slice(0,7),Yr=e=>Math.floor((Qr(e)-1)/3)+1,Xr=e=>`${os(e)}-Q${Yr(e)}`;function ui(e,t){let n=`${e}-${$n(t+1)}-01`,a=zn(new Date(e,t+1,0));return{from:n,to:a}}function di(e,t){let n=`${e}-${$n((t-1)*3+1)}-01`,a=zn(new Date(e,t*3,0));return{from:n,to:a}}var bn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function ut(e,t=q(),n={}){let a=os(t),s=Qr(t)-1,i=Yr(t);switch(e){case"month":return ui(a,s);case"lastMonth":return s===0?ui(a-1,11):ui(a,s-1);case"quarter":return di(a,i);case"lastQuarter":return i===1?di(a-1,4):di(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:be(n.from)?n.from:"0000-01-01",to:be(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var Ot=(e,t)=>!!e&&e>=t.from&&e<=t.to;function eo(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${$n(o+1)}`}return n}function to(e,t=q()){let n=[];for(let a=e-1;a>=0;a--)n.push(Kt(t.slice(0,7)+"-01",-a).slice(0,7));return n}var eu=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],tu=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],At=e=>`${eu[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,Pn=e=>tu[Number(e.slice(5,7))-1];function ls(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",p=c==="."?",":".";r=n.split(p).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var Xt=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Re(e,...t){let n=Xt(e).trim();if(!n)return!0;let a=Xt(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function en(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function Ft(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function Kn(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var mi=2,no="bbc-finance",pi="2026-10-13b",ao="Neu: Kontakte statt Kunden (Kunde K / Kontakt KO) und Kontaktdaten aus dem Impressum übernehmen.",it=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes"],On="USD";var et=["USD","EUR"],cs=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],xt=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],ya={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},fi={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},nu=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],au=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],su=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],Fn=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],vn=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],gt=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Rt={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:nu,serviceCategories:au,paymentMethods:su,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},qt=()=>({id:Ge(),createdAt:ne(),updatedAt:ne()});function wa(e={}){return{...qt(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:On,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var qn=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],gi=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],Zn={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},us=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],ds=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],rt=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function ms(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...qt(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:q(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||rt(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function so(e={}){return{...qt(),customerId:"",companyId:"",date:q(),kind:"note",title:"",text:"",...e}}var io=[{id:"customer",label:"Kunde"},{id:"contact",label:"Kontakt"}],Se=e=>!e||e.kind!=="contact";function tn(e={}){return{...qt(),kind:"customer",number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function nn(e={}){return{...qt(),name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:On,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function xa(e={}){return{id:Ge(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function kt(e,t={}){let n=q();return{...qt(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:On,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function Vn(e,t={}){let n=q();return{...qt(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:On,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function ka(e={}){return{...qt(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:q(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:On,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function Gn(e,t={}){return{...qt(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:q(),nextDate:q(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:On,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function j(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function dt(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var iu=2,Da=null,an=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),ru=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function Hn(e){return e==="counters"||e==="settings"?"key":"id"}var Dt=[...it,"settings","blobs"];function hi(){return Da||(Da=new Promise((e,t)=>{let n=indexedDB.open(no,iu);n.onupgradeneeded=()=>{let a=n.result;for(let s of Dt){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:Hn(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),Da=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),Da)}async function jn(e){let t=await hi();return an(t.transaction(e,"readonly").objectStore(e).getAll())}async function ro(e,t){let n=await hi();return an(n.transaction(e,"readonly").objectStore(e).get(t))}async function yn(e,t){let a=(await hi()).transaction(e,"readwrite"),s=ru(a),i={get:(o,c)=>an(a.objectStore(o).get(c)),put:(o,c)=>an(a.objectStore(o).put(c)),del:(o,c)=>an(a.objectStore(o).delete(c)),byIndex:(o,c,p)=>an(a.objectStore(o).index(c).get(p)),allByIndex:(o,c,p)=>an(a.objectStore(o).index(c).getAll(p)),clear:o=>an(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function oo(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function lo(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var y={ready:!1,version:0,settings:ye(Rt)},Bt={};for(let e of it)y[e]=[],Bt[e]=new Map;var gs=new Set;function uo(e){return gs.add(e),()=>gs.delete(e)}var ps=0,$i=!1;function mo(){if(y.version+=1,fs.clear(),ps){$i=!0;return}for(let e of gs)e(y.version)}async function po(e){ps+=1;try{return await e()}finally{if(ps-=1,!ps&&$i){$i=!1;for(let t of gs)t(y.version)}}}var wn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(wn=new BroadcastChannel("bbc-finance-sync"),wn.onmessage=e=>{e.data==="changed"&&xn()})}catch{wn=null}var co=new Set(it.filter(e=>e!=="rates"));async function xn(){let e=await Promise.all([...it,"settings"].map(n=>jn(n)));it.forEach((n,a)=>{Bt[n]=new Map(e[a].map(s=>[s[Hn(n)],s])),y[n]=e[a]});let t=ye(Rt);for(let n of e[it.length])Object.hasOwn(Rt,n.key)&&(t[n.key]=n.value);y.settings=t,y.ready=!0,mo()}async function fo(){await xn(),lo()}var _e=e=>y[e],k=(e,t)=>t?Bt[e].get(t):void 0,fs=new Map;function go(e,t){return fs.has(e)||fs.set(e,t()),fs.get(e)}function ho(e,t){return go(`group:${e}:${t}`,()=>{let n=new Map;for(let a of y[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var $o=Object.freeze([]),qe=e=>ho("payments","invoiceId").get(e)||$o,sn=e=>ho("reminders","invoiceId").get(e)||$o,Zt=e=>e&&Bt.assets.get(e)?Bt.assets.get(e).dataUrl:"",me=()=>go("activeCompanies",()=>y.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function xe(){let e=y.settings.activeCompany;if(!e||e==="all")return null;let t=k("companies",e);return t&&!t.archived?t:null}function He(e){let t=xe();return!t||e.companyId===t.id}function ou({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:Ge(),at:ne(),user:y.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function W(e){let t=[],n=!1,a={},s=await yn(Dt,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(p,u){return t.push({store:p,value:u}),co.has(p)&&p!=="audit"&&(n=!0),r.put(p,u)},del(p,u){return t.push({store:p,id:u,del:!0}),co.has(p)&&(n=!0),r.del(p,u)},clear(p){return t.push({store:p,clear:!0}),r.clear(p)},blobPut:(p,u)=>r.put("blobs",{id:p,blob:u}),blobDel:p=>r.del("blobs",p),audit(p){let u=ou(p);return t.push({store:"audit",value:u}),r.put("audit",u)},setting(p,u){return a[p]=u,r.put("settings",{key:p,value:u})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let p=await r.get("settings","changesSinceBackup"),u=p&&Number(p.value)||0;a.changesSinceBackup=u+1,await r.put("settings",{key:"changesSinceBackup",value:u+1})}return c}),i=new Set;for(let r of t)Bt[r.store]&&(r.clear?Bt[r.store]=new Map:r.del?Bt[r.store].delete(r.id):Bt[r.store].set(r.value[Hn(r.store)],r.value),i.add(r.store));for(let r of i)y[r]=[...Bt[r].values()];if(Object.keys(a).length&&(y.settings={...y.settings,...a}),mo(),wn)try{wn.postMessage("changed")}catch{}return s}function Sa(){if(wn)try{wn.postMessage("changed")}catch{}}async function tt(e,t){return W(n=>n.setting(e,t))}async function bo(e){return W(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=S(y.version);return ue(()=>uo(t=>e(t)),[]),y}var vi=new Set,kn=null,Ca=yo(),bi=!1;function yo(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function yi(){if(bi){bi=!1;return}let e=yo();if(e.raw!==Ca.raw){if(kn){if(!await kn()){bi=!0,location.hash=Ca.raw;return}kn=null}Ca=e;for(let t of vi)t(Ca);window.scrollTo(0,0)}}window.addEventListener("hashchange",yi);function J(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),yi()):location.hash===n?yi():location.hash=e}function rn(e){kn=null,J(e)}function $s(e){kn=e}function Sn(){kn=null}var wo=()=>!!kn;function xo(){let[e,t]=S(Ca);return ue(()=>(vi.add(t),()=>vi.delete(t)),[]),e}var lu=0,hs=new Set,Dn=[];function U(e,t="info",n){let a=++lu;Dn=[...Dn,{id:a,message:String(e),tone:t}].slice(-3),hs.forEach(s=>s(Dn)),setTimeout(()=>ki(a),n||(t==="bad"?9e3:4500))}function ki(e){Dn=Dn.filter(t=>t.id!==e),hs.forEach(t=>t(Dn))}function ko(){let[e,t]=S(Dn);return ue(()=>(hs.add(t),()=>hs.delete(t)),[]),e}var Do=0;function Wn(e=2e3){Do=Date.now()+e}var So=()=>Date.now()<Do;function Jn(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?U("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?U("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):U(t,"bad")}async function _(e){try{return await e()}catch(t){Jn(t);return}}var wi=new Set,xi=null;function vo(e){xi=e,wi.forEach(t=>t(xi))}function Co(){let[e,t]=S(xi);return ue(()=>(wi.add(t),()=>wi.delete(t)),[]),e}var cu=0;function oe(e){return new Promise(t=>{vo({...e,id:++cu,resolve:n=>{vo(null),t(n)}})})}var bs=()=>oe({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var uu={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2"};function ae({name:e,size:t=18,class:n=""}){let a=uu[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function Di(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function ys(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var ws=e=>ys(e,100);var du=e=>ys(e,1e3),Io=e=>ys(e,100),Eo=e=>ys(e,1e3);function Si(e){let t=du(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(Io(e.discountPct),0),1e4);return Di(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function St(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(m=>BigInt(Math.round(m))),s=a.reduce((m,f)=>m+f,0n);if(s===0n&&(a=a.map(m=>m<0n?-m:m),s=a.reduce((m,f)=>m+f,0n),s===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let i=m=>m<0n?-m:m,r=i(s),o=s<0n?a.map(m=>-m):a,c=i(n),p=[],u=[];o.forEach((m,f)=>{let $=c*m,h=$/r,v=$%r;v<0n&&(h-=1n,v+=r),p.push(h),u.push({i:f,r:v})});let d=c-p.reduce((m,f)=>m+f,0n);u.sort((m,f)=>m.r===f.r?m.i-f.i:m.r>f.r?-1:1);for(let m=0;d>0n&&m<u.length;m++,d-=1n)p[u[m].i]+=1n;return n<0n?p.map(m=>Number(-m)||0):p.map(m=>Number(m)||0)}function Ct(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:Si(m)})),a=n.reduce((m,f)=>m+f.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let m=Math.min(Io(r),1e4);s=Di(BigInt(a)*BigInt(m),10000n)}let o=new Map;for(let m of n){let f=Eo(m.taxRate),$=o.get(f)||{rate:m.taxRate,rateMilli:f,subtotalCents:0};$.subtotalCents+=m.cents,o.set(f,$)}let c=[...o.values()].sort((m,f)=>m.rateMilli-f.rateMilli),p=St(s,c.map(m=>m.subtotalCents)),u=0;c.forEach((m,f)=>{m.discountCents=p[f]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=Di(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),u+=m.taxCents});for(let m of c){let f=n.filter(h=>Eo(h.taxRate)===m.rateMilli),$=St(m.discountCents,f.map(h=>h.cents));f.forEach((h,v)=>{h.netCents=h.cents-($[v]||0)})}let d=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:d,taxCents:u,totalCents:d+u,taxGroups:c.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var vs=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function mu(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function Vt(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?vs(e*s):null;if(t==="EUR"&&n==="USD")return i?vs(e/s):null;let r=mu(t,a);if(r==null)return null;let o=e*r;return n==="USD"?vs(o):n==="EUR"&&i?vs(o*s):null}var mt=(e,t,n)=>Vt(e,t,"USD",n),Et=(e,t,n)=>Vt(e,t,"EUR",n);function Ut(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var Ne=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function _t(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=Ne(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function Gt(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-Ne(t),0)}var Ci=e=>e.status!=="draft"&&e.status!=="cancelled";function Cn(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var on={de:"de-DE",en:"en-US"},Ei=new Map;function Qn(e,t){let n=e+JSON.stringify(t);return Ei.has(n)||Ei.set(n,new Intl.NumberFormat(e,t)),Ei.get(n)}function V(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return Qn(on[n]||on.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function Ea(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?Qn("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):Qn("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function Yn(e,t,n){let a=V(e,t,n);return n==="en"?`${a} ${t}`:a}function En(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":Qn(on[t]||on.de,{maximumFractionDigits:n}).format(Number(e))}function ht(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${Qn(on[t]||on.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function Xn(e,t="de"){return Number.isFinite(Number(e))?Qn(on[t]||on.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function To(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Ao(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function Z(e,t="de"){if(!e)return"";let n=ba(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function Ze(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var Ro={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},No={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},xs=(e,t)=>t==="en"&&No[e]?No[e]:e||"",$t=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);var pu=0,In=(e="f")=>ve(()=>`${e}-${++pu}`,[]);function I({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:p="",...u}){let d=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${p?` ${p}`:""}`;return l`<button type=${s} class=${d} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${u}>
    ${t&&l`<${ae} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function ke({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function K({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=In();return l`<${ke} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${p=>s&&s(p.target.value)} ...${o} />
  <//>`}function le({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,...r}){let o=In();return l`<${ke} label=${e} hint=${t} class=${i} htmlFor=${o}>
    <textarea id=${o} class="input textarea" rows=${s} value=${n??""} onInput=${c=>a&&a(c.target.value)} ...${r}></textarea>
  <//>`}function ce({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let p=In();return l`<${ke} label=${e} hint=${t} error=${n} class=${r} htmlFor=${p}>
    <select id=${p} class="input select" value=${a??""} onChange=${u=>s&&s(u.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(u=>{let d=typeof u=="object"?u:{id:u,label:u};return l`<option value=${d.id} selected=${String(d.id)===String(a??"")}>${d.label}</option>`})}
    </select>
  <//>`}function Ye({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...p}){let u=C=>C==null||C===""?"":n==="money"?To(C):Ao(C,a),[d,m]=S(u(e)),[f,$]=S(!1),[h,v]=S(!1);ue(()=>{f||m(u(e))},[e,f]);function g(C){if(String(C).trim()===""){v(!1),t(r?null:0);return}let x=ls(C,{decimalOnly:n!=="money"});if(Number.isNaN(x)){v(!0);return}s!=null&&x<s&&(x=s),i!=null&&x>i&&(x=i),v(!1),t(n==="money"?ws(x):Number(x.toFixed(a)))}let b=l`<input class=${`input num ${h?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${d}
    onFocus=${C=>{$(!0),C.target.select()}}
    onInput=${C=>{m(C.target.value),g(C.target.value)}}
    onBlur=${C=>{$(!1),g(C.target.value)}}
    aria-invalid=${h} ...${p} />`;return c?l`<span class="input-wrap">${b}<span class="input-suffix">${c}</span></span>`:b}function Be({label:e,hint:t,error:n,class:a,...s}){let i=In();return l`<${ke} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${Ye} id=${i} ...${s} />
  <//>`}function je({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=In();return l`<${ke} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function Ve({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=In("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function pt({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function Nn({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:p,label:u,id:d,disabled:m}){let f=In("cb"),$=d||f,h=e.find(F=>F.id===t),[v,g]=S(!1),[b,C]=S(""),[x,N]=S(0),E=Te(null),w=Te(null),G=r?o??"":v?b:h?h.label:"",A=ve(()=>{let F=Xt(r?v?o:"":b).trim();return(F?e.filter(ee=>Xt(`${ee.label} ${ee.sub||""} ${ee.search||""}`).includes(F)):e).slice(0,50)},[e,b,o,v,r]);ue(()=>{if(!v)return;let F=L=>{E.current&&!E.current.contains(L.target)&&(g(!1),C(""))};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[v]),ue(()=>{p&&w.current&&w.current.focus()},[]);let D=s&&!r,R=A.length+(D?1:0);function z(F){n(F.id,F),g(!1),C("")}function H(F){if(F.key==="ArrowDown")F.preventDefault(),g(!0),N(L=>Math.min(L+1,R-1));else if(F.key==="ArrowUp")F.preventDefault(),N(L=>Math.max(L-1,0));else if(F.key==="Enter"){if(!v)return;if(r&&!A.length){g(!1);return}F.preventDefault(),x<A.length?z(A[x]):D&&(s(b),g(!1),C(""))}else F.key==="Escape"?v&&(F.stopPropagation(),g(!1),C("")):F.key==="Tab"&&(g(!1),C(""))}return l`<div class="combo" ref=${E}>
    <input ref=${w} id=${$} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${v} aria-label=${u} aria-autocomplete="list" disabled=${m}
      placeholder=${v&&h&&!r?h.label:a} value=${G}
      onClick=${()=>{g(!0),N(0)}}
      onInput=${F=>{g(!0),N(0),r?c(F.target.value):C(F.target.value)}}
      onKeyDown=${H} />
    ${!r&&l`<span class="combo-caret"><${ae} name="chevronDown" size=${16} /></span>`}
    ${v&&R>0&&l`<ul class="combo-list" role="listbox">
      ${A.map((F,L)=>l`<li role="option" aria-selected=${L===x}
          class=${`combo-item${L===x?" is-active":""}${F.id===t?" is-selected":""}`}
          onMouseEnter=${()=>N(L)}
          onMouseDown=${ee=>{ee.preventDefault(),z(F)}}>
          <span class="combo-label">${F.label}</span>
          ${F.sub&&l`<span class="combo-sub">${F.sub}</span>`}
        </li>`)}
      ${D&&l`<li role="option" class=${`combo-item combo-create${x===A.length?" is-active":""}`}
          onMouseEnter=${()=>N(A.length)}
          onMouseDown=${F=>{F.preventDefault(),s(b),g(!1),C("")}}>
          <${ae} name="plus" size=${16} />
          <span>${b.trim()?`„${b.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${v&&R===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var fu={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function Ue({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${ae} name=${n||fu[e]||"info"} size=${14} />${t}
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
  </section>`}function Ie({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${ae} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function ks({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function bt({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=S(!1),o=Te(null);ue(()=>{if(!i)return;let p=d=>{o.current&&!o.current.contains(d.target)&&r(!1)},u=d=>{d.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",u)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${I} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(p=>l`<button type="button" role="menuitem" class=${`menu-item${p.danger?" is-danger":""}`} disabled=${p.disabled}
        onClick=${()=>{r(!1),p.onClick()}}>
        ${p.icon&&l`<${ae} name=${p.icon} size=${16} />`}<span>${p.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function We({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=Te(null);ue(()=>{let c=document.activeElement,p=r.current;if(p){let d=p.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");d&&d.focus()}let u=d=>{if(d.key==="Escape"&&(d.stopPropagation(),t()),d.key==="Tab"&&p){let m=[...p.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(h=>h.offsetParent!==null);if(!m.length)return;let f=m[0],$=m[m.length-1];d.shiftKey&&document.activeElement===f?(d.preventDefault(),$.focus()):!d.shiftKey&&document.activeElement===$&&(d.preventDefault(),f.focus())}};return document.addEventListener("keydown",u),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",u),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${I} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function Bo(){let e=Co();return e?l`<${gu} key=${e.id} d=${e} />`:null}function gu({d:e}){let[t,n]=S(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${We} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${I} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${I} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${le} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${K} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function Uo(){let e=ko();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${ae} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>ki(t.id)}><${ae} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function ot({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,p]=S(s||null),u=ve(()=>{if(!c)return t;let m=e.find($=>$.key===c.key);if(!m||!m.sort)return t;let f=c.dir==="desc"?-1:1;return[...t].sort(($,h)=>{let v=m.sort($),g=m.sort(h);return v==null&&g==null?0:v==null?1:g==null?-1:typeof v=="number"&&typeof g=="number"?(v-g)*f:String(v).localeCompare(String(g),"de",{numeric:!0})*f})},[t,c,e]);if(!t.length&&r)return r;let d=m=>{m.sort&&p(f=>f&&f.key===m.key?{key:m.key,dir:f.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
    <table class="table">
      <thead><tr>
        ${e.map(m=>l`<th class=${`${m.align==="right"?"r":""} ${m.class||""}`} style=${m.width?`width:${m.width}`:""}
            aria-sort=${c&&c.key===m.key?c.dir==="asc"?"ascending":"descending":void 0}>
          ${m.sort?l`<button type="button" class="th-btn" onClick=${()=>d(m)}>${m.label}
                ${c&&c.key===m.key&&l`<${ae} name=${c.dir==="asc"?"arrowUp":"arrowDown"} size=${13} />`}</button>`:m.label}
        </th>`)}
      </tr></thead>
      <tbody>
        ${u.map(m=>l`<tr key=${a(m)} class=${`${n?"is-click":""} ${o?o(m):""}`}
            tabindex=${n?0:void 0}
            onClick=${n?f=>{f.target.closest("button, a, input, select")||n(m)}:void 0}
            onKeyDown=${n?f=>{f.key==="Enter"&&f.target===f.currentTarget&&n(m)}:void 0}>
          ${e.map(f=>l`<td class=${`${f.align==="right"?"r":""} ${f.class||""}`}>${f.render?f.render(m):m[f.key]}</td>`)}
        </tr>`)}
      </tbody>
      ${i&&l`<tfoot><tr>${i.map((m,f)=>l`<td class=${e[f]&&e[f].align==="right"?"r":""}>${m}</td>`)}</tr></tfoot>`}
    </table>
  </div>`}function ln({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function vt({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${ae} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Me({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function cn({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var hu=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function Ii(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return hu.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var Ni=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),$u=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function bu(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function yt(e,t,n={}){let a=bu(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||k("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||k("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=Ro[o],p=e.currency||"USD",u=!s&&e.totals?e.totals:Ct(e),d=B=>V(B,p,o),m=[i.name,Ni(i),Ii(i)].filter(Boolean).join(" · "),f=[];if(r){let B=dt(r);r.company&&f.push(r.company),B&&B!==r.company&&f.push(B);let Ee=Ni(r);Ee&&f.push(Ee);let Pe=Ii(r);Pe&&f.push(Pe),r.country&&!$u(r.country,i.country)&&f.push(r.country)}let $=[];r&&r.vatId&&$.push(`${c.vatId}: ${r.vatId}`);let h=e.number||n.previewNumber||"",v=[];v.push([c[`number_${a}`],h||`(${c.draft})`]),v.push([c[`date_${a}`],Z(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?v.push([c.servicePeriod,`${Z(e.serviceDate,o)} – ${Z(e.serviceDateEnd,o)}`]):v.push([c.serviceDate,Z(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&v.push([c.dueDate,Z(e.dueDate,o)]),a==="quote"&&e.validUntil&&v.push([c.validUntil,Z(e.validUntil,o)]),r&&r.number&&r.kind!=="contact"&&v.push([c.customerNo,r.number]);let g="";if(a==="credit_note"&&e.relatedInvoiceId){let B=k("invoices",e.relatedInvoiceId);B&&(g=$t(c.refInvoice,{NUMBER:B.number,DATE:Z(B.issueDate,o)}))}let b=e.items||[],C=b.some(B=>Number(B.discountPct)>0),N=new Set(b.map(B=>Number(B.taxRate)||0)).size>1,E=new Map(u.lines.map(B=>[B.id,B])),w=b.map((B,Ee)=>({pos:String(Ee+1),name:B.name||"",description:B.description||"",qty:En(B.qty,o,3),unit:xs(B.unit,o),price:d(B.priceCents),discount:Number(B.discountPct)>0?ht(B.discountPct,o):"",tax:ht(Number(B.taxRate)||0,o),amount:d(E.has(B.id)?E.get(B.id).cents:0)})),G=String(i.taxLabel||"").trim()||c.taxDefault,A=u.taxGroups.filter(B=>Number(B.rate)!==0),D=[],R=u.discountCents!==0;if((R||A.length)&&D.push({label:c.subtotal,value:d(u.subtotalCents)}),R){let B=e.discount||{},Ee=B.type==="abs"?c.discount:`${c.discount} ${ht(B.value,o)}`;D.push({label:Ee,value:d(-u.discountCents)}),A.length&&D.push({label:c.net,value:d(u.netCents)})}for(let B of A){let Ee=A.length>1?` (${d(B.netCents)})`:"";D.push({label:`${G} ${ht(B.rate,o)}${Ee}`,value:d(B.taxCents)})}D.push({label:c[`total_${a}`]||c.total,value:Yn(u.totalCents,p,o),strong:!0});let z=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(p==="USD"||p==="EUR")){let B=p==="USD"?"EUR":"USD",Ee=Vt(u.totalCents,p,B,e.fx);if(Ee!=null){let Pe=p==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);z={line:`${c.approx} ${Yn(Ee,B,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${p} = ${Xn(Pe,o)} ${B}`}}}let H=[];a==="invoice"&&e.dueDate&&H.push($t(c.dueLine,{DATE:Z(e.dueDate,o)})),a==="quote"&&e.validUntil&&H.push($t(c.validLine,{DATE:Z(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&H.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&H.push(i.taxNote.trim());let F=null;if(a==="invoice"){let B=[];i.accountHolder&&B.push([c.holder,i.accountHolder]),i.bankName&&B.push([c.bank,i.bankName]),i.iban&&B.push(["IBAN",i.iban]),i.bic&&B.push(["BIC",i.bic]);let Ee=[i.altBank,i.otherPayment].map(Pe=>String(Pe||"").trim()).filter(Boolean);(B.length||Ee.length)&&(F={title:c.payment,rows:B,extra:Ee})}let L=[i.name,Ni(i),Ii(i),i.country].filter(Boolean),ee=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),M=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),te=j(r),de=h?`${h} ${te}`:`${c.draft} ${c[a]} ${te}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:Zt(i.logoAssetId),companyName:i.name||"",title:c[a],number:h,subtitle:g,draftMark:s?c.draftMark:"",senderLine:m,recipient:f,recipientExtra:$,meta:v,intro:String(e.intro||"").trim(),columns:{discount:C,tax:N},labels:c,rows:w,sums:D,secondary:z,notes:H,payment:F,footerCols:[L,ee,M].filter(B=>B.length),footerText:String(e.footer||"").trim(),fileName:`${Ft(de)}.pdf`}}var vu=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function _o(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))vu.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var yu=8e3;async function wu(e){let t=new AbortController,n=setTimeout(()=>t.abort(),yu);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var Ti=e=>Number.isFinite(Number(e))&&Number(e)>0,Ai={frankfurterV2(e,t,n){if(!e||!Ti(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!Ti(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!Ti(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function xu(e,t,n){let a=n&&n<q(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:Ai.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:Ai.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Ai.erApi}),s}async function Mo(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||q(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<q()?n:q(),s=ku(e,t,a);if(s)return s;let i=null;for(let o of xu(e,t,n))try{let c=await wu(o.url),p=o.parse(c,e,t),u={id:`${e}_${t}_${a}`,base:e,quote:t,rate:p.rate,date:p.date||a,requestedDate:a,fetchedAt:ne(),source:p.source};return await W(d=>d.put("rates",u)).catch(()=>{}),u}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function Tn(e){let t=q();return e&&e<t?e:t}function ku(e,t,n){let a=`${e}_${t}_${n}`,s=_e("rates").find(i=>i.id===a);return!s||n===q()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function Ri(e,t){let n=_e("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function Ia(e,t){let n=await Mo("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await Mo(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:Tn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var Du=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],Su={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function Mt(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!Du.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function Cu(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function An(e,t,n,a){return`${e}:${t}:${Cu(n,a)}`}function Bi(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function It(e,t){let n=Su[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function Ui(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=It(e,t),c=Mt(r);if(c)throw new Error(c);let p=Number(a)||0;for(let u=0;u<1e5;u++){p+=1;let d=Bi(r,{prefix:i,dateISO:n,n:p,digits:o});if(!await s(d))return{number:d,n:p}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var Ce=e=>({...e,updatedAt:ne()}),$e=class extends Error{},O=e=>{throw new $e(e)},Ko={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},Ds=e=>be(e)&&e>="2000-01-01"&&e<="2100-12-31";async function Na(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=Mt(e[r]);o&&O(o)}String(e.name||"").trim()||O("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&O("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of _e("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=It(e,o),p=It(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===p.pattern&&String(c.prefix).trim().toLowerCase()===String(p.prefix).trim().toLowerCase()&&O(`${r.name} verwendet für ${Ko[o]} bereits das Präfix „${p.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=k("companies",e.id),a=Ce(e),s=null;t&&(s={id:await Eu(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=en(n,a,["updatedAt","createdAt"]);return await W(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function Oo(e,t){let n=k("companies",e);if(!n)return;let a=Ce({...n,archived:t});await W(async s=>{await s.put("companies",a),t&&y.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function Mi(e){return _e("invoices").some(t=>t.companyId===e)||_e("quotes").some(t=>t.companyId===e)||_e("expenses").some(t=>t.companyId===e)||_e("recurring").some(t=>t.companyId===e)}async function Fo(e){let t=k("companies",e);t&&(Mi(e)&&O("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await W(async n=>{await n.del("companies",e),y.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:zi(t)})}))}async function Eu(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+Ge()}var zi=e=>{let t=ye(e);return delete t.snapshot,t},qo={customer:"K",contact:"KO"},zo=e=>Se(e)?"customer":"contact",Zo=(e,t)=>new RegExp(`^${qo[e]}-\\d+$`).test(String(t||""));function un(e="customer",t=_e("customers")){let n=qo[e]||"K",a=new RegExp(`^${n}-(\\d+)$`),s=0;for(let i of t)for(let r of[i.number,...i.formerNumbers||[]]){let o=a.exec(r||"");o&&(s=Math.max(s,Number(o[1])))}return`${n}-${String(s+1).padStart(4,"0")}`}async function Ta(e){j(e)||O("Bitte ein Unternehmen oder einen Namen eintragen.");let t=k("customers",e.id),n=Ce({...e,kind:zo(e)}),a=t?zo(t):n.kind;t&&a==="customer"&&n.kind==="contact"&&_e("invoices").some(o=>o.customerId===n.id)&&O("Für diesen Kunden gibt es Rechnungen. Er bleibt Kunde."),t&&a!==n.kind&&Zo(a,t.number)&&(!String(n.number||"").trim()||n.number===t.number)&&(n.formerNumbers=[...t.formerNumbers||[],t.number],n.number=""),String(n.number||"").trim()||(n.number=un(n.kind,[..._e("customers").filter(o=>o.id!==n.id),{formerNumbers:n.formerNumbers||[]}]));let s=_e("customers").find(o=>o.id!==n.id&&o.number===n.number);s&&O(`Die Nummer ${n.number} ist bereits vergeben (${j(s)}).`);let i=en(t,n,["updatedAt","createdAt"]),r=n.kind==="customer"?"Kunde":"Kontakt";return await W(async o=>{await o.put("customers",n),await o.audit({action:t?a!==n.kind?n.kind==="customer"?"Kontakt zum Kunden gemacht":"Kunde als Kontakt geführt":`${r} geändert`:`${r} angelegt`,entity:"customers",entityId:n.id,label:j(n),prev:t?i.prev:null,next:i.next})}),n}function Li(e){return _e("invoices").some(t=>t.customerId===e)||_e("quotes").some(t=>t.customerId===e)||_e("recurring").some(t=>t.customerId===e)}async function Vo(e){let t=k("customers",e);t&&(Li(e)&&O("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await W(async n=>{let a=_e("notes").filter(i=>i.customerId===e),s=_e("appointments").filter(i=>i.customerId===e);for(let i of a)await n.del("notes",i.id);for(let i of s)await n.del("appointments",i.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:j(t),prev:{...t,...a.length||s.length?{related:{notes:a,appointments:s}}:{}}})}))}async function Go(e){k("customers",e.customerId)||O("Bitte einen Kunden wählen."),be(e.date)||O("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&O("Bitte etwas eintragen.");let t=k("notes",e.id),n=Ce({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=en(t,n,["updatedAt","createdAt"]);return await W(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${j(k("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function Ho(e){let t=k("notes",e);t&&await W(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:j(k("customers",t.customerId)),prev:t})})}var Lo=/^([01]\d|2[0-3]):[0-5]\d$/,Iu=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function jo(e){k("companies",e.companyId)||O("Bitte das Unternehmen wählen, über das der Termin läuft."),Ds(e.date)||O("Bitte ein gültiges Datum eintragen."),(!Lo.test(e.start||"")||!Lo.test(e.end||""))&&O("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&O("Das Ende liegt vor dem Beginn.");let t=k("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&O("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=k("appointments",e.id),a=Ce({...e,title:String(e.title||"").trim()||(t?`Termin mit ${j(t)}`:String(e.contactName||"").trim())});n&&Iu.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=en(n,a,["updatedAt","createdAt","sequence"]);return await W(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function Ss(e,t,n){let a=k("appointments",e);a||O("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||O("Unbekannter Status.");let s=Ce({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await W(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function Wo(e){let t=k("appointments",e);t&&await W(async n=>{await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function Cs(e){String(e.name||"").trim()||O("Bitte einen Namen für die Leistung eintragen.");let t=k("services",e.id),n=Ce(e),a=en(t,n,["updatedAt","createdAt"]);return await W(async s=>{await s.put("services",n),await s.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?a.prev:null,next:a.next})}),n}async function Jo(e){let t=k("services",e);t&&await W(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function ft(e,t){return xa({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function Pi(e){return be(e.issueDate)?Ae(e.issueDate,Number(e.paymentTermDays)||0):""}function ea(e){let t=Ce({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=Pi(t)),t.fx&&et.includes(t.currency)&&(t.fx=Ut(t.currency,t.fx.usdToEur,t.fx)),t.totals=Ct(t),t}function Qo(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new $e(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=ye(t[a]):delete e[a];return n}async function Es(e){let t=k("invoices",e.id);t&&t.status!=="draft"&&O("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&O("Nur Entwürfe können gespeichert werden.");let n=ea(e);return await W(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new $e("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");Qo(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${j(k("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function Ki(e){let t=k("invoices",e);if(t){if(t.number||t.status!=="draft"){await Oi(e);return}await W(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new $e("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await Yo(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:zi(t)})})}}async function Oi(e){let t=k("invoices",e);return t?t.type==="credit_note"?qi(e):t.status==="draft"&&!t.number?(await Ki(e),{number:""}):W(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await _i(n,r,"credit"));for(let p of s)await n.del("payments",p.id);for(let p of i)await n.del("reminders",p.id);await n.del("invoices",e);let o=await _i(n,a,"invoice");await Yo(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:j(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:Ne(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:ye(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function Is(e,t="invoice"){let n=[],a=k("companies",e.companyId);a||n.push("Unternehmen auswählen"),k("customers",e.customerId)||n.push("Kunde auswählen"),be(e.issueDate)?Ds(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!be(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&be(e.issueDate)&&e.fx.forDate!==Tn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),et.includes(e.currency)||n.push("Währung wählen"),a&&k("customers",e.customerId)){let i=_o(yt(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=Mt(It(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function Aa(e,t,n){if(!e||!be(n))return"";let{pattern:a}=It(e,t);if(Mt(a))return"";let s=An(e.id,t,a,n),i=k("counters",s),r=new Set([..._e("invoices"),..._e("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await Ui(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Fi(e,t,n,a){let{pattern:s}=It(t,n),i=An(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await Ui(t,n,a,r.last,async p=>!!await e.byIndex("invoices","number",p)||!!await e.byIndex("quotes","number",p));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function _i(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!be(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=It(i,n);if(Mt(o))return null;let p=An(i.id,n,o,t.issueDate),u=await e.get("counters",p);if(!u)return null;for(let d=Number(u.last)||0;d>=1;d--)if(Bi(o,{prefix:r,dateISO:t.issueDate,n:d,digits:c})===t.number){a={key:p,n:d};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function Yo(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===Kt(t.issueDate,Rs(n),n.anchorDay)&&await e.put("recurring",Ce({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",Ce({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function Xo(e,t,n,a){let{pattern:s}=It(e,t),i=An(e.id,t,s,n),r=k("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await W(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${Ko[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function el(e,t){return{company:ye(e),customer:ye(t),at:ne()}}async function Ra(e){let t=Is(e,"invoice");t.length&&O(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=k("companies",e.companyId),a=k("customers",e.customerId),s=k("invoices",e.id);s&&s.status!=="draft"&&O("Diese Rechnung ist bereits erstellt.");let i=ea(e);return W(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new $e("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=Qo(i,o),p=c?i.reopened||{}:null;if(!c){let d=await Fi(r,n,"invoice",i.issueDate);i.number=d.number,i.numberRef=d.ref}i.status="issued",i.finalizedAt=ne(),i.sentAt=null;let u=await r.get("customers",i.customerId)||a;if(!Se(u)){let d=u.number,m=Ce({...u,kind:"customer"});Zo("contact",d)&&(m.formerNumbers=[...u.formerNumbers||[],d],m.number=un("customer",[..._e("customers").filter(f=>f.id!==u.id),{formerNumbers:m.formerNumbers}])),await r.put("customers",m),await r.audit({action:"Kontakt zum Kunden gemacht",entity:"customers",entityId:m.id,label:j(m),prev:{kind:"contact",number:d},next:{kind:"customer",number:m.number,reason:"Erste Rechnung"}}),u=m}if(i.snapshot=el(n,u),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:p.totalCents,currency:p.currency,issueDate:p.issueDate,customer:p.customer,usdToEur:p.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:j(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let d=await r.get("quotes",i.quoteId);d&&d.status!=="invoiced"&&await r.put("quotes",Ce({...d,status:"invoiced",invoiceId:i.id}))}return i})}async function tl(e){let t=k("invoices",e);return t||O("Rechnung nicht gefunden."),t.type==="credit_note"&&O("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||O("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),W(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new $e("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:j(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=Ce({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:ye(a)},next:{status:"draft"}}),o})}async function Rn(e,t=!0){let n=k("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=Ce({...n,status:t?"sent":"issued",sentAt:t?ne():null});await W(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function Ns(e,t,n){let a=k(e,t);a&&await W(async s=>{await s.put(e,Ce({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function Ba(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=k("invoices",e);r||O("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&O("Zu diesem Beleg können keine Zahlungen erfasst werden."),be(t)||O("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||O("Bitte einen Zahlungsbetrag größer als null eintragen."),o>Gt(r,qe(e))&&O("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:Ge(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await W(async p=>{let u=await p.get("invoices",e),d=await p.allByIndex("payments","invoiceId",e);if(!u||u.type==="credit_note"||["draft","cancelled","credited"].includes(u.status))throw new $e("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>Gt(u,d))throw new $e("Der Betrag ist höher als der offene Rechnungsbetrag.");await p.put("payments",c);let m=[...d,c];await p.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:_t(u,d,q()),paidCents:Ne(d)},next:{status:_t(u,m,q()),paidCents:Ne(m),amountCents:o,date:t,method:a}});let f=String(i||"").trim();f&&(await p.put("invoices",Ce({...u,clarify:{note:f,at:ne()}})),await p.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:u.clarify?{note:u.clarify.note}:null,next:{note:f}}))}),c}async function nl(e,{date:t,amountCents:n,method:a,note:s}){k("payments",e)||O("Zahlung nicht gefunden."),be(t)||O("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||O("Bitte einen Betrag größer als null eintragen."),W(async o=>{let c=await o.get("payments",e);if(!c)throw new $e("Diese Zahlung gibt es nicht mehr.");let p=c.amountCents<0,u=await o.get("invoices",c.invoiceId),d=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(g=>g.id!==e),m=p?-r:r,f=Ne(d)+m;if(f<0)throw new $e(p?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let $=u&&u.totals?u.totals.totalCents:null;if(!p&&$!=null&&f>$)throw new $e("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let h={...c,date:t,amountCents:m,method:a||"",note:s||"",updatedAt:ne()},v=en(c,h,["updatedAt","createdAt"]);return Object.keys(v.next).length&&(await o.put("payments",h),await o.audit({action:p?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:u?u.number:"",prev:v.prev,next:v.next})),h})}async function al(e,t){let n=String(t||"").trim();return n||O("Bitte kurz notieren, was zu klären ist."),W(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new $e("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=Ce({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function sl(e,t){return W(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=Ce({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function il(e,{date:t,amountCents:n,method:a,note:s}){let i=k("invoices",e);i||O("Rechnung nicht gefunden."),i.status!=="credited"&&O("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),be(t)||O("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||O("Bitte einen Betrag größer als null eintragen.");let o={id:Ge(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await W(async c=>{let p=await c.allByIndex("payments","invoiceId",e);if(r>Ne(p))throw new $e("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:Ne(p)},next:{paidCents:Ne(p)-r,amountCents:-r,date:t,method:a}})}),o}async function rl(e){let t=k("payments",e);if(!t)return;let n=k("invoices",t.invoiceId);await W(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(Ne(s)<0)throw new $e("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function Ts(e,t){let n=k("invoices",e);n&&(n.type==="credit_note"&&O("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||O("Diese Rechnung kann nicht storniert werden."),Ne(qe(e))>0&&O("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await W(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new $e("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(Ne(i)>0)throw new $e("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=Ce({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function ol(e){return W(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new $e("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=Ce({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function As(e,t){let n=k("invoices",e);n||O("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&O("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=k("companies",n.companyId);a||O("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=q(),i={...kt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:Ge(),qty:-Number(r.qty)})),discount:ye(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:ye(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=Ct(i),W(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new $e("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Fi(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:ye(a),customer:ye(n.snapshot?n.snapshot.customer:k("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",Ce({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function qi(e){let t=k("invoices",e);t||O("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||O("Zu dieser Rechnung gibt es keine Gutschrift."),W(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new $e("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(p=>p.amountCents<0))throw new $e(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await _i(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=Ce({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:ye(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function ll(e){let t=k("companies",e.companyId);return{...kt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:Ge()})),discount:ye(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function cl(e){let t=k("quotes",e.id);t&&t.status!=="draft"&&O("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=ea(e);return await W(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new $e("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${j(k("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function ul(e){let t=k("quotes",e);t&&(t.status!=="draft"&&O("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await W(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new $e("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:zi(t)})}))}async function Ua(e){let t=Is(e,"quote");t.length&&O(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=k("companies",e.companyId),a=k("customers",e.customerId),s=k("quotes",e.id);s&&s.status!=="draft"&&O("Dieses Angebot ist bereits erstellt.");let i=ea(e);return W(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new $e("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Fi(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=el(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var Po={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function Bn(e,t){let n=k("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!Po[t])return;let a=Ce({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await W(async s=>{await s.put("quotes",a),await s.audit({action:Po[t],entity:"quotes",entityId:e,label:n.number,prev:{status:n.status},next:{status:t}})})}async function dl(e){let t=k("quotes",e);t||O("Angebot nicht gefunden."),t.status==="draft"&&O("Bitte das Angebot zuerst erstellen."),t.invoiceId&&k("invoices",t.invoiceId)&&O("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=k("companies",t.companyId);n||O("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=k("customers",t.customerId),s=ea({...kt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:Ge()})),discount:ye(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await W(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new $e("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new $e("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",Ce({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:t.number,next:{invoiceDraftId:s.id}})}),s}async function dn(e){let t=k("expenses",e.id),n=Ce({...e});n.status!=="review"&&(k("companies",n.companyId)||O("Bitte ein Unternehmen auswählen."),Ds(n.invoiceDate)||O("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&O("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||O("Bitte einen Lieferanten eintragen."),n.paymentDate&&!Ds(n.paymentDate)&&O("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||O("Bitte den Wechselkurs laden oder eintragen."));let a=en(t,n,["updatedAt","createdAt","ai"]);return await W(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function ml(e){let t=k("expenses",e);t&&await W(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function Zi({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:Ge(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await W(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function Vi(e){await W(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function Rs(e){let t=vn.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function _a(e){String(e.name||"").trim()||O("Bitte der Vorlage einen Namen geben."),k("companies",e.companyId)||O("Bitte ein Unternehmen auswählen."),k("customers",e.customerId)||O("Bitte einen Kunden auswählen."),(e.items||[]).length||O("Bitte mindestens eine Position hinzufügen."),be(e.nextDate)||O("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!be(e.endDate)&&O("Bitte das Enddatum prüfen.");let t=k("recurring",e.id),n=Ce({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=Ct(n),await W(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function pl(e){let t=k("recurring",e);t&&await W(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var ta=(e,t=q())=>!!e&&e.active&&be(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),na=e=>!!e.endDate&&be(e.nextDate)&&e.nextDate>e.endDate;async function Gi(e,{early:t=!1}={}){let n=k("recurring",e);n||O("Vorlage nicht gefunden."),na(n)&&O("Diese Vorlage hat ihr Enddatum erreicht."),n.active||O("Diese Vorlage ist pausiert."),!t&&n.nextDate>q()&&O("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=k("companies",n.companyId),s=k("customers",n.customerId);(!a||!s)&&O("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=Rs(n),r=n.nextDate,o=Ae(Kt(r,i,n.anchorDay),-1),c=ea({...kt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:Ge()})),discount:ye(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id}),p=Kt(r,i,n.anchorDay),u=!!n.endDate&&p>n.endDate,d=Ce({...n,nextDate:p,generated:(n.generated||0)+1,lastRunAt:ne(),active:u?!1:n.active,endedByRun:u});return await W(async m=>{let f=await m.get("recurring",n.id);if(!f||f.nextDate!==n.nextDate||!f.active)throw new $e("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",c),await m.put("recurring",d),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:p}})}),c}async function fl(e,t,n){let a=k("invoices",e);if(!a)return null;let s={id:Ge(),invoiceId:e,level:t,date:q(),note:n||"",createdAt:ne()};return await W(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}async function Hi(){y.companies.length||(await Na(wa({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await Na(wa({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await W(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function gl(){y.settings.seeded||y.companies.length||await Hi()}function Nu(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Ma(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=Nu();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function Tu(){let e=Te(null),[t,n]=S(0);return li(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function Au(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,p=Math.ceil(Math.max(t,0)/o)*o,u=[];for(let d=c;d<=p+o/2;d+=o)u.push(Math.round(d/o)*o);return{lo:c,hi:p,step:o,ticks:u}}function ji(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function za({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=Tu(),[p,u]=S(null),d={top:12,right:8,bottom:26,left:56},m=0,f=0;for(let A of e)if(n==="stacked"){let D=0,R=0;for(let z of t){let H=A.values[z.id]||0;H>=0?D+=H:R+=H}m=Math.max(m,D),f=Math.min(f,R)}else for(let D of t){let R=A.values[D.id]||0;m=Math.max(m,R),f=Math.min(f,R)}let $=Au(f,m),h=Math.max(c-d.left-d.right,10),v=i-d.top-d.bottom,g=A=>d.top+v-(A-$.lo)/($.hi-$.lo||1)*v,b=h/Math.max(e.length,1),C=g(0),x=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(h/46)))),N=[];e.forEach((A,D)=>{let R=d.left+D*b;if(n==="stacked"){let z=Math.min(24,Math.max(b-10,3)),H=R+(b-z)/2,F=C,L=C,ee=t.filter(de=>(A.values[de.id]||0)!==0),M=[...ee].reverse().find(de=>A.values[de.id]>0),te=[...ee].reverse().find(de=>A.values[de.id]<0);for(let de of ee){let B=A.values[de.id],Ee=Math.abs(g(B)-C);if(B>0){let Pe=F-Ee,Un=M&&M.id===de.id,Xs=Un?0:Math.min(2,Ee-1);N.push({d:Un?ji(H,Pe,z,Ee,4,!0):`M${H},${Pe+Xs}H${H+z}V${F}H${H}Z`,color:de.color,key:`${A.key}-${de.id}`}),F=Pe}else{let Pe=te&&te.id===de.id,Un=Pe?0:Math.min(2,Ee-1);N.push({d:Pe?ji(H,L,z,Ee,4,!1):`M${H},${L}H${H+z}V${L+Ee-Un}H${H}Z`,color:de.color,key:`${A.key}-${de.id}`}),L+=Ee}}}else{let z=t.length,H=Math.min(18,Math.max((b-10-(z-1)*2)/z,2)),F=z*H+(z-1)*2;t.forEach((L,ee)=>{let M=A.values[L.id]||0;if(!M)return;let te=Math.abs(g(M)-C),de=R+(b-F)/2+ee*(H+2);N.push({d:ji(de,M>0?C-te:C,H,te,4,M>0),color:L.color,key:`${A.key}-${L.id}`})})}});let E=p!=null?e[p]:null,w=p!=null?d.left+p*b+b/2:0,G=w>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${$.ticks.map(A=>l`<g key=${A}>
        <line x1=${d.left} x2=${c-d.right} y1=${g(A)} y2=${g(A)} class=${A===0?"chart-base":"chart-grid"} />
        <text x=${d.left-8} y=${g(A)+4} text-anchor="end" class="chart-tick">${(s||a)(A)}</text>
      </g>`)}
      ${p!=null&&l`<rect x=${d.left+p*b} y=${d.top} width=${b} height=${v} class="chart-hover" />`}
      ${N.map(A=>l`<path key=${A.key} d=${A.d} fill=${A.color} />`)}
      ${e.map((A,D)=>D%x===0&&l`<text key=${A.key} x=${d.left+D*b+b/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${A.label}</text>`)}
      ${e.map((A,D)=>l`<rect key=${`hit-${A.key}`} x=${d.left+D*b} y=${d.top} width=${b} height=${v+d.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${A.title||A.label}: ${t.map(R=>`${R.label} ${a(A.values[R.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>u(D)} onMouseLeave=${()=>u(null)}
        onFocus=${()=>u(D)} onBlur=${()=>u(null)} />`)}
    </svg>`}
    ${E&&l`<div class=${`chart-tip${G?" is-left":""}`} style=${`left:${w}px;top:${d.top}px`}>
      <div class="chart-tip-title">${E.title||E.label}</div>
      ${t.filter(A=>t.length===1||(E.values[A.id]||0)!==0).map(A=>l`<div class="chart-tip-row" key=${A.id}>
        <span class="chart-key" style=${`background:${A.color}`}></span>
        <strong>${a(E.values[A.id]||0)}</strong><span>${A.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((A,D)=>A+(E.values[D.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function Ru({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function La({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=S(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${Ru} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,p)=>l`<td class=${p?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function Ht({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}var mn=(e,t)=>!t||e.companyId===t;function hl(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function nt(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!Ci(i)||!i.totals||!mn(i,t)||a&&i.customerId!==a||n&&!Ot(i.issueDate,n))continue;let r=i.totals,o=mt(r.netCents,i.currency,i.fx)||0,c=Et(r.netCents,i.currency,i.fx)||0,p=mt(r.taxCents,i.currency,i.fx)||0,u=Et(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:p,taxEUR:u,totalUSD:o+p,totalEUR:c+u})}return s}function aa(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!mn(s,t)||n&&!Ot(s.invoiceDate,n))continue;let i=mt(s.netCents,s.currency,s.fx)||0,r=Et(s.netCents,s.currency,s.fx)||0,o=mt(s.taxCents,s.currency,s.fx)||0,c=Et(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function Bs(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&mn(r,t)&&(n&&!Ot(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:mt(i.amountCents,r.currency,r.fx)||0,eur:Et(i.amountCents,r.currency,r.fx)||0}))}return s}var se=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function pn(e,{companyId:t}={},n){let a=hl(e.payments),s=[];for(let i of e.invoices){if(!mn(i,t))continue;let r=a.get(i.id)||[],o=Gt(i,r);if(o<=0)continue;let c=_t(i,r,n),p=i.dueDate&&i.dueDate<n?Ln(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:p,openCents:o,paidCents:Ne(r),openUSD:mt(o,i.currency,i.fx)||0,openEUR:Et(o,i.currency,i.fx)||0,bucket:p<=0?"current":p<=30?"d30":p<=60?"d60":p<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var $l=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function bl(e,t,n){let a=ut("month",n),s=ut("quarter",n),i=ut("year",n),r=ut("lastMonth",n),o=nt(e,{companyId:t,range:i}),c=b=>o.filter(C=>Ot(C.date,b)),p=c(a),u=c(s),d=nt(e,{companyId:t,range:r}),m=pn(e,{companyId:t},n),f=m.filter(b=>b.status==="overdue"),$=hl(e.payments),h=o.filter(b=>b.inv.type!=="credit_note"&&b.inv.status!=="credited"),v=h.filter(b=>_t(b.inv,$.get(b.inv.id)||[],n)==="paid"),g=e.customers.filter(b=>b.active!==!1&&b.kind!=="contact");if(t){let b=new Set([...e.invoices.filter(C=>C.companyId===t).map(C=>C.customerId),...(e.quotes||[]).filter(C=>C.companyId===t).map(C=>C.customerId)]);g=g.filter(C=>b.has(C.id))}return{month:{usd:se(p,"netUSD"),eur:se(p,"netEUR"),count:p.length},lastMonth:{usd:se(d,"netUSD"),eur:se(d,"netEUR")},quarter:{usd:se(u,"netUSD"),eur:se(u,"netEUR")},year:{usd:se(o,"netUSD"),eur:se(o,"netEUR")},open:{count:m.length,usd:se(m,"openUSD"),eur:se(m,"openEUR")},overdue:{count:f.length,usd:se(f,"openUSD"),eur:se(f,"openEUR")},paid:{count:v.length,usd:se(v,"totalUSD"),eur:se(v,"totalEUR")},average:{usd:h.length?Math.round(se(h,"netUSD")/h.length):0,eur:h.length?Math.round(se(h,"netEUR")/h.length):0,count:h.length},activeCustomers:g.length}}function Pa(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=nt(e,{companyId:t,range:i}),o=aa(e,{companyId:t,range:i}),c=Bs(e,{companyId:t,range:i});return n.map(p=>{let u=r.filter(h=>va(h.date)===p),d=o.filter(h=>va(h.date)===p),m=c.filter(h=>va(h.date)===p),f={},$={};for(let h of u)f[h.inv.companyId]=(f[h.inv.companyId]||0)+h.netUSD,$[h.inv.companyId]=($[h.inv.companyId]||0)+h.netEUR;return{key:p,revenueUSD:se(u,"netUSD"),revenueEUR:se(u,"netEUR"),expenseUSD:se(d,"netUSD"),expenseEUR:se(d,"netEUR"),profitUSD:se(u,"netUSD")-se(d,"netUSD"),profitEUR:se(u,"netEUR")-se(d,"netEUR"),paymentsUSD:se(m,"usd"),paymentsEUR:se(m,"eur"),taxUSD:se(u,"taxUSD"),taxEUR:se(u,"taxEUR"),invoices:u.length,byCompany:f,byCompanyUSD:f,byCompanyEUR:$}})}function Wi(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function vl(e,t,n){let a=nt(e,t);return n==="quarter"?Wi(a,Xr):n==="year"?Wi(a,s=>String(os(s))):Wi(a,va)}function Ka(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of nt(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:j(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Oa(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of nt(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Fa(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of nt(e,t)){let i=new Map((s.inv.totals.lines||[]).map(u=>[u.id,u])),r=(s.inv.items||[]).filter(u=>i.has(u.id)),o=r.map(u=>{let d=i.get(u.id);return d.netCents!=null?d.netCents:d.cents}),c=St(s.netUSD,o),p=St(s.netEUR,o);r.forEach((u,d)=>{let m=u.serviceId?n.get(u.serviceId):null,f=m?`s:${m.id}`:`n:${String(u.name||"").trim().toLowerCase()}`,$=a.get(f)||{key:f,name:m?m.name:u.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};$.usd+=c[d]||0,$.eur+=p[d]||0,$.qty+=Number(u.qty)||0,a.set(f,$)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Ji(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let p=s.get(o),u=a(c),d=c.serviceId?n.get(c.serviceId):null;return p.has(u)||p.set(u,{key:u,name:d?d.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:d&&d.category||"",unit:c.unit||d&&d.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),p.get(u)};for(let o of nt(e,t)){let c=new Map((o.inv.totals.lines||[]).map($=>[$.id,$])),p=(o.inv.items||[]).filter($=>c.has($.id)),u=p.map($=>{let h=c.get($.id);return h.netCents!=null?h.netCents:h.cents}),d=St(o.netUSD,u),m=St(o.netEUR,u),f=o.inv.type==="credit_note";p.forEach(($,h)=>{let v=i(o.inv.customerId,$);v.usd+=d[h]||0,v.eur+=m[h]||0,v.qty+=Number($.qty)||0,f||(v.invoices.add(o.inv.id),v.companyIds.add(o.inv.companyId),(!v.first||o.date<v.first)&&(v.first=o.date),o.date>v.last&&(v.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&mn(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let p=i(o.customerId,c);p.running=!0,p.interval=o.interval,p.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(p=>({...p,invoices:p.invoices.size,companyIds:[...p.companyIds]})).sort((p,u)=>Number(u.running)-Number(p.running)||u.usd-p.usd));return r}function yl(e,t){let n=new Map;for(let a of nt(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function Qi(e,t){let n=new Map;for(let a of aa(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function wl(e,t,n){let a=nt(e,t),s=aa(e,t),i=Bs(e,t),r=pn(e,{companyId:t.companyId},n),o=se(a,"netUSD"),c=se(a,"netEUR"),p=se(s,"netUSD"),u=se(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(d=>d.inv.type!=="credit_note").length},expenses:{usd:p,eur:u,count:s.length},profit:{usd:o-p,eur:c-u},payments:{usd:se(i,"usd"),eur:se(i,"eur"),count:i.length},receivables:{usd:se(r,"openUSD"),eur:se(r,"openEUR"),count:r.length},taxCollected:{usd:se(a,"taxUSD"),eur:se(a,"taxEUR")},taxPaid:{usd:se(s,"taxUSD"),eur:se(s,"taxEUR")},taxBalance:{usd:se(a,"taxUSD")-se(s,"taxUSD"),eur:se(a,"taxEUR")-se(s,"taxEUR")}}}function xl(e,t){let n=new Map;for(let i of nt(e,t)){let r=i.inv.totals.taxGroups||[],o=St(i.taxUSD,r.map(d=>d.taxCents)),c=St(i.netUSD,r.map(d=>d.netCents)),p=St(i.taxEUR,r.map(d=>d.taxCents)),u=St(i.netEUR,r.map(d=>d.netCents));r.forEach((d,m)=>{let f=`${d.rate}|${i.inv.currency}`,$=n.get(f)||{rate:d.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};$.netCents+=d.netCents,$.taxCents+=d.taxCents,$.netUSD+=c[m]||0,$.taxUSD+=o[m]||0,$.netEUR+=u[m]||0,$.taxEUR+=p[m]||0,n.set(f,$)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=aa(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:se(s,"taxUSD"),paidEUR:se(s,"taxEUR")}}function Yi(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>Ci(o)&&mn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&mn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&mn(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return eo(a,s)}var jt=()=>({invoices:y.invoices,quotes:y.quotes,payments:y.payments,expenses:y.expenses,customers:y.customers,companies:y.companies,services:y.services,recurring:y.recurring}),Nt=()=>{let e=xe();return e?e.id:null};function Us(e){return _t(e,qe(e.id),q())}function qa({inv:e}){let t=Us(e),n=ya[t]||ya.draft;return l`<span class="badges"><${Ue} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${Ue} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function Za({quote:e}){let t=Cn(e,q()),n=fi[t]||fi.draft;return l`<${Ue} tone=${n.tone}>${n.label}<//>`}var ie=()=>y.settings.displayCurrency==="EUR"?"EUR":"USD",fn=()=>ie()==="USD"?"EUR":"USD",T=(e,t="",n=ie())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},De=(e,t="")=>T(e,t,fn()),X=e=>V(e,ie()),ze=e=>V(e,fn()),at=(e,t,n)=>Vt(e,t,ie(),n);function Wt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?Et(n,e.currency,e.fx):mt(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${V(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${V(s,a)}</span>`}
  </span>`}function Oe({id:e}){let t=k("companies",e);return t?l`<span class="co-tag"><${ks} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Le(e){let t=k("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return j(t)||"–"}var sa=e=>Gt(e,qe(e.id));var Va=e=>String(e).padStart(2,"0");function kl(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function Cl(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function Dl(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!Cl(n))return new Date(c);let p=kl(c,n),u=c-p*6e4,d=kl(u,n);return d!==p&&(u=c-d*6e4),new Date(u)}function Ga(e,t,n="de"){if(!Cl(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function Ms(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function El(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function zs(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var ia=e=>(qn.find(t=>t.id===e)||{}).label||"",Sl=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function ra(e){let t=Dl(e.date,e.start,e.timeZone),n=Dl(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function Bu(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=ia(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function Uu(e,t){return String(e.contactName||"").trim()||(t?dt(t)||j(t):"")}function Il(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=ra(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),p={CONTACT:Uu(e,n),CUSTOMER:n?j(n):String(e.contactName||""),TITLE:c,DATE:zs(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:Ga(e.timeZone,r,s),MEETING:Bu(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:ia(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},u=d=>d.replace(/[ \t]+,/g,",").split(`
`).map(m=>m.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:u($t(i.subject,p)).replace(/\n/g," "),body:u($t(i.body,p)),vars:p}}var Xi=e=>`${e.getUTCFullYear()}${Va(e.getUTCMonth()+1)}${Va(e.getUTCDate())}T${Va(e.getUTCHours())}${Va(e.getUTCMinutes())}${Va(e.getUTCSeconds())}Z`,_s=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function _u(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function Nl(e,{summary:t,description:n}){let{start:a,end:s}=ra(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?Sl(i)?i:ia(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${Xi(new Date)}`,`DTSTART:${Xi(a)}`,`DTEND:${Xi(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${_s(t)}`,n?`DESCRIPTION:${_s(n)}`:"",r?`LOCATION:${_s(r)}`:"",Sl(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${_s(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(_u).join(`\r
`)}\r
`}var Ls=null;function Tl(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function Mu(){return Ls||(Ls=(async()=>{if(await Tl("js/vendor/pdfmake.min.js"),await Tl("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw Ls=null,e})),Ls}var ja="#16191d",Je="#5c636b",er="#d9dde1",Ha=50;function zu(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function Wa(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:ja,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:Je,margin:[0,0,0,6]},...e.recipient.map((f,$)=>({text:f,fontSize:10.5,bold:$===0})),...e.recipientExtra.map(f=>({text:f,fontSize:8.5,color:Je,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([f,$])=>[{text:f,color:Je,fontSize:9},{text:$,alignment:"right",fontSize:9,bold:f===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(f=>({text:f.label,fontSize:8,color:Je,alignment:f.align,noWrap:!0})),c=e.rows.map(f=>r.map($=>{if($.key==="desc"){let h=[{text:f.name,bold:!0}];return f.description&&h.push({text:f.description,color:Je,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:h}}return{text:f[$.key]||"",alignment:$.align,noWrap:$.key!=="unit"}})),p={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(f=>f.width),body:[o,...c]},layout:{hLineWidth:(f,$)=>f===0?0:f===1?1.2:.5,hLineColor:f=>f===1?n:er,vLineWidth:()=>0,paddingLeft:f=>f===0?0:7,paddingRight:(f,$)=>f===$.table.widths.length-1?0:7,paddingTop:f=>f===0?0:6,paddingBottom:f=>f===0?5:6}},u={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(f=>[{text:f.label,bold:!!f.strong,fontSize:f.strong?11.5:9.5,color:f.strong?ja:Je},{text:f.value,bold:!!f.strong,fontSize:f.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(f,$)=>f===$.table.body.length-1&&$.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(f,$)=>f===$.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:Je,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:Je,margin:[0,1.5,0,0]}]:[]]:[]]}]},d=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:Je}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&d.push({text:e.subtitle,color:Je,margin:[0,2,0,0]}),e.intro&&d.push({text:e.intro,margin:[0,12,0,0]}),d.push(p,u),e.notes.length&&d.push({stack:e.notes.map(f=>({text:f,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&d.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([f,$])=>[{text:f,color:Je},{text:$}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:f=>f===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(f=>({text:f,margin:[0,4,0,0]}))]});let m=zu(e);return{pageSize:"A4",pageMargins:[Ha,46,Ha,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:ja},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(f,$)=>({margin:[Ha,0,Ha,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*Ha,y2:0,lineWidth:.5,lineColor:er}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(h=>({width:"*",stack:h.map((v,g)=>({text:v,fontSize:7.5,color:Je,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:Je,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",f).replace("{N}",$),fontSize:7,color:Je,alignment:"right",margin:[0,5,0,0]}]}),content:d}}async function oa(e){let t=await Mu();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function st(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Al({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(u=>({text:u.label,bold:!0,fontSize:8,color:Je,alignment:u.align||"left"})),...a.map(u=>u.map((d,m)=>({text:d==null?"":String(d),alignment:n[m].align||"left"})))];s&&o.push(s.map((u,d)=>({text:u==null?"":String(u),bold:!0,alignment:n[d].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:ja},info:{title:e,creator:"BBC Finance"},footer:(u,d)=>({text:`Seite ${u} von ${d}`,alignment:"right",fontSize:7,color:Je,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:Je,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((u,d)=>d===0?"*":"auto"),body:o},layout:{hLineWidth:(u,d)=>u===0?0:u===1||s&&u===d.table.body.length-1?1:.5,hLineColor:(u,d)=>u===1||s&&u===d.table.body.length-1?ja:er,vLineWidth:()=>0,paddingLeft:u=>u===0?0:6,paddingRight:(u,d)=>u===d.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},p=await oa(c);st(p,i)}var tr=/\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/,Ps=/^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i,Rl={deutschland:"Deutschland",germany:"Deutschland",österreich:"Österreich",oesterreich:"Österreich",austria:"Österreich",schweiz:"Schweiz",switzerland:"Schweiz",suisse:"Schweiz",liechtenstein:"Liechtenstein",luxemburg:"Luxemburg",luxembourg:"Luxemburg",niederlande:"Niederlande",netherlands:"Niederlande",belgien:"Belgien",belgium:"Belgien",frankreich:"Frankreich",france:"Frankreich",italien:"Italien",italy:"Italien",spanien:"Spanien",spain:"Spanien","vereinigte arabische emirate":"Vereinigte Arabische Emirate","united arab emirates":"Vereinigte Arabische Emirate",uae:"Vereinigte Arabische Emirate","united kingdom":"Vereinigtes Königreich",usa:"USA","united states":"USA"},Bl={D:"Deutschland",DE:"Deutschland",A:"Österreich",AT:"Österreich",CH:"Schweiz"},lt=e=>String(e||"").replace(/[   ]/g," ").replace(/[ \t]+/g," ").trim(),Lu=(e,t)=>lt(e.replace(t,"").replace(/^[\s:.\-–—]+/,""));function Pu(e){let n=lt(e).replace(/\s*\(.*?\)\s*/g," ").replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i,"").trim().split(/\s+/).filter(i=>!/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(i));if(!n.length)return{firstName:"",lastName:""};if(n.length===1)return{firstName:"",lastName:n[0]};let a=/^(von|van|de|der|den|zu|zur|vom|del|la)$/i,s=n.length-1;for(;s>1&&a.test(n[s-1]);)s-=1;return{firstName:n.slice(0,s).join(" "),lastName:n.slice(s).join(" ")}}var Ku=e=>lt(String(e).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/,"");function Ml(e){let n=String(e||"").replace(/\r/g,"").split(`
`).map(lt).filter(Boolean),a={},s=[],i=n.join(`
`),r=i.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi,"@").replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi,"."),o=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(r);o&&(a.email=o[0].toLowerCase());let c=/\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(i)||/\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(i);c?a.website=c[0].replace(/[.,;)]+$/,""):a.email&&!/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(a.email)&&(a.website=`www.${a.email.split("@")[1]}`),n.forEach((m,f)=>{let $=n[f+1]||"";if(!a.phone&&/^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(m)&&!/fax/i.test(m.split(/[:]/)[0])){let h=/(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(m);h&&(a.phone=lt(h[1]).replace(/–/g,"-"))}if(!a.vatId&&/(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(m)){let h=/\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/,v=h.exec(m.replace(/^[^:]*:\s*/,""))||(/:\s*$|umsatzsteuergesetz:?$|id$/i.test(m)?h.exec($):null);v&&(a.vatId=lt(v[1]))}if(!a.taxId&&/^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(m)&&!/ust|umsatzsteuer|vat/i.test(m)){let h=/([\d][\d\s/]{7,}\d)/.exec(m);h&&(a.taxId=lt(h[1]))}if(!a.lastName){let h=/^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(m);if(h){let v=Lu(m,h[0]);v||(v=$),v=v.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i,"").replace(/^(herrn?|frau)\s+/i,"");let g=Ku(v);g&&!tr.test(g)&&/^[\p{L}][\p{L}.' -]+$/u.test(g)&&g.split(/\s+/).length<=5&&(Object.assign(a,Pu(g)),s.push(`${/inhaber|owner/i.test(h[0])?"Inhaber":"Vertreten durch"}: ${lt(v)}`))}}/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(m)&&(s.some(h=>h.includes(m))||s.push(m))});let p=/^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u,u=-1;for(let m=0;m<n.length;m++){let f=n[m].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i,""),$=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(f);if($&&!Ps.test($[1])){a.street=lt($[1]).replace(/,$/,""),a.houseNo=lt($[2]),a.zip=$[4],a.city=lt($[5]),$[3]&&(a.country=Bl[$[3].toUpperCase()]),u=m;break}let h=p.exec(f);if(h&&!/^(tel|fax|phone)/i.test(f)){a.zip=h[2],a.city=lt(h[3]),h[1]&&(a.country=Bl[h[1].toUpperCase()]),u=m;let v=n[m-1]||"",g=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(v.replace(/,$/,""));g&&!Ps.test(v)&&!tr.test(v)?(a.street=lt(g[1]),a.houseNo=lt(g[2])):/^(postfach|p\.?o\.? box)/i.test(v)&&(a.street=v);break}}if(!a.country){let m=[n[u+1],...n].filter(Boolean);for(let f of m){let $=f.toLowerCase().replace(/[.,]/g,"").trim();if(Rl[$]){a.country=Rl[$];break}}}let d=n.find(m=>tr.test(m)&&!Ps.test(m)&&m.length<90&&!/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(m));if(d)a.company=d.replace(/^(firma|company|unternehmen)\s*:\s*/i,"");else if(u>0)for(let m=a.street&&!n[u].includes(",")?u-2:u-1;m>=0&&m>=u-5;m--){let f=n[m];if(!(!f||Ps.test(f)||f.includes(":")||/\d{3,}|@|www\./i.test(f))){a.company=f;break}}for(let m of Object.keys(a))a[m]||delete a[m];return{fields:a,extra:s}}var Ou="https://api.anthropic.com/v1/messages",Fu=["company","firstName","lastName","street","houseNo","zip","city","region","country","email","phone","website","taxId","vatId"],Ul={name:"record_contact",description:"Erfasst die Kontaktdaten aus einem Impressum.",input_schema:{type:"object",properties:{company:{type:"string",description:"Firmenname inklusive Rechtsform, wie im Impressum."},firstName:{type:"string",description:"Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt."},lastName:{type:"string",description:"Nachname dieser Person."},street:{type:"string",description:"Straße ohne Hausnummer."},houseNo:{type:"string",description:"Hausnummer."},zip:{type:"string"},city:{type:"string"},region:{type:"string",description:"Bundesland, Kanton oder Emirat, nur wenn genannt."},country:{type:"string",description:"Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ)."},email:{type:"string"},phone:{type:"string",description:"Telefonnummer (nicht Fax)."},website:{type:"string"},taxId:{type:"string",description:"Steuernummer, nur wenn genannt."},vatId:{type:"string",description:"Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt."},register:{type:"string",description:"Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt."},found:{type:"boolean",description:"false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden."}},required:["found"]}},_l=`Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;function qu(e){return{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}}function Zu({model:e,text:t,url:n}){return n?{model:e,max_tokens:1500,tools:[{type:"web_fetch_20250910",name:"web_fetch",max_uses:3,max_content_tokens:2e4},Ul],tool_choice:{type:"auto"},messages:[{role:"user",content:`Rufe diese Seite ab: ${n}
Ist es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.

${_l}`}]}:{model:e,max_tokens:1e3,tools:[Ul],tool_choice:{type:"tool",name:"record_contact"},messages:[{role:"user",content:`Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.

${_l}

---
${String(t).slice(0,2e4)}`}]}}function Vu(e){let t=e&&Array.isArray(e.content)?e.content:[],n=t.find(o=>o.type==="web_fetch_tool_result"&&o.content&&o.content.type==="web_fetch_tool_result_error"),a=t.find(o=>o.type==="tool_use"&&o.name==="record_contact");if(!a||!a.input){if(n){let o=n.content.error_code;throw new Error(o==="url_not_accessible"?"Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.":`Die Seite konnte nicht gelesen werden (${o}). Kopiere das Impressum und füge es als Text ein.`)}throw new Error("Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.")}let s=a.input;if(s.found===!1)throw new Error("Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.");let i={};for(let o of Fu){let c=typeof s[o]=="string"?s[o].trim():"";c&&(i[o]=c.slice(0,200))}i.email&&(i.email=i.email.toLowerCase());let r=[];return typeof s.register=="string"&&s.register.trim()&&r.push(s.register.trim()),{fields:i,extra:r}}function Gu(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Das Auslesen ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function nr({apiKey:e,model:t,text:n,url:a}){if(!e)throw new Error("Dafür braucht es den API-Key aus den Einstellungen.");let s=Zu({model:t,text:n,url:a}),i=null;for(let r=0;r<3;r++){let o;try{o=await fetch(Ou,{method:"POST",headers:qu(e),body:JSON.stringify(s)})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}try{i=await o.json()}catch{i=null}if(!o.ok)throw new Error(Gu(o.status,i));if(i&&i.stop_reason==="pause_turn"){s.messages=[...s.messages,{role:"assistant",content:i.content}];continue}break}return Vu(i)}function zl(e){let t=String(e||"").trim();return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""}var Ll={company:"Unternehmen",firstName:"Vorname",lastName:"Nachname",street:"Straße",houseNo:"Hausnummer",zip:"PLZ",city:"Ort",region:"Region",country:"Land",email:"E-Mail",phone:"Telefon",website:"Website",taxId:"Steuer-ID",vatId:"USt-IdNr."};function Hu({onApply:e}){let[t,n]=S(!1),[a,s]=S(""),[i,r]=S(""),[o,c]=S(""),p=!!y.settings.aiApiKey;async function u(){if(!a.trim()){U("Bitte zuerst den Text des Impressums einfügen.","info");return}c("text");let m=null;p&&(m=await _(()=>nr({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,text:a}))),m||(m=Ml(a)),c(""),e(m)}async function d(){let m=zl(i);if(!m){U("Bitte die Adresse des Impressums eintragen.","info");return}c("url");let f=await _(()=>nr({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,url:m}));c(""),f&&e(f)}return t?l`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${I} variant="ghost" small icon="x" title="Schließen" onClick=${()=>n(!1)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${le} class="span-6" label="Impressum einfügen" value=${a} onInput=${s} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${p?"Wird mit der KI ausgelesen (API-Key aus den Einstellungen).":"Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer."} />
      <div class="span-6"><${I} small variant="primary" busy=${o==="text"} onClick=${u}>Text auslesen<//></div>
      <${K} class="span-4" label="Oder Adresse des Impressums" value=${i} onInput=${r} placeholder="firma.de/impressum"
        hint=${p?"Die Seite wird über die Anthropic-API abgerufen und ausgelesen.":"Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen."} />
      <div class="span-2 field field-inline"><${I} small busy=${o==="url"} disabled=${!p} onClick=${d}>Von Website laden<//></div>
    </div>
  </div>`:l`<div class="imprint-open"><${I} small icon="sparkle" onClick=${()=>n(!0)}>Daten aus Impressum übernehmen<//></div>`}function la({customer:e,onClose:t,onSaved:n}){let a=!e||!k("customers",e.id),[s,i]=S(()=>({...tn(),...e||{}})),[r,o]=S((s.tags||[]).join(", ")),[c,p]=S(!1),u=b=>C=>i(x=>({...x,[b]:C})),d=k("customers",s.id),m=!a&&y.invoices.some(b=>b.customerId===s.id),f=Se(s)?"customer":"contact",$=(b,C)=>new RegExp(`^${b==="contact"?"KO":"K"}-\\d+$`).test(String(C||""));function h(b){i(C=>{let x=Se(C)?"customer":"contact";return x===b?C:{...C,kind:b,number:$(x,C.number)?"":C.number}})}function v({fields:b,extra:C}){let x=[],N=[];i(E=>{let w={...E};for(let[A,D]of Object.entries(b))D&&(String(E[A]||"").trim()?String(E[A]).trim()!==D&&N.push(Ll[A]||A):(w[A]=D,x.push(Ll[A]||A)));let G=(C||[]).filter(A=>!String(E.notes||"").includes(A));return G.length&&(w.notes=[String(E.notes||"").trim(),...G].filter(Boolean).join(`
`),x.push("Notizen")),w}),setTimeout(()=>{x.length?U(`Übernommen: ${x.join(", ")}${N.length?`. Nicht überschrieben: ${N.join(", ")}`:""}.`,"good",8e3):U(N.length?`Nichts übernommen – ${N.join(", ")} ist schon ausgefüllt.`:"Im Impressum wurden keine Kontaktdaten erkannt.","info",7e3)},0)}async function g(){p(!0);let b={...s,tags:r.split(",").map(x=>x.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},C=await _(()=>Ta(b));p(!1),C&&(U(a?`${Se(C)?"Kunde":"Kontakt"} ${C.number} angelegt`:"Gespeichert","good"),n&&n(C),t())}return l`<${We} title=${a?"Neuer Kontakt":`${f==="customer"?"Kunde":"Kontakt"} bearbeiten`} onClose=${t} size="lg" onSubmit=${g}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${c}>Speichern<//>`}>
    <${Hu} onApply=${v} />
    <div class="form-grid">
      <${ke} class="span-6" label="Art">
        <div class="inline-controls">
          <${pt} label="Art des Kontakts" value=${f} onChange=${h}
            options=${io.map(b=>({...b,label:b.id==="contact"&&m?"Kontakt (nicht möglich – hat Rechnungen)":b.label}))} />
          <span class="field-hint">${f==="customer"?"Kunden erhalten Rechnungen. Nummer K-…":"Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden."}</span>
        </div>
      <//>
      <${K} class="span-4" label="Unternehmen" value=${s.company} onInput=${u("company")} />
      <${K} class="span-2" label="Nummer" value=${s.number} onInput=${u("number")}
        placeholder=${un(f,y.customers.filter(b=>b.id!==s.id))}
        hint=${d&&d.number&&d.number!==s.number&&!s.number?`Bisher ${d.number}. Leer = neue Nummer`:"Leer lassen für automatische Nummer"} />
      <${K} class="span-3" label="Vorname" value=${s.firstName} onInput=${u("firstName")} />
      <${K} class="span-3" label="Nachname" value=${s.lastName} onInput=${u("lastName")} />
      <${K} class="span-6" label="Ansprechpartner (falls abweichend)" value=${s.contact} onInput=${u("contact")} />

      <${K} class="span-4" label="Straße" value=${s.street} onInput=${u("street")} />
      <${K} class="span-2" label="Hausnummer" value=${s.houseNo} onInput=${u("houseNo")} />
      <${K} class="span-2" label="PLZ" value=${s.zip} onInput=${u("zip")} />
      <${K} class="span-4" label="Ort" value=${s.city} onInput=${u("city")} />
      <${K} class="span-3" label="Bundesland / Region" value=${s.region} onInput=${u("region")} />
      <${K} class="span-3" label="Land" value=${s.country} onInput=${u("country")} />

      <${K} class="span-3" label="E-Mail" type="email" value=${s.email} onInput=${u("email")} />
      <${K} class="span-3" label="Telefon" value=${s.phone} onInput=${u("phone")} />
      <${K} class="span-6" label="Website" value=${s.website} onInput=${u("website")} />

      <${K} class="span-3" label="Steuer-ID" value=${s.taxId} onInput=${u("taxId")} />
      <${K} class="span-3" label="USt-IdNr. / VAT ID" value=${s.vatId} onInput=${u("vatId")} />

      <${ce} class="span-2" label="Belegsprache" value=${s.language} onChange=${u("language")}
        placeholder="Wie Unternehmen" options=${xt} />
      <${ce} class="span-2" label="Währung" value=${s.currency} onChange=${u("currency")}
        placeholder="Wie Unternehmen" options=${et} />
      <${Be} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${u("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${K} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${le} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${u("notes")} rows=${3} />
      <div class="span-6"><${Ve} label="Aktiv" checked=${s.active!==!1} onChange=${u("active")} /></div>
    </div>
  <//>`}function Kl(e){let t=jt(),n=q(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of nt(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of pn(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of y.payments){let r=k("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=mt(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=Et(i.amountCents,r.currency,r.fx)||0}return a}function Ol(){ge();let[e,t]=S(""),[n,a]=S("active"),[s,i]=S("all"),[r,o]=S(""),[c,p]=S(null),u=Nt(),d=ve(()=>Kl(u),[y.version,u]),m=!!c&&!k("customers",c.id),f=ve(()=>Ji(jt(),{companyId:u}),[y.version,u]),$=ve(()=>[...new Set(y.customers.flatMap(g=>g.tags||[]))].sort((g,b)=>g.localeCompare(b,"de")),[y.version]),h=y.customers.filter(g=>n==="active"&&g.active===!1||n==="inactive"&&g.active!==!1||s==="customer"&&!Se(g)||s==="contact"&&Se(g)||r&&!(g.tags||[]).includes(r)?!1:Re(e,g.number,g.company,g.firstName,g.lastName,g.contact,g.city,g.country,g.email,(g.tags||[]).join(" "),(f.get(g.id)||[]).map(b=>b.name).join(" "))),v=[{key:"number",label:"Nr.",sort:g=>g.number,width:"90px",render:g=>l`<span class="mono-num">${g.number}</span>`},{key:"name",label:"Name",sort:g=>j(g),render:g=>l`<div class="cell-main">${j(g)}</div>
        ${dt(g)&&dt(g)!==j(g)&&l`<div class="cell-sub">${dt(g)}</div>`}`},{key:"kind",label:"Art",sort:g=>Se(g)?0:1,render:g=>l`<${Ue} tone=${Se(g)?"info":"neutral"} icon=${Se(g)?"good":"customers"}>${Se(g)?"Kunde":"Kontakt"}<//>`},{key:"city",label:"Ort",sort:g=>g.city,render:g=>[g.city,g.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:g=>{let b=f.get(g.id)||[];return b.length?l`<div class="svc-tags">${b.slice(0,3).map(C=>l`<span class="tag" title=${C.running?"Läuft (wiederkehrende Vorlage)":""}>${C.running?"↻ ":""}${C.name}</span>`)}
          ${b.length>3&&l`<span class="tag muted-text">+${b.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:g=>(g.tags||[]).map(b=>l`<span class="tag">${b}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:g=>T(d.get(g.id)),render:g=>{let b=d.get(g.id);return b&&T(b)?X(T(b)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:g=>T(d.get(g.id),"open"),render:g=>{let b=d.get(g.id);return!b||!T(b,"open")?l`<span class="muted-text">–</span>`:l`<span class=${T(b,"overdue")?"tone-bad":""}>${X(T(b,"open"))}</span>`}},{key:"status",label:"",render:g=>g.active===!1?l`<${Ue} tone="mute">Inaktiv<//>`:""}];return l`
    <${we} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${I} variant="primary" icon="plus" onClick=${()=>p(tn({kind:"contact"}))}>Neuer Kontakt<//>
    <//>
    ${y.customers.length>0&&l`<div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${ln} label="Art" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:y.customers.length},{id:"customer",label:"Kunden",count:y.customers.filter(Se).length},{id:"contact",label:"Kontakte",count:y.customers.filter(g=>!Se(g)).length}]} />
      <select class="input select filter-select" value=${n} aria-label="Status" onChange=${g=>a(g.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${$.length>0&&l`<select class="input select filter-select" value=${r} aria-label="Nach Tag filtern" onChange=${g=>o(g.target.value)}>
        <option value="">Alle Tags</option>
        ${$.map(g=>l`<option value=${g}>${g}</option>`)}
      </select>`}
    </div>`}
    <${ot} columns=${v} rows=${h} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${g=>J(`/customers/${g.id}`)}
      empty=${y.customers.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`:l`<${pe} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${I} variant="primary" icon="plus" onClick=${()=>p(tn({kind:"contact"}))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${c&&l`<${la} customer=${c} onClose=${()=>p(null)}
      onSaved=${g=>{m&&J(`/customers/${g.id}`)}} />`}
  `}function Fl({id:e}){ge();let t=k("customers",e),[n,a]=S(!1),[s,i]=S(null),[r,o]=S(null);if(!t)return l`<${pe} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${I} onClick=${()=>J("/customers")}>Zu den Kontakten<//>
    <//>`;let c=q(),p=Kl(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},u=Ji(jt(),{customerId:e}).get(e)||[],d=y.notes.filter(E=>E.customerId===e),m=Ks(y.appointments.filter(E=>E.customerId===e)),f=m.filter(E=>E.status==="planned"&&E.date>=c),$=y.invoices.filter(E=>E.customerId===e).sort((E,w)=>E.issueDate<w.issueDate?1:-1),h=y.quotes.filter(E=>E.customerId===e).sort((E,w)=>E.issueDate<w.issueDate?1:-1),v=[...new Set([...$,...h].map(E=>E.companyId))];async function g(){let E=d.length||m.length?` Mitgelöscht werden ${m.length} ${m.length===1?"Termin":"Termine"} und ${d.length} ${d.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await oe({title:`${Se(t)?"Kunde":"Kontakt"} löschen?`,text:`${j(t)} wird endgültig gelöscht.${E}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Vo(e),!0))&&(U("Gelöscht","good"),J("/customers"))}async function b(E){let w=E==="customer";if(!await oe({title:w?`${j(t)} zum Kunden machen?`:`${j(t)} als Kontakt führen?`,text:w?`Der Kontakt wird Kunde und bekommt eine Kundennummer (${un("customer")}). Das passiert sonst automatisch mit der ersten Rechnung.`:`Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${un("contact")}).`,confirmLabel:w?"Zum Kunden machen":"Als Kontakt führen"}))return;let A=await _(()=>Ta({...t,kind:E}));A&&U(`${w?"Kunde":"Kontakt"} ${A.number}`,"good")}let C=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),x=[{key:"number",label:"Nummer",render:E=>l`<a href=${`#/invoices/${E.id}`} class="cell-main">${E.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:E=>l`<${Oe} id=${E.companyId} />`},{key:"date",label:"Datum",render:E=>Z(E.issueDate)},{key:"due",label:"Fällig",render:E=>Z(E.dueDate)},{key:"total",label:"Betrag",align:"right",render:E=>l`<${Wt} doc=${E} />`},{key:"status",label:"Status",render:E=>l`<${qa} inv=${E} />`}],N=[{key:"number",label:"Nummer",render:E=>l`<a href=${`#/quotes/${E.id}`} class="cell-main">${E.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:E=>l`<${Oe} id=${E.companyId} />`},{key:"date",label:"Datum",render:E=>Z(E.issueDate)},{key:"valid",label:"Gültig bis",render:E=>Z(E.validUntil)},{key:"total",label:"Betrag",align:"right",render:E=>l`<${Wt} doc=${E} />`},{key:"status",label:"Status",render:E=>l`<${Za} quote=${E} />`}];return l`
    <${we} title=${j(t)} back=${{href:"#/customers",label:"Kontakte"}}
      sub=${l`<span class="badges"><${Ue} tone=${Se(t)?"info":"neutral"} icon=${Se(t)?"good":"customers"}>${Se(t)?"Kunde":"Kontakt"}<//>${t.active===!1?l`<${Ue} tone="mute">Inaktiv<//>`:""}</span>
        <span class="head-meta">${Se(t)?"Kundennummer":"Kontaktnummer"} ${t.number}${(t.formerNumbers||[]).length?` (vorher ${t.formerNumbers.join(", ")})`:""}</span>`}>
      <${I} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${I} variant="primary" icon="plus" onClick=${()=>J(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${bt} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>J(`/quotes/new?customer=${e}`)},!Se(t)&&{label:"Zum Kunden machen",icon:"good",onClick:()=>b("customer")},Se(t)&&!$.length&&{label:"Als Kontakt führen",icon:"customers",onClick:()=>b("contact")},{label:"Löschen",icon:"trash",danger:!0,disabled:Li(e),onClick:g}]} />
    <//>

    <div class="stat-row">
      <${Me} label="Umsatz gesamt (netto)" value=${X(T(p))} sub=${`≈ ${ze(De(p))}, ${p.count} Rechnungen`} />
      <${Me} label="Offene Forderungen" value=${X(T(p,"open"))} sub=${`≈ ${ze(De(p,"open"))}`} />
      <${Me} label="Davon überfällig" value=${X(T(p,"overdue"))} tone=${T(p,"overdue")?"bad":""} sub=${`≈ ${ze(De(p,"overdue"))}`} />
      <${Me} label="Bezahlt" value=${X(T(p,"paid"))} sub=${`≈ ${ze(De(p,"paid"))}`} />
    </div>

    <div class="split">
      <div class="split-main">
        <${Wu} rows=${u} />
        <${Q} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${I} small icon="note" onClick=${()=>i(so({customerId:e}))}>Eintrag<//>
            <${I} small icon="calendar" onClick=${()=>o(ju(t))}>Termin planen<//>
          </div>`}>
          ${f.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${Fs} items=${f} onOpen=${o} compact />`}
          <${Qu} notes=${d} appts=${m.filter(E=>!(E.status==="planned"&&E.date>=c))}
            onNote=${i} onAppt=${o} hasUpcoming=${f.length>0} />
        <//>
        <${Q} title="Rechnungen" flush>
          <${ot} columns=${x} rows=${$} onRowClick=${E=>J(`/invoices/${E.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${Q} title="Angebote" flush>
          <${ot} columns=${N} rows=${h} onRowClick=${E=>J(`/quotes/${E.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kunden.</p>`} />
        <//>
      </div>
      <aside class="split-side">
        <${Q} title="Kontakt">
          <${cn} rows=${[["Ansprechpartner",dt(t)],["Adresse",C.length?l`${C.map(E=>l`<div>${E}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(xt.find(E=>E.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(E=>l`<span class="tag">${E}</span>`):""]]} />
        <//>
        <${Q} title="Abgerechnet über">
          ${v.length?l`<ul class="plain-list">${v.map(E=>l`<li><${Oe} id=${E} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${Q} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${la} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${Yu} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${Os} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function ju(e){let t=[...y.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=Nt()&&k("companies",Nt())||t&&k("companies",t.companyId)||me()[0];return ms(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function Wu({rows:e}){let t=n=>(vn.find(a=>a.id===n)||{}).label||"";return l`<${Q} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${ie()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${ae} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Oe} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${En(n.qty)}${n.unit?` ${xs(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${T(n)?l`${X(T(n))}<div class="cell-sub">≈ ${ze(De(n))}</div>`:"–"}</td>
            <td>${n.last?Z(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var Ju={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},Pl=e=>(us.find(t=>t.id===e)||us[0]).label;function Qu({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await oe({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Ho(o.id),!0))&&U("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let d=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${ae} name=${Ju[d.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${d.title||Pl(d.kind)}</span>
              <span class="tl-meta">${Pl(d.kind)} · ${Z(d.date)}</span>${d.companyId&&l`<${Oe} id=${d.companyId} />`}</div>
            ${d.text&&l`<div class="tl-text">${d.text}</div>`}
          </div>
          <div class="tl-actions">
            <${I} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(d)} />
            <${I} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(d)} />
          </div>
        </li>`}let c=o.a,p=Zn[c.status]||Zn.planned,u=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${ae} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${Z(c.date)}, ${c.start} Uhr</span>
            <${Ue} tone=${u?"warn":p.tone}>${u?"Nicht dokumentiert":p.label}<//>
            <${Oe} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
        </div>
        <div class="tl-actions">
          ${u&&l`<${I} small onClick=${()=>ar(c)}>Dokumentieren<//>`}
          <${I} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function Yu({note:e,onClose:t}){let n=!k("notes",e.id),[a,s]=S(()=>({...e})),[i,r]=S(!1),o=p=>u=>s(d=>({...d,[p]:u}));async function c(){r(!0);let p=await _(()=>Go(a));r(!1),p&&(U(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${We} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${ce} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${us} />
      <${je} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${ce} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${me().map(p=>({id:p.id,label:p.name}))} />
      <${K} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${le} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var Xu=["Mo","Di","Mi","Do","Fr","Sa","So"],ql=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Ks=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),Vl=e=>(k("companies",e)||{}).brandColor||"var(--ink-2)";function Ja(e){let t=k("customers",e.customerId);return t?j(t):e.contactName||""}function Gl(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===rt())return n;let{start:a}=ra(e),s=Ms(a,rt()),i=El(a,rt());return s===e.start&&i===e.date?`${n} ${Ga(e.timeZone,a)}`:`${n} ${Ga(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${Z(i)}`:""})`}function ed(e){let t=[...new Set([rt(),...ds,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${Ga(a,n)})${a===rt()?", dieses Gerät":""}`}))}function Os({appointment:e,onClose:t}){let n=!k("appointments",e.id),[a,s]=S(()=>({...e})),[i,r]=S(!1),[o,c]=S(null),[p,u]=S(null),d=me(),m=N=>E=>s(w=>({...w,[N]:E})),f=y.customers.filter(N=>N.active!==!1||N.id===a.customerId).sort((N,E)=>j(N).localeCompare(j(E),"de")).map(N=>({id:N.id,label:j(N),sub:[N.kind==="contact"?"Kontakt":"Kunde",N.number,N.city].filter(Boolean).join(", "),search:`${N.firstName} ${N.lastName} ${N.contact} ${N.email}`}));function $(N){let E=k("companies",N),w=k("companies",a.companyId);s(G=>{let A={...G,companyId:N};if(!E)return A;let D=(z,H)=>!G[z]||w&&String(G[z])===String(w[H]||"");D("meetingProvider","meetingProvider")&&(A.meetingProvider=E.meetingProvider||""),D("meetingUrl","meetingUrl")&&(A.meetingUrl=E.meetingUrl||""),D("meetingDetails","meetingDetails")&&(A.meetingDetails=E.meetingDetails||""),E.meetingTimeZone&&(!G.timeZone||w&&G.timeZone===(w.meetingTimeZone||rt()))&&(A.timeZone=E.meetingTimeZone);let R=k("customers",G.customerId);return R&&R.language||(A.language=E.language||"de"),A})}function h(N){let E=k("customers",N),w=k("customers",a.customerId);s(G=>({...G,customerId:N||"",attendees:!G.attendees||w&&G.attendees===w.email?E&&E.email||"":G.attendees,language:E&&E.language?E.language:G.language}))}function v(N){s(E=>{let w=R=>{let[z,H]=String(R||"0:0").split(":").map(Number);return z*60+H},G=Math.max(w(E.end)-w(E.start),15),A=Math.min(w(N)+G,1439),D=/^\d\d:\d\d$/.test(N)?`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`:E.end;return{...E,start:N,end:D}})}async function g(){r(!0);let N=await _(()=>jo(a));r(!1),N&&(U(n?"Termin angelegt":"Termin gespeichert","good"),n?u(N):t(N))}async function b(){if(!await oe({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${Z(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Wo(a.id),!0))&&(U("Termin gelöscht","good"),t())}if(p)return l`<${ad} appointment=${p} justCreated onClose=${()=>t(p)} />`;let C=k("customers",a.customerId),x=k("appointments",a.id);return l`<${We} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${g}
    footer=${l`
      ${!n&&l`<${bt} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>u(x||a)},x&&x.status!=="done"&&{label:"Termin dokumentieren",icon:"edit",onClick:()=>ar(x,t)},x&&x.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>td(x,t)},x&&x.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await _(()=>Ss(x.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:b}]} />`}
      <span class="spacer"></span>
      <${I} onClick=${()=>t()}>Abbrechen<//>
      <${I} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${x&&x.status!=="planned"&&l`<${Ie} tone=${x.status==="done"?"good":"warn"}>
      ${x.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${x.outcome?l`<div class="pre notice-sub">${x.outcome}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${ce} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${$}
        placeholder="Unternehmen wählen" options=${d.map(N=>({id:N.id,label:N.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${ke} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${Nn} id="appt-customer" options=${f} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${h} onCreate=${N=>c({company:N,kind:"contact"})} createLabel="als Kontakt anlegen" />
      <//>
      <${K} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${m("contactName")}
        placeholder=${C?dt(C)||j(C):"Name"} hint="Für die Anrede in der Einladung" />
      <${K} class="span-6" label="Titel" value=${a.title} onInput=${m("title")}
        placeholder=${C?`Termin mit ${j(C)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${je} class="span-2" label="Datum" value=${a.date} onInput=${m("date")} />
      <${K} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${v} />
      <${K} class="span-1" label="Ende" type="time" value=${a.end} onInput=${m("end")} />
      <${ce} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${m("timeZone")} options=${ed(a.timeZone)}
        hint=${a.timeZone!==rt()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&Ms(ra(a).start,rt())!==a.start?`Bei dir: ${Ms(ra(a).start,rt())} Uhr`:""} />
      <${ke} class="span-4" label="Art">
        <${pt} label="Art des Termins" value=${a.kind} onChange=${m("kind")} options=${gi} />
      <//>
      <${ke} class="span-2" label="Sprache der Einladung">
        <${pt} label="Sprache der Einladung" value=${a.language||"de"} onChange=${m("language")} options=${xt} />
      <//>
      ${a.kind==="video"&&l`
        <${ce} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${m("meetingProvider")}
          placeholder="Bitte wählen" options=${qn} />
        <${K} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${m("meetingUrl")} placeholder="https://…"
          hint=${!a.meetingUrl&&a.companyId?"Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.":""} />
        <${le} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${m("meetingDetails")} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind==="phone"&&l`<${K} class="span-6" label="Telefon" value=${a.location} onInput=${m("location")} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind==="onsite"&&l`<${K} class="span-6" label="Ort" value=${a.location} onInput=${m("location")} placeholder="Adresse oder Treffpunkt" />`}
      <${K} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${m("attendees")}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${le} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${m("agenda")} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${o&&l`<${la} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${N=>h(N.id)} />`}
  <//>`}async function ar(e,t){let n=await oe({title:"Termin dokumentieren",text:`${e.title}, ${Z(e.date)} ${e.start} Uhr. Was wurde besprochen, was ist vereinbart? Der Eintrag erscheint in der Kundendokumentation.`,input:{label:"Ergebnis und nächste Schritte",value:e.outcome||"",multiline:!0},confirmLabel:"Als stattgefunden speichern"});if(n===null)return;let a=await _(()=>Ss(e.id,"done",n));a&&(U("Termin dokumentiert","good"),t&&t(a))}async function td(e,t){let n=await oe({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await _(()=>Ss(e.id,"cancelled",n));a&&(U("Termin abgesagt","good"),t&&t(a))}async function nd(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function Zl(e){return`${Ft(`Termin ${e.date} ${e.start.replace(":","-")} ${Ja(e)||e.title||""}`.trim())}.ics`}function ad({appointment:e,onClose:t,justCreated:n}){let a=k("companies",e.companyId),s=k("customers",e.customerId),i=ve(()=>Il(e,{company:a,customer:s,settings:y.settings}),[e.id,e.updatedAt]),[r,o]=S(e.attendees||s&&s.email||""),[c,p]=S(i.subject),[u,d]=S(i.body),[m,f]=S(""),$=typeof navigator<"u"&&!!navigator.canShare,h=()=>new Blob([Nl(e,{summary:c,description:u})],{type:"text/calendar;charset=utf-8"});function v(){st(h(),Zl(e))}async function g(){let x=await nd(`${c}

${u}`);U(x?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",x?"good":"bad")}function b(){let x=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(u)}`;Wn(),window.location.href=x}async function C(){f("share"),await _(async()=>{let x=new File([h()],Zl(e),{type:"text/calendar"});if(!navigator.canShare({files:[x]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[x],title:c,text:u})}catch(N){if(!N||N.name!=="AbortError")throw N}}),f("")}return l`<${We} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${I} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${zs(e.date)}, ${Gl(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${ia(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${Ie} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${K} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${K} class="span-6" label="Betreff" value=${c} onInput=${p} />
      <${le} class="span-6" label="Text" value=${u} onInput=${d} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${I} icon="calendar" onClick=${v}>Kalenderdatei herunterladen<//>
      <${I} icon="copy" onClick=${g}>Text kopieren<//>
      <${I} icon="mail" onClick=${b} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${$&&l`<${I} icon="send" busy=${m==="share"} onClick=${C}>Teilen<//>`}
    </div>
  <//>`}function sd(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function id({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${Vl(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${Ja(e)?` (${Ja(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function Hl({params:e}){ge();let t=q(),[n,a]=S("month"),[s,i]=S(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=S(()=>e&&e.open&&k("appointments",e.open)?k("appointments",e.open):null),[c,p]=S(!1),[u,d]=S(""),m=xe(),f=Ks(y.appointments.filter(He)).filter(x=>!u||Re(u,x.title,Ja(x),x.agenda,x.outcome)),$=new Map;for(let x of f)$.has(x.date)||$.set(x.date,[]),$.get(x.date).push(x);function h(x){let N=m||(me().length===1?me()[0]:me()[0]);o(ms(N,{date:x||t}))}let v=x=>i(N=>{let E=new Date(Date.UTC(N.y,N.m+x,1));return{y:E.getUTCFullYear(),m:E.getUTCMonth()}}),g=sd(s.y,s.m),b=f.filter(x=>x.date>=t),C=f.filter(x=>x.date<t).reverse();return l`
    <${we} title="Termine" sub=${m?`Termine über ${m.name}`:"Alle Termine aller Unternehmen"}>
      <${pt} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${I} variant="primary" icon="plus" onClick=${()=>h(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${I} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>v(-1)} />
        <h2 class="cal-title">${ql[s.m]} ${s.y}</h2>
        <${I} small icon="chevronRight" title="Nächster Monat" onClick=${()=>v(1)} />
        <${I} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${me().map(x=>l`<span class="cal-legend-item"><i style=${`background:${x.brandColor}`}></i>${x.shortName||x.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${ql[s.m]} ${s.y}`}>
        ${Xu.map(x=>l`<div class="cal-wd" role="columnheader">${x}</div>`)}
        ${g.map(x=>{let N=$.get(x.iso)||[];return l`<div role="gridcell" class=${`cal-day${x.inMonth?"":" is-out"}${x.iso===t?" is-today":""}`}
            onClick=${()=>h(x.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(x.iso.slice(8,10))}</span>
            ${N.slice(0,3).map(E=>l`<${id} key=${E.id} a=${E} onOpen=${o} />`)}
            ${N.length>3&&l`<button type="button" class="cal-more" onClick=${E=>{E.stopPropagation(),a("list")}}>+${N.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${u} onInput=${x=>d(x.target.value)} />
        <${ln} label="Zeitraum" value=${c?"past":"next"} onChange=${x=>p(x==="past")}
          options=${[{id:"next",label:"Anstehend",count:b.length},{id:"past",label:"Vergangen",count:C.length}]} />
      </div>
      ${(c?C:b).length?l`<${Fs} items=${c?C:b} onOpen=${o} showCustomer />`:l`<${pe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${I} variant="primary" icon="plus" onClick=${()=>h(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${Os} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function Fs({items:e,onOpen:t,showCustomer:n,compact:a}){let s=q(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=Zn[r.status]||Zn.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Ae(s,1)?"Morgen, ":""}${zs(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${Vl(r.companyId)}`}>
            <span class="appt-time">${a?l`${Z(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${Ue} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&Ja(r),r.kind==="video"?ia(r.meetingProvider)||"Videocall":(gi.find(p=>p.id===r.kind)||{}).label,r.timeZone!==rt()?Gl(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Oe} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function jl(){let[e,t]=S(null),n=q(),a=Ae(n,14),s=Ks(y.appointments.filter(He).filter(i=>i.status==="planned"&&i.date>=n&&i.date<=a)).slice(0,6);return s.length?l`<${Q} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${Fs} items=${s} onOpen=${t} showCustomer />
    ${e&&l`<${Os} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:null}async function qs(e,t){let n=yt(e,t),a=await oa(Wa(n));return st(a,n.fileName),{blob:a,model:n}}function rd(e,t){let n=e.snapshot&&e.snapshot.company||k("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||k("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?Gt(e,qe(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:Z(e.issueDate,s),DUE:Z(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:Yn(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:Yn(i,e.currency,s),CONTACT:dt(a)||j(a),CUSTOMER:j(a),SENDER:y.settings.userName?`${y.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function od(e){let n=sn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,gt.length)}function Qa(e,t){if(!(t>0))return 0;let n=y.settings.reminderDays||[7,14,21],a=sn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return gt.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function Wl(e){return[...sn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function ca({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=rd(e,t),[o,c]=S(()=>n==="reminder"?od(e.id):0),p=z=>n==="reminder"?((y.settings.reminderTemplates||{})[s]||{})[z]||{subject:"",body:""}:((y.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[u,d]=S(i),[m,f]=S(()=>$t(p(o).subject,r)),[$,h]=S(()=>$t(p(o).body,r)),[v,g]=S(""),[b,C]=S(null),x=typeof navigator<"u"&&!!navigator.canShare;function N(z){let H=Number(z);c(H),f($t(p(H).subject,r)),h($t(p(H).body,r))}async function E(){if(b)return b;let z=yt(e,t),F={blob:await oa(Wa(z)),name:z.fileName};return C(F),F}async function w(){g("pdf"),await _(async()=>{let z=await E();st(z.blob,z.name)}),g("")}function G(){let z=`mailto:${encodeURIComponent(u.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent($)}`;Wn(),window.location.href=z}async function A(){g("share"),await _(async()=>{let z=await E(),H=new File([z.blob],z.name,{type:"application/pdf"});if(!navigator.canShare({files:[H]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[H],title:m,text:$})}catch(F){if(F&&F.name==="AbortError")return;throw F}}),g("")}async function D(){g("done");let z=await _(async()=>(n==="reminder"?await fl(e.id,o,m):t==="quotes"?await Bn(e.id,"sent"):await Rn(e.id,!0),!0));g(""),z&&(U(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let R=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${We} title=${R} onClose=${a} size="lg"
    footer=${l`
      <${I} onClick=${a}>Schließen<//>
      <${I} variant="primary" icon="check" busy=${v==="done"} onClick=${D}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${Ie} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${ce} class="span-2" label="Stufe" value=${o} onChange=${N}
        options=${gt.map(z=>({id:z.id,label:z.label}))} />`}
      <${K} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${u} onInput=${d}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${K} class="span-6" label="Betreff" value=${m} onInput=${f} />
      <${le} class="span-6" label="Text" value=${$} onInput=${h} rows=${10} />
    </div>
    <div class="send-steps">
      <${I} icon="download" busy=${v==="pdf"} onClick=${w}>PDF herunterladen<//>
      <${I} icon="mail" onClick=${G} disabled=${!u.trim()}>E-Mail-Programm öffnen<//>
      ${x&&l`<${I} icon="send" busy=${v==="share"} onClick=${A}>Mit PDF teilen<//>`}
    </div>
  <//>`}var ld=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],cd=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],ud=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],dd=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],md=e=>.86+e*37%7/100,ua=(e,t,n)=>{let a=md(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:Ut(e,a,s)};function Zs(){return po(pd)}async function pd(){if(y.invoices.length||y.customers.length||y.expenses.length||y.services.length)throw new $e("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=me();if(!e.length)throw new $e("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=q(),a=[];for(let m of ld)a.push(await Ta(tn(m)));let s=[];for(let m of cd)s.push(await Cs(nn({...m,currency:"USD"})));let i=[];for(let[m,f,$,h,v,g,b]of ud){let C=t($),x=a[h],N=Kt(n.slice(0,8)+"01",-m,f);N>n&&(N=n);let E=x.currency||"USD",w=ua(E,m,N),G=v.map(([z,H])=>{let F=ft(s[z],C),L=E==="EUR"?Math.round(F.priceCents*w.usdToEur/500)*500:F.priceCents;return{...F,qty:H,priceCents:L}}),A={...kt(C),customerId:x.id,issueDate:N,serviceDate:N,paymentTermDays:x.paymentTermDays!=null&&x.paymentTermDays!==""?Number(x.paymentTermDays):14,currency:E,language:x.language||C.language,items:G,discount:{type:"pct",value:b},fx:w},D=await Ra(A);i.push({inv:D,pay:g,back:m}),(m>0||g!=="none")&&await Rn(D.id,!0);let R=D.totals.totalCents;if(g==="full"){let z=Ae(N,9+f%9);await Ba(D.id,{date:z>n?n:z,amountCents:R,method:"Überweisung",note:""})}else if(g==="half"){let z=Ae(N,12);await Ba(D.id,{date:z>n?n:z,amountCents:Math.round(R/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(m,f,$)=>{let h=Kt(n.slice(0,8)+"01",-$,14),v=m.currency||"USD",g=ua(v,$,h),b=ft(s[f],r);return Ra({...kt(r),customerId:m.id,issueDate:h,serviceDate:h,currency:v,language:m.language||"de",paymentTermDays:14,items:[{...b,priceCents:v==="EUR"?Math.round(b.priceCents*g.usdToEur/500)*500:b.priceCents}],fx:g})},c=await o(a[3],2,4);await Ts(c.id,"Beispiel: doppelt ausgestellt");let p=await o(a[4],6,3);await As(p.id,"Beispiel: Leistung wurde nicht erbracht."),await Es({...kt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...ft(s[4],t(1)),qty:6}],fx:ua("USD",0,n)});let u=await Ua({...Vn(t(0)),customerId:a[1].id,issueDate:Ae(n,-6),validUntil:Ae(n,24),currency:"EUR",language:"de",fx:ua("EUR",0,n),items:[{...ft(s[0],t(0)),priceCents:42e4},{...ft(s[1],t(0)),qty:6,priceCents:85e3}]});await Bn(u.id,"sent");let d=await Ua({...Vn(t(1)),customerId:a[5].id,issueDate:Ae(n,-20),validUntil:Ae(n,10),currency:"USD",language:"en",fx:ua("USD",0,n),items:[{...ft(s[5],t(1))}]});await Bn(d.id,"accepted");for(let[m,f,$,h,v,g,b,C,x]of dd){let N=Ae(n,-m);await dn(ka({companyId:t(f).id,vendor:$,category:h,description:v,currency:g,invoiceDate:N,paymentDate:Ae(N,2)>n?n:Ae(N,2),netCents:b,taxCents:C,totalCents:b+C,paymentMethod:x,fx:ua(g,Math.floor(m/30),N)}))}return await _a({...Gn(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[ft(s[1],t(0)),ft(s[2],t(0))]}),await _a({...Gn(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:Kt(n,4),items:[{...ft(s[3],t(0)),qty:12,priceCents:3e3}]}),await W(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:i.length}}async function Jl(){let e=new Set(["companies","assets","settings"]);await yn(Dt,async t=>{for(let n of Dt)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await xn(),Sa()}function fd(){let e=me(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:y.customers.length>0,label:"Ersten Kontakt anlegen",text:"Kunden und Kontakte gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:y.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:y.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=S(!1);async function i(){s(!0);let r=await _(async()=>(await Zs(),!0));s(!1),r&&U("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
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
  </section>`}var sr=e=>[...e].sort((t,n)=>T(n)-T(t));function Ql(){ge();let e=q(),t=xe(),n=Nt(),a=jt(),s=me(),i=ve(()=>{let w=to(12,e),G=ut("year",e);return{kpi:bl(a,n,e),months:w,series:Pa(a,{companyId:n,months:w}),byCustomer:Ka(a,{companyId:n,range:G}),byService:Fa(a,{companyId:n,range:G}),byCompany:Oa(a,{range:G}),rec:pn(a,{companyId:n},e)}},[y.version,n,e]),r=ie();if(!(y.invoices.length||y.expenses.length||y.customers.length||y.services.length))return l`<${fd} />`;let{kpi:c}=i,p=At(e.slice(0,7)),u=i.rec.filter(w=>w.status==="overdue"),d=i.rec.filter(w=>w.status!=="overdue"&&w.inv.dueDate&&w.inv.dueDate<=Ae(e,7)),m=y.recurring.filter(He).filter(w=>ta(w,e)),f=y.expenses.filter(w=>w.status==="review"&&(He(w)||!w.companyId)),$=y.invoices.filter(He).filter(w=>w.status==="draft"),h=$.filter(w=>w.number),v=$.filter(w=>!w.number),g=y.invoices.filter(He).filter(w=>w.clarify&&w.status!=="draft"),b=y.quotes.filter(He).filter(w=>["open","sent"].includes(Cn(w,e))&&w.validUntil&&w.validUntil<=Ae(e,7)),C=!t&&s.length>1,x=C?s.map(w=>({id:w.id,label:w.shortName||w.name,color:Ma(w.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],N=i.series.map(w=>({key:w.key,label:Pn(w.key),title:At(w.key),values:C?w[`byCompany${ie()}`]:{rev:T(w,"revenue")}})),E={columns:["Monat",...C?x.map(w=>w.label):[],`Umsatz (${ie()})`,`Umsatz (${ie()==="USD"?"EUR":"USD"})`],rows:i.series.map(w=>[At(w.key),...C?x.map(G=>X(w[`byCompany${ie()}`][G.id]||0)):[],X(T(w,"revenue")),ze(De(w,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${p}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${X(T(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${ze(De(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${X(T(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <div class="stat-row">
      <${Me} label="Umsatz Quartal" value=${X(T(c.quarter))} sub=${`≈ ${ze(De(c.quarter))}`} />
      <${Me} label="Umsatz Jahr" value=${X(T(c.year))} sub=${`≈ ${ze(De(c.year))}`} />
      <${Me} label="Offene Rechnungen" value=${X(T(c.open))} sub=${`${c.open.count} offen, ≈ ${ze(De(c.open))}`} href="#/invoices?status=open" />
      <${Me} label="Überfällig" value=${X(T(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${ze(De(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Me} label="Bezahlt dieses Jahr" value=${X(T(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Me} label="Rechnung im Schnitt" value=${X(T(c.average))} sub=${`≈ ${ze(De(c.average))}`} />
      <${Me} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${La} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${ie()}, nach Rechnungsdatum`} series=${x} table=${E}>
          <${za} groups=${N} series=${x} mode="stacked"
            format=${w=>X(w)} axisFormat=${w=>Ea(w,ie())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${Q} title="Zu erledigen" class="dash-side">
        ${u.length+d.length+m.length+f.length+$.length+b.length+g.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${u.slice(0,5).map(w=>l`<li key=${w.inv.id}>
              <a href=${`#/invoices/${w.inv.id}`}>
                <span class="todo-icon tone-bad"><${ae} name="bad" /></span>
                <span class="todo-text"><strong>${w.inv.number}</strong> ${Le(w.inv)}
                  <span class="cell-sub">seit ${w.overdueDays} ${w.overdueDays===1?"Tag":"Tagen"} überfällig${Qa(w.inv,w.overdueDays)?`, ${(gt.find(G=>G.id===Qa(w.inv,w.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${V(w.openCents,w.inv.currency)}</span>
              </a>
            </li>`)}
            ${u.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${u.length-5} weitere überfällige Rechnungen</a></li>`}
            ${d.slice(0,3).map(w=>l`<li key=${w.inv.id}>
              <a href=${`#/invoices/${w.inv.id}`}>
                <span class="todo-icon tone-warn"><${ae} name="clock" /></span>
                <span class="todo-text"><strong>${w.inv.number}</strong> ${Le(w.inv)}
                  <span class="cell-sub">fällig am ${Z(w.inv.dueDate)}</span></span>
                <span class="todo-amount">${V(w.openCents,w.inv.currency)}</span>
              </a>
            </li>`)}
            ${g.slice(0,5).map(w=>l`<li key=${`c-${w.id}`}><a href=${`#/invoices/${w.id}`}>
              <span class="todo-icon tone-warn"><${ae} name="warn" /></span>
              <span class="todo-text"><strong>${w.number}</strong> ${Le(w)}
                <span class="cell-sub">Klärung nötig: ${w.clarify.note}</span></span></a></li>`)}
            ${g.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${ae} name="warn" /></span>
              <span class="todo-text"><strong>${g.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${h.slice(0,5).map(w=>l`<li key=${w.id}><a href=${`#/invoices/${w.id}/edit`}>
              <span class="todo-icon tone-warn"><${ae} name="edit" /></span>
              <span class="todo-text"><strong>${w.number}</strong> ${Le(w)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${m.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${ae} name="repeat" /></span>
              <span class="todo-text"><strong>${m.length} wiederkehrende ${m.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${f.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${ae} name="expense" /></span>
              <span class="todo-text"><strong>${f.length} ${f.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${v.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${ae} name="edit" /></span>
              <span class="todo-text"><strong>${v.length} ${v.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${b.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${ae} name="quote" /></span>
              <span class="todo-text"><strong>${b.length} ${b.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
          </ul>`}
      <//>
    </div>

    <${jl} />

    <div class="dash-lists">
      <${Q} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${Ht} rows=${sr(i.byCustomer).map(w=>({key:w.id,label:w.name,value:T(w),display:X(T(w)),href:`#/customers/${w.id}`}))} />
      <//>
      <${Q} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${Ht} rows=${sr(i.byService).map(w=>({key:w.key,label:w.name,value:T(w),display:X(T(w))}))} />
      <//>
      ${!t&&l`<${Q} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${Ht} rows=${sr(i.byCompany).map(w=>({key:w.id,label:w.name,value:T(w),display:X(T(w)),color:Ma(w.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${ie()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}function da({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
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
  </div>`}async function Vs(e){let t=qe(e.id),n=sn(e.id),a=e.creditNoteId?k("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${V(Ne(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await oe({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await _(()=>Oi(e.id));return r?(U(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var ir=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function Yl({params:e}){ge();let[t,n]=S(""),[a,s]=S(e&&ir.some(b=>b.id===e.status)?e.status:"all"),[i,r]=S("all"),[o,c]=S(null),p=!xe(),u=q(),d=ve(()=>y.invoices.filter(He).map(b=>({inv:b,status:Us(b)})),[y.version,y.settings.activeCompany]),m=ut(i,u),f=d.filter(b=>i==="all"||Ot(b.inv.issueDate,m)),$=f.filter(b=>ir.find(C=>C.id===a).test(b.status,b.inv)).filter(b=>Re(t,b.inv.number,Le(b.inv),(k("companies",b.inv.companyId)||{}).name,b.inv.totals?(b.inv.totals.totalCents/100).toFixed(2):"",b.inv.totals?(b.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",(b.inv.items||[]).map(C=>C.name).join(" "))),h=$.reduce((b,C)=>{if(C.status==="draft"||C.status==="cancelled")return b;let x=C.inv.totals?C.inv.totals.totalCents:0;return b.total+=at(x,C.inv.currency,C.inv.fx)||0,b.open+=at(sa(C.inv),C.inv.currency,C.inv.fx)||0,b},{total:0,open:0}),v=[{key:"number",label:"Nummer",class:"nw",sort:b=>b.inv.number||"",render:b=>l`<span class="cell-main">${b.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:b=>Le(b.inv),render:b=>Le(b.inv)},...p?[{key:"company",label:"Unternehmen",sort:b=>(k("companies",b.inv.companyId)||{}).name||"",render:b=>l`<${Oe} id=${b.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:b=>b.inv.issueDate,render:b=>Z(b.inv.issueDate)},{key:"due",label:"Fällig",sort:b=>b.inv.dueDate||"",render:b=>b.status==="overdue"?l`<span class="tone-bad">${Z(b.inv.dueDate)}</span><div class="cell-sub">seit ${Ln(b.inv.dueDate,u)} Tagen</div>`:Z(b.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:b=>at(b.inv.totals?b.inv.totals.totalCents:0,b.inv.currency,b.inv.fx)||0,render:b=>l`<${Wt} doc=${b.inv} />`},{key:"open",label:"Offen",align:"right",sort:b=>at(sa(b.inv),b.inv.currency,b.inv.fx)||0,render:b=>{let C=sa(b.inv);return C?V(C,b.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:b=>b.status,render:b=>l`<${qa} inv=${b.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:b=>{let C=Wl(b.inv.id),x=Qa(b.inv,Ln(b.inv.dueDate,u)),N=E=>(gt.find(w=>w.id===E)||{}).label||"";return l`<${I} small variant=${x?"primary":"default"} icon="clock" onClick=${()=>c(b.inv)}>${x?N(x):"Erinnern"}<//>
          <span class="cell-sub nw">${C?`Zuletzt: ${N(C.level)}, ${Z(C.date)}`:"Noch keine versendet"}</span>`}}]:[]],g=$.length?[`${$.length} ${$.length===1?"Beleg":"Belege"}`,"",...p?[""]:[],"","",l`<span class="strong">${X(h.total)}</span>`,l`<span class="strong">${X(h.open)}</span>`,l`<span class="muted-text">in ${ie()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${we} title="Rechnungen">
      <${I} variant="primary" icon="plus" onClick=${()=>J("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${y.invoices.length>0&&l`<div class="filters">
      <${vt} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${ln} label="Status" value=${a} onChange=${s}
        options=${ir.map(b=>({id:b.id,label:b.label,count:f.filter(C=>b.test(C.status,C.inv)).length})).filter(b=>b.id!=="clarify"||b.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${b=>r(b.target.value)}>
        ${bn.filter(b=>b.id!=="custom").map(b=>l`<option value=${b.id}>${b.label}</option>`)}
      </select>
    </div>`}
    <${ot} columns=${v} rows=${$} rowKey=${b=>b.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${g}
      rowClass=${b=>b.inv.clarify&&b.status!=="draft"?"row-clarify":""}
      onRowClick=${b=>J(b.inv.status==="draft"?`/invoices/${b.inv.id}/edit`:`/invoices/${b.inv.id}`)}
      empty=${y.invoices.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${pe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${I} variant="primary" icon="plus" onClick=${()=>J("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${ca} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function rr({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?qe(e.id).filter(w=>w.id!==n.id):qe(e.id),o=e.totals?e.totals.totalCents:0,c=i?Ne(r):s?Math.max(o-Ne(r),0):sa(e),p=y.settings.paymentMethods||[],[u,d]=S(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:q(),amountCents:c,method:p[0]||"",note:""}),[m,f]=S(!1),[$,h]=S(""),[v,g]=S(!1),b=w=>G=>d(A=>({...A,[w]:G})),C=i?"Erstattung":"Zahlung",x=!i&&!s?c-(Number(u.amountCents)||0):0,N=u.method&&!p.includes(u.method)?[u.method,...p]:p;async function E(){g(!0);let w=x>0&&m?$.trim()||`Differenz von ${V(x,e.currency)} offen (eingegangen: ${V(u.amountCents,e.currency)} am ${Z(u.date)}).`:"",G=await _(()=>s?nl(n.id,u):i?il(e.id,u):Ba(e.id,{...u,clarify:w}));g(!1),G&&(s?U(`${C} geändert`,"good"):i?U("Erstattung eingetragen","good"):x>0?U(w?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):U("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${We} title=${`${C} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${E}
    footer=${l`<${I} onClick=${a}>Abbrechen<//><${I} variant="primary" type="submit" busy=${v}>${s?"Änderung speichern":`${C} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${V(c,e.currency)}.`:s?`Höchstens ${V(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${V(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${Be} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${u.amountCents} onChange=${b("amountCents")} min=${0} />
      <${je} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${u.date} onInput=${b("date")} max=${q()} />
      <${ce} class="span-6" label="Zahlungsart" value=${u.method} onChange=${b("method")} options=${N} placeholder="Keine Angabe" />
      <${K} class="span-6" label="Notiz" value=${u.note} onInput=${b("note")} />
    </div>
    ${x>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${V(x,e.currency)}</strong> offen.</p>
      <${Ve} label="Differenz muss geklärt werden" checked=${m} onChange=${f}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${le} label="Was ist zu klären?" value=${$} onInput=${h} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function or(e){let t=yt(e.prev.doc,"invoices"),n=await oa(Wa(t));st(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${Z(zn(new Date(e.at)))}).pdf`))}function lr({entityId:e}){let[t,n]=S(""),a=y.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await _(()=>or(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${Ze(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${I} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function Xl({id:e}){ge();let t=k("invoices",e),[n,a]=S(null),[s,i]=S(t&&t.internalNotes||""),[r,o]=S("");if(!t)return l`<${pe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${I} onClick=${()=>J("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>J(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=Us(t),p=[...qe(e)].sort((M,te)=>M.date<te.date?-1:1),u=[...sn(e)].sort((M,te)=>M.createdAt<te.createdAt?-1:1),d=Ne(p),m=sa(t),f=t.type==="credit_note",$=yt(t,"invoices"),h=t.relatedInvoiceId?k("invoices",t.relatedInvoiceId):null,v=t.creditNoteId?k("invoices",t.creditNoteId):null,g=t.quoteId?k("quotes",t.quoteId):null,b=!f&&m>0,C=!f&&t.status==="credited"&&d>0,x=!f&&["issued","sent"].includes(t.status),N=t.fx?Number(t.fx.usdToEur):null;async function E(){o("pdf"),await _(()=>qs(t,"invoices")),o("")}async function w(){if(d>0){U("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let M=await oe({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(M===null)return;await _(async()=>(await Ts(e,M),!0))&&U("Rechnung storniert","good")}async function G(){if(!await oe({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${p.length?` Die eingetragenen Zahlungen (${V(d,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await _(()=>tl(e))&&(U(`${t.number} ist wieder ein Entwurf`,"good"),J(`/invoices/${e}/edit`))}async function A(){if(!await oe({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await _(()=>ol(e))&&U("Stornierung zurückgenommen","good")}async function D(){let M=f?t:v,te=f?h:t;if(!M||!await oe({title:`Gutschrift ${M.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${te?` Die Rechnung ${te.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let B=await _(()=>qi(M.id));B&&(U(`Gutschrift ${B.creditNumber} zurückgenommen`,"good"),f&&J(B.invoiceId?`/invoices/${B.invoiceId}`:"/invoices",{replace:!0}))}async function R(){await Vs(t)&&J("/invoices",{replace:!0})}async function z(){let M=await oe({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(M===null)return;await _(()=>al(e,M))&&U("Klärung vermerkt","good")}async function H(){let M=await oe({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${V(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(M===null)return;await _(()=>sl(e,M))&&U("Klärung erledigt","good")}async function F(){let M=await oe({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${V(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${d>0?` Zu dieser Rechnung sind bereits ${V(d,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(M===null)return;let te=await _(()=>As(e,M));te&&(U(`Gutschrift ${te.number} erstellt`,"good"),J(`/invoices/${te.id}`))}async function L(M){if(!await oe({title:"Zahlung löschen?",text:`Die Zahlung über ${V(M.amountCents,t.currency)} vom ${Z(M.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await _(async()=>(await rl(M.id),!0))&&U("Zahlung gelöscht","good")}async function ee(){await _(async()=>(await Ns("invoices",e,s),!0))&&U("Notiz gespeichert","good")}return l`
    <${we} title=${l`${f?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${qa} inv=${t} /> <span class="head-meta">${Le(t)}</span>`}>
      <${I} icon="download" busy=${r==="pdf"} onClick=${E}>PDF<//>
      ${!f&&t.status==="issued"&&l`<${I} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${I} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${b&&l`<${I} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${bt} items=${[!f&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>_(()=>Rn(e,!0))},!f&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!f&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>_(()=>Rn(e,!1))},!f&&m>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},x&&{label:"Zurück in den Entwurf",icon:"edit",onClick:G},!f&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:z},!f&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>J(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:A},(f||t.status==="credited"&&v)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:f,onClick:D},x&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:F},x&&{label:"Stornieren",icon:"x",danger:!0,onClick:w},!f&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:R}]} />
    <//>

    ${t.clarify&&l`<${Ie} tone="warn" action=${l`<div class="notice-actions">
        <${I} small onClick=${z}>Ändern<//>
        <${I} small variant="primary" icon="check" onClick=${H}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${Ze(t.clarify.at)} · ${m>0?`offen sind ${V(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${Ie} tone="warn" action=${l`<${I} small icon="undo" onClick=${A}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${Ze(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${v&&l`<${Ie} tone="info" action=${l`<${I} small onClick=${()=>J(`/invoices/${v.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${v.number} erstellt.
    <//>`}
    ${h&&l`<${Ie} tone="info" action=${l`<${I} small onClick=${()=>J(`/invoices/${h.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${h.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${da} model=${$} />
      </div>
      <aside class="split-side">
        <${Q} title="Stand">
          <${cn} rows=${[["Unternehmen",l`<${Oe} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Le(t)}</a>`],["Gesamtbetrag",l`<${Wt} doc=${t} />`],!f&&["Bezahlt",V(d,t.currency)],!f&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${V(m,t.currency)}</span>`],!f&&t.dueDate&&["Fällig am",l`${Z(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${Ln(t.dueDate,q())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",Ze(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",Ze(t.firstFinalizedAt)],t.sentAt&&["Versendet",Ze(t.sentAt)],g&&["Aus Angebot",l`<a href=${`#/quotes/${g.id}`}>${g.number}</a>`]]} />
        <//>

        ${!f&&l`<${Q} title="Zahlungen" action=${b?l`<${I} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:C&&l`<${I} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${p.length?l`<ul class="plain-list">
                ${p.map(M=>l`<li class="row-between" key=${M.id}>
                  <span><span class="strong">${V(M.amountCents,t.currency)}</span>
                    <span class="cell-sub">${M.amountCents<0?"Erstattung, ":""}${Z(M.date)}${M.method?`, ${M.method}`:""}${M.note?` – ${M.note}`:""}</span></span>
                  <span class="row-actions">
                    <${I} variant="ghost" small icon="edit" title=${M.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:M})} />
                    <${I} variant="ghost" small icon="trash" title=${M.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>L(M)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${u.length>0&&l`<${Q} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${u.map(M=>l`<li class="row-between" key=${M.id}>
              <span>${(gt.find(te=>te.id===M.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${Z(M.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${Q} title="Wechselkurs">
          ${N?l`<p class="strong">1 USD = ${Xn(N)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${Z(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${Q} title="Interne Notiz">
          <${le} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${I} small variant="primary" onClick=${ee}>Notiz speichern<//></div>`}
        <//>

        <${Q} title="Verlauf"><${lr} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${rr} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${rr} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${rr} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${ca} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${ca} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}var ec=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function tc(){ge();let[e,t]=S(""),[n,a]=S("all"),s=!xe(),i=q(),r=ve(()=>y.quotes.filter(He).map(p=>({quote:p,status:Cn(p,i)})),[y.version,y.settings.activeCompany]),o=r.filter(p=>ec.find(u=>u.id===n).test(p.status)).filter(p=>Re(e,p.quote.number,Le(p.quote),(p.quote.items||[]).map(u=>u.name).join(" "))),c=[{key:"number",label:"Nummer",class:"nw",sort:p=>p.quote.number||"",render:p=>l`<span class="cell-main">${p.quote.number||"Entwurf"}</span>`},{key:"customer",label:"Kontakt",sort:p=>Le(p.quote),render:p=>Le(p.quote)},...s?[{key:"company",label:"Unternehmen",render:p=>l`<${Oe} id=${p.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:p=>p.quote.issueDate,render:p=>Z(p.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:p=>p.quote.validUntil||"",render:p=>Z(p.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:p=>at(p.quote.totals?p.quote.totals.totalCents:0,p.quote.currency,p.quote.fx)||0,render:p=>l`<${Wt} doc=${p.quote} />`},{key:"status",label:"Status",sort:p=>p.status,render:p=>l`<${Za} quote=${p.quote} />`}];return l`
    <${we} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung.">
      <${I} variant="primary" icon="plus" onClick=${()=>J("/quotes/new")}>Neues Angebot<//>
    <//>
    ${y.quotes.length>0&&l`<div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Nummer, Kontakt, Leistung" />
      <${ln} label="Status" value=${n} onChange=${a}
        options=${ec.map(p=>({id:p.id,label:p.label,count:r.filter(u=>p.test(u.status)).length}))} />
    </div>`}
    <${ot} columns=${c} rows=${o} rowKey=${p=>p.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${p=>J(p.quote.status==="draft"?`/quotes/${p.quote.id}/edit`:`/quotes/${p.quote.id}`)}
      empty=${y.quotes.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${pe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${I} variant="primary" icon="plus" onClick=${()=>J("/quotes/new")}>Erstes Angebot schreiben<//>
          <//>`} />
  `}function nc({id:e}){ge();let t=k("quotes",e),[n,a]=S(null),[s,i]=S(t&&t.internalNotes||""),[r,o]=S("");if(!t)return l`<${pe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${I} onClick=${()=>J("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>J(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=Cn(t,q()),p=yt(t,"quotes"),u=t.invoiceId?k("invoices",t.invoiceId):null,d=["open","sent","expired"].includes(c);async function m(){o("pdf"),await _(()=>qs(t,"quotes")),o("")}async function f(v,g){await _(async()=>(await Bn(e,v),!0))&&U(g,"good")}async function $(){if(!await oe({title:"In Rechnung umwandeln?",text:`Aus dem Angebot ${t.number} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let g=await _(()=>dl(e));o(""),g&&(U("Rechnungsentwurf angelegt","good"),J(`/invoices/${g.id}/edit`))}async function h(){await _(async()=>(await Ns("quotes",e,s),!0))&&U("Notiz gespeichert","good")}return l`
    <${we} title=${`Angebot ${t.number}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${Za} quote=${t} /> <span class="head-meta">${Le(t)}</span>`}>
      <${I} icon="download" busy=${r==="pdf"} onClick=${m}>PDF<//>
      ${c==="open"&&l`<${I} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${!u&&c!=="declined"&&l`<${I} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${$}>In Rechnung umwandeln<//>`}
      <${bt} items=${[d&&{label:"Als angenommen markieren",icon:"check",onClick:()=>f("accepted","Angebot angenommen")},d&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>f("declined","Angebot abgelehnt")},c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!u&&{label:"Wieder öffnen",icon:"undo",onClick:()=>f("open","Angebot wieder geöffnet")},{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>J(`/quotes/new?copy=${e}`)}]} />
    <//>

    ${u&&l`<${Ie} tone="info" action=${l`<${I} small onClick=${()=>J(`/invoices/${u.id}${u.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${u.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${u.number}`}.
    <//>`}
    ${c==="expired"&&l`<${Ie} tone="warn">Dieses Angebot ist seit dem ${Z(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main"><${da} model=${p} /></div>
      <aside class="split-side">
        <${Q} title="Stand">
          <${cn} rows=${[["Unternehmen",l`<${Oe} id=${t.companyId} />`],["Kontakt",l`<a href=${`#/customers/${t.customerId}`}>${Le(t)}</a>`],["Angebotssumme",l`<${Wt} doc=${t} />`],["Gültig bis",Z(t.validUntil)],["Erstellt",Ze(t.finalizedAt)],t.sentAt&&["Versendet",Ze(t.sentAt)],t.decidedAt&&["Entschieden",Ze(t.decidedAt)]]} />
        <//>
        <${Q} title="Interne Notiz">
          <${le} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${I} small variant="primary" onClick=${h}>Notiz speichern<//></div>`}
        <//>
        <${Q} title="Verlauf"><${lr} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${ca} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
  `}function cr({service:e,onClose:t,onSaved:n}){let a=!e||!k("services",e.id),[s,i]=S(()=>({...e||nn()})),[r,o]=S(!1),c=m=>f=>i($=>({...$,[m]:f})),p=y.settings.serviceCategories||[],u=Fn.includes(s.unit)||!s.unit?Fn:[...Fn,s.unit];async function d(){o(!0);let m=await _(()=>Cs(s));o(!1),m&&(U(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${We} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${d}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${K} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${K} class="span-2" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${le} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${le} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${Be} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${ce} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${et} />
      <${ce} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${u} />
      <${Be} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${Be} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${ce} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${p.includes(s.category)||!s.category?p:[...p,s.category]} />
      <${ce} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${me().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${Ve} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${Ve} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function ac(){ge();let[e,t]=S(""),[n,a]=S(""),[s,i]=S(null),r=Nt(),o=y.services.filter(d=>r&&d.companyId&&d.companyId!==r||n&&d.category!==n?!1:Re(e,d.name,d.internalName,d.description,d.invoiceText,d.category)),c=[...new Set(y.services.map(d=>d.category).filter(Boolean))].sort((d,m)=>d.localeCompare(m,"de"));async function p(d){if(!await oe({title:"Leistung löschen?",text:`„${d.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Jo(d.id),!0))&&U("Leistung gelöscht","good")}let u=[{key:"name",label:"Leistung",sort:d=>d.name,render:d=>l`<div class="cell-main">${d.name}${d.active===!1&&l` <${Ue} tone="mute">Inaktiv<//>`}</div>
        ${(d.internalName||d.invoiceText)&&l`<div class="cell-sub clamp-1">${d.internalName||d.invoiceText}</div>`}`},{key:"category",label:"Kategorie",sort:d=>d.category,render:d=>d.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:d=>(k("companies",d.companyId)||{}).name||"",render:d=>{let m=k("companies",d.companyId);return m?l`<span class="co-tag"><${ks} company=${m} />${m.shortName||m.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:d=>d.recurring?1:0,render:d=>d.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:d=>d.unit},{key:"tax",label:"Steuer",align:"right",render:d=>d.taxRate!=null&&d.taxRate!==""?ht(d.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:d=>d.priceCents,render:d=>V(d.priceCents,d.currency)},{key:"actions",label:"",align:"right",render:d=>l`<${I} variant="ghost" small icon="trash" title=${`${d.name} löschen`} onClick=${()=>p(d)} />`}];return l`
    <${we} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <${I} variant="primary" icon="plus" onClick=${()=>i(nn({companyId:""}))}>Neue Leistung<//>
    <//>
    ${y.services.length>0&&l`<div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${c.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${d=>a(d.target.value)}>
        <option value="">Alle Kategorien</option>
        ${c.map(d=>l`<option value=${d}>${d}</option>`)}
      </select>`}
    </div>`}
    <${ot} columns=${u} rows=${o} initialSort=${{key:"name",dir:"asc"}} onRowClick=${d=>i(d)}
      empty=${y.services.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${pe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${I} variant="primary" icon="plus" onClick=${()=>i(nn())}>Erste Leistung anlegen<//>
          <//>`} />
    ${s&&l`<${cr} service=${s} onClose=${()=>i(null)} />`}
  `}var gd={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function Gs(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&et.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function hd(e,t,n){if(t&&t!=="new"){let r=k(e,t);return r?ye(r):null}let a=me(),s=xe()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&k("invoices",n.copy))i=ll(k("invoices",n.copy));else if(e==="invoices")i=kt(s);else if(n.copy&&k("quotes",n.copy)){let r=k("quotes",n.copy),o=k("companies",r.companyId)||s;i=Vn(o,{validUntil:Ae(q(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:xa().id})),discount:ye(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=Vn(s,{validUntil:Ae(q(),30)});return n.customer&&k("customers",n.customer)&&(i=Gs(i,k("customers",n.customer),k("companies",i.companyId),e)),i}function ur({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=S(null),r=Te(null),o=e.items||[],c=e.currency;ue(()=>{if(!s||!r.current)return;let h=r.current.querySelector(`[data-item="${s}"] .combo-input`);h&&h.focus(),i(null)},[s,o.length]);let p=ve(()=>y.services.filter(h=>h.active!==!1&&(!h.companyId||h.companyId===e.companyId)).sort((h,v)=>h.name.localeCompare(v.name,"de")).map(h=>({id:h.id,label:h.name,search:`${h.internalName} ${h.category}`,sub:`${V(h.priceCents,h.currency)} je ${h.unit}`})),[y.version,e.companyId]),u=(h,v)=>n(o.map(g=>g.id===h?{...g,...v}:g)),d=h=>n(o.filter(v=>v.id!==h));function m(h,v){let g=h+v;if(g<0||g>=o.length)return;let b=[...o];[b[h],b[g]]=[b[g],b[h]],n(b)}function f(){let h=xa({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,h]),i(h.id)}function $(h,v){let g=k("services",v);if(!g)return;let b=ft(g,t),C=b.priceCents;if(g.currency&&g.currency!==c){let x=e.fx?Ut(g.currency,e.fx.usdToEur):null,N=x?Vt(C,g.currency,c,x):null;N!=null?(C=N,U(`Preis von ${g.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):U(`Die Leistung ist in ${g.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}u(h,{...b,id:h,priceCents:C})}return l`<div class="items" ref=${r}>
    ${o.map((h,v)=>l`<div class="item" key=${h.id} data-item=${h.id}>
      <div class="item-top">
        <span class="item-pos">${v+1}</span>
        <div class="item-name">
          <${Nn} freeText options=${p} text=${h.name} label=${`Position ${v+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${g=>u(h.id,{name:g,serviceId:h.serviceId&&k("services",h.serviceId)&&k("services",h.serviceId).name===g?h.serviceId:""})}
            onChange=${g=>$(h.id,g)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${v+1} nach oben`} disabled=${v===0} onClick=${()=>m(v,-1)}><${ae} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${v+1} nach unten`} disabled=${v===o.length-1} onClick=${()=>m(v,1)}><${ae} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${v+1} entfernen`} onClick=${()=>d(h.id)}><${ae} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String(h.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${v+1}: Beschreibung`}
        value=${h.description} onInput=${g=>u(h.id,{description:g.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${Ye} value=${h.qty} digits=${3} onChange=${g=>u(h.id,{qty:g})} aria-label=${`Position ${v+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${h.unit} aria-label=${`Position ${v+1}: Einheit`}
            onInput=${g=>u(h.id,{unit:g.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${Ye} mode="money" value=${h.priceCents} onChange=${g=>u(h.id,{priceCents:g})} aria-label=${`Position ${v+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${Ye} value=${h.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${g=>u(h.id,{discountPct:g})} aria-label=${`Position ${v+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${Ye} value=${h.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g=>u(h.id,{taxRate:g})} aria-label=${`Position ${v+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${V(Si(h),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${Fn.map(h=>l`<option value=${h}></option>`)}</datalist>
    <div class="items-foot">
      <${I} icon="plus" onClick=${f}>Position hinzufügen<//>
      <${I} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function Ya({coll:e,id:t,params:n}){ge();let a=gd[e],[s,i]=S(()=>hd(e,t,n||{})),[r,o]=S(!1),[c,p]=S({loading:!1,error:""}),[u,d]=S(""),[m,f]=S(""),[$,h]=S([]),[v,g]=S(null),[b,C]=S(!1),x=Te(0),N=Te(!0),E=P=>{i(P),o(!0)},w=P=>Y=>E(Ke=>({...Ke,[P]:Y}));ue(()=>(r?$s(bs):Sn(),()=>Sn()),[r]);let G=s?k("companies",s.companyId):null,A=s?k("customers",s.customerId):null,D=s?`${s.currency}|${s.issueDate}`:"";async function R(P){if(!s||!be(s.issueDate)||!P&&s.fx&&s.fx.manual)return;let Y=++x.current,Ke=s.currency,Qt=s.issueDate;p({loading:!0,error:""});try{let Tt=await Ia(Ke,Qt);if(Y!==x.current)return;i(Qe=>Qe.currency===Ke&&Qe.issueDate===Qt?{...Qe,fx:Tt}:Qe),P&&o(!0),p({loading:!1,error:""})}catch(Tt){if(Y!==x.current)return;i(Qe=>Qe.fx&&!Qe.fx.manual&&Qe.fx.forDate&&be(Qe.issueDate)&&Qe.fx.forDate!==Tn(Qe.issueDate)?{...Qe,fx:null}:Qe),p({loading:!1,error:Tt.message})}}if(ue(()=>{let P=N.current;N.current=!1,!(!s||s.status!=="draft")&&(P&&s.number&&s.fx||R(!1))},[D]),ue(()=>{let P=!0;if(!s||!G){d("");return}if(s.number){d(s.number);return}return Aa(G,a.numberKind,s.issueDate).then(Y=>{P&&d(Y)}).catch(()=>{P&&d("")}),()=>{P=!1}},[s&&s.companyId,s&&s.issueDate,y.version]),!s)return l`<${pe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${I} onClick=${()=>J(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>rn(`${a.list}/${s.id}`),0),null;let z=Ct(s),H=s.fx?Ut(s.currency,s.fx.usdToEur,s.fx):null,F={...s,fx:H,totals:z,dueDate:e==="invoices"?Pi(s):""},L=yt(F,e,{previewNumber:u}),ee=s.currency==="USD"?"EUR":"USD",M=H?Vt(z.totalCents,s.currency,ee,H):null,te=me(),de=!!k(e,s.id),B=e==="invoices"&&s.number?s.number:"",Ee=B?s.reopened||{}:null,Pe=B?Ne(qe(s.id)):0,Un=y.customers.filter(P=>P.active!==!1||P.id===s.customerId).sort((P,Y)=>+!Se(P)-+!Se(Y)||j(P).localeCompare(j(Y),"de")).map(P=>({id:P.id,label:j(P),sub:[Se(P)?"":"Kontakt",P.number,P.city].filter(Boolean).join(", "),search:`${P.firstName} ${P.lastName} ${P.contact} ${P.email}`}));function Xs(P){let Y=k("companies",P),Ke=k("companies",s.companyId);if(!Y){E(ct=>({...ct,companyId:""}));return}let Qt=e==="quotes"?"quoteText":"invoiceText",Tt=(ct,Lt)=>String(ct||"")===String(Lt||"");E(ct=>{let Lt=k("customers",ct.customerId),Pt={...ct,companyId:P};(!ct.intro||Ke&&Tt(ct.intro,Ke[Qt]))&&(Pt.intro=Y[Qt]||""),(!ct.paymentTerms||Ke&&Tt(ct.paymentTerms,Ke.paymentTerms))&&(Pt.paymentTerms=Y.paymentTerms||""),(!ct.footer||Ke&&Tt(ct.footer,Ke.footer))&&(Pt.footer=Y.footer||""),Lt&&Lt.language||(Pt.language=Y.language),Lt&&Lt.currency||(Pt.currency=Y.currency),e==="invoices"&&!(Lt&&Lt.paymentTermDays!=null&&Lt.paymentTermDays!=="")&&(Pt.paymentTermDays=Y.paymentTermDays),Pt.showSecondary=Y.showSecondary;let Gc=Ke&&Number(Ke.defaultTaxRate)||0,Hc=Number(Y.defaultTaxRate)||0;return Pt.items=ct.items.map(fa=>{let ni=fa.serviceId?k("services",fa.serviceId):null;return(!ni||ni.taxRate==null||ni.taxRate==="")&&(Number(fa.taxRate)||0)===Gc?{...fa,taxRate:Hc}:fa}),Pt});let Qe=k("customers",s.customerId);s.items.length&&!(Qe&&Qe.currency)&&Y.currency!==s.currency&&U(`Währung auf ${Y.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Pc(P){let Y=k("customers",P),Ke=s.currency,Qt=Gs(s,Y,k("companies",s.companyId),e);E(Tt=>Gs(Tt,Y,k("companies",Tt.companyId),e)),s.items.length&&Qt.currency!==Ke&&U(`Währung auf ${Qt.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Kc(P){P!==s.currency&&(s.items.length&&U("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),E(Y=>({...Y,currency:P,fx:Y.fx?Ut(P,Y.fx.usdToEur,Y.fx):Y.fx})))}function Oc(P){P>0&&(x.current+=1,p({loading:!1,error:""}),E(Y=>({...Y,fx:Ut(Y.currency,P,{manual:!0,source:"Von Hand eingetragen",date:q(),fetchedAt:ne()})})))}function Fc(){let P=Ri("USD","EUR");P&&(E(Y=>({...Y,fx:Ut(Y.currency,P.rate,{manual:!0,source:`Letzter bekannter Kurs (${P.source})`,date:P.date,fetchedAt:P.fetchedAt})})),p({loading:!1,error:""}))}async function qc(){f("save");let P=await _(()=>e==="invoices"?Es(s):cl(s));f(""),P&&(i(ye(P)),o(!1),h([]),U("Entwurf gespeichert","good"),(t==="new"||!t)&&(Sn(),J(`${a.list}/${P.id}/edit`,{replace:!0})))}async function Zc(){if(c.loading){U("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let P=Is(F,e==="quotes"?"quote":"invoice");if(h(P),P.length){U("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await oe({title:`${a.finalize}?`,text:B?`Die Rechnung behält die Nummer ${B} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${u} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${u} und lässt sich danach nicht mehr ändern.`,list:[`${j(A)}`,`${V(z.totalCents,s.currency)}${M!=null?` (≈ ${V(M,ee)})`:""}`,...e==="invoices"&&A&&!Se(A)?[`${j(A)} ist bisher Kontakt und wird damit Kunde (neue Nummer ${un("customer")}).`]:[],...Pe>0?[Pe>z.totalCents?`Achtung: Eingegangen sind bereits ${V(Pe,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${V(Pe,s.currency)}`]:[]],confirmLabel:a.finalize}))return;f("finalize");let Ke=await _(()=>e==="invoices"?Ra(F):Ua(F));f(""),Ke&&(o(!1),U(`${a.one} ${Ke.number} ${B?"neu erstellt":"erstellt"}`,"good"),rn(`${a.list}/${Ke.id}`))}async function Vc(){if(B){await Vs(k("invoices",s.id)||s)&&rn(a.list);return}if(!await oe({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await(e==="invoices"?Ki(s.id):ul(s.id)),!0))&&(U("Entwurf gelöscht","good"),rn(a.list))}let ei=s.fx?Number(s.fx.usdToEur):null,ti=!!s.serviceDateEnd;return l`
    <${we} title=${B?`Rechnung ${B} bearbeiten`:de?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${B?"Entwurf – die Nummer bleibt erhalten":u?`Nächste Nummer: ${u}`:G?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${I} class="only-narrow" icon="eye" onClick=${()=>C(!b)}>${b?"Formular":"Vorschau"}<//>
      ${de&&l`<${bt} items=${[{label:B?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:Vc}]} />`}
      <${I} icon="check" onClick=${qc} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${I} variant="primary" icon="invoice" onClick=${Zc} busy=${m==="finalize"} disabled=${!!m}>${a.finalize}<//>
    <//>

    ${B&&l`<${Ie} tone="info">
      Diese Rechnung war bereits erstellt${Ee.finalizedAt?` (${Ze(Ee.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${B}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${Pe>0?` Die eingetragenen Zahlungen (${V(Pe,s.currency)}) bleiben erhalten.`:""}
      ${Ee.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${$.length>0&&l`<${Ie} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${$.map(P=>l`<li>${P}</li>`)}</ul>
    <//>`}

    <div class=${`editor${b?" show-preview":""}`}>
      <div class="editor-form">
        <${Q} title=${e==="quotes"?"Aussteller und Empfänger":"Aussteller und Kunde"}>
          <div class="form-grid">
            <${ce} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${Xs}
              disabled=${!!B} hint=${B?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${te.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(B&&G&&!te.some(P=>P.id===G.id)?[G,...te]:te).map(P=>({id:P.id,label:P.name}))} />
            <${ke} class="span-3" label=${e==="quotes"?"Kontakt oder Kunde":"Kunde"} htmlFor="doc-customer">
              <${Nn} id="doc-customer" options=${Un} value=${s.customerId} placeholder=${e==="quotes"?"Kontakt suchen":"Kunde suchen"}
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${Pc}
                onCreate=${P=>g({type:"customer",seed:P})} createLabel=${e==="quotes"?"als Kontakt anlegen":"als Kunde anlegen"} />
            <//>
            <${je} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${w("issueDate")} />
            ${e==="invoices"&&l`
              <${je} class="span-2" label=${ti?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${w("serviceDate")} />
              ${ti?l`<${je} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${w("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>w("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Be} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${w("paymentTermDays")}
                hint=${F.dueDate?`Fällig am ${Z(F.dueDate)}`:""} />
              ${ti&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>w("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${je} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${w("validUntil")} min=${s.issueDate} />`}
            <${ce} class="span-2" label="Währung" value=${s.currency} onChange=${Kc} options=${et} />
            <${ce} class="span-2" label="Belegsprache" value=${s.language} onChange=${w("language")} options=${xt} />
          </div>
        <//>

        <${Q} title="Positionen">
          <${ur} doc=${s} company=${G} onChange=${P=>E(Y=>({...Y,items:P}))}
            onNewService=${()=>g({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${pt} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${P=>E(Y=>({...Y,discount:{type:P,value:0}}))} />
                ${s.discount.type==="abs"?l`<${Ye} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${P=>E(Y=>({...Y,discount:{type:"abs",value:P}}))} />`:l`<${Ye} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${P=>E(Y=>({...Y,discount:{type:"pct",value:P}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${V(z.subtotalCents,s.currency)}</dd></div>
              ${z.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${V(-z.discountCents,s.currency)}</dd></div>`}
              ${z.taxGroups.filter(P=>P.rate!==0).map(P=>l`<div><dt>${G&&G.taxLabel||"Steuer"} ${ht(P.rate)}</dt><dd>${V(P.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${V(z.totalCents,s.currency)}</dd></div>
              ${M!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${V(M,ee)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${Q} title="Wechselkurs">
          ${c.error&&l`<${Ie} tone="warn" action=${Ri("USD","EUR")&&l`<${I} small onClick=${Fc}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${Ye} value=${ei} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${Oc} />
            <span class="fx-eq">EUR</span>
            <${I} small icon="refresh" busy=${c.loading} onClick=${()=>R(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${Z(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&ei?` Das entspricht 1 EUR = ${Xn(1/ei)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${Ve} label=${`Betrag zusätzlich in ${ee} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${w("showSecondary")} />
        <//>

        <${Q} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${le} class="span-6" label="Einleitung" value=${s.intro} onInput=${w("intro")} rows=${2} />
            <${le} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${w("paymentTerms")} rows=${2} />
            <${le} class="span-6" label="Fußzeile" value=${s.footer} onInput=${w("footer")} rows=${2} />
          </div>
        <//>

        <${Q} title="Interne Notiz">
          <${le} value=${s.internalNotes} onInput=${w("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${L.fileName}</span>
          </div>
          <${da} model=${L} />
        </div>
      </div>
    </div>

    ${v&&v.type==="customer"&&l`<${la}
      customer=${tn({company:v.seed||"",kind:e==="quotes"?"contact":"customer"})} onClose=${()=>g(null)}
      onSaved=${P=>E(Y=>Gs(Y,P,k("companies",Y.companyId),e))} />`}
    ${v&&v.type==="service"&&l`<${cr}
      service=${nn({companyId:"",currency:s.currency})} onClose=${()=>g(null)}
      onSaved=${P=>E(Y=>({...Y,items:[...Y.items,ft(P,k("companies",Y.companyId))]}))} />`}
  `}var $d=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],bd=15*1024*1024;function sc(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function vd(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function dr(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function Hs(e,t,n){let a=await vd(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var yd=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function mr(e,{shrink:t=!0}={}){if(e.size>bd)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(yd(e))try{let{canvas:a}=await Hs(e,2e3,"#ffffff");return{blob:await dr(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!$d.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await Hs(e,2e3,"#ffffff"),i=await dr(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function ic(e){let{canvas:t}=await Hs(e,1568,"#ffffff");return dr(t,"image/jpeg",.85)}async function rc(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await Hs(e,800,null);return t.toDataURL("image/png")}async function js(e){let t=await ro("blobs",e);return t?t.blob:null}var oc="https://api.anthropic.com/v1/messages",zt=class extends Error{};function wd(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var xd=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function kd({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[wd(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:xd}]}]}}var wt=e=>typeof e=="string"?e.trim():"",pr=e=>Number.isFinite(Number(e))?ws(Number(e)):0;function Dd(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(f=>f.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new zt("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new zt("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=wt(s.currency).toUpperCase();cs.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=pr(s.net_amount),c=pr(s.tax_amount),p=pr(s.total_amount);p&&o+c!==p&&(!o&&c<=p||Math.abs(o+c-p)<=2?o=p-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let u=be(wt(s.invoice_date))?wt(s.invoice_date):"";u||i.push("Das Belegdatum wurde nicht erkannt.");let d=be(wt(s.payment_date))?wt(s.payment_date):"",m=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:wt(s.vendor).slice(0,200),description:wt(s.description).slice(0,300),invoiceNumber:wt(s.invoice_number).slice(0,80),invoiceDate:u,paymentDate:d,currency:r,netCents:o,taxCents:c,totalCents:p||o+c,paymentMethod:n.includes(wt(s.payment_method))?wt(s.payment_method):"",category:t.includes(wt(s.category))?wt(s.category):""},uncertain:m,warnings:i,usage:e.usage||null}}function lc(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function cc(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new zt("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await ic(e),r="image/jpeg");let o=await sc(i),c=kd({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),p;try{p=await fetch(oc,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new zt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let u=null;try{u=await p.json()}catch{}if(!p.ok)throw new zt(lc(p.status,u));return Dd(u,{categories:a,paymentMethods:s})}async function uc({apiKey:e,model:t}){if(!e)throw new zt("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(oc,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new zt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new zt(lc(n.status,a));return!0}var Ws=new Set,fr=new Set,dc=()=>fr.forEach(e=>e(new Set(Ws)));function Sd(){let[e,t]=S(new Set(Ws));return ue(()=>(fr.add(t),()=>fr.delete(t)),[]),e}var Cd=()=>({apiKey:y.settings.aiApiKey,model:y.settings.aiModel,categories:y.settings.expenseCategories||[],paymentMethods:y.settings.paymentMethods||[]});async function mc(e){let t=await js(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return cc(t,Cd())}async function Ed(e,t){try{return await Ia(e,be(t)?t:q())}catch{return null}}async function Id(e){let t=await mr(e,{shrink:y.settings.shrinkImages!==!1}),n=xe()||(me().length===1?me()[0]:null),a=ka({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:y.settings.aiApiKey?"pending":"none"}}),s=await Zi({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await dn(a),!y.settings.aiApiKey)return a;Ws.add(a.id),dc();try{let i=await mc(s.id),r=i.fields,o=r.currency||a.currency,c=await Ed(o,r.invoiceDate),p=k("expenses",a.id);p&&p.status==="review"&&(a=await dn({...p,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:y.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=k("expenses",a.id);throw r&&await dn({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{Ws.delete(a.id),dc()}return a}function Nd({attachmentId:e}){let[t,n]=S(""),[a,s]=S(!1),i=k("attachments",e);ue(()=>{let o="",c=!0;return n(""),s(!1),js(e).then(p=>{if(c){if(!p){s(!0);return}o=URL.createObjectURL(p),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await js(e);o&&st(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${ae} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${Kn(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function Td({expense:e,onClose:t}){let n=!k("expenses",e.id),a=e.status==="review",[s,i]=S(()=>{let L=ye(e);if(!L.invoiceDate&&!a&&(L.invoiceDate=q()),!L.companyId){let ee=xe()||(me().length===1?me()[0]:null);ee&&(L.companyId=ee.id)}return L}),[r,o]=S(""),[c,p]=S(""),[u,d]=S(0),m=Te([]),f=Te(null),$=L=>ee=>i(M=>({...M,[L]:ee})),h=(s.attachmentIds||[])[0],v=s.ai||{},g=new Set(v.uncertain||[]),b=`${s.currency}|${s.invoiceDate}`;ue(()=>{let L=!0;if(!be(s.invoiceDate)||s.fx&&s.fx.manual)return;let ee=(de,B)=>!!de&&de.forCurrency===B.currency&&de.forDate===Tn(B.invoiceDate);if(ee(s.fx,s))return;p("");let M=s.currency,te=s.invoiceDate;return Ia(M,te).then(de=>{L&&i(B=>B.currency===M&&B.invoiceDate===te&&!(B.fx&&B.fx.manual)?{...B,fx:de}:B)}).catch(de=>{L&&(i(B=>B.fx&&!B.fx.manual&&B.fx.forDate&&!ee(B.fx,B)?{...B,fx:null}:B),p(de.message))}),()=>{L=!1}},[b,u]);function C(L,ee){i(M=>{let te={...M,[L]:ee};return L==="totalCents"?te.netCents=(ee||0)-(M.taxCents||0):te.totalCents=(te.netCents||0)+(te.taxCents||0),te})}function x(L,ee){ee>0&&i(M=>{let de={...M.fx||{rateToUSD:M.currency==="USD"?1:null,usdToEur:null},[L]:ee,manual:!0,source:"Von Hand eingetragen",date:q(),fetchedAt:ne()};return M.currency==="USD"&&(de.rateToUSD=1),M.currency==="EUR"&&L==="usdToEur"&&(de.rateToUSD=1/ee),{...M,fx:de}})}async function N(L){if(!L)return;o("file");let ee=await _(async()=>{let M=await mr(L,{shrink:y.settings.shrinkImages!==!1});return Zi({blob:M.blob,name:M.name,ownerType:"expense",ownerId:s.id})});o(""),ee&&(m.current.push(ee.id),i(M=>({...M,attachmentIds:[ee.id,...M.attachmentIds||[]]})))}async function E(){if(!await oe({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let ee=h;await _(()=>Vi(ee)),i(te=>({...te,attachmentIds:(te.attachmentIds||[]).filter(de=>de!==ee)}));let M=k("expenses",s.id);M&&await _(()=>dn({...M,attachmentIds:(M.attachmentIds||[]).filter(te=>te!==ee)}))}async function w(){if(h){o("ai");try{let L=await mc(h),ee=L.fields;i(M=>({...M,...ee,currency:ee.currency||M.currency,fx:null,ai:{status:"done",at:ne(),model:y.settings.aiModel,uncertain:L.uncertain,warnings:L.warnings}})),d(M=>M+1),U("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(L){Jn(L)}o("")}}async function G(){let L=k("expenses",s.id),ee=new Set(L?L.attachmentIds||[]:[]);for(let M of m.current)ee.has(M)||await Vi(M).catch(()=>{});t()}async function A(){o("save");let L=await _(()=>dn({...s,status:"booked"}));o(""),L&&(U(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function D(){if(!await oe({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await ml(s.id),!0))&&(U("Ausgabe gelöscht","good"),t())}let R=L=>g.has(L)?"Von der KI als unsicher markiert – bitte prüfen":"",z=s.fx?mt(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,H=y.settings.expenseCategories||[],F=y.settings.paymentMethods||[];return l`<${We} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${G} size="xl" onSubmit=${A}
    footer=${l`
      ${!n&&l`<${I} variant="ghost" icon="trash" onClick=${D} class="push-left">Löschen<//>`}
      <${I} onClick=${G}>Abbrechen<//>
      <${I} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${h?l`<${Nd} attachmentId=${h} />
              <div class="receipt-actions">
                <${I} small icon="sparkle" busy=${r==="ai"} disabled=${!y.settings.aiApiKey} onClick=${w}
                  title=${y.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${I} small variant="ghost" icon="trash" onClick=${E}>Beleg entfernen<//>
              </div>
              ${!y.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>f.current&&f.current.click()}>
              <${ae} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${f} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${L=>{N(L.target.files[0]),L.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${v.status==="done"&&l`<${Ie} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(v.warnings||[]).length>0&&l`<ul class="notice-list">${v.warnings.map(L=>l`<li>${L}</li>`)}</ul>`}
        <//>`}
        ${v.status==="error"&&l`<${Ie} tone="warn">Automatisches Auslesen fehlgeschlagen: ${v.message}<//>`}
        <div class="form-grid">
          <${ce} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${$("companyId")} placeholder="Unternehmen wählen"
            options=${me().map(L=>({id:L.id,label:L.name}))} />
          <${ce} class="span-3" label="Kategorie" value=${s.category} onChange=${$("category")} placeholder="Keine"
            options=${H.includes(s.category)||!s.category?H:[...H,s.category]} hint=${R("category")} />
          <${K} class="span-4" label="Lieferant" value=${s.vendor} onInput=${$("vendor")} hint=${R("vendor")} />
          <${K} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${$("invoiceNumber")} hint=${R("invoice_number")} />
          <${K} class="span-6" label="Beschreibung" value=${s.description} onInput=${$("description")} />
          <${je} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${$("invoiceDate")} hint=${R("invoice_date")} />
          <${je} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${$("paymentDate")} hint=${R("payment_date")} />
          <${ce} class="span-2" label="Währung" value=${s.currency} hint=${R("currency")}
            onChange=${L=>i(ee=>({...ee,currency:L,fx:null}))} options=${cs} />
          <${Be} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${L=>C("netCents",L)} hint=${R("net_amount")} />
          <${Be} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${L=>C("taxCents",L)} hint=${R("tax_amount")} />
          <${Be} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${L=>C("totalCents",L)}
            hint=${R("total_amount")||(z!=null&&s.currency!=="USD"?`≈ ${V(z,"USD")}`:"")} />
          <${ce} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${$("paymentMethod")} placeholder="Keine Angabe"
            options=${F.includes(s.paymentMethod)||!s.paymentMethod?F:[...F,s.paymentMethod]} />
          <${ke} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${Z(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${Ye} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${L=>x("rateToUSD",L)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${Ye} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${L=>x("usdToEur",L)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${le} class="span-6" label="Notiz" value=${s.note} onInput=${$("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function pc(){ge();let e=Sd(),[t,n]=S(""),[a,s]=S(""),[i,r]=S("year"),[o,c]=S(null),[p,u]=S(!1),[d,m]=S(0),f=Te(null),$=!xe(),h=q(),v=ve(()=>y.expenses.filter(D=>He(D)||!D.companyId&&D.status==="review"),[y.version,y.settings.activeCompany]),g=v.filter(D=>D.status==="review").sort((D,R)=>D.createdAt<R.createdAt?1:-1),b=ut(i,h),C=v.filter(D=>D.status==="booked"),x=C.filter(D=>i==="all"||Ot(D.invoiceDate,b)).filter(D=>!a||D.category===a).filter(D=>Re(t,D.vendor,D.description,D.invoiceNumber,D.category,D.note,(D.totalCents/100).toFixed(2),(D.totalCents/100).toFixed(2).replace(".",","))),N=[...new Set(C.map(D=>D.category).filter(Boolean))].sort((D,R)=>D.localeCompare(R,"de")),E=x.reduce((D,R)=>(D.net+=at(R.netCents,R.currency,R.fx)||0,D.tax+=at(R.taxCents,R.currency,R.fx)||0,D.total+=at(R.totalCents,R.currency,R.fx)||0,D),{net:0,tax:0,total:0});async function w(D){let R=[...D];if(!R.length)return;if(!me().length){U("Lege zuerst ein Unternehmen an.","bad");return}m(H=>H+R.length);let z=0;for(let H of R)try{await Id(H),z+=1}catch(F){Jn(F)}finally{m(F=>F-1)}z&&U(z===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${z} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let G=[{key:"date",label:"Datum",sort:D=>D.invoiceDate,render:D=>Z(D.invoiceDate)},{key:"vendor",label:"Lieferant",sort:D=>D.vendor,render:D=>l`<div class="cell-main">${D.vendor}</div>${D.description&&l`<div class="cell-sub clamp-1">${D.description}</div>`}`},{key:"category",label:"Kategorie",sort:D=>D.category,render:D=>D.category||l`<span class="muted-text">–</span>`},...$?[{key:"company",label:"Unternehmen",render:D=>l`<${Oe} id=${D.companyId} />`}]:[],{key:"file",label:"Beleg",render:D=>(D.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${ae} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:D=>at(D.netCents,D.currency,D.fx)||0,render:D=>V(D.netCents,D.currency)},{key:"tax",label:"Steuer",align:"right",render:D=>D.taxCents?V(D.taxCents,D.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:D=>at(D.totalCents,D.currency,D.fx)||0,render:D=>l`<span class="dual"><span class="dual-main">${V(D.totalCents,D.currency)}</span>
        ${D.currency!==ie()&&at(D.totalCents,D.currency,D.fx)!=null&&l`<span class="dual-sub">≈ ${X(at(D.totalCents,D.currency,D.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:D=>D.paymentDate||"",render:D=>D.paymentDate?Z(D.paymentDate):l`<span class="muted-text">offen</span>`}],A=x.length?[`${x.length} ${x.length===1?"Ausgabe":"Ausgaben"}`,"","",...$?[""]:[],"",l`<span class="strong">${X(E.net)}</span>`,l`<span class="strong">${X(E.tax)}</span>`,l`<span class="strong">${X(E.total)}</span>`,l`<span class="muted-text">in ${ie()}</span>`]:null;return l`
    <${we} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${I} icon="plus" onClick=${()=>c(ka())}>Ausgabe von Hand<//>
      <${I} variant="primary" icon="upload" onClick=${()=>f.current&&f.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${p?" is-drag":""}`}
      onDragOver=${D=>{D.preventDefault(),u(!0)}}
      onDragLeave=${()=>u(!1)}
      onDrop=${D=>{D.preventDefault(),u(!1),w(D.dataTransfer.files)}}>
      <${ae} name="upload" size=${24} />
      <div>
        <strong>${d>0?`${d} ${d===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${y.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${f} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${D=>{w(D.target.files),D.target.value=""}} />
    </div>

    ${g.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${g.length}</span></h2>
      <ul class="review-list">
        ${g.map(D=>{let R=e.has(D.id),z=D.ai||{};return l`<li key=${D.id}>
            <button type="button" class="review-item" onClick=${()=>c(D)} disabled=${R}>
              <span class="review-icon"><${ae} name=${R?"refresh":"file"} class=${R?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${D.vendor||(k("attachments",(D.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${R?"Wird ausgelesen …":z.status==="error"?`Nicht ausgelesen: ${z.message}`:z.status==="done"?`${D.invoiceDate?Z(D.invoiceDate):"Datum fehlt"}, ${D.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${D.totalCents?V(D.totalCents,D.currency):""}</span>
              <span class="review-go">${R?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${C.length>0&&l`<div class="filters">
      <${vt} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${D=>r(D.target.value)}>
        ${bn.filter(D=>D.id!=="custom").map(D=>l`<option value=${D.id}>${D.label}</option>`)}
      </select>
      ${N.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${D=>s(D.target.value)}>
        <option value="">Alle Kategorien</option>
        ${N.map(D=>l`<option value=${D}>${D}</option>`)}
      </select>`}
    </div>`}
    ${(C.length>0||g.length===0)&&l`<${ot} columns=${G} rows=${x} initialSort=${{key:"date",dir:"desc"}} footer=${A} onRowClick=${D=>c(D)}
      empty=${C.length?l`<${pe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${pe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${Td} expense=${o} onClose=${()=>c(null)} />`}
  `}function Ad(e){let t=vn.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=Rs(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function Rd({rec:e,onClose:t}){let n=!k("recurring",e.id),[a,s]=S(()=>ye(e)),[i,r]=S(!1),o=$=>h=>s(v=>({...v,[$]:h})),c=k("companies",a.companyId),p=Ct(a),u=y.customers.filter($=>$.active!==!1||$.id===a.customerId).sort(($,h)=>j($).localeCompare(j(h),"de")).map($=>({id:$.id,label:j($),sub:[$.number,$.city].filter(Boolean).join(", ")}));function d($){let h=k("companies",$);s(v=>({...v,companyId:$,...h&&n?{currency:h.currency,language:h.language,paymentTermDays:h.paymentTermDays,intro:v.intro||h.invoiceText}:{}}))}function m($){let h=k("customers",$);s(v=>({...v,customerId:$,...h&&h.language?{language:h.language}:{},...h&&h.currency&&et.includes(h.currency)?{currency:h.currency}:{},...h&&h.paymentTermDays!=null&&h.paymentTermDays!==""?{paymentTermDays:Number(h.paymentTermDays)}:{}}))}async function f(){r(!0);let $=await _(()=>_a(a));r(!1),$&&(U("Vorlage gespeichert","good"),t())}return l`<${We} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${f}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${K} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${ce} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${d} placeholder="Unternehmen wählen"
        options=${me().map($=>({id:$.id,label:$.name}))} />
      <${ke} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${Nn} id="rec-customer" options=${u} value=${a.customerId} placeholder="Kunde suchen" onChange=${m} />
      <//>
      <${ce} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${vn.map($=>({id:$.id,label:$.label}))} />
      ${a.interval==="custom"&&l`<${Be} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${je} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${je} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${Be} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${ce} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${et} />
      <${ce} class="span-2" label="Belegsprache" value=${a.language} onChange=${o("language")} options=${xt} />
      <div class="span-6">
        <${Ve} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${$=>o("servicePeriod")($?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${ur} doc=${a} company=${c} onChange=${$=>s(h=>({...h,items:$}))}
      onNewService=${()=>U("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${V(p.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${le} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${Ve} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function fc(){ge();let[e,t]=S(null),[n,a]=S(""),s=q(),i=y.recurring.filter(He),r=i.filter(m=>ta(m,s)),o=!xe();async function c(m,f){let $=m.nextDate>s;if($&&!await oe({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${Z(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(m.id);let h=await _(()=>Gi(m.id,{early:$}));return a(""),h&&(U(`Rechnungsentwurf für ${j(k("customers",m.customerId))} angelegt`,"good"),f&&J(`/invoices/${h.id}/edit`)),h}async function p(){a("all");let m=0;for(let f of r){let $=0;for(;ta(k("recurring",f.id),s)&&$++<36&&await _(()=>Gi(f.id));)m+=1}a(""),m&&(U(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),J("/invoices?status=draft"))}async function u(m){if(!await oe({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await pl(m.id),!0))&&U("Vorlage gelöscht","good")}let d=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${j(k("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Oe} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>Ad(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>na(m)?l`<span class="muted-text">beendet</span>`:m.active?ta(m,s)?l`<span class="tone-warn">${Z(m.nextDate)}</span><div class="cell-sub">fällig</div>`:Z(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>V(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>na(m)?l`<${Ue} tone="mute">Beendet<//>`:m.active?l`<${Ue} tone="good">Aktiv<//>`:l`<${Ue} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${I} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||na(m)}
          title=${na(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(m,!0)}>Jetzt erzeugen<//>
        <${I} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>u(m)} />
      </div>`}];return l`
    <${we} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${I} variant="primary" icon="plus" onClick=${()=>t(Gn(xe()||(me().length===1?me()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${Ie} tone="warn" action=${l`<${I} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${p}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${ot} columns=${d} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${pe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${I} variant="primary" icon="plus" onClick=${()=>t(Gn(xe()||(me().length===1?me()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${Rd} rec=${e} onClose=${()=>t(null)} />`}
  `}var Js=null;function Bd(){return Js||(Js=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw Js=null,e})),Js}var Qs=e=>e&&typeof e=="object"?e.v:e,gc=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function gr(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function Ud(e){let t=[e.columns.map(n=>gr(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>gr(Qs(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>gr(Qs(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function Ys(e){let t=new Blob([Ud(e)],{type:"text/csv;charset=utf-8"});st(t,`${Ft(e.fileName)}.csv`)}async function hc(e){let t=await Bd(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(Qs));e.totals&&n.push(e.totals.map(Qs));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let p=t.utils.encode_cell({r:c,c:o}),u=a[p];u&&(typeof u.v=="number"&&r.type==="money"&&(u.z="#,##0.00"),typeof u.v=="string"&&/^[=+\-@]/.test(u.v)&&(u.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,Ft(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});st(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Ft(e.fileName)}.xlsx`)}async function $c(e){await Al({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(gc)),totals:e.totals?e.totals.map(gc):null,fileName:`${Ft(e.fileName)}.pdf`,landscape:e.columns.length>6})}function yc(e="year"){let[t,n]=S(e),[a,s]=S({from:`${q().slice(0,4)}-01-01`,to:q()}),i=ut(t,q(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function _d(e){let t=bn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${Z(e.range.from)} bis ${Z(e.range.to)}`}function wc({p:e}){let t=xe();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${bn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>be(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>be(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${Z(e.range.from)} bis ${Z(e.range.to)}`:""}</span>
  </div>`}var xc=(e,t)=>t?ht(Math.round(e/t*1e3)/10):"–",he=e=>({v:e/100,t:X(e)}),hn=e=>({v:e/100,t:ze(e)}),Fe=(e,t)=>({v:e/100,t:V(e,t)}),ma=e=>({v:e||"",t:e?Z(e):""}),fe={align:"right",type:"money"},gn={align:"right",type:"number"};function kc(){ge();let e=yc("year"),t=q(),n=Nt(),a=xe(),s=jt(),i=ve(()=>{let d={companyId:n,range:e.range},m=Yi(e.range,s,n),f=m.slice(-24);return{summary:wl(s,d,t),truncated:m.length>f.length,series:f.length?Pa(s,{companyId:n,months:f,range:e.range}):[],byCompany:Oa(s,d),byCustomer:Ka(s,d),byService:Fa(s,d),byCategory:Qi(s,d)}},[y.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(d=>({key:d.key,label:Pn(d.key),title:At(d.key),values:{rev:T(d,"revenue"),exp:T(d,"expense")}})),p={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(d=>[At(d.key),X(T(d,"revenue")),X(T(d,"expense")),X(T(d,"profit")),X(T(d,"payments"))])},u=d=>[...d].sort((m,f)=>T(f)-T(m));return l`
    <${we} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${ie()}, ${fn()} als Zweitwert.`}>
      <${I} icon="reports" onClick=${()=>J("/reports")}>Reports und Export<//>
    <//>
    <${wc} p=${e} />

    <div class="stat-row stat-row-3">
      <${Me} label="Einnahmen" value=${X(T(r.income))} sub=${`≈ ${ze(De(r.income))}, ${r.income.count} Rechnungen`} />
      <${Me} label="Ausgaben" value=${X(T(r.expenses))} sub=${`≈ ${ze(De(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Me} label="Gewinn" value=${X(T(r.profit))} tone=${T(r.profit)<0?"bad":"good"} sub=${`≈ ${ze(De(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Me} label="Zahlungseingänge" value=${X(T(r.payments))} sub=${`≈ ${ze(De(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Me} label="Offene Forderungen (heute)" value=${X(T(r.receivables))} sub=${`≈ ${ze(De(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Me} label="Steuern (Saldo)" value=${X(T(r.taxBalance))}
        sub=${`berechnet ${X(T(r.taxCollected))}, in Ausgaben ${X(T(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${La} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${ie()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${ie()}`} series=${o} table=${p}>
      <${za} groups=${c} series=${o} mode="grouped" format=${d=>X(d)} axisFormat=${d=>Ea(d,ie())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${Q} title="Umsatz pro Unternehmen">
        <${Ht} rows=${u(i.byCompany).map(d=>({key:d.id,label:d.name,value:T(d),display:X(T(d)),color:Ma(d.color)}))} />
      <//>`}
      <${Q} title="Umsatz pro Kunde">
        <${Ht} rows=${u(i.byCustomer).map(d=>({key:d.id,label:d.name,value:T(d),display:X(T(d)),href:`#/customers/${d.id}`}))} />
      <//>
      <${Q} title="Umsatz pro Leistung">
        <${Ht} rows=${u(i.byService).map(d=>({key:d.key,label:d.name,value:T(d),display:X(T(d))}))} />
      <//>
      <${Q} title="Ausgaben nach Kategorie">
        <${Ht} rows=${u(i.byCategory).map(d=>({key:d.name,label:d.name,value:T(d),display:X(T(d)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function hr(e,t,n,a,s){let i=vl(e,t,n),r=i.reduce((o,c)=>({c:o.c+T(c),a:o.a+De(c),tax:o.tax+T(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...gn},{label:`Umsatz netto (${ie()})`,...fe},{label:`Umsatz netto (${fn()})`,...fe},{label:`Steuer (${ie()})`,...fe}],rows:i.map(o=>[a(o.key),o.count,he(T(o)),hn(De(o)),he(T(o,"tax"))]),totals:["Summe",r.count,he(r.c),hn(r.a),he(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?Pn(o.key):a(o.key),title:a(o.key),values:{rev:T(o)}}))}}}function $r(e,t,n=[]){let a=[...e].sort((i,r)=>T(r)-T(i)),s=a.reduce((i,r)=>({c:i.c+T(r),a:i.a+De(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${ie()})`,...fe},{label:`Umsatz netto (${fn()})`,...fe},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),he(T(i)),hn(De(i)),xc(T(i),s.c)]),totals:["Summe",...n.map(()=>""),he(s.c),hn(s.a),""]}}function bc(e,t,n,a){let s=pn(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+T(c,"open"),0),r=$l.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,p)=>c+T(p,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...gn},{label:"Währung"},{label:"Rechnungsbetrag",...fe},{label:"Offen",...fe},{label:`Offen (${ie()})`,...fe}],rows:s.map(o=>[o.inv.number,Le(o.inv),(k("companies",o.inv.companyId)||{}).name||"",ma(o.inv.issueDate),ma(o.inv.dueDate),o.overdueDays,o.inv.currency,Fe(o.inv.totals.totalCents,o.inv.currency),Fe(o.openCents,o.inv.currency),he(T(o,"open"))]),totals:["Summe","","","","","","","","",he(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var br=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>hr(e,t,"month",At,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>hr(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>hr(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>$r(Ka(e,t),"Kunde",[{col:{label:"Rechnungen",...gn},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>$r(Oa(e,t),"Unternehmen",[{col:{label:"Rechnungen",...gn},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>$r(Fa(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...gn},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:En(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=yl(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...gn},{label:"Netto",...fe},{label:"Steuer",...fe},{label:"Brutto",...fe},{label:"Netto in USD",...fe},{label:"Netto in EUR",...fe}],rows:n.map(a=>[a.currency,a.count,Fe(a.netCents,a.currency),Fe(a.taxCents,a.currency),Fe(a.totalCents,a.currency),Fe(a.usd,"USD"),Fe(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",Fe(n.reduce((a,s)=>a+s.usd,0),"USD"),Fe(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>bc(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>bc(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=Yi(t.range,e,t.companyId),a=n.length?Pa(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+T(r,"revenue"),exp:i.exp+T(r,"expense"),alt:i.alt+De(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${ie()})`,...fe},{label:`Ausgaben (${ie()})`,...fe},{label:`Gewinn (${ie()})`,...fe},{label:`Gewinn (${fn()})`,...fe}],rows:a.map(i=>[At(i.key),he(T(i,"revenue")),he(T(i,"expense")),he(T(i,"profit")),hn(De(i,"profit"))]),totals:["Summe",he(s.rev),he(s.exp),he(s.rev-s.exp),hn(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:Pn(i.key),title:At(i.key),values:{rev:T(i,"revenue"),exp:T(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...Qi(e,t)].sort((s,i)=>T(i)-T(s)),a=n.reduce((s,i)=>({c:s.c+T(i),a:s.a+De(i),tax:s.tax+T(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...gn},{label:`Netto (${ie()})`,...fe},{label:`Netto (${fn()})`,...fe},{label:`Steuer (${ie()})`,...fe},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,he(T(s)),hn(De(s)),he(T(s,"tax")),xc(T(s),a.c)]),totals:["Summe",a.count,he(a.c),hn(a.a),he(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=xl(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...fe},{label:"Steuer",...fe},{label:`Steuer (${ie()})`,...fe}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${ht(a.rate)}`,a.currency,Fe(a.netCents,a.currency),Fe(a.taxCents,a.currency),he(T(a,"tax"))]),["In Ausgaben enthaltene Steuer",ie(),"","",he(-T(n,"paid"))]],totals:["Saldo","","","",he(T(n,"collected")-T(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=nt(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+T(r,"net"),tax:i.tax+T(r,"tax"),total:i.total+T(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...fe},{label:"Steuer",...fe},{label:"Brutto",...fe},{label:`Netto (${ie()})`,...fe},{label:"Kurs USD/EUR",...gn},{label:"Bezahlt",...fe},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=qe(r.id),c=_t(r,o,n);return[r.number,ma(r.issueDate),Le(r),(k("companies",r.companyId)||{}).name||"",r.currency,Fe(r.totals.netCents,r.currency),Fe(r.totals.taxCents,r.currency),Fe(r.totals.totalCents,r.currency),he(T(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:En(r.fx.usdToEur,"de",4)}:"",Fe(Ne(o),r.currency),(ya[c]||{}).label||c]}),totals:["Summe","","","",ie(),he(s.net),he(s.tax),he(s.total),he(s.net),"","",""],note:`Die Summenzeile ist in ${ie()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=Bs(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...fe},{label:`Betrag (${ie()})`,...fe}],rows:n.map(a=>[ma(a.date),a.inv.number,Le(a.inv),a.pay.method||"",a.inv.currency,Fe(a.pay.amountCents,a.inv.currency),he(T(a))]),totals:["Summe","","","","","",he(n.reduce((a,s)=>a+T(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=aa(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+T(i,"net"),tax:s.tax+T(i,"tax"),total:s.total+T(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...fe},{label:"Steuer",...fe},{label:"Gesamt",...fe},{label:`Gesamt (${ie()})`,...fe},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[ma(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(k("companies",i.companyId)||{}).name||"",i.currency,Fe(i.netCents,i.currency),Fe(i.taxCents,i.currency),Fe(i.totalCents,i.currency),he(T(s,"total")),ma(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",ie(),he(a.net),he(a.tax),he(a.total),he(a.total),"",""],note:`Die Summenzeile ist in ${ie()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],vc=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function Dc({params:e}){ge();let[t,n]=S(e&&e.r&&br.find(v=>v.id===e.r)?e.r:"month"),a=yc("year"),[s,i]=S(""),r=q(),o=Nt(),c=xe(),p=jt(),u=br.find(v=>v.id===t),d=ve(()=>u.build(p,{companyId:o,range:a.range},r),[y.version,t,o,a.range.from,a.range.to,ie()]),m=t==="open"||t==="overdue",f=`${c?c.name:"Alle Unternehmen"}, ${m?`Stichtag ${Z(r)}`:_d(a)}`,$={title:u.label,subtitle:f,fileName:`${u.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:d.columns,rows:d.rows,totals:d.totals};async function h(v){i(v),await _(async()=>{v==="csv"?Ys($):v==="xlsx"?await hc($):await $c($)}),i("")}return l`
    <${we} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${I} icon="download" busy=${s==="csv"} disabled=${!d.rows.length} onClick=${()=>h("csv")}>CSV<//>
      <${I} icon="download" busy=${s==="xlsx"} disabled=${!d.rows.length} onClick=${()=>h("xlsx")}>Excel<//>
      <${I} icon="download" busy=${s==="pdf"} disabled=${!d.rows.length} onClick=${()=>h("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${br.map(v=>l`<button type="button" class=${`report-link${v.id===t?" is-on":""}`} aria-current=${v.id===t?"true":void 0}
          onClick=${()=>n(v.id)}>${v.label}</button>`)}
      </nav>
      <div class="report-body">
        <${wc} p=${a} />
        ${d.note&&l`<p class="footnote">${d.note}</p>`}
        ${d.aging&&l`<div class="stat-row stat-row-5">
          ${d.aging.map(v=>l`<${Me} label=${v.label} value=${X(v.value)} sub=${`${v.count} ${v.count===1?"Rechnung":"Rechnungen"}`} tone=${v.id!=="current"&&v.value?"bad":""} />`)}
        </div>`}
        ${d.chart&&d.chart.groups.length>1&&l`<${La} title=${u.label} sub=${`Netto in ${ie()}`} series=${d.chart.series}>
          <${za} groups=${d.chart.groups} series=${d.chart.series} mode=${d.chart.mode||"stacked"}
            format=${v=>X(v)} axisFormat=${v=>Ea(v,ie())} ariaLabel=${u.label} />
        <//>`}
        ${d.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${d.columns.map(v=>l`<th class=${v.align==="right"?"r":""}>${v.label}</th>`)}</tr></thead>
              <tbody>${d.rows.map(v=>l`<tr>${v.map((g,b)=>l`<td class=${d.columns[b].align==="right"?"r":""}>${vc(g)}</td>`)}</tr>`)}</tbody>
              ${d.totals&&l`<tfoot><tr>${d.totals.map((v,g)=>l`<td class=${d.columns[g].align==="right"?"r":""}>${vc(v)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${pe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function Sc(){ge();let[e,t]=S({}),n=[...y.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ue(()=>{let a=!0;return Promise.all(n.map(s=>Aa(s,"invoice",q()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[y.version]),l`
    <${we} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${I} variant="primary" icon="plus" onClick=${()=>J("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${pe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${I} variant="primary" icon="plus" onClick=${()=>J("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${Zt(a.logoAssetId)?l`<img src=${Zt(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
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
                ${a.archived?l`<${Ue} tone="mute">Archiviert<//>`:s.length?l`<${Ue} tone="warn">Es fehlt: ${s.join(", ")}<//>`:l`<${Ue} tone="good">Vollständig<//>`}
              </span>
            </a>
          </li>`})}
      </ul>`}
  `}function Cc({id:e}){ge();let t=e&&e!=="new"?k("companies",e):null,[n,a]=S(()=>t?ye(t):wa()),[s,i]=S(null),[r,o]=S(!1),[c,p]=S(!1),[u,d]=S({}),[m,f]=S(null),$=Te(null),h=q(),v=R=>{a(R),o(!0)},g=R=>z=>v(H=>({...H,[R]:z}));if(ue(()=>(r?$s(bs):Sn(),()=>Sn()),[r]),ue(()=>{let R=!0;return Promise.all(["invoice","quote","credit"].map(z=>Aa(n,z,h).catch(()=>""))).then(([z,H,F])=>{R&&d({invoice:z,quote:H,credit:F})}),()=>{R=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,y.version]),e&&e!=="new"&&!t)return l`<${pe} icon="company" title="Unternehmen nicht gefunden"><${I} onClick=${()=>J("/companies")}>Zur Übersicht<//><//>`;let b=t?k("counters",An(t.id,"invoice",It(t,"invoice").pattern,h)):null,C=b?b.last:0,x=s||Zt(n.logoAssetId),N={invoice:Mt(n.invoicePattern),quote:Mt(n.quotePattern),credit:Mt(n.creditPattern)};async function E(R){if(!R)return;let z=await _(()=>rc(R));z&&(i(z),o(!0))}async function w(){p(!0);let R=await _(()=>Na(n,s));p(!1),R&&(i(null),a(ye(R)),o(!1),U("Unternehmen gespeichert","good"),t||rn(`/companies/${R.id}`))}async function G(){if(m==null||!t||!await oe({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${h.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await _(async()=>(await Xo(t,"invoice",h,m),!0))&&(U("Nummernkreis angepasst","good"),f(null))}async function A(){await _(async()=>(await Oo(t.id,!t.archived),!0))&&(U(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(z=>({...z,archived:!t.archived})))}async function D(){if(!await oe({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Fo(t.id),!0))&&(U("Unternehmen gelöscht","good"),rn("/companies"))}return l`
    <${we} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${bt} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:A},{label:"Löschen",icon:"trash",danger:!0,disabled:Mi(t.id),onClick:D}]} />`}
      <${I} variant="primary" icon="check" busy=${c} onClick=${w}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${Ie} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${Q} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${K} class="span-4" label="Unternehmensname" value=${n.name} onInput=${g("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${K} class="span-2" label="Kurzname" value=${n.shortName} onInput=${g("shortName")} hint="Für den Company Switcher" />
          <${K} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${g("legalForm")} />
          <${ke} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${R=>g("brandColor")(R.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${ke} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${x?l`<img src=${x} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${I} icon="upload" onClick=${()=>$.current&&$.current.click()}>${x?"Logo ersetzen":"Logo hochladen"}<//>
              ${x&&l`<${I} variant="ghost" icon="trash" onClick=${()=>{i(null),g("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${$} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${R=>{E(R.target.files[0]),R.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${Q} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${K} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${g("street")} />
          <${K} class="span-2" label="PLZ" value=${n.zip} onInput=${g("zip")} />
          <${K} class="span-4" label="Ort" value=${n.city} onInput=${g("city")} />
          <${K} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${g("region")} />
          <${K} class="span-3" label="Land" value=${n.country} onInput=${g("country")} />
          <${K} class="span-2" label="Telefon" value=${n.phone} onInput=${g("phone")} />
          <${K} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${g("email")} />
          <${K} class="span-2" label="Website" value=${n.website} onInput=${g("website")} />
        </div>
      <//>

      <${Q} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${K} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${g("taxId")} />
          <${K} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${g("vatId")} />
          <${K} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${g("registerInfo")} />
        </div>
      <//>

      <${Q} title="Bank und Zahlung">
        <div class="form-grid">
          <${K} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${g("accountHolder")} />
          <${K} class="span-3" label="Bank" value=${n.bankName} onInput=${g("bankName")} />
          <${K} class="span-4" label="IBAN" value=${n.iban} onInput=${g("iban")} />
          <${K} class="span-2" label="BIC" value=${n.bic} onInput=${g("bic")} />
          <${le} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${g("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${le} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${g("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${Q} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${K} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${g("invoicePrefix")} placeholder="z. B. HL" />
          <${K} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${g("invoicePattern")} error=${N.invoice}
            hint=${u.invoice?`Nächste Rechnung: ${u.invoice}`:""} />
          <${Be} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${g("numberDigits")} />
          <${K} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${g("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${K} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${g("quotePattern")} error=${N.quote}
            hint=${u.quote?`Nächstes Angebot: ${u.quote}`:""} />
          <${K} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${g("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${K} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${g("creditPattern")} error=${N.credit}
            hint=${u.credit?`Nächste Gutschrift: ${u.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${ke} label=${`Zuletzt vergebene laufende Rechnungsnummer ${h.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${Ye} id="counter-last" value=${m??C} digits=${0} min=${0} onChange=${R=>f(R)} />
              <${I} disabled=${m==null||m===C} onClick=${G}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${Q} title="Standards für neue Belege">
        <div class="form-grid">
          <${ce} class="span-2" label="Währung" value=${n.currency} onChange=${g("currency")} options=${et} />
          <${ce} class="span-2" label="Belegsprache" value=${n.language} onChange=${g("language")} options=${xt} />
          <${Be} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${g("paymentTermDays")} />
          <${Be} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${K} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${g("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${le} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${g("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${Ve} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${g("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${Ve} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${g("showFxNote")} /></div>
        </div>
      <//>

      <${Q} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${ce} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${g("meetingProvider")}
            placeholder="Keiner" options=${qn} />
          <${K} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${g("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${le} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${g("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${Be} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${g("meetingDuration")} />
          <${ce} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${g("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${rt()})`} options=${ds.map(R=>({id:R,label:R.replace(/_/g," ")}))}
            hint="Zum Beispiel Europe/Berlin, wenn deine Kunden dieses Unternehmens in Deutschland sitzen" />
        </div>
      <//>

      <${Q} title="Texte auf Belegen">
        <div class="form-grid">
          <${le} class="span-6" label="Einleitung Rechnung" value=${n.invoiceText} onInput=${g("invoiceText")} rows=${2} />
          <${le} class="span-6" label="Einleitung Angebot" value=${n.quoteText} onInput=${g("quoteText")} rows=${2} />
          <${le} class="span-6" label="Zahlungsbedingungen" value=${n.paymentTerms} onInput=${g("paymentTerms")} rows=${2} />
          <${le} class="span-6" label="Fußzeile" value=${n.footer} onInput=${g("footer")} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${I} variant="primary" icon="check" busy=${c} onClick=${w}>Unternehmen speichern<//>
      </div>
    </div>
  `}var Ec=["aiApiKey"],Ic=["lastBackupAt","changesSinceBackup"],Nc="bbc-finance-backup";function Md(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function zd(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function Tc(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function Ac({includeFiles:e=!0}={}){let t={};for(let o of it)t[o]=await jn(o);let n=await jn("settings"),a={};for(let o of n)Ec.includes(o.key)||Ic.includes(o.key)||(a[o.key]=o.value);let s={format:Nc,schemaVersion:mi,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(it.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await jn("blobs");for(let c=0;c<o.length;c++){let p=await Md(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(p)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function Rc(){await W(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function Bc(e){let t=new Map,n=0,a=(u,d)=>{try{t.set(u,zd(d))}catch{n+=1}},s=null,i="",r=0,o=!1,c=u=>{r+=1;let d=u.trim();if(!d)return;if(r===1&&/"files":\{$/.test(d)){s=JSON.parse(`${d}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(d==="}}")return;let m=JSON.parse(`{${d.replace(/,$/,"")}}`);for(let[f,$]of Object.entries(m))a(f,$)},p=async()=>{let u;try{u=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(u&&typeof u=="object"&&u.files&&typeof u.files=="object"){for(let[d,m]of Object.entries(u.files))a(d,m);delete u.files}return u};if(!e.stream||typeof TextDecoderStream>"u")return s=await p(),{json:s,files:t,badFiles:n};try{let u=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:d,done:m}=await u.read();if(m)break;i+=d;let f=i.indexOf(`
`);for(;f>=0;)c(i.slice(0,f)),i=i.slice(f+1),f=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(u){if(!(u instanceof SyntaxError))throw u;t.clear(),n=0,s=await p()}return{json:s,files:t,badFiles:n}}var Jt=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),pa=e=>typeof e=="number"&&Number.isFinite(e);function vr(e,t){if(!Jt(e)||e.format!==Nc)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>mi)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!Jt(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of it){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=Hn(s);for(let o of i)if(!Jt(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!Jt(r.totals)||!pa(r.totals.totalCents)||!pa(r.totals.netCents)||!pa(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number)throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!pa(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(pa))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(it.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:Jt(e.files)?Object.keys(e.files).length:0}}function Ld(e){let t={};if(!Jt(e))return t;for(let n of Object.keys(Rt)){if(!Object.hasOwn(e,n)||Ec.includes(n)||Ic.includes(n))continue;let a=Rt[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?pa(r):typeof r=="string"))continue;t[n]=s}else Jt(a)?Jt(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function Uc({json:e,files:t,badFiles:n=0}){vr(e,t);let a=y.settings.aiApiKey||"",s=Ld(e.settings);return await yn(Dt,async r=>{for(let o of Dt)await r.clear(o);for(let o of it)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:Ge(),at:ne(),user:y.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:Jt(e.counts)?e.counts:null}})}),await xn(),Sa(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function _c(){await yn(Dt,async e=>{for(let t of Dt)await e.clear(t)}),await xn(),Sa()}async function wr(e=!0){let t=await Ac({includeFiles:e});return st(t,Tc()),await Rc(),t.size}function Pd(){let[e,t]=S(""),[n,a]=S(null),s=Te(null);ue(()=>{oo().then(a)},[y.version]);async function i(c){t(c?"full":"lite");let p=await _(()=>wr(c));t(""),p!=null&&U(`Backup gespeichert (${Kn(p)})`,"good")}async function r(c){c&&(t("restore"),await _(async()=>{let p=await Bc(c),u=vr(p.json,p.files),d=u.counts;if(!await oe({title:"Backup einspielen?",text:`Das Backup vom ${u.exportedAt?Ze(u.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${d.companies} Unternehmen, ${d.customers} Kunden, ${d.services} Leistungen`,`${d.invoices} Rechnungen, ${d.quotes} Angebote, ${d.payments} Zahlungen`,`${d.expenses} Ausgaben, ${u.includesFiles?`${u.fileCount} Belegdateien`:"ohne Belegdateien"}`,...d.appointments||d.notes?[`${d.appointments||0} Termine, ${d.notes||0} Einträge in der Kundendokumentation`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let f=await Uc(p);U(f.missingFiles?`Backup eingespielt. ${f.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),J("/")}),t(""))}let o=y.settings;return l`<${Q} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${cn} rows=${[["Letztes Backup",o.lastBackupAt?Ze(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${Kn(n.usage)}${n.quota?` von ${Kn(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${I} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${I} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Belegdateien<//>
      <${I} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${Ve} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>_(()=>tt("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function Kd(){let e=y.settings,[t,n]=S(e.aiApiKey||""),[a,s]=S(e.aiModel||Rt.aiModel),[i,r]=S(!1),[o,c]=S(""),p=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function u(){c("save");let m=await _(async()=>(await bo({aiApiKey:t.trim(),aiModel:a.trim()||Rt.aiModel}),!0));c(""),m&&U("KI-Einstellungen gespeichert","good")}async function d(){c("test");let m=await _(()=>uc({apiKey:t.trim(),model:a.trim()}));c(""),m&&U("Verbindung steht – der API-Key funktioniert.","good")}return l`<${Q} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${ke} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${I} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${ke} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${m=>s(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${I} variant="primary" busy=${o==="save"} disabled=${!p} onClick=${u}>Speichern<//>
      <${I} busy=${o==="test"} disabled=${!t.trim()} onClick=${d}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${I} variant="ghost" icon="trash" onClick=${async()=>{n(""),await _(()=>tt("aiApiKey","")),U("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${Ve} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>_(()=>tt("shrinkImages",m))} />
  <//>`}function yr({label:e,settingKey:t,hint:n}){let a=(Array.isArray(y.settings[t])?y.settings[t]:[]).join(`
`),[s,i]=S(a);ue(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(p=>p.trim()).filter(Boolean))];await _(async()=>(await tt(t,o),!0))&&U("Liste gespeichert","good")}return l`<div class="span-2">
    <${le} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${I} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function Od(){let e=y.settings,[t,n]=S("de"),[a,s]=S("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[p,u]=S(c.subject),[d,m]=S(c.body);ue(()=>{u(c.subject),m(c.body)},[t,a,y.version]);let f=p!==c.subject||d!==c.body,$=e.reminderDays||[7,14,21];async function h(){await _(async()=>{if(r){let g=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));g[t]={subject:p,body:d},await tt("appointmentTemplates",g)}else if(i){let g=JSON.parse(JSON.stringify(e.reminderTemplates||{}));g[t]={...g[t]||{},[o]:{subject:p,body:d}},await tt("reminderTemplates",g)}else{let g=JSON.parse(JSON.stringify(e.emailTemplates||{}));g[t]={...g[t]||{},[a]:{subject:p,body:d}},await tt("emailTemplates",g)}return!0})&&U("Vorlage gespeichert","good")}return l`<${Q} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${ke} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${gt.map((v,g)=>l`<label class="mini-field">
            <span>${v.label}</span>
            <${Ye} value=${$[g]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${v.label}: Tage nach Fälligkeit`}
              onChange=${b=>{let C=[...$];C[g]=b,_(()=>tt("reminderDays",C))}} />
          </label>`)}
        </div>
      <//>
      <${ce} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...gt.map(v=>({id:`r${v.id}`,label:v.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${ke} class="span-2" label="Sprache">
        <${pt} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${K} class="span-6" label="Betreff" value=${p} onInput=${u} />
      <${le} class="span-6" label="Text" value=${d} onInput=${m} rows=${9} />
    </div>
    ${f&&l`<div class="button-row"><${I} variant="primary" onClick=${h}>Vorlage speichern<//></div>`}
  <//>`}function Fd(){let[e,t]=S(""),n=y.customers.length||y.invoices.length||y.expenses.length||y.services.length;async function a(){t("demo");let r=await _(async()=>(await Zs(),!0));t(""),r&&(U("Beispieldaten geladen","good"),J("/"))}async function s(){if(!await oe({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Termine, Kundendokumentation, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await _(async()=>(await Jl(),!0));t(""),o&&(U("Daten gelöscht","good"),J("/"))}async function i(){let r=await oe({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){U("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await _(async()=>(await _c(),await Hi(),!0));t(""),o&&(U("Alle Daten gelöscht","good"),J("/"))}return l`<${Q} title="Daten">
    ${y.settings.demoLoaded&&l`<${Ie} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${I} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${I} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${I} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var qd=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function Mc(){ge();let e=y.settings,[t,n]=S(e.userName||"");return ue(()=>{n(e.userName||"")},[e.userName]),l`
    <${we} title="Einstellungen" />
    <div class="form-page">
      <${Q} title="Profil und Darstellung">
        <div class="form-grid">
          <${ke} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${I} disabled=${t===(e.userName||"")} onClick=${async()=>{await _(async()=>(await tt("userName",t.trim()),!0))&&U("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${ke} class="span-2" label="Darstellung">
            <${pt} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>_(()=>tt("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${Pd} />
      <${Kd} />
      <${Q} title="Auswahllisten">
        <div class="form-grid">
          <${yr} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${yr} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${yr} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${Od} />
      <${Fd} />
      <${Q} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${qd.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var xr={invoices:"Rechnungen",quotes:"Angebote",customers:"Kontakte",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",system:"System"},Zd={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function zc(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function Vd({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${Zd[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${zc(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${zc(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function Lc(){ge();let[e,t]=S(""),[n,a]=S(""),[s,i]=S(200),[r,o]=S(""),p=ve(()=>[...y.audit].sort((d,m)=>d.at<m.at?1:-1),[y.version]).filter(d=>(!n||d.entity===n)&&Re(e,d.action,d.label,d.user));function u(){Ys({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:p.map(d=>[d.at,d.user,d.action,xr[d.entity]||d.entity,d.label,d.prev?JSON.stringify(d.prev):"",d.next?JSON.stringify(d.next):""])})}return l`
    <${we} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${I} icon="download" disabled=${!p.length} onClick=${u}>CSV<//>
    <//>
    <div class="filters">
      <${vt} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${d=>a(d.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(xr).map(([d,m])=>l`<option value=${d}>${m}</option>`)}
      </select>
      <span class="filter-note">${p.length} ${p.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${p.length===0?l`<${pe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${p.slice(0,s).map(d=>l`<tr key=${d.id}>
              <td class="nw">${Ze(d.at)}</td>
              <td><span class="cell-main">${d.action}</span><div class="cell-sub">${xr[d.entity]||d.entity}</div></td>
              <td>${d.label}</td>
              <td><${Vd} entry=${d} />
                ${d.entity==="invoices"&&d.prev&&d.prev.doc&&l`<${I} small icon="download" busy=${r===d.id}
                  onClick=${async()=>{o(d.id),await _(()=>or(d)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${d.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${p.length>s&&l`<div class="button-row center"><${I} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var Gd=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kontakte",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function Hd(){let[e,t]=S(!1),n=Te(null),a=xe(),s=me();ue(()=>{if(!e)return;let o=p=>{n.current&&!n.current.contains(p.target)&&t(!1)},c=p=>{p.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),_(()=>tt("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${Zt(o.logoAssetId)?l`<img src=${Zt(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
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
  </div>`}function kr(e,t){let n=ls(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function jd(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kontakte",y.customers.filter(s=>Re(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:j(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>j(k("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",y.invoices.filter(s=>Re(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||kr(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:V(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",y.quotes.filter(s=>Re(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||kr(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:V(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Termine",y.appointments.filter(s=>Re(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("Leistungen",y.services.filter(s=>Re(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:V(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",y.expenses.filter(s=>Re(e,s.vendor,s.description,s.invoiceNumber,s.category)||kr(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${V(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",y.companies.filter(s=>Re(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function Wd(){let[e,t]=S(""),[n,a]=S(!1),[s,i]=S(0),r=Te(null),o=Te(null),c=ve(()=>Xt(e).trim().length>=2?jd(e):[],[e,y.version]),p=c.flatMap(f=>f.items);ue(()=>{let f=h=>{(h.metaKey||h.ctrlKey)&&h.key.toLowerCase()==="k"&&(h.preventDefault(),o.current&&o.current.focus())},$=h=>{r.current&&!r.current.contains(h.target)&&a(!1)};return document.addEventListener("keydown",f),document.addEventListener("mousedown",$),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",$)}},[]);function u(f){a(!1),t(""),o.current&&o.current.blur(),J(f.href)}function d(f){f.key==="ArrowDown"?(f.preventDefault(),i($=>Math.min($+1,p.length-1))):f.key==="ArrowUp"?(f.preventDefault(),i($=>Math.max($-1,0))):f.key==="Enter"&&p[s]?(f.preventDefault(),u(p[s])):f.key==="Escape"&&(a(!1),f.target.blur())}let m=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${ae} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kontakt, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${f=>{t(f.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${d} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&Xt(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(f=>l`<div class="gsearch-group" key=${f.group}>
        <div class="gsearch-head">${f.group}</div>
        ${f.items.map($=>{m+=1;let h=m;return l`<button type="button" key=${$.key} class=${`gsearch-item${h===s?" is-active":""}`}
            onMouseEnter=${()=>i(h)} onMouseDown=${v=>{v.preventDefault(),u($)}}>
            <span>${$.label}</span><span class="cell-sub">${$.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function Jd(){let e=y.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${pt} label="Anzeigewährung" value=${e} onChange=${t=>_(()=>tt("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function Qd(){let[e,t]=S(!1),n=y.settings.changesSinceBackup||0;async function a(){t(!0);let s=await _(()=>wr(!0));t(!1),s!=null&&U("Backup gespeichert","good")}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${ae} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function Yd({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${Ya} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${Ya} coll="invoices" id=${n} params=${s} />`:l`<${Xl} id=${n} />`:l`<${Yl} params=${s} />`:t==="quotes"?n?n==="new"?l`<${Ya} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${Ya} coll="quotes" id=${n} params=${s} />`:l`<${nc} id=${n} />`:l`<${tc} />`:t==="customers"?n?l`<${Fl} id=${n} />`:l`<${Ol} />`:t==="appointments"?l`<${Hl} params=${s} />`:t==="services"?l`<${ac} />`:t==="expenses"?l`<${pc} />`:t==="recurring"?l`<${fc} />`:t==="finance"?l`<${kc} />`:t==="reports"?l`<${Dc} params=${s} />`:t==="companies"?n?l`<${Cc} id=${n} />`:l`<${Sc} />`:t==="settings"?l`<${Mc} />`:t==="audit"?l`<${Lc} />`:l`<${pe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${I} onClick=${()=>J("/")}>Zum Dashboard<//><//>`:l`<${Ql} />`}function Xd({route:e}){let[t,n]=jr(a=>{console.error(a)});return ue(()=>{t&&n()},[e.raw]),t?l`<${pe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${I} onClick=${()=>{n(),J("/")}}>Zum Dashboard<//>
    <//>`:l`<${Yd} key=${e.raw} route=${e} />`}function em(){ge();let e=xo(),[t,n]=S(!1),a=xe(),s=me();ue(()=>{n(!1)},[e.raw]),ue(()=>{let p=y.settings.theme;p==="light"||p==="dark"?document.documentElement.setAttribute("data-theme",p):document.documentElement.removeAttribute("data-theme")},[y.settings.theme]),ue(()=>{let p=u=>{if(So())return;let d=wo(),m=y.settings.warnOnClose!==!1&&(y.settings.changesSinceBackup||0)>0;(d||m)&&(u.preventDefault(),u.returnValue="")};return window.addEventListener("beforeunload",p),()=>window.removeEventListener("beforeunload",p)},[]);let[i,r]=S(!1);ue(()=>{let p=()=>r(!0);return window.addEventListener("bbc-db-replaced",p),()=>window.removeEventListener("bbc-db-replaced",p)},[]);let o=p=>p.exact?e.path===p.path:e.path===p.path||e.path.startsWith(`${p.path}/`),c=y.expenses.filter(p=>p.status==="review").length;return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(p=>l`<i key=${p.id} style=${`background:${p.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${Gd.map((p,u)=>l`<ul class="nav-group" key=${u}>
            ${p.map(d=>l`<li key=${d.path}>
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
          <${Hd} />
          <${Wd} />
          <div class="topbar-actions">
            <${Jd} />
            <${Qd} />
            <${I} variant="primary" icon="plus" onClick=${()=>J("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{Wn(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${y.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${Xd} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${Bo} />
    <${Uo} />
  `}async function tm(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await fo(),await gl()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",oi(l`<${em} />`,e),nm()}async function nm(){if(y.settings.appVersion===pi)return;let e={invoices:y.invoices.length,customers:y.customers.length,expenses:y.expenses.length,quotes:y.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await tt("appVersion",pi)}catch{}t&&!y.settings.demoLoaded&&U(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kontakte, ${e.expenses} Ausgaben. ${ao}`,"good",15e3)}window.addEventListener("unhandledrejection",e=>{e.reason&&Jn(e.reason)});tm();})();
