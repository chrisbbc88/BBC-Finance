(()=>{var Ms,de,_o,Ua,zo,ko,Id,Rs={},Lo=[],Ed=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function un(e,t){for(var n in t)e[n]=t[n];return e}function Po(e){var t=e.parentNode;t&&t.removeChild(e)}function Wi(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?Ms.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return Ts(e,r,a,s,null)}function Ts(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++_o};return de.vnode!=null&&de.vnode(i),i}function _s(e){return e.children}function Ma(e,t){this.props=e,this.context=t}function Xn(e,t){if(t==null)return e.__?Xn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Xn(e):null}function Ko(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ko(e)}}function Do(e){(!e.__d&&(e.__d=!0)&&Ua.push(e)&&!Bs.__r++||ko!==de.debounceRendering)&&((ko=de.debounceRendering)||zo)(Bs)}function Bs(){for(var e;Bs.__r=Ua.length;)e=Ua.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ua=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=un({},i)).__v=i.__v+1,Qi(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??Xn(i),i.__h),qo(a,i),i.__e!=r&&Ko(i)))})}function Fo(e,t,n,a,s,i,r,o,c,p){var d,u,m,g,h,b,y,f=a&&a.__k||Lo,$=f.length;for(n.__k=[],d=0;d<t.length;d++)if((g=n.__k[d]=(g=t[d])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?Ts(null,g,null,null,g):Array.isArray(g)?Ts(_s,{children:g},null,null,null):g.__b>0?Ts(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(m=f[d])===null||m&&g.key==m.key&&g.type===m.type)f[d]=void 0;else for(u=0;u<$;u++){if((m=f[u])&&g.key==m.key&&g.type===m.type){f[u]=void 0;break}m=null}Qi(e,g,m=m||Rs,s,i,r,o,c,p),h=g.__e,(u=g.ref)&&m.ref!=u&&(y||(y=[]),m.ref&&y.push(m.ref,null,g),y.push(u,g.__c||h,g)),h!=null?(b==null&&(b=h),typeof g.type=="function"&&g.__k!=null&&g.__k===m.__k?g.__d=c=Oo(g,c,e):c=Vo(e,g,m,f,h,c),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=Xn(m))}for(n.__e=b,d=$;d--;)f[d]!=null&&(typeof n.type=="function"&&f[d].__e!=null&&f[d].__e==n.__d&&(n.__d=Xn(a,d+1)),Go(f[d],f[d]));if(y)for(d=0;d<y.length;d++)Zo(y[d],y[++d],y[++d])}function Oo(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?Oo(s,t,n):Vo(n,s,s,e.__k,s.__e,t));return t}function Vo(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function So(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ed.test(t)?n:n+"px"}function Ns(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||So(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||So(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?Io:Co,i):e.removeEventListener(t,i?Io:Co,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Co(e){this.l[e.type+!1](de.event?de.event(e):e)}function Io(e){this.l[e.type+!0](de.event?de.event(e):e)}function Qi(e,t,n,a,s,i,r,o,c){var p,d,u,m,g,h,b,y,f,$,I,D=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(p=de.__b)&&p(t);try{e:if(typeof D=="function"){if(y=t.props,f=(p=D.contextType)&&a[p.__c],$=p?f?f.props.value:p.__:a,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in D&&D.prototype.render?t.__c=d=new D(y,$):(t.__c=d=new Ma(y,$),d.constructor=D,d.render=Td),f&&f.sub(d),d.props=y,d.state||(d.state={}),d.context=$,d.__n=a,u=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),D.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=un({},d.__s)),un(d.__s,D.getDerivedStateFromProps(y,d.__s))),m=d.props,g=d.state,u)D.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(D.getDerivedStateFromProps==null&&y!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(y,$),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(y,d.__s,$)===!1||t.__v===n.__v){d.props=y,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),d.__h.length&&r.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(y,d.__s,$),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,g,h)})}d.context=$,d.props=y,d.state=d.__s,(p=de.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(a=un(un({},a),d.getChildContext())),u||d.getSnapshotBeforeUpdate==null||(h=d.getSnapshotBeforeUpdate(m,g)),I=p!=null&&p.type===_s&&p.key==null?p.props.children:p,Fo(e,Array.isArray(I)?I:[I],t,n,a,s,i,r,o,c),d.base=t.__e,t.__h=null,d.__h.length&&r.push(d),b&&(d.__E=d.__=null),d.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Nd(n.__e,t,n,a,s,i,r,c);(p=de.diffed)&&p(t)}catch(T){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),de.__e(T,t,n)}}function qo(e,t){de.__c&&de.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){de.__e(a,n.__v)}})}function Nd(e,t,n,a,s,i,r,o){var c,p,d,u=n.props,m=t.props,g=t.type,h=0;if(g==="svg"&&(s=!0),i!=null){for(;h<i.length;h++)if((c=i[h])&&(c===e||(g?c.localName==g:c.nodeType==3))){e=c,i[h]=null;break}}if(e==null){if(g===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),i=null,o=!1}if(g===null)u===m||o&&e.data===m||(e.data=m);else{if(i=i&&Ms.call(e.childNodes),p=(u=n.props||Rs).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!o){if(i!=null)for(u={},h=0;h<e.attributes.length;h++)u[e.attributes[h].name]=e.attributes[h].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if((function(b,y,f,$,I){var D;for(D in f)D==="children"||D==="key"||D in y||Ns(b,D,null,f[D],$);for(D in y)I&&typeof y[D]!="function"||D==="children"||D==="key"||D==="value"||D==="checked"||f[D]===y[D]||Ns(b,D,y[D],f[D],$)})(e,m,u,s,o),d)t.__k=[];else if(h=t.props.children,Fo(e,Array.isArray(h)?h:[h],t,n,a,s&&g!=="foreignObject",i,r,i?i[0]:n.__k&&Xn(n,0),o),i!=null)for(h=i.length;h--;)i[h]!=null&&Po(i[h]);o||("value"in m&&(h=m.value)!==void 0&&(h!==e.value||g==="progress"&&!h)&&Ns(e,"value",h,u.value,!1),"checked"in m&&(h=m.checked)!==void 0&&h!==e.checked&&Ns(e,"checked",h,u.checked,!1))}return e}function Zo(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){de.__e(a,n)}}function Go(e,t,n){var a,s;if(de.unmount&&de.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||Zo(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){de.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&Go(a[s],t,typeof e.type!="function");n||e.__e==null||Po(e.__e),e.__e=e.__d=void 0}function Td(e,t,n){return this.constructor(e,n)}function Yi(e,t,n){var a,s,i;de.__&&de.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],Qi(t,e=(!a&&n||t).__k=Wi(_s,null,[e]),s||Rs,Rs,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?Ms.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),qo(i,e)}Ms=Lo.slice,de={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},_o=0,Ma.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=un({},this.state),typeof e=="function"&&(e=e(un({},n),this.props)),e&&un(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Do(this))},Ma.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Do(this))},Ma.prototype.render=_s,Ua=[],zo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bs.__r=0,Id=0;var ea,st,Eo,Us=0,Hi=[],No=de.__b,To=de.__r,Ao=de.diffed,Ro=de.__c,Bo=de.unmount;function _a(e,t){de.__h&&de.__h(st,e,Us||t),Us=0;var n=st.__H||(st.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return Us=1,Ad(jo,e)}function Ad(e,t,n){var a=_a(ea++,2);return a.t=e,a.__c||(a.__=[n?n(t):jo(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=st),a.__}function ce(e,t){var n=_a(ea++,3);!de.__s&&Xi(n.__H,t)&&(n.__=e,n.__H=t,st.__H.__h.push(n))}function Ji(e,t){var n=_a(ea++,4);!de.__s&&Xi(n.__H,t)&&(n.__=e,n.__H=t,st.__h.push(n))}function ke(e){return Us=5,De(function(){return{current:e}},[])}function De(e,t){var n=_a(ea++,7);return Xi(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ho(e){var t=_a(ea++,10),n=k();return t.__=e,st.componentDidCatch||(st.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function Rd(){Hi.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(As),e.__H.__h.forEach(ji),e.__H.__h=[]}catch(t){e.__H.__h=[],de.__e(t,e.__v)}}),Hi=[]}de.__b=function(e){st=null,No&&No(e)},de.__r=function(e){To&&To(e),ea=0;var t=(st=e.__c).__H;t&&(t.__h.forEach(As),t.__h.forEach(ji),t.__h=[])},de.diffed=function(e){Ao&&Ao(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Hi.push(t)!==1&&Eo===de.requestAnimationFrame||((Eo=de.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),Uo&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);Uo&&(a=requestAnimationFrame(s))})(Rd)),st=void 0},de.__c=function(e,t){t.some(function(n){try{n.__h.forEach(As),n.__h=n.__h.filter(function(a){return!a.__||ji(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],de.__e(a,n.__v)}}),Ro&&Ro(e,t)},de.unmount=function(e){Bo&&Bo(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(As)}catch(n){de.__e(n,t.__v)}};var Uo=typeof requestAnimationFrame=="function";function As(e){var t=st;typeof e.__c=="function"&&e.__c(),st=t}function ji(e){var t=st;e.__c=e.__(),st=t}function Xi(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function jo(e,t){return typeof t=="function"?t(e):t}var Wo=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,Wo(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},Mo=new Map,l=function(e){var t=Mo.get(this);return t||(t=new Map,Mo.set(this,t)),(t=Wo(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],p=function(m){i===1&&(m||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,r):i===3&&(m||r)?(c.push(3,m,r),i=2):i===2&&r==="..."&&m?c.push(4,m,0):i===2&&r&&!m?c.push(5,0,!0,r):i>=5&&((r||!m&&i===5)&&(c.push(i,0,r,s),i=6),m&&(c.push(i,m,0,s),i=6)),r=""},d=0;d<n.length;d++){d&&(i===1&&p(),p(d));for(var u=0;u<n[d].length;u++)a=n[d][u],i===1?a==="<"?(p(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(p(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[d][u+1]===">")?(p(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(p(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return p(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(Wi);var He=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),ye=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),Nn=e=>String(e).padStart(2,"0");function ta(e){return`${e.getFullYear()}-${Nn(e.getMonth()+1)}-${Nn(e.getDate())}`}var V=()=>ta(new Date),ne=()=>new Date().toISOString();function $e(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function za(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Se(e,t){let n=za(e);return n.setDate(n.getDate()+Number(t||0)),ta(n)}function Et(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),p=(o%12+12)%12,d=new Date(c,p+1,0).getDate();return`${c}-${Nn(p+1)}-${Nn(Math.min(r,d))}`}function mn(e,t){let n=za(t).getTime()-za(e).getTime();return Math.round(n/864e5)}var zs=e=>Number(e.slice(0,4)),Qo=e=>Number(e.slice(5,7)),La=e=>e.slice(0,7),Yo=e=>Math.floor((Qo(e)-1)/3)+1,Jo=e=>`${zs(e)}-Q${Yo(e)}`;function er(e,t){let n=`${e}-${Nn(t+1)}-01`,a=ta(new Date(e,t+1,0));return{from:n,to:a}}function tr(e,t){let n=`${e}-${Nn((t-1)*3+1)}-01`,a=ta(new Date(e,t*3,0));return{from:n,to:a}}var Tn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function $t(e,t=V(),n={}){let a=zs(t),s=Qo(t)-1,i=Yo(t);switch(e){case"month":return er(a,s);case"lastMonth":return s===0?er(a-1,11):er(a,s-1);case"quarter":return tr(a,i);case"lastQuarter":return i===1?tr(a-1,4):tr(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:$e(n.from)?n.from:"0000-01-01",to:$e(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var Qt=(e,t)=>!!e&&e>=t.from&&e<=t.to;function Xo(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${Nn(o+1)}`}return n}function el(e,t=V()){let n=[];for(let a=e-1;a>=0;a--)n.push(Et(t.slice(0,7)+"-01",-a).slice(0,7));return n}var Bd=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Ud=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Kt=e=>`${Bd[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,na=e=>Ud[Number(e.slice(5,7))-1];function Ls(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",p=c==="."?",":".";r=n.split(p).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var dn=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Ee(e,...t){let n=dn(e).trim();if(!n)return!0;let a=dn(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function Nt(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function Yt(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function Jt(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var nr=4,tl="bbc-finance",ar="2026-10-15",nl="Neu: Verträge und PDF-Angebote hochladen, Ablauf Termin → Angebot → Vertrag → Rechnung je Kontakt, dazu Sprachsteuerung („Sprechen“ oben rechts) und ein Mikrofon zum Diktieren in jedem größeren Textfeld.",ut=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes","todos","contracts"],An="USD";var _e=["USD","EUR"],Ps=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],Tt=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],Pa={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},aa={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},Md=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],_d=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],zd=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],sa=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],Rn=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],xt=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Ft={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:Md,serviceCategories:_d,paymentMethods:zd,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},At=()=>({id:He(),createdAt:ne(),updatedAt:ne()});function Ka(e={}){return{...At(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:An,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var ia=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],Fa=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],ra={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},oa=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],Ks=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],nt=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function la(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...At(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:V(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||nt(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function Bn(e={}){return{...At(),title:"",due:"",customerId:"",companyId:"",appointmentId:"",note:"",done:!1,doneAt:null,...e}}function Fs(e={}){return{...At(),customerId:"",companyId:"",date:V(),kind:"note",title:"",text:"",...e}}var al=[{id:"customer",label:"Kunde"},{id:"contact",label:"Kontakt"}],Te=e=>!e||e.kind!=="contact";function Ot(e={}){return{...At(),kind:"customer",number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function pn(e={}){return{...At(),name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:An,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function Rt(e={}){return{id:He(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function dt(e,t={}){let n=V();return{...At(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:An,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function Un(e,t={}){let n=V();return{...At(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:An,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function je(e){return e?e.number?e.number:e.source==="upload"?e.refNumber||e.title||"PDF-Angebot":"Entwurf":""}function sl(e,t={}){return Un(e,{source:"upload",status:"open",title:"",refNumber:"",attachmentIds:[],validUntil:"",intro:"",paymentTerms:"",footer:"",...t})}var ca={open:{label:"Offen",tone:"info"},signed:{label:"Unterschrieben",tone:"good"},ended:{label:"Beendet",tone:"mute"},declined:{label:"Nicht zustande gekommen",tone:"mute"}},Oa=[{id:"none",label:"Keine Angabe"},{id:"once",label:"Einmalig"},{id:"monthly",label:"Monatlich"},{id:"quarterly",label:"Quartalsweise"},{id:"semiannual",label:"Halbjährlich"},{id:"yearly",label:"Jährlich"}];function Mn(e,t={}){return{...At(),companyId:e?e.id:"",customerId:"",title:"",refNumber:"",status:"open",signedDate:"",startDate:"",endDate:"",noticePeriod:"",billing:"none",amountCents:null,currency:e?e.currency:An,taxRate:e&&Number(e.defaultTaxRate)||0,quoteId:"",attachmentIds:[],notes:"",...t}}function Va(e={}){return{...At(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:V(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:An,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function fn(e,t={}){return{...At(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:V(),nextDate:V(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:An,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function q(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function it(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var Ld=4,qa=null,gn=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),Pd=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function ua(e){return e==="counters"||e==="settings"?"key":"id"}var Bt=[...ut,"settings","blobs"];function sr(){return qa||(qa=new Promise((e,t)=>{let n=indexedDB.open(tl,Ld);n.onupgradeneeded=()=>{let a=n.result;for(let s of Bt){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:ua(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),qa=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),qa)}async function da(e){let t=await sr();return gn(t.transaction(e,"readonly").objectStore(e).getAll())}async function il(e,t){let n=await sr();return gn(n.transaction(e,"readonly").objectStore(e).get(t))}async function _n(e,t){let a=(await sr()).transaction(e,"readwrite"),s=Pd(a),i={get:(o,c)=>gn(a.objectStore(o).get(c)),put:(o,c)=>gn(a.objectStore(o).put(c)),del:(o,c)=>gn(a.objectStore(o).delete(c)),byIndex:(o,c,p)=>gn(a.objectStore(o).index(c).get(p)),allByIndex:(o,c,p)=>gn(a.objectStore(o).index(c).getAll(p)),clear:o=>gn(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function rl(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function ol(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var w={ready:!1,version:0,settings:ye(Ft)},Vt={};for(let e of ut)w[e]=[],Vt[e]=new Map;var qs=new Set;function cl(e){return qs.add(e),()=>qs.delete(e)}var Os=0,ir=!1;function ul(){if(w.version+=1,Vs.clear(),Os){ir=!0;return}for(let e of qs)e(w.version)}async function dl(e){Os+=1;try{return await e()}finally{if(Os-=1,!Os&&ir){ir=!1;for(let t of qs)t(w.version)}}}var zn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(zn=new BroadcastChannel("bbc-finance-sync"),zn.onmessage=e=>{e.data==="changed"&&Ln()})}catch{zn=null}var ll=new Set(ut.filter(e=>e!=="rates"));async function Ln(){let e=await Promise.all([...ut,"settings"].map(n=>da(n)));ut.forEach((n,a)=>{Vt[n]=new Map(e[a].map(s=>[s[ua(n)],s])),w[n]=e[a]});let t=ye(Ft);for(let n of e[ut.length])Object.hasOwn(Ft,n.key)&&(t[n.key]=n.value);w.settings=t,w.ready=!0,ul()}async function ml(){await Ln(),ol()}var Ae=e=>w[e],v=(e,t)=>t?Vt[e].get(t):void 0,Vs=new Map;function pl(e,t){return Vs.has(e)||Vs.set(e,t()),Vs.get(e)}function fl(e,t){return pl(`group:${e}:${t}`,()=>{let n=new Map;for(let a of w[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var gl=Object.freeze([]),We=e=>fl("payments","invoiceId").get(e)||gl,hn=e=>fl("reminders","invoiceId").get(e)||gl,Xt=e=>e&&Vt.assets.get(e)?Vt.assets.get(e).dataUrl:"",le=()=>pl("activeCompanies",()=>w.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function me(){let e=w.settings.activeCompany;if(!e||e==="all")return null;let t=v("companies",e);return t&&!t.archived?t:null}function Ke(e){let t=me();return!t||e.companyId===t.id}function Kd({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:He(),at:ne(),user:w.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function Q(e){let t=[],n=!1,a={},s=await _n(Bt,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(p,d){return t.push({store:p,value:d}),ll.has(p)&&p!=="audit"&&(n=!0),r.put(p,d)},del(p,d){return t.push({store:p,id:d,del:!0}),ll.has(p)&&(n=!0),r.del(p,d)},clear(p){return t.push({store:p,clear:!0}),r.clear(p)},blobPut:(p,d)=>r.put("blobs",{id:p,blob:d}),blobDel:p=>r.del("blobs",p),audit(p){let d=Kd(p);return t.push({store:"audit",value:d}),r.put("audit",d)},setting(p,d){return a[p]=d,r.put("settings",{key:p,value:d})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let p=await r.get("settings","changesSinceBackup"),d=p&&Number(p.value)||0;a.changesSinceBackup=d+1,await r.put("settings",{key:"changesSinceBackup",value:d+1})}return c}),i=new Set;for(let r of t)Vt[r.store]&&(r.clear?Vt[r.store]=new Map:r.del?Vt[r.store].delete(r.id):Vt[r.store].set(r.value[ua(r.store)],r.value),i.add(r.store));for(let r of i)w[r]=[...Vt[r].values()];if(Object.keys(a).length&&(w.settings={...w.settings,...a}),ul(),zn)try{zn.postMessage("changed")}catch{}return s}function Za(){if(zn)try{zn.postMessage("changed")}catch{}}async function rt(e,t){return Q(n=>n.setting(e,t))}async function hl(e){return Q(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=k(w.version);return ce(()=>cl(t=>e(t)),[]),w}var or=new Set,Pn=null,Ga=bl(),rr=!1;function bl(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function lr(){if(rr){rr=!1;return}let e=bl();if(e.raw!==Ga.raw){if(Pn){if(!await Pn()){rr=!0,location.hash=Ga.raw;return}Pn=null}Ga=e;for(let t of or)t(Ga);window.scrollTo(0,0)}}window.addEventListener("hashchange",lr);function Y(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),lr()):location.hash===n?lr():location.hash=e}function $n(e){Pn=null,Y(e)}function Gs(e){Pn=e}function en(){Pn=null}var yl=()=>!!Pn;function vl(){let[e,t]=k(Ga);return ce(()=>(or.add(t),()=>or.delete(t)),[]),e}var Fd=0,Zs=new Set,Kn=[];function B(e,t="info",n){let a=++Fd;Kn=[...Kn,{id:a,message:String(e),tone:t}].slice(-3),Zs.forEach(s=>s(Kn)),setTimeout(()=>dr(a),n||(t==="bad"?9e3:4500))}function dr(e){Kn=Kn.filter(t=>t.id!==e),Zs.forEach(t=>t(Kn))}function wl(){let[e,t]=k(Kn);return ce(()=>(Zs.add(t),()=>Zs.delete(t)),[]),e}var xl=0;function ma(e=2e3){xl=Date.now()+e}var kl=()=>Date.now()<xl;function pa(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?B("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?B("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):B(t,"bad")}async function U(e){try{return await e()}catch(t){pa(t);return}}var cr=new Set,ur=null;function $l(e){ur=e,cr.forEach(t=>t(ur))}function Dl(){let[e,t]=k(ur);return ce(()=>(cr.add(t),()=>cr.delete(t)),[]),e}var Od=0;function ue(e){return new Promise(t=>{$l({...e,id:++Od,resolve:n=>{$l(null),t(n)}})})}var Hs=()=>ue({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var Vd={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2",mic:"M10 3a2.500 2.500 0 0 1 2.500 2.500v4a2.500 2.500 0 0 1-5 0v-4A2.500 2.500 0 0 1 10 3zM5.500 9.500a4.500 4.500 0 0 0 9 0M10 14v3M7.500 17h5"};function W({name:e,size:t=18,class:n=""}){let a=Vd[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function mr(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function Ws(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var Qs=e=>Ws(e,100);var qd=e=>Ws(e,1e3),Cl=e=>Ws(e,100),Sl=e=>Ws(e,1e3);function pr(e){let t=qd(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(Cl(e.discountPct),0),1e4);return mr(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function Ut(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(m=>BigInt(Math.round(m))),s=a.reduce((m,g)=>m+g,0n);if(s===0n&&(a=a.map(m=>m<0n?-m:m),s=a.reduce((m,g)=>m+g,0n),s===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let i=m=>m<0n?-m:m,r=i(s),o=s<0n?a.map(m=>-m):a,c=i(n),p=[],d=[];o.forEach((m,g)=>{let h=c*m,b=h/r,y=h%r;y<0n&&(b-=1n,y+=r),p.push(b),d.push({i:g,r:y})});let u=c-p.reduce((m,g)=>m+g,0n);d.sort((m,g)=>m.r===g.r?m.i-g.i:m.r>g.r?-1:1);for(let m=0;u>0n&&m<d.length;m++,u-=1n)p[d[m].i]+=1n;return n<0n?p.map(m=>Number(-m)||0):p.map(m=>Number(m)||0)}function mt(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:pr(m)})),a=n.reduce((m,g)=>m+g.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let m=Math.min(Cl(r),1e4);s=mr(BigInt(a)*BigInt(m),10000n)}let o=new Map;for(let m of n){let g=Sl(m.taxRate),h=o.get(g)||{rate:m.taxRate,rateMilli:g,subtotalCents:0};h.subtotalCents+=m.cents,o.set(g,h)}let c=[...o.values()].sort((m,g)=>m.rateMilli-g.rateMilli),p=Ut(s,c.map(m=>m.subtotalCents)),d=0;c.forEach((m,g)=>{m.discountCents=p[g]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=mr(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),d+=m.taxCents});for(let m of c){let g=n.filter(b=>Sl(b.taxRate)===m.rateMilli),h=Ut(m.discountCents,g.map(b=>b.cents));g.forEach((b,y)=>{b.netCents=b.cents-(h[y]||0)})}let u=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:u,taxCents:d,totalCents:u+d,taxGroups:c.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var js=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function Zd(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function tn(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?js(e*s):null;if(t==="EUR"&&n==="USD")return i?js(e/s):null;let r=Zd(t,a);if(r==null)return null;let o=e*r;return n==="USD"?js(o):n==="EUR"&&i?js(o*s):null}var bt=(e,t,n)=>tn(e,t,"USD",n),Mt=(e,t,n)=>tn(e,t,"EUR",n);function qt(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var Ue=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function Zt(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=Ue(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function nn(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-Ue(t),0)}var fr=e=>e.status!=="draft"&&e.status!=="cancelled";function _t(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var bn={de:"de-DE",en:"en-US"},gr=new Map;function fa(e,t){let n=e+JSON.stringify(t);return gr.has(n)||gr.set(n,new Intl.NumberFormat(e,t)),gr.get(n)}function j(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return fa(bn[n]||bn.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function Ha(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?fa("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):fa("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function ga(e,t,n){let a=j(e,t,n);return n==="en"?`${a} ${t}`:a}function Fn(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":fa(bn[t]||bn.de,{maximumFractionDigits:n}).format(Number(e))}function kt(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${fa(bn[t]||bn.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function ha(e,t="de"){return Number.isFinite(Number(e))?fa(bn[t]||bn.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function El(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Nl(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function O(e,t="de"){if(!e)return"";let n=za(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function Qe(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var Tl={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},Il={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},Ys=(e,t)=>t==="en"&&Il[e]?Il[e]:e||"",Dt=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);function ja(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}var Gd={"not-allowed":"Der Browser darf das Mikrofon nicht verwenden. Bitte in den Website-Einstellungen das Mikrofon erlauben.","service-not-allowed":"Die Spracherkennung ist in diesem Browser gesperrt. In Safari muss auf dem Mac die Diktierfunktion eingeschaltet sein (Systemeinstellungen → Tastatur → Diktierfunktion).",network:"Die Spracherkennung braucht eine Internetverbindung.","audio-capture":"Es wurde kein Mikrofon gefunden.","language-not-supported":"Deutsch wird von der Spracherkennung dieses Browsers nicht unterstützt."},Hd=e=>Gd[e]||`Die Spracherkennung ist fehlgeschlagen (${e}).`;function Js({lang:e="de-DE",onFinal:t,onInterim:n,onEnd:a,onError:s}){let i=window.SpeechRecognition||window.webkitSpeechRecognition,r=new i;return r.lang=e,r.continuous=!0,r.interimResults=!0,r.onresult=o=>{let c="";for(let p=o.resultIndex;p<o.results.length;p++){let d=o.results[p][0].transcript;o.results[p].isFinal?t&&t(d.trim()):c+=d}n&&n(c.trim())},r.onerror=o=>{o.error!=="no-speech"&&o.error!=="aborted"&&s&&s(Hd(o.error))},r.onend=()=>{a&&a()},r.start(),()=>{try{r.stop()}catch{}}}function Xs(e,t){let n=String(t||"").trim();if(!n)return e||"";let a=String(e||"");if(!a.trim())return n.charAt(0).toUpperCase()+n.slice(1);let s=/[\s\n]$/.test(a)?"":" ",i=/[.!?]\s*$/.test(a)?n.charAt(0).toUpperCase()+n.slice(1):n;return a+s+i}var jd=0,On=(e="f")=>De(()=>`${e}-${++jd}`,[]);function C({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:p="",...d}){let u=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${p?` ${p}`:""}`;return l`<button type=${s} class=${u} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${d}>
    ${t&&l`<${W} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function ve({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function Z({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=On();return l`<${ve} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${p=>s&&s(p.target.value)} ...${o} />
  <//>`}function Wd({onText:e,label:t="Diktieren",small:n=!0,class:a=""}){let[s,i]=k(!1),[r,o]=k(""),c=ke(null);if(ce(()=>()=>{c.current&&c.current()},[]),!ja())return null;function p(){if(s){c.current&&c.current();return}try{c.current=Js({onFinal:d=>e(d),onInterim:o,onEnd:()=>{i(!1),o(""),c.current=null},onError:d=>hr(d)}),i(!0)}catch(d){hr(d.message||String(d))}}return l`<span class=${`mic-wrap ${a}`}>
    <button type="button" class=${`mic-btn${s?" is-on":""}${n?" is-small":""}`} onClick=${p}
      title=${s?"Zuhören beenden":t} aria-label=${s?"Zuhören beenden":t} aria-pressed=${s}>
      <${W} name="mic" size=${n?15:20} />
    </button>
    ${s&&r&&l`<span class="mic-interim" aria-live="polite">${r}</span>`}
  </span>`}var hr=e=>{console.warn(e)},Al=e=>{hr=e};function ie({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,dictate:r=!0,...o}){let c=On(),p=ke(null),d=u=>{let m=p.current?p.current.value:n;a&&a(Xs(m,u))};return l`<${ve} label=${e} hint=${t} class=${i} htmlFor=${c}>
    <div class=${r&&ja()?"dictate-wrap":""}>
      <textarea id=${c} ref=${p} class="input textarea" rows=${s} value=${n??""} onInput=${u=>a&&a(u.target.value)} ...${o}></textarea>
      ${r&&a&&l`<${Wd} onText=${d} class="dictate-mic" />`}
    </div>
  <//>`}function se({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let p=On();return l`<${ve} label=${e} hint=${t} error=${n} class=${r} htmlFor=${p}>
    <select id=${p} class="input select" value=${a??""} onChange=${d=>s&&s(d.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(d=>{let u=typeof d=="object"?d:{id:d,label:d};return l`<option value=${u.id} selected=${String(u.id)===String(a??"")}>${u.label}</option>`})}
    </select>
  <//>`}function at({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...p}){let d=I=>I==null||I===""?"":n==="money"?El(I):Nl(I,a),[u,m]=k(d(e)),[g,h]=k(!1),[b,y]=k(!1);ce(()=>{g||m(d(e))},[e,g]);function f(I){if(String(I).trim()===""){y(!1),t(r?null:0);return}let D=Ls(I,{decimalOnly:n!=="money"});if(Number.isNaN(D)){y(!0);return}s!=null&&D<s&&(D=s),i!=null&&D>i&&(D=i),y(!1),t(n==="money"?Qs(D):Number(D.toFixed(a)))}let $=l`<input class=${`input num ${b?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${u}
    onFocus=${I=>{h(!0),I.target.select()}}
    onInput=${I=>{m(I.target.value),f(I.target.value)}}
    onBlur=${I=>{h(!1),f(I.target.value)}}
    aria-invalid=${b} ...${p} />`;return c?l`<span class="input-wrap">${$}<span class="input-suffix">${c}</span></span>`:$}function Re({label:e,hint:t,error:n,class:a,...s}){let i=On();return l`<${ve} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${at} id=${i} ...${s} />
  <//>`}function Me({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=On();return l`<${ve} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function Ye({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=On("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function yt({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function vt({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:p,label:d,id:u,disabled:m}){let g=On("cb"),h=u||g,b=e.find(P=>P.id===t),[y,f]=k(!1),[$,I]=k(""),[D,T]=k(0),z=ke(null),H=ke(null),E=r?o??"":y?$:b?b.label:"",A=De(()=>{let P=dn(r?y?o:"":$).trim();return(P?e.filter(ee=>dn(`${ee.label} ${ee.sub||""} ${ee.search||""}`).includes(P)):e).slice(0,50)},[e,$,o,y,r]);ce(()=>{if(!y)return;let P=_=>{z.current&&!z.current.contains(_.target)&&(f(!1),I(""))};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[y]),ce(()=>{p&&H.current&&H.current.focus()},[]);let x=s&&!r,R=A.length+(x?1:0);function S(P){n(P.id,P),f(!1),I("")}function K(P){if(P.key==="ArrowDown")P.preventDefault(),f(!0),T(_=>Math.min(_+1,R-1));else if(P.key==="ArrowUp")P.preventDefault(),T(_=>Math.max(_-1,0));else if(P.key==="Enter"){if(!y)return;if(r&&!A.length){f(!1);return}P.preventDefault(),D<A.length?S(A[D]):x&&(s($),f(!1),I(""))}else P.key==="Escape"?y&&(P.stopPropagation(),f(!1),I("")):P.key==="Tab"&&(f(!1),I(""))}return l`<div class="combo" ref=${z}>
    <input ref=${H} id=${h} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${y} aria-label=${d} aria-autocomplete="list" disabled=${m}
      placeholder=${y&&b&&!r?b.label:a} value=${E}
      onClick=${()=>{f(!0),T(0)}}
      onInput=${P=>{f(!0),T(0),r?c(P.target.value):I(P.target.value)}}
      onKeyDown=${K} />
    ${!r&&l`<span class="combo-caret"><${W} name="chevronDown" size=${16} /></span>`}
    ${y&&R>0&&l`<ul class="combo-list" role="listbox">
      ${A.map((P,_)=>l`<li role="option" aria-selected=${_===D}
          class=${`combo-item${_===D?" is-active":""}${P.id===t?" is-selected":""}`}
          onMouseEnter=${()=>T(_)}
          onMouseDown=${ee=>{ee.preventDefault(),S(P)}}>
          <span class="combo-label">${P.label}</span>
          ${P.sub&&l`<span class="combo-sub">${P.sub}</span>`}
        </li>`)}
      ${x&&l`<li role="option" class=${`combo-item combo-create${D===A.length?" is-active":""}`}
          onMouseEnter=${()=>T(A.length)}
          onMouseDown=${P=>{P.preventDefault(),s($),f(!1),I("")}}>
          <${W} name="plus" size=${16} />
          <span>${$.trim()?`„${$.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${y&&R===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var Qd={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function ze({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${W} name=${n||Qd[e]||"info"} size=${14} />${t}
  </span>`}function we({title:e,sub:t,back:n,children:a}){return l`<header class="page-head">
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
  </div>`}function J({title:e,action:t,children:n,class:a="",flush:s}){return l`<section class=${`panel ${a}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${s?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function Ce({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${W} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function ei({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function wt({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=k(!1),o=ke(null);ce(()=>{if(!i)return;let p=u=>{o.current&&!o.current.contains(u.target)&&r(!1)},d=u=>{u.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",d)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${C} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(p=>l`<button type="button" role="menuitem" class=${`menu-item${p.danger?" is-danger":""}`} disabled=${p.disabled}
        onClick=${()=>{r(!1),p.onClick()}}>
        ${p.icon&&l`<${W} name=${p.icon} size=${16} />`}<span>${p.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function Pe({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=ke(null);ce(()=>{let c=document.activeElement,p=r.current;if(p){let u=p.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");u&&u.focus()}let d=u=>{if(u.key==="Escape"&&(u.stopPropagation(),t()),u.key==="Tab"&&p){let m=[...p.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(b=>b.offsetParent!==null);if(!m.length)return;let g=m[0],h=m[m.length-1];u.shiftKey&&document.activeElement===g?(u.preventDefault(),h.focus()):!u.shiftKey&&document.activeElement===h&&(u.preventDefault(),g.focus())}};return document.addEventListener("keydown",d),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",d),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${C} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function Rl(){let e=Dl();return e?l`<${Yd} key=${e.id} d=${e} />`:null}function Yd({d:e}){let[t,n]=k(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${Pe} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${C} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${C} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${ie} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${Z} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function Bl(){let e=wl();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${W} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>dr(t.id)}><${W} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function Je({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,p]=k(s||null),d=De(()=>{if(!c)return t;let m=e.find(h=>h.key===c.key);if(!m||!m.sort)return t;let g=c.dir==="desc"?-1:1;return[...t].sort((h,b)=>{let y=m.sort(h),f=m.sort(b);return y==null&&f==null?0:y==null?1:f==null?-1:typeof y=="number"&&typeof f=="number"?(y-f)*g:String(y).localeCompare(String(f),"de",{numeric:!0})*g})},[t,c,e]);if(!t.length&&r)return r;let u=m=>{m.sort&&p(g=>g&&g.key===m.key?{key:m.key,dir:g.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
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
            onClick=${n?g=>{g.target.closest("button, a, input, select")||n(m)}:void 0}
            onKeyDown=${n?g=>{g.key==="Enter"&&g.target===g.currentTarget&&n(m)}:void 0}>
          ${e.map(g=>l`<td class=${`${g.align==="right"?"r":""} ${g.class||""}`}>${g.render?g.render(m):m[g.key]}</td>`)}
        </tr>`)}
      </tbody>
      ${i&&l`<tfoot><tr>${i.map((m,g)=>l`<td class=${e[g]&&e[g].align==="right"?"r":""}>${m}</td>`)}</tr></tfoot>`}
    </table>
  </div>`}function St({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function pt({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${W} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Fe({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function yn({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var Jd=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function $r(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return Jd.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var br=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),Xd=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function em(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function Ct(e,t,n={}){let a=em(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||v("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||v("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=Tl[o],p=e.currency||"USD",d=!s&&e.totals?e.totals:mt(e),u=F=>j(F,p,o),m=[i.name,br(i),$r(i)].filter(Boolean).join(" · "),g=[];if(r){let F=it(r);r.company&&g.push(r.company),F&&F!==r.company&&g.push(F);let Be=br(r);Be&&g.push(Be);let qe=$r(r);qe&&g.push(qe),r.country&&!Xd(r.country,i.country)&&g.push(r.country)}let h=[];r&&r.vatId&&h.push(`${c.vatId}: ${r.vatId}`);let b=e.number||n.previewNumber||"",y=[];y.push([c[`number_${a}`],b||`(${c.draft})`]),y.push([c[`date_${a}`],O(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?y.push([c.servicePeriod,`${O(e.serviceDate,o)} – ${O(e.serviceDateEnd,o)}`]):y.push([c.serviceDate,O(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&y.push([c.dueDate,O(e.dueDate,o)]),a==="quote"&&e.validUntil&&y.push([c.validUntil,O(e.validUntil,o)]),r&&r.number&&r.kind!=="contact"&&y.push([c.customerNo,r.number]);let f="";if(a==="credit_note"&&e.relatedInvoiceId){let F=v("invoices",e.relatedInvoiceId);F&&(f=Dt(c.refInvoice,{NUMBER:F.number,DATE:O(F.issueDate,o)}))}let $=e.items||[],I=$.some(F=>Number(F.discountPct)>0),T=new Set($.map(F=>Number(F.taxRate)||0)).size>1,z=new Map(d.lines.map(F=>[F.id,F])),H=$.map((F,Be)=>({pos:String(Be+1),name:F.name||"",description:F.description||"",qty:Fn(F.qty,o,3),unit:Ys(F.unit,o),price:u(F.priceCents),discount:Number(F.discountPct)>0?kt(F.discountPct,o):"",tax:kt(Number(F.taxRate)||0,o),amount:u(z.has(F.id)?z.get(F.id).cents:0)})),E=String(i.taxLabel||"").trim()||c.taxDefault,A=d.taxGroups.filter(F=>Number(F.rate)!==0),x=[],R=d.discountCents!==0;if((R||A.length)&&x.push({label:c.subtotal,value:u(d.subtotalCents)}),R){let F=e.discount||{},Be=F.type==="abs"?c.discount:`${c.discount} ${kt(F.value,o)}`;x.push({label:Be,value:u(-d.discountCents)}),A.length&&x.push({label:c.net,value:u(d.netCents)})}for(let F of A){let Be=A.length>1?` (${u(F.netCents)})`:"";x.push({label:`${E} ${kt(F.rate,o)}${Be}`,value:u(F.taxCents)})}x.push({label:c[`total_${a}`]||c.total,value:ga(d.totalCents,p,o),strong:!0});let S=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(p==="USD"||p==="EUR")){let F=p==="USD"?"EUR":"USD",Be=tn(d.totalCents,p,F,e.fx);if(Be!=null){let qe=p==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);S={line:`${c.approx} ${ga(Be,F,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${p} = ${ha(qe,o)} ${F}`}}}let K=[];a==="invoice"&&e.dueDate&&K.push(Dt(c.dueLine,{DATE:O(e.dueDate,o)})),a==="quote"&&e.validUntil&&K.push(Dt(c.validLine,{DATE:O(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&K.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&K.push(i.taxNote.trim());let P=null;if(a==="invoice"){let F=[];i.accountHolder&&F.push([c.holder,i.accountHolder]),i.bankName&&F.push([c.bank,i.bankName]),i.iban&&F.push(["IBAN",i.iban]),i.bic&&F.push(["BIC",i.bic]);let Be=[i.altBank,i.otherPayment].map(qe=>String(qe||"").trim()).filter(Boolean);(F.length||Be.length)&&(P={title:c.payment,rows:F,extra:Be})}let _=[i.name,br(i),$r(i),i.country].filter(Boolean),ee=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),N=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),X=q(r),fe=b?`${b} ${X}`:`${c.draft} ${c[a]} ${X}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:Xt(i.logoAssetId),companyName:i.name||"",title:c[a],number:b,subtitle:f,draftMark:s?c.draftMark:"",senderLine:m,recipient:g,recipientExtra:h,meta:y,intro:String(e.intro||"").trim(),columns:{discount:I,tax:T},labels:c,rows:H,sums:x,secondary:S,notes:K,payment:P,footerCols:[_,ee,N].filter(F=>F.length),footerText:String(e.footer||"").trim(),fileName:`${Yt(fe)}.pdf`}}var tm=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function Ul(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))tm.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var nm=8e3;async function am(e){let t=new AbortController,n=setTimeout(()=>t.abort(),nm);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var yr=e=>Number.isFinite(Number(e))&&Number(e)>0,vr={frankfurterV2(e,t,n){if(!e||!yr(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!yr(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!yr(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function sm(e,t,n){let a=n&&n<V(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:vr.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:vr.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:vr.erApi}),s}async function Ml(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||V(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<V()?n:V(),s=im(e,t,a);if(s)return s;let i=null;for(let o of sm(e,t,n))try{let c=await am(o.url),p=o.parse(c,e,t),d={id:`${e}_${t}_${a}`,base:e,quote:t,rate:p.rate,date:p.date||a,requestedDate:a,fetchedAt:ne(),source:p.source};return await Q(u=>u.put("rates",d)).catch(()=>{}),d}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function Vn(e){let t=V();return e&&e<t?e:t}function im(e,t,n){let a=`${e}_${t}_${n}`,s=Ae("rates").find(i=>i.id===a);return!s||n===V()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function wr(e,t){let n=Ae("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function qn(e,t){let n=await Ml("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await Ml(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:Vn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var rm=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],om={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function Gt(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!rm.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function lm(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function Zn(e,t,n,a){return`${e}:${t}:${lm(n,a)}`}function xr(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function zt(e,t){let n=om[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function kr(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=zt(e,t),c=Gt(r);if(c)throw new Error(c);let p=Number(a)||0;for(let d=0;d<1e5;d++){p+=1;let u=xr(r,{prefix:i,dateISO:n,n:p,digits:o});if(!await s(u))return{number:u,n:p}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var he=e=>({...e,updatedAt:ne()}),Ie=class extends Error{},L=e=>{throw new Ie(e)},Pl={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},an=e=>$e(e)&&e>="2000-01-01"&&e<="2100-12-31";async function Wa(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=Gt(e[r]);o&&L(o)}String(e.name||"").trim()||L("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&L("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of Ae("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=zt(e,o),p=zt(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===p.pattern&&String(c.prefix).trim().toLowerCase()===String(p.prefix).trim().toLowerCase()&&L(`${r.name} verwendet für ${Pl[o]} bereits das Präfix „${p.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=v("companies",e.id),a=he(e),s=null;t&&(s={id:await cm(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=Nt(n,a,["updatedAt","createdAt"]);return await Q(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function Kl(e,t){let n=v("companies",e);if(!n)return;let a=he({...n,archived:t});await Q(async s=>{await s.put("companies",a),t&&w.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function Sr(e){return Ae("invoices").some(t=>t.companyId===e)||Ae("quotes").some(t=>t.companyId===e)||Ae("expenses").some(t=>t.companyId===e)||Ae("recurring").some(t=>t.companyId===e)}async function Fl(e){let t=v("companies",e);t&&(Sr(e)&&L("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await Q(async n=>{await n.del("companies",e),w.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:ti(t)})}))}async function cm(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+He()}var ti=e=>{let t=ye(e);return delete t.snapshot,t},Ol={customer:"K",contact:"KO"},_l=e=>Te(e)?"customer":"contact",Vl=(e,t)=>new RegExp(`^${Ol[e]}-\\d+$`).test(String(t||""));function vn(e="customer",t=Ae("customers")){let n=Ol[e]||"K",a=new RegExp(`^${n}-(\\d+)$`),s=0;for(let i of t)for(let r of[i.number,...i.formerNumbers||[]]){let o=a.exec(r||"");o&&(s=Math.max(s,Number(o[1])))}return`${n}-${String(s+1).padStart(4,"0")}`}async function Gn(e){q(e)||L("Bitte ein Unternehmen oder einen Namen eintragen.");let t=v("customers",e.id),n=he({...e,kind:_l(e)}),a=t?_l(t):n.kind;t&&a==="customer"&&n.kind==="contact"&&Ae("invoices").some(o=>o.customerId===n.id)&&L("Für diesen Kunden gibt es Rechnungen. Er bleibt Kunde."),t&&a!==n.kind&&Vl(a,t.number)&&(!String(n.number||"").trim()||n.number===t.number)&&(n.formerNumbers=[...t.formerNumbers||[],t.number],n.number=""),String(n.number||"").trim()||(n.number=vn(n.kind,[...Ae("customers").filter(o=>o.id!==n.id),{formerNumbers:n.formerNumbers||[]}]));let s=Ae("customers").find(o=>o.id!==n.id&&o.number===n.number);s&&L(`Die Nummer ${n.number} ist bereits vergeben (${q(s)}).`);let i=Nt(t,n,["updatedAt","createdAt"]),r=n.kind==="customer"?"Kunde":"Kontakt";return await Q(async o=>{await o.put("customers",n),await o.audit({action:t?a!==n.kind?n.kind==="customer"?"Kontakt zum Kunden gemacht":"Kunde als Kontakt geführt":`${r} geändert`:`${r} angelegt`,entity:"customers",entityId:n.id,label:q(n),prev:t?i.prev:null,next:i.next})}),n}function Cr(e){return Ae("invoices").some(t=>t.customerId===e)||Ae("quotes").some(t=>t.customerId===e)||Ae("recurring").some(t=>t.customerId===e)||Ae("contracts").some(t=>t.customerId===e)}async function ql(e){let t=v("customers",e);t&&(Cr(e)&&L("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await Q(async n=>{let a=Ae("notes").filter(r=>r.customerId===e),s=Ae("appointments").filter(r=>r.customerId===e),i=Ae("todos").filter(r=>r.customerId===e);for(let r of a)await n.del("notes",r.id);for(let r of s)await n.del("appointments",r.id);for(let r of i)await n.del("todos",r.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:q(t),prev:{...t,...a.length||s.length||i.length?{related:{notes:a,appointments:s,todos:i}}:{}}})}))}async function ni(e){v("customers",e.customerId)||L("Bitte einen Kunden wählen."),$e(e.date)||L("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&L("Bitte etwas eintragen.");let t=v("notes",e.id),n=he({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=Nt(t,n,["updatedAt","createdAt"]);return await Q(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${q(v("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function Zl(e){let t=v("notes",e);t&&await Q(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:q(v("customers",t.customerId)),prev:t})})}var zl=/^([01]\d|2[0-3]):[0-5]\d$/,um=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function ai(e){v("companies",e.companyId)||L("Bitte das Unternehmen wählen, über das der Termin läuft."),an(e.date)||L("Bitte ein gültiges Datum eintragen."),(!zl.test(e.start||"")||!zl.test(e.end||""))&&L("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&L("Das Ende liegt vor dem Beginn.");let t=v("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&L("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=v("appointments",e.id),a=he({...e,title:String(e.title||"").trim()||(t?`Termin mit ${q(t)}`:String(e.contactName||"").trim())});n&&um.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=Nt(n,a,["updatedAt","createdAt","sequence"]);return await Q(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function si(e,{outcome:t,nextSteps:n,todos:a=[]}){let s=v("appointments",e);s||L("Termin nicht gefunden.");let i=a.filter(c=>String(c.title||"").trim());for(let c of i)c.due&&!an(c.due)&&L(`Bitte die Fälligkeit von „${c.title}“ prüfen.`);let r=he({...s,status:"done",outcome:String(t||"").trim(),nextSteps:String(n||"").trim(),followUpAt:null});s.status!=="done"&&(r.sequence=(Number(s.sequence)||0)+1);let o=i.map(c=>Bn({title:String(c.title).trim(),due:c.due||"",customerId:s.customerId||"",companyId:s.companyId||"",appointmentId:s.id}));return await Q(async c=>{await c.put("appointments",r);for(let p of o)await c.put("todos",p);await c.audit({action:"Termin dokumentiert",entity:"appointments",entityId:e,label:`${s.date} ${s.start}, ${s.title}`,prev:{status:s.status,outcome:s.outcome||""},next:{status:"done",outcome:r.outcome,nextSteps:r.nextSteps,todos:o.map(p=>p.title).join(", ")}})}),{appointment:r,todos:o}}async function Gl(e,t){let n=v("appointments",e);if(!n)return null;let a=he({...n,followUpAt:t});return await Q(async s=>{await s.put("appointments",a)}),a}async function Qa(e){String(e.title||"").trim()||L("Bitte beschreiben, was zu tun ist."),e.due&&!an(e.due)&&L("Bitte die Fälligkeit prüfen.");let t=v("todos",e.id),n=he({...e,title:String(e.title).trim()}),a=Nt(t,n,["updatedAt","createdAt"]);return t&&!a.changed.length||await Q(async s=>{await s.put("todos",n),await s.audit({action:t?"To-do geändert":"To-do angelegt",entity:"todos",entityId:n.id,label:n.title,prev:t?a.prev:null,next:t?a.next:{title:n.title,due:n.due}})}),n}async function Hl(e,t=!0){let n=v("todos",e);if(!n)return null;let a=he({...n,done:!!t,doneAt:t?ne():null});return await Q(async s=>{await s.put("todos",a),await s.audit({action:t?"To-do erledigt":"To-do wieder geöffnet",entity:"todos",entityId:e,label:n.title,prev:{done:n.done},next:{done:!!t}})}),a}async function jl(e){let t=v("todos",e);t&&await Q(async n=>{await n.del("todos",e),await n.audit({action:"To-do gelöscht",entity:"todos",entityId:e,label:t.title,prev:t})})}async function ii(e,t,n){let a=v("appointments",e);a||L("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||L("Unbekannter Status.");let s=he({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await Q(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function Wl(e){let t=v("appointments",e);t&&await Q(async n=>{for(let a of Ae("todos").filter(s=>s.appointmentId===e))await n.put("todos",he({...a,appointmentId:""}));await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function ri(e){String(e.name||"").trim()||L("Bitte einen Namen für die Leistung eintragen.");let t=v("services",e.id),n=he(e),a=Nt(t,n,["updatedAt","createdAt"]);return await Q(async s=>{await s.put("services",n),await s.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?a.prev:null,next:a.next})}),n}async function Ql(e){let t=v("services",e);t&&await Q(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function ot(e,t){return Rt({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function Ir(e){return $e(e.issueDate)?Se(e.issueDate,Number(e.paymentTermDays)||0):""}function Hn(e){let t=he({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=Ir(t)),t.fx&&_e.includes(t.currency)&&(t.fx=qt(t.currency,t.fx.usdToEur,t.fx)),t.totals=mt(t),t}function Yl(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new Ie(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=ye(t[a]):delete e[a];return n}async function $a(e){let t=v("invoices",e.id);t&&t.status!=="draft"&&L("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&L("Nur Entwürfe können gespeichert werden.");let n=Hn(e);return await Q(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new Ie("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");Yl(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${q(v("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function Er(e){let t=v("invoices",e);if(t){if(t.number||t.status!=="draft"){await Nr(e);return}await Q(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new Ie("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await Jl(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:ti(t)})})}}async function Nr(e){let t=v("invoices",e);return t?t.type==="credit_note"?Rr(e):t.status==="draft"&&!t.number?(await Er(e),{number:""}):Q(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await Dr(n,r,"credit"));for(let p of s)await n.del("payments",p.id);for(let p of i)await n.del("reminders",p.id);await n.del("invoices",e);let o=await Dr(n,a,"invoice");await Jl(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:q(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:Ue(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:ye(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function oi(e,t="invoice"){let n=[],a=v("companies",e.companyId);a||n.push("Unternehmen auswählen"),v("customers",e.customerId)||n.push("Kunde auswählen"),$e(e.issueDate)?an(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!$e(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&$e(e.issueDate)&&e.fx.forDate!==Vn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),_e.includes(e.currency)||n.push("Währung wählen"),a&&v("customers",e.customerId)){let i=Ul(Ct(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=Gt(zt(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function Ya(e,t,n){if(!e||!$e(n))return"";let{pattern:a}=zt(e,t);if(Gt(a))return"";let s=Zn(e.id,t,a,n),i=v("counters",s),r=new Set([...Ae("invoices"),...Ae("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await kr(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Tr(e,t,n,a){let{pattern:s}=zt(t,n),i=Zn(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await kr(t,n,a,r.last,async p=>!!await e.byIndex("invoices","number",p)||!!await e.byIndex("quotes","number",p));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function Dr(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!$e(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=zt(i,n);if(Gt(o))return null;let p=Zn(i.id,n,o,t.issueDate),d=await e.get("counters",p);if(!d)return null;for(let u=Number(d.last)||0;u>=1;u--)if(xr(o,{prefix:r,dateISO:t.issueDate,n:u,digits:c})===t.number){a={key:p,n:u};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function Jl(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===Et(t.issueDate,pi(n),n.anchorDay)&&await e.put("recurring",he({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",he({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function Xl(e,t,n,a){let{pattern:s}=zt(e,t),i=Zn(e.id,t,s,n),r=v("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await Q(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${Pl[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function Ar(e,t){return{company:ye(e),customer:ye(t),at:ne()}}async function Ja(e){let t=oi(e,"invoice");t.length&&L(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=v("companies",e.companyId),a=v("customers",e.customerId),s=v("invoices",e.id);s&&s.status!=="draft"&&L("Diese Rechnung ist bereits erstellt.");let i=Hn(e);return Q(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new Ie("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=Yl(i,o),p=c?i.reopened||{}:null;if(!c){let u=await Tr(r,n,"invoice",i.issueDate);i.number=u.number,i.numberRef=u.ref}i.status="issued",i.finalizedAt=ne(),i.sentAt=null;let d=await r.get("customers",i.customerId)||a;if(!Te(d)){let u=d.number,m=he({...d,kind:"customer"});Vl("contact",u)&&(m.formerNumbers=[...d.formerNumbers||[],u],m.number=vn("customer",[...Ae("customers").filter(g=>g.id!==d.id),{formerNumbers:m.formerNumbers}])),await r.put("customers",m),await r.audit({action:"Kontakt zum Kunden gemacht",entity:"customers",entityId:m.id,label:q(m),prev:{kind:"contact",number:u},next:{kind:"customer",number:m.number,reason:"Erste Rechnung"}}),d=m}if(i.snapshot=Ar(n,d),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:p.totalCents,currency:p.currency,issueDate:p.issueDate,customer:p.customer,usdToEur:p.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:q(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let u=await r.get("quotes",i.quoteId);u&&u.status!=="invoiced"&&await r.put("quotes",he({...u,status:"invoiced",invoiceId:i.id}))}return i})}async function ec(e){let t=v("invoices",e);return t||L("Rechnung nicht gefunden."),t.type==="credit_note"&&L("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||L("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),Q(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:q(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=he({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:ye(a)},next:{status:"draft"}}),o})}async function jn(e,t=!0){let n=v("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=he({...n,status:t?"sent":"issued",sentAt:t?ne():null});await Q(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function li(e,t,n){let a=v(e,t);a&&await Q(async s=>{await s.put(e,he({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function Xa(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=v("invoices",e);r||L("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&L("Zu diesem Beleg können keine Zahlungen erfasst werden."),$e(t)||L("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||L("Bitte einen Zahlungsbetrag größer als null eintragen."),o>nn(r,We(e))&&L("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:He(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await Q(async p=>{let d=await p.get("invoices",e),u=await p.allByIndex("payments","invoiceId",e);if(!d||d.type==="credit_note"||["draft","cancelled","credited"].includes(d.status))throw new Ie("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>nn(d,u))throw new Ie("Der Betrag ist höher als der offene Rechnungsbetrag.");await p.put("payments",c);let m=[...u,c];await p.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:Zt(d,u,V()),paidCents:Ue(u)},next:{status:Zt(d,m,V()),paidCents:Ue(m),amountCents:o,date:t,method:a}});let g=String(i||"").trim();g&&(await p.put("invoices",he({...d,clarify:{note:g,at:ne()}})),await p.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:d.clarify?{note:d.clarify.note}:null,next:{note:g}}))}),c}async function tc(e,{date:t,amountCents:n,method:a,note:s}){v("payments",e)||L("Zahlung nicht gefunden."),$e(t)||L("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||L("Bitte einen Betrag größer als null eintragen."),Q(async o=>{let c=await o.get("payments",e);if(!c)throw new Ie("Diese Zahlung gibt es nicht mehr.");let p=c.amountCents<0,d=await o.get("invoices",c.invoiceId),u=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(f=>f.id!==e),m=p?-r:r,g=Ue(u)+m;if(g<0)throw new Ie(p?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let h=d&&d.totals?d.totals.totalCents:null;if(!p&&h!=null&&g>h)throw new Ie("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let b={...c,date:t,amountCents:m,method:a||"",note:s||"",updatedAt:ne()},y=Nt(c,b,["updatedAt","createdAt"]);return Object.keys(y.next).length&&(await o.put("payments",b),await o.audit({action:p?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:d?d.number:"",prev:y.prev,next:y.next})),b})}async function nc(e,t){let n=String(t||"").trim();return n||L("Bitte kurz notieren, was zu klären ist."),Q(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new Ie("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=he({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function ac(e,t){return Q(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=he({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function sc(e,{date:t,amountCents:n,method:a,note:s}){let i=v("invoices",e);i||L("Rechnung nicht gefunden."),i.status!=="credited"&&L("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),$e(t)||L("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||L("Bitte einen Betrag größer als null eintragen.");let o={id:He(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await Q(async c=>{let p=await c.allByIndex("payments","invoiceId",e);if(r>Ue(p))throw new Ie("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:Ue(p)},next:{paidCents:Ue(p)-r,amountCents:-r,date:t,method:a}})}),o}async function ic(e){let t=v("payments",e);if(!t)return;let n=v("invoices",t.invoiceId);await Q(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(Ue(s)<0)throw new Ie("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function ci(e,t){let n=v("invoices",e);n&&(n.type==="credit_note"&&L("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||L("Diese Rechnung kann nicht storniert werden."),Ue(We(e))>0&&L("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await Q(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(Ue(i)>0)throw new Ie("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=he({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function rc(e){return Q(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new Ie("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=he({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function ui(e,t){let n=v("invoices",e);n||L("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&L("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=v("companies",n.companyId);a||L("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=V(),i={...dt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:He(),qty:-Number(r.qty)})),discount:ye(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:ye(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=mt(i),Q(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Tr(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:ye(a),customer:ye(n.snapshot?n.snapshot.customer:v("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",he({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function Rr(e){let t=v("invoices",e);t||L("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||L("Zu dieser Rechnung gibt es keine Gutschrift."),Q(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new Ie("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(p=>p.amountCents<0))throw new Ie(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await Dr(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=he({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:ye(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function oc(e){let t=v("companies",e.companyId);return{...dt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:He()})),discount:ye(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function lc(e){let t=v("quotes",e.id);t&&t.status!=="draft"&&L("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=Hn(e);return await Q(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${q(v("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function cc(e){let t=v("quotes",e);t&&(t.status!=="draft"&&L("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await Q(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:ti(t)})}))}async function es(e){let t=oi(e,"quote");t.length&&L(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=v("companies",e.companyId),a=v("customers",e.customerId),s=v("quotes",e.id);s&&s.status!=="draft"&&L("Dieses Angebot ist bereits erstellt.");let i=Hn(e);return Q(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new Ie("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Tr(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=Ar(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var Ll={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function Wn(e,t){let n=v("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!Ll[t])return;let a=he({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await Q(async s=>{await s.put("quotes",a),await s.audit({action:Ll[t],entity:"quotes",entityId:e,label:je(n),prev:{status:n.status},next:{status:t}})})}async function uc(e){let t=v("quotes",e);t||L("Angebot nicht gefunden."),t.status==="draft"&&L("Bitte das Angebot zuerst erstellen."),t.invoiceId&&v("invoices",t.invoiceId)&&L("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=v("companies",t.companyId);n||L("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=v("customers",t.customerId),s=Hn({...dt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:He()})),discount:ye(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await Q(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new Ie("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new Ie("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",he({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:je(t),next:{invoiceDraftId:s.id}})}),s}async function dc(e,t,n,a){let s={id:He(),name:t.name||"Dokument.pdf",mime:t.blob.type||"application/pdf",size:t.blob.size,ownerType:n,ownerId:a,createdAt:ne()};return await e.blobPut(s.id,t.blob),await e.put("attachments",s),s}async function di(e,t){await e.del("attachments",t),await e.blobDel(t)}var dm=["open","sent","accepted","declined"];async function mc(e,t=null){let n=v("quotes",e.id);n&&n.source!=="upload"&&L("Nur hochgeladene Angebote lassen sich so bearbeiten.");let a=v("companies",e.companyId),s=v("customers",e.customerId);a||L("Bitte das Unternehmen wählen, von dem das Angebot stammt."),s||L("Bitte den Kontakt wählen."),String(e.title||"").trim()||L("Bitte eine Bezeichnung eintragen, z. B. „Website-Relaunch“."),an(e.issueDate)||L("Bitte das Angebotsdatum eintragen."),e.validUntil&&(!an(e.validUntil)||e.validUntil<e.issueDate)&&L("„Gültig bis“ muss nach dem Angebotsdatum liegen."),_e.includes(e.currency)||L("Bitte USD oder EUR wählen.");let i=e.items||[];(i.length!==1||!(Number(i[0].priceCents)>=0))&&L("Bitte den Betrag des Angebots eintragen.");let r=n&&n.status==="invoiced";!r&&!dm.includes(e.status)&&L("Unbekannter Status."),!t&&!(e.attachmentIds||[]).length&&L("Bitte das PDF des Angebots auswählen.");let o=Hn({...e,source:"upload",number:null,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim()});o.items=[{...i[0],name:o.title,qty:1}],o.totals=mt(o),r&&(o.status="invoiced"),o.finalizedAt=n&&n.finalizedAt||ne(),o.status==="sent"&&!o.sentAt&&(o.sentAt=ne()),["accepted","declined"].includes(o.status)&&!o.decidedAt&&(o.decidedAt=ne()),["open","sent"].includes(o.status)&&(o.decidedAt=null),o.snapshot=Ar(a,s);let c=Nt(n,o,["updatedAt","createdAt","snapshot","totals","fx","attachmentIds"]);return Q(async p=>{if(t){for(let u of o.attachmentIds||[])await di(p,u);let d=await dc(p,t,"quote",o.id);o.attachmentIds=[d.id]}return await p.put("quotes",o),await p.audit({action:n?t?"PDF-Angebot ersetzt":"PDF-Angebot geändert":"PDF-Angebot hochgeladen",entity:"quotes",entityId:o.id,label:je(o),prev:n?c.prev:null,next:n?c.next:{title:o.title,totalCents:o.totals.totalCents,currency:o.currency}}),o})}async function pc(e){let t=v("quotes",e);t&&(t.source!=="upload"&&L("Im Tool erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),t.invoiceId&&v("invoices",t.invoiceId)&&L("Zu diesem Angebot gibt es eine Rechnung. Es bleibt deshalb erhalten."),await Q(async n=>{for(let a of t.attachmentIds||[])await di(n,a);for(let a of Ae("contracts").filter(s=>s.quoteId===e))await n.put("contracts",he({...a,quoteId:""}));await n.del("quotes",e),await n.audit({action:"PDF-Angebot gelöscht",entity:"quotes",entityId:e,label:je(t),prev:ti(t)})}))}async function ts(e,{files:t=[],removeIds:n=[]}={}){let a=v("contracts",e.id);v("companies",e.companyId)||L("Bitte das Unternehmen wählen, mit dem der Vertrag besteht."),v("customers",e.customerId)||L("Bitte den Kontakt wählen."),String(e.title||"").trim()||L("Bitte eine Bezeichnung eintragen, z. B. „SEO-Betreuung“."),ca[e.status]||L("Unbekannter Status."),Oa.some(r=>r.id===e.billing)||L("Unbekannte Abrechnungsart.");for(let[r,o]of[["signedDate","Unterschrieben am"],["startDate","Beginn"],["endDate","Ende"]])e[r]&&!an(e[r])&&L(`Bitte das Datum „${o}“ prüfen.`);e.startDate&&e.endDate&&e.endDate<e.startDate&&L("Das Vertragsende liegt vor dem Beginn."),e.amountCents!=null&&!(Number(e.amountCents)>=0)&&L("Bitte den Betrag prüfen."),_e.includes(e.currency)||L("Bitte USD oder EUR wählen."),e.quoteId&&!v("quotes",e.quoteId)&&L("Das verknüpfte Angebot existiert nicht mehr.");let s=he({...e,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim(),amountCents:e.amountCents==null||e.amountCents===""?null:Math.round(Number(e.amountCents)),attachmentIds:(e.attachmentIds||[]).filter(r=>!n.includes(r))}),i=Nt(a,s,["updatedAt","createdAt","attachmentIds"]);return Q(async r=>{for(let c of n)await di(r,c);for(let c of t)s.attachmentIds.push((await dc(r,c,"contract",s.id)).id);await r.put("contracts",s);let o=[t.length&&`${t.length} PDF hinzugefügt`,n.length&&`${n.length} PDF entfernt`].filter(Boolean).join(", ");return await r.audit({action:a?"Vertrag geändert":"Vertrag angelegt",entity:"contracts",entityId:s.id,label:s.title,prev:a?i.prev:null,next:a?{...i.next,...o?{dateien:o}:{}}:{title:s.title,status:s.status,...o?{dateien:o}:{}}}),s})}async function fc(e){let t=v("contracts",e);t&&await Q(async n=>{for(let a of t.attachmentIds||[])await di(n,a);for(let a of Ae("invoices").filter(s=>s.contractId===e)){let s=await n.get("invoices",a.id);s&&await n.put("invoices",{...s,contractId:""})}for(let a of Ae("recurring").filter(s=>s.contractId===e))await n.put("recurring",he({...a,contractId:""}));await n.del("contracts",e),await n.audit({action:"Vertrag gelöscht",entity:"contracts",entityId:e,label:t.title,prev:t})})}function mi(e){let t=Oa.find(n=>n.id===e.billing);return Rt({name:e.title,description:e.refNumber?`Gemäß Vertrag ${e.refNumber}`:"",qty:1,unit:t&&["monthly","quarterly","semiannual","yearly"].includes(t.id)?{monthly:"Monat",quarterly:"Quartal",semiannual:"Halbjahr",yearly:"Jahr"}[t.id]:"Pauschale",priceCents:e.amountCents||0,taxRate:Number(e.taxRate)||0})}async function wn(e){let t=v("expenses",e.id),n=he({...e});n.status!=="review"&&(v("companies",n.companyId)||L("Bitte ein Unternehmen auswählen."),an(n.invoiceDate)||L("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&L("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||L("Bitte einen Lieferanten eintragen."),n.paymentDate&&!an(n.paymentDate)&&L("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||L("Bitte den Wechselkurs laden oder eintragen."));let a=Nt(t,n,["updatedAt","createdAt","ai"]);return await Q(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function gc(e){let t=v("expenses",e);t&&await Q(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function Br({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:He(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await Q(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function Ur(e){await Q(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function pi(e){let t=Rn.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function ns(e){String(e.name||"").trim()||L("Bitte der Vorlage einen Namen geben."),v("companies",e.companyId)||L("Bitte ein Unternehmen auswählen."),v("customers",e.customerId)||L("Bitte einen Kunden auswählen."),(e.items||[]).length||L("Bitte mindestens eine Position hinzufügen."),$e(e.nextDate)||L("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!$e(e.endDate)&&L("Bitte das Enddatum prüfen.");let t=v("recurring",e.id),n=he({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=mt(n),await Q(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function hc(e){let t=v("recurring",e);t&&await Q(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var ba=(e,t=V())=>!!e&&e.active&&$e(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),ya=e=>!!e.endDate&&$e(e.nextDate)&&e.nextDate>e.endDate;async function Mr(e,{early:t=!1}={}){let n=v("recurring",e);n||L("Vorlage nicht gefunden."),ya(n)&&L("Diese Vorlage hat ihr Enddatum erreicht."),n.active||L("Diese Vorlage ist pausiert."),!t&&n.nextDate>V()&&L("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=v("companies",n.companyId),s=v("customers",n.customerId);(!a||!s)&&L("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=pi(n),r=n.nextDate,o=Se(Et(r,i,n.anchorDay),-1),c=Hn({...dt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:He()})),discount:ye(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id,...n.contractId?{contractId:n.contractId}:{}}),p=Et(r,i,n.anchorDay),d=!!n.endDate&&p>n.endDate,u=he({...n,nextDate:p,generated:(n.generated||0)+1,lastRunAt:ne(),active:d?!1:n.active,endedByRun:d});return await Q(async m=>{let g=await m.get("recurring",n.id);if(!g||g.nextDate!==n.nextDate||!g.active)throw new Ie("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",c),await m.put("recurring",u),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:p}})}),c}async function $c(e,t,n){let a=v("invoices",e);if(!a)return null;let s={id:He(),invoiceId:e,level:t,date:V(),note:n||"",createdAt:ne()};return await Q(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}var mm="https://api.anthropic.com/v1/messages",pm=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],bc=/^([01]\d|2[0-3]):[0-5]\d$/;function yc(e,{today:t,timeZone:n,now:a=new Date}){let s={},i=[],r=(f,$,I)=>{let D=`${f}${$+1}`;return s[D]=I,D},o=e.companies.filter(f=>!f.archived);i.push("UNTERNEHMEN (über welches Konto etwas läuft):"),o.forEach((f,$)=>i.push(`${r("U",$,f.id)}: ${f.name}${f.shortName&&f.shortName!==f.name?` (${f.shortName})`:""}${f.meetingProvider?`, Meetings über ${f.meetingProvider}`:""}`));let c=e.customers.filter(f=>f.active!==!1).slice(0,600);i.push("","KONTAKTE (K = Kürzel; Art: Kunde oder Kontakt/Interessent):"),c.forEach((f,$)=>{let I=it(f);i.push(`${r("K",$,f.id)}: ${q(f)}${I&&I!==q(f)?` – ${I}`:""} [${f.kind==="contact"?"Kontakt":"Kunde"} ${f.number||""}]${f.city?`, ${f.city}`:""}`)});let p=new Map(Object.entries(s).map(([f,$])=>[$,f])),d=e.services.filter(f=>f.active!==!1).slice(0,200);d.length&&(i.push("","LEISTUNGEN (für Rechnungsentwürfe):"),d.forEach((f,$)=>i.push(`${r("L",$,f.id)}: ${f.name} – ${((f.priceCents||0)/100).toFixed(2)} ${f.currency||""} je ${f.unit||"Stück"}`)));let u=new Date(a.getTime()-14*864e5).toISOString().slice(0,10),m=new Date(a.getTime()+30*864e5).toISOString().slice(0,10),g=e.appointments.filter(f=>f.date>=u&&f.date<=m).sort((f,$)=>`${f.date}${f.start}`<`${$.date}${$.start}`?-1:1).slice(0,80);g.length&&(i.push("","TERMINE (letzte 14 und nächste 30 Tage):"),g.forEach((f,$)=>i.push(`${r("T",$,f.id)}: ${f.date} ${f.start}–${f.end}, ${f.title}${f.customerId&&p.get(f.customerId)?` (${p.get(f.customerId)})`:""}, ${f.status==="done"?"dokumentiert":f.status==="cancelled"?"abgesagt":"geplant"}`)));let h=e.todos.filter(f=>!f.done).sort((f,$)=>(f.due||"9")<($.due||"9")?-1:1).slice(0,60);h.length&&(i.push("","OFFENE TO-DOS:"),h.forEach(f=>i.push(`- ${f.title}${f.due?` (fällig ${f.due})`:""}${f.customerId&&p.get(f.customerId)?` (${p.get(f.customerId)})`:""}`)));let b=new Date(`${t}T12:00:00Z`);return{text:`${`Heute ist ${pm[b.getUTCDay()]}, ${t}. Zeitzone: ${n}. Uhrzeit jetzt: ${a.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",timeZone:n})}.`}

${i.join(`
`)}`,map:s}}var fi={type:"string",description:"Kürzel eines Kontakts (K…) oder die ref eines im selben Befehl neu angelegten Kontakts (NEU1 …)."},gi={type:"string",description:"Datum YYYY-MM-DD. Relative Angaben („Freitag“, „in zwei Wochen“) vom heutigen Datum aus berechnen."},fm=[{name:"create_todos",description:"Legt ein oder mehrere To-dos an.",input_schema:{type:"object",properties:{todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:gi,contact:fi,company:{type:"string",description:"Kürzel U…, optional"}},required:["title"]}}},required:["todos"]}},{name:"create_appointment",description:"Plant einen Termin. Meeting-Link und Zugangsdaten setzt das Tool automatisch aus dem Unternehmen.",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U… – über welches Unternehmen der Termin läuft. Pflicht; nur raten, wenn es genau ein Unternehmen gibt."},contact:fi,contact_name:{type:"string",description:"Gesprächspartner, falls kein Kontakt passt oder eine bestimmte Person gemeint ist."},title:{type:"string"},date:gi,start:{type:"string",description:"Beginn HH:MM (24 h)."},duration_minutes:{type:"number",description:"Dauer in Minuten, wenn genannt."},kind:{type:"string",enum:["video","phone","onsite"],description:"Standard video."},location:{type:"string",description:"Ort bei Vor-Ort-Terminen bzw. Telefonnummer."},agenda:{type:"string"}},required:["company","date","start"]}},{name:"add_note",description:"Trägt eine Notiz in die Kundendokumentation ein (Telefonat, Gespräch, E-Mail, Notiz).",input_schema:{type:"object",properties:{contact:fi,kind:{type:"string",enum:["note","call","email","meeting","task"]},title:{type:"string"},text:{type:"string"},date:gi},required:["contact","text"]}},{name:"create_contact",description:"Legt einen neuen Kontakt oder Kunden an. Nur, wenn ausdrücklich ein neuer Kontakt gemeint ist und keiner aus der Liste passt.",input_schema:{type:"object",properties:{ref:{type:"string",description:"NEU1, NEU2 … – damit andere Aufrufe im selben Befehl darauf verweisen können."},kind:{type:"string",enum:["contact","customer"],description:"Standard contact."},company:{type:"string"},first_name:{type:"string"},last_name:{type:"string"},email:{type:"string"},phone:{type:"string"},city:{type:"string"},notes:{type:"string"}},required:["ref"]}},{name:"document_appointment",description:"Dokumentiert einen Termin aus der Liste: Ergebnis, nächste Schritte, To-dos.",input_schema:{type:"object",properties:{appointment:{type:"string",description:"Kürzel T…"},outcome:{type:"string"},next_steps:{type:"string"},todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:gi},required:["title"]}}},required:["appointment"]}},{name:"create_invoice_draft",description:"Legt einen Rechnungsentwurf an (nur Entwurf – erstellt wird er im Tool per Klick).",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U…"},contact:fi,items:{type:"array",items:{type:"object",properties:{service:{type:"string",description:"Kürzel L…, wenn eine Leistung passt"},name:{type:"string",description:"Bezeichnung, wenn keine Leistung passt"},quantity:{type:"number"},unit_price:{type:"number",description:"Einzelpreis netto, nur wenn genannt"}}}}},required:["company","contact","items"]}},{name:"answer",description:"Antwortet in Textform: auf Fragen („Was steht heute an?“) oder mit einer Rückfrage, wenn etwas unklar ist (z. B. welcher Kontakt gemeint ist).",input_schema:{type:"object",properties:{text:{type:"string"}},required:["text"]}}],gm=`Du bist die Sprachsteuerung von BBC Finance, einem Rechnungs- und CRM-Tool. Der Nutzer spricht Deutsch; der Text stammt aus einer Spracherkennung und kann Hörfehler enthalten.
Setze den Befehl ausschließlich mit den Werkzeugen um. Du darfst mehrere Werkzeuge in einer Antwort aufrufen.
Regeln:
- Verwende nur Kürzel aus der Übersicht. Ordne Namen großzügig zu (Hörfehler, Vor- oder Nachname, Firmenname). Passen mehrere Kontakte gleich gut oder keiner, frage mit answer nach statt zu raten.
- Fehlt beim Termin das Unternehmen und gibt es mehr als eines, frage mit answer nach.
- Datumsangaben immer als YYYY-MM-DD, Uhrzeiten als HH:MM. „Nächste Woche“ ohne Tag = Montag der nächsten Woche.
- To-do-Titel kurz und als Aufgabe formulieren („Angebot schicken“).
- Rechnungen gibt es nur als Entwurf. Löschen, Stornieren und Zahlungen sind nicht per Sprache möglich – erkläre das mit answer.
- Fragen beantwortest du knapp mit answer anhand der Übersicht.`;function hm({model:e,text:t,context:n}){return{model:e,max_tokens:2e3,system:gm,tools:fm,tool_choice:{type:"any"},messages:[{role:"user",content:`${n}

---
BEFEHL: ${t}`}]}}var va=(e,t,n)=>typeof t=="string"&&t.startsWith(n)&&e[t]?e[t]:"",as=e=>typeof e=="string"&&$e(e)?e:"";function $m(e,t){let n=e&&Array.isArray(e.content)?e.content.filter(o=>o.type==="tool_use"):[];if(!n.length)throw new Error("Der Befehl wurde nicht verstanden. Bitte anders formulieren.");let a=[],s=[],i=new Set(n.filter(o=>o.name==="create_contact").map(o=>String((o.input||{}).ref||""))),r=(o,c)=>{if(!o)return"";if(i.has(o))return`ref:${o}`;let p=va(t,o,"K");return p||c.push(`Kontakt „${o}“ nicht gefunden – wird ohne Kontakt angelegt.`),p};for(let o of n){let c=o.input||{},p=[];if(o.name==="answer"){c.text&&s.push(String(c.text));continue}if(o.name==="create_todos"){let d=(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:as(u.due),customerId:r(u.contact,p),companyId:va(t,u.company,"U")}));d.length&&a.push({type:"todos",items:d,warnings:p})}else if(o.name==="create_appointment"){let d=va(t,c.company,"U");d||p.push("Unternehmen nicht erkannt – bitte nach dem Anlegen prüfen."),as(c.date)||p.push("Datum nicht erkannt."),bc.test(String(c.start||""))||p.push("Uhrzeit nicht erkannt."),a.push({type:"appointment",companyId:d,customerId:r(c.contact,p),contactName:String(c.contact_name||"").trim(),title:String(c.title||"").trim(),date:as(c.date),start:bc.test(String(c.start||""))?c.start:"",duration:Number(c.duration_minutes)>0?Math.min(Math.round(Number(c.duration_minutes)),600):0,kind:["video","phone","onsite"].includes(c.kind)?c.kind:"video",location:String(c.location||"").trim(),agenda:String(c.agenda||"").trim(),warnings:p})}else if(o.name==="add_note"){let d=r(c.contact,p);if(!d)continue;a.push({type:"note",customerId:d,kind:["note","call","email","meeting","task"].includes(c.kind)?c.kind:"note",title:String(c.title||"").trim(),text:String(c.text||"").trim(),date:as(c.date),warnings:p})}else if(o.name==="create_contact")a.push({type:"contact",ref:String(c.ref||""),kind:c.kind==="customer"?"customer":"contact",company:String(c.company||"").trim(),firstName:String(c.first_name||"").trim(),lastName:String(c.last_name||"").trim(),email:String(c.email||"").trim().toLowerCase(),phone:String(c.phone||"").trim(),city:String(c.city||"").trim(),notes:String(c.notes||"").trim(),warnings:p});else if(o.name==="document_appointment"){let d=va(t,c.appointment,"T");if(!d){s.push("Der Termin zum Dokumentieren wurde nicht gefunden.");continue}a.push({type:"document",appointmentId:d,outcome:String(c.outcome||"").trim(),nextSteps:String(c.next_steps||"").trim(),todos:(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:as(u.due)})),warnings:p})}else if(o.name==="create_invoice_draft"){let d=va(t,c.company,"U"),u=r(c.contact,p);if(!d||!u){s.push("Für den Rechnungsentwurf fehlen Unternehmen oder Kunde.");continue}let m=(Array.isArray(c.items)?c.items:[]).map(g=>({serviceId:va(t,g.service,"L"),name:String(g.name||"").trim(),qty:Number(g.quantity)>0?Number(g.quantity):1,priceCents:Number.isFinite(Number(g.unit_price))&&g.unit_price!=null?Math.round(Number(g.unit_price)*100):null})).filter(g=>g.serviceId||g.name);m.length&&a.push({type:"invoice",companyId:d,customerId:u,items:m,warnings:p})}}return{actions:a,answers:s}}function bm(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===404?`Das eingestellte KI-Modell wurde nicht gefunden${n}.`:e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Der Sprachbefehl ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function vc({apiKey:e,model:t,text:n,context:a,map:s}){if(!e)throw new Error("Für Sprachbefehle braucht es den API-Key aus den Einstellungen.");let i;try{i=await fetch(mm,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(hm({model:t,text:n,context:a}))})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let r=null;try{r=await i.json()}catch{}if(!i.ok)throw new Error(bm(i.status,r));return{...$m(r,s),usage:r.usage||null}}var sn=()=>({invoices:w.invoices,quotes:w.quotes,payments:w.payments,expenses:w.expenses,customers:w.customers,companies:w.companies,services:w.services,recurring:w.recurring}),ft=()=>{let e=me();return e?e.id:null};function hi(e){return Zt(e,We(e.id),V())}function xn({inv:e}){let t=hi(e),n=Pa[t]||Pa.draft;return l`<span class="badges"><${ze} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${ze} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function ss({quote:e}){let t=_t(e,V()),n=aa[t]||aa.draft;return l`<${ze} tone=${n.tone}>${n.label}<//>`}var re=()=>w.settings.displayCurrency==="EUR"?"EUR":"USD",kn=()=>re()==="USD"?"EUR":"USD",M=(e,t="",n=re())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},Ne=(e,t="")=>M(e,t,kn()),ae=e=>j(e,re()),Oe=e=>j(e,kn()),lt=(e,t,n)=>tn(e,t,re(),n);function Lt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?Mt(n,e.currency,e.fx):bt(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${j(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${j(s,a)}</span>`}
  </span>`}function Le({id:e}){let t=v("companies",e);return t?l`<span class="co-tag"><${ei} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Ve(e){let t=v("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return q(t)||"–"}var wa=e=>nn(e,We(e.id));var _r=e=>{let t=me();return!t||!e.companyId||e.companyId===t.id};function ym(e=()=>!0){return w.todos.filter(t=>!t.done&&e(t)).sort($i)}var $i=(e,t)=>(e.due||"9999")<(t.due||"9999")?-1:(e.due||"9999")>(t.due||"9999")?1:e.createdAt<t.createdAt?-1:1;function vm(e,t=V()){if(!e.due)return{text:"ohne Termin",tone:""};if(e.done)return{text:O(e.due),tone:""};if(e.due<t){let n=mn(e.due,t);return{text:`überfällig seit ${n} ${n===1?"Tag":"Tagen"}`,tone:"bad"}}return e.due===t?{text:"heute",tone:"warn"}:e.due===Se(t,1)?{text:"morgen",tone:""}:{text:`bis ${O(e.due)}`,tone:""}}var wc=()=>{let e=V();return w.todos.filter(t=>!t.done&&t.due&&t.due<=e&&_r(t)).length};async function wm(e){let t=await U(()=>Hl(e.id,!e.done));t&&t.done&&B(`Erledigt: ${e.title}`,"good")}function Qn({items:e,showCustomer:t=!0,onEdit:n,empty:a}){return e.length?l`<ul class="todo-list">
    ${e.map(s=>{let i=vm(s),r=s.customerId?v("customers",s.customerId):null,o=s.appointmentId?v("appointments",s.appointmentId):null;return l`<li key=${s.id} class=${s.done?"is-done":""}>
        <input type="checkbox" class="todo-check" checked=${!!s.done} aria-label=${`${s.title} ${s.done?"wieder öffnen":"erledigt"}`} onChange=${()=>wm(s)} />
        <button type="button" class="todo-body" onClick=${()=>n&&n(s)}>
          <span class="todo-title">${s.title}</span>
          <span class="cell-sub">
            <span class=${i.tone?`tone-${i.tone}`:""}>${s.done?`erledigt${s.doneAt?` am ${O(s.doneAt.slice(0,10))}`:""}`:i.text}</span>
            ${t&&r&&l` · ${q(r)}`}
            ${o&&l` · aus Termin ${O(o.date)}`}
          </span>
        </button>
        ${s.companyId&&l`<span class="todo-co"><${Le} id=${s.companyId} /></span>`}
      </li>`})}
  </ul>`:a?l`<p class="muted-text">${a}</p>`:null}function bi({customerId:e="",companyId:t="",withCustomer:n=!1}){let[a,s]=k(""),[i,r]=k(Se(V(),7)),[o,c]=k(e),p=w.customers.filter(u=>u.active!==!1).sort((u,m)=>q(u).localeCompare(q(m),"de")).map(u=>({id:u.id,label:q(u),sub:u.number}));async function d(u){if(u&&u.preventDefault(),!a.trim())return;let m=t||(me()?me().id:"");await U(()=>Qa(Bn({title:a,due:i,customerId:o||e,companyId:m})))&&(s(""),B("To-do angelegt","good"))}return l`<form class=${`todo-add${n?" with-customer":""}`} onSubmit=${d}>
    <input class="input" placeholder="Neues To-do, z. B. Angebot schicken" aria-label="Neues To-do" value=${a} onInput=${u=>s(u.target.value)} />
    ${n&&l`<${vt} options=${p} value=${o} onChange=${c} placeholder="Kontakt (optional)" label="Kontakt zum To-do" />`}
    <input class="input todo-add-date" type="date" aria-label="Fällig am" value=${i} onInput=${u=>r(u.target.value)} />
    <${C} type="submit" icon="plus" disabled=${!a.trim()}>Hinzufügen<//>
  </form>`}function yi({todo:e,onClose:t}){let n=!v("todos",e.id),[a,s]=k(()=>({...e})),[i,r]=k(!1),o=m=>g=>s(h=>({...h,[m]:g})),c=[...w.customers].sort((m,g)=>q(m).localeCompare(q(g),"de")).map(m=>({id:m.id,label:q(m),sub:m.number})),p=a.appointmentId?v("appointments",a.appointmentId):null;async function d(){r(!0);let m=await U(()=>Qa(a));r(!1),m&&(B(n?"To-do angelegt":"To-do gespeichert","good"),t())}async function u(){if(!await ue({title:"To-do löschen?",text:`„${a.title}“ wird gelöscht. Im Protokoll bleibt der Eintrag erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await jl(a.id),!0))&&(B("To-do gelöscht","good"),t())}return l`<${Pe} title=${n?"Neues To-do":"To-do bearbeiten"} onClose=${t} onSubmit=${d}
    footer=${l`${!n&&l`<${C} variant="ghost" icon="trash" onClick=${u}>Löschen<//>`}<span class="spacer"></span>
      <${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${Z} class="span-6" label="Was ist zu tun?" value=${a.title} onInput=${o("title")} />
      <${Me} class="span-2" label="Fällig am" value=${a.due} onInput=${o("due")} />
      <${ve} class="span-4" label="Kontakt">
        <${vt} options=${c} value=${a.customerId} onChange=${m=>o("customerId")(m||"")} placeholder="Ohne Kontakt" label="Kontakt" />
      <//>
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${le().map(m=>({id:m.id,label:m.name}))} />
      <div class="span-3 field field-inline">${!n&&l`<label class="check"><input type="checkbox" checked=${!!a.done}
        onChange=${m=>s(g=>({...g,done:m.target.checked,doneAt:m.target.checked?new Date().toISOString():null}))} /> Erledigt</label>`}</div>
      <${ie} class="span-6" label="Notiz" value=${a.note} onInput=${o("note")} rows=${3} />
      ${p&&l`<p class="span-6 field-hint">Aus dem Termin „${p.title}“ am ${O(p.date)}.</p>`}
    </div>
  <//>`}function xc(){let[e,t]=k(null),n=ym(_r),a=n.slice(0,8);return l`<${J} title=${`To-dos${n.length?` (${n.length})`:""}`} class="dash-todos" action=${l`<a class="panel-link" href="#/todos">Alle To-dos</a>`}>
    <${Qn} items=${a} onEdit=${t} empty="Keine offenen To-dos." />
    ${n.length>a.length&&l`<p class="cell-sub"><a href="#/todos">${n.length-a.length} weitere</a></p>`}
    <${bi} withCustomer />
    ${e&&l`<${yi} key=${e.id} todo=${e} onClose=${()=>t(null)} />`}
  <//>`}function kc(){ge();let[e,t]=k("open"),[n,a]=k(""),[s,i]=k(null),r=V(),o=w.todos.filter(_r),c={open:o.filter(u=>!u.done),due:o.filter(u=>!u.done&&u.due&&u.due<=r),done:o.filter(u=>u.done)},p=u=>u.customerId?q(v("customers",u.customerId)):"",d=c[e].filter(u=>Ee(n,u.title,u.note,p(u)));return d=e==="done"?d.sort((u,m)=>(u.doneAt||"")<(m.doneAt||"")?1:-1):d.sort($i),l`
    <${we} title="To-dos" sub=${me()?`To-dos für ${me().name} und ohne Zuordnung`:"Alle To-dos"}>
      <${C} variant="primary" icon="plus" onClick=${()=>i(Bn({due:Se(r,7),companyId:me()?me().id:""}))}>Neues To-do<//>
    <//>
    <div class="filters">
      <input class="input filter-select" type="search" placeholder="To-dos durchsuchen" aria-label="To-dos durchsuchen" value=${n} onInput=${u=>a(u.target.value)} />
      <${St} label="Filter" value=${e} onChange=${t} options=${[{id:"open",label:"Offen",count:c.open.length},{id:"due",label:"Fällig",count:c.due.length},{id:"done",label:"Erledigt",count:c.done.length}]} />
    </div>
    <${J}>
      <${bi} withCustomer />
      ${d.length?l`<${Qn} items=${d} onEdit=${i} />`:l`<${pe} icon="check" title=${e==="done"?"Noch nichts erledigt":"Nichts offen"} text="To-dos legst du hier, beim Kontakt oder beim Dokumentieren eines Termins an." />`}
    <//>
    ${s&&l`<${yi} key=${s.id} todo=${s} onClose=${()=>i(null)} />`}
  `}var is=e=>String(e).padStart(2,"0");function Dc(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function Ic(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function Sc(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!Ic(n))return new Date(c);let p=Dc(c,n),d=c-p*6e4,u=Dc(d,n);return u!==p&&(d=c-u*6e4),new Date(d)}function rs(e,t,n="de"){if(!Ic(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function wi(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function Ec(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function os(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var xa=e=>(ia.find(t=>t.id===e)||{}).label||"",Cc=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function Nc(e,t=new Date){if(!e||e.status!=="planned")return!1;let{end:n}=Dn(e);return n>t?!1:!e.followUpAt||new Date(e.followUpAt)<=t}function Dn(e){let t=Sc(e.date,e.start,e.timeZone),n=Sc(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function xm(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=xa(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function km(e,t){return String(e.contactName||"").trim()||(t?it(t)||q(t):"")}function Tc(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=Dn(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),p={CONTACT:km(e,n),CUSTOMER:n?q(n):String(e.contactName||""),TITLE:c,DATE:os(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:rs(e.timeZone,r,s),MEETING:xm(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:xa(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},d=u=>u.replace(/[ \t]+,/g,",").split(`
`).map(m=>m.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:d(Dt(i.subject,p)).replace(/\n/g," "),body:d(Dt(i.body,p)),vars:p}}var zr=e=>`${e.getUTCFullYear()}${is(e.getUTCMonth()+1)}${is(e.getUTCDate())}T${is(e.getUTCHours())}${is(e.getUTCMinutes())}${is(e.getUTCSeconds())}Z`,vi=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function Dm(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function Ac(e,{summary:t,description:n}){let{start:a,end:s}=Dn(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?Cc(i)?i:xa(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${zr(new Date)}`,`DTSTART:${zr(a)}`,`DTEND:${zr(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${vi(t)}`,n?`DESCRIPTION:${vi(n)}`:"",r?`LOCATION:${vi(r)}`:"",Cc(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${vi(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(Dm).join(`\r
`)}\r
`}var xi=null;function Rc(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function Sm(){return xi||(xi=(async()=>{if(await Rc("js/vendor/pdfmake.min.js"),await Rc("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw xi=null,e})),xi}var cs="#16191d",Xe="#5c636b",Lr="#d9dde1",ls=50;function Cm(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function us(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:cs,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:Xe,margin:[0,0,0,6]},...e.recipient.map((g,h)=>({text:g,fontSize:10.5,bold:h===0})),...e.recipientExtra.map(g=>({text:g,fontSize:8.5,color:Xe,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([g,h])=>[{text:g,color:Xe,fontSize:9},{text:h,alignment:"right",fontSize:9,bold:g===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(g=>({text:g.label,fontSize:8,color:Xe,alignment:g.align,noWrap:!0})),c=e.rows.map(g=>r.map(h=>{if(h.key==="desc"){let b=[{text:g.name,bold:!0}];return g.description&&b.push({text:g.description,color:Xe,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:b}}return{text:g[h.key]||"",alignment:h.align,noWrap:h.key!=="unit"}})),p={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(g=>g.width),body:[o,...c]},layout:{hLineWidth:(g,h)=>g===0?0:g===1?1.2:.5,hLineColor:g=>g===1?n:Lr,vLineWidth:()=>0,paddingLeft:g=>g===0?0:7,paddingRight:(g,h)=>g===h.table.widths.length-1?0:7,paddingTop:g=>g===0?0:6,paddingBottom:g=>g===0?5:6}},d={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(g=>[{text:g.label,bold:!!g.strong,fontSize:g.strong?11.5:9.5,color:g.strong?cs:Xe},{text:g.value,bold:!!g.strong,fontSize:g.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(g,h)=>g===h.table.body.length-1&&h.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(g,h)=>g===h.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:Xe,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:Xe,margin:[0,1.5,0,0]}]:[]]:[]]}]},u=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:Xe}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&u.push({text:e.subtitle,color:Xe,margin:[0,2,0,0]}),e.intro&&u.push({text:e.intro,margin:[0,12,0,0]}),u.push(p,d),e.notes.length&&u.push({stack:e.notes.map(g=>({text:g,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&u.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([g,h])=>[{text:g,color:Xe},{text:h}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:g=>g===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(g=>({text:g,margin:[0,4,0,0]}))]});let m=Cm(e);return{pageSize:"A4",pageMargins:[ls,46,ls,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:cs},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(g,h)=>({margin:[ls,0,ls,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*ls,y2:0,lineWidth:.5,lineColor:Lr}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(b=>({width:"*",stack:b.map((y,f)=>({text:y,fontSize:7.5,color:Xe,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:Xe,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",g).replace("{N}",h),fontSize:7,color:Xe,alignment:"right",margin:[0,5,0,0]}]}),content:u}}async function ka(e){let t=await Sm();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function et(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Bc({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(d=>({text:d.label,bold:!0,fontSize:8,color:Xe,alignment:d.align||"left"})),...a.map(d=>d.map((u,m)=>({text:u==null?"":String(u),alignment:n[m].align||"left"})))];s&&o.push(s.map((d,u)=>({text:d==null?"":String(d),bold:!0,alignment:n[u].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:cs},info:{title:e,creator:"BBC Finance"},footer:(d,u)=>({text:`Seite ${d} von ${u}`,alignment:"right",fontSize:7,color:Xe,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:Xe,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((d,u)=>u===0?"*":"auto"),body:o},layout:{hLineWidth:(d,u)=>d===0?0:d===1||s&&d===u.table.body.length-1?1:.5,hLineColor:(d,u)=>d===1||s&&d===u.table.body.length-1?cs:Lr,vLineWidth:()=>0,paddingLeft:d=>d===0?0:6,paddingRight:(d,u)=>d===u.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},p=await ka(c);et(p,i)}var Pr=/\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/,ki=/^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i,Uc={deutschland:"Deutschland",germany:"Deutschland",österreich:"Österreich",oesterreich:"Österreich",austria:"Österreich",schweiz:"Schweiz",switzerland:"Schweiz",suisse:"Schweiz",liechtenstein:"Liechtenstein",luxemburg:"Luxemburg",luxembourg:"Luxemburg",niederlande:"Niederlande",netherlands:"Niederlande",belgien:"Belgien",belgium:"Belgien",frankreich:"Frankreich",france:"Frankreich",italien:"Italien",italy:"Italien",spanien:"Spanien",spain:"Spanien","vereinigte arabische emirate":"Vereinigte Arabische Emirate","united arab emirates":"Vereinigte Arabische Emirate",uae:"Vereinigte Arabische Emirate","united kingdom":"Vereinigtes Königreich",usa:"USA","united states":"USA"},Mc={D:"Deutschland",DE:"Deutschland",A:"Österreich",AT:"Österreich",CH:"Schweiz"},gt=e=>String(e||"").replace(/[   ]/g," ").replace(/[ \t]+/g," ").trim(),Im=(e,t)=>gt(e.replace(t,"").replace(/^[\s:.\-–—]+/,""));function Em(e){let n=gt(e).replace(/\s*\(.*?\)\s*/g," ").replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i,"").trim().split(/\s+/).filter(i=>!/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(i));if(!n.length)return{firstName:"",lastName:""};if(n.length===1)return{firstName:"",lastName:n[0]};let a=/^(von|van|de|der|den|zu|zur|vom|del|la)$/i,s=n.length-1;for(;s>1&&a.test(n[s-1]);)s-=1;return{firstName:n.slice(0,s).join(" "),lastName:n.slice(s).join(" ")}}var Nm=e=>gt(String(e).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/,"");function Lc(e){let n=String(e||"").replace(/\r/g,"").split(`
`).map(gt).filter(Boolean),a={},s=[],i=n.join(`
`),r=i.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi,"@").replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi,"."),o=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(r);o&&(a.email=o[0].toLowerCase());let c=/\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(i)||/\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(i);c?a.website=c[0].replace(/[.,;)]+$/,""):a.email&&!/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(a.email)&&(a.website=`www.${a.email.split("@")[1]}`),n.forEach((m,g)=>{let h=n[g+1]||"";if(!a.phone&&/^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(m)&&!/fax/i.test(m.split(/[:]/)[0])){let b=/(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(m);b&&(a.phone=gt(b[1]).replace(/–/g,"-"))}if(!a.vatId&&/(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(m)){let b=/\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/,y=b.exec(m.replace(/^[^:]*:\s*/,""))||(/:\s*$|umsatzsteuergesetz:?$|id$/i.test(m)?b.exec(h):null);y&&(a.vatId=gt(y[1]))}if(!a.taxId&&/^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(m)&&!/ust|umsatzsteuer|vat/i.test(m)){let b=/([\d][\d\s/]{7,}\d)/.exec(m);b&&(a.taxId=gt(b[1]))}if(!a.lastName){let b=/^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(m);if(b){let y=Im(m,b[0]);y||(y=h),y=y.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i,"").replace(/^(herrn?|frau)\s+/i,"");let f=Nm(y);f&&!Pr.test(f)&&/^[\p{L}][\p{L}.' -]+$/u.test(f)&&f.split(/\s+/).length<=5&&(Object.assign(a,Em(f)),s.push(`${/inhaber|owner/i.test(b[0])?"Inhaber":"Vertreten durch"}: ${gt(y)}`))}}/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(m)&&(s.some(b=>b.includes(m))||s.push(m))});let p=/^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u,d=-1;for(let m=0;m<n.length;m++){let g=n[m].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i,""),h=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(g);if(h&&!ki.test(h[1])){a.street=gt(h[1]).replace(/,$/,""),a.houseNo=gt(h[2]),a.zip=h[4],a.city=gt(h[5]),h[3]&&(a.country=Mc[h[3].toUpperCase()]),d=m;break}let b=p.exec(g);if(b&&!/^(tel|fax|phone)/i.test(g)){a.zip=b[2],a.city=gt(b[3]),b[1]&&(a.country=Mc[b[1].toUpperCase()]),d=m;let y=n[m-1]||"",f=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(y.replace(/,$/,""));f&&!ki.test(y)&&!Pr.test(y)?(a.street=gt(f[1]),a.houseNo=gt(f[2])):/^(postfach|p\.?o\.? box)/i.test(y)&&(a.street=y);break}}if(!a.country){let m=[n[d+1],...n].filter(Boolean);for(let g of m){let h=g.toLowerCase().replace(/[.,]/g,"").trim();if(Uc[h]){a.country=Uc[h];break}}}let u=n.find(m=>Pr.test(m)&&!ki.test(m)&&m.length<90&&!/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(m));if(u)a.company=u.replace(/^(firma|company|unternehmen)\s*:\s*/i,"");else if(d>0)for(let m=a.street&&!n[d].includes(",")?d-2:d-1;m>=0&&m>=d-5;m--){let g=n[m];if(!(!g||ki.test(g)||g.includes(":")||/\d{3,}|@|www\./i.test(g))){a.company=g;break}}for(let m of Object.keys(a))a[m]||delete a[m];return{fields:a,extra:s}}var Tm="https://api.anthropic.com/v1/messages",Am=["company","firstName","lastName","street","houseNo","zip","city","region","country","email","phone","website","taxId","vatId"],_c={name:"record_contact",description:"Erfasst die Kontaktdaten aus einem Impressum.",input_schema:{type:"object",properties:{company:{type:"string",description:"Firmenname inklusive Rechtsform, wie im Impressum."},firstName:{type:"string",description:"Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt."},lastName:{type:"string",description:"Nachname dieser Person."},street:{type:"string",description:"Straße ohne Hausnummer."},houseNo:{type:"string",description:"Hausnummer."},zip:{type:"string"},city:{type:"string"},region:{type:"string",description:"Bundesland, Kanton oder Emirat, nur wenn genannt."},country:{type:"string",description:"Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ)."},email:{type:"string"},phone:{type:"string",description:"Telefonnummer (nicht Fax)."},website:{type:"string"},taxId:{type:"string",description:"Steuernummer, nur wenn genannt."},vatId:{type:"string",description:"Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt."},register:{type:"string",description:"Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt."},found:{type:"boolean",description:"false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden."}},required:["found"]}},zc=`Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;function Rm(e){return{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}}function Bm({model:e,text:t,url:n}){return n?{model:e,max_tokens:1500,tools:[{type:"web_fetch_20250910",name:"web_fetch",max_uses:3,max_content_tokens:2e4},_c],tool_choice:{type:"auto"},messages:[{role:"user",content:`Rufe diese Seite ab: ${n}
Ist es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.

${zc}`}]}:{model:e,max_tokens:1e3,tools:[_c],tool_choice:{type:"tool",name:"record_contact"},messages:[{role:"user",content:`Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.

${zc}

---
${String(t).slice(0,2e4)}`}]}}function Um(e){let t=e&&Array.isArray(e.content)?e.content:[],n=t.find(o=>o.type==="web_fetch_tool_result"&&o.content&&o.content.type==="web_fetch_tool_result_error"),a=t.find(o=>o.type==="tool_use"&&o.name==="record_contact");if(!a||!a.input){if(n){let o=n.content.error_code;throw new Error(o==="url_not_accessible"?"Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.":`Die Seite konnte nicht gelesen werden (${o}). Kopiere das Impressum und füge es als Text ein.`)}throw new Error("Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.")}let s=a.input;if(s.found===!1)throw new Error("Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.");let i={};for(let o of Am){let c=typeof s[o]=="string"?s[o].trim():"";c&&(i[o]=c.slice(0,200))}i.email&&(i.email=i.email.toLowerCase());let r=[];return typeof s.register=="string"&&s.register.trim()&&r.push(s.register.trim()),{fields:i,extra:r}}function Mm(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Das Auslesen ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Kr({apiKey:e,model:t,text:n,url:a}){if(!e)throw new Error("Dafür braucht es den API-Key aus den Einstellungen.");let s=Bm({model:t,text:n,url:a}),i=null;for(let r=0;r<3;r++){let o;try{o=await fetch(Tm,{method:"POST",headers:Rm(e),body:JSON.stringify(s)})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}try{i=await o.json()}catch{i=null}if(!o.ok)throw new Error(Mm(o.status,i));if(i&&i.stop_reason==="pause_turn"){s.messages=[...s.messages,{role:"assistant",content:i.content}];continue}break}return Um(i)}function Pc(e){let t=String(e||"").trim();return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""}var Sn=(e,t)=>!t||e.companyId===t;function Kc(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function ct(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!fr(i)||!i.totals||!Sn(i,t)||a&&i.customerId!==a||n&&!Qt(i.issueDate,n))continue;let r=i.totals,o=bt(r.netCents,i.currency,i.fx)||0,c=Mt(r.netCents,i.currency,i.fx)||0,p=bt(r.taxCents,i.currency,i.fx)||0,d=Mt(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:p,taxEUR:d,totalUSD:o+p,totalEUR:c+d})}return s}function Da(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!Sn(s,t)||n&&!Qt(s.invoiceDate,n))continue;let i=bt(s.netCents,s.currency,s.fx)||0,r=Mt(s.netCents,s.currency,s.fx)||0,o=bt(s.taxCents,s.currency,s.fx)||0,c=Mt(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function Di(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&Sn(r,t)&&(n&&!Qt(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:bt(i.amountCents,r.currency,r.fx)||0,eur:Mt(i.amountCents,r.currency,r.fx)||0}))}return s}var oe=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function Cn(e,{companyId:t}={},n){let a=Kc(e.payments),s=[];for(let i of e.invoices){if(!Sn(i,t))continue;let r=a.get(i.id)||[],o=nn(i,r);if(o<=0)continue;let c=Zt(i,r,n),p=i.dueDate&&i.dueDate<n?mn(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:p,openCents:o,paidCents:Ue(r),openUSD:bt(o,i.currency,i.fx)||0,openEUR:Mt(o,i.currency,i.fx)||0,bucket:p<=0?"current":p<=30?"d30":p<=60?"d60":p<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var Fc=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function Oc(e,t,n){let a=$t("month",n),s=$t("quarter",n),i=$t("year",n),r=$t("lastMonth",n),o=ct(e,{companyId:t,range:i}),c=$=>o.filter(I=>Qt(I.date,$)),p=c(a),d=c(s),u=ct(e,{companyId:t,range:r}),m=Cn(e,{companyId:t},n),g=m.filter($=>$.status==="overdue"),h=Kc(e.payments),b=o.filter($=>$.inv.type!=="credit_note"&&$.inv.status!=="credited"),y=b.filter($=>Zt($.inv,h.get($.inv.id)||[],n)==="paid"),f=e.customers.filter($=>$.active!==!1&&$.kind!=="contact");if(t){let $=new Set([...e.invoices.filter(I=>I.companyId===t).map(I=>I.customerId),...(e.quotes||[]).filter(I=>I.companyId===t).map(I=>I.customerId)]);f=f.filter(I=>$.has(I.id))}return{month:{usd:oe(p,"netUSD"),eur:oe(p,"netEUR"),count:p.length},lastMonth:{usd:oe(u,"netUSD"),eur:oe(u,"netEUR")},quarter:{usd:oe(d,"netUSD"),eur:oe(d,"netEUR")},year:{usd:oe(o,"netUSD"),eur:oe(o,"netEUR")},open:{count:m.length,usd:oe(m,"openUSD"),eur:oe(m,"openEUR")},overdue:{count:g.length,usd:oe(g,"openUSD"),eur:oe(g,"openEUR")},paid:{count:y.length,usd:oe(y,"totalUSD"),eur:oe(y,"totalEUR")},average:{usd:b.length?Math.round(oe(b,"netUSD")/b.length):0,eur:b.length?Math.round(oe(b,"netEUR")/b.length):0,count:b.length},activeCustomers:f.length}}function ds(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=ct(e,{companyId:t,range:i}),o=Da(e,{companyId:t,range:i}),c=Di(e,{companyId:t,range:i});return n.map(p=>{let d=r.filter(b=>La(b.date)===p),u=o.filter(b=>La(b.date)===p),m=c.filter(b=>La(b.date)===p),g={},h={};for(let b of d)g[b.inv.companyId]=(g[b.inv.companyId]||0)+b.netUSD,h[b.inv.companyId]=(h[b.inv.companyId]||0)+b.netEUR;return{key:p,revenueUSD:oe(d,"netUSD"),revenueEUR:oe(d,"netEUR"),expenseUSD:oe(u,"netUSD"),expenseEUR:oe(u,"netEUR"),profitUSD:oe(d,"netUSD")-oe(u,"netUSD"),profitEUR:oe(d,"netEUR")-oe(u,"netEUR"),paymentsUSD:oe(m,"usd"),paymentsEUR:oe(m,"eur"),taxUSD:oe(d,"taxUSD"),taxEUR:oe(d,"taxEUR"),invoices:d.length,byCompany:g,byCompanyUSD:g,byCompanyEUR:h}})}function Fr(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function Vc(e,t,n){let a=ct(e,t);return n==="quarter"?Fr(a,Jo):n==="year"?Fr(a,s=>String(zs(s))):Fr(a,La)}function ms(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of ct(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:q(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function ps(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of ct(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function fs(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of ct(e,t)){let i=new Map((s.inv.totals.lines||[]).map(d=>[d.id,d])),r=(s.inv.items||[]).filter(d=>i.has(d.id)),o=r.map(d=>{let u=i.get(d.id);return u.netCents!=null?u.netCents:u.cents}),c=Ut(s.netUSD,o),p=Ut(s.netEUR,o);r.forEach((d,u)=>{let m=d.serviceId?n.get(d.serviceId):null,g=m?`s:${m.id}`:`n:${String(d.name||"").trim().toLowerCase()}`,h=a.get(g)||{key:g,name:m?m.name:d.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};h.usd+=c[u]||0,h.eur+=p[u]||0,h.qty+=Number(d.qty)||0,a.set(g,h)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Or(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let p=s.get(o),d=a(c),u=c.serviceId?n.get(c.serviceId):null;return p.has(d)||p.set(d,{key:d,name:u?u.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:u&&u.category||"",unit:c.unit||u&&u.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),p.get(d)};for(let o of ct(e,t)){let c=new Map((o.inv.totals.lines||[]).map(h=>[h.id,h])),p=(o.inv.items||[]).filter(h=>c.has(h.id)),d=p.map(h=>{let b=c.get(h.id);return b.netCents!=null?b.netCents:b.cents}),u=Ut(o.netUSD,d),m=Ut(o.netEUR,d),g=o.inv.type==="credit_note";p.forEach((h,b)=>{let y=i(o.inv.customerId,h);y.usd+=u[b]||0,y.eur+=m[b]||0,y.qty+=Number(h.qty)||0,g||(y.invoices.add(o.inv.id),y.companyIds.add(o.inv.companyId),(!y.first||o.date<y.first)&&(y.first=o.date),o.date>y.last&&(y.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&Sn(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let p=i(o.customerId,c);p.running=!0,p.interval=o.interval,p.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(p=>({...p,invoices:p.invoices.size,companyIds:[...p.companyIds]})).sort((p,d)=>Number(d.running)-Number(p.running)||d.usd-p.usd));return r}function qc(e,t){let n=new Map;for(let a of ct(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function Vr(e,t){let n=new Map;for(let a of Da(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function Zc(e,t,n){let a=ct(e,t),s=Da(e,t),i=Di(e,t),r=Cn(e,{companyId:t.companyId},n),o=oe(a,"netUSD"),c=oe(a,"netEUR"),p=oe(s,"netUSD"),d=oe(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(u=>u.inv.type!=="credit_note").length},expenses:{usd:p,eur:d,count:s.length},profit:{usd:o-p,eur:c-d},payments:{usd:oe(i,"usd"),eur:oe(i,"eur"),count:i.length},receivables:{usd:oe(r,"openUSD"),eur:oe(r,"openEUR"),count:r.length},taxCollected:{usd:oe(a,"taxUSD"),eur:oe(a,"taxEUR")},taxPaid:{usd:oe(s,"taxUSD"),eur:oe(s,"taxEUR")},taxBalance:{usd:oe(a,"taxUSD")-oe(s,"taxUSD"),eur:oe(a,"taxEUR")-oe(s,"taxEUR")}}}function Gc(e,t){let n=new Map;for(let i of ct(e,t)){let r=i.inv.totals.taxGroups||[],o=Ut(i.taxUSD,r.map(u=>u.taxCents)),c=Ut(i.netUSD,r.map(u=>u.netCents)),p=Ut(i.taxEUR,r.map(u=>u.taxCents)),d=Ut(i.netEUR,r.map(u=>u.netCents));r.forEach((u,m)=>{let g=`${u.rate}|${i.inv.currency}`,h=n.get(g)||{rate:u.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};h.netCents+=u.netCents,h.taxCents+=u.taxCents,h.netUSD+=c[m]||0,h.taxUSD+=o[m]||0,h.netEUR+=d[m]||0,h.taxEUR+=p[m]||0,n.set(g,h)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=Da(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:oe(s,"taxUSD"),paidEUR:oe(s,"taxEUR")}}function qr(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>fr(o)&&Sn(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&Sn(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&Sn(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return Xo(a,s)}var _m=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],Hc=15*1024*1024;async function jc(e){if(!e)throw new Error("Keine Datei ausgewählt.");if(e.size>Hc)throw new Error(`„${e.name}“ ist größer als 15 MB.`);if(await zm(e,5)!=="%PDF-")throw new Error(`„${e.name}“ ist keine PDF-Datei. Bitte das Dokument als PDF speichern und erneut hochladen.`);let n=/\.pdf$/i.test(e.name||"")?e.name:`${e.name||"Dokument"}.pdf`;return{blob:e.type==="application/pdf"?e:new Blob([e],{type:"application/pdf"}),name:n}}function zm(e,t){return new Promise((n,a)=>{let s=new FileReader;s.onload=()=>n(String.fromCharCode(...new Uint8Array(s.result))),s.onerror=()=>a(s.error),s.readAsArrayBuffer(e.slice(0,t))})}function Wc(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Lm(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function Zr(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function Si(e,t,n){let a=await Lm(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var Pm=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function Gr(e,{shrink:t=!0}={}){if(e.size>Hc)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(Pm(e))try{let{canvas:a}=await Si(e,2e3,"#ffffff");return{blob:await Zr(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!_m.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await Si(e,2e3,"#ffffff"),i=await Zr(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function Qc(e){let{canvas:t}=await Si(e,1568,"#ffffff");return Zr(t,"image/jpeg",.85)}async function Yc(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await Si(e,800,null);return t.toDataURL("image/png")}async function Sa(e){let t=await il("blobs",e);return t?t.blob:null}var Ci=e=>(t,n)=>(t[e]||"")<(n[e]||"")?1:(t[e]||"")>(n[e]||"")?-1:0;function Jc(e,t,n){let a=(e.appointments||[]).filter(f=>f.customerId===t&&f.status!=="cancelled"),s=a.filter(f=>f.status==="done"||f.status==="planned"&&f.date<n).sort(Ci("date")),i=a.filter(f=>f.status==="planned"&&f.date>=n).sort((f,$)=>f.date+f.start<$.date+$.start?-1:1)[0]||null,r=(e.quotes||[]).filter(f=>f.customerId===t),o=r.filter(f=>f.status!=="draft").sort(Ci("issueDate")),c=o.map(f=>_t(f,n)),p=r.length-o.length,d=(e.contracts||[]).filter(f=>f.customerId===t).sort(Ci("createdAt")),u=(e.invoices||[]).filter(f=>f.customerId===t&&f.type!=="credit_note"),m=u.filter(f=>!["draft","cancelled"].includes(f.status)).sort(Ci("issueDate")),g=u.filter(f=>f.status==="draft").length,h=[{id:"meeting",label:"Termin",state:s.length?"done":i?"active":"todo",count:s.length,last:s[0]||null,next:i},{id:"quote",label:"Angebot",state:c.some(f=>f==="accepted"||f==="invoiced")?"done":c.some(f=>f==="open"||f==="sent")||p?"active":"todo",count:o.length,drafts:p,latest:o[0]||null,latestStatus:c[0]||""},{id:"contract",label:"Vertrag",state:d.some(f=>f.status==="signed"||f.status==="ended")?"done":d.some(f=>f.status==="open")?"active":"todo",count:d.length,latest:d[0]||null},{id:"invoice",label:"Rechnung",state:m.length?"done":g?"active":"todo",count:m.length,drafts:g,latest:m[0]||null}],b=-1;h.forEach((f,$)=>{f.state==="done"&&(b=$)}),h.forEach((f,$)=>{$<b&&f.state==="todo"&&(f.state="skipped")});let y=h.findIndex((f,$)=>$>b&&f.state!=="done");return{steps:h,current:y===-1?null:y}}function Hr(e,t,n=60){return e.status==="signed"&&!!e.endDate&&e.endDate>=t&&e.endDate<=Se(t,n)}function jr(e,t){return e.status==="signed"&&!!e.endDate&&e.endDate<t}function Ii(e,t){return jr(e,t)?"expired":Hr(e,t)?"ending":e.status}function Ca({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
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
  </div>`}async function Ei(e){let t=We(e.id),n=hn(e.id),a=e.creditNoteId?v("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${j(Ue(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await ue({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await U(()=>Nr(e.id));return r?(B(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}function Wr({service:e,onClose:t,onSaved:n}){let a=!e||!v("services",e.id),[s,i]=k(()=>({...e||pn()})),[r,o]=k(!1),c=m=>g=>i(h=>({...h,[m]:g})),p=w.settings.serviceCategories||[],d=sa.includes(s.unit)||!s.unit?sa:[...sa,s.unit];async function u(){o(!0);let m=await U(()=>ri(s));o(!1),m&&(B(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${Pe} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${u}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${Z} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${Z} class="span-2" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${ie} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${ie} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${Re} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${se} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${_e} />
      <${se} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${d} />
      <${Re} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${Re} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${se} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${p.includes(s.category)||!s.category?p:[...p,s.category]} />
      <${se} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${le().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${Ye} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${Ye} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function Xc(){ge();let[e,t]=k(""),[n,a]=k(""),[s,i]=k(null),r=ft(),o=w.services.filter(u=>r&&u.companyId&&u.companyId!==r||n&&u.category!==n?!1:Ee(e,u.name,u.internalName,u.description,u.invoiceText,u.category)),c=[...new Set(w.services.map(u=>u.category).filter(Boolean))].sort((u,m)=>u.localeCompare(m,"de"));async function p(u){if(!await ue({title:"Leistung löschen?",text:`„${u.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Ql(u.id),!0))&&B("Leistung gelöscht","good")}let d=[{key:"name",label:"Leistung",sort:u=>u.name,render:u=>l`<div class="cell-main">${u.name}${u.active===!1&&l` <${ze} tone="mute">Inaktiv<//>`}</div>
        ${(u.internalName||u.invoiceText)&&l`<div class="cell-sub clamp-1">${u.internalName||u.invoiceText}</div>`}`},{key:"category",label:"Kategorie",sort:u=>u.category,render:u=>u.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:u=>(v("companies",u.companyId)||{}).name||"",render:u=>{let m=v("companies",u.companyId);return m?l`<span class="co-tag"><${ei} company=${m} />${m.shortName||m.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:u=>u.recurring?1:0,render:u=>u.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:u=>u.unit},{key:"tax",label:"Steuer",align:"right",render:u=>u.taxRate!=null&&u.taxRate!==""?kt(u.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:u=>u.priceCents,render:u=>j(u.priceCents,u.currency)},{key:"actions",label:"",align:"right",render:u=>l`<${C} variant="ghost" small icon="trash" title=${`${u.name} löschen`} onClick=${()=>p(u)} />`}];return l`
    <${we} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <${C} variant="primary" icon="plus" onClick=${()=>i(pn({companyId:""}))}>Neue Leistung<//>
    <//>
    ${w.services.length>0&&l`<div class="filters">
      <${pt} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${c.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Kategorien</option>
        ${c.map(u=>l`<option value=${u}>${u}</option>`)}
      </select>`}
    </div>`}
    <${Je} columns=${d} rows=${o} initialSort=${{key:"name",dir:"asc"}} onRowClick=${u=>i(u)}
      empty=${w.services.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${pe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${C} variant="primary" icon="plus" onClick=${()=>i(pn())}>Erste Leistung anlegen<//>
          <//>`} />
    ${s&&l`<${Wr} service=${s} onClose=${()=>i(null)} />`}
  `}var Km={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function gs(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&_e.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function Fm(e,t,n){if(t&&t!=="new"){let r=v(e,t);return r?ye(r):null}let a=le(),s=me()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&v("invoices",n.copy))i=oc(v("invoices",n.copy));else if(e==="invoices"&&n.contract&&v("contracts",n.contract)){let r=v("contracts",n.contract),o=v("companies",r.companyId)||s,c=r.quoteId?v("quotes",r.quoteId):null;return i=gs(dt(o,{contractId:r.id}),v("customers",r.customerId),o,e),i.currency=r.currency,i.items=[mi(r)],c&&!c.invoiceId&&c.status!=="draft"&&(i.quoteId=c.id),i}else if(e==="invoices")i=dt(s);else if(n.copy&&v("quotes",n.copy)){let r=v("quotes",n.copy),o=v("companies",r.companyId)||s;i=Un(o,{validUntil:Se(V(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:Rt().id})),discount:ye(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=Un(s,{validUntil:Se(V(),30)});return n.customer&&v("customers",n.customer)&&(i=gs(i,v("customers",n.customer),v("companies",i.companyId),e)),i}function Qr({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=k(null),r=ke(null),o=e.items||[],c=e.currency;ce(()=>{if(!s||!r.current)return;let b=r.current.querySelector(`[data-item="${s}"] .combo-input`);b&&b.focus(),i(null)},[s,o.length]);let p=De(()=>w.services.filter(b=>b.active!==!1&&(!b.companyId||b.companyId===e.companyId)).sort((b,y)=>b.name.localeCompare(y.name,"de")).map(b=>({id:b.id,label:b.name,search:`${b.internalName} ${b.category}`,sub:`${j(b.priceCents,b.currency)} je ${b.unit}`})),[w.version,e.companyId]),d=(b,y)=>n(o.map(f=>f.id===b?{...f,...y}:f)),u=b=>n(o.filter(y=>y.id!==b));function m(b,y){let f=b+y;if(f<0||f>=o.length)return;let $=[...o];[$[b],$[f]]=[$[f],$[b]],n($)}function g(){let b=Rt({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,b]),i(b.id)}function h(b,y){let f=v("services",y);if(!f)return;let $=ot(f,t),I=$.priceCents;if(f.currency&&f.currency!==c){let D=e.fx?qt(f.currency,e.fx.usdToEur):null,T=D?tn(I,f.currency,c,D):null;T!=null?(I=T,B(`Preis von ${f.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):B(`Die Leistung ist in ${f.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}d(b,{...$,id:b,priceCents:I})}return l`<div class="items" ref=${r}>
    ${o.map((b,y)=>l`<div class="item" key=${b.id} data-item=${b.id}>
      <div class="item-top">
        <span class="item-pos">${y+1}</span>
        <div class="item-name">
          <${vt} freeText options=${p} text=${b.name} label=${`Position ${y+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${f=>d(b.id,{name:f,serviceId:b.serviceId&&v("services",b.serviceId)&&v("services",b.serviceId).name===f?b.serviceId:""})}
            onChange=${f=>h(b.id,f)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${y+1} nach oben`} disabled=${y===0} onClick=${()=>m(y,-1)}><${W} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${y+1} nach unten`} disabled=${y===o.length-1} onClick=${()=>m(y,1)}><${W} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${y+1} entfernen`} onClick=${()=>u(b.id)}><${W} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6,Math.max(1,String(b.description||"").split(`
`).length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${y+1}: Beschreibung`}
        value=${b.description} onInput=${f=>d(b.id,{description:f.target.value})}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${at} value=${b.qty} digits=${3} onChange=${f=>d(b.id,{qty:f})} aria-label=${`Position ${y+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${b.unit} aria-label=${`Position ${y+1}: Einheit`}
            onInput=${f=>d(b.id,{unit:f.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${at} mode="money" value=${b.priceCents} onChange=${f=>d(b.id,{priceCents:f})} aria-label=${`Position ${y+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${at} value=${b.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${f=>d(b.id,{discountPct:f})} aria-label=${`Position ${y+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${at} value=${b.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${f=>d(b.id,{taxRate:f})} aria-label=${`Position ${y+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${j(pr(b),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${sa.map(b=>l`<option value=${b}></option>`)}</datalist>
    <div class="items-foot">
      <${C} icon="plus" onClick=${g}>Position hinzufügen<//>
      <${C} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function hs({coll:e,id:t,params:n}){ge();let a=Km[e],[s,i]=k(()=>Fm(e,t,n||{})),[r,o]=k(!1),[c,p]=k({loading:!1,error:""}),[d,u]=k(""),[m,g]=k(""),[h,b]=k([]),[y,f]=k(null),[$,I]=k(!1),D=ke(0),T=ke(!0),z=G=>{i(G),o(!0)},H=G=>te=>z(Ze=>({...Ze,[G]:te}));ce(()=>(r?Gs(Hs):en(),()=>en()),[r]);let E=s?v("companies",s.companyId):null,A=s?v("customers",s.customerId):null,x=s?`${s.currency}|${s.issueDate}`:"";async function R(G){if(!s||!$e(s.issueDate)||!G&&s.fx&&s.fx.manual)return;let te=++D.current,Ze=s.currency,cn=s.issueDate;p({loading:!0,error:""});try{let Pt=await qn(Ze,cn);if(te!==D.current)return;i(tt=>tt.currency===Ze&&tt.issueDate===cn?{...tt,fx:Pt}:tt),G&&o(!0),p({loading:!1,error:""})}catch(Pt){if(te!==D.current)return;i(tt=>tt.fx&&!tt.fx.manual&&tt.fx.forDate&&$e(tt.issueDate)&&tt.fx.forDate!==Vn(tt.issueDate)?{...tt,fx:null}:tt),p({loading:!1,error:Pt.message})}}if(ce(()=>{let G=T.current;T.current=!1,!(!s||s.status!=="draft")&&(G&&s.number&&s.fx||R(!1))},[x]),ce(()=>{let G=!0;if(!s||!E){u("");return}if(s.number){u(s.number);return}return Ya(E,a.numberKind,s.issueDate).then(te=>{G&&u(te)}).catch(()=>{G&&u("")}),()=>{G=!1}},[s&&s.companyId,s&&s.issueDate,w.version]),!s)return l`<${pe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${C} onClick=${()=>Y(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>$n(`${a.list}/${s.id}`),0),null;let S=mt(s),K=s.fx?qt(s.currency,s.fx.usdToEur,s.fx):null,P={...s,fx:K,totals:S,dueDate:e==="invoices"?Ir(s):""},_=Ct(P,e,{previewNumber:d}),ee=s.currency==="USD"?"EUR":"USD",N=K?tn(S.totalCents,s.currency,ee,K):null,X=le(),fe=!!v(e,s.id),F=e==="invoices"&&s.number?s.number:"",Be=F?s.reopened||{}:null,qe=F?Ue(We(s.id)):0,Jn=w.customers.filter(G=>G.active!==!1||G.id===s.customerId).sort((G,te)=>+!Te(G)-+!Te(te)||q(G).localeCompare(q(te),"de")).map(G=>({id:G.id,label:q(G),sub:[Te(G)?"":"Kontakt",G.number,G.city].filter(Boolean).join(", "),search:`${G.firstName} ${G.lastName} ${G.contact} ${G.email}`}));function Vi(G){let te=v("companies",G),Ze=v("companies",s.companyId);if(!te){z(ht=>({...ht,companyId:""}));return}let cn=e==="quotes"?"quoteText":"invoiceText",Pt=(ht,jt)=>String(ht||"")===String(jt||"");z(ht=>{let jt=v("customers",ht.customerId),Wt={...ht,companyId:G};(!ht.intro||Ze&&Pt(ht.intro,Ze[cn]))&&(Wt.intro=te[cn]||""),(!ht.paymentTerms||Ze&&Pt(ht.paymentTerms,Ze.paymentTerms))&&(Wt.paymentTerms=te.paymentTerms||""),(!ht.footer||Ze&&Pt(ht.footer,Ze.footer))&&(Wt.footer=te.footer||""),jt&&jt.language||(Wt.language=te.language),jt&&jt.currency||(Wt.currency=te.currency),e==="invoices"&&!(jt&&jt.paymentTermDays!=null&&jt.paymentTermDays!=="")&&(Wt.paymentTermDays=te.paymentTermDays),Wt.showSecondary=te.showSecondary;let Sd=Ze&&Number(Ze.defaultTaxRate)||0,Cd=Number(te.defaultTaxRate)||0;return Wt.items=ht.items.map(Ba=>{let Gi=Ba.serviceId?v("services",Ba.serviceId):null;return(!Gi||Gi.taxRate==null||Gi.taxRate==="")&&(Number(Ba.taxRate)||0)===Sd?{...Ba,taxRate:Cd}:Ba}),Wt});let tt=v("customers",s.customerId);s.items.length&&!(tt&&tt.currency)&&te.currency!==s.currency&&B(`Währung auf ${te.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function bd(G){let te=v("customers",G),Ze=s.currency,cn=gs(s,te,v("companies",s.companyId),e);z(Pt=>gs(Pt,te,v("companies",Pt.companyId),e)),s.items.length&&cn.currency!==Ze&&B(`Währung auf ${cn.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function yd(G){G!==s.currency&&(s.items.length&&B("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),z(te=>({...te,currency:G,fx:te.fx?qt(G,te.fx.usdToEur,te.fx):te.fx})))}function vd(G){G>0&&(D.current+=1,p({loading:!1,error:""}),z(te=>({...te,fx:qt(te.currency,G,{manual:!0,source:"Von Hand eingetragen",date:V(),fetchedAt:ne()})})))}function wd(){let G=wr("USD","EUR");G&&(z(te=>({...te,fx:qt(te.currency,G.rate,{manual:!0,source:`Letzter bekannter Kurs (${G.source})`,date:G.date,fetchedAt:G.fetchedAt})})),p({loading:!1,error:""}))}async function xd(){g("save");let G=await U(()=>e==="invoices"?$a(s):lc(s));g(""),G&&(i(ye(G)),o(!1),en(),b([]),B("Entwurf gespeichert","good"),(t==="new"||!t)&&(en(),Y(`${a.list}/${G.id}/edit`,{replace:!0})))}async function kd(){if(c.loading){B("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let G=oi(P,e==="quotes"?"quote":"invoice");if(b(G),G.length){B("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await ue({title:`${a.finalize}?`,text:F?`Die Rechnung behält die Nummer ${F} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${d} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${d} und lässt sich danach nicht mehr ändern.`,list:[`${q(A)}`,`${j(S.totalCents,s.currency)}${N!=null?` (≈ ${j(N,ee)})`:""}`,...e==="invoices"&&A&&!Te(A)?[`${q(A)} ist bisher Kontakt und wird damit Kunde (neue Nummer ${vn("customer")}).`]:[],...qe>0?[qe>S.totalCents?`Achtung: Eingegangen sind bereits ${j(qe,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${j(qe,s.currency)}`]:[]],confirmLabel:a.finalize}))return;g("finalize");let Ze=await U(()=>e==="invoices"?Ja(P):es(P));g(""),Ze&&(o(!1),B(`${a.one} ${Ze.number} ${F?"neu erstellt":"erstellt"}`,"good"),$n(`${a.list}/${Ze.id}`))}async function Dd(){if(F){await Ei(v("invoices",s.id)||s)&&$n(a.list);return}if(!await ue({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await(e==="invoices"?Er(s.id):cc(s.id)),!0))&&(B("Entwurf gelöscht","good"),$n(a.list))}let qi=s.fx?Number(s.fx.usdToEur):null,Zi=!!s.serviceDateEnd;return l`
    <${we} title=${F?`Rechnung ${F} bearbeiten`:fe?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${F?"Entwurf – die Nummer bleibt erhalten":d?`Nächste Nummer: ${d}`:E?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${C} class="only-narrow" icon="eye" onClick=${()=>I(!$)}>${$?"Formular":"Vorschau"}<//>
      ${fe&&l`<${wt} items=${[{label:F?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:Dd}]} />`}
      <${C} icon="check" onClick=${xd} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${C} variant="primary" icon="invoice" onClick=${kd} busy=${m==="finalize"} disabled=${!!m}>${a.finalize}<//>
    <//>

    ${F&&l`<${Ce} tone="info">
      Diese Rechnung war bereits erstellt${Be.finalizedAt?` (${Qe(Be.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${F}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${qe>0?` Die eingetragenen Zahlungen (${j(qe,s.currency)}) bleiben erhalten.`:""}
      ${Be.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${h.length>0&&l`<${Ce} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${h.map(G=>l`<li>${G}</li>`)}</ul>
    <//>`}

    <div class=${`editor${$?" show-preview":""}`}>
      <div class="editor-form">
        <${J} title=${e==="quotes"?"Aussteller und Empfänger":"Aussteller und Kunde"}>
          <div class="form-grid">
            <${se} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${Vi}
              disabled=${!!F} hint=${F?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${X.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(F&&E&&!X.some(G=>G.id===E.id)?[E,...X]:X).map(G=>({id:G.id,label:G.name}))} />
            <${ve} class="span-3" label=${e==="quotes"?"Kontakt oder Kunde":"Kunde"} htmlFor="doc-customer">
              <${vt} id="doc-customer" options=${Jn} value=${s.customerId} placeholder=${e==="quotes"?"Kontakt suchen":"Kunde suchen"}
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${bd}
                onCreate=${G=>f({type:"customer",seed:G})} createLabel=${e==="quotes"?"als Kontakt anlegen":"als Kunde anlegen"} />
            <//>
            <${Me} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${H("issueDate")} />
            ${e==="invoices"&&l`
              <${Me} class="span-2" label=${Zi?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${H("serviceDate")} />
              ${Zi?l`<${Me} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${H("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>H("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Re} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${H("paymentTermDays")}
                hint=${P.dueDate?`Fällig am ${O(P.dueDate)}`:""} />
              ${Zi&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>H("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${Me} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${H("validUntil")} min=${s.issueDate} />`}
            <${se} class="span-2" label="Währung" value=${s.currency} onChange=${yd} options=${_e} />
            <${se} class="span-2" label="Belegsprache" value=${s.language} onChange=${H("language")} options=${Tt} />
          </div>
        <//>

        <${J} title="Positionen">
          <${Qr} doc=${s} company=${E} onChange=${G=>z(te=>({...te,items:G}))}
            onNewService=${()=>f({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${yt} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${G=>z(te=>({...te,discount:{type:G,value:0}}))} />
                ${s.discount.type==="abs"?l`<${at} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${G=>z(te=>({...te,discount:{type:"abs",value:G}}))} />`:l`<${at} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${G=>z(te=>({...te,discount:{type:"pct",value:G}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${j(S.subtotalCents,s.currency)}</dd></div>
              ${S.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${j(-S.discountCents,s.currency)}</dd></div>`}
              ${S.taxGroups.filter(G=>G.rate!==0).map(G=>l`<div><dt>${E&&E.taxLabel||"Steuer"} ${kt(G.rate)}</dt><dd>${j(G.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${j(S.totalCents,s.currency)}</dd></div>
              ${N!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${j(N,ee)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${J} title="Wechselkurs">
          ${c.error&&l`<${Ce} tone="warn" action=${wr("USD","EUR")&&l`<${C} small onClick=${wd}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${at} value=${qi} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${vd} />
            <span class="fx-eq">EUR</span>
            <${C} small icon="refresh" busy=${c.loading} onClick=${()=>R(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${O(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&qi?` Das entspricht 1 EUR = ${ha(1/qi)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${Ye} label=${`Betrag zusätzlich in ${ee} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${H("showSecondary")} />
        <//>

        <${J} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${ie} class="span-6" label="Einleitung" value=${s.intro} onInput=${H("intro")} rows=${2} />
            <${ie} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${H("paymentTerms")} rows=${2} />
            <${ie} class="span-6" label="Fußzeile" value=${s.footer} onInput=${H("footer")} rows=${2} />
          </div>
        <//>

        <${J} title="Interne Notiz">
          <${ie} value=${s.internalNotes} onInput=${H("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${_.fileName}</span>
          </div>
          <${Ca} model=${_} />
        </div>
      </div>
    </div>

    ${y&&y.type==="customer"&&l`<${Ia}
      customer=${Ot({company:y.seed||"",kind:e==="quotes"?"contact":"customer"})} onClose=${()=>f(null)}
      onSaved=${G=>z(te=>gs(te,G,v("companies",te.companyId),e))} />`}
    ${y&&y.type==="service"&&l`<${Wr}
      service=${pn({companyId:"",currency:s.currency})} onClose=${()=>f(null)}
      onSaved=${G=>z(te=>({...te,items:[...te.items,ot(G,v("companies",te.companyId))]}))} />`}
  `}function Om(e){let t=Rn.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=pi(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function Yr({rec:e,onClose:t}){let n=!v("recurring",e.id),[a,s]=k(()=>ye(e)),[i,r]=k(!1),o=h=>b=>s(y=>({...y,[h]:b})),c=v("companies",a.companyId),p=mt(a),d=w.customers.filter(h=>h.active!==!1||h.id===a.customerId).sort((h,b)=>q(h).localeCompare(q(b),"de")).map(h=>({id:h.id,label:q(h),sub:[h.number,h.city].filter(Boolean).join(", ")}));function u(h){let b=v("companies",h);s(y=>({...y,companyId:h,...b&&n?{currency:b.currency,language:b.language,paymentTermDays:b.paymentTermDays,intro:y.intro||b.invoiceText}:{}}))}function m(h){let b=v("customers",h);s(y=>({...y,customerId:h,...b&&b.language?{language:b.language}:{},...b&&b.currency&&_e.includes(b.currency)?{currency:b.currency}:{},...b&&b.paymentTermDays!=null&&b.paymentTermDays!==""?{paymentTermDays:Number(b.paymentTermDays)}:{}}))}async function g(){r(!0);let h=await U(()=>ns(a));r(!1),h&&(B("Vorlage gespeichert","good"),t())}return l`<${Pe} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${g}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${Z} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${u} placeholder="Unternehmen wählen"
        options=${le().map(h=>({id:h.id,label:h.name}))} />
      <${ve} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${vt} id="rec-customer" options=${d} value=${a.customerId} placeholder="Kunde suchen" onChange=${m} />
      <//>
      <${se} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${Rn.map(h=>({id:h.id,label:h.label}))} />
      ${a.interval==="custom"&&l`<${Re} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${Me} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${Me} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${Re} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${se} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${_e} />
      <${se} class="span-2" label="Belegsprache" value=${a.language} onChange=${o("language")} options=${Tt} />
      <div class="span-6">
        <${Ye} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${h=>o("servicePeriod")(h?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${Qr} doc=${a} company=${c} onChange=${h=>s(b=>({...b,items:h}))}
      onNewService=${()=>B("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${j(p.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${Ye} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function eu(){ge();let[e,t]=k(null),[n,a]=k(""),s=V(),i=w.recurring.filter(Ke),r=i.filter(m=>ba(m,s)),o=!me();async function c(m,g){let h=m.nextDate>s;if(h&&!await ue({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${O(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(m.id);let b=await U(()=>Mr(m.id,{early:h}));return a(""),b&&(B(`Rechnungsentwurf für ${q(v("customers",m.customerId))} angelegt`,"good"),g&&Y(`/invoices/${b.id}/edit`)),b}async function p(){a("all");let m=0;for(let g of r){let h=0;for(;ba(v("recurring",g.id),s)&&h++<36&&await U(()=>Mr(g.id));)m+=1}a(""),m&&(B(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),Y("/invoices?status=draft"))}async function d(m){if(!await ue({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await hc(m.id),!0))&&B("Vorlage gelöscht","good")}let u=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${q(v("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Le} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>Om(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>ya(m)?l`<span class="muted-text">beendet</span>`:m.active?ba(m,s)?l`<span class="tone-warn">${O(m.nextDate)}</span><div class="cell-sub">fällig</div>`:O(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>j(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>ya(m)?l`<${ze} tone="mute">Beendet<//>`:m.active?l`<${ze} tone="good">Aktiv<//>`:l`<${ze} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${C} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||ya(m)}
          title=${ya(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(m,!0)}>Jetzt erzeugen<//>
        <${C} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>d(m)} />
      </div>`}];return l`
    <${we} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${C} variant="primary" icon="plus" onClick=${()=>t(fn(me()||(le().length===1?le()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${Ce} tone="warn" action=${l`<${C} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${p}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${Je} columns=${u} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${pe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${C} variant="primary" icon="plus" onClick=${()=>t(fn(me()||(le().length===1?le()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${Yr} rec=${e} onClose=${()=>t(null)} />`}
  `}var tu="https://api.anthropic.com/v1/messages",Ht=class extends Error{};function Vm(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var qm=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function Zm({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[Vm(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:qm}]}]}}var It=e=>typeof e=="string"?e.trim():"",Jr=e=>Number.isFinite(Number(e))?Qs(Number(e)):0;function Gm(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(g=>g.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new Ht("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new Ht("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=It(s.currency).toUpperCase();Ps.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=Jr(s.net_amount),c=Jr(s.tax_amount),p=Jr(s.total_amount);p&&o+c!==p&&(!o&&c<=p||Math.abs(o+c-p)<=2?o=p-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let d=$e(It(s.invoice_date))?It(s.invoice_date):"";d||i.push("Das Belegdatum wurde nicht erkannt.");let u=$e(It(s.payment_date))?It(s.payment_date):"",m=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:It(s.vendor).slice(0,200),description:It(s.description).slice(0,300),invoiceNumber:It(s.invoice_number).slice(0,80),invoiceDate:d,paymentDate:u,currency:r,netCents:o,taxCents:c,totalCents:p||o+c,paymentMethod:n.includes(It(s.payment_method))?It(s.payment_method):"",category:t.includes(It(s.category))?It(s.category):""},uncertain:m,warnings:i,usage:e.usage||null}}function nu(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function au(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new Ht("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await Qc(e),r="image/jpeg");let o=await Wc(i),c=Zm({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),p;try{p=await fetch(tu,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new Ht("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let d=null;try{d=await p.json()}catch{}if(!p.ok)throw new Ht(nu(p.status,d));return Gm(d,{categories:a,paymentMethods:s})}async function su({apiKey:e,model:t}){if(!e)throw new Ht("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(tu,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new Ht("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new Ht(nu(n.status,a));return!0}var Ni=new Set,Xr=new Set,iu=()=>Xr.forEach(e=>e(new Set(Ni)));function Hm(){let[e,t]=k(new Set(Ni));return ce(()=>(Xr.add(t),()=>Xr.delete(t)),[]),e}var jm=()=>({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,categories:w.settings.expenseCategories||[],paymentMethods:w.settings.paymentMethods||[]});async function ru(e){let t=await Sa(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return au(t,jm())}async function Wm(e,t){try{return await qn(e,$e(t)?t:V())}catch{return null}}async function Qm(e){let t=await Gr(e,{shrink:w.settings.shrinkImages!==!1}),n=me()||(le().length===1?le()[0]:null),a=Va({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:w.settings.aiApiKey?"pending":"none"}}),s=await Br({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await wn(a),!w.settings.aiApiKey)return a;Ni.add(a.id),iu();try{let i=await ru(s.id),r=i.fields,o=r.currency||a.currency,c=await Wm(o,r.invoiceDate),p=v("expenses",a.id);p&&p.status==="review"&&(a=await wn({...p,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:w.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=v("expenses",a.id);throw r&&await wn({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{Ni.delete(a.id),iu()}return a}function $s({attachmentId:e}){let[t,n]=k(""),[a,s]=k(!1),i=v("attachments",e);ce(()=>{let o="",c=!0;return n(""),s(!1),Sa(e).then(p=>{if(c){if(!p){s(!0);return}o=URL.createObjectURL(p),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await Sa(e);o&&et(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${W} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${Jt(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function Ym({expense:e,onClose:t}){let n=!v("expenses",e.id),a=e.status==="review",[s,i]=k(()=>{let _=ye(e);if(!_.invoiceDate&&!a&&(_.invoiceDate=V()),!_.companyId){let ee=me()||(le().length===1?le()[0]:null);ee&&(_.companyId=ee.id)}return _}),[r,o]=k(""),[c,p]=k(""),[d,u]=k(0),m=ke([]),g=ke(null),h=_=>ee=>i(N=>({...N,[_]:ee})),b=(s.attachmentIds||[])[0],y=s.ai||{},f=new Set(y.uncertain||[]),$=`${s.currency}|${s.invoiceDate}`;ce(()=>{let _=!0;if(!$e(s.invoiceDate)||s.fx&&s.fx.manual)return;let ee=(fe,F)=>!!fe&&fe.forCurrency===F.currency&&fe.forDate===Vn(F.invoiceDate);if(ee(s.fx,s))return;p("");let N=s.currency,X=s.invoiceDate;return qn(N,X).then(fe=>{_&&i(F=>F.currency===N&&F.invoiceDate===X&&!(F.fx&&F.fx.manual)?{...F,fx:fe}:F)}).catch(fe=>{_&&(i(F=>F.fx&&!F.fx.manual&&F.fx.forDate&&!ee(F.fx,F)?{...F,fx:null}:F),p(fe.message))}),()=>{_=!1}},[$,d]);function I(_,ee){i(N=>{let X={...N,[_]:ee};return _==="totalCents"?X.netCents=(ee||0)-(N.taxCents||0):X.totalCents=(X.netCents||0)+(X.taxCents||0),X})}function D(_,ee){ee>0&&i(N=>{let fe={...N.fx||{rateToUSD:N.currency==="USD"?1:null,usdToEur:null},[_]:ee,manual:!0,source:"Von Hand eingetragen",date:V(),fetchedAt:ne()};return N.currency==="USD"&&(fe.rateToUSD=1),N.currency==="EUR"&&_==="usdToEur"&&(fe.rateToUSD=1/ee),{...N,fx:fe}})}async function T(_){if(!_)return;o("file");let ee=await U(async()=>{let N=await Gr(_,{shrink:w.settings.shrinkImages!==!1});return Br({blob:N.blob,name:N.name,ownerType:"expense",ownerId:s.id})});o(""),ee&&(m.current.push(ee.id),i(N=>({...N,attachmentIds:[ee.id,...N.attachmentIds||[]]})))}async function z(){if(!await ue({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let ee=b;await U(()=>Ur(ee)),i(X=>({...X,attachmentIds:(X.attachmentIds||[]).filter(fe=>fe!==ee)}));let N=v("expenses",s.id);N&&await U(()=>wn({...N,attachmentIds:(N.attachmentIds||[]).filter(X=>X!==ee)}))}async function H(){if(b){o("ai");try{let _=await ru(b),ee=_.fields;i(N=>({...N,...ee,currency:ee.currency||N.currency,fx:null,ai:{status:"done",at:ne(),model:w.settings.aiModel,uncertain:_.uncertain,warnings:_.warnings}})),u(N=>N+1),B("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(_){pa(_)}o("")}}async function E(){let _=v("expenses",s.id),ee=new Set(_?_.attachmentIds||[]:[]);for(let N of m.current)ee.has(N)||await Ur(N).catch(()=>{});t()}async function A(){o("save");let _=await U(()=>wn({...s,status:"booked"}));o(""),_&&(B(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function x(){if(!await ue({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await gc(s.id),!0))&&(B("Ausgabe gelöscht","good"),t())}let R=_=>f.has(_)?"Von der KI als unsicher markiert – bitte prüfen":"",S=s.fx?bt(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,K=w.settings.expenseCategories||[],P=w.settings.paymentMethods||[];return l`<${Pe} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${E} size="xl" onSubmit=${A}
    footer=${l`
      ${!n&&l`<${C} variant="ghost" icon="trash" onClick=${x} class="push-left">Löschen<//>`}
      <${C} onClick=${E}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${b?l`<${$s} attachmentId=${b} />
              <div class="receipt-actions">
                <${C} small icon="sparkle" busy=${r==="ai"} disabled=${!w.settings.aiApiKey} onClick=${H}
                  title=${w.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${C} small variant="ghost" icon="trash" onClick=${z}>Beleg entfernen<//>
              </div>
              ${!w.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>g.current&&g.current.click()}>
              <${W} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${g} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${_=>{T(_.target.files[0]),_.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${y.status==="done"&&l`<${Ce} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(y.warnings||[]).length>0&&l`<ul class="notice-list">${y.warnings.map(_=>l`<li>${_}</li>`)}</ul>`}
        <//>`}
        ${y.status==="error"&&l`<${Ce} tone="warn">Automatisches Auslesen fehlgeschlagen: ${y.message}<//>`}
        <div class="form-grid">
          <${se} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${h("companyId")} placeholder="Unternehmen wählen"
            options=${le().map(_=>({id:_.id,label:_.name}))} />
          <${se} class="span-3" label="Kategorie" value=${s.category} onChange=${h("category")} placeholder="Keine"
            options=${K.includes(s.category)||!s.category?K:[...K,s.category]} hint=${R("category")} />
          <${Z} class="span-4" label="Lieferant" value=${s.vendor} onInput=${h("vendor")} hint=${R("vendor")} />
          <${Z} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${h("invoiceNumber")} hint=${R("invoice_number")} />
          <${Z} class="span-6" label="Beschreibung" value=${s.description} onInput=${h("description")} />
          <${Me} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${h("invoiceDate")} hint=${R("invoice_date")} />
          <${Me} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${h("paymentDate")} hint=${R("payment_date")} />
          <${se} class="span-2" label="Währung" value=${s.currency} hint=${R("currency")}
            onChange=${_=>i(ee=>({...ee,currency:_,fx:null}))} options=${Ps} />
          <${Re} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${_=>I("netCents",_)} hint=${R("net_amount")} />
          <${Re} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${_=>I("taxCents",_)} hint=${R("tax_amount")} />
          <${Re} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${_=>I("totalCents",_)}
            hint=${R("total_amount")||(S!=null&&s.currency!=="USD"?`≈ ${j(S,"USD")}`:"")} />
          <${se} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${h("paymentMethod")} placeholder="Keine Angabe"
            options=${P.includes(s.paymentMethod)||!s.paymentMethod?P:[...P,s.paymentMethod]} />
          <${ve} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${O(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${at} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${_=>D("rateToUSD",_)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${at} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${_=>D("usdToEur",_)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${ie} class="span-6" label="Notiz" value=${s.note} onInput=${h("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function ou(){ge();let e=Hm(),[t,n]=k(""),[a,s]=k(""),[i,r]=k("year"),[o,c]=k(null),[p,d]=k(!1),[u,m]=k(0),g=ke(null),h=!me(),b=V(),y=De(()=>w.expenses.filter(x=>Ke(x)||!x.companyId&&x.status==="review"),[w.version,w.settings.activeCompany]),f=y.filter(x=>x.status==="review").sort((x,R)=>x.createdAt<R.createdAt?1:-1),$=$t(i,b),I=y.filter(x=>x.status==="booked"),D=I.filter(x=>i==="all"||Qt(x.invoiceDate,$)).filter(x=>!a||x.category===a).filter(x=>Ee(t,x.vendor,x.description,x.invoiceNumber,x.category,x.note,(x.totalCents/100).toFixed(2),(x.totalCents/100).toFixed(2).replace(".",","))),T=[...new Set(I.map(x=>x.category).filter(Boolean))].sort((x,R)=>x.localeCompare(R,"de")),z=D.reduce((x,R)=>(x.net+=lt(R.netCents,R.currency,R.fx)||0,x.tax+=lt(R.taxCents,R.currency,R.fx)||0,x.total+=lt(R.totalCents,R.currency,R.fx)||0,x),{net:0,tax:0,total:0});async function H(x){let R=[...x];if(!R.length)return;if(!le().length){B("Lege zuerst ein Unternehmen an.","bad");return}m(K=>K+R.length);let S=0;for(let K of R)try{await Qm(K),S+=1}catch(P){pa(P)}finally{m(P=>P-1)}S&&B(S===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${S} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let E=[{key:"date",label:"Datum",sort:x=>x.invoiceDate,render:x=>O(x.invoiceDate)},{key:"vendor",label:"Lieferant",sort:x=>x.vendor,render:x=>l`<div class="cell-main">${x.vendor}</div>${x.description&&l`<div class="cell-sub clamp-1">${x.description}</div>`}`},{key:"category",label:"Kategorie",sort:x=>x.category,render:x=>x.category||l`<span class="muted-text">–</span>`},...h?[{key:"company",label:"Unternehmen",render:x=>l`<${Le} id=${x.companyId} />`}]:[],{key:"file",label:"Beleg",render:x=>(x.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${W} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:x=>lt(x.netCents,x.currency,x.fx)||0,render:x=>j(x.netCents,x.currency)},{key:"tax",label:"Steuer",align:"right",render:x=>x.taxCents?j(x.taxCents,x.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:x=>lt(x.totalCents,x.currency,x.fx)||0,render:x=>l`<span class="dual"><span class="dual-main">${j(x.totalCents,x.currency)}</span>
        ${x.currency!==re()&&lt(x.totalCents,x.currency,x.fx)!=null&&l`<span class="dual-sub">≈ ${ae(lt(x.totalCents,x.currency,x.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:x=>x.paymentDate||"",render:x=>x.paymentDate?O(x.paymentDate):l`<span class="muted-text">offen</span>`}],A=D.length?[`${D.length} ${D.length===1?"Ausgabe":"Ausgaben"}`,"","",...h?[""]:[],"",l`<span class="strong">${ae(z.net)}</span>`,l`<span class="strong">${ae(z.tax)}</span>`,l`<span class="strong">${ae(z.total)}</span>`,l`<span class="muted-text">in ${re()}</span>`]:null;return l`
    <${we} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${C} icon="plus" onClick=${()=>c(Va())}>Ausgabe von Hand<//>
      <${C} variant="primary" icon="upload" onClick=${()=>g.current&&g.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${p?" is-drag":""}`}
      onDragOver=${x=>{x.preventDefault(),d(!0)}}
      onDragLeave=${()=>d(!1)}
      onDrop=${x=>{x.preventDefault(),d(!1),H(x.dataTransfer.files)}}>
      <${W} name="upload" size=${24} />
      <div>
        <strong>${u>0?`${u} ${u===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${w.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${g} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${x=>{H(x.target.files),x.target.value=""}} />
    </div>

    ${f.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${f.length}</span></h2>
      <ul class="review-list">
        ${f.map(x=>{let R=e.has(x.id),S=x.ai||{};return l`<li key=${x.id}>
            <button type="button" class="review-item" onClick=${()=>c(x)} disabled=${R}>
              <span class="review-icon"><${W} name=${R?"refresh":"file"} class=${R?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${x.vendor||(v("attachments",(x.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${R?"Wird ausgelesen …":S.status==="error"?`Nicht ausgelesen: ${S.message}`:S.status==="done"?`${x.invoiceDate?O(x.invoiceDate):"Datum fehlt"}, ${x.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${x.totalCents?j(x.totalCents,x.currency):""}</span>
              <span class="review-go">${R?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${I.length>0&&l`<div class="filters">
      <${pt} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${x=>r(x.target.value)}>
        ${Tn.filter(x=>x.id!=="custom").map(x=>l`<option value=${x.id}>${x.label}</option>`)}
      </select>
      ${T.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${x=>s(x.target.value)}>
        <option value="">Alle Kategorien</option>
        ${T.map(x=>l`<option value=${x}>${x}</option>`)}
      </select>`}
    </div>`}
    ${(I.length>0||f.length===0)&&l`<${Je} columns=${E} rows=${D} initialSort=${{key:"date",dir:"desc"}} footer=${A} onRowClick=${x=>c(x)}
      empty=${I.length?l`<${pe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${pe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${Ym} expense=${o} onClose=${()=>c(null)} />`}
  `}var cu={...ca,ending:{label:"Endet bald",tone:"warn"},expired:{label:"Ende überschritten",tone:"bad"}},bs={monthly:"Monat",quarterly:"Quartal",semiannual:"Halbjahr",yearly:"Jahr"},Jm=e=>!!bs[e];function Ti({contract:e}){let t=cu[Ii(e,V())]||ca.open;return l`<${ze} tone=${t.tone}>${t.label}<//>`}function uu(e){if(e.amountCents==null)return"";let t=`${j(e.amountCents,e.currency)} netto`;return bs[e.billing]?`${t} / ${bs[e.billing]}`:e.billing==="once"?`${t}, einmalig`:t}function ys(e){return!e.startDate&&!e.endDate?"":e.startDate&&!e.endDate?`ab ${O(e.startDate)}, unbefristet`:e.startDate?`${O(e.startDate)} – ${O(e.endDate)}`:`bis ${O(e.endDate)}`}var Xm=async(e,t)=>{try{return await qn(e,$e(t)?t:V())}catch{return null}};function du(e){return w.customers.filter(t=>t.active!==!1||t.id===e).sort((t,n)=>q(t).localeCompare(q(n),"de")).map(t=>({id:t.id,label:q(t),sub:[t.number,t.city].filter(Boolean).join(", ")}))}function mu(e){if(ft())return v("companies",ft());let t=[...w.invoices,...w.quotes].filter(n=>n.customerId===e).sort((n,a)=>(n.issueDate||"")<(a.issueDate||"")?1:-1);return t[0]&&v("companies",t[0].companyId)||me()||le()[0]||null}async function eo(e){let t=v("attachments",e),n=await Sa(e);if(!n)throw new Error("Die Datei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).");et(n,t?t.name:"Dokument.pdf")}function Yn(e=""){let t=e?mu(e):me()||(le().length===1?le()[0]:null),n=e?v("customers",e):null;return sl(t,{customerId:e,...n&&n.currency&&_e.includes(n.currency)?{currency:n.currency}:{},...n&&n.language?{language:n.language}:{}})}function vs(e){let t=v("companies",e.companyId),n=(e.items||[]).find(a=>!a.isText);return Mn(t,{customerId:e.customerId,title:e.title||(n?n.name:""),amountCents:e.totals?e.totals.netCents:null,currency:e.currency,taxRate:n?Number(n.taxRate)||0:t&&Number(t.defaultTaxRate)||0,quoteId:e.id})}function Ai(e){let t=V(),n=new Set(w.contracts.map(s=>s.quoteId).filter(Boolean)),a=w.quotes.filter(s=>s.customerId===e&&["accepted","invoiced"].includes(_t(s,t))&&!n.has(s.id)).sort((s,i)=>(s.issueDate||"")<(i.issueDate||"")?1:-1)[0];return a?vs(a):Mn(mu(e),{customerId:e})}function pu({multiple:e,onFiles:t,label:n,sub:a}){let s=ke(null),[i,r]=k(!1);async function o(c){let p=[];for(let d of c)try{p.push(await jc(d))}catch(u){B(u.message,"bad",7e3)}p.length&&t(e?p:p.slice(0,1))}return l`<div class=${`dropzone pdf-drop${i?" is-drag":""}`} role="button" tabindex="0"
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
  </div>`}function fu({ids:e,onRemove:t,preview:n,setPreview:a}){return e.length?l`<ul class="file-list">
    ${e.map(s=>{let i=v("attachments",s);return l`<li key=${s}>
        <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${i?i.name:"Datei fehlt"}</span>
          ${i&&l`<span class="muted-text">${Jt(i.size)}</span>`}</span>
        <span class="file-actions">
          <button type="button" class="link-btn" onClick=${()=>a(n===s?"":s)}>${n===s?"Ausblenden":"Ansehen"}</button>
          <button type="button" class="link-btn" onClick=${()=>U(()=>eo(s))}>Herunterladen</button>
          ${t&&l`<button type="button" class="link-btn tone-bad" onClick=${()=>t(s)}>Entfernen</button>`}
        </span>
      </li>`})}
  </ul>
  ${n&&e.includes(n)&&l`<div class="file-preview"><${$s} attachmentId=${n} /></div>`}`:null}function gu({files:e,onRemove:t}){return e.length?l`<ul class="file-list is-new">
    ${e.map((n,a)=>l`<li key=${a}>
      <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${n.name}</span>
        <span class="muted-text">${Jt(n.blob.size)} · wird beim Speichern hochgeladen</span></span>
      <span class="file-actions"><button type="button" class="link-btn tone-bad" onClick=${()=>t(a)}>Entfernen</button></span>
    </li>`)}
  </ul>`:null}var ep=["open","sent","accepted","declined"].map(e=>({id:e,label:aa[e].label}));function ws({quote:e,onClose:t,onSaved:n}){let a=!v("quotes",e.id),s=(e.items||[])[0],[i,r]=k(()=>ye(e)),[o,c]=k(s?s.priceCents:null),[p,d]=k(()=>{if(s)return Number(s.taxRate)||0;let E=v("companies",e.companyId);return E&&Number(E.defaultTaxRate)||0}),[u,m]=k(null),[g,h]=k(""),[b,y]=k(!1),f=E=>A=>r(x=>({...x,[E]:A})),$=i.status==="invoiced",I=mt({items:[Rt({priceCents:o||0,taxRate:p})],discount:null});function D(E){let A=v("companies",E);r(x=>({...x,companyId:E,...A&&a?{currency:x.customerId&&v("customers",x.customerId)&&v("customers",x.customerId).currency?x.currency:A.currency}:{}})),A&&a&&d(Number(A.defaultTaxRate)||0)}function T(E){let A=v("customers",E);r(x=>({...x,customerId:E,...A&&A.currency&&_e.includes(A.currency)?{currency:A.currency}:{},...A&&A.language?{language:A.language}:{}}))}async function z(){if(o==null){B("Bitte den Betrag des Angebots eintragen.","bad");return}y(!0);let E=v("quotes",i.id),x=!i.fx||!E||E.currency!==i.currency||E.issueDate!==i.issueDate?await Xm(i.currency,i.issueDate):i.fx,R={...i,fx:x,items:[Rt({...s?{id:s.id}:{},name:i.title,qty:1,unit:"Pauschale",priceCents:o,taxRate:p})]},S=await U(()=>mc(R,u));y(!1),S&&(B(a?`Angebot „${S.title}“ hochgeladen`:"Angebot gespeichert","good"),t(),n&&n(S))}let H=i.attachmentIds||[];return l`<${Pe} title=${a?"Angebot hochladen (PDF)":"Hochgeladenes Angebot bearbeiten"} size="lg" onClose=${t} onSubmit=${z}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${b}>${a?"Hochladen":"Speichern"}<//>`}>
    <p class="modal-lead">Für Angebote, die du mit einem anderen Programm gestaltet hast – auch ältere. Das PDF bleibt unverändert,
      das Tool merkt sich Kontakt, Betrag und Status. Es bekommt keine Nummer aus deinem Nummernkreis.</p>
    ${u?l`<${gu} files=${[u]} onRemove=${()=>m(null)} />`:l`<${fu} ids=${H} preview=${g} setPreview=${h} />`}
    <${pu} label=${u||H.length?"Anderes PDF wählen":"PDF des Angebots auswählen"} onFiles=${E=>m(E[0])} />
    <div class="form-grid">
      <${se} class="span-3" label="Unternehmen" value=${i.companyId} onChange=${D} placeholder="Unternehmen wählen"
        options=${le().map(E=>({id:E.id,label:E.name}))} />
      <${ve} class="span-3" label="Kontakt" htmlFor="uq-customer">
        <${vt} id="uq-customer" options=${du(i.customerId)} value=${i.customerId} placeholder="Kontakt suchen" onChange=${T} />
      <//>
      <${Z} class="span-4" label="Bezeichnung" value=${i.title} onInput=${f("title")} placeholder="z. B. Website-Relaunch mit SEO-Paket" />
      <${Z} class="span-2" label="Nummer im Dokument" hint="optional" value=${i.refNumber} onInput=${f("refNumber")} />
      <${Me} class="span-2" label="Angebotsdatum" value=${i.issueDate} onInput=${f("issueDate")} />
      <${Me} class="span-2" label="Gültig bis" hint="optional" value=${i.validUntil} onInput=${f("validUntil")} />
      <${se} class="span-2" label="Status" value=${$?"invoiced":i.status} onChange=${f("status")} disabled=${$}
        options=${$?[{id:"invoiced",label:"Abgerechnet"}]:ep} />
      <${Re} class="span-2" label="Betrag netto" mode="money" value=${o} allowEmpty onChange=${c} />
      <${Re} class="span-2" label="Steuersatz" value=${p} digits=${2} min=${0} max=${100} suffix="%" onChange=${d} />
      <${se} class="span-2" label="Währung" value=${i.currency} onChange=${f("currency")} options=${_e} />
      <div class="span-6 upload-sum">Gesamt laut Angaben: <strong>${j(I.totalCents,i.currency)}</strong>${I.taxCents?` (davon Steuer ${j(I.taxCents,i.currency)})`:""}</div>
      <${ie} class="span-6" label="Interne Notiz" value=${i.internalNotes} onInput=${f("internalNotes")} rows=${2} />
    </div>
  <//>`}function xs({contract:e,onClose:t}){ge();let n=!v("contracts",e.id),[a,s]=k(()=>ye(e)),[i,r]=k([]),[o,c]=k([]),[p,d]=k(""),[u,m]=k(""),[g,h]=k(null),b=S=>K=>s(P=>({...P,[S]:K}));if(g)return l`<${Yr} rec=${g} onClose=${t} />`;let y=w.quotes.filter(S=>S.customerId===a.customerId&&S.status!=="draft").sort((S,K)=>(S.issueDate||"")<(K.issueDate||"")?1:-1),f=n?[]:w.invoices.filter(S=>S.contractId===a.id).sort((S,K)=>(S.issueDate||"")<(K.issueDate||"")?1:-1),$=n?[]:w.recurring.filter(S=>S.contractId===a.id),I=(a.attachmentIds||[]).filter(S=>!o.includes(S));function D(S){let K=v("companies",S);s(P=>({...P,companyId:S,...K&&n&&P.amountCents==null?{currency:K.currency,taxRate:Number(K.defaultTaxRate)||0}:{}}))}function T(S){let K=v("quotes",S);if(!K){s(_=>({..._,quoteId:""}));return}let P=vs(K);s(_=>({..._,quoteId:S,companyId:_.companyId||P.companyId,title:_.title||P.title,..._.amountCents==null?{amountCents:P.amountCents,currency:P.currency,taxRate:P.taxRate}:{}}))}async function z(){let S=await U(()=>ts(a,{files:i,removeIds:o}));return S?(s(ye(S)),r([]),c([]),S):null}async function H(){m("save");let S=await z();m(""),S&&(B(n?`Vertrag „${S.title}“ angelegt`:"Vertrag gespeichert","good"),t())}async function E(){m("invoice");let S=await z();m(""),S&&(t(),Y(`/invoices/new?contract=${S.id}`))}async function A(){m("recurring");let S=await z();if(m(""),!S)return;let K=v("companies",S.companyId),P=v("customers",S.customerId),_=S.startDate&&S.startDate>V()?S.startDate:V();h(fn(K,{name:`${S.title} – ${q(P)}`,customerId:S.customerId,interval:S.billing,startDate:_,nextDate:_,endDate:S.endDate||"",currency:S.currency,...P&&P.language?{language:P.language}:{},...P&&P.paymentTermDays!=null&&P.paymentTermDays!==""?{paymentTermDays:Number(P.paymentTermDays)}:{},items:[mi(S)],contractId:S.id}))}async function x(){let S=f.length+$.length;if(!await ue({title:"Vertrag löschen?",text:`„${a.title}“ wird samt ${I.length===1?"PDF":`${I.length} PDFs`} gelöscht.${S?" Verknüpfte Rechnungen und Vorlagen bleiben erhalten.":""}`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await fc(a.id),!0))&&(B("Vertrag gelöscht","good"),t())}let R=a.amountCents!=null&&a.status!=="declined";return l`<${Pe} title=${n?"Neuer Vertrag":"Vertrag"} size="lg" onClose=${t} onSubmit=${H}
    footer=${l`
      ${!n&&l`<${C} variant="ghost" icon="trash" class="push-left" onClick=${x}>Löschen<//>`}
      ${R&&l`<${C} icon="invoice" busy=${u==="invoice"} onClick=${E}>Rechnung erstellen<//>`}
      ${R&&Jm(a.billing)&&l`<${C} icon="repeat" busy=${u==="recurring"} onClick=${A}>Wiederkehrend abrechnen<//>`}
      <${C} onClick=${t}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${u==="save"}>Speichern<//>`}>
    <div class="form-grid">
      <${se} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${D} placeholder="Unternehmen wählen"
        options=${le().map(S=>({id:S.id,label:S.name}))} />
      <${ve} class="span-3" label="Kontakt" htmlFor="ct-customer">
        <${vt} id="ct-customer" options=${du(a.customerId)} value=${a.customerId} placeholder="Kontakt suchen"
          onChange=${S=>s(K=>({...K,customerId:S,quoteId:K.customerId===S?K.quoteId:""}))} />
      <//>
      <${Z} class="span-4" label="Bezeichnung" value=${a.title} onInput=${b("title")} placeholder="z. B. SEO-Betreuung 12 Monate" />
      <${Z} class="span-2" label="Vertragsnummer" hint="optional" value=${a.refNumber} onInput=${b("refNumber")} />
      <${se} class="span-2" label="Status" value=${a.status} onChange=${b("status")}
        options=${Object.entries(ca).map(([S,K])=>({id:S,label:K.label}))} />
      <${Me} class="span-2" label="Unterschrieben am" value=${a.signedDate} onInput=${b("signedDate")} />
      <${se} class="span-2" label="Aus Angebot" value=${a.quoteId} onChange=${T} placeholder=${y.length?"Kein Angebot":"Keine Angebote vorhanden"}
        options=${y.map(S=>({id:S.id,label:`${je(S)} · ${O(S.issueDate)} · ${j(S.totals?S.totals.totalCents:0,S.currency)}`}))} />
      <${Me} class="span-2" label="Beginn" value=${a.startDate} onInput=${b("startDate")} />
      <${Me} class="span-2" label="Ende" hint="leer = unbefristet" value=${a.endDate} onInput=${b("endDate")} min=${a.startDate||void 0} />
      <${Z} class="span-2" label="Kündigungsfrist" hint="optional" value=${a.noticePeriod} onInput=${b("noticePeriod")} placeholder="z. B. 3 Monate zum Laufzeitende" />
      <${se} class="span-2" label="Abrechnung" value=${a.billing} onChange=${b("billing")} options=${Oa} />
      <${Re} class="span-2" label=${bs[a.billing]?`Betrag netto je ${bs[a.billing]}`:"Betrag netto"} mode="money" value=${a.amountCents} allowEmpty onChange=${b("amountCents")} />
      <${Re} class="span-1" label="Steuer" value=${a.taxRate} digits=${2} min=${0} max=${100} suffix="%" onChange=${b("taxRate")} />
      <${se} class="span-1" label="Währung" value=${a.currency} onChange=${b("currency")} options=${_e} />
      <${ie} class="span-6" label="Notizen" value=${a.notes} onInput=${b("notes")} rows=${2} placeholder="z. B. Sonderkonditionen, Ansprechpartner, Verlängerung" />
    </div>
    <h3 class="sub-head">Vertragsdokumente</h3>
    <${fu} ids=${I} preview=${p} setPreview=${d} onRemove=${S=>c(K=>[...K,S])} />
    <${gu} files=${i} onRemove=${S=>r(K=>K.filter((P,_)=>_!==S))} />
    ${o.length>0&&l`<p class="muted-text small">${o.length===1?"Ein PDF wird":`${o.length} PDFs werden`} beim Speichern entfernt.
      <button type="button" class="link-btn" onClick=${()=>c([])}>Rückgängig</button></p>`}
    <${pu} multiple label="Vertrag als PDF hinzufügen" sub="Auch mehrere Dateien, z. B. Vertrag und Nachtrag" onFiles=${S=>r(K=>[...K,...S])} />
    ${(f.length>0||$.length>0)&&l`<h3 class="sub-head">Abrechnung zu diesem Vertrag</h3>
      <ul class="plain-list linked-list">
        ${$.map(S=>l`<li key=${S.id}><${W} name="repeat" size=${14} /> <a href="#/recurring">Vorlage „${S.name}“</a>
          <span class="muted-text">${S.active?`nächste Rechnung ${O(S.nextDate)}`:"pausiert oder beendet"}</span></li>`)}
        ${f.map(S=>l`<li key=${S.id}><${W} name="invoice" size=${14} />
          <a href=${`#/invoices/${S.id}${S.status==="draft"?"/edit":""}`} onClick=${t}>${S.number||"Entwurf"}</a>
          <span class="muted-text">${O(S.issueDate)}</span> <${Lt} doc=${S} /> <${xn} inv=${S} /></li>`)}
      </ul>`}
  <//>`}var lu=[{id:"all",label:"Alle",test:()=>!0},{id:"open",label:"Offen",test:e=>e==="open"},{id:"running",label:"Laufend",test:e=>e==="signed"||e==="ending"||e==="expired"},{id:"ending",label:"Endet bald",test:e=>e==="ending"||e==="expired"},{id:"closed",label:"Beendet",test:e=>e==="ended"||e==="declined"}];function hu({params:e={}}){ge();let[t,n]=k(""),[a,s]=k("all"),[i,r]=k(()=>e.open&&v("contracts",e.open)||null),o=V(),c=!me(),p=De(()=>w.contracts.filter(Ke).map(h=>({c:h,s:Ii(h,o)})),[w.version,w.settings.activeCompany]),d=p.filter(h=>lu.find(b=>b.id===a).test(h.s)).filter(h=>Ee(t,h.c.title,h.c.refNumber,q(v("customers",h.c.customerId)),h.c.notes)),u=p.filter(h=>h.s==="ending"||h.s==="expired").length,m=[{key:"title",label:"Vertrag",sort:h=>h.c.title,render:h=>l`<div class="cell-main">${h.c.title}</div>${h.c.refNumber&&l`<div class="cell-sub">${h.c.refNumber}</div>`}`},{key:"customer",label:"Kontakt",sort:h=>q(v("customers",h.c.customerId)),render:h=>q(v("customers",h.c.customerId))||"–"},...c?[{key:"company",label:"Unternehmen",render:h=>l`<${Le} id=${h.c.companyId} />`}]:[],{key:"term",label:"Laufzeit",sort:h=>h.c.endDate||h.c.startDate||"",render:h=>ys(h.c)||l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:h=>h.c.amountCents||0,render:h=>uu(h.c)||l`<span class="muted-text">–</span>`},{key:"files",label:"PDF",align:"right",render:h=>(h.c.attachmentIds||[]).length?l`<span class="file-count" title="Vertragsdokumente"><${W} name="file" size=${14} />${h.c.attachmentIds.length}</span>`:""},{key:"status",label:"Status",sort:h=>h.s,render:h=>l`<${Ti} contract=${h.c} />`}],g=()=>r(Mn(me()||(le().length===1?le()[0]:null)));return l`
    <${we} title="Verträge" sub="Welcher Kontakt hat welchen Vertrag – mit PDF, Laufzeit und Abrechnung.">
      <${C} variant="primary" icon="plus" onClick=${g}>Neuer Vertrag<//>
    <//>
    ${u>0&&l`<${Ce} tone="warn">${u===1?"Ein Vertrag endet":`${u} Verträge enden`} in den nächsten 60 Tagen oder ${u===1?"hat":"haben"} das Enddatum überschritten.<//>`}
    ${w.contracts.length>0&&l`<div class="filters">
      <${pt} value=${t} onInput=${n} placeholder="Vertrag, Nummer, Kontakt" />
      <${St} label="Status" value=${a} onChange=${s}
        options=${lu.map(h=>({id:h.id,label:h.label,count:p.filter(b=>h.test(b.s)).length}))} />
    </div>`}
    <${Je} columns=${m} rows=${d} rowKey=${h=>h.c.id} initialSort=${{key:"term",dir:"desc"}} onRowClick=${h=>r(h.c)}
      empty=${w.contracts.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Vertrag." />`:l`<${pe} icon="file" title="Noch keine Verträge" text="Lege Verträge mit PDF, Laufzeit und Betrag an – auch ältere. Aus einem Vertrag wird mit einem Klick die Rechnung oder eine wiederkehrende Abrechnung.">
            <${C} variant="primary" icon="plus" onClick=${g}>Ersten Vertrag anlegen<//>
          <//>`} />
    ${i&&l`<${xs} key=${i.id} contract=${i} onClose=${()=>r(null)} />`}
  `}var tp={done:"Erledigt",active:"Läuft",todo:"Offen",skipped:"Nicht erfasst"};function $u({customerId:e,on:t}){let n=V(),{steps:a,current:s}=Jc({appointments:w.appointments,quotes:w.quotes,contracts:w.contracts,invoices:w.invoices},e,n),[i,r,o,c]=a,p=w.contracts.find(u=>u.customerId===e&&u.status==="signed"&&u.amountCents!=null&&!w.invoices.some(m=>m.contractId===u.id)&&!w.recurring.some(m=>m.contractId===u.id)),d={meeting:l`
      ${i.next&&l`<p>Nächster Termin: <strong>${O(i.next.date)}, ${i.next.start} Uhr</strong></p>`}
      ${i.last&&l`<p class="muted-text">Zuletzt ${O(i.last.date)}${i.count>1?` · ${i.count} Termine`:""}</p>`}
      ${!i.next&&!i.last&&l`<p class="muted-text">Noch kein Termin.</p>`}
      <div class="flow-actions"><${C} small icon="calendar" onClick=${t.appointment}>Termin planen<//></div>`,quote:l`
      ${r.latest?l`<p><a href=${`#/quotes/${r.latest.id}`}>${je(r.latest)}</a>${r.latest.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}${" · "}${(aa[r.latestStatus]||{}).label||""}</p>
          <p class="muted-text">${O(r.latest.issueDate)} · ${j(r.latest.totals?r.latest.totals.totalCents:0,r.latest.currency)}${r.count>1?` · ${r.count} Angebote`:""}</p>`:l`<p class="muted-text">${r.drafts?`${r.drafts} ${r.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch kein Angebot."}</p>`}
      <div class="flow-actions">
        <${C} small icon="quote" onClick=${()=>Y(`/quotes/new?customer=${e}`)}>Schreiben<//>
        <${C} small icon="upload" onClick=${t.uploadQuote}>PDF hochladen<//>
      </div>`,contract:l`
      ${o.latest?l`<p><button type="button" class="link-btn" onClick=${()=>t.openContract(o.latest)}>${o.latest.title}</button>${" · "}${(cu[Ii(o.latest,n)]||{}).label}</p>
          <p class="muted-text">${[ys(o.latest),o.count>1?`${o.count} Verträge`:""].filter(Boolean).join(" · ")||" "}</p>`:l`<p class="muted-text">Noch kein Vertrag.</p>`}
      <div class="flow-actions"><${C} small icon="file" onClick=${()=>t.contract(Ai(e))}>Vertrag anlegen<//></div>`,invoice:l`
      ${c.latest?l`<p><a href=${`#/invoices/${c.latest.id}`}>${c.latest.number}</a>${" "}<${xn} inv=${c.latest} /></p>
          <p class="muted-text">${O(c.latest.issueDate)}${c.count>1?` · ${c.count} Rechnungen`:""}</p>`:l`<p class="muted-text">${c.drafts?`${c.drafts} ${c.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch keine Rechnung."}</p>`}
      <div class="flow-actions">
        ${p&&l`<${C} small variant="primary" icon="invoice" onClick=${()=>Y(`/invoices/new?contract=${p.id}`)}>Aus Vertrag<//>`}
        <${C} small icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Schreiben<//>
      </div>`};return l`<${J} title="Ablauf" class="flow-panel">
    <ol class="flow">
      ${a.map((u,m)=>l`<li key=${u.id} class=${`flow-step is-${u.state}${s===m?" is-current":""}`}>
        <div class="flow-head">
          <span class="flow-dot">${u.state==="done"?l`<${W} name="check" size=${13} />`:m+1}</span>
          <span class="flow-label">${u.label}</span>
          <span class="flow-state">${s===m?"Nächster Schritt":tp[u.state]}</span>
        </div>
        <div class="flow-body">${d[u.id]}</div>
      </li>`)}
    </ol>
  <//>`}function bu({customerId:e,onOpen:t}){let n=w.contracts.filter(s=>s.customerId===e).sort((s,i)=>(s.startDate||s.createdAt)<(i.startDate||i.createdAt)?1:-1);return l`<${Je} columns=${[{key:"title",label:"Vertrag",render:s=>l`<span class="cell-main">${s.title}</span>${s.refNumber&&l`<div class="cell-sub">${s.refNumber}</div>`}`},{key:"company",label:"Unternehmen",render:s=>l`<${Le} id=${s.companyId} />`},{key:"term",label:"Laufzeit",render:s=>ys(s)||"–"},{key:"amount",label:"Betrag",align:"right",render:s=>uu(s)||"–"},{key:"files",label:"PDF",align:"right",render:s=>(s.attachmentIds||[]).length?l`<span class="file-count"><${W} name="file" size=${14} />${s.attachmentIds.length}</span>`:""},{key:"status",label:"Status",render:s=>l`<${Ti} contract=${s} />`}]} rows=${n} onRowClick=${t}
    empty=${l`<p class="panel-empty">Noch keine Verträge für diesen Kontakt.</p>`} />`}var yu={company:"Unternehmen",firstName:"Vorname",lastName:"Nachname",street:"Straße",houseNo:"Hausnummer",zip:"PLZ",city:"Ort",region:"Region",country:"Land",email:"E-Mail",phone:"Telefon",website:"Website",taxId:"Steuer-ID",vatId:"USt-IdNr."};function np({onApply:e}){let[t,n]=k(!1),[a,s]=k(""),[i,r]=k(""),[o,c]=k(""),p=!!w.settings.aiApiKey;async function d(){if(!a.trim()){B("Bitte zuerst den Text des Impressums einfügen.","info");return}c("text");let m=null;p&&(m=await U(()=>Kr({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,text:a}))),m||(m=Lc(a)),c(""),e(m)}async function u(){let m=Pc(i);if(!m){B("Bitte die Adresse des Impressums eintragen.","info");return}c("url");let g=await U(()=>Kr({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,url:m}));c(""),g&&e(g)}return t?l`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${C} variant="ghost" small icon="x" title="Schließen" onClick=${()=>n(!1)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${ie} class="span-6" label="Impressum einfügen" value=${a} onInput=${s} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${p?"Wird mit der KI ausgelesen (API-Key aus den Einstellungen).":"Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer."} />
      <div class="span-6"><${C} small variant="primary" busy=${o==="text"} onClick=${d}>Text auslesen<//></div>
      <${Z} class="span-4" label="Oder Adresse des Impressums" value=${i} onInput=${r} placeholder="firma.de/impressum"
        hint=${p?"Die Seite wird über die Anthropic-API abgerufen und ausgelesen.":"Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen."} />
      <div class="span-2 field field-inline"><${C} small busy=${o==="url"} disabled=${!p} onClick=${u}>Von Website laden<//></div>
    </div>
  </div>`:l`<div class="imprint-open"><${C} small icon="sparkle" onClick=${()=>n(!0)}>Daten aus Impressum übernehmen<//></div>`}function Ia({customer:e,onClose:t,onSaved:n}){let a=!e||!v("customers",e.id),[s,i]=k(()=>({...Ot(),...e||{}})),[r,o]=k((s.tags||[]).join(", ")),[c,p]=k(!1),d=$=>I=>i(D=>({...D,[$]:I})),u=v("customers",s.id),m=!a&&w.invoices.some($=>$.customerId===s.id),g=Te(s)?"customer":"contact",h=($,I)=>new RegExp(`^${$==="contact"?"KO":"K"}-\\d+$`).test(String(I||""));function b($){i(I=>{let D=Te(I)?"customer":"contact";return D===$?I:{...I,kind:$,number:h(D,I.number)?"":I.number}})}function y({fields:$,extra:I}){let D=[],T=[];i(z=>{let H={...z};for(let[A,x]of Object.entries($))x&&(String(z[A]||"").trim()?String(z[A]).trim()!==x&&T.push(yu[A]||A):(H[A]=x,D.push(yu[A]||A)));let E=(I||[]).filter(A=>!String(z.notes||"").includes(A));return E.length&&(H.notes=[String(z.notes||"").trim(),...E].filter(Boolean).join(`
`),D.push("Notizen")),H}),setTimeout(()=>{D.length?B(`Übernommen: ${D.join(", ")}${T.length?`. Nicht überschrieben: ${T.join(", ")}`:""}.`,"good",8e3):B(T.length?`Nichts übernommen – ${T.join(", ")} ist schon ausgefüllt.`:"Im Impressum wurden keine Kontaktdaten erkannt.","info",7e3)},0)}async function f(){p(!0);let $={...s,tags:r.split(",").map(D=>D.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},I=await U(()=>Gn($));p(!1),I&&(B(a?`${Te(I)?"Kunde":"Kontakt"} ${I.number} angelegt`:"Gespeichert","good"),n&&n(I),t())}return l`<${Pe} title=${a?"Neuer Kontakt":`${g==="customer"?"Kunde":"Kontakt"} bearbeiten`} onClose=${t} size="lg" onSubmit=${f}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${c}>Speichern<//>`}>
    <${np} onApply=${y} />
    <div class="form-grid">
      <${ve} class="span-6" label="Art">
        <div class="inline-controls">
          <${yt} label="Art des Kontakts" value=${g} onChange=${b}
            options=${al.map($=>({...$,label:$.id==="contact"&&m?"Kontakt (nicht möglich – hat Rechnungen)":$.label}))} />
          <span class="field-hint">${g==="customer"?"Kunden erhalten Rechnungen. Nummer K-…":"Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden."}</span>
        </div>
      <//>
      <${Z} class="span-4" label="Unternehmen" value=${s.company} onInput=${d("company")} />
      <${Z} class="span-2" label="Nummer" value=${s.number} onInput=${d("number")}
        placeholder=${vn(g,w.customers.filter($=>$.id!==s.id))}
        hint=${u&&u.number&&u.number!==s.number&&!s.number?`Bisher ${u.number}. Leer = neue Nummer`:"Leer lassen für automatische Nummer"} />
      <${Z} class="span-3" label="Vorname" value=${s.firstName} onInput=${d("firstName")} />
      <${Z} class="span-3" label="Nachname" value=${s.lastName} onInput=${d("lastName")} />
      <${Z} class="span-6" label="Ansprechpartner (falls abweichend)" value=${s.contact} onInput=${d("contact")} />

      <${Z} class="span-4" label="Straße" value=${s.street} onInput=${d("street")} />
      <${Z} class="span-2" label="Hausnummer" value=${s.houseNo} onInput=${d("houseNo")} />
      <${Z} class="span-2" label="PLZ" value=${s.zip} onInput=${d("zip")} />
      <${Z} class="span-4" label="Ort" value=${s.city} onInput=${d("city")} />
      <${Z} class="span-3" label="Bundesland / Region" value=${s.region} onInput=${d("region")} />
      <${Z} class="span-3" label="Land" value=${s.country} onInput=${d("country")} />

      <${Z} class="span-3" label="E-Mail" type="email" value=${s.email} onInput=${d("email")} />
      <${Z} class="span-3" label="Telefon" value=${s.phone} onInput=${d("phone")} />
      <${Z} class="span-6" label="Website" value=${s.website} onInput=${d("website")} />

      <${Z} class="span-3" label="Steuer-ID" value=${s.taxId} onInput=${d("taxId")} />
      <${Z} class="span-3" label="USt-IdNr. / VAT ID" value=${s.vatId} onInput=${d("vatId")} />

      <${se} class="span-2" label="Belegsprache" value=${s.language} onChange=${d("language")}
        placeholder="Wie Unternehmen" options=${Tt} />
      <${se} class="span-2" label="Währung" value=${s.currency} onChange=${d("currency")}
        placeholder="Wie Unternehmen" options=${_e} />
      <${Re} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${d("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${Z} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${ie} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${d("notes")} rows=${3} />
      <div class="span-6"><${Ye} label="Aktiv" checked=${s.active!==!1} onChange=${d("active")} /></div>
    </div>
  <//>`}function xu(e){let t=sn(),n=V(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of ct(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of Cn(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of w.payments){let r=v("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=bt(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=Mt(i.amountCents,r.currency,r.fx)||0}return a}function ku(){ge();let[e,t]=k(""),[n,a]=k("active"),[s,i]=k("all"),[r,o]=k(""),[c,p]=k(null),d=ft(),u=De(()=>xu(d),[w.version,d]),m=!!c&&!v("customers",c.id),g=De(()=>Or(sn(),{companyId:d}),[w.version,d]),h=De(()=>[...new Set(w.customers.flatMap(f=>f.tags||[]))].sort((f,$)=>f.localeCompare($,"de")),[w.version]),b=w.customers.filter(f=>n==="active"&&f.active===!1||n==="inactive"&&f.active!==!1||s==="customer"&&!Te(f)||s==="contact"&&Te(f)||r&&!(f.tags||[]).includes(r)?!1:Ee(e,f.number,f.company,f.firstName,f.lastName,f.contact,f.city,f.country,f.email,(f.tags||[]).join(" "),(g.get(f.id)||[]).map($=>$.name).join(" "))),y=[{key:"number",label:"Nr.",sort:f=>f.number,width:"90px",render:f=>l`<span class="mono-num">${f.number}</span>`},{key:"name",label:"Name",sort:f=>q(f),render:f=>l`<div class="cell-main">${q(f)}</div>
        ${it(f)&&it(f)!==q(f)&&l`<div class="cell-sub">${it(f)}</div>`}`},{key:"kind",label:"Art",sort:f=>Te(f)?0:1,render:f=>l`<${ze} tone=${Te(f)?"info":"neutral"} icon=${Te(f)?"good":"customers"}>${Te(f)?"Kunde":"Kontakt"}<//>`},{key:"city",label:"Ort",sort:f=>f.city,render:f=>[f.city,f.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:f=>{let $=g.get(f.id)||[];return $.length?l`<div class="svc-tags">${$.slice(0,3).map(I=>l`<span class="tag" title=${I.running?"Läuft (wiederkehrende Vorlage)":""}>${I.running?"↻ ":""}${I.name}</span>`)}
          ${$.length>3&&l`<span class="tag muted-text">+${$.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:f=>(f.tags||[]).map($=>l`<span class="tag">${$}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:f=>M(u.get(f.id)),render:f=>{let $=u.get(f.id);return $&&M($)?ae(M($)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:f=>M(u.get(f.id),"open"),render:f=>{let $=u.get(f.id);return!$||!M($,"open")?l`<span class="muted-text">–</span>`:l`<span class=${M($,"overdue")?"tone-bad":""}>${ae(M($,"open"))}</span>`}},{key:"status",label:"",render:f=>f.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}];return l`
    <${we} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${C} variant="primary" icon="plus" onClick=${()=>p(Ot({kind:"contact"}))}>Neuer Kontakt<//>
    <//>
    ${w.customers.length>0&&l`<div class="filters">
      <${pt} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${St} label="Art" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:w.customers.length},{id:"customer",label:"Kunden",count:w.customers.filter(Te).length},{id:"contact",label:"Kontakte",count:w.customers.filter(f=>!Te(f)).length}]} />
      <select class="input select filter-select" value=${n} aria-label="Status" onChange=${f=>a(f.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${h.length>0&&l`<select class="input select filter-select" value=${r} aria-label="Nach Tag filtern" onChange=${f=>o(f.target.value)}>
        <option value="">Alle Tags</option>
        ${h.map(f=>l`<option value=${f}>${f}</option>`)}
      </select>`}
    </div>`}
    <${Je} columns=${y} rows=${b} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${f=>Y(`/customers/${f.id}`)}
      empty=${w.customers.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`:l`<${pe} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${C} variant="primary" icon="plus" onClick=${()=>p(Ot({kind:"contact"}))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${c&&l`<${Ia} customer=${c} onClose=${()=>p(null)}
      onSaved=${f=>{m&&Y(`/customers/${f.id}`)}} />`}
  `}function Du({id:e}){ge();let t=v("customers",e),[n,a]=k(!1),[s,i]=k(null),[r,o]=k(null),[c,p]=k(null),[d,u]=k(null),[m,g]=k(null),[h,b]=k(!1);if(!t)return l`<${pe} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${C} onClick=${()=>Y("/customers")}>Zu den Kontakten<//>
    <//>`;let y=V(),f=xu(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},$=Or(sn(),{customerId:e}).get(e)||[],I=w.notes.filter(N=>N.customerId===e),D=ks(w.appointments.filter(N=>N.customerId===e)),T=D.filter(N=>N.status==="planned"&&N.date>=y),z=w.todos.filter(N=>N.customerId===e),H=z.filter(N=>!N.done).sort($i),E=z.filter(N=>N.done).sort((N,X)=>(N.doneAt||"")<(X.doneAt||"")?1:-1),A=w.invoices.filter(N=>N.customerId===e).sort((N,X)=>N.issueDate<X.issueDate?1:-1),x=w.quotes.filter(N=>N.customerId===e).sort((N,X)=>N.issueDate<X.issueDate?1:-1),R=[...new Set([...A,...x].map(N=>N.companyId))];async function S(){let N=I.length||D.length?` Mitgelöscht werden ${D.length} ${D.length===1?"Termin":"Termine"} und ${I.length} ${I.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await ue({title:`${Te(t)?"Kunde":"Kontakt"} löschen?`,text:`${q(t)} wird endgültig gelöscht.${N}`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await ql(e),!0))&&(B("Gelöscht","good"),Y("/customers"))}async function K(N){let X=N==="customer";if(!await ue({title:X?`${q(t)} zum Kunden machen?`:`${q(t)} als Kontakt führen?`,text:X?`Der Kontakt wird Kunde und bekommt eine Kundennummer (${vn("customer")}). Das passiert sonst automatisch mit der ersten Rechnung.`:`Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${vn("contact")}).`,confirmLabel:X?"Zum Kunden machen":"Als Kontakt führen"}))return;let F=await U(()=>Gn({...t,kind:N}));F&&B(`${X?"Kunde":"Kontakt"} ${F.number}`,"good")}let P=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),_=[{key:"number",label:"Nummer",render:N=>l`<a href=${`#/invoices/${N.id}`} class="cell-main">${N.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:N=>l`<${Le} id=${N.companyId} />`},{key:"date",label:"Datum",render:N=>O(N.issueDate)},{key:"due",label:"Fällig",render:N=>O(N.dueDate)},{key:"total",label:"Betrag",align:"right",render:N=>l`<${Lt} doc=${N} />`},{key:"status",label:"Status",render:N=>l`<${xn} inv=${N} />`}],ee=[{key:"number",label:"Nummer",render:N=>l`<a href=${`#/quotes/${N.id}${N.status==="draft"?"/edit":""}`} class="cell-main">${je(N)}</a>${N.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}`},{key:"company",label:"Unternehmen",render:N=>l`<${Le} id=${N.companyId} />`},{key:"date",label:"Datum",render:N=>O(N.issueDate)},{key:"valid",label:"Gültig bis",render:N=>O(N.validUntil)},{key:"total",label:"Betrag",align:"right",render:N=>l`<${Lt} doc=${N} />`},{key:"status",label:"Status",render:N=>l`<${ss} quote=${N} />`}];return l`
    <${we} title=${q(t)} back=${{href:"#/customers",label:"Kontakte"}}
      sub=${l`<span class="badges"><${ze} tone=${Te(t)?"info":"neutral"} icon=${Te(t)?"good":"customers"}>${Te(t)?"Kunde":"Kontakt"}<//>${t.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}</span>
        <span class="head-meta">${Te(t)?"Kundennummer":"Kontaktnummer"} ${t.number}${(t.formerNumbers||[]).length?` (vorher ${t.formerNumbers.join(", ")})`:""}</span>`}>
      <${C} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${C} variant="primary" icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${wt} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>Y(`/quotes/new?customer=${e}`)},{label:"Angebot hochladen (PDF)",icon:"upload",onClick:()=>g(Yn(e))},{label:"Vertrag anlegen",icon:"file",onClick:()=>u(Ai(e))},!Te(t)&&{label:"Zum Kunden machen",icon:"good",onClick:()=>K("customer")},Te(t)&&!A.length&&{label:"Als Kontakt führen",icon:"customers",onClick:()=>K("contact")},{label:"Löschen",icon:"trash",danger:!0,disabled:Cr(e),onClick:S}]} />
    <//>

    <div class="stat-row">
      <${Fe} label="Umsatz gesamt (netto)" value=${ae(M(f))} sub=${`≈ ${Oe(Ne(f))}, ${f.count} Rechnungen`} />
      <${Fe} label="Offene Forderungen" value=${ae(M(f,"open"))} sub=${`≈ ${Oe(Ne(f,"open"))}`} />
      <${Fe} label="Davon überfällig" value=${ae(M(f,"overdue"))} tone=${M(f,"overdue")?"bad":""} sub=${`≈ ${Oe(Ne(f,"overdue"))}`} />
      <${Fe} label="Bezahlt" value=${ae(M(f,"paid"))} sub=${`≈ ${Oe(Ne(f,"paid"))}`} />
    </div>

    <${$u} customerId=${e} on=${{appointment:()=>o(vu(t)),uploadQuote:()=>g(Yn(e)),contract:u,openContract:u}} />

    <div class="split">
      <div class="split-main">
        <${J} title=${`To-dos${H.length?` (${H.length})`:""}`} action=${E.length>0&&l`<button type="button" class="link-btn small"
            onClick=${()=>b(!h)}>${h?"Erledigte ausblenden":`${E.length} erledigte zeigen`}</button>`}>
          <${Qn} items=${H} showCustomer=${!1} onEdit=${p} />
          ${h&&l`<${Qn} items=${E} showCustomer=${!1} onEdit=${p} />`}
          <${bi} customerId=${e} />
        <//>
        <${ap} rows=${$} />
        <${J} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${C} small icon="note" onClick=${()=>i(Fs({customerId:e}))}>Eintrag<//>
            <${C} small icon="calendar" onClick=${()=>o(vu(t))}>Termin planen<//>
          </div>`}>
          ${T.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${Ui} items=${T} onOpen=${o} compact />`}
          <${ip} notes=${I} appts=${D.filter(N=>!(N.status==="planned"&&N.date>=y))}
            onNote=${i} onAppt=${o} hasUpcoming=${T.length>0} />
        <//>
        <${J} title="Rechnungen" flush>
          <${Je} columns=${_} rows=${A} onRowClick=${N=>Y(`/invoices/${N.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${J} title="Angebote" flush action=${l`<div class="panel-head-actions">
            <${C} small icon="upload" onClick=${()=>g(Yn(e))}>PDF hochladen<//>
            <${C} small icon="quote" onClick=${()=>Y(`/quotes/new?customer=${e}`)}>Schreiben<//>
          </div>`}>
          <${Je} columns=${ee} rows=${x} onRowClick=${N=>Y(`/quotes/${N.id}${N.status==="draft"?"/edit":""}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kontakt.</p>`} />
        <//>
        <${J} title="Verträge" flush action=${l`<div class="panel-head-actions">
            <${C} small icon="file" onClick=${()=>u(Ai(e))}>Vertrag anlegen<//>
          </div>`}>
          <${bu} customerId=${e} onOpen=${u} />
        <//>
      </div>
      <aside class="split-side">
        <${J} title="Kontakt">
          <${yn} rows=${[["Ansprechpartner",it(t)],["Adresse",P.length?l`${P.map(N=>l`<div>${N}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(Tt.find(N=>N.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(N=>l`<span class="tag">${N}</span>`):""]]} />
        <//>
        <${J} title="Abgerechnet über">
          ${R.length?l`<ul class="plain-list">${R.map(N=>l`<li><${Le} id=${N} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${J} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${Ia} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${rp} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${Ri} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${yi} key=${c.id} todo=${c} onClose=${()=>p(null)} />`}
    ${d&&l`<${xs} key=${d.id} contract=${d} onClose=${()=>u(null)} />`}
    ${m&&l`<${ws} key=${m.id} quote=${m} onClose=${()=>g(null)} />`}
  `}function vu(e){let t=[...w.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=ft()&&v("companies",ft())||t&&v("companies",t.companyId)||le()[0];return la(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function ap({rows:e}){let t=n=>(Rn.find(a=>a.id===n)||{}).label||"";return l`<${J} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${re()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${W} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Le} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${Fn(n.qty)}${n.unit?` ${Ys(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${M(n)?l`${ae(M(n))}<div class="cell-sub">≈ ${Oe(Ne(n))}</div>`:"–"}</td>
            <td>${n.last?O(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var sp={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},wu=e=>(oa.find(t=>t.id===e)||oa[0]).label;function ip({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await ue({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Zl(o.id),!0))&&B("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let u=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${W} name=${sp[u.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${u.title||wu(u.kind)}</span>
              <span class="tl-meta">${wu(u.kind)} · ${O(u.date)}</span>${u.companyId&&l`<${Le} id=${u.companyId} />`}</div>
            ${u.text&&l`<div class="tl-text">${u.text}</div>`}
          </div>
          <div class="tl-actions">
            <${C} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(u)} />
            <${C} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(u)} />
          </div>
        </li>`}let c=o.a,p=ra[c.status]||ra.planned,d=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${W} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${O(c.date)}, ${c.start} Uhr</span>
            <${ze} tone=${d?"warn":p.tone}>${d?"Nicht dokumentiert":p.label}<//>
            <${Le} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
          ${c.nextSteps&&l`<div class="tl-text"><span class="strong">Nächste Schritte:</span> ${c.nextSteps}</div>`}
          ${(()=>{let u=w.todos.filter(m=>m.appointmentId===c.id);return u.length>0&&l`<div class="tl-todos">${u.map(m=>l`<span class=${`tag${m.done?" is-done":""}`}>${m.done?"✓":"○"} ${m.title}</span>`)}</div>`})()}
        </div>
        <div class="tl-actions">
          ${d&&l`<${C} small onClick=${()=>Bi(c)}>Dokumentieren<//>`}
          <${C} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function rp({note:e,onClose:t}){let n=!v("notes",e.id),[a,s]=k(()=>({...e})),[i,r]=k(!1),o=p=>d=>s(u=>({...u,[p]:d}));async function c(){r(!0);let p=await U(()=>ni(a));r(!1),p&&(B(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${Pe} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${C} onClick=${t}>Abbrechen<//><${C} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${se} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${oa} />
      <${Me} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${se} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${le().map(p=>({id:p.id,label:p.name}))} />
      <${Z} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${ie} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var op=["Mo","Di","Mi","Do","Fr","Sa","So"],Su=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],ks=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),_i=e=>(v("companies",e)||{}).brandColor||"var(--ink-2)";function rn(e){let t=v("customers",e.customerId);return t?q(t):e.contactName||""}function Iu(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===nt())return n;let{start:a}=Dn(e),s=wi(a,nt()),i=Ec(a,nt());return s===e.start&&i===e.date?`${n} ${rs(e.timeZone,a)}`:`${n} ${rs(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${O(i)}`:""})`}function lp(e){let t=[...new Set([nt(),...Ks,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${rs(a,n)})${a===nt()?", dieses Gerät":""}`}))}function Ri({appointment:e,onClose:t}){let n=!v("appointments",e.id),[a,s]=k(()=>({...e})),[i,r]=k(!1),[o,c]=k(null),[p,d]=k(null),u=le(),m=T=>z=>s(H=>({...H,[T]:z})),g=w.customers.filter(T=>T.active!==!1||T.id===a.customerId).sort((T,z)=>q(T).localeCompare(q(z),"de")).map(T=>({id:T.id,label:q(T),sub:[T.kind==="contact"?"Kontakt":"Kunde",T.number,T.city].filter(Boolean).join(", "),search:`${T.firstName} ${T.lastName} ${T.contact} ${T.email}`}));function h(T){let z=v("companies",T),H=v("companies",a.companyId);s(E=>{let A={...E,companyId:T};if(!z)return A;let x=(S,K)=>!E[S]||H&&String(E[S])===String(H[K]||"");x("meetingProvider","meetingProvider")&&(A.meetingProvider=z.meetingProvider||""),x("meetingUrl","meetingUrl")&&(A.meetingUrl=z.meetingUrl||""),x("meetingDetails","meetingDetails")&&(A.meetingDetails=z.meetingDetails||""),z.meetingTimeZone&&(!E.timeZone||H&&E.timeZone===(H.meetingTimeZone||nt()))&&(A.timeZone=z.meetingTimeZone);let R=v("customers",E.customerId);return R&&R.language||(A.language=z.language||"de"),A})}function b(T){let z=v("customers",T),H=v("customers",a.customerId);s(E=>({...E,customerId:T||"",attendees:!E.attendees||H&&E.attendees===H.email?z&&z.email||"":E.attendees,language:z&&z.language?z.language:E.language}))}function y(T){s(z=>{let H=R=>{let[S,K]=String(R||"0:0").split(":").map(Number);return S*60+K},E=Math.max(H(z.end)-H(z.start),15),A=Math.min(H(T)+E,1439),x=/^\d\d:\d\d$/.test(T)?`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`:z.end;return{...z,start:T,end:x}})}async function f(){r(!0);let T=await U(()=>ai(a));r(!1),T&&(B(n?"Termin angelegt":"Termin gespeichert","good"),n?d(T):t(T))}async function $(){if(!await ue({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${O(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Wl(a.id),!0))&&(B("Termin gelöscht","good"),t())}if(p)return l`<${ao} appointment=${p} justCreated onClose=${()=>t(p)} />`;let I=v("customers",a.customerId),D=v("appointments",a.id);return l`<${Pe} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${f}
    footer=${l`
      ${!n&&l`<${wt} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>d(D||a)},D&&{label:D.status==="done"?"Dokumentation bearbeiten":"Termin dokumentieren",icon:"edit",onClick:()=>{t(),Bi(D)}},D&&D.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>dp(D,t)},D&&D.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await U(()=>ii(D.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:$}]} />`}
      <span class="spacer"></span>
      <${C} onClick=${()=>t()}>Abbrechen<//>
      <${C} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${D&&D.status!=="planned"&&l`<${Ce} tone=${D.status==="done"?"good":"warn"}>
      ${D.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${D.outcome?l`<div class="pre notice-sub">${D.outcome}</div>`:""}
      ${D.nextSteps?l`<div class="pre notice-sub">Nächste Schritte: ${D.nextSteps}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${se} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${h}
        placeholder="Unternehmen wählen" options=${u.map(T=>({id:T.id,label:T.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${ve} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${vt} id="appt-customer" options=${g} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${b} onCreate=${T=>c({company:T,kind:"contact"})} createLabel="als Kontakt anlegen" />
      <//>
      <${Z} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${m("contactName")}
        placeholder=${I?it(I)||q(I):"Name"} hint="Für die Anrede in der Einladung" />
      <${Z} class="span-6" label="Titel" value=${a.title} onInput=${m("title")}
        placeholder=${I?`Termin mit ${q(I)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${Me} class="span-2" label="Datum" value=${a.date} onInput=${m("date")} />
      <${Z} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${y} />
      <${Z} class="span-1" label="Ende" type="time" value=${a.end} onInput=${m("end")} />
      <${se} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${m("timeZone")} options=${lp(a.timeZone)}
        hint=${a.timeZone!==nt()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&wi(Dn(a).start,nt())!==a.start?`Bei dir: ${wi(Dn(a).start,nt())} Uhr`:""} />
      <${ve} class="span-4" label="Art">
        <${yt} label="Art des Termins" value=${a.kind} onChange=${m("kind")} options=${Fa} />
      <//>
      <${ve} class="span-2" label="Sprache der Einladung">
        <${yt} label="Sprache der Einladung" value=${a.language||"de"} onChange=${m("language")} options=${Tt} />
      <//>
      ${a.kind==="video"&&l`
        <${se} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${m("meetingProvider")}
          placeholder="Bitte wählen" options=${ia} />
        <${Z} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${m("meetingUrl")} placeholder="https://…"
          hint=${!a.meetingUrl&&a.companyId?"Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.":""} />
        <${ie} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${m("meetingDetails")} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind==="phone"&&l`<${Z} class="span-6" label="Telefon" value=${a.location} onInput=${m("location")} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind==="onsite"&&l`<${Z} class="span-6" label="Ort" value=${a.location} onInput=${m("location")} placeholder="Adresse oder Treffpunkt" />`}
      <${Z} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${m("attendees")}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${ie} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${m("agenda")} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${o&&l`<${Ia} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${T=>b(T.id)} />`}
  <//>`}var Eu=null,to=new Set,Nu=e=>{Eu=e;for(let t of to)t(e)};function Bi(e,t){Nu({appt:e,done:t})}function Tu(){let[e,t]=k(Eu);return ce(()=>(to.add(t),()=>to.delete(t)),[]),e?l`<${cp} key=${e.appt.id} appointment=${e.appt}
    onClose=${n=>{Nu(null),n&&e.done&&e.done(n)}} />`:null}function cp({appointment:e,onClose:t}){let n=v("appointments",e.id)||e,[a,s]=k(n.outcome||""),[i,r]=k(n.nextSteps||""),o=Se(V(),7),[c,p]=k([{key:1,title:"",due:o}]),[d,u]=k(!1),m=w.todos.filter(y=>y.appointmentId===n.id),g=(y,f)=>p($=>$.map(I=>I.key===y?{...I,...f}:I)),h=()=>p(y=>[...y,{key:Math.max(0,...y.map(f=>f.key))+1,title:"",due:o}]);async function b(){u(!0);let y=await U(()=>si(n.id,{outcome:a,nextSteps:i,todos:c}));u(!1),y&&(B(y.todos.length?`Termin dokumentiert, ${y.todos.length} ${y.todos.length===1?"To-do":"To-dos"} angelegt`:"Termin dokumentiert","good"),t(y.appointment))}return l`<${Pe} title="Termin dokumentieren" onClose=${()=>t()} size="lg" onSubmit=${b}
    footer=${l`<${C} onClick=${()=>t()}>Abbrechen<//><${C} variant="primary" type="submit" busy=${d}>Speichern<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${_i(n.companyId)}`}></span>
      <div><div class="strong">${n.title}</div>
        <div class="muted-text">${os(n.date)}, ${n.start}–${n.end}${rn(n)?` · ${rn(n)}`:""}</div></div>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Ergebnis / kurzes Statement" value=${a} onInput=${s} rows=${3}
        placeholder="Was wurde besprochen, wie ist es gelaufen?" />
      <${ie} class="span-6" label="Nächste Schritte" value=${i} onInput=${r} rows=${2}
        placeholder="z. B. Angebot bis Freitag, Folgetermin in zwei Wochen" />
    </div>
    <h3 class="sub-head">To-dos aus diesem Termin</h3>
    ${m.length>0&&l`<${Qn} items=${m} showCustomer=${!1} />`}
    <div class="doc-todos">
      ${c.map((y,f)=>l`<div class="doc-todo" key=${y.key}>
        <input class="input" placeholder="To-do, z. B. Angebot schicken" aria-label=${`To-do ${f+1}`} value=${y.title}
          onInput=${$=>g(y.key,{title:$.target.value})}
          onKeyDown=${$=>{$.key==="Enter"&&($.preventDefault(),y.title.trim()&&h())}} />
        <input class="input" type="date" aria-label=${`To-do ${f+1}: fällig am`} value=${y.due} onInput=${$=>g(y.key,{due:$.target.value})} />
        <${C} variant="ghost" small icon="trash" title="Zeile entfernen" disabled=${c.length===1&&!y.title}
          onClick=${()=>p($=>$.length===1?[{key:y.key+1,title:"",due:o}]:$.filter(I=>I.key!==y.key))} />
      </div>`)}
      <${C} small icon="plus" onClick=${h}>Weiteres To-do<//>
    </div>
    <p class="field-hint">To-dos erscheinen beim Kontakt, im Dashboard und unter „To-dos“. Leere Zeilen werden ignoriert.</p>
  <//>`}var no=(e=new Date)=>ks(w.appointments.filter(Ke).filter(t=>Nc(t,e)));async function up(e){await U(()=>ii(e.id,"done",""))&&B("Als stattgefunden vermerkt","good")}async function Mi(e,t){let n=t==="morning"?(()=>{let s=new Date;return s.setDate(s.getDate()+1),s.setHours(9,0,0,0),s})():new Date(Date.now()+t*36e5);await U(()=>Gl(e.id,n.toISOString()))&&B(`Erinnerung verschoben auf ${n.toLocaleString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})} Uhr`,"good")}function Au(){let e=no();return e.length?l`<section class="followups" aria-label="Termine nachbereiten">
    <div class="followups-head"><${W} name="calendar" /><strong>${e.length===1?"Ein Termin ist vorbei":`${e.length} Termine sind vorbei`}</strong>
      <span class="muted-text">Möchtest du Ergebnis, nächste Schritte oder To-dos festhalten?</span></div>
    <ul>
      ${e.slice(0,5).map(t=>l`<li key=${t.id}>
        <span class="followup-what" style=${`--chip:${_i(t.companyId)}`}>
          <span class="strong">${t.title}</span>
          <span class="cell-sub">${O(t.date)}, ${t.start}–${t.end}${rn(t)?` · ${rn(t)}`:""}</span>
        </span>
        <span class="followup-actions">
          <${C} small variant="primary" icon="edit" onClick=${()=>Bi(t)}>Ja, dokumentieren<//>
          <${C} small onClick=${()=>up(t)}>Nein<//>
          <${wt} small label="Später" icon="clock" items=${[{label:"In einer Stunde",onClick:()=>Mi(t,1)},{label:"In drei Stunden",onClick:()=>Mi(t,3)},{label:"Morgen früh",onClick:()=>Mi(t,"morning")},{label:"In drei Tagen",onClick:()=>Mi(t,72)}]} />
        </span>
      </li>`)}
    </ul>
    ${e.length>5&&l`<p class="cell-sub">und ${e.length-5} weitere im Kalender</p>`}
  </section>`:null}async function dp(e,t){let n=await ue({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await U(()=>ii(e.id,"cancelled",n));a&&(B("Termin abgesagt","good"),t&&t(a))}async function mp(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function Cu(e){return`${Yt(`Termin ${e.date} ${e.start.replace(":","-")} ${rn(e)||e.title||""}`.trim())}.ics`}function ao({appointment:e,onClose:t,justCreated:n}){let a=v("companies",e.companyId),s=v("customers",e.customerId),i=De(()=>Tc(e,{company:a,customer:s,settings:w.settings}),[e.id,e.updatedAt]),[r,o]=k(e.attendees||s&&s.email||""),[c,p]=k(i.subject),[d,u]=k(i.body),[m,g]=k(""),h=typeof navigator<"u"&&!!navigator.canShare,b=()=>new Blob([Ac(e,{summary:c,description:d})],{type:"text/calendar;charset=utf-8"});function y(){et(b(),Cu(e))}async function f(){let D=await mp(`${c}

${d}`);B(D?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",D?"good":"bad")}function $(){let D=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`;ma(),window.location.href=D}async function I(){g("share"),await U(async()=>{let D=new File([b()],Cu(e),{type:"text/calendar"});if(!navigator.canShare({files:[D]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[D],title:c,text:d})}catch(T){if(!T||T.name!=="AbortError")throw T}}),g("")}return l`<${Pe} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${C} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${os(e.date)}, ${Iu(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${xa(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${Ce} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${Z} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${Z} class="span-6" label="Betreff" value=${c} onInput=${p} />
      <${ie} class="span-6" label="Text" value=${d} onInput=${u} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${C} icon="calendar" onClick=${y}>Kalenderdatei herunterladen<//>
      <${C} icon="copy" onClick=${f}>Text kopieren<//>
      <${C} icon="mail" onClick=${$} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${h&&l`<${C} icon="send" busy=${m==="share"} onClick=${I}>Teilen<//>`}
    </div>
  <//>`}function pp(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function fp({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${_i(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${rn(e)?` (${rn(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function Ru({params:e}){ge();let t=V(),[n,a]=k("month"),[s,i]=k(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=k(()=>e&&e.open&&v("appointments",e.open)?v("appointments",e.open):null),[c,p]=k(!1),[d,u]=k(""),m=me(),g=ks(w.appointments.filter(Ke)).filter(D=>!d||Ee(d,D.title,rn(D),D.agenda,D.outcome)),h=new Map;for(let D of g)h.has(D.date)||h.set(D.date,[]),h.get(D.date).push(D);function b(D){let T=m||(le().length===1?le()[0]:le()[0]);o(la(T,{date:D||t}))}let y=D=>i(T=>{let z=new Date(Date.UTC(T.y,T.m+D,1));return{y:z.getUTCFullYear(),m:z.getUTCMonth()}}),f=pp(s.y,s.m),$=g.filter(D=>D.date>=t),I=g.filter(D=>D.date<t).reverse();return l`
    <${we} title="Termine" sub=${m?`Termine über ${m.name}`:"Alle Termine aller Unternehmen"}>
      <${yt} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${C} variant="primary" icon="plus" onClick=${()=>b(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${C} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>y(-1)} />
        <h2 class="cal-title">${Su[s.m]} ${s.y}</h2>
        <${C} small icon="chevronRight" title="Nächster Monat" onClick=${()=>y(1)} />
        <${C} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${le().map(D=>l`<span class="cal-legend-item"><i style=${`background:${D.brandColor}`}></i>${D.shortName||D.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${Su[s.m]} ${s.y}`}>
        ${op.map(D=>l`<div class="cal-wd" role="columnheader">${D}</div>`)}
        ${f.map(D=>{let T=h.get(D.iso)||[];return l`<div role="gridcell" class=${`cal-day${D.inMonth?"":" is-out"}${D.iso===t?" is-today":""}`}
            onClick=${()=>b(D.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(D.iso.slice(8,10))}</span>
            ${T.slice(0,3).map(z=>l`<${fp} key=${z.id} a=${z} onOpen=${o} />`)}
            ${T.length>3&&l`<button type="button" class="cal-more" onClick=${z=>{z.stopPropagation(),a("list")}}>+${T.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${d} onInput=${D=>u(D.target.value)} />
        <${St} label="Zeitraum" value=${c?"past":"next"} onChange=${D=>p(D==="past")}
          options=${[{id:"next",label:"Anstehend",count:$.length},{id:"past",label:"Vergangen",count:I.length}]} />
      </div>
      ${(c?I:$).length?l`<${Ui} items=${c?I:$} onOpen=${o} showCustomer />`:l`<${pe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${C} variant="primary" icon="plus" onClick=${()=>b(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${Ri} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function Ui({items:e,onOpen:t,showCustomer:n,compact:a}){let s=V(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=ra[r.status]||ra.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Se(s,1)?"Morgen, ":""}${os(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${_i(r.companyId)}`}>
            <span class="appt-time">${a?l`${O(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${ze} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&rn(r),r.kind==="video"?xa(r.meetingProvider)||"Videocall":(Fa.find(p=>p.id===r.kind)||{}).label,r.timeZone!==nt()?Iu(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Le} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function Bu(){let[e,t]=k(null),n=V(),a=Se(n,14),s=new Date,i=ks(w.appointments.filter(Ke).filter(r=>r.status==="planned"&&r.date>=n&&r.date<=a&&Dn(r).end>s)).slice(0,6);return i.length?l`<${J} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${Ui} items=${i} onOpen=${t} showCustomer />
    ${e&&l`<${Ri} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:l`<${J} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
      <p class="muted-text">Keine Termine in den nächsten 14 Tagen.</p>
    <//>`}var Uu=(e,t)=>(e.find(n=>n.id===t)||{}).label||"",so=e=>(v("companies",e)||{}).name||"";function Ds(e,t){if(!e)return"";if(e.startsWith("ref:")){let n=t.actions.find(a=>a.type==="contact"&&a.ref===e.slice(4));return n?`${q(n)||"neuer Kontakt"} (neu)`:"neuer Kontakt"}return q(v("customers",e))}var gp=(e,t)=>{let[n,a]=e.split(":").map(Number),s=Math.min(n*60+a+t,1439);return`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`};async function hp(e){let t=[],n={},a=i=>i&&i.startsWith("ref:")?n[i.slice(4)]||"":i||"",s=[...e.actions.filter(i=>i.type==="contact"),...e.actions.filter(i=>i.type!=="contact")];for(let i of s)if(!i.off)try{if(i.type==="contact"){let r=await Gn(Ot({kind:i.kind,company:i.company,firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone,city:i.city,notes:i.notes}));n[i.ref]=r.id,t.push({ok:!0,text:`${i.kind==="customer"?"Kunde":"Kontakt"} ${q(r)} (${r.number}) angelegt`,href:`/customers/${r.id}`})}else if(i.type==="todos"){let r=i.items.filter(o=>!o.off);for(let o of r)await Qa(Bn({title:o.title,due:o.due,customerId:a(o.customerId),companyId:o.companyId}));r.length&&t.push({ok:!0,text:`${r.length} ${r.length===1?"To-do":"To-dos"} angelegt`,href:"/todos"})}else if(i.type==="appointment"){let r=v("companies",i.companyId),o=la(r,{start:i.start||"10:00"}),c=v("customers",a(i.customerId)),p=await ai({...o,customerId:c?c.id:"",contactName:i.contactName,title:i.title,date:i.date||V(),end:i.duration?gp(i.start,i.duration):o.end,kind:i.kind,location:i.location,agenda:i.agenda,attendees:c&&c.email?c.email:"",language:c&&c.language?c.language:o.language});t.push({ok:!0,text:`Termin „${p.title}“ am ${O(p.date)} um ${p.start} Uhr angelegt`,appointment:p})}else if(i.type==="note"){let r=await ni(Fs({customerId:a(i.customerId),kind:i.kind,title:i.title,text:i.text,date:i.date||V()}));t.push({ok:!0,text:`Notiz bei ${q(v("customers",r.customerId))} eingetragen`,href:`/customers/${r.customerId}`})}else if(i.type==="document"){let r=await si(i.appointmentId,{outcome:i.outcome,nextSteps:i.nextSteps,todos:i.todos.filter(o=>!o.off)});t.push({ok:!0,text:`Termin „${r.appointment.title}“ dokumentiert${r.todos.length?`, ${r.todos.length} To-dos`:""}`,href:r.appointment.customerId?`/customers/${r.appointment.customerId}`:"/appointments"})}else if(i.type==="invoice"){let r=v("companies",i.companyId),o=v("customers",a(i.customerId)),c=dt(r);c.customerId=o.id,o.currency&&_e.includes(o.currency)&&(c.currency=o.currency),o.language&&(c.language=o.language),o.paymentTermDays!=null&&o.paymentTermDays!==""&&(c.paymentTermDays=Number(o.paymentTermDays)),c.items=i.items.map(d=>{let u=d.serviceId?v("services",d.serviceId):null;return{...u?ot(u,r):Rt({name:d.name,taxRate:Number(r.defaultTaxRate)||0}),qty:d.qty,...d.priceCents!=null?{priceCents:d.priceCents}:{},...d.name&&!u?{name:d.name}:{}}});let p=await $a(c);t.push({ok:!0,text:`Rechnungsentwurf für ${q(o)} angelegt (${j(p.totals.totalCents,p.currency)})`,href:`/invoices/${p.id}/edit`})}}catch(r){t.push({ok:!1,text:r.message||String(r)})}return t}function $p({a:e,plan:t,onToggle:n,onToggleItem:a}){let s=(o,c)=>l`<div class="voice-action-head">
    <input type="checkbox" checked=${!e.off} onChange=${n} aria-label=${`${c} ausführen`} />
    <${W} name=${o} size=${16} /><span>${c}</span></div>`,i=null,r="";if(e.type==="todos")return r=`${e.items.length} ${e.items.length===1?"To-do":"To-dos"}`,i=l`<ul>${e.items.map((o,c)=>l`<li key=${c}><label>
      <input type="checkbox" checked=${!o.off} onChange=${()=>a(c)} />
      <span><strong>${o.title}</strong>${o.due?` · bis ${O(o.due)}`:""}${o.customerId?` · ${Ds(o.customerId,t)}`:""}${o.companyId?` · ${so(o.companyId)}`:""}</span></label></li>`)}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("check",r)}${i}${Ea(e)}</div>`;if(e.type==="appointment")return r=`Termin: ${e.title||(e.customerId?`Termin mit ${Ds(e.customerId,t)}`:"ohne Titel")}`,i=l`<ul>
      <li>${e.date?O(e.date):"–"}, ${e.start||"–"} Uhr${e.duration?`, ${e.duration} Min.`:""} · ${Uu(Fa,e.kind)}</li>
      <li>Über ${so(e.companyId)||"–"}${e.customerId?` · mit ${Ds(e.customerId,t)}`:""}${e.contactName?` (${e.contactName})`:""}</li>
      ${e.location&&l`<li>${e.location}</li>`}
      ${e.agenda&&l`<li>Themen: ${e.agenda}</li>`}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("calendar",r)}${i}${Ea(e)}</div>`;if(e.type==="note")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("note",`${Uu(oa,e.kind)} bei ${Ds(e.customerId,t)}`)}
      <ul><li>${e.title&&l`<strong>${e.title}: </strong>`}${e.text}</li></ul>${Ea(e)}</div>`;if(e.type==="contact")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("customers",`Neuer ${e.kind==="customer"?"Kunde":"Kontakt"}: ${q(e)||"–"}`)}
      <ul><li>${[e.firstName&&`${e.firstName} ${e.lastName}`,e.email,e.phone,e.city].filter(Boolean).join(" · ")||"keine weiteren Angaben"}</li></ul>${Ea(e)}</div>`;if(e.type==="document"){let o=v("appointments",e.appointmentId);return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("edit",`Termin dokumentieren: ${o?`${o.title}, ${O(o.date)}`:""}`)}
      <ul>${e.outcome&&l`<li>Ergebnis: ${e.outcome}</li>`}${e.nextSteps&&l`<li>Nächste Schritte: ${e.nextSteps}</li>`}
        ${e.todos.map((c,p)=>l`<li key=${p}><label><input type="checkbox" checked=${!c.off} onChange=${()=>a(p)} />
          <span>To-do: <strong>${c.title}</strong>${c.due?` · bis ${O(c.due)}`:""}</span></label></li>`)}</ul>${Ea(e)}</div>`}return e.type==="invoice"?l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("invoice",`Rechnungsentwurf für ${Ds(e.customerId,t)} über ${so(e.companyId)}`)}
      <ul>${e.items.map((o,c)=>{let p=o.serviceId?v("services",o.serviceId):null;return l`<li key=${c}>${o.qty} × ${p?p.name:o.name}${o.priceCents!=null?` à ${j(o.priceCents,(v("companies",e.companyId)||{}).currency||"USD")}`:p?` à ${j(p.priceCents,p.currency||"USD")}`:""}</li>`})}</ul>
      <p class="field-hint">Nur Entwurf – du prüfst und erstellst ihn danach im Editor.</p>${Ea(e)}</div>`:null}var Ea=e=>e.warnings&&e.warnings.length?l`<p class="field-hint tone-warn">${e.warnings.join(" ")}</p>`:null;function bp({onClose:e}){let[t,n]=k(""),[a,s]=k(""),[i,r]=k(!1),[o,c]=k(""),[p,d]=k(null),[u,m]=k(null),[g,h]=k(null),b=ke(null),y=ke("");y.current=t;let f=!!w.settings.aiApiKey,$=ja();function I(){if(i){b.current&&b.current();return}try{b.current=Js({onFinal:x=>n(R=>Xs(R,x)),onInterim:s,onEnd:()=>{r(!1),s(""),b.current=null},onError:x=>B(x,"bad",8e3)}),r(!0),d(null),m(null)}catch(x){B(x.message||String(x),"bad")}}ce(()=>($&&f&&I(),()=>{b.current&&b.current()}),[]),ce(()=>{let x=R=>{R.key==="Escape"&&!document.querySelector(".modal-backdrop")&&e()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e]);async function D(){b.current&&b.current();let x=y.current.trim();if(!x){B("Bitte zuerst etwas sagen oder eintippen.","info");return}c("ai");let R=yc({customers:w.customers,companies:w.companies,services:w.services,appointments:w.appointments,todos:w.todos},{today:V(),timeZone:nt()}),S=await U(()=>vc({apiKey:w.settings.aiApiKey,model:w.settings.aiModel,text:x,context:R.text,map:R.map}));c(""),S&&(d(S),m(null))}async function T(){c("run");let x=await hp(p);c(""),m(x),d(null);let R=x.filter(S=>S.ok).length;R&&B(`${R} ${R===1?"Eintrag":"Einträge"} angelegt`,"good")}let z=x=>d(R=>({...R,actions:R.actions.map((S,K)=>K===x?{...S,off:!S.off}:S)})),H=(x,R)=>d(S=>({...S,actions:S.actions.map((K,P)=>{if(P!==x)return K;let _=K.type==="todos"?"items":"todos";return{...K,[_]:K[_].map((ee,N)=>N===R?{...ee,off:!ee.off}:ee)}})})),E=p?p.actions.filter(x=>!x.off).length:0,A=l`
      ${!u&&!p&&l`<${C} variant="primary" icon="sparkle" busy=${o==="ai"} disabled=${!f||!t.trim()} onClick=${D}>Verstehen<//>`}
      ${p&&l`<${C} onClick=${()=>d(null)}>Ändern<//>`}
      ${p&&p.actions.length>0&&l`<${C} variant="primary" icon="check" busy=${o==="run"} disabled=${!E} onClick=${T}>Ausführen<//>`}
      ${u&&l`<${C} onClick=${e}>Fertig<//>`}
      ${u&&l`<${C} variant="primary" icon="mic" onClick=${()=>{n(""),m(null),I()}}>Nächster Befehl<//>`}`;return l`<section class="voice-panel" role="dialog" aria-label="Sprachbefehl">
    <header class="voice-panel-head">
      <span class=${`voice-panel-dot${i?" is-on":""}`}><${W} name="mic" size=${15} /></span>
      <strong>Sprachbefehl</strong>
      ${i&&l`<span class="voice-panel-live">hört zu</span>`}
      <button type="button" class="voice-panel-close" onClick=${e} title="Schließen" aria-label="Schließen"><${W} name="x" size=${17} /></button>
    </header>
    <div class="voice-panel-body">
      ${!f&&l`<${Ce} tone="warn">Sprachbefehle laufen über die Anthropic-API. Trage dafür unter Einstellungen den API-Key ein (derselbe wie für die Belegerkennung).<//>`}
      ${!u&&!p&&l`
        <div class="voice-stage">
          ${$?l`<button type="button" class=${`mic-btn${i?" is-on":""}`} onClick=${I} aria-pressed=${i}
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
          ${p.actions.map((x,R)=>l`<${$p} key=${R} a=${x} plan=${p} onToggle=${()=>z(R)} onToggleItem=${S=>H(R,S)} />`)}
        </div>`}
      ${u&&l`<ul class="voice-done">
        ${u.map(x=>l`<li class=${x.ok?"":"tone-bad"}>${x.ok?"✓":"✕"} ${x.text}
          ${x.href&&l` · <a href=${`#${x.href}`}>Öffnen</a>`}
          ${x.appointment&&l` · <button type="button" class="link-btn" onClick=${()=>h(x.appointment)}>Einladung</button>`}</li>`)}
      </ul>`}
    </div>
    <footer class="voice-panel-foot">${A}</footer>
  </section>
  ${g&&l`<${ao} appointment=${g} justCreated onClose=${()=>h(null)} />`}`}var ro=!1,io=new Set;function Mu(e){ro=e,io.forEach(t=>t(e))}var yp=()=>Mu(!ro);function _u(){let[e,t]=k(ro);return ce(()=>(io.add(t),()=>io.delete(t)),[]),e}function zu(){return _u()?l`<${bp} onClose=${()=>Mu(!1)} />`:null}function Lu(){let e=_u();return l`<button type="button" class=${`backup-btn voice-btn${e?" is-open":""}`} onClick=${yp} aria-pressed=${e}
    title="Sprachbefehl: To-dos, Termine, Notizen per Sprache">
    <${W} name="mic" /><span>Sprechen</span>
  </button>`}async function oo(){w.companies.length||(await Wa(Ka({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await Wa(Ka({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await Q(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function Pu(){w.settings.seeded||w.companies.length||await oo()}function vp(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Ss(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=vp();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function wp(){let e=ke(null),[t,n]=k(0);return Ji(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function xp(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,p=Math.ceil(Math.max(t,0)/o)*o,d=[];for(let u=c;u<=p+o/2;u+=o)d.push(Math.round(u/o)*o);return{lo:c,hi:p,step:o,ticks:d}}function lo(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function Cs({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=wp(),[p,d]=k(null),u={top:12,right:8,bottom:26,left:56},m=0,g=0;for(let A of e)if(n==="stacked"){let x=0,R=0;for(let S of t){let K=A.values[S.id]||0;K>=0?x+=K:R+=K}m=Math.max(m,x),g=Math.min(g,R)}else for(let x of t){let R=A.values[x.id]||0;m=Math.max(m,R),g=Math.min(g,R)}let h=xp(g,m),b=Math.max(c-u.left-u.right,10),y=i-u.top-u.bottom,f=A=>u.top+y-(A-h.lo)/(h.hi-h.lo||1)*y,$=b/Math.max(e.length,1),I=f(0),D=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(b/46)))),T=[];e.forEach((A,x)=>{let R=u.left+x*$;if(n==="stacked"){let S=Math.min(24,Math.max($-10,3)),K=R+($-S)/2,P=I,_=I,ee=t.filter(fe=>(A.values[fe.id]||0)!==0),N=[...ee].reverse().find(fe=>A.values[fe.id]>0),X=[...ee].reverse().find(fe=>A.values[fe.id]<0);for(let fe of ee){let F=A.values[fe.id],Be=Math.abs(f(F)-I);if(F>0){let qe=P-Be,Jn=N&&N.id===fe.id,Vi=Jn?0:Math.min(2,Be-1);T.push({d:Jn?lo(K,qe,S,Be,4,!0):`M${K},${qe+Vi}H${K+S}V${P}H${K}Z`,color:fe.color,key:`${A.key}-${fe.id}`}),P=qe}else{let qe=X&&X.id===fe.id,Jn=qe?0:Math.min(2,Be-1);T.push({d:qe?lo(K,_,S,Be,4,!1):`M${K},${_}H${K+S}V${_+Be-Jn}H${K}Z`,color:fe.color,key:`${A.key}-${fe.id}`}),_+=Be}}}else{let S=t.length,K=Math.min(18,Math.max(($-10-(S-1)*2)/S,2)),P=S*K+(S-1)*2;t.forEach((_,ee)=>{let N=A.values[_.id]||0;if(!N)return;let X=Math.abs(f(N)-I),fe=R+($-P)/2+ee*(K+2);T.push({d:lo(fe,N>0?I-X:I,K,X,4,N>0),color:_.color,key:`${A.key}-${_.id}`})})}});let z=p!=null?e[p]:null,H=p!=null?u.left+p*$+$/2:0,E=H>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${h.ticks.map(A=>l`<g key=${A}>
        <line x1=${u.left} x2=${c-u.right} y1=${f(A)} y2=${f(A)} class=${A===0?"chart-base":"chart-grid"} />
        <text x=${u.left-8} y=${f(A)+4} text-anchor="end" class="chart-tick">${(s||a)(A)}</text>
      </g>`)}
      ${p!=null&&l`<rect x=${u.left+p*$} y=${u.top} width=${$} height=${y} class="chart-hover" />`}
      ${T.map(A=>l`<path key=${A.key} d=${A.d} fill=${A.color} />`)}
      ${e.map((A,x)=>x%D===0&&l`<text key=${A.key} x=${u.left+x*$+$/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${A.label}</text>`)}
      ${e.map((A,x)=>l`<rect key=${`hit-${A.key}`} x=${u.left+x*$} y=${u.top} width=${$} height=${y+u.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${A.title||A.label}: ${t.map(R=>`${R.label} ${a(A.values[R.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>d(x)} onMouseLeave=${()=>d(null)}
        onFocus=${()=>d(x)} onBlur=${()=>d(null)} />`)}
    </svg>`}
    ${z&&l`<div class=${`chart-tip${E?" is-left":""}`} style=${`left:${H}px;top:${u.top}px`}>
      <div class="chart-tip-title">${z.title||z.label}</div>
      ${t.filter(A=>t.length===1||(z.values[A.id]||0)!==0).map(A=>l`<div class="chart-tip-row" key=${A.id}>
        <span class="chart-key" style=${`background:${A.color}`}></span>
        <strong>${a(z.values[A.id]||0)}</strong><span>${A.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((A,x)=>A+(z.values[x.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function kp({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function Is({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=k(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${kp} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,p)=>l`<td class=${p?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function on({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}async function zi(e,t){let n=Ct(e,t),a=await ka(us(n));return et(a,n.fileName),{blob:a,model:n}}function Dp(e,t){let n=e.snapshot&&e.snapshot.company||v("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||v("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?nn(e,We(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:O(e.issueDate,s),DUE:O(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:ga(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:ga(i,e.currency,s),CONTACT:it(a)||q(a),CUSTOMER:q(a),SENDER:w.settings.userName?`${w.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function Sp(e){let n=hn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,xt.length)}function Es(e,t){if(!(t>0))return 0;let n=w.settings.reminderDays||[7,14,21],a=hn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return xt.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function Ku(e){return[...hn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function Na({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=Dp(e,t),[o,c]=k(()=>n==="reminder"?Sp(e.id):0),p=S=>n==="reminder"?((w.settings.reminderTemplates||{})[s]||{})[S]||{subject:"",body:""}:((w.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[d,u]=k(i),[m,g]=k(()=>Dt(p(o).subject,r)),[h,b]=k(()=>Dt(p(o).body,r)),[y,f]=k(""),[$,I]=k(null),D=typeof navigator<"u"&&!!navigator.canShare;function T(S){let K=Number(S);c(K),g(Dt(p(K).subject,r)),b(Dt(p(K).body,r))}async function z(){if($)return $;let S=Ct(e,t),P={blob:await ka(us(S)),name:S.fileName};return I(P),P}async function H(){f("pdf"),await U(async()=>{let S=await z();et(S.blob,S.name)}),f("")}function E(){let S=`mailto:${encodeURIComponent(d.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(h)}`;ma(),window.location.href=S}async function A(){f("share"),await U(async()=>{let S=await z(),K=new File([S.blob],S.name,{type:"application/pdf"});if(!navigator.canShare({files:[K]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[K],title:m,text:h})}catch(P){if(P&&P.name==="AbortError")return;throw P}}),f("")}async function x(){f("done");let S=await U(async()=>(n==="reminder"?await $c(e.id,o,m):t==="quotes"?await Wn(e.id,"sent"):await jn(e.id,!0),!0));f(""),S&&(B(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let R=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${Pe} title=${R} onClose=${a} size="lg"
    footer=${l`
      <${C} onClick=${a}>Schließen<//>
      <${C} variant="primary" icon="check" busy=${y==="done"} onClick=${x}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${Ce} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${se} class="span-2" label="Stufe" value=${o} onChange=${T}
        options=${xt.map(S=>({id:S.id,label:S.label}))} />`}
      <${Z} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${d} onInput=${u}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${Z} class="span-6" label="Betreff" value=${m} onInput=${g} />
      <${ie} class="span-6" label="Text" value=${h} onInput=${b} rows=${10} />
    </div>
    <div class="send-steps">
      <${C} icon="download" busy=${y==="pdf"} onClick=${H}>PDF herunterladen<//>
      <${C} icon="mail" onClick=${E} disabled=${!d.trim()}>E-Mail-Programm öffnen<//>
      ${D&&l`<${C} icon="send" busy=${y==="share"} onClick=${A}>Mit PDF teilen<//>`}
    </div>
  <//>`}var Cp=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],Ip=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],Ep=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],Np=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],Tp=e=>.86+e*37%7/100,Ta=(e,t,n)=>{let a=Tp(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:qt(e,a,s)};function Li(){return dl(Ap)}async function Ap(){if(w.invoices.length||w.customers.length||w.expenses.length||w.services.length)throw new Ie("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=le();if(!e.length)throw new Ie("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=V(),a=[];for(let m of Cp)a.push(await Gn(Ot(m)));let s=[];for(let m of Ip)s.push(await ri(pn({...m,currency:"USD"})));let i=[];for(let[m,g,h,b,y,f,$]of Ep){let I=t(h),D=a[b],T=Et(n.slice(0,8)+"01",-m,g);T>n&&(T=n);let z=D.currency||"USD",H=Ta(z,m,T),E=y.map(([S,K])=>{let P=ot(s[S],I),_=z==="EUR"?Math.round(P.priceCents*H.usdToEur/500)*500:P.priceCents;return{...P,qty:K,priceCents:_}}),A={...dt(I),customerId:D.id,issueDate:T,serviceDate:T,paymentTermDays:D.paymentTermDays!=null&&D.paymentTermDays!==""?Number(D.paymentTermDays):14,currency:z,language:D.language||I.language,items:E,discount:{type:"pct",value:$},fx:H},x=await Ja(A);i.push({inv:x,pay:f,back:m}),(m>0||f!=="none")&&await jn(x.id,!0);let R=x.totals.totalCents;if(f==="full"){let S=Se(T,9+g%9);await Xa(x.id,{date:S>n?n:S,amountCents:R,method:"Überweisung",note:""})}else if(f==="half"){let S=Se(T,12);await Xa(x.id,{date:S>n?n:S,amountCents:Math.round(R/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(m,g,h)=>{let b=Et(n.slice(0,8)+"01",-h,14),y=m.currency||"USD",f=Ta(y,h,b),$=ot(s[g],r);return Ja({...dt(r),customerId:m.id,issueDate:b,serviceDate:b,currency:y,language:m.language||"de",paymentTermDays:14,items:[{...$,priceCents:y==="EUR"?Math.round($.priceCents*f.usdToEur/500)*500:$.priceCents}],fx:f})},c=await o(a[3],2,4);await ci(c.id,"Beispiel: doppelt ausgestellt");let p=await o(a[4],6,3);await ui(p.id,"Beispiel: Leistung wurde nicht erbracht."),await $a({...dt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...ot(s[4],t(1)),qty:6}],fx:Ta("USD",0,n)});let d=await es({...Un(t(0)),customerId:a[1].id,issueDate:Se(n,-6),validUntil:Se(n,24),currency:"EUR",language:"de",fx:Ta("EUR",0,n),items:[{...ot(s[0],t(0)),priceCents:42e4},{...ot(s[1],t(0)),qty:6,priceCents:85e3}]});await Wn(d.id,"sent");let u=await es({...Un(t(1)),customerId:a[5].id,issueDate:Se(n,-20),validUntil:Se(n,10),currency:"USD",language:"en",fx:Ta("USD",0,n),items:[{...ot(s[5],t(1))}]});await Wn(u.id,"accepted"),await ts(Mn(t(1),{customerId:a[5].id,title:u.items[0].name,quoteId:u.id,status:"open",billing:"once",amountCents:u.totals.netCents,currency:"USD",taxRate:Number(u.items[0].taxRate)||0})),await ts(Mn(t(0),{customerId:a[2].id,title:"SEO-Betreuung",refNumber:"V-2025-07",status:"signed",billing:"monthly",signedDate:Et(n,-11),startDate:Se(Et(n,-11),1),endDate:Se(n,25),noticePeriod:"1 Monat zum Laufzeitende",amountCents:s[1].priceCents,currency:"USD",notes:"Beispiel: läuft in Kürze aus – Verlängerung ansprechen."}));for(let[m,g,h,b,y,f,$,I,D]of Np){let T=Se(n,-m);await wn(Va({companyId:t(g).id,vendor:h,category:b,description:y,currency:f,invoiceDate:T,paymentDate:Se(T,2)>n?n:Se(T,2),netCents:$,taxCents:I,totalCents:$+I,paymentMethod:D,fx:Ta(f,Math.floor(m/30),T)}))}return await ns({...fn(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[ot(s[1],t(0)),ot(s[2],t(0))]}),await ns({...fn(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:Et(n,4),items:[{...ot(s[3],t(0)),qty:12,priceCents:3e3}]}),await Q(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:i.length}}async function Fu(){let e=new Set(["companies","assets","settings"]);await _n(Bt,async t=>{for(let n of Bt)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await Ln(),Za()}function Rp(){let e=le(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:w.customers.length>0,label:"Ersten Kontakt anlegen",text:"Kunden und Kontakte gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:w.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:w.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=k(!1);async function i(){s(!0);let r=await U(async()=>(await Li(),!0));s(!1),r&&B("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
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
  </section>`}var co=e=>[...e].sort((t,n)=>M(n)-M(t));function Ou(){ge();let e=V(),t=me(),n=ft(),a=sn(),s=le(),i=De(()=>{let E=el(12,e),A=$t("year",e);return{kpi:Oc(a,n,e),months:E,series:ds(a,{companyId:n,months:E}),byCustomer:ms(a,{companyId:n,range:A}),byService:fs(a,{companyId:n,range:A}),byCompany:ps(a,{range:A}),rec:Cn(a,{companyId:n},e)}},[w.version,n,e]),r=re();if(!(w.invoices.length||w.expenses.length||w.customers.length||w.services.length))return l`<${Rp} />`;let{kpi:c}=i,p=Kt(e.slice(0,7)),d=i.rec.filter(E=>E.status==="overdue"),u=i.rec.filter(E=>E.status!=="overdue"&&E.inv.dueDate&&E.inv.dueDate<=Se(e,7)),m=w.recurring.filter(Ke).filter(E=>ba(E,e)),g=w.expenses.filter(E=>E.status==="review"&&(Ke(E)||!E.companyId)),h=w.invoices.filter(Ke).filter(E=>E.status==="draft"),b=h.filter(E=>E.number),y=h.filter(E=>!E.number),f=w.invoices.filter(Ke).filter(E=>E.clarify&&E.status!=="draft"),$=w.quotes.filter(Ke).filter(E=>["open","sent"].includes(_t(E,e))&&E.validUntil&&E.validUntil<=Se(e,7)),I=w.contracts.filter(Ke).filter(E=>Hr(E,e,30)||jr(E,e)),D=!t&&s.length>1,T=D?s.map(E=>({id:E.id,label:E.shortName||E.name,color:Ss(E.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],z=i.series.map(E=>({key:E.key,label:na(E.key),title:Kt(E.key),values:D?E[`byCompany${re()}`]:{rev:M(E,"revenue")}})),H={columns:["Monat",...D?T.map(E=>E.label):[],`Umsatz (${re()})`,`Umsatz (${re()==="USD"?"EUR":"USD"})`],rows:i.series.map(E=>[Kt(E.key),...D?T.map(A=>ae(E[`byCompany${re()}`][A.id]||0)):[],ae(M(E,"revenue")),Oe(Ne(E,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${p}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${ae(M(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${Oe(Ne(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${ae(M(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <${Au} />

    <div class="stat-row">
      <${Fe} label="Umsatz Quartal" value=${ae(M(c.quarter))} sub=${`≈ ${Oe(Ne(c.quarter))}`} />
      <${Fe} label="Umsatz Jahr" value=${ae(M(c.year))} sub=${`≈ ${Oe(Ne(c.year))}`} />
      <${Fe} label="Offene Rechnungen" value=${ae(M(c.open))} sub=${`${c.open.count} offen, ≈ ${Oe(Ne(c.open))}`} href="#/invoices?status=open" />
      <${Fe} label="Überfällig" value=${ae(M(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${Oe(Ne(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Fe} label="Bezahlt dieses Jahr" value=${ae(M(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Fe} label="Rechnung im Schnitt" value=${ae(M(c.average))} sub=${`≈ ${Oe(Ne(c.average))}`} />
      <${Fe} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-crm">
      <${xc} />
      <${Bu} />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${Is} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${re()}, nach Rechnungsdatum`} series=${T} table=${H}>
          <${Cs} groups=${z} series=${T} mode="stacked"
            format=${E=>ae(E)} axisFormat=${E=>Ha(E,re())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${J} title="Zu erledigen" class="dash-side">
        ${d.length+u.length+m.length+g.length+h.length+$.length+f.length+I.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${d.slice(0,5).map(E=>l`<li key=${E.inv.id}>
              <a href=${`#/invoices/${E.inv.id}`}>
                <span class="todo-icon tone-bad"><${W} name="bad" /></span>
                <span class="todo-text"><strong>${E.inv.number}</strong> ${Ve(E.inv)}
                  <span class="cell-sub">seit ${E.overdueDays} ${E.overdueDays===1?"Tag":"Tagen"} überfällig${Es(E.inv,E.overdueDays)?`, ${(xt.find(A=>A.id===Es(E.inv,E.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${j(E.openCents,E.inv.currency)}</span>
              </a>
            </li>`)}
            ${d.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${d.length-5} weitere überfällige Rechnungen</a></li>`}
            ${u.slice(0,3).map(E=>l`<li key=${E.inv.id}>
              <a href=${`#/invoices/${E.inv.id}`}>
                <span class="todo-icon tone-warn"><${W} name="clock" /></span>
                <span class="todo-text"><strong>${E.inv.number}</strong> ${Ve(E.inv)}
                  <span class="cell-sub">fällig am ${O(E.inv.dueDate)}</span></span>
                <span class="todo-amount">${j(E.openCents,E.inv.currency)}</span>
              </a>
            </li>`)}
            ${f.slice(0,5).map(E=>l`<li key=${`c-${E.id}`}><a href=${`#/invoices/${E.id}`}>
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${E.number}</strong> ${Ve(E)}
                <span class="cell-sub">Klärung nötig: ${E.clarify.note}</span></span></a></li>`)}
            ${f.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${f.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${b.slice(0,5).map(E=>l`<li key=${E.id}><a href=${`#/invoices/${E.id}/edit`}>
              <span class="todo-icon tone-warn"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${E.number}</strong> ${Ve(E)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${m.length>0&&l`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${W} name="repeat" /></span>
              <span class="todo-text"><strong>${m.length} wiederkehrende ${m.length===1?"Rechnung":"Rechnungen"}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${g.length>0&&l`<li><a href="#/expenses">
              <span class="todo-icon"><${W} name="expense" /></span>
              <span class="todo-text"><strong>${g.length} ${g.length===1?"Beleg":"Belege"}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${y.length>0&&l`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${y.length} ${y.length===1?"Rechnungsentwurf":"Rechnungsentwürfe"}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${$.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${W} name="quote" /></span>
              <span class="todo-text"><strong>${$.length} ${$.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
            ${I.length>0&&l`<li><a href="#/contracts">
              <span class="todo-icon"><${W} name="file" /></span>
              <span class="todo-text"><strong>${I.length} ${I.length===1?"Vertrag endet":"Verträge enden"}</strong>
                <span class="cell-sub">in den nächsten 30 Tagen oder sind abgelaufen</span></span></a></li>`}
          </ul>`}
      <//>
    </div>


    <div class="dash-lists">
      <${J} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${on} rows=${co(i.byCustomer).map(E=>({key:E.id,label:E.name,value:M(E),display:ae(M(E)),href:`#/customers/${E.id}`}))} />
      <//>
      <${J} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${on} rows=${co(i.byService).map(E=>({key:E.key,label:E.name,value:M(E),display:ae(M(E))}))} />
      <//>
      ${!t&&l`<${J} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${on} rows=${co(i.byCompany).map(E=>({key:E.id,label:E.name,value:M(E),display:ae(M(E)),color:Ss(E.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${re()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}var uo=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function Vu({params:e}){ge();let[t,n]=k(""),[a,s]=k(e&&uo.some($=>$.id===e.status)?e.status:"all"),[i,r]=k("all"),[o,c]=k(null),p=!me(),d=V(),u=De(()=>w.invoices.filter(Ke).map($=>({inv:$,status:hi($)})),[w.version,w.settings.activeCompany]),m=$t(i,d),g=u.filter($=>i==="all"||Qt($.inv.issueDate,m)),h=g.filter($=>uo.find(I=>I.id===a).test($.status,$.inv)).filter($=>Ee(t,$.inv.number,Ve($.inv),(v("companies",$.inv.companyId)||{}).name,$.inv.totals?($.inv.totals.totalCents/100).toFixed(2):"",$.inv.totals?($.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",($.inv.items||[]).map(I=>I.name).join(" "))),b=h.reduce(($,I)=>{if(I.status==="draft"||I.status==="cancelled")return $;let D=I.inv.totals?I.inv.totals.totalCents:0;return $.total+=lt(D,I.inv.currency,I.inv.fx)||0,$.open+=lt(wa(I.inv),I.inv.currency,I.inv.fx)||0,$},{total:0,open:0}),y=[{key:"number",label:"Nummer",class:"nw",sort:$=>$.inv.number||"",render:$=>l`<span class="cell-main">${$.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:$=>Ve($.inv),render:$=>Ve($.inv)},...p?[{key:"company",label:"Unternehmen",sort:$=>(v("companies",$.inv.companyId)||{}).name||"",render:$=>l`<${Le} id=${$.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:$=>$.inv.issueDate,render:$=>O($.inv.issueDate)},{key:"due",label:"Fällig",sort:$=>$.inv.dueDate||"",render:$=>$.status==="overdue"?l`<span class="tone-bad">${O($.inv.dueDate)}</span><div class="cell-sub">seit ${mn($.inv.dueDate,d)} Tagen</div>`:O($.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:$=>lt($.inv.totals?$.inv.totals.totalCents:0,$.inv.currency,$.inv.fx)||0,render:$=>l`<${Lt} doc=${$.inv} />`},{key:"open",label:"Offen",align:"right",sort:$=>lt(wa($.inv),$.inv.currency,$.inv.fx)||0,render:$=>{let I=wa($.inv);return I?j(I,$.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:$=>$.status,render:$=>l`<${xn} inv=${$.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:$=>{let I=Ku($.inv.id),D=Es($.inv,mn($.inv.dueDate,d)),T=z=>(xt.find(H=>H.id===z)||{}).label||"";return l`<${C} small variant=${D?"primary":"default"} icon="clock" onClick=${()=>c($.inv)}>${D?T(D):"Erinnern"}<//>
          <span class="cell-sub nw">${I?`Zuletzt: ${T(I.level)}, ${O(I.date)}`:"Noch keine versendet"}</span>`}}]:[]],f=h.length?[`${h.length} ${h.length===1?"Beleg":"Belege"}`,"",...p?[""]:[],"","",l`<span class="strong">${ae(b.total)}</span>`,l`<span class="strong">${ae(b.open)}</span>`,l`<span class="muted-text">in ${re()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${we} title="Rechnungen">
      <${C} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${w.invoices.length>0&&l`<div class="filters">
      <${pt} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${St} label="Status" value=${a} onChange=${s}
        options=${uo.map($=>({id:$.id,label:$.label,count:g.filter(I=>$.test(I.status,I.inv)).length})).filter($=>$.id!=="clarify"||$.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${$=>r($.target.value)}>
        ${Tn.filter($=>$.id!=="custom").map($=>l`<option value=${$.id}>${$.label}</option>`)}
      </select>
    </div>`}
    <${Je} columns=${y} rows=${h} rowKey=${$=>$.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${f}
      rowClass=${$=>$.inv.clarify&&$.status!=="draft"?"row-clarify":""}
      onRowClick=${$=>Y($.inv.status==="draft"?`/invoices/${$.inv.id}/edit`:`/invoices/${$.inv.id}`)}
      empty=${w.invoices.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${pe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${C} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${Na} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function mo({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?We(e.id).filter(H=>H.id!==n.id):We(e.id),o=e.totals?e.totals.totalCents:0,c=i?Ue(r):s?Math.max(o-Ue(r),0):wa(e),p=w.settings.paymentMethods||[],[d,u]=k(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:V(),amountCents:c,method:p[0]||"",note:""}),[m,g]=k(!1),[h,b]=k(""),[y,f]=k(!1),$=H=>E=>u(A=>({...A,[H]:E})),I=i?"Erstattung":"Zahlung",D=!i&&!s?c-(Number(d.amountCents)||0):0,T=d.method&&!p.includes(d.method)?[d.method,...p]:p;async function z(){f(!0);let H=D>0&&m?h.trim()||`Differenz von ${j(D,e.currency)} offen (eingegangen: ${j(d.amountCents,e.currency)} am ${O(d.date)}).`:"",E=await U(()=>s?tc(n.id,d):i?sc(e.id,d):Xa(e.id,{...d,clarify:H}));f(!1),E&&(s?B(`${I} geändert`,"good"):i?B("Erstattung eingetragen","good"):D>0?B(H?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):B("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${Pe} title=${`${I} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${z}
    footer=${l`<${C} onClick=${a}>Abbrechen<//><${C} variant="primary" type="submit" busy=${y}>${s?"Änderung speichern":`${I} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${j(c,e.currency)}.`:s?`Höchstens ${j(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${j(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${Re} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${d.amountCents} onChange=${$("amountCents")} min=${0} />
      <${Me} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${d.date} onInput=${$("date")} max=${V()} />
      <${se} class="span-6" label="Zahlungsart" value=${d.method} onChange=${$("method")} options=${T} placeholder="Keine Angabe" />
      <${Z} class="span-6" label="Notiz" value=${d.note} onInput=${$("note")} />
    </div>
    ${D>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${j(D,e.currency)}</strong> offen.</p>
      <${Ye} label="Differenz muss geklärt werden" checked=${m} onChange=${g}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${ie} label="Was ist zu klären?" value=${h} onInput=${b} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function po(e){let t=Ct(e.prev.doc,"invoices"),n=await ka(us(t));et(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${O(ta(new Date(e.at)))}).pdf`))}function fo({entityId:e}){let[t,n]=k(""),a=w.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await U(()=>po(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${Qe(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${C} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function qu({id:e}){ge();let t=v("invoices",e),[n,a]=k(null),[s,i]=k(t&&t.internalNotes||""),[r,o]=k("");if(!t)return l`<${pe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${C} onClick=${()=>Y("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=hi(t),p=[...We(e)].sort((N,X)=>N.date<X.date?-1:1),d=[...hn(e)].sort((N,X)=>N.createdAt<X.createdAt?-1:1),u=Ue(p),m=wa(t),g=t.type==="credit_note",h=Ct(t,"invoices"),b=t.relatedInvoiceId?v("invoices",t.relatedInvoiceId):null,y=t.creditNoteId?v("invoices",t.creditNoteId):null,f=t.quoteId?v("quotes",t.quoteId):null,$=!g&&m>0,I=!g&&t.status==="credited"&&u>0,D=!g&&["issued","sent"].includes(t.status),T=t.fx?Number(t.fx.usdToEur):null;async function z(){o("pdf"),await U(()=>zi(t,"invoices")),o("")}async function H(){if(u>0){B("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let N=await ue({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(N===null)return;await U(async()=>(await ci(e,N),!0))&&B("Rechnung storniert","good")}async function E(){if(!await ue({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${p.length?` Die eingetragenen Zahlungen (${j(u,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await U(()=>ec(e))&&(B(`${t.number} ist wieder ein Entwurf`,"good"),Y(`/invoices/${e}/edit`))}async function A(){if(!await ue({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await U(()=>rc(e))&&B("Stornierung zurückgenommen","good")}async function x(){let N=g?t:y,X=g?b:t;if(!N||!await ue({title:`Gutschrift ${N.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${X?` Die Rechnung ${X.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let F=await U(()=>Rr(N.id));F&&(B(`Gutschrift ${F.creditNumber} zurückgenommen`,"good"),g&&Y(F.invoiceId?`/invoices/${F.invoiceId}`:"/invoices",{replace:!0}))}async function R(){await Ei(t)&&Y("/invoices",{replace:!0})}async function S(){let N=await ue({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(N===null)return;await U(()=>nc(e,N))&&B("Klärung vermerkt","good")}async function K(){let N=await ue({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${j(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(N===null)return;await U(()=>ac(e,N))&&B("Klärung erledigt","good")}async function P(){let N=await ue({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${j(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${u>0?` Zu dieser Rechnung sind bereits ${j(u,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(N===null)return;let X=await U(()=>ui(e,N));X&&(B(`Gutschrift ${X.number} erstellt`,"good"),Y(`/invoices/${X.id}`))}async function _(N){if(!await ue({title:"Zahlung löschen?",text:`Die Zahlung über ${j(N.amountCents,t.currency)} vom ${O(N.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await U(async()=>(await ic(N.id),!0))&&B("Zahlung gelöscht","good")}async function ee(){await U(async()=>(await li("invoices",e,s),!0))&&B("Notiz gespeichert","good")}return l`
    <${we} title=${l`${g?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${xn} inv=${t} /> <span class="head-meta">${Ve(t)}</span>`}>
      <${C} icon="download" busy=${r==="pdf"} onClick=${z}>PDF<//>
      ${!g&&t.status==="issued"&&l`<${C} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${C} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${$&&l`<${C} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${wt} items=${[!g&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>U(()=>jn(e,!0))},!g&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!g&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>U(()=>jn(e,!1))},!g&&m>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},D&&{label:"Zurück in den Entwurf",icon:"edit",onClick:E},!g&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:S},!g&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>Y(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:A},(g||t.status==="credited"&&y)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:g,onClick:x},D&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:P},D&&{label:"Stornieren",icon:"x",danger:!0,onClick:H},!g&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:R}]} />
    <//>

    ${t.clarify&&l`<${Ce} tone="warn" action=${l`<div class="notice-actions">
        <${C} small onClick=${S}>Ändern<//>
        <${C} small variant="primary" icon="check" onClick=${K}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${Qe(t.clarify.at)} · ${m>0?`offen sind ${j(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${Ce} tone="warn" action=${l`<${C} small icon="undo" onClick=${A}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${Qe(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${y&&l`<${Ce} tone="info" action=${l`<${C} small onClick=${()=>Y(`/invoices/${y.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${y.number} erstellt.
    <//>`}
    ${b&&l`<${Ce} tone="info" action=${l`<${C} small onClick=${()=>Y(`/invoices/${b.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${b.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${Ca} model=${h} />
      </div>
      <aside class="split-side">
        <${J} title="Stand">
          <${yn} rows=${[["Unternehmen",l`<${Le} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Ve(t)}</a>`],["Gesamtbetrag",l`<${Lt} doc=${t} />`],!g&&["Bezahlt",j(u,t.currency)],!g&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${j(m,t.currency)}</span>`],!g&&t.dueDate&&["Fällig am",l`${O(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${mn(t.dueDate,V())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",Qe(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",Qe(t.firstFinalizedAt)],t.sentAt&&["Versendet",Qe(t.sentAt)],f&&["Aus Angebot",l`<a href=${`#/quotes/${f.id}`}>${je(f)}</a>`],t.contractId&&v("contracts",t.contractId)&&["Zu Vertrag",l`<a href=${`#/contracts?open=${t.contractId}`}>${v("contracts",t.contractId).title}</a>`]]} />
        <//>

        ${!g&&l`<${J} title="Zahlungen" action=${$?l`<${C} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:I&&l`<${C} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${p.length?l`<ul class="plain-list">
                ${p.map(N=>l`<li class="row-between" key=${N.id}>
                  <span><span class="strong">${j(N.amountCents,t.currency)}</span>
                    <span class="cell-sub">${N.amountCents<0?"Erstattung, ":""}${O(N.date)}${N.method?`, ${N.method}`:""}${N.note?` – ${N.note}`:""}</span></span>
                  <span class="row-actions">
                    <${C} variant="ghost" small icon="edit" title=${N.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:N})} />
                    <${C} variant="ghost" small icon="trash" title=${N.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>_(N)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${d.length>0&&l`<${J} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${d.map(N=>l`<li class="row-between" key=${N.id}>
              <span>${(xt.find(X=>X.id===N.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${O(N.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${J} title="Wechselkurs">
          ${T?l`<p class="strong">1 USD = ${ha(T)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${O(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${J} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${C} small variant="primary" onClick=${ee}>Notiz speichern<//></div>`}
        <//>

        <${J} title="Verlauf"><${fo} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${mo} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${mo} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${mo} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${Na} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${Na} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}function Bp({quote:e}){return l`<span class="cell-main">${je(e)}</span>${e.source==="upload"&&l` <span class="pdf-tag" title="Hochgeladenes PDF">PDF</span>`}
    ${e.source==="upload"&&e.refNumber&&e.title&&l`<div class="cell-sub">${e.title}</div>`}`}var Zu=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function Gu(){ge();let[e,t]=k(""),[n,a]=k("all"),[s,i]=k(null),r=!me(),o=V(),c=De(()=>w.quotes.filter(Ke).map(u=>({quote:u,status:_t(u,o)})),[w.version,w.settings.activeCompany]),p=c.filter(u=>Zu.find(m=>m.id===n).test(u.status)).filter(u=>Ee(e,u.quote.number,u.quote.refNumber,u.quote.title,Ve(u.quote),(u.quote.items||[]).map(m=>m.name).join(" "))),d=[{key:"number",label:"Nummer",class:"nw",sort:u=>je(u.quote),render:u=>l`<${Bp} quote=${u.quote} />`},{key:"customer",label:"Kontakt",sort:u=>Ve(u.quote),render:u=>Ve(u.quote)},...r?[{key:"company",label:"Unternehmen",render:u=>l`<${Le} id=${u.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:u=>u.quote.issueDate,render:u=>O(u.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:u=>u.quote.validUntil||"",render:u=>O(u.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:u=>lt(u.quote.totals?u.quote.totals.totalCents:0,u.quote.currency,u.quote.fx)||0,render:u=>l`<${Lt} doc=${u.quote} />`},{key:"status",label:"Status",sort:u=>u.status,render:u=>l`<${ss} quote=${u.quote} />`}];return l`
    <${we} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung. Extern gestaltete Angebote lädst du als PDF hoch.">
      <${C} icon="upload" onClick=${()=>i(Yn())}>PDF hochladen<//>
      <${C} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Neues Angebot<//>
    <//>
    ${w.quotes.length>0&&l`<div class="filters">
      <${pt} value=${e} onInput=${t} placeholder="Nummer, Kontakt, Leistung" />
      <${St} label="Status" value=${n} onChange=${a}
        options=${Zu.map(u=>({id:u.id,label:u.label,count:c.filter(m=>u.test(m.status)).length}))} />
    </div>`}
    <${Je} columns=${d} rows=${p} rowKey=${u=>u.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${u=>Y(u.quote.status==="draft"?`/quotes/${u.quote.id}/edit`:`/quotes/${u.quote.id}`)}
      empty=${w.quotes.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${pe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${C} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Erstes Angebot schreiben<//>
            <${C} icon="upload" onClick=${()=>i(Yn())}>PDF hochladen<//>
          <//>`} />
    ${s&&l`<${ws} quote=${s} onClose=${()=>i(null)} onSaved=${u=>Y(`/quotes/${u.id}`)} />`}
  `}function Hu({id:e}){ge();let t=v("quotes",e),[n,a]=k(null),[s,i]=k(t&&t.internalNotes||""),[r,o]=k("");if(!t)return l`<${pe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${C} onClick=${()=>Y("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=_t(t,V()),p=t.source==="upload",d=p?null:Ct(t,"quotes"),u=w.contracts.filter(D=>D.quoteId===e),m=je(t),g=t.invoiceId?v("invoices",t.invoiceId):null,h=["open","sent","expired"].includes(c);async function b(){o("pdf"),await U(()=>p?eo((t.attachmentIds||[])[0]):zi(t,"quotes")),o("")}async function y(){if(!await ue({title:"Angebot löschen?",text:`„${m}“ wird samt PDF gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await pc(e),!0))&&(B("Angebot gelöscht","good"),Y("/quotes"))}async function f(D,T){await U(async()=>(await Wn(e,D),!0))&&B(T,"good")}async function $(){if(!await ue({title:"In Rechnung umwandeln?",text:p?`Aus dem Angebot „${m}“ entsteht ein Rechnungsentwurf mit dem Angebotsbetrag als Position. Du kannst ihn vor dem Erstellen noch anpassen, z. B. in einzelne Leistungen aufteilen.`:`Aus dem Angebot ${m} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let T=await U(()=>uc(e));o(""),T&&(B("Rechnungsentwurf angelegt","good"),Y(`/invoices/${T.id}/edit`))}async function I(){await U(async()=>(await li("quotes",e,s),!0))&&B("Notiz gespeichert","good")}return l`
    <${we} title=${`Angebot ${m}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${ss} quote=${t} />${p?l` <span class="pdf-tag">PDF</span>`:""} <span class="head-meta">${Ve(t)}</span>`}>
      <${C} icon="download" busy=${r==="pdf"} onClick=${b}>PDF<//>
      ${p&&l`<${C} icon="edit" onClick=${()=>a("edit")}>Bearbeiten<//>`}
      ${!p&&c==="open"&&l`<${C} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${["accepted","invoiced"].includes(c)&&!u.length&&l`<${C} icon="file" onClick=${()=>a({contract:vs(t)})}>Vertrag anlegen<//>`}
      ${!g&&c!=="declined"&&l`<${C} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${$}>In Rechnung umwandeln<//>`}
      <${wt} items=${[h&&{label:"Als angenommen markieren",icon:"check",onClick:()=>f("accepted","Angebot angenommen")},h&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>f("declined","Angebot abgelehnt")},p&&c==="open"&&{label:"Als versendet markieren",icon:"send",onClick:()=>f("sent","Als versendet markiert")},!p&&c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!g&&{label:"Wieder öffnen",icon:"undo",onClick:()=>f("open","Angebot wieder geöffnet")},u.length>0&&{label:"Weiteren Vertrag anlegen",icon:"file",onClick:()=>a({contract:vs(t)})},!p&&{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>Y(`/quotes/new?copy=${e}`)},p&&{label:"Löschen",icon:"trash",danger:!0,disabled:!!g,onClick:y}]} />
    <//>

    ${g&&l`<${Ce} tone="info" action=${l`<${C} small onClick=${()=>Y(`/invoices/${g.id}${g.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${g.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${g.number}`}.
    <//>`}
    ${c==="expired"&&l`<${Ce} tone="warn">Dieses Angebot ist seit dem ${O(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main">${p?l`<div class="doc-upload">${(t.attachmentIds||[])[0]?l`<${$s} attachmentId=${t.attachmentIds[0]} />`:l`<${Ce} tone="warn">Zu diesem Angebot ist kein PDF gespeichert.<//>`}</div>`:l`<${Ca} model=${d} />`}</div>
      <aside class="split-side">
        <${J} title="Stand">
          <${yn} rows=${[["Unternehmen",l`<${Le} id=${t.companyId} />`],["Kontakt",l`<a href=${`#/customers/${t.customerId}`}>${Ve(t)}</a>`],p&&["Bezeichnung",t.title],p&&t.refNumber&&["Nummer im Dokument",t.refNumber],["Angebotssumme",l`<${Lt} doc=${t} />`],["Angebotsdatum",O(t.issueDate)],["Gültig bis",O(t.validUntil)],[p?"Hochgeladen":"Erstellt",Qe(t.finalizedAt)],t.sentAt&&["Versendet",Qe(t.sentAt)],t.decidedAt&&["Entschieden",Qe(t.decidedAt)]]} />
        <//>
        ${u.length>0&&l`<${J} title="Vertrag">
          <ul class="plain-list linked-list">${u.map(D=>l`<li key=${D.id}>
            <button type="button" class="link-btn" onClick=${()=>a({contract:D})}>${D.title}</button>
            <${Ti} contract=${D} /> <span class="muted-text">${ys(D)}</span></li>`)}</ul>
        <//>`}
        <${J} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${C} small variant="primary" onClick=${I}>Notiz speichern<//></div>`}
        <//>
        <${J} title="Verlauf"><${fo} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${Na} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
    ${n==="edit"&&l`<${ws} quote=${t} onClose=${()=>a(null)} />`}
    ${n&&n.contract&&l`<${xs} key=${n.contract.id} contract=${n.contract} onClose=${()=>a(null)} />`}
  `}var Pi=null;function Up(){return Pi||(Pi=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw Pi=null,e})),Pi}var Ki=e=>e&&typeof e=="object"?e.v:e,ju=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function go(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function Mp(e){let t=[e.columns.map(n=>go(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>go(Ki(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>go(Ki(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function Fi(e){let t=new Blob([Mp(e)],{type:"text/csv;charset=utf-8"});et(t,`${Yt(e.fileName)}.csv`)}async function Wu(e){let t=await Up(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(Ki));e.totals&&n.push(e.totals.map(Ki));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let p=t.utils.encode_cell({r:c,c:o}),d=a[p];d&&(typeof d.v=="number"&&r.type==="money"&&(d.z="#,##0.00"),typeof d.v=="string"&&/^[=+\-@]/.test(d.v)&&(d.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,Yt(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});et(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Yt(e.fileName)}.xlsx`)}async function Qu(e){await Bc({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(ju)),totals:e.totals?e.totals.map(ju):null,fileName:`${Yt(e.fileName)}.pdf`,landscape:e.columns.length>6})}function Xu(e="year"){let[t,n]=k(e),[a,s]=k({from:`${V().slice(0,4)}-01-01`,to:V()}),i=$t(t,V(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function _p(e){let t=Tn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${O(e.range.from)} bis ${O(e.range.to)}`}function ed({p:e}){let t=me();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${Tn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>$e(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>$e(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${O(e.range.from)} bis ${O(e.range.to)}`:""}</span>
  </div>`}var td=(e,t)=>t?kt(Math.round(e/t*1e3)/10):"–",xe=e=>({v:e/100,t:ae(e)}),En=e=>({v:e/100,t:Oe(e)}),Ge=(e,t)=>({v:e/100,t:j(e,t)}),Aa=e=>({v:e||"",t:e?O(e):""}),be={align:"right",type:"money"},In={align:"right",type:"number"};function nd(){ge();let e=Xu("year"),t=V(),n=ft(),a=me(),s=sn(),i=De(()=>{let u={companyId:n,range:e.range},m=qr(e.range,s,n),g=m.slice(-24);return{summary:Zc(s,u,t),truncated:m.length>g.length,series:g.length?ds(s,{companyId:n,months:g,range:e.range}):[],byCompany:ps(s,u),byCustomer:ms(s,u),byService:fs(s,u),byCategory:Vr(s,u)}},[w.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(u=>({key:u.key,label:na(u.key),title:Kt(u.key),values:{rev:M(u,"revenue"),exp:M(u,"expense")}})),p={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(u=>[Kt(u.key),ae(M(u,"revenue")),ae(M(u,"expense")),ae(M(u,"profit")),ae(M(u,"payments"))])},d=u=>[...u].sort((m,g)=>M(g)-M(m));return l`
    <${we} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${re()}, ${kn()} als Zweitwert.`}>
      <${C} icon="reports" onClick=${()=>Y("/reports")}>Reports und Export<//>
    <//>
    <${ed} p=${e} />

    <div class="stat-row stat-row-3">
      <${Fe} label="Einnahmen" value=${ae(M(r.income))} sub=${`≈ ${Oe(Ne(r.income))}, ${r.income.count} Rechnungen`} />
      <${Fe} label="Ausgaben" value=${ae(M(r.expenses))} sub=${`≈ ${Oe(Ne(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Fe} label="Gewinn" value=${ae(M(r.profit))} tone=${M(r.profit)<0?"bad":"good"} sub=${`≈ ${Oe(Ne(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Fe} label="Zahlungseingänge" value=${ae(M(r.payments))} sub=${`≈ ${Oe(Ne(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Fe} label="Offene Forderungen (heute)" value=${ae(M(r.receivables))} sub=${`≈ ${Oe(Ne(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Fe} label="Steuern (Saldo)" value=${ae(M(r.taxBalance))}
        sub=${`berechnet ${ae(M(r.taxCollected))}, in Ausgaben ${ae(M(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${Is} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${re()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${re()}`} series=${o} table=${p}>
      <${Cs} groups=${c} series=${o} mode="grouped" format=${u=>ae(u)} axisFormat=${u=>Ha(u,re())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${J} title="Umsatz pro Unternehmen">
        <${on} rows=${d(i.byCompany).map(u=>({key:u.id,label:u.name,value:M(u),display:ae(M(u)),color:Ss(u.color)}))} />
      <//>`}
      <${J} title="Umsatz pro Kunde">
        <${on} rows=${d(i.byCustomer).map(u=>({key:u.id,label:u.name,value:M(u),display:ae(M(u)),href:`#/customers/${u.id}`}))} />
      <//>
      <${J} title="Umsatz pro Leistung">
        <${on} rows=${d(i.byService).map(u=>({key:u.key,label:u.name,value:M(u),display:ae(M(u))}))} />
      <//>
      <${J} title="Ausgaben nach Kategorie">
        <${on} rows=${d(i.byCategory).map(u=>({key:u.name,label:u.name,value:M(u),display:ae(M(u)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function ho(e,t,n,a,s){let i=Vc(e,t,n),r=i.reduce((o,c)=>({c:o.c+M(c),a:o.a+Ne(c),tax:o.tax+M(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...In},{label:`Umsatz netto (${re()})`,...be},{label:`Umsatz netto (${kn()})`,...be},{label:`Steuer (${re()})`,...be}],rows:i.map(o=>[a(o.key),o.count,xe(M(o)),En(Ne(o)),xe(M(o,"tax"))]),totals:["Summe",r.count,xe(r.c),En(r.a),xe(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?na(o.key):a(o.key),title:a(o.key),values:{rev:M(o)}}))}}}function $o(e,t,n=[]){let a=[...e].sort((i,r)=>M(r)-M(i)),s=a.reduce((i,r)=>({c:i.c+M(r),a:i.a+Ne(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${re()})`,...be},{label:`Umsatz netto (${kn()})`,...be},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),xe(M(i)),En(Ne(i)),td(M(i),s.c)]),totals:["Summe",...n.map(()=>""),xe(s.c),En(s.a),""]}}function Yu(e,t,n,a){let s=Cn(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+M(c,"open"),0),r=Fc.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,p)=>c+M(p,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...In},{label:"Währung"},{label:"Rechnungsbetrag",...be},{label:"Offen",...be},{label:`Offen (${re()})`,...be}],rows:s.map(o=>[o.inv.number,Ve(o.inv),(v("companies",o.inv.companyId)||{}).name||"",Aa(o.inv.issueDate),Aa(o.inv.dueDate),o.overdueDays,o.inv.currency,Ge(o.inv.totals.totalCents,o.inv.currency),Ge(o.openCents,o.inv.currency),xe(M(o,"open"))]),totals:["Summe","","","","","","","","",xe(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var bo=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>ho(e,t,"month",Kt,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>ho(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>ho(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>$o(ms(e,t),"Kunde",[{col:{label:"Rechnungen",...In},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>$o(ps(e,t),"Unternehmen",[{col:{label:"Rechnungen",...In},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>$o(fs(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...In},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:Fn(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=qc(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...In},{label:"Netto",...be},{label:"Steuer",...be},{label:"Brutto",...be},{label:"Netto in USD",...be},{label:"Netto in EUR",...be}],rows:n.map(a=>[a.currency,a.count,Ge(a.netCents,a.currency),Ge(a.taxCents,a.currency),Ge(a.totalCents,a.currency),Ge(a.usd,"USD"),Ge(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",Ge(n.reduce((a,s)=>a+s.usd,0),"USD"),Ge(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>Yu(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>Yu(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=qr(t.range,e,t.companyId),a=n.length?ds(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+M(r,"revenue"),exp:i.exp+M(r,"expense"),alt:i.alt+Ne(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${re()})`,...be},{label:`Ausgaben (${re()})`,...be},{label:`Gewinn (${re()})`,...be},{label:`Gewinn (${kn()})`,...be}],rows:a.map(i=>[Kt(i.key),xe(M(i,"revenue")),xe(M(i,"expense")),xe(M(i,"profit")),En(Ne(i,"profit"))]),totals:["Summe",xe(s.rev),xe(s.exp),xe(s.rev-s.exp),En(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:na(i.key),title:Kt(i.key),values:{rev:M(i,"revenue"),exp:M(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...Vr(e,t)].sort((s,i)=>M(i)-M(s)),a=n.reduce((s,i)=>({c:s.c+M(i),a:s.a+Ne(i),tax:s.tax+M(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...In},{label:`Netto (${re()})`,...be},{label:`Netto (${kn()})`,...be},{label:`Steuer (${re()})`,...be},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,xe(M(s)),En(Ne(s)),xe(M(s,"tax")),td(M(s),a.c)]),totals:["Summe",a.count,xe(a.c),En(a.a),xe(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=Gc(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...be},{label:"Steuer",...be},{label:`Steuer (${re()})`,...be}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${kt(a.rate)}`,a.currency,Ge(a.netCents,a.currency),Ge(a.taxCents,a.currency),xe(M(a,"tax"))]),["In Ausgaben enthaltene Steuer",re(),"","",xe(-M(n,"paid"))]],totals:["Saldo","","","",xe(M(n,"collected")-M(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=ct(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+M(r,"net"),tax:i.tax+M(r,"tax"),total:i.total+M(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...be},{label:"Steuer",...be},{label:"Brutto",...be},{label:`Netto (${re()})`,...be},{label:"Kurs USD/EUR",...In},{label:"Bezahlt",...be},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=We(r.id),c=Zt(r,o,n);return[r.number,Aa(r.issueDate),Ve(r),(v("companies",r.companyId)||{}).name||"",r.currency,Ge(r.totals.netCents,r.currency),Ge(r.totals.taxCents,r.currency),Ge(r.totals.totalCents,r.currency),xe(M(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:Fn(r.fx.usdToEur,"de",4)}:"",Ge(Ue(o),r.currency),(Pa[c]||{}).label||c]}),totals:["Summe","","","",re(),xe(s.net),xe(s.tax),xe(s.total),xe(s.net),"","",""],note:`Die Summenzeile ist in ${re()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=Di(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...be},{label:`Betrag (${re()})`,...be}],rows:n.map(a=>[Aa(a.date),a.inv.number,Ve(a.inv),a.pay.method||"",a.inv.currency,Ge(a.pay.amountCents,a.inv.currency),xe(M(a))]),totals:["Summe","","","","","",xe(n.reduce((a,s)=>a+M(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=Da(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+M(i,"net"),tax:s.tax+M(i,"tax"),total:s.total+M(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...be},{label:"Steuer",...be},{label:"Gesamt",...be},{label:`Gesamt (${re()})`,...be},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[Aa(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(v("companies",i.companyId)||{}).name||"",i.currency,Ge(i.netCents,i.currency),Ge(i.taxCents,i.currency),Ge(i.totalCents,i.currency),xe(M(s,"total")),Aa(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",re(),xe(a.net),xe(a.tax),xe(a.total),xe(a.total),"",""],note:`Die Summenzeile ist in ${re()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],Ju=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function ad({params:e}){ge();let[t,n]=k(e&&e.r&&bo.find(y=>y.id===e.r)?e.r:"month"),a=Xu("year"),[s,i]=k(""),r=V(),o=ft(),c=me(),p=sn(),d=bo.find(y=>y.id===t),u=De(()=>d.build(p,{companyId:o,range:a.range},r),[w.version,t,o,a.range.from,a.range.to,re()]),m=t==="open"||t==="overdue",g=`${c?c.name:"Alle Unternehmen"}, ${m?`Stichtag ${O(r)}`:_p(a)}`,h={title:d.label,subtitle:g,fileName:`${d.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:u.columns,rows:u.rows,totals:u.totals};async function b(y){i(y),await U(async()=>{y==="csv"?Fi(h):y==="xlsx"?await Wu(h):await Qu(h)}),i("")}return l`
    <${we} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${C} icon="download" busy=${s==="csv"} disabled=${!u.rows.length} onClick=${()=>b("csv")}>CSV<//>
      <${C} icon="download" busy=${s==="xlsx"} disabled=${!u.rows.length} onClick=${()=>b("xlsx")}>Excel<//>
      <${C} icon="download" busy=${s==="pdf"} disabled=${!u.rows.length} onClick=${()=>b("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${bo.map(y=>l`<button type="button" class=${`report-link${y.id===t?" is-on":""}`} aria-current=${y.id===t?"true":void 0}
          onClick=${()=>n(y.id)}>${y.label}</button>`)}
      </nav>
      <div class="report-body">
        <${ed} p=${a} />
        ${u.note&&l`<p class="footnote">${u.note}</p>`}
        ${u.aging&&l`<div class="stat-row stat-row-5">
          ${u.aging.map(y=>l`<${Fe} label=${y.label} value=${ae(y.value)} sub=${`${y.count} ${y.count===1?"Rechnung":"Rechnungen"}`} tone=${y.id!=="current"&&y.value?"bad":""} />`)}
        </div>`}
        ${u.chart&&u.chart.groups.length>1&&l`<${Is} title=${d.label} sub=${`Netto in ${re()}`} series=${u.chart.series}>
          <${Cs} groups=${u.chart.groups} series=${u.chart.series} mode=${u.chart.mode||"stacked"}
            format=${y=>ae(y)} axisFormat=${y=>Ha(y,re())} ariaLabel=${d.label} />
        <//>`}
        ${u.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${u.columns.map(y=>l`<th class=${y.align==="right"?"r":""}>${y.label}</th>`)}</tr></thead>
              <tbody>${u.rows.map(y=>l`<tr>${y.map((f,$)=>l`<td class=${u.columns[$].align==="right"?"r":""}>${Ju(f)}</td>`)}</tr>`)}</tbody>
              ${u.totals&&l`<tfoot><tr>${u.totals.map((y,f)=>l`<td class=${u.columns[f].align==="right"?"r":""}>${Ju(y)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${pe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function sd(){ge();let[e,t]=k({}),n=[...w.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ce(()=>{let a=!0;return Promise.all(n.map(s=>Ya(s,"invoice",V()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[w.version]),l`
    <${we} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${C} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${pe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${C} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${Xt(a.logoAssetId)?l`<img src=${Xt(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
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
  `}function id({id:e}){ge();let t=e&&e!=="new"?v("companies",e):null,[n,a]=k(()=>t?ye(t):Ka()),[s,i]=k(null),[r,o]=k(!1),[c,p]=k(!1),[d,u]=k({}),[m,g]=k(null),h=ke(null),b=V(),y=R=>{a(R),o(!0)},f=R=>S=>y(K=>({...K,[R]:S}));if(ce(()=>(r?Gs(Hs):en(),()=>en()),[r]),ce(()=>{let R=!0;return Promise.all(["invoice","quote","credit"].map(S=>Ya(n,S,b).catch(()=>""))).then(([S,K,P])=>{R&&u({invoice:S,quote:K,credit:P})}),()=>{R=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,w.version]),e&&e!=="new"&&!t)return l`<${pe} icon="company" title="Unternehmen nicht gefunden"><${C} onClick=${()=>Y("/companies")}>Zur Übersicht<//><//>`;let $=t?v("counters",Zn(t.id,"invoice",zt(t,"invoice").pattern,b)):null,I=$?$.last:0,D=s||Xt(n.logoAssetId),T={invoice:Gt(n.invoicePattern),quote:Gt(n.quotePattern),credit:Gt(n.creditPattern)};async function z(R){if(!R)return;let S=await U(()=>Yc(R));S&&(i(S),o(!0))}async function H(){p(!0);let R=await U(()=>Wa(n,s));p(!1),R&&(i(null),a(ye(R)),o(!1),en(),B("Unternehmen gespeichert","good"),t||$n(`/companies/${R.id}`))}async function E(){if(m==null||!t||!await ue({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${b.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await U(async()=>(await Xl(t,"invoice",b,m),!0))&&(B("Nummernkreis angepasst","good"),g(null))}async function A(){await U(async()=>(await Kl(t.id,!t.archived),!0))&&(B(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(S=>({...S,archived:!t.archived})))}async function x(){if(!await ue({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await U(async()=>(await Fl(t.id),!0))&&(B("Unternehmen gelöscht","good"),$n("/companies"))}return l`
    <${we} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${wt} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:A},{label:"Löschen",icon:"trash",danger:!0,disabled:Sr(t.id),onClick:x}]} />`}
      <${C} variant="primary" icon="check" busy=${c} onClick=${H}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${Ce} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${J} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${Z} class="span-4" label="Unternehmensname" value=${n.name} onInput=${f("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${Z} class="span-2" label="Kurzname" value=${n.shortName} onInput=${f("shortName")} hint="Für den Company Switcher" />
          <${Z} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${f("legalForm")} />
          <${ve} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${R=>f("brandColor")(R.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${ve} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${D?l`<img src=${D} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${C} icon="upload" onClick=${()=>h.current&&h.current.click()}>${D?"Logo ersetzen":"Logo hochladen"}<//>
              ${D&&l`<${C} variant="ghost" icon="trash" onClick=${()=>{i(null),f("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${h} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${R=>{z(R.target.files[0]),R.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${J} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${Z} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${f("street")} />
          <${Z} class="span-2" label="PLZ" value=${n.zip} onInput=${f("zip")} />
          <${Z} class="span-4" label="Ort" value=${n.city} onInput=${f("city")} />
          <${Z} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${f("region")} />
          <${Z} class="span-3" label="Land" value=${n.country} onInput=${f("country")} />
          <${Z} class="span-2" label="Telefon" value=${n.phone} onInput=${f("phone")} />
          <${Z} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${f("email")} />
          <${Z} class="span-2" label="Website" value=${n.website} onInput=${f("website")} />
        </div>
      <//>

      <${J} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${Z} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${f("taxId")} />
          <${Z} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${f("vatId")} />
          <${Z} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${f("registerInfo")} />
        </div>
      <//>

      <${J} title="Bank und Zahlung">
        <div class="form-grid">
          <${Z} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${f("accountHolder")} />
          <${Z} class="span-3" label="Bank" value=${n.bankName} onInput=${f("bankName")} />
          <${Z} class="span-4" label="IBAN" value=${n.iban} onInput=${f("iban")} />
          <${Z} class="span-2" label="BIC" value=${n.bic} onInput=${f("bic")} />
          <${ie} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${f("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${ie} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${f("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${J} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${Z} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${f("invoicePrefix")} placeholder="z. B. HL" />
          <${Z} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${f("invoicePattern")} error=${T.invoice}
            hint=${d.invoice?`Nächste Rechnung: ${d.invoice}`:""} />
          <${Re} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${f("numberDigits")} />
          <${Z} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${f("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${Z} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${f("quotePattern")} error=${T.quote}
            hint=${d.quote?`Nächstes Angebot: ${d.quote}`:""} />
          <${Z} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${f("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${Z} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${f("creditPattern")} error=${T.credit}
            hint=${d.credit?`Nächste Gutschrift: ${d.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${ve} label=${`Zuletzt vergebene laufende Rechnungsnummer ${b.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${at} id="counter-last" value=${m??I} digits=${0} min=${0} onChange=${R=>g(R)} />
              <${C} disabled=${m==null||m===I} onClick=${E}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${J} title="Standards für neue Belege">
        <div class="form-grid">
          <${se} class="span-2" label="Währung" value=${n.currency} onChange=${f("currency")} options=${_e} />
          <${se} class="span-2" label="Belegsprache" value=${n.language} onChange=${f("language")} options=${Tt} />
          <${Re} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${f("paymentTermDays")} />
          <${Re} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${f("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${Z} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${f("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${ie} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${f("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${Ye} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${f("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${Ye} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${f("showFxNote")} /></div>
        </div>
      <//>

      <${J} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${se} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${f("meetingProvider")}
            placeholder="Keiner" options=${ia} />
          <${Z} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${f("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${ie} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${f("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${Re} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${f("meetingDuration")} />
          <${se} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${f("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${nt()})`} options=${Ks.map(R=>({id:R,label:R.replace(/_/g," ")}))}
            hint="Zum Beispiel Europe/Berlin, wenn deine Kunden dieses Unternehmens in Deutschland sitzen" />
        </div>
      <//>

      <${J} title="Texte auf Belegen">
        <div class="form-grid">
          <${ie} class="span-6" label="Einleitung Rechnung" value=${n.invoiceText} onInput=${f("invoiceText")} rows=${2} />
          <${ie} class="span-6" label="Einleitung Angebot" value=${n.quoteText} onInput=${f("quoteText")} rows=${2} />
          <${ie} class="span-6" label="Zahlungsbedingungen" value=${n.paymentTerms} onInput=${f("paymentTerms")} rows=${2} />
          <${ie} class="span-6" label="Fußzeile" value=${n.footer} onInput=${f("footer")} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${C} variant="primary" icon="check" busy=${c} onClick=${H}>Unternehmen speichern<//>
      </div>
    </div>
  `}var rd=["aiApiKey"],od=["lastBackupAt","changesSinceBackup"],ld="bbc-finance-backup";function zp(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function Lp(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function cd(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function ud({includeFiles:e=!0}={}){let t={};for(let o of ut)t[o]=await da(o);let n=await da("settings"),a={};for(let o of n)rd.includes(o.key)||od.includes(o.key)||(a[o.key]=o.value);let s={format:ld,schemaVersion:nr,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(ut.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await da("blobs");for(let c=0;c<o.length;c++){let p=await zp(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(p)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function dd(){await Q(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function md(e){let t=new Map,n=0,a=(d,u)=>{try{t.set(d,Lp(u))}catch{n+=1}},s=null,i="",r=0,o=!1,c=d=>{r+=1;let u=d.trim();if(!u)return;if(r===1&&/"files":\{$/.test(u)){s=JSON.parse(`${u}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(u==="}}")return;let m=JSON.parse(`{${u.replace(/,$/,"")}}`);for(let[g,h]of Object.entries(m))a(g,h)},p=async()=>{let d;try{d=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(d&&typeof d=="object"&&d.files&&typeof d.files=="object"){for(let[u,m]of Object.entries(d.files))a(u,m);delete d.files}return d};if(!e.stream||typeof TextDecoderStream>"u")return s=await p(),{json:s,files:t,badFiles:n};try{let d=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:u,done:m}=await d.read();if(m)break;i+=u;let g=i.indexOf(`
`);for(;g>=0;)c(i.slice(0,g)),i=i.slice(g+1),g=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(d){if(!(d instanceof SyntaxError))throw d;t.clear(),n=0,s=await p()}return{json:s,files:t,badFiles:n}}var ln=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Ra=e=>typeof e=="number"&&Number.isFinite(e);function yo(e,t){if(!ln(e)||e.format!==ld)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>nr)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!ln(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of ut){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=ua(s);for(let o of i)if(!ln(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!ln(r.totals)||!Ra(r.totals.totalCents)||!Ra(r.totals.netCents)||!Ra(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number&&!(s==="quotes"&&r.source==="upload"))throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!Ra(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(Ra))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(ut.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:ln(e.files)?Object.keys(e.files).length:0}}function Pp(e){let t={};if(!ln(e))return t;for(let n of Object.keys(Ft)){if(!Object.hasOwn(e,n)||rd.includes(n)||od.includes(n))continue;let a=Ft[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?Ra(r):typeof r=="string"))continue;t[n]=s}else ln(a)?ln(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function pd({json:e,files:t,badFiles:n=0}){yo(e,t);let a=w.settings.aiApiKey||"",s=Pp(e.settings);return await _n(Bt,async r=>{for(let o of Bt)await r.clear(o);for(let o of ut)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:He(),at:ne(),user:w.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:ln(e.counts)?e.counts:null}})}),await Ln(),Za(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function fd(){await _n(Bt,async e=>{for(let t of Bt)await e.clear(t)}),await Ln(),Za()}async function wo(e=!0){let t=await ud({includeFiles:e});return et(t,cd()),await dd(),t.size}function Kp(){let[e,t]=k(""),[n,a]=k(null),s=ke(null);ce(()=>{rl().then(a)},[w.version]);async function i(c){t(c?"full":"lite");let p=await U(()=>wo(c));t(""),p!=null&&B(`Backup gespeichert (${Jt(p)})`,"good")}async function r(c){c&&(t("restore"),await U(async()=>{let p=await md(c),d=yo(p.json,p.files),u=d.counts;if(!await ue({title:"Backup einspielen?",text:`Das Backup vom ${d.exportedAt?Qe(d.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${u.companies} Unternehmen, ${u.customers} Kunden, ${u.services} Leistungen`,`${u.invoices} Rechnungen, ${u.quotes} Angebote, ${u.payments} Zahlungen`,`${u.expenses} Ausgaben, ${d.includesFiles?`${d.fileCount} Dateien (Belege, PDFs)`:"ohne Dateien"}`,...u.contracts?[`${u.contracts} Verträge`]:[],...u.appointments||u.notes||u.todos?[`${u.appointments||0} Termine, ${u.notes||0} Einträge in der Kundendokumentation, ${u.todos||0} To-dos`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let g=await pd(p);B(g.missingFiles?`Backup eingespielt. ${g.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),Y("/")}),t(""))}let o=w.settings;return l`<${J} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${yn} rows=${[["Letztes Backup",o.lastBackupAt?Qe(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${Jt(n.usage)}${n.quota?` von ${Jt(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${C} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${C} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Dateien<//>
      <${C} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${Ye} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>U(()=>rt("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function Fp(){let e=w.settings,[t,n]=k(e.aiApiKey||""),[a,s]=k(e.aiModel||Ft.aiModel),[i,r]=k(!1),[o,c]=k(""),p=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function d(){c("save");let m=await U(async()=>(await hl({aiApiKey:t.trim(),aiModel:a.trim()||Ft.aiModel}),!0));c(""),m&&B("KI-Einstellungen gespeichert","good")}async function u(){c("test");let m=await U(()=>su({apiKey:t.trim(),model:a.trim()}));c(""),m&&B("Verbindung steht – der API-Key funktioniert.","good")}return l`<${J} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${ve} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${C} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${ve} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${m=>s(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${C} variant="primary" busy=${o==="save"} disabled=${!p} onClick=${d}>Speichern<//>
      <${C} busy=${o==="test"} disabled=${!t.trim()} onClick=${u}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${C} variant="ghost" icon="trash" onClick=${async()=>{n(""),await U(()=>rt("aiApiKey","")),B("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${Ye} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>U(()=>rt("shrinkImages",m))} />
  <//>`}function vo({label:e,settingKey:t,hint:n}){let a=(Array.isArray(w.settings[t])?w.settings[t]:[]).join(`
`),[s,i]=k(a);ce(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(p=>p.trim()).filter(Boolean))];await U(async()=>(await rt(t,o),!0))&&B("Liste gespeichert","good")}return l`<div class="span-2">
    <${ie} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${C} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function Op(){let e=w.settings,[t,n]=k("de"),[a,s]=k("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[p,d]=k(c.subject),[u,m]=k(c.body);ce(()=>{d(c.subject),m(c.body)},[t,a,w.version]);let g=p!==c.subject||u!==c.body,h=e.reminderDays||[7,14,21];async function b(){await U(async()=>{if(r){let f=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));f[t]={subject:p,body:u},await rt("appointmentTemplates",f)}else if(i){let f=JSON.parse(JSON.stringify(e.reminderTemplates||{}));f[t]={...f[t]||{},[o]:{subject:p,body:u}},await rt("reminderTemplates",f)}else{let f=JSON.parse(JSON.stringify(e.emailTemplates||{}));f[t]={...f[t]||{},[a]:{subject:p,body:u}},await rt("emailTemplates",f)}return!0})&&B("Vorlage gespeichert","good")}return l`<${J} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${ve} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${xt.map((y,f)=>l`<label class="mini-field">
            <span>${y.label}</span>
            <${at} value=${h[f]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${y.label}: Tage nach Fälligkeit`}
              onChange=${$=>{let I=[...h];I[f]=$,U(()=>rt("reminderDays",I))}} />
          </label>`)}
        </div>
      <//>
      <${se} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...xt.map(y=>({id:`r${y.id}`,label:y.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${ve} class="span-2" label="Sprache">
        <${yt} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${Z} class="span-6" label="Betreff" value=${p} onInput=${d} />
      <${ie} class="span-6" label="Text" value=${u} onInput=${m} rows=${9} />
    </div>
    ${g&&l`<div class="button-row"><${C} variant="primary" onClick=${b}>Vorlage speichern<//></div>`}
  <//>`}function Vp(){let[e,t]=k(""),n=w.customers.length||w.invoices.length||w.expenses.length||w.services.length;async function a(){t("demo");let r=await U(async()=>(await Li(),!0));t(""),r&&(B("Beispieldaten geladen","good"),Y("/"))}async function s(){if(!await ue({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Verträge, hochgeladene PDFs, Termine, Kundendokumentation, To-dos, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await U(async()=>(await Fu(),!0));t(""),o&&(B("Daten gelöscht","good"),Y("/"))}async function i(){let r=await ue({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){B("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await U(async()=>(await fd(),await oo(),!0));t(""),o&&(B("Alle Daten gelöscht","good"),Y("/"))}return l`<${J} title="Daten">
    ${w.settings.demoLoaded&&l`<${Ce} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${C} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${C} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${C} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var qp=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function gd(){ge();let e=w.settings,[t,n]=k(e.userName||"");return ce(()=>{n(e.userName||"")},[e.userName]),l`
    <${we} title="Einstellungen" />
    <div class="form-page">
      <${J} title="Profil und Darstellung">
        <div class="form-grid">
          <${ve} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${C} disabled=${t===(e.userName||"")} onClick=${async()=>{await U(async()=>(await rt("userName",t.trim()),!0))&&B("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${ve} class="span-2" label="Darstellung">
            <${yt} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>U(()=>rt("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${Kp} />
      <${Fp} />
      <${J} title="Auswahllisten">
        <div class="form-grid">
          <${vo} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${vo} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${vo} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${Op} />
      <${Vp} />
      <${J} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${qp.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var xo={invoices:"Rechnungen",quotes:"Angebote",customers:"Kontakte",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",todos:"To-dos",system:"System"},Zp={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",nextSteps:"Nächste Schritte",todos:"To-dos",due:"Fällig",done:"Erledigt",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function hd(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function Gp({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${Zp[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${hd(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${hd(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function $d(){ge();let[e,t]=k(""),[n,a]=k(""),[s,i]=k(200),[r,o]=k(""),p=De(()=>[...w.audit].sort((u,m)=>u.at<m.at?1:-1),[w.version]).filter(u=>(!n||u.entity===n)&&Ee(e,u.action,u.label,u.user));function d(){Fi({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:p.map(u=>[u.at,u.user,u.action,xo[u.entity]||u.entity,u.label,u.prev?JSON.stringify(u.prev):"",u.next?JSON.stringify(u.next):""])})}return l`
    <${we} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${C} icon="download" disabled=${!p.length} onClick=${d}>CSV<//>
    <//>
    <div class="filters">
      <${pt} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(xo).map(([u,m])=>l`<option value=${u}>${m}</option>`)}
      </select>
      <span class="filter-note">${p.length} ${p.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${p.length===0?l`<${pe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${p.slice(0,s).map(u=>l`<tr key=${u.id}>
              <td class="nw">${Qe(u.at)}</td>
              <td><span class="cell-main">${u.action}</span><div class="cell-sub">${xo[u.entity]||u.entity}</div></td>
              <td>${u.label}</td>
              <td><${Gp} entry=${u} />
                ${u.entity==="invoices"&&u.prev&&u.prev.doc&&l`<${C} small icon="download" busy=${r===u.id}
                  onClick=${async()=>{o(u.id),await U(()=>po(u)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${u.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${p.length>s&&l`<div class="button-row center"><${C} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var Hp=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/contracts",label:"Verträge",icon:"file"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kontakte",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/todos",label:"To-dos",icon:"check"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function jp(){let[e,t]=k(!1),n=ke(null),a=me(),s=le();ce(()=>{if(!e)return;let o=p=>{n.current&&!n.current.contains(p.target)&&t(!1)},c=p=>{p.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),U(()=>rt("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${Xt(o.logoAssetId)?l`<img src=${Xt(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
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
  </div>`}function Oi(e,t){let n=Ls(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function Wp(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kontakte",w.customers.filter(s=>Ee(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:q(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>q(v("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",w.invoices.filter(s=>Ee(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||Oi(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",w.quotes.filter(s=>Ee(e,s.number,s.refNumber,s.title,a(s),(s.items||[]).map(i=>i.name).join(" "))||Oi(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${je(s)}${s.source==="upload"?" (PDF)":""}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Verträge",w.contracts.filter(s=>Ee(e,s.title,s.refNumber,a(s),s.notes)||Oi(e,s.amountCents)).map(s=>({key:s.id,label:`${s.title}, ${a(s)||"ohne Kontakt"}`,sub:[s.refNumber,s.amountCents!=null?j(s.amountCents,s.currency):""].filter(Boolean).join(", "),href:`/contracts?open=${s.id}`}))),n("Termine",w.appointments.filter(s=>Ee(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("To-dos",w.todos.filter(s=>Ee(e,s.title,s.note,a(s))).sort((s,i)=>Number(s.done)-Number(i.done)).map(s=>({key:s.id,label:`${s.done?"✓ ":""}${s.title}`,sub:[a(s),s.due?`fällig ${s.due.split("-").reverse().join(".")}`:""].filter(Boolean).join(", "),href:s.customerId?`/customers/${s.customerId}`:"/todos"}))),n("Leistungen",w.services.filter(s=>Ee(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:j(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",w.expenses.filter(s=>Ee(e,s.vendor,s.description,s.invoiceNumber,s.category)||Oi(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${j(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",w.companies.filter(s=>Ee(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function Qp(){let[e,t]=k(""),[n,a]=k(!1),[s,i]=k(0),r=ke(null),o=ke(null),c=De(()=>dn(e).trim().length>=2?Wp(e):[],[e,w.version]),p=c.flatMap(g=>g.items);ce(()=>{let g=b=>{(b.metaKey||b.ctrlKey)&&b.key.toLowerCase()==="k"&&(b.preventDefault(),o.current&&o.current.focus())},h=b=>{r.current&&!r.current.contains(b.target)&&a(!1)};return document.addEventListener("keydown",g),document.addEventListener("mousedown",h),()=>{document.removeEventListener("keydown",g),document.removeEventListener("mousedown",h)}},[]);function d(g){a(!1),t(""),o.current&&o.current.blur(),Y(g.href)}function u(g){g.key==="ArrowDown"?(g.preventDefault(),i(h=>Math.min(h+1,p.length-1))):g.key==="ArrowUp"?(g.preventDefault(),i(h=>Math.max(h-1,0))):g.key==="Enter"&&p[s]?(g.preventDefault(),d(p[s])):g.key==="Escape"&&(a(!1),g.target.blur())}let m=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${W} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kontakt, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${g=>{t(g.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${u} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&dn(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(g=>l`<div class="gsearch-group" key=${g.group}>
        <div class="gsearch-head">${g.group}</div>
        ${g.items.map(h=>{m+=1;let b=m;return l`<button type="button" key=${h.key} class=${`gsearch-item${b===s?" is-active":""}`}
            onMouseEnter=${()=>i(b)} onMouseDown=${y=>{y.preventDefault(),d(h)}}>
            <span>${h.label}</span><span class="cell-sub">${h.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function Yp(){let e=w.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${yt} label="Anzeigewährung" value=${e} onChange=${t=>U(()=>rt("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function Jp(){let[e,t]=k(!1),n=w.settings.changesSinceBackup||0;async function a(){t(!0);let s=await U(()=>wo(!0));t(!1),s!=null&&B("Backup gespeichert","good")}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${W} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function Xp({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${hs} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${hs} coll="invoices" id=${n} params=${s} />`:l`<${qu} id=${n} />`:l`<${Vu} params=${s} />`:t==="quotes"?n?n==="new"?l`<${hs} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${hs} coll="quotes" id=${n} params=${s} />`:l`<${Hu} id=${n} />`:l`<${Gu} />`:t==="customers"?n?l`<${Du} id=${n} />`:l`<${ku} />`:t==="appointments"?l`<${Ru} params=${s} />`:t==="todos"?l`<${kc} />`:t==="contracts"?l`<${hu} key=${s.open||"list"} params=${s} />`:t==="services"?l`<${Xc} />`:t==="expenses"?l`<${ou} />`:t==="recurring"?l`<${eu} />`:t==="finance"?l`<${nd} />`:t==="reports"?l`<${ad} params=${s} />`:t==="companies"?n?l`<${id} id=${n} />`:l`<${sd} />`:t==="settings"?l`<${gd} />`:t==="audit"?l`<${$d} />`:l`<${pe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${C} onClick=${()=>Y("/")}>Zum Dashboard<//><//>`:l`<${Ou} />`}function ef({route:e}){let[t,n]=Ho(a=>{console.error(a)});return ce(()=>{t&&n()},[e.raw]),t?l`<${pe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${C} onClick=${()=>{n(),Y("/")}}>Zum Dashboard<//>
    <//>`:l`<${Xp} key=${e.raw} route=${e} />`}function tf(){ge();let e=vl(),[t,n]=k(!1),a=me(),s=le();ce(()=>{n(!1)},[e.raw]),ce(()=>{let u=w.settings.theme;u==="light"||u==="dark"?document.documentElement.setAttribute("data-theme",u):document.documentElement.removeAttribute("data-theme")},[w.settings.theme]),ce(()=>{let u=m=>{if(kl())return;let g=yl(),h=w.settings.warnOnClose!==!1&&(w.settings.changesSinceBackup||0)>0;(g||h)&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[]);let[i,r]=k(!1);ce(()=>{let u=()=>r(!0);return window.addEventListener("bbc-db-replaced",u),()=>window.removeEventListener("bbc-db-replaced",u)},[]);let o=u=>u.exact?e.path===u.path:e.path===u.path||e.path.startsWith(`${u.path}/`),c=w.expenses.filter(u=>u.status==="review").length,p=no().length,d=wc();return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(u=>l`<i key=${u.id} style=${`background:${u.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${Hp.map((u,m)=>l`<ul class="nav-group" key=${m}>
            ${u.map(g=>l`<li key=${g.path}>
              <a href=${`#${g.path}`} class=${`nav-link${o(g)?" is-active":""}`} aria-current=${o(g)?"page":void 0}>
                <${W} name=${g.icon} /><span>${g.label}</span>
                ${g.path==="/expenses"&&c>0&&l`<span class="nav-count" title="Belege zu prüfen">${c}</span>`}
                ${g.path==="/appointments"&&p>0&&l`<span class="nav-count" title="Termine nachbereiten">${p}</span>`}
                ${g.path==="/todos"&&d>0&&l`<span class="nav-count" title="Fällige To-dos">${d}</span>`}
              </a>
            </li>`)}
          </ul>`)}
        </nav>
        <p class="sidebar-note">Daten liegen lokal in diesem Browser.</p>
      </aside>
      <div class="main">
        <header class="topbar">
          <button type="button" class="nav-toggle" aria-label="Navigation öffnen" aria-expanded=${t} onClick=${()=>n(!t)}><${W} name="menu" size=${20} /></button>
          <${jp} />
          <${Qp} />
          <div class="topbar-actions">
            <${Lu} />
            <${Yp} />
            <${Jp} />
            <${C} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{ma(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${w.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${ef} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${Tu} />
    <${zu} />
    <${Rl} />
    <${Bl} />
  `}async function nf(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await ml(),await Pu()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",Yi(l`<${tf} />`,e),af()}async function af(){if(w.settings.appVersion===ar)return;let e={invoices:w.invoices.length,customers:w.customers.length,expenses:w.expenses.length,quotes:w.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await rt("appVersion",ar)}catch{}t&&!w.settings.demoLoaded&&B(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kontakte, ${e.expenses} Ausgaben. ${nl}`,"good",15e3)}Al(e=>B(e,"bad",9e3));window.addEventListener("unhandledrejection",e=>{e.reason&&pa(e.reason)});nf();})();
