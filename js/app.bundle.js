(()=>{var Zs,me,al,qa,sl,Vo,sm,Fs={},il=[],im=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function fn(e,t){for(var n in t)e[n]=t[n];return e}function rl(e){var t=e.parentNode;t&&t.removeChild(e)}function ir(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?Zs.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return Ks(e,r,a,s,null)}function Ks(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++al};return me.vnode!=null&&me.vnode(i),i}function Gs(e){return e.children}function Va(e,t){this.props=e,this.context=t}function ra(e,t){if(t==null)return e.__?ra(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ra(e):null}function ol(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ol(e)}}function Zo(e){(!e.__d&&(e.__d=!0)&&qa.push(e)&&!qs.__r++||Vo!==me.debounceRendering)&&((Vo=me.debounceRendering)||sl)(qs)}function qs(){for(var e;qs.__r=qa.length;)e=qa.sort(function(t,n){return t.__v.__b-n.__v.__b}),qa=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=fn({},i)).__v=i.__v+1,rr(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??ra(i),i.__h),dl(a,i),i.__e!=r&&ol(i)))})}function ll(e,t,n,a,s,i,r,o,c,p){var d,u,m,f,h,b,v,g=a&&a.__k||il,$=g.length;for(n.__k=[],d=0;d<t.length;d++)if((f=n.__k[d]=(f=t[d])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Ks(null,f,null,null,f):Array.isArray(f)?Ks(Gs,{children:f},null,null,null):f.__b>0?Ks(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(m=g[d])===null||m&&f.key==m.key&&f.type===m.type)g[d]=void 0;else for(u=0;u<$;u++){if((m=g[u])&&f.key==m.key&&f.type===m.type){g[u]=void 0;break}m=null}rr(e,f,m=m||Fs,s,i,r,o,c,p),h=f.__e,(u=f.ref)&&m.ref!=u&&(v||(v=[]),m.ref&&v.push(m.ref,null,f),v.push(u,f.__c||h,f)),h!=null?(b==null&&(b=h),typeof f.type=="function"&&f.__k!=null&&f.__k===m.__k?f.__d=c=cl(f,c,e):c=ul(e,f,m,g,h,c),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=ra(m))}for(n.__e=b,d=$;d--;)g[d]!=null&&(typeof n.type=="function"&&g[d].__e!=null&&g[d].__e==n.__d&&(n.__d=ra(a,d+1)),pl(g[d],g[d]));if(v)for(d=0;d<v.length;d++)ml(v[d],v[++d],v[++d])}function cl(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?cl(s,t,n):ul(n,s,s,e.__k,s.__e,t));return t}function ul(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function Go(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||im.test(t)?n:n+"px"}function Ls(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||Go(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||Go(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?jo:Ho,i):e.removeEventListener(t,i?jo:Ho,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ho(e){this.l[e.type+!1](me.event?me.event(e):e)}function jo(e){this.l[e.type+!0](me.event?me.event(e):e)}function rr(e,t,n,a,s,i,r,o,c){var p,d,u,m,f,h,b,v,g,$,C,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(p=me.__b)&&p(t);try{e:if(typeof S=="function"){if(v=t.props,g=(p=S.contextType)&&a[p.__c],$=p?g?g.props.value:p.__:a,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in S&&S.prototype.render?t.__c=d=new S(v,$):(t.__c=d=new Va(v,$),d.constructor=S,d.render=om),g&&g.sub(d),d.props=v,d.state||(d.state={}),d.context=$,d.__n=a,u=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),S.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=fn({},d.__s)),fn(d.__s,S.getDerivedStateFromProps(v,d.__s))),m=d.props,f=d.state,u)S.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(S.getDerivedStateFromProps==null&&v!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(v,$),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(v,d.__s,$)===!1||t.__v===n.__v){d.props=v,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(k){k&&(k.__=t)}),d.__h.length&&r.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(v,d.__s,$),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,f,h)})}d.context=$,d.props=v,d.state=d.__s,(p=me.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(a=fn(fn({},a),d.getChildContext())),u||d.getSnapshotBeforeUpdate==null||(h=d.getSnapshotBeforeUpdate(m,f)),C=p!=null&&p.type===Gs&&p.key==null?p.props.children:p,ll(e,Array.isArray(C)?C:[C],t,n,a,s,i,r,o,c),d.base=t.__e,t.__h=null,d.__h.length&&r.push(d),b&&(d.__E=d.__=null),d.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=rm(n.__e,t,n,a,s,i,r,c);(p=me.diffed)&&p(t)}catch(k){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),me.__e(k,t,n)}}function dl(e,t){me.__c&&me.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){me.__e(a,n.__v)}})}function rm(e,t,n,a,s,i,r,o){var c,p,d,u=n.props,m=t.props,f=t.type,h=0;if(f==="svg"&&(s=!0),i!=null){for(;h<i.length;h++)if((c=i[h])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,i[h]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),i=null,o=!1}if(f===null)u===m||o&&e.data===m||(e.data=m);else{if(i=i&&Zs.call(e.childNodes),p=(u=n.props||Fs).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!o){if(i!=null)for(u={},h=0;h<e.attributes.length;h++)u[e.attributes[h].name]=e.attributes[h].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if((function(b,v,g,$,C){var S;for(S in g)S==="children"||S==="key"||S in v||Ls(b,S,null,g[S],$);for(S in v)C&&typeof v[S]!="function"||S==="children"||S==="key"||S==="value"||S==="checked"||g[S]===v[S]||Ls(b,S,v[S],g[S],$)})(e,m,u,s,o),d)t.__k=[];else if(h=t.props.children,ll(e,Array.isArray(h)?h:[h],t,n,a,s&&f!=="foreignObject",i,r,i?i[0]:n.__k&&ra(n,0),o),i!=null)for(h=i.length;h--;)i[h]!=null&&rl(i[h]);o||("value"in m&&(h=m.value)!==void 0&&(h!==e.value||f==="progress"&&!h)&&Ls(e,"value",h,u.value,!1),"checked"in m&&(h=m.checked)!==void 0&&h!==e.checked&&Ls(e,"checked",h,u.checked,!1))}return e}function ml(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){me.__e(a,n)}}function pl(e,t,n){var a,s;if(me.unmount&&me.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||ml(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){me.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&pl(a[s],t,typeof e.type!="function");n||e.__e==null||rl(e.__e),e.__e=e.__d=void 0}function om(e,t,n){return this.constructor(e,n)}function or(e,t,n){var a,s,i;me.__&&me.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],rr(t,e=(!a&&n||t).__k=ir(Gs,null,[e]),s||Fs,Fs,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?Zs.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),dl(i,e)}Zs=il.slice,me={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},al=0,Va.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=fn({},this.state),typeof e=="function"&&(e=e(fn({},n),this.props)),e&&fn(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Zo(this))},Va.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Zo(this))},Va.prototype.render=Gs,qa=[],sl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qs.__r=0,sm=0;var oa,it,Wo,Vs=0,ar=[],Qo=me.__b,Yo=me.__r,Jo=me.diffed,Xo=me.__c,el=me.unmount;function Za(e,t){me.__h&&me.__h(it,e,Vs||t),Vs=0;var n=it.__H||(it.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function D(e){return Vs=1,lm(gl,e)}function lm(e,t,n){var a=Za(oa++,2);return a.t=e,a.__c||(a.__=[n?n(t):gl(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=it),a.__}function ce(e,t){var n=Za(oa++,3);!me.__s&&cr(n.__H,t)&&(n.__=e,n.__H=t,it.__H.__h.push(n))}function lr(e,t){var n=Za(oa++,4);!me.__s&&cr(n.__H,t)&&(n.__=e,n.__H=t,it.__h.push(n))}function ve(e){return Vs=5,Se(function(){return{current:e}},[])}function Se(e,t){var n=Za(oa++,7);return cr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function fl(e){var t=Za(oa++,10),n=D();return t.__=e,it.componentDidCatch||(it.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function cm(){ar.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Os),e.__H.__h.forEach(sr),e.__H.__h=[]}catch(t){e.__H.__h=[],me.__e(t,e.__v)}}),ar=[]}me.__b=function(e){it=null,Qo&&Qo(e)},me.__r=function(e){Yo&&Yo(e),oa=0;var t=(it=e.__c).__H;t&&(t.__h.forEach(Os),t.__h.forEach(sr),t.__h=[])},me.diffed=function(e){Jo&&Jo(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ar.push(t)!==1&&Wo===me.requestAnimationFrame||((Wo=me.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),tl&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);tl&&(a=requestAnimationFrame(s))})(cm)),it=void 0},me.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Os),n.__h=n.__h.filter(function(a){return!a.__||sr(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],me.__e(a,n.__v)}}),Xo&&Xo(e,t)},me.unmount=function(e){el&&el(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Os)}catch(n){me.__e(n,t.__v)}};var tl=typeof requestAnimationFrame=="function";function Os(e){var t=it;typeof e.__c=="function"&&e.__c(),it=t}function sr(e){var t=it;e.__c=e.__(),it=t}function cr(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function gl(e,t){return typeof t=="function"?t(e):t}var hl=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,hl(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},nl=new Map,l=function(e){var t=nl.get(this);return t||(t=new Map,nl.set(this,t)),(t=hl(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],p=function(m){i===1&&(m||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,r):i===3&&(m||r)?(c.push(3,m,r),i=2):i===2&&r==="..."&&m?c.push(4,m,0):i===2&&r&&!m?c.push(5,0,!0,r):i>=5&&((r||!m&&i===5)&&(c.push(i,0,r,s),i=6),m&&(c.push(i,m,0,s),i=6)),r=""},d=0;d<n.length;d++){d&&(i===1&&p(),p(d));for(var u=0;u<n[d].length;u++)a=n[d][u],i===1?a==="<"?(p(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(p(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[d][u+1]===">")?(p(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(p(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return p(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(ir);var Ke=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),ye=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),Un=e=>String(e).padStart(2,"0");function la(e){return`${e.getFullYear()}-${Un(e.getMonth()+1)}-${Un(e.getDate())}`}var q=()=>la(new Date),ne=()=>new Date().toISOString();function $e(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function Ga(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Ce(e,t){let n=Ga(e);return n.setDate(n.getDate()+Number(t||0)),la(n)}function At(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),p=(o%12+12)%12,d=new Date(c,p+1,0).getDate();return`${c}-${Un(p+1)}-${Un(Math.min(r,d))}`}function hn(e,t){let n=Ga(t).getTime()-Ga(e).getTime();return Math.round(n/864e5)}var Hs=e=>Number(e.slice(0,4)),$l=e=>Number(e.slice(5,7)),Ha=e=>e.slice(0,7),bl=e=>Math.floor(($l(e)-1)/3)+1,vl=e=>`${Hs(e)}-Q${bl(e)}`;function ur(e,t){let n=`${e}-${Un(t+1)}-01`,a=la(new Date(e,t+1,0));return{from:n,to:a}}function dr(e,t){let n=`${e}-${Un((t-1)*3+1)}-01`,a=la(new Date(e,t*3,0));return{from:n,to:a}}var Mn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function wt(e,t=q(),n={}){let a=Hs(t),s=$l(t)-1,i=bl(t);switch(e){case"month":return ur(a,s);case"lastMonth":return s===0?ur(a-1,11):ur(a,s-1);case"quarter":return dr(a,i);case"lastQuarter":return i===1?dr(a-1,4):dr(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:$e(n.from)?n.from:"0000-01-01",to:$e(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var nn=(e,t)=>!!e&&e>=t.from&&e<=t.to;function yl(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${Un(o+1)}`}return n}function wl(e,t=q()){let n=[];for(let a=e-1;a>=0;a--)n.push(At(t.slice(0,7)+"-01",-a).slice(0,7));return n}var um=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dm=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Ft=e=>`${um[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,ca=e=>dm[Number(e.slice(5,7))-1];function $n(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",p=c==="."?",":".";r=n.split(p).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var gn=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Ne(e,...t){let n=gn(e).trim();if(!n)return!0;let a=gn(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function Rt(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function qt(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function Vt(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var mr=4,kl="bbc-finance",pr="2026-10-20",xl="Neu: Verträge mit mehreren Positionen – einmalig oder laufend (monatlich, quartalsweise, jährlich). Daraus die einmalige Rechnung und die wiederkehrende Rechnung getrennt anlegen.",dt=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes","todos","contracts"],_n="USD";var Ae=["USD","EUR"],js=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],Bt=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],ja={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},ua={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},mm=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],pm=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],fm=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],da=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],kt={starter:{label:"Starter",tone:"good"},standard:{label:"Standard",tone:"info"}},zn=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],Ct=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Zt={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:mm,serviceCategories:pm,paymentMethods:fm,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},Ut=()=>({id:Ke(),createdAt:ne(),updatedAt:ne()});function Wa(e={}){return{...Ut(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:_n,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var ma=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],Qa=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],pa={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},fa=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],Ws=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],st=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function ga(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...Ut(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:q(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||st(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function Pn(e={}){return{...Ut(),title:"",due:"",customerId:"",companyId:"",appointmentId:"",note:"",done:!1,doneAt:null,...e}}function Qs(e={}){return{...Ut(),customerId:"",companyId:"",date:q(),kind:"note",title:"",text:"",...e}}var Dl=[{id:"customer",label:"Kunde"},{id:"contact",label:"Kontakt"}],Re=e=>!e||e.kind!=="contact";function Gt(e={}){return{...Ut(),kind:"customer",number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function Ht(e={}){return{...Ut(),code:"",tier:"",name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:_n,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function jt(e={}){return{id:Ke(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function mt(e,t={}){let n=q();return{...Ut(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:_n,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function Ln(e,t={}){let n=q();return{...Ut(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:_n,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function Qe(e){return e?e.number?e.number:e.source==="upload"?e.refNumber||e.title||"PDF-Angebot":"Entwurf":""}function Sl(e,t={}){return Ln(e,{source:"upload",status:"open",title:"",refNumber:"",attachmentIds:[],validUntil:"",intro:"",paymentTerms:"",footer:"",...t})}var ha={open:{label:"Offen",tone:"info"},signed:{label:"Unterschrieben",tone:"good"},ended:{label:"Beendet",tone:"mute"},declined:{label:"Nicht zustande gekommen",tone:"mute"}};function Kn(e,t={}){return{...Ut(),companyId:e?e.id:"",customerId:"",title:"",refNumber:"",status:"open",signedDate:"",startDate:"",endDate:"",noticePeriod:"",items:[],currency:e?e.currency:_n,quoteId:"",attachmentIds:[],notes:"",...t}}function Ya(e={}){return{...Ut(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:q(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:_n,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function bn(e,t={}){return{...Ut(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:q(),nextDate:q(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:_n,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function Z(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function rt(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var gm=4,Ja=null,vn=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),hm=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function $a(e){return e==="counters"||e==="settings"?"key":"id"}var Mt=[...dt,"settings","blobs"];function fr(){return Ja||(Ja=new Promise((e,t)=>{let n=indexedDB.open(kl,gm);n.onupgradeneeded=()=>{let a=n.result;for(let s of Mt){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:$a(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),Ja=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),Ja)}async function ba(e){let t=await fr();return vn(t.transaction(e,"readonly").objectStore(e).getAll())}async function Cl(e,t){let n=await fr();return vn(n.transaction(e,"readonly").objectStore(e).get(t))}async function On(e,t){let a=(await fr()).transaction(e,"readwrite"),s=hm(a),i={get:(o,c)=>vn(a.objectStore(o).get(c)),put:(o,c)=>vn(a.objectStore(o).put(c)),del:(o,c)=>vn(a.objectStore(o).delete(c)),byIndex:(o,c,p)=>vn(a.objectStore(o).index(c).get(p)),allByIndex:(o,c,p)=>vn(a.objectStore(o).index(c).getAll(p)),clear:o=>vn(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function Il(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function El(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var w={ready:!1,version:0,settings:ye(Zt)},Wt={};for(let e of dt)w[e]=[],Wt[e]=new Map;var Xs=new Set;function Tl(e){return Xs.add(e),()=>Xs.delete(e)}var Ys=0,gr=!1;function Al(){if(w.version+=1,Js.clear(),Ys){gr=!0;return}for(let e of Xs)e(w.version)}async function Rl(e){Ys+=1;try{return await e()}finally{if(Ys-=1,!Ys&&gr){gr=!1;for(let t of Xs)t(w.version)}}}var Fn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(Fn=new BroadcastChannel("bbc-finance-sync"),Fn.onmessage=e=>{e.data==="changed"&&qn()})}catch{Fn=null}var Nl=new Set(dt.filter(e=>e!=="rates"));async function qn(){let e=await Promise.all([...dt,"settings"].map(n=>ba(n)));dt.forEach((n,a)=>{Wt[n]=new Map(e[a].map(s=>[s[$a(n)],s])),w[n]=e[a]});let t=ye(Zt);for(let n of e[dt.length])Object.hasOwn(Zt,n.key)&&(t[n.key]=n.value);w.settings=t,w.ready=!0,Al()}async function Bl(){await qn(),El()}var Ee=e=>w[e],y=(e,t)=>t?Wt[e].get(t):void 0,Js=new Map;function Ul(e,t){return Js.has(e)||Js.set(e,t()),Js.get(e)}function Ml(e,t){return Ul(`group:${e}:${t}`,()=>{let n=new Map;for(let a of w[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var _l=Object.freeze([]),Ye=e=>Ml("payments","invoiceId").get(e)||_l,yn=e=>Ml("reminders","invoiceId").get(e)||_l,an=e=>e&&Wt.assets.get(e)?Wt.assets.get(e).dataUrl:"",re=()=>Ul("activeCompanies",()=>w.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function de(){let e=w.settings.activeCompany;if(!e||e==="all")return null;let t=y("companies",e);return t&&!t.archived?t:null}function Oe(e){let t=de();return!t||e.companyId===t.id}function $m({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:Ke(),at:ne(),user:w.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function Y(e){let t=[],n=!1,a={},s=await On(Mt,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(p,d){return t.push({store:p,value:d}),Nl.has(p)&&p!=="audit"&&(n=!0),r.put(p,d)},del(p,d){return t.push({store:p,id:d,del:!0}),Nl.has(p)&&(n=!0),r.del(p,d)},clear(p){return t.push({store:p,clear:!0}),r.clear(p)},blobPut:(p,d)=>r.put("blobs",{id:p,blob:d}),blobDel:p=>r.del("blobs",p),audit(p){let d=$m(p);return t.push({store:"audit",value:d}),r.put("audit",d)},setting(p,d){return a[p]=d,r.put("settings",{key:p,value:d})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let p=await r.get("settings","changesSinceBackup"),d=p&&Number(p.value)||0;a.changesSinceBackup=d+1,await r.put("settings",{key:"changesSinceBackup",value:d+1})}return c}),i=new Set;for(let r of t)Wt[r.store]&&(r.clear?Wt[r.store]=new Map:r.del?Wt[r.store].delete(r.id):Wt[r.store].set(r.value[$a(r.store)],r.value),i.add(r.store));for(let r of i)w[r]=[...Wt[r].values()];if(Object.keys(a).length&&(w.settings={...w.settings,...a}),Al(),Fn)try{Fn.postMessage("changed")}catch{}return s}function Xa(){if(Fn)try{Fn.postMessage("changed")}catch{}}async function ot(e,t){return Y(n=>n.setting(e,t))}async function zl(e){return Y(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=D(w.version);return ce(()=>Tl(t=>e(t)),[]),w}var $r=new Set,Vn=null,es=Ll(),hr=!1;function Ll(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function br(){if(hr){hr=!1;return}let e=Ll();if(e.raw!==es.raw){if(Vn){if(!await Vn()){hr=!0,location.hash=es.raw;return}Vn=null}es=e;for(let t of $r)t(es);window.scrollTo(0,0)}}window.addEventListener("hashchange",br);function J(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),br()):location.hash===n?br():location.hash=e}function wn(e){Vn=null,J(e)}function ti(e){Vn=e}function sn(){Vn=null}var Kl=()=>!!Vn;function Ol(){let[e,t]=D(es);return ce(()=>($r.add(t),()=>$r.delete(t)),[]),e}var bm=0,ei=new Set,Zn=[];function U(e,t="info",n){let a=++bm;Zn=[...Zn,{id:a,message:String(e),tone:t}].slice(-3),ei.forEach(s=>s(Zn)),setTimeout(()=>wr(a),n||(t==="bad"?9e3:4500))}function wr(e){Zn=Zn.filter(t=>t.id!==e),ei.forEach(t=>t(Zn))}function Fl(){let[e,t]=D(Zn);return ce(()=>(ei.add(t),()=>ei.delete(t)),[]),e}var ql=0;function va(e=2e3){ql=Date.now()+e}var Vl=()=>Date.now()<ql;function ya(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?U("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?U("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):U(t,"bad")}async function _(e){try{return await e()}catch(t){ya(t);return}}var vr=new Set,yr=null;function Pl(e){yr=e,vr.forEach(t=>t(yr))}function Zl(){let[e,t]=D(yr);return ce(()=>(vr.add(t),()=>vr.delete(t)),[]),e}var vm=0;function ue(e){return new Promise(t=>{Pl({...e,id:++vm,resolve:n=>{Pl(null),t(n)}})})}var ni=()=>ue({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var ym={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2",mic:"M10 3a2.500 2.500 0 0 1 2.500 2.500v4a2.500 2.500 0 0 1-5 0v-4A2.500 2.500 0 0 1 10 3zM5.500 9.500a4.500 4.500 0 0 0 9 0M10 14v3M7.500 17h5"};function W({name:e,size:t=18,class:n=""}){let a=ym[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function kr(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function si(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var wa=e=>si(e,100);var wm=e=>si(e,1e3),Hl=e=>si(e,100),Gl=e=>si(e,1e3);function xr(e){let t=wm(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(Hl(e.discountPct),0),1e4);return kr(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function _t(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(m=>BigInt(Math.round(m))),s=a.reduce((m,f)=>m+f,0n);if(s===0n&&(a=a.map(m=>m<0n?-m:m),s=a.reduce((m,f)=>m+f,0n),s===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let i=m=>m<0n?-m:m,r=i(s),o=s<0n?a.map(m=>-m):a,c=i(n),p=[],d=[];o.forEach((m,f)=>{let h=c*m,b=h/r,v=h%r;v<0n&&(b-=1n,v+=r),p.push(b),d.push({i:f,r:v})});let u=c-p.reduce((m,f)=>m+f,0n);d.sort((m,f)=>m.r===f.r?m.i-f.i:m.r>f.r?-1:1);for(let m=0;u>0n&&m<d.length;m++,u-=1n)p[d[m].i]+=1n;return n<0n?p.map(m=>Number(-m)||0):p.map(m=>Number(m)||0)}function pt(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:xr(m)})),a=n.reduce((m,f)=>m+f.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let m=Math.min(Hl(r),1e4);s=kr(BigInt(a)*BigInt(m),10000n)}let o=new Map;for(let m of n){let f=Gl(m.taxRate),h=o.get(f)||{rate:m.taxRate,rateMilli:f,subtotalCents:0};h.subtotalCents+=m.cents,o.set(f,h)}let c=[...o.values()].sort((m,f)=>m.rateMilli-f.rateMilli),p=_t(s,c.map(m=>m.subtotalCents)),d=0;c.forEach((m,f)=>{m.discountCents=p[f]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=kr(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),d+=m.taxCents});for(let m of c){let f=n.filter(b=>Gl(b.taxRate)===m.rateMilli),h=_t(m.discountCents,f.map(b=>b.cents));f.forEach((b,v)=>{b.netCents=b.cents-(h[v]||0)})}let u=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:u,taxCents:d,totalCents:u+d,taxGroups:c.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var ai=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function km(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function rn(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?ai(e*s):null;if(t==="EUR"&&n==="USD")return i?ai(e/s):null;let r=km(t,a);if(r==null)return null;let o=e*r;return n==="USD"?ai(o):n==="EUR"&&i?ai(o*s):null}var xt=(e,t,n)=>rn(e,t,"USD",n),zt=(e,t,n)=>rn(e,t,"EUR",n);function Qt(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var Ue=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function Yt(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=Ue(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function on(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-Ue(t),0)}var Dr=e=>e.status!=="draft"&&e.status!=="cancelled";function Pt(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var kn={de:"de-DE",en:"en-US"},Sr=new Map;function ka(e,t){let n=e+JSON.stringify(t);return Sr.has(n)||Sr.set(n,new Intl.NumberFormat(e,t)),Sr.get(n)}function j(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return ka(kn[n]||kn.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function ts(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?ka("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):ka("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function xa(e,t,n){let a=j(e,t,n);return n==="en"?`${a} ${t}`:a}function Gn(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":ka(kn[t]||kn.de,{maximumFractionDigits:n}).format(Number(e))}function It(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${ka(kn[t]||kn.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function Da(e,t="de"){return Number.isFinite(Number(e))?ka(kn[t]||kn.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function Wl(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Ql(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function F(e,t="de"){if(!e)return"";let n=Ga(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function Je(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var Yl={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},jl={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},ii=(e,t)=>t==="en"&&jl[e]?jl[e]:e||"",Et=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);function ns(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}var xm={"not-allowed":"Der Browser darf das Mikrofon nicht verwenden. Bitte in den Website-Einstellungen das Mikrofon erlauben.","service-not-allowed":"Die Spracherkennung ist in diesem Browser gesperrt. In Safari muss auf dem Mac die Diktierfunktion eingeschaltet sein (Systemeinstellungen → Tastatur → Diktierfunktion).",network:"Die Spracherkennung braucht eine Internetverbindung.","audio-capture":"Es wurde kein Mikrofon gefunden.","language-not-supported":"Deutsch wird von der Spracherkennung dieses Browsers nicht unterstützt."},Dm=e=>xm[e]||`Die Spracherkennung ist fehlgeschlagen (${e}).`;function ri({lang:e="de-DE",onFinal:t,onInterim:n,onEnd:a,onError:s}){let i=window.SpeechRecognition||window.webkitSpeechRecognition,r=new i;return r.lang=e,r.continuous=!0,r.interimResults=!0,r.onresult=o=>{let c="";for(let p=o.resultIndex;p<o.results.length;p++){let d=o.results[p][0].transcript;o.results[p].isFinal?t&&t(d.trim()):c+=d}n&&n(c.trim())},r.onerror=o=>{o.error!=="no-speech"&&o.error!=="aborted"&&s&&s(Dm(o.error))},r.onend=()=>{a&&a()},r.start(),()=>{try{r.stop()}catch{}}}function oi(e,t){let n=String(t||"").trim();if(!n)return e||"";let a=String(e||"");if(!a.trim())return n.charAt(0).toUpperCase()+n.slice(1);let s=/[\s\n]$/.test(a)?"":" ",i=/[.!?]\s*$/.test(a)?n.charAt(0).toUpperCase()+n.slice(1):n;return a+s+i}var Sm=0,Hn=(e="f")=>Se(()=>`${e}-${++Sm}`,[]);function I({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:p="",...d}){let u=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${p?` ${p}`:""}`;return l`<button type=${s} class=${u} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${d}>
    ${t&&l`<${W} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function we({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function V({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=Hn();return l`<${we} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${p=>s&&s(p.target.value)} ...${o} />
  <//>`}function Cm({onText:e,label:t="Diktieren",small:n=!0,class:a=""}){let[s,i]=D(!1),[r,o]=D(""),c=ve(null);if(ce(()=>()=>{c.current&&c.current()},[]),!ns())return null;function p(){if(s){c.current&&c.current();return}try{c.current=ri({onFinal:d=>e(d),onInterim:o,onEnd:()=>{i(!1),o(""),c.current=null},onError:d=>Cr(d)}),i(!0)}catch(d){Cr(d.message||String(d))}}return l`<span class=${`mic-wrap ${a}`}>
    <button type="button" class=${`mic-btn${s?" is-on":""}${n?" is-small":""}`} onClick=${p}
      title=${s?"Zuhören beenden":t} aria-label=${s?"Zuhören beenden":t} aria-pressed=${s}>
      <${W} name="mic" size=${n?15:20} />
    </button>
    ${s&&r&&l`<span class="mic-interim" aria-live="polite">${r}</span>`}
  </span>`}var Cr=e=>{console.warn(e)},Jl=e=>{Cr=e};function ie({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,dictate:r=!0,...o}){let c=Hn(),p=ve(null),d=u=>{let m=p.current?p.current.value:n;a&&a(oi(m,u))};return l`<${we} label=${e} hint=${t} class=${i} htmlFor=${c}>
    <div class=${r&&ns()?"dictate-wrap":""}>
      <textarea id=${c} ref=${p} class="input textarea" rows=${s} value=${n??""} onInput=${u=>a&&a(u.target.value)} ...${o}></textarea>
      ${r&&a&&l`<${Cm} onText=${d} class="dictate-mic" />`}
    </div>
  <//>`}function se({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let p=Hn();return l`<${we} label=${e} hint=${t} error=${n} class=${r} htmlFor=${p}>
    <select id=${p} class="input select" value=${a??""} onChange=${d=>s&&s(d.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(d=>{let u=typeof d=="object"?d:{id:d,label:d};return l`<option value=${u.id} selected=${String(u.id)===String(a??"")}>${u.label}</option>`})}
    </select>
  <//>`}function Ge({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...p}){let d=C=>C==null||C===""?"":n==="money"?Wl(C):Ql(C,a),[u,m]=D(d(e)),[f,h]=D(!1),[b,v]=D(!1);ce(()=>{f||m(d(e))},[e,f]);function g(C){if(String(C).trim()===""){v(!1),t(r?null:0);return}let S=$n(C,{decimalOnly:n!=="money"});if(Number.isNaN(S)){v(!0);return}s!=null&&S<s&&(S=s),i!=null&&S>i&&(S=i),v(!1),t(n==="money"?wa(S):Number(S.toFixed(a)))}let $=l`<input class=${`input num ${b?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${u}
    onFocus=${C=>{h(!0),C.target.select()}}
    onInput=${C=>{m(C.target.value),g(C.target.value)}}
    onBlur=${C=>{h(!1),g(C.target.value)}}
    aria-invalid=${b} ...${p} />`;return c?l`<span class="input-wrap">${$}<span class="input-suffix">${c}</span></span>`:$}function Me({label:e,hint:t,error:n,class:a,...s}){let i=Hn();return l`<${we} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${Ge} id=${i} ...${s} />
  <//>`}function _e({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=Hn();return l`<${we} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function je({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=Hn("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function Dt({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function ft({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:p,label:d,id:u,disabled:m}){let f=Hn("cb"),h=u||f,b=e.find(z=>z.id===t),[v,g]=D(!1),[$,C]=D(""),[S,k]=D(0),B=ve(null),G=ve(null),E=r?o??"":v?$:b?b.label:"",A=Se(()=>{let z=gn(r?v?o:"":$).trim();return(z?e.filter(Q=>gn(`${Q.label} ${Q.sub||""} ${Q.search||""}`).includes(z)):e).slice(0,50)},[e,$,o,v,r]);ce(()=>{if(!v)return;let z=L=>{B.current&&!B.current.contains(L.target)&&(g(!1),C(""))};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[v]),ce(()=>{p&&G.current&&G.current.focus()},[]);let x=s&&!r,R=A.length+(x?1:0);function M(z){n(z.id,z),g(!1),C("")}function T(z){if(z.key==="ArrowDown")z.preventDefault(),g(!0),k(L=>Math.min(L+1,R-1));else if(z.key==="ArrowUp")z.preventDefault(),k(L=>Math.max(L-1,0));else if(z.key==="Enter"){if(!v)return;if(r&&!A.length){g(!1);return}z.preventDefault(),S<A.length?M(A[S]):x&&(s($),g(!1),C(""))}else z.key==="Escape"?v&&(z.stopPropagation(),g(!1),C("")):z.key==="Tab"&&(g(!1),C(""))}return l`<div class="combo" ref=${B}>
    <input ref=${G} id=${h} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${v} aria-label=${d} aria-autocomplete="list" disabled=${m}
      placeholder=${v&&b&&!r?b.label:a} value=${E}
      onClick=${()=>{g(!0),k(0)}}
      onInput=${z=>{g(!0),k(0),r?c(z.target.value):C(z.target.value)}}
      onKeyDown=${T} />
    ${!r&&l`<span class="combo-caret"><${W} name="chevronDown" size=${16} /></span>`}
    ${v&&R>0&&l`<ul class="combo-list" role="listbox">
      ${A.map((z,L)=>l`<li role="option" aria-selected=${L===S}
          class=${`combo-item${L===S?" is-active":""}${z.id===t?" is-selected":""}`}
          onMouseEnter=${()=>k(L)}
          onMouseDown=${Q=>{Q.preventDefault(),M(z)}}>
          <span class="combo-label">${z.label}</span>
          ${z.sub&&l`<span class="combo-sub">${z.sub}</span>`}
        </li>`)}
      ${x&&l`<li role="option" class=${`combo-item combo-create${S===A.length?" is-active":""}`}
          onMouseEnter=${()=>k(A.length)}
          onMouseDown=${z=>{z.preventDefault(),s($),g(!1),C("")}}>
          <${W} name="plus" size=${16} />
          <span>${$.trim()?`„${$.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${v&&R===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var Im={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function ze({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${W} name=${n||Im[e]||"info"} size=${14} />${t}
  </span>`}function ke({title:e,sub:t,back:n,children:a}){return l`<header class="page-head">
    <div class="page-head-text">
      ${n&&l`<a class="back-link" href=${n.href}><${W} name="chevronLeft" size=${16} />${n.label}</a>`}
      <h1>${e}</h1>
      ${t&&l`<p class="page-sub">${t}</p>`}
    </div>
    ${a&&l`<div class="page-actions">${a}</div>`}
  </header>`}function pe({icon:e="file",title:t,text:n,children:a}){return l`<div class="empty">
    <div class="empty-icon"><${W} name=${e} size=${26} /></div>
    <h3>${t}</h3>
    ${n&&l`<p>${n}</p>`}
    ${a&&l`<div class="empty-actions">${a}</div>`}
  </div>`}function X({title:e,action:t,children:n,class:a="",flush:s}){return l`<section class=${`panel ${a}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${s?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function xe({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${W} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function li({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function St({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=D(!1),o=ve(null);ce(()=>{if(!i)return;let p=u=>{o.current&&!o.current.contains(u.target)&&r(!1)},d=u=>{u.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",d)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${I} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(p=>l`<button type="button" role="menuitem" class=${`menu-item${p.danger?" is-danger":""}`} disabled=${p.disabled}
        onClick=${()=>{r(!1),p.onClick()}}>
        ${p.icon&&l`<${W} name=${p.icon} size=${16} />`}<span>${p.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function Pe({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=ve(null);ce(()=>{let c=document.activeElement,p=r.current;if(p){let u=p.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");u&&u.focus()}let d=u=>{if(u.key==="Escape"&&(u.stopPropagation(),t()),u.key==="Tab"&&p){let m=[...p.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(b=>b.offsetParent!==null);if(!m.length)return;let f=m[0],h=m[m.length-1];u.shiftKey&&document.activeElement===f?(u.preventDefault(),h.focus()):!u.shiftKey&&document.activeElement===h&&(u.preventDefault(),f.focus())}};return document.addEventListener("keydown",d),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",d),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${I} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function Xl(){let e=Zl();return e?l`<${Em} key=${e.id} d=${e} />`:null}function Em({d:e}){let[t,n]=D(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${Pe} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${I} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${I} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${ie} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${V} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function ec(){let e=Fl();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${W} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>wr(t.id)}><${W} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function et({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,p]=D(s||null),d=Se(()=>{if(!c)return t;let m=e.find(h=>h.key===c.key);if(!m||!m.sort)return t;let f=c.dir==="desc"?-1:1;return[...t].sort((h,b)=>{let v=m.sort(h),g=m.sort(b);return v==null&&g==null?0:v==null?1:g==null?-1:typeof v=="number"&&typeof g=="number"?(v-g)*f:String(v).localeCompare(String(g),"de",{numeric:!0})*f})},[t,c,e]);if(!t.length&&r)return r;let u=m=>{m.sort&&p(f=>f&&f.key===m.key?{key:m.key,dir:f.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
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
  </div>`}function gt({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function ht({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${W} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Fe({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function xn({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var Ir=[{id:"once",label:"Einmalig"},{id:"monthly",label:"Monatlich"},{id:"quarterly",label:"Quartalsweise"},{id:"semiannual",label:"Halbjährlich"},{id:"yearly",label:"Jährlich"}],$t={monthly:"Monat",quarterly:"Quartal",semiannual:"Halbjahr",yearly:"Jahr"},Nm=["monthly","quarterly","semiannual","yearly"],as=e=>!!$t[e];function jn(e={}){return{id:Ke(),serviceId:"",name:"",description:"",qty:1,unit:"Pauschal",priceCents:0,taxRate:0,billing:"once",...e}}function Wn(e){if(!e)return[];if(Array.isArray(e.items)&&e.items.length)return e.items;if(e.amountCents!=null&&e.amountCents!==""){let t=as(e.billing)?e.billing:"once";return[jn({id:`legacy-${e.id||"x"}`,name:e.title||"Vertragsleistung",qty:1,unit:$t[t]||"Pauschal",priceCents:Math.round(Number(e.amountCents))||0,taxRate:Number(e.taxRate)||0,billing:t})]}return[]}var Sa=e=>Math.round((Number(e.qty)||0)*(Number(e.priceCents)||0));function Dn(e){let t={once:0,intervals:{},hasOnce:!1,intervalIds:[]};for(let n of Wn(e))as(n.billing)?t.intervals[n.billing]=(t.intervals[n.billing]||0)+Sa(n):(t.once+=Sa(n),t.hasOnce=!0);return t.intervalIds=Nm.filter(n=>n in t.intervals),t}function ss(e,t){let n=Dn(e),a=[];n.hasOnce&&a.push(`${t(n.once)} einmalig`);for(let s of n.intervalIds)a.push(`${t(n.intervals[s])} / ${$t[s]}`);return a.join(" · ")}function Er(e){return!e||!e.recurring?"once":/jahr/i.test(e.unit||"")&&!/halb/i.test(e.unit||"")?"yearly":/halbjahr/i.test(e.unit||"")?"semiannual":/quartal/i.test(e.unit||"")?"quarterly":"monthly"}function Tm(e){let t=String(e||"").toLowerCase();return t==="monat"?"monthly":t==="quartal"?"quarterly":t==="halbjahr"?"semiannual":t==="jahr"?"yearly":"once"}function ci(e,t=()=>null){return(e.items||[]).filter(n=>!n.isText).map(n=>{let a=n.serviceId?t(n.serviceId):null,s=Number(n.discountPct)||0;return jn({serviceId:n.serviceId||"",name:n.name||"",description:n.description||"",qty:Number(n.qty)||1,unit:n.unit||"Pauschal",priceCents:Math.round(s?(Number(n.priceCents)||0)*(1-s/100):Number(n.priceCents)||0),taxRate:Number(n.taxRate)||0,billing:e.source==="upload"?"once":a?Er(a):Tm(n.unit)})})}function is(e,t="once"){return Wn(e).filter(n=>t==="all"?!0:t==="once"?!as(n.billing):n.billing===t).map(n=>({id:Ke(),serviceId:n.serviceId||"",name:n.name,discountPct:0,description:n.description||(e.refNumber?`Gemäß Vertrag ${e.refNumber}`:""),qty:Number(n.qty)||1,unit:n.unit||$t[n.billing]||"Pauschal",priceCents:Math.round(Number(n.priceCents)||0),taxRate:Number(n.taxRate)||0}))}function tc(e){for(let[t,n]of(e||[]).entries()){if(!String(n.name||"").trim())return`Position ${t+1}: Bitte eine Bezeichnung eintragen.`;if(!(Number(n.qty)>0))return`Position ${t+1}: Die Menge muss größer als 0 sein.`;if(!(Number(n.priceCents)>=0))return`Position ${t+1}: Bitte den Preis prüfen.`;if(!Ir.some(a=>a.id===n.billing))return`Position ${t+1}: Unbekannte Abrechnung.`}return""}var Am=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function Nr(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return Am.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var Tr=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),Rm=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function Bm(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function Nt(e,t,n={}){let a=Bm(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||y("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||y("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=Yl[o],p=e.currency||"USD",d=!s&&e.totals?e.totals:pt(e),u=O=>j(O,p,o),m=[i.name,Tr(i),Nr(i)].filter(Boolean).join(" · "),f=[];if(r){let O=rt(r);r.company&&f.push(r.company),O&&O!==r.company&&f.push(O);let Be=Tr(r);Be&&f.push(Be);let Ze=Nr(r);Ze&&f.push(Ze),r.country&&!Rm(r.country,i.country)&&f.push(r.country)}let h=[];r&&r.vatId&&h.push(`${c.vatId}: ${r.vatId}`);let b=e.number||n.previewNumber||"",v=[];v.push([c[`number_${a}`],b||`(${c.draft})`]),v.push([c[`date_${a}`],F(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?v.push([c.servicePeriod,`${F(e.serviceDate,o)} – ${F(e.serviceDateEnd,o)}`]):v.push([c.serviceDate,F(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&v.push([c.dueDate,F(e.dueDate,o)]),a==="quote"&&e.validUntil&&v.push([c.validUntil,F(e.validUntil,o)]),r&&r.number&&r.kind!=="contact"&&v.push([c.customerNo,r.number]);let g="";if(a==="credit_note"&&e.relatedInvoiceId){let O=y("invoices",e.relatedInvoiceId);O&&(g=Et(c.refInvoice,{NUMBER:O.number,DATE:F(O.issueDate,o)}))}let $=e.items||[],C=$.some(O=>Number(O.discountPct)>0),k=new Set($.map(O=>Number(O.taxRate)||0)).size>1,B=new Map(d.lines.map(O=>[O.id,O])),G=$.map((O,Be)=>({pos:String(Be+1),name:O.name||"",description:O.description||"",qty:Gn(O.qty,o,3),unit:ii(O.unit,o),price:u(O.priceCents),discount:Number(O.discountPct)>0?It(O.discountPct,o):"",tax:It(Number(O.taxRate)||0,o),amount:u(B.has(O.id)?B.get(O.id).cents:0)})),E=String(i.taxLabel||"").trim()||c.taxDefault,A=d.taxGroups.filter(O=>Number(O.rate)!==0),x=[],R=d.discountCents!==0;if((R||A.length)&&x.push({label:c.subtotal,value:u(d.subtotalCents)}),R){let O=e.discount||{},Be=O.type==="abs"?c.discount:`${c.discount} ${It(O.value,o)}`;x.push({label:Be,value:u(-d.discountCents)}),A.length&&x.push({label:c.net,value:u(d.netCents)})}for(let O of A){let Be=A.length>1?` (${u(O.netCents)})`:"";x.push({label:`${E} ${It(O.rate,o)}${Be}`,value:u(O.taxCents)})}x.push({label:c[`total_${a}`]||c.total,value:xa(d.totalCents,p,o),strong:!0});let M=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(p==="USD"||p==="EUR")){let O=p==="USD"?"EUR":"USD",Be=rn(d.totalCents,p,O,e.fx);if(Be!=null){let Ze=p==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);M={line:`${c.approx} ${xa(Be,O,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${p} = ${Da(Ze,o)} ${O}`}}}let T=[];a==="invoice"&&e.dueDate&&T.push(Et(c.dueLine,{DATE:F(e.dueDate,o)})),a==="quote"&&e.validUntil&&T.push(Et(c.validLine,{DATE:F(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&T.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&T.push(i.taxNote.trim());let z=null;if(a==="invoice"){let O=[];i.accountHolder&&O.push([c.holder,i.accountHolder]),i.bankName&&O.push([c.bank,i.bankName]),i.iban&&O.push(["IBAN",i.iban]),i.bic&&O.push(["BIC",i.bic]);let Be=[i.altBank,i.otherPayment].map(Ze=>String(Ze||"").trim()).filter(Boolean);(O.length||Be.length)&&(z={title:c.payment,rows:O,extra:Be})}let L=[i.name,Tr(i),Nr(i),i.country].filter(Boolean),Q=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),N=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),ee=Z(r),fe=b?`${b} ${ee}`:`${c.draft} ${c[a]} ${ee}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:an(i.logoAssetId),companyName:i.name||"",title:c[a],number:b,subtitle:g,draftMark:s?c.draftMark:"",senderLine:m,recipient:f,recipientExtra:h,meta:v,intro:String(e.intro||"").trim(),columns:{discount:C,tax:k},labels:c,rows:G,sums:x,secondary:M,notes:T,payment:z,footerCols:[L,Q,N].filter(O=>O.length),footerText:String(e.footer||"").trim(),fileName:`${qt(fe)}.pdf`}}var Um=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function nc(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))Um.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var Mm=8e3;async function _m(e){let t=new AbortController,n=setTimeout(()=>t.abort(),Mm);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var Ar=e=>Number.isFinite(Number(e))&&Number(e)>0,Rr={frankfurterV2(e,t,n){if(!e||!Ar(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!Ar(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!Ar(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function zm(e,t,n){let a=n&&n<q(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:Rr.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:Rr.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Rr.erApi}),s}async function ac(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||q(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<q()?n:q(),s=Pm(e,t,a);if(s)return s;let i=null;for(let o of zm(e,t,n))try{let c=await _m(o.url),p=o.parse(c,e,t),d={id:`${e}_${t}_${a}`,base:e,quote:t,rate:p.rate,date:p.date||a,requestedDate:a,fetchedAt:ne(),source:p.source};return await Y(u=>u.put("rates",d)).catch(()=>{}),d}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function Qn(e){let t=q();return e&&e<t?e:t}function Pm(e,t,n){let a=`${e}_${t}_${n}`,s=Ee("rates").find(i=>i.id===a);return!s||n===q()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function Br(e,t){let n=Ee("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function Yn(e,t){let n=await ac("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await ac(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:Qn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var Lm=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],Km={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function Jt(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!Lm.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function Om(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function Jn(e,t,n,a){return`${e}:${t}:${Om(n,a)}`}function Ur(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function Lt(e,t){let n=Km[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function Mr(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=Lt(e,t),c=Jt(r);if(c)throw new Error(c);let p=Number(a)||0;for(let d=0;d<1e5;d++){p+=1;let u=Ur(r,{prefix:i,dateISO:n,n:p,digits:o});if(!await s(u))return{number:u,n:p}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var he=e=>({...e,updatedAt:ne()}),Ie=class extends Error{},K=e=>{throw new Ie(e)},oc={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},ln=e=>$e(e)&&e>="2000-01-01"&&e<="2100-12-31";async function rs(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=Jt(e[r]);o&&K(o)}String(e.name||"").trim()||K("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&K("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of Ee("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=Lt(e,o),p=Lt(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===p.pattern&&String(c.prefix).trim().toLowerCase()===String(p.prefix).trim().toLowerCase()&&K(`${r.name} verwendet für ${oc[o]} bereits das Präfix „${p.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=y("companies",e.id),a=he(e),s=null;t&&(s={id:await Fm(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=Rt(n,a,["updatedAt","createdAt"]);return await Y(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function lc(e,t){let n=y("companies",e);if(!n)return;let a=he({...n,archived:t});await Y(async s=>{await s.put("companies",a),t&&w.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function zr(e){return Ee("invoices").some(t=>t.companyId===e)||Ee("quotes").some(t=>t.companyId===e)||Ee("expenses").some(t=>t.companyId===e)||Ee("recurring").some(t=>t.companyId===e)}async function cc(e){let t=y("companies",e);t&&(zr(e)&&K("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await Y(async n=>{await n.del("companies",e),w.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:ui(t)})}))}async function Fm(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+Ke()}var ui=e=>{let t=ye(e);return delete t.snapshot,t},uc={customer:"K",contact:"KO"},sc=e=>Re(e)?"customer":"contact",dc=(e,t)=>new RegExp(`^${uc[e]}-\\d+$`).test(String(t||""));function Sn(e="customer",t=Ee("customers")){let n=uc[e]||"K",a=new RegExp(`^${n}-(\\d+)$`),s=0;for(let i of t)for(let r of[i.number,...i.formerNumbers||[]]){let o=a.exec(r||"");o&&(s=Math.max(s,Number(o[1])))}return`${n}-${String(s+1).padStart(4,"0")}`}async function Xn(e){Z(e)||K("Bitte ein Unternehmen oder einen Namen eintragen.");let t=y("customers",e.id),n=he({...e,kind:sc(e)}),a=t?sc(t):n.kind;t&&a==="customer"&&n.kind==="contact"&&Ee("invoices").some(o=>o.customerId===n.id)&&K("Für diesen Kunden gibt es Rechnungen. Er bleibt Kunde."),t&&a!==n.kind&&dc(a,t.number)&&(!String(n.number||"").trim()||n.number===t.number)&&(n.formerNumbers=[...t.formerNumbers||[],t.number],n.number=""),String(n.number||"").trim()||(n.number=Sn(n.kind,[...Ee("customers").filter(o=>o.id!==n.id),{formerNumbers:n.formerNumbers||[]}]));let s=Ee("customers").find(o=>o.id!==n.id&&o.number===n.number);s&&K(`Die Nummer ${n.number} ist bereits vergeben (${Z(s)}).`);let i=Rt(t,n,["updatedAt","createdAt"]),r=n.kind==="customer"?"Kunde":"Kontakt";return await Y(async o=>{await o.put("customers",n),await o.audit({action:t?a!==n.kind?n.kind==="customer"?"Kontakt zum Kunden gemacht":"Kunde als Kontakt geführt":`${r} geändert`:`${r} angelegt`,entity:"customers",entityId:n.id,label:Z(n),prev:t?i.prev:null,next:i.next})}),n}function Pr(e){return Ee("invoices").some(t=>t.customerId===e)||Ee("quotes").some(t=>t.customerId===e)||Ee("recurring").some(t=>t.customerId===e)||Ee("contracts").some(t=>t.customerId===e)}async function mc(e){let t=y("customers",e);t&&(Pr(e)&&K("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await Y(async n=>{let a=Ee("notes").filter(r=>r.customerId===e),s=Ee("appointments").filter(r=>r.customerId===e),i=Ee("todos").filter(r=>r.customerId===e);for(let r of a)await n.del("notes",r.id);for(let r of s)await n.del("appointments",r.id);for(let r of i)await n.del("todos",r.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:Z(t),prev:{...t,...a.length||s.length||i.length?{related:{notes:a,appointments:s,todos:i}}:{}}})}))}async function di(e){y("customers",e.customerId)||K("Bitte einen Kunden wählen."),$e(e.date)||K("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&K("Bitte etwas eintragen.");let t=y("notes",e.id),n=he({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=Rt(t,n,["updatedAt","createdAt"]);return await Y(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${Z(y("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function pc(e){let t=y("notes",e);t&&await Y(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:Z(y("customers",t.customerId)),prev:t})})}var ic=/^([01]\d|2[0-3]):[0-5]\d$/,qm=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function mi(e){y("companies",e.companyId)||K("Bitte das Unternehmen wählen, über das der Termin läuft."),ln(e.date)||K("Bitte ein gültiges Datum eintragen."),(!ic.test(e.start||"")||!ic.test(e.end||""))&&K("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&K("Das Ende liegt vor dem Beginn.");let t=y("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&K("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=y("appointments",e.id),a=he({...e,title:String(e.title||"").trim()||(t?`Termin mit ${Z(t)}`:String(e.contactName||"").trim())});n&&qm.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=Rt(n,a,["updatedAt","createdAt","sequence"]);return await Y(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function pi(e,{outcome:t,nextSteps:n,todos:a=[]}){let s=y("appointments",e);s||K("Termin nicht gefunden.");let i=a.filter(c=>String(c.title||"").trim());for(let c of i)c.due&&!ln(c.due)&&K(`Bitte die Fälligkeit von „${c.title}“ prüfen.`);let r=he({...s,status:"done",outcome:String(t||"").trim(),nextSteps:String(n||"").trim(),followUpAt:null});s.status!=="done"&&(r.sequence=(Number(s.sequence)||0)+1);let o=i.map(c=>Pn({title:String(c.title).trim(),due:c.due||"",customerId:s.customerId||"",companyId:s.companyId||"",appointmentId:s.id}));return await Y(async c=>{await c.put("appointments",r);for(let p of o)await c.put("todos",p);await c.audit({action:"Termin dokumentiert",entity:"appointments",entityId:e,label:`${s.date} ${s.start}, ${s.title}`,prev:{status:s.status,outcome:s.outcome||""},next:{status:"done",outcome:r.outcome,nextSteps:r.nextSteps,todos:o.map(p=>p.title).join(", ")}})}),{appointment:r,todos:o}}async function fc(e,t){let n=y("appointments",e);if(!n)return null;let a=he({...n,followUpAt:t});return await Y(async s=>{await s.put("appointments",a)}),a}async function os(e){String(e.title||"").trim()||K("Bitte beschreiben, was zu tun ist."),e.due&&!ln(e.due)&&K("Bitte die Fälligkeit prüfen.");let t=y("todos",e.id),n=he({...e,title:String(e.title).trim()}),a=Rt(t,n,["updatedAt","createdAt"]);return t&&!a.changed.length||await Y(async s=>{await s.put("todos",n),await s.audit({action:t?"To-do geändert":"To-do angelegt",entity:"todos",entityId:n.id,label:n.title,prev:t?a.prev:null,next:t?a.next:{title:n.title,due:n.due}})}),n}async function gc(e,t=!0){let n=y("todos",e);if(!n)return null;let a=he({...n,done:!!t,doneAt:t?ne():null});return await Y(async s=>{await s.put("todos",a),await s.audit({action:t?"To-do erledigt":"To-do wieder geöffnet",entity:"todos",entityId:e,label:n.title,prev:{done:n.done},next:{done:!!t}})}),a}async function hc(e){let t=y("todos",e);t&&await Y(async n=>{await n.del("todos",e),await n.audit({action:"To-do gelöscht",entity:"todos",entityId:e,label:t.title,prev:t})})}async function fi(e,t,n){let a=y("appointments",e);a||K("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||K("Unbekannter Status.");let s=he({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await Y(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function $c(e){let t=y("appointments",e);t&&await Y(async n=>{for(let a of Ee("todos").filter(s=>s.appointmentId===e))await n.put("todos",he({...a,appointmentId:""}));await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function gi(e){String(e.name||"").trim()||K("Bitte einen Namen für die Leistung eintragen.");let t=y("services",e.id),n=he({...e,code:String(e.code||"").trim()}),a=n.code&&Ee("services").find(i=>i.id!==n.id&&(i.code||"").toLowerCase()===n.code.toLowerCase());a&&K(`Die Leistungsnummer ${n.code} ist bereits vergeben (${a.name}).`);let s=Rt(t,n,["updatedAt","createdAt"]);return await Y(async i=>{await i.put("services",n),await i.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?s.prev:null,next:s.next})}),n}async function bc(e,{companyId:t="",update:n=!1}={}){t&&!y("companies",t)&&K("Das gewählte Unternehmen existiert nicht.");let a=new Map(Ee("services").filter(p=>p.code).map(p=>[p.code.toLowerCase(),p])),s=[],i=[],r=[];for(let p of e){let{company:d,...u}=p,m=String(u.name||"").trim();if(!m)continue;let f=String(u.code||"").trim(),h=f?a.get(f.toLowerCase()):null;if(h&&!n){r.push(h);continue}let b=h||Ht(),v=he({...b,...u,name:m,code:f,companyId:t||u.companyId||b.companyId||"",id:b.id,createdAt:b.createdAt});h?i.push({before:h,rec:v}):s.push(v),f&&a.set(f.toLowerCase(),v)}let o=w.settings.serviceCategories||[],c=[...new Set([...s,...i.map(p=>p.rec)].map(p=>p.category).filter(p=>p&&!o.includes(p)))];return await Y(async p=>{for(let d of s)await p.put("services",d);for(let{rec:d}of i)await p.put("services",d);c.length&&await p.setting("serviceCategories",[...o,...c]),await p.audit({action:"Leistungen importiert",entity:"services",entityId:"",label:`${s.length} neu, ${i.length} aktualisiert, ${r.length} übersprungen`,prev:i.length?{aktualisiert:i.map(d=>({code:d.before.code,name:d.before.name,priceCents:d.before.priceCents}))}:null,next:{neu:s.map(d=>d.code||d.name),...c.length?{kategorien:c}:{}}})}),{added:s.length,updated:i.length,skipped:r.length,categories:c}}async function vc(e){let t=y("services",e);t&&await Y(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function lt(e,t){return jt({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function Lr(e){return $e(e.issueDate)?Ce(e.issueDate,Number(e.paymentTermDays)||0):""}function ea(e){let t=he({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=Lr(t)),t.fx&&Ae.includes(t.currency)&&(t.fx=Qt(t.currency,t.fx.usdToEur,t.fx)),t.totals=pt(t),t}function yc(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new Ie(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=ye(t[a]):delete e[a];return n}async function Ca(e){let t=y("invoices",e.id);t&&t.status!=="draft"&&K("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&K("Nur Entwürfe können gespeichert werden.");let n=ea(e);return await Y(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new Ie("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");yc(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${Z(y("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function Kr(e){let t=y("invoices",e);if(t){if(t.number||t.status!=="draft"){await Or(e);return}await Y(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new Ie("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await wc(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:ui(t)})})}}async function Or(e){let t=y("invoices",e);return t?t.type==="credit_note"?Vr(e):t.status==="draft"&&!t.number?(await Kr(e),{number:""}):Y(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await _r(n,r,"credit"));for(let p of s)await n.del("payments",p.id);for(let p of i)await n.del("reminders",p.id);await n.del("invoices",e);let o=await _r(n,a,"invoice");await wc(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Z(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:Ue(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:ye(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function hi(e,t="invoice"){let n=[],a=y("companies",e.companyId);a||n.push("Unternehmen auswählen"),y("customers",e.customerId)||n.push("Kunde auswählen"),$e(e.issueDate)?ln(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!$e(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&$e(e.issueDate)&&e.fx.forDate!==Qn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),Ae.includes(e.currency)||n.push("Währung wählen"),a&&y("customers",e.customerId)){let i=nc(Nt(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=Jt(Lt(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function ls(e,t,n){if(!e||!$e(n))return"";let{pattern:a}=Lt(e,t);if(Jt(a))return"";let s=Jn(e.id,t,a,n),i=y("counters",s),r=new Set([...Ee("invoices"),...Ee("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await Mr(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Fr(e,t,n,a){let{pattern:s}=Lt(t,n),i=Jn(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await Mr(t,n,a,r.last,async p=>!!await e.byIndex("invoices","number",p)||!!await e.byIndex("quotes","number",p));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function _r(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!$e(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=Lt(i,n);if(Jt(o))return null;let p=Jn(i.id,n,o,t.issueDate),d=await e.get("counters",p);if(!d)return null;for(let u=Number(d.last)||0;u>=1;u--)if(Ur(o,{prefix:r,dateISO:t.issueDate,n:u,digits:c})===t.number){a={key:p,n:u};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function wc(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===At(t.issueDate,wi(n),n.anchorDay)&&await e.put("recurring",he({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",he({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function kc(e,t,n,a){let{pattern:s}=Lt(e,t),i=Jn(e.id,t,s,n),r=y("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await Y(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${oc[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function qr(e,t){return{company:ye(e),customer:ye(t),at:ne()}}async function cs(e){let t=hi(e,"invoice");t.length&&K(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=y("companies",e.companyId),a=y("customers",e.customerId),s=y("invoices",e.id);s&&s.status!=="draft"&&K("Diese Rechnung ist bereits erstellt.");let i=ea(e);return Y(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new Ie("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=yc(i,o),p=c?i.reopened||{}:null;if(!c){let u=await Fr(r,n,"invoice",i.issueDate);i.number=u.number,i.numberRef=u.ref}i.status="issued",i.finalizedAt=ne(),i.sentAt=null;let d=await r.get("customers",i.customerId)||a;if(!Re(d)){let u=d.number,m=he({...d,kind:"customer"});dc("contact",u)&&(m.formerNumbers=[...d.formerNumbers||[],u],m.number=Sn("customer",[...Ee("customers").filter(f=>f.id!==d.id),{formerNumbers:m.formerNumbers}])),await r.put("customers",m),await r.audit({action:"Kontakt zum Kunden gemacht",entity:"customers",entityId:m.id,label:Z(m),prev:{kind:"contact",number:u},next:{kind:"customer",number:m.number,reason:"Erste Rechnung"}}),d=m}if(i.snapshot=qr(n,d),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:p.totalCents,currency:p.currency,issueDate:p.issueDate,customer:p.customer,usdToEur:p.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:Z(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let u=await r.get("quotes",i.quoteId);u&&u.status!=="invoiced"&&await r.put("quotes",he({...u,status:"invoiced",invoiceId:i.id}))}return i})}async function xc(e){let t=y("invoices",e);return t||K("Rechnung nicht gefunden."),t.type==="credit_note"&&K("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||K("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),Y(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Z(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=he({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:ye(a)},next:{status:"draft"}}),o})}async function ta(e,t=!0){let n=y("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=he({...n,status:t?"sent":"issued",sentAt:t?ne():null});await Y(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function $i(e,t,n){let a=y(e,t);a&&await Y(async s=>{await s.put(e,he({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function us(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=y("invoices",e);r||K("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&K("Zu diesem Beleg können keine Zahlungen erfasst werden."),$e(t)||K("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||K("Bitte einen Zahlungsbetrag größer als null eintragen."),o>on(r,Ye(e))&&K("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:Ke(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await Y(async p=>{let d=await p.get("invoices",e),u=await p.allByIndex("payments","invoiceId",e);if(!d||d.type==="credit_note"||["draft","cancelled","credited"].includes(d.status))throw new Ie("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>on(d,u))throw new Ie("Der Betrag ist höher als der offene Rechnungsbetrag.");await p.put("payments",c);let m=[...u,c];await p.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:Yt(d,u,q()),paidCents:Ue(u)},next:{status:Yt(d,m,q()),paidCents:Ue(m),amountCents:o,date:t,method:a}});let f=String(i||"").trim();f&&(await p.put("invoices",he({...d,clarify:{note:f,at:ne()}})),await p.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:d.clarify?{note:d.clarify.note}:null,next:{note:f}}))}),c}async function Dc(e,{date:t,amountCents:n,method:a,note:s}){y("payments",e)||K("Zahlung nicht gefunden."),$e(t)||K("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||K("Bitte einen Betrag größer als null eintragen."),Y(async o=>{let c=await o.get("payments",e);if(!c)throw new Ie("Diese Zahlung gibt es nicht mehr.");let p=c.amountCents<0,d=await o.get("invoices",c.invoiceId),u=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(g=>g.id!==e),m=p?-r:r,f=Ue(u)+m;if(f<0)throw new Ie(p?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let h=d&&d.totals?d.totals.totalCents:null;if(!p&&h!=null&&f>h)throw new Ie("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let b={...c,date:t,amountCents:m,method:a||"",note:s||"",updatedAt:ne()},v=Rt(c,b,["updatedAt","createdAt"]);return Object.keys(v.next).length&&(await o.put("payments",b),await o.audit({action:p?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:d?d.number:"",prev:v.prev,next:v.next})),b})}async function Sc(e,t){let n=String(t||"").trim();return n||K("Bitte kurz notieren, was zu klären ist."),Y(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new Ie("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=he({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function Cc(e,t){return Y(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=he({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function Ic(e,{date:t,amountCents:n,method:a,note:s}){let i=y("invoices",e);i||K("Rechnung nicht gefunden."),i.status!=="credited"&&K("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),$e(t)||K("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||K("Bitte einen Betrag größer als null eintragen.");let o={id:Ke(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await Y(async c=>{let p=await c.allByIndex("payments","invoiceId",e);if(r>Ue(p))throw new Ie("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:Ue(p)},next:{paidCents:Ue(p)-r,amountCents:-r,date:t,method:a}})}),o}async function Ec(e){let t=y("payments",e);if(!t)return;let n=y("invoices",t.invoiceId);await Y(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(Ue(s)<0)throw new Ie("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function bi(e,t){let n=y("invoices",e);n&&(n.type==="credit_note"&&K("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||K("Diese Rechnung kann nicht storniert werden."),Ue(Ye(e))>0&&K("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await Y(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(Ue(i)>0)throw new Ie("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=he({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function Nc(e){return Y(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new Ie("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=he({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function vi(e,t){let n=y("invoices",e);n||K("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&K("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=y("companies",n.companyId);a||K("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=q(),i={...mt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:Ke(),qty:-Number(r.qty)})),discount:ye(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:ye(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=pt(i),Y(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Fr(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:ye(a),customer:ye(n.snapshot?n.snapshot.customer:y("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",he({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function Vr(e){let t=y("invoices",e);t||K("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||K("Zu dieser Rechnung gibt es keine Gutschrift."),Y(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new Ie("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(p=>p.amountCents<0))throw new Ie(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await _r(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=he({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:ye(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function Tc(e){let t=y("companies",e.companyId);return{...mt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:Ke()})),discount:ye(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function Ac(e){let t=y("quotes",e.id);t&&t.status!=="draft"&&K("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=ea(e);return await Y(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${Z(y("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function Rc(e){let t=y("quotes",e);t&&(t.status!=="draft"&&K("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await Y(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:ui(t)})}))}async function ds(e){let t=hi(e,"quote");t.length&&K(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=y("companies",e.companyId),a=y("customers",e.customerId),s=y("quotes",e.id);s&&s.status!=="draft"&&K("Dieses Angebot ist bereits erstellt.");let i=ea(e);return Y(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new Ie("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Fr(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=qr(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var rc={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function na(e,t){let n=y("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!rc[t])return;let a=he({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await Y(async s=>{await s.put("quotes",a),await s.audit({action:rc[t],entity:"quotes",entityId:e,label:Qe(n),prev:{status:n.status},next:{status:t}})})}async function Bc(e){let t=y("quotes",e);t||K("Angebot nicht gefunden."),t.status==="draft"&&K("Bitte das Angebot zuerst erstellen."),t.invoiceId&&y("invoices",t.invoiceId)&&K("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=y("companies",t.companyId);n||K("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=y("customers",t.customerId),s=ea({...mt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:Ke()})),discount:ye(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await Y(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new Ie("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new Ie("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",he({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:Qe(t),next:{invoiceDraftId:s.id}})}),s}async function Uc(e,t,n,a){let s={id:Ke(),name:t.name||"Dokument.pdf",mime:t.blob.type||"application/pdf",size:t.blob.size,ownerType:n,ownerId:a,createdAt:ne()};return await e.blobPut(s.id,t.blob),await e.put("attachments",s),s}async function yi(e,t){await e.del("attachments",t),await e.blobDel(t)}var Vm=["open","sent","accepted","declined"];async function Mc(e,t=null){let n=y("quotes",e.id);n&&n.source!=="upload"&&K("Nur hochgeladene Angebote lassen sich so bearbeiten.");let a=y("companies",e.companyId),s=y("customers",e.customerId);a||K("Bitte das Unternehmen wählen, von dem das Angebot stammt."),s||K("Bitte den Kontakt wählen."),String(e.title||"").trim()||K("Bitte eine Bezeichnung eintragen, z. B. „Website-Relaunch“."),ln(e.issueDate)||K("Bitte das Angebotsdatum eintragen."),e.validUntil&&(!ln(e.validUntil)||e.validUntil<e.issueDate)&&K("„Gültig bis“ muss nach dem Angebotsdatum liegen."),Ae.includes(e.currency)||K("Bitte USD oder EUR wählen.");let i=e.items||[];(i.length!==1||!(Number(i[0].priceCents)>=0))&&K("Bitte den Betrag des Angebots eintragen.");let r=n&&n.status==="invoiced";!r&&!Vm.includes(e.status)&&K("Unbekannter Status."),!t&&!(e.attachmentIds||[]).length&&K("Bitte das PDF des Angebots auswählen.");let o=ea({...e,source:"upload",number:null,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim()});o.items=[{...i[0],name:o.title,qty:1}],o.totals=pt(o),r&&(o.status="invoiced"),o.finalizedAt=n&&n.finalizedAt||ne(),o.status==="sent"&&!o.sentAt&&(o.sentAt=ne()),["accepted","declined"].includes(o.status)&&!o.decidedAt&&(o.decidedAt=ne()),["open","sent"].includes(o.status)&&(o.decidedAt=null),o.snapshot=qr(a,s);let c=Rt(n,o,["updatedAt","createdAt","snapshot","totals","fx","attachmentIds"]);return Y(async p=>{if(t){for(let u of o.attachmentIds||[])await yi(p,u);let d=await Uc(p,t,"quote",o.id);o.attachmentIds=[d.id]}return await p.put("quotes",o),await p.audit({action:n?t?"PDF-Angebot ersetzt":"PDF-Angebot geändert":"PDF-Angebot hochgeladen",entity:"quotes",entityId:o.id,label:Qe(o),prev:n?c.prev:null,next:n?c.next:{title:o.title,totalCents:o.totals.totalCents,currency:o.currency}}),o})}async function _c(e){let t=y("quotes",e);t&&(t.source!=="upload"&&K("Im Tool erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),t.invoiceId&&y("invoices",t.invoiceId)&&K("Zu diesem Angebot gibt es eine Rechnung. Es bleibt deshalb erhalten."),await Y(async n=>{for(let a of t.attachmentIds||[])await yi(n,a);for(let a of Ee("contracts").filter(s=>s.quoteId===e))await n.put("contracts",he({...a,quoteId:""}));await n.del("quotes",e),await n.audit({action:"PDF-Angebot gelöscht",entity:"quotes",entityId:e,label:Qe(t),prev:ui(t)})}))}async function ms(e,{files:t=[],removeIds:n=[]}={}){let a=y("contracts",e.id);y("companies",e.companyId)||K("Bitte das Unternehmen wählen, mit dem der Vertrag besteht."),y("customers",e.customerId)||K("Bitte den Kontakt wählen."),String(e.title||"").trim()||K("Bitte eine Bezeichnung eintragen, z. B. „SEO-Betreuung“."),ha[e.status]||K("Unbekannter Status.");for(let[c,p]of[["signedDate","Unterschrieben am"],["startDate","Beginn"],["endDate","Ende"]])e[c]&&!ln(e[c])&&K(`Bitte das Datum „${p}“ prüfen.`);e.startDate&&e.endDate&&e.endDate<e.startDate&&K("Das Vertragsende liegt vor dem Beginn."),Ae.includes(e.currency)||K("Bitte USD oder EUR wählen."),e.quoteId&&!y("quotes",e.quoteId)&&K("Das verknüpfte Angebot existiert nicht mehr.");let s=(e.items||[]).map(c=>({...c,id:c.id&&!String(c.id).startsWith("legacy-")?c.id:Ke(),name:String(c.name||"").trim(),qty:Number(c.qty)||0,priceCents:Math.round(Number(c.priceCents)||0),taxRate:Number(c.taxRate)||0})),i=tc(s);i&&K(i);let r=he({...e,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim(),items:s,attachmentIds:(e.attachmentIds||[]).filter(c=>!n.includes(c))});s.length&&r.amountCents!=null&&(r.amountCents=null,r.billing="none");let o=Rt(a,r,["updatedAt","createdAt","attachmentIds"]);return Y(async c=>{for(let d of n)await yi(c,d);for(let d of t)r.attachmentIds.push((await Uc(c,d,"contract",r.id)).id);await c.put("contracts",r);let p=[t.length&&`${t.length} PDF hinzugefügt`,n.length&&`${n.length} PDF entfernt`].filter(Boolean).join(", ");return await c.audit({action:a?"Vertrag geändert":"Vertrag angelegt",entity:"contracts",entityId:r.id,label:r.title,prev:a?o.prev:null,next:a?{...o.next,...p?{dateien:p}:{}}:{title:r.title,status:r.status,positionen:s.length,...p?{dateien:p}:{}}}),r})}async function zc(e){let t=y("contracts",e);t&&await Y(async n=>{for(let a of t.attachmentIds||[])await yi(n,a);for(let a of Ee("invoices").filter(s=>s.contractId===e)){let s=await n.get("invoices",a.id);s&&await n.put("invoices",{...s,contractId:""})}for(let a of Ee("recurring").filter(s=>s.contractId===e))await n.put("recurring",he({...a,contractId:""}));await n.del("contracts",e),await n.audit({action:"Vertrag gelöscht",entity:"contracts",entityId:e,label:t.title,prev:t})})}async function Cn(e){let t=y("expenses",e.id),n=he({...e});n.status!=="review"&&(y("companies",n.companyId)||K("Bitte ein Unternehmen auswählen."),ln(n.invoiceDate)||K("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&K("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||K("Bitte einen Lieferanten eintragen."),n.paymentDate&&!ln(n.paymentDate)&&K("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||K("Bitte den Wechselkurs laden oder eintragen."));let a=Rt(t,n,["updatedAt","createdAt","ai"]);return await Y(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function Pc(e){let t=y("expenses",e);t&&await Y(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function Zr({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:Ke(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await Y(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function Gr(e){await Y(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function wi(e){let t=zn.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function ps(e){String(e.name||"").trim()||K("Bitte der Vorlage einen Namen geben."),y("companies",e.companyId)||K("Bitte ein Unternehmen auswählen."),y("customers",e.customerId)||K("Bitte einen Kunden auswählen."),(e.items||[]).length||K("Bitte mindestens eine Position hinzufügen."),$e(e.nextDate)||K("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!$e(e.endDate)&&K("Bitte das Enddatum prüfen.");let t=y("recurring",e.id),n=he({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=pt(n),await Y(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function Lc(e){let t=y("recurring",e);t&&await Y(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var Ia=(e,t=q())=>!!e&&e.active&&$e(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),Ea=e=>!!e.endDate&&$e(e.nextDate)&&e.nextDate>e.endDate;async function Hr(e,{early:t=!1}={}){let n=y("recurring",e);n||K("Vorlage nicht gefunden."),Ea(n)&&K("Diese Vorlage hat ihr Enddatum erreicht."),n.active||K("Diese Vorlage ist pausiert."),!t&&n.nextDate>q()&&K("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=y("companies",n.companyId),s=y("customers",n.customerId);(!a||!s)&&K("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=wi(n),r=n.nextDate,o=Ce(At(r,i,n.anchorDay),-1),c=ea({...mt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:Ke()})),discount:ye(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id,...n.contractId?{contractId:n.contractId,contractPart:n.contractInterval||n.interval}:{}}),p=At(r,i,n.anchorDay),d=!!n.endDate&&p>n.endDate,u=he({...n,nextDate:p,generated:(n.generated||0)+1,lastRunAt:ne(),active:d?!1:n.active,endedByRun:d});return await Y(async m=>{let f=await m.get("recurring",n.id);if(!f||f.nextDate!==n.nextDate||!f.active)throw new Ie("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",c),await m.put("recurring",u),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:p}})}),c}async function Kc(e,t,n){let a=y("invoices",e);if(!a)return null;let s={id:Ke(),invoiceId:e,level:t,date:q(),note:n||"",createdAt:ne()};return await Y(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}var Zm="https://api.anthropic.com/v1/messages",Gm=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],Oc=/^([01]\d|2[0-3]):[0-5]\d$/;function Fc(e,{today:t,timeZone:n,now:a=new Date}){let s={},i=[],r=(g,$,C)=>{let S=`${g}${$+1}`;return s[S]=C,S},o=e.companies.filter(g=>!g.archived);i.push("UNTERNEHMEN (über welches Konto etwas läuft):"),o.forEach((g,$)=>i.push(`${r("U",$,g.id)}: ${g.name}${g.shortName&&g.shortName!==g.name?` (${g.shortName})`:""}${g.meetingProvider?`, Meetings über ${g.meetingProvider}`:""}`));let c=e.customers.filter(g=>g.active!==!1).slice(0,600);i.push("","KONTAKTE (K = Kürzel; Art: Kunde oder Kontakt/Interessent):"),c.forEach((g,$)=>{let C=rt(g);i.push(`${r("K",$,g.id)}: ${Z(g)}${C&&C!==Z(g)?` – ${C}`:""} [${g.kind==="contact"?"Kontakt":"Kunde"} ${g.number||""}]${g.city?`, ${g.city}`:""}`)});let p=new Map(Object.entries(s).map(([g,$])=>[$,g])),d=e.services.filter(g=>g.active!==!1).slice(0,200);d.length&&(i.push("","LEISTUNGEN (für Rechnungsentwürfe):"),d.forEach((g,$)=>i.push(`${r("L",$,g.id)}: ${g.name}${g.tier?` (Tarif ${g.tier==="starter"?"Starter":"Standard"})`:""}${g.code?` [${g.code}]`:""} – ${((g.priceCents||0)/100).toFixed(2)} ${g.currency||""} je ${g.unit||"Stück"}`)));let u=new Date(a.getTime()-14*864e5).toISOString().slice(0,10),m=new Date(a.getTime()+30*864e5).toISOString().slice(0,10),f=e.appointments.filter(g=>g.date>=u&&g.date<=m).sort((g,$)=>`${g.date}${g.start}`<`${$.date}${$.start}`?-1:1).slice(0,80);f.length&&(i.push("","TERMINE (letzte 14 und nächste 30 Tage):"),f.forEach((g,$)=>i.push(`${r("T",$,g.id)}: ${g.date} ${g.start}–${g.end}, ${g.title}${g.customerId&&p.get(g.customerId)?` (${p.get(g.customerId)})`:""}, ${g.status==="done"?"dokumentiert":g.status==="cancelled"?"abgesagt":"geplant"}`)));let h=e.todos.filter(g=>!g.done).sort((g,$)=>(g.due||"9")<($.due||"9")?-1:1).slice(0,60);h.length&&(i.push("","OFFENE TO-DOS:"),h.forEach(g=>i.push(`- ${g.title}${g.due?` (fällig ${g.due})`:""}${g.customerId&&p.get(g.customerId)?` (${p.get(g.customerId)})`:""}`)));let b=new Date(`${t}T12:00:00Z`);return{text:`${`Heute ist ${Gm[b.getUTCDay()]}, ${t}. Zeitzone: ${n}. Uhrzeit jetzt: ${a.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",timeZone:n})}.`}

${i.join(`
`)}`,map:s}}var ki={type:"string",description:"Kürzel eines Kontakts (K…) oder die ref eines im selben Befehl neu angelegten Kontakts (NEU1 …)."},xi={type:"string",description:"Datum YYYY-MM-DD. Relative Angaben („Freitag“, „in zwei Wochen“) vom heutigen Datum aus berechnen."},Hm=[{name:"create_todos",description:"Legt ein oder mehrere To-dos an.",input_schema:{type:"object",properties:{todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:xi,contact:ki,company:{type:"string",description:"Kürzel U…, optional"}},required:["title"]}}},required:["todos"]}},{name:"create_appointment",description:"Plant einen Termin. Meeting-Link und Zugangsdaten setzt das Tool automatisch aus dem Unternehmen.",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U… – über welches Unternehmen der Termin läuft. Pflicht; nur raten, wenn es genau ein Unternehmen gibt."},contact:ki,contact_name:{type:"string",description:"Gesprächspartner, falls kein Kontakt passt oder eine bestimmte Person gemeint ist."},title:{type:"string"},date:xi,start:{type:"string",description:"Beginn HH:MM (24 h)."},duration_minutes:{type:"number",description:"Dauer in Minuten, wenn genannt."},kind:{type:"string",enum:["video","phone","onsite"],description:"Standard video."},location:{type:"string",description:"Ort bei Vor-Ort-Terminen bzw. Telefonnummer."},agenda:{type:"string"}},required:["company","date","start"]}},{name:"add_note",description:"Trägt eine Notiz in die Kundendokumentation ein (Telefonat, Gespräch, E-Mail, Notiz).",input_schema:{type:"object",properties:{contact:ki,kind:{type:"string",enum:["note","call","email","meeting","task"]},title:{type:"string"},text:{type:"string"},date:xi},required:["contact","text"]}},{name:"create_contact",description:"Legt einen neuen Kontakt oder Kunden an. Nur, wenn ausdrücklich ein neuer Kontakt gemeint ist und keiner aus der Liste passt.",input_schema:{type:"object",properties:{ref:{type:"string",description:"NEU1, NEU2 … – damit andere Aufrufe im selben Befehl darauf verweisen können."},kind:{type:"string",enum:["contact","customer"],description:"Standard contact."},company:{type:"string"},first_name:{type:"string"},last_name:{type:"string"},email:{type:"string"},phone:{type:"string"},city:{type:"string"},notes:{type:"string"}},required:["ref"]}},{name:"document_appointment",description:"Dokumentiert einen Termin aus der Liste: Ergebnis, nächste Schritte, To-dos.",input_schema:{type:"object",properties:{appointment:{type:"string",description:"Kürzel T…"},outcome:{type:"string"},next_steps:{type:"string"},todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:xi},required:["title"]}}},required:["appointment"]}},{name:"create_invoice_draft",description:"Legt einen Rechnungsentwurf an (nur Entwurf – erstellt wird er im Tool per Klick).",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U…"},contact:ki,items:{type:"array",items:{type:"object",properties:{service:{type:"string",description:"Kürzel L…, wenn eine Leistung passt"},name:{type:"string",description:"Bezeichnung, wenn keine Leistung passt"},quantity:{type:"number"},unit_price:{type:"number",description:"Einzelpreis netto, nur wenn genannt"}}}}},required:["company","contact","items"]}},{name:"answer",description:"Antwortet in Textform: auf Fragen („Was steht heute an?“) oder mit einer Rückfrage, wenn etwas unklar ist (z. B. welcher Kontakt gemeint ist).",input_schema:{type:"object",properties:{text:{type:"string"}},required:["text"]}}],jm=`Du bist die Sprachsteuerung von BBC Finance, einem Rechnungs- und CRM-Tool. Der Nutzer spricht Deutsch; der Text stammt aus einer Spracherkennung und kann Hörfehler enthalten.
Setze den Befehl ausschließlich mit den Werkzeugen um. Du darfst mehrere Werkzeuge in einer Antwort aufrufen.
Regeln:
- Verwende nur Kürzel aus der Übersicht. Ordne Namen großzügig zu (Hörfehler, Vor- oder Nachname, Firmenname). Passen mehrere Kontakte gleich gut oder keiner, frage mit answer nach statt zu raten.
- Fehlt beim Termin das Unternehmen und gibt es mehr als eines, frage mit answer nach.
- Datumsangaben immer als YYYY-MM-DD, Uhrzeiten als HH:MM. „Nächste Woche“ ohne Tag = Montag der nächsten Woche.
- To-do-Titel kurz und als Aufgabe formulieren („Angebot schicken“).
- Rechnungen gibt es nur als Entwurf. Löschen, Stornieren und Zahlungen sind nicht per Sprache möglich – erkläre das mit answer.
- Fragen beantwortest du knapp mit answer anhand der Übersicht.`;function Wm({model:e,text:t,context:n}){return{model:e,max_tokens:2e3,system:jm,tools:Hm,tool_choice:{type:"any"},messages:[{role:"user",content:`${n}

---
BEFEHL: ${t}`}]}}var Na=(e,t,n)=>typeof t=="string"&&t.startsWith(n)&&e[t]?e[t]:"",fs=e=>typeof e=="string"&&$e(e)?e:"";function Qm(e,t){let n=e&&Array.isArray(e.content)?e.content.filter(o=>o.type==="tool_use"):[];if(!n.length)throw new Error("Der Befehl wurde nicht verstanden. Bitte anders formulieren.");let a=[],s=[],i=new Set(n.filter(o=>o.name==="create_contact").map(o=>String((o.input||{}).ref||""))),r=(o,c)=>{if(!o)return"";if(i.has(o))return`ref:${o}`;let p=Na(t,o,"K");return p||c.push(`Kontakt „${o}“ nicht gefunden – wird ohne Kontakt angelegt.`),p};for(let o of n){let c=o.input||{},p=[];if(o.name==="answer"){c.text&&s.push(String(c.text));continue}if(o.name==="create_todos"){let d=(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:fs(u.due),customerId:r(u.contact,p),companyId:Na(t,u.company,"U")}));d.length&&a.push({type:"todos",items:d,warnings:p})}else if(o.name==="create_appointment"){let d=Na(t,c.company,"U");d||p.push("Unternehmen nicht erkannt – bitte nach dem Anlegen prüfen."),fs(c.date)||p.push("Datum nicht erkannt."),Oc.test(String(c.start||""))||p.push("Uhrzeit nicht erkannt."),a.push({type:"appointment",companyId:d,customerId:r(c.contact,p),contactName:String(c.contact_name||"").trim(),title:String(c.title||"").trim(),date:fs(c.date),start:Oc.test(String(c.start||""))?c.start:"",duration:Number(c.duration_minutes)>0?Math.min(Math.round(Number(c.duration_minutes)),600):0,kind:["video","phone","onsite"].includes(c.kind)?c.kind:"video",location:String(c.location||"").trim(),agenda:String(c.agenda||"").trim(),warnings:p})}else if(o.name==="add_note"){let d=r(c.contact,p);if(!d)continue;a.push({type:"note",customerId:d,kind:["note","call","email","meeting","task"].includes(c.kind)?c.kind:"note",title:String(c.title||"").trim(),text:String(c.text||"").trim(),date:fs(c.date),warnings:p})}else if(o.name==="create_contact")a.push({type:"contact",ref:String(c.ref||""),kind:c.kind==="customer"?"customer":"contact",company:String(c.company||"").trim(),firstName:String(c.first_name||"").trim(),lastName:String(c.last_name||"").trim(),email:String(c.email||"").trim().toLowerCase(),phone:String(c.phone||"").trim(),city:String(c.city||"").trim(),notes:String(c.notes||"").trim(),warnings:p});else if(o.name==="document_appointment"){let d=Na(t,c.appointment,"T");if(!d){s.push("Der Termin zum Dokumentieren wurde nicht gefunden.");continue}a.push({type:"document",appointmentId:d,outcome:String(c.outcome||"").trim(),nextSteps:String(c.next_steps||"").trim(),todos:(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:fs(u.due)})),warnings:p})}else if(o.name==="create_invoice_draft"){let d=Na(t,c.company,"U"),u=r(c.contact,p);if(!d||!u){s.push("Für den Rechnungsentwurf fehlen Unternehmen oder Kunde.");continue}let m=(Array.isArray(c.items)?c.items:[]).map(f=>({serviceId:Na(t,f.service,"L"),name:String(f.name||"").trim(),qty:Number(f.quantity)>0?Number(f.quantity):1,priceCents:Number.isFinite(Number(f.unit_price))&&f.unit_price!=null?Math.round(Number(f.unit_price)*100):null})).filter(f=>f.serviceId||f.name);m.length&&a.push({type:"invoice",companyId:d,customerId:u,items:m,warnings:p})}}return{actions:a,answers:s}}function Ym(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===404?`Das eingestellte KI-Modell wurde nicht gefunden${n}.`:e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Der Sprachbefehl ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function qc({apiKey:e,model:t,text:n,context:a,map:s}){if(!e)throw new Error("Für Sprachbefehle braucht es den API-Key aus den Einstellungen.");let i;try{i=await fetch(Zm,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(Wm({model:t,text:n,context:a}))})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let r=null;try{r=await i.json()}catch{}if(!i.ok)throw new Error(Ym(i.status,r));return{...Qm(r,s),usage:r.usage||null}}var cn=()=>({invoices:w.invoices,quotes:w.quotes,payments:w.payments,expenses:w.expenses,customers:w.customers,companies:w.companies,services:w.services,recurring:w.recurring}),bt=()=>{let e=de();return e?e.id:null};function Di(e){return Yt(e,Ye(e.id),q())}function In({inv:e}){let t=Di(e),n=ja[t]||ja.draft;return l`<span class="badges"><${ze} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${ze} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function gs({quote:e}){let t=Pt(e,q()),n=ua[t]||ua.draft;return l`<${ze} tone=${n.tone}>${n.label}<//>`}var oe=()=>w.settings.displayCurrency==="EUR"?"EUR":"USD",En=()=>oe()==="USD"?"EUR":"USD",P=(e,t="",n=oe())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},Te=(e,t="")=>P(e,t,En()),ae=e=>j(e,oe()),qe=e=>j(e,En()),ct=(e,t,n)=>rn(e,t,oe(),n);function Kt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?zt(n,e.currency,e.fx):xt(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${j(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${j(s,a)}</span>`}
  </span>`}function Le({id:e}){let t=y("companies",e);return t?l`<span class="co-tag"><${li} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Ve(e){let t=y("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return Z(t)||"–"}var Ta=e=>on(e,Ye(e.id));var jr=e=>{let t=de();return!t||!e.companyId||e.companyId===t.id};function Jm(e=()=>!0){return w.todos.filter(t=>!t.done&&e(t)).sort(Si)}var Si=(e,t)=>(e.due||"9999")<(t.due||"9999")?-1:(e.due||"9999")>(t.due||"9999")?1:e.createdAt<t.createdAt?-1:1;function Xm(e,t=q()){if(!e.due)return{text:"ohne Termin",tone:""};if(e.done)return{text:F(e.due),tone:""};if(e.due<t){let n=hn(e.due,t);return{text:`überfällig seit ${n} ${n===1?"Tag":"Tagen"}`,tone:"bad"}}return e.due===t?{text:"heute fällig",tone:"good"}:e.due===Ce(t,1)?{text:"morgen",tone:""}:{text:`bis ${F(e.due)}`,tone:""}}var Vc=()=>{let e=q();return w.todos.filter(t=>!t.done&&t.due&&t.due<=e&&jr(t)).length};async function ep(e){let t=await _(()=>gc(e.id,!e.done));t&&t.done&&U(`Erledigt: ${e.title}`,"good")}function aa({items:e,showCustomer:t=!0,onEdit:n,empty:a}){return e.length?l`<ul class="todo-list">
    ${e.map(s=>{let i=Xm(s),r=s.customerId?y("customers",s.customerId):null,o=s.appointmentId?y("appointments",s.appointmentId):null,c=s.done?"is-done":i.tone==="bad"?"is-overdue":i.tone==="good"?"is-today":"";return l`<li key=${s.id} class=${c}>
        <input type="checkbox" class="todo-check" checked=${!!s.done} aria-label=${`${s.title} ${s.done?"wieder öffnen":"erledigt"}`} onChange=${()=>ep(s)} />
        <button type="button" class="todo-body" onClick=${()=>n&&n(s)}>
          <span class="todo-title">${s.title}</span>
          <span class="cell-sub">
            <span class=${i.tone?`tone-${i.tone}`:""}>${s.done?`erledigt${s.doneAt?` am ${F(s.doneAt.slice(0,10))}`:""}`:i.text}</span>
            ${t&&r&&l` · ${Z(r)}`}
            ${o&&l` · aus Termin ${F(o.date)}`}
          </span>
        </button>
        ${s.companyId&&l`<span class="todo-co"><${Le} id=${s.companyId} /></span>`}
      </li>`})}
  </ul>`:a?l`<p class="muted-text">${a}</p>`:null}function Ci({customerId:e="",companyId:t="",withCustomer:n=!1}){let[a,s]=D(""),[i,r]=D(Ce(q(),7)),[o,c]=D(e),p=w.customers.filter(u=>u.active!==!1).sort((u,m)=>Z(u).localeCompare(Z(m),"de")).map(u=>({id:u.id,label:Z(u),sub:u.number}));async function d(u){if(u&&u.preventDefault(),!a.trim())return;let m=t||(de()?de().id:"");await _(()=>os(Pn({title:a,due:i,customerId:o||e,companyId:m})))&&(s(""),U("To-do angelegt","good"))}return l`<form class=${`todo-add${n?" with-customer":""}`} onSubmit=${d}>
    <input class="input" placeholder="Neues To-do, z. B. Angebot schicken" aria-label="Neues To-do" value=${a} onInput=${u=>s(u.target.value)} />
    ${n&&l`<${ft} options=${p} value=${o} onChange=${c} placeholder="Kontakt (optional)" label="Kontakt zum To-do" />`}
    <input class="input todo-add-date" type="date" aria-label="Fällig am" value=${i} onInput=${u=>r(u.target.value)} />
    <${I} type="submit" icon="plus" disabled=${!a.trim()}>Hinzufügen<//>
  </form>`}function Ii({todo:e,onClose:t}){let n=!y("todos",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),o=m=>f=>s(h=>({...h,[m]:f})),c=[...w.customers].sort((m,f)=>Z(m).localeCompare(Z(f),"de")).map(m=>({id:m.id,label:Z(m),sub:m.number})),p=a.appointmentId?y("appointments",a.appointmentId):null;async function d(){r(!0);let m=await _(()=>os(a));r(!1),m&&(U(n?"To-do angelegt":"To-do gespeichert","good"),t())}async function u(){if(!await ue({title:"To-do löschen?",text:`„${a.title}“ wird gelöscht. Im Protokoll bleibt der Eintrag erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await hc(a.id),!0))&&(U("To-do gelöscht","good"),t())}return l`<${Pe} title=${n?"Neues To-do":"To-do bearbeiten"} onClose=${t} onSubmit=${d}
    footer=${l`${!n&&l`<${I} variant="ghost" icon="trash" onClick=${u}>Löschen<//>`}<span class="spacer"></span>
      <${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${V} class="span-6" label="Was ist zu tun?" value=${a.title} onInput=${o("title")} />
      <${_e} class="span-2" label="Fällig am" value=${a.due} onInput=${o("due")} />
      <${we} class="span-4" label="Kontakt">
        <${ft} options=${c} value=${a.customerId} onChange=${m=>o("customerId")(m||"")} placeholder="Ohne Kontakt" label="Kontakt" />
      <//>
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${re().map(m=>({id:m.id,label:m.name}))} />
      <div class="span-3 field field-inline">${!n&&l`<label class="check"><input type="checkbox" checked=${!!a.done}
        onChange=${m=>s(f=>({...f,done:m.target.checked,doneAt:m.target.checked?new Date().toISOString():null}))} /> Erledigt</label>`}</div>
      <${ie} class="span-6" label="Notiz" value=${a.note} onInput=${o("note")} rows=${3} />
      ${p&&l`<p class="span-6 field-hint">Aus dem Termin „${p.title}“ am ${F(p.date)}.</p>`}
    </div>
  <//>`}function Zc(){let[e,t]=D(null),n=Jm(jr),a=n.slice(0,8);return l`<${X} title=${`To-dos${n.length?` (${n.length})`:""}`} class="dash-todos" action=${l`<a class="panel-link" href="#/todos">Alle To-dos</a>`}>
    <${aa} items=${a} onEdit=${t} empty="Keine offenen To-dos." />
    ${n.length>a.length&&l`<p class="cell-sub"><a href="#/todos">${n.length-a.length} weitere</a></p>`}
    <${Ci} withCustomer />
    ${e&&l`<${Ii} key=${e.id} todo=${e} onClose=${()=>t(null)} />`}
  <//>`}function Gc(){ge();let[e,t]=D("open"),[n,a]=D(""),[s,i]=D(null),r=q(),o=w.todos.filter(jr),c={open:o.filter(u=>!u.done),due:o.filter(u=>!u.done&&u.due&&u.due<=r),done:o.filter(u=>u.done)},p=u=>u.customerId?Z(y("customers",u.customerId)):"",d=c[e].filter(u=>Ne(n,u.title,u.note,p(u)));return d=e==="done"?d.sort((u,m)=>(u.doneAt||"")<(m.doneAt||"")?1:-1):d.sort(Si),l`
    <${ke} title="To-dos" sub=${de()?`To-dos für ${de().name} und ohne Zuordnung`:"Alle To-dos"}>
      <${I} variant="primary" icon="plus" onClick=${()=>i(Pn({due:Ce(r,7),companyId:de()?de().id:""}))}>Neues To-do<//>
    <//>
    <div class="filters">
      <input class="input filter-select" type="search" placeholder="To-dos durchsuchen" aria-label="To-dos durchsuchen" value=${n} onInput=${u=>a(u.target.value)} />
      <${gt} label="Filter" value=${e} onChange=${t} options=${[{id:"open",label:"Offen",count:c.open.length},{id:"due",label:"Fällig",count:c.due.length},{id:"done",label:"Erledigt",count:c.done.length}]} />
    </div>
    <${X}>
      <${Ci} withCustomer />
      ${d.length?l`<${aa} items=${d} onEdit=${i} />`:l`<${pe} icon="check" title=${e==="done"?"Noch nichts erledigt":"Nichts offen"} text="To-dos legst du hier, beim Kontakt oder beim Dokumentieren eines Termins an." />`}
    <//>
    ${s&&l`<${Ii} key=${s.id} todo=${s} onClose=${()=>i(null)} />`}
  `}var hs=e=>String(e).padStart(2,"0");function Hc(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function Qc(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function jc(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!Qc(n))return new Date(c);let p=Hc(c,n),d=c-p*6e4,u=Hc(d,n);return u!==p&&(d=c-u*6e4),new Date(d)}function $s(e,t,n="de"){if(!Qc(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function Ni(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function Yc(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function bs(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var Aa=e=>(ma.find(t=>t.id===e)||{}).label||"",Wc=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function Jc(e,t=new Date){if(!e||e.status!=="planned")return!1;let{end:n}=Nn(e);return n>t?!1:!e.followUpAt||new Date(e.followUpAt)<=t}function Nn(e){let t=jc(e.date,e.start,e.timeZone),n=jc(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function tp(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=Aa(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function np(e,t){return String(e.contactName||"").trim()||(t?rt(t)||Z(t):"")}function Xc(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=Nn(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),p={CONTACT:np(e,n),CUSTOMER:n?Z(n):String(e.contactName||""),TITLE:c,DATE:bs(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:$s(e.timeZone,r,s),MEETING:tp(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:Aa(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},d=u=>u.replace(/[ \t]+,/g,",").split(`
`).map(m=>m.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:d(Et(i.subject,p)).replace(/\n/g," "),body:d(Et(i.body,p)),vars:p}}var Wr=e=>`${e.getUTCFullYear()}${hs(e.getUTCMonth()+1)}${hs(e.getUTCDate())}T${hs(e.getUTCHours())}${hs(e.getUTCMinutes())}${hs(e.getUTCSeconds())}Z`,Ei=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function ap(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function eu(e,{summary:t,description:n}){let{start:a,end:s}=Nn(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?Wc(i)?i:Aa(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${Wr(new Date)}`,`DTSTART:${Wr(a)}`,`DTEND:${Wr(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${Ei(t)}`,n?`DESCRIPTION:${Ei(n)}`:"",r?`LOCATION:${Ei(r)}`:"",Wc(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${Ei(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(ap).join(`\r
`)}\r
`}var Ti=null;function tu(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function sp(){return Ti||(Ti=(async()=>{if(await tu("js/vendor/pdfmake.min.js"),await tu("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw Ti=null,e})),Ti}var ys="#16191d",tt="#5c636b",Qr="#d9dde1",vs=50;function ip(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function ws(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:ys,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:tt,margin:[0,0,0,6]},...e.recipient.map((f,h)=>({text:f,fontSize:10.5,bold:h===0})),...e.recipientExtra.map(f=>({text:f,fontSize:8.5,color:tt,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([f,h])=>[{text:f,color:tt,fontSize:9},{text:h,alignment:"right",fontSize:9,bold:f===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(f=>({text:f.label,fontSize:8,color:tt,alignment:f.align,noWrap:!0})),c=e.rows.map(f=>r.map(h=>{if(h.key==="desc"){let b=[{text:f.name,bold:!0}];return f.description&&b.push({text:f.description,color:tt,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:b}}return{text:f[h.key]||"",alignment:h.align,noWrap:h.key!=="unit"}})),p={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(f=>f.width),body:[o,...c]},layout:{hLineWidth:(f,h)=>f===0?0:f===1?1.2:.5,hLineColor:f=>f===1?n:Qr,vLineWidth:()=>0,paddingLeft:f=>f===0?0:7,paddingRight:(f,h)=>f===h.table.widths.length-1?0:7,paddingTop:f=>f===0?0:6,paddingBottom:f=>f===0?5:6}},d={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(f=>[{text:f.label,bold:!!f.strong,fontSize:f.strong?11.5:9.5,color:f.strong?ys:tt},{text:f.value,bold:!!f.strong,fontSize:f.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(f,h)=>f===h.table.body.length-1&&h.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(f,h)=>f===h.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:tt,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:tt,margin:[0,1.5,0,0]}]:[]]:[]]}]},u=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:tt}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&u.push({text:e.subtitle,color:tt,margin:[0,2,0,0]}),e.intro&&u.push({text:e.intro,margin:[0,12,0,0]}),u.push(p,d),e.notes.length&&u.push({stack:e.notes.map(f=>({text:f,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&u.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([f,h])=>[{text:f,color:tt},{text:h}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:f=>f===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(f=>({text:f,margin:[0,4,0,0]}))]});let m=ip(e);return{pageSize:"A4",pageMargins:[vs,46,vs,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:ys},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(f,h)=>({margin:[vs,0,vs,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*vs,y2:0,lineWidth:.5,lineColor:Qr}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(b=>({width:"*",stack:b.map((v,g)=>({text:v,fontSize:7.5,color:tt,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:tt,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",f).replace("{N}",h),fontSize:7,color:tt,alignment:"right",margin:[0,5,0,0]}]}),content:u}}async function Ra(e){let t=await sp();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function Xe(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function nu({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(d=>({text:d.label,bold:!0,fontSize:8,color:tt,alignment:d.align||"left"})),...a.map(d=>d.map((u,m)=>({text:u==null?"":String(u),alignment:n[m].align||"left"})))];s&&o.push(s.map((d,u)=>({text:d==null?"":String(d),bold:!0,alignment:n[u].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:ys},info:{title:e,creator:"BBC Finance"},footer:(d,u)=>({text:`Seite ${d} von ${u}`,alignment:"right",fontSize:7,color:tt,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:tt,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((d,u)=>u===0?"*":"auto"),body:o},layout:{hLineWidth:(d,u)=>d===0?0:d===1||s&&d===u.table.body.length-1?1:.5,hLineColor:(d,u)=>d===1||s&&d===u.table.body.length-1?ys:Qr,vLineWidth:()=>0,paddingLeft:d=>d===0?0:6,paddingRight:(d,u)=>d===u.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},p=await Ra(c);Xe(p,i)}var Yr=/\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/,Ai=/^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i,au={deutschland:"Deutschland",germany:"Deutschland",österreich:"Österreich",oesterreich:"Österreich",austria:"Österreich",schweiz:"Schweiz",switzerland:"Schweiz",suisse:"Schweiz",liechtenstein:"Liechtenstein",luxemburg:"Luxemburg",luxembourg:"Luxemburg",niederlande:"Niederlande",netherlands:"Niederlande",belgien:"Belgien",belgium:"Belgien",frankreich:"Frankreich",france:"Frankreich",italien:"Italien",italy:"Italien",spanien:"Spanien",spain:"Spanien","vereinigte arabische emirate":"Vereinigte Arabische Emirate","united arab emirates":"Vereinigte Arabische Emirate",uae:"Vereinigte Arabische Emirate","united kingdom":"Vereinigtes Königreich",usa:"USA","united states":"USA"},su={D:"Deutschland",DE:"Deutschland",A:"Österreich",AT:"Österreich",CH:"Schweiz"},vt=e=>String(e||"").replace(/[   ]/g," ").replace(/[ \t]+/g," ").trim(),rp=(e,t)=>vt(e.replace(t,"").replace(/^[\s:.\-–—]+/,""));function op(e){let n=vt(e).replace(/\s*\(.*?\)\s*/g," ").replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i,"").trim().split(/\s+/).filter(i=>!/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(i));if(!n.length)return{firstName:"",lastName:""};if(n.length===1)return{firstName:"",lastName:n[0]};let a=/^(von|van|de|der|den|zu|zur|vom|del|la)$/i,s=n.length-1;for(;s>1&&a.test(n[s-1]);)s-=1;return{firstName:n.slice(0,s).join(" "),lastName:n.slice(s).join(" ")}}var lp=e=>vt(String(e).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/,"");function ou(e){let n=String(e||"").replace(/\r/g,"").split(`
`).map(vt).filter(Boolean),a={},s=[],i=n.join(`
`),r=i.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi,"@").replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi,"."),o=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(r);o&&(a.email=o[0].toLowerCase());let c=/\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(i)||/\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(i);c?a.website=c[0].replace(/[.,;)]+$/,""):a.email&&!/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(a.email)&&(a.website=`www.${a.email.split("@")[1]}`),n.forEach((m,f)=>{let h=n[f+1]||"";if(!a.phone&&/^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(m)&&!/fax/i.test(m.split(/[:]/)[0])){let b=/(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(m);b&&(a.phone=vt(b[1]).replace(/–/g,"-"))}if(!a.vatId&&/(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(m)){let b=/\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/,v=b.exec(m.replace(/^[^:]*:\s*/,""))||(/:\s*$|umsatzsteuergesetz:?$|id$/i.test(m)?b.exec(h):null);v&&(a.vatId=vt(v[1]))}if(!a.taxId&&/^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(m)&&!/ust|umsatzsteuer|vat/i.test(m)){let b=/([\d][\d\s/]{7,}\d)/.exec(m);b&&(a.taxId=vt(b[1]))}if(!a.lastName){let b=/^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(m);if(b){let v=rp(m,b[0]);v||(v=h),v=v.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i,"").replace(/^(herrn?|frau)\s+/i,"");let g=lp(v);g&&!Yr.test(g)&&/^[\p{L}][\p{L}.' -]+$/u.test(g)&&g.split(/\s+/).length<=5&&(Object.assign(a,op(g)),s.push(`${/inhaber|owner/i.test(b[0])?"Inhaber":"Vertreten durch"}: ${vt(v)}`))}}/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(m)&&(s.some(b=>b.includes(m))||s.push(m))});let p=/^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u,d=-1;for(let m=0;m<n.length;m++){let f=n[m].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i,""),h=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(f);if(h&&!Ai.test(h[1])){a.street=vt(h[1]).replace(/,$/,""),a.houseNo=vt(h[2]),a.zip=h[4],a.city=vt(h[5]),h[3]&&(a.country=su[h[3].toUpperCase()]),d=m;break}let b=p.exec(f);if(b&&!/^(tel|fax|phone)/i.test(f)){a.zip=b[2],a.city=vt(b[3]),b[1]&&(a.country=su[b[1].toUpperCase()]),d=m;let v=n[m-1]||"",g=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(v.replace(/,$/,""));g&&!Ai.test(v)&&!Yr.test(v)?(a.street=vt(g[1]),a.houseNo=vt(g[2])):/^(postfach|p\.?o\.? box)/i.test(v)&&(a.street=v);break}}if(!a.country){let m=[n[d+1],...n].filter(Boolean);for(let f of m){let h=f.toLowerCase().replace(/[.,]/g,"").trim();if(au[h]){a.country=au[h];break}}}let u=n.find(m=>Yr.test(m)&&!Ai.test(m)&&m.length<90&&!/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(m));if(u)a.company=u.replace(/^(firma|company|unternehmen)\s*:\s*/i,"");else if(d>0)for(let m=a.street&&!n[d].includes(",")?d-2:d-1;m>=0&&m>=d-5;m--){let f=n[m];if(!(!f||Ai.test(f)||f.includes(":")||/\d{3,}|@|www\./i.test(f))){a.company=f;break}}for(let m of Object.keys(a))a[m]||delete a[m];return{fields:a,extra:s}}var cp="https://api.anthropic.com/v1/messages",up=["company","firstName","lastName","street","houseNo","zip","city","region","country","email","phone","website","taxId","vatId"],iu={name:"record_contact",description:"Erfasst die Kontaktdaten aus einem Impressum.",input_schema:{type:"object",properties:{company:{type:"string",description:"Firmenname inklusive Rechtsform, wie im Impressum."},firstName:{type:"string",description:"Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt."},lastName:{type:"string",description:"Nachname dieser Person."},street:{type:"string",description:"Straße ohne Hausnummer."},houseNo:{type:"string",description:"Hausnummer."},zip:{type:"string"},city:{type:"string"},region:{type:"string",description:"Bundesland, Kanton oder Emirat, nur wenn genannt."},country:{type:"string",description:"Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ)."},email:{type:"string"},phone:{type:"string",description:"Telefonnummer (nicht Fax)."},website:{type:"string"},taxId:{type:"string",description:"Steuernummer, nur wenn genannt."},vatId:{type:"string",description:"Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt."},register:{type:"string",description:"Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt."},found:{type:"boolean",description:"false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden."}},required:["found"]}},ru=`Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;function dp(e){return{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}}function mp({model:e,text:t,url:n}){return n?{model:e,max_tokens:1500,tools:[{type:"web_fetch_20250910",name:"web_fetch",max_uses:3,max_content_tokens:2e4},iu],tool_choice:{type:"auto"},messages:[{role:"user",content:`Rufe diese Seite ab: ${n}
Ist es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.

${ru}`}]}:{model:e,max_tokens:1e3,tools:[iu],tool_choice:{type:"tool",name:"record_contact"},messages:[{role:"user",content:`Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.

${ru}

---
${String(t).slice(0,2e4)}`}]}}function pp(e){let t=e&&Array.isArray(e.content)?e.content:[],n=t.find(o=>o.type==="web_fetch_tool_result"&&o.content&&o.content.type==="web_fetch_tool_result_error"),a=t.find(o=>o.type==="tool_use"&&o.name==="record_contact");if(!a||!a.input){if(n){let o=n.content.error_code;throw new Error(o==="url_not_accessible"?"Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.":`Die Seite konnte nicht gelesen werden (${o}). Kopiere das Impressum und füge es als Text ein.`)}throw new Error("Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.")}let s=a.input;if(s.found===!1)throw new Error("Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.");let i={};for(let o of up){let c=typeof s[o]=="string"?s[o].trim():"";c&&(i[o]=c.slice(0,200))}i.email&&(i.email=i.email.toLowerCase());let r=[];return typeof s.register=="string"&&s.register.trim()&&r.push(s.register.trim()),{fields:i,extra:r}}function fp(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Das Auslesen ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Jr({apiKey:e,model:t,text:n,url:a}){if(!e)throw new Error("Dafür braucht es den API-Key aus den Einstellungen.");let s=mp({model:t,text:n,url:a}),i=null;for(let r=0;r<3;r++){let o;try{o=await fetch(cp,{method:"POST",headers:dp(e),body:JSON.stringify(s)})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}try{i=await o.json()}catch{i=null}if(!o.ok)throw new Error(fp(o.status,i));if(i&&i.stop_reason==="pause_turn"){s.messages=[...s.messages,{role:"assistant",content:i.content}];continue}break}return pp(i)}function lu(e){let t=String(e||"").trim();return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""}var Tn=(e,t)=>!t||e.companyId===t;function cu(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function ut(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!Dr(i)||!i.totals||!Tn(i,t)||a&&i.customerId!==a||n&&!nn(i.issueDate,n))continue;let r=i.totals,o=xt(r.netCents,i.currency,i.fx)||0,c=zt(r.netCents,i.currency,i.fx)||0,p=xt(r.taxCents,i.currency,i.fx)||0,d=zt(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:p,taxEUR:d,totalUSD:o+p,totalEUR:c+d})}return s}function Ba(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!Tn(s,t)||n&&!nn(s.invoiceDate,n))continue;let i=xt(s.netCents,s.currency,s.fx)||0,r=zt(s.netCents,s.currency,s.fx)||0,o=xt(s.taxCents,s.currency,s.fx)||0,c=zt(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function Ri(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&Tn(r,t)&&(n&&!nn(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:xt(i.amountCents,r.currency,r.fx)||0,eur:zt(i.amountCents,r.currency,r.fx)||0}))}return s}var le=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function An(e,{companyId:t}={},n){let a=cu(e.payments),s=[];for(let i of e.invoices){if(!Tn(i,t))continue;let r=a.get(i.id)||[],o=on(i,r);if(o<=0)continue;let c=Yt(i,r,n),p=i.dueDate&&i.dueDate<n?hn(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:p,openCents:o,paidCents:Ue(r),openUSD:xt(o,i.currency,i.fx)||0,openEUR:zt(o,i.currency,i.fx)||0,bucket:p<=0?"current":p<=30?"d30":p<=60?"d60":p<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var uu=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function du(e,t,n){let a=wt("month",n),s=wt("quarter",n),i=wt("year",n),r=wt("lastMonth",n),o=ut(e,{companyId:t,range:i}),c=$=>o.filter(C=>nn(C.date,$)),p=c(a),d=c(s),u=ut(e,{companyId:t,range:r}),m=An(e,{companyId:t},n),f=m.filter($=>$.status==="overdue"),h=cu(e.payments),b=o.filter($=>$.inv.type!=="credit_note"&&$.inv.status!=="credited"),v=b.filter($=>Yt($.inv,h.get($.inv.id)||[],n)==="paid"),g=e.customers.filter($=>$.active!==!1&&$.kind!=="contact");if(t){let $=new Set([...e.invoices.filter(C=>C.companyId===t).map(C=>C.customerId),...(e.quotes||[]).filter(C=>C.companyId===t).map(C=>C.customerId)]);g=g.filter(C=>$.has(C.id))}return{month:{usd:le(p,"netUSD"),eur:le(p,"netEUR"),count:p.length},lastMonth:{usd:le(u,"netUSD"),eur:le(u,"netEUR")},quarter:{usd:le(d,"netUSD"),eur:le(d,"netEUR")},year:{usd:le(o,"netUSD"),eur:le(o,"netEUR")},open:{count:m.length,usd:le(m,"openUSD"),eur:le(m,"openEUR")},overdue:{count:f.length,usd:le(f,"openUSD"),eur:le(f,"openEUR")},paid:{count:v.length,usd:le(v,"totalUSD"),eur:le(v,"totalEUR")},average:{usd:b.length?Math.round(le(b,"netUSD")/b.length):0,eur:b.length?Math.round(le(b,"netEUR")/b.length):0,count:b.length},activeCustomers:g.length}}function ks(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=ut(e,{companyId:t,range:i}),o=Ba(e,{companyId:t,range:i}),c=Ri(e,{companyId:t,range:i});return n.map(p=>{let d=r.filter(b=>Ha(b.date)===p),u=o.filter(b=>Ha(b.date)===p),m=c.filter(b=>Ha(b.date)===p),f={},h={};for(let b of d)f[b.inv.companyId]=(f[b.inv.companyId]||0)+b.netUSD,h[b.inv.companyId]=(h[b.inv.companyId]||0)+b.netEUR;return{key:p,revenueUSD:le(d,"netUSD"),revenueEUR:le(d,"netEUR"),expenseUSD:le(u,"netUSD"),expenseEUR:le(u,"netEUR"),profitUSD:le(d,"netUSD")-le(u,"netUSD"),profitEUR:le(d,"netEUR")-le(u,"netEUR"),paymentsUSD:le(m,"usd"),paymentsEUR:le(m,"eur"),taxUSD:le(d,"taxUSD"),taxEUR:le(d,"taxEUR"),invoices:d.length,byCompany:f,byCompanyUSD:f,byCompanyEUR:h}})}function Xr(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function mu(e,t,n){let a=ut(e,t);return n==="quarter"?Xr(a,vl):n==="year"?Xr(a,s=>String(Hs(s))):Xr(a,Ha)}function xs(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of ut(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:Z(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Ds(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of ut(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Ss(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of ut(e,t)){let i=new Map((s.inv.totals.lines||[]).map(d=>[d.id,d])),r=(s.inv.items||[]).filter(d=>i.has(d.id)),o=r.map(d=>{let u=i.get(d.id);return u.netCents!=null?u.netCents:u.cents}),c=_t(s.netUSD,o),p=_t(s.netEUR,o);r.forEach((d,u)=>{let m=d.serviceId?n.get(d.serviceId):null,f=m?`s:${m.id}`:`n:${String(d.name||"").trim().toLowerCase()}`,h=a.get(f)||{key:f,name:m?m.name:d.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};h.usd+=c[u]||0,h.eur+=p[u]||0,h.qty+=Number(d.qty)||0,a.set(f,h)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function eo(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let p=s.get(o),d=a(c),u=c.serviceId?n.get(c.serviceId):null;return p.has(d)||p.set(d,{key:d,name:u?u.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:u&&u.category||"",unit:c.unit||u&&u.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),p.get(d)};for(let o of ut(e,t)){let c=new Map((o.inv.totals.lines||[]).map(h=>[h.id,h])),p=(o.inv.items||[]).filter(h=>c.has(h.id)),d=p.map(h=>{let b=c.get(h.id);return b.netCents!=null?b.netCents:b.cents}),u=_t(o.netUSD,d),m=_t(o.netEUR,d),f=o.inv.type==="credit_note";p.forEach((h,b)=>{let v=i(o.inv.customerId,h);v.usd+=u[b]||0,v.eur+=m[b]||0,v.qty+=Number(h.qty)||0,f||(v.invoices.add(o.inv.id),v.companyIds.add(o.inv.companyId),(!v.first||o.date<v.first)&&(v.first=o.date),o.date>v.last&&(v.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&Tn(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let p=i(o.customerId,c);p.running=!0,p.interval=o.interval,p.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(p=>({...p,invoices:p.invoices.size,companyIds:[...p.companyIds]})).sort((p,d)=>Number(d.running)-Number(p.running)||d.usd-p.usd));return r}function pu(e,t){let n=new Map;for(let a of ut(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function to(e,t){let n=new Map;for(let a of Ba(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function fu(e,t,n){let a=ut(e,t),s=Ba(e,t),i=Ri(e,t),r=An(e,{companyId:t.companyId},n),o=le(a,"netUSD"),c=le(a,"netEUR"),p=le(s,"netUSD"),d=le(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(u=>u.inv.type!=="credit_note").length},expenses:{usd:p,eur:d,count:s.length},profit:{usd:o-p,eur:c-d},payments:{usd:le(i,"usd"),eur:le(i,"eur"),count:i.length},receivables:{usd:le(r,"openUSD"),eur:le(r,"openEUR"),count:r.length},taxCollected:{usd:le(a,"taxUSD"),eur:le(a,"taxEUR")},taxPaid:{usd:le(s,"taxUSD"),eur:le(s,"taxEUR")},taxBalance:{usd:le(a,"taxUSD")-le(s,"taxUSD"),eur:le(a,"taxEUR")-le(s,"taxEUR")}}}function gu(e,t){let n=new Map;for(let i of ut(e,t)){let r=i.inv.totals.taxGroups||[],o=_t(i.taxUSD,r.map(u=>u.taxCents)),c=_t(i.netUSD,r.map(u=>u.netCents)),p=_t(i.taxEUR,r.map(u=>u.taxCents)),d=_t(i.netEUR,r.map(u=>u.netCents));r.forEach((u,m)=>{let f=`${u.rate}|${i.inv.currency}`,h=n.get(f)||{rate:u.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};h.netCents+=u.netCents,h.taxCents+=u.taxCents,h.netUSD+=c[m]||0,h.taxUSD+=o[m]||0,h.netEUR+=d[m]||0,h.taxEUR+=p[m]||0,n.set(f,h)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=Ba(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:le(s,"taxUSD"),paidEUR:le(s,"taxEUR")}}function no(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>Dr(o)&&Tn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&Tn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&Tn(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return yl(a,s)}var gp=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],hu=15*1024*1024;async function $u(e){if(!e)throw new Error("Keine Datei ausgewählt.");if(e.size>hu)throw new Error(`„${e.name}“ ist größer als 15 MB.`);if(await hp(e,5)!=="%PDF-")throw new Error(`„${e.name}“ ist keine PDF-Datei. Bitte das Dokument als PDF speichern und erneut hochladen.`);let n=/\.pdf$/i.test(e.name||"")?e.name:`${e.name||"Dokument"}.pdf`;return{blob:e.type==="application/pdf"?e:new Blob([e],{type:"application/pdf"}),name:n}}function hp(e,t){return new Promise((n,a)=>{let s=new FileReader;s.onload=()=>n(String.fromCharCode(...new Uint8Array(s.result))),s.onerror=()=>a(s.error),s.readAsArrayBuffer(e.slice(0,t))})}function bu(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function $p(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function ao(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function Bi(e,t,n){let a=await $p(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var bp=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function so(e,{shrink:t=!0}={}){if(e.size>hu)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(bp(e))try{let{canvas:a}=await Bi(e,2e3,"#ffffff");return{blob:await ao(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!gp.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await Bi(e,2e3,"#ffffff"),i=await ao(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function vu(e){let{canvas:t}=await Bi(e,1568,"#ffffff");return ao(t,"image/jpeg",.85)}async function yu(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await Bi(e,800,null);return t.toDataURL("image/png")}async function Ua(e){let t=await Cl("blobs",e);return t?t.blob:null}var Ui=e=>(t,n)=>(t[e]||"")<(n[e]||"")?1:(t[e]||"")>(n[e]||"")?-1:0;function wu(e,t,n){let a=(e.appointments||[]).filter(g=>g.customerId===t&&g.status!=="cancelled"),s=a.filter(g=>g.status==="done"||g.status==="planned"&&g.date<n).sort(Ui("date")),i=a.filter(g=>g.status==="planned"&&g.date>=n).sort((g,$)=>g.date+g.start<$.date+$.start?-1:1)[0]||null,r=(e.quotes||[]).filter(g=>g.customerId===t),o=r.filter(g=>g.status!=="draft").sort(Ui("issueDate")),c=o.map(g=>Pt(g,n)),p=r.length-o.length,d=(e.contracts||[]).filter(g=>g.customerId===t).sort(Ui("createdAt")),u=(e.invoices||[]).filter(g=>g.customerId===t&&g.type!=="credit_note"),m=u.filter(g=>!["draft","cancelled"].includes(g.status)).sort(Ui("issueDate")),f=u.filter(g=>g.status==="draft").length,h=[{id:"meeting",label:"Termin",state:s.length?"done":i?"active":"todo",count:s.length,last:s[0]||null,next:i},{id:"quote",label:"Angebot",state:c.some(g=>g==="accepted"||g==="invoiced")?"done":c.some(g=>g==="open"||g==="sent")||p?"active":"todo",count:o.length,drafts:p,latest:o[0]||null,latestStatus:c[0]||""},{id:"contract",label:"Vertrag",state:d.some(g=>g.status==="signed"||g.status==="ended")?"done":d.some(g=>g.status==="open")?"active":"todo",count:d.length,latest:d[0]||null},{id:"invoice",label:"Rechnung",state:m.length?"done":f?"active":"todo",count:m.length,drafts:f,latest:m[0]||null}],b=-1;h.forEach((g,$)=>{g.state==="done"&&(b=$)}),h.forEach((g,$)=>{$<b&&g.state==="todo"&&(g.state="skipped")});let v=h.findIndex((g,$)=>$>b&&g.state!=="done");return{steps:h,current:v===-1?null:v}}function io(e,t,n=60){return e.status==="signed"&&!!e.endDate&&e.endDate>=t&&e.endDate<=Ce(t,n)}function ro(e,t){return e.status==="signed"&&!!e.endDate&&e.endDate<t}function Mi(e,t){return ro(e,t)?"expired":io(e,t)?"ending":e.status}function Ma({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
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
  </div>`}async function _i(e){let t=Ye(e.id),n=yn(e.id),a=e.creditNoteId?y("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${j(Ue(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await ue({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await _(()=>Or(e.id));return r?(U(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var vp=[{field:"code",label:"Nr.",keys:["nr","nr.","nummer","leistungsnummer","code","artikelnummer"]},{field:"name",label:"Name",keys:["name","leistung","bezeichnung"]},{field:"tier",label:"Tarif",keys:["tarif","tier","paket"]},{field:"category",label:"Kategorie",keys:["kategorie","category"]},{field:"unit",label:"Einheit",keys:["einheit","unit"]},{field:"price",label:"Preis netto",keys:["preis netto","preis","einzelpreis","einzelpreis netto","price"]},{field:"currency",label:"Währung",keys:["währung","waehrung","currency"]},{field:"kind",label:"Art",keys:["art","abrechnung","wiederkehrend"]},{field:"qty",label:"Menge",keys:["menge","standardmenge","qty"]},{field:"taxRate",label:"Steuersatz %",keys:["steuersatz %","steuersatz","steuer","ust","mwst"]},{field:"invoiceText",label:"Rechnungstext",keys:["rechnungstext","beschreibung auf der rechnung","text"]},{field:"internalName",label:"Interne Bezeichnung",keys:["interne bezeichnung","intern"]},{field:"description",label:"Interne Beschreibung",keys:["interne beschreibung","beschreibung","notiz"]},{field:"company",label:"Unternehmen",keys:["unternehmen","firma","company"]},{field:"active",label:"Aktiv",keys:["aktiv","active"]}],zi=e=>String(e??"").trim().toLowerCase().replace(/\s+/g," "),nt=e=>e==null?"":String(e).trim();function yp(e){let t=zi(e);return t?t==="s"||t.startsWith("start")?"starter":t==="std"||t.startsWith("stand")?"standard":null:""}function wp(e){let t=zi(e);return t?["einmalig","einmal","nein","no","false","0","once"].includes(t)?!1:["wiederkehrend","laufend","monatlich","ja","yes","true","1","x"].includes(t)||t.startsWith("wieder")?!0:null:null}function kp(e){let t=zi(e);return t?!["nein","no","false","0","inaktiv"].includes(t):!0}function ku(e){let t=[...new Set(e.flatMap(o=>Object.keys(o)))],n={},a=[];for(let o of t){let c=vp.find(p=>p.keys.includes(zi(o)));c&&!n[c.field]?n[c.field]=o:c||a.push(o)}let s=(o,c)=>n[c]!=null?o[n[c]]:void 0,i=[];e.forEach((o,c)=>{let p=nt(s(o,"name")),d=nt(s(o,"code"));if(!p&&!d&&Object.values(o).every(B=>nt(B)===""))return;let u=[];p||u.push("Name fehlt");let m=yp(s(o,"tier"));m===null&&u.push(`Tarif „${nt(s(o,"tier"))}“ unbekannt (Starter oder Standard)`);let f=s(o,"price"),h=typeof f=="number"?f:$n(nt(f));nt(f)===""||Number.isNaN(h)?u.push("Preis fehlt oder ist keine Zahl"):h<0&&u.push("Preis ist negativ");let b=nt(s(o,"currency")).toUpperCase()||"EUR";Ae.includes(b)||u.push(`Währung ${b} wird für Rechnungen nicht unterstützt (USD oder EUR)`);let v=wp(s(o,"kind")),g=nt(s(o,"unit"))||"Stück",$=s(o,"qty"),C=nt($)===""?1:typeof $=="number"?$:$n(nt($));(Number.isNaN(C)||C<0)&&u.push("Menge ist keine Zahl");let S=s(o,"taxRate"),k=null;nt(S)!==""&&(k=typeof S=="number"?S:$n(nt(S).replace("%","")),(Number.isNaN(k)||k<0||k>100)&&(u.push("Steuersatz ist ungültig"),k=null)),i.push({row:c+2,problems:u,service:{code:d,name:p,tier:m||"",category:nt(s(o,"category")),unit:g,priceCents:Number.isNaN(h)?0:wa(h),currency:Ae.includes(b)?b:"EUR",recurring:v??/monat|jahr|quartal/i.test(g),defaultQty:Number.isNaN(C)?1:C,taxRate:k,invoiceText:nt(s(o,"invoiceText")),internalName:nt(s(o,"internalName")),description:nt(s(o,"description")),company:nt(s(o,"company")),active:kp(s(o,"active"))}})});let r=new Map;for(let o of i){let c=o.service.code;c&&(r.has(c)?o.problems.push(`Nr. ${c} steht doppelt in der Datei (Zeile ${r.get(c)})`):r.set(c,o.row))}return{items:i,unknownColumns:a,columns:n}}function xu(e,t=()=>""){return e.map(n=>({"Nr.":n.code||"",Name:n.name,Tarif:n.tier?kt[n.tier].label:"",Kategorie:n.category||"",Einheit:n.unit||"","Preis netto":(n.priceCents||0)/100,Währung:n.currency||"",Art:n.recurring?"Wiederkehrend":"Einmalig",Menge:n.defaultQty==null?1:n.defaultQty,"Steuersatz %":n.taxRate==null||n.taxRate===""?"":n.taxRate,Rechnungstext:n.invoiceText||"","Interne Bezeichnung":n.internalName||"","Interne Beschreibung":n.description||"",Unternehmen:t(n.companyId),Aktiv:n.active===!1?"Nein":"Ja"}))}var Pi=null;function lo(){return Pi||(Pi=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw Pi=null,e})),Pi}var Li=e=>e&&typeof e=="object"?e.v:e,Du=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function oo(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function xp(e){let t=[e.columns.map(n=>oo(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>oo(Li(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>oo(Li(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function Ki(e){let t=new Blob([xp(e)],{type:"text/csv;charset=utf-8"});Xe(t,`${qt(e.fileName)}.csv`)}async function Su(e){let t=await lo(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(Li));e.totals&&n.push(e.totals.map(Li));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let p=t.utils.encode_cell({r:c,c:o}),d=a[p];d&&(typeof d.v=="number"&&r.type==="money"&&(d.z="#,##0.00"),typeof d.v=="string"&&/^[=+\-@]/.test(d.v)&&(d.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,qt(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});Xe(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${qt(e.fileName)}.xlsx`)}async function Cu(e){await nu({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(Du)),totals:e.totals?e.totals.map(Du):null,fileName:`${qt(e.fileName)}.pdf`,landscape:e.columns.length>6})}async function Iu(e){if(e.size>5*1024*1024)throw new Error(`„${e.name}“ ist größer als 5 MB.`);if(!/\.(xlsx|xls|csv)$/i.test(e.name||""))throw new Error("Bitte eine Excel-Datei (.xlsx) oder CSV-Datei wählen.");let t=await lo(),n=/\.csv$/i.test(e.name),a;if(n){let i=(await e.text()).replace(/^﻿/,""),r=i.split(/\r?\n/)[0]||"",o=(r.match(/;/g)||[]).length>=(r.match(/,/g)||[]).length?";":",";a=t.read(i,{type:"string",FS:o,raw:!0})}else a=t.read(new Uint8Array(await e.arrayBuffer()),{type:"array"});let s=a.Sheets[a.SheetNames[0]];if(!s)throw new Error("Die Datei enthält keine Tabelle.");return t.utils.sheet_to_json(s,{defval:"",raw:!n})}async function Eu(e,{fileName:t,sheet:n="Tabelle",moneyColumns:a=[]}={}){let s=await lo(),i=s.utils.json_to_sheet(e),r=e.length?Object.keys(e[0]):[];r.forEach((p,d)=>{for(let u=1;u<=e.length;u++){let m=i[s.utils.encode_cell({r:u,c:d})];m&&(typeof m.v=="number"&&a.includes(p)&&(m.z="#,##0.00"),typeof m.v=="string"&&/^[=+\-@]/.test(m.v)&&(m.t="s"))}}),i["!cols"]=r.map(p=>({wch:Math.min(60,Math.max(p.length,...e.map(d=>String(d[p]==null?"":d[p]).length))+2)}));let o=s.utils.book_new();s.utils.book_append_sheet(o,i,n.slice(0,31));let c=s.write(o,{bookType:"xlsx",type:"array"});Xe(new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${qt(t)}.xlsx`)}function co(e){let t=e.code||"";if(!t)return`zzzz ${e.name}`;let n=/^(.*-)(\d)(\d{2})$/.exec(t);return n?`${n[1]}${n[3]}-${n[2]}`:t}function Nu({tier:e}){let t=kt[e];return t?l`<${ze} tone=${t.tone}>${t.label}<//>`:null}function uo({service:e,onClose:t,onSaved:n}){let a=!e||!y("services",e.id),[s,i]=D(()=>({...e||Ht()})),[r,o]=D(!1),c=m=>f=>i(h=>({...h,[m]:f})),p=w.settings.serviceCategories||[],d=da.includes(s.unit)||!s.unit?da:[...da,s.unit];async function u(){o(!0);let m=await _(()=>gi(s));o(!1),m&&(U(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${Pe} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${u}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${V} class="span-2" label="Leistungsnummer" value=${s.code} onInput=${c("code")} placeholder="z. B. HL-WEB-101" hint="optional, eindeutig" />
      <${V} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${se} class="span-2" label="Tarif" value=${s.tier||""} onChange=${c("tier")} placeholder="Ohne Tarif"
        options=${Object.entries(kt).map(([m,f])=>({id:m,label:f.label}))} />
      <${V} class="span-4" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${ie} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${ie} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${Me} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${se} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${Ae} />
      <${se} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${d} />
      <${Me} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${Me} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${se} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${p.includes(s.category)||!s.category?p:[...p,s.category]} />
      <${se} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${re().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${je} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${je} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function Tu(){ge();let[e,t]=D(""),[n,a]=D(""),[s,i]=D("all"),[r,o]=D(null),[c,p]=D(null),d=ve(null),u=bt(),m=w.services.filter(k=>u&&k.companyId&&k.companyId!==u||n&&k.category!==n||s!=="all"&&(k.tier||"")!==(s==="none"?"":s)?!1:Ne(e,k.code,k.name,k.internalName,k.description,k.invoiceText,k.category,k.tier&&kt[k.tier]&&kt[k.tier].label)),f=w.services.filter(k=>!(u&&k.companyId&&k.companyId!==u)),h=k=>f.filter(B=>(B.tier||"")===k).length,b=f.some(k=>k.tier);async function v(k){if(!k)return;let B=await _(async()=>{let G=await Iu(k),E=ku(G);if(!E.items.length)throw new Error("In der Datei wurden keine Leistungen gefunden. Erwartet wird eine Tabelle mit Überschriften wie „Nr.“, „Name“, „Tarif“, „Preis netto“.");if(!E.columns.name)throw new Error("Die Spalte „Name“ fehlt.");if(!E.columns.price)throw new Error("Die Spalte „Preis netto“ fehlt.");return E});B&&p({...B,fileName:k.name})}async function g(){let k=[...m].sort((B,G)=>co(B).localeCompare(co(G),"de"));await _(()=>Eu(xu(k,B=>(y("companies",B)||{}).name||""),{fileName:`Leistungen ${q()}`,sheet:"Leistungen",moneyColumns:["Preis netto"]}))}let $=[...new Set(w.services.map(k=>k.category).filter(Boolean))].sort((k,B)=>k.localeCompare(B,"de"));async function C(k){if(!await ue({title:"Leistung löschen?",text:`„${k.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await vc(k.id),!0))&&U("Leistung gelöscht","good")}let S=[{key:"code",label:"Nr.",class:"nw",sort:co,render:k=>k.code?l`<span class="mono-code">${k.code}</span>`:l`<span class="muted-text">–</span>`},{key:"name",label:"Leistung",sort:k=>k.name,render:k=>l`<div class="cell-main">${k.name}${k.active===!1&&l` <${ze} tone="mute">Inaktiv<//>`}</div>
        ${(k.invoiceText||k.internalName)&&l`<div class="cell-sub clamp-1">${k.invoiceText||k.internalName}</div>`}`},{key:"tier",label:"Tarif",sort:k=>k.tier||"zzzz",render:k=>l`<${Nu} tier=${k.tier} />`},{key:"category",label:"Kategorie",sort:k=>k.category,render:k=>k.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:k=>(y("companies",k.companyId)||{}).name||"",render:k=>{let B=y("companies",k.companyId);return B?l`<span class="co-tag"><${li} company=${B} />${B.shortName||B.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:k=>k.recurring?1:0,render:k=>k.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:k=>k.unit},{key:"tax",label:"Steuer",align:"right",render:k=>k.taxRate!=null&&k.taxRate!==""?It(k.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:k=>k.priceCents,render:k=>j(k.priceCents,k.currency)},{key:"actions",label:"",align:"right",render:k=>l`<${I} variant="ghost" small icon="trash" title=${`${k.name} löschen`} onClick=${()=>C(k)} />`}];return l`
    <${ke} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <input ref=${d} type="file" class="visually-hidden" accept=".xlsx,.xls,.csv" tabindex="-1" aria-label="Leistungen importieren"
        onChange=${k=>{let B=k.target.files[0];k.target.value="",v(B)}} />
      <${I} icon="upload" onClick=${()=>d.current&&d.current.click()}>Importieren<//>
      ${w.services.length>0&&l`<${I} icon="download" onClick=${g}>Excel<//>`}
      <${I} variant="primary" icon="plus" onClick=${()=>o(Ht({companyId:""}))}>Neue Leistung<//>
    <//>
    ${w.services.length>0&&l`<div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${$.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${k=>a(k.target.value)}>
        <option value="">Alle Kategorien</option>
        ${$.map(k=>l`<option value=${k}>${k}</option>`)}
      </select>`}
      ${b&&l`<${gt} label="Tarif" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:f.length},{id:"starter",label:"Starter",count:h("starter")},{id:"standard",label:"Standard",count:h("standard")},...h("")?[{id:"none",label:"Ohne Tarif",count:h("")}]:[]]} />`}
    </div>`}
    <${et} columns=${S} rows=${m} initialSort=${{key:"code",dir:"asc"}} onRowClick=${k=>o(k)}
      empty=${w.services.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${pe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${I} variant="primary" icon="plus" onClick=${()=>o(Ht())}>Erste Leistung anlegen<//>
          <//>`} />
    ${r&&l`<${uo} service=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${Dp} data=${c} onClose=${()=>p(null)} />`}
  `}function Dp({data:e,onClose:t}){let n=re(),a=[...new Set(e.items.map($=>$.service.company).filter(Boolean))],s=a.length===1?n.find($=>[$.name,$.shortName,$.invoicePrefix].filter(Boolean).some(C=>C.toLowerCase()===a[0].toLowerCase())):null,[i,r]=D((s||de()||{}).id||""),[o,c]=D(!1),[p,d]=D(!1),u=new Set(w.services.map($=>($.code||"").toLowerCase()).filter(Boolean)),m=e.items.filter($=>!$.problems.length),f=e.items.filter($=>$.problems.length),h=$=>$.service.code&&u.has($.service.code.toLowerCase()),b=m.filter($=>!h($)).length,v=m.length-b;async function g(){d(!0);let $=await _(()=>bc(m.map(S=>S.service),{companyId:i,update:o}));if(d(!1),!$)return;let C=[$.added&&`${$.added} ${$.added===1?"Leistung":"Leistungen"} angelegt`,$.updated&&`${$.updated} aktualisiert`,$.skipped&&`${$.skipped} unverändert übersprungen`].filter(Boolean);U(`${C.join(", ")}.`,"good",7e3),t()}return l`<${Pe} title="Leistungen importieren" size="xl" onClose=${t} onSubmit=${g}
    footer=${l`<${I} onClick=${t}>Abbrechen<//>
      <${I} variant="primary" type="submit" busy=${p} disabled=${!(b||o&&v)}>
        ${b?`${b} ${b===1?"Leistung":"Leistungen"} anlegen`:"Übernehmen"}${o&&v?`, ${v} aktualisieren`:""}<//>`}>
    <p class="modal-lead">${e.fileName}: ${e.items.length} Zeilen gelesen. Bestehende Leistungen werden nie gelöscht.</p>
    <div class="form-grid">
      <${se} class="span-3" label="Gilt für Unternehmen" value=${i} onChange=${r} placeholder="Alle Unternehmen"
        options=${n.map($=>({id:$.id,label:$.name}))} hint=${a.length?`In der Datei: ${a.join(", ")}`:"Leer: in allen Unternehmen wählbar"} />
      ${v>0&&l`<div class="span-3 import-update"><${je} label=${`${v} vorhandene Leistungen mit gleicher Nr. aktualisieren`} checked=${o} onChange=${c}
        hint="Sonst werden sie übersprungen und bleiben unverändert." /></div>`}
    </div>
    ${f.length>0&&l`<${xe} tone="warn">${f.length} ${f.length===1?"Zeile wird":"Zeilen werden"} nicht übernommen:
      ${f.slice(0,5).map($=>l`<div>Zeile ${$.row}: ${$.problems.join(", ")}</div>`)}${f.length>5?l`<div>…</div>`:""}<//>`}
    ${e.unknownColumns.length>0&&l`<p class="muted-text small">Nicht verwendete Spalten: ${e.unknownColumns.join(", ")}</p>`}
    <div class="table-wrap import-preview">
      <table class="table">
        <thead><tr><th>Nr.</th><th>Leistung</th><th>Tarif</th><th>Kategorie</th><th>Art</th><th class="r">Preis netto</th><th></th></tr></thead>
        <tbody>${e.items.map($=>l`<tr key=${$.row} class=${$.problems.length?"is-bad":""}>
          <td class="nw"><span class="mono-code">${$.service.code||"–"}</span></td>
          <td><div class="cell-main">${$.service.name||"–"}</div>${$.service.invoiceText&&l`<div class="cell-sub clamp-1">${$.service.invoiceText}</div>`}</td>
          <td><${Nu} tier=${$.service.tier} /></td>
          <td>${$.service.category}</td>
          <td>${$.service.recurring?`je ${$.service.unit}`:$.service.unit==="Pauschal"?"einmalig":`je ${$.service.unit}`}</td>
          <td class="r">${j($.service.priceCents,$.service.currency)}</td>
          <td>${$.problems.length?l`<span class="tone-bad small">${$.problems[0]}</span>`:h($)?l`<span class="muted-text small">${o?"wird aktualisiert":"vorhanden, übersprungen"}</span>`:l`<span class="tone-good small">neu</span>`}</td>
        </tr>`)}</tbody>
      </table>
    </div>
  <//>`}var Sp={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function Cs(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&Ae.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function Cp(e,t,n){if(t&&t!=="new"){let r=y(e,t);return r?ye(r):null}let a=re(),s=de()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&y("invoices",n.copy))i=Tc(y("invoices",n.copy));else if(e==="invoices"&&n.contract&&y("contracts",n.contract)){let r=y("contracts",n.contract),o=y("companies",r.companyId)||s,c=r.quoteId?y("quotes",r.quoteId):null,p=["once","all","monthly","quarterly","semiannual","yearly"].includes(n.part)?n.part:"once";return i=Cs(mt(o,{contractId:r.id,contractPart:p}),y("customers",r.customerId),o,e),i.currency=r.currency,i.items=is(r,p),i.items.length||(i.items=is(r,"all")),c&&!c.invoiceId&&c.status!=="draft"&&p==="once"&&(i.quoteId=c.id),i}else if(e==="invoices")i=mt(s);else if(n.copy&&y("quotes",n.copy)){let r=y("quotes",n.copy),o=y("companies",r.companyId)||s;i=Ln(o,{validUntil:Ce(q(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:jt().id})),discount:ye(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=Ln(s,{validUntil:Ce(q(),30)});return n.customer&&y("customers",n.customer)&&(i=Cs(i,y("customers",n.customer),y("companies",i.companyId),e)),i}function mo({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=D(null),r=ve(null),o=e.items||[],c=e.currency;ce(()=>{if(!s||!r.current)return;let b=r.current.querySelector(`[data-item="${s}"] .combo-input`);b&&b.focus(),i(null)},[s,o.length]);let p=Se(()=>w.services.filter(b=>b.active!==!1&&(!b.companyId||b.companyId===e.companyId)).sort((b,v)=>b.name.localeCompare(v.name,"de")).map(b=>({id:b.id,label:b.name,search:`${b.code||""} ${b.internalName} ${b.category} ${b.tier?kt[b.tier].label:""}`,sub:[b.tier?kt[b.tier].label:"",b.code,`${j(b.priceCents,b.currency)} je ${b.unit}`].filter(Boolean).join(" · ")})),[w.version,e.companyId]),d=(b,v)=>n(o.map(g=>g.id===b?{...g,...v}:g)),u=b=>n(o.filter(v=>v.id!==b));function m(b,v){let g=b+v;if(g<0||g>=o.length)return;let $=[...o];[$[b],$[g]]=[$[g],$[b]],n($)}function f(){let b=jt({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,b]),i(b.id)}function h(b,v){let g=y("services",v);if(!g)return;let $=lt(g,t),C=$.priceCents;if(g.currency&&g.currency!==c){let S=e.fx?Qt(g.currency,e.fx.usdToEur):null,k=S?rn(C,g.currency,c,S):null;k!=null?(C=k,U(`Preis von ${g.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):U(`Die Leistung ist in ${g.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}d(b,{...$,id:b,priceCents:C})}return l`<div class="items" ref=${r}>
    ${o.map((b,v)=>l`<div class="item" key=${b.id} data-item=${b.id}>
      <div class="item-top">
        <span class="item-pos">${v+1}</span>
        <div class="item-name">
          <${ft} freeText options=${p} text=${b.name} label=${`Position ${v+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${g=>d(b.id,{name:g,serviceId:b.serviceId&&y("services",b.serviceId)&&y("services",b.serviceId).name===g?b.serviceId:""})}
            onChange=${g=>h(b.id,g)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${v+1} nach oben`} disabled=${v===0} onClick=${()=>m(v,-1)}><${W} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${v+1} nach unten`} disabled=${v===o.length-1} onClick=${()=>m(v,1)}><${W} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${v+1} entfernen`} onClick=${()=>u(b.id)}><${W} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String(b.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${v+1}: Beschreibung`}
        value=${b.description} onInput=${g=>d(b.id,{description:g.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${Ge} value=${b.qty} digits=${3} onChange=${g=>d(b.id,{qty:g})} aria-label=${`Position ${v+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${b.unit} aria-label=${`Position ${v+1}: Einheit`}
            onInput=${g=>d(b.id,{unit:g.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${Ge} mode="money" value=${b.priceCents} onChange=${g=>d(b.id,{priceCents:g})} aria-label=${`Position ${v+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${Ge} value=${b.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${g=>d(b.id,{discountPct:g})} aria-label=${`Position ${v+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${Ge} value=${b.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g=>d(b.id,{taxRate:g})} aria-label=${`Position ${v+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${j(xr(b),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${da.map(b=>l`<option value=${b}></option>`)}</datalist>
    <div class="items-foot">
      <${I} icon="plus" onClick=${f}>Position hinzufügen<//>
      <${I} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function Is({coll:e,id:t,params:n}){ge();let a=Sp[e],[s,i]=D(()=>Cp(e,t,n||{})),[r,o]=D(!1),[c,p]=D({loading:!1,error:""}),[d,u]=D(""),[m,f]=D(""),[h,b]=D([]),[v,g]=D(null),[$,C]=D(!1),S=ve(0),k=ve(!0),B=H=>{i(H),o(!0)},G=H=>te=>B(He=>({...He,[H]:te}));ce(()=>(r?ti(ni):sn(),()=>sn()),[r]);let E=s?y("companies",s.companyId):null,A=s?y("customers",s.customerId):null,x=s?`${s.currency}|${s.issueDate}`:"";async function R(H){if(!s||!$e(s.issueDate)||!H&&s.fx&&s.fx.manual)return;let te=++S.current,He=s.currency,pn=s.issueDate;p({loading:!0,error:""});try{let Ot=await Yn(He,pn);if(te!==S.current)return;i(at=>at.currency===He&&at.issueDate===pn?{...at,fx:Ot}:at),H&&o(!0),p({loading:!1,error:""})}catch(Ot){if(te!==S.current)return;i(at=>at.fx&&!at.fx.manual&&at.fx.forDate&&$e(at.issueDate)&&at.fx.forDate!==Qn(at.issueDate)?{...at,fx:null}:at),p({loading:!1,error:Ot.message})}}if(ce(()=>{let H=k.current;k.current=!1,!(!s||s.status!=="draft")&&(H&&s.number&&s.fx||R(!1))},[x]),ce(()=>{let H=!0;if(!s||!E){u("");return}if(s.number){u(s.number);return}return ls(E,a.numberKind,s.issueDate).then(te=>{H&&u(te)}).catch(()=>{H&&u("")}),()=>{H=!1}},[s&&s.companyId,s&&s.issueDate,w.version]),!s)return l`<${pe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${I} onClick=${()=>J(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>wn(`${a.list}/${s.id}`),0),null;let M=pt(s),T=s.fx?Qt(s.currency,s.fx.usdToEur,s.fx):null,z={...s,fx:T,totals:M,dueDate:e==="invoices"?Lr(s):""},L=Nt(z,e,{previewNumber:d}),Q=s.currency==="USD"?"EUR":"USD",N=T?rn(M.totalCents,s.currency,Q,T):null,ee=re(),fe=!!y(e,s.id),O=e==="invoices"&&s.number?s.number:"",Be=O?s.reopened||{}:null,Ze=O?Ue(Ye(s.id)):0,ia=w.customers.filter(H=>H.active!==!1||H.id===s.customerId).sort((H,te)=>+!Re(H)-+!Re(te)||Z(H).localeCompare(Z(te),"de")).map(H=>({id:H.id,label:Z(H),sub:[Re(H)?"":"Kontakt",H.number,H.city].filter(Boolean).join(", "),search:`${H.firstName} ${H.lastName} ${H.contact} ${H.email}`}));function Xi(H){let te=y("companies",H),He=y("companies",s.companyId);if(!te){B(yt=>({...yt,companyId:""}));return}let pn=e==="quotes"?"quoteText":"invoiceText",Ot=(yt,en)=>String(yt||"")===String(en||"");B(yt=>{let en=y("customers",yt.customerId),tn={...yt,companyId:H};(!yt.intro||He&&Ot(yt.intro,He[pn]))&&(tn.intro=te[pn]||""),(!yt.paymentTerms||He&&Ot(yt.paymentTerms,He.paymentTerms))&&(tn.paymentTerms=te.paymentTerms||""),(!yt.footer||He&&Ot(yt.footer,He.footer))&&(tn.footer=te.footer||""),en&&en.language||(tn.language=te.language),en&&en.currency||(tn.currency=te.currency),e==="invoices"&&!(en&&en.paymentTermDays!=null&&en.paymentTermDays!=="")&&(tn.paymentTermDays=te.paymentTermDays),tn.showSecondary=te.showSecondary;let nm=He&&Number(He.defaultTaxRate)||0,am=Number(te.defaultTaxRate)||0;return tn.items=yt.items.map(Fa=>{let nr=Fa.serviceId?y("services",Fa.serviceId):null;return(!nr||nr.taxRate==null||nr.taxRate==="")&&(Number(Fa.taxRate)||0)===nm?{...Fa,taxRate:am}:Fa}),tn});let at=y("customers",s.customerId);s.items.length&&!(at&&at.currency)&&te.currency!==s.currency&&U(`Währung auf ${te.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Wd(H){let te=y("customers",H),He=s.currency,pn=Cs(s,te,y("companies",s.companyId),e);B(Ot=>Cs(Ot,te,y("companies",Ot.companyId),e)),s.items.length&&pn.currency!==He&&U(`Währung auf ${pn.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Qd(H){H!==s.currency&&(s.items.length&&U("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),B(te=>({...te,currency:H,fx:te.fx?Qt(H,te.fx.usdToEur,te.fx):te.fx})))}function Yd(H){H>0&&(S.current+=1,p({loading:!1,error:""}),B(te=>({...te,fx:Qt(te.currency,H,{manual:!0,source:"Von Hand eingetragen",date:q(),fetchedAt:ne()})})))}function Jd(){let H=Br("USD","EUR");H&&(B(te=>({...te,fx:Qt(te.currency,H.rate,{manual:!0,source:`Letzter bekannter Kurs (${H.source})`,date:H.date,fetchedAt:H.fetchedAt})})),p({loading:!1,error:""}))}async function Xd(){f("save");let H=await _(()=>e==="invoices"?Ca(s):Ac(s));f(""),H&&(i(ye(H)),o(!1),sn(),b([]),U("Entwurf gespeichert","good"),(t==="new"||!t)&&(sn(),J(`${a.list}/${H.id}/edit`,{replace:!0})))}async function em(){if(c.loading){U("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let H=hi(z,e==="quotes"?"quote":"invoice");if(b(H),H.length){U("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await ue({title:`${a.finalize}?`,text:O?`Die Rechnung behält die Nummer ${O} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${d} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${d} und lässt sich danach nicht mehr ändern.`,list:[`${Z(A)}`,`${j(M.totalCents,s.currency)}${N!=null?` (≈ ${j(N,Q)})`:""}`,...e==="invoices"&&A&&!Re(A)?[`${Z(A)} ist bisher Kontakt und wird damit Kunde (neue Nummer ${Sn("customer")}).`]:[],...Ze>0?[Ze>M.totalCents?`Achtung: Eingegangen sind bereits ${j(Ze,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${j(Ze,s.currency)}`]:[]],confirmLabel:a.finalize}))return;f("finalize");let He=await _(()=>e==="invoices"?cs(z):ds(z));f(""),He&&(o(!1),U(`${a.one} ${He.number} ${O?"neu erstellt":"erstellt"}`,"good"),wn(`${a.list}/${He.id}`))}async function tm(){if(O){await _i(y("invoices",s.id)||s)&&wn(a.list);return}if(!await ue({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await(e==="invoices"?Kr(s.id):Rc(s.id)),!0))&&(U("Entwurf gelöscht","good"),wn(a.list))}let er=s.fx?Number(s.fx.usdToEur):null,tr=!!s.serviceDateEnd;return l`
    <${ke} title=${O?`Rechnung ${O} bearbeiten`:fe?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${O?"Entwurf – die Nummer bleibt erhalten":d?`Nächste Nummer: ${d}`:E?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${I} class="only-narrow" icon="eye" onClick=${()=>C(!$)}>${$?"Formular":"Vorschau"}<//>
      ${fe&&l`<${St} items=${[{label:O?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:tm}]} />`}
      <${I} icon="check" onClick=${Xd} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${I} variant="primary" icon="invoice" onClick=${em} busy=${m==="finalize"} disabled=${!!m}>${a.finalize}<//>
    <//>

    ${O&&l`<${xe} tone="info">
      Diese Rechnung war bereits erstellt${Be.finalizedAt?` (${Je(Be.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${O}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${Ze>0?` Die eingetragenen Zahlungen (${j(Ze,s.currency)}) bleiben erhalten.`:""}
      ${Be.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${h.length>0&&l`<${xe} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${h.map(H=>l`<li>${H}</li>`)}</ul>
    <//>`}

    <div class=${`editor${$?" show-preview":""}`}>
      <div class="editor-form">
        <${X} title=${e==="quotes"?"Aussteller und Empfänger":"Aussteller und Kunde"}>
          <div class="form-grid">
            <${se} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${Xi}
              disabled=${!!O} hint=${O?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${ee.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(O&&E&&!ee.some(H=>H.id===E.id)?[E,...ee]:ee).map(H=>({id:H.id,label:H.name}))} />
            <${we} class="span-3" label=${e==="quotes"?"Kontakt oder Kunde":"Kunde"} htmlFor="doc-customer">
              <${ft} id="doc-customer" options=${ia} value=${s.customerId} placeholder=${e==="quotes"?"Kontakt suchen":"Kunde suchen"}
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${Wd}
                onCreate=${H=>g({type:"customer",seed:H})} createLabel=${e==="quotes"?"als Kontakt anlegen":"als Kunde anlegen"} />
            <//>
            <${_e} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${G("issueDate")} />
            ${e==="invoices"&&l`
              <${_e} class="span-2" label=${tr?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${G("serviceDate")} />
              ${tr?l`<${_e} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${G("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>G("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Me} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${G("paymentTermDays")}
                hint=${z.dueDate?`Fällig am ${F(z.dueDate)}`:""} />
              ${tr&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>G("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${_e} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${G("validUntil")} min=${s.issueDate} />`}
            <${se} class="span-2" label="Währung" value=${s.currency} onChange=${Qd} options=${Ae} />
            <${se} class="span-2" label="Belegsprache" value=${s.language} onChange=${G("language")} options=${Bt} />
          </div>
        <//>

        <${X} title="Positionen">
          <${mo} doc=${s} company=${E} onChange=${H=>B(te=>({...te,items:H}))}
            onNewService=${()=>g({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${Dt} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${H=>B(te=>({...te,discount:{type:H,value:0}}))} />
                ${s.discount.type==="abs"?l`<${Ge} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${H=>B(te=>({...te,discount:{type:"abs",value:H}}))} />`:l`<${Ge} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${H=>B(te=>({...te,discount:{type:"pct",value:H}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${j(M.subtotalCents,s.currency)}</dd></div>
              ${M.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${j(-M.discountCents,s.currency)}</dd></div>`}
              ${M.taxGroups.filter(H=>H.rate!==0).map(H=>l`<div><dt>${E&&E.taxLabel||"Steuer"} ${It(H.rate)}</dt><dd>${j(H.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${j(M.totalCents,s.currency)}</dd></div>
              ${N!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${j(N,Q)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${X} title="Wechselkurs">
          ${c.error&&l`<${xe} tone="warn" action=${Br("USD","EUR")&&l`<${I} small onClick=${Jd}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${Ge} value=${er} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${Yd} />
            <span class="fx-eq">EUR</span>
            <${I} small icon="refresh" busy=${c.loading} onClick=${()=>R(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${F(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&er?` Das entspricht 1 EUR = ${Da(1/er)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${je} label=${`Betrag zusätzlich in ${Q} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${G("showSecondary")} />
        <//>

        <${X} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${ie} class="span-6" label="Einleitung" value=${s.intro} onInput=${G("intro")} rows=${2} />
            <${ie} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${G("paymentTerms")} rows=${2} />
            <${ie} class="span-6" label="Fußzeile" value=${s.footer} onInput=${G("footer")} rows=${2} />
          </div>
        <//>

        <${X} title="Interne Notiz">
          <${ie} value=${s.internalNotes} onInput=${G("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${L.fileName}</span>
          </div>
          <${Ma} model=${L} />
        </div>
      </div>
    </div>

    ${v&&v.type==="customer"&&l`<${_a}
      customer=${Gt({company:v.seed||"",kind:e==="quotes"?"contact":"customer"})} onClose=${()=>g(null)}
      onSaved=${H=>B(te=>Cs(te,H,y("companies",te.companyId),e))} />`}
    ${v&&v.type==="service"&&l`<${uo}
      service=${Ht({companyId:"",currency:s.currency})} onClose=${()=>g(null)}
      onSaved=${H=>B(te=>({...te,items:[...te.items,lt(H,y("companies",te.companyId))]}))} />`}
  `}function Ip(e){let t=zn.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=wi(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function po({rec:e,onClose:t}){let n=!y("recurring",e.id),[a,s]=D(()=>ye(e)),[i,r]=D(!1),o=h=>b=>s(v=>({...v,[h]:b})),c=y("companies",a.companyId),p=pt(a),d=w.customers.filter(h=>h.active!==!1||h.id===a.customerId).sort((h,b)=>Z(h).localeCompare(Z(b),"de")).map(h=>({id:h.id,label:Z(h),sub:[h.number,h.city].filter(Boolean).join(", ")}));function u(h){let b=y("companies",h);s(v=>({...v,companyId:h,...b&&n?{currency:b.currency,language:b.language,paymentTermDays:b.paymentTermDays,intro:v.intro||b.invoiceText}:{}}))}function m(h){let b=y("customers",h);s(v=>({...v,customerId:h,...b&&b.language?{language:b.language}:{},...b&&b.currency&&Ae.includes(b.currency)?{currency:b.currency}:{},...b&&b.paymentTermDays!=null&&b.paymentTermDays!==""?{paymentTermDays:Number(b.paymentTermDays)}:{}}))}async function f(){r(!0);let h=await _(()=>ps(a));r(!1),h&&(U("Vorlage gespeichert","good"),t())}return l`<${Pe} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${f}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${V} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${u} placeholder="Unternehmen wählen"
        options=${re().map(h=>({id:h.id,label:h.name}))} />
      <${we} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${ft} id="rec-customer" options=${d} value=${a.customerId} placeholder="Kunde suchen" onChange=${m} />
      <//>
      <${se} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${zn.map(h=>({id:h.id,label:h.label}))} />
      ${a.interval==="custom"&&l`<${Me} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${_e} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${_e} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${Me} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${se} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${Ae} />
      <${se} class="span-2" label="Belegsprache" value=${a.language} onChange=${o("language")} options=${Bt} />
      <div class="span-6">
        <${je} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${h=>o("servicePeriod")(h?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${mo} doc=${a} company=${c} onChange=${h=>s(b=>({...b,items:h}))}
      onNewService=${()=>U("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${j(p.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${je} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function Au(){ge();let[e,t]=D(null),[n,a]=D(""),s=q(),i=w.recurring.filter(Oe),r=i.filter(m=>Ia(m,s)),o=!de();async function c(m,f){let h=m.nextDate>s;if(h&&!await ue({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${F(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(m.id);let b=await _(()=>Hr(m.id,{early:h}));return a(""),b&&(U(`Rechnungsentwurf für ${Z(y("customers",m.customerId))} angelegt`,"good"),f&&J(`/invoices/${b.id}/edit`)),b}async function p(){a("all");let m=0;for(let f of r){let h=0;for(;Ia(y("recurring",f.id),s)&&h++<36&&await _(()=>Hr(f.id));)m+=1}a(""),m&&(U(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),J("/invoices?status=draft"))}async function d(m){if(!await ue({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Lc(m.id),!0))&&U("Vorlage gelöscht","good")}let u=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${Z(y("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Le} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>Ip(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>Ea(m)?l`<span class="muted-text">beendet</span>`:m.active?Ia(m,s)?l`<span class="tone-warn">${F(m.nextDate)}</span><div class="cell-sub">fällig</div>`:F(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>j(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>Ea(m)?l`<${ze} tone="mute">Beendet<//>`:m.active?l`<${ze} tone="good">Aktiv<//>`:l`<${ze} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${I} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||Ea(m)}
          title=${Ea(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(m,!0)}>Jetzt erzeugen<//>
        <${I} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>d(m)} />
      </div>`}];return l`
    <${ke} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${I} variant="primary" icon="plus" onClick=${()=>t(bn(de()||(re().length===1?re()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${xe} tone="warn" action=${l`<${I} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${p}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${et} columns=${u} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${pe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${I} variant="primary" icon="plus" onClick=${()=>t(bn(de()||(re().length===1?re()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${po} rec=${e} onClose=${()=>t(null)} />`}
  `}var Ru="https://api.anthropic.com/v1/messages",Xt=class extends Error{};function Ep(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var Np=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function Tp({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[Ep(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:Np}]}]}}var Tt=e=>typeof e=="string"?e.trim():"",fo=e=>Number.isFinite(Number(e))?wa(Number(e)):0;function Ap(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(f=>f.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new Xt("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new Xt("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=Tt(s.currency).toUpperCase();js.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=fo(s.net_amount),c=fo(s.tax_amount),p=fo(s.total_amount);p&&o+c!==p&&(!o&&c<=p||Math.abs(o+c-p)<=2?o=p-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let d=$e(Tt(s.invoice_date))?Tt(s.invoice_date):"";d||i.push("Das Belegdatum wurde nicht erkannt.");let u=$e(Tt(s.payment_date))?Tt(s.payment_date):"",m=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:Tt(s.vendor).slice(0,200),description:Tt(s.description).slice(0,300),invoiceNumber:Tt(s.invoice_number).slice(0,80),invoiceDate:d,paymentDate:u,currency:r,netCents:o,taxCents:c,totalCents:p||o+c,paymentMethod:n.includes(Tt(s.payment_method))?Tt(s.payment_method):"",category:t.includes(Tt(s.category))?Tt(s.category):""},uncertain:m,warnings:i,usage:e.usage||null}}function Bu(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Uu(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new Xt("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await vu(e),r="image/jpeg");let o=await bu(i),c=Tp({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),p;try{p=await fetch(Ru,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new Xt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let d=null;try{d=await p.json()}catch{}if(!p.ok)throw new Xt(Bu(p.status,d));return Ap(d,{categories:a,paymentMethods:s})}async function Mu({apiKey:e,model:t}){if(!e)throw new Xt("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(Ru,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new Xt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new Xt(Bu(n.status,a));return!0}var Oi=new Set,go=new Set,_u=()=>go.forEach(e=>e(new Set(Oi)));function Rp(){let[e,t]=D(new Set(Oi));return ce(()=>(go.add(t),()=>go.delete(t)),[]),e}var Bp=()=>({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,categories:w.settings.expenseCategories||[],paymentMethods:w.settings.paymentMethods||[]});async function zu(e){let t=await Ua(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return Uu(t,Bp())}async function Up(e,t){try{return await Yn(e,$e(t)?t:q())}catch{return null}}async function Mp(e){let t=await so(e,{shrink:w.settings.shrinkImages!==!1}),n=de()||(re().length===1?re()[0]:null),a=Ya({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:w.settings.aiApiKey?"pending":"none"}}),s=await Zr({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await Cn(a),!w.settings.aiApiKey)return a;Oi.add(a.id),_u();try{let i=await zu(s.id),r=i.fields,o=r.currency||a.currency,c=await Up(o,r.invoiceDate),p=y("expenses",a.id);p&&p.status==="review"&&(a=await Cn({...p,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:w.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=y("expenses",a.id);throw r&&await Cn({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{Oi.delete(a.id),_u()}return a}function Es({attachmentId:e}){let[t,n]=D(""),[a,s]=D(!1),i=y("attachments",e);ce(()=>{let o="",c=!0;return n(""),s(!1),Ua(e).then(p=>{if(c){if(!p){s(!0);return}o=URL.createObjectURL(p),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await Ua(e);o&&Xe(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${W} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${Vt(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function _p({expense:e,onClose:t}){let n=!y("expenses",e.id),a=e.status==="review",[s,i]=D(()=>{let L=ye(e);if(!L.invoiceDate&&!a&&(L.invoiceDate=q()),!L.companyId){let Q=de()||(re().length===1?re()[0]:null);Q&&(L.companyId=Q.id)}return L}),[r,o]=D(""),[c,p]=D(""),[d,u]=D(0),m=ve([]),f=ve(null),h=L=>Q=>i(N=>({...N,[L]:Q})),b=(s.attachmentIds||[])[0],v=s.ai||{},g=new Set(v.uncertain||[]),$=`${s.currency}|${s.invoiceDate}`;ce(()=>{let L=!0;if(!$e(s.invoiceDate)||s.fx&&s.fx.manual)return;let Q=(fe,O)=>!!fe&&fe.forCurrency===O.currency&&fe.forDate===Qn(O.invoiceDate);if(Q(s.fx,s))return;p("");let N=s.currency,ee=s.invoiceDate;return Yn(N,ee).then(fe=>{L&&i(O=>O.currency===N&&O.invoiceDate===ee&&!(O.fx&&O.fx.manual)?{...O,fx:fe}:O)}).catch(fe=>{L&&(i(O=>O.fx&&!O.fx.manual&&O.fx.forDate&&!Q(O.fx,O)?{...O,fx:null}:O),p(fe.message))}),()=>{L=!1}},[$,d]);function C(L,Q){i(N=>{let ee={...N,[L]:Q};return L==="totalCents"?ee.netCents=(Q||0)-(N.taxCents||0):ee.totalCents=(ee.netCents||0)+(ee.taxCents||0),ee})}function S(L,Q){Q>0&&i(N=>{let fe={...N.fx||{rateToUSD:N.currency==="USD"?1:null,usdToEur:null},[L]:Q,manual:!0,source:"Von Hand eingetragen",date:q(),fetchedAt:ne()};return N.currency==="USD"&&(fe.rateToUSD=1),N.currency==="EUR"&&L==="usdToEur"&&(fe.rateToUSD=1/Q),{...N,fx:fe}})}async function k(L){if(!L)return;o("file");let Q=await _(async()=>{let N=await so(L,{shrink:w.settings.shrinkImages!==!1});return Zr({blob:N.blob,name:N.name,ownerType:"expense",ownerId:s.id})});o(""),Q&&(m.current.push(Q.id),i(N=>({...N,attachmentIds:[Q.id,...N.attachmentIds||[]]})))}async function B(){if(!await ue({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let Q=b;await _(()=>Gr(Q)),i(ee=>({...ee,attachmentIds:(ee.attachmentIds||[]).filter(fe=>fe!==Q)}));let N=y("expenses",s.id);N&&await _(()=>Cn({...N,attachmentIds:(N.attachmentIds||[]).filter(ee=>ee!==Q)}))}async function G(){if(b){o("ai");try{let L=await zu(b),Q=L.fields;i(N=>({...N,...Q,currency:Q.currency||N.currency,fx:null,ai:{status:"done",at:ne(),model:w.settings.aiModel,uncertain:L.uncertain,warnings:L.warnings}})),u(N=>N+1),U("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(L){ya(L)}o("")}}async function E(){let L=y("expenses",s.id),Q=new Set(L?L.attachmentIds||[]:[]);for(let N of m.current)Q.has(N)||await Gr(N).catch(()=>{});t()}async function A(){o("save");let L=await _(()=>Cn({...s,status:"booked"}));o(""),L&&(U(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function x(){if(!await ue({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Pc(s.id),!0))&&(U("Ausgabe gelöscht","good"),t())}let R=L=>g.has(L)?"Von der KI als unsicher markiert – bitte prüfen":"",M=s.fx?xt(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,T=w.settings.expenseCategories||[],z=w.settings.paymentMethods||[];return l`<${Pe} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${E} size="xl" onSubmit=${A}
    footer=${l`
      ${!n&&l`<${I} variant="ghost" icon="trash" onClick=${x} class="push-left">Löschen<//>`}
      <${I} onClick=${E}>Abbrechen<//>
      <${I} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${b?l`<${Es} attachmentId=${b} />
              <div class="receipt-actions">
                <${I} small icon="sparkle" busy=${r==="ai"} disabled=${!w.settings.aiApiKey} onClick=${G}
                  title=${w.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${I} small variant="ghost" icon="trash" onClick=${B}>Beleg entfernen<//>
              </div>
              ${!w.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>f.current&&f.current.click()}>
              <${W} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${f} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${L=>{k(L.target.files[0]),L.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${v.status==="done"&&l`<${xe} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(v.warnings||[]).length>0&&l`<ul class="notice-list">${v.warnings.map(L=>l`<li>${L}</li>`)}</ul>`}
        <//>`}
        ${v.status==="error"&&l`<${xe} tone="warn">Automatisches Auslesen fehlgeschlagen: ${v.message}<//>`}
        <div class="form-grid">
          <${se} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${h("companyId")} placeholder="Unternehmen wählen"
            options=${re().map(L=>({id:L.id,label:L.name}))} />
          <${se} class="span-3" label="Kategorie" value=${s.category} onChange=${h("category")} placeholder="Keine"
            options=${T.includes(s.category)||!s.category?T:[...T,s.category]} hint=${R("category")} />
          <${V} class="span-4" label="Lieferant" value=${s.vendor} onInput=${h("vendor")} hint=${R("vendor")} />
          <${V} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${h("invoiceNumber")} hint=${R("invoice_number")} />
          <${V} class="span-6" label="Beschreibung" value=${s.description} onInput=${h("description")} />
          <${_e} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${h("invoiceDate")} hint=${R("invoice_date")} />
          <${_e} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${h("paymentDate")} hint=${R("payment_date")} />
          <${se} class="span-2" label="Währung" value=${s.currency} hint=${R("currency")}
            onChange=${L=>i(Q=>({...Q,currency:L,fx:null}))} options=${js} />
          <${Me} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${L=>C("netCents",L)} hint=${R("net_amount")} />
          <${Me} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${L=>C("taxCents",L)} hint=${R("tax_amount")} />
          <${Me} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${L=>C("totalCents",L)}
            hint=${R("total_amount")||(M!=null&&s.currency!=="USD"?`≈ ${j(M,"USD")}`:"")} />
          <${se} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${h("paymentMethod")} placeholder="Keine Angabe"
            options=${z.includes(s.paymentMethod)||!s.paymentMethod?z:[...z,s.paymentMethod]} />
          <${we} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${F(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${Ge} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${L=>S("rateToUSD",L)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${Ge} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${L=>S("usdToEur",L)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${ie} class="span-6" label="Notiz" value=${s.note} onInput=${h("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function Pu(){ge();let e=Rp(),[t,n]=D(""),[a,s]=D(""),[i,r]=D("year"),[o,c]=D(null),[p,d]=D(!1),[u,m]=D(0),f=ve(null),h=!de(),b=q(),v=Se(()=>w.expenses.filter(x=>Oe(x)||!x.companyId&&x.status==="review"),[w.version,w.settings.activeCompany]),g=v.filter(x=>x.status==="review").sort((x,R)=>x.createdAt<R.createdAt?1:-1),$=wt(i,b),C=v.filter(x=>x.status==="booked"),S=C.filter(x=>i==="all"||nn(x.invoiceDate,$)).filter(x=>!a||x.category===a).filter(x=>Ne(t,x.vendor,x.description,x.invoiceNumber,x.category,x.note,(x.totalCents/100).toFixed(2),(x.totalCents/100).toFixed(2).replace(".",","))),k=[...new Set(C.map(x=>x.category).filter(Boolean))].sort((x,R)=>x.localeCompare(R,"de")),B=S.reduce((x,R)=>(x.net+=ct(R.netCents,R.currency,R.fx)||0,x.tax+=ct(R.taxCents,R.currency,R.fx)||0,x.total+=ct(R.totalCents,R.currency,R.fx)||0,x),{net:0,tax:0,total:0});async function G(x){let R=[...x];if(!R.length)return;if(!re().length){U("Lege zuerst ein Unternehmen an.","bad");return}m(T=>T+R.length);let M=0;for(let T of R)try{await Mp(T),M+=1}catch(z){ya(z)}finally{m(z=>z-1)}M&&U(M===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${M} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let E=[{key:"date",label:"Datum",sort:x=>x.invoiceDate,render:x=>F(x.invoiceDate)},{key:"vendor",label:"Lieferant",sort:x=>x.vendor,render:x=>l`<div class="cell-main">${x.vendor}</div>${x.description&&l`<div class="cell-sub clamp-1">${x.description}</div>`}`},{key:"category",label:"Kategorie",sort:x=>x.category,render:x=>x.category||l`<span class="muted-text">–</span>`},...h?[{key:"company",label:"Unternehmen",render:x=>l`<${Le} id=${x.companyId} />`}]:[],{key:"file",label:"Beleg",render:x=>(x.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${W} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:x=>ct(x.netCents,x.currency,x.fx)||0,render:x=>j(x.netCents,x.currency)},{key:"tax",label:"Steuer",align:"right",render:x=>x.taxCents?j(x.taxCents,x.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:x=>ct(x.totalCents,x.currency,x.fx)||0,render:x=>l`<span class="dual"><span class="dual-main">${j(x.totalCents,x.currency)}</span>
        ${x.currency!==oe()&&ct(x.totalCents,x.currency,x.fx)!=null&&l`<span class="dual-sub">≈ ${ae(ct(x.totalCents,x.currency,x.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:x=>x.paymentDate||"",render:x=>x.paymentDate?F(x.paymentDate):l`<span class="muted-text">offen</span>`}],A=S.length?[`${S.length} ${S.length===1?"Ausgabe":"Ausgaben"}`,"","",...h?[""]:[],"",l`<span class="strong">${ae(B.net)}</span>`,l`<span class="strong">${ae(B.tax)}</span>`,l`<span class="strong">${ae(B.total)}</span>`,l`<span class="muted-text">in ${oe()}</span>`]:null;return l`
    <${ke} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${I} icon="plus" onClick=${()=>c(Ya())}>Ausgabe von Hand<//>
      <${I} variant="primary" icon="upload" onClick=${()=>f.current&&f.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${p?" is-drag":""}`}
      onDragOver=${x=>{x.preventDefault(),d(!0)}}
      onDragLeave=${()=>d(!1)}
      onDrop=${x=>{x.preventDefault(),d(!1),G(x.dataTransfer.files)}}>
      <${W} name="upload" size=${24} />
      <div>
        <strong>${u>0?`${u} ${u===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${w.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${f} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${x=>{G(x.target.files),x.target.value=""}} />
    </div>

    ${g.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${g.length}</span></h2>
      <ul class="review-list">
        ${g.map(x=>{let R=e.has(x.id),M=x.ai||{};return l`<li key=${x.id}>
            <button type="button" class="review-item" onClick=${()=>c(x)} disabled=${R}>
              <span class="review-icon"><${W} name=${R?"refresh":"file"} class=${R?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${x.vendor||(y("attachments",(x.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${R?"Wird ausgelesen …":M.status==="error"?`Nicht ausgelesen: ${M.message}`:M.status==="done"?`${x.invoiceDate?F(x.invoiceDate):"Datum fehlt"}, ${x.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${x.totalCents?j(x.totalCents,x.currency):""}</span>
              <span class="review-go">${R?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${C.length>0&&l`<div class="filters">
      <${ht} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${x=>r(x.target.value)}>
        ${Mn.filter(x=>x.id!=="custom").map(x=>l`<option value=${x.id}>${x.label}</option>`)}
      </select>
      ${k.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${x=>s(x.target.value)}>
        <option value="">Alle Kategorien</option>
        ${k.map(x=>l`<option value=${x}>${x}</option>`)}
      </select>`}
    </div>`}
    ${(C.length>0||g.length===0)&&l`<${et} columns=${E} rows=${S} initialSort=${{key:"date",dir:"desc"}} footer=${A} onRowClick=${x=>c(x)}
      empty=${C.length?l`<${pe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${pe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${_p} expense=${o} onClose=${()=>c(null)} />`}
  `}var Ku={...ha,ending:{label:"Endet bald",tone:"warn"},expired:{label:"Ende überschritten",tone:"bad"}},Ou={monthly:"Monatlich",quarterly:"Quartalsweise",semiannual:"Halbjährlich",yearly:"Jährlich"};function Fi({contract:e}){let t=Ku[Mi(e,q())]||ha.open;return l`<${ze} tone=${t.tone}>${t.label}<//>`}function Fu(e){return ss(e,t=>j(t,e.currency))}function ho(e){let t=w.invoices.filter(i=>i.contractId===e.id&&i.type!=="credit_note"),n=t.filter(i=>i.contractPart==="once"||i.contractPart==="all"||!i.contractPart&&!i.recurringId),a=w.recurring.filter(i=>i.contractId===e.id);return{invoices:t,onceInvoices:n,templates:a,templateFor:i=>a.filter(r=>(r.contractInterval||r.interval)===i)}}function Ns(e){return!e.startDate&&!e.endDate?"":e.startDate&&!e.endDate?`ab ${F(e.startDate)}, unbefristet`:e.startDate?`${F(e.startDate)} – ${F(e.endDate)}`:`bis ${F(e.endDate)}`}var zp=async(e,t)=>{try{return await Yn(e,$e(t)?t:q())}catch{return null}};function qu(e){return w.customers.filter(t=>t.active!==!1||t.id===e).sort((t,n)=>Z(t).localeCompare(Z(n),"de")).map(t=>({id:t.id,label:Z(t),sub:[t.number,t.city].filter(Boolean).join(", ")}))}function Vu(e){if(bt())return y("companies",bt());let t=[...w.invoices,...w.quotes].filter(n=>n.customerId===e).sort((n,a)=>(n.issueDate||"")<(a.issueDate||"")?1:-1);return t[0]&&y("companies",t[0].companyId)||de()||re()[0]||null}async function $o(e){let t=y("attachments",e),n=await Ua(e);if(!n)throw new Error("Die Datei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).");Xe(n,t?t.name:"Dokument.pdf")}function sa(e=""){let t=e?Vu(e):de()||(re().length===1?re()[0]:null),n=e?y("customers",e):null;return Sl(t,{customerId:e,...n&&n.currency&&Ae.includes(n.currency)?{currency:n.currency}:{},...n&&n.language?{language:n.language}:{}})}function Ts(e){let t=y("companies",e.companyId),n=(e.items||[]).find(a=>!a.isText);return Kn(t,{customerId:e.customerId,title:e.title||(n?n.name:""),items:ci(e,a=>y("services",a)),currency:e.currency,quoteId:e.id})}function qi(e){let t=q(),n=new Set(w.contracts.map(s=>s.quoteId).filter(Boolean)),a=w.quotes.filter(s=>s.customerId===e&&["accepted","invoiced"].includes(Pt(s,t))&&!n.has(s.id)).sort((s,i)=>(s.issueDate||"")<(i.issueDate||"")?1:-1)[0];return a?Ts(a):Kn(Vu(e),{customerId:e})}function Pp(e,t){let n=y("companies",e.companyId),a=y("customers",e.customerId),s=e.startDate&&e.startDate>q()?e.startDate:q(),i=Dn(e).intervalIds.length>1;return bn(n,{name:`${e.title} – ${Z(a)}${i?` (${Ou[t].toLowerCase()})`:""}`,customerId:e.customerId,interval:t,startDate:s,nextDate:s,endDate:e.endDate||"",currency:e.currency,...a&&a.language?{language:a.language}:{},...a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?{paymentTermDays:Number(a.paymentTermDays)}:{},items:is(e,t),contractId:e.id,contractInterval:t})}function Zu({multiple:e,onFiles:t,label:n,sub:a}){let s=ve(null),[i,r]=D(!1);async function o(c){let p=[];for(let d of c)try{p.push(await $u(d))}catch(u){U(u.message,"bad",7e3)}p.length&&t(e?p:p.slice(0,1))}return l`<div class=${`dropzone pdf-drop${i?" is-drag":""}`} role="button" tabindex="0"
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
  </div>`}function Gu({ids:e,onRemove:t,preview:n,setPreview:a}){return e.length?l`<ul class="file-list">
    ${e.map(s=>{let i=y("attachments",s);return l`<li key=${s}>
        <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${i?i.name:"Datei fehlt"}</span>
          ${i&&l`<span class="muted-text">${Vt(i.size)}</span>`}</span>
        <span class="file-actions">
          <button type="button" class="link-btn" onClick=${()=>a(n===s?"":s)}>${n===s?"Ausblenden":"Ansehen"}</button>
          <button type="button" class="link-btn" onClick=${()=>_(()=>$o(s))}>Herunterladen</button>
          ${t&&l`<button type="button" class="link-btn tone-bad" onClick=${()=>t(s)}>Entfernen</button>`}
        </span>
      </li>`})}
  </ul>
  ${n&&e.includes(n)&&l`<div class="file-preview"><${Es} attachmentId=${n} /></div>`}`:null}function Hu({files:e,onRemove:t}){return e.length?l`<ul class="file-list is-new">
    ${e.map((n,a)=>l`<li key=${a}>
      <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${n.name}</span>
        <span class="muted-text">${Vt(n.blob.size)} · wird beim Speichern hochgeladen</span></span>
      <span class="file-actions"><button type="button" class="link-btn tone-bad" onClick=${()=>t(a)}>Entfernen</button></span>
    </li>`)}
  </ul>`:null}var Lp=["open","sent","accepted","declined"].map(e=>({id:e,label:ua[e].label}));function As({quote:e,onClose:t,onSaved:n}){let a=!y("quotes",e.id),s=(e.items||[])[0],[i,r]=D(()=>ye(e)),[o,c]=D(s?s.priceCents:null),[p,d]=D(()=>{if(s)return Number(s.taxRate)||0;let E=y("companies",e.companyId);return E&&Number(E.defaultTaxRate)||0}),[u,m]=D(null),[f,h]=D(""),[b,v]=D(!1),g=E=>A=>r(x=>({...x,[E]:A})),$=i.status==="invoiced",C=pt({items:[jt({priceCents:o||0,taxRate:p})],discount:null});function S(E){let A=y("companies",E);r(x=>({...x,companyId:E,...A&&a?{currency:x.customerId&&y("customers",x.customerId)&&y("customers",x.customerId).currency?x.currency:A.currency}:{}})),A&&a&&d(Number(A.defaultTaxRate)||0)}function k(E){let A=y("customers",E);r(x=>({...x,customerId:E,...A&&A.currency&&Ae.includes(A.currency)?{currency:A.currency}:{},...A&&A.language?{language:A.language}:{}}))}async function B(){if(o==null){U("Bitte den Betrag des Angebots eintragen.","bad");return}v(!0);let E=y("quotes",i.id),x=!i.fx||!E||E.currency!==i.currency||E.issueDate!==i.issueDate?await zp(i.currency,i.issueDate):i.fx,R={...i,fx:x,items:[jt({...s?{id:s.id}:{},name:i.title,qty:1,unit:"Pauschale",priceCents:o,taxRate:p})]},M=await _(()=>Mc(R,u));v(!1),M&&(U(a?`Angebot „${M.title}“ hochgeladen`:"Angebot gespeichert","good"),t(),n&&n(M))}let G=i.attachmentIds||[];return l`<${Pe} title=${a?"Angebot hochladen (PDF)":"Hochgeladenes Angebot bearbeiten"} size="lg" onClose=${t} onSubmit=${B}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${b}>${a?"Hochladen":"Speichern"}<//>`}>
    <p class="modal-lead">Für Angebote, die du mit einem anderen Programm gestaltet hast – auch ältere. Das PDF bleibt unverändert,
      das Tool merkt sich Kontakt, Betrag und Status. Es bekommt keine Nummer aus deinem Nummernkreis.</p>
    ${u?l`<${Hu} files=${[u]} onRemove=${()=>m(null)} />`:l`<${Gu} ids=${G} preview=${f} setPreview=${h} />`}
    <${Zu} label=${u||G.length?"Anderes PDF wählen":"PDF des Angebots auswählen"} onFiles=${E=>m(E[0])} />
    <div class="form-grid">
      <${se} class="span-3" label="Unternehmen" value=${i.companyId} onChange=${S} placeholder="Unternehmen wählen"
        options=${re().map(E=>({id:E.id,label:E.name}))} />
      <${we} class="span-3" label="Kontakt" htmlFor="uq-customer">
        <${ft} id="uq-customer" options=${qu(i.customerId)} value=${i.customerId} placeholder="Kontakt suchen" onChange=${k} />
      <//>
      <${V} class="span-4" label="Bezeichnung" value=${i.title} onInput=${g("title")} placeholder="z. B. Website-Relaunch mit SEO-Paket" />
      <${V} class="span-2" label="Nummer im Dokument" hint="optional" value=${i.refNumber} onInput=${g("refNumber")} />
      <${_e} class="span-2" label="Angebotsdatum" value=${i.issueDate} onInput=${g("issueDate")} />
      <${_e} class="span-2" label="Gültig bis" hint="optional" value=${i.validUntil} onInput=${g("validUntil")} />
      <${se} class="span-2" label="Status" value=${$?"invoiced":i.status} onChange=${g("status")} disabled=${$}
        options=${$?[{id:"invoiced",label:"Abgerechnet"}]:Lp} />
      <${Me} class="span-2" label="Betrag netto" mode="money" value=${o} allowEmpty onChange=${c} />
      <${Me} class="span-2" label="Steuersatz" value=${p} digits=${2} min=${0} max=${100} suffix="%" onChange=${d} />
      <${se} class="span-2" label="Währung" value=${i.currency} onChange=${g("currency")} options=${Ae} />
      <div class="span-6 upload-sum">Gesamt laut Angaben: <strong>${j(C.totalCents,i.currency)}</strong>${C.taxCents?` (davon Steuer ${j(C.taxCents,i.currency)})`:""}</div>
      <${ie} class="span-6" label="Interne Notiz" value=${i.internalNotes} onInput=${g("internalNotes")} rows=${2} />
    </div>
  <//>`}function Kp({items:e,onChange:t,companyId:n,currency:a}){let s=y("companies",n),i=w.services.filter(u=>u.active!==!1&&(!u.companyId||u.companyId===n)).sort((u,m)=>u.name.localeCompare(m.name,"de")).map(u=>({id:u.id,label:u.name,search:`${u.code||""} ${u.internalName||""} ${u.category||""} ${u.tier?kt[u.tier].label:""}`,sub:[u.tier?kt[u.tier].label:"",u.code,`${j(u.priceCents,u.currency)} je ${u.unit}`,u.recurring?"laufend":"einmalig"].filter(Boolean).join(" · ")})),r=(u,m)=>t(e.map(f=>f.id===u?{...f,...m}:f)),o=u=>t(e.filter(m=>m.id!==u)),c=(u="once")=>t([...e,jn({billing:u,unit:$t[u]||"Pauschal",taxRate:s&&Number(s.defaultTaxRate)||0})]);function p(u,m){let f=y("services",m);f&&(f.currency&&f.currency!==a&&U(`„${f.name}“ ist in ${f.currency} hinterlegt, der Vertrag in ${a}. Bitte den Preis prüfen.`,"info",7e3),r(u,{serviceId:f.id,name:f.name,description:f.invoiceText||"",qty:Number(f.defaultQty)||1,unit:f.unit||"Pauschal",priceCents:f.priceCents||0,taxRate:f.taxRate!=null&&f.taxRate!==""?Number(f.taxRate):s&&Number(s.defaultTaxRate)||0,billing:Er(f)}))}let d=Dn({items:e});return l`<div class="items ct-items">
    ${e.map((u,m)=>l`<div class=${`item ct-item${as(u.billing)?" is-recurring":""}`} key=${u.id}>
      <div class="item-top">
        <span class="item-pos">${m+1}</span>
        <div class="item-name">
          <${ft} freeText options=${i} text=${u.name} label=${`Vertragsposition ${m+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${f=>r(u.id,{name:f,serviceId:u.serviceId&&y("services",u.serviceId)&&y("services",u.serviceId).name===f?u.serviceId:""})}
            onChange=${f=>p(u.id,f)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Vertragsposition ${m+1} entfernen`} onClick=${()=>o(u.id)}><${W} name="trash" size=${15} /></button>
        </div>
      </div>
      <div class="item-fields">
        <label class="item-field ct-billing"><span>Abrechnung</span>
          <select class="input select" value=${u.billing} aria-label=${`Vertragsposition ${m+1}: Abrechnung`}
            onChange=${f=>{let h=f.target.value;r(u.id,{billing:h,...$t[h]&&(!u.unit||u.unit==="Pauschal"||Object.values($t).includes(u.unit))?{unit:$t[h]}:!$t[h]&&Object.values($t).includes(u.unit)?{unit:"Pauschal"}:{}})}}>
            ${Ir.map(f=>l`<option value=${f.id} selected=${f.id===u.billing}>${f.label}</option>`)}
          </select></label>
        <label class="item-field"><span>Menge</span>
          <${Ge} value=${u.qty} digits=${3} onChange=${f=>r(u.id,{qty:f})} aria-label=${`Vertragsposition ${m+1}: Menge`} /></label>
        <label class="item-field"><span>Einzelpreis netto</span>
          <${Ge} mode="money" value=${u.priceCents} onChange=${f=>r(u.id,{priceCents:f})} aria-label=${`Vertragsposition ${m+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${Ge} value=${u.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${f=>r(u.id,{taxRate:f})} aria-label=${`Vertragsposition ${m+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${j(Sa(u),a)}${$t[u.billing]?l`<small>${" / "}${$t[u.billing]}</small>`:""}</strong></div>
      </div>
    </div>`)}
    ${!e.length&&l`<p class="muted-text ct-empty">Noch keine Positionen. Lege z. B. die Website als einmalige Position und den Website-Service als monatliche Position an.</p>`}
    <div class="items-foot">
      <${I} icon="plus" onClick=${()=>c("once")}>Einmalige Position<//>
      <${I} icon="repeat" onClick=${()=>c("monthly")}>Laufende Position<//>
      ${e.length>0&&l`<span class="ct-sums">${ss({items:e},u=>j(u,a))} <span class="muted-text">netto</span></span>`}
    </div>
  </div>`}function Op({c:e,sums:t,billing:n,busy:a,onOnce:s,onInterval:i,onClose:r}){return!t.hasOnce&&!t.intervalIds.length?null:l`<div class="ct-billing-box">
    ${t.hasOnce&&l`<div class="ct-bill-row">
      <div><strong>Einmalig</strong> · ${j(t.once,e.currency)} netto
        ${n.onceInvoices.length>0&&l`<div class="cell-sub">Abgerechnet: ${n.onceInvoices.map((o,c)=>l`${c?", ":""}<a href=${`#/invoices/${o.id}${o.status==="draft"?"/edit":""}`} onClick=${r}>${o.number||"Entwurf"}</a>`)}</div>`}
      </div>
      <${I} small icon="invoice" busy=${a==="once"} onClick=${s}>${n.onceInvoices.length?"Weitere Rechnung":"Rechnung erstellen"}<//>
    </div>`}
    ${t.intervalIds.map(o=>{let c=n.templateFor(o);return l`<div class="ct-bill-row" key=${o}>
        <div><strong>${Ou[o]}</strong> · ${j(t.intervals[o],e.currency)} netto / ${$t[o]}
          ${c.length>0&&l`<div class="cell-sub">Vorlage ${c.map((p,d)=>l`${d?", ":""}<a href="#/recurring" onClick=${r}>„${p.name}“</a> ${p.active?`– nächste Rechnung ${F(p.nextDate)}`:"– pausiert oder beendet"}`)}</div>`}
        </div>
        <${I} small icon="repeat" busy=${a===o} onClick=${()=>i(o)}>${c.length?"Weitere Vorlage":"Wiederkehrende Rechnung anlegen"}<//>
      </div>`})}
  </div>`}function Rs({contract:e,onClose:t}){ge();let n=!y("contracts",e.id),[a,s]=D(()=>{let T=ye(e);return T.items=Wn(e).map(z=>({...z})),T}),[i,r]=D([]),[o,c]=D([]),[p,d]=D(""),[u,m]=D(""),[f,h]=D(null),b=T=>z=>s(L=>({...L,[T]:z}));if(f)return l`<${po} rec=${f} onClose=${t} />`;let v=w.quotes.filter(T=>T.customerId===a.customerId&&T.status!=="draft").sort((T,z)=>(T.issueDate||"")<(z.issueDate||"")?1:-1),g=n?[]:w.invoices.filter(T=>T.contractId===a.id).sort((T,z)=>(T.issueDate||"")<(z.issueDate||"")?1:-1),$=n?[]:w.recurring.filter(T=>T.contractId===a.id),C=(a.attachmentIds||[]).filter(T=>!o.includes(T));function S(T){let z=y("companies",T);s(L=>({...L,companyId:T,...z&&n&&!(L.items||[]).length?{currency:z.currency}:{}}))}function k(T){let z=y("quotes",T);if(!z){s(Q=>({...Q,quoteId:""}));return}let L=Ts(z);s(Q=>({...Q,quoteId:T,companyId:Q.companyId||L.companyId,title:Q.title||L.title,...(Q.items||[]).length?{}:{items:L.items,currency:L.currency}}))}async function B(){let T=await _(()=>ms(a,{files:i,removeIds:o}));return T?(s(ye(T)),r([]),c([]),T):null}async function G(){m("save");let T=await B();m(""),T&&(U(n?`Vertrag „${T.title}“ angelegt`:"Vertrag gespeichert","good"),t())}async function E(){m("once");let T=await B();m(""),T&&(t(),J(`/invoices/new?contract=${T.id}&part=once`))}async function A(T){m(T);let z=await B();m(""),z&&h(Pp(z,T))}async function x(){let T=g.length+$.length;if(!await ue({title:"Vertrag löschen?",text:`„${a.title}“ wird samt ${C.length===1?"PDF":`${C.length} PDFs`} gelöscht.${T?" Verknüpfte Rechnungen und Vorlagen bleiben erhalten.":""}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await zc(a.id),!0))&&(U("Vertrag gelöscht","good"),t())}let R=Dn(a),M=n?{invoices:[],onceInvoices:[],templates:[],templateFor:()=>[]}:ho(a);return l`<${Pe} title=${n?"Neuer Vertrag":"Vertrag"} size="xl" onClose=${t} onSubmit=${G}
    footer=${l`
      ${!n&&l`<${I} variant="ghost" icon="trash" class="push-left" onClick=${x}>Löschen<//>`}
      <${I} onClick=${t}>Abbrechen<//>
      <${I} variant="primary" type="submit" busy=${u==="save"}>Speichern<//>`}>
    <div class="form-grid">
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${S} placeholder="Unternehmen wählen"
        options=${re().map(T=>({id:T.id,label:T.name}))} />
      <${we} class="span-3" label="Kontakt" htmlFor="ct-customer">
        <${ft} id="ct-customer" options=${qu(a.customerId)} value=${a.customerId} placeholder="Kontakt suchen"
          onChange=${T=>s(z=>({...z,customerId:T,quoteId:z.customerId===T?z.quoteId:""}))} />
      <//>
      <${V} class="span-4" label="Bezeichnung" value=${a.title} onInput=${b("title")} placeholder="z. B. SEO-Betreuung 12 Monate" />
      <${V} class="span-2" label="Vertragsnummer" hint="optional" value=${a.refNumber} onInput=${b("refNumber")} />
      <${se} class="span-2" label="Status" value=${a.status} onChange=${b("status")}
        options=${Object.entries(ha).map(([T,z])=>({id:T,label:z.label}))} />
      <${_e} class="span-2" label="Unterschrieben am" value=${a.signedDate} onInput=${b("signedDate")} />
      <${se} class="span-2" label="Aus Angebot" value=${a.quoteId} onChange=${k} placeholder=${v.length?"Kein Angebot":"Keine Angebote vorhanden"}
        options=${v.map(T=>({id:T.id,label:`${Qe(T)} · ${F(T.issueDate)} · ${j(T.totals?T.totals.totalCents:0,T.currency)}`}))} />
      <${_e} class="span-2" label="Beginn" value=${a.startDate} onInput=${b("startDate")} />
      <${_e} class="span-2" label="Ende" hint="leer = unbefristet" value=${a.endDate} onInput=${b("endDate")} min=${a.startDate||void 0} />
      <${V} class="span-2" label="Kündigungsfrist" hint="optional" value=${a.noticePeriod} onInput=${b("noticePeriod")} placeholder="z. B. 3 Monate zum Laufzeitende" />
      <${se} class="span-2" label="Währung" value=${a.currency} onChange=${b("currency")} options=${Ae} />
      <${ie} class="span-6" label="Notizen" value=${a.notes} onInput=${b("notes")} rows=${2} placeholder="z. B. Sonderkonditionen, Ansprechpartner, Verlängerung" />
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${Kp} items=${a.items||[]} onChange=${T=>s(z=>({...z,items:T}))} companyId=${a.companyId} currency=${a.currency} />
    ${a.status!=="declined"&&(R.hasOnce||R.intervalIds.length>0)&&l`<h3 class="sub-head">Abrechnen</h3>
      <${Op} c=${a} sums=${R} billing=${M} busy=${u} onOnce=${E} onInterval=${A} onClose=${t} />`}
    <h3 class="sub-head">Vertragsdokumente</h3>
    <${Gu} ids=${C} preview=${p} setPreview=${d} onRemove=${T=>c(z=>[...z,T])} />
    <${Hu} files=${i} onRemove=${T=>r(z=>z.filter((L,Q)=>Q!==T))} />
    ${o.length>0&&l`<p class="muted-text small">${o.length===1?"Ein PDF wird":`${o.length} PDFs werden`} beim Speichern entfernt.
      <button type="button" class="link-btn" onClick=${()=>c([])}>Rückgängig</button></p>`}
    <${Zu} multiple label="Vertrag als PDF hinzufügen" sub="Auch mehrere Dateien, z. B. Vertrag und Nachtrag" onFiles=${T=>r(z=>[...z,...T])} />
    ${g.length>0&&l`<h3 class="sub-head">Rechnungen zu diesem Vertrag</h3>
      <ul class="plain-list linked-list">
        ${g.map(T=>l`<li key=${T.id}><${W} name=${T.contractPart&&T.contractPart!=="once"&&T.contractPart!=="all"?"repeat":"invoice"} size=${14} />
          <a href=${`#/invoices/${T.id}${T.status==="draft"?"/edit":""}`} onClick=${t}>${T.number||"Entwurf"}</a>
          <span class="muted-text">${F(T.issueDate)}</span> <${Kt} doc=${T} /> <${In} inv=${T} /></li>`)}
      </ul>`}
  <//>`}var Lu=[{id:"all",label:"Alle",test:()=>!0},{id:"open",label:"Offen",test:e=>e==="open"},{id:"running",label:"Laufend",test:e=>e==="signed"||e==="ending"||e==="expired"},{id:"ending",label:"Endet bald",test:e=>e==="ending"||e==="expired"},{id:"closed",label:"Beendet",test:e=>e==="ended"||e==="declined"}];function ju({params:e={}}){ge();let[t,n]=D(""),[a,s]=D("all"),[i,r]=D(()=>e.open&&y("contracts",e.open)||null),o=q(),c=!de(),p=Se(()=>w.contracts.filter(Oe).map(h=>({c:h,s:Mi(h,o)})),[w.version,w.settings.activeCompany]),d=p.filter(h=>Lu.find(b=>b.id===a).test(h.s)).filter(h=>Ne(t,h.c.title,h.c.refNumber,Z(y("customers",h.c.customerId)),h.c.notes)),u=p.filter(h=>h.s==="ending"||h.s==="expired").length,m=[{key:"title",label:"Vertrag",sort:h=>h.c.title,render:h=>l`<div class="cell-main">${h.c.title}</div>${h.c.refNumber&&l`<div class="cell-sub">${h.c.refNumber}</div>`}`},{key:"customer",label:"Kontakt",sort:h=>Z(y("customers",h.c.customerId)),render:h=>Z(y("customers",h.c.customerId))||"–"},...c?[{key:"company",label:"Unternehmen",render:h=>l`<${Le} id=${h.c.companyId} />`}]:[],{key:"term",label:"Laufzeit",sort:h=>h.c.endDate||h.c.startDate||"",render:h=>Ns(h.c)||l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag netto",align:"right",sort:h=>{let b=Dn(h.c);return b.once+Object.values(b.intervals).reduce((v,g)=>v+g,0)},render:h=>Fu(h.c)||l`<span class="muted-text">–</span>`},{key:"files",label:"PDF",align:"right",render:h=>(h.c.attachmentIds||[]).length?l`<span class="file-count" title="Vertragsdokumente"><${W} name="file" size=${14} />${h.c.attachmentIds.length}</span>`:""},{key:"status",label:"Status",sort:h=>h.s,render:h=>l`<${Fi} contract=${h.c} />`}],f=()=>r(Kn(de()||(re().length===1?re()[0]:null)));return l`
    <${ke} title="Verträge" sub="Welcher Kontakt hat welchen Vertrag – mit PDF, Laufzeit und Abrechnung.">
      <${I} variant="primary" icon="plus" onClick=${f}>Neuer Vertrag<//>
    <//>
    ${u>0&&l`<${xe} tone="warn">${u===1?"Ein Vertrag endet":`${u} Verträge enden`} in den nächsten 60 Tagen oder ${u===1?"hat":"haben"} das Enddatum überschritten.<//>`}
    ${w.contracts.length>0&&l`<div class="filters">
      <${ht} value=${t} onInput=${n} placeholder="Vertrag, Nummer, Kontakt" />
      <${gt} label="Status" value=${a} onChange=${s}
        options=${Lu.map(h=>({id:h.id,label:h.label,count:p.filter(b=>h.test(b.s)).length}))} />
    </div>`}
    <${et} columns=${m} rows=${d} rowKey=${h=>h.c.id} initialSort=${{key:"term",dir:"desc"}} onRowClick=${h=>r(h.c)}
      empty=${w.contracts.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Vertrag." />`:l`<${pe} icon="file" title="Noch keine Verträge" text="Lege Verträge mit PDF, Laufzeit und Betrag an – auch ältere. Aus einem Vertrag wird mit einem Klick die Rechnung oder eine wiederkehrende Abrechnung.">
            <${I} variant="primary" icon="plus" onClick=${f}>Ersten Vertrag anlegen<//>
          <//>`} />
    ${i&&l`<${Rs} key=${i.id} contract=${i} onClose=${()=>r(null)} />`}
  `}var Fp={done:"Erledigt",active:"Läuft",todo:"Offen",skipped:"Nicht erfasst"};function Wu({customerId:e,on:t}){let n=q(),{steps:a,current:s}=wu({appointments:w.appointments,quotes:w.quotes,contracts:w.contracts,invoices:w.invoices},e,n),[i,r,o,c]=a,p=w.contracts.filter(f=>f.customerId===e&&f.status==="signed"),d=p.find(f=>Dn(f).hasOnce&&!ho(f).onceInvoices.length),u=p.find(f=>Dn(f).intervalIds.some(h=>!ho(f).templateFor(h).length)),m={meeting:l`
      ${i.next&&l`<p>Nächster Termin: <strong>${F(i.next.date)}, ${i.next.start} Uhr</strong></p>`}
      ${i.last&&l`<p class="muted-text">Zuletzt ${F(i.last.date)}${i.count>1?` · ${i.count} Termine`:""}</p>`}
      ${!i.next&&!i.last&&l`<p class="muted-text">Noch kein Termin.</p>`}
      <div class="flow-actions"><${I} small icon="calendar" onClick=${t.appointment}>Termin planen<//></div>`,quote:l`
      ${r.latest?l`<p><a href=${`#/quotes/${r.latest.id}`}>${Qe(r.latest)}</a>${r.latest.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}${" · "}${(ua[r.latestStatus]||{}).label||""}</p>
          <p class="muted-text">${F(r.latest.issueDate)} · ${j(r.latest.totals?r.latest.totals.totalCents:0,r.latest.currency)}${r.count>1?` · ${r.count} Angebote`:""}</p>`:l`<p class="muted-text">${r.drafts?`${r.drafts} ${r.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch kein Angebot."}</p>`}
      <div class="flow-actions">
        <${I} small icon="quote" onClick=${()=>J(`/quotes/new?customer=${e}`)}>Schreiben<//>
        <${I} small icon="upload" onClick=${t.uploadQuote}>PDF hochladen<//>
      </div>`,contract:l`
      ${o.latest?l`<p><button type="button" class="link-btn" onClick=${()=>t.openContract(o.latest)}>${o.latest.title}</button>${" · "}${(Ku[Mi(o.latest,n)]||{}).label}</p>
          <p class="muted-text">${[Ns(o.latest),o.count>1?`${o.count} Verträge`:""].filter(Boolean).join(" · ")||" "}</p>`:l`<p class="muted-text">Noch kein Vertrag.</p>`}
      <div class="flow-actions"><${I} small icon="file" onClick=${()=>t.contract(qi(e))}>Vertrag anlegen<//></div>`,invoice:l`
      ${c.latest?l`<p><a href=${`#/invoices/${c.latest.id}`}>${c.latest.number}</a>${" "}<${In} inv=${c.latest} /></p>
          <p class="muted-text">${F(c.latest.issueDate)}${c.count>1?` · ${c.count} Rechnungen`:""}</p>`:l`<p class="muted-text">${c.drafts?`${c.drafts} ${c.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch keine Rechnung."}</p>`}
      <div class="flow-actions">
        ${d&&l`<${I} small variant="primary" icon="invoice" onClick=${()=>J(`/invoices/new?contract=${d.id}&part=once`)}>Aus Vertrag<//>`}
        ${u&&l`<${I} small icon="repeat" onClick=${()=>t.openContract(u)}>Laufend abrechnen<//>`}
        <${I} small icon="plus" onClick=${()=>J(`/invoices/new?customer=${e}`)}>Schreiben<//>
      </div>`};return l`<${X} title="Ablauf" class="flow-panel">
    <ol class="flow">
      ${a.map((f,h)=>l`<li key=${f.id} class=${`flow-step is-${f.state}${s===h?" is-current":""}`}>
        <div class="flow-head">
          <span class="flow-dot">${f.state==="done"?l`<${W} name="check" size=${13} />`:h+1}</span>
          <span class="flow-label">${f.label}</span>
          <span class="flow-state">${s===h?"Nächster Schritt":Fp[f.state]}</span>
        </div>
        <div class="flow-body">${m[f.id]}</div>
      </li>`)}
    </ol>
  <//>`}function Qu({customerId:e,onOpen:t}){let n=w.contracts.filter(s=>s.customerId===e).sort((s,i)=>(s.startDate||s.createdAt)<(i.startDate||i.createdAt)?1:-1);return l`<${et} columns=${[{key:"title",label:"Vertrag",render:s=>l`<span class="cell-main">${s.title}</span>${s.refNumber&&l`<div class="cell-sub">${s.refNumber}</div>`}`},{key:"company",label:"Unternehmen",render:s=>l`<${Le} id=${s.companyId} />`},{key:"term",label:"Laufzeit",render:s=>Ns(s)||"–"},{key:"amount",label:"Betrag netto",align:"right",render:s=>Fu(s)||"–"},{key:"files",label:"PDF",align:"right",render:s=>(s.attachmentIds||[]).length?l`<span class="file-count"><${W} name="file" size=${14} />${s.attachmentIds.length}</span>`:""},{key:"status",label:"Status",render:s=>l`<${Fi} contract=${s} />`}]} rows=${n} onRowClick=${t}
    empty=${l`<p class="panel-empty">Noch keine Verträge für diesen Kontakt.</p>`} />`}var Yu={company:"Unternehmen",firstName:"Vorname",lastName:"Nachname",street:"Straße",houseNo:"Hausnummer",zip:"PLZ",city:"Ort",region:"Region",country:"Land",email:"E-Mail",phone:"Telefon",website:"Website",taxId:"Steuer-ID",vatId:"USt-IdNr."};function qp({onApply:e}){let[t,n]=D(!1),[a,s]=D(""),[i,r]=D(""),[o,c]=D(""),p=!!w.settings.aiApiKey;async function d(){if(!a.trim()){U("Bitte zuerst den Text des Impressums einfügen.","info");return}c("text");let m=null;p&&(m=await _(()=>Jr({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,text:a}))),m||(m=ou(a)),c(""),e(m)}async function u(){let m=lu(i);if(!m){U("Bitte die Adresse des Impressums eintragen.","info");return}c("url");let f=await _(()=>Jr({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,url:m}));c(""),f&&e(f)}return t?l`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${I} variant="ghost" small icon="x" title="Schließen" onClick=${()=>n(!1)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${ie} class="span-6" label="Impressum einfügen" value=${a} onInput=${s} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${p?"Wird mit der KI ausgelesen (API-Key aus den Einstellungen).":"Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer."} />
      <div class="span-6"><${I} small variant="primary" busy=${o==="text"} onClick=${d}>Text auslesen<//></div>
      <${V} class="span-4" label="Oder Adresse des Impressums" value=${i} onInput=${r} placeholder="firma.de/impressum"
        hint=${p?"Die Seite wird über die Anthropic-API abgerufen und ausgelesen.":"Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen."} />
      <div class="span-2 field field-inline"><${I} small busy=${o==="url"} disabled=${!p} onClick=${u}>Von Website laden<//></div>
    </div>
  </div>`:l`<div class="imprint-open"><${I} small icon="sparkle" onClick=${()=>n(!0)}>Daten aus Impressum übernehmen<//></div>`}function _a({customer:e,onClose:t,onSaved:n}){let a=!e||!y("customers",e.id),[s,i]=D(()=>({...Gt(),...e||{}})),[r,o]=D((s.tags||[]).join(", ")),[c,p]=D(!1),d=$=>C=>i(S=>({...S,[$]:C})),u=y("customers",s.id),m=!a&&w.invoices.some($=>$.customerId===s.id),f=Re(s)?"customer":"contact",h=($,C)=>new RegExp(`^${$==="contact"?"KO":"K"}-\\d+$`).test(String(C||""));function b($){i(C=>{let S=Re(C)?"customer":"contact";return S===$?C:{...C,kind:$,number:h(S,C.number)?"":C.number}})}function v({fields:$,extra:C}){let S=[],k=[];i(B=>{let G={...B};for(let[A,x]of Object.entries($))x&&(String(B[A]||"").trim()?String(B[A]).trim()!==x&&k.push(Yu[A]||A):(G[A]=x,S.push(Yu[A]||A)));let E=(C||[]).filter(A=>!String(B.notes||"").includes(A));return E.length&&(G.notes=[String(B.notes||"").trim(),...E].filter(Boolean).join(`
`),S.push("Notizen")),G}),setTimeout(()=>{S.length?U(`Übernommen: ${S.join(", ")}${k.length?`. Nicht überschrieben: ${k.join(", ")}`:""}.`,"good",8e3):U(k.length?`Nichts übernommen – ${k.join(", ")} ist schon ausgefüllt.`:"Im Impressum wurden keine Kontaktdaten erkannt.","info",7e3)},0)}async function g(){p(!0);let $={...s,tags:r.split(",").map(S=>S.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},C=await _(()=>Xn($));p(!1),C&&(U(a?`${Re(C)?"Kunde":"Kontakt"} ${C.number} angelegt`:"Gespeichert","good"),n&&n(C),t())}return l`<${Pe} title=${a?"Neuer Kontakt":`${f==="customer"?"Kunde":"Kontakt"} bearbeiten`} onClose=${t} size="lg" onSubmit=${g}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${c}>Speichern<//>`}>
    <${qp} onApply=${v} />
    <div class="form-grid">
      <${we} class="span-6" label="Art">
        <div class="inline-controls">
          <${Dt} label="Art des Kontakts" value=${f} onChange=${b}
            options=${Dl.map($=>({...$,label:$.id==="contact"&&m?"Kontakt (nicht möglich – hat Rechnungen)":$.label}))} />
          <span class="field-hint">${f==="customer"?"Kunden erhalten Rechnungen. Nummer K-…":"Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden."}</span>
        </div>
      <//>
      <${V} class="span-4" label="Unternehmen" value=${s.company} onInput=${d("company")} />
      <${V} class="span-2" label="Nummer" value=${s.number} onInput=${d("number")}
        placeholder=${Sn(f,w.customers.filter($=>$.id!==s.id))}
        hint=${u&&u.number&&u.number!==s.number&&!s.number?`Bisher ${u.number}. Leer = neue Nummer`:"Leer lassen für automatische Nummer"} />
      <${V} class="span-3" label="Vorname" value=${s.firstName} onInput=${d("firstName")} />
      <${V} class="span-3" label="Nachname" value=${s.lastName} onInput=${d("lastName")} />
      <${V} class="span-6" label="Ansprechpartner (falls abweichend)" value=${s.contact} onInput=${d("contact")} />

      <${V} class="span-4" label="Straße" value=${s.street} onInput=${d("street")} />
      <${V} class="span-2" label="Hausnummer" value=${s.houseNo} onInput=${d("houseNo")} />
      <${V} class="span-2" label="PLZ" value=${s.zip} onInput=${d("zip")} />
      <${V} class="span-4" label="Ort" value=${s.city} onInput=${d("city")} />
      <${V} class="span-3" label="Bundesland / Region" value=${s.region} onInput=${d("region")} />
      <${V} class="span-3" label="Land" value=${s.country} onInput=${d("country")} />

      <${V} class="span-3" label="E-Mail" type="email" value=${s.email} onInput=${d("email")} />
      <${V} class="span-3" label="Telefon" value=${s.phone} onInput=${d("phone")} />
      <${V} class="span-6" label="Website" value=${s.website} onInput=${d("website")} />

      <${V} class="span-3" label="Steuer-ID" value=${s.taxId} onInput=${d("taxId")} />
      <${V} class="span-3" label="USt-IdNr. / VAT ID" value=${s.vatId} onInput=${d("vatId")} />

      <${se} class="span-2" label="Belegsprache" value=${s.language} onChange=${d("language")}
        placeholder="Wie Unternehmen" options=${Bt} />
      <${se} class="span-2" label="Währung" value=${s.currency} onChange=${d("currency")}
        placeholder="Wie Unternehmen" options=${Ae} />
      <${Me} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${d("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${V} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${ie} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${d("notes")} rows=${3} />
      <div class="span-6"><${je} label="Aktiv" checked=${s.active!==!1} onChange=${d("active")} /></div>
    </div>
  <//>`}function ed(e){let t=cn(),n=q(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of ut(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of An(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of w.payments){let r=y("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=xt(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=zt(i.amountCents,r.currency,r.fx)||0}return a}function td(){ge();let[e,t]=D(""),[n,a]=D("active"),[s,i]=D("all"),[r,o]=D(""),[c,p]=D(null),d=bt(),u=Se(()=>ed(d),[w.version,d]),m=!!c&&!y("customers",c.id),f=Se(()=>eo(cn(),{companyId:d}),[w.version,d]),h=Se(()=>[...new Set(w.customers.flatMap(g=>g.tags||[]))].sort((g,$)=>g.localeCompare($,"de")),[w.version]),b=w.customers.filter(g=>n==="active"&&g.active===!1||n==="inactive"&&g.active!==!1||s==="customer"&&!Re(g)||s==="contact"&&Re(g)||r&&!(g.tags||[]).includes(r)?!1:Ne(e,g.number,g.company,g.firstName,g.lastName,g.contact,g.city,g.country,g.email,(g.tags||[]).join(" "),(f.get(g.id)||[]).map($=>$.name).join(" "))),v=[{key:"number",label:"Nr.",sort:g=>g.number,width:"90px",render:g=>l`<span class="mono-num">${g.number}</span>`},{key:"name",label:"Name",sort:g=>Z(g),render:g=>l`<div class="cell-main">${Z(g)}</div>
        ${rt(g)&&rt(g)!==Z(g)&&l`<div class="cell-sub">${rt(g)}</div>`}`},{key:"kind",label:"Art",sort:g=>Re(g)?0:1,render:g=>l`<${ze} tone=${Re(g)?"info":"neutral"} icon=${Re(g)?"good":"customers"}>${Re(g)?"Kunde":"Kontakt"}<//>`},{key:"city",label:"Ort",sort:g=>g.city,render:g=>[g.city,g.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:g=>{let $=f.get(g.id)||[];return $.length?l`<div class="svc-tags">${$.slice(0,3).map(C=>l`<span class="tag" title=${C.running?"Läuft (wiederkehrende Vorlage)":""}>${C.running?"↻ ":""}${C.name}</span>`)}
          ${$.length>3&&l`<span class="tag muted-text">+${$.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:g=>(g.tags||[]).map($=>l`<span class="tag">${$}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:g=>P(u.get(g.id)),render:g=>{let $=u.get(g.id);return $&&P($)?ae(P($)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:g=>P(u.get(g.id),"open"),render:g=>{let $=u.get(g.id);return!$||!P($,"open")?l`<span class="muted-text">–</span>`:l`<span class=${P($,"overdue")?"tone-bad":""}>${ae(P($,"open"))}</span>`}},{key:"status",label:"",render:g=>g.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}];return l`
    <${ke} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${I} variant="primary" icon="plus" onClick=${()=>p(Gt({kind:"contact"}))}>Neuer Kontakt<//>
    <//>
    ${w.customers.length>0&&l`<div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${gt} label="Art" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:w.customers.length},{id:"customer",label:"Kunden",count:w.customers.filter(Re).length},{id:"contact",label:"Kontakte",count:w.customers.filter(g=>!Re(g)).length}]} />
      <select class="input select filter-select" value=${n} aria-label="Status" onChange=${g=>a(g.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${h.length>0&&l`<select class="input select filter-select" value=${r} aria-label="Nach Tag filtern" onChange=${g=>o(g.target.value)}>
        <option value="">Alle Tags</option>
        ${h.map(g=>l`<option value=${g}>${g}</option>`)}
      </select>`}
    </div>`}
    <${et} columns=${v} rows=${b} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${g=>J(`/customers/${g.id}`)}
      empty=${w.customers.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`:l`<${pe} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${I} variant="primary" icon="plus" onClick=${()=>p(Gt({kind:"contact"}))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${c&&l`<${_a} customer=${c} onClose=${()=>p(null)}
      onSaved=${g=>{m&&J(`/customers/${g.id}`)}} />`}
  `}function nd({id:e}){ge();let t=y("customers",e),[n,a]=D(!1),[s,i]=D(null),[r,o]=D(null),[c,p]=D(null),[d,u]=D(null),[m,f]=D(null),[h,b]=D(!1);if(!t)return l`<${pe} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${I} onClick=${()=>J("/customers")}>Zu den Kontakten<//>
    <//>`;let v=q(),g=ed(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},$=eo(cn(),{customerId:e}).get(e)||[],C=w.notes.filter(N=>N.customerId===e),S=Bs(w.appointments.filter(N=>N.customerId===e)),k=S.filter(N=>N.status==="planned"&&N.date>=v),B=w.todos.filter(N=>N.customerId===e),G=B.filter(N=>!N.done).sort(Si),E=B.filter(N=>N.done).sort((N,ee)=>(N.doneAt||"")<(ee.doneAt||"")?1:-1),A=w.invoices.filter(N=>N.customerId===e).sort((N,ee)=>N.issueDate<ee.issueDate?1:-1),x=w.quotes.filter(N=>N.customerId===e).sort((N,ee)=>N.issueDate<ee.issueDate?1:-1),R=[...new Set([...A,...x].map(N=>N.companyId))];async function M(){let N=C.length||S.length?` Mitgelöscht werden ${S.length} ${S.length===1?"Termin":"Termine"} und ${C.length} ${C.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await ue({title:`${Re(t)?"Kunde":"Kontakt"} löschen?`,text:`${Z(t)} wird endgültig gelöscht.${N}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await mc(e),!0))&&(U("Gelöscht","good"),J("/customers"))}async function T(N){let ee=N==="customer";if(!await ue({title:ee?`${Z(t)} zum Kunden machen?`:`${Z(t)} als Kontakt führen?`,text:ee?`Der Kontakt wird Kunde und bekommt eine Kundennummer (${Sn("customer")}). Das passiert sonst automatisch mit der ersten Rechnung.`:`Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${Sn("contact")}).`,confirmLabel:ee?"Zum Kunden machen":"Als Kontakt führen"}))return;let O=await _(()=>Xn({...t,kind:N}));O&&U(`${ee?"Kunde":"Kontakt"} ${O.number}`,"good")}let z=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),L=[{key:"number",label:"Nummer",render:N=>l`<a href=${`#/invoices/${N.id}`} class="cell-main">${N.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:N=>l`<${Le} id=${N.companyId} />`},{key:"date",label:"Datum",render:N=>F(N.issueDate)},{key:"due",label:"Fällig",render:N=>F(N.dueDate)},{key:"total",label:"Betrag",align:"right",render:N=>l`<${Kt} doc=${N} />`},{key:"status",label:"Status",render:N=>l`<${In} inv=${N} />`}],Q=[{key:"number",label:"Nummer",render:N=>l`<a href=${`#/quotes/${N.id}${N.status==="draft"?"/edit":""}`} class="cell-main">${Qe(N)}</a>${N.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}`},{key:"company",label:"Unternehmen",render:N=>l`<${Le} id=${N.companyId} />`},{key:"date",label:"Datum",render:N=>F(N.issueDate)},{key:"valid",label:"Gültig bis",render:N=>F(N.validUntil)},{key:"total",label:"Betrag",align:"right",render:N=>l`<${Kt} doc=${N} />`},{key:"status",label:"Status",render:N=>l`<${gs} quote=${N} />`}];return l`
    <${ke} title=${Z(t)} back=${{href:"#/customers",label:"Kontakte"}}
      sub=${l`<span class="badges"><${ze} tone=${Re(t)?"info":"neutral"} icon=${Re(t)?"good":"customers"}>${Re(t)?"Kunde":"Kontakt"}<//>${t.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}</span>
        <span class="head-meta">${Re(t)?"Kundennummer":"Kontaktnummer"} ${t.number}${(t.formerNumbers||[]).length?` (vorher ${t.formerNumbers.join(", ")})`:""}</span>`}>
      <${I} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${I} variant="primary" icon="plus" onClick=${()=>J(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${St} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>J(`/quotes/new?customer=${e}`)},{label:"Angebot hochladen (PDF)",icon:"upload",onClick:()=>f(sa(e))},{label:"Vertrag anlegen",icon:"file",onClick:()=>u(qi(e))},!Re(t)&&{label:"Zum Kunden machen",icon:"good",onClick:()=>T("customer")},Re(t)&&!A.length&&{label:"Als Kontakt führen",icon:"customers",onClick:()=>T("contact")},{label:"Löschen",icon:"trash",danger:!0,disabled:Pr(e),onClick:M}]} />
    <//>

    <div class="stat-row">
      <${Fe} label="Umsatz gesamt (netto)" value=${ae(P(g))} sub=${`≈ ${qe(Te(g))}, ${g.count} Rechnungen`} />
      <${Fe} label="Offene Forderungen" value=${ae(P(g,"open"))} sub=${`≈ ${qe(Te(g,"open"))}`} />
      <${Fe} label="Davon überfällig" value=${ae(P(g,"overdue"))} tone=${P(g,"overdue")?"bad":""} sub=${`≈ ${qe(Te(g,"overdue"))}`} />
      <${Fe} label="Bezahlt" value=${ae(P(g,"paid"))} sub=${`≈ ${qe(Te(g,"paid"))}`} />
    </div>

    <${Wu} customerId=${e} on=${{appointment:()=>o(Ju(t)),uploadQuote:()=>f(sa(e)),contract:u,openContract:u}} />

    <div class="split">
      <div class="split-main">
        <${X} title=${`To-dos${G.length?` (${G.length})`:""}`} action=${E.length>0&&l`<button type="button" class="link-btn small"
            onClick=${()=>b(!h)}>${h?"Erledigte ausblenden":`${E.length} erledigte zeigen`}</button>`}>
          <${aa} items=${G} showCustomer=${!1} onEdit=${p} />
          ${h&&l`<${aa} items=${E} showCustomer=${!1} onEdit=${p} />`}
          <${Ci} customerId=${e} />
        <//>
        <${Vp} rows=${$} />
        <${X} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${I} small icon="note" onClick=${()=>i(Qs({customerId:e}))}>Eintrag<//>
            <${I} small icon="calendar" onClick=${()=>o(Ju(t))}>Termin planen<//>
          </div>`}>
          ${k.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${Gi} items=${k} onOpen=${o} compact />`}
          <${Gp} notes=${C} appts=${S.filter(N=>!(N.status==="planned"&&N.date>=v))}
            onNote=${i} onAppt=${o} hasUpcoming=${k.length>0} />
        <//>
        <${X} title="Rechnungen" flush>
          <${et} columns=${L} rows=${A} onRowClick=${N=>J(`/invoices/${N.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${X} title="Angebote" flush action=${l`<div class="panel-head-actions">
            <${I} small icon="upload" onClick=${()=>f(sa(e))}>PDF hochladen<//>
            <${I} small icon="quote" onClick=${()=>J(`/quotes/new?customer=${e}`)}>Schreiben<//>
          </div>`}>
          <${et} columns=${Q} rows=${x} onRowClick=${N=>J(`/quotes/${N.id}${N.status==="draft"?"/edit":""}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kontakt.</p>`} />
        <//>
        <${X} title="Verträge" flush action=${l`<div class="panel-head-actions">
            <${I} small icon="file" onClick=${()=>u(qi(e))}>Vertrag anlegen<//>
          </div>`}>
          <${Qu} customerId=${e} onOpen=${u} />
        <//>
      </div>
      <aside class="split-side">
        <${X} title="Kontakt">
          <${xn} rows=${[["Ansprechpartner",rt(t)],["Adresse",z.length?l`${z.map(N=>l`<div>${N}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(Bt.find(N=>N.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(N=>l`<span class="tag">${N}</span>`):""]]} />
        <//>
        <${X} title="Abgerechnet über">
          ${R.length?l`<ul class="plain-list">${R.map(N=>l`<li><${Le} id=${N} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${X} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${_a} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${Hp} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${Vi} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${Ii} key=${c.id} todo=${c} onClose=${()=>p(null)} />`}
    ${d&&l`<${Rs} key=${d.id} contract=${d} onClose=${()=>u(null)} />`}
    ${m&&l`<${As} key=${m.id} quote=${m} onClose=${()=>f(null)} />`}
  `}function Ju(e){let t=[...w.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=bt()&&y("companies",bt())||t&&y("companies",t.companyId)||re()[0];return ga(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function Vp({rows:e}){let t=n=>(zn.find(a=>a.id===n)||{}).label||"";return l`<${X} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${oe()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${W} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Le} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${Gn(n.qty)}${n.unit?` ${ii(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${P(n)?l`${ae(P(n))}<div class="cell-sub">≈ ${qe(Te(n))}</div>`:"–"}</td>
            <td>${n.last?F(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var Zp={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},Xu=e=>(fa.find(t=>t.id===e)||fa[0]).label;function Gp({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await ue({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await pc(o.id),!0))&&U("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let u=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${W} name=${Zp[u.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${u.title||Xu(u.kind)}</span>
              <span class="tl-meta">${Xu(u.kind)} · ${F(u.date)}</span>${u.companyId&&l`<${Le} id=${u.companyId} />`}</div>
            ${u.text&&l`<div class="tl-text">${u.text}</div>`}
          </div>
          <div class="tl-actions">
            <${I} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(u)} />
            <${I} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(u)} />
          </div>
        </li>`}let c=o.a,p=pa[c.status]||pa.planned,d=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${W} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${F(c.date)}, ${c.start} Uhr</span>
            <${ze} tone=${d?"warn":p.tone}>${d?"Nicht dokumentiert":p.label}<//>
            <${Le} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
          ${c.nextSteps&&l`<div class="tl-text"><span class="strong">Nächste Schritte:</span> ${c.nextSteps}</div>`}
          ${(()=>{let u=w.todos.filter(m=>m.appointmentId===c.id);return u.length>0&&l`<div class="tl-todos">${u.map(m=>l`<span class=${`tag${m.done?" is-done":""}`}>${m.done?"✓":"○"} ${m.title}</span>`)}</div>`})()}
        </div>
        <div class="tl-actions">
          ${d&&l`<${I} small onClick=${()=>Zi(c)}>Dokumentieren<//>`}
          <${I} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function Hp({note:e,onClose:t}){let n=!y("notes",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),o=p=>d=>s(u=>({...u,[p]:d}));async function c(){r(!0);let p=await _(()=>di(a));r(!1),p&&(U(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${Pe} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${I} onClick=${t}>Abbrechen<//><${I} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${se} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${fa} />
      <${_e} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${se} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${re().map(p=>({id:p.id,label:p.name}))} />
      <${V} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${ie} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var jp=["Mo","Di","Mi","Do","Fr","Sa","So"],ad=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Bs=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),ji=e=>(y("companies",e)||{}).brandColor||"var(--ink-2)";function un(e){let t=y("customers",e.customerId);return t?Z(t):e.contactName||""}function id(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===st())return n;let{start:a}=Nn(e),s=Ni(a,st()),i=Yc(a,st());return s===e.start&&i===e.date?`${n} ${$s(e.timeZone,a)}`:`${n} ${$s(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${F(i)}`:""})`}function Wp(e){let t=[...new Set([st(),...Ws,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${$s(a,n)})${a===st()?", dieses Gerät":""}`}))}function Vi({appointment:e,onClose:t}){let n=!y("appointments",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),[o,c]=D(null),[p,d]=D(null),u=re(),m=k=>B=>s(G=>({...G,[k]:B})),f=w.customers.filter(k=>k.active!==!1||k.id===a.customerId).sort((k,B)=>Z(k).localeCompare(Z(B),"de")).map(k=>({id:k.id,label:Z(k),sub:[k.kind==="contact"?"Kontakt":"Kunde",k.number,k.city].filter(Boolean).join(", "),search:`${k.firstName} ${k.lastName} ${k.contact} ${k.email}`}));function h(k){let B=y("companies",k),G=y("companies",a.companyId);s(E=>{let A={...E,companyId:k};if(!B)return A;let x=(M,T)=>!E[M]||G&&String(E[M])===String(G[T]||"");x("meetingProvider","meetingProvider")&&(A.meetingProvider=B.meetingProvider||""),x("meetingUrl","meetingUrl")&&(A.meetingUrl=B.meetingUrl||""),x("meetingDetails","meetingDetails")&&(A.meetingDetails=B.meetingDetails||""),B.meetingTimeZone&&(!E.timeZone||G&&E.timeZone===(G.meetingTimeZone||st()))&&(A.timeZone=B.meetingTimeZone);let R=y("customers",E.customerId);return R&&R.language||(A.language=B.language||"de"),A})}function b(k){let B=y("customers",k),G=y("customers",a.customerId);s(E=>({...E,customerId:k||"",attendees:!E.attendees||G&&E.attendees===G.email?B&&B.email||"":E.attendees,language:B&&B.language?B.language:E.language}))}function v(k){s(B=>{let G=R=>{let[M,T]=String(R||"0:0").split(":").map(Number);return M*60+T},E=Math.max(G(B.end)-G(B.start),15),A=Math.min(G(k)+E,1439),x=/^\d\d:\d\d$/.test(k)?`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`:B.end;return{...B,start:k,end:x}})}async function g(){r(!0);let k=await _(()=>mi(a));r(!1),k&&(U(n?"Termin angelegt":"Termin gespeichert","good"),n?d(k):t(k))}async function $(){if(!await ue({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${F(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await $c(a.id),!0))&&(U("Termin gelöscht","good"),t())}if(p)return l`<${yo} appointment=${p} justCreated onClose=${()=>t(p)} />`;let C=y("customers",a.customerId),S=y("appointments",a.id);return l`<${Pe} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${g}
    footer=${l`
      ${!n&&l`<${St} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>d(S||a)},S&&{label:S.status==="done"?"Dokumentation bearbeiten":"Termin dokumentieren",icon:"edit",onClick:()=>{t(),Zi(S)}},S&&S.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>Jp(S,t)},S&&S.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await _(()=>fi(S.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:$}]} />`}
      <span class="spacer"></span>
      <${I} onClick=${()=>t()}>Abbrechen<//>
      <${I} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${S&&S.status!=="planned"&&l`<${xe} tone=${S.status==="done"?"good":"warn"}>
      ${S.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${S.outcome?l`<div class="pre notice-sub">${S.outcome}</div>`:""}
      ${S.nextSteps?l`<div class="pre notice-sub">Nächste Schritte: ${S.nextSteps}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${se} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${h}
        placeholder="Unternehmen wählen" options=${u.map(k=>({id:k.id,label:k.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${we} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${ft} id="appt-customer" options=${f} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${b} onCreate=${k=>c({company:k,kind:"contact"})} createLabel="als Kontakt anlegen" />
      <//>
      <${V} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${m("contactName")}
        placeholder=${C?rt(C)||Z(C):"Name"} hint="Für die Anrede in der Einladung" />
      <${V} class="span-6" label="Titel" value=${a.title} onInput=${m("title")}
        placeholder=${C?`Termin mit ${Z(C)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${_e} class="span-2" label="Datum" value=${a.date} onInput=${m("date")} />
      <${V} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${v} />
      <${V} class="span-1" label="Ende" type="time" value=${a.end} onInput=${m("end")} />
      <${se} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${m("timeZone")} options=${Wp(a.timeZone)}
        hint=${a.timeZone!==st()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&Ni(Nn(a).start,st())!==a.start?`Bei dir: ${Ni(Nn(a).start,st())} Uhr`:""} />
      <${we} class="span-4" label="Art">
        <${Dt} label="Art des Termins" value=${a.kind} onChange=${m("kind")} options=${Qa} />
      <//>
      <${we} class="span-2" label="Sprache der Einladung">
        <${Dt} label="Sprache der Einladung" value=${a.language||"de"} onChange=${m("language")} options=${Bt} />
      <//>
      ${a.kind==="video"&&l`
        <${se} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${m("meetingProvider")}
          placeholder="Bitte wählen" options=${ma} />
        <${V} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${m("meetingUrl")} placeholder="https://…"
          hint=${!a.meetingUrl&&a.companyId?"Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.":""} />
        <${ie} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${m("meetingDetails")} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind==="phone"&&l`<${V} class="span-6" label="Telefon" value=${a.location} onInput=${m("location")} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind==="onsite"&&l`<${V} class="span-6" label="Ort" value=${a.location} onInput=${m("location")} placeholder="Adresse oder Treffpunkt" />`}
      <${V} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${m("attendees")}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${ie} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${m("agenda")} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${o&&l`<${_a} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${k=>b(k.id)} />`}
  <//>`}var rd=null,bo=new Set,od=e=>{rd=e;for(let t of bo)t(e)};function Zi(e,t){od({appt:e,done:t})}function ld(){let[e,t]=D(rd);return ce(()=>(bo.add(t),()=>bo.delete(t)),[]),e?l`<${Qp} key=${e.appt.id} appointment=${e.appt}
    onClose=${n=>{od(null),n&&e.done&&e.done(n)}} />`:null}function Qp({appointment:e,onClose:t}){let n=y("appointments",e.id)||e,[a,s]=D(n.outcome||""),[i,r]=D(n.nextSteps||""),o=Ce(q(),7),[c,p]=D([{key:1,title:"",due:o}]),[d,u]=D(!1),m=w.todos.filter(v=>v.appointmentId===n.id),f=(v,g)=>p($=>$.map(C=>C.key===v?{...C,...g}:C)),h=()=>p(v=>[...v,{key:Math.max(0,...v.map(g=>g.key))+1,title:"",due:o}]);async function b(){u(!0);let v=await _(()=>pi(n.id,{outcome:a,nextSteps:i,todos:c}));u(!1),v&&(U(v.todos.length?`Termin dokumentiert, ${v.todos.length} ${v.todos.length===1?"To-do":"To-dos"} angelegt`:"Termin dokumentiert","good"),t(v.appointment))}return l`<${Pe} title="Termin dokumentieren" onClose=${()=>t()} size="lg" onSubmit=${b}
    footer=${l`<${I} onClick=${()=>t()}>Abbrechen<//><${I} variant="primary" type="submit" busy=${d}>Speichern<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${ji(n.companyId)}`}></span>
      <div><div class="strong">${n.title}</div>
        <div class="muted-text">${bs(n.date)}, ${n.start}–${n.end}${un(n)?` · ${un(n)}`:""}</div></div>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Ergebnis / kurzes Statement" value=${a} onInput=${s} rows=${3}
        placeholder="Was wurde besprochen, wie ist es gelaufen?" />
      <${ie} class="span-6" label="Nächste Schritte" value=${i} onInput=${r} rows=${2}
        placeholder="z. B. Angebot bis Freitag, Folgetermin in zwei Wochen" />
    </div>
    <h3 class="sub-head">To-dos aus diesem Termin</h3>
    ${m.length>0&&l`<${aa} items=${m} showCustomer=${!1} />`}
    <div class="doc-todos">
      ${c.map((v,g)=>l`<div class="doc-todo" key=${v.key}>
        <input class="input" placeholder="To-do, z. B. Angebot schicken" aria-label=${`To-do ${g+1}`} value=${v.title}
          onInput=${$=>f(v.key,{title:$.target.value})}
          onKeyDown=${$=>{$.key==="Enter"&&($.preventDefault(),v.title.trim()&&h())}} />
        <input class="input" type="date" aria-label=${`To-do ${g+1}: fällig am`} value=${v.due} onInput=${$=>f(v.key,{due:$.target.value})} />
        <${I} variant="ghost" small icon="trash" title="Zeile entfernen" disabled=${c.length===1&&!v.title}
          onClick=${()=>p($=>$.length===1?[{key:v.key+1,title:"",due:o}]:$.filter(C=>C.key!==v.key))} />
      </div>`)}
      <${I} small icon="plus" onClick=${h}>Weiteres To-do<//>
    </div>
    <p class="field-hint">To-dos erscheinen beim Kontakt, im Dashboard und unter „To-dos“. Leere Zeilen werden ignoriert.</p>
  <//>`}var vo=(e=new Date)=>Bs(w.appointments.filter(Oe).filter(t=>Jc(t,e)));async function Yp(e){await _(()=>fi(e.id,"done",""))&&U("Als stattgefunden vermerkt","good")}async function Hi(e,t){let n=t==="morning"?(()=>{let s=new Date;return s.setDate(s.getDate()+1),s.setHours(9,0,0,0),s})():new Date(Date.now()+t*36e5);await _(()=>fc(e.id,n.toISOString()))&&U(`Erinnerung verschoben auf ${n.toLocaleString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})} Uhr`,"good")}function cd(){let e=vo();return e.length?l`<section class="followups" aria-label="Termine nachbereiten">
    <div class="followups-head"><${W} name="calendar" /><strong>${e.length===1?"Ein Termin ist vorbei":`${e.length} Termine sind vorbei`}</strong>
      <span class="muted-text">Möchtest du Ergebnis, nächste Schritte oder To-dos festhalten?</span></div>
    <ul>
      ${e.slice(0,5).map(t=>l`<li key=${t.id}>
        <span class="followup-what" style=${`--chip:${ji(t.companyId)}`}>
          <span class="strong">${t.title}</span>
          <span class="cell-sub">${F(t.date)}, ${t.start}–${t.end}${un(t)?` · ${un(t)}`:""}</span>
        </span>
        <span class="followup-actions">
          <${I} small variant="primary" icon="edit" onClick=${()=>Zi(t)}>Ja, dokumentieren<//>
          <${I} small onClick=${()=>Yp(t)}>Nein<//>
          <${St} small label="Später" icon="clock" items=${[{label:"In einer Stunde",onClick:()=>Hi(t,1)},{label:"In drei Stunden",onClick:()=>Hi(t,3)},{label:"Morgen früh",onClick:()=>Hi(t,"morning")},{label:"In drei Tagen",onClick:()=>Hi(t,72)}]} />
        </span>
      </li>`)}
    </ul>
    ${e.length>5&&l`<p class="cell-sub">und ${e.length-5} weitere im Kalender</p>`}
  </section>`:null}async function Jp(e,t){let n=await ue({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await _(()=>fi(e.id,"cancelled",n));a&&(U("Termin abgesagt","good"),t&&t(a))}async function Xp(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function sd(e){return`${qt(`Termin ${e.date} ${e.start.replace(":","-")} ${un(e)||e.title||""}`.trim())}.ics`}function yo({appointment:e,onClose:t,justCreated:n}){let a=y("companies",e.companyId),s=y("customers",e.customerId),i=Se(()=>Xc(e,{company:a,customer:s,settings:w.settings}),[e.id,e.updatedAt]),[r,o]=D(e.attendees||s&&s.email||""),[c,p]=D(i.subject),[d,u]=D(i.body),[m,f]=D(""),h=typeof navigator<"u"&&!!navigator.canShare,b=()=>new Blob([eu(e,{summary:c,description:d})],{type:"text/calendar;charset=utf-8"});function v(){Xe(b(),sd(e))}async function g(){let S=await Xp(`${c}

${d}`);U(S?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",S?"good":"bad")}function $(){let S=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`;va(),window.location.href=S}async function C(){f("share"),await _(async()=>{let S=new File([b()],sd(e),{type:"text/calendar"});if(!navigator.canShare({files:[S]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[S],title:c,text:d})}catch(k){if(!k||k.name!=="AbortError")throw k}}),f("")}return l`<${Pe} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${I} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${bs(e.date)}, ${id(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${Aa(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${xe} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${V} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${V} class="span-6" label="Betreff" value=${c} onInput=${p} />
      <${ie} class="span-6" label="Text" value=${d} onInput=${u} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${I} icon="calendar" onClick=${v}>Kalenderdatei herunterladen<//>
      <${I} icon="copy" onClick=${g}>Text kopieren<//>
      <${I} icon="mail" onClick=${$} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${h&&l`<${I} icon="send" busy=${m==="share"} onClick=${C}>Teilen<//>`}
    </div>
  <//>`}function ef(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function tf({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${ji(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${un(e)?` (${un(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function ud({params:e}){ge();let t=q(),[n,a]=D("month"),[s,i]=D(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=D(()=>e&&e.open&&y("appointments",e.open)?y("appointments",e.open):null),[c,p]=D(!1),[d,u]=D(""),m=de(),f=Bs(w.appointments.filter(Oe)).filter(S=>!d||Ne(d,S.title,un(S),S.agenda,S.outcome)),h=new Map;for(let S of f)h.has(S.date)||h.set(S.date,[]),h.get(S.date).push(S);function b(S){let k=m||(re().length===1?re()[0]:re()[0]);o(ga(k,{date:S||t}))}let v=S=>i(k=>{let B=new Date(Date.UTC(k.y,k.m+S,1));return{y:B.getUTCFullYear(),m:B.getUTCMonth()}}),g=ef(s.y,s.m),$=f.filter(S=>S.date>=t),C=f.filter(S=>S.date<t).reverse();return l`
    <${ke} title="Termine" sub=${m?`Termine über ${m.name}`:"Alle Termine aller Unternehmen"}>
      <${Dt} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${I} variant="primary" icon="plus" onClick=${()=>b(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${I} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>v(-1)} />
        <h2 class="cal-title">${ad[s.m]} ${s.y}</h2>
        <${I} small icon="chevronRight" title="Nächster Monat" onClick=${()=>v(1)} />
        <${I} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${re().map(S=>l`<span class="cal-legend-item"><i style=${`background:${S.brandColor}`}></i>${S.shortName||S.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${ad[s.m]} ${s.y}`}>
        ${jp.map(S=>l`<div class="cal-wd" role="columnheader">${S}</div>`)}
        ${g.map(S=>{let k=h.get(S.iso)||[];return l`<div role="gridcell" class=${`cal-day${S.inMonth?"":" is-out"}${S.iso===t?" is-today":""}`}
            onClick=${()=>b(S.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(S.iso.slice(8,10))}</span>
            ${k.slice(0,3).map(B=>l`<${tf} key=${B.id} a=${B} onOpen=${o} />`)}
            ${k.length>3&&l`<button type="button" class="cal-more" onClick=${B=>{B.stopPropagation(),a("list")}}>+${k.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${d} onInput=${S=>u(S.target.value)} />
        <${gt} label="Zeitraum" value=${c?"past":"next"} onChange=${S=>p(S==="past")}
          options=${[{id:"next",label:"Anstehend",count:$.length},{id:"past",label:"Vergangen",count:C.length}]} />
      </div>
      ${(c?C:$).length?l`<${Gi} items=${c?C:$} onOpen=${o} showCustomer />`:l`<${pe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${I} variant="primary" icon="plus" onClick=${()=>b(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${Vi} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function Gi({items:e,onOpen:t,showCustomer:n,compact:a}){let s=q(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=pa[r.status]||pa.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Ce(s,1)?"Morgen, ":""}${bs(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${ji(r.companyId)}`}>
            <span class="appt-time">${a?l`${F(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${ze} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&un(r),r.kind==="video"?Aa(r.meetingProvider)||"Videocall":(Qa.find(p=>p.id===r.kind)||{}).label,r.timeZone!==st()?id(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Le} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function dd(){let[e,t]=D(null),n=q(),a=Ce(n,14),s=new Date,i=Bs(w.appointments.filter(Oe).filter(r=>r.status==="planned"&&r.date>=n&&r.date<=a&&Nn(r).end>s)).slice(0,6);return i.length?l`<${X} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${Gi} items=${i} onOpen=${t} showCustomer />
    ${e&&l`<${Vi} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:l`<${X} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
      <p class="muted-text">Keine Termine in den nächsten 14 Tagen.</p>
    <//>`}var md=(e,t)=>(e.find(n=>n.id===t)||{}).label||"",wo=e=>(y("companies",e)||{}).name||"";function Us(e,t){if(!e)return"";if(e.startsWith("ref:")){let n=t.actions.find(a=>a.type==="contact"&&a.ref===e.slice(4));return n?`${Z(n)||"neuer Kontakt"} (neu)`:"neuer Kontakt"}return Z(y("customers",e))}var nf=(e,t)=>{let[n,a]=e.split(":").map(Number),s=Math.min(n*60+a+t,1439);return`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`};async function af(e){let t=[],n={},a=i=>i&&i.startsWith("ref:")?n[i.slice(4)]||"":i||"",s=[...e.actions.filter(i=>i.type==="contact"),...e.actions.filter(i=>i.type!=="contact")];for(let i of s)if(!i.off)try{if(i.type==="contact"){let r=await Xn(Gt({kind:i.kind,company:i.company,firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone,city:i.city,notes:i.notes}));n[i.ref]=r.id,t.push({ok:!0,text:`${i.kind==="customer"?"Kunde":"Kontakt"} ${Z(r)} (${r.number}) angelegt`,href:`/customers/${r.id}`})}else if(i.type==="todos"){let r=i.items.filter(o=>!o.off);for(let o of r)await os(Pn({title:o.title,due:o.due,customerId:a(o.customerId),companyId:o.companyId}));r.length&&t.push({ok:!0,text:`${r.length} ${r.length===1?"To-do":"To-dos"} angelegt`,href:"/todos"})}else if(i.type==="appointment"){let r=y("companies",i.companyId),o=ga(r,{start:i.start||"10:00"}),c=y("customers",a(i.customerId)),p=await mi({...o,customerId:c?c.id:"",contactName:i.contactName,title:i.title,date:i.date||q(),end:i.duration?nf(i.start,i.duration):o.end,kind:i.kind,location:i.location,agenda:i.agenda,attendees:c&&c.email?c.email:"",language:c&&c.language?c.language:o.language});t.push({ok:!0,text:`Termin „${p.title}“ am ${F(p.date)} um ${p.start} Uhr angelegt`,appointment:p})}else if(i.type==="note"){let r=await di(Qs({customerId:a(i.customerId),kind:i.kind,title:i.title,text:i.text,date:i.date||q()}));t.push({ok:!0,text:`Notiz bei ${Z(y("customers",r.customerId))} eingetragen`,href:`/customers/${r.customerId}`})}else if(i.type==="document"){let r=await pi(i.appointmentId,{outcome:i.outcome,nextSteps:i.nextSteps,todos:i.todos.filter(o=>!o.off)});t.push({ok:!0,text:`Termin „${r.appointment.title}“ dokumentiert${r.todos.length?`, ${r.todos.length} To-dos`:""}`,href:r.appointment.customerId?`/customers/${r.appointment.customerId}`:"/appointments"})}else if(i.type==="invoice"){let r=y("companies",i.companyId),o=y("customers",a(i.customerId)),c=mt(r);c.customerId=o.id,o.currency&&Ae.includes(o.currency)&&(c.currency=o.currency),o.language&&(c.language=o.language),o.paymentTermDays!=null&&o.paymentTermDays!==""&&(c.paymentTermDays=Number(o.paymentTermDays)),c.items=i.items.map(d=>{let u=d.serviceId?y("services",d.serviceId):null;return{...u?lt(u,r):jt({name:d.name,taxRate:Number(r.defaultTaxRate)||0}),qty:d.qty,...d.priceCents!=null?{priceCents:d.priceCents}:{},...d.name&&!u?{name:d.name}:{}}});let p=await Ca(c);t.push({ok:!0,text:`Rechnungsentwurf für ${Z(o)} angelegt (${j(p.totals.totalCents,p.currency)})`,href:`/invoices/${p.id}/edit`})}}catch(r){t.push({ok:!1,text:r.message||String(r)})}return t}function sf({a:e,plan:t,onToggle:n,onToggleItem:a}){let s=(o,c)=>l`<div class="voice-action-head">
    <input type="checkbox" checked=${!e.off} onChange=${n} aria-label=${`${c} ausführen`} />
    <${W} name=${o} size=${16} /><span>${c}</span></div>`,i=null,r="";if(e.type==="todos")return r=`${e.items.length} ${e.items.length===1?"To-do":"To-dos"}`,i=l`<ul>${e.items.map((o,c)=>l`<li key=${c}><label>
      <input type="checkbox" checked=${!o.off} onChange=${()=>a(c)} />
      <span><strong>${o.title}</strong>${o.due?` · bis ${F(o.due)}`:""}${o.customerId?` · ${Us(o.customerId,t)}`:""}${o.companyId?` · ${wo(o.companyId)}`:""}</span></label></li>`)}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("check",r)}${i}${za(e)}</div>`;if(e.type==="appointment")return r=`Termin: ${e.title||(e.customerId?`Termin mit ${Us(e.customerId,t)}`:"ohne Titel")}`,i=l`<ul>
      <li>${e.date?F(e.date):"–"}, ${e.start||"–"} Uhr${e.duration?`, ${e.duration} Min.`:""} · ${md(Qa,e.kind)}</li>
      <li>Über ${wo(e.companyId)||"–"}${e.customerId?` · mit ${Us(e.customerId,t)}`:""}${e.contactName?` (${e.contactName})`:""}</li>
      ${e.location&&l`<li>${e.location}</li>`}
      ${e.agenda&&l`<li>Themen: ${e.agenda}</li>`}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("calendar",r)}${i}${za(e)}</div>`;if(e.type==="note")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("note",`${md(fa,e.kind)} bei ${Us(e.customerId,t)}`)}
      <ul><li>${e.title&&l`<strong>${e.title}: </strong>`}${e.text}</li></ul>${za(e)}</div>`;if(e.type==="contact")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("customers",`Neuer ${e.kind==="customer"?"Kunde":"Kontakt"}: ${Z(e)||"–"}`)}
      <ul><li>${[e.firstName&&`${e.firstName} ${e.lastName}`,e.email,e.phone,e.city].filter(Boolean).join(" · ")||"keine weiteren Angaben"}</li></ul>${za(e)}</div>`;if(e.type==="document"){let o=y("appointments",e.appointmentId);return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("edit",`Termin dokumentieren: ${o?`${o.title}, ${F(o.date)}`:""}`)}
      <ul>${e.outcome&&l`<li>Ergebnis: ${e.outcome}</li>`}${e.nextSteps&&l`<li>Nächste Schritte: ${e.nextSteps}</li>`}
        ${e.todos.map((c,p)=>l`<li key=${p}><label><input type="checkbox" checked=${!c.off} onChange=${()=>a(p)} />
          <span>To-do: <strong>${c.title}</strong>${c.due?` · bis ${F(c.due)}`:""}</span></label></li>`)}</ul>${za(e)}</div>`}return e.type==="invoice"?l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("invoice",`Rechnungsentwurf für ${Us(e.customerId,t)} über ${wo(e.companyId)}`)}
      <ul>${e.items.map((o,c)=>{let p=o.serviceId?y("services",o.serviceId):null;return l`<li key=${c}>${o.qty} × ${p?p.name:o.name}${o.priceCents!=null?` à ${j(o.priceCents,(y("companies",e.companyId)||{}).currency||"USD")}`:p?` à ${j(p.priceCents,p.currency||"USD")}`:""}</li>`})}</ul>
      <p class="field-hint">Nur Entwurf – du prüfst und erstellst ihn danach im Editor.</p>${za(e)}</div>`:null}var za=e=>e.warnings&&e.warnings.length?l`<p class="field-hint tone-warn">${e.warnings.join(" ")}</p>`:null;function rf({onClose:e}){let[t,n]=D(""),[a,s]=D(""),[i,r]=D(!1),[o,c]=D(""),[p,d]=D(null),[u,m]=D(null),[f,h]=D(null),b=ve(null),v=ve("");v.current=t;let g=!!w.settings.aiApiKey,$=ns();function C(){if(i){b.current&&b.current();return}try{b.current=ri({onFinal:x=>n(R=>oi(R,x)),onInterim:s,onEnd:()=>{r(!1),s(""),b.current=null},onError:x=>U(x,"bad",8e3)}),r(!0),d(null),m(null)}catch(x){U(x.message||String(x),"bad")}}ce(()=>($&&g&&C(),()=>{b.current&&b.current()}),[]),ce(()=>{let x=R=>{R.key==="Escape"&&!document.querySelector(".modal-backdrop")&&e()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e]);async function S(){b.current&&b.current();let x=v.current.trim();if(!x){U("Bitte zuerst etwas sagen oder eintippen.","info");return}c("ai");let R=Fc({customers:w.customers,companies:w.companies,services:w.services,appointments:w.appointments,todos:w.todos},{today:q(),timeZone:st()}),M=await _(()=>qc({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,text:x,context:R.text,map:R.map}));c(""),M&&(d(M),m(null))}async function k(){c("run");let x=await af(p);c(""),m(x),d(null);let R=x.filter(M=>M.ok).length;R&&U(`${R} ${R===1?"Eintrag":"Einträge"} angelegt`,"good")}let B=x=>d(R=>({...R,actions:R.actions.map((M,T)=>T===x?{...M,off:!M.off}:M)})),G=(x,R)=>d(M=>({...M,actions:M.actions.map((T,z)=>{if(z!==x)return T;let L=T.type==="todos"?"items":"todos";return{...T,[L]:T[L].map((Q,N)=>N===R?{...Q,off:!Q.off}:Q)}})})),E=p?p.actions.filter(x=>!x.off).length:0,A=l`
      ${!u&&!p&&l`<${I} variant="primary" icon="sparkle" busy=${o==="ai"} disabled=${!g||!t.trim()} onClick=${S}>Verstehen<//>`}
      ${p&&l`<${I} onClick=${()=>d(null)}>Ändern<//>`}
      ${p&&p.actions.length>0&&l`<${I} variant="primary" icon="check" busy=${o==="run"} disabled=${!E} onClick=${k}>Ausführen<//>`}
      ${u&&l`<${I} onClick=${e}>Fertig<//>`}
      ${u&&l`<${I} variant="primary" icon="mic" onClick=${()=>{n(""),m(null),C()}}>Nächster Befehl<//>`}`;return l`<section class="voice-panel" role="dialog" aria-label="Sprachbefehl">
    <header class="voice-panel-head">
      <span class=${`voice-panel-dot${i?" is-on":""}`}><${W} name="mic" size=${15} /></span>
      <strong>Sprachbefehl</strong>
      ${i&&l`<span class="voice-panel-live">hört zu</span>`}
      <button type="button" class="voice-panel-close" onClick=${e} title="Schließen" aria-label="Schließen"><${W} name="x" size=${17} /></button>
    </header>
    <div class="voice-panel-body">
      ${!g&&l`<${xe} tone="warn">Sprachbefehle laufen über die Anthropic-API. Trage dafür unter Einstellungen den API-Key ein (derselbe wie für die Belegerkennung).<//>`}
      ${!u&&!p&&l`
        <div class="voice-stage">
          ${$?l`<button type="button" class=${`mic-btn${i?" is-on":""}`} onClick=${C} aria-pressed=${i}
                title=${i?"Zuhören beenden":"Mikrofon einschalten"} aria-label=${i?"Zuhören beenden":"Mikrofon einschalten"}><${W} name="mic" size=${22} /></button>`:l`<p class="muted-text">Dieser Browser hat keine Spracherkennung (Chrome oder Safari verwenden). Du kannst den Befehl auch eintippen.</p>`}
          <div class="voice-stage-text">
            ${i?l`<span class="strong">Ich höre zu …</span>`:$&&l`<span class="muted-text">Auf das Mikrofon tippen und sprechen</span>`}
            ${a&&l`<span class="mic-interim">${a}</span>`}
          </div>
        </div>
        <textarea class="input textarea" rows="3" aria-label="Befehl" placeholder="Was soll ich tun?" value=${t} onInput=${x=>n(x.target.value)}></textarea>
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
        ${p.answers.map(x=>l`<div class="voice-answer">${x}</div>`)}
        ${p.actions.length>0&&l`<p class="field-hint">Bitte prüfen. Abgewählte Punkte werden nicht angelegt.</p>`}
        <div class="voice-plan">
          ${p.actions.map((x,R)=>l`<${sf} key=${R} a=${x} plan=${p} onToggle=${()=>B(R)} onToggleItem=${M=>G(R,M)} />`)}
        </div>`}
      ${u&&l`<ul class="voice-done">
        ${u.map(x=>l`<li class=${x.ok?"":"tone-bad"}>${x.ok?"✓":"✕"} ${x.text}
          ${x.href&&l` · <a href=${`#${x.href}`}>Öffnen</a>`}
          ${x.appointment&&l` · <button type="button" class="link-btn" onClick=${()=>h(x.appointment)}>Einladung</button>`}</li>`)}
      </ul>`}
    </div>
    <footer class="voice-panel-foot">${A}</footer>
  </section>
  ${f&&l`<${yo} appointment=${f} justCreated onClose=${()=>h(null)} />`}`}var xo=!1,ko=new Set;function pd(e){xo=e,ko.forEach(t=>t(e))}var of=()=>pd(!xo);function fd(){let[e,t]=D(xo);return ce(()=>(ko.add(t),()=>ko.delete(t)),[]),e}function gd(){return fd()?l`<${rf} onClose=${()=>pd(!1)} />`:null}function hd(){let e=fd();return l`<button type="button" class=${`backup-btn voice-btn${e?" is-open":""}`} onClick=${of} aria-pressed=${e}
    title="Sprachbefehl: To-dos, Termine, Notizen per Sprache">
    <${W} name="mic" /><span>Sprechen</span>
  </button>`}async function Do(){w.companies.length||(await rs(Wa({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await rs(Wa({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await Y(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function $d(){w.settings.seeded||w.companies.length||await Do()}function lf(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Ms(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=lf();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function cf(){let e=ve(null),[t,n]=D(0);return lr(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function uf(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,p=Math.ceil(Math.max(t,0)/o)*o,d=[];for(let u=c;u<=p+o/2;u+=o)d.push(Math.round(u/o)*o);return{lo:c,hi:p,step:o,ticks:d}}function So(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function _s({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=cf(),[p,d]=D(null),u={top:12,right:8,bottom:26,left:56},m=0,f=0;for(let A of e)if(n==="stacked"){let x=0,R=0;for(let M of t){let T=A.values[M.id]||0;T>=0?x+=T:R+=T}m=Math.max(m,x),f=Math.min(f,R)}else for(let x of t){let R=A.values[x.id]||0;m=Math.max(m,R),f=Math.min(f,R)}let h=uf(f,m),b=Math.max(c-u.left-u.right,10),v=i-u.top-u.bottom,g=A=>u.top+v-(A-h.lo)/(h.hi-h.lo||1)*v,$=b/Math.max(e.length,1),C=g(0),S=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(b/46)))),k=[];e.forEach((A,x)=>{let R=u.left+x*$;if(n==="stacked"){let M=Math.min(24,Math.max($-10,3)),T=R+($-M)/2,z=C,L=C,Q=t.filter(fe=>(A.values[fe.id]||0)!==0),N=[...Q].reverse().find(fe=>A.values[fe.id]>0),ee=[...Q].reverse().find(fe=>A.values[fe.id]<0);for(let fe of Q){let O=A.values[fe.id],Be=Math.abs(g(O)-C);if(O>0){let Ze=z-Be,ia=N&&N.id===fe.id,Xi=ia?0:Math.min(2,Be-1);k.push({d:ia?So(T,Ze,M,Be,4,!0):`M${T},${Ze+Xi}H${T+M}V${z}H${T}Z`,color:fe.color,key:`${A.key}-${fe.id}`}),z=Ze}else{let Ze=ee&&ee.id===fe.id,ia=Ze?0:Math.min(2,Be-1);k.push({d:Ze?So(T,L,M,Be,4,!1):`M${T},${L}H${T+M}V${L+Be-ia}H${T}Z`,color:fe.color,key:`${A.key}-${fe.id}`}),L+=Be}}}else{let M=t.length,T=Math.min(18,Math.max(($-10-(M-1)*2)/M,2)),z=M*T+(M-1)*2;t.forEach((L,Q)=>{let N=A.values[L.id]||0;if(!N)return;let ee=Math.abs(g(N)-C),fe=R+($-z)/2+Q*(T+2);k.push({d:So(fe,N>0?C-ee:C,T,ee,4,N>0),color:L.color,key:`${A.key}-${L.id}`})})}});let B=p!=null?e[p]:null,G=p!=null?u.left+p*$+$/2:0,E=G>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${h.ticks.map(A=>l`<g key=${A}>
        <line x1=${u.left} x2=${c-u.right} y1=${g(A)} y2=${g(A)} class=${A===0?"chart-base":"chart-grid"} />
        <text x=${u.left-8} y=${g(A)+4} text-anchor="end" class="chart-tick">${(s||a)(A)}</text>
      </g>`)}
      ${p!=null&&l`<rect x=${u.left+p*$} y=${u.top} width=${$} height=${v} class="chart-hover" />`}
      ${k.map(A=>l`<path key=${A.key} d=${A.d} fill=${A.color} />`)}
      ${e.map((A,x)=>x%S===0&&l`<text key=${A.key} x=${u.left+x*$+$/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${A.label}</text>`)}
      ${e.map((A,x)=>l`<rect key=${`hit-${A.key}`} x=${u.left+x*$} y=${u.top} width=${$} height=${v+u.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${A.title||A.label}: ${t.map(R=>`${R.label} ${a(A.values[R.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>d(x)} onMouseLeave=${()=>d(null)}
        onFocus=${()=>d(x)} onBlur=${()=>d(null)} />`)}
    </svg>`}
    ${B&&l`<div class=${`chart-tip${E?" is-left":""}`} style=${`left:${G}px;top:${u.top}px`}>
      <div class="chart-tip-title">${B.title||B.label}</div>
      ${t.filter(A=>t.length===1||(B.values[A.id]||0)!==0).map(A=>l`<div class="chart-tip-row" key=${A.id}>
        <span class="chart-key" style=${`background:${A.color}`}></span>
        <strong>${a(B.values[A.id]||0)}</strong><span>${A.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((A,x)=>A+(B.values[x.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function df({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function zs({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=D(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${df} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,p)=>l`<td class=${p?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function dn({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}async function Wi(e,t){let n=Nt(e,t),a=await Ra(ws(n));return Xe(a,n.fileName),{blob:a,model:n}}function mf(e,t){let n=e.snapshot&&e.snapshot.company||y("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||y("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?on(e,Ye(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:F(e.issueDate,s),DUE:F(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:xa(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:xa(i,e.currency,s),CONTACT:rt(a)||Z(a),CUSTOMER:Z(a),SENDER:w.settings.userName?`${w.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function pf(e){let n=yn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,Ct.length)}function Ps(e,t){if(!(t>0))return 0;let n=w.settings.reminderDays||[7,14,21],a=yn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return Ct.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function bd(e){return[...yn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function Pa({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=mf(e,t),[o,c]=D(()=>n==="reminder"?pf(e.id):0),p=M=>n==="reminder"?((w.settings.reminderTemplates||{})[s]||{})[M]||{subject:"",body:""}:((w.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[d,u]=D(i),[m,f]=D(()=>Et(p(o).subject,r)),[h,b]=D(()=>Et(p(o).body,r)),[v,g]=D(""),[$,C]=D(null),S=typeof navigator<"u"&&!!navigator.canShare;function k(M){let T=Number(M);c(T),f(Et(p(T).subject,r)),b(Et(p(T).body,r))}async function B(){if($)return $;let M=Nt(e,t),z={blob:await Ra(ws(M)),name:M.fileName};return C(z),z}async function G(){g("pdf"),await _(async()=>{let M=await B();Xe(M.blob,M.name)}),g("")}function E(){let M=`mailto:${encodeURIComponent(d.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(h)}`;va(),window.location.href=M}async function A(){g("share"),await _(async()=>{let M=await B(),T=new File([M.blob],M.name,{type:"application/pdf"});if(!navigator.canShare({files:[T]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[T],title:m,text:h})}catch(z){if(z&&z.name==="AbortError")return;throw z}}),g("")}async function x(){g("done");let M=await _(async()=>(n==="reminder"?await Kc(e.id,o,m):t==="quotes"?await na(e.id,"sent"):await ta(e.id,!0),!0));g(""),M&&(U(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let R=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${Pe} title=${R} onClose=${a} size="lg"
    footer=${l`
      <${I} onClick=${a}>Schließen<//>
      <${I} variant="primary" icon="check" busy=${v==="done"} onClick=${x}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${xe} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${se} class="span-2" label="Stufe" value=${o} onChange=${k}
        options=${Ct.map(M=>({id:M.id,label:M.label}))} />`}
      <${V} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${d} onInput=${u}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${V} class="span-6" label="Betreff" value=${m} onInput=${f} />
      <${ie} class="span-6" label="Text" value=${h} onInput=${b} rows=${10} />
    </div>
    <div class="send-steps">
      <${I} icon="download" busy=${v==="pdf"} onClick=${G}>PDF herunterladen<//>
      <${I} icon="mail" onClick=${E} disabled=${!d.trim()}>E-Mail-Programm öffnen<//>
      ${S&&l`<${I} icon="send" busy=${v==="share"} onClick=${A}>Mit PDF teilen<//>`}
    </div>
  <//>`}var ff=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],gf=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],hf=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],$f=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],bf=e=>.86+e*37%7/100,La=(e,t,n)=>{let a=bf(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:Qt(e,a,s)};function Qi(){return Rl(vf)}async function vf(){if(w.invoices.length||w.customers.length||w.expenses.length||w.services.length)throw new Ie("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=re();if(!e.length)throw new Ie("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=q(),a=[];for(let m of ff)a.push(await Xn(Gt(m)));let s=[];for(let m of gf)s.push(await gi(Ht({...m,currency:"USD"})));let i=[];for(let[m,f,h,b,v,g,$]of hf){let C=t(h),S=a[b],k=At(n.slice(0,8)+"01",-m,f);k>n&&(k=n);let B=S.currency||"USD",G=La(B,m,k),E=v.map(([M,T])=>{let z=lt(s[M],C),L=B==="EUR"?Math.round(z.priceCents*G.usdToEur/500)*500:z.priceCents;return{...z,qty:T,priceCents:L}}),A={...mt(C),customerId:S.id,issueDate:k,serviceDate:k,paymentTermDays:S.paymentTermDays!=null&&S.paymentTermDays!==""?Number(S.paymentTermDays):14,currency:B,language:S.language||C.language,items:E,discount:{type:"pct",value:$},fx:G},x=await cs(A);i.push({inv:x,pay:g,back:m}),(m>0||g!=="none")&&await ta(x.id,!0);let R=x.totals.totalCents;if(g==="full"){let M=Ce(k,9+f%9);await us(x.id,{date:M>n?n:M,amountCents:R,method:"Überweisung",note:""})}else if(g==="half"){let M=Ce(k,12);await us(x.id,{date:M>n?n:M,amountCents:Math.round(R/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(m,f,h)=>{let b=At(n.slice(0,8)+"01",-h,14),v=m.currency||"USD",g=La(v,h,b),$=lt(s[f],r);return cs({...mt(r),customerId:m.id,issueDate:b,serviceDate:b,currency:v,language:m.language||"de",paymentTermDays:14,items:[{...$,priceCents:v==="EUR"?Math.round($.priceCents*g.usdToEur/500)*500:$.priceCents}],fx:g})},c=await o(a[3],2,4);await bi(c.id,"Beispiel: doppelt ausgestellt");let p=await o(a[4],6,3);await vi(p.id,"Beispiel: Leistung wurde nicht erbracht."),await Ca({...mt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...lt(s[4],t(1)),qty:6}],fx:La("USD",0,n)});let d=await ds({...Ln(t(0)),customerId:a[1].id,issueDate:Ce(n,-6),validUntil:Ce(n,24),currency:"EUR",language:"de",fx:La("EUR",0,n),items:[{...lt(s[0],t(0)),priceCents:42e4},{...lt(s[1],t(0)),qty:6,priceCents:85e3}]});await na(d.id,"sent");let u=await ds({...Ln(t(1)),customerId:a[5].id,issueDate:Ce(n,-20),validUntil:Ce(n,10),currency:"USD",language:"en",fx:La("USD",0,n),items:[{...lt(s[5],t(1))}]});await na(u.id,"accepted"),await ms(Kn(t(1),{customerId:a[5].id,title:u.items[0].name,quoteId:u.id,status:"open",currency:"USD",items:ci(u,m=>y("services",m))})),await ms(Kn(t(0),{customerId:a[2].id,title:"SEO-Betreuung",refNumber:"V-2025-07",status:"signed",signedDate:At(n,-11),startDate:Ce(At(n,-11),1),endDate:Ce(n,25),noticePeriod:"1 Monat zum Laufzeitende",currency:"USD",items:[jn({serviceId:s[1].id,name:s[1].name,qty:1,unit:"Monat",priceCents:s[1].priceCents,billing:"monthly"}),jn({name:"Einrichtung SEO-Monitoring",qty:1,unit:"Pauschal",priceCents:45e3,billing:"once"})],notes:"Beispiel: läuft in Kürze aus – Verlängerung ansprechen."}));for(let[m,f,h,b,v,g,$,C,S]of $f){let k=Ce(n,-m);await Cn(Ya({companyId:t(f).id,vendor:h,category:b,description:v,currency:g,invoiceDate:k,paymentDate:Ce(k,2)>n?n:Ce(k,2),netCents:$,taxCents:C,totalCents:$+C,paymentMethod:S,fx:La(g,Math.floor(m/30),k)}))}return await ps({...bn(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[lt(s[1],t(0)),lt(s[2],t(0))]}),await ps({...bn(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:At(n,4),items:[{...lt(s[3],t(0)),qty:12,priceCents:3e3}]}),await Y(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:i.length}}async function vd(){let e=new Set(["companies","assets","settings"]);await On(Mt,async t=>{for(let n of Mt)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await qn(),Xa()}function yf(){let e=re(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:w.customers.length>0,label:"Ersten Kontakt anlegen",text:"Kunden und Kontakte gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:w.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:w.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=D(!1);async function i(){s(!0);let r=await _(async()=>(await Qi(),!0));s(!1),r&&U("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
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
  </section>`}var Co=e=>[...e].sort((t,n)=>P(n)-P(t));function yd(){ge();let e=q(),t=de(),n=bt(),a=cn(),s=re(),i=Se(()=>{let E=wl(12,e),A=wt("year",e);return{kpi:du(a,n,e),months:E,series:ks(a,{companyId:n,months:E}),byCustomer:xs(a,{companyId:n,range:A}),byService:Ss(a,{companyId:n,range:A}),byCompany:Ds(a,{range:A}),rec:An(a,{companyId:n},e)}},[w.version,n,e]),r=oe();if(!(w.invoices.length||w.expenses.length||w.customers.length||w.services.length))return l`<${yf} />`;let{kpi:c}=i,p=Ft(e.slice(0,7)),d=i.rec.filter(E=>E.status==="overdue"),u=i.rec.filter(E=>E.status!=="overdue"&&E.inv.dueDate&&E.inv.dueDate<=Ce(e,7)),m=w.recurring.filter(Oe).filter(E=>Ia(E,e)),f=w.expenses.filter(E=>E.status==="review"&&(Oe(E)||!E.companyId)),h=w.invoices.filter(Oe).filter(E=>E.status==="draft"),b=h.filter(E=>E.number),v=h.filter(E=>!E.number),g=w.invoices.filter(Oe).filter(E=>E.clarify&&E.status!=="draft"),$=w.quotes.filter(Oe).filter(E=>["open","sent"].includes(Pt(E,e))&&E.validUntil&&E.validUntil<=Ce(e,7)),C=w.contracts.filter(Oe).filter(E=>io(E,e,30)||ro(E,e)),S=!t&&s.length>1,k=S?s.map(E=>({id:E.id,label:E.shortName||E.name,color:Ms(E.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],B=i.series.map(E=>({key:E.key,label:ca(E.key),title:Ft(E.key),values:S?E[`byCompany${oe()}`]:{rev:P(E,"revenue")}})),G={columns:["Monat",...S?k.map(E=>E.label):[],`Umsatz (${oe()})`,`Umsatz (${oe()==="USD"?"EUR":"USD"})`],rows:i.series.map(E=>[Ft(E.key),...S?k.map(A=>ae(E[`byCompany${oe()}`][A.id]||0)):[],ae(P(E,"revenue")),qe(Te(E,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${p}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${ae(P(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${qe(Te(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${ae(P(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <${cd} />

    <div class="stat-row">
      <${Fe} label="Umsatz Quartal" value=${ae(P(c.quarter))} sub=${`≈ ${qe(Te(c.quarter))}`} />
      <${Fe} label="Umsatz Jahr" value=${ae(P(c.year))} sub=${`≈ ${qe(Te(c.year))}`} />
      <${Fe} label="Offene Rechnungen" value=${ae(P(c.open))} sub=${`${c.open.count} offen, ≈ ${qe(Te(c.open))}`} href="#/invoices?status=open" />
      <${Fe} label="Überfällig" value=${ae(P(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${qe(Te(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Fe} label="Bezahlt dieses Jahr" value=${ae(P(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Fe} label="Rechnung im Schnitt" value=${ae(P(c.average))} sub=${`≈ ${qe(Te(c.average))}`} />
      <${Fe} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-crm">
      <${Zc} />
      <${dd} />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${zs} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${oe()}, nach Rechnungsdatum`} series=${k} table=${G}>
          <${_s} groups=${B} series=${k} mode="stacked"
            format=${E=>ae(E)} axisFormat=${E=>ts(E,oe())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${X} title="Zu erledigen" class="dash-side">
        ${d.length+u.length+m.length+f.length+h.length+$.length+g.length+C.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${d.slice(0,5).map(E=>l`<li key=${E.inv.id}>
              <a href=${`#/invoices/${E.inv.id}`}>
                <span class="todo-icon tone-bad"><${W} name="bad" /></span>
                <span class="todo-text"><strong>${E.inv.number}</strong> ${Ve(E.inv)}
                  <span class="cell-sub">seit ${E.overdueDays} ${E.overdueDays===1?"Tag":"Tagen"} überfällig${Ps(E.inv,E.overdueDays)?`, ${(Ct.find(A=>A.id===Ps(E.inv,E.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${j(E.openCents,E.inv.currency)}</span>
              </a>
            </li>`)}
            ${d.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${d.length-5} weitere überfällige Rechnungen</a></li>`}
            ${u.slice(0,3).map(E=>l`<li key=${E.inv.id}>
              <a href=${`#/invoices/${E.inv.id}`}>
                <span class="todo-icon tone-warn"><${W} name="clock" /></span>
                <span class="todo-text"><strong>${E.inv.number}</strong> ${Ve(E.inv)}
                  <span class="cell-sub">fällig am ${F(E.inv.dueDate)}</span></span>
                <span class="todo-amount">${j(E.openCents,E.inv.currency)}</span>
              </a>
            </li>`)}
            ${g.slice(0,5).map(E=>l`<li key=${`c-${E.id}`}><a href=${`#/invoices/${E.id}`}>
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${E.number}</strong> ${Ve(E)}
                <span class="cell-sub">Klärung nötig: ${E.clarify.note}</span></span></a></li>`)}
            ${g.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${g.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${b.slice(0,5).map(E=>l`<li key=${E.id}><a href=${`#/invoices/${E.id}/edit`}>
              <span class="todo-icon tone-warn"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${E.number}</strong> ${Ve(E)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${m.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${W} name="repeat" /></span>
              <span class="todo-text"><strong>${m.length} wiederkehrende ${m.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${f.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${W} name="expense" /></span>
              <span class="todo-text"><strong>${f.length} ${f.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${v.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${v.length} ${v.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${$.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${W} name="quote" /></span>
              <span class="todo-text"><strong>${$.length} ${$.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
            ${C.length>0&&l`<li><a href="#/contracts">
              <span class="todo-icon"><${W} name="file" /></span>
              <span class="todo-text"><strong>${C.length} ${C.length===1?"Vertrag endet":"Verträge enden"}</strong>
                <span class="cell-sub">in den nächsten 30 Tagen oder sind abgelaufen</span></span></a></li>`}
          </ul>`}
      <//>
    </div>


    <div class="dash-lists">
      <${X} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${dn} rows=${Co(i.byCustomer).map(E=>({key:E.id,label:E.name,value:P(E),display:ae(P(E)),href:`#/customers/${E.id}`}))} />
      <//>
      <${X} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${dn} rows=${Co(i.byService).map(E=>({key:E.key,label:E.name,value:P(E),display:ae(P(E))}))} />
      <//>
      ${!t&&l`<${X} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${dn} rows=${Co(i.byCompany).map(E=>({key:E.id,label:E.name,value:P(E),display:ae(P(E)),color:Ms(E.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${oe()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}var Io=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function wd({params:e}){ge();let[t,n]=D(""),[a,s]=D(e&&Io.some($=>$.id===e.status)?e.status:"all"),[i,r]=D("all"),[o,c]=D(null),p=!de(),d=q(),u=Se(()=>w.invoices.filter(Oe).map($=>({inv:$,status:Di($)})),[w.version,w.settings.activeCompany]),m=wt(i,d),f=u.filter($=>i==="all"||nn($.inv.issueDate,m)),h=f.filter($=>Io.find(C=>C.id===a).test($.status,$.inv)).filter($=>Ne(t,$.inv.number,Ve($.inv),(y("companies",$.inv.companyId)||{}).name,$.inv.totals?($.inv.totals.totalCents/100).toFixed(2):"",$.inv.totals?($.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",($.inv.items||[]).map(C=>C.name).join(" "))),b=h.reduce(($,C)=>{if(C.status==="draft"||C.status==="cancelled")return $;let S=C.inv.totals?C.inv.totals.totalCents:0;return $.total+=ct(S,C.inv.currency,C.inv.fx)||0,$.open+=ct(Ta(C.inv),C.inv.currency,C.inv.fx)||0,$},{total:0,open:0}),v=[{key:"number",label:"Nummer",class:"nw",sort:$=>$.inv.number||"",render:$=>l`<span class="cell-main">${$.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:$=>Ve($.inv),render:$=>Ve($.inv)},...p?[{key:"company",label:"Unternehmen",sort:$=>(y("companies",$.inv.companyId)||{}).name||"",render:$=>l`<${Le} id=${$.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:$=>$.inv.issueDate,render:$=>F($.inv.issueDate)},{key:"due",label:"Fällig",sort:$=>$.inv.dueDate||"",render:$=>$.status==="overdue"?l`<span class="tone-bad">${F($.inv.dueDate)}</span><div class="cell-sub">seit ${hn($.inv.dueDate,d)} Tagen</div>`:F($.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:$=>ct($.inv.totals?$.inv.totals.totalCents:0,$.inv.currency,$.inv.fx)||0,render:$=>l`<${Kt} doc=${$.inv} />`},{key:"open",label:"Offen",align:"right",sort:$=>ct(Ta($.inv),$.inv.currency,$.inv.fx)||0,render:$=>{let C=Ta($.inv);return C?j(C,$.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:$=>$.status,render:$=>l`<${In} inv=${$.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:$=>{let C=bd($.inv.id),S=Ps($.inv,hn($.inv.dueDate,d)),k=B=>(Ct.find(G=>G.id===B)||{}).label||"";return l`<${I} small variant=${S?"primary":"default"} icon="clock" onClick=${()=>c($.inv)}>${S?k(S):"Erinnern"}<//>
          <span class="cell-sub nw">${C?`Zuletzt: ${k(C.level)}, ${F(C.date)}`:"Noch keine versendet"}</span>`}}]:[]],g=h.length?[`${h.length} ${h.length===1?"Beleg":"Belege"}`,"",...p?[""]:[],"","",l`<span class="strong">${ae(b.total)}</span>`,l`<span class="strong">${ae(b.open)}</span>`,l`<span class="muted-text">in ${oe()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${ke} title="Rechnungen">
      <${I} variant="primary" icon="plus" onClick=${()=>J("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${w.invoices.length>0&&l`<div class="filters">
      <${ht} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${gt} label="Status" value=${a} onChange=${s}
        options=${Io.map($=>({id:$.id,label:$.label,count:f.filter(C=>$.test(C.status,C.inv)).length})).filter($=>$.id!=="clarify"||$.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${$=>r($.target.value)}>
        ${Mn.filter($=>$.id!=="custom").map($=>l`<option value=${$.id}>${$.label}</option>`)}
      </select>
    </div>`}
    <${et} columns=${v} rows=${h} rowKey=${$=>$.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${g}
      rowClass=${$=>$.inv.clarify&&$.status!=="draft"?"row-clarify":""}
      onRowClick=${$=>J($.inv.status==="draft"?`/invoices/${$.inv.id}/edit`:`/invoices/${$.inv.id}`)}
      empty=${w.invoices.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${pe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${I} variant="primary" icon="plus" onClick=${()=>J("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${Pa} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function Eo({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?Ye(e.id).filter(G=>G.id!==n.id):Ye(e.id),o=e.totals?e.totals.totalCents:0,c=i?Ue(r):s?Math.max(o-Ue(r),0):Ta(e),p=w.settings.paymentMethods||[],[d,u]=D(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:q(),amountCents:c,method:p[0]||"",note:""}),[m,f]=D(!1),[h,b]=D(""),[v,g]=D(!1),$=G=>E=>u(A=>({...A,[G]:E})),C=i?"Erstattung":"Zahlung",S=!i&&!s?c-(Number(d.amountCents)||0):0,k=d.method&&!p.includes(d.method)?[d.method,...p]:p;async function B(){g(!0);let G=S>0&&m?h.trim()||`Differenz von ${j(S,e.currency)} offen (eingegangen: ${j(d.amountCents,e.currency)} am ${F(d.date)}).`:"",E=await _(()=>s?Dc(n.id,d):i?Ic(e.id,d):us(e.id,{...d,clarify:G}));g(!1),E&&(s?U(`${C} geändert`,"good"):i?U("Erstattung eingetragen","good"):S>0?U(G?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):U("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${Pe} title=${`${C} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${B}
    footer=${l`<${I} onClick=${a}>Abbrechen<//><${I} variant="primary" type="submit" busy=${v}>${s?"Änderung speichern":`${C} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${j(c,e.currency)}.`:s?`Höchstens ${j(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${j(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${Me} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${d.amountCents} onChange=${$("amountCents")} min=${0} />
      <${_e} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${d.date} onInput=${$("date")} max=${q()} />
      <${se} class="span-6" label="Zahlungsart" value=${d.method} onChange=${$("method")} options=${k} placeholder="Keine Angabe" />
      <${V} class="span-6" label="Notiz" value=${d.note} onInput=${$("note")} />
    </div>
    ${S>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${j(S,e.currency)}</strong> offen.</p>
      <${je} label="Differenz muss geklärt werden" checked=${m} onChange=${f}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${ie} label="Was ist zu klären?" value=${h} onInput=${b} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function No(e){let t=Nt(e.prev.doc,"invoices"),n=await Ra(ws(t));Xe(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${F(la(new Date(e.at)))}).pdf`))}function To({entityId:e}){let[t,n]=D(""),a=w.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await _(()=>No(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${Je(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${I} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function kd({id:e}){ge();let t=y("invoices",e),[n,a]=D(null),[s,i]=D(t&&t.internalNotes||""),[r,o]=D("");if(!t)return l`<${pe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${I} onClick=${()=>J("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>J(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=Di(t),p=[...Ye(e)].sort((N,ee)=>N.date<ee.date?-1:1),d=[...yn(e)].sort((N,ee)=>N.createdAt<ee.createdAt?-1:1),u=Ue(p),m=Ta(t),f=t.type==="credit_note",h=Nt(t,"invoices"),b=t.relatedInvoiceId?y("invoices",t.relatedInvoiceId):null,v=t.creditNoteId?y("invoices",t.creditNoteId):null,g=t.quoteId?y("quotes",t.quoteId):null,$=!f&&m>0,C=!f&&t.status==="credited"&&u>0,S=!f&&["issued","sent"].includes(t.status),k=t.fx?Number(t.fx.usdToEur):null;async function B(){o("pdf"),await _(()=>Wi(t,"invoices")),o("")}async function G(){if(u>0){U("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let N=await ue({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(N===null)return;await _(async()=>(await bi(e,N),!0))&&U("Rechnung storniert","good")}async function E(){if(!await ue({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${p.length?` Die eingetragenen Zahlungen (${j(u,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await _(()=>xc(e))&&(U(`${t.number} ist wieder ein Entwurf`,"good"),J(`/invoices/${e}/edit`))}async function A(){if(!await ue({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await _(()=>Nc(e))&&U("Stornierung zurückgenommen","good")}async function x(){let N=f?t:v,ee=f?b:t;if(!N||!await ue({title:`Gutschrift ${N.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${ee?` Die Rechnung ${ee.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let O=await _(()=>Vr(N.id));O&&(U(`Gutschrift ${O.creditNumber} zurückgenommen`,"good"),f&&J(O.invoiceId?`/invoices/${O.invoiceId}`:"/invoices",{replace:!0}))}async function R(){await _i(t)&&J("/invoices",{replace:!0})}async function M(){let N=await ue({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(N===null)return;await _(()=>Sc(e,N))&&U("Klärung vermerkt","good")}async function T(){let N=await ue({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${j(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(N===null)return;await _(()=>Cc(e,N))&&U("Klärung erledigt","good")}async function z(){let N=await ue({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${j(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${u>0?` Zu dieser Rechnung sind bereits ${j(u,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(N===null)return;let ee=await _(()=>vi(e,N));ee&&(U(`Gutschrift ${ee.number} erstellt`,"good"),J(`/invoices/${ee.id}`))}async function L(N){if(!await ue({title:"Zahlung löschen?",text:`Die Zahlung über ${j(N.amountCents,t.currency)} vom ${F(N.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await _(async()=>(await Ec(N.id),!0))&&U("Zahlung gelöscht","good")}async function Q(){await _(async()=>(await $i("invoices",e,s),!0))&&U("Notiz gespeichert","good")}return l`
    <${ke} title=${l`${f?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${In} inv=${t} /> <span class="head-meta">${Ve(t)}</span>`}>
      <${I} icon="download" busy=${r==="pdf"} onClick=${B}>PDF<//>
      ${!f&&t.status==="issued"&&l`<${I} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${I} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${$&&l`<${I} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${St} items=${[!f&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>_(()=>ta(e,!0))},!f&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!f&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>_(()=>ta(e,!1))},!f&&m>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},S&&{label:"Zurück in den Entwurf",icon:"edit",onClick:E},!f&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:M},!f&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>J(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:A},(f||t.status==="credited"&&v)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:f,onClick:x},S&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:z},S&&{label:"Stornieren",icon:"x",danger:!0,onClick:G},!f&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:R}]} />
    <//>

    ${t.clarify&&l`<${xe} tone="warn" action=${l`<div class="notice-actions">
        <${I} small onClick=${M}>Ändern<//>
        <${I} small variant="primary" icon="check" onClick=${T}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${Je(t.clarify.at)} · ${m>0?`offen sind ${j(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${xe} tone="warn" action=${l`<${I} small icon="undo" onClick=${A}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${Je(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${v&&l`<${xe} tone="info" action=${l`<${I} small onClick=${()=>J(`/invoices/${v.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${v.number} erstellt.
    <//>`}
    ${b&&l`<${xe} tone="info" action=${l`<${I} small onClick=${()=>J(`/invoices/${b.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${b.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${Ma} model=${h} />
      </div>
      <aside class="split-side">
        <${X} title="Stand">
          <${xn} rows=${[["Unternehmen",l`<${Le} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Ve(t)}</a>`],["Gesamtbetrag",l`<${Kt} doc=${t} />`],!f&&["Bezahlt",j(u,t.currency)],!f&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${j(m,t.currency)}</span>`],!f&&t.dueDate&&["Fällig am",l`${F(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${hn(t.dueDate,q())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",Je(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",Je(t.firstFinalizedAt)],t.sentAt&&["Versendet",Je(t.sentAt)],g&&["Aus Angebot",l`<a href=${`#/quotes/${g.id}`}>${Qe(g)}</a>`],t.contractId&&y("contracts",t.contractId)&&["Zu Vertrag",l`<a href=${`#/contracts?open=${t.contractId}`}>${y("contracts",t.contractId).title}</a>`]]} />
        <//>

        ${!f&&l`<${X} title="Zahlungen" action=${$?l`<${I} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:C&&l`<${I} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${p.length?l`<ul class="plain-list">
                ${p.map(N=>l`<li class="row-between" key=${N.id}>
                  <span><span class="strong">${j(N.amountCents,t.currency)}</span>
                    <span class="cell-sub">${N.amountCents<0?"Erstattung, ":""}${F(N.date)}${N.method?`, ${N.method}`:""}${N.note?` – ${N.note}`:""}</span></span>
                  <span class="row-actions">
                    <${I} variant="ghost" small icon="edit" title=${N.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:N})} />
                    <${I} variant="ghost" small icon="trash" title=${N.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>L(N)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${d.length>0&&l`<${X} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${d.map(N=>l`<li class="row-between" key=${N.id}>
              <span>${(Ct.find(ee=>ee.id===N.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${F(N.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${X} title="Wechselkurs">
          ${k?l`<p class="strong">1 USD = ${Da(k)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${F(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${X} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${I} small variant="primary" onClick=${Q}>Notiz speichern<//></div>`}
        <//>

        <${X} title="Verlauf"><${To} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${Eo} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${Eo} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${Eo} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${Pa} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${Pa} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}function wf({quote:e}){return l`<span class="cell-main">${Qe(e)}</span>${e.source==="upload"&&l` <span class="pdf-tag" title="Hochgeladenes PDF">PDF</span>`}
    ${e.source==="upload"&&e.refNumber&&e.title&&l`<div class="cell-sub">${e.title}</div>`}`}var xd=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function Dd(){ge();let[e,t]=D(""),[n,a]=D("all"),[s,i]=D(null),r=!de(),o=q(),c=Se(()=>w.quotes.filter(Oe).map(u=>({quote:u,status:Pt(u,o)})),[w.version,w.settings.activeCompany]),p=c.filter(u=>xd.find(m=>m.id===n).test(u.status)).filter(u=>Ne(e,u.quote.number,u.quote.refNumber,u.quote.title,Ve(u.quote),(u.quote.items||[]).map(m=>m.name).join(" "))),d=[{key:"number",label:"Nummer",class:"nw",sort:u=>Qe(u.quote),render:u=>l`<${wf} quote=${u.quote} />`},{key:"customer",label:"Kontakt",sort:u=>Ve(u.quote),render:u=>Ve(u.quote)},...r?[{key:"company",label:"Unternehmen",render:u=>l`<${Le} id=${u.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:u=>u.quote.issueDate,render:u=>F(u.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:u=>u.quote.validUntil||"",render:u=>F(u.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:u=>ct(u.quote.totals?u.quote.totals.totalCents:0,u.quote.currency,u.quote.fx)||0,render:u=>l`<${Kt} doc=${u.quote} />`},{key:"status",label:"Status",sort:u=>u.status,render:u=>l`<${gs} quote=${u.quote} />`}];return l`
    <${ke} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung. Extern gestaltete Angebote lädst du als PDF hoch.">
      <${I} icon="upload" onClick=${()=>i(sa())}>PDF hochladen<//>
      <${I} variant="primary" icon="plus" onClick=${()=>J("/quotes/new")}>Neues Angebot<//>
    <//>
    ${w.quotes.length>0&&l`<div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Nummer, Kontakt, Leistung" />
      <${gt} label="Status" value=${n} onChange=${a}
        options=${xd.map(u=>({id:u.id,label:u.label,count:c.filter(m=>u.test(m.status)).length}))} />
    </div>`}
    <${et} columns=${d} rows=${p} rowKey=${u=>u.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${u=>J(u.quote.status==="draft"?`/quotes/${u.quote.id}/edit`:`/quotes/${u.quote.id}`)}
      empty=${w.quotes.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${pe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${I} variant="primary" icon="plus" onClick=${()=>J("/quotes/new")}>Erstes Angebot schreiben<//>
            <${I} icon="upload" onClick=${()=>i(sa())}>PDF hochladen<//>
          <//>`} />
    ${s&&l`<${As} quote=${s} onClose=${()=>i(null)} onSaved=${u=>J(`/quotes/${u.id}`)} />`}
  `}function Sd({id:e}){ge();let t=y("quotes",e),[n,a]=D(null),[s,i]=D(t&&t.internalNotes||""),[r,o]=D("");if(!t)return l`<${pe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${I} onClick=${()=>J("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>J(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=Pt(t,q()),p=t.source==="upload",d=p?null:Nt(t,"quotes"),u=w.contracts.filter(S=>S.quoteId===e),m=Qe(t),f=t.invoiceId?y("invoices",t.invoiceId):null,h=["open","sent","expired"].includes(c);async function b(){o("pdf"),await _(()=>p?$o((t.attachmentIds||[])[0]):Wi(t,"quotes")),o("")}async function v(){if(!await ue({title:"Angebot löschen?",text:`„${m}“ wird samt PDF gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await _c(e),!0))&&(U("Angebot gelöscht","good"),J("/quotes"))}async function g(S,k){await _(async()=>(await na(e,S),!0))&&U(k,"good")}async function $(){if(!await ue({title:"In Rechnung umwandeln?",text:p?`Aus dem Angebot „${m}“ entsteht ein Rechnungsentwurf mit dem Angebotsbetrag als Position. Du kannst ihn vor dem Erstellen noch anpassen, z. B. in einzelne Leistungen aufteilen.`:`Aus dem Angebot ${m} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let k=await _(()=>Bc(e));o(""),k&&(U("Rechnungsentwurf angelegt","good"),J(`/invoices/${k.id}/edit`))}async function C(){await _(async()=>(await $i("quotes",e,s),!0))&&U("Notiz gespeichert","good")}return l`
    <${ke} title=${`Angebot ${m}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${gs} quote=${t} />${p?l` <span class="pdf-tag">PDF</span>`:""} <span class="head-meta">${Ve(t)}</span>`}>
      <${I} icon="download" busy=${r==="pdf"} onClick=${b}>PDF<//>
      ${p&&l`<${I} icon="edit" onClick=${()=>a("edit")}>Bearbeiten<//>`}
      ${!p&&c==="open"&&l`<${I} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${["accepted","invoiced"].includes(c)&&!u.length&&l`<${I} icon="file" onClick=${()=>a({contract:Ts(t)})}>Vertrag anlegen<//>`}
      ${!f&&c!=="declined"&&l`<${I} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${$}>In Rechnung umwandeln<//>`}
      <${St} items=${[h&&{label:"Als angenommen markieren",icon:"check",onClick:()=>g("accepted","Angebot angenommen")},h&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>g("declined","Angebot abgelehnt")},p&&c==="open"&&{label:"Als versendet markieren",icon:"send",onClick:()=>g("sent","Als versendet markiert")},!p&&c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!f&&{label:"Wieder öffnen",icon:"undo",onClick:()=>g("open","Angebot wieder geöffnet")},u.length>0&&{label:"Weiteren Vertrag anlegen",icon:"file",onClick:()=>a({contract:Ts(t)})},!p&&{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>J(`/quotes/new?copy=${e}`)},p&&{label:"Löschen",icon:"trash",danger:!0,disabled:!!f,onClick:v}]} />
    <//>

    ${f&&l`<${xe} tone="info" action=${l`<${I} small onClick=${()=>J(`/invoices/${f.id}${f.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${f.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${f.number}`}.
    <//>`}
    ${c==="expired"&&l`<${xe} tone="warn">Dieses Angebot ist seit dem ${F(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main">${p?l`<div class="doc-upload">${(t.attachmentIds||[])[0]?l`<${Es} attachmentId=${t.attachmentIds[0]} />`:l`<${xe} tone="warn">Zu diesem Angebot ist kein PDF gespeichert.<//>`}</div>`:l`<${Ma} model=${d} />`}</div>
      <aside class="split-side">
        <${X} title="Stand">
          <${xn} rows=${[["Unternehmen",l`<${Le} id=${t.companyId} />`],["Kontakt",l`<a href=${`#/customers/${t.customerId}`}>${Ve(t)}</a>`],p&&["Bezeichnung",t.title],p&&t.refNumber&&["Nummer im Dokument",t.refNumber],["Angebotssumme",l`<${Kt} doc=${t} />`],["Angebotsdatum",F(t.issueDate)],["Gültig bis",F(t.validUntil)],[p?"Hochgeladen":"Erstellt",Je(t.finalizedAt)],t.sentAt&&["Versendet",Je(t.sentAt)],t.decidedAt&&["Entschieden",Je(t.decidedAt)]]} />
        <//>
        ${u.length>0&&l`<${X} title="Vertrag">
          <ul class="plain-list linked-list">${u.map(S=>l`<li key=${S.id}>
            <button type="button" class="link-btn" onClick=${()=>a({contract:S})}>${S.title}</button>
            <${Fi} contract=${S} /> <span class="muted-text">${Ns(S)}</span></li>`)}</ul>
        <//>`}
        <${X} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${I} small variant="primary" onClick=${C}>Notiz speichern<//></div>`}
        <//>
        <${X} title="Verlauf"><${To} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${Pa} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
    ${n==="edit"&&l`<${As} quote=${t} onClose=${()=>a(null)} />`}
    ${n&&n.contract&&l`<${Rs} key=${n.contract.id} contract=${n.contract} onClose=${()=>a(null)} />`}
  `}function Ed(e="year"){let[t,n]=D(e),[a,s]=D({from:`${q().slice(0,4)}-01-01`,to:q()}),i=wt(t,q(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function kf(e){let t=Mn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${F(e.range.from)} bis ${F(e.range.to)}`}function Nd({p:e}){let t=de();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${Mn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>$e(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>$e(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${F(e.range.from)} bis ${F(e.range.to)}`:""}</span>
  </div>`}var Td=(e,t)=>t?It(Math.round(e/t*1e3)/10):"–",De=e=>({v:e/100,t:ae(e)}),Bn=e=>({v:e/100,t:qe(e)}),We=(e,t)=>({v:e/100,t:j(e,t)}),Ka=e=>({v:e||"",t:e?F(e):""}),be={align:"right",type:"money"},Rn={align:"right",type:"number"};function Ad(){ge();let e=Ed("year"),t=q(),n=bt(),a=de(),s=cn(),i=Se(()=>{let u={companyId:n,range:e.range},m=no(e.range,s,n),f=m.slice(-24);return{summary:fu(s,u,t),truncated:m.length>f.length,series:f.length?ks(s,{companyId:n,months:f,range:e.range}):[],byCompany:Ds(s,u),byCustomer:xs(s,u),byService:Ss(s,u),byCategory:to(s,u)}},[w.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(u=>({key:u.key,label:ca(u.key),title:Ft(u.key),values:{rev:P(u,"revenue"),exp:P(u,"expense")}})),p={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(u=>[Ft(u.key),ae(P(u,"revenue")),ae(P(u,"expense")),ae(P(u,"profit")),ae(P(u,"payments"))])},d=u=>[...u].sort((m,f)=>P(f)-P(m));return l`
    <${ke} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${oe()}, ${En()} als Zweitwert.`}>
      <${I} icon="reports" onClick=${()=>J("/reports")}>Reports und Export<//>
    <//>
    <${Nd} p=${e} />

    <div class="stat-row stat-row-3">
      <${Fe} label="Einnahmen" value=${ae(P(r.income))} sub=${`≈ ${qe(Te(r.income))}, ${r.income.count} Rechnungen`} />
      <${Fe} label="Ausgaben" value=${ae(P(r.expenses))} sub=${`≈ ${qe(Te(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Fe} label="Gewinn" value=${ae(P(r.profit))} tone=${P(r.profit)<0?"bad":"good"} sub=${`≈ ${qe(Te(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Fe} label="Zahlungseingänge" value=${ae(P(r.payments))} sub=${`≈ ${qe(Te(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Fe} label="Offene Forderungen (heute)" value=${ae(P(r.receivables))} sub=${`≈ ${qe(Te(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Fe} label="Steuern (Saldo)" value=${ae(P(r.taxBalance))}
        sub=${`berechnet ${ae(P(r.taxCollected))}, in Ausgaben ${ae(P(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${zs} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${oe()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${oe()}`} series=${o} table=${p}>
      <${_s} groups=${c} series=${o} mode="grouped" format=${u=>ae(u)} axisFormat=${u=>ts(u,oe())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${X} title="Umsatz pro Unternehmen">
        <${dn} rows=${d(i.byCompany).map(u=>({key:u.id,label:u.name,value:P(u),display:ae(P(u)),color:Ms(u.color)}))} />
      <//>`}
      <${X} title="Umsatz pro Kunde">
        <${dn} rows=${d(i.byCustomer).map(u=>({key:u.id,label:u.name,value:P(u),display:ae(P(u)),href:`#/customers/${u.id}`}))} />
      <//>
      <${X} title="Umsatz pro Leistung">
        <${dn} rows=${d(i.byService).map(u=>({key:u.key,label:u.name,value:P(u),display:ae(P(u))}))} />
      <//>
      <${X} title="Ausgaben nach Kategorie">
        <${dn} rows=${d(i.byCategory).map(u=>({key:u.name,label:u.name,value:P(u),display:ae(P(u)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function Ao(e,t,n,a,s){let i=mu(e,t,n),r=i.reduce((o,c)=>({c:o.c+P(c),a:o.a+Te(c),tax:o.tax+P(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...Rn},{label:`Umsatz netto (${oe()})`,...be},{label:`Umsatz netto (${En()})`,...be},{label:`Steuer (${oe()})`,...be}],rows:i.map(o=>[a(o.key),o.count,De(P(o)),Bn(Te(o)),De(P(o,"tax"))]),totals:["Summe",r.count,De(r.c),Bn(r.a),De(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?ca(o.key):a(o.key),title:a(o.key),values:{rev:P(o)}}))}}}function Ro(e,t,n=[]){let a=[...e].sort((i,r)=>P(r)-P(i)),s=a.reduce((i,r)=>({c:i.c+P(r),a:i.a+Te(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${oe()})`,...be},{label:`Umsatz netto (${En()})`,...be},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),De(P(i)),Bn(Te(i)),Td(P(i),s.c)]),totals:["Summe",...n.map(()=>""),De(s.c),Bn(s.a),""]}}function Cd(e,t,n,a){let s=An(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+P(c,"open"),0),r=uu.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,p)=>c+P(p,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...Rn},{label:"Währung"},{label:"Rechnungsbetrag",...be},{label:"Offen",...be},{label:`Offen (${oe()})`,...be}],rows:s.map(o=>[o.inv.number,Ve(o.inv),(y("companies",o.inv.companyId)||{}).name||"",Ka(o.inv.issueDate),Ka(o.inv.dueDate),o.overdueDays,o.inv.currency,We(o.inv.totals.totalCents,o.inv.currency),We(o.openCents,o.inv.currency),De(P(o,"open"))]),totals:["Summe","","","","","","","","",De(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var Bo=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>Ao(e,t,"month",Ft,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>Ao(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>Ao(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>Ro(xs(e,t),"Kunde",[{col:{label:"Rechnungen",...Rn},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>Ro(Ds(e,t),"Unternehmen",[{col:{label:"Rechnungen",...Rn},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>Ro(Ss(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...Rn},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:Gn(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=pu(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...Rn},{label:"Netto",...be},{label:"Steuer",...be},{label:"Brutto",...be},{label:"Netto in USD",...be},{label:"Netto in EUR",...be}],rows:n.map(a=>[a.currency,a.count,We(a.netCents,a.currency),We(a.taxCents,a.currency),We(a.totalCents,a.currency),We(a.usd,"USD"),We(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",We(n.reduce((a,s)=>a+s.usd,0),"USD"),We(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>Cd(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>Cd(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=no(t.range,e,t.companyId),a=n.length?ks(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+P(r,"revenue"),exp:i.exp+P(r,"expense"),alt:i.alt+Te(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${oe()})`,...be},{label:`Ausgaben (${oe()})`,...be},{label:`Gewinn (${oe()})`,...be},{label:`Gewinn (${En()})`,...be}],rows:a.map(i=>[Ft(i.key),De(P(i,"revenue")),De(P(i,"expense")),De(P(i,"profit")),Bn(Te(i,"profit"))]),totals:["Summe",De(s.rev),De(s.exp),De(s.rev-s.exp),Bn(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:ca(i.key),title:Ft(i.key),values:{rev:P(i,"revenue"),exp:P(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...to(e,t)].sort((s,i)=>P(i)-P(s)),a=n.reduce((s,i)=>({c:s.c+P(i),a:s.a+Te(i),tax:s.tax+P(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...Rn},{label:`Netto (${oe()})`,...be},{label:`Netto (${En()})`,...be},{label:`Steuer (${oe()})`,...be},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,De(P(s)),Bn(Te(s)),De(P(s,"tax")),Td(P(s),a.c)]),totals:["Summe",a.count,De(a.c),Bn(a.a),De(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=gu(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...be},{label:"Steuer",...be},{label:`Steuer (${oe()})`,...be}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${It(a.rate)}`,a.currency,We(a.netCents,a.currency),We(a.taxCents,a.currency),De(P(a,"tax"))]),["In Ausgaben enthaltene Steuer",oe(),"","",De(-P(n,"paid"))]],totals:["Saldo","","","",De(P(n,"collected")-P(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=ut(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+P(r,"net"),tax:i.tax+P(r,"tax"),total:i.total+P(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...be},{label:"Steuer",...be},{label:"Brutto",...be},{label:`Netto (${oe()})`,...be},{label:"Kurs USD/EUR",...Rn},{label:"Bezahlt",...be},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=Ye(r.id),c=Yt(r,o,n);return[r.number,Ka(r.issueDate),Ve(r),(y("companies",r.companyId)||{}).name||"",r.currency,We(r.totals.netCents,r.currency),We(r.totals.taxCents,r.currency),We(r.totals.totalCents,r.currency),De(P(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:Gn(r.fx.usdToEur,"de",4)}:"",We(Ue(o),r.currency),(ja[c]||{}).label||c]}),totals:["Summe","","","",oe(),De(s.net),De(s.tax),De(s.total),De(s.net),"","",""],note:`Die Summenzeile ist in ${oe()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=Ri(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...be},{label:`Betrag (${oe()})`,...be}],rows:n.map(a=>[Ka(a.date),a.inv.number,Ve(a.inv),a.pay.method||"",a.inv.currency,We(a.pay.amountCents,a.inv.currency),De(P(a))]),totals:["Summe","","","","","",De(n.reduce((a,s)=>a+P(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=Ba(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+P(i,"net"),tax:s.tax+P(i,"tax"),total:s.total+P(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...be},{label:"Steuer",...be},{label:"Gesamt",...be},{label:`Gesamt (${oe()})`,...be},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[Ka(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(y("companies",i.companyId)||{}).name||"",i.currency,We(i.netCents,i.currency),We(i.taxCents,i.currency),We(i.totalCents,i.currency),De(P(s,"total")),Ka(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",oe(),De(a.net),De(a.tax),De(a.total),De(a.total),"",""],note:`Die Summenzeile ist in ${oe()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],Id=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function Rd({params:e}){ge();let[t,n]=D(e&&e.r&&Bo.find(v=>v.id===e.r)?e.r:"month"),a=Ed("year"),[s,i]=D(""),r=q(),o=bt(),c=de(),p=cn(),d=Bo.find(v=>v.id===t),u=Se(()=>d.build(p,{companyId:o,range:a.range},r),[w.version,t,o,a.range.from,a.range.to,oe()]),m=t==="open"||t==="overdue",f=`${c?c.name:"Alle Unternehmen"}, ${m?`Stichtag ${F(r)}`:kf(a)}`,h={title:d.label,subtitle:f,fileName:`${d.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:u.columns,rows:u.rows,totals:u.totals};async function b(v){i(v),await _(async()=>{v==="csv"?Ki(h):v==="xlsx"?await Su(h):await Cu(h)}),i("")}return l`
    <${ke} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${I} icon="download" busy=${s==="csv"} disabled=${!u.rows.length} onClick=${()=>b("csv")}>CSV<//>
      <${I} icon="download" busy=${s==="xlsx"} disabled=${!u.rows.length} onClick=${()=>b("xlsx")}>Excel<//>
      <${I} icon="download" busy=${s==="pdf"} disabled=${!u.rows.length} onClick=${()=>b("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${Bo.map(v=>l`<button type="button" class=${`report-link${v.id===t?" is-on":""}`} aria-current=${v.id===t?"true":void 0}
          onClick=${()=>n(v.id)}>${v.label}</button>`)}
      </nav>
      <div class="report-body">
        <${Nd} p=${a} />
        ${u.note&&l`<p class="footnote">${u.note}</p>`}
        ${u.aging&&l`<div class="stat-row stat-row-5">
          ${u.aging.map(v=>l`<${Fe} label=${v.label} value=${ae(v.value)} sub=${`${v.count} ${v.count===1?"Rechnung":"Rechnungen"}`} tone=${v.id!=="current"&&v.value?"bad":""} />`)}
        </div>`}
        ${u.chart&&u.chart.groups.length>1&&l`<${zs} title=${d.label} sub=${`Netto in ${oe()}`} series=${u.chart.series}>
          <${_s} groups=${u.chart.groups} series=${u.chart.series} mode=${u.chart.mode||"stacked"}
            format=${v=>ae(v)} axisFormat=${v=>ts(v,oe())} ariaLabel=${d.label} />
        <//>`}
        ${u.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${u.columns.map(v=>l`<th class=${v.align==="right"?"r":""}>${v.label}</th>`)}</tr></thead>
              <tbody>${u.rows.map(v=>l`<tr>${v.map((g,$)=>l`<td class=${u.columns[$].align==="right"?"r":""}>${Id(g)}</td>`)}</tr>`)}</tbody>
              ${u.totals&&l`<tfoot><tr>${u.totals.map((v,g)=>l`<td class=${u.columns[g].align==="right"?"r":""}>${Id(v)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${pe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function Bd(){ge();let[e,t]=D({}),n=[...w.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ce(()=>{let a=!0;return Promise.all(n.map(s=>ls(s,"invoice",q()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[w.version]),l`
    <${ke} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${I} variant="primary" icon="plus" onClick=${()=>J("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${pe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${I} variant="primary" icon="plus" onClick=${()=>J("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${an(a.logoAssetId)?l`<img src=${an(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
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
  `}function Ud({id:e}){ge();let t=e&&e!=="new"?y("companies",e):null,[n,a]=D(()=>t?ye(t):Wa()),[s,i]=D(null),[r,o]=D(!1),[c,p]=D(!1),[d,u]=D({}),[m,f]=D(null),h=ve(null),b=q(),v=R=>{a(R),o(!0)},g=R=>M=>v(T=>({...T,[R]:M}));if(ce(()=>(r?ti(ni):sn(),()=>sn()),[r]),ce(()=>{let R=!0;return Promise.all(["invoice","quote","credit"].map(M=>ls(n,M,b).catch(()=>""))).then(([M,T,z])=>{R&&u({invoice:M,quote:T,credit:z})}),()=>{R=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,w.version]),e&&e!=="new"&&!t)return l`<${pe} icon="company" title="Unternehmen nicht gefunden"><${I} onClick=${()=>J("/companies")}>Zur Übersicht<//><//>`;let $=t?y("counters",Jn(t.id,"invoice",Lt(t,"invoice").pattern,b)):null,C=$?$.last:0,S=s||an(n.logoAssetId),k={invoice:Jt(n.invoicePattern),quote:Jt(n.quotePattern),credit:Jt(n.creditPattern)};async function B(R){if(!R)return;let M=await _(()=>yu(R));M&&(i(M),o(!0))}async function G(){p(!0);let R=await _(()=>rs(n,s));p(!1),R&&(i(null),a(ye(R)),o(!1),sn(),U("Unternehmen gespeichert","good"),t||wn(`/companies/${R.id}`))}async function E(){if(m==null||!t||!await ue({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${b.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await _(async()=>(await kc(t,"invoice",b,m),!0))&&(U("Nummernkreis angepasst","good"),f(null))}async function A(){await _(async()=>(await lc(t.id,!t.archived),!0))&&(U(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(M=>({...M,archived:!t.archived})))}async function x(){if(!await ue({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await cc(t.id),!0))&&(U("Unternehmen gelöscht","good"),wn("/companies"))}return l`
    <${ke} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${St} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:A},{label:"Löschen",icon:"trash",danger:!0,disabled:zr(t.id),onClick:x}]} />`}
      <${I} variant="primary" icon="check" busy=${c} onClick=${G}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${xe} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${X} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${V} class="span-4" label="Unternehmensname" value=${n.name} onInput=${g("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${V} class="span-2" label="Kurzname" value=${n.shortName} onInput=${g("shortName")} hint="Für den Company Switcher" />
          <${V} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${g("legalForm")} />
          <${we} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${R=>g("brandColor")(R.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${we} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${S?l`<img src=${S} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${I} icon="upload" onClick=${()=>h.current&&h.current.click()}>${S?"Logo ersetzen":"Logo hochladen"}<//>
              ${S&&l`<${I} variant="ghost" icon="trash" onClick=${()=>{i(null),g("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${h} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${R=>{B(R.target.files[0]),R.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${X} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${V} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${g("street")} />
          <${V} class="span-2" label="PLZ" value=${n.zip} onInput=${g("zip")} />
          <${V} class="span-4" label="Ort" value=${n.city} onInput=${g("city")} />
          <${V} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${g("region")} />
          <${V} class="span-3" label="Land" value=${n.country} onInput=${g("country")} />
          <${V} class="span-2" label="Telefon" value=${n.phone} onInput=${g("phone")} />
          <${V} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${g("email")} />
          <${V} class="span-2" label="Website" value=${n.website} onInput=${g("website")} />
        </div>
      <//>

      <${X} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${V} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${g("taxId")} />
          <${V} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${g("vatId")} />
          <${V} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${g("registerInfo")} />
        </div>
      <//>

      <${X} title="Bank und Zahlung">
        <div class="form-grid">
          <${V} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${g("accountHolder")} />
          <${V} class="span-3" label="Bank" value=${n.bankName} onInput=${g("bankName")} />
          <${V} class="span-4" label="IBAN" value=${n.iban} onInput=${g("iban")} />
          <${V} class="span-2" label="BIC" value=${n.bic} onInput=${g("bic")} />
          <${ie} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${g("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${ie} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${g("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${X} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${V} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${g("invoicePrefix")} placeholder="z. B. HL" />
          <${V} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${g("invoicePattern")} error=${k.invoice}
            hint=${d.invoice?`Nächste Rechnung: ${d.invoice}`:""} />
          <${Me} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${g("numberDigits")} />
          <${V} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${g("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${V} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${g("quotePattern")} error=${k.quote}
            hint=${d.quote?`Nächstes Angebot: ${d.quote}`:""} />
          <${V} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${g("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${V} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${g("creditPattern")} error=${k.credit}
            hint=${d.credit?`Nächste Gutschrift: ${d.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${we} label=${`Zuletzt vergebene laufende Rechnungsnummer ${b.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${Ge} id="counter-last" value=${m??C} digits=${0} min=${0} onChange=${R=>f(R)} />
              <${I} disabled=${m==null||m===C} onClick=${E}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${X} title="Standards für neue Belege">
        <div class="form-grid">
          <${se} class="span-2" label="Währung" value=${n.currency} onChange=${g("currency")} options=${Ae} />
          <${se} class="span-2" label="Belegsprache" value=${n.language} onChange=${g("language")} options=${Bt} />
          <${Me} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${g("paymentTermDays")} />
          <${Me} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${g("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${V} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${g("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${ie} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${g("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${je} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${g("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${je} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${g("showFxNote")} /></div>
        </div>
      <//>

      <${X} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${se} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${g("meetingProvider")}
            placeholder="Keiner" options=${ma} />
          <${V} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${g("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${ie} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${g("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${Me} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${g("meetingDuration")} />
          <${se} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${g("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${st()})`} options=${Ws.map(R=>({id:R,label:R.replace(/_/g," ")}))}
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
        <${I} variant="primary" icon="check" busy=${c} onClick=${G}>Unternehmen speichern<//>
      </div>
    </div>
  `}var Md=["aiApiKey"],_d=["lastBackupAt","changesSinceBackup"],zd="bbc-finance-backup";function xf(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Df(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function Pd(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function Uo({includeFiles:e=!0}={}){let t={};for(let o of dt)t[o]=await ba(o);let n=await ba("settings"),a={};for(let o of n)Md.includes(o.key)||_d.includes(o.key)||(a[o.key]=o.value);let s={format:zd,schemaVersion:mr,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(dt.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await ba("blobs");for(let c=0;c<o.length;c++){let p=await xf(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(p)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function Ld(){await Y(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function Kd(e){let t=new Map,n=0,a=(d,u)=>{try{t.set(d,Df(u))}catch{n+=1}},s=null,i="",r=0,o=!1,c=d=>{r+=1;let u=d.trim();if(!u)return;if(r===1&&/"files":\{$/.test(u)){s=JSON.parse(`${u}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(u==="}}")return;let m=JSON.parse(`{${u.replace(/,$/,"")}}`);for(let[f,h]of Object.entries(m))a(f,h)},p=async()=>{let d;try{d=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(d&&typeof d=="object"&&d.files&&typeof d.files=="object"){for(let[u,m]of Object.entries(d.files))a(u,m);delete d.files}return d};if(!e.stream||typeof TextDecoderStream>"u")return s=await p(),{json:s,files:t,badFiles:n};try{let d=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:u,done:m}=await d.read();if(m)break;i+=u;let f=i.indexOf(`
`);for(;f>=0;)c(i.slice(0,f)),i=i.slice(f+1),f=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(d){if(!(d instanceof SyntaxError))throw d;t.clear(),n=0,s=await p()}return{json:s,files:t,badFiles:n}}var mn=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Oa=e=>typeof e=="number"&&Number.isFinite(e);function Mo(e,t){if(!mn(e)||e.format!==zd)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>mr)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!mn(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of dt){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=$a(s);for(let o of i)if(!mn(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!mn(r.totals)||!Oa(r.totals.totalCents)||!Oa(r.totals.netCents)||!Oa(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number&&!(s==="quotes"&&r.source==="upload"))throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!Oa(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(Oa))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(dt.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:mn(e.files)?Object.keys(e.files).length:0}}function Sf(e){let t={};if(!mn(e))return t;for(let n of Object.keys(Zt)){if(!Object.hasOwn(e,n)||Md.includes(n)||_d.includes(n))continue;let a=Zt[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?Oa(r):typeof r=="string"))continue;t[n]=s}else mn(a)?mn(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function Od({json:e,files:t,badFiles:n=0}){Mo(e,t);let a=w.settings.aiApiKey||"",s=Sf(e.settings);return await On(Mt,async r=>{for(let o of Mt)await r.clear(o);for(let o of dt)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:Ke(),at:ne(),user:w.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:mn(e.counts)?e.counts:null}})}),await qn(),Xa(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function Fd(){await On(Mt,async e=>{for(let t of Mt)await e.clear(t)}),await qn(),Xa()}var Cf="bbc-finance-device",Yi="handles",_o="backupFolder",zo=()=>typeof window<"u"&&typeof window.showDirectoryPicker=="function"&&window.isSecureContext!==!1;function If(){return new Promise((e,t)=>{let n=indexedDB.open(Cf,1);n.onupgradeneeded=()=>{n.result.objectStoreNames.contains(Yi)||n.result.createObjectStore(Yi)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Po(e,t){let n=await If();try{return await new Promise((a,s)=>{let i=n.transaction(Yi,e),r=t(i.objectStore(Yi));i.oncomplete=()=>a(r&&r.result),i.onerror=()=>s(i.error),i.onabort=()=>s(i.error)})}finally{n.close()}}async function Lo(){if(!zo())return null;try{return await Po("readonly",e=>e.get(_o))||null}catch{return null}}async function qd(){let e;try{e=await window.showDirectoryPicker({id:"bbc-finance-backups",mode:"readwrite",startIn:"documents"})}catch(t){if(t&&t.name==="AbortError")return null;throw new Error("Der Ordner konnte nicht gewählt werden. Systemordner wie „Downloads“ oder der Schreibtisch selbst sind teils gesperrt – bitte einen Unterordner wählen.")}return await Po("readwrite",t=>t.put(e,_o)),e}async function Vd(){try{await Po("readwrite",e=>e.delete(_o))}catch{}}async function Ef(e){let t={mode:"readwrite"};return typeof e.queryPermission=="function"&&await e.queryPermission(t)==="granted"?!0:typeof e.requestPermission=="function"?await e.requestPermission(t)==="granted":typeof e.queryPermission!="function"}async function Zd(e,t){let n=await Lo();if(!n)return{saved:!1,reason:"none"};let a=!1;try{a=await Ef(n)}catch{a=!1}if(!a)return{saved:!1,reason:"denied",folder:n.name};let s=await t();try{let r=await(await n.getFileHandle(e,{create:!0})).createWritable();return await r.write(s),await r.close(),{saved:!0,folder:n.name,size:s.size,blob:s}}catch(i){return{saved:!1,reason:"error",folder:n.name,blob:s,message:i&&i.message}}}async function Oo(e=!0){let t=Pd(),n=await Zd(t,()=>Uo({includeFiles:e})),a="";if(!n.saved){let s=n.blob||await Uo({includeFiles:e});Xe(s,t),n.size=s.size,n.reason==="denied"&&(a=`Kein Zugriff auf den Ordner „${n.folder}“ – unter Downloads gespeichert.`),n.reason==="error"&&(a=`Der Ordner „${n.folder}“ war nicht beschreibbar (verschoben oder gelöscht?) – unter Downloads gespeichert.`)}return await Ld(),{size:n.size,folder:n.saved?n.folder:"",note:a}}function Fo(e){if(e){if(e.note){U(e.note,"info",9e3);return}U(e.folder?`Backup im Ordner „${e.folder}“ gespeichert (${Vt(e.size)})`:`Backup gespeichert (${Vt(e.size)})`,"good")}}function Nf(){let[e,t]=D(void 0);if(ce(()=>{Lo().then(s=>t(s?s.name:""))},[]),!zo())return l`<p class="field-hint">Einen festen Backup-Ordner kann nur Chrome oder Edge ansteuern. In diesem Browser landen Backups im Download-Ordner.</p>`;if(e===void 0)return null;async function n(){let s=await _(()=>qd());s&&(t(s.name),U(`Backups werden ab jetzt im Ordner „${s.name}“ gespeichert.`,"good"))}async function a(){await Vd(),t(""),U("Backups landen wieder im Download-Ordner.","info")}return l`<div class="backup-folder">
    <div class="backup-folder-info">
      <span class="backup-folder-label">Backup-Ordner</span>
      ${e?l`<strong class="backup-folder-name"><${W} name="file" size=${15} /> ${e}</strong>`:l`<span class="muted-text">Download-Ordner des Browsers</span>`}
    </div>
    <div class="button-row">
      <${I} small icon="file" onClick=${n}>${e?"Anderen Ordner wählen":"Ordner wählen"}<//>
      ${e&&l`<${I} small variant="ghost" onClick=${a}>Wieder Downloads verwenden<//>`}
    </div>
    <p class="field-hint">${e?"Ein Klick auf „Backup“ speichert direkt in diesen Ordner. Nach einem Neustart von Chrome fragt der Browser beim ersten Backup einmal nach der Erlaubnis – „Bei jedem Besuch erlauben“ wählen, dann entfällt auch das.":"Wähle einmal einen Ordner, z. B. „BBC Finance Backups“ in Dokumenten oder in deinem Cloud-Ordner. Danach genügt ein Klick auf „Backup“."}</p>
  </div>`}function Tf(){let[e,t]=D(""),[n,a]=D(null),s=ve(null);ce(()=>{Il().then(a)},[w.version]);async function i(c){t(c?"full":"lite");let p=await _(()=>Oo(c));t(""),Fo(p)}async function r(c){c&&(t("restore"),await _(async()=>{let p=await Kd(c),d=Mo(p.json,p.files),u=d.counts;if(!await ue({title:"Backup einspielen?",text:`Das Backup vom ${d.exportedAt?Je(d.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${u.companies} Unternehmen, ${u.customers} Kunden, ${u.services} Leistungen`,`${u.invoices} Rechnungen, ${u.quotes} Angebote, ${u.payments} Zahlungen`,`${u.expenses} Ausgaben, ${d.includesFiles?`${d.fileCount} Dateien (Belege, PDFs)`:"ohne Dateien"}`,...u.contracts?[`${u.contracts} Verträge`]:[],...u.appointments||u.notes||u.todos?[`${u.appointments||0} Termine, ${u.notes||0} Einträge in der Kundendokumentation, ${u.todos||0} To-dos`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let f=await Od(p);U(f.missingFiles?`Backup eingespielt. ${f.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),J("/")}),t(""))}let o=w.settings;return l`<${X} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${xn} rows=${[["Letztes Backup",o.lastBackupAt?Je(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${Vt(n.usage)}${n.quota?` von ${Vt(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${I} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${I} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Dateien<//>
      <${I} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${Nf} />
    <${je} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>_(()=>ot("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function Af(){let e=w.settings,[t,n]=D(e.aiApiKey||""),[a,s]=D(e.aiModel||Zt.aiModel),[i,r]=D(!1),[o,c]=D(""),p=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function d(){c("save");let m=await _(async()=>(await zl({aiApiKey:t.trim(),aiModel:a.trim()||Zt.aiModel}),!0));c(""),m&&U("KI-Einstellungen gespeichert","good")}async function u(){c("test");let m=await _(()=>Mu({apiKey:t.trim(),model:a.trim()}));c(""),m&&U("Verbindung steht – der API-Key funktioniert.","good")}return l`<${X} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${we} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${I} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${we} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${m=>s(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${I} variant="primary" busy=${o==="save"} disabled=${!p} onClick=${d}>Speichern<//>
      <${I} busy=${o==="test"} disabled=${!t.trim()} onClick=${u}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${I} variant="ghost" icon="trash" onClick=${async()=>{n(""),await _(()=>ot("aiApiKey","")),U("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${je} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>_(()=>ot("shrinkImages",m))} />
  <//>`}function Ko({label:e,settingKey:t,hint:n}){let a=(Array.isArray(w.settings[t])?w.settings[t]:[]).join(`
`),[s,i]=D(a);ce(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(p=>p.trim()).filter(Boolean))];await _(async()=>(await ot(t,o),!0))&&U("Liste gespeichert","good")}return l`<div class="span-2">
    <${ie} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${I} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function Rf(){let e=w.settings,[t,n]=D("de"),[a,s]=D("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[p,d]=D(c.subject),[u,m]=D(c.body);ce(()=>{d(c.subject),m(c.body)},[t,a,w.version]);let f=p!==c.subject||u!==c.body,h=e.reminderDays||[7,14,21];async function b(){await _(async()=>{if(r){let g=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));g[t]={subject:p,body:u},await ot("appointmentTemplates",g)}else if(i){let g=JSON.parse(JSON.stringify(e.reminderTemplates||{}));g[t]={...g[t]||{},[o]:{subject:p,body:u}},await ot("reminderTemplates",g)}else{let g=JSON.parse(JSON.stringify(e.emailTemplates||{}));g[t]={...g[t]||{},[a]:{subject:p,body:u}},await ot("emailTemplates",g)}return!0})&&U("Vorlage gespeichert","good")}return l`<${X} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${we} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${Ct.map((v,g)=>l`<label class="mini-field">
            <span>${v.label}</span>
            <${Ge} value=${h[g]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${v.label}: Tage nach Fälligkeit`}
              onChange=${$=>{let C=[...h];C[g]=$,_(()=>ot("reminderDays",C))}} />
          </label>`)}
        </div>
      <//>
      <${se} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...Ct.map(v=>({id:`r${v.id}`,label:v.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${we} class="span-2" label="Sprache">
        <${Dt} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${V} class="span-6" label="Betreff" value=${p} onInput=${d} />
      <${ie} class="span-6" label="Text" value=${u} onInput=${m} rows=${9} />
    </div>
    ${f&&l`<div class="button-row"><${I} variant="primary" onClick=${b}>Vorlage speichern<//></div>`}
  <//>`}function Bf(){let[e,t]=D(""),n=w.customers.length||w.invoices.length||w.expenses.length||w.services.length;async function a(){t("demo");let r=await _(async()=>(await Qi(),!0));t(""),r&&(U("Beispieldaten geladen","good"),J("/"))}async function s(){if(!await ue({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Verträge, hochgeladene PDFs, Termine, Kundendokumentation, To-dos, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await _(async()=>(await vd(),!0));t(""),o&&(U("Daten gelöscht","good"),J("/"))}async function i(){let r=await ue({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){U("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await _(async()=>(await Fd(),await Do(),!0));t(""),o&&(U("Alle Daten gelöscht","good"),J("/"))}return l`<${X} title="Daten">
    ${w.settings.demoLoaded&&l`<${xe} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${I} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${I} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${I} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var Uf=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function Gd(){ge();let e=w.settings,[t,n]=D(e.userName||"");return ce(()=>{n(e.userName||"")},[e.userName]),l`
    <${ke} title="Einstellungen" />
    <div class="form-page">
      <${X} title="Profil und Darstellung">
        <div class="form-grid">
          <${we} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${I} disabled=${t===(e.userName||"")} onClick=${async()=>{await _(async()=>(await ot("userName",t.trim()),!0))&&U("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${we} class="span-2" label="Darstellung">
            <${Dt} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>_(()=>ot("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${Tf} />
      <${Af} />
      <${X} title="Auswahllisten">
        <div class="form-grid">
          <${Ko} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${Ko} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${Ko} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${Rf} />
      <${Bf} />
      <${X} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${Uf.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var qo={invoices:"Rechnungen",quotes:"Angebote",customers:"Kontakte",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",todos:"To-dos",system:"System"},Mf={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",nextSteps:"Nächste Schritte",todos:"To-dos",due:"Fällig",done:"Erledigt",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function Hd(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function _f({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${Mf[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${Hd(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${Hd(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function jd(){ge();let[e,t]=D(""),[n,a]=D(""),[s,i]=D(200),[r,o]=D(""),p=Se(()=>[...w.audit].sort((u,m)=>u.at<m.at?1:-1),[w.version]).filter(u=>(!n||u.entity===n)&&Ne(e,u.action,u.label,u.user));function d(){Ki({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:p.map(u=>[u.at,u.user,u.action,qo[u.entity]||u.entity,u.label,u.prev?JSON.stringify(u.prev):"",u.next?JSON.stringify(u.next):""])})}return l`
    <${ke} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${I} icon="download" disabled=${!p.length} onClick=${d}>CSV<//>
    <//>
    <div class="filters">
      <${ht} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(qo).map(([u,m])=>l`<option value=${u}>${m}</option>`)}
      </select>
      <span class="filter-note">${p.length} ${p.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${p.length===0?l`<${pe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${p.slice(0,s).map(u=>l`<tr key=${u.id}>
              <td class="nw">${Je(u.at)}</td>
              <td><span class="cell-main">${u.action}</span><div class="cell-sub">${qo[u.entity]||u.entity}</div></td>
              <td>${u.label}</td>
              <td><${_f} entry=${u} />
                ${u.entity==="invoices"&&u.prev&&u.prev.doc&&l`<${I} small icon="download" busy=${r===u.id}
                  onClick=${async()=>{o(u.id),await _(()=>No(u)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${u.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${p.length>s&&l`<div class="button-row center"><${I} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var zf=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/contracts",label:"Verträge",icon:"file"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kontakte",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/todos",label:"To-dos",icon:"check"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function Pf(){let[e,t]=D(!1),n=ve(null),a=de(),s=re();ce(()=>{if(!e)return;let o=p=>{n.current&&!n.current.contains(p.target)&&t(!1)},c=p=>{p.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),_(()=>ot("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${an(o.logoAssetId)?l`<img src=${an(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
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
  </div>`}function Ji(e,t){let n=$n(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function Lf(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kontakte",w.customers.filter(s=>Ne(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:Z(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>Z(y("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",w.invoices.filter(s=>Ne(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||Ji(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",w.quotes.filter(s=>Ne(e,s.number,s.refNumber,s.title,a(s),(s.items||[]).map(i=>i.name).join(" "))||Ji(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${Qe(s)}${s.source==="upload"?" (PDF)":""}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Verträge",w.contracts.filter(s=>Ne(e,s.title,s.refNumber,a(s),s.notes,Wn(s).map(i=>i.name).join(" "))||Wn(s).some(i=>Ji(e,Sa(i)))).map(s=>({key:s.id,label:`${s.title}, ${a(s)||"ohne Kontakt"}`,sub:[s.refNumber,ss(s,i=>j(i,s.currency))].filter(Boolean).join(", "),href:`/contracts?open=${s.id}`}))),n("Termine",w.appointments.filter(s=>Ne(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("To-dos",w.todos.filter(s=>Ne(e,s.title,s.note,a(s))).sort((s,i)=>Number(s.done)-Number(i.done)).map(s=>({key:s.id,label:`${s.done?"✓ ":""}${s.title}`,sub:[a(s),s.due?`fällig ${s.due.split("-").reverse().join(".")}`:""].filter(Boolean).join(", "),href:s.customerId?`/customers/${s.customerId}`:"/todos"}))),n("Leistungen",w.services.filter(s=>Ne(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:j(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",w.expenses.filter(s=>Ne(e,s.vendor,s.description,s.invoiceNumber,s.category)||Ji(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${j(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",w.companies.filter(s=>Ne(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function Kf(){let[e,t]=D(""),[n,a]=D(!1),[s,i]=D(0),r=ve(null),o=ve(null),c=Se(()=>gn(e).trim().length>=2?Lf(e):[],[e,w.version]),p=c.flatMap(f=>f.items);ce(()=>{let f=b=>{(b.metaKey||b.ctrlKey)&&b.key.toLowerCase()==="k"&&(b.preventDefault(),o.current&&o.current.focus())},h=b=>{r.current&&!r.current.contains(b.target)&&a(!1)};return document.addEventListener("keydown",f),document.addEventListener("mousedown",h),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",h)}},[]);function d(f){a(!1),t(""),o.current&&o.current.blur(),J(f.href)}function u(f){f.key==="ArrowDown"?(f.preventDefault(),i(h=>Math.min(h+1,p.length-1))):f.key==="ArrowUp"?(f.preventDefault(),i(h=>Math.max(h-1,0))):f.key==="Enter"&&p[s]?(f.preventDefault(),d(p[s])):f.key==="Escape"&&(a(!1),f.target.blur())}let m=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${W} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kontakt, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${f=>{t(f.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${u} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&gn(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(f=>l`<div class="gsearch-group" key=${f.group}>
        <div class="gsearch-head">${f.group}</div>
        ${f.items.map(h=>{m+=1;let b=m;return l`<button type="button" key=${h.key} class=${`gsearch-item${b===s?" is-active":""}`}
            onMouseEnter=${()=>i(b)} onMouseDown=${v=>{v.preventDefault(),d(h)}}>
            <span>${h.label}</span><span class="cell-sub">${h.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function Of(){let e=w.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${Dt} label="Anzeigewährung" value=${e} onChange=${t=>_(()=>ot("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function Ff(){let[e,t]=D(!1),n=w.settings.changesSinceBackup||0;async function a(){t(!0);let s=await _(()=>Oo(!0));t(!1),Fo(s)}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${W} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function qf({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${Is} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${Is} coll="invoices" id=${n} params=${s} />`:l`<${kd} id=${n} />`:l`<${wd} params=${s} />`:t==="quotes"?n?n==="new"?l`<${Is} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${Is} coll="quotes" id=${n} params=${s} />`:l`<${Sd} id=${n} />`:l`<${Dd} />`:t==="customers"?n?l`<${nd} id=${n} />`:l`<${td} />`:t==="appointments"?l`<${ud} params=${s} />`:t==="todos"?l`<${Gc} />`:t==="contracts"?l`<${ju} key=${s.open||"list"} params=${s} />`:t==="services"?l`<${Tu} />`:t==="expenses"?l`<${Pu} />`:t==="recurring"?l`<${Au} />`:t==="finance"?l`<${Ad} />`:t==="reports"?l`<${Rd} params=${s} />`:t==="companies"?n?l`<${Ud} id=${n} />`:l`<${Bd} />`:t==="settings"?l`<${Gd} />`:t==="audit"?l`<${jd} />`:l`<${pe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${I} onClick=${()=>J("/")}>Zum Dashboard<//><//>`:l`<${yd} />`}function Vf({route:e}){let[t,n]=fl(a=>{console.error(a)});return ce(()=>{t&&n()},[e.raw]),t?l`<${pe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${I} onClick=${()=>{n(),J("/")}}>Zum Dashboard<//>
    <//>`:l`<${qf} key=${e.raw} route=${e} />`}function Zf(){ge();let e=Ol(),[t,n]=D(!1),a=de(),s=re();ce(()=>{n(!1)},[e.raw]),ce(()=>{let u=w.settings.theme;u==="light"||u==="dark"?document.documentElement.setAttribute("data-theme",u):document.documentElement.removeAttribute("data-theme")},[w.settings.theme]),ce(()=>{let u=m=>{if(Vl())return;let f=Kl(),h=w.settings.warnOnClose!==!1&&(w.settings.changesSinceBackup||0)>0;(f||h)&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[]);let[i,r]=D(!1);ce(()=>{let u=()=>r(!0);return window.addEventListener("bbc-db-replaced",u),()=>window.removeEventListener("bbc-db-replaced",u)},[]);let o=u=>u.exact?e.path===u.path:e.path===u.path||e.path.startsWith(`${u.path}/`),c=w.expenses.filter(u=>u.status==="review").length,p=vo().length,d=Vc();return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(u=>l`<i key=${u.id} style=${`background:${u.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${zf.map((u,m)=>l`<ul class="nav-group" key=${m}>
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
          <${Pf} />
          <${Kf} />
          <div class="topbar-actions">
            <${hd} />
            <${Of} />
            <${Ff} />
            <${I} variant="primary" icon="plus" onClick=${()=>J("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{va(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${w.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${Vf} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${ld} />
    <${gd} />
    <${Xl} />
    <${ec} />
  `}async function Gf(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await Bl(),await $d()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",or(l`<${Zf} />`,e),Hf()}async function Hf(){if(w.settings.appVersion===pr)return;let e={invoices:w.invoices.length,customers:w.customers.length,expenses:w.expenses.length,quotes:w.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await ot("appVersion",pr)}catch{}t&&!w.settings.demoLoaded&&U(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kontakte, ${e.expenses} Ausgaben. ${xl}`,"good",15e3)}Jl(e=>U(e,"bad",9e3));window.addEventListener("unhandledrejection",e=>{e.reason&&ya(e.reason)});Gf();})();
