(()=>{var Ps,me,jo,La,Wo,_o,Hd,Ms={},Qo=[],jd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function pn(e,t){for(var n in t)e[n]=t[n];return e}function Yo(e){var t=e.parentNode;t&&t.removeChild(e)}function Xi(e,t,n){var a,s,i,r={};for(i in t)i=="key"?a=t[i]:i=="ref"?s=t[i]:r[i]=t[i];if(arguments.length>2&&(r.children=arguments.length>3?Ps.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)r[i]===void 0&&(r[i]=e.defaultProps[i]);return Us(e,r,a,s,null)}function Us(e,t,n,a,s){var i={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++jo};return me.vnode!=null&&me.vnode(i),i}function Ks(e){return e.children}function Pa(e,t){this.props=e,this.context=t}function na(e,t){if(t==null)return e.__?na(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?na(e):null}function Jo(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Jo(e)}}function Mo(e){(!e.__d&&(e.__d=!0)&&La.push(e)&&!zs.__r++||_o!==me.debounceRendering)&&((_o=me.debounceRendering)||Wo)(zs)}function zs(){for(var e;zs.__r=La.length;)e=La.sort(function(t,n){return t.__v.__b-n.__v.__b}),La=[],e.some(function(t){var n,a,s,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(a=[],(s=pn({},i)).__v=i.__v+1,er(o,i,s,n.__n,o.ownerSVGElement!==void 0,i.__h!=null?[r]:null,a,r??na(i),i.__h),nl(a,i),i.__e!=r&&Jo(i)))})}function Xo(e,t,n,a,s,i,r,o,c,p){var d,u,m,g,$,b,y,f=a&&a.__k||Qo,h=f.length;for(n.__k=[],d=0;d<t.length;d++)if((g=n.__k[d]=(g=t[d])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?Us(null,g,null,null,g):Array.isArray(g)?Us(Ks,{children:g},null,null,null):g.__b>0?Us(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(m=f[d])===null||m&&g.key==m.key&&g.type===m.type)f[d]=void 0;else for(u=0;u<h;u++){if((m=f[u])&&g.key==m.key&&g.type===m.type){f[u]=void 0;break}m=null}er(e,g,m=m||Ms,s,i,r,o,c,p),$=g.__e,(u=g.ref)&&m.ref!=u&&(y||(y=[]),m.ref&&y.push(m.ref,null,g),y.push(u,g.__c||$,g)),$!=null?(b==null&&(b=$),typeof g.type=="function"&&g.__k!=null&&g.__k===m.__k?g.__d=c=el(g,c,e):c=tl(e,g,m,f,$,c),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):e.value=""):c&&m.__e==c&&c.parentNode!=e&&(c=na(m))}for(n.__e=b,d=h;d--;)f[d]!=null&&(typeof n.type=="function"&&f[d].__e!=null&&f[d].__e==n.__d&&(n.__d=na(a,d+1)),sl(f[d],f[d]));if(y)for(d=0;d<y.length;d++)al(y[d],y[++d],y[++d])}function el(e,t,n){var a,s;for(a=0;a<e.__k.length;a++)(s=e.__k[a])&&(s.__=e,t=typeof s.type=="function"?el(s,t,n):tl(n,s,s,e.__k,s.__e,t));return t}function tl(e,t,n,a,s,i){var r,o,c;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(s),r=null;else{for(o=i,c=0;(o=o.nextSibling)&&c<a.length;c+=2)if(o==s)break e;e.insertBefore(s,i),r=i}return r!==void 0?r:s.nextSibling}function zo(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||jd.test(t)?n:n+"px"}function Rs(e,t,n,a,s){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||zo(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||zo(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?a||e.addEventListener(t,i?Po:Lo,i):e.removeEventListener(t,i?Po:Lo,i);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Lo(e){this.l[e.type+!1](me.event?me.event(e):e)}function Po(e){this.l[e.type+!0](me.event?me.event(e):e)}function er(e,t,n,a,s,i,r,o,c){var p,d,u,m,g,$,b,y,f,h,C,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,o=t.__e=n.__e,t.__h=null,i=[o]),(p=me.__b)&&p(t);try{e:if(typeof S=="function"){if(y=t.props,f=(p=S.contextType)&&a[p.__c],h=p?f?f.props.value:p.__:a,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in S&&S.prototype.render?t.__c=d=new S(y,h):(t.__c=d=new Pa(y,h),d.constructor=S,d.render=Qd),f&&f.sub(d),d.props=y,d.state||(d.state={}),d.context=h,d.__n=a,u=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),S.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=pn({},d.__s)),pn(d.__s,S.getDerivedStateFromProps(y,d.__s))),m=d.props,g=d.state,u)S.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(S.getDerivedStateFromProps==null&&y!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(y,h),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(y,d.__s,h)===!1||t.__v===n.__v){d.props=y,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(k){k&&(k.__=t)}),d.__h.length&&r.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(y,d.__s,h),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,g,$)})}d.context=h,d.props=y,d.state=d.__s,(p=me.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(a=pn(pn({},a),d.getChildContext())),u||d.getSnapshotBeforeUpdate==null||($=d.getSnapshotBeforeUpdate(m,g)),C=p!=null&&p.type===Ks&&p.key==null?p.props.children:p,Xo(e,Array.isArray(C)?C:[C],t,n,a,s,i,r,o,c),d.base=t.__e,t.__h=null,d.__h.length&&r.push(d),b&&(d.__E=d.__=null),d.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Wd(n.__e,t,n,a,s,i,r,c);(p=me.diffed)&&p(t)}catch(k){t.__v=null,(c||i!=null)&&(t.__e=o,t.__h=!!c,i[i.indexOf(o)]=null),me.__e(k,t,n)}}function nl(e,t){me.__c&&me.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(a){a.call(n)})}catch(a){me.__e(a,n.__v)}})}function Wd(e,t,n,a,s,i,r,o){var c,p,d,u=n.props,m=t.props,g=t.type,$=0;if(g==="svg"&&(s=!0),i!=null){for(;$<i.length;$++)if((c=i[$])&&(c===e||(g?c.localName==g:c.nodeType==3))){e=c,i[$]=null;break}}if(e==null){if(g===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),i=null,o=!1}if(g===null)u===m||o&&e.data===m||(e.data=m);else{if(i=i&&Ps.call(e.childNodes),p=(u=n.props||Ms).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!o){if(i!=null)for(u={},$=0;$<e.attributes.length;$++)u[e.attributes[$].name]=e.attributes[$].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if((function(b,y,f,h,C){var S;for(S in f)S==="children"||S==="key"||S in y||Rs(b,S,null,f[S],h);for(S in y)C&&typeof y[S]!="function"||S==="children"||S==="key"||S==="value"||S==="checked"||f[S]===y[S]||Rs(b,S,y[S],f[S],h)})(e,m,u,s,o),d)t.__k=[];else if($=t.props.children,Xo(e,Array.isArray($)?$:[$],t,n,a,s&&g!=="foreignObject",i,r,i?i[0]:n.__k&&na(n,0),o),i!=null)for($=i.length;$--;)i[$]!=null&&Yo(i[$]);o||("value"in m&&($=m.value)!==void 0&&($!==e.value||g==="progress"&&!$)&&Rs(e,"value",$,u.value,!1),"checked"in m&&($=m.checked)!==void 0&&$!==e.checked&&Rs(e,"checked",$,u.checked,!1))}return e}function al(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){me.__e(a,n)}}function sl(e,t,n){var a,s;if(me.unmount&&me.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||al(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){me.__e(i,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&sl(a[s],t,typeof e.type!="function");n||e.__e==null||Yo(e.__e),e.__e=e.__d=void 0}function Qd(e,t,n){return this.constructor(e,n)}function tr(e,t,n){var a,s,i;me.__&&me.__(e,t),s=(a=typeof n=="function")?null:n&&n.__k||t.__k,i=[],er(t,e=(!a&&n||t).__k=Xi(Ks,null,[e]),s||Ms,Ms,t.ownerSVGElement!==void 0,!a&&n?[n]:s?null:t.firstChild?Ps.call(t.childNodes):null,i,!a&&n?n:s?s.__e:t.firstChild,a),nl(i,e)}Ps=Qo.slice,me={__e:function(e,t){for(var n,a,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((a=n.constructor)&&a.getDerivedStateFromError!=null&&(n.setState(a.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(i){e=i}throw e}},jo=0,Pa.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=pn({},this.state),typeof e=="function"&&(e=e(pn({},n),this.props)),e&&pn(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Mo(this))},Pa.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Mo(this))},Pa.prototype.render=Ks,La=[],Wo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,zs.__r=0,Hd=0;var aa,it,Ko,Ls=0,Yi=[],Oo=me.__b,Fo=me.__r,Vo=me.diffed,qo=me.__c,Zo=me.unmount;function Ka(e,t){me.__h&&me.__h(it,e,Ls||t),Ls=0;var n=it.__H||(it.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function D(e){return Ls=1,Yd(rl,e)}function Yd(e,t,n){var a=Ka(aa++,2);return a.t=e,a.__c||(a.__=[n?n(t):rl(void 0,t),function(s){var i=a.t(a.__[0],s);a.__[0]!==i&&(a.__=[i,a.__[1]],a.__c.setState({}))}],a.__c=it),a.__}function ce(e,t){var n=Ka(aa++,3);!me.__s&&ar(n.__H,t)&&(n.__=e,n.__H=t,it.__H.__h.push(n))}function nr(e,t){var n=Ka(aa++,4);!me.__s&&ar(n.__H,t)&&(n.__=e,n.__H=t,it.__h.push(n))}function ye(e){return Ls=5,Se(function(){return{current:e}},[])}function Se(e,t){var n=Ka(aa++,7);return ar(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function il(e){var t=Ka(aa++,10),n=D();return t.__=e,it.componentDidCatch||(it.componentDidCatch=function(a){t.__&&t.__(a),n[1](a)}),[n[0],function(){n[1](void 0)}]}function Jd(){Yi.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(_s),e.__H.__h.forEach(Ji),e.__H.__h=[]}catch(t){e.__H.__h=[],me.__e(t,e.__v)}}),Yi=[]}me.__b=function(e){it=null,Oo&&Oo(e)},me.__r=function(e){Fo&&Fo(e),aa=0;var t=(it=e.__c).__H;t&&(t.__h.forEach(_s),t.__h.forEach(Ji),t.__h=[])},me.diffed=function(e){Vo&&Vo(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Yi.push(t)!==1&&Ko===me.requestAnimationFrame||((Ko=me.requestAnimationFrame)||function(n){var a,s=function(){clearTimeout(i),Go&&cancelAnimationFrame(a),setTimeout(n)},i=setTimeout(s,100);Go&&(a=requestAnimationFrame(s))})(Jd)),it=void 0},me.__c=function(e,t){t.some(function(n){try{n.__h.forEach(_s),n.__h=n.__h.filter(function(a){return!a.__||Ji(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],me.__e(a,n.__v)}}),qo&&qo(e,t)},me.unmount=function(e){Zo&&Zo(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(_s)}catch(n){me.__e(n,t.__v)}};var Go=typeof requestAnimationFrame=="function";function _s(e){var t=it;typeof e.__c=="function"&&e.__c(),it=t}function Ji(e){var t=it;e.__c=e.__(),it=t}function ar(e,t){return!e||e.length!==t.length||t.some(function(n,a){return n!==e[a]})}function rl(e,t){return typeof t=="function"?t(e):t}var ol=function(e,t,n,a){var s;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],o=t[i]?(t[0]|=r?1:2,n[t[i++]]):t[++i];r===3?a[0]=o:r===4?a[1]=Object.assign(a[1]||{},o):r===5?(a[1]=a[1]||{})[t[++i]]=o:r===6?a[1][t[++i]]+=o+"":r?(s=e.apply(o,ol(e,o,n,["",null])),a.push(s),o[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):a.push(o)}return a},Ho=new Map,l=function(e){var t=Ho.get(this);return t||(t=new Map,Ho.set(this,t)),(t=ol(this,t.get(e)||(t.set(e,t=(function(n){for(var a,s,i=1,r="",o="",c=[0],p=function(m){i===1&&(m||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,r):i===3&&(m||r)?(c.push(3,m,r),i=2):i===2&&r==="..."&&m?c.push(4,m,0):i===2&&r&&!m?c.push(5,0,!0,r):i>=5&&((r||!m&&i===5)&&(c.push(i,0,r,s),i=6),m&&(c.push(i,m,0,s),i=6)),r=""},d=0;d<n.length;d++){d&&(i===1&&p(),p(d));for(var u=0;u<n[d].length;u++)a=n[d][u],i===1?a==="<"?(p(),c=[c],i=3):r+=a:i===4?r==="--"&&a===">"?(i=1,r=""):r=a+r[0]:o?a===o?o="":r+=a:a==='"'||a==="'"?o=a:a===">"?(p(),i=1):i&&(a==="="?(i=5,s=r,r=""):a==="/"&&(i<5||n[d][u+1]===">")?(p(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):a===" "||a==="	"||a===`
`||a==="\r"?(p(),i=2):r+=a),i===3&&r==="!--"&&(i=4,c=c[0])}return p(),c})(e)),t),arguments,[])).length>1?t:t[0]}.bind(Xi);var je=()=>globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10),ve=e=>e===void 0?e:JSON.parse(JSON.stringify(e)),Bn=e=>String(e).padStart(2,"0");function sa(e){return`${e.getFullYear()}-${Bn(e.getMonth()+1)}-${Bn(e.getDate())}`}var V=()=>sa(new Date),ne=()=>new Date().toISOString();function $e(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,n,a]=e.split("-").map(Number),s=new Date(t,n-1,a);return s.getFullYear()===t&&s.getMonth()===n-1&&s.getDate()===a}function Oa(e){let[t,n,a]=e.split("-").map(Number);return new Date(t,n-1,a)}function Ce(e,t){let n=Oa(e);return n.setDate(n.getDate()+Number(t||0)),sa(n)}function Nt(e,t,n){let[a,s,i]=e.split("-").map(Number),r=n||i,o=s-1+Number(t||0),c=a+Math.floor(o/12),p=(o%12+12)%12,d=new Date(c,p+1,0).getDate();return`${c}-${Bn(p+1)}-${Bn(Math.min(r,d))}`}function gn(e,t){let n=Oa(t).getTime()-Oa(e).getTime();return Math.round(n/864e5)}var Os=e=>Number(e.slice(0,4)),ll=e=>Number(e.slice(5,7)),Fa=e=>e.slice(0,7),cl=e=>Math.floor((ll(e)-1)/3)+1,ul=e=>`${Os(e)}-Q${cl(e)}`;function sr(e,t){let n=`${e}-${Bn(t+1)}-01`,a=sa(new Date(e,t+1,0));return{from:n,to:a}}function ir(e,t){let n=`${e}-${Bn((t-1)*3+1)}-01`,a=sa(new Date(e,t*3,0));return{from:n,to:a}}var Rn=[{id:"month",label:"Aktueller Monat"},{id:"lastMonth",label:"Letzter Monat"},{id:"quarter",label:"Aktuelles Quartal"},{id:"lastQuarter",label:"Letztes Quartal"},{id:"year",label:"Aktuelles Jahr"},{id:"lastYear",label:"Letztes Jahr"},{id:"all",label:"Gesamter Zeitraum"},{id:"custom",label:"Frei wählbar"}];function yt(e,t=V(),n={}){let a=Os(t),s=ll(t)-1,i=cl(t);switch(e){case"month":return sr(a,s);case"lastMonth":return s===0?sr(a-1,11):sr(a,s-1);case"quarter":return ir(a,i);case"lastQuarter":return i===1?ir(a-1,4):ir(a,i-1);case"year":return{from:`${a}-01-01`,to:`${a}-12-31`};case"lastYear":return{from:`${a-1}-01-01`,to:`${a-1}-12-31`};case"custom":return{from:$e(n.from)?n.from:"0000-01-01",to:$e(n.to)?n.to:"9999-12-31"};default:return{from:"0000-01-01",to:"9999-12-31"}}}var tn=(e,t)=>!!e&&e>=t.from&&e<=t.to;function dl(e,t){let n=[],a=e.slice(0,7),s=t.slice(0,7),i=0;for(;a<=s&&i++<600;){n.push(a);let[r,o]=a.split("-").map(Number);a=o===12?`${r+1}-01`:`${r}-${Bn(o+1)}`}return n}function ml(e,t=V()){let n=[];for(let a=e-1;a>=0;a--)n.push(Nt(t.slice(0,7)+"-01",-a).slice(0,7));return n}var Xd=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],em=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],Ot=e=>`${Xd[Number(e.slice(5,7))-1]} ${e.slice(0,4)}`,ia=e=>em[Number(e.slice(5,7))-1];function hn(e,t={}){if(typeof e=="number")return e;if(e==null)return NaN;let n=String(e).trim().replace(/[\s  '’]/g,"").replace(/[€$]/g,"");if(n==="")return NaN;let a=!1;if(/^\(.*\)$/.test(n)&&(a=!0,n=n.slice(1,-1)),n.startsWith("-")?(a=!a,n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1)),!/^[\d.,]+$/.test(n))return NaN;let s=n.lastIndexOf("."),i=n.lastIndexOf(","),r;if(s>=0&&i>=0){let c=s>i?".":",",p=c==="."?",":".";r=n.split(p).join("").replace(c,".")}else if(i>=0){if(r=/^\d{1,3}(,\d{3}){2,}$/.test(n)?n.split(",").join(""):n.replace(",","."),(r.match(/\./g)||[]).length>1)return NaN}else if(s>=0){let c=(n.match(/\./g)||[]).length;if(r=/^\d{1,3}(\.\d{3})+$/.test(n)&&(c>1||!t.decimalOnly&&!/^0+\./.test(n))?n.split(".").join(""):n,(r.match(/\./g)||[]).length>1)return NaN}else r=n;let o=Number(r);return Number.isFinite(o)?a?-o:o:NaN}var fn=e=>String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss");function Ne(e,...t){let n=fn(e).trim();if(!n)return!0;let a=fn(t.filter(s=>s!=null).join("  "));return n.split(/\s+/).every(s=>a.includes(s))}function Tt(e,t,n=[]){let a=new Set([...Object.keys(e||{}),...Object.keys(t||{})]),s={},i={};for(let r of a){if(n.includes(r))continue;let o=e?e[r]:void 0,c=t?t[r]:void 0;JSON.stringify(o??null)!==JSON.stringify(c??null)&&(s[r]=o??null,i[r]=c??null)}return{prev:s,next:i,changed:Object.keys(i)}}function Ft(e){return String(e||"").replace(/[\\/:*?"<>|\u0000-\u001f]/g," ").replace(/\s+/g," ").trim().slice(0,150).replace(/[. ]+$/,"")}function Vt(e){return e==null?"":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(1).replace(".",",")} MB`}var rr=4,pl="bbc-finance",or="2026-10-15.3",fl="Neu: fester Backup-Ordner (Einstellungen → Backup-Ordner), To-dos farbig nach Fälligkeit, Leistungen mit Nummer und Tarif samt Excel-Import.",dt=["companies","customers","services","invoices","quotes","payments","expenses","attachments","recurring","reminders","rates","counters","audit","assets","appointments","notes","todos","contracts"],Un="USD";var Ae=["USD","EUR"],Fs=["USD","EUR","AED","GBP","CHF","CAD","AUD","PLN","TRY","SEK","DKK","NOK","CZK","JPY"],At=[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}],Va={draft:{label:"Entwurf",tone:"neutral"},issued:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},partial:{label:"Teilbezahlt",tone:"warn"},paid:{label:"Bezahlt",tone:"good"},overdue:{label:"Überfällig",tone:"bad"},cancelled:{label:"Storniert",tone:"mute"},credited:{label:"Gutschrift erstellt",tone:"mute"},credit_note:{label:"Gutschrift",tone:"neutral"}},ra={draft:{label:"Entwurf",tone:"neutral"},open:{label:"Erstellt",tone:"info"},sent:{label:"Versendet",tone:"info"},accepted:{label:"Angenommen",tone:"good"},declined:{label:"Abgelehnt",tone:"mute"},expired:{label:"Abgelaufen",tone:"warn"},invoiced:{label:"In Rechnung gestellt",tone:"good"}},tm=["Software","Marketing","Hosting","Personal","Freelancer","Reisen","Büro","Beratung","Versicherungen","Bankgebühren","Steuern","Sonstiges"],nm=["Website","SEO","Marketing","Social Media","Beratung","Hosting","Sonstiges"],am=["Überweisung","Kreditkarte","PayPal","Stripe","Lastschrift","Bar","Sonstige"],oa=["Stück","Stunde","Tag","Monat","Jahr","Pauschal","Paket"],qt={starter:{label:"Starter",tone:"good"},standard:{label:"Standard",tone:"info"}},_n=[{id:"monthly",label:"Monatlich",months:1},{id:"quarterly",label:"Quartalsweise",months:3},{id:"semiannual",label:"Halbjährlich",months:6},{id:"yearly",label:"Jährlich",months:12},{id:"custom",label:"Individuell",months:null}],Dt=[{id:1,label:"Zahlungserinnerung"},{id:2,label:"1. Mahnung"},{id:3,label:"2. Mahnung"}],Zt={userName:"",theme:"auto",activeCompany:"all",displayCurrency:"USD",appVersion:"",aiApiKey:"",aiModel:"claude-haiku-5-5",shrinkImages:!0,warnOnClose:!0,lastBackupAt:null,changesSinceBackup:0,demoLoaded:!1,seeded:!1,expenseCategories:tm,serviceCategories:nm,paymentMethods:am,reminderDays:[7,14,21],emailTemplates:{de:{invoice:{subject:"Rechnung {NUMBER}",body:`Guten Tag {CONTACT},

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
{SENDER}`}}}},Bt=()=>({id:je(),createdAt:ne(),updatedAt:ne()});function qa(e={}){return{...Bt(),name:"",shortName:"",legalForm:"",logoAssetId:"",brandColor:"#1E4D8C",street:"",zip:"",city:"",region:"",country:"",phone:"",email:"",website:"",taxId:"",vatId:"",registerInfo:"",bankName:"",accountHolder:"",iban:"",bic:"",altBank:"",otherPayment:"",invoicePrefix:"",invoicePattern:"{COMPANY} {YEAR} {NUMBER}",quotePrefix:"",quotePattern:"{COMPANY} {YEAR} {NUMBER}",creditPrefix:"",creditPattern:"{COMPANY} {YEAR} {NUMBER}",numberDigits:3,paymentTermDays:14,currency:Un,showSecondary:!0,showFxNote:!0,defaultTaxRate:0,taxLabel:"",taxNote:"",language:"de",invoiceText:"",quoteText:"",paymentTerms:"",footer:"",meetingProvider:"",meetingUrl:"",meetingDetails:"",meetingDuration:60,meetingTimeZone:"",archived:!1,...e}}var la=[{id:"teams",label:"Microsoft Teams"},{id:"zoom",label:"Zoom"},{id:"meet",label:"Google Meet"},{id:"other",label:"Anderer Dienst"}],Za=[{id:"video",label:"Videocall"},{id:"phone",label:"Telefon"},{id:"onsite",label:"Vor Ort"}],ca={planned:{label:"Geplant",tone:"info"},done:{label:"Stattgefunden",tone:"good"},cancelled:{label:"Abgesagt",tone:"mute"}},ua=[{id:"note",label:"Notiz"},{id:"call",label:"Telefonat"},{id:"email",label:"E-Mail"},{id:"meeting",label:"Gespräch"},{id:"task",label:"Aufgabe"}],Vs=["Europe/Berlin","Europe/Zurich","Europe/Vienna","Europe/Madrid","Europe/London","Asia/Dubai","America/New_York","America/Los_Angeles","UTC"],at=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}};function da(e,t={}){let n=t.start||"10:00",a=Number(e&&e.meetingDuration)||60,[s,i]=n.split(":").map(Number),r=Math.min(s*60+i+a,1439);return{...Bt(),companyId:e?e.id:"",customerId:"",contactName:"",title:"",date:V(),start:n,end:`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,timeZone:e&&e.meetingTimeZone||at(),kind:"video",meetingProvider:e&&e.meetingProvider||"",meetingUrl:e&&e.meetingUrl||"",meetingDetails:e&&e.meetingDetails||"",location:"",attendees:"",agenda:"",language:e&&e.language||"de",status:"planned",outcome:"",sequence:0,...t}}function Mn(e={}){return{...Bt(),title:"",due:"",customerId:"",companyId:"",appointmentId:"",note:"",done:!1,doneAt:null,...e}}function qs(e={}){return{...Bt(),customerId:"",companyId:"",date:V(),kind:"note",title:"",text:"",...e}}var gl=[{id:"customer",label:"Kunde"},{id:"contact",label:"Kontakt"}],Be=e=>!e||e.kind!=="contact";function Gt(e={}){return{...Bt(),kind:"customer",number:"",company:"",contact:"",firstName:"",lastName:"",street:"",houseNo:"",zip:"",city:"",region:"",country:"",email:"",phone:"",website:"",taxId:"",vatId:"",language:"",currency:"",paymentTermDays:null,notes:"",tags:[],active:!0,...e}}function Ht(e={}){return{...Bt(),code:"",tier:"",name:"",internalName:"",description:"",invoiceText:"",category:"",unit:"Stück",priceCents:0,currency:Un,taxRate:null,defaultQty:1,recurring:!1,companyId:"",active:!0,...e}}function Rt(e={}){return{id:je(),serviceId:"",name:"",description:"",qty:1,unit:"Stück",priceCents:0,discountPct:0,taxRate:0,...e}}function mt(e,t={}){let n=V();return{...Bt(),type:"invoice",companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,serviceDate:n,serviceDateEnd:"",paymentTermDays:e?e.paymentTermDays:14,dueDate:"",currency:e?e.currency:Un,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",quoteId:"",recurringId:"",relatedInvoiceId:"",finalizedAt:null,sentAt:null,cancelledAt:null,cancelReason:"",...t}}function zn(e,t={}){let n=V();return{...Bt(),companyId:e?e.id:"",customerId:"",number:null,status:"draft",issueDate:n,validUntil:"",currency:e?e.currency:Un,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.quoteText:"",paymentTerms:e?e.paymentTerms:"",footer:e?e.footer:"",showSecondary:e?e.showSecondary:!0,fx:null,totals:null,snapshot:null,internalNotes:"",invoiceId:"",finalizedAt:null,sentAt:null,decidedAt:null,...t}}function We(e){return e?e.number?e.number:e.source==="upload"?e.refNumber||e.title||"PDF-Angebot":"Entwurf":""}function hl(e,t={}){return zn(e,{source:"upload",status:"open",title:"",refNumber:"",attachmentIds:[],validUntil:"",intro:"",paymentTerms:"",footer:"",...t})}var ma={open:{label:"Offen",tone:"info"},signed:{label:"Unterschrieben",tone:"good"},ended:{label:"Beendet",tone:"mute"},declined:{label:"Nicht zustande gekommen",tone:"mute"}},Ga=[{id:"none",label:"Keine Angabe"},{id:"once",label:"Einmalig"},{id:"monthly",label:"Monatlich"},{id:"quarterly",label:"Quartalsweise"},{id:"semiannual",label:"Halbjährlich"},{id:"yearly",label:"Jährlich"}];function Ln(e,t={}){return{...Bt(),companyId:e?e.id:"",customerId:"",title:"",refNumber:"",status:"open",signedDate:"",startDate:"",endDate:"",noticePeriod:"",billing:"none",amountCents:null,currency:e?e.currency:Un,taxRate:e&&Number(e.defaultTaxRate)||0,quoteId:"",attachmentIds:[],notes:"",...t}}function Ha(e={}){return{...Bt(),companyId:"",status:"booked",vendor:"",category:"",description:"",invoiceNumber:"",invoiceDate:V(),paymentDate:"",netCents:0,taxCents:0,totalCents:0,currency:Un,fx:null,paymentMethod:"",attachmentIds:[],note:"",ai:null,...e}}function $n(e,t={}){return{...Bt(),name:"",companyId:e?e.id:"",customerId:"",interval:"monthly",customMonths:1,startDate:V(),nextDate:V(),endDate:"",anchorDay:null,active:!0,currency:e?e.currency:Un,language:e?e.language:"de",items:[],discount:{type:"pct",value:0},intro:e?e.invoiceText:"",paymentTermDays:e?e.paymentTermDays:14,servicePeriod:"month",generated:0,lastRunAt:null,...t}}function Z(e){if(!e)return"";let t=[e.firstName,e.lastName].filter(Boolean).join(" ");return e.company||t||e.contact||""}function rt(e){return e&&([e.firstName,e.lastName].filter(Boolean).join(" ")||e.contact)||""}var sm=4,ja=null,bn=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),im=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error||new Error("Transaktion abgebrochen"))});function pa(e){return e==="counters"||e==="settings"?"key":"id"}var Ut=[...dt,"settings","blobs"];function lr(){return ja||(ja=new Promise((e,t)=>{let n=indexedDB.open(pl,sm);n.onupgradeneeded=()=>{let a=n.result;for(let s of Ut){if(a.objectStoreNames.contains(s))continue;let i=a.createObjectStore(s,{keyPath:pa(s)});(s==="invoices"||s==="quotes")&&i.createIndex("number","number",{unique:!0}),(s==="payments"||s==="reminders")&&i.createIndex("invoiceId","invoiceId"),s==="audit"&&i.createIndex("at","at")}},n.onsuccess=()=>{let a=n.result;a.onversionchange=()=>{a.close(),ja=null;try{window.dispatchEvent(new CustomEvent("bbc-db-replaced"))}catch{}},e(a)},n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("Die Datenbank ist in einem anderen Tab blockiert."))}),ja)}async function fa(e){let t=await lr();return bn(t.transaction(e,"readonly").objectStore(e).getAll())}async function $l(e,t){let n=await lr();return bn(n.transaction(e,"readonly").objectStore(e).get(t))}async function Pn(e,t){let a=(await lr()).transaction(e,"readwrite"),s=im(a),i={get:(o,c)=>bn(a.objectStore(o).get(c)),put:(o,c)=>bn(a.objectStore(o).put(c)),del:(o,c)=>bn(a.objectStore(o).delete(c)),byIndex:(o,c,p)=>bn(a.objectStore(o).index(c).get(p)),allByIndex:(o,c,p)=>bn(a.objectStore(o).index(c).getAll(p)),clear:o=>bn(a.objectStore(o).clear())},r;try{r=await t(i)}catch(o){try{a.abort()}catch{}throw await s.catch(()=>{}),o}return await s,r}async function bl(){if(!navigator.storage||!navigator.storage.estimate)return null;try{return await navigator.storage.estimate()}catch{return null}}async function yl(){if(!navigator.storage||!navigator.storage.persist)return null;try{return await navigator.storage.persisted()?!0:await navigator.storage.persist()}catch{return null}}var v={ready:!1,version:0,settings:ve(Zt)},jt={};for(let e of dt)v[e]=[],jt[e]=new Map;var Hs=new Set;function wl(e){return Hs.add(e),()=>Hs.delete(e)}var Zs=0,cr=!1;function kl(){if(v.version+=1,Gs.clear(),Zs){cr=!0;return}for(let e of Hs)e(v.version)}async function xl(e){Zs+=1;try{return await e()}finally{if(Zs-=1,!Zs&&cr){cr=!1;for(let t of Hs)t(v.version)}}}var Kn=null;try{typeof window<"u"&&typeof BroadcastChannel<"u"&&(Kn=new BroadcastChannel("bbc-finance-sync"),Kn.onmessage=e=>{e.data==="changed"&&On()})}catch{Kn=null}var vl=new Set(dt.filter(e=>e!=="rates"));async function On(){let e=await Promise.all([...dt,"settings"].map(n=>fa(n)));dt.forEach((n,a)=>{jt[n]=new Map(e[a].map(s=>[s[pa(n)],s])),v[n]=e[a]});let t=ve(Zt);for(let n of e[dt.length])Object.hasOwn(Zt,n.key)&&(t[n.key]=n.value);v.settings=t,v.ready=!0,kl()}async function Dl(){await On(),yl()}var Ee=e=>v[e],w=(e,t)=>t?jt[e].get(t):void 0,Gs=new Map;function Sl(e,t){return Gs.has(e)||Gs.set(e,t()),Gs.get(e)}function Cl(e,t){return Sl(`group:${e}:${t}`,()=>{let n=new Map;for(let a of v[e]){let s=a[t];n.has(s)||n.set(s,[]),n.get(s).push(a)}return n})}var Il=Object.freeze([]),Qe=e=>Cl("payments","invoiceId").get(e)||Il,yn=e=>Cl("reminders","invoiceId").get(e)||Il,nn=e=>e&&jt.assets.get(e)?jt.assets.get(e).dataUrl:"",re=()=>Sl("activeCompanies",()=>v.companies.filter(e=>!e.archived).sort((e,t)=>e.createdAt<t.createdAt?-1:1));function de(){let e=v.settings.activeCompany;if(!e||e==="all")return null;let t=w("companies",e);return t&&!t.archived?t:null}function Ke(e){let t=de();return!t||e.companyId===t.id}function rm({action:e,entity:t,entityId:n,label:a,prev:s,next:i}){return{id:je(),at:ne(),user:v.settings.userName||"Lokaler Benutzer",action:e,entity:t||"",entityId:n||"",label:a||"",prev:s??null,next:i??null}}async function Q(e){let t=[],n=!1,a={},s=await Pn(Ut,async r=>{let o={get:r.get,byIndex:r.byIndex,allByIndex:r.allByIndex,put(p,d){return t.push({store:p,value:d}),vl.has(p)&&p!=="audit"&&(n=!0),r.put(p,d)},del(p,d){return t.push({store:p,id:d,del:!0}),vl.has(p)&&(n=!0),r.del(p,d)},clear(p){return t.push({store:p,clear:!0}),r.clear(p)},blobPut:(p,d)=>r.put("blobs",{id:p,blob:d}),blobDel:p=>r.del("blobs",p),audit(p){let d=rm(p);return t.push({store:"audit",value:d}),r.put("audit",d)},setting(p,d){return a[p]=d,r.put("settings",{key:p,value:d})}},c=await e(o);if(n&&!("changesSinceBackup"in a)){let p=await r.get("settings","changesSinceBackup"),d=p&&Number(p.value)||0;a.changesSinceBackup=d+1,await r.put("settings",{key:"changesSinceBackup",value:d+1})}return c}),i=new Set;for(let r of t)jt[r.store]&&(r.clear?jt[r.store]=new Map:r.del?jt[r.store].delete(r.id):jt[r.store].set(r.value[pa(r.store)],r.value),i.add(r.store));for(let r of i)v[r]=[...jt[r].values()];if(Object.keys(a).length&&(v.settings={...v.settings,...a}),kl(),Kn)try{Kn.postMessage("changed")}catch{}return s}function Wa(){if(Kn)try{Kn.postMessage("changed")}catch{}}async function ot(e,t){return Q(n=>n.setting(e,t))}async function El(e){return Q(async t=>{for(let[n,a]of Object.entries(e))await t.setting(n,a)})}function ge(){let[,e]=D(v.version);return ce(()=>wl(t=>e(t)),[]),v}var dr=new Set,Fn=null,Qa=Tl(),ur=!1;function Tl(){let e=(location.hash||"#/").replace(/^#/,""),[t,n=""]=e.split("?"),a=t.split("/").filter(Boolean).map(i=>{try{return decodeURIComponent(i)}catch{return i}}),s=Object.fromEntries(new URLSearchParams(n));return{path:"/"+a.join("/"),parts:a,params:s,raw:e}}async function mr(){if(ur){ur=!1;return}let e=Tl();if(e.raw!==Qa.raw){if(Fn){if(!await Fn()){ur=!0,location.hash=Qa.raw;return}Fn=null}Qa=e;for(let t of dr)t(Qa);window.scrollTo(0,0)}}window.addEventListener("hashchange",mr);function Y(e,{replace:t=!1}={}){let n="#"+e;t?(history.replaceState(null,"",n),mr()):location.hash===n?mr():location.hash=e}function vn(e){Fn=null,Y(e)}function Ws(e){Fn=e}function an(){Fn=null}var Al=()=>!!Fn;function Bl(){let[e,t]=D(Qa);return ce(()=>(dr.add(t),()=>dr.delete(t)),[]),e}var om=0,js=new Set,Vn=[];function U(e,t="info",n){let a=++om;Vn=[...Vn,{id:a,message:String(e),tone:t}].slice(-3),js.forEach(s=>s(Vn)),setTimeout(()=>gr(a),n||(t==="bad"?9e3:4500))}function gr(e){Vn=Vn.filter(t=>t.id!==e),js.forEach(t=>t(Vn))}function Rl(){let[e,t]=D(Vn);return ce(()=>(js.add(t),()=>js.delete(t)),[]),e}var Ul=0;function ga(e=2e3){Ul=Date.now()+e}var _l=()=>Date.now()<Ul;function ha(e){console.error(e);let t=e&&e.message?e.message:"Unbekannter Fehler";e&&e.name==="ConstraintError"?U("Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.","bad"):e&&e.name==="QuotaExceededError"?U("Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.","bad"):U(t,"bad")}async function _(e){try{return await e()}catch(t){ha(t);return}}var pr=new Set,fr=null;function Nl(e){fr=e,pr.forEach(t=>t(fr))}function Ml(){let[e,t]=D(fr);return ce(()=>(pr.add(t),()=>pr.delete(t)),[]),e}var lm=0;function ue(e){return new Promise(t=>{Nl({...e,id:++lm,resolve:n=>{Nl(null),t(n)}})})}var Qs=()=>ue({title:"Änderungen verwerfen?",text:"Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.",confirmLabel:"Verwerfen",cancelLabel:"Weiter bearbeiten",danger:!0});var cm={dashboard:"M3 10.5 10 4l7 6.5M5 9.5V16h10V9.5",invoice:"M6 3h6l3 3v11H6zM12 3v3h3M8.5 10h5M8.5 13h5",quote:"M5 4h10v9l-3 3H5zM12 16v-3h3M8 8h4",repeat:"M4 9a6 6 0 0 1 10.5-3.5L16 7M16 4v3h-3M16 11a6 6 0 0 1-10.5 3.5L4 13M4 16v-3h3",customers:"M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c.3-2.5 2-4 4.5-4s4.2 1.5 4.5 4M13 9.2a2.2 2.2 0 1 0-.6-4.3M14 12.2c1.700.4 2.8 1.700 3 3.800",services:"M4 6.5 10 3l6 3.5v7L10 17l-6-3.5zM4 6.500 10 10l6-3.500M10 10v7",expense:"M5 3h10v14l-2.5-1.500L10 17l-2.500-1.500L5 17zM8 7.5h4M8 10.500h4",finance:"M4 16V9M8 16V5M12 16v-5M16 16V7",reports:"M4 4v12h12M7 12l3-3 2 2 4-5",company:"M4 17V5l6-2v14M10 8l6 2v7M3 17h14M6.500 8v0M6.500 11v0M6.500 14v0M13 12.500v0M13 15v0",settings:"M10 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5zM10 3v2M10 15v2M3 10h2M15 10h2M5.050 5.050l1.400 1.400M13.550 13.550l1.400 1.400M5.050 14.950l1.400-1.400M13.550 6.450l1.400-1.400",log:"M10 5v5l3 2M10 17a7 7 0 1 0-6.300-4M3 16v-3h3",plus:"M10 4v12M4 10h12",search:"M9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10zM13 13l4 4",download:"M10 3v9M6.500 8.500 10 12l3.500-3.500M4 15.500h12",upload:"M10 13V4M6.500 7.500 10 4l3.500 3.500M4 15.500h12",check:"M4.500 10.500l3.500 3.500 7.500-8",x:"M5 5l10 10M15 5 5 15",chevronDown:"M5.500 7.500 10 12l4.500-4.500",chevronRight:"M7.500 5.500 12 10l-4.500 4.500",chevronLeft:"M12.500 5.500 8 10l4.500 4.500",arrowUp:"M10 16V4M5.500 8.500 10 4l4.500 4.500",arrowDown:"M10 4v12M5.500 11.500 10 16l4.500-4.500",trash:"M4 6h12M8 6V4h4v2M6 6l.700 10h6.600L14 6M8.500 9v4.500M11.500 9v4.500",edit:"M4 16l.700-3L13.500 4.200a1.400 1.400 0 0 1 2 0l.300.300a1.400 1.400 0 0 1 0 2L7 15.300zM12 5.700l2.300 2.300",mail:"M3 5h14v10H3zM3.500 5.500 10 11l6.500-5.500",copy:"M7 7h9v9H7zM4 13V4h9",more:"M5 10h.010M10 10h.010M15 10h.010",warn:"M10 3.500 17 16H3zM10 8.500v3.500M10 14.200v.010",info:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 9.500V14M10 6.500v.010",good:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM7 10.200l2.200 2.200L13.200 8",bad:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6.500v4M10 13.500v.010",clock:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 6v4l2.500 2",sparkle:"M10 3l1.600 4.400L16 9l-4.400 1.600L10 15l-1.600-4.400L4 9l4.400-1.600zM15.500 13.500l.500 1.500 1.500.500-1.500.500-.500 1.500-.500-1.500-1.500-.500 1.500-.500z",file:"M6 3h6l3 3v11H6zM12 3v3h3",image:"M3.500 4.500h13v11h-13zM3.500 13l3.500-3.500 3 3 2.500-2.500 4 4M12.500 8.200v.010",eye:"M2.500 10S5 5 10 5s7.500 5 7.500 5-2.500 5-7.500 5-7.500-5-7.500-5zM10 12.200a2.200 2.200 0 1 0 0-4.400 2.200 2.200 0 0 0 0 4.400z",send:"M17 3 3 9l5.500 2.200L17 3zM17 3l-6.300 14-2.200-5.800",undo:"M7 5 3.500 8.500 7 12M3.500 8.500H12a4.500 4.500 0 0 1 0 9h-2",money:"M3 6h14v8H3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.500 8.500v.010M14.500 11.500v.010",menu:"M3.500 6h13M3.500 10h13M3.500 14h13",shield:"M10 3l6 2v4.500c0 3.700-2.500 6.300-6 7.500-3.500-1.200-6-3.800-6-7.500V5z",refresh:"M16 10a6 6 0 1 1-1.800-4.300M16 4v3.500h-3.500",tag:"M3.500 3.500h6l7 7-6 6-7-7zM7 7v.010",calendar:"M4 5h12v11.5H4zM4 8.5h12M7.500 3v3.500M12.500 3v3.500M7 11.500h1.500M11.500 11.500H13M7 14h1.500",phone:"M6.500 3.500l2 3.500-1.500 1.500a8 8 0 0 0 4.500 4.500l1.500-1.500 3.500 2-1 2.500c-6 .500-11.500-5-11-11z",video:"M3 6h9.500v8H3zM12.500 9l4.500-2.500v7L12.500 11",note:"M5 3h7l3 3v11H5zM8 9h4.500M8 12h4.500M8 6h2",mic:"M10 3a2.500 2.500 0 0 1 2.500 2.500v4a2.500 2.500 0 0 1-5 0v-4A2.500 2.500 0 0 1 10 3zM5.500 9.500a4.500 4.500 0 0 0 9 0M10 14v3M7.500 17h5"};function W({name:e,size:t=18,class:n=""}){let a=cm[e];return a?l`<svg class=${`icon ${n}`} width=${t} height=${t} viewBox="0 0 20 20" fill="none"
    stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${a} />
  </svg>`:null}function hr(e,t){let n=BigInt(e),a=BigInt(t);a<0n&&(n=-n,a=-a);let s=n<0n;s&&(n=-n);let i=(2n*n+a)/(2n*a);return Number(s?-i:i)}function Js(e,t){let n=Number(e);if(!Number.isFinite(n))return 0;let a=Number((Math.abs(n)*t).toFixed(4)),s=Math.round(a);return n<0?-s:s}var $a=e=>Js(e,100);var um=e=>Js(e,1e3),Ll=e=>Js(e,100),zl=e=>Js(e,1e3);function $r(e){let t=um(e.qty),n=Math.round(Number(e.priceCents)||0),a=Math.min(Math.max(Ll(e.discountPct),0),1e4);return hr(BigInt(t)*BigInt(n)*BigInt(1e4-a),1000n*10000n)}function _t(e,t){if(!t.length)return[];let n=BigInt(Math.round(e)),a=t.map(m=>BigInt(Math.round(m))),s=a.reduce((m,g)=>m+g,0n);if(s===0n&&(a=a.map(m=>m<0n?-m:m),s=a.reduce((m,g)=>m+g,0n),s===0n)){let m=t.map(()=>0);return m[0]=Number(n),m}let i=m=>m<0n?-m:m,r=i(s),o=s<0n?a.map(m=>-m):a,c=i(n),p=[],d=[];o.forEach((m,g)=>{let $=c*m,b=$/r,y=$%r;y<0n&&(b-=1n,y+=r),p.push(b),d.push({i:g,r:y})});let u=c-p.reduce((m,g)=>m+g,0n);d.sort((m,g)=>m.r===g.r?m.i-g.i:m.r>g.r?-1:1);for(let m=0;u>0n&&m<d.length;m++,u-=1n)p[d[m].i]+=1n;return n<0n?p.map(m=>Number(-m)||0):p.map(m=>Number(m)||0)}function pt(e){let n=(e.items||[]).filter(m=>!m.isText).map(m=>({id:m.id,taxRate:Number(m.taxRate)||0,cents:$r(m)})),a=n.reduce((m,g)=>m+g.cents,0),s=0,i=e.discount||{},r=Number(i.value)||0;if(r>0)if(i.type==="abs")s=Math.round(r),a>=0?s=Math.min(s,a):s=-Math.min(s,-a);else{let m=Math.min(Ll(r),1e4);s=hr(BigInt(a)*BigInt(m),10000n)}let o=new Map;for(let m of n){let g=zl(m.taxRate),$=o.get(g)||{rate:m.taxRate,rateMilli:g,subtotalCents:0};$.subtotalCents+=m.cents,o.set(g,$)}let c=[...o.values()].sort((m,g)=>m.rateMilli-g.rateMilli),p=_t(s,c.map(m=>m.subtotalCents)),d=0;c.forEach((m,g)=>{m.discountCents=p[g]||0,m.netCents=m.subtotalCents-m.discountCents,m.taxCents=hr(BigInt(m.netCents)*BigInt(m.rateMilli),100000n),d+=m.taxCents});for(let m of c){let g=n.filter(b=>zl(b.taxRate)===m.rateMilli),$=_t(m.discountCents,g.map(b=>b.cents));g.forEach((b,y)=>{b.netCents=b.cents-($[y]||0)})}let u=a-s;return{lines:n,subtotalCents:a,discountCents:s,netCents:u,taxCents:d,totalCents:u+d,taxGroups:c.map(m=>({rate:m.rate,netCents:m.netCents,taxCents:m.taxCents}))}}var Ys=e=>{let t=Math.round(Math.abs(e));return(e<0?-t:t)||0};function dm(e,t){if(e==="USD")return 1;if(!t)return null;if(e==="EUR"){let a=Number(t.usdToEur);return Number.isFinite(a)&&a>0?1/a:null}let n=Number(t.rateToUSD);return Number.isFinite(n)&&n>0?n:null}function sn(e,t,n,a){if(t===n)return e;if(!a)return null;let s=Number(a.usdToEur),i=Number.isFinite(s)&&s>0;if(t==="USD"&&n==="EUR")return i?Ys(e*s):null;if(t==="EUR"&&n==="USD")return i?Ys(e/s):null;let r=dm(t,a);if(r==null)return null;let o=e*r;return n==="USD"?Ys(o):n==="EUR"&&i?Ys(o*s):null}var vt=(e,t,n)=>sn(e,t,"USD",n),Mt=(e,t,n)=>sn(e,t,"EUR",n);function Wt(e,t,n={}){let a=Number(t);return!Number.isFinite(a)||a<=0?null:{rateToUSD:e==="USD"?1:e==="EUR"?1/a:Number(n.rateToUSD)||null,usdToEur:a,date:n.date||null,forDate:n.forDate||null,forCurrency:e,fetchedAt:n.fetchedAt||null,source:n.source||"",manual:!!n.manual}}var _e=e=>(e||[]).reduce((t,n)=>t+(Number(n.amountCents)||0),0);function Qt(e,t,n){if(e.type==="credit_note")return e.status==="draft"?"draft":"credit_note";if(e.status==="draft"||e.status==="cancelled"||e.status==="credited")return e.status;let a=e.totals?e.totals.totalCents:0,s=_e(t);return s>=a?"paid":e.dueDate&&n&&e.dueDate<n?"overdue":s>0?"partial":e.status==="sent"?"sent":"issued"}function rn(e,t){if(e.type==="credit_note"||["draft","cancelled","credited"].includes(e.status))return 0;let n=e.totals?e.totals.totalCents:0;return Math.max(n-_e(t),0)}var br=e=>e.status!=="draft"&&e.status!=="cancelled";function zt(e,t){return["draft","accepted","declined","invoiced"].includes(e.status)?e.status:e.validUntil&&t&&e.validUntil<t?"expired":e.status==="sent"?"sent":"open"}var wn={de:"de-DE",en:"en-US"},yr=new Map;function ba(e,t){let n=e+JSON.stringify(t);return yr.has(n)||yr.set(n,new Intl.NumberFormat(e,t)),yr.get(n)}function j(e,t="USD",n="de"){if(e==null||!Number.isFinite(Number(e)))return"–";let a=Number(e)/100;try{return ba(wn[n]||wn.de,{style:"currency",currency:t,currencyDisplay:"narrowSymbol",minimumFractionDigits:2,maximumFractionDigits:2}).format(a)}catch{return`${a.toFixed(2)} ${t}`}}function Ya(e,t="USD"){let n=Number(e)/100;return Math.abs(n)<1e4?ba("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",maximumFractionDigits:0}).format(n):ba("de-DE",{style:"currency",currency:t,currencyDisplay:"narrowSymbol",notation:"compact",maximumFractionDigits:1}).format(n)}function ya(e,t,n){let a=j(e,t,n);return n==="en"?`${a} ${t}`:a}function qn(e,t="de",n=3){return e==null||!Number.isFinite(Number(e))?"":ba(wn[t]||wn.de,{maximumFractionDigits:n}).format(Number(e))}function St(e,t="de"){return e==null||!Number.isFinite(Number(e))?"":`${ba(wn[t]||wn.de,{maximumFractionDigits:3}).format(Number(e))}${t==="en"?"%":" %"}`}function va(e,t="de"){return Number.isFinite(Number(e))?ba(wn[t]||wn.de,{minimumFractionDigits:4,maximumFractionDigits:4}).format(Number(e)):""}function Kl(e){return e==null||e===""?"":(Number(e)/100).toFixed(2).replace(".",",")}function Ol(e,t=3){return e==null||e===""||!Number.isFinite(Number(e))?"":String(Number(Number(e).toFixed(t))).replace(".",",")}function F(e,t="de"){if(!e)return"";let n=Oa(e.slice(0,10));return t==="en"?n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):n.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}function Ye(e){if(!e)return"";let t=new Date(e);return`${t.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})}, ${t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})} Uhr`}var Fl={de:{invoice:"Rechnung",quote:"Angebot",credit_note:"Gutschrift",number_invoice:"Rechnungsnr.",number_quote:"Angebotsnr.",number_credit_note:"Gutschriftsnr.",date_invoice:"Rechnungsdatum",date_quote:"Angebotsdatum",date_credit_note:"Datum",serviceDate:"Leistungsdatum",servicePeriod:"Leistungszeitraum",dueDate:"Fällig am",validUntil:"Gültig bis",customerNo:"Kundennr.",draft:"Entwurf",draftMark:"ENTWURF",refInvoice:"zu Rechnung {NUMBER} vom {DATE}",pos:"Pos.",description:"Beschreibung",qty:"Menge",unit:"Einheit",price:"Einzelpreis",discount:"Rabatt",tax:"Steuer",amount:"Betrag",subtotal:"Zwischensumme",net:"Nettobetrag",total:"Gesamtbetrag",taxDefault:"Steuer",approx:"entspricht ca.",fxUsed:"Verwendeter Wechselkurs",payment:"Zahlungsinformationen",bank:"Bank",holder:"Kontoinhaber",dueLine:"Zahlbar bis {DATE}.",validLine:"Dieses Angebot ist gültig bis {DATE}.",vatId:"USt-IdNr.",taxId:"Steuernr.",phone:"Tel.",page:"Seite {P} von {N}"},en:{invoice:"Invoice",quote:"Quote",credit_note:"Credit note",number_invoice:"Invoice no.",number_quote:"Quote no.",number_credit_note:"Credit note no.",date_invoice:"Invoice date",date_quote:"Quote date",date_credit_note:"Date",serviceDate:"Service date",servicePeriod:"Service period",dueDate:"Due date",validUntil:"Valid until",customerNo:"Customer no.",draft:"Draft",draftMark:"DRAFT",refInvoice:"for invoice {NUMBER} dated {DATE}",pos:"No.",description:"Description",qty:"Qty",unit:"Unit",price:"Unit price",discount:"Discount",tax:"Tax",amount:"Amount",subtotal:"Subtotal",net:"Net amount",total:"Total",total_invoice:"Invoice total",taxDefault:"Tax",approx:"approx.",fxUsed:"Exchange rate used",payment:"Payment details",bank:"Bank",holder:"Account holder",dueLine:"Payment due by {DATE}.",validLine:"This quote is valid until {DATE}.",vatId:"VAT ID",taxId:"Tax ID",phone:"Phone",page:"Page {P} of {N}"}},Pl={Stück:"pc.",Stunde:"hour",Tag:"day",Monat:"month",Jahr:"year",Pauschal:"flat",Paket:"package"},Xs=(e,t)=>t==="en"&&Pl[e]?Pl[e]:e||"",Ct=(e,t)=>String(e).replace(/\{(\w+)\}/g,(n,a)=>a in t?t[a]:n);function Ja(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}var mm={"not-allowed":"Der Browser darf das Mikrofon nicht verwenden. Bitte in den Website-Einstellungen das Mikrofon erlauben.","service-not-allowed":"Die Spracherkennung ist in diesem Browser gesperrt. In Safari muss auf dem Mac die Diktierfunktion eingeschaltet sein (Systemeinstellungen → Tastatur → Diktierfunktion).",network:"Die Spracherkennung braucht eine Internetverbindung.","audio-capture":"Es wurde kein Mikrofon gefunden.","language-not-supported":"Deutsch wird von der Spracherkennung dieses Browsers nicht unterstützt."},pm=e=>mm[e]||`Die Spracherkennung ist fehlgeschlagen (${e}).`;function ei({lang:e="de-DE",onFinal:t,onInterim:n,onEnd:a,onError:s}){let i=window.SpeechRecognition||window.webkitSpeechRecognition,r=new i;return r.lang=e,r.continuous=!0,r.interimResults=!0,r.onresult=o=>{let c="";for(let p=o.resultIndex;p<o.results.length;p++){let d=o.results[p][0].transcript;o.results[p].isFinal?t&&t(d.trim()):c+=d}n&&n(c.trim())},r.onerror=o=>{o.error!=="no-speech"&&o.error!=="aborted"&&s&&s(pm(o.error))},r.onend=()=>{a&&a()},r.start(),()=>{try{r.stop()}catch{}}}function ti(e,t){let n=String(t||"").trim();if(!n)return e||"";let a=String(e||"");if(!a.trim())return n.charAt(0).toUpperCase()+n.slice(1);let s=/[\s\n]$/.test(a)?"":" ",i=/[.!?]\s*$/.test(a)?n.charAt(0).toUpperCase()+n.slice(1):n;return a+s+i}var fm=0,Zn=(e="f")=>Se(()=>`${e}-${++fm}`,[]);function E({variant:e="default",icon:t,onClick:n,disabled:a,type:s="button",title:i,small:r,busy:o,children:c,class:p="",...d}){let u=`btn btn-${e}${r?" btn-small":""}${c?"":" btn-icon"}${p?` ${p}`:""}`;return l`<button type=${s} class=${u} onClick=${n} disabled=${a||o}
    title=${i} aria-label=${c?void 0:i} ...${d}>
    ${t&&l`<${W} name=${o?"refresh":t} size=${r?16:18} class=${o?"spin":""} />`}
    ${c&&l`<span>${c}</span>`}
  </button>`}function we({label:e,hint:t,error:n,children:a,class:s="",htmlFor:i}){return l`<div class=${`field ${s}${n?" has-error":""}`}>
    ${e&&l`<label class="field-label" for=${i}>${e}</label>`}
    ${a}
    ${n?l`<div class="field-error">${n}</div>`:t&&l`<div class="field-hint">${t}</div>`}
  </div>`}function q({label:e,hint:t,error:n,value:a,onInput:s,type:i="text",class:r,...o}){let c=Zn();return l`<${we} label=${e} hint=${t} error=${n} class=${r} htmlFor=${c}>
    <input id=${c} class="input" type=${i} value=${a??""} onInput=${p=>s&&s(p.target.value)} ...${o} />
  <//>`}function gm({onText:e,label:t="Diktieren",small:n=!0,class:a=""}){let[s,i]=D(!1),[r,o]=D(""),c=ye(null);if(ce(()=>()=>{c.current&&c.current()},[]),!Ja())return null;function p(){if(s){c.current&&c.current();return}try{c.current=ei({onFinal:d=>e(d),onInterim:o,onEnd:()=>{i(!1),o(""),c.current=null},onError:d=>vr(d)}),i(!0)}catch(d){vr(d.message||String(d))}}return l`<span class=${`mic-wrap ${a}`}>
    <button type="button" class=${`mic-btn${s?" is-on":""}${n?" is-small":""}`} onClick=${p}
      title=${s?"Zuhören beenden":t} aria-label=${s?"Zuhören beenden":t} aria-pressed=${s}>
      <${W} name="mic" size=${n?15:20} />
    </button>
    ${s&&r&&l`<span class="mic-interim" aria-live="polite">${r}</span>`}
  </span>`}var vr=e=>{console.warn(e)},Vl=e=>{vr=e};function ie({label:e,hint:t,value:n,onInput:a,rows:s=3,class:i,dictate:r=!0,...o}){let c=Zn(),p=ye(null),d=u=>{let m=p.current?p.current.value:n;a&&a(ti(m,u))};return l`<${we} label=${e} hint=${t} class=${i} htmlFor=${c}>
    <div class=${r&&Ja()?"dictate-wrap":""}>
      <textarea id=${c} ref=${p} class="input textarea" rows=${s} value=${n??""} onInput=${u=>a&&a(u.target.value)} ...${o}></textarea>
      ${r&&a&&l`<${gm} onText=${d} class="dictate-mic" />`}
    </div>
  <//>`}function ae({label:e,hint:t,error:n,value:a,onChange:s,options:i,class:r,placeholder:o,...c}){let p=Zn();return l`<${we} label=${e} hint=${t} error=${n} class=${r} htmlFor=${p}>
    <select id=${p} class="input select" value=${a??""} onChange=${d=>s&&s(d.target.value)} ...${c}>
      ${o!=null&&l`<option value="">${o}</option>`}
      ${i.map(d=>{let u=typeof d=="object"?d:{id:d,label:d};return l`<option value=${u.id} selected=${String(u.id)===String(a??"")}>${u.label}</option>`})}
    </select>
  <//>`}function st({value:e,onChange:t,mode:n="number",digits:a=3,min:s,max:i,allowEmpty:r,class:o="",suffix:c,...p}){let d=C=>C==null||C===""?"":n==="money"?Kl(C):Ol(C,a),[u,m]=D(d(e)),[g,$]=D(!1),[b,y]=D(!1);ce(()=>{g||m(d(e))},[e,g]);function f(C){if(String(C).trim()===""){y(!1),t(r?null:0);return}let S=hn(C,{decimalOnly:n!=="money"});if(Number.isNaN(S)){y(!0);return}s!=null&&S<s&&(S=s),i!=null&&S>i&&(S=i),y(!1),t(n==="money"?$a(S):Number(S.toFixed(a)))}let h=l`<input class=${`input num ${b?"is-bad":""} ${c?`has-suffix${String(c).length>2?" suffix-long":""}`:""} ${o}`} type="text" inputmode="decimal" autocomplete="off"
    value=${u}
    onFocus=${C=>{$(!0),C.target.select()}}
    onInput=${C=>{m(C.target.value),f(C.target.value)}}
    onBlur=${C=>{$(!1),f(C.target.value)}}
    aria-invalid=${b} ...${p} />`;return c?l`<span class="input-wrap">${h}<span class="input-suffix">${c}</span></span>`:h}function Re({label:e,hint:t,error:n,class:a,...s}){let i=Zn();return l`<${we} label=${e} hint=${t} error=${n} class=${a} htmlFor=${i}>
    <${st} id=${i} ...${s} />
  <//>`}function Me({label:e,hint:t,error:n,value:a,onInput:s,class:i,...r}){let o=Zn();return l`<${we} label=${e} hint=${t} error=${n} class=${i} htmlFor=${o}>
    <input id=${o} class="input" type="date" value=${a??""} onInput=${c=>s(c.target.value)} ...${r} />
  <//>`}function Ge({label:e,checked:t,onChange:n,hint:a,disabled:s}){let i=Zn("c");return l`<div class="check">
    <input id=${i} type="checkbox" checked=${!!t} disabled=${s} onChange=${r=>n(r.target.checked)} />
    <label for=${i}>${e}${a&&l`<span class="check-hint">${a}</span>`}</label>
  </div>`}function wt({value:e,onChange:t,options:n,label:a}){return l`<div class="seg" role="group" aria-label=${a}>
    ${n.map(s=>l`<button type="button" class=${`seg-btn${String(s.id)===String(e)?" is-on":""}`}
      aria-pressed=${String(s.id)===String(e)} onClick=${()=>t(s.id)}>${s.label}</button>`)}
  </div>`}function kt({options:e,value:t,onChange:n,placeholder:a,onCreate:s,createLabel:i,freeText:r,text:o,onText:c,autoFocus:p,label:d,id:u,disabled:m}){let g=Zn("cb"),$=u||g,b=e.find(P=>P.id===t),[y,f]=D(!1),[h,C]=D(""),[S,k]=D(0),R=ye(null),G=ye(null),N=r?o??"":y?h:b?b.label:"",A=Se(()=>{let P=fn(r?y?o:"":h).trim();return(P?e.filter(ee=>fn(`${ee.label} ${ee.sub||""} ${ee.search||""}`).includes(P)):e).slice(0,50)},[e,h,o,y,r]);ce(()=>{if(!y)return;let P=z=>{R.current&&!R.current.contains(z.target)&&(f(!1),C(""))};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[y]),ce(()=>{p&&G.current&&G.current.focus()},[]);let x=s&&!r,B=A.length+(x?1:0);function I(P){n(P.id,P),f(!1),C("")}function K(P){if(P.key==="ArrowDown")P.preventDefault(),f(!0),k(z=>Math.min(z+1,B-1));else if(P.key==="ArrowUp")P.preventDefault(),k(z=>Math.max(z-1,0));else if(P.key==="Enter"){if(!y)return;if(r&&!A.length){f(!1);return}P.preventDefault(),S<A.length?I(A[S]):x&&(s(h),f(!1),C(""))}else P.key==="Escape"?y&&(P.stopPropagation(),f(!1),C("")):P.key==="Tab"&&(f(!1),C(""))}return l`<div class="combo" ref=${R}>
    <input ref=${G} id=${$} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${y} aria-label=${d} aria-autocomplete="list" disabled=${m}
      placeholder=${y&&b&&!r?b.label:a} value=${N}
      onClick=${()=>{f(!0),k(0)}}
      onInput=${P=>{f(!0),k(0),r?c(P.target.value):C(P.target.value)}}
      onKeyDown=${K} />
    ${!r&&l`<span class="combo-caret"><${W} name="chevronDown" size=${16} /></span>`}
    ${y&&B>0&&l`<ul class="combo-list" role="listbox">
      ${A.map((P,z)=>l`<li role="option" aria-selected=${z===S}
          class=${`combo-item${z===S?" is-active":""}${P.id===t?" is-selected":""}`}
          onMouseEnter=${()=>k(z)}
          onMouseDown=${ee=>{ee.preventDefault(),I(P)}}>
          <span class="combo-label">${P.label}</span>
          ${P.sub&&l`<span class="combo-sub">${P.sub}</span>`}
        </li>`)}
      ${x&&l`<li role="option" class=${`combo-item combo-create${S===A.length?" is-active":""}`}
          onMouseEnter=${()=>k(A.length)}
          onMouseDown=${P=>{P.preventDefault(),s(h),f(!1),C("")}}>
          <${W} name="plus" size=${16} />
          <span>${h.trim()?`„${h.trim()}“ ${i||"neu anlegen"}`:i?`Neu: ${i}`:"Neu anlegen"}</span>
        </li>`}
    </ul>`}
    ${y&&B===0&&!r&&l`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`}var hm={good:"good",bad:"bad",warn:"clock",info:"info",neutral:"edit",mute:"x"};function ze({tone:e="neutral",children:t,icon:n}){return l`<span class=${`badge badge-${e}`}>
    <${W} name=${n||hm[e]||"info"} size=${14} />${t}
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
  </div>`}function J({title:e,action:t,children:n,class:a="",flush:s}){return l`<section class=${`panel ${a}`}>
    ${(e||t)&&l`<div class="panel-head"><h2>${e}</h2>${t}</div>`}
    <div class=${s?"panel-body flush":"panel-body"}>${n}</div>
  </section>`}function xe({tone:e="info",children:t,action:n}){return l`<div class=${`notice notice-${e}`} role=${e==="bad"?"alert":"status"}>
    <${W} name=${e==="bad"?"bad":e==="warn"?"warn":e==="good"?"good":"info"} />
    <div class="notice-text">${t}</div>
    ${n}
  </div>`}function ni({company:e,size:t=10}){return e?l`<span class="co-dot" style=${`background:${e.brandColor};width:${t}px;height:${t}px`} title=${e.name}></span>`:null}function xt({label:e="Mehr",icon:t="more",items:n,variant:a="default",small:s}){let[i,r]=D(!1),o=ye(null);ce(()=>{if(!i)return;let p=u=>{o.current&&!o.current.contains(u.target)&&r(!1)},d=u=>{u.key==="Escape"&&r(!1)};return document.addEventListener("mousedown",p),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("keydown",d)}},[i]);let c=n.filter(Boolean);return c.length?l`<div class="menu" ref=${o}>
    <${E} variant=${a} icon=${t} small=${s} onClick=${()=>r(!i)} aria-haspopup="menu" aria-expanded=${i}>${e}<//>
    ${i&&l`<div class="menu-list" role="menu">
      ${c.map(p=>l`<button type="button" role="menuitem" class=${`menu-item${p.danger?" is-danger":""}`} disabled=${p.disabled}
        onClick=${()=>{r(!1),p.onClick()}}>
        ${p.icon&&l`<${W} name=${p.icon} size=${16} />`}<span>${p.label}</span>
      </button>`)}
    </div>`}
  </div>`:null}function Le({title:e,onClose:t,children:n,footer:a,size:s="md",onSubmit:i}){let r=ye(null);ce(()=>{let c=document.activeElement,p=r.current;if(p){let u=p.querySelector("[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary");u&&u.focus()}let d=u=>{if(u.key==="Escape"&&(u.stopPropagation(),t()),u.key==="Tab"&&p){let m=[...p.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])")].filter(b=>b.offsetParent!==null);if(!m.length)return;let g=m[0],$=m[m.length-1];u.shiftKey&&document.activeElement===g?(u.preventDefault(),$.focus()):!u.shiftKey&&document.activeElement===$&&(u.preventDefault(),g.focus())}};return document.addEventListener("keydown",d),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",d),document.body.classList.remove("modal-open"),c&&c.focus&&c.focus()}},[]);let o=l`
    <div class="modal-head">
      <h2>${e}</h2>
      <${E} variant="ghost" icon="x" title="Schließen" onClick=${t} />
    </div>
    <div class="modal-body">${n}</div>
    ${a&&l`<div class="modal-foot">${a}</div>`}`;return l`<div class="modal-backdrop" onMouseDown=${c=>{c.target===c.currentTarget&&t()}}>
    ${i?l`<form class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e} noValidate
          onSubmit=${c=>{c.preventDefault(),i()}}>${o}</form>`:l`<div class=${`modal modal-${s}`} ref=${r} role="dialog" aria-modal="true" aria-label=${e}>${o}</div>`}
  </div>`}function ql(){let e=Ml();return e?l`<${$m} key=${e.id} d=${e} />`:null}function $m({d:e}){let[t,n]=D(e.input&&e.input.value||""),a=()=>e.resolve(e.input?null:!1),s=()=>e.resolve(e.input?t:!0);return l`<${Le} title=${e.title} onClose=${a} size="sm" onSubmit=${s}
    footer=${l`
      <${E} onClick=${a}>${e.cancelLabel||"Abbrechen"}<//>
      <${E} variant=${e.danger?"danger":"primary"} type="submit">${e.confirmLabel||"OK"}<//>`}>
    ${e.text&&l`<p class="dialog-text">${e.text}</p>`}
    ${e.list&&l`<ul class="dialog-list">${e.list.map(i=>l`<li>${i}</li>`)}</ul>`}
    ${e.input&&(e.input.multiline?l`<${ie} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} rows=${3} />`:l`<${q} label=${e.input.label} value=${t} onInput=${n} placeholder=${e.input.placeholder} />`)}
  <//>`}function Zl(){let e=Rl();return l`<div class="toasts" aria-live="polite">
    ${e.map(t=>l`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${W} name=${t.tone==="bad"?"bad":t.tone==="good"?"good":"info"} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${()=>gr(t.id)}><${W} name="x" size=${14} /></button>
    </div>`)}
  </div>`}function Xe({columns:e,rows:t,onRowClick:n,rowKey:a=c=>c.id,initialSort:s,footer:i,empty:r,rowClass:o}){let[c,p]=D(s||null),d=Se(()=>{if(!c)return t;let m=e.find($=>$.key===c.key);if(!m||!m.sort)return t;let g=c.dir==="desc"?-1:1;return[...t].sort(($,b)=>{let y=m.sort($),f=m.sort(b);return y==null&&f==null?0:y==null?1:f==null?-1:typeof y=="number"&&typeof f=="number"?(y-f)*g:String(y).localeCompare(String(f),"de",{numeric:!0})*g})},[t,c,e]);if(!t.length&&r)return r;let u=m=>{m.sort&&p(g=>g&&g.key===m.key?{key:m.key,dir:g.dir==="asc"?"desc":"asc"}:{key:m.key,dir:m.align==="right"?"desc":"asc"})};return l`<div class="table-wrap">
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
  </div>`}function ft({options:e,value:t,onChange:n,label:a}){return l`<div class="chips" role="group" aria-label=${a}>
    ${e.map(s=>l`<button type="button" class=${`chip${s.id===t?" is-on":""}`} aria-pressed=${s.id===t}
      onClick=${()=>n(s.id)}>${s.label}${s.count!=null&&l`<span class="chip-count">${s.count}</span>`}</button>`)}
  </div>`}function gt({value:e,onInput:t,placeholder:n="Suchen"}){return l`<div class="search-box">
    <${W} name="search" size=${16} />
    <input class="input" type="search" value=${e} placeholder=${n} aria-label=${n}
      onInput=${a=>t(a.target.value)} />
  </div>`}function Oe({label:e,value:t,sub:n,tone:a,href:s,title:i}){let r=l`
    <div class="stat-label">${e}</div>
    <div class=${`stat-value${a?` tone-${a}`:""}`} title=${i}>${t}</div>
    ${n&&l`<div class="stat-sub">${n}</div>`}`;return s?l`<a class="stat is-link" href=${s}>${r}</a>`:l`<div class="stat">${r}</div>`}function kn({rows:e}){return l`<dl class="kv">
    ${e.filter(t=>t&&t[1]!=null&&t[1]!=="").map(([t,n])=>l`<div class="kv-row"><dt>${t}</dt><dd>${n}</dd></div>`)}
  </dl>`}var bm=/^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;function wr(e){let t=String(e.zip||"").trim(),n=String(e.city||"").trim(),a=String(e.region||"").trim();return bm.test(String(e.country||"").trim())?[n?a?`${n},`:n:"",a,t].filter(Boolean).join(" "):[t,n].filter(Boolean).join(" ")}var kr=e=>[e.street,e.houseNo].map(t=>String(t||"").trim()).filter(Boolean).join(" "),ym=(e,t)=>String(e||"").trim().toLowerCase()===String(t||"").trim().toLowerCase();function vm(e,t){return t==="quotes"?"quote":e.type==="credit_note"?"credit_note":"invoice"}function It(e,t,n={}){let a=vm(e,t),s=e.status==="draft",i=e.snapshot&&e.snapshot.company||w("companies",e.companyId)||{},r=e.snapshot&&e.snapshot.customer||w("customers",e.customerId)||null,o=e.language==="en"?"en":"de",c=Fl[o],p=e.currency||"USD",d=!s&&e.totals?e.totals:pt(e),u=O=>j(O,p,o),m=[i.name,kr(i),wr(i)].filter(Boolean).join(" · "),g=[];if(r){let O=rt(r);r.company&&g.push(r.company),O&&O!==r.company&&g.push(O);let Ue=kr(r);Ue&&g.push(Ue);let qe=wr(r);qe&&g.push(qe),r.country&&!ym(r.country,i.country)&&g.push(r.country)}let $=[];r&&r.vatId&&$.push(`${c.vatId}: ${r.vatId}`);let b=e.number||n.previewNumber||"",y=[];y.push([c[`number_${a}`],b||`(${c.draft})`]),y.push([c[`date_${a}`],F(e.issueDate,o)]),a!=="quote"&&e.serviceDate&&(e.serviceDateEnd&&e.serviceDateEnd!==e.serviceDate?y.push([c.servicePeriod,`${F(e.serviceDate,o)} – ${F(e.serviceDateEnd,o)}`]):y.push([c.serviceDate,F(e.serviceDate,o)])),a==="invoice"&&e.dueDate&&y.push([c.dueDate,F(e.dueDate,o)]),a==="quote"&&e.validUntil&&y.push([c.validUntil,F(e.validUntil,o)]),r&&r.number&&r.kind!=="contact"&&y.push([c.customerNo,r.number]);let f="";if(a==="credit_note"&&e.relatedInvoiceId){let O=w("invoices",e.relatedInvoiceId);O&&(f=Ct(c.refInvoice,{NUMBER:O.number,DATE:F(O.issueDate,o)}))}let h=e.items||[],C=h.some(O=>Number(O.discountPct)>0),k=new Set(h.map(O=>Number(O.taxRate)||0)).size>1,R=new Map(d.lines.map(O=>[O.id,O])),G=h.map((O,Ue)=>({pos:String(Ue+1),name:O.name||"",description:O.description||"",qty:qn(O.qty,o,3),unit:Xs(O.unit,o),price:u(O.priceCents),discount:Number(O.discountPct)>0?St(O.discountPct,o):"",tax:St(Number(O.taxRate)||0,o),amount:u(R.has(O.id)?R.get(O.id).cents:0)})),N=String(i.taxLabel||"").trim()||c.taxDefault,A=d.taxGroups.filter(O=>Number(O.rate)!==0),x=[],B=d.discountCents!==0;if((B||A.length)&&x.push({label:c.subtotal,value:u(d.subtotalCents)}),B){let O=e.discount||{},Ue=O.type==="abs"?c.discount:`${c.discount} ${St(O.value,o)}`;x.push({label:Ue,value:u(-d.discountCents)}),A.length&&x.push({label:c.net,value:u(d.netCents)})}for(let O of A){let Ue=A.length>1?` (${u(O.netCents)})`:"";x.push({label:`${N} ${St(O.rate,o)}${Ue}`,value:u(O.taxCents)})}x.push({label:c[`total_${a}`]||c.total,value:ya(d.totalCents,p,o),strong:!0});let I=null;if(e.showSecondary&&e.fx&&Number(e.fx.usdToEur)>0&&(p==="USD"||p==="EUR")){let O=p==="USD"?"EUR":"USD",Ue=sn(d.totalCents,p,O,e.fx);if(Ue!=null){let qe=p==="USD"?Number(e.fx.usdToEur):1/Number(e.fx.usdToEur);I={line:`${c.approx} ${ya(Ue,O,o)}`,fx:i.showFxNote===!1?"":`${c.fxUsed}: 1 ${p} = ${va(qe,o)} ${O}`}}}let K=[];a==="invoice"&&e.dueDate&&K.push(Ct(c.dueLine,{DATE:F(e.dueDate,o)})),a==="quote"&&e.validUntil&&K.push(Ct(c.validLine,{DATE:F(e.validUntil,o)})),a!=="credit_note"&&String(e.paymentTerms||"").trim()&&K.push(e.paymentTerms.trim()),String(i.taxNote||"").trim()&&K.push(i.taxNote.trim());let P=null;if(a==="invoice"){let O=[];i.accountHolder&&O.push([c.holder,i.accountHolder]),i.bankName&&O.push([c.bank,i.bankName]),i.iban&&O.push(["IBAN",i.iban]),i.bic&&O.push(["BIC",i.bic]);let Ue=[i.altBank,i.otherPayment].map(qe=>String(qe||"").trim()).filter(Boolean);(O.length||Ue.length)&&(P={title:c.payment,rows:O,extra:Ue})}let z=[i.name,kr(i),wr(i),i.country].filter(Boolean),ee=[i.phone?`${c.phone} ${i.phone}`:"",i.email,i.website].filter(Boolean),T=[i.taxId?`${c.taxId}: ${i.taxId}`:"",i.vatId?`${c.vatId}: ${i.vatId}`:"",i.registerInfo].filter(Boolean),X=Z(r),fe=b?`${b} ${X}`:`${c.draft} ${c[a]} ${X}`;return{kind:a,lang:o,isDraft:s,brandColor:/^#[0-9a-f]{6}$/i.test(i.brandColor||"")?i.brandColor:"#1E4D8C",logoUrl:nn(i.logoAssetId),companyName:i.name||"",title:c[a],number:b,subtitle:f,draftMark:s?c.draftMark:"",senderLine:m,recipient:g,recipientExtra:$,meta:y,intro:String(e.intro||"").trim(),columns:{discount:C,tax:k},labels:c,rows:G,sums:x,secondary:I,notes:K,payment:P,footerCols:[z,ee,T].filter(O=>O.length),footerText:String(e.footer||"").trim(),fileName:`${Ft(fe)}.pdf`}}var wm=/[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;function Gl(e){let t=[e.companyName,e.title,e.number,e.subtitle,e.senderLine,e.intro,e.footerText,...e.recipient,...e.recipientExtra,...e.meta.flat(),...e.rows.flatMap(a=>[a.name,a.description,a.unit]),...e.sums.flatMap(a=>[a.label,a.value]),...e.notes,...e.payment?[...e.payment.rows.flat(),...e.payment.extra]:[],...e.footerCols.flat()],n=new Set;for(let a of t)for(let s of String(a||""))wm.test(s)||n.add(s);return[...n].slice(0,16).join(" ")}var km=8e3;async function xm(e){let t=new AbortController,n=setTimeout(()=>t.abort(),km);try{let a=await fetch(e,{signal:t.signal,cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return await a.json()}finally{clearTimeout(n)}}var xr=e=>Number.isFinite(Number(e))&&Number(e)>0,Dr={frankfurterV2(e,t,n){if(!e||!xr(e.rate))throw new Error("Unerwartete Antwort");return{rate:Number(e.rate),date:e.date||null,source:"Frankfurter (Zentralbank-Referenzkurse)"}},frankfurterV1(e,t,n){let a=e&&e.rates&&e.rates[n];if(!xr(a))throw new Error("Unerwartete Antwort");return{rate:Number(a),date:e.date||null,source:"Frankfurter (EZB-Referenzkurse)"}},erApi(e,t,n){let a=e&&e.result==="success"&&e.rates&&e.rates[n];if(!xr(a))throw new Error("Unerwartete Antwort");let s=e.time_last_update_unix?new Date(e.time_last_update_unix*1e3).toISOString().slice(0,10):null;return{rate:Number(a),date:s,source:"ExchangeRate-API (open.er-api.com)"}}};function Dm(e,t,n){let a=n&&n<V(),s=[{url:`https://api.frankfurter.dev/v2/rate/${e}/${t}${a?`?date=${n}`:""}`,parse:Dr.frankfurterV2},{url:`https://api.frankfurter.dev/v1/${a?n:"latest"}?base=${e}&symbols=${t}`,parse:Dr.frankfurterV1}];return a||s.push({url:`https://open.er-api.com/v6/latest/${e}`,parse:Dr.erApi}),s}async function Hl(e,t,n){if(e===t)return{base:e,quote:t,rate:1,date:n||V(),fetchedAt:ne(),source:"gleiche Währung"};let a=n&&n<V()?n:V(),s=Sm(e,t,a);if(s)return s;let i=null;for(let o of Dm(e,t,n))try{let c=await xm(o.url),p=o.parse(c,e,t),d={id:`${e}_${t}_${a}`,base:e,quote:t,rate:p.rate,date:p.date||a,requestedDate:a,fetchedAt:ne(),source:p.source};return await Q(u=>u.put("rates",d)).catch(()=>{}),d}catch(c){i=c}let r=new Error("Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.");throw r.cause=i,r}function Gn(e){let t=V();return e&&e<t?e:t}function Sm(e,t,n){let a=`${e}_${t}_${n}`,s=Ee("rates").find(i=>i.id===a);return!s||n===V()&&Date.now()-new Date(s.fetchedAt).getTime()>6*3600*1e3?null:s}function Sr(e,t){let n=Ee("rates").filter(a=>a.base===e&&a.quote===t);return n.length?n.sort((a,s)=>a.fetchedAt<s.fetchedAt?1:-1)[0]:null}async function Hn(e,t){let n=await Hl("USD","EUR",t),a=1,s=n.source;if(e==="EUR")a=1/n.rate;else if(e!=="USD"){let i=await Hl(e,"USD",t);a=i.rate,s=i.source}return{rateToUSD:a,usdToEur:n.rate,date:n.date,forDate:Gn(t),forCurrency:e,fetchedAt:n.fetchedAt,source:s,manual:!1}}var Cm=["{COMPANY}","{YEAR}","{MONTH}","{NUMBER}"],Im={invoice:{prefix:"invoicePrefix",pattern:"invoicePattern",label:"Rechnung"},quote:{prefix:"quotePrefix",pattern:"quotePattern",label:"Angebot"},credit:{prefix:"creditPrefix",pattern:"creditPattern",label:"Gutschrift"}};function Yt(e){let t=String(e||"");if(!t.includes("{NUMBER}"))return"Das Muster braucht den Platzhalter {NUMBER}.";let n=(t.match(/\{[^}]*\}/g)||[]).filter(a=>!Cm.includes(a));return n.length?`Unbekannter Platzhalter: ${n.join(", ")}`:(t.match(/\{NUMBER\}/g)||[]).length>1?"{NUMBER} darf nur einmal vorkommen.":""}function Em(e,t){let n=String(e||""),a=t.slice(0,4),s=t.slice(5,7);return n.includes("{MONTH}")?n.includes("{YEAR}")?`${a}-${s}`:`M${s}-${a}`:n.includes("{YEAR}")?a:"all"}function jn(e,t,n,a){return`${e}:${t}:${Em(n,a)}`}function Cr(e,{prefix:t,dateISO:n,n:a,digits:s}){let i=Math.min(Math.max(Number(s)||3,1),10),r={"{COMPANY}":String(t||"").trim(),"{YEAR}":n.slice(0,4),"{MONTH}":n.slice(5,7),"{NUMBER}":String(a).padStart(i,"0")};return String(e).replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g,o=>r[o]).replace(/\s+/g," ").trim()}function Lt(e,t){let n=Im[t],a=e[n.prefix];return t==="credit"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} GS`.trim()),t==="quote"&&!String(a||"").trim()&&(a=`${String(e.invoicePrefix||"").trim()} A`.trim()),{prefix:a,pattern:e[n.pattern]||"{COMPANY} {YEAR} {NUMBER}",digits:e.numberDigits||3}}async function Ir(e,t,n,a,s){let{prefix:i,pattern:r,digits:o}=Lt(e,t),c=Yt(r);if(c)throw new Error(c);let p=Number(a)||0;for(let d=0;d<1e5;d++){p+=1;let u=Cr(r,{prefix:i,dateISO:n,n:p,digits:o});if(!await s(u))return{number:u,n:p}}throw new Error("Es konnte keine freie Belegnummer gefunden werden.")}var he=e=>({...e,updatedAt:ne()}),Ie=class extends Error{},L=e=>{throw new Ie(e)},Yl={invoice:"Rechnungen",quote:"Angebote",credit:"Gutschriften"},on=e=>$e(e)&&e>="2000-01-01"&&e<="2100-12-31";async function Xa(e,t){for(let r of["invoicePattern","quotePattern","creditPattern"]){let o=Yt(e[r]);o&&L(o)}String(e.name||"").trim()||L("Bitte einen Unternehmensnamen eintragen."),!String(e.invoicePrefix||"").trim()&&String(e.invoicePattern).includes("{COMPANY}")&&L("Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).");for(let r of Ee("companies"))if(!(r.id===e.id||r.archived))for(let o of["invoice","quote","credit"]){let c=Lt(e,o),p=Lt(r,o);c.pattern.includes("{COMPANY}")&&c.pattern===p.pattern&&String(c.prefix).trim().toLowerCase()===String(p.prefix).trim().toLowerCase()&&L(`${r.name} verwendet für ${Yl[o]} bereits das Präfix „${p.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`)}let n=w("companies",e.id),a=he(e),s=null;t&&(s={id:await Nm(t),dataUrl:t,createdAt:ne()},a={...a,logoAssetId:s.id});let i=Tt(n,a,["updatedAt","createdAt"]);return await Q(async r=>{s&&await r.put("assets",s),await r.put("companies",a),await r.audit({action:n?"Unternehmensdaten geändert":"Unternehmen angelegt",entity:"companies",entityId:a.id,label:a.name,prev:n?i.prev:null,next:i.next})}),a}async function Jl(e,t){let n=w("companies",e);if(!n)return;let a=he({...n,archived:t});await Q(async s=>{await s.put("companies",a),t&&v.settings.activeCompany===e&&await s.setting("activeCompany","all"),await s.audit({action:t?"Unternehmen archiviert":"Unternehmen reaktiviert",entity:"companies",entityId:e,label:n.name})})}function Nr(e){return Ee("invoices").some(t=>t.companyId===e)||Ee("quotes").some(t=>t.companyId===e)||Ee("expenses").some(t=>t.companyId===e)||Ee("recurring").some(t=>t.companyId===e)}async function Xl(e){let t=w("companies",e);t&&(Nr(e)&&L("Dieses Unternehmen hat bereits Belege und kann nur archiviert werden."),await Q(async n=>{await n.del("companies",e),v.settings.activeCompany===e&&await n.setting("activeCompany","all"),await n.audit({action:"Unternehmen gelöscht",entity:"companies",entityId:e,label:t.name,prev:ai(t)})}))}async function Nm(e){if(globalThis.crypto&&crypto.subtle){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return"asset-"+[...new Uint8Array(t)].slice(0,12).map(n=>n.toString(16).padStart(2,"0")).join("")}return"asset-"+je()}var ai=e=>{let t=ve(e);return delete t.snapshot,t},ec={customer:"K",contact:"KO"},jl=e=>Be(e)?"customer":"contact",tc=(e,t)=>new RegExp(`^${ec[e]}-\\d+$`).test(String(t||""));function xn(e="customer",t=Ee("customers")){let n=ec[e]||"K",a=new RegExp(`^${n}-(\\d+)$`),s=0;for(let i of t)for(let r of[i.number,...i.formerNumbers||[]]){let o=a.exec(r||"");o&&(s=Math.max(s,Number(o[1])))}return`${n}-${String(s+1).padStart(4,"0")}`}async function Wn(e){Z(e)||L("Bitte ein Unternehmen oder einen Namen eintragen.");let t=w("customers",e.id),n=he({...e,kind:jl(e)}),a=t?jl(t):n.kind;t&&a==="customer"&&n.kind==="contact"&&Ee("invoices").some(o=>o.customerId===n.id)&&L("Für diesen Kunden gibt es Rechnungen. Er bleibt Kunde."),t&&a!==n.kind&&tc(a,t.number)&&(!String(n.number||"").trim()||n.number===t.number)&&(n.formerNumbers=[...t.formerNumbers||[],t.number],n.number=""),String(n.number||"").trim()||(n.number=xn(n.kind,[...Ee("customers").filter(o=>o.id!==n.id),{formerNumbers:n.formerNumbers||[]}]));let s=Ee("customers").find(o=>o.id!==n.id&&o.number===n.number);s&&L(`Die Nummer ${n.number} ist bereits vergeben (${Z(s)}).`);let i=Tt(t,n,["updatedAt","createdAt"]),r=n.kind==="customer"?"Kunde":"Kontakt";return await Q(async o=>{await o.put("customers",n),await o.audit({action:t?a!==n.kind?n.kind==="customer"?"Kontakt zum Kunden gemacht":"Kunde als Kontakt geführt":`${r} geändert`:`${r} angelegt`,entity:"customers",entityId:n.id,label:Z(n),prev:t?i.prev:null,next:i.next})}),n}function Tr(e){return Ee("invoices").some(t=>t.customerId===e)||Ee("quotes").some(t=>t.customerId===e)||Ee("recurring").some(t=>t.customerId===e)||Ee("contracts").some(t=>t.customerId===e)}async function nc(e){let t=w("customers",e);t&&(Tr(e)&&L("Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden."),await Q(async n=>{let a=Ee("notes").filter(r=>r.customerId===e),s=Ee("appointments").filter(r=>r.customerId===e),i=Ee("todos").filter(r=>r.customerId===e);for(let r of a)await n.del("notes",r.id);for(let r of s)await n.del("appointments",r.id);for(let r of i)await n.del("todos",r.id);await n.del("customers",e),await n.audit({action:"Kunde gelöscht",entity:"customers",entityId:e,label:Z(t),prev:{...t,...a.length||s.length||i.length?{related:{notes:a,appointments:s,todos:i}}:{}}})}))}async function si(e){w("customers",e.customerId)||L("Bitte einen Kunden wählen."),$e(e.date)||L("Bitte ein gültiges Datum eintragen."),!String(e.text||"").trim()&&!String(e.title||"").trim()&&L("Bitte etwas eintragen.");let t=w("notes",e.id),n=he({...e,title:String(e.title||"").trim(),text:String(e.text||"").trim()}),a=Tt(t,n,["updatedAt","createdAt"]);return await Q(async s=>{await s.put("notes",n),await s.audit({action:t?"Kundennotiz geändert":"Kundennotiz angelegt",entity:"notes",entityId:n.id,label:`${Z(w("customers",n.customerId))}: ${n.title||n.text.slice(0,40)}`,prev:t?a.prev:null,next:t?a.next:{date:n.date,kind:n.kind,title:n.title}})}),n}async function ac(e){let t=w("notes",e);t&&await Q(async n=>{await n.del("notes",e),await n.audit({action:"Kundennotiz gelöscht",entity:"notes",entityId:e,label:Z(w("customers",t.customerId)),prev:t})})}var Wl=/^([01]\d|2[0-3]):[0-5]\d$/,Tm=["date","start","end","timeZone","title","kind","meetingProvider","meetingUrl","meetingDetails","location","agenda","status"];async function ii(e){w("companies",e.companyId)||L("Bitte das Unternehmen wählen, über das der Termin läuft."),on(e.date)||L("Bitte ein gültiges Datum eintragen."),(!Wl.test(e.start||"")||!Wl.test(e.end||""))&&L("Bitte Beginn und Ende als Uhrzeit eintragen."),e.end<=e.start&&L("Das Ende liegt vor dem Beginn.");let t=w("customers",e.customerId);!t&&!String(e.contactName||"").trim()&&!String(e.title||"").trim()&&L("Bitte einen Kunden wählen oder einen Gesprächspartner bzw. Titel eintragen.");let n=w("appointments",e.id),a=he({...e,title:String(e.title||"").trim()||(t?`Termin mit ${Z(t)}`:String(e.contactName||"").trim())});n&&Tm.some(i=>JSON.stringify(n[i]??"")!==JSON.stringify(a[i]??""))&&(a.sequence=(Number(n.sequence)||0)+1);let s=Tt(n,a,["updatedAt","createdAt","sequence"]);return await Q(async i=>{await i.put("appointments",a),await i.audit({action:n?"Termin geändert":"Termin angelegt",entity:"appointments",entityId:a.id,label:`${a.date} ${a.start}, ${a.title}`,prev:n?s.prev:null,next:n?s.next:{date:a.date,start:a.start,title:a.title}})}),a}async function ri(e,{outcome:t,nextSteps:n,todos:a=[]}){let s=w("appointments",e);s||L("Termin nicht gefunden.");let i=a.filter(c=>String(c.title||"").trim());for(let c of i)c.due&&!on(c.due)&&L(`Bitte die Fälligkeit von „${c.title}“ prüfen.`);let r=he({...s,status:"done",outcome:String(t||"").trim(),nextSteps:String(n||"").trim(),followUpAt:null});s.status!=="done"&&(r.sequence=(Number(s.sequence)||0)+1);let o=i.map(c=>Mn({title:String(c.title).trim(),due:c.due||"",customerId:s.customerId||"",companyId:s.companyId||"",appointmentId:s.id}));return await Q(async c=>{await c.put("appointments",r);for(let p of o)await c.put("todos",p);await c.audit({action:"Termin dokumentiert",entity:"appointments",entityId:e,label:`${s.date} ${s.start}, ${s.title}`,prev:{status:s.status,outcome:s.outcome||""},next:{status:"done",outcome:r.outcome,nextSteps:r.nextSteps,todos:o.map(p=>p.title).join(", ")}})}),{appointment:r,todos:o}}async function sc(e,t){let n=w("appointments",e);if(!n)return null;let a=he({...n,followUpAt:t});return await Q(async s=>{await s.put("appointments",a)}),a}async function es(e){String(e.title||"").trim()||L("Bitte beschreiben, was zu tun ist."),e.due&&!on(e.due)&&L("Bitte die Fälligkeit prüfen.");let t=w("todos",e.id),n=he({...e,title:String(e.title).trim()}),a=Tt(t,n,["updatedAt","createdAt"]);return t&&!a.changed.length||await Q(async s=>{await s.put("todos",n),await s.audit({action:t?"To-do geändert":"To-do angelegt",entity:"todos",entityId:n.id,label:n.title,prev:t?a.prev:null,next:t?a.next:{title:n.title,due:n.due}})}),n}async function ic(e,t=!0){let n=w("todos",e);if(!n)return null;let a=he({...n,done:!!t,doneAt:t?ne():null});return await Q(async s=>{await s.put("todos",a),await s.audit({action:t?"To-do erledigt":"To-do wieder geöffnet",entity:"todos",entityId:e,label:n.title,prev:{done:n.done},next:{done:!!t}})}),a}async function rc(e){let t=w("todos",e);t&&await Q(async n=>{await n.del("todos",e),await n.audit({action:"To-do gelöscht",entity:"todos",entityId:e,label:t.title,prev:t})})}async function oi(e,t,n){let a=w("appointments",e);a||L("Termin nicht gefunden."),["planned","done","cancelled"].includes(t)||L("Unbekannter Status.");let s=he({...a,status:t,outcome:n!=null?String(n).trim():a.outcome});return t!==a.status&&(s.sequence=(Number(a.sequence)||0)+1),await Q(async i=>{await i.put("appointments",s),await i.audit({action:t==="done"?"Termin dokumentiert":t==="cancelled"?"Termin abgesagt":"Termin wieder geplant",entity:"appointments",entityId:e,label:`${a.date} ${a.start}, ${a.title}`,prev:{status:a.status,outcome:a.outcome||""},next:{status:t,outcome:s.outcome||""}})}),s}async function oc(e){let t=w("appointments",e);t&&await Q(async n=>{for(let a of Ee("todos").filter(s=>s.appointmentId===e))await n.put("todos",he({...a,appointmentId:""}));await n.del("appointments",e),await n.audit({action:"Termin gelöscht",entity:"appointments",entityId:e,label:`${t.date} ${t.start}, ${t.title}`,prev:t})})}async function li(e){String(e.name||"").trim()||L("Bitte einen Namen für die Leistung eintragen.");let t=w("services",e.id),n=he({...e,code:String(e.code||"").trim()}),a=n.code&&Ee("services").find(i=>i.id!==n.id&&(i.code||"").toLowerCase()===n.code.toLowerCase());a&&L(`Die Leistungsnummer ${n.code} ist bereits vergeben (${a.name}).`);let s=Tt(t,n,["updatedAt","createdAt"]);return await Q(async i=>{await i.put("services",n),await i.audit({action:t?"Leistung geändert":"Leistung angelegt",entity:"services",entityId:n.id,label:n.name,prev:t?s.prev:null,next:s.next})}),n}async function lc(e,{companyId:t="",update:n=!1}={}){t&&!w("companies",t)&&L("Das gewählte Unternehmen existiert nicht.");let a=new Map(Ee("services").filter(p=>p.code).map(p=>[p.code.toLowerCase(),p])),s=[],i=[],r=[];for(let p of e){let{company:d,...u}=p,m=String(u.name||"").trim();if(!m)continue;let g=String(u.code||"").trim(),$=g?a.get(g.toLowerCase()):null;if($&&!n){r.push($);continue}let b=$||Ht(),y=he({...b,...u,name:m,code:g,companyId:t||u.companyId||b.companyId||"",id:b.id,createdAt:b.createdAt});$?i.push({before:$,rec:y}):s.push(y),g&&a.set(g.toLowerCase(),y)}let o=v.settings.serviceCategories||[],c=[...new Set([...s,...i.map(p=>p.rec)].map(p=>p.category).filter(p=>p&&!o.includes(p)))];return await Q(async p=>{for(let d of s)await p.put("services",d);for(let{rec:d}of i)await p.put("services",d);c.length&&await p.setting("serviceCategories",[...o,...c]),await p.audit({action:"Leistungen importiert",entity:"services",entityId:"",label:`${s.length} neu, ${i.length} aktualisiert, ${r.length} übersprungen`,prev:i.length?{aktualisiert:i.map(d=>({code:d.before.code,name:d.before.name,priceCents:d.before.priceCents}))}:null,next:{neu:s.map(d=>d.code||d.name),...c.length?{kategorien:c}:{}}})}),{added:s.length,updated:i.length,skipped:r.length,categories:c}}async function cc(e){let t=w("services",e);t&&await Q(async n=>{await n.del("services",e),await n.audit({action:"Leistung gelöscht",entity:"services",entityId:e,label:t.name,prev:t})})}function lt(e,t){return Rt({serviceId:e.id,name:e.name,description:e.invoiceText||e.description||"",qty:Number(e.defaultQty)||1,unit:e.unit||"Stück",priceCents:e.priceCents||0,taxRate:e.taxRate!=null&&e.taxRate!==""?Number(e.taxRate):Number(t&&t.defaultTaxRate)||0})}function Ar(e){return $e(e.issueDate)?Ce(e.issueDate,Number(e.paymentTermDays)||0):""}function Qn(e){let t=he({...e});return t.items=(t.items||[]).map(n=>({...n})),"paymentTermDays"in t&&(t.dueDate=Ar(t)),t.fx&&Ae.includes(t.currency)&&(t.fx=Wt(t.currency,t.fx.usdToEur,t.fx)),t.totals=pt(t),t}function uc(e,t){let n=!!(t&&t.status==="draft"&&t.number);if(n&&e.companyId!==t.companyId)throw new Ie(`Die Rechnung trägt bereits die Nummer ${t.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);e.number=n?t.number:null;for(let a of["reopened","revision","firstFinalizedAt","numberRef"])n&&t[a]!=null?e[a]=ve(t[a]):delete e[a];return n}async function wa(e){let t=w("invoices",e.id);t&&t.status!=="draft"&&L("Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden."),e.status!=="draft"&&L("Nur Entwürfe können gespeichert werden.");let n=Qn(e);return await Q(async a=>{let s=await a.get("invoices",n.id);if(s&&s.status!=="draft")throw new Ie("Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.");uc(n,s),await a.put("invoices",n),t&&t.fx&&n.fx&&n.fx.manual&&Number(t.fx.usdToEur)!==Number(n.fx.usdToEur)&&await a.audit({action:"Wechselkurs geändert",entity:"invoices",entityId:n.id,label:n.number||"Entwurf",prev:{usdToEur:t.fx.usdToEur,fxSource:t.fx.source},next:{usdToEur:n.fx.usdToEur,fxSource:n.fx.source}}),await a.audit({action:t?"Rechnungsentwurf geändert":"Rechnungsentwurf angelegt",entity:"invoices",entityId:n.id,label:`${n.number?`${n.number} (Entwurf)`:"Entwurf"}, ${Z(w("customers",n.customerId))||"ohne Kunde"}`,prev:t?{totalCents:t.totals&&t.totals.totalCents}:null,next:{totalCents:n.totals.totalCents}})}),n}async function Br(e){let t=w("invoices",e);if(t){if(t.number||t.status!=="draft"){await Rr(e);return}await Q(async n=>{let a=await n.get("invoices",e);if(a&&(a.status!=="draft"||a.number))throw new Ie("Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.");await n.del("invoices",e),await dc(n,t),await n.audit({action:"Rechnungsentwurf gelöscht",entity:"invoices",entityId:e,label:"Entwurf",prev:ai(t)})})}}async function Rr(e){let t=w("invoices",e);return t?t.type==="credit_note"?Mr(e):t.status==="draft"&&!t.number?(await Br(e),{number:""}):Q(async n=>{let a=await n.get("invoices",e);if(!a)return null;let s=await n.allByIndex("payments","invoiceId",e),i=await n.allByIndex("reminders","invoiceId",e),r=a.creditNoteId?await n.get("invoices",a.creditNoteId):null;r&&(await n.del("invoices",r.id),await Er(n,r,"credit"));for(let p of s)await n.del("payments",p.id);for(let p of i)await n.del("reminders",p.id);await n.del("invoices",e);let o=await Er(n,a,"invoice");await dc(n,a);let c=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId);return await n.audit({action:"Rechnung gelöscht",entity:"invoices",entityId:e,label:a.number,prev:{number:a.number,status:a.status,totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Z(c)||"",...s.length?{paymentsDeleted:s.length,paidCents:_e(s)}:{},...i.length?{remindersDeleted:i.length}:{},...r?{creditNote:r.number}:{},doc:ve(a),related:{payments:s,reminders:i,creditNote:r||null}},next:{freedNumber:o||""}}),{number:a.number,freed:o,payments:s.length,reminders:i.length,creditNumber:r?r.number:""}}):null}function ci(e,t="invoice"){let n=[],a=w("companies",e.companyId);a||n.push("Unternehmen auswählen"),w("customers",e.customerId)||n.push("Kunde auswählen"),$e(e.issueDate)?on(e.issueDate)||n.push("Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus"):n.push(t==="quote"?"Angebotsdatum eintragen":"Rechnungsdatum eintragen");let s=e.items||[];if(s.length||n.push("Mindestens eine Position hinzufügen"),s.some(i=>!String(i.name||"").trim())&&n.push("Jede Position braucht eine Bezeichnung"),t==="invoice"&&(e.serviceDate&&!$e(e.serviceDate)&&n.push("Leistungsdatum prüfen"),e.serviceDateEnd&&e.serviceDate&&e.serviceDateEnd<e.serviceDate&&n.push("Das Ende des Leistungszeitraums liegt vor dem Beginn")),t==="quote"&&e.validUntil&&e.issueDate&&e.validUntil<e.issueDate&&n.push("„Gültig bis“ liegt vor dem Angebotsdatum"),!e.fx||!(Number(e.fx.usdToEur)>0)?n.push("Wechselkurs laden oder eintragen"):!e.fx.manual&&e.fx.forDate&&$e(e.issueDate)&&e.fx.forDate!==Gn(e.issueDate)&&n.push("Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen"),Ae.includes(e.currency)||n.push("Währung wählen"),a&&w("customers",e.customerId)){let i=Gl(It(e,t==="quote"?"quotes":"invoices"));i&&n.push(`Diese Zeichen kann die PDF nicht darstellen: ${i} – bitte in lateinischer Schrift eintragen`)}if(a){let i=Yt(Lt(a,t==="quote"?"quote":"invoice").pattern);i&&n.push(i)}return n}async function ts(e,t,n){if(!e||!$e(n))return"";let{pattern:a}=Lt(e,t);if(Yt(a))return"";let s=jn(e.id,t,a,n),i=w("counters",s),r=new Set([...Ee("invoices"),...Ee("quotes")].map(c=>c.number).filter(Boolean)),{number:o}=await Ir(e,t,n,i?i.last:0,c=>r.has(c));return o}async function Ur(e,t,n,a){let{pattern:s}=Lt(t,n),i=jn(t.id,n,s,a),r=await e.get("counters",i)||{key:i,companyId:t.id,kind:n,last:0},{number:o,n:c}=await Ir(t,n,a,r.last,async p=>!!await e.byIndex("invoices","number",p)||!!await e.byIndex("quotes","number",p));return await e.put("counters",{...r,last:c,updatedAt:ne()}),{number:o,ref:{key:i,n:c}}}async function Er(e,t,n){if(!t||!t.number)return null;let a=t.numberRef&&t.numberRef.key&&Number(t.numberRef.n)>0?t.numberRef:null;if(!a){let i=await e.get("companies",t.companyId);if(!i||!$e(t.issueDate))return null;let{prefix:r,pattern:o,digits:c}=Lt(i,n);if(Yt(o))return null;let p=jn(i.id,n,o,t.issueDate),d=await e.get("counters",p);if(!d)return null;for(let u=Number(d.last)||0;u>=1;u--)if(Cr(o,{prefix:r,dateISO:t.issueDate,n:u,digits:c})===t.number){a={key:p,n:u};break}if(!a)return null}let s=await e.get("counters",a.key);return s?((Number(s.last)||0)>=a.n&&await e.put("counters",{...s,last:a.n-1,updatedAt:ne()}),t.number):null}async function dc(e,t){if(t.recurringId){let n=await e.get("recurring",t.recurringId);n&&n.nextDate===Nt(t.issueDate,gi(n),n.anchorDay)&&await e.put("recurring",he({...n,nextDate:t.issueDate,generated:Math.max(0,(n.generated||0)-1),active:n.endedByRun?!0:n.active,endedByRun:!1}))}if(t.quoteId){let n=await e.get("quotes",t.quoteId);n&&n.invoiceId===t.id&&await e.put("quotes",he({...n,invoiceId:"",status:n.status==="invoiced"?"accepted":n.status}))}}async function mc(e,t,n,a){let{pattern:s}=Lt(e,t),i=jn(e.id,t,s,n),r=w("counters",i),o=Math.max(0,Math.floor(Number(a)||0));await Q(async c=>{await c.put("counters",{key:i,companyId:e.id,kind:t,last:o,updatedAt:ne()}),await c.audit({action:"Nummernkreis angepasst",entity:"companies",entityId:e.id,label:`${e.name}, ${Yl[t]||t}`,prev:{last:r?r.last:0},next:{last:o}})})}function _r(e,t){return{company:ve(e),customer:ve(t),at:ne()}}async function ns(e){let t=ci(e,"invoice");t.length&&L(`Die Rechnung kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=w("companies",e.companyId),a=w("customers",e.customerId),s=w("invoices",e.id);s&&s.status!=="draft"&&L("Diese Rechnung ist bereits erstellt.");let i=Qn(e);return Q(async r=>{let o=await r.get("invoices",i.id);if(o&&o.status!=="draft")throw new Ie("Diese Rechnung wurde bereits in einem anderen Fenster erstellt.");let c=uc(i,o),p=c?i.reopened||{}:null;if(!c){let u=await Ur(r,n,"invoice",i.issueDate);i.number=u.number,i.numberRef=u.ref}i.status="issued",i.finalizedAt=ne(),i.sentAt=null;let d=await r.get("customers",i.customerId)||a;if(!Be(d)){let u=d.number,m=he({...d,kind:"customer"});tc("contact",u)&&(m.formerNumbers=[...d.formerNumbers||[],u],m.number=xn("customer",[...Ee("customers").filter(g=>g.id!==d.id),{formerNumbers:m.formerNumbers}])),await r.put("customers",m),await r.audit({action:"Kontakt zum Kunden gemacht",entity:"customers",entityId:m.id,label:Z(m),prev:{kind:"contact",number:u},next:{kind:"customer",number:m.number,reason:"Erste Rechnung"}}),d=m}if(i.snapshot=_r(n,d),c&&(i.revision=(Number(i.revision)||0)+1,delete i.reopened),await r.put("invoices",i),await r.audit({action:c?"Rechnung geändert und neu erstellt":"Rechnung erstellt",entity:"invoices",entityId:i.id,label:i.number,prev:c?{totalCents:p.totalCents,currency:p.currency,issueDate:p.issueDate,customer:p.customer,usdToEur:p.usdToEur}:void 0,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency,...c?{issueDate:i.issueDate,customer:Z(a)}:{},usdToEur:i.fx.usdToEur,fxSource:i.fx.source,fxManual:i.fx.manual}}),i.quoteId){let u=await r.get("quotes",i.quoteId);u&&u.status!=="invoiced"&&await r.put("quotes",he({...u,status:"invoiced",invoiceId:i.id}))}return i})}async function pc(e){let t=w("invoices",e);return t||L("Rechnung nicht gefunden."),t.type==="credit_note"&&L("Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen."),["issued","sent"].includes(t.status)||L("Diese Rechnung lässt sich nicht zurück in den Entwurf setzen."),Q(async n=>{let a=await n.get("invoices",e);if(!a||a.type==="credit_note"||!["issued","sent"].includes(a.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.");let s=a.snapshot&&a.snapshot.customer||await n.get("customers",a.customerId),i={totalCents:a.totals?a.totals.totalCents:0,currency:a.currency,issueDate:a.issueDate,customer:Z(s)||"",usdToEur:a.fx?a.fx.usdToEur:null},r=ne(),o=he({...a,status:"draft",sentAt:null,finalizedAt:null,firstFinalizedAt:a.firstFinalizedAt||a.finalizedAt||null,reopened:{at:r,finalizedAt:a.finalizedAt||null,wasSent:a.status==="sent",sentAt:a.sentAt||null,...i}});return delete o.snapshot,await n.put("invoices",o),await n.audit({action:"Rechnung zurück in den Entwurf gesetzt",entity:"invoices",entityId:e,label:a.number,prev:{status:a.status,...i,doc:ve(a)},next:{status:"draft"}}),o})}async function Yn(e,t=!0){let n=w("invoices",e);if(!n||!["issued","sent"].includes(n.status))return;let a=he({...n,status:t?"sent":"issued",sentAt:t?ne():null});await Q(async s=>{await s.put("invoices",a),await s.audit({action:t?"Rechnung versendet":"Versand zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:a.status}})})}async function ui(e,t,n){let a=w(e,t);a&&await Q(async s=>{await s.put(e,he({...a,internalNotes:n})),await s.audit({action:"Interne Notiz geändert",entity:e,entityId:t,label:a.number||"Entwurf",prev:{internalNotes:a.internalNotes},next:{internalNotes:n}})})}async function as(e,{date:t,amountCents:n,method:a,note:s,clarify:i}){let r=w("invoices",e);r||L("Rechnung nicht gefunden."),(r.type==="credit_note"||["draft","cancelled","credited"].includes(r.status))&&L("Zu diesem Beleg können keine Zahlungen erfasst werden."),$e(t)||L("Bitte ein gültiges Zahlungsdatum eintragen.");let o=Math.round(Number(n));o>0||L("Bitte einen Zahlungsbetrag größer als null eintragen."),o>rn(r,Qe(e))&&L("Der Betrag ist höher als der offene Rechnungsbetrag.");let c={id:je(),invoiceId:e,companyId:r.companyId,customerId:r.customerId,date:t,amountCents:o,currency:r.currency,method:a||"",note:s||"",createdAt:ne()};return await Q(async p=>{let d=await p.get("invoices",e),u=await p.allByIndex("payments","invoiceId",e);if(!d||d.type==="credit_note"||["draft","cancelled","credited"].includes(d.status))throw new Ie("Zu diesem Beleg können keine Zahlungen erfasst werden.");if(o>rn(d,u))throw new Ie("Der Betrag ist höher als der offene Rechnungsbetrag.");await p.put("payments",c);let m=[...u,c];await p.audit({action:"Zahlung eingetragen",entity:"invoices",entityId:e,label:r.number,prev:{status:Qt(d,u,V()),paidCents:_e(u)},next:{status:Qt(d,m,V()),paidCents:_e(m),amountCents:o,date:t,method:a}});let g=String(i||"").trim();g&&(await p.put("invoices",he({...d,clarify:{note:g,at:ne()}})),await p.audit({action:"Klärung vermerkt",entity:"invoices",entityId:e,label:r.number,prev:d.clarify?{note:d.clarify.note}:null,next:{note:g}}))}),c}async function fc(e,{date:t,amountCents:n,method:a,note:s}){w("payments",e)||L("Zahlung nicht gefunden."),$e(t)||L("Bitte ein gültiges Zahlungsdatum eintragen.");let r=Math.round(Number(n));return r>0||L("Bitte einen Betrag größer als null eintragen."),Q(async o=>{let c=await o.get("payments",e);if(!c)throw new Ie("Diese Zahlung gibt es nicht mehr.");let p=c.amountCents<0,d=await o.get("invoices",c.invoiceId),u=(await o.allByIndex("payments","invoiceId",c.invoiceId)).filter(f=>f.id!==e),m=p?-r:r,g=_e(u)+m;if(g<0)throw new Ie(p?"Der Betrag ist höher als die eingegangenen Zahlungen.":"Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.");let $=d&&d.totals?d.totals.totalCents:null;if(!p&&$!=null&&g>$)throw new Ie("Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.");let b={...c,date:t,amountCents:m,method:a||"",note:s||"",updatedAt:ne()},y=Tt(c,b,["updatedAt","createdAt"]);return Object.keys(y.next).length&&(await o.put("payments",b),await o.audit({action:p?"Erstattung geändert":"Zahlung geändert",entity:"invoices",entityId:c.invoiceId,label:d?d.number:"",prev:y.prev,next:y.next})),b})}async function gc(e,t){let n=String(t||"").trim();return n||L("Bitte kurz notieren, was zu klären ist."),Q(async a=>{let s=await a.get("invoices",e);if(!s||s.status==="draft")throw new Ie("Zu diesem Beleg lässt sich keine Klärung vermerken.");let i=he({...s,clarify:{note:n,at:s.clarify&&s.clarify.at||ne()}});return await a.put("invoices",i),await a.audit({action:s.clarify?"Klärungsvermerk geändert":"Klärung vermerkt",entity:"invoices",entityId:e,label:s.number,prev:s.clarify?{note:s.clarify.note}:null,next:{note:n}}),i})}async function hc(e,t){return Q(async n=>{let a=await n.get("invoices",e);if(!a||!a.clarify)return a;let s=he({...a});return delete s.clarify,await n.put("invoices",s),await n.audit({action:"Klärung erledigt",entity:"invoices",entityId:e,label:a.number,prev:{note:a.clarify.note},next:{result:String(t||"").trim()}}),s})}async function $c(e,{date:t,amountCents:n,method:a,note:s}){let i=w("invoices",e);i||L("Rechnung nicht gefunden."),i.status!=="credited"&&L("Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen."),$e(t)||L("Bitte ein gültiges Datum eintragen.");let r=Math.round(Number(n));r>0||L("Bitte einen Betrag größer als null eintragen.");let o={id:je(),invoiceId:e,companyId:i.companyId,customerId:i.customerId,date:t,amountCents:-r,currency:i.currency,method:a||"",note:s||"",kind:"refund",createdAt:ne()};return await Q(async c=>{let p=await c.allByIndex("payments","invoiceId",e);if(r>_e(p))throw new Ie("Der Betrag ist höher als die eingegangenen Zahlungen.");await c.put("payments",o),await c.audit({action:"Erstattung eingetragen",entity:"invoices",entityId:e,label:i.number,prev:{paidCents:_e(p)},next:{paidCents:_e(p)-r,amountCents:-r,date:t,method:a}})}),o}async function bc(e){let t=w("payments",e);if(!t)return;let n=w("invoices",t.invoiceId);await Q(async a=>{let s=(await a.allByIndex("payments","invoiceId",t.invoiceId)).filter(i=>i.id!==e);if(_e(s)<0)throw new Ie("Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.");await a.del("payments",e),await a.audit({action:t.amountCents<0?"Erstattung gelöscht":"Zahlung gelöscht",entity:"invoices",entityId:t.invoiceId,label:n?n.number:"",prev:{amountCents:t.amountCents,date:t.date,method:t.method,note:t.note}})})}async function di(e,t){let n=w("invoices",e);n&&(n.type==="credit_note"&&L("Eine Gutschrift kann nicht storniert werden."),["issued","sent"].includes(n.status)||L("Diese Rechnung kann nicht storniert werden."),_e(Qe(e))>0&&L("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen."),await Q(async a=>{let s=await a.get("invoices",e),i=await a.allByIndex("payments","invoiceId",e);if(!s||!["issued","sent"].includes(s.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.");if(_e(i)>0)throw new Ie("Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.");let r=he({...s,status:"cancelled",statusBeforeCancel:s.status,cancelledAt:ne(),cancelReason:t||""});await a.put("invoices",r),await a.audit({action:"Rechnung storniert",entity:"invoices",entityId:e,label:n.number,prev:{status:n.status},next:{status:"cancelled",reason:t||""}})}))}async function yc(e){return Q(async t=>{let n=await t.get("invoices",e);if(!n||n.status!=="cancelled")throw new Ie("Diese Rechnung ist nicht storniert.");let a=["issued","sent"].includes(n.statusBeforeCancel)?n.statusBeforeCancel:n.sentAt?"sent":"issued",s=he({...n,status:a});return delete s.statusBeforeCancel,delete s.cancelledAt,delete s.cancelReason,await t.put("invoices",s),await t.audit({action:"Stornierung zurückgenommen",entity:"invoices",entityId:e,label:n.number,prev:{status:"cancelled",reason:n.cancelReason||""},next:{status:a}}),s})}async function mi(e,t){let n=w("invoices",e);n||L("Rechnung nicht gefunden."),(n.type==="credit_note"||!["issued","sent"].includes(n.status))&&L("Für diesen Beleg kann keine Gutschrift erstellt werden.");let a=w("companies",n.companyId);a||L("Das Unternehmen dieser Rechnung existiert nicht mehr.");let s=V(),i={...mt(a),type:"credit_note",customerId:n.customerId,issueDate:s,serviceDate:n.serviceDate,serviceDateEnd:n.serviceDateEnd,paymentTermDays:0,dueDate:"",currency:n.currency,language:n.language,items:n.items.map(r=>({...r,id:je(),qty:-Number(r.qty)})),discount:ve(n.discount),intro:t||"",paymentTerms:"",footer:n.footer,showSecondary:n.showSecondary,fx:ve(n.fx),relatedInvoiceId:n.id,status:"issued"};return i.totals=pt(i),Q(async r=>{let o=await r.get("invoices",n.id);if(!o||!["issued","sent"].includes(o.status))throw new Ie("Die Rechnung wurde zwischenzeitlich geändert.");let c=await Ur(r,a,"credit",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.finalizedAt=ne(),i.snapshot={company:ve(a),customer:ve(n.snapshot?n.snapshot.customer:w("customers",n.customerId)),at:ne()},await r.put("invoices",i),await r.put("invoices",he({...o,status:"credited",statusBeforeCredit:o.status,creditNoteId:i.id})),await r.audit({action:"Gutschrift erstellt",entity:"invoices",entityId:n.id,label:`${i.number} zu ${n.number}`,prev:{status:o.status},next:{status:"credited",creditNote:i.number,totalCents:i.totals.totalCents,reason:t||""}}),i})}async function Mr(e){let t=w("invoices",e);t||L("Beleg nicht gefunden.");let n=t.type==="credit_note"?t.id:t.creditNoteId;return n||L("Zu dieser Rechnung gibt es keine Gutschrift."),Q(async a=>{let s=await a.get("invoices",n);if(!s||s.type!=="credit_note")throw new Ie("Diese Gutschrift gibt es nicht mehr.");let i=s.relatedInvoiceId?await a.get("invoices",s.relatedInvoiceId):null;if(i&&(await a.allByIndex("payments","invoiceId",i.id)).some(p=>p.amountCents<0))throw new Ie(`Zur Rechnung ${i.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);await a.del("invoices",n);let r=await Er(a,s,"credit"),o="";if(i&&i.status==="credited"){o=["issued","sent"].includes(i.statusBeforeCredit)?i.statusBeforeCredit:i.sentAt?"sent":"issued";let c=he({...i,status:o});delete c.creditNoteId,delete c.statusBeforeCredit,await a.put("invoices",c)}return await a.audit({action:"Gutschrift zurückgenommen",entity:"invoices",entityId:i?i.id:n,label:i?`${s.number} zu ${i.number}`:s.number,prev:{status:i?i.status:"credit_note",creditNote:s.number,totalCents:s.totals?s.totals.totalCents:0,doc:ve(s)},next:{...o?{status:o}:{},freedNumber:r||""}}),{creditNumber:s.number,invoiceId:i?i.id:"",invoiceNumber:i?i.number:""}})}function vc(e){let t=w("companies",e.companyId);return{...mt(t),customerId:e.customerId,currency:e.currency,language:e.language,items:e.items.map(n=>({...n,id:je()})),discount:ve(e.discount),intro:e.intro,paymentTerms:e.paymentTerms,footer:e.footer,paymentTermDays:e.paymentTermDays||(t?t.paymentTermDays:14),showSecondary:e.showSecondary}}async function wc(e){let t=w("quotes",e.id);t&&t.status!=="draft"&&L("Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.");let n=Qn(e);return await Q(async a=>{let s=await a.get("quotes",n.id);if(s&&s.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.");await a.put("quotes",n),await a.audit({action:t?"Angebotsentwurf geändert":"Angebotsentwurf angelegt",entity:"quotes",entityId:n.id,label:`Entwurf, ${Z(w("customers",n.customerId))||"ohne Kunde"}`,next:{totalCents:n.totals.totalCents}})}),n}async function kc(e){let t=w("quotes",e);t&&(t.status!=="draft"&&L("Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),await Q(async n=>{let a=await n.get("quotes",e);if(a&&a.status!=="draft")throw new Ie("Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.");await n.del("quotes",e),await n.audit({action:"Angebotsentwurf gelöscht",entity:"quotes",entityId:e,label:"Entwurf",prev:ai(t)})}))}async function ss(e){let t=ci(e,"quote");t.length&&L(`Das Angebot kann noch nicht erstellt werden: ${t.join(", ")}.`);let n=w("companies",e.companyId),a=w("customers",e.customerId),s=w("quotes",e.id);s&&s.status!=="draft"&&L("Dieses Angebot ist bereits erstellt.");let i=Qn(e);return Q(async r=>{let o=await r.get("quotes",i.id);if(o&&o.status!=="draft")throw new Ie("Dieses Angebot wurde bereits in einem anderen Fenster erstellt.");let c=await Ur(r,n,"quote",i.issueDate);return i.number=c.number,i.numberRef=c.ref,i.status="open",i.finalizedAt=ne(),i.snapshot=_r(n,a),await r.put("quotes",i),await r.audit({action:"Angebot erstellt",entity:"quotes",entityId:i.id,label:i.number,next:{number:i.number,totalCents:i.totals.totalCents,currency:i.currency}}),i})}var Ql={open:"Angebot wieder geöffnet",sent:"Angebot versendet",accepted:"Angebot angenommen",declined:"Angebot abgelehnt"};async function Jn(e,t){let n=w("quotes",e);if(!n||n.status==="draft"||n.status==="invoiced"||!Ql[t])return;let a=he({...n,status:t,sentAt:t==="sent"?ne():n.sentAt,decidedAt:["accepted","declined"].includes(t)?ne():null});await Q(async s=>{await s.put("quotes",a),await s.audit({action:Ql[t],entity:"quotes",entityId:e,label:We(n),prev:{status:n.status},next:{status:t}})})}async function xc(e){let t=w("quotes",e);t||L("Angebot nicht gefunden."),t.status==="draft"&&L("Bitte das Angebot zuerst erstellen."),t.invoiceId&&w("invoices",t.invoiceId)&&L("Zu diesem Angebot gibt es bereits eine Rechnung.");let n=w("companies",t.companyId);n||L("Das Unternehmen dieses Angebots existiert nicht mehr.");let a=w("customers",t.customerId),s=Qn({...mt(n),customerId:t.customerId,currency:t.currency,language:t.language,items:t.items.map(i=>({...i,id:je()})),discount:ve(t.discount),paymentTermDays:a&&a.paymentTermDays!=null&&a.paymentTermDays!==""?Number(a.paymentTermDays):n.paymentTermDays,showSecondary:t.showSecondary,quoteId:t.id});return await Q(async i=>{let r=await i.get("quotes",t.id);if(!r||r.status==="draft")throw new Ie("Das Angebot wurde zwischenzeitlich geändert.");if(r.invoiceId&&await i.get("invoices",r.invoiceId))throw new Ie("Zu diesem Angebot gibt es bereits eine Rechnung.");await i.put("invoices",s),await i.put("quotes",he({...r,status:r.status==="declined"?r.status:"accepted",invoiceId:s.id,decidedAt:r.decidedAt||ne()})),await i.audit({action:"Angebot in Rechnung umgewandelt",entity:"quotes",entityId:t.id,label:We(t),next:{invoiceDraftId:s.id}})}),s}async function Dc(e,t,n,a){let s={id:je(),name:t.name||"Dokument.pdf",mime:t.blob.type||"application/pdf",size:t.blob.size,ownerType:n,ownerId:a,createdAt:ne()};return await e.blobPut(s.id,t.blob),await e.put("attachments",s),s}async function pi(e,t){await e.del("attachments",t),await e.blobDel(t)}var Am=["open","sent","accepted","declined"];async function Sc(e,t=null){let n=w("quotes",e.id);n&&n.source!=="upload"&&L("Nur hochgeladene Angebote lassen sich so bearbeiten.");let a=w("companies",e.companyId),s=w("customers",e.customerId);a||L("Bitte das Unternehmen wählen, von dem das Angebot stammt."),s||L("Bitte den Kontakt wählen."),String(e.title||"").trim()||L("Bitte eine Bezeichnung eintragen, z. B. „Website-Relaunch“."),on(e.issueDate)||L("Bitte das Angebotsdatum eintragen."),e.validUntil&&(!on(e.validUntil)||e.validUntil<e.issueDate)&&L("„Gültig bis“ muss nach dem Angebotsdatum liegen."),Ae.includes(e.currency)||L("Bitte USD oder EUR wählen.");let i=e.items||[];(i.length!==1||!(Number(i[0].priceCents)>=0))&&L("Bitte den Betrag des Angebots eintragen.");let r=n&&n.status==="invoiced";!r&&!Am.includes(e.status)&&L("Unbekannter Status."),!t&&!(e.attachmentIds||[]).length&&L("Bitte das PDF des Angebots auswählen.");let o=Qn({...e,source:"upload",number:null,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim()});o.items=[{...i[0],name:o.title,qty:1}],o.totals=pt(o),r&&(o.status="invoiced"),o.finalizedAt=n&&n.finalizedAt||ne(),o.status==="sent"&&!o.sentAt&&(o.sentAt=ne()),["accepted","declined"].includes(o.status)&&!o.decidedAt&&(o.decidedAt=ne()),["open","sent"].includes(o.status)&&(o.decidedAt=null),o.snapshot=_r(a,s);let c=Tt(n,o,["updatedAt","createdAt","snapshot","totals","fx","attachmentIds"]);return Q(async p=>{if(t){for(let u of o.attachmentIds||[])await pi(p,u);let d=await Dc(p,t,"quote",o.id);o.attachmentIds=[d.id]}return await p.put("quotes",o),await p.audit({action:n?t?"PDF-Angebot ersetzt":"PDF-Angebot geändert":"PDF-Angebot hochgeladen",entity:"quotes",entityId:o.id,label:We(o),prev:n?c.prev:null,next:n?c.next:{title:o.title,totalCents:o.totals.totalCents,currency:o.currency}}),o})}async function Cc(e){let t=w("quotes",e);t&&(t.source!=="upload"&&L("Im Tool erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren."),t.invoiceId&&w("invoices",t.invoiceId)&&L("Zu diesem Angebot gibt es eine Rechnung. Es bleibt deshalb erhalten."),await Q(async n=>{for(let a of t.attachmentIds||[])await pi(n,a);for(let a of Ee("contracts").filter(s=>s.quoteId===e))await n.put("contracts",he({...a,quoteId:""}));await n.del("quotes",e),await n.audit({action:"PDF-Angebot gelöscht",entity:"quotes",entityId:e,label:We(t),prev:ai(t)})}))}async function is(e,{files:t=[],removeIds:n=[]}={}){let a=w("contracts",e.id);w("companies",e.companyId)||L("Bitte das Unternehmen wählen, mit dem der Vertrag besteht."),w("customers",e.customerId)||L("Bitte den Kontakt wählen."),String(e.title||"").trim()||L("Bitte eine Bezeichnung eintragen, z. B. „SEO-Betreuung“."),ma[e.status]||L("Unbekannter Status."),Ga.some(r=>r.id===e.billing)||L("Unbekannte Abrechnungsart.");for(let[r,o]of[["signedDate","Unterschrieben am"],["startDate","Beginn"],["endDate","Ende"]])e[r]&&!on(e[r])&&L(`Bitte das Datum „${o}“ prüfen.`);e.startDate&&e.endDate&&e.endDate<e.startDate&&L("Das Vertragsende liegt vor dem Beginn."),e.amountCents!=null&&!(Number(e.amountCents)>=0)&&L("Bitte den Betrag prüfen."),Ae.includes(e.currency)||L("Bitte USD oder EUR wählen."),e.quoteId&&!w("quotes",e.quoteId)&&L("Das verknüpfte Angebot existiert nicht mehr.");let s=he({...e,title:String(e.title).trim(),refNumber:String(e.refNumber||"").trim(),amountCents:e.amountCents==null||e.amountCents===""?null:Math.round(Number(e.amountCents)),attachmentIds:(e.attachmentIds||[]).filter(r=>!n.includes(r))}),i=Tt(a,s,["updatedAt","createdAt","attachmentIds"]);return Q(async r=>{for(let c of n)await pi(r,c);for(let c of t)s.attachmentIds.push((await Dc(r,c,"contract",s.id)).id);await r.put("contracts",s);let o=[t.length&&`${t.length} PDF hinzugefügt`,n.length&&`${n.length} PDF entfernt`].filter(Boolean).join(", ");return await r.audit({action:a?"Vertrag geändert":"Vertrag angelegt",entity:"contracts",entityId:s.id,label:s.title,prev:a?i.prev:null,next:a?{...i.next,...o?{dateien:o}:{}}:{title:s.title,status:s.status,...o?{dateien:o}:{}}}),s})}async function Ic(e){let t=w("contracts",e);t&&await Q(async n=>{for(let a of t.attachmentIds||[])await pi(n,a);for(let a of Ee("invoices").filter(s=>s.contractId===e)){let s=await n.get("invoices",a.id);s&&await n.put("invoices",{...s,contractId:""})}for(let a of Ee("recurring").filter(s=>s.contractId===e))await n.put("recurring",he({...a,contractId:""}));await n.del("contracts",e),await n.audit({action:"Vertrag gelöscht",entity:"contracts",entityId:e,label:t.title,prev:t})})}function fi(e){let t=Ga.find(n=>n.id===e.billing);return Rt({name:e.title,description:e.refNumber?`Gemäß Vertrag ${e.refNumber}`:"",qty:1,unit:t&&["monthly","quarterly","semiannual","yearly"].includes(t.id)?{monthly:"Monat",quarterly:"Quartal",semiannual:"Halbjahr",yearly:"Jahr"}[t.id]:"Pauschale",priceCents:e.amountCents||0,taxRate:Number(e.taxRate)||0})}async function Dn(e){let t=w("expenses",e.id),n=he({...e});n.status!=="review"&&(w("companies",n.companyId)||L("Bitte ein Unternehmen auswählen."),on(n.invoiceDate)||L("Bitte ein gültiges Rechnungsdatum eintragen."),Math.round(n.netCents||0)+Math.round(n.taxCents||0)!==Math.round(n.totalCents||0)&&L("Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen."),String(n.vendor||"").trim()||L("Bitte einen Lieferanten eintragen."),n.paymentDate&&!on(n.paymentDate)&&L("Bitte das Zahlungsdatum prüfen."),n.fx&&Number(n.fx.rateToUSD)>0&&Number(n.fx.usdToEur)>0||L("Bitte den Wechselkurs laden oder eintragen."));let a=Tt(t,n,["updatedAt","createdAt","ai"]);return await Q(async s=>{await s.put("expenses",n),await s.audit({action:t?t.status==="review"&&n.status==="booked"?"Beleg geprüft und gebucht":"Ausgabe geändert":"Ausgabe angelegt",entity:"expenses",entityId:n.id,label:n.vendor||"Beleg",prev:t?a.prev:null,next:a.next})}),n}async function Ec(e){let t=w("expenses",e);t&&await Q(async n=>{for(let a of t.attachmentIds||[])await n.del("attachments",a),await n.blobDel(a);await n.del("expenses",e),await n.audit({action:"Ausgabe gelöscht",entity:"expenses",entityId:e,label:t.vendor||"Beleg",prev:t})})}async function zr({blob:e,name:t,ownerType:n,ownerId:a}){let s={id:je(),name:t||"Beleg",mime:e.type||"application/octet-stream",size:e.size,ownerType:n||"",ownerId:a||"",createdAt:ne()};return await Q(async i=>{await i.blobPut(s.id,e),await i.put("attachments",s)}),s}async function Lr(e){await Q(async t=>{await t.del("attachments",e),await t.blobDel(e)})}function gi(e){let t=_n.find(n=>n.id===e.interval);return t&&t.months?t.months:Math.max(1,Math.floor(Number(e.customMonths)||1))}async function rs(e){String(e.name||"").trim()||L("Bitte der Vorlage einen Namen geben."),w("companies",e.companyId)||L("Bitte ein Unternehmen auswählen."),w("customers",e.customerId)||L("Bitte einen Kunden auswählen."),(e.items||[]).length||L("Bitte mindestens eine Position hinzufügen."),$e(e.nextDate)||L("Bitte das Datum der nächsten Rechnung eintragen."),e.endDate&&!$e(e.endDate)&&L("Bitte das Enddatum prüfen.");let t=w("recurring",e.id),n=he({...e});return(!n.anchorDay||!t||t.nextDate!==n.nextDate)&&(n.anchorDay=Number(n.nextDate.slice(8,10))),n.totals=pt(n),await Q(async a=>{await a.put("recurring",n),await a.audit({action:t?"Wiederkehrende Rechnung geändert":"Wiederkehrende Rechnung angelegt",entity:"recurring",entityId:n.id,label:n.name})}),n}async function Nc(e){let t=w("recurring",e);t&&await Q(async n=>{await n.del("recurring",e),await n.audit({action:"Wiederkehrende Rechnung gelöscht",entity:"recurring",entityId:e,label:t.name,prev:t})})}var ka=(e,t=V())=>!!e&&e.active&&$e(e.nextDate)&&e.nextDate<=t&&(!e.endDate||e.nextDate<=e.endDate),xa=e=>!!e.endDate&&$e(e.nextDate)&&e.nextDate>e.endDate;async function Pr(e,{early:t=!1}={}){let n=w("recurring",e);n||L("Vorlage nicht gefunden."),xa(n)&&L("Diese Vorlage hat ihr Enddatum erreicht."),n.active||L("Diese Vorlage ist pausiert."),!t&&n.nextDate>V()&&L("Die nächste Rechnung dieser Vorlage ist noch nicht fällig.");let a=w("companies",n.companyId),s=w("customers",n.customerId);(!a||!s)&&L("Unternehmen oder Kunde der Vorlage existiert nicht mehr.");let i=gi(n),r=n.nextDate,o=Ce(Nt(r,i,n.anchorDay),-1),c=Qn({...mt(a),customerId:n.customerId,issueDate:r,serviceDate:r,serviceDateEnd:n.servicePeriod==="month"?o:"",currency:n.currency,language:n.language,items:n.items.map(m=>({...m,id:je()})),discount:ve(n.discount),intro:n.intro,paymentTermDays:n.paymentTermDays,recurringId:n.id,...n.contractId?{contractId:n.contractId}:{}}),p=Nt(r,i,n.anchorDay),d=!!n.endDate&&p>n.endDate,u=he({...n,nextDate:p,generated:(n.generated||0)+1,lastRunAt:ne(),active:d?!1:n.active,endedByRun:d});return await Q(async m=>{let g=await m.get("recurring",n.id);if(!g||g.nextDate!==n.nextDate||!g.active)throw new Ie("Dieser Termin wurde bereits erzeugt.");await m.put("invoices",c),await m.put("recurring",u),await m.audit({action:"Wiederkehrende Rechnung erzeugt",entity:"recurring",entityId:n.id,label:n.name,next:{invoiceDraftId:c.id,issueDate:r,nextDate:p}})}),c}async function Tc(e,t,n){let a=w("invoices",e);if(!a)return null;let s={id:je(),invoiceId:e,level:t,date:V(),note:n||"",createdAt:ne()};return await Q(async i=>{await i.put("reminders",s),await i.audit({action:"Zahlungserinnerung versendet",entity:"invoices",entityId:e,label:a.number,next:{level:t,date:s.date}})}),s}var Bm="https://api.anthropic.com/v1/messages",Rm=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],Ac=/^([01]\d|2[0-3]):[0-5]\d$/;function Bc(e,{today:t,timeZone:n,now:a=new Date}){let s={},i=[],r=(f,h,C)=>{let S=`${f}${h+1}`;return s[S]=C,S},o=e.companies.filter(f=>!f.archived);i.push("UNTERNEHMEN (über welches Konto etwas läuft):"),o.forEach((f,h)=>i.push(`${r("U",h,f.id)}: ${f.name}${f.shortName&&f.shortName!==f.name?` (${f.shortName})`:""}${f.meetingProvider?`, Meetings über ${f.meetingProvider}`:""}`));let c=e.customers.filter(f=>f.active!==!1).slice(0,600);i.push("","KONTAKTE (K = Kürzel; Art: Kunde oder Kontakt/Interessent):"),c.forEach((f,h)=>{let C=rt(f);i.push(`${r("K",h,f.id)}: ${Z(f)}${C&&C!==Z(f)?` – ${C}`:""} [${f.kind==="contact"?"Kontakt":"Kunde"} ${f.number||""}]${f.city?`, ${f.city}`:""}`)});let p=new Map(Object.entries(s).map(([f,h])=>[h,f])),d=e.services.filter(f=>f.active!==!1).slice(0,200);d.length&&(i.push("","LEISTUNGEN (für Rechnungsentwürfe):"),d.forEach((f,h)=>i.push(`${r("L",h,f.id)}: ${f.name}${f.tier?` (Tarif ${f.tier==="starter"?"Starter":"Standard"})`:""}${f.code?` [${f.code}]`:""} – ${((f.priceCents||0)/100).toFixed(2)} ${f.currency||""} je ${f.unit||"Stück"}`)));let u=new Date(a.getTime()-14*864e5).toISOString().slice(0,10),m=new Date(a.getTime()+30*864e5).toISOString().slice(0,10),g=e.appointments.filter(f=>f.date>=u&&f.date<=m).sort((f,h)=>`${f.date}${f.start}`<`${h.date}${h.start}`?-1:1).slice(0,80);g.length&&(i.push("","TERMINE (letzte 14 und nächste 30 Tage):"),g.forEach((f,h)=>i.push(`${r("T",h,f.id)}: ${f.date} ${f.start}–${f.end}, ${f.title}${f.customerId&&p.get(f.customerId)?` (${p.get(f.customerId)})`:""}, ${f.status==="done"?"dokumentiert":f.status==="cancelled"?"abgesagt":"geplant"}`)));let $=e.todos.filter(f=>!f.done).sort((f,h)=>(f.due||"9")<(h.due||"9")?-1:1).slice(0,60);$.length&&(i.push("","OFFENE TO-DOS:"),$.forEach(f=>i.push(`- ${f.title}${f.due?` (fällig ${f.due})`:""}${f.customerId&&p.get(f.customerId)?` (${p.get(f.customerId)})`:""}`)));let b=new Date(`${t}T12:00:00Z`);return{text:`${`Heute ist ${Rm[b.getUTCDay()]}, ${t}. Zeitzone: ${n}. Uhrzeit jetzt: ${a.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",timeZone:n})}.`}

${i.join(`
`)}`,map:s}}var hi={type:"string",description:"Kürzel eines Kontakts (K…) oder die ref eines im selben Befehl neu angelegten Kontakts (NEU1 …)."},$i={type:"string",description:"Datum YYYY-MM-DD. Relative Angaben („Freitag“, „in zwei Wochen“) vom heutigen Datum aus berechnen."},Um=[{name:"create_todos",description:"Legt ein oder mehrere To-dos an.",input_schema:{type:"object",properties:{todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:$i,contact:hi,company:{type:"string",description:"Kürzel U…, optional"}},required:["title"]}}},required:["todos"]}},{name:"create_appointment",description:"Plant einen Termin. Meeting-Link und Zugangsdaten setzt das Tool automatisch aus dem Unternehmen.",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U… – über welches Unternehmen der Termin läuft. Pflicht; nur raten, wenn es genau ein Unternehmen gibt."},contact:hi,contact_name:{type:"string",description:"Gesprächspartner, falls kein Kontakt passt oder eine bestimmte Person gemeint ist."},title:{type:"string"},date:$i,start:{type:"string",description:"Beginn HH:MM (24 h)."},duration_minutes:{type:"number",description:"Dauer in Minuten, wenn genannt."},kind:{type:"string",enum:["video","phone","onsite"],description:"Standard video."},location:{type:"string",description:"Ort bei Vor-Ort-Terminen bzw. Telefonnummer."},agenda:{type:"string"}},required:["company","date","start"]}},{name:"add_note",description:"Trägt eine Notiz in die Kundendokumentation ein (Telefonat, Gespräch, E-Mail, Notiz).",input_schema:{type:"object",properties:{contact:hi,kind:{type:"string",enum:["note","call","email","meeting","task"]},title:{type:"string"},text:{type:"string"},date:$i},required:["contact","text"]}},{name:"create_contact",description:"Legt einen neuen Kontakt oder Kunden an. Nur, wenn ausdrücklich ein neuer Kontakt gemeint ist und keiner aus der Liste passt.",input_schema:{type:"object",properties:{ref:{type:"string",description:"NEU1, NEU2 … – damit andere Aufrufe im selben Befehl darauf verweisen können."},kind:{type:"string",enum:["contact","customer"],description:"Standard contact."},company:{type:"string"},first_name:{type:"string"},last_name:{type:"string"},email:{type:"string"},phone:{type:"string"},city:{type:"string"},notes:{type:"string"}},required:["ref"]}},{name:"document_appointment",description:"Dokumentiert einen Termin aus der Liste: Ergebnis, nächste Schritte, To-dos.",input_schema:{type:"object",properties:{appointment:{type:"string",description:"Kürzel T…"},outcome:{type:"string"},next_steps:{type:"string"},todos:{type:"array",items:{type:"object",properties:{title:{type:"string"},due:$i},required:["title"]}}},required:["appointment"]}},{name:"create_invoice_draft",description:"Legt einen Rechnungsentwurf an (nur Entwurf – erstellt wird er im Tool per Klick).",input_schema:{type:"object",properties:{company:{type:"string",description:"Kürzel U…"},contact:hi,items:{type:"array",items:{type:"object",properties:{service:{type:"string",description:"Kürzel L…, wenn eine Leistung passt"},name:{type:"string",description:"Bezeichnung, wenn keine Leistung passt"},quantity:{type:"number"},unit_price:{type:"number",description:"Einzelpreis netto, nur wenn genannt"}}}}},required:["company","contact","items"]}},{name:"answer",description:"Antwortet in Textform: auf Fragen („Was steht heute an?“) oder mit einer Rückfrage, wenn etwas unklar ist (z. B. welcher Kontakt gemeint ist).",input_schema:{type:"object",properties:{text:{type:"string"}},required:["text"]}}],_m=`Du bist die Sprachsteuerung von BBC Finance, einem Rechnungs- und CRM-Tool. Der Nutzer spricht Deutsch; der Text stammt aus einer Spracherkennung und kann Hörfehler enthalten.
Setze den Befehl ausschließlich mit den Werkzeugen um. Du darfst mehrere Werkzeuge in einer Antwort aufrufen.
Regeln:
- Verwende nur Kürzel aus der Übersicht. Ordne Namen großzügig zu (Hörfehler, Vor- oder Nachname, Firmenname). Passen mehrere Kontakte gleich gut oder keiner, frage mit answer nach statt zu raten.
- Fehlt beim Termin das Unternehmen und gibt es mehr als eines, frage mit answer nach.
- Datumsangaben immer als YYYY-MM-DD, Uhrzeiten als HH:MM. „Nächste Woche“ ohne Tag = Montag der nächsten Woche.
- To-do-Titel kurz und als Aufgabe formulieren („Angebot schicken“).
- Rechnungen gibt es nur als Entwurf. Löschen, Stornieren und Zahlungen sind nicht per Sprache möglich – erkläre das mit answer.
- Fragen beantwortest du knapp mit answer anhand der Übersicht.`;function Mm({model:e,text:t,context:n}){return{model:e,max_tokens:2e3,system:_m,tools:Um,tool_choice:{type:"any"},messages:[{role:"user",content:`${n}

---
BEFEHL: ${t}`}]}}var Da=(e,t,n)=>typeof t=="string"&&t.startsWith(n)&&e[t]?e[t]:"",os=e=>typeof e=="string"&&$e(e)?e:"";function zm(e,t){let n=e&&Array.isArray(e.content)?e.content.filter(o=>o.type==="tool_use"):[];if(!n.length)throw new Error("Der Befehl wurde nicht verstanden. Bitte anders formulieren.");let a=[],s=[],i=new Set(n.filter(o=>o.name==="create_contact").map(o=>String((o.input||{}).ref||""))),r=(o,c)=>{if(!o)return"";if(i.has(o))return`ref:${o}`;let p=Da(t,o,"K");return p||c.push(`Kontakt „${o}“ nicht gefunden – wird ohne Kontakt angelegt.`),p};for(let o of n){let c=o.input||{},p=[];if(o.name==="answer"){c.text&&s.push(String(c.text));continue}if(o.name==="create_todos"){let d=(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:os(u.due),customerId:r(u.contact,p),companyId:Da(t,u.company,"U")}));d.length&&a.push({type:"todos",items:d,warnings:p})}else if(o.name==="create_appointment"){let d=Da(t,c.company,"U");d||p.push("Unternehmen nicht erkannt – bitte nach dem Anlegen prüfen."),os(c.date)||p.push("Datum nicht erkannt."),Ac.test(String(c.start||""))||p.push("Uhrzeit nicht erkannt."),a.push({type:"appointment",companyId:d,customerId:r(c.contact,p),contactName:String(c.contact_name||"").trim(),title:String(c.title||"").trim(),date:os(c.date),start:Ac.test(String(c.start||""))?c.start:"",duration:Number(c.duration_minutes)>0?Math.min(Math.round(Number(c.duration_minutes)),600):0,kind:["video","phone","onsite"].includes(c.kind)?c.kind:"video",location:String(c.location||"").trim(),agenda:String(c.agenda||"").trim(),warnings:p})}else if(o.name==="add_note"){let d=r(c.contact,p);if(!d)continue;a.push({type:"note",customerId:d,kind:["note","call","email","meeting","task"].includes(c.kind)?c.kind:"note",title:String(c.title||"").trim(),text:String(c.text||"").trim(),date:os(c.date),warnings:p})}else if(o.name==="create_contact")a.push({type:"contact",ref:String(c.ref||""),kind:c.kind==="customer"?"customer":"contact",company:String(c.company||"").trim(),firstName:String(c.first_name||"").trim(),lastName:String(c.last_name||"").trim(),email:String(c.email||"").trim().toLowerCase(),phone:String(c.phone||"").trim(),city:String(c.city||"").trim(),notes:String(c.notes||"").trim(),warnings:p});else if(o.name==="document_appointment"){let d=Da(t,c.appointment,"T");if(!d){s.push("Der Termin zum Dokumentieren wurde nicht gefunden.");continue}a.push({type:"document",appointmentId:d,outcome:String(c.outcome||"").trim(),nextSteps:String(c.next_steps||"").trim(),todos:(Array.isArray(c.todos)?c.todos:[]).filter(u=>u&&String(u.title||"").trim()).map(u=>({title:String(u.title).trim(),due:os(u.due)})),warnings:p})}else if(o.name==="create_invoice_draft"){let d=Da(t,c.company,"U"),u=r(c.contact,p);if(!d||!u){s.push("Für den Rechnungsentwurf fehlen Unternehmen oder Kunde.");continue}let m=(Array.isArray(c.items)?c.items:[]).map(g=>({serviceId:Da(t,g.service,"L"),name:String(g.name||"").trim(),qty:Number(g.quantity)>0?Number(g.quantity):1,priceCents:Number.isFinite(Number(g.unit_price))&&g.unit_price!=null?Math.round(Number(g.unit_price)*100):null})).filter(g=>g.serviceId||g.name);m.length&&a.push({type:"invoice",companyId:d,customerId:u,items:m,warnings:p})}}return{actions:a,answers:s}}function Lm(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===404?`Das eingestellte KI-Modell wurde nicht gefunden${n}.`:e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Der Sprachbefehl ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Rc({apiKey:e,model:t,text:n,context:a,map:s}){if(!e)throw new Error("Für Sprachbefehle braucht es den API-Key aus den Einstellungen.");let i;try{i=await fetch(Bm,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(Mm({model:t,text:n,context:a}))})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let r=null;try{r=await i.json()}catch{}if(!i.ok)throw new Error(Lm(i.status,r));return{...zm(r,s),usage:r.usage||null}}var ln=()=>({invoices:v.invoices,quotes:v.quotes,payments:v.payments,expenses:v.expenses,customers:v.customers,companies:v.companies,services:v.services,recurring:v.recurring}),ht=()=>{let e=de();return e?e.id:null};function bi(e){return Qt(e,Qe(e.id),V())}function Sn({inv:e}){let t=bi(e),n=Va[t]||Va.draft;return l`<span class="badges"><${ze} tone=${n.tone}>${n.label}<//>${e.clarify&&t!=="draft"&&l`<${ze} tone="warn" icon="warn">Klärung nötig<//>`}</span>`}function ls({quote:e}){let t=zt(e,V()),n=ra[t]||ra.draft;return l`<${ze} tone=${n.tone}>${n.label}<//>`}var oe=()=>v.settings.displayCurrency==="EUR"?"EUR":"USD",Cn=()=>oe()==="USD"?"EUR":"USD",M=(e,t="",n=oe())=>{if(!e)return 0;let a=t?e[`${t}${n}`]:e[n.toLowerCase()];return Number(a)||0},Te=(e,t="")=>M(e,t,Cn()),se=e=>j(e,oe()),Fe=e=>j(e,Cn()),ct=(e,t,n)=>sn(e,t,oe(),n);function Pt({doc:e,cents:t}){let n=t??(e.totals?e.totals.totalCents:0),a=e.currency==="USD"?"EUR":"USD",s=e.fx?a==="EUR"?Mt(n,e.currency,e.fx):vt(n,e.currency,e.fx):null;return l`<span class="dual">
    <span class="dual-main">${j(n,e.currency)}</span>
    ${s!=null&&l`<span class="dual-sub">≈ ${j(s,a)}</span>`}
  </span>`}function Pe({id:e}){let t=w("companies",e);return t?l`<span class="co-tag"><${ni} company=${t} />${t.shortName||t.name}</span>`:l`<span class="muted-text">–</span>`}function Ve(e){let t=w("customers",e.customerId)||e.snapshot&&e.snapshot.customer;return Z(t)||"–"}var Sa=e=>rn(e,Qe(e.id));var Kr=e=>{let t=de();return!t||!e.companyId||e.companyId===t.id};function Pm(e=()=>!0){return v.todos.filter(t=>!t.done&&e(t)).sort(yi)}var yi=(e,t)=>(e.due||"9999")<(t.due||"9999")?-1:(e.due||"9999")>(t.due||"9999")?1:e.createdAt<t.createdAt?-1:1;function Km(e,t=V()){if(!e.due)return{text:"ohne Termin",tone:""};if(e.done)return{text:F(e.due),tone:""};if(e.due<t){let n=gn(e.due,t);return{text:`überfällig seit ${n} ${n===1?"Tag":"Tagen"}`,tone:"bad"}}return e.due===t?{text:"heute fällig",tone:"good"}:e.due===Ce(t,1)?{text:"morgen",tone:""}:{text:`bis ${F(e.due)}`,tone:""}}var Uc=()=>{let e=V();return v.todos.filter(t=>!t.done&&t.due&&t.due<=e&&Kr(t)).length};async function Om(e){let t=await _(()=>ic(e.id,!e.done));t&&t.done&&U(`Erledigt: ${e.title}`,"good")}function Xn({items:e,showCustomer:t=!0,onEdit:n,empty:a}){return e.length?l`<ul class="todo-list">
    ${e.map(s=>{let i=Km(s),r=s.customerId?w("customers",s.customerId):null,o=s.appointmentId?w("appointments",s.appointmentId):null,c=s.done?"is-done":i.tone==="bad"?"is-overdue":i.tone==="good"?"is-today":"";return l`<li key=${s.id} class=${c}>
        <input type="checkbox" class="todo-check" checked=${!!s.done} aria-label=${`${s.title} ${s.done?"wieder öffnen":"erledigt"}`} onChange=${()=>Om(s)} />
        <button type="button" class="todo-body" onClick=${()=>n&&n(s)}>
          <span class="todo-title">${s.title}</span>
          <span class="cell-sub">
            <span class=${i.tone?`tone-${i.tone}`:""}>${s.done?`erledigt${s.doneAt?` am ${F(s.doneAt.slice(0,10))}`:""}`:i.text}</span>
            ${t&&r&&l` · ${Z(r)}`}
            ${o&&l` · aus Termin ${F(o.date)}`}
          </span>
        </button>
        ${s.companyId&&l`<span class="todo-co"><${Pe} id=${s.companyId} /></span>`}
      </li>`})}
  </ul>`:a?l`<p class="muted-text">${a}</p>`:null}function vi({customerId:e="",companyId:t="",withCustomer:n=!1}){let[a,s]=D(""),[i,r]=D(Ce(V(),7)),[o,c]=D(e),p=v.customers.filter(u=>u.active!==!1).sort((u,m)=>Z(u).localeCompare(Z(m),"de")).map(u=>({id:u.id,label:Z(u),sub:u.number}));async function d(u){if(u&&u.preventDefault(),!a.trim())return;let m=t||(de()?de().id:"");await _(()=>es(Mn({title:a,due:i,customerId:o||e,companyId:m})))&&(s(""),U("To-do angelegt","good"))}return l`<form class=${`todo-add${n?" with-customer":""}`} onSubmit=${d}>
    <input class="input" placeholder="Neues To-do, z. B. Angebot schicken" aria-label="Neues To-do" value=${a} onInput=${u=>s(u.target.value)} />
    ${n&&l`<${kt} options=${p} value=${o} onChange=${c} placeholder="Kontakt (optional)" label="Kontakt zum To-do" />`}
    <input class="input todo-add-date" type="date" aria-label="Fällig am" value=${i} onInput=${u=>r(u.target.value)} />
    <${E} type="submit" icon="plus" disabled=${!a.trim()}>Hinzufügen<//>
  </form>`}function wi({todo:e,onClose:t}){let n=!w("todos",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),o=m=>g=>s($=>({...$,[m]:g})),c=[...v.customers].sort((m,g)=>Z(m).localeCompare(Z(g),"de")).map(m=>({id:m.id,label:Z(m),sub:m.number})),p=a.appointmentId?w("appointments",a.appointmentId):null;async function d(){r(!0);let m=await _(()=>es(a));r(!1),m&&(U(n?"To-do angelegt":"To-do gespeichert","good"),t())}async function u(){if(!await ue({title:"To-do löschen?",text:`„${a.title}“ wird gelöscht. Im Protokoll bleibt der Eintrag erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await rc(a.id),!0))&&(U("To-do gelöscht","good"),t())}return l`<${Le} title=${n?"Neues To-do":"To-do bearbeiten"} onClose=${t} onSubmit=${d}
    footer=${l`${!n&&l`<${E} variant="ghost" icon="trash" onClick=${u}>Löschen<//>`}<span class="spacer"></span>
      <${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${q} class="span-6" label="Was ist zu tun?" value=${a.title} onInput=${o("title")} />
      <${Me} class="span-2" label="Fällig am" value=${a.due} onInput=${o("due")} />
      <${we} class="span-4" label="Kontakt">
        <${kt} options=${c} value=${a.customerId} onChange=${m=>o("customerId")(m||"")} placeholder="Ohne Kontakt" label="Kontakt" />
      <//>
      <${ae} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${re().map(m=>({id:m.id,label:m.name}))} />
      <div class="span-3 field field-inline">${!n&&l`<label class="check"><input type="checkbox" checked=${!!a.done}
        onChange=${m=>s(g=>({...g,done:m.target.checked,doneAt:m.target.checked?new Date().toISOString():null}))} /> Erledigt</label>`}</div>
      <${ie} class="span-6" label="Notiz" value=${a.note} onInput=${o("note")} rows=${3} />
      ${p&&l`<p class="span-6 field-hint">Aus dem Termin „${p.title}“ am ${F(p.date)}.</p>`}
    </div>
  <//>`}function _c(){let[e,t]=D(null),n=Pm(Kr),a=n.slice(0,8);return l`<${J} title=${`To-dos${n.length?` (${n.length})`:""}`} class="dash-todos" action=${l`<a class="panel-link" href="#/todos">Alle To-dos</a>`}>
    <${Xn} items=${a} onEdit=${t} empty="Keine offenen To-dos." />
    ${n.length>a.length&&l`<p class="cell-sub"><a href="#/todos">${n.length-a.length} weitere</a></p>`}
    <${vi} withCustomer />
    ${e&&l`<${wi} key=${e.id} todo=${e} onClose=${()=>t(null)} />`}
  <//>`}function Mc(){ge();let[e,t]=D("open"),[n,a]=D(""),[s,i]=D(null),r=V(),o=v.todos.filter(Kr),c={open:o.filter(u=>!u.done),due:o.filter(u=>!u.done&&u.due&&u.due<=r),done:o.filter(u=>u.done)},p=u=>u.customerId?Z(w("customers",u.customerId)):"",d=c[e].filter(u=>Ne(n,u.title,u.note,p(u)));return d=e==="done"?d.sort((u,m)=>(u.doneAt||"")<(m.doneAt||"")?1:-1):d.sort(yi),l`
    <${ke} title="To-dos" sub=${de()?`To-dos für ${de().name} und ohne Zuordnung`:"Alle To-dos"}>
      <${E} variant="primary" icon="plus" onClick=${()=>i(Mn({due:Ce(r,7),companyId:de()?de().id:""}))}>Neues To-do<//>
    <//>
    <div class="filters">
      <input class="input filter-select" type="search" placeholder="To-dos durchsuchen" aria-label="To-dos durchsuchen" value=${n} onInput=${u=>a(u.target.value)} />
      <${ft} label="Filter" value=${e} onChange=${t} options=${[{id:"open",label:"Offen",count:c.open.length},{id:"due",label:"Fällig",count:c.due.length},{id:"done",label:"Erledigt",count:c.done.length}]} />
    </div>
    <${J}>
      <${vi} withCustomer />
      ${d.length?l`<${Xn} items=${d} onEdit=${i} />`:l`<${pe} icon="check" title=${e==="done"?"Noch nichts erledigt":"Nichts offen"} text="To-dos legst du hier, beim Kontakt oder beim Dokumentieren eines Termins an." />`}
    <//>
    ${s&&l`<${wi} key=${s.id} todo=${s} onClose=${()=>i(null)} />`}
  `}var cs=e=>String(e).padStart(2,"0");function zc(e,t){let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(n.formatToParts(new Date(e)).map(i=>[i.type,i.value])),s=Date.UTC(Number(a.year),Number(a.month)-1,Number(a.day),Number(a.hour)%24,Number(a.minute),Number(a.second));return Math.round((s-e)/6e4)}function Kc(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),!0}catch{return!1}}function Lc(e,t,n){let[a,s,i]=String(e).split("-").map(Number),[r,o]=String(t||"00:00").split(":").map(Number),c=Date.UTC(a,s-1,i,r||0,o||0);if(!Kc(n))return new Date(c);let p=zc(c,n),d=c-p*6e4,u=zc(d,n);return u!==p&&(d=c-u*6e4),new Date(d)}function us(e,t,n="de"){if(!Kc(e))return e||"";try{return(new Intl.DateTimeFormat(n==="en"?"en-GB":"de-DE",{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(i=>i.type==="timeZoneName")||{}).value||e}catch{return e}}function xi(e,t){try{return new Intl.DateTimeFormat("de-DE",{timeZone:t,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(e)}catch{return""}}function Oc(e,t){try{let n=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map(a=>[a.type,a.value]));return`${n.year}-${n.month}-${n.day}`}catch{return""}}function ds(e,t="de"){let[n,a,s]=String(e).split("-").map(Number);return n?new Intl.DateTimeFormat(t==="en"?"en-US":"de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(n,a-1,s))):""}var Ca=e=>(la.find(t=>t.id===e)||{}).label||"",Pc=e=>/^https?:\/\/\S+$/i.test(String(e||"").trim());function Fc(e,t=new Date){if(!e||e.status!=="planned")return!1;let{end:n}=In(e);return n>t?!1:!e.followUpAt||new Date(e.followUpAt)<=t}function In(e){let t=Lc(e.date,e.start,e.timeZone),n=Lc(e.date,e.end||e.start,e.timeZone);return n<=t&&(n=new Date(t.getTime()+60*6e4)),{start:t,end:n}}function Fm(e,t){let n=t==="en",a=String(e.meetingDetails||"").trim(),s=String(e.meetingUrl||"").trim();if(e.kind==="video"){let r=Ca(e.meetingProvider)||(n?"video call":"Videocall");return!s&&!a?n?`We will meet via ${r}. I will send you the link separately.`:`Wir sprechen per ${r}. Den Link schicke ich Ihnen separat.`:[n?`Join via ${r}:`:`Teilnahme per ${r}:`,s,a].filter(Boolean).join(`
`)}if(e.kind==="phone"){let r=String(e.location||"").trim();return n?`Phone call${r?`: ${r}`:""}`:`Telefonat${r?`: ${r}`:""}`}let i=String(e.location||"").trim();return i?n?`Location: ${i}`:`Ort: ${i}`:""}function Vm(e,t){return String(e.contactName||"").trim()||(t?rt(t)||Z(t):"")}function Vc(e,{company:t,customer:n,settings:a}){let s=e.language==="en"?"en":"de",i=(a&&a.appointmentTemplates||{})[s]||{subject:"",body:""},{start:r}=In(e),o=String(e.agenda||"").trim(),c=String(e.title||"").trim()||(s==="en"?"Meeting":"Gespräch"),p={CONTACT:Vm(e,n),CUSTOMER:n?Z(n):String(e.contactName||""),TITLE:c,DATE:ds(e.date,s),TIME:e.start||"",END:e.end||"",TIMEZONE:us(e.timeZone,r,s),MEETING:Fm(e,s),LINK:String(e.meetingUrl||"").trim(),ACCESS:String(e.meetingDetails||"").trim(),PROVIDER:Ca(e.meetingProvider),LOCATION:String(e.location||"").trim(),AGENDA:o?`${s==="en"?"Agenda":"Themen"}:
${o}`:"",SENDER:a&&a.userName||"",COMPANY:t?t.name:""},d=u=>u.replace(/[ \t]+,/g,",").split(`
`).map(m=>m.replace(/\s+$/,"")).join(`
`).replace(/\n{3,}/g,`

`).trim();return{subject:d(Ct(i.subject,p)).replace(/\n/g," "),body:d(Ct(i.body,p)),vars:p}}var Or=e=>`${e.getUTCFullYear()}${cs(e.getUTCMonth()+1)}${cs(e.getUTCDate())}T${cs(e.getUTCHours())}${cs(e.getUTCMinutes())}${cs(e.getUTCSeconds())}Z`,ki=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function qm(e){let t=new TextEncoder,n=[],a="",s=0;for(let i of e){let r=t.encode(i).length,o=n.length?74:75;s+r>o&&(n.push(a),a="",s=0),a+=i,s+=r}return n.push(a),n.map((i,r)=>r?` ${i}`:i).join(`\r
`)}function qc(e,{summary:t,description:n}){let{start:a,end:s}=In(e),i=String(e.meetingUrl||"").trim(),r=e.kind==="video"?Pc(i)?i:Ca(e.meetingProvider):String(e.location||"").trim();return`${["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//BBC Finance//Termine//DE","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${e.id}@bbc-finance`,`DTSTAMP:${Or(new Date)}`,`DTSTART:${Or(a)}`,`DTEND:${Or(s)}`,`SEQUENCE:${Number(e.sequence)||0}`,`SUMMARY:${ki(t)}`,n?`DESCRIPTION:${ki(n)}`:"",r?`LOCATION:${ki(r)}`:"",Pc(i)?`URL:${i}`:"",`STATUS:${e.status==="cancelled"?"CANCELLED":"CONFIRMED"}`,"TRANSP:OPAQUE","BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${ki(t)}`,"TRIGGER:-PT15M","END:VALARM","END:VEVENT","END:VCALENDAR"].filter(Boolean).map(qm).join(`\r
`)}\r
`}var Di=null;function Zc(e){return new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>n(new Error(`Die Datei ${e} konnte nicht geladen werden.`)),document.head.appendChild(a)})}function Zm(){return Di||(Di=(async()=>{if(await Zc("js/vendor/pdfmake.min.js"),await Zc("js/vendor/vfs_fonts.js"),!window.pdfMake)throw new Error("Die PDF-Bibliothek konnte nicht gestartet werden.");return window.pdfMake})().catch(e=>{throw Di=null,e})),Di}var ps="#16191d",et="#5c636b",Fr="#d9dde1",ms=50;function Gm(e){let t=Math.max(0,...e.footerCols.map(a=>a.length)),n=e.footerText?Math.ceil(e.footerText.length/105):0;return 46+t*10+n*10}function fs(e){let t=e.labels,n=e.brandColor,a=e.logoUrl?{image:e.logoUrl,fit:[190,62],margin:[0,0,0,26]}:{text:e.companyName,fontSize:17,bold:!0,color:ps,margin:[0,6,0,30]},s={width:"*",stack:[{text:e.senderLine,fontSize:7,color:et,margin:[0,0,0,6]},...e.recipient.map((g,$)=>({text:g,fontSize:10.5,bold:$===0})),...e.recipientExtra.map(g=>({text:g,fontSize:8.5,color:et,margin:[0,4,0,0]}))]},i={width:210,table:{widths:["auto","*"],body:e.meta.map(([g,$])=>[{text:g,color:et,fontSize:9},{text:$,alignment:"right",fontSize:9,bold:g===t[`number_${e.kind}`]}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>1.5,paddingBottom:()=>1.5}},r=[{key:"pos",label:t.pos,width:22,align:"left"},{key:"desc",label:t.description,width:"*",align:"left"},{key:"qty",label:t.qty,width:"auto",align:"right"},{key:"unit",label:t.unit,width:"auto",align:"left"},{key:"price",label:t.price,width:"auto",align:"right"}];e.columns.discount&&r.push({key:"discount",label:t.discount,width:"auto",align:"right"}),e.columns.tax&&r.push({key:"tax",label:t.tax,width:"auto",align:"right"}),r.push({key:"amount",label:t.amount,width:"auto",align:"right"});let o=r.map(g=>({text:g.label,fontSize:8,color:et,alignment:g.align,noWrap:!0})),c=e.rows.map(g=>r.map($=>{if($.key==="desc"){let b=[{text:g.name,bold:!0}];return g.description&&b.push({text:g.description,color:et,fontSize:8.5,margin:[0,1.5,0,0]}),{stack:b}}return{text:g[$.key]||"",alignment:$.align,noWrap:$.key!=="unit"}})),p={margin:[0,18,0,0],table:{headerRows:1,dontBreakRows:!0,widths:r.map(g=>g.width),body:[o,...c]},layout:{hLineWidth:(g,$)=>g===0?0:g===1?1.2:.5,hLineColor:g=>g===1?n:Fr,vLineWidth:()=>0,paddingLeft:g=>g===0?0:7,paddingRight:(g,$)=>g===$.table.widths.length-1?0:7,paddingTop:g=>g===0?0:6,paddingBottom:g=>g===0?5:6}},d={unbreakable:!0,margin:[0,12,0,0],columns:[{width:"*",text:""},{width:250,stack:[{table:{widths:["*","auto"],body:e.sums.map(g=>[{text:g.label,bold:!!g.strong,fontSize:g.strong?11.5:9.5,color:g.strong?ps:et},{text:g.value,bold:!!g.strong,fontSize:g.strong?11.5:9.5,alignment:"right",noWrap:!0}])},layout:{hLineWidth:(g,$)=>g===$.table.body.length-1&&$.table.body.length>1?1.2:0,hLineColor:()=>n,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:(g,$)=>g===$.table.body.length-1?6:2.5,paddingBottom:()=>2.5}},...e.secondary?[{text:e.secondary.line,alignment:"right",fontSize:9,color:et,margin:[0,3,0,0]},...e.secondary.fx?[{text:e.secondary.fx,alignment:"right",fontSize:7.5,color:et,margin:[0,1.5,0,0]}]:[]]:[]]}]},u=[a,{columns:[s,i],columnGap:30},{text:[{text:e.title,bold:!0},e.number?{text:`  ${e.number}`,bold:!1,color:et}:""],fontSize:19,margin:[0,34,0,0]}];e.subtitle&&u.push({text:e.subtitle,color:et,margin:[0,2,0,0]}),e.intro&&u.push({text:e.intro,margin:[0,12,0,0]}),u.push(p,d),e.notes.length&&u.push({stack:e.notes.map(g=>({text:g,margin:[0,0,0,4]})),margin:[0,22,0,0]}),e.payment&&u.push({unbreakable:!0,margin:[0,16,0,0],stack:[{text:e.payment.title,bold:!0,margin:[0,0,0,4]},...e.payment.rows.length?[{table:{widths:["auto","*"],body:e.payment.rows.map(([g,$])=>[{text:g,color:et},{text:$}])},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:g=>g===0?0:10,paddingRight:()=>0,paddingTop:()=>1,paddingBottom:()=>1}}]:[],...e.payment.extra.map(g=>({text:g,margin:[0,4,0,0]}))]});let m=Gm(e);return{pageSize:"A4",pageMargins:[ms,46,ms,m+14],info:{title:`${e.title} ${e.number}`.trim(),author:e.companyName,creator:"BBC Finance"},defaultStyle:{font:"Roboto",fontSize:9.5,lineHeight:1.22,color:ps},...e.draftMark?{watermark:{text:e.draftMark,color:"#000000",opacity:.06,bold:!0}}:{},footer:(g,$)=>({margin:[ms,0,ms,0],stack:[{canvas:[{type:"line",x1:0,y1:0,x2:595.28-2*ms,y2:0,lineWidth:.5,lineColor:Fr}]},{margin:[0,7,0,0],columnGap:16,columns:e.footerCols.map(b=>({width:"*",stack:b.map((y,f)=>({text:y,fontSize:7.5,color:et,bold:!1}))}))},...e.footerText?[{text:e.footerText,fontSize:7.5,color:et,margin:[0,6,0,0]}]:[],{text:e.labels.page.replace("{P}",g).replace("{N}",$),fontSize:7,color:et,alignment:"right",margin:[0,5,0,0]}]}),content:u}}async function Ia(e){let t=await Zm();return new Promise((n,a)=>{try{t.createPdf(e).getBlob(s=>n(s))}catch(s){a(s)}})}function Je(e,t){let n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Gc({title:e,subtitle:t,columns:n,rows:a,totals:s,fileName:i,landscape:r}){let o=[n.map(d=>({text:d.label,bold:!0,fontSize:8,color:et,alignment:d.align||"left"})),...a.map(d=>d.map((u,m)=>({text:u==null?"":String(u),alignment:n[m].align||"left"})))];s&&o.push(s.map((d,u)=>({text:d==null?"":String(d),bold:!0,alignment:n[u].align||"left"})));let c={pageSize:"A4",pageOrientation:r?"landscape":"portrait",pageMargins:[40,40,40,44],defaultStyle:{font:"Roboto",fontSize:8.5,color:ps},info:{title:e,creator:"BBC Finance"},footer:(d,u)=>({text:`Seite ${d} von ${u}`,alignment:"right",fontSize:7,color:et,margin:[40,14,40,0]}),content:[{text:e,fontSize:15,bold:!0},t?{text:t,color:et,margin:[0,3,0,0]}:"",{margin:[0,14,0,0],table:{headerRows:1,dontBreakRows:!0,widths:n.map((d,u)=>u===0?"*":"auto"),body:o},layout:{hLineWidth:(d,u)=>d===0?0:d===1||s&&d===u.table.body.length-1?1:.5,hLineColor:(d,u)=>d===1||s&&d===u.table.body.length-1?ps:Fr,vLineWidth:()=>0,paddingLeft:d=>d===0?0:6,paddingRight:(d,u)=>d===u.table.widths.length-1?0:6,paddingTop:()=>4,paddingBottom:()=>4}}]},p=await Ia(c);Je(p,i)}var Vr=/\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/,Si=/^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i,Hc={deutschland:"Deutschland",germany:"Deutschland",österreich:"Österreich",oesterreich:"Österreich",austria:"Österreich",schweiz:"Schweiz",switzerland:"Schweiz",suisse:"Schweiz",liechtenstein:"Liechtenstein",luxemburg:"Luxemburg",luxembourg:"Luxemburg",niederlande:"Niederlande",netherlands:"Niederlande",belgien:"Belgien",belgium:"Belgien",frankreich:"Frankreich",france:"Frankreich",italien:"Italien",italy:"Italien",spanien:"Spanien",spain:"Spanien","vereinigte arabische emirate":"Vereinigte Arabische Emirate","united arab emirates":"Vereinigte Arabische Emirate",uae:"Vereinigte Arabische Emirate","united kingdom":"Vereinigtes Königreich",usa:"USA","united states":"USA"},jc={D:"Deutschland",DE:"Deutschland",A:"Österreich",AT:"Österreich",CH:"Schweiz"},$t=e=>String(e||"").replace(/[   ]/g," ").replace(/[ \t]+/g," ").trim(),Hm=(e,t)=>$t(e.replace(t,"").replace(/^[\s:.\-–—]+/,""));function jm(e){let n=$t(e).replace(/\s*\(.*?\)\s*/g," ").replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i,"").trim().split(/\s+/).filter(i=>!/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(i));if(!n.length)return{firstName:"",lastName:""};if(n.length===1)return{firstName:"",lastName:n[0]};let a=/^(von|van|de|der|den|zu|zur|vom|del|la)$/i,s=n.length-1;for(;s>1&&a.test(n[s-1]);)s-=1;return{firstName:n.slice(0,s).join(" "),lastName:n.slice(s).join(" ")}}var Wm=e=>$t(String(e).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/,"");function Yc(e){let n=String(e||"").replace(/\r/g,"").split(`
`).map($t).filter(Boolean),a={},s=[],i=n.join(`
`),r=i.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi,"@").replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi,"."),o=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(r);o&&(a.email=o[0].toLowerCase());let c=/\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(i)||/\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(i);c?a.website=c[0].replace(/[.,;)]+$/,""):a.email&&!/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(a.email)&&(a.website=`www.${a.email.split("@")[1]}`),n.forEach((m,g)=>{let $=n[g+1]||"";if(!a.phone&&/^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(m)&&!/fax/i.test(m.split(/[:]/)[0])){let b=/(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(m);b&&(a.phone=$t(b[1]).replace(/–/g,"-"))}if(!a.vatId&&/(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(m)){let b=/\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/,y=b.exec(m.replace(/^[^:]*:\s*/,""))||(/:\s*$|umsatzsteuergesetz:?$|id$/i.test(m)?b.exec($):null);y&&(a.vatId=$t(y[1]))}if(!a.taxId&&/^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(m)&&!/ust|umsatzsteuer|vat/i.test(m)){let b=/([\d][\d\s/]{7,}\d)/.exec(m);b&&(a.taxId=$t(b[1]))}if(!a.lastName){let b=/^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(m);if(b){let y=Hm(m,b[0]);y||(y=$),y=y.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i,"").replace(/^(herrn?|frau)\s+/i,"");let f=Wm(y);f&&!Vr.test(f)&&/^[\p{L}][\p{L}.' -]+$/u.test(f)&&f.split(/\s+/).length<=5&&(Object.assign(a,jm(f)),s.push(`${/inhaber|owner/i.test(b[0])?"Inhaber":"Vertreten durch"}: ${$t(y)}`))}}/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(m)&&(s.some(b=>b.includes(m))||s.push(m))});let p=/^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u,d=-1;for(let m=0;m<n.length;m++){let g=n[m].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i,""),$=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(g);if($&&!Si.test($[1])){a.street=$t($[1]).replace(/,$/,""),a.houseNo=$t($[2]),a.zip=$[4],a.city=$t($[5]),$[3]&&(a.country=jc[$[3].toUpperCase()]),d=m;break}let b=p.exec(g);if(b&&!/^(tel|fax|phone)/i.test(g)){a.zip=b[2],a.city=$t(b[3]),b[1]&&(a.country=jc[b[1].toUpperCase()]),d=m;let y=n[m-1]||"",f=/^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(y.replace(/,$/,""));f&&!Si.test(y)&&!Vr.test(y)?(a.street=$t(f[1]),a.houseNo=$t(f[2])):/^(postfach|p\.?o\.? box)/i.test(y)&&(a.street=y);break}}if(!a.country){let m=[n[d+1],...n].filter(Boolean);for(let g of m){let $=g.toLowerCase().replace(/[.,]/g,"").trim();if(Hc[$]){a.country=Hc[$];break}}}let u=n.find(m=>Vr.test(m)&&!Si.test(m)&&m.length<90&&!/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(m));if(u)a.company=u.replace(/^(firma|company|unternehmen)\s*:\s*/i,"");else if(d>0)for(let m=a.street&&!n[d].includes(",")?d-2:d-1;m>=0&&m>=d-5;m--){let g=n[m];if(!(!g||Si.test(g)||g.includes(":")||/\d{3,}|@|www\./i.test(g))){a.company=g;break}}for(let m of Object.keys(a))a[m]||delete a[m];return{fields:a,extra:s}}var Qm="https://api.anthropic.com/v1/messages",Ym=["company","firstName","lastName","street","houseNo","zip","city","region","country","email","phone","website","taxId","vatId"],Wc={name:"record_contact",description:"Erfasst die Kontaktdaten aus einem Impressum.",input_schema:{type:"object",properties:{company:{type:"string",description:"Firmenname inklusive Rechtsform, wie im Impressum."},firstName:{type:"string",description:"Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt."},lastName:{type:"string",description:"Nachname dieser Person."},street:{type:"string",description:"Straße ohne Hausnummer."},houseNo:{type:"string",description:"Hausnummer."},zip:{type:"string"},city:{type:"string"},region:{type:"string",description:"Bundesland, Kanton oder Emirat, nur wenn genannt."},country:{type:"string",description:"Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ)."},email:{type:"string"},phone:{type:"string",description:"Telefonnummer (nicht Fax)."},website:{type:"string"},taxId:{type:"string",description:"Steuernummer, nur wenn genannt."},vatId:{type:"string",description:"Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt."},register:{type:"string",description:"Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt."},found:{type:"boolean",description:"false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden."}},required:["found"]}},Qc=`Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;function Jm(e){return{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}}function Xm({model:e,text:t,url:n}){return n?{model:e,max_tokens:1500,tools:[{type:"web_fetch_20250910",name:"web_fetch",max_uses:3,max_content_tokens:2e4},Wc],tool_choice:{type:"auto"},messages:[{role:"user",content:`Rufe diese Seite ab: ${n}
Ist es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.

${Qc}`}]}:{model:e,max_tokens:1e3,tools:[Wc],tool_choice:{type:"tool",name:"record_contact"},messages:[{role:"user",content:`Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.

${Qc}

---
${String(t).slice(0,2e4)}`}]}}function ep(e){let t=e&&Array.isArray(e.content)?e.content:[],n=t.find(o=>o.type==="web_fetch_tool_result"&&o.content&&o.content.type==="web_fetch_tool_result_error"),a=t.find(o=>o.type==="tool_use"&&o.name==="record_contact");if(!a||!a.input){if(n){let o=n.content.error_code;throw new Error(o==="url_not_accessible"?"Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.":`Die Seite konnte nicht gelesen werden (${o}). Kopiere das Impressum und füge es als Text ein.`)}throw new Error("Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.")}let s=a.input;if(s.found===!1)throw new Error("Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.");let i={};for(let o of Ym){let c=typeof s[o]=="string"?s[o].trim():"";c&&(i[o]=c.slice(0,200))}i.email&&(i.email=i.email.toLowerCase());let r=[];return typeof s.register=="string"&&s.register.trim()&&r.push(s.register.trim()),{fields:i,extra:r}}function tp(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Das Auslesen ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function qr({apiKey:e,model:t,text:n,url:a}){if(!e)throw new Error("Dafür braucht es den API-Key aus den Einstellungen.");let s=Xm({model:t,text:n,url:a}),i=null;for(let r=0;r<3;r++){let o;try{o=await fetch(Qm,{method:"POST",headers:Jm(e),body:JSON.stringify(s)})}catch{throw new Error("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}try{i=await o.json()}catch{i=null}if(!o.ok)throw new Error(tp(o.status,i));if(i&&i.stop_reason==="pause_turn"){s.messages=[...s.messages,{role:"assistant",content:i.content}];continue}break}return ep(i)}function Jc(e){let t=String(e||"").trim();return t?/^https?:\/\//i.test(t)?t:`https://${t}`:""}var En=(e,t)=>!t||e.companyId===t;function Xc(e){let t=new Map;for(let n of e)t.has(n.invoiceId)||t.set(n.invoiceId,[]),t.get(n.invoiceId).push(n);return t}function ut(e,{companyId:t,range:n,customerId:a}={}){let s=[];for(let i of e.invoices){if(!br(i)||!i.totals||!En(i,t)||a&&i.customerId!==a||n&&!tn(i.issueDate,n))continue;let r=i.totals,o=vt(r.netCents,i.currency,i.fx)||0,c=Mt(r.netCents,i.currency,i.fx)||0,p=vt(r.taxCents,i.currency,i.fx)||0,d=Mt(r.taxCents,i.currency,i.fx)||0;s.push({inv:i,date:i.issueDate,netUSD:o,netEUR:c,taxUSD:p,taxEUR:d,totalUSD:o+p,totalEUR:c+d})}return s}function Ea(e,{companyId:t,range:n}={}){let a=[];for(let s of e.expenses){if(s.status!=="booked"||!En(s,t)||n&&!tn(s.invoiceDate,n))continue;let i=vt(s.netCents,s.currency,s.fx)||0,r=Mt(s.netCents,s.currency,s.fx)||0,o=vt(s.taxCents,s.currency,s.fx)||0,c=Mt(s.taxCents,s.currency,s.fx)||0;a.push({exp:s,date:s.invoiceDate,netUSD:i,netEUR:r,taxUSD:o,taxEUR:c,totalUSD:i+o,totalEUR:r+c})}return a}function Ci(e,{companyId:t,range:n}={}){let a=new Map(e.invoices.map(i=>[i.id,i])),s=[];for(let i of e.payments){let r=a.get(i.invoiceId);r&&En(r,t)&&(n&&!tn(i.date,n)||s.push({pay:i,inv:r,date:i.date,usd:vt(i.amountCents,r.currency,r.fx)||0,eur:Mt(i.amountCents,r.currency,r.fx)||0}))}return s}var le=(e,t)=>e.reduce((n,a)=>n+(a[t]||0),0);function Nn(e,{companyId:t}={},n){let a=Xc(e.payments),s=[];for(let i of e.invoices){if(!En(i,t))continue;let r=a.get(i.id)||[],o=rn(i,r);if(o<=0)continue;let c=Qt(i,r,n),p=i.dueDate&&i.dueDate<n?gn(i.dueDate,n):0;s.push({inv:i,status:c,overdueDays:p,openCents:o,paidCents:_e(r),openUSD:vt(o,i.currency,i.fx)||0,openEUR:Mt(o,i.currency,i.fx)||0,bucket:p<=0?"current":p<=30?"d30":p<=60?"d60":p<=90?"d90":"d90plus"})}return s.sort((i,r)=>(i.inv.dueDate||"9999")<(r.inv.dueDate||"9999")?-1:1),s}var eu=[{id:"current",label:"Nicht fällig"},{id:"d30",label:"1–30 Tage"},{id:"d60",label:"31–60 Tage"},{id:"d90",label:"61–90 Tage"},{id:"d90plus",label:"Über 90 Tage"}];function tu(e,t,n){let a=yt("month",n),s=yt("quarter",n),i=yt("year",n),r=yt("lastMonth",n),o=ut(e,{companyId:t,range:i}),c=h=>o.filter(C=>tn(C.date,h)),p=c(a),d=c(s),u=ut(e,{companyId:t,range:r}),m=Nn(e,{companyId:t},n),g=m.filter(h=>h.status==="overdue"),$=Xc(e.payments),b=o.filter(h=>h.inv.type!=="credit_note"&&h.inv.status!=="credited"),y=b.filter(h=>Qt(h.inv,$.get(h.inv.id)||[],n)==="paid"),f=e.customers.filter(h=>h.active!==!1&&h.kind!=="contact");if(t){let h=new Set([...e.invoices.filter(C=>C.companyId===t).map(C=>C.customerId),...(e.quotes||[]).filter(C=>C.companyId===t).map(C=>C.customerId)]);f=f.filter(C=>h.has(C.id))}return{month:{usd:le(p,"netUSD"),eur:le(p,"netEUR"),count:p.length},lastMonth:{usd:le(u,"netUSD"),eur:le(u,"netEUR")},quarter:{usd:le(d,"netUSD"),eur:le(d,"netEUR")},year:{usd:le(o,"netUSD"),eur:le(o,"netEUR")},open:{count:m.length,usd:le(m,"openUSD"),eur:le(m,"openEUR")},overdue:{count:g.length,usd:le(g,"openUSD"),eur:le(g,"openEUR")},paid:{count:y.length,usd:le(y,"totalUSD"),eur:le(y,"totalEUR")},average:{usd:b.length?Math.round(le(b,"netUSD")/b.length):0,eur:b.length?Math.round(le(b,"netEUR")/b.length):0,count:b.length},activeCustomers:f.length}}function gs(e,{companyId:t,months:n,range:a}){let s={from:`${n[0]}-01`,to:`${n[n.length-1]}-31`},i=a?{from:a.from>s.from?a.from:s.from,to:a.to<s.to?a.to:s.to}:s,r=ut(e,{companyId:t,range:i}),o=Ea(e,{companyId:t,range:i}),c=Ci(e,{companyId:t,range:i});return n.map(p=>{let d=r.filter(b=>Fa(b.date)===p),u=o.filter(b=>Fa(b.date)===p),m=c.filter(b=>Fa(b.date)===p),g={},$={};for(let b of d)g[b.inv.companyId]=(g[b.inv.companyId]||0)+b.netUSD,$[b.inv.companyId]=($[b.inv.companyId]||0)+b.netEUR;return{key:p,revenueUSD:le(d,"netUSD"),revenueEUR:le(d,"netEUR"),expenseUSD:le(u,"netUSD"),expenseEUR:le(u,"netEUR"),profitUSD:le(d,"netUSD")-le(u,"netUSD"),profitEUR:le(d,"netEUR")-le(u,"netEUR"),paymentsUSD:le(m,"usd"),paymentsEUR:le(m,"eur"),taxUSD:le(d,"taxUSD"),taxEUR:le(d,"taxEUR"),invoices:d.length,byCompany:g,byCompanyUSD:g,byCompanyEUR:$}})}function Zr(e,t){let n=new Map;for(let a of e){let s=t(a.date),i=n.get(s)||{key:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>a.key<s.key?-1:1)}function nu(e,t,n){let a=ut(e,t);return n==="quarter"?Zr(a,ul):n==="year"?Zr(a,s=>String(Os(s))):Zr(a,Fa)}function hs(e,t){let n=new Map(e.customers.map(s=>[s.id,s])),a=new Map;for(let s of ut(e,t)){let i=s.inv.customerId,r=s.inv.snapshot&&s.inv.snapshot.customer,o=a.get(i)||{id:i,name:Z(n.get(i)||r)||"Unbekannt",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function $s(e,t){let n=new Map(e.companies.map(s=>[s.id,s])),a=new Map;for(let s of ut(e,t)){let i=s.inv.companyId,r=n.get(i),o=a.get(i)||{id:i,name:r?r.name:"Unbekannt",color:r?r.brandColor:"#888888",usd:0,eur:0,count:0};o.usd+=s.netUSD,o.eur+=s.netEUR,s.inv.type!=="credit_note"&&(o.count+=1),a.set(i,o)}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function bs(e,t){let n=new Map(e.services.map(s=>[s.id,s])),a=new Map;for(let s of ut(e,t)){let i=new Map((s.inv.totals.lines||[]).map(d=>[d.id,d])),r=(s.inv.items||[]).filter(d=>i.has(d.id)),o=r.map(d=>{let u=i.get(d.id);return u.netCents!=null?u.netCents:u.cents}),c=_t(s.netUSD,o),p=_t(s.netEUR,o);r.forEach((d,u)=>{let m=d.serviceId?n.get(d.serviceId):null,g=m?`s:${m.id}`:`n:${String(d.name||"").trim().toLowerCase()}`,$=a.get(g)||{key:g,name:m?m.name:d.name||"Ohne Bezeichnung",category:m?m.category:"",usd:0,eur:0,qty:0};$.usd+=c[u]||0,$.eur+=p[u]||0,$.qty+=Number(d.qty)||0,a.set(g,$)})}return[...a.values()].sort((s,i)=>i.usd-s.usd)}function Gr(e,t={}){let n=new Map(e.services.map(o=>[o.id,o])),a=o=>{let c=o.serviceId?n.get(o.serviceId):null;return c?`s:${c.id}`:`n:${String(o.name||"").trim().toLowerCase()}`},s=new Map,i=(o,c)=>{s.has(o)||s.set(o,new Map);let p=s.get(o),d=a(c),u=c.serviceId?n.get(c.serviceId):null;return p.has(d)||p.set(d,{key:d,name:u?u.name:String(c.name||"").trim()||"Ohne Bezeichnung",category:u&&u.category||"",unit:c.unit||u&&u.unit||"",usd:0,eur:0,qty:0,invoices:new Set,first:"",last:"",companyIds:new Set,running:!1,interval:""}),p.get(d)};for(let o of ut(e,t)){let c=new Map((o.inv.totals.lines||[]).map($=>[$.id,$])),p=(o.inv.items||[]).filter($=>c.has($.id)),d=p.map($=>{let b=c.get($.id);return b.netCents!=null?b.netCents:b.cents}),u=_t(o.netUSD,d),m=_t(o.netEUR,d),g=o.inv.type==="credit_note";p.forEach(($,b)=>{let y=i(o.inv.customerId,$);y.usd+=u[b]||0,y.eur+=m[b]||0,y.qty+=Number($.qty)||0,g||(y.invoices.add(o.inv.id),y.companyIds.add(o.inv.companyId),(!y.first||o.date<y.first)&&(y.first=o.date),o.date>y.last&&(y.last=o.date))})}for(let o of e.recurring||[])if(!(o.active===!1||!o.customerId)&&En(o,t.companyId)&&!(t.customerId&&o.customerId!==t.customerId))for(let c of o.items||[]){if(!String(c.name||"").trim()&&!c.serviceId)continue;let p=i(o.customerId,c);p.running=!0,p.interval=o.interval,p.companyIds.add(o.companyId)}let r=new Map;for(let[o,c]of s)r.set(o,[...c.values()].map(p=>({...p,invoices:p.invoices.size,companyIds:[...p.companyIds]})).sort((p,d)=>Number(d.running)-Number(p.running)||d.usd-p.usd));return r}function au(e,t){let n=new Map;for(let a of ut(e,t)){let s=a.inv.currency,i=n.get(s)||{currency:s,netCents:0,taxCents:0,totalCents:0,usd:0,eur:0,count:0};i.netCents+=a.inv.totals.netCents,i.taxCents+=a.inv.totals.taxCents,i.totalCents+=a.inv.totals.totalCents,i.usd+=a.netUSD,i.eur+=a.netEUR,a.inv.type!=="credit_note"&&(i.count+=1),n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function Hr(e,t){let n=new Map;for(let a of Ea(e,t)){let s=a.exp.category||"Ohne Kategorie",i=n.get(s)||{name:s,usd:0,eur:0,taxUSD:0,taxEUR:0,count:0};i.usd+=a.netUSD,i.eur+=a.netEUR,i.taxUSD+=a.taxUSD,i.taxEUR+=a.taxEUR,i.count+=1,n.set(s,i)}return[...n.values()].sort((a,s)=>s.usd-a.usd)}function su(e,t,n){let a=ut(e,t),s=Ea(e,t),i=Ci(e,t),r=Nn(e,{companyId:t.companyId},n),o=le(a,"netUSD"),c=le(a,"netEUR"),p=le(s,"netUSD"),d=le(s,"netEUR");return{income:{usd:o,eur:c,count:a.filter(u=>u.inv.type!=="credit_note").length},expenses:{usd:p,eur:d,count:s.length},profit:{usd:o-p,eur:c-d},payments:{usd:le(i,"usd"),eur:le(i,"eur"),count:i.length},receivables:{usd:le(r,"openUSD"),eur:le(r,"openEUR"),count:r.length},taxCollected:{usd:le(a,"taxUSD"),eur:le(a,"taxEUR")},taxPaid:{usd:le(s,"taxUSD"),eur:le(s,"taxEUR")},taxBalance:{usd:le(a,"taxUSD")-le(s,"taxUSD"),eur:le(a,"taxEUR")-le(s,"taxEUR")}}}function iu(e,t){let n=new Map;for(let i of ut(e,t)){let r=i.inv.totals.taxGroups||[],o=_t(i.taxUSD,r.map(u=>u.taxCents)),c=_t(i.netUSD,r.map(u=>u.netCents)),p=_t(i.taxEUR,r.map(u=>u.taxCents)),d=_t(i.netEUR,r.map(u=>u.netCents));r.forEach((u,m)=>{let g=`${u.rate}|${i.inv.currency}`,$=n.get(g)||{rate:u.rate,currency:i.inv.currency,netCents:0,taxCents:0,netUSD:0,taxUSD:0,netEUR:0,taxEUR:0};$.netCents+=u.netCents,$.taxCents+=u.taxCents,$.netUSD+=c[m]||0,$.taxUSD+=o[m]||0,$.netEUR+=d[m]||0,$.taxEUR+=p[m]||0,n.set(g,$)})}let a=[...n.values()].sort((i,r)=>i.rate-r.rate||i.currency.localeCompare(r.currency)),s=Ea(e,t);return{collected:a,collectedUSD:a.reduce((i,r)=>i+r.taxUSD,0),collectedEUR:a.reduce((i,r)=>i+r.taxEUR,0),paidUSD:le(s,"taxUSD"),paidEUR:le(s,"taxEUR")}}function jr(e,t,n){let a=e.from,s=e.to;if(a<"1900"||s>"2200"){let i=new Map(t.invoices.map(o=>[o.id,o])),r=[...t.invoices.filter(o=>br(o)&&En(o,n)).map(o=>o.issueDate),...t.expenses.filter(o=>o.status==="booked"&&En(o,n)).map(o=>o.invoiceDate),...t.payments.filter(o=>i.has(o.invoiceId)&&En(i.get(o.invoiceId),n)).map(o=>o.date)].filter(Boolean).sort();if(!r.length)return[];a<"1900"&&(a=r[0]),s>"2200"&&(s=r[r.length-1])}return dl(a,s)}var np=["image/jpeg","image/png","image/webp","image/gif","application/pdf"],ru=15*1024*1024;async function ou(e){if(!e)throw new Error("Keine Datei ausgewählt.");if(e.size>ru)throw new Error(`„${e.name}“ ist größer als 15 MB.`);if(await ap(e,5)!=="%PDF-")throw new Error(`„${e.name}“ ist keine PDF-Datei. Bitte das Dokument als PDF speichern und erneut hochladen.`);let n=/\.pdf$/i.test(e.name||"")?e.name:`${e.name||"Dokument"}.pdf`;return{blob:e.type==="application/pdf"?e:new Blob([e],{type:"application/pdf"}),name:n}}function ap(e,t){return new Promise((n,a)=>{let s=new FileReader;s.onload=()=>n(String.fromCharCode(...new Uint8Array(s.result))),s.onerror=()=>a(s.error),s.readAsArrayBuffer(e.slice(0,t))})}function lu(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(String(a.result).split(",")[1]||""),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function sp(e){return new Promise((t,n)=>{let a=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(a),t(s)},s.onerror=()=>{URL.revokeObjectURL(a),n(new Error("Das Bild konnte nicht gelesen werden."))},s.src=a})}function Wr(e,t,n){return new Promise((a,s)=>{e.toBlob(i=>i?a(i):s(new Error("Das Bild konnte nicht umgewandelt werden.")),t,n)})}async function Ii(e,t,n){let a=await sp(e),s=a.naturalWidth||a.width,i=a.naturalHeight||a.height;if(!s||!i)throw new Error("Das Bild hat keine lesbare Größe.");let r=Math.min(1,t/Math.max(s,i)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s*r)),o.height=Math.max(1,Math.round(i*r));let c=o.getContext("2d");return n&&(c.fillStyle=n,c.fillRect(0,0,o.width,o.height)),c.imageSmoothingQuality="high",c.drawImage(a,0,0,o.width,o.height),{canvas:o,scaled:r<1}}var ip=e=>/heic|heif/i.test(e.type||"")||/\.(heic|heif)$/i.test(e.name||"");async function Qr(e,{shrink:t=!0}={}){if(e.size>ru)throw new Error(`„${e.name}“ ist größer als 15 MB.`);let n=e.type;if(!n&&/\.pdf$/i.test(e.name||"")&&(n="application/pdf"),n==="application/pdf")return{blob:e,name:e.name,mime:n};if(ip(e))try{let{canvas:a}=await Ii(e,2e3,"#ffffff");return{blob:await Wr(a,"image/jpeg",.85),name:e.name.replace(/\.(heic|heif)$/i,".jpg"),mime:"image/jpeg"}}catch{throw new Error(`„${e.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`)}if(!np.includes(n))throw new Error(`„${e.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);if(!t)return{blob:e,name:e.name,mime:n};try{let{canvas:a,scaled:s}=await Ii(e,2e3,"#ffffff"),i=await Wr(a,"image/jpeg",.85);return!s&&i.size>=e.size?{blob:e,name:e.name,mime:n}:{blob:i,name:e.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i,"")+".jpg",mime:"image/jpeg"}}catch{return{blob:e,name:e.name,mime:n}}}async function cu(e){let{canvas:t}=await Ii(e,1568,"#ffffff");return Wr(t,"image/jpeg",.85)}async function uu(e){if(e.size>5*1024*1024)throw new Error("Das Logo ist größer als 5 MB.");if(!/^image\//.test(e.type))throw new Error("Bitte eine Bilddatei wählen (PNG, JPG oder SVG).");let{canvas:t}=await Ii(e,800,null);return t.toDataURL("image/png")}async function Na(e){let t=await $l("blobs",e);return t?t.blob:null}var Ei=e=>(t,n)=>(t[e]||"")<(n[e]||"")?1:(t[e]||"")>(n[e]||"")?-1:0;function du(e,t,n){let a=(e.appointments||[]).filter(f=>f.customerId===t&&f.status!=="cancelled"),s=a.filter(f=>f.status==="done"||f.status==="planned"&&f.date<n).sort(Ei("date")),i=a.filter(f=>f.status==="planned"&&f.date>=n).sort((f,h)=>f.date+f.start<h.date+h.start?-1:1)[0]||null,r=(e.quotes||[]).filter(f=>f.customerId===t),o=r.filter(f=>f.status!=="draft").sort(Ei("issueDate")),c=o.map(f=>zt(f,n)),p=r.length-o.length,d=(e.contracts||[]).filter(f=>f.customerId===t).sort(Ei("createdAt")),u=(e.invoices||[]).filter(f=>f.customerId===t&&f.type!=="credit_note"),m=u.filter(f=>!["draft","cancelled"].includes(f.status)).sort(Ei("issueDate")),g=u.filter(f=>f.status==="draft").length,$=[{id:"meeting",label:"Termin",state:s.length?"done":i?"active":"todo",count:s.length,last:s[0]||null,next:i},{id:"quote",label:"Angebot",state:c.some(f=>f==="accepted"||f==="invoiced")?"done":c.some(f=>f==="open"||f==="sent")||p?"active":"todo",count:o.length,drafts:p,latest:o[0]||null,latestStatus:c[0]||""},{id:"contract",label:"Vertrag",state:d.some(f=>f.status==="signed"||f.status==="ended")?"done":d.some(f=>f.status==="open")?"active":"todo",count:d.length,latest:d[0]||null},{id:"invoice",label:"Rechnung",state:m.length?"done":g?"active":"todo",count:m.length,drafts:g,latest:m[0]||null}],b=-1;$.forEach((f,h)=>{f.state==="done"&&(b=h)}),$.forEach((f,h)=>{h<b&&f.state==="todo"&&(f.state="skipped")});let y=$.findIndex((f,h)=>h>b&&f.state!=="done");return{steps:$,current:y===-1?null:y}}function Yr(e,t,n=60){return e.status==="signed"&&!!e.endDate&&e.endDate>=t&&e.endDate<=Ce(t,n)}function Jr(e,t){return e.status==="signed"&&!!e.endDate&&e.endDate<t}function Ni(e,t){return Jr(e,t)?"expired":Yr(e,t)?"ending":e.status}function Ta({model:e}){let t=e.labels,n=e.columns;return l`<div class="sheet-wrap">
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
  </div>`}async function Ti(e){let t=Qe(e.id),n=yn(e.id),a=e.creditNoteId?w("invoices",e.creditNoteId):null,s=[];if(t.length&&s.push(`${t.length} ${t.length===1?"Zahlung":"Zahlungen"} über zusammen ${j(_e(t),e.currency)}`),a&&s.push(`Gutschrift ${a.number}`),n.length&&s.push(`${n.length} ${n.length===1?"Zahlungserinnerung":"Zahlungserinnerungen"}`),!await ue({title:`Rechnung ${e.number} löschen?`,text:`Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${e.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${s.length?" Mitgelöscht werden:":""}`,list:s.length?s:null,confirmLabel:"Endgültig löschen",danger:!0}))return!1;let r=await _(()=>Rr(e.id));return r?(U(r.freed?`Rechnung gelöscht – ${r.freed} ist wieder frei`:"Rechnung gelöscht","good",6e3),!0):!1}var rp=[{field:"code",label:"Nr.",keys:["nr","nr.","nummer","leistungsnummer","code","artikelnummer"]},{field:"name",label:"Name",keys:["name","leistung","bezeichnung"]},{field:"tier",label:"Tarif",keys:["tarif","tier","paket"]},{field:"category",label:"Kategorie",keys:["kategorie","category"]},{field:"unit",label:"Einheit",keys:["einheit","unit"]},{field:"price",label:"Preis netto",keys:["preis netto","preis","einzelpreis","einzelpreis netto","price"]},{field:"currency",label:"Währung",keys:["währung","waehrung","currency"]},{field:"kind",label:"Art",keys:["art","abrechnung","wiederkehrend"]},{field:"qty",label:"Menge",keys:["menge","standardmenge","qty"]},{field:"taxRate",label:"Steuersatz %",keys:["steuersatz %","steuersatz","steuer","ust","mwst"]},{field:"invoiceText",label:"Rechnungstext",keys:["rechnungstext","beschreibung auf der rechnung","text"]},{field:"internalName",label:"Interne Bezeichnung",keys:["interne bezeichnung","intern"]},{field:"description",label:"Interne Beschreibung",keys:["interne beschreibung","beschreibung","notiz"]},{field:"company",label:"Unternehmen",keys:["unternehmen","firma","company"]},{field:"active",label:"Aktiv",keys:["aktiv","active"]}],Ai=e=>String(e??"").trim().toLowerCase().replace(/\s+/g," "),tt=e=>e==null?"":String(e).trim();function op(e){let t=Ai(e);return t?t==="s"||t.startsWith("start")?"starter":t==="std"||t.startsWith("stand")?"standard":null:""}function lp(e){let t=Ai(e);return t?["einmalig","einmal","nein","no","false","0","once"].includes(t)?!1:["wiederkehrend","laufend","monatlich","ja","yes","true","1","x"].includes(t)||t.startsWith("wieder")?!0:null:null}function cp(e){let t=Ai(e);return t?!["nein","no","false","0","inaktiv"].includes(t):!0}function mu(e){let t=[...new Set(e.flatMap(o=>Object.keys(o)))],n={},a=[];for(let o of t){let c=rp.find(p=>p.keys.includes(Ai(o)));c&&!n[c.field]?n[c.field]=o:c||a.push(o)}let s=(o,c)=>n[c]!=null?o[n[c]]:void 0,i=[];e.forEach((o,c)=>{let p=tt(s(o,"name")),d=tt(s(o,"code"));if(!p&&!d&&Object.values(o).every(R=>tt(R)===""))return;let u=[];p||u.push("Name fehlt");let m=op(s(o,"tier"));m===null&&u.push(`Tarif „${tt(s(o,"tier"))}“ unbekannt (Starter oder Standard)`);let g=s(o,"price"),$=typeof g=="number"?g:hn(tt(g));tt(g)===""||Number.isNaN($)?u.push("Preis fehlt oder ist keine Zahl"):$<0&&u.push("Preis ist negativ");let b=tt(s(o,"currency")).toUpperCase()||"EUR";Ae.includes(b)||u.push(`Währung ${b} wird für Rechnungen nicht unterstützt (USD oder EUR)`);let y=lp(s(o,"kind")),f=tt(s(o,"unit"))||"Stück",h=s(o,"qty"),C=tt(h)===""?1:typeof h=="number"?h:hn(tt(h));(Number.isNaN(C)||C<0)&&u.push("Menge ist keine Zahl");let S=s(o,"taxRate"),k=null;tt(S)!==""&&(k=typeof S=="number"?S:hn(tt(S).replace("%","")),(Number.isNaN(k)||k<0||k>100)&&(u.push("Steuersatz ist ungültig"),k=null)),i.push({row:c+2,problems:u,service:{code:d,name:p,tier:m||"",category:tt(s(o,"category")),unit:f,priceCents:Number.isNaN($)?0:$a($),currency:Ae.includes(b)?b:"EUR",recurring:y??/monat|jahr|quartal/i.test(f),defaultQty:Number.isNaN(C)?1:C,taxRate:k,invoiceText:tt(s(o,"invoiceText")),internalName:tt(s(o,"internalName")),description:tt(s(o,"description")),company:tt(s(o,"company")),active:cp(s(o,"active"))}})});let r=new Map;for(let o of i){let c=o.service.code;c&&(r.has(c)?o.problems.push(`Nr. ${c} steht doppelt in der Datei (Zeile ${r.get(c)})`):r.set(c,o.row))}return{items:i,unknownColumns:a,columns:n}}function pu(e,t=()=>""){return e.map(n=>({"Nr.":n.code||"",Name:n.name,Tarif:n.tier?qt[n.tier].label:"",Kategorie:n.category||"",Einheit:n.unit||"","Preis netto":(n.priceCents||0)/100,Währung:n.currency||"",Art:n.recurring?"Wiederkehrend":"Einmalig",Menge:n.defaultQty==null?1:n.defaultQty,"Steuersatz %":n.taxRate==null||n.taxRate===""?"":n.taxRate,Rechnungstext:n.invoiceText||"","Interne Bezeichnung":n.internalName||"","Interne Beschreibung":n.description||"",Unternehmen:t(n.companyId),Aktiv:n.active===!1?"Nein":"Ja"}))}var Bi=null;function eo(){return Bi||(Bi=new Promise((e,t)=>{let n=document.createElement("script");n.src="js/vendor/xlsx.mini.min.js",n.onload=()=>window.XLSX?e(window.XLSX):t(new Error("Excel-Export konnte nicht geladen werden.")),n.onerror=()=>t(new Error("Excel-Export konnte nicht geladen werden.")),document.head.appendChild(n)}).catch(e=>{throw Bi=null,e})),Bi}var Ri=e=>e&&typeof e=="object"?e.v:e,fu=e=>e&&typeof e=="object"?e.t!=null?e.t:e.v:e;function Xr(e){if(e==null)return"";let t;return typeof e=="number"?t=String(e).replace(".",","):t=String(e),/^[=+\-@\t\r]/.test(t)&&typeof e!="number"&&(t=`'${t}`),/[";\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function up(e){let t=[e.columns.map(n=>Xr(n.label)).join(";")];for(let n of e.rows)t.push(n.map(a=>Xr(Ri(a))).join(";"));return e.totals&&t.push(e.totals.map(n=>Xr(Ri(n))).join(";")),"\uFEFF"+t.join(`\r
`)+`\r
`}function Ui(e){let t=new Blob([up(e)],{type:"text/csv;charset=utf-8"});Je(t,`${Ft(e.fileName)}.csv`)}async function gu(e){let t=await eo(),n=[e.columns.map(r=>r.label)];for(let r of e.rows)n.push(r.map(Ri));e.totals&&n.push(e.totals.map(Ri));let a=t.utils.aoa_to_sheet(n);e.columns.forEach((r,o)=>{for(let c=1;c<n.length;c++){let p=t.utils.encode_cell({r:c,c:o}),d=a[p];d&&(typeof d.v=="number"&&r.type==="money"&&(d.z="#,##0.00"),typeof d.v=="string"&&/^[=+\-@]/.test(d.v)&&(d.t="s"))}}),a["!cols"]=e.columns.map((r,o)=>({wch:Math.min(48,Math.max(r.label.length,...n.slice(1).map(c=>String(c[o]==null?"":c[o]).length))+2)}));let s=t.utils.book_new();t.utils.book_append_sheet(s,a,Ft(e.title).slice(0,31)||"Report");let i=t.write(s,{bookType:"xlsx",type:"array"});Je(new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Ft(e.fileName)}.xlsx`)}async function hu(e){await Gc({title:e.title,subtitle:e.subtitle,columns:e.columns,rows:e.rows.map(t=>t.map(fu)),totals:e.totals?e.totals.map(fu):null,fileName:`${Ft(e.fileName)}.pdf`,landscape:e.columns.length>6})}async function $u(e){if(e.size>5*1024*1024)throw new Error(`„${e.name}“ ist größer als 5 MB.`);if(!/\.(xlsx|xls|csv)$/i.test(e.name||""))throw new Error("Bitte eine Excel-Datei (.xlsx) oder CSV-Datei wählen.");let t=await eo(),n=/\.csv$/i.test(e.name),a;if(n){let i=(await e.text()).replace(/^﻿/,""),r=i.split(/\r?\n/)[0]||"",o=(r.match(/;/g)||[]).length>=(r.match(/,/g)||[]).length?";":",";a=t.read(i,{type:"string",FS:o,raw:!0})}else a=t.read(new Uint8Array(await e.arrayBuffer()),{type:"array"});let s=a.Sheets[a.SheetNames[0]];if(!s)throw new Error("Die Datei enthält keine Tabelle.");return t.utils.sheet_to_json(s,{defval:"",raw:!n})}async function bu(e,{fileName:t,sheet:n="Tabelle",moneyColumns:a=[]}={}){let s=await eo(),i=s.utils.json_to_sheet(e),r=e.length?Object.keys(e[0]):[];r.forEach((p,d)=>{for(let u=1;u<=e.length;u++){let m=i[s.utils.encode_cell({r:u,c:d})];m&&(typeof m.v=="number"&&a.includes(p)&&(m.z="#,##0.00"),typeof m.v=="string"&&/^[=+\-@]/.test(m.v)&&(m.t="s"))}}),i["!cols"]=r.map(p=>({wch:Math.min(60,Math.max(p.length,...e.map(d=>String(d[p]==null?"":d[p]).length))+2)}));let o=s.utils.book_new();s.utils.book_append_sheet(o,i,n.slice(0,31));let c=s.write(o,{bookType:"xlsx",type:"array"});Je(new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),`${Ft(t)}.xlsx`)}function to(e){let t=e.code||"";if(!t)return`zzzz ${e.name}`;let n=/^(.*-)(\d)(\d{2})$/.exec(t);return n?`${n[1]}${n[3]}-${n[2]}`:t}function yu({tier:e}){let t=qt[e];return t?l`<${ze} tone=${t.tone}>${t.label}<//>`:null}function no({service:e,onClose:t,onSaved:n}){let a=!e||!w("services",e.id),[s,i]=D(()=>({...e||Ht()})),[r,o]=D(!1),c=m=>g=>i($=>({...$,[m]:g})),p=v.settings.serviceCategories||[],d=oa.includes(s.unit)||!s.unit?oa:[...oa,s.unit];async function u(){o(!0);let m=await _(()=>li(s));o(!1),m&&(U(a?"Leistung angelegt":"Leistung gespeichert","good"),n&&n(m),t())}return l`<${Le} title=${a?"Neue Leistung":"Leistung bearbeiten"} onClose=${t} size="lg" onSubmit=${u}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${r}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${q} class="span-2" label="Leistungsnummer" value=${s.code} onInput=${c("code")} placeholder="z. B. HL-WEB-101" hint="optional, eindeutig" />
      <${q} class="span-4" label="Name" value=${s.name} onInput=${c("name")} hint="So erscheint die Leistung auf der Rechnung" />
      <${ae} class="span-2" label="Tarif" value=${s.tier||""} onChange=${c("tier")} placeholder="Ohne Tarif"
        options=${Object.entries(qt).map(([m,g])=>({id:m,label:g.label}))} />
      <${q} class="span-4" label="Interne Bezeichnung" value=${s.internalName} onInput=${c("internalName")} />
      <${ie} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${c("invoiceText")} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${ie} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${c("description")} rows=${2} />

      <${Re} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${c("priceCents")} min=${0} />
      <${ae} class="span-1" label="Währung" value=${s.currency} onChange=${c("currency")} options=${Ae} />
      <${ae} class="span-2" label="Einheit" value=${s.unit} onChange=${c("unit")} options=${d} />
      <${Re} class="span-1" label="Menge" value=${s.defaultQty} onChange=${c("defaultQty")} digits=${3} min=${0} />

      <${Re} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${c("taxRate")} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${ae} class="span-2" label="Kategorie" value=${s.category} onChange=${c("category")} placeholder="Keine"
        options=${p.includes(s.category)||!s.category?p:[...p,s.category]} />
      <${ae} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${c("companyId")} placeholder="Alle Unternehmen"
        options=${re().map(m=>({id:m.id,label:m.name}))} />

      <div class="span-3"><${Ge} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${c("recurring")}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${Ge} label="Aktiv" checked=${s.active!==!1} onChange=${c("active")}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`}function vu(){ge();let[e,t]=D(""),[n,a]=D(""),[s,i]=D("all"),[r,o]=D(null),[c,p]=D(null),d=ye(null),u=ht(),m=v.services.filter(k=>u&&k.companyId&&k.companyId!==u||n&&k.category!==n||s!=="all"&&(k.tier||"")!==(s==="none"?"":s)?!1:Ne(e,k.code,k.name,k.internalName,k.description,k.invoiceText,k.category,k.tier&&qt[k.tier]&&qt[k.tier].label)),g=v.services.filter(k=>!(u&&k.companyId&&k.companyId!==u)),$=k=>g.filter(R=>(R.tier||"")===k).length,b=g.some(k=>k.tier);async function y(k){if(!k)return;let R=await _(async()=>{let G=await $u(k),N=mu(G);if(!N.items.length)throw new Error("In der Datei wurden keine Leistungen gefunden. Erwartet wird eine Tabelle mit Überschriften wie „Nr.“, „Name“, „Tarif“, „Preis netto“.");if(!N.columns.name)throw new Error("Die Spalte „Name“ fehlt.");if(!N.columns.price)throw new Error("Die Spalte „Preis netto“ fehlt.");return N});R&&p({...R,fileName:k.name})}async function f(){let k=[...m].sort((R,G)=>to(R).localeCompare(to(G),"de"));await _(()=>bu(pu(k,R=>(w("companies",R)||{}).name||""),{fileName:`Leistungen ${V()}`,sheet:"Leistungen",moneyColumns:["Preis netto"]}))}let h=[...new Set(v.services.map(k=>k.category).filter(Boolean))].sort((k,R)=>k.localeCompare(R,"de"));async function C(k){if(!await ue({title:"Leistung löschen?",text:`„${k.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await cc(k.id),!0))&&U("Leistung gelöscht","good")}let S=[{key:"code",label:"Nr.",class:"nw",sort:to,render:k=>k.code?l`<span class="mono-code">${k.code}</span>`:l`<span class="muted-text">–</span>`},{key:"name",label:"Leistung",sort:k=>k.name,render:k=>l`<div class="cell-main">${k.name}${k.active===!1&&l` <${ze} tone="mute">Inaktiv<//>`}</div>
        ${(k.invoiceText||k.internalName)&&l`<div class="cell-sub clamp-1">${k.invoiceText||k.internalName}</div>`}`},{key:"tier",label:"Tarif",sort:k=>k.tier||"zzzz",render:k=>l`<${yu} tier=${k.tier} />`},{key:"category",label:"Kategorie",sort:k=>k.category,render:k=>k.category||l`<span class="muted-text">–</span>`},{key:"company",label:"Unternehmen",sort:k=>(w("companies",k.companyId)||{}).name||"",render:k=>{let R=w("companies",k.companyId);return R?l`<span class="co-tag"><${ni} company=${R} />${R.shortName||R.name}</span>`:l`<span class="muted-text">Alle</span>`}},{key:"kind",label:"Art",sort:k=>k.recurring?1:0,render:k=>k.recurring?"Wiederkehrend":"Einmalig"},{key:"unit",label:"Einheit",render:k=>k.unit},{key:"tax",label:"Steuer",align:"right",render:k=>k.taxRate!=null&&k.taxRate!==""?St(k.taxRate):l`<span class="muted-text">Standard</span>`},{key:"price",label:"Einzelpreis",align:"right",sort:k=>k.priceCents,render:k=>j(k.priceCents,k.currency)},{key:"actions",label:"",align:"right",render:k=>l`<${E} variant="ghost" small icon="trash" title=${`${k.name} löschen`} onClick=${()=>C(k)} />`}];return l`
    <${ke} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <input ref=${d} type="file" class="visually-hidden" accept=".xlsx,.xls,.csv" tabindex="-1" aria-label="Leistungen importieren"
        onChange=${k=>{let R=k.target.files[0];k.target.value="",y(R)}} />
      <${E} icon="upload" onClick=${()=>d.current&&d.current.click()}>Importieren<//>
      ${v.services.length>0&&l`<${E} icon="download" onClick=${f}>Excel<//>`}
      <${E} variant="primary" icon="plus" onClick=${()=>o(Ht({companyId:""}))}>Neue Leistung<//>
    <//>
    ${v.services.length>0&&l`<div class="filters">
      <${gt} value=${e} onInput=${t} placeholder="Leistung suchen" />
      ${h.length>0&&l`<select class="input select filter-select" value=${n} aria-label="Nach Kategorie filtern" onChange=${k=>a(k.target.value)}>
        <option value="">Alle Kategorien</option>
        ${h.map(k=>l`<option value=${k}>${k}</option>`)}
      </select>`}
      ${b&&l`<${ft} label="Tarif" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:g.length},{id:"starter",label:"Starter",count:$("starter")},{id:"standard",label:"Standard",count:$("standard")},...$("")?[{id:"none",label:"Ohne Tarif",count:$("")}]:[]]} />`}
    </div>`}
    <${Xe} columns=${S} rows=${m} initialSort=${{key:"code",dir:"asc"}} onRowClick=${k=>o(k)}
      empty=${v.services.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`:l`<${pe} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${E} variant="primary" icon="plus" onClick=${()=>o(Ht())}>Erste Leistung anlegen<//>
          <//>`} />
    ${r&&l`<${no} service=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${dp} data=${c} onClose=${()=>p(null)} />`}
  `}function dp({data:e,onClose:t}){let n=re(),a=[...new Set(e.items.map(h=>h.service.company).filter(Boolean))],s=a.length===1?n.find(h=>[h.name,h.shortName,h.invoicePrefix].filter(Boolean).some(C=>C.toLowerCase()===a[0].toLowerCase())):null,[i,r]=D((s||de()||{}).id||""),[o,c]=D(!1),[p,d]=D(!1),u=new Set(v.services.map(h=>(h.code||"").toLowerCase()).filter(Boolean)),m=e.items.filter(h=>!h.problems.length),g=e.items.filter(h=>h.problems.length),$=h=>h.service.code&&u.has(h.service.code.toLowerCase()),b=m.filter(h=>!$(h)).length,y=m.length-b;async function f(){d(!0);let h=await _(()=>lc(m.map(S=>S.service),{companyId:i,update:o}));if(d(!1),!h)return;let C=[h.added&&`${h.added} ${h.added===1?"Leistung":"Leistungen"} angelegt`,h.updated&&`${h.updated} aktualisiert`,h.skipped&&`${h.skipped} unverändert übersprungen`].filter(Boolean);U(`${C.join(", ")}.`,"good",7e3),t()}return l`<${Le} title="Leistungen importieren" size="xl" onClose=${t} onSubmit=${f}
    footer=${l`<${E} onClick=${t}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${p} disabled=${!(b||o&&y)}>
        ${b?`${b} ${b===1?"Leistung":"Leistungen"} anlegen`:"Übernehmen"}${o&&y?`, ${y} aktualisieren`:""}<//>`}>
    <p class="modal-lead">${e.fileName}: ${e.items.length} Zeilen gelesen. Bestehende Leistungen werden nie gelöscht.</p>
    <div class="form-grid">
      <${ae} class="span-3" label="Gilt für Unternehmen" value=${i} onChange=${r} placeholder="Alle Unternehmen"
        options=${n.map(h=>({id:h.id,label:h.name}))} hint=${a.length?`In der Datei: ${a.join(", ")}`:"Leer: in allen Unternehmen wählbar"} />
      ${y>0&&l`<div class="span-3 import-update"><${Ge} label=${`${y} vorhandene Leistungen mit gleicher Nr. aktualisieren`} checked=${o} onChange=${c}
        hint="Sonst werden sie übersprungen und bleiben unverändert." /></div>`}
    </div>
    ${g.length>0&&l`<${xe} tone="warn">${g.length} ${g.length===1?"Zeile wird":"Zeilen werden"} nicht übernommen:
      ${g.slice(0,5).map(h=>l`<div>Zeile ${h.row}: ${h.problems.join(", ")}</div>`)}${g.length>5?l`<div>…</div>`:""}<//>`}
    ${e.unknownColumns.length>0&&l`<p class="muted-text small">Nicht verwendete Spalten: ${e.unknownColumns.join(", ")}</p>`}
    <div class="table-wrap import-preview">
      <table class="table">
        <thead><tr><th>Nr.</th><th>Leistung</th><th>Tarif</th><th>Kategorie</th><th>Art</th><th class="r">Preis netto</th><th></th></tr></thead>
        <tbody>${e.items.map(h=>l`<tr key=${h.row} class=${h.problems.length?"is-bad":""}>
          <td class="nw"><span class="mono-code">${h.service.code||"–"}</span></td>
          <td><div class="cell-main">${h.service.name||"–"}</div>${h.service.invoiceText&&l`<div class="cell-sub clamp-1">${h.service.invoiceText}</div>`}</td>
          <td><${yu} tier=${h.service.tier} /></td>
          <td>${h.service.category}</td>
          <td>${h.service.recurring?`je ${h.service.unit}`:h.service.unit==="Pauschal"?"einmalig":`je ${h.service.unit}`}</td>
          <td class="r">${j(h.service.priceCents,h.service.currency)}</td>
          <td>${h.problems.length?l`<span class="tone-bad small">${h.problems[0]}</span>`:$(h)?l`<span class="muted-text small">${o?"wird aktualisiert":"vorhanden, übersprungen"}</span>`:l`<span class="tone-good small">neu</span>`}</td>
        </tr>`)}</tbody>
      </table>
    </div>
  <//>`}var mp={invoices:{one:"Rechnung",newTitle:"Neue Rechnung",editTitle:"Rechnungsentwurf",list:"/invoices",listLabel:"Rechnungen",finalize:"Rechnung erstellen",dateLabel:"Rechnungsdatum",numberKind:"invoice"},quotes:{one:"Angebot",newTitle:"Neues Angebot",editTitle:"Angebotsentwurf",list:"/quotes",listLabel:"Angebote",finalize:"Angebot erstellen",dateLabel:"Angebotsdatum",numberKind:"quote"}};function ys(e,t,n,a){let s={...e,customerId:t?t.id:""};return t&&(t.language?s.language=t.language:n&&(s.language=n.language),t.currency&&Ae.includes(t.currency)?s.currency=t.currency:n&&(s.currency=n.currency),a==="invoices"&&(s.paymentTermDays=t.paymentTermDays!=null&&t.paymentTermDays!==""?Number(t.paymentTermDays):n?n.paymentTermDays:e.paymentTermDays)),s}function pp(e,t,n){if(t&&t!=="new"){let r=w(e,t);return r?ve(r):null}let a=re(),s=de()||(a.length===1?a[0]:null),i;if(e==="invoices"&&n.copy&&w("invoices",n.copy))i=vc(w("invoices",n.copy));else if(e==="invoices"&&n.contract&&w("contracts",n.contract)){let r=w("contracts",n.contract),o=w("companies",r.companyId)||s,c=r.quoteId?w("quotes",r.quoteId):null;return i=ys(mt(o,{contractId:r.id}),w("customers",r.customerId),o,e),i.currency=r.currency,i.items=[fi(r)],c&&!c.invoiceId&&c.status!=="draft"&&(i.quoteId=c.id),i}else if(e==="invoices")i=mt(s);else if(n.copy&&w("quotes",n.copy)){let r=w("quotes",n.copy),o=w("companies",r.companyId)||s;i=zn(o,{validUntil:Ce(V(),30),customerId:r.customerId,currency:r.currency,language:r.language,items:r.items.map(c=>({...c,id:Rt().id})),discount:ve(r.discount),intro:r.intro,paymentTerms:r.paymentTerms,footer:r.footer,showSecondary:r.showSecondary})}else i=zn(s,{validUntil:Ce(V(),30)});return n.customer&&w("customers",n.customer)&&(i=ys(i,w("customers",n.customer),w("companies",i.companyId),e)),i}function ao({doc:e,company:t,onChange:n,onNewService:a}){let[s,i]=D(null),r=ye(null),o=e.items||[],c=e.currency;ce(()=>{if(!s||!r.current)return;let b=r.current.querySelector(`[data-item="${s}"] .combo-input`);b&&b.focus(),i(null)},[s,o.length]);let p=Se(()=>v.services.filter(b=>b.active!==!1&&(!b.companyId||b.companyId===e.companyId)).sort((b,y)=>b.name.localeCompare(y.name,"de")).map(b=>({id:b.id,label:b.name,search:`${b.code||""} ${b.internalName} ${b.category} ${b.tier?qt[b.tier].label:""}`,sub:[b.tier?qt[b.tier].label:"",b.code,`${j(b.priceCents,b.currency)} je ${b.unit}`].filter(Boolean).join(" · ")})),[v.version,e.companyId]),d=(b,y)=>n(o.map(f=>f.id===b?{...f,...y}:f)),u=b=>n(o.filter(y=>y.id!==b));function m(b,y){let f=b+y;if(f<0||f>=o.length)return;let h=[...o];[h[b],h[f]]=[h[f],h[b]],n(h)}function g(){let b=Rt({taxRate:Number(t&&t.defaultTaxRate)||0});n([...o,b]),i(b.id)}function $(b,y){let f=w("services",y);if(!f)return;let h=lt(f,t),C=h.priceCents;if(f.currency&&f.currency!==c){let S=e.fx?Wt(f.currency,e.fx.usdToEur):null,k=S?sn(C,f.currency,c,S):null;k!=null?(C=k,U(`Preis von ${f.currency} in ${c} umgerechnet – bitte prüfen.`,"info")):U(`Die Leistung ist in ${f.currency} hinterlegt. Bitte den Preis in ${c} prüfen.`,"info")}d(b,{...h,id:b,priceCents:C})}return l`<div class="items" ref=${r}>
    ${o.map((b,y)=>l`<div class="item" key=${b.id} data-item=${b.id}>
      <div class="item-top">
        <span class="item-pos">${y+1}</span>
        <div class="item-name">
          <${kt} freeText options=${p} text=${b.name} label=${`Position ${y+1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${f=>d(b.id,{name:f,serviceId:b.serviceId&&w("services",b.serviceId)&&w("services",b.serviceId).name===f?b.serviceId:""})}
            onChange=${f=>$(b.id,f)} />
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
          <${st} value=${b.qty} digits=${3} onChange=${f=>d(b.id,{qty:f})} aria-label=${`Position ${y+1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${b.unit} aria-label=${`Position ${y+1}: Einheit`}
            onInput=${f=>d(b.id,{unit:f.target.value})} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${st} mode="money" value=${b.priceCents} onChange=${f=>d(b.id,{priceCents:f})} aria-label=${`Position ${y+1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${st} value=${b.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${f=>d(b.id,{discountPct:f})} aria-label=${`Position ${y+1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${st} value=${b.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${f=>d(b.id,{taxRate:f})} aria-label=${`Position ${y+1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${j($r(b),c)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${oa.map(b=>l`<option value=${b}></option>`)}</datalist>
    <div class="items-foot">
      <${E} icon="plus" onClick=${g}>Position hinzufügen<//>
      <${E} variant="ghost" icon="services" onClick=${a}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`}function vs({coll:e,id:t,params:n}){ge();let a=mp[e],[s,i]=D(()=>pp(e,t,n||{})),[r,o]=D(!1),[c,p]=D({loading:!1,error:""}),[d,u]=D(""),[m,g]=D(""),[$,b]=D([]),[y,f]=D(null),[h,C]=D(!1),S=ye(0),k=ye(!0),R=H=>{i(H),o(!0)},G=H=>te=>R(Ze=>({...Ze,[H]:te}));ce(()=>(r?Ws(Qs):an(),()=>an()),[r]);let N=s?w("companies",s.companyId):null,A=s?w("customers",s.customerId):null,x=s?`${s.currency}|${s.issueDate}`:"";async function B(H){if(!s||!$e(s.issueDate)||!H&&s.fx&&s.fx.manual)return;let te=++S.current,Ze=s.currency,mn=s.issueDate;p({loading:!0,error:""});try{let Kt=await Hn(Ze,mn);if(te!==S.current)return;i(nt=>nt.currency===Ze&&nt.issueDate===mn?{...nt,fx:Kt}:nt),H&&o(!0),p({loading:!1,error:""})}catch(Kt){if(te!==S.current)return;i(nt=>nt.fx&&!nt.fx.manual&&nt.fx.forDate&&$e(nt.issueDate)&&nt.fx.forDate!==Gn(nt.issueDate)?{...nt,fx:null}:nt),p({loading:!1,error:Kt.message})}}if(ce(()=>{let H=k.current;k.current=!1,!(!s||s.status!=="draft")&&(H&&s.number&&s.fx||B(!1))},[x]),ce(()=>{let H=!0;if(!s||!N){u("");return}if(s.number){u(s.number);return}return ts(N,a.numberKind,s.issueDate).then(te=>{H&&u(te)}).catch(()=>{H&&u("")}),()=>{H=!1}},[s&&s.companyId,s&&s.issueDate,v.version]),!s)return l`<${pe} title=${`${a.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${E} onClick=${()=>Y(a.list)}>Zur Übersicht<//>
    <//>`;if(s.status!=="draft")return setTimeout(()=>vn(`${a.list}/${s.id}`),0),null;let I=pt(s),K=s.fx?Wt(s.currency,s.fx.usdToEur,s.fx):null,P={...s,fx:K,totals:I,dueDate:e==="invoices"?Ar(s):""},z=It(P,e,{previewNumber:d}),ee=s.currency==="USD"?"EUR":"USD",T=K?sn(I.totalCents,s.currency,ee,K):null,X=re(),fe=!!w(e,s.id),O=e==="invoices"&&s.number?s.number:"",Ue=O?s.reopened||{}:null,qe=O?_e(Qe(s.id)):0,ta=v.customers.filter(H=>H.active!==!1||H.id===s.customerId).sort((H,te)=>+!Be(H)-+!Be(te)||Z(H).localeCompare(Z(te),"de")).map(H=>({id:H.id,label:Z(H),sub:[Be(H)?"":"Kontakt",H.number,H.city].filter(Boolean).join(", "),search:`${H.firstName} ${H.lastName} ${H.contact} ${H.email}`}));function Hi(H){let te=w("companies",H),Ze=w("companies",s.companyId);if(!te){R(bt=>({...bt,companyId:""}));return}let mn=e==="quotes"?"quoteText":"invoiceText",Kt=(bt,Xt)=>String(bt||"")===String(Xt||"");R(bt=>{let Xt=w("customers",bt.customerId),en={...bt,companyId:H};(!bt.intro||Ze&&Kt(bt.intro,Ze[mn]))&&(en.intro=te[mn]||""),(!bt.paymentTerms||Ze&&Kt(bt.paymentTerms,Ze.paymentTerms))&&(en.paymentTerms=te.paymentTerms||""),(!bt.footer||Ze&&Kt(bt.footer,Ze.footer))&&(en.footer=te.footer||""),Xt&&Xt.language||(en.language=te.language),Xt&&Xt.currency||(en.currency=te.currency),e==="invoices"&&!(Xt&&Xt.paymentTermDays!=null&&Xt.paymentTermDays!=="")&&(en.paymentTermDays=te.paymentTermDays),en.showSecondary=te.showSecondary;let Zd=Ze&&Number(Ze.defaultTaxRate)||0,Gd=Number(te.defaultTaxRate)||0;return en.items=bt.items.map(za=>{let Qi=za.serviceId?w("services",za.serviceId):null;return(!Qi||Qi.taxRate==null||Qi.taxRate==="")&&(Number(za.taxRate)||0)===Zd?{...za,taxRate:Gd}:za}),en});let nt=w("customers",s.customerId);s.items.length&&!(nt&&nt.currency)&&te.currency!==s.currency&&U(`Währung auf ${te.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Ld(H){let te=w("customers",H),Ze=s.currency,mn=ys(s,te,w("companies",s.companyId),e);R(Kt=>ys(Kt,te,w("companies",Kt.companyId),e)),s.items.length&&mn.currency!==Ze&&U(`Währung auf ${mn.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`,"info",7e3)}function Pd(H){H!==s.currency&&(s.items.length&&U("Währung geändert – die Preise der Positionen wurden nicht umgerechnet.","info"),R(te=>({...te,currency:H,fx:te.fx?Wt(H,te.fx.usdToEur,te.fx):te.fx})))}function Kd(H){H>0&&(S.current+=1,p({loading:!1,error:""}),R(te=>({...te,fx:Wt(te.currency,H,{manual:!0,source:"Von Hand eingetragen",date:V(),fetchedAt:ne()})})))}function Od(){let H=Sr("USD","EUR");H&&(R(te=>({...te,fx:Wt(te.currency,H.rate,{manual:!0,source:`Letzter bekannter Kurs (${H.source})`,date:H.date,fetchedAt:H.fetchedAt})})),p({loading:!1,error:""}))}async function Fd(){g("save");let H=await _(()=>e==="invoices"?wa(s):wc(s));g(""),H&&(i(ve(H)),o(!1),an(),b([]),U("Entwurf gespeichert","good"),(t==="new"||!t)&&(an(),Y(`${a.list}/${H.id}/edit`,{replace:!0})))}async function Vd(){if(c.loading){U("Der Wechselkurs wird noch geladen – bitte einen Moment warten.","info");return}let H=ci(P,e==="quotes"?"quote":"invoice");if(b(H),H.length){U("Es fehlen noch Angaben – siehe Hinweise oben.","bad");return}if(!await ue({title:`${a.finalize}?`,text:O?`Die Rechnung behält die Nummer ${O} und ersetzt die bisherige Fassung. Der Wechselkurs wird festgeschrieben.`:e==="invoices"?`Die Rechnung erhält die Nummer ${d} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`:`Das Angebot erhält die Nummer ${d} und lässt sich danach nicht mehr ändern.`,list:[`${Z(A)}`,`${j(I.totalCents,s.currency)}${T!=null?` (≈ ${j(T,ee)})`:""}`,...e==="invoices"&&A&&!Be(A)?[`${Z(A)} ist bisher Kontakt und wird damit Kunde (neue Nummer ${xn("customer")}).`]:[],...qe>0?[qe>I.totalCents?`Achtung: Eingegangen sind bereits ${j(qe,s.currency)} – mehr als der neue Betrag. Bitte danach die Zahlung berichtigen.`:`Bereits eingegangen: ${j(qe,s.currency)}`]:[]],confirmLabel:a.finalize}))return;g("finalize");let Ze=await _(()=>e==="invoices"?ns(P):ss(P));g(""),Ze&&(o(!1),U(`${a.one} ${Ze.number} ${O?"neu erstellt":"erstellt"}`,"good"),vn(`${a.list}/${Ze.id}`))}async function qd(){if(O){await Ti(w("invoices",s.id)||s)&&vn(a.list);return}if(!await ue({title:"Entwurf löschen?",text:"Der Entwurf wird endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await(e==="invoices"?Br(s.id):kc(s.id)),!0))&&(U("Entwurf gelöscht","good"),vn(a.list))}let ji=s.fx?Number(s.fx.usdToEur):null,Wi=!!s.serviceDateEnd;return l`
    <${ke} title=${O?`Rechnung ${O} bearbeiten`:fe?a.editTitle:a.newTitle} back=${{href:`#${a.list}`,label:a.listLabel}}
      sub=${O?"Entwurf – die Nummer bleibt erhalten":d?`Nächste Nummer: ${d}`:N?"":"Wähle zuerst das Unternehmen, das den Beleg ausstellt."}>
      <${E} class="only-narrow" icon="eye" onClick=${()=>C(!h)}>${h?"Formular":"Vorschau"}<//>
      ${fe&&l`<${xt} items=${[{label:O?"Rechnung löschen":"Entwurf löschen",icon:"trash",danger:!0,onClick:qd}]} />`}
      <${E} icon="check" onClick=${Fd} busy=${m==="save"} disabled=${!!m}>Entwurf speichern<//>
      <${E} variant="primary" icon="invoice" onClick=${Vd} busy=${m==="finalize"} disabled=${!!m}>${a.finalize}<//>
    <//>

    ${O&&l`<${xe} tone="info">
      Diese Rechnung war bereits erstellt${Ue.finalizedAt?` (${Ye(Ue.finalizedAt)})`:""} und ist zurück im Entwurf.
      Ändere, was nötig ist, und klicke auf „Rechnung erstellen“ – sie behält die Nummer ${O}.
      Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen.
      ${qe>0?` Die eingetragenen Zahlungen (${j(qe,s.currency)}) bleiben erhalten.`:""}
      ${Ue.wasSent?" Sie war als versendet markiert: Schick dem Kunden danach die neue Fassung.":""}
    <//>`}

    ${$.length>0&&l`<${xe} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${$.map(H=>l`<li>${H}</li>`)}</ul>
    <//>`}

    <div class=${`editor${h?" show-preview":""}`}>
      <div class="editor-form">
        <${J} title=${e==="quotes"?"Aussteller und Empfänger":"Aussteller und Kunde"}>
          <div class="form-grid">
            <${ae} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${Hi}
              disabled=${!!O} hint=${O?"Gehört zur Rechnungsnummer und lässt sich nicht mehr wechseln.":""}
              placeholder=${X.length?"Unternehmen wählen":"Noch kein Unternehmen angelegt"}
              options=${(O&&N&&!X.some(H=>H.id===N.id)?[N,...X]:X).map(H=>({id:H.id,label:H.name}))} />
            <${we} class="span-3" label=${e==="quotes"?"Kontakt oder Kunde":"Kunde"} htmlFor="doc-customer">
              <${kt} id="doc-customer" options=${ta} value=${s.customerId} placeholder=${e==="quotes"?"Kontakt suchen":"Kunde suchen"}
                autoFocus=${!!s.companyId&&!s.customerId}
                onChange=${Ld}
                onCreate=${H=>f({type:"customer",seed:H})} createLabel=${e==="quotes"?"als Kontakt anlegen":"als Kunde anlegen"} />
            <//>
            <${Me} class="span-2" label=${a.dateLabel} value=${s.issueDate} onInput=${G("issueDate")} />
            ${e==="invoices"&&l`
              <${Me} class="span-2" label=${Wi?"Leistung von":"Leistungsdatum"} value=${s.serviceDate} onInput=${G("serviceDate")} />
              ${Wi?l`<${Me} class="span-2" label="Leistung bis" value=${s.serviceDateEnd} onInput=${G("serviceDateEnd")} min=${s.serviceDate} />`:l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>G("serviceDateEnd")(s.serviceDate||s.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${Re} class="span-2" label="Zahlungsziel" value=${s.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${G("paymentTermDays")}
                hint=${P.dueDate?`Fällig am ${F(P.dueDate)}`:""} />
              ${Wi&&l`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${()=>G("serviceDateEnd")("")}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${e==="quotes"&&l`<${Me} class="span-2" label="Gültig bis" value=${s.validUntil} onInput=${G("validUntil")} min=${s.issueDate} />`}
            <${ae} class="span-2" label="Währung" value=${s.currency} onChange=${Pd} options=${Ae} />
            <${ae} class="span-2" label="Belegsprache" value=${s.language} onChange=${G("language")} options=${At} />
          </div>
        <//>

        <${J} title="Positionen">
          <${ao} doc=${s} company=${N} onChange=${H=>R(te=>({...te,items:H}))}
            onNewService=${()=>f({type:"service"})} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${wt} label="Art des Rabatts" value=${s.discount.type} options=${[{id:"pct",label:"%"},{id:"abs",label:s.currency}]}
                  onChange=${H=>R(te=>({...te,discount:{type:H,value:0}}))} />
                ${s.discount.type==="abs"?l`<${st} mode="money" value=${s.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${H=>R(te=>({...te,discount:{type:"abs",value:H}}))} />`:l`<${st} value=${s.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${H=>R(te=>({...te,discount:{type:"pct",value:H}}))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${j(I.subtotalCents,s.currency)}</dd></div>
              ${I.discountCents!==0&&l`<div><dt>Rabatt</dt><dd>${j(-I.discountCents,s.currency)}</dd></div>`}
              ${I.taxGroups.filter(H=>H.rate!==0).map(H=>l`<div><dt>${N&&N.taxLabel||"Steuer"} ${St(H.rate)}</dt><dd>${j(H.taxCents,s.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${j(I.totalCents,s.currency)}</dd></div>
              ${T!=null&&l`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${j(T,ee)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${J} title="Wechselkurs">
          ${c.error&&l`<${xe} tone="warn" action=${Sr("USD","EUR")&&l`<${E} small onClick=${Od}>Letzten bekannten Kurs verwenden<//>`}>
            ${c.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${st} value=${ji} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${Kd} />
            <span class="fx-eq">EUR</span>
            <${E} small icon="refresh" busy=${c.loading} onClick=${()=>B(!0)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${s.fx?l`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${F(s.fx.date)}`:""}.
                  ${s.currency==="EUR"&&ji?` Das entspricht 1 EUR = ${va(1/ji)} USD.`:""}`:c.loading?"Kurs wird geladen …":"Noch kein Kurs vorhanden."}
            ${" "}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${Ge} label=${`Betrag zusätzlich in ${ee} auf dem Beleg zeigen`} checked=${s.showSecondary} onChange=${G("showSecondary")} />
        <//>

        <${J} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${ie} class="span-6" label="Einleitung" value=${s.intro} onInput=${G("intro")} rows=${2} />
            <${ie} class="span-6" label=${e==="invoices"?"Zahlungsbedingungen":"Bedingungen"} value=${s.paymentTerms} onInput=${G("paymentTerms")} rows=${2} />
            <${ie} class="span-6" label="Fußzeile" value=${s.footer} onInput=${G("footer")} rows=${2} />
          </div>
        <//>

        <${J} title="Interne Notiz">
          <${ie} value=${s.internalNotes} onInput=${G("internalNotes")} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${z.fileName}</span>
          </div>
          <${Ta} model=${z} />
        </div>
      </div>
    </div>

    ${y&&y.type==="customer"&&l`<${Aa}
      customer=${Gt({company:y.seed||"",kind:e==="quotes"?"contact":"customer"})} onClose=${()=>f(null)}
      onSaved=${H=>R(te=>ys(te,H,w("companies",te.companyId),e))} />`}
    ${y&&y.type==="service"&&l`<${no}
      service=${Ht({companyId:"",currency:s.currency})} onClose=${()=>f(null)}
      onSaved=${H=>R(te=>({...te,items:[...te.items,lt(H,w("companies",te.companyId))]}))} />`}
  `}function fp(e){let t=_n.find(n=>n.id===e.interval);if(e.interval==="custom"){let n=gi(e);return n===1?"Jeden Monat":`Alle ${n} Monate`}return t?t.label:""}function so({rec:e,onClose:t}){let n=!w("recurring",e.id),[a,s]=D(()=>ve(e)),[i,r]=D(!1),o=$=>b=>s(y=>({...y,[$]:b})),c=w("companies",a.companyId),p=pt(a),d=v.customers.filter($=>$.active!==!1||$.id===a.customerId).sort(($,b)=>Z($).localeCompare(Z(b),"de")).map($=>({id:$.id,label:Z($),sub:[$.number,$.city].filter(Boolean).join(", ")}));function u($){let b=w("companies",$);s(y=>({...y,companyId:$,...b&&n?{currency:b.currency,language:b.language,paymentTermDays:b.paymentTermDays,intro:y.intro||b.invoiceText}:{}}))}function m($){let b=w("customers",$);s(y=>({...y,customerId:$,...b&&b.language?{language:b.language}:{},...b&&b.currency&&Ae.includes(b.currency)?{currency:b.currency}:{},...b&&b.paymentTermDays!=null&&b.paymentTermDays!==""?{paymentTermDays:Number(b.paymentTermDays)}:{}}))}async function g(){r(!0);let $=await _(()=>rs(a));r(!1),$&&(U("Vorlage gespeichert","good"),t())}return l`<${Le} title=${n?"Neue wiederkehrende Rechnung":"Wiederkehrende Rechnung bearbeiten"} onClose=${t} size="xl" onSubmit=${g}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${q} class="span-6" label="Name der Vorlage" value=${a.name} onInput=${o("name")} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${ae} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${u} placeholder="Unternehmen wählen"
        options=${re().map($=>({id:$.id,label:$.name}))} />
      <${we} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${kt} id="rec-customer" options=${d} value=${a.customerId} placeholder="Kunde suchen" onChange=${m} />
      <//>
      <${ae} class="span-2" label="Intervall" value=${a.interval} onChange=${o("interval")} options=${_n.map($=>({id:$.id,label:$.label}))} />
      ${a.interval==="custom"&&l`<${Re} class="span-2" label="Alle … Monate" value=${a.customMonths} digits=${0} min=${1} max=${60} onChange=${o("customMonths")} />`}
      <${Me} class="span-2" label="Nächste Rechnung am" value=${a.nextDate} onInput=${o("nextDate")} />
      <${Me} class="span-2" label="Endet am (optional)" value=${a.endDate} onInput=${o("endDate")} min=${a.nextDate} />
      <${Re} class="span-2" label="Zahlungsziel" value=${a.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${o("paymentTermDays")} />
      <${ae} class="span-2" label="Währung" value=${a.currency} onChange=${o("currency")} options=${Ae} />
      <${ae} class="span-2" label="Belegsprache" value=${a.language} onChange=${o("language")} options=${At} />
      <div class="span-6">
        <${Ge} label="Leistungszeitraum auf die Rechnung schreiben" checked=${a.servicePeriod==="month"}
          onChange=${$=>o("servicePeriod")($?"month":"none")}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${ao} doc=${a} company=${c} onChange=${$=>s(b=>({...b,items:$}))}
      onNewService=${()=>U("Neue Leistungen legst du unter „Leistungen“ an.","info")} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${j(p.totalCents,a.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Einleitung auf der Rechnung" value=${a.intro} onInput=${o("intro")} rows=${2} />
      <div class="span-6"><${Ge} label="Vorlage ist aktiv" checked=${a.active} onChange=${o("active")} /></div>
    </div>
  <//>`}function wu(){ge();let[e,t]=D(null),[n,a]=D(""),s=V(),i=v.recurring.filter(Ke),r=i.filter(m=>ka(m,s)),o=!de();async function c(m,g){let $=m.nextDate>s;if($&&!await ue({title:"Schon jetzt erzeugen?",text:`Die nächste Rechnung dieser Vorlage ist erst am ${F(m.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,confirmLabel:"Entwurf anlegen"}))return null;a(m.id);let b=await _(()=>Pr(m.id,{early:$}));return a(""),b&&(U(`Rechnungsentwurf für ${Z(w("customers",m.customerId))} angelegt`,"good"),g&&Y(`/invoices/${b.id}/edit`)),b}async function p(){a("all");let m=0;for(let g of r){let $=0;for(;ka(w("recurring",g.id),s)&&$++<36&&await _(()=>Pr(g.id));)m+=1}a(""),m&&(U(`${m} ${m===1?"Rechnungsentwurf":"Rechnungsentwürfe"} angelegt`,"good"),Y("/invoices?status=draft"))}async function d(m){if(!await ue({title:"Vorlage löschen?",text:`„${m.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Nc(m.id),!0))&&U("Vorlage gelöscht","good")}let u=[{key:"name",label:"Vorlage",sort:m=>m.name,render:m=>l`<div class="cell-main">${m.name}</div><div class="cell-sub">${Z(w("customers",m.customerId))||"Kunde fehlt"}</div>`},...o?[{key:"company",label:"Unternehmen",render:m=>l`<${Pe} id=${m.companyId} />`}]:[],{key:"interval",label:"Intervall",render:m=>fp(m)},{key:"next",label:"Nächste Rechnung",sort:m=>m.nextDate,render:m=>xa(m)?l`<span class="muted-text">beendet</span>`:m.active?ka(m,s)?l`<span class="tone-warn">${F(m.nextDate)}</span><div class="cell-sub">fällig</div>`:F(m.nextDate):l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:m=>m.totals?m.totals.totalCents:0,render:m=>j(m.totals?m.totals.totalCents:0,m.currency)},{key:"count",label:"Erzeugt",align:"right",render:m=>m.generated||0},{key:"status",label:"Status",render:m=>xa(m)?l`<${ze} tone="mute">Beendet<//>`:m.active?l`<${ze} tone="good">Aktiv<//>`:l`<${ze} tone="mute">Pausiert<//>`},{key:"actions",label:"",align:"right",render:m=>l`<div class="row-actions">
        <${E} small icon="invoice" busy=${n===m.id} disabled=${!!n||!m.active||xa(m)}
          title=${xa(m)?"Die Vorlage hat ihr Enddatum erreicht":m.active?"":"Die Vorlage ist pausiert"}
          onClick=${()=>c(m,!0)}>Jetzt erzeugen<//>
        <${E} variant="ghost" small icon="trash" title=${`${m.name} löschen`} onClick=${()=>d(m)} />
      </div>`}];return l`
    <${ke} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${E} variant="primary" icon="plus" onClick=${()=>t($n(de()||(re().length===1?re()[0]:null)))}>Neue Vorlage<//>
    <//>
    ${r.length>0&&l`<${xe} tone="warn" action=${l`<${E} small variant="primary" busy=${n==="all"} disabled=${!!n} onClick=${p}>Alle Entwürfe anlegen<//>`}>
      ${r.length===1?"Eine Vorlage ist fällig.":`${r.length} Vorlagen sind fällig.`}${" "}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${Xe} columns=${u} rows=${i} initialSort=${{key:"next",dir:"asc"}} onRowClick=${m=>t(m)}
      empty=${l`<${pe} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${E} variant="primary" icon="plus" onClick=${()=>t($n(de()||(re().length===1?re()[0]:null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${e&&l`<${so} rec=${e} onClose=${()=>t(null)} />`}
  `}var ku="https://api.anthropic.com/v1/messages",Jt=class extends Error{};function gp(e,t){return{name:"record_receipt",description:"Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.",input_schema:{type:"object",properties:{is_receipt:{type:"boolean",description:"false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist."},vendor:{type:"string",description:"Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht."},description:{type:"string",description:"Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen."},invoice_number:{type:"string",description:"Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist."},invoice_date:{type:"string",description:"Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar."},payment_date:{type:"string",description:"Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer."},currency:{type:"string",description:"ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED."},net_amount:{type:"number",description:"Nettobetrag ohne Steuer in der Belegwährung."},tax_amount:{type:"number",description:"Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist."},total_amount:{type:"number",description:"Gesamtbetrag inklusive Steuer in der Belegwährung."},payment_method:{type:"string",enum:[...t,""],description:"Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer."},category:{type:"string",enum:e,description:"Am besten passende Ausgabenkategorie."},uncertain_fields:{type:"array",items:{type:"string"},description:"Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist."}},required:["is_receipt","vendor","currency","net_amount","tax_amount","total_amount","category"]}}}var hp=`Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;function $p({model:e,base64:t,mime:n,categories:a,paymentMethods:s}){let i={type:"base64",media_type:n,data:t},r=n==="application/pdf"?{type:"document",source:i}:{type:"image",source:i};return{model:e,max_tokens:1024,tools:[gp(a,s)],tool_choice:{type:"tool",name:"record_receipt"},messages:[{role:"user",content:[r,{type:"text",text:hp}]}]}}var Et=e=>typeof e=="string"?e.trim():"",io=e=>Number.isFinite(Number(e))?$a(Number(e)):0;function bp(e,{categories:t,paymentMethods:n}){let a=e&&Array.isArray(e.content)?e.content.find(g=>g.type==="tool_use"):null;if(!a||!a.input||typeof a.input!="object")throw new Jt("Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.");let s=a.input;if(s.is_receipt===!1)throw new Jt("Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.");let i=[],r=Et(s.currency).toUpperCase();Fs.includes(r)||(r&&i.push(`Die Währung ${r} wird nicht unterstützt – bitte Währung und Beträge prüfen.`),r="");let o=io(s.net_amount),c=io(s.tax_amount),p=io(s.total_amount);p&&o+c!==p&&(!o&&c<=p||Math.abs(o+c-p)<=2?o=p-c:i.push("Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen."));let d=$e(Et(s.invoice_date))?Et(s.invoice_date):"";d||i.push("Das Belegdatum wurde nicht erkannt.");let u=$e(Et(s.payment_date))?Et(s.payment_date):"",m=Array.isArray(s.uncertain_fields)?s.uncertain_fields.map(String):[];return{fields:{vendor:Et(s.vendor).slice(0,200),description:Et(s.description).slice(0,300),invoiceNumber:Et(s.invoice_number).slice(0,80),invoiceDate:d,paymentDate:u,currency:r,netCents:o,taxCents:c,totalCents:p||o+c,paymentMethod:n.includes(Et(s.payment_method))?Et(s.payment_method):"",category:t.includes(Et(s.category))?Et(s.category):""},uncertain:m,warnings:i,usage:e.usage||null}}function xu(e,t){let n=t&&t.error&&t.error.message?` (${t.error.message})`:"";return e===401?"Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.":e===403?`Der API-Key darf diese Anfrage nicht ausführen${n}.`:e===404?`Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${n}.`:e===413?"Die Datei ist zu groß für die KI-Erkennung.":e===429?"Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.":e===529||e>=500?"Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.":`Die KI-Erkennung ist fehlgeschlagen${n||` (HTTP ${e})`}.`}async function Du(e,{apiKey:t,model:n,categories:a,paymentMethods:s}){if(!t)throw new Jt("Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.");let i=e,r=e.type;r!=="application/pdf"&&(i=await cu(e),r="image/jpeg");let o=await lu(i),c=$p({model:n,base64:o,mime:r,categories:a,paymentMethods:s}),p;try{p=await fetch(ku,{method:"POST",headers:{"content-type":"application/json","x-api-key":t,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(c)})}catch{throw new Jt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let d=null;try{d=await p.json()}catch{}if(!p.ok)throw new Jt(xu(p.status,d));return bp(d,{categories:a,paymentMethods:s})}async function Su({apiKey:e,model:t}){if(!e)throw new Jt("Bitte zuerst einen API-Key eintragen.");let n;try{n=await fetch(ku,{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:t,max_tokens:8,messages:[{role:"user",content:"Antworte nur mit: OK"}]})})}catch{throw new Jt("Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.")}let a=null;try{a=await n.json()}catch{}if(!n.ok)throw new Jt(xu(n.status,a));return!0}var _i=new Set,ro=new Set,Cu=()=>ro.forEach(e=>e(new Set(_i)));function yp(){let[e,t]=D(new Set(_i));return ce(()=>(ro.add(t),()=>ro.delete(t)),[]),e}var vp=()=>({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,categories:v.settings.expenseCategories||[],paymentMethods:v.settings.paymentMethods||[]});async function Iu(e){let t=await Na(e);if(!t)throw new Error("Die Belegdatei wurde nicht gefunden.");return Du(t,vp())}async function wp(e,t){try{return await Hn(e,$e(t)?t:V())}catch{return null}}async function kp(e){let t=await Qr(e,{shrink:v.settings.shrinkImages!==!1}),n=de()||(re().length===1?re()[0]:null),a=Ha({status:"review",companyId:n?n.id:"",invoiceDate:"",description:"",vendor:"",ai:{status:v.settings.aiApiKey?"pending":"none"}}),s=await zr({blob:t.blob,name:t.name,ownerType:"expense",ownerId:a.id});if(a.attachmentIds=[s.id],a=await Dn(a),!v.settings.aiApiKey)return a;_i.add(a.id),Cu();try{let i=await Iu(s.id),r=i.fields,o=r.currency||a.currency,c=await wp(o,r.invoiceDate),p=w("expenses",a.id);p&&p.status==="review"&&(a=await Dn({...p,...r,currency:o,fx:c,ai:{status:"done",at:ne(),model:v.settings.aiModel,uncertain:i.uncertain,warnings:i.warnings}}))}catch(i){let r=w("expenses",a.id);throw r&&await Dn({...r,ai:{status:"error",message:i.message,at:ne()}}).catch(()=>{}),i}finally{_i.delete(a.id),Cu()}return a}function ws({attachmentId:e}){let[t,n]=D(""),[a,s]=D(!1),i=w("attachments",e);ce(()=>{let o="",c=!0;return n(""),s(!1),Na(e).then(p=>{if(c){if(!p){s(!0);return}o=URL.createObjectURL(p),n(o)}}).catch(()=>c&&s(!0)),()=>{c=!1,o&&URL.revokeObjectURL(o)}},[e]);async function r(){let o=await Na(e);o&&Je(o,i?i.name:"Beleg")}return a||!i?l`<div class="receipt receipt-missing"><${W} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`:l`<div class="receipt">
    <div class="receipt-frame">
      ${t?i.mime==="application/pdf"?l`<iframe class="receipt-pdf" src=${t} title=${i.name}></iframe>`:l`<img class="receipt-img" src=${t} alt=${`Beleg ${i.name}`} />`:l`<p class="muted-text">Beleg wird geladen …</p>`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${i.name}</span>
      <span class="muted-text">${Vt(i.size)}</span>
      <button type="button" class="link-btn" onClick=${r}>Herunterladen</button>
    </div>
  </div>`}function xp({expense:e,onClose:t}){let n=!w("expenses",e.id),a=e.status==="review",[s,i]=D(()=>{let z=ve(e);if(!z.invoiceDate&&!a&&(z.invoiceDate=V()),!z.companyId){let ee=de()||(re().length===1?re()[0]:null);ee&&(z.companyId=ee.id)}return z}),[r,o]=D(""),[c,p]=D(""),[d,u]=D(0),m=ye([]),g=ye(null),$=z=>ee=>i(T=>({...T,[z]:ee})),b=(s.attachmentIds||[])[0],y=s.ai||{},f=new Set(y.uncertain||[]),h=`${s.currency}|${s.invoiceDate}`;ce(()=>{let z=!0;if(!$e(s.invoiceDate)||s.fx&&s.fx.manual)return;let ee=(fe,O)=>!!fe&&fe.forCurrency===O.currency&&fe.forDate===Gn(O.invoiceDate);if(ee(s.fx,s))return;p("");let T=s.currency,X=s.invoiceDate;return Hn(T,X).then(fe=>{z&&i(O=>O.currency===T&&O.invoiceDate===X&&!(O.fx&&O.fx.manual)?{...O,fx:fe}:O)}).catch(fe=>{z&&(i(O=>O.fx&&!O.fx.manual&&O.fx.forDate&&!ee(O.fx,O)?{...O,fx:null}:O),p(fe.message))}),()=>{z=!1}},[h,d]);function C(z,ee){i(T=>{let X={...T,[z]:ee};return z==="totalCents"?X.netCents=(ee||0)-(T.taxCents||0):X.totalCents=(X.netCents||0)+(X.taxCents||0),X})}function S(z,ee){ee>0&&i(T=>{let fe={...T.fx||{rateToUSD:T.currency==="USD"?1:null,usdToEur:null},[z]:ee,manual:!0,source:"Von Hand eingetragen",date:V(),fetchedAt:ne()};return T.currency==="USD"&&(fe.rateToUSD=1),T.currency==="EUR"&&z==="usdToEur"&&(fe.rateToUSD=1/ee),{...T,fx:fe}})}async function k(z){if(!z)return;o("file");let ee=await _(async()=>{let T=await Qr(z,{shrink:v.settings.shrinkImages!==!1});return zr({blob:T.blob,name:T.name,ownerType:"expense",ownerId:s.id})});o(""),ee&&(m.current.push(ee.id),i(T=>({...T,attachmentIds:[ee.id,...T.attachmentIds||[]]})))}async function R(){if(!await ue({title:"Beleg entfernen?",text:"Die Belegdatei wird gelöscht.",confirmLabel:"Entfernen",danger:!0}))return;let ee=b;await _(()=>Lr(ee)),i(X=>({...X,attachmentIds:(X.attachmentIds||[]).filter(fe=>fe!==ee)}));let T=w("expenses",s.id);T&&await _(()=>Dn({...T,attachmentIds:(T.attachmentIds||[]).filter(X=>X!==ee)}))}async function G(){if(b){o("ai");try{let z=await Iu(b),ee=z.fields;i(T=>({...T,...ee,currency:ee.currency||T.currency,fx:null,ai:{status:"done",at:ne(),model:v.settings.aiModel,uncertain:z.uncertain,warnings:z.warnings}})),u(T=>T+1),U("Beleg ausgelesen – bitte die Angaben prüfen.","good")}catch(z){ha(z)}o("")}}async function N(){let z=w("expenses",s.id),ee=new Set(z?z.attachmentIds||[]:[]);for(let T of m.current)ee.has(T)||await Lr(T).catch(()=>{});t()}async function A(){o("save");let z=await _(()=>Dn({...s,status:"booked"}));o(""),z&&(U(a?"Beleg geprüft und gebucht":"Ausgabe gespeichert","good"),t())}async function x(){if(!await ue({title:"Ausgabe löschen?",text:"Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Ec(s.id),!0))&&(U("Ausgabe gelöscht","good"),t())}let B=z=>f.has(z)?"Von der KI als unsicher markiert – bitte prüfen":"",I=s.fx?vt(s.totalCents,s.currency,s.fx):s.currency==="USD"?s.totalCents:null,K=v.settings.expenseCategories||[],P=v.settings.paymentMethods||[];return l`<${Le} title=${n?"Neue Ausgabe":a?"Beleg prüfen und buchen":"Ausgabe bearbeiten"} onClose=${N} size="xl" onSubmit=${A}
    footer=${l`
      ${!n&&l`<${E} variant="ghost" icon="trash" onClick=${x} class="push-left">Löschen<//>`}
      <${E} onClick=${N}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${r==="save"}>${a?"Prüfen und buchen":"Ausgabe speichern"}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${b?l`<${ws} attachmentId=${b} />
              <div class="receipt-actions">
                <${E} small icon="sparkle" busy=${r==="ai"} disabled=${!v.settings.aiApiKey} onClick=${G}
                  title=${v.settings.aiApiKey?"":"Trage zuerst in den Einstellungen einen API-Key ein"}>Mit KI auslesen<//>
                <${E} small variant="ghost" icon="trash" onClick=${R}>Beleg entfernen<//>
              </div>
              ${!v.settings.aiApiKey&&l`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`:l`<button type="button" class="dropzone dropzone-small" onClick=${()=>g.current&&g.current.click()}>
              <${W} name="upload" size=${22} />
              <span>${r==="file"?"Wird hochgeladen …":"Beleg anhängen (Foto oder PDF)"}</span>
            </button>`}
        <input ref=${g} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${z=>{k(z.target.files[0]),z.target.value=""}} />
      </div>
      <div class="expense-fields">
        ${y.status==="done"&&l`<${xe} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(y.warnings||[]).length>0&&l`<ul class="notice-list">${y.warnings.map(z=>l`<li>${z}</li>`)}</ul>`}
        <//>`}
        ${y.status==="error"&&l`<${xe} tone="warn">Automatisches Auslesen fehlgeschlagen: ${y.message}<//>`}
        <div class="form-grid">
          <${ae} class="span-3" label="Unternehmen" value=${s.companyId} onChange=${$("companyId")} placeholder="Unternehmen wählen"
            options=${re().map(z=>({id:z.id,label:z.name}))} />
          <${ae} class="span-3" label="Kategorie" value=${s.category} onChange=${$("category")} placeholder="Keine"
            options=${K.includes(s.category)||!s.category?K:[...K,s.category]} hint=${B("category")} />
          <${q} class="span-4" label="Lieferant" value=${s.vendor} onInput=${$("vendor")} hint=${B("vendor")} />
          <${q} class="span-2" label="Rechnungsnummer" value=${s.invoiceNumber} onInput=${$("invoiceNumber")} hint=${B("invoice_number")} />
          <${q} class="span-6" label="Beschreibung" value=${s.description} onInput=${$("description")} />
          <${Me} class="span-3" label="Rechnungsdatum" value=${s.invoiceDate} onInput=${$("invoiceDate")} hint=${B("invoice_date")} />
          <${Me} class="span-3" label="Zahlungsdatum" value=${s.paymentDate} onInput=${$("paymentDate")} hint=${B("payment_date")} />
          <${ae} class="span-2" label="Währung" value=${s.currency} hint=${B("currency")}
            onChange=${z=>i(ee=>({...ee,currency:z,fx:null}))} options=${Fs} />
          <${Re} class="span-2" label="Nettobetrag" mode="money" value=${s.netCents} onChange=${z=>C("netCents",z)} hint=${B("net_amount")} />
          <${Re} class="span-2" label="Steuer" mode="money" value=${s.taxCents} onChange=${z=>C("taxCents",z)} hint=${B("tax_amount")} />
          <${Re} class="span-3" label="Gesamtbetrag" mode="money" value=${s.totalCents} onChange=${z=>C("totalCents",z)}
            hint=${B("total_amount")||(I!=null&&s.currency!=="USD"?`≈ ${j(I,"USD")}`:"")} />
          <${ae} class="span-3" label="Zahlungsart" value=${s.paymentMethod} onChange=${$("paymentMethod")} placeholder="Keine Angabe"
            options=${P.includes(s.paymentMethod)||!s.paymentMethod?P:[...P,s.paymentMethod]} />
          <${we} class="span-6" label="Wechselkurs" error=${c&&!(s.fx&&s.fx.usdToEur)?c:""}
            hint=${s.fx?`${s.fx.manual?s.fx.source:`Quelle: ${s.fx.source}`}${s.fx.date?`, Stand ${F(s.fx.date)}`:""}`:"Wird zum Rechnungsdatum geladen."}>
            <div class="fx-row">
              ${s.currency!=="USD"&&s.currency!=="EUR"&&l`
                <span class="fx-eq">1 ${s.currency} =</span>
                <${st} class="fx-input" value=${s.fx?s.fx.rateToUSD:null} digits=${6} min=${0} max=${1e5} allowEmpty aria-label=${`1 ${s.currency} in US-Dollar`}
                  onChange=${z=>S("rateToUSD",z)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${st} class="fx-input" value=${s.fx?s.fx.usdToEur:null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${z=>S("usdToEur",z)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${ie} class="span-6" label="Notiz" value=${s.note} onInput=${$("note")} rows=${2} />
        </div>
      </div>
    </div>
  <//>`}function Eu(){ge();let e=yp(),[t,n]=D(""),[a,s]=D(""),[i,r]=D("year"),[o,c]=D(null),[p,d]=D(!1),[u,m]=D(0),g=ye(null),$=!de(),b=V(),y=Se(()=>v.expenses.filter(x=>Ke(x)||!x.companyId&&x.status==="review"),[v.version,v.settings.activeCompany]),f=y.filter(x=>x.status==="review").sort((x,B)=>x.createdAt<B.createdAt?1:-1),h=yt(i,b),C=y.filter(x=>x.status==="booked"),S=C.filter(x=>i==="all"||tn(x.invoiceDate,h)).filter(x=>!a||x.category===a).filter(x=>Ne(t,x.vendor,x.description,x.invoiceNumber,x.category,x.note,(x.totalCents/100).toFixed(2),(x.totalCents/100).toFixed(2).replace(".",","))),k=[...new Set(C.map(x=>x.category).filter(Boolean))].sort((x,B)=>x.localeCompare(B,"de")),R=S.reduce((x,B)=>(x.net+=ct(B.netCents,B.currency,B.fx)||0,x.tax+=ct(B.taxCents,B.currency,B.fx)||0,x.total+=ct(B.totalCents,B.currency,B.fx)||0,x),{net:0,tax:0,total:0});async function G(x){let B=[...x];if(!B.length)return;if(!re().length){U("Lege zuerst ein Unternehmen an.","bad");return}m(K=>K+B.length);let I=0;for(let K of B)try{await kp(K),I+=1}catch(P){ha(P)}finally{m(P=>P-1)}I&&U(I===1?"Beleg hochgeladen – bitte prüfen und buchen.":`${I} Belege hochgeladen – bitte prüfen und buchen.`,"good")}let N=[{key:"date",label:"Datum",sort:x=>x.invoiceDate,render:x=>F(x.invoiceDate)},{key:"vendor",label:"Lieferant",sort:x=>x.vendor,render:x=>l`<div class="cell-main">${x.vendor}</div>${x.description&&l`<div class="cell-sub clamp-1">${x.description}</div>`}`},{key:"category",label:"Kategorie",sort:x=>x.category,render:x=>x.category||l`<span class="muted-text">–</span>`},...$?[{key:"company",label:"Unternehmen",render:x=>l`<${Pe} id=${x.companyId} />`}]:[],{key:"file",label:"Beleg",render:x=>(x.attachmentIds||[]).length?l`<span class="has-file" title="Beleg vorhanden"><${W} name="file" size=${16} /></span>`:l`<span class="muted-text">–</span>`},{key:"net",label:"Netto",align:"right",sort:x=>ct(x.netCents,x.currency,x.fx)||0,render:x=>j(x.netCents,x.currency)},{key:"tax",label:"Steuer",align:"right",render:x=>x.taxCents?j(x.taxCents,x.currency):l`<span class="muted-text">–</span>`},{key:"total",label:"Gesamt",align:"right",sort:x=>ct(x.totalCents,x.currency,x.fx)||0,render:x=>l`<span class="dual"><span class="dual-main">${j(x.totalCents,x.currency)}</span>
        ${x.currency!==oe()&&ct(x.totalCents,x.currency,x.fx)!=null&&l`<span class="dual-sub">≈ ${se(ct(x.totalCents,x.currency,x.fx))}</span>`}</span>`},{key:"paid",label:"Bezahlt am",sort:x=>x.paymentDate||"",render:x=>x.paymentDate?F(x.paymentDate):l`<span class="muted-text">offen</span>`}],A=S.length?[`${S.length} ${S.length===1?"Ausgabe":"Ausgaben"}`,"","",...$?[""]:[],"",l`<span class="strong">${se(R.net)}</span>`,l`<span class="strong">${se(R.tax)}</span>`,l`<span class="strong">${se(R.total)}</span>`,l`<span class="muted-text">in ${oe()}</span>`]:null;return l`
    <${ke} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${E} icon="plus" onClick=${()=>c(Ha())}>Ausgabe von Hand<//>
      <${E} variant="primary" icon="upload" onClick=${()=>g.current&&g.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${p?" is-drag":""}`}
      onDragOver=${x=>{x.preventDefault(),d(!0)}}
      onDragLeave=${()=>d(!1)}
      onDrop=${x=>{x.preventDefault(),d(!1),G(x.dataTransfer.files)}}>
      <${W} name="upload" size=${24} />
      <div>
        <strong>${u>0?`${u} ${u===1?"Beleg wird":"Belege werden"} verarbeitet …`:"Belege hierher ziehen"}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${v.settings.aiApiKey?"Die KI liest Lieferant, Datum, Beträge und Währung aus.":l`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${g} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${x=>{G(x.target.files),x.target.value=""}} />
    </div>

    ${f.length>0&&l`<section class="review">
      <h2>Zu prüfen <span class="count">${f.length}</span></h2>
      <ul class="review-list">
        ${f.map(x=>{let B=e.has(x.id),I=x.ai||{};return l`<li key=${x.id}>
            <button type="button" class="review-item" onClick=${()=>c(x)} disabled=${B}>
              <span class="review-icon"><${W} name=${B?"refresh":"file"} class=${B?"spin":""} /></span>
              <span class="review-text">
                <span class="cell-main">${x.vendor||(w("attachments",(x.attachmentIds||[])[0])||{}).name||"Beleg"}</span>
                <span class="cell-sub">${B?"Wird ausgelesen …":I.status==="error"?`Nicht ausgelesen: ${I.message}`:I.status==="done"?`${x.invoiceDate?F(x.invoiceDate):"Datum fehlt"}, ${x.category||"ohne Kategorie"}`:"Angaben von Hand eintragen"}</span>
              </span>
              <span class="review-amount">${x.totalCents?j(x.totalCents,x.currency):""}</span>
              <span class="review-go">${B?"":"Prüfen"}</span>
            </button>
          </li>`})}
      </ul>
    </section>`}

    ${C.length>0&&l`<div class="filters">
      <${gt} value=${t} onInput=${n} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${x=>r(x.target.value)}>
        ${Rn.filter(x=>x.id!=="custom").map(x=>l`<option value=${x.id}>${x.label}</option>`)}
      </select>
      ${k.length>0&&l`<select class="input select filter-select" value=${a} aria-label="Kategorie" onChange=${x=>s(x.target.value)}>
        <option value="">Alle Kategorien</option>
        ${k.map(x=>l`<option value=${x}>${x}</option>`)}
      </select>`}
    </div>`}
    ${(C.length>0||f.length===0)&&l`<${Xe} columns=${N} rows=${S} initialSort=${{key:"date",dir:"desc"}} footer=${A} onRowClick=${x=>c(x)}
      empty=${C.length?l`<${pe} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`:l`<${pe} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${o&&l`<${xp} expense=${o} onClose=${()=>c(null)} />`}
  `}var Tu={...ma,ending:{label:"Endet bald",tone:"warn"},expired:{label:"Ende überschritten",tone:"bad"}},ks={monthly:"Monat",quarterly:"Quartal",semiannual:"Halbjahr",yearly:"Jahr"},Dp=e=>!!ks[e];function Mi({contract:e}){let t=Tu[Ni(e,V())]||ma.open;return l`<${ze} tone=${t.tone}>${t.label}<//>`}function Au(e){if(e.amountCents==null)return"";let t=`${j(e.amountCents,e.currency)} netto`;return ks[e.billing]?`${t} / ${ks[e.billing]}`:e.billing==="once"?`${t}, einmalig`:t}function xs(e){return!e.startDate&&!e.endDate?"":e.startDate&&!e.endDate?`ab ${F(e.startDate)}, unbefristet`:e.startDate?`${F(e.startDate)} – ${F(e.endDate)}`:`bis ${F(e.endDate)}`}var Sp=async(e,t)=>{try{return await Hn(e,$e(t)?t:V())}catch{return null}};function Bu(e){return v.customers.filter(t=>t.active!==!1||t.id===e).sort((t,n)=>Z(t).localeCompare(Z(n),"de")).map(t=>({id:t.id,label:Z(t),sub:[t.number,t.city].filter(Boolean).join(", ")}))}function Ru(e){if(ht())return w("companies",ht());let t=[...v.invoices,...v.quotes].filter(n=>n.customerId===e).sort((n,a)=>(n.issueDate||"")<(a.issueDate||"")?1:-1);return t[0]&&w("companies",t[0].companyId)||de()||re()[0]||null}async function oo(e){let t=w("attachments",e),n=await Na(e);if(!n)throw new Error("Die Datei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).");Je(n,t?t.name:"Dokument.pdf")}function ea(e=""){let t=e?Ru(e):de()||(re().length===1?re()[0]:null),n=e?w("customers",e):null;return hl(t,{customerId:e,...n&&n.currency&&Ae.includes(n.currency)?{currency:n.currency}:{},...n&&n.language?{language:n.language}:{}})}function Ds(e){let t=w("companies",e.companyId),n=(e.items||[]).find(a=>!a.isText);return Ln(t,{customerId:e.customerId,title:e.title||(n?n.name:""),amountCents:e.totals?e.totals.netCents:null,currency:e.currency,taxRate:n?Number(n.taxRate)||0:t&&Number(t.defaultTaxRate)||0,quoteId:e.id})}function zi(e){let t=V(),n=new Set(v.contracts.map(s=>s.quoteId).filter(Boolean)),a=v.quotes.filter(s=>s.customerId===e&&["accepted","invoiced"].includes(zt(s,t))&&!n.has(s.id)).sort((s,i)=>(s.issueDate||"")<(i.issueDate||"")?1:-1)[0];return a?Ds(a):Ln(Ru(e),{customerId:e})}function Uu({multiple:e,onFiles:t,label:n,sub:a}){let s=ye(null),[i,r]=D(!1);async function o(c){let p=[];for(let d of c)try{p.push(await ou(d))}catch(u){U(u.message,"bad",7e3)}p.length&&t(e?p:p.slice(0,1))}return l`<div class=${`dropzone pdf-drop${i?" is-drag":""}`} role="button" tabindex="0"
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
  </div>`}function _u({ids:e,onRemove:t,preview:n,setPreview:a}){return e.length?l`<ul class="file-list">
    ${e.map(s=>{let i=w("attachments",s);return l`<li key=${s}>
        <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${i?i.name:"Datei fehlt"}</span>
          ${i&&l`<span class="muted-text">${Vt(i.size)}</span>`}</span>
        <span class="file-actions">
          <button type="button" class="link-btn" onClick=${()=>a(n===s?"":s)}>${n===s?"Ausblenden":"Ansehen"}</button>
          <button type="button" class="link-btn" onClick=${()=>_(()=>oo(s))}>Herunterladen</button>
          ${t&&l`<button type="button" class="link-btn tone-bad" onClick=${()=>t(s)}>Entfernen</button>`}
        </span>
      </li>`})}
  </ul>
  ${n&&e.includes(n)&&l`<div class="file-preview"><${ws} attachmentId=${n} /></div>`}`:null}function Mu({files:e,onRemove:t}){return e.length?l`<ul class="file-list is-new">
    ${e.map((n,a)=>l`<li key=${a}>
      <span class="file-line"><${W} name="file" size=${15} /><span class="clamp-1">${n.name}</span>
        <span class="muted-text">${Vt(n.blob.size)} · wird beim Speichern hochgeladen</span></span>
      <span class="file-actions"><button type="button" class="link-btn tone-bad" onClick=${()=>t(a)}>Entfernen</button></span>
    </li>`)}
  </ul>`:null}var Cp=["open","sent","accepted","declined"].map(e=>({id:e,label:ra[e].label}));function Ss({quote:e,onClose:t,onSaved:n}){let a=!w("quotes",e.id),s=(e.items||[])[0],[i,r]=D(()=>ve(e)),[o,c]=D(s?s.priceCents:null),[p,d]=D(()=>{if(s)return Number(s.taxRate)||0;let N=w("companies",e.companyId);return N&&Number(N.defaultTaxRate)||0}),[u,m]=D(null),[g,$]=D(""),[b,y]=D(!1),f=N=>A=>r(x=>({...x,[N]:A})),h=i.status==="invoiced",C=pt({items:[Rt({priceCents:o||0,taxRate:p})],discount:null});function S(N){let A=w("companies",N);r(x=>({...x,companyId:N,...A&&a?{currency:x.customerId&&w("customers",x.customerId)&&w("customers",x.customerId).currency?x.currency:A.currency}:{}})),A&&a&&d(Number(A.defaultTaxRate)||0)}function k(N){let A=w("customers",N);r(x=>({...x,customerId:N,...A&&A.currency&&Ae.includes(A.currency)?{currency:A.currency}:{},...A&&A.language?{language:A.language}:{}}))}async function R(){if(o==null){U("Bitte den Betrag des Angebots eintragen.","bad");return}y(!0);let N=w("quotes",i.id),x=!i.fx||!N||N.currency!==i.currency||N.issueDate!==i.issueDate?await Sp(i.currency,i.issueDate):i.fx,B={...i,fx:x,items:[Rt({...s?{id:s.id}:{},name:i.title,qty:1,unit:"Pauschale",priceCents:o,taxRate:p})]},I=await _(()=>Sc(B,u));y(!1),I&&(U(a?`Angebot „${I.title}“ hochgeladen`:"Angebot gespeichert","good"),t(),n&&n(I))}let G=i.attachmentIds||[];return l`<${Le} title=${a?"Angebot hochladen (PDF)":"Hochgeladenes Angebot bearbeiten"} size="lg" onClose=${t} onSubmit=${R}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${b}>${a?"Hochladen":"Speichern"}<//>`}>
    <p class="modal-lead">Für Angebote, die du mit einem anderen Programm gestaltet hast – auch ältere. Das PDF bleibt unverändert,
      das Tool merkt sich Kontakt, Betrag und Status. Es bekommt keine Nummer aus deinem Nummernkreis.</p>
    ${u?l`<${Mu} files=${[u]} onRemove=${()=>m(null)} />`:l`<${_u} ids=${G} preview=${g} setPreview=${$} />`}
    <${Uu} label=${u||G.length?"Anderes PDF wählen":"PDF des Angebots auswählen"} onFiles=${N=>m(N[0])} />
    <div class="form-grid">
      <${ae} class="span-3" label="Unternehmen" value=${i.companyId} onChange=${S} placeholder="Unternehmen wählen"
        options=${re().map(N=>({id:N.id,label:N.name}))} />
      <${we} class="span-3" label="Kontakt" htmlFor="uq-customer">
        <${kt} id="uq-customer" options=${Bu(i.customerId)} value=${i.customerId} placeholder="Kontakt suchen" onChange=${k} />
      <//>
      <${q} class="span-4" label="Bezeichnung" value=${i.title} onInput=${f("title")} placeholder="z. B. Website-Relaunch mit SEO-Paket" />
      <${q} class="span-2" label="Nummer im Dokument" hint="optional" value=${i.refNumber} onInput=${f("refNumber")} />
      <${Me} class="span-2" label="Angebotsdatum" value=${i.issueDate} onInput=${f("issueDate")} />
      <${Me} class="span-2" label="Gültig bis" hint="optional" value=${i.validUntil} onInput=${f("validUntil")} />
      <${ae} class="span-2" label="Status" value=${h?"invoiced":i.status} onChange=${f("status")} disabled=${h}
        options=${h?[{id:"invoiced",label:"Abgerechnet"}]:Cp} />
      <${Re} class="span-2" label="Betrag netto" mode="money" value=${o} allowEmpty onChange=${c} />
      <${Re} class="span-2" label="Steuersatz" value=${p} digits=${2} min=${0} max=${100} suffix="%" onChange=${d} />
      <${ae} class="span-2" label="Währung" value=${i.currency} onChange=${f("currency")} options=${Ae} />
      <div class="span-6 upload-sum">Gesamt laut Angaben: <strong>${j(C.totalCents,i.currency)}</strong>${C.taxCents?` (davon Steuer ${j(C.taxCents,i.currency)})`:""}</div>
      <${ie} class="span-6" label="Interne Notiz" value=${i.internalNotes} onInput=${f("internalNotes")} rows=${2} />
    </div>
  <//>`}function Cs({contract:e,onClose:t}){ge();let n=!w("contracts",e.id),[a,s]=D(()=>ve(e)),[i,r]=D([]),[o,c]=D([]),[p,d]=D(""),[u,m]=D(""),[g,$]=D(null),b=I=>K=>s(P=>({...P,[I]:K}));if(g)return l`<${so} rec=${g} onClose=${t} />`;let y=v.quotes.filter(I=>I.customerId===a.customerId&&I.status!=="draft").sort((I,K)=>(I.issueDate||"")<(K.issueDate||"")?1:-1),f=n?[]:v.invoices.filter(I=>I.contractId===a.id).sort((I,K)=>(I.issueDate||"")<(K.issueDate||"")?1:-1),h=n?[]:v.recurring.filter(I=>I.contractId===a.id),C=(a.attachmentIds||[]).filter(I=>!o.includes(I));function S(I){let K=w("companies",I);s(P=>({...P,companyId:I,...K&&n&&P.amountCents==null?{currency:K.currency,taxRate:Number(K.defaultTaxRate)||0}:{}}))}function k(I){let K=w("quotes",I);if(!K){s(z=>({...z,quoteId:""}));return}let P=Ds(K);s(z=>({...z,quoteId:I,companyId:z.companyId||P.companyId,title:z.title||P.title,...z.amountCents==null?{amountCents:P.amountCents,currency:P.currency,taxRate:P.taxRate}:{}}))}async function R(){let I=await _(()=>is(a,{files:i,removeIds:o}));return I?(s(ve(I)),r([]),c([]),I):null}async function G(){m("save");let I=await R();m(""),I&&(U(n?`Vertrag „${I.title}“ angelegt`:"Vertrag gespeichert","good"),t())}async function N(){m("invoice");let I=await R();m(""),I&&(t(),Y(`/invoices/new?contract=${I.id}`))}async function A(){m("recurring");let I=await R();if(m(""),!I)return;let K=w("companies",I.companyId),P=w("customers",I.customerId),z=I.startDate&&I.startDate>V()?I.startDate:V();$($n(K,{name:`${I.title} – ${Z(P)}`,customerId:I.customerId,interval:I.billing,startDate:z,nextDate:z,endDate:I.endDate||"",currency:I.currency,...P&&P.language?{language:P.language}:{},...P&&P.paymentTermDays!=null&&P.paymentTermDays!==""?{paymentTermDays:Number(P.paymentTermDays)}:{},items:[fi(I)],contractId:I.id}))}async function x(){let I=f.length+h.length;if(!await ue({title:"Vertrag löschen?",text:`„${a.title}“ wird samt ${C.length===1?"PDF":`${C.length} PDFs`} gelöscht.${I?" Verknüpfte Rechnungen und Vorlagen bleiben erhalten.":""}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Ic(a.id),!0))&&(U("Vertrag gelöscht","good"),t())}let B=a.amountCents!=null&&a.status!=="declined";return l`<${Le} title=${n?"Neuer Vertrag":"Vertrag"} size="lg" onClose=${t} onSubmit=${G}
    footer=${l`
      ${!n&&l`<${E} variant="ghost" icon="trash" class="push-left" onClick=${x}>Löschen<//>`}
      ${B&&l`<${E} icon="invoice" busy=${u==="invoice"} onClick=${N}>Rechnung erstellen<//>`}
      ${B&&Dp(a.billing)&&l`<${E} icon="repeat" busy=${u==="recurring"} onClick=${A}>Wiederkehrend abrechnen<//>`}
      <${E} onClick=${t}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${u==="save"}>Speichern<//>`}>
    <div class="form-grid">
      <${ae} class="span-3" label="Unternehmen" value=${a.companyId} onChange=${S} placeholder="Unternehmen wählen"
        options=${re().map(I=>({id:I.id,label:I.name}))} />
      <${we} class="span-3" label="Kontakt" htmlFor="ct-customer">
        <${kt} id="ct-customer" options=${Bu(a.customerId)} value=${a.customerId} placeholder="Kontakt suchen"
          onChange=${I=>s(K=>({...K,customerId:I,quoteId:K.customerId===I?K.quoteId:""}))} />
      <//>
      <${q} class="span-4" label="Bezeichnung" value=${a.title} onInput=${b("title")} placeholder="z. B. SEO-Betreuung 12 Monate" />
      <${q} class="span-2" label="Vertragsnummer" hint="optional" value=${a.refNumber} onInput=${b("refNumber")} />
      <${ae} class="span-2" label="Status" value=${a.status} onChange=${b("status")}
        options=${Object.entries(ma).map(([I,K])=>({id:I,label:K.label}))} />
      <${Me} class="span-2" label="Unterschrieben am" value=${a.signedDate} onInput=${b("signedDate")} />
      <${ae} class="span-2" label="Aus Angebot" value=${a.quoteId} onChange=${k} placeholder=${y.length?"Kein Angebot":"Keine Angebote vorhanden"}
        options=${y.map(I=>({id:I.id,label:`${We(I)} · ${F(I.issueDate)} · ${j(I.totals?I.totals.totalCents:0,I.currency)}`}))} />
      <${Me} class="span-2" label="Beginn" value=${a.startDate} onInput=${b("startDate")} />
      <${Me} class="span-2" label="Ende" hint="leer = unbefristet" value=${a.endDate} onInput=${b("endDate")} min=${a.startDate||void 0} />
      <${q} class="span-2" label="Kündigungsfrist" hint="optional" value=${a.noticePeriod} onInput=${b("noticePeriod")} placeholder="z. B. 3 Monate zum Laufzeitende" />
      <${ae} class="span-2" label="Abrechnung" value=${a.billing} onChange=${b("billing")} options=${Ga} />
      <${Re} class="span-2" label=${ks[a.billing]?`Betrag netto je ${ks[a.billing]}`:"Betrag netto"} mode="money" value=${a.amountCents} allowEmpty onChange=${b("amountCents")} />
      <${Re} class="span-1" label="Steuer" value=${a.taxRate} digits=${2} min=${0} max=${100} suffix="%" onChange=${b("taxRate")} />
      <${ae} class="span-1" label="Währung" value=${a.currency} onChange=${b("currency")} options=${Ae} />
      <${ie} class="span-6" label="Notizen" value=${a.notes} onInput=${b("notes")} rows=${2} placeholder="z. B. Sonderkonditionen, Ansprechpartner, Verlängerung" />
    </div>
    <h3 class="sub-head">Vertragsdokumente</h3>
    <${_u} ids=${C} preview=${p} setPreview=${d} onRemove=${I=>c(K=>[...K,I])} />
    <${Mu} files=${i} onRemove=${I=>r(K=>K.filter((P,z)=>z!==I))} />
    ${o.length>0&&l`<p class="muted-text small">${o.length===1?"Ein PDF wird":`${o.length} PDFs werden`} beim Speichern entfernt.
      <button type="button" class="link-btn" onClick=${()=>c([])}>Rückgängig</button></p>`}
    <${Uu} multiple label="Vertrag als PDF hinzufügen" sub="Auch mehrere Dateien, z. B. Vertrag und Nachtrag" onFiles=${I=>r(K=>[...K,...I])} />
    ${(f.length>0||h.length>0)&&l`<h3 class="sub-head">Abrechnung zu diesem Vertrag</h3>
      <ul class="plain-list linked-list">
        ${h.map(I=>l`<li key=${I.id}><${W} name="repeat" size=${14} /> <a href="#/recurring">Vorlage „${I.name}“</a>
          <span class="muted-text">${I.active?`nächste Rechnung ${F(I.nextDate)}`:"pausiert oder beendet"}</span></li>`)}
        ${f.map(I=>l`<li key=${I.id}><${W} name="invoice" size=${14} />
          <a href=${`#/invoices/${I.id}${I.status==="draft"?"/edit":""}`} onClick=${t}>${I.number||"Entwurf"}</a>
          <span class="muted-text">${F(I.issueDate)}</span> <${Pt} doc=${I} /> <${Sn} inv=${I} /></li>`)}
      </ul>`}
  <//>`}var Nu=[{id:"all",label:"Alle",test:()=>!0},{id:"open",label:"Offen",test:e=>e==="open"},{id:"running",label:"Laufend",test:e=>e==="signed"||e==="ending"||e==="expired"},{id:"ending",label:"Endet bald",test:e=>e==="ending"||e==="expired"},{id:"closed",label:"Beendet",test:e=>e==="ended"||e==="declined"}];function zu({params:e={}}){ge();let[t,n]=D(""),[a,s]=D("all"),[i,r]=D(()=>e.open&&w("contracts",e.open)||null),o=V(),c=!de(),p=Se(()=>v.contracts.filter(Ke).map($=>({c:$,s:Ni($,o)})),[v.version,v.settings.activeCompany]),d=p.filter($=>Nu.find(b=>b.id===a).test($.s)).filter($=>Ne(t,$.c.title,$.c.refNumber,Z(w("customers",$.c.customerId)),$.c.notes)),u=p.filter($=>$.s==="ending"||$.s==="expired").length,m=[{key:"title",label:"Vertrag",sort:$=>$.c.title,render:$=>l`<div class="cell-main">${$.c.title}</div>${$.c.refNumber&&l`<div class="cell-sub">${$.c.refNumber}</div>`}`},{key:"customer",label:"Kontakt",sort:$=>Z(w("customers",$.c.customerId)),render:$=>Z(w("customers",$.c.customerId))||"–"},...c?[{key:"company",label:"Unternehmen",render:$=>l`<${Pe} id=${$.c.companyId} />`}]:[],{key:"term",label:"Laufzeit",sort:$=>$.c.endDate||$.c.startDate||"",render:$=>xs($.c)||l`<span class="muted-text">–</span>`},{key:"amount",label:"Betrag",align:"right",sort:$=>$.c.amountCents||0,render:$=>Au($.c)||l`<span class="muted-text">–</span>`},{key:"files",label:"PDF",align:"right",render:$=>($.c.attachmentIds||[]).length?l`<span class="file-count" title="Vertragsdokumente"><${W} name="file" size=${14} />${$.c.attachmentIds.length}</span>`:""},{key:"status",label:"Status",sort:$=>$.s,render:$=>l`<${Mi} contract=${$.c} />`}],g=()=>r(Ln(de()||(re().length===1?re()[0]:null)));return l`
    <${ke} title="Verträge" sub="Welcher Kontakt hat welchen Vertrag – mit PDF, Laufzeit und Abrechnung.">
      <${E} variant="primary" icon="plus" onClick=${g}>Neuer Vertrag<//>
    <//>
    ${u>0&&l`<${xe} tone="warn">${u===1?"Ein Vertrag endet":`${u} Verträge enden`} in den nächsten 60 Tagen oder ${u===1?"hat":"haben"} das Enddatum überschritten.<//>`}
    ${v.contracts.length>0&&l`<div class="filters">
      <${gt} value=${t} onInput=${n} placeholder="Vertrag, Nummer, Kontakt" />
      <${ft} label="Status" value=${a} onChange=${s}
        options=${Nu.map($=>({id:$.id,label:$.label,count:p.filter(b=>$.test(b.s)).length}))} />
    </div>`}
    <${Xe} columns=${m} rows=${d} rowKey=${$=>$.c.id} initialSort=${{key:"term",dir:"desc"}} onRowClick=${$=>r($.c)}
      empty=${v.contracts.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Vertrag." />`:l`<${pe} icon="file" title="Noch keine Verträge" text="Lege Verträge mit PDF, Laufzeit und Betrag an – auch ältere. Aus einem Vertrag wird mit einem Klick die Rechnung oder eine wiederkehrende Abrechnung.">
            <${E} variant="primary" icon="plus" onClick=${g}>Ersten Vertrag anlegen<//>
          <//>`} />
    ${i&&l`<${Cs} key=${i.id} contract=${i} onClose=${()=>r(null)} />`}
  `}var Ip={done:"Erledigt",active:"Läuft",todo:"Offen",skipped:"Nicht erfasst"};function Lu({customerId:e,on:t}){let n=V(),{steps:a,current:s}=du({appointments:v.appointments,quotes:v.quotes,contracts:v.contracts,invoices:v.invoices},e,n),[i,r,o,c]=a,p=v.contracts.find(u=>u.customerId===e&&u.status==="signed"&&u.amountCents!=null&&!v.invoices.some(m=>m.contractId===u.id)&&!v.recurring.some(m=>m.contractId===u.id)),d={meeting:l`
      ${i.next&&l`<p>Nächster Termin: <strong>${F(i.next.date)}, ${i.next.start} Uhr</strong></p>`}
      ${i.last&&l`<p class="muted-text">Zuletzt ${F(i.last.date)}${i.count>1?` · ${i.count} Termine`:""}</p>`}
      ${!i.next&&!i.last&&l`<p class="muted-text">Noch kein Termin.</p>`}
      <div class="flow-actions"><${E} small icon="calendar" onClick=${t.appointment}>Termin planen<//></div>`,quote:l`
      ${r.latest?l`<p><a href=${`#/quotes/${r.latest.id}`}>${We(r.latest)}</a>${r.latest.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}${" · "}${(ra[r.latestStatus]||{}).label||""}</p>
          <p class="muted-text">${F(r.latest.issueDate)} · ${j(r.latest.totals?r.latest.totals.totalCents:0,r.latest.currency)}${r.count>1?` · ${r.count} Angebote`:""}</p>`:l`<p class="muted-text">${r.drafts?`${r.drafts} ${r.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch kein Angebot."}</p>`}
      <div class="flow-actions">
        <${E} small icon="quote" onClick=${()=>Y(`/quotes/new?customer=${e}`)}>Schreiben<//>
        <${E} small icon="upload" onClick=${t.uploadQuote}>PDF hochladen<//>
      </div>`,contract:l`
      ${o.latest?l`<p><button type="button" class="link-btn" onClick=${()=>t.openContract(o.latest)}>${o.latest.title}</button>${" · "}${(Tu[Ni(o.latest,n)]||{}).label}</p>
          <p class="muted-text">${[xs(o.latest),o.count>1?`${o.count} Verträge`:""].filter(Boolean).join(" · ")||" "}</p>`:l`<p class="muted-text">Noch kein Vertrag.</p>`}
      <div class="flow-actions"><${E} small icon="file" onClick=${()=>t.contract(zi(e))}>Vertrag anlegen<//></div>`,invoice:l`
      ${c.latest?l`<p><a href=${`#/invoices/${c.latest.id}`}>${c.latest.number}</a>${" "}<${Sn} inv=${c.latest} /></p>
          <p class="muted-text">${F(c.latest.issueDate)}${c.count>1?` · ${c.count} Rechnungen`:""}</p>`:l`<p class="muted-text">${c.drafts?`${c.drafts} ${c.drafts===1?"Entwurf":"Entwürfe"} in Arbeit.`:"Noch keine Rechnung."}</p>`}
      <div class="flow-actions">
        ${p&&l`<${E} small variant="primary" icon="invoice" onClick=${()=>Y(`/invoices/new?contract=${p.id}`)}>Aus Vertrag<//>`}
        <${E} small icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Schreiben<//>
      </div>`};return l`<${J} title="Ablauf" class="flow-panel">
    <ol class="flow">
      ${a.map((u,m)=>l`<li key=${u.id} class=${`flow-step is-${u.state}${s===m?" is-current":""}`}>
        <div class="flow-head">
          <span class="flow-dot">${u.state==="done"?l`<${W} name="check" size=${13} />`:m+1}</span>
          <span class="flow-label">${u.label}</span>
          <span class="flow-state">${s===m?"Nächster Schritt":Ip[u.state]}</span>
        </div>
        <div class="flow-body">${d[u.id]}</div>
      </li>`)}
    </ol>
  <//>`}function Pu({customerId:e,onOpen:t}){let n=v.contracts.filter(s=>s.customerId===e).sort((s,i)=>(s.startDate||s.createdAt)<(i.startDate||i.createdAt)?1:-1);return l`<${Xe} columns=${[{key:"title",label:"Vertrag",render:s=>l`<span class="cell-main">${s.title}</span>${s.refNumber&&l`<div class="cell-sub">${s.refNumber}</div>`}`},{key:"company",label:"Unternehmen",render:s=>l`<${Pe} id=${s.companyId} />`},{key:"term",label:"Laufzeit",render:s=>xs(s)||"–"},{key:"amount",label:"Betrag",align:"right",render:s=>Au(s)||"–"},{key:"files",label:"PDF",align:"right",render:s=>(s.attachmentIds||[]).length?l`<span class="file-count"><${W} name="file" size=${14} />${s.attachmentIds.length}</span>`:""},{key:"status",label:"Status",render:s=>l`<${Mi} contract=${s} />`}]} rows=${n} onRowClick=${t}
    empty=${l`<p class="panel-empty">Noch keine Verträge für diesen Kontakt.</p>`} />`}var Ku={company:"Unternehmen",firstName:"Vorname",lastName:"Nachname",street:"Straße",houseNo:"Hausnummer",zip:"PLZ",city:"Ort",region:"Region",country:"Land",email:"E-Mail",phone:"Telefon",website:"Website",taxId:"Steuer-ID",vatId:"USt-IdNr."};function Ep({onApply:e}){let[t,n]=D(!1),[a,s]=D(""),[i,r]=D(""),[o,c]=D(""),p=!!v.settings.aiApiKey;async function d(){if(!a.trim()){U("Bitte zuerst den Text des Impressums einfügen.","info");return}c("text");let m=null;p&&(m=await _(()=>qr({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,text:a}))),m||(m=Yc(a)),c(""),e(m)}async function u(){let m=Jc(i);if(!m){U("Bitte die Adresse des Impressums eintragen.","info");return}c("url");let g=await _(()=>qr({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,url:m}));c(""),g&&e(g)}return t?l`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${E} variant="ghost" small icon="x" title="Schließen" onClick=${()=>n(!1)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${ie} class="span-6" label="Impressum einfügen" value=${a} onInput=${s} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${p?"Wird mit der KI ausgelesen (API-Key aus den Einstellungen).":"Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer."} />
      <div class="span-6"><${E} small variant="primary" busy=${o==="text"} onClick=${d}>Text auslesen<//></div>
      <${q} class="span-4" label="Oder Adresse des Impressums" value=${i} onInput=${r} placeholder="firma.de/impressum"
        hint=${p?"Die Seite wird über die Anthropic-API abgerufen und ausgelesen.":"Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen."} />
      <div class="span-2 field field-inline"><${E} small busy=${o==="url"} disabled=${!p} onClick=${u}>Von Website laden<//></div>
    </div>
  </div>`:l`<div class="imprint-open"><${E} small icon="sparkle" onClick=${()=>n(!0)}>Daten aus Impressum übernehmen<//></div>`}function Aa({customer:e,onClose:t,onSaved:n}){let a=!e||!w("customers",e.id),[s,i]=D(()=>({...Gt(),...e||{}})),[r,o]=D((s.tags||[]).join(", ")),[c,p]=D(!1),d=h=>C=>i(S=>({...S,[h]:C})),u=w("customers",s.id),m=!a&&v.invoices.some(h=>h.customerId===s.id),g=Be(s)?"customer":"contact",$=(h,C)=>new RegExp(`^${h==="contact"?"KO":"K"}-\\d+$`).test(String(C||""));function b(h){i(C=>{let S=Be(C)?"customer":"contact";return S===h?C:{...C,kind:h,number:$(S,C.number)?"":C.number}})}function y({fields:h,extra:C}){let S=[],k=[];i(R=>{let G={...R};for(let[A,x]of Object.entries(h))x&&(String(R[A]||"").trim()?String(R[A]).trim()!==x&&k.push(Ku[A]||A):(G[A]=x,S.push(Ku[A]||A)));let N=(C||[]).filter(A=>!String(R.notes||"").includes(A));return N.length&&(G.notes=[String(R.notes||"").trim(),...N].filter(Boolean).join(`
`),S.push("Notizen")),G}),setTimeout(()=>{S.length?U(`Übernommen: ${S.join(", ")}${k.length?`. Nicht überschrieben: ${k.join(", ")}`:""}.`,"good",8e3):U(k.length?`Nichts übernommen – ${k.join(", ")} ist schon ausgefüllt.`:"Im Impressum wurden keine Kontaktdaten erkannt.","info",7e3)},0)}async function f(){p(!0);let h={...s,tags:r.split(",").map(S=>S.trim()).filter(Boolean),paymentTermDays:s.paymentTermDays===""?null:s.paymentTermDays},C=await _(()=>Wn(h));p(!1),C&&(U(a?`${Be(C)?"Kunde":"Kontakt"} ${C.number} angelegt`:"Gespeichert","good"),n&&n(C),t())}return l`<${Le} title=${a?"Neuer Kontakt":`${g==="customer"?"Kunde":"Kontakt"} bearbeiten`} onClose=${t} size="lg" onSubmit=${f}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${c}>Speichern<//>`}>
    <${Ep} onApply=${y} />
    <div class="form-grid">
      <${we} class="span-6" label="Art">
        <div class="inline-controls">
          <${wt} label="Art des Kontakts" value=${g} onChange=${b}
            options=${gl.map(h=>({...h,label:h.id==="contact"&&m?"Kontakt (nicht möglich – hat Rechnungen)":h.label}))} />
          <span class="field-hint">${g==="customer"?"Kunden erhalten Rechnungen. Nummer K-…":"Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden."}</span>
        </div>
      <//>
      <${q} class="span-4" label="Unternehmen" value=${s.company} onInput=${d("company")} />
      <${q} class="span-2" label="Nummer" value=${s.number} onInput=${d("number")}
        placeholder=${xn(g,v.customers.filter(h=>h.id!==s.id))}
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

      <${ae} class="span-2" label="Belegsprache" value=${s.language} onChange=${d("language")}
        placeholder="Wie Unternehmen" options=${At} />
      <${ae} class="span-2" label="Währung" value=${s.currency} onChange=${d("currency")}
        placeholder="Wie Unternehmen" options=${Ae} />
      <${Re} class="span-2" label="Zahlungsziel (Tage)" value=${s.paymentTermDays} onChange=${d("paymentTermDays")}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${q} class="span-6" label="Tags" value=${r} onInput=${o} hint="Mehrere Tags mit Komma trennen" />
      <${ie} class="span-6" label="Notizen (intern)" value=${s.notes} onInput=${d("notes")} rows=${3} />
      <div class="span-6"><${Ge} label="Aktiv" checked=${s.active!==!1} onChange=${d("active")} /></div>
    </div>
  <//>`}function Vu(e){let t=ln(),n=V(),a=new Map,s=i=>(a.has(i)||a.set(i,{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0,last:""}),a.get(i));for(let i of ut(t,{companyId:e})){let r=s(i.inv.customerId);r.usd+=i.netUSD,r.eur+=i.netEUR,i.inv.type!=="credit_note"&&(r.count+=1),i.date>r.last&&(r.last=i.date)}for(let i of Nn(t,{companyId:e},n)){let r=s(i.inv.customerId);r.openUSD+=i.openUSD,r.openEUR+=i.openEUR,i.status==="overdue"&&(r.overdueUSD+=i.openUSD,r.overdueEUR+=i.openEUR)}for(let i of v.payments){let r=w("invoices",i.invoiceId);if(!r||e&&r.companyId!==e)continue;let o=s(r.customerId);o.paidUSD+=vt(i.amountCents,r.currency,r.fx)||0,o.paidEUR+=Mt(i.amountCents,r.currency,r.fx)||0}return a}function qu(){ge();let[e,t]=D(""),[n,a]=D("active"),[s,i]=D("all"),[r,o]=D(""),[c,p]=D(null),d=ht(),u=Se(()=>Vu(d),[v.version,d]),m=!!c&&!w("customers",c.id),g=Se(()=>Gr(ln(),{companyId:d}),[v.version,d]),$=Se(()=>[...new Set(v.customers.flatMap(f=>f.tags||[]))].sort((f,h)=>f.localeCompare(h,"de")),[v.version]),b=v.customers.filter(f=>n==="active"&&f.active===!1||n==="inactive"&&f.active!==!1||s==="customer"&&!Be(f)||s==="contact"&&Be(f)||r&&!(f.tags||[]).includes(r)?!1:Ne(e,f.number,f.company,f.firstName,f.lastName,f.contact,f.city,f.country,f.email,(f.tags||[]).join(" "),(g.get(f.id)||[]).map(h=>h.name).join(" "))),y=[{key:"number",label:"Nr.",sort:f=>f.number,width:"90px",render:f=>l`<span class="mono-num">${f.number}</span>`},{key:"name",label:"Name",sort:f=>Z(f),render:f=>l`<div class="cell-main">${Z(f)}</div>
        ${rt(f)&&rt(f)!==Z(f)&&l`<div class="cell-sub">${rt(f)}</div>`}`},{key:"kind",label:"Art",sort:f=>Be(f)?0:1,render:f=>l`<${ze} tone=${Be(f)?"info":"neutral"} icon=${Be(f)?"good":"customers"}>${Be(f)?"Kunde":"Kontakt"}<//>`},{key:"city",label:"Ort",sort:f=>f.city,render:f=>[f.city,f.country].filter(Boolean).join(", ")},{key:"services",label:"Leistungen",render:f=>{let h=g.get(f.id)||[];return h.length?l`<div class="svc-tags">${h.slice(0,3).map(C=>l`<span class="tag" title=${C.running?"Läuft (wiederkehrende Vorlage)":""}>${C.running?"↻ ":""}${C.name}</span>`)}
          ${h.length>3&&l`<span class="tag muted-text">+${h.length-3}</span>`}</div>`:l`<span class="muted-text">–</span>`}},{key:"tags",label:"Tags",render:f=>(f.tags||[]).map(h=>l`<span class="tag">${h}</span>`)},{key:"revenue",label:"Umsatz",align:"right",sort:f=>M(u.get(f.id)),render:f=>{let h=u.get(f.id);return h&&M(h)?se(M(h)):l`<span class="muted-text">–</span>`}},{key:"open",label:"Offen",align:"right",sort:f=>M(u.get(f.id),"open"),render:f=>{let h=u.get(f.id);return!h||!M(h,"open")?l`<span class="muted-text">–</span>`:l`<span class=${M(h,"overdue")?"tone-bad":""}>${se(M(h,"open"))}</span>`}},{key:"status",label:"",render:f=>f.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}];return l`
    <${ke} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${E} variant="primary" icon="plus" onClick=${()=>p(Gt({kind:"contact"}))}>Neuer Kontakt<//>
    <//>
    ${v.customers.length>0&&l`<div class="filters">
      <${gt} value=${e} onInput=${t} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${ft} label="Art" value=${s} onChange=${i} options=${[{id:"all",label:"Alle",count:v.customers.length},{id:"customer",label:"Kunden",count:v.customers.filter(Be).length},{id:"contact",label:"Kontakte",count:v.customers.filter(f=>!Be(f)).length}]} />
      <select class="input select filter-select" value=${n} aria-label="Status" onChange=${f=>a(f.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${$.length>0&&l`<select class="input select filter-select" value=${r} aria-label="Nach Tag filtern" onChange=${f=>o(f.target.value)}>
        <option value="">Alle Tags</option>
        ${$.map(f=>l`<option value=${f}>${f}</option>`)}
      </select>`}
    </div>`}
    <${Xe} columns=${y} rows=${b} initialSort=${{key:"name",dir:"asc"}}
      onRowClick=${f=>Y(`/customers/${f.id}`)}
      empty=${v.customers.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`:l`<${pe} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${E} variant="primary" icon="plus" onClick=${()=>p(Gt({kind:"contact"}))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${c&&l`<${Aa} customer=${c} onClose=${()=>p(null)}
      onSaved=${f=>{m&&Y(`/customers/${f.id}`)}} />`}
  `}function Zu({id:e}){ge();let t=w("customers",e),[n,a]=D(!1),[s,i]=D(null),[r,o]=D(null),[c,p]=D(null),[d,u]=D(null),[m,g]=D(null),[$,b]=D(!1);if(!t)return l`<${pe} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${E} onClick=${()=>Y("/customers")}>Zu den Kontakten<//>
    <//>`;let y=V(),f=Vu(null).get(e)||{usd:0,eur:0,count:0,openUSD:0,openEUR:0,overdueUSD:0,overdueEUR:0,paidUSD:0,paidEUR:0},h=Gr(ln(),{customerId:e}).get(e)||[],C=v.notes.filter(T=>T.customerId===e),S=Is(v.appointments.filter(T=>T.customerId===e)),k=S.filter(T=>T.status==="planned"&&T.date>=y),R=v.todos.filter(T=>T.customerId===e),G=R.filter(T=>!T.done).sort(yi),N=R.filter(T=>T.done).sort((T,X)=>(T.doneAt||"")<(X.doneAt||"")?1:-1),A=v.invoices.filter(T=>T.customerId===e).sort((T,X)=>T.issueDate<X.issueDate?1:-1),x=v.quotes.filter(T=>T.customerId===e).sort((T,X)=>T.issueDate<X.issueDate?1:-1),B=[...new Set([...A,...x].map(T=>T.companyId))];async function I(){let T=C.length||S.length?` Mitgelöscht werden ${S.length} ${S.length===1?"Termin":"Termine"} und ${C.length} ${C.length===1?"Eintrag":"Einträge"} der Kundendokumentation.`:"";if(!await ue({title:`${Be(t)?"Kunde":"Kontakt"} löschen?`,text:`${Z(t)} wird endgültig gelöscht.${T}`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await nc(e),!0))&&(U("Gelöscht","good"),Y("/customers"))}async function K(T){let X=T==="customer";if(!await ue({title:X?`${Z(t)} zum Kunden machen?`:`${Z(t)} als Kontakt führen?`,text:X?`Der Kontakt wird Kunde und bekommt eine Kundennummer (${xn("customer")}). Das passiert sonst automatisch mit der ersten Rechnung.`:`Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${xn("contact")}).`,confirmLabel:X?"Zum Kunden machen":"Als Kontakt führen"}))return;let O=await _(()=>Wn({...t,kind:T}));O&&U(`${X?"Kunde":"Kontakt"} ${O.number}`,"good")}let P=[[t.street,t.houseNo].filter(Boolean).join(" "),[t.zip,t.city].filter(Boolean).join(" "),[t.region,t.country].filter(Boolean).join(", ")].filter(Boolean),z=[{key:"number",label:"Nummer",render:T=>l`<a href=${`#/invoices/${T.id}`} class="cell-main">${T.number||"Entwurf"}</a>`},{key:"company",label:"Unternehmen",render:T=>l`<${Pe} id=${T.companyId} />`},{key:"date",label:"Datum",render:T=>F(T.issueDate)},{key:"due",label:"Fällig",render:T=>F(T.dueDate)},{key:"total",label:"Betrag",align:"right",render:T=>l`<${Pt} doc=${T} />`},{key:"status",label:"Status",render:T=>l`<${Sn} inv=${T} />`}],ee=[{key:"number",label:"Nummer",render:T=>l`<a href=${`#/quotes/${T.id}${T.status==="draft"?"/edit":""}`} class="cell-main">${We(T)}</a>${T.source==="upload"&&l` <span class="pdf-tag">PDF</span>`}`},{key:"company",label:"Unternehmen",render:T=>l`<${Pe} id=${T.companyId} />`},{key:"date",label:"Datum",render:T=>F(T.issueDate)},{key:"valid",label:"Gültig bis",render:T=>F(T.validUntil)},{key:"total",label:"Betrag",align:"right",render:T=>l`<${Pt} doc=${T} />`},{key:"status",label:"Status",render:T=>l`<${ls} quote=${T} />`}];return l`
    <${ke} title=${Z(t)} back=${{href:"#/customers",label:"Kontakte"}}
      sub=${l`<span class="badges"><${ze} tone=${Be(t)?"info":"neutral"} icon=${Be(t)?"good":"customers"}>${Be(t)?"Kunde":"Kontakt"}<//>${t.active===!1?l`<${ze} tone="mute">Inaktiv<//>`:""}</span>
        <span class="head-meta">${Be(t)?"Kundennummer":"Kontaktnummer"} ${t.number}${(t.formerNumbers||[]).length?` (vorher ${t.formerNumbers.join(", ")})`:""}</span>`}>
      <${E} icon="edit" onClick=${()=>a(!0)}>Bearbeiten<//>
      <${E} variant="primary" icon="plus" onClick=${()=>Y(`/invoices/new?customer=${e}`)}>Rechnung schreiben<//>
      <${xt} items=${[{label:"Angebot schreiben",icon:"quote",onClick:()=>Y(`/quotes/new?customer=${e}`)},{label:"Angebot hochladen (PDF)",icon:"upload",onClick:()=>g(ea(e))},{label:"Vertrag anlegen",icon:"file",onClick:()=>u(zi(e))},!Be(t)&&{label:"Zum Kunden machen",icon:"good",onClick:()=>K("customer")},Be(t)&&!A.length&&{label:"Als Kontakt führen",icon:"customers",onClick:()=>K("contact")},{label:"Löschen",icon:"trash",danger:!0,disabled:Tr(e),onClick:I}]} />
    <//>

    <div class="stat-row">
      <${Oe} label="Umsatz gesamt (netto)" value=${se(M(f))} sub=${`≈ ${Fe(Te(f))}, ${f.count} Rechnungen`} />
      <${Oe} label="Offene Forderungen" value=${se(M(f,"open"))} sub=${`≈ ${Fe(Te(f,"open"))}`} />
      <${Oe} label="Davon überfällig" value=${se(M(f,"overdue"))} tone=${M(f,"overdue")?"bad":""} sub=${`≈ ${Fe(Te(f,"overdue"))}`} />
      <${Oe} label="Bezahlt" value=${se(M(f,"paid"))} sub=${`≈ ${Fe(Te(f,"paid"))}`} />
    </div>

    <${Lu} customerId=${e} on=${{appointment:()=>o(Ou(t)),uploadQuote:()=>g(ea(e)),contract:u,openContract:u}} />

    <div class="split">
      <div class="split-main">
        <${J} title=${`To-dos${G.length?` (${G.length})`:""}`} action=${N.length>0&&l`<button type="button" class="link-btn small"
            onClick=${()=>b(!$)}>${$?"Erledigte ausblenden":`${N.length} erledigte zeigen`}</button>`}>
          <${Xn} items=${G} showCustomer=${!1} onEdit=${p} />
          ${$&&l`<${Xn} items=${N} showCustomer=${!1} onEdit=${p} />`}
          <${vi} customerId=${e} />
        <//>
        <${Np} rows=${h} />
        <${J} title="Termine und Dokumentation" action=${l`<div class="panel-head-actions">
            <${E} small icon="note" onClick=${()=>i(qs({customerId:e}))}>Eintrag<//>
            <${E} small icon="calendar" onClick=${()=>o(Ou(t))}>Termin planen<//>
          </div>`}>
          ${k.length>0&&l`<h3 class="sub-head">Anstehend</h3>
            <${Ki} items=${k} onOpen=${o} compact />`}
          <${Ap} notes=${C} appts=${S.filter(T=>!(T.status==="planned"&&T.date>=y))}
            onNote=${i} onAppt=${o} hasUpcoming=${k.length>0} />
        <//>
        <${J} title="Rechnungen" flush>
          <${Xe} columns=${z} rows=${A} onRowClick=${T=>Y(`/invoices/${T.id}`)}
            empty=${l`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${J} title="Angebote" flush action=${l`<div class="panel-head-actions">
            <${E} small icon="upload" onClick=${()=>g(ea(e))}>PDF hochladen<//>
            <${E} small icon="quote" onClick=${()=>Y(`/quotes/new?customer=${e}`)}>Schreiben<//>
          </div>`}>
          <${Xe} columns=${ee} rows=${x} onRowClick=${T=>Y(`/quotes/${T.id}${T.status==="draft"?"/edit":""}`)}
            empty=${l`<p class="panel-empty">Noch keine Angebote für diesen Kontakt.</p>`} />
        <//>
        <${J} title="Verträge" flush action=${l`<div class="panel-head-actions">
            <${E} small icon="file" onClick=${()=>u(zi(e))}>Vertrag anlegen<//>
          </div>`}>
          <${Pu} customerId=${e} onOpen=${u} />
        <//>
      </div>
      <aside class="split-side">
        <${J} title="Kontakt">
          <${kn} rows=${[["Ansprechpartner",rt(t)],["Adresse",P.length?l`${P.map(T=>l`<div>${T}</div>`)}`:""],["E-Mail",t.email&&l`<a href=${`mailto:${t.email}`}>${t.email}</a>`],["Telefon",t.phone],["Website",t.website],["Steuer-ID",t.taxId],["USt-IdNr.",t.vatId],["Belegsprache",t.language?(At.find(T=>T.id===t.language)||{}).label:"Wie Unternehmen"],["Währung",t.currency||"Wie Unternehmen"],["Zahlungsziel",t.paymentTermDays!=null&&t.paymentTermDays!==""?`${t.paymentTermDays} Tage`:"Wie Unternehmen"],["Tags",(t.tags||[]).length?(t.tags||[]).map(T=>l`<span class="tag">${T}</span>`):""]]} />
        <//>
        <${J} title="Abgerechnet über">
          ${B.length?l`<ul class="plain-list">${B.map(T=>l`<li><${Pe} id=${T} /></li>`)}</ul>`:l`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${J} title="Interne Notizen">
          ${t.notes?l`<p class="pre">${t.notes}</p>`:l`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${n&&l`<${Aa} customer=${t} onClose=${()=>a(!1)} />`}
    ${s&&l`<${Bp} note=${s} onClose=${()=>i(null)} />`}
    ${r&&l`<${Li} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
    ${c&&l`<${wi} key=${c.id} todo=${c} onClose=${()=>p(null)} />`}
    ${d&&l`<${Cs} key=${d.id} contract=${d} onClose=${()=>u(null)} />`}
    ${m&&l`<${Ss} key=${m.id} quote=${m} onClose=${()=>g(null)} />`}
  `}function Ou(e){let t=[...v.invoices].filter(a=>a.customerId===e.id).sort((a,s)=>a.issueDate<s.issueDate?1:-1)[0],n=ht()&&w("companies",ht())||t&&w("companies",t.companyId)||re()[0];return da(n,{customerId:e.id,attendees:e.email||"",language:e.language||n&&n.language||"de"})}function Np({rows:e}){let t=n=>(_n.find(a=>a.id===n)||{}).label||"";return l`<${J} title="Leistungsübersicht" flush action=${l`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${e.length?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${oe()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${e.map(n=>l`<tr key=${n.key}>
            <td><div class="cell-main">${n.name}</div>
              ${n.running&&l`<div class="cell-sub svc-running"><${W} name="repeat" size=${13} />läuft, ${t(n.interval).toLowerCase()}</div>`}
              ${n.category&&l`<div class="cell-sub">${n.category}</div>`}</td>
            <td>${n.companyIds.map(a=>l`<div><${Pe} id=${a} /></div>`)}</td>
            <td class="r">${n.invoices||"–"}</td>
            <td class="r">${n.qty?`${qn(n.qty)}${n.unit?` ${Xs(n.unit,"de")}`:""}`:"–"}</td>
            <td class="r">${M(n)?l`${se(M(n))}<div class="cell-sub">≈ ${Fe(Te(n))}</div>`:"–"}</td>
            <td>${n.last?F(n.last):n.running?"noch nicht abgerechnet":"–"}</td>
          </tr>`)}</tbody>
        </table></div>`:l`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`}var Tp={note:"note",call:"phone",email:"mail",meeting:"customers",task:"check"},Fu=e=>(ua.find(t=>t.id===e)||ua[0]).label;function Ap({notes:e,appts:t,onNote:n,onAppt:a,hasUpcoming:s}){let i=[...e.map(o=>({type:"note",key:`n-${o.id}`,sort:`${o.date} ${o.createdAt||""}`,n:o})),...t.map(o=>({type:"appt",key:`a-${o.id}`,sort:`${o.date} ${o.start}`,a:o}))].sort((o,c)=>o.sort<c.sort?1:-1);async function r(o){if(!await ue({title:"Eintrag löschen?",text:"Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.",confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await ac(o.id),!0))&&U("Eintrag gelöscht","good")}return i.length?l`${s&&l`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${i.map(o=>{if(o.type==="note"){let u=o.n;return l`<li key=${o.key}>
          <span class="tl-icon"><${W} name=${Tp[u.kind]||"note"} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${u.title||Fu(u.kind)}</span>
              <span class="tl-meta">${Fu(u.kind)} · ${F(u.date)}</span>${u.companyId&&l`<${Pe} id=${u.companyId} />`}</div>
            ${u.text&&l`<div class="tl-text">${u.text}</div>`}
          </div>
          <div class="tl-actions">
            <${E} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${()=>n(u)} />
            <${E} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${()=>r(u)} />
          </div>
        </li>`}let c=o.a,p=ca[c.status]||ca.planned,d=c.status==="planned";return l`<li key=${o.key}>
        <span class="tl-icon"><${W} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${c.title}</span>
            <span class="tl-meta">Termin · ${F(c.date)}, ${c.start} Uhr</span>
            <${ze} tone=${d?"warn":p.tone}>${d?"Nicht dokumentiert":p.label}<//>
            <${Pe} id=${c.companyId} /></div>
          ${c.outcome?l`<div class="tl-text">${c.outcome}</div>`:c.agenda&&l`<div class="tl-text muted-text">${c.agenda}</div>`}
          ${c.nextSteps&&l`<div class="tl-text"><span class="strong">Nächste Schritte:</span> ${c.nextSteps}</div>`}
          ${(()=>{let u=v.todos.filter(m=>m.appointmentId===c.id);return u.length>0&&l`<div class="tl-todos">${u.map(m=>l`<span class=${`tag${m.done?" is-done":""}`}>${m.done?"✓":"○"} ${m.title}</span>`)}</div>`})()}
        </div>
        <div class="tl-actions">
          ${d&&l`<${E} small onClick=${()=>Pi(c)}>Dokumentieren<//>`}
          <${E} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${()=>a(c)} />
        </div>
      </li>`})}
  </ol>`:s?null:l`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`}function Bp({note:e,onClose:t}){let n=!w("notes",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),o=p=>d=>s(u=>({...u,[p]:d}));async function c(){r(!0);let p=await _(()=>si(a));r(!1),p&&(U(n?"Eintrag gespeichert":"Eintrag geändert","good"),t())}return l`<${Le} title=${n?"Neuer Eintrag":"Eintrag bearbeiten"} onClose=${t} onSubmit=${c}
    footer=${l`<${E} onClick=${t}>Abbrechen<//><${E} variant="primary" type="submit" busy=${i}>Speichern<//>`}>
    <div class="form-grid">
      <${ae} class="span-2" label="Art" value=${a.kind} onChange=${o("kind")} options=${ua} />
      <${Me} class="span-2" label="Datum" value=${a.date} onInput=${o("date")} />
      <${ae} class="span-2" label="Unternehmen" value=${a.companyId} onChange=${o("companyId")} placeholder="Ohne Zuordnung"
        options=${re().map(p=>({id:p.id,label:p.name}))} />
      <${q} class="span-6" label="Betreff" value=${a.title} onInput=${o("title")} placeholder="z. B. Rückruf wegen Angebot" />
      <${ie} class="span-6" label="Notiz" value=${a.text} onInput=${o("text")} rows=${6} />
    </div>
  <//>`}var Rp=["Mo","Di","Mi","Do","Fr","Sa","So"],Gu=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Is=e=>[...e].sort((t,n)=>`${t.date} ${t.start}`<`${n.date} ${n.start}`?-1:1),Fi=e=>(w("companies",e)||{}).brandColor||"var(--ink-2)";function cn(e){let t=w("customers",e.customerId);return t?Z(t):e.contactName||""}function ju(e,t=!0){let n=`${e.start}–${e.end}`;if(!t||!e.timeZone||e.timeZone===at())return n;let{start:a}=In(e),s=xi(a,at()),i=Oc(a,at());return s===e.start&&i===e.date?`${n} ${us(e.timeZone,a)}`:`${n} ${us(e.timeZone,a)} (bei dir ${s}${i!==e.date?`, ${F(i)}`:""})`}function Up(e){let t=[...new Set([at(),...Vs,e].filter(Boolean))],n=new Date;return t.map(a=>({id:a,label:`${a.replace(/_/g," ")} (${us(a,n)})${a===at()?", dieses Gerät":""}`}))}function Li({appointment:e,onClose:t}){let n=!w("appointments",e.id),[a,s]=D(()=>({...e})),[i,r]=D(!1),[o,c]=D(null),[p,d]=D(null),u=re(),m=k=>R=>s(G=>({...G,[k]:R})),g=v.customers.filter(k=>k.active!==!1||k.id===a.customerId).sort((k,R)=>Z(k).localeCompare(Z(R),"de")).map(k=>({id:k.id,label:Z(k),sub:[k.kind==="contact"?"Kontakt":"Kunde",k.number,k.city].filter(Boolean).join(", "),search:`${k.firstName} ${k.lastName} ${k.contact} ${k.email}`}));function $(k){let R=w("companies",k),G=w("companies",a.companyId);s(N=>{let A={...N,companyId:k};if(!R)return A;let x=(I,K)=>!N[I]||G&&String(N[I])===String(G[K]||"");x("meetingProvider","meetingProvider")&&(A.meetingProvider=R.meetingProvider||""),x("meetingUrl","meetingUrl")&&(A.meetingUrl=R.meetingUrl||""),x("meetingDetails","meetingDetails")&&(A.meetingDetails=R.meetingDetails||""),R.meetingTimeZone&&(!N.timeZone||G&&N.timeZone===(G.meetingTimeZone||at()))&&(A.timeZone=R.meetingTimeZone);let B=w("customers",N.customerId);return B&&B.language||(A.language=R.language||"de"),A})}function b(k){let R=w("customers",k),G=w("customers",a.customerId);s(N=>({...N,customerId:k||"",attendees:!N.attendees||G&&N.attendees===G.email?R&&R.email||"":N.attendees,language:R&&R.language?R.language:N.language}))}function y(k){s(R=>{let G=B=>{let[I,K]=String(B||"0:0").split(":").map(Number);return I*60+K},N=Math.max(G(R.end)-G(R.start),15),A=Math.min(G(k)+N,1439),x=/^\d\d:\d\d$/.test(k)?`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`:R.end;return{...R,start:k,end:x}})}async function f(){r(!0);let k=await _(()=>ii(a));r(!1),k&&(U(n?"Termin angelegt":"Termin gespeichert","good"),n?d(k):t(k))}async function h(){if(!await ue({title:"Termin löschen?",text:`„${a.title||"Termin"}“ am ${F(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await oc(a.id),!0))&&(U("Termin gelöscht","good"),t())}if(p)return l`<${uo} appointment=${p} justCreated onClose=${()=>t(p)} />`;let C=w("customers",a.customerId),S=w("appointments",a.id);return l`<${Le} title=${n?"Neuer Termin":"Termin bearbeiten"} onClose=${()=>t()} size="lg" onSubmit=${f}
    footer=${l`
      ${!n&&l`<${xt} label="Mehr" items=${[{label:"Einladung und Kalenderdatei",icon:"mail",onClick:()=>d(S||a)},S&&{label:S.status==="done"?"Dokumentation bearbeiten":"Termin dokumentieren",icon:"edit",onClick:()=>{t(),Pi(S)}},S&&S.status==="planned"&&{label:"Termin absagen",icon:"x",onClick:()=>zp(S,t)},S&&S.status!=="planned"&&{label:"Wieder als geplant führen",icon:"undo",onClick:async()=>{await _(()=>oi(S.id,"planned")),t()}},{label:"Termin löschen",icon:"trash",danger:!0,onClick:h}]} />`}
      <span class="spacer"></span>
      <${E} onClick=${()=>t()}>Abbrechen<//>
      <${E} variant="primary" type="submit" busy=${i}>${n?"Termin anlegen":"Speichern"}<//>`}>
    ${S&&S.status!=="planned"&&l`<${xe} tone=${S.status==="done"?"good":"warn"}>
      ${S.status==="done"?"Dieser Termin hat stattgefunden.":"Dieser Termin ist abgesagt."}
      ${S.outcome?l`<div class="pre notice-sub">${S.outcome}</div>`:""}
      ${S.nextSteps?l`<div class="pre notice-sub">Nächste Schritte: ${S.nextSteps}</div>`:""}
    <//>`}
    <div class="form-grid">
      <${ae} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${$}
        placeholder="Unternehmen wählen" options=${u.map(k=>({id:k.id,label:k.name}))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${we} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${kt} id="appt-customer" options=${g} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${b} onCreate=${k=>c({company:k,kind:"contact"})} createLabel="als Kontakt anlegen" />
      <//>
      <${q} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${m("contactName")}
        placeholder=${C?rt(C)||Z(C):"Name"} hint="Für die Anrede in der Einladung" />
      <${q} class="span-6" label="Titel" value=${a.title} onInput=${m("title")}
        placeholder=${C?`Termin mit ${Z(C)}`:"z. B. Erstgespräch, Strategie-Call"} />
      <${Me} class="span-2" label="Datum" value=${a.date} onInput=${m("date")} />
      <${q} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${y} />
      <${q} class="span-1" label="Ende" type="time" value=${a.end} onInput=${m("end")} />
      <${ae} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${m("timeZone")} options=${Up(a.timeZone)}
        hint=${a.timeZone!==at()&&a.date&&/^\d\d:\d\d$/.test(a.start||"")&&xi(In(a).start,at())!==a.start?`Bei dir: ${xi(In(a).start,at())} Uhr`:""} />
      <${we} class="span-4" label="Art">
        <${wt} label="Art des Termins" value=${a.kind} onChange=${m("kind")} options=${Za} />
      <//>
      <${we} class="span-2" label="Sprache der Einladung">
        <${wt} label="Sprache der Einladung" value=${a.language||"de"} onChange=${m("language")} options=${At} />
      <//>
      ${a.kind==="video"&&l`
        <${ae} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${m("meetingProvider")}
          placeholder="Bitte wählen" options=${la} />
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
    ${o&&l`<${Aa} customer=${{...o}} onClose=${()=>c(null)}
      onSaved=${k=>b(k.id)} />`}
  <//>`}var Wu=null,lo=new Set,Qu=e=>{Wu=e;for(let t of lo)t(e)};function Pi(e,t){Qu({appt:e,done:t})}function Yu(){let[e,t]=D(Wu);return ce(()=>(lo.add(t),()=>lo.delete(t)),[]),e?l`<${_p} key=${e.appt.id} appointment=${e.appt}
    onClose=${n=>{Qu(null),n&&e.done&&e.done(n)}} />`:null}function _p({appointment:e,onClose:t}){let n=w("appointments",e.id)||e,[a,s]=D(n.outcome||""),[i,r]=D(n.nextSteps||""),o=Ce(V(),7),[c,p]=D([{key:1,title:"",due:o}]),[d,u]=D(!1),m=v.todos.filter(y=>y.appointmentId===n.id),g=(y,f)=>p(h=>h.map(C=>C.key===y?{...C,...f}:C)),$=()=>p(y=>[...y,{key:Math.max(0,...y.map(f=>f.key))+1,title:"",due:o}]);async function b(){u(!0);let y=await _(()=>ri(n.id,{outcome:a,nextSteps:i,todos:c}));u(!1),y&&(U(y.todos.length?`Termin dokumentiert, ${y.todos.length} ${y.todos.length===1?"To-do":"To-dos"} angelegt`:"Termin dokumentiert","good"),t(y.appointment))}return l`<${Le} title="Termin dokumentieren" onClose=${()=>t()} size="lg" onSubmit=${b}
    footer=${l`<${E} onClick=${()=>t()}>Abbrechen<//><${E} variant="primary" type="submit" busy=${d}>Speichern<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${Fi(n.companyId)}`}></span>
      <div><div class="strong">${n.title}</div>
        <div class="muted-text">${ds(n.date)}, ${n.start}–${n.end}${cn(n)?` · ${cn(n)}`:""}</div></div>
    </div>
    <div class="form-grid">
      <${ie} class="span-6" label="Ergebnis / kurzes Statement" value=${a} onInput=${s} rows=${3}
        placeholder="Was wurde besprochen, wie ist es gelaufen?" />
      <${ie} class="span-6" label="Nächste Schritte" value=${i} onInput=${r} rows=${2}
        placeholder="z. B. Angebot bis Freitag, Folgetermin in zwei Wochen" />
    </div>
    <h3 class="sub-head">To-dos aus diesem Termin</h3>
    ${m.length>0&&l`<${Xn} items=${m} showCustomer=${!1} />`}
    <div class="doc-todos">
      ${c.map((y,f)=>l`<div class="doc-todo" key=${y.key}>
        <input class="input" placeholder="To-do, z. B. Angebot schicken" aria-label=${`To-do ${f+1}`} value=${y.title}
          onInput=${h=>g(y.key,{title:h.target.value})}
          onKeyDown=${h=>{h.key==="Enter"&&(h.preventDefault(),y.title.trim()&&$())}} />
        <input class="input" type="date" aria-label=${`To-do ${f+1}: fällig am`} value=${y.due} onInput=${h=>g(y.key,{due:h.target.value})} />
        <${E} variant="ghost" small icon="trash" title="Zeile entfernen" disabled=${c.length===1&&!y.title}
          onClick=${()=>p(h=>h.length===1?[{key:y.key+1,title:"",due:o}]:h.filter(C=>C.key!==y.key))} />
      </div>`)}
      <${E} small icon="plus" onClick=${$}>Weiteres To-do<//>
    </div>
    <p class="field-hint">To-dos erscheinen beim Kontakt, im Dashboard und unter „To-dos“. Leere Zeilen werden ignoriert.</p>
  <//>`}var co=(e=new Date)=>Is(v.appointments.filter(Ke).filter(t=>Fc(t,e)));async function Mp(e){await _(()=>oi(e.id,"done",""))&&U("Als stattgefunden vermerkt","good")}async function Oi(e,t){let n=t==="morning"?(()=>{let s=new Date;return s.setDate(s.getDate()+1),s.setHours(9,0,0,0),s})():new Date(Date.now()+t*36e5);await _(()=>sc(e.id,n.toISOString()))&&U(`Erinnerung verschoben auf ${n.toLocaleString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})} Uhr`,"good")}function Ju(){let e=co();return e.length?l`<section class="followups" aria-label="Termine nachbereiten">
    <div class="followups-head"><${W} name="calendar" /><strong>${e.length===1?"Ein Termin ist vorbei":`${e.length} Termine sind vorbei`}</strong>
      <span class="muted-text">Möchtest du Ergebnis, nächste Schritte oder To-dos festhalten?</span></div>
    <ul>
      ${e.slice(0,5).map(t=>l`<li key=${t.id}>
        <span class="followup-what" style=${`--chip:${Fi(t.companyId)}`}>
          <span class="strong">${t.title}</span>
          <span class="cell-sub">${F(t.date)}, ${t.start}–${t.end}${cn(t)?` · ${cn(t)}`:""}</span>
        </span>
        <span class="followup-actions">
          <${E} small variant="primary" icon="edit" onClick=${()=>Pi(t)}>Ja, dokumentieren<//>
          <${E} small onClick=${()=>Mp(t)}>Nein<//>
          <${xt} small label="Später" icon="clock" items=${[{label:"In einer Stunde",onClick:()=>Oi(t,1)},{label:"In drei Stunden",onClick:()=>Oi(t,3)},{label:"Morgen früh",onClick:()=>Oi(t,"morning")},{label:"In drei Tagen",onClick:()=>Oi(t,72)}]} />
        </span>
      </li>`)}
    </ul>
    ${e.length>5&&l`<p class="cell-sub">und ${e.length-5} weitere im Kalender</p>`}
  </section>`:null}async function zp(e,t){let n=await ue({title:"Termin absagen?",text:"Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.",input:{label:"Grund (optional)",value:"",multiline:!1},confirmLabel:"Absagen",danger:!0});if(n===null)return;let a=await _(()=>oi(e.id,"cancelled",n));a&&(U("Termin abgesagt","good"),t&&t(a))}async function Lp(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{n=!1}return t.remove(),n}function Hu(e){return`${Ft(`Termin ${e.date} ${e.start.replace(":","-")} ${cn(e)||e.title||""}`.trim())}.ics`}function uo({appointment:e,onClose:t,justCreated:n}){let a=w("companies",e.companyId),s=w("customers",e.customerId),i=Se(()=>Vc(e,{company:a,customer:s,settings:v.settings}),[e.id,e.updatedAt]),[r,o]=D(e.attendees||s&&s.email||""),[c,p]=D(i.subject),[d,u]=D(i.body),[m,g]=D(""),$=typeof navigator<"u"&&!!navigator.canShare,b=()=>new Blob([qc(e,{summary:c,description:d})],{type:"text/calendar;charset=utf-8"});function y(){Je(b(),Hu(e))}async function f(){let S=await Lp(`${c}

${d}`);U(S?"Text kopiert":"Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.",S?"good":"bad")}function h(){let S=`mailto:${encodeURIComponent(r.trim()).replace(/%2C/g,",")}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`;ga(),window.location.href=S}async function C(){g("share"),await _(async()=>{let S=new File([b()],Hu(e),{type:"text/calendar"});if(!navigator.canShare({files:[S]}))throw new Error("Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.");try{await navigator.share({files:[S],title:c,text:d})}catch(k){if(!k||k.name!=="AbortError")throw k}}),g("")}return l`<${Le} title=${n?"Termin angelegt – Einladung":"Einladung und Kalenderdatei"} onClose=${t} size="lg"
    footer=${l`<${E} variant="primary" onClick=${t}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${a?a.brandColor:"var(--ink-2)"}`}></span>
      <div>
        <div class="strong">${e.title}</div>
        <div class="muted-text">${ds(e.date)}, ${ju(e)}${a?` · über ${a.name}`:""}${e.kind==="video"&&e.meetingProvider?` · ${Ca(e.meetingProvider)}`:""}</div>
      </div>
    </div>
    <${xe} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${q} class="span-6" label="Empfänger" value=${r} onInput=${o} hint=${r?"":"Keine E-Mail-Adresse hinterlegt."} />
      <${q} class="span-6" label="Betreff" value=${c} onInput=${p} />
      <${ie} class="span-6" label="Text" value=${d} onInput=${u} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${E} icon="calendar" onClick=${y}>Kalenderdatei herunterladen<//>
      <${E} icon="copy" onClick=${f}>Text kopieren<//>
      <${E} icon="mail" onClick=${h} disabled=${!r.trim()}>E-Mail-Programm öffnen<//>
      ${$&&l`<${E} icon="send" busy=${m==="share"} onClick=${C}>Teilen<//>`}
    </div>
  <//>`}function Pp(e,t){let a=(new Date(Date.UTC(e,t,1)).getUTCDay()+6)%7,s=new Date(Date.UTC(e,t,1-a)),i=[];for(let r=0;r<42;r++){let o=new Date(s.getTime()+r*864e5);i.push({iso:o.toISOString().slice(0,10),inMonth:o.getUTCMonth()===t})}return i.slice(35).every(r=>!r.inMonth)?i.slice(0,35):i}function Kp({a:e,onOpen:t}){let n=e.status;return l`<button type="button" class=${`cal-chip${n==="cancelled"?" is-cancelled":""}${n==="done"?" is-done":""}`}
    style=${`--chip:${Fi(e.companyId)}`} onClick=${a=>{a.stopPropagation(),t(e)}}
    title=${`${e.start}–${e.end} ${e.title}${cn(e)?` (${cn(e)})`:""}`}>
    <span class="cal-chip-time">${e.start}</span><span class="cal-chip-title">${e.title}</span>
  </button>`}function Xu({params:e}){ge();let t=V(),[n,a]=D("month"),[s,i]=D(()=>({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})),[r,o]=D(()=>e&&e.open&&w("appointments",e.open)?w("appointments",e.open):null),[c,p]=D(!1),[d,u]=D(""),m=de(),g=Is(v.appointments.filter(Ke)).filter(S=>!d||Ne(d,S.title,cn(S),S.agenda,S.outcome)),$=new Map;for(let S of g)$.has(S.date)||$.set(S.date,[]),$.get(S.date).push(S);function b(S){let k=m||(re().length===1?re()[0]:re()[0]);o(da(k,{date:S||t}))}let y=S=>i(k=>{let R=new Date(Date.UTC(k.y,k.m+S,1));return{y:R.getUTCFullYear(),m:R.getUTCMonth()}}),f=Pp(s.y,s.m),h=g.filter(S=>S.date>=t),C=g.filter(S=>S.date<t).reverse();return l`
    <${ke} title="Termine" sub=${m?`Termine über ${m.name}`:"Alle Termine aller Unternehmen"}>
      <${wt} label="Ansicht" value=${n} onChange=${a} options=${[{id:"month",label:"Monat"},{id:"list",label:"Liste"}]} />
      <${E} variant="primary" icon="plus" onClick=${()=>b(t)}>Neuer Termin<//>
    <//>
    ${n==="month"?l`
      <div class="cal-toolbar">
        <${E} small icon="chevronLeft" title="Vorheriger Monat" onClick=${()=>y(-1)} />
        <h2 class="cal-title">${Gu[s.m]} ${s.y}</h2>
        <${E} small icon="chevronRight" title="Nächster Monat" onClick=${()=>y(1)} />
        <${E} small onClick=${()=>i({y:Number(t.slice(0,4)),m:Number(t.slice(5,7))-1})}>Heute<//>
        <span class="cal-legend">${re().map(S=>l`<span class="cal-legend-item"><i style=${`background:${S.brandColor}`}></i>${S.shortName||S.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${Gu[s.m]} ${s.y}`}>
        ${Rp.map(S=>l`<div class="cal-wd" role="columnheader">${S}</div>`)}
        ${f.map(S=>{let k=$.get(S.iso)||[];return l`<div role="gridcell" class=${`cal-day${S.inMonth?"":" is-out"}${S.iso===t?" is-today":""}`}
            onClick=${()=>b(S.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(S.iso.slice(8,10))}</span>
            ${k.slice(0,3).map(R=>l`<${Kp} key=${R.id} a=${R} onOpen=${o} />`)}
            ${k.length>3&&l`<button type="button" class="cal-more" onClick=${R=>{R.stopPropagation(),a("list")}}>+${k.length-3} weitere</button>`}
          </div>`})}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    `:l`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${d} onInput=${S=>u(S.target.value)} />
        <${ft} label="Zeitraum" value=${c?"past":"next"} onChange=${S=>p(S==="past")}
          options=${[{id:"next",label:"Anstehend",count:h.length},{id:"past",label:"Vergangen",count:C.length}]} />
      </div>
      ${(c?C:h).length?l`<${Ki} items=${c?C:h} onOpen=${o} showCustomer />`:l`<${pe} icon="calendar" title=${c?"Keine vergangenen Termine":"Keine anstehenden Termine"}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${E} variant="primary" icon="plus" onClick=${()=>b(t)}>Termin anlegen<//>
          <//>`}
    `}
    ${r&&l`<${Li} key=${r.id} appointment=${r} onClose=${()=>o(null)} />`}
  `}function Ki({items:e,onOpen:t,showCustomer:n,compact:a}){let s=V(),i="";return l`<ul class=${`appt-list${a?" is-compact":""}`}>
    ${e.map(r=>{let o=r.date!==i&&!a;i=r.date;let c=ca[r.status]||ca.planned;return l`${o&&l`<li class="appt-date" key=${`d-${r.date}`}>${r.date===s?"Heute, ":r.date===Ce(s,1)?"Morgen, ":""}${ds(r.date)}</li>`}
        <li key=${r.id}>
          <button type="button" class="appt-row" onClick=${()=>t(r)} style=${`--chip:${Fi(r.companyId)}`}>
            <span class="appt-time">${a?l`${F(r.date)}<br />`:""}${r.start}–${r.end}</span>
            <span class="appt-main">
              <span class="appt-title">${r.title}${r.status!=="planned"?l` <${ze} tone=${c.tone}>${c.label}<//>`:""}</span>
              <span class="cell-sub">${[n&&cn(r),r.kind==="video"?Ca(r.meetingProvider)||"Videocall":(Za.find(p=>p.id===r.kind)||{}).label,r.timeZone!==at()?ju(r).replace(`${r.start}–${r.end} `,""):""].filter(Boolean).join(" · ")}</span>
            </span>
            <span class="appt-co"><${Pe} id=${r.companyId} /></span>
          </button>
        </li>`})}
  </ul>`}function ed(){let[e,t]=D(null),n=V(),a=Ce(n,14),s=new Date,i=Is(v.appointments.filter(Ke).filter(r=>r.status==="planned"&&r.date>=n&&r.date<=a&&In(r).end>s)).slice(0,6);return i.length?l`<${J} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${Ki} items=${i} onOpen=${t} showCustomer />
    ${e&&l`<${Li} key=${e.id} appointment=${e} onClose=${()=>t(null)} />`}
  <//>`:l`<${J} title="Nächste Termine" class="dash-appts" action=${l`<a class="panel-link" href="#/appointments">Kalender</a>`}>
      <p class="muted-text">Keine Termine in den nächsten 14 Tagen.</p>
    <//>`}var td=(e,t)=>(e.find(n=>n.id===t)||{}).label||"",mo=e=>(w("companies",e)||{}).name||"";function Es(e,t){if(!e)return"";if(e.startsWith("ref:")){let n=t.actions.find(a=>a.type==="contact"&&a.ref===e.slice(4));return n?`${Z(n)||"neuer Kontakt"} (neu)`:"neuer Kontakt"}return Z(w("customers",e))}var Op=(e,t)=>{let[n,a]=e.split(":").map(Number),s=Math.min(n*60+a+t,1439);return`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`};async function Fp(e){let t=[],n={},a=i=>i&&i.startsWith("ref:")?n[i.slice(4)]||"":i||"",s=[...e.actions.filter(i=>i.type==="contact"),...e.actions.filter(i=>i.type!=="contact")];for(let i of s)if(!i.off)try{if(i.type==="contact"){let r=await Wn(Gt({kind:i.kind,company:i.company,firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone,city:i.city,notes:i.notes}));n[i.ref]=r.id,t.push({ok:!0,text:`${i.kind==="customer"?"Kunde":"Kontakt"} ${Z(r)} (${r.number}) angelegt`,href:`/customers/${r.id}`})}else if(i.type==="todos"){let r=i.items.filter(o=>!o.off);for(let o of r)await es(Mn({title:o.title,due:o.due,customerId:a(o.customerId),companyId:o.companyId}));r.length&&t.push({ok:!0,text:`${r.length} ${r.length===1?"To-do":"To-dos"} angelegt`,href:"/todos"})}else if(i.type==="appointment"){let r=w("companies",i.companyId),o=da(r,{start:i.start||"10:00"}),c=w("customers",a(i.customerId)),p=await ii({...o,customerId:c?c.id:"",contactName:i.contactName,title:i.title,date:i.date||V(),end:i.duration?Op(i.start,i.duration):o.end,kind:i.kind,location:i.location,agenda:i.agenda,attendees:c&&c.email?c.email:"",language:c&&c.language?c.language:o.language});t.push({ok:!0,text:`Termin „${p.title}“ am ${F(p.date)} um ${p.start} Uhr angelegt`,appointment:p})}else if(i.type==="note"){let r=await si(qs({customerId:a(i.customerId),kind:i.kind,title:i.title,text:i.text,date:i.date||V()}));t.push({ok:!0,text:`Notiz bei ${Z(w("customers",r.customerId))} eingetragen`,href:`/customers/${r.customerId}`})}else if(i.type==="document"){let r=await ri(i.appointmentId,{outcome:i.outcome,nextSteps:i.nextSteps,todos:i.todos.filter(o=>!o.off)});t.push({ok:!0,text:`Termin „${r.appointment.title}“ dokumentiert${r.todos.length?`, ${r.todos.length} To-dos`:""}`,href:r.appointment.customerId?`/customers/${r.appointment.customerId}`:"/appointments"})}else if(i.type==="invoice"){let r=w("companies",i.companyId),o=w("customers",a(i.customerId)),c=mt(r);c.customerId=o.id,o.currency&&Ae.includes(o.currency)&&(c.currency=o.currency),o.language&&(c.language=o.language),o.paymentTermDays!=null&&o.paymentTermDays!==""&&(c.paymentTermDays=Number(o.paymentTermDays)),c.items=i.items.map(d=>{let u=d.serviceId?w("services",d.serviceId):null;return{...u?lt(u,r):Rt({name:d.name,taxRate:Number(r.defaultTaxRate)||0}),qty:d.qty,...d.priceCents!=null?{priceCents:d.priceCents}:{},...d.name&&!u?{name:d.name}:{}}});let p=await wa(c);t.push({ok:!0,text:`Rechnungsentwurf für ${Z(o)} angelegt (${j(p.totals.totalCents,p.currency)})`,href:`/invoices/${p.id}/edit`})}}catch(r){t.push({ok:!1,text:r.message||String(r)})}return t}function Vp({a:e,plan:t,onToggle:n,onToggleItem:a}){let s=(o,c)=>l`<div class="voice-action-head">
    <input type="checkbox" checked=${!e.off} onChange=${n} aria-label=${`${c} ausführen`} />
    <${W} name=${o} size=${16} /><span>${c}</span></div>`,i=null,r="";if(e.type==="todos")return r=`${e.items.length} ${e.items.length===1?"To-do":"To-dos"}`,i=l`<ul>${e.items.map((o,c)=>l`<li key=${c}><label>
      <input type="checkbox" checked=${!o.off} onChange=${()=>a(c)} />
      <span><strong>${o.title}</strong>${o.due?` · bis ${F(o.due)}`:""}${o.customerId?` · ${Es(o.customerId,t)}`:""}${o.companyId?` · ${mo(o.companyId)}`:""}</span></label></li>`)}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("check",r)}${i}${Ba(e)}</div>`;if(e.type==="appointment")return r=`Termin: ${e.title||(e.customerId?`Termin mit ${Es(e.customerId,t)}`:"ohne Titel")}`,i=l`<ul>
      <li>${e.date?F(e.date):"–"}, ${e.start||"–"} Uhr${e.duration?`, ${e.duration} Min.`:""} · ${td(Za,e.kind)}</li>
      <li>Über ${mo(e.companyId)||"–"}${e.customerId?` · mit ${Es(e.customerId,t)}`:""}${e.contactName?` (${e.contactName})`:""}</li>
      ${e.location&&l`<li>${e.location}</li>`}
      ${e.agenda&&l`<li>Themen: ${e.agenda}</li>`}</ul>`,l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("calendar",r)}${i}${Ba(e)}</div>`;if(e.type==="note")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("note",`${td(ua,e.kind)} bei ${Es(e.customerId,t)}`)}
      <ul><li>${e.title&&l`<strong>${e.title}: </strong>`}${e.text}</li></ul>${Ba(e)}</div>`;if(e.type==="contact")return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("customers",`Neuer ${e.kind==="customer"?"Kunde":"Kontakt"}: ${Z(e)||"–"}`)}
      <ul><li>${[e.firstName&&`${e.firstName} ${e.lastName}`,e.email,e.phone,e.city].filter(Boolean).join(" · ")||"keine weiteren Angaben"}</li></ul>${Ba(e)}</div>`;if(e.type==="document"){let o=w("appointments",e.appointmentId);return l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("edit",`Termin dokumentieren: ${o?`${o.title}, ${F(o.date)}`:""}`)}
      <ul>${e.outcome&&l`<li>Ergebnis: ${e.outcome}</li>`}${e.nextSteps&&l`<li>Nächste Schritte: ${e.nextSteps}</li>`}
        ${e.todos.map((c,p)=>l`<li key=${p}><label><input type="checkbox" checked=${!c.off} onChange=${()=>a(p)} />
          <span>To-do: <strong>${c.title}</strong>${c.due?` · bis ${F(c.due)}`:""}</span></label></li>`)}</ul>${Ba(e)}</div>`}return e.type==="invoice"?l`<div class=${`voice-action${e.off?" is-off":""}`}>${s("invoice",`Rechnungsentwurf für ${Es(e.customerId,t)} über ${mo(e.companyId)}`)}
      <ul>${e.items.map((o,c)=>{let p=o.serviceId?w("services",o.serviceId):null;return l`<li key=${c}>${o.qty} × ${p?p.name:o.name}${o.priceCents!=null?` à ${j(o.priceCents,(w("companies",e.companyId)||{}).currency||"USD")}`:p?` à ${j(p.priceCents,p.currency||"USD")}`:""}</li>`})}</ul>
      <p class="field-hint">Nur Entwurf – du prüfst und erstellst ihn danach im Editor.</p>${Ba(e)}</div>`:null}var Ba=e=>e.warnings&&e.warnings.length?l`<p class="field-hint tone-warn">${e.warnings.join(" ")}</p>`:null;function qp({onClose:e}){let[t,n]=D(""),[a,s]=D(""),[i,r]=D(!1),[o,c]=D(""),[p,d]=D(null),[u,m]=D(null),[g,$]=D(null),b=ye(null),y=ye("");y.current=t;let f=!!v.settings.aiApiKey,h=Ja();function C(){if(i){b.current&&b.current();return}try{b.current=ei({onFinal:x=>n(B=>ti(B,x)),onInterim:s,onEnd:()=>{r(!1),s(""),b.current=null},onError:x=>U(x,"bad",8e3)}),r(!0),d(null),m(null)}catch(x){U(x.message||String(x),"bad")}}ce(()=>(h&&f&&C(),()=>{b.current&&b.current()}),[]),ce(()=>{let x=B=>{B.key==="Escape"&&!document.querySelector(".modal-backdrop")&&e()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e]);async function S(){b.current&&b.current();let x=y.current.trim();if(!x){U("Bitte zuerst etwas sagen oder eintippen.","info");return}c("ai");let B=Bc({customers:v.customers,companies:v.companies,services:v.services,appointments:v.appointments,todos:v.todos},{today:V(),timeZone:at()}),I=await _(()=>Rc({apiKey:v.settings.aiApiKey,model:v.settings.aiModel,text:x,context:B.text,map:B.map}));c(""),I&&(d(I),m(null))}async function k(){c("run");let x=await Fp(p);c(""),m(x),d(null);let B=x.filter(I=>I.ok).length;B&&U(`${B} ${B===1?"Eintrag":"Einträge"} angelegt`,"good")}let R=x=>d(B=>({...B,actions:B.actions.map((I,K)=>K===x?{...I,off:!I.off}:I)})),G=(x,B)=>d(I=>({...I,actions:I.actions.map((K,P)=>{if(P!==x)return K;let z=K.type==="todos"?"items":"todos";return{...K,[z]:K[z].map((ee,T)=>T===B?{...ee,off:!ee.off}:ee)}})})),N=p?p.actions.filter(x=>!x.off).length:0,A=l`
      ${!u&&!p&&l`<${E} variant="primary" icon="sparkle" busy=${o==="ai"} disabled=${!f||!t.trim()} onClick=${S}>Verstehen<//>`}
      ${p&&l`<${E} onClick=${()=>d(null)}>Ändern<//>`}
      ${p&&p.actions.length>0&&l`<${E} variant="primary" icon="check" busy=${o==="run"} disabled=${!N} onClick=${k}>Ausführen<//>`}
      ${u&&l`<${E} onClick=${e}>Fertig<//>`}
      ${u&&l`<${E} variant="primary" icon="mic" onClick=${()=>{n(""),m(null),C()}}>Nächster Befehl<//>`}`;return l`<section class="voice-panel" role="dialog" aria-label="Sprachbefehl">
    <header class="voice-panel-head">
      <span class=${`voice-panel-dot${i?" is-on":""}`}><${W} name="mic" size=${15} /></span>
      <strong>Sprachbefehl</strong>
      ${i&&l`<span class="voice-panel-live">hört zu</span>`}
      <button type="button" class="voice-panel-close" onClick=${e} title="Schließen" aria-label="Schließen"><${W} name="x" size=${17} /></button>
    </header>
    <div class="voice-panel-body">
      ${!f&&l`<${xe} tone="warn">Sprachbefehle laufen über die Anthropic-API. Trage dafür unter Einstellungen den API-Key ein (derselbe wie für die Belegerkennung).<//>`}
      ${!u&&!p&&l`
        <div class="voice-stage">
          ${h?l`<button type="button" class=${`mic-btn${i?" is-on":""}`} onClick=${C} aria-pressed=${i}
                title=${i?"Zuhören beenden":"Mikrofon einschalten"} aria-label=${i?"Zuhören beenden":"Mikrofon einschalten"}><${W} name="mic" size=${22} /></button>`:l`<p class="muted-text">Dieser Browser hat keine Spracherkennung (Chrome oder Safari verwenden). Du kannst den Befehl auch eintippen.</p>`}
          <div class="voice-stage-text">
            ${i?l`<span class="strong">Ich höre zu …</span>`:h&&l`<span class="muted-text">Auf das Mikrofon tippen und sprechen</span>`}
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
          ${p.actions.map((x,B)=>l`<${Vp} key=${B} a=${x} plan=${p} onToggle=${()=>R(B)} onToggleItem=${I=>G(B,I)} />`)}
        </div>`}
      ${u&&l`<ul class="voice-done">
        ${u.map(x=>l`<li class=${x.ok?"":"tone-bad"}>${x.ok?"✓":"✕"} ${x.text}
          ${x.href&&l` · <a href=${`#${x.href}`}>Öffnen</a>`}
          ${x.appointment&&l` · <button type="button" class="link-btn" onClick=${()=>$(x.appointment)}>Einladung</button>`}</li>`)}
      </ul>`}
    </div>
    <footer class="voice-panel-foot">${A}</footer>
  </section>
  ${g&&l`<${uo} appointment=${g} justCreated onClose=${()=>$(null)} />`}`}var fo=!1,po=new Set;function nd(e){fo=e,po.forEach(t=>t(e))}var Zp=()=>nd(!fo);function ad(){let[e,t]=D(fo);return ce(()=>(po.add(t),()=>po.delete(t)),[]),e}function sd(){return ad()?l`<${qp} onClose=${()=>nd(!1)} />`:null}function id(){let e=ad();return l`<button type="button" class=${`backup-btn voice-btn${e?" is-open":""}`} onClick=${Zp} aria-pressed=${e}
    title="Sprachbefehl: To-dos, Termine, Notizen per Sprache">
    <${W} name="mic" /><span>Sprechen</span>
  </button>`}async function go(){v.companies.length||(await Xa(qa({name:"Hey Lemon",shortName:"Hey Lemon",invoicePrefix:"HL",quotePrefix:"HL A",creditPrefix:"HL GS",brandColor:"#E9B800"})),await Xa(qa({name:"Build Buddy Consulting",shortName:"BBC",invoicePrefix:"BBC",quotePrefix:"BBC A",creditPrefix:"BBC GS",brandColor:"#1F4E79"})),await Q(async e=>{await e.setting("seeded",!0),await e.setting("changesSinceBackup",0)}))}async function rd(){v.settings.seeded||v.companies.length||await go()}function Gp(){let e=document.documentElement.getAttribute("data-theme");return e==="dark"?!0:e==="light"?!1:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}function Ns(e){let t=/^#([0-9a-f]{6})$/i.exec(String(e||""));if(!t)return e;let n=parseInt(t[1],16),s=[n>>16&255,n>>8&255,n&255].map(o=>{let c=o/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}),i=.2126*s[0]+.7152*s[1]+.0722*s[2],r=Gp();return r&&i<.16?`color-mix(in srgb, ${e} 62%, #ffffff)`:!r&&i>.72?`color-mix(in srgb, ${e} 72%, #000000)`:e}function Hp(){let e=ye(null),[t,n]=D(0);return nr(()=>{let a=e.current;if(!a||(n(a.clientWidth),typeof ResizeObserver>"u"))return;let s=new ResizeObserver(i=>n(Math.round(i[0].contentRect.width)));return s.observe(a),()=>s.disconnect()},[]),[e,t]}function jp(e,t,n=4){if(t<=0&&e>=0)return{lo:0,hi:1,step:1,ticks:[0,1]};let s=(Math.max(t,0)-Math.min(e,0))/n,i=Math.pow(10,Math.floor(Math.log10(s))),r=s/i,o=(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*i,c=Math.floor(Math.min(e,0)/o)*o,p=Math.ceil(Math.max(t,0)/o)*o,d=[];for(let u=c;u<=p+o/2;u+=o)d.push(Math.round(u/o)*o);return{lo:c,hi:p,step:o,ticks:d}}function ho(e,t,n,a,s,i){let r=Math.min(s,n/2,a);return a<=0?"":i?`M${e},${t+a}V${t+r}Q${e},${t} ${e+r},${t}H${e+n-r}Q${e+n},${t} ${e+n},${t+r}V${t+a}Z`:`M${e},${t}V${t+a-r}Q${e},${t+a} ${e+r},${t+a}H${e+n-r}Q${e+n},${t+a} ${e+n},${t+a-r}V${t}Z`}function Ts({groups:e,series:t,mode:n="stacked",format:a,axisFormat:s,height:i=240,ariaLabel:r}){let[o,c]=Hp(),[p,d]=D(null),u={top:12,right:8,bottom:26,left:56},m=0,g=0;for(let A of e)if(n==="stacked"){let x=0,B=0;for(let I of t){let K=A.values[I.id]||0;K>=0?x+=K:B+=K}m=Math.max(m,x),g=Math.min(g,B)}else for(let x of t){let B=A.values[x.id]||0;m=Math.max(m,B),g=Math.min(g,B)}let $=jp(g,m),b=Math.max(c-u.left-u.right,10),y=i-u.top-u.bottom,f=A=>u.top+y-(A-$.lo)/($.hi-$.lo||1)*y,h=b/Math.max(e.length,1),C=f(0),S=Math.max(1,Math.ceil(e.length/Math.max(1,Math.floor(b/46)))),k=[];e.forEach((A,x)=>{let B=u.left+x*h;if(n==="stacked"){let I=Math.min(24,Math.max(h-10,3)),K=B+(h-I)/2,P=C,z=C,ee=t.filter(fe=>(A.values[fe.id]||0)!==0),T=[...ee].reverse().find(fe=>A.values[fe.id]>0),X=[...ee].reverse().find(fe=>A.values[fe.id]<0);for(let fe of ee){let O=A.values[fe.id],Ue=Math.abs(f(O)-C);if(O>0){let qe=P-Ue,ta=T&&T.id===fe.id,Hi=ta?0:Math.min(2,Ue-1);k.push({d:ta?ho(K,qe,I,Ue,4,!0):`M${K},${qe+Hi}H${K+I}V${P}H${K}Z`,color:fe.color,key:`${A.key}-${fe.id}`}),P=qe}else{let qe=X&&X.id===fe.id,ta=qe?0:Math.min(2,Ue-1);k.push({d:qe?ho(K,z,I,Ue,4,!1):`M${K},${z}H${K+I}V${z+Ue-ta}H${K}Z`,color:fe.color,key:`${A.key}-${fe.id}`}),z+=Ue}}}else{let I=t.length,K=Math.min(18,Math.max((h-10-(I-1)*2)/I,2)),P=I*K+(I-1)*2;t.forEach((z,ee)=>{let T=A.values[z.id]||0;if(!T)return;let X=Math.abs(f(T)-C),fe=B+(h-P)/2+ee*(K+2);k.push({d:ho(fe,T>0?C-X:C,K,X,4,T>0),color:z.color,key:`${A.key}-${z.id}`})})}});let R=p!=null?e[p]:null,G=p!=null?u.left+p*h+h/2:0,N=G>c*.6;return l`<div class="chart" ref=${o} style=${`height:${i}px`}>
    ${c>0&&l`<svg width=${c} height=${i} role="img" aria-label=${r}>
      ${$.ticks.map(A=>l`<g key=${A}>
        <line x1=${u.left} x2=${c-u.right} y1=${f(A)} y2=${f(A)} class=${A===0?"chart-base":"chart-grid"} />
        <text x=${u.left-8} y=${f(A)+4} text-anchor="end" class="chart-tick">${(s||a)(A)}</text>
      </g>`)}
      ${p!=null&&l`<rect x=${u.left+p*h} y=${u.top} width=${h} height=${y} class="chart-hover" />`}
      ${k.map(A=>l`<path key=${A.key} d=${A.d} fill=${A.color} />`)}
      ${e.map((A,x)=>x%S===0&&l`<text key=${A.key} x=${u.left+x*h+h/2} y=${i-8}
        text-anchor="middle" class="chart-tick">${A.label}</text>`)}
      ${e.map((A,x)=>l`<rect key=${`hit-${A.key}`} x=${u.left+x*h} y=${u.top} width=${h} height=${y+u.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${A.title||A.label}: ${t.map(B=>`${B.label} ${a(A.values[B.id]||0)}`).join(", ")}`}
        onMouseEnter=${()=>d(x)} onMouseLeave=${()=>d(null)}
        onFocus=${()=>d(x)} onBlur=${()=>d(null)} />`)}
    </svg>`}
    ${R&&l`<div class=${`chart-tip${N?" is-left":""}`} style=${`left:${G}px;top:${u.top}px`}>
      <div class="chart-tip-title">${R.title||R.label}</div>
      ${t.filter(A=>t.length===1||(R.values[A.id]||0)!==0).map(A=>l`<div class="chart-tip-row" key=${A.id}>
        <span class="chart-key" style=${`background:${A.color}`}></span>
        <strong>${a(R.values[A.id]||0)}</strong><span>${A.label}</span>
      </div>`)}
      ${t.length>1&&n==="stacked"&&l`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${a(t.reduce((A,x)=>A+(R.values[x.id]||0),0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`}function Wp({series:e}){return e.length<2?null:l`<ul class="legend">
    ${e.map(t=>l`<li key=${t.id}><span class="legend-swatch" style=${`background:${t.color}`}></span>${t.label}</li>`)}
  </ul>`}function As({title:e,sub:t,series:n=[],table:a,children:s}){let[i,r]=D(!1);return l`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${e}</h2>
        ${t&&l`<p class="figure-sub">${t}</p>`}
      </div>
      ${a&&l`<button type="button" class="link-btn" aria-pressed=${i} onClick=${()=>r(!i)}>
        ${i?"Diagramm zeigen":"Als Tabelle zeigen"}
      </button>`}
    </figcaption>
    ${!i&&l`<${Wp} series=${n} />`}
    ${i&&a?l`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${a.columns.map((o,c)=>l`<th class=${c?"r":""}>${o}</th>`)}</tr></thead>
          <tbody>${a.rows.map(o=>l`<tr>${o.map((c,p)=>l`<td class=${p?"r":""}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`:s}
  </figure>`}function un({rows:e,max:t,limit:n=6,emptyText:a="Noch keine Daten in diesem Zeitraum."}){let s=e.slice(0,n),i=t||Math.max(0,...s.map(r=>r.value));return s.length?l`<ol class="barlist">
    ${s.map(r=>{let o=i>0?Math.max(Math.max(r.value,0)/i*100,r.value>0?1.5:0):0,c=r.href?l`<a href=${r.href}>${r.label}</a>`:r.label;return l`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${c}${r.sub&&l`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${o}%;${r.color?`background:${r.color}`:""}`}></div></div>
      </li>`})}
  </ol>`:l`<p class="muted-text">${a}</p>`}async function Vi(e,t){let n=It(e,t),a=await Ia(fs(n));return Je(a,n.fileName),{blob:a,model:n}}function Qp(e,t){let n=e.snapshot&&e.snapshot.company||w("companies",e.companyId)||{},a=e.snapshot&&e.snapshot.customer||w("customers",e.customerId)||{},s=e.language==="en"?"en":"de",i=t==="invoices"?rn(e,Qe(e.id)):0;return{lang:s,email:a.email||"",vars:{NUMBER:e.number||"",DATE:F(e.issueDate,s),DUE:F(t==="quotes"?e.validUntil:e.dueDate,s),TOTAL:ya(e.totals?e.totals.totalCents:0,e.currency,s),OPEN:ya(i,e.currency,s),CONTACT:rt(a)||Z(a),CUSTOMER:Z(a),SENDER:v.settings.userName?`${v.settings.userName}
${n.name||""}`:n.name||"",COMPANY:n.name||""}}}function Yp(e){let n=yn(e).reduce((a,s)=>Math.max(a,s.level),0);return Math.min(n+1,Dt.length)}function Bs(e,t){if(!(t>0))return 0;let n=v.settings.reminderDays||[7,14,21],a=yn(e.id).reduce((i,r)=>Math.max(i,r.level),0),s=0;return Dt.forEach((i,r)=>{t>=(Number(n[r])||0)&&(s=i.id)}),s>a?Math.min(a+1,s):0}function od(e){return[...yn(e)].sort((n,a)=>n.createdAt<a.createdAt?1:-1)[0]||null}function Ra({doc:e,coll:t,mode:n="send",onClose:a}){let{lang:s,email:i,vars:r}=Qp(e,t),[o,c]=D(()=>n==="reminder"?Yp(e.id):0),p=I=>n==="reminder"?((v.settings.reminderTemplates||{})[s]||{})[I]||{subject:"",body:""}:((v.settings.emailTemplates||{})[s]||{})[t==="quotes"?"quote":"invoice"]||{subject:"",body:""},[d,u]=D(i),[m,g]=D(()=>Ct(p(o).subject,r)),[$,b]=D(()=>Ct(p(o).body,r)),[y,f]=D(""),[h,C]=D(null),S=typeof navigator<"u"&&!!navigator.canShare;function k(I){let K=Number(I);c(K),g(Ct(p(K).subject,r)),b(Ct(p(K).body,r))}async function R(){if(h)return h;let I=It(e,t),P={blob:await Ia(fs(I)),name:I.fileName};return C(P),P}async function G(){f("pdf"),await _(async()=>{let I=await R();Je(I.blob,I.name)}),f("")}function N(){let I=`mailto:${encodeURIComponent(d.trim())}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent($)}`;ga(),window.location.href=I}async function A(){f("share"),await _(async()=>{let I=await R(),K=new File([I.blob],I.name,{type:"application/pdf"});if(!navigator.canShare({files:[K]}))throw new Error("Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.");try{await navigator.share({files:[K],title:m,text:$})}catch(P){if(P&&P.name==="AbortError")return;throw P}}),f("")}async function x(){f("done");let I=await _(async()=>(n==="reminder"?await Tc(e.id,o,m):t==="quotes"?await Jn(e.id,"sent"):await Yn(e.id,!0),!0));f(""),I&&(U(n==="reminder"?"Erinnerung im Verlauf vermerkt":"Als versendet markiert","good"),a())}let B=n==="reminder"?`Zahlungserinnerung zu ${e.number}`:`${t==="quotes"?"Angebot":"Rechnung"} ${e.number} versenden`;return l`<${Le} title=${B} onClose=${a} size="lg"
    footer=${l`
      <${E} onClick=${a}>Schließen<//>
      <${E} variant="primary" icon="check" busy=${y==="done"} onClick=${x}>
        ${n==="reminder"?"Als gesendet vermerken":"Als versendet markieren"}
      <//>`}>
    <${xe} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${n==="reminder"&&l`<${ae} class="span-2" label="Stufe" value=${o} onChange=${k}
        options=${Dt.map(I=>({id:I.id,label:I.label}))} />`}
      <${q} class=${n==="reminder"?"span-4":"span-6"} label="Empfänger" type="email" value=${d} onInput=${u}
        hint=${i?"":"Beim Kunden ist keine E-Mail-Adresse hinterlegt."} />
      <${q} class="span-6" label="Betreff" value=${m} onInput=${g} />
      <${ie} class="span-6" label="Text" value=${$} onInput=${b} rows=${10} />
    </div>
    <div class="send-steps">
      <${E} icon="download" busy=${y==="pdf"} onClick=${G}>PDF herunterladen<//>
      <${E} icon="mail" onClick=${N} disabled=${!d.trim()}>E-Mail-Programm öffnen<//>
      ${S&&l`<${E} icon="send" busy=${y==="share"} onClick=${A}>Mit PDF teilen<//>`}
    </div>
  <//>`}var Jp=[{company:"Nordlicht Immobilien GmbH",firstName:"Jana",lastName:"Petersen",street:"Hafenallee",houseNo:"12",zip:"20457",city:"Hamburg",country:"Deutschland",email:"j.petersen@nordlicht-immobilien.example",language:"de",currency:"EUR",tags:["Beispiel","Immobilien"]},{company:"Alpenblick Bau AG",firstName:"Reto",lastName:"Camenzind",street:"Seestrasse",houseNo:"48",zip:"8002",city:"Zürich",country:"Schweiz",email:"reto@alpenblick-bau.example",language:"de",currency:"EUR",tags:["Beispiel","Bau"]},{company:"Desert Bloom Real Estate LLC",firstName:"Layla",lastName:"Haddad",street:"Sheikh Zayed Road",houseNo:"310",zip:"",city:"Dubai",country:"Vereinigte Arabische Emirate",email:"layla@desertbloom.example",language:"en",currency:"USD",tags:["Beispiel","Immobilien"]},{company:"Schulverein Rheinufer e. V.",firstName:"Markus",lastName:"Albrecht",street:"Uferweg",houseNo:"3",zip:"50678",city:"Köln",country:"Deutschland",email:"vorstand@schule-rheinufer.example",language:"de",currency:"EUR",tags:["Beispiel","Schule"]},{company:"Kessler & Söhne Tischlerei",firstName:"Anton",lastName:"Kessler",street:"Werkstattgasse",houseNo:"7",zip:"80331",city:"München",country:"Deutschland",email:"info@kessler-tischlerei.example",language:"de",currency:"USD",tags:["Beispiel","Handwerk"]},{company:"Harbor Point Consulting Inc.",firstName:"Grace",lastName:"Whitfield",street:"Brickell Avenue",houseNo:"900",zip:"33131",city:"Miami",region:"FL",country:"USA",email:"grace@harborpoint.example",language:"en",currency:"USD",paymentTermDays:30,tags:["Beispiel"]}],Xp=[{name:"Website-Erstellung",category:"Website",unit:"Pauschal",priceCents:48e4,invoiceText:"Konzeption, Design und Umsetzung der Website inklusive Einrichtung."},{name:"SEO-Betreuung",category:"SEO",unit:"Monat",priceCents:95e3,recurring:!0,invoiceText:"Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht."},{name:"Website-Wartung",category:"Website",unit:"Monat",priceCents:18e3,recurring:!0,invoiceText:"Updates, Sicherungen und kleinere Anpassungen."},{name:"Hosting",category:"Hosting",unit:"Monat",priceCents:3500,recurring:!0,invoiceText:"Hosting inklusive Domain und E-Mail-Postfächern."},{name:"Vertriebsberatung",category:"Beratung",unit:"Stunde",priceCents:16e3,invoiceText:"Beratung zu Vertriebsprozess und Vertriebscontrolling."},{name:"CRM-Einführung",category:"Beratung",unit:"Pauschal",priceCents:32e4,invoiceText:"Auswahl, Einrichtung und Schulung des CRM-Systems."},{name:"Social-Media-Betreuung",category:"Social Media",unit:"Monat",priceCents:75e3,recurring:!0,invoiceText:"Redaktionsplan, Beiträge und Auswertung."}],ef=[[11,6,0,0,[[0,1]],"full",0],[11,18,1,1,[[4,12]],"full",0],[10,4,0,2,[[1,1],[2,1]],"full",0],[10,21,1,5,[[5,1]],"full",5],[9,3,0,0,[[1,1],[3,1]],"full",0],[9,15,0,3,[[0,1]],"full",10],[9,25,1,1,[[4,8]],"full",0],[8,5,0,2,[[1,1],[2,1]],"full",0],[8,19,1,4,[[4,6]],"full",0],[7,2,0,0,[[1,1],[3,1]],"full",0],[7,12,1,5,[[4,20]],"full",0],[7,27,0,4,[[6,1]],"full",0],[6,4,0,2,[[1,1],[2,1]],"full",0],[6,16,1,1,[[5,1],[4,4]],"full",0],[5,3,0,0,[[1,1],[3,1]],"full",0],[5,14,0,3,[[2,3]],"full",0],[5,24,1,5,[[4,14]],"full",0],[4,5,0,2,[[1,1],[2,1],[6,1]],"full",0],[4,20,1,4,[[4,10]],"full",0],[3,2,0,0,[[1,1],[3,1]],"full",0],[3,11,0,1,[[0,1]],"full",0],[3,23,1,5,[[4,16]],"full",0],[2,4,0,2,[[1,1],[2,1],[6,1]],"full",0],[2,17,1,1,[[4,9]],"half",0],[2,26,0,3,[[2,3]],"none",0],[1,3,0,0,[[1,1],[3,1]],"full",0],[1,9,1,5,[[5,1]],"half",0],[1,22,0,4,[[6,1],[2,1]],"none",0],[0,1,0,2,[[1,1],[2,1],[6,1]],"none",0],[0,3,1,1,[[4,11]],"none",0]],tf=[[330,0,"Wolkenwerk Hosting","Hosting","Server-Jahrespaket","EUR",34800,0,"Kreditkarte"],[300,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[270,0,"Pixelgarten","Software","Design-Software, Jahresabo","USD",59900,0,"Kreditkarte"],[240,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",6e4,0,"Überweisung"],[200,1,"Skyline Air","Reisen","Flug Dubai – Frankfurt","AED",285e3,0,"Kreditkarte"],[180,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",8e4,0,"Kreditkarte"],[150,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[120,0,"Pixelgarten","Software","Stockfotos, Paket","USD",19900,0,"Kreditkarte"],[95,0,"Textwerkstatt Lenz","Freelancer","Blogbeiträge im Paket","EUR",72e3,0,"Überweisung"],[75,1,"Kanzlei Sommer","Beratung","Laufende Steuerberatung","EUR",45e3,8550,"Überweisung"],[60,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",95e3,0,"Kreditkarte"],[45,1,"Büro am Creek","Büro","Coworking, Monatsbeitrag","AED",15e4,7500,"Kreditkarte"],[30,0,"Versicherung Nordstern","Versicherungen","Betriebshaftpflicht","EUR",38e3,0,"Lastschrift"],[18,0,"Wolkenwerk Hosting","Hosting","Zusatzspeicher","EUR",6e3,0,"Kreditkarte"],[9,1,"Hausbank","Bankgebühren","Kontoführung und Auslandsüberweisungen","USD",4500,0,"Lastschrift"],[4,0,"Suchmaschinen-Anzeigen","Marketing","Kampagnenbudget","USD",7e4,0,"Kreditkarte"]],nf=e=>.86+e*37%7/100,Ua=(e,t,n)=>{let a=nf(t),s={date:n,fetchedAt:ne(),source:"Beispielkurs"};return e==="AED"?{rateToUSD:.2723,usdToEur:a,...s,manual:!1}:Wt(e,a,s)};function qi(){return xl(af)}async function af(){if(v.invoices.length||v.customers.length||v.expenses.length||v.services.length)throw new Ie("Beispieldaten lassen sich nur in ein leeres Tool laden.");let e=re();if(!e.length)throw new Ie("Lege zuerst ein Unternehmen an.");let t=m=>e[m%e.length],n=V(),a=[];for(let m of Jp)a.push(await Wn(Gt(m)));let s=[];for(let m of Xp)s.push(await li(Ht({...m,currency:"USD"})));let i=[];for(let[m,g,$,b,y,f,h]of ef){let C=t($),S=a[b],k=Nt(n.slice(0,8)+"01",-m,g);k>n&&(k=n);let R=S.currency||"USD",G=Ua(R,m,k),N=y.map(([I,K])=>{let P=lt(s[I],C),z=R==="EUR"?Math.round(P.priceCents*G.usdToEur/500)*500:P.priceCents;return{...P,qty:K,priceCents:z}}),A={...mt(C),customerId:S.id,issueDate:k,serviceDate:k,paymentTermDays:S.paymentTermDays!=null&&S.paymentTermDays!==""?Number(S.paymentTermDays):14,currency:R,language:S.language||C.language,items:N,discount:{type:"pct",value:h},fx:G},x=await ns(A);i.push({inv:x,pay:f,back:m}),(m>0||f!=="none")&&await Yn(x.id,!0);let B=x.totals.totalCents;if(f==="full"){let I=Ce(k,9+g%9);await as(x.id,{date:I>n?n:I,amountCents:B,method:"Überweisung",note:""})}else if(f==="half"){let I=Ce(k,12);await as(x.id,{date:I>n?n:I,amountCents:Math.round(B/2),method:"Überweisung",note:"Anzahlung"})}}let r=t(0),o=async(m,g,$)=>{let b=Nt(n.slice(0,8)+"01",-$,14),y=m.currency||"USD",f=Ua(y,$,b),h=lt(s[g],r);return ns({...mt(r),customerId:m.id,issueDate:b,serviceDate:b,currency:y,language:m.language||"de",paymentTermDays:14,items:[{...h,priceCents:y==="EUR"?Math.round(h.priceCents*f.usdToEur/500)*500:h.priceCents}],fx:f})},c=await o(a[3],2,4);await di(c.id,"Beispiel: doppelt ausgestellt");let p=await o(a[4],6,3);await mi(p.id,"Beispiel: Leistung wurde nicht erbracht."),await wa({...mt(t(1)),customerId:a[5].id,currency:"USD",language:"en",paymentTermDays:30,items:[{...lt(s[4],t(1)),qty:6}],fx:Ua("USD",0,n)});let d=await ss({...zn(t(0)),customerId:a[1].id,issueDate:Ce(n,-6),validUntil:Ce(n,24),currency:"EUR",language:"de",fx:Ua("EUR",0,n),items:[{...lt(s[0],t(0)),priceCents:42e4},{...lt(s[1],t(0)),qty:6,priceCents:85e3}]});await Jn(d.id,"sent");let u=await ss({...zn(t(1)),customerId:a[5].id,issueDate:Ce(n,-20),validUntil:Ce(n,10),currency:"USD",language:"en",fx:Ua("USD",0,n),items:[{...lt(s[5],t(1))}]});await Jn(u.id,"accepted"),await is(Ln(t(1),{customerId:a[5].id,title:u.items[0].name,quoteId:u.id,status:"open",billing:"once",amountCents:u.totals.netCents,currency:"USD",taxRate:Number(u.items[0].taxRate)||0})),await is(Ln(t(0),{customerId:a[2].id,title:"SEO-Betreuung",refNumber:"V-2025-07",status:"signed",billing:"monthly",signedDate:Nt(n,-11),startDate:Ce(Nt(n,-11),1),endDate:Ce(n,25),noticePeriod:"1 Monat zum Laufzeitende",amountCents:s[1].priceCents,currency:"USD",notes:"Beispiel: läuft in Kürze aus – Verlängerung ansprechen."}));for(let[m,g,$,b,y,f,h,C,S]of tf){let k=Ce(n,-m);await Dn(Ha({companyId:t(g).id,vendor:$,category:b,description:y,currency:f,invoiceDate:k,paymentDate:Ce(k,2)>n?n:Ce(k,2),netCents:h,taxCents:C,totalCents:h+C,paymentMethod:S,fx:Ua(f,Math.floor(m/30),k)}))}return await rs({...$n(t(0)),name:"SEO-Betreuung Desert Bloom",customerId:a[2].id,currency:"USD",language:"en",interval:"monthly",nextDate:n,items:[lt(s[1],t(0)),lt(s[2],t(0))]}),await rs({...$n(t(0)),name:"Hosting Nordlicht Immobilien",customerId:a[0].id,currency:"EUR",language:"de",interval:"yearly",nextDate:Nt(n,4),items:[{...lt(s[3],t(0)),qty:12,priceCents:3e3}]}),await Q(async m=>{await m.setting("demoLoaded",!0),await m.setting("changesSinceBackup",0)}),{invoices:i.length}}async function ld(){let e=new Set(["companies","assets","settings"]);await Pn(Ut,async t=>{for(let n of Ut)e.has(n)||await t.clear(n);await t.put("settings",{key:"demoLoaded",value:!1}),await t.put("settings",{key:"changesSinceBackup",value:0})}),await On(),Wa()}function sf(){let e=re(),t=e.filter(r=>!r.street||!r.city),n=[{done:e.length>0&&t.length===0,label:"Unternehmensdaten ergänzen",text:"Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.",href:"#/companies"},{done:v.customers.length>0,label:"Ersten Kontakt anlegen",text:"Kunden und Kontakte gelten für alle Unternehmen gemeinsam.",href:"#/customers"},{done:v.services.length>0,label:"Leistungen anlegen",text:"Wiederkehrende Leistungen mit Preis und Beschreibung.",href:"#/services"},{done:v.invoices.length>0,label:"Erste Rechnung schreiben",text:"Unternehmen, Kunde, Leistung – fertig.",href:"#/invoices/new"}],[a,s]=D(!1);async function i(){s(!0);let r=await _(async()=>(await qi(),!0));s(!1),r&&U("Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.","good",8e3)}return l`<section class="onboarding">
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
  </section>`}var $o=e=>[...e].sort((t,n)=>M(n)-M(t));function cd(){ge();let e=V(),t=de(),n=ht(),a=ln(),s=re(),i=Se(()=>{let N=ml(12,e),A=yt("year",e);return{kpi:tu(a,n,e),months:N,series:gs(a,{companyId:n,months:N}),byCustomer:hs(a,{companyId:n,range:A}),byService:bs(a,{companyId:n,range:A}),byCompany:$s(a,{range:A}),rec:Nn(a,{companyId:n},e)}},[v.version,n,e]),r=oe();if(!(v.invoices.length||v.expenses.length||v.customers.length||v.services.length))return l`<${sf} />`;let{kpi:c}=i,p=Ot(e.slice(0,7)),d=i.rec.filter(N=>N.status==="overdue"),u=i.rec.filter(N=>N.status!=="overdue"&&N.inv.dueDate&&N.inv.dueDate<=Ce(e,7)),m=v.recurring.filter(Ke).filter(N=>ka(N,e)),g=v.expenses.filter(N=>N.status==="review"&&(Ke(N)||!N.companyId)),$=v.invoices.filter(Ke).filter(N=>N.status==="draft"),b=$.filter(N=>N.number),y=$.filter(N=>!N.number),f=v.invoices.filter(Ke).filter(N=>N.clarify&&N.status!=="draft"),h=v.quotes.filter(Ke).filter(N=>["open","sent"].includes(zt(N,e))&&N.validUntil&&N.validUntil<=Ce(e,7)),C=v.contracts.filter(Ke).filter(N=>Yr(N,e,30)||Jr(N,e)),S=!t&&s.length>1,k=S?s.map(N=>({id:N.id,label:N.shortName||N.name,color:Ns(N.brandColor)})):[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],R=i.series.map(N=>({key:N.key,label:ia(N.key),title:Ot(N.key),values:S?N[`byCompany${oe()}`]:{rev:M(N,"revenue")}})),G={columns:["Monat",...S?k.map(N=>N.label):[],`Umsatz (${oe()})`,`Umsatz (${oe()==="USD"?"EUR":"USD"})`],rows:i.series.map(N=>[Ot(N.key),...S?k.map(A=>se(N[`byCompany${oe()}`][A.id]||0)):[],se(M(N,"revenue")),Fe(Te(N,"revenue"))])};return l`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${p}${t?`, ${t.name}`:""}</div>
        <div class="hero-figure">${se(M(c.month))}</div>
        <div class="hero-sub">
          <span>≈ ${Fe(Te(c.month))}</span>
          <span>netto, ${c.month.count} ${c.month.count===1?"Rechnung":"Rechnungen"}</span>
          <span>Vormonat ${se(M(c.lastMonth))}</span>
        </div>
      </div>
    </section>

    <${Ju} />

    <div class="stat-row">
      <${Oe} label="Umsatz Quartal" value=${se(M(c.quarter))} sub=${`≈ ${Fe(Te(c.quarter))}`} />
      <${Oe} label="Umsatz Jahr" value=${se(M(c.year))} sub=${`≈ ${Fe(Te(c.year))}`} />
      <${Oe} label="Offene Rechnungen" value=${se(M(c.open))} sub=${`${c.open.count} offen, ≈ ${Fe(Te(c.open))}`} href="#/invoices?status=open" />
      <${Oe} label="Überfällig" value=${se(M(c.overdue))} tone=${c.overdue.count?"bad":""}
        sub=${`${c.overdue.count} überfällig, ≈ ${Fe(Te(c.overdue))}`} href="#/invoices?status=overdue" />
      <${Oe} label="Bezahlt dieses Jahr" value=${se(M(c.paid))} sub=${`${c.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Oe} label="Rechnung im Schnitt" value=${se(M(c.average))} sub=${`≈ ${Fe(Te(c.average))}`} />
      <${Oe} label="Aktive Kunden" value=${String(c.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-crm">
      <${_c} />
      <${ed} />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${As} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${oe()}, nach Rechnungsdatum`} series=${k} table=${G}>
          <${Ts} groups=${R} series=${k} mode="stacked"
            format=${N=>se(N)} axisFormat=${N=>Ya(N,oe())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${J} title="Zu erledigen" class="dash-side">
        ${d.length+u.length+m.length+g.length+$.length+h.length+f.length+C.length===0?l`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`:l`<ul class="todo">
            ${d.slice(0,5).map(N=>l`<li key=${N.inv.id}>
              <a href=${`#/invoices/${N.inv.id}`}>
                <span class="todo-icon tone-bad"><${W} name="bad" /></span>
                <span class="todo-text"><strong>${N.inv.number}</strong> ${Ve(N.inv)}
                  <span class="cell-sub">seit ${N.overdueDays} ${N.overdueDays===1?"Tag":"Tagen"} überfällig${Bs(N.inv,N.overdueDays)?`, ${(Dt.find(A=>A.id===Bs(N.inv,N.overdueDays))||{}).label} fällig`:""}</span></span>
                <span class="todo-amount">${j(N.openCents,N.inv.currency)}</span>
              </a>
            </li>`)}
            ${d.length>5&&l`<li><a href="#/invoices?status=overdue" class="todo-more">${d.length-5} weitere überfällige Rechnungen</a></li>`}
            ${u.slice(0,3).map(N=>l`<li key=${N.inv.id}>
              <a href=${`#/invoices/${N.inv.id}`}>
                <span class="todo-icon tone-warn"><${W} name="clock" /></span>
                <span class="todo-text"><strong>${N.inv.number}</strong> ${Ve(N.inv)}
                  <span class="cell-sub">fällig am ${F(N.inv.dueDate)}</span></span>
                <span class="todo-amount">${j(N.openCents,N.inv.currency)}</span>
              </a>
            </li>`)}
            ${f.slice(0,5).map(N=>l`<li key=${`c-${N.id}`}><a href=${`#/invoices/${N.id}`}>
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${N.number}</strong> ${Ve(N)}
                <span class="cell-sub">Klärung nötig: ${N.clarify.note}</span></span></a></li>`)}
            ${f.length>5&&l`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${W} name="warn" /></span>
              <span class="todo-text"><strong>${f.length-5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${b.slice(0,5).map(N=>l`<li key=${N.id}><a href=${`#/invoices/${N.id}/edit`}>
              <span class="todo-icon tone-warn"><${W} name="edit" /></span>
              <span class="todo-text"><strong>${N.number}</strong> ${Ve(N)}
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
            ${h.length>0&&l`<li><a href="#/quotes">
              <span class="todo-icon"><${W} name="quote" /></span>
              <span class="todo-text"><strong>${h.length} ${h.length===1?"Angebot läuft":"Angebote laufen"}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
            ${C.length>0&&l`<li><a href="#/contracts">
              <span class="todo-icon"><${W} name="file" /></span>
              <span class="todo-text"><strong>${C.length} ${C.length===1?"Vertrag endet":"Verträge enden"}</strong>
                <span class="cell-sub">in den nächsten 30 Tagen oder sind abgelaufen</span></span></a></li>`}
          </ul>`}
      <//>
    </div>


    <div class="dash-lists">
      <${J} title="Umsatz pro Kunde" action=${l`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${un} rows=${$o(i.byCustomer).map(N=>({key:N.id,label:N.name,value:M(N),display:se(M(N)),href:`#/customers/${N.id}`}))} />
      <//>
      <${J} title="Umsatz pro Leistung" action=${l`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${un} rows=${$o(i.byService).map(N=>({key:N.key,label:N.name,value:M(N),display:se(M(N))}))} />
      <//>
      ${!t&&l`<${J} title="Umsatz pro Unternehmen" action=${l`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${un} rows=${$o(i.byCompany).map(N=>({key:N.id,label:N.name,value:M(N),display:se(M(N)),color:Ns(N.color)}))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${oe()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `}var bo=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>["issued","sent","partial","overdue"].includes(e)},{id:"overdue",label:"Überfällig",test:e=>e==="overdue"},{id:"paid",label:"Bezahlt",test:e=>e==="paid"},{id:"void",label:"Storniert und Gutschriften",test:e=>["cancelled","credited","credit_note"].includes(e)},{id:"clarify",label:"Klärung nötig",test:(e,t)=>!!t.clarify&&e!=="draft"}];function ud({params:e}){ge();let[t,n]=D(""),[a,s]=D(e&&bo.some(h=>h.id===e.status)?e.status:"all"),[i,r]=D("all"),[o,c]=D(null),p=!de(),d=V(),u=Se(()=>v.invoices.filter(Ke).map(h=>({inv:h,status:bi(h)})),[v.version,v.settings.activeCompany]),m=yt(i,d),g=u.filter(h=>i==="all"||tn(h.inv.issueDate,m)),$=g.filter(h=>bo.find(C=>C.id===a).test(h.status,h.inv)).filter(h=>Ne(t,h.inv.number,Ve(h.inv),(w("companies",h.inv.companyId)||{}).name,h.inv.totals?(h.inv.totals.totalCents/100).toFixed(2):"",h.inv.totals?(h.inv.totals.totalCents/100).toFixed(2).replace(".",","):"",(h.inv.items||[]).map(C=>C.name).join(" "))),b=$.reduce((h,C)=>{if(C.status==="draft"||C.status==="cancelled")return h;let S=C.inv.totals?C.inv.totals.totalCents:0;return h.total+=ct(S,C.inv.currency,C.inv.fx)||0,h.open+=ct(Sa(C.inv),C.inv.currency,C.inv.fx)||0,h},{total:0,open:0}),y=[{key:"number",label:"Nummer",class:"nw",sort:h=>h.inv.number||"",render:h=>l`<span class="cell-main">${h.inv.number||"Entwurf"}</span>`},{key:"customer",label:"Kunde",sort:h=>Ve(h.inv),render:h=>Ve(h.inv)},...p?[{key:"company",label:"Unternehmen",sort:h=>(w("companies",h.inv.companyId)||{}).name||"",render:h=>l`<${Pe} id=${h.inv.companyId} />`}]:[],{key:"date",label:"Datum",sort:h=>h.inv.issueDate,render:h=>F(h.inv.issueDate)},{key:"due",label:"Fällig",sort:h=>h.inv.dueDate||"",render:h=>h.status==="overdue"?l`<span class="tone-bad">${F(h.inv.dueDate)}</span><div class="cell-sub">seit ${gn(h.inv.dueDate,d)} Tagen</div>`:F(h.inv.dueDate)},{key:"total",label:"Betrag",align:"right",sort:h=>ct(h.inv.totals?h.inv.totals.totalCents:0,h.inv.currency,h.inv.fx)||0,render:h=>l`<${Pt} doc=${h.inv} />`},{key:"open",label:"Offen",align:"right",sort:h=>ct(Sa(h.inv),h.inv.currency,h.inv.fx)||0,render:h=>{let C=Sa(h.inv);return C?j(C,h.inv.currency):l`<span class="muted-text">–</span>`}},{key:"status",label:"Status",sort:h=>h.status,render:h=>l`<${Sn} inv=${h.inv} />`},...a==="overdue"?[{key:"reminder",label:"Erinnerung",render:h=>{let C=od(h.inv.id),S=Bs(h.inv,gn(h.inv.dueDate,d)),k=R=>(Dt.find(G=>G.id===R)||{}).label||"";return l`<${E} small variant=${S?"primary":"default"} icon="clock" onClick=${()=>c(h.inv)}>${S?k(S):"Erinnern"}<//>
          <span class="cell-sub nw">${C?`Zuletzt: ${k(C.level)}, ${F(C.date)}`:"Noch keine versendet"}</span>`}}]:[]],f=$.length?[`${$.length} ${$.length===1?"Beleg":"Belege"}`,"",...p?[""]:[],"","",l`<span class="strong">${se(b.total)}</span>`,l`<span class="strong">${se(b.open)}</span>`,l`<span class="muted-text">in ${oe()}</span>`,...a==="overdue"?[""]:[]]:null;return l`
    <${ke} title="Rechnungen">
      <${E} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
    <//>
    ${v.invoices.length>0&&l`<div class="filters">
      <${gt} value=${t} onInput=${n} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${ft} label="Status" value=${a} onChange=${s}
        options=${bo.map(h=>({id:h.id,label:h.label,count:g.filter(C=>h.test(C.status,C.inv)).length})).filter(h=>h.id!=="clarify"||h.count>0||a==="clarify")} />
      <select class="input select filter-select" value=${i} aria-label="Zeitraum" onChange=${h=>r(h.target.value)}>
        ${Rn.filter(h=>h.id!=="custom").map(h=>l`<option value=${h.id}>${h.label}</option>`)}
      </select>
    </div>`}
    <${Xe} columns=${y} rows=${$} rowKey=${h=>h.inv.id} initialSort=${{key:"date",dir:"desc"}} footer=${f}
      rowClass=${h=>h.inv.clarify&&h.status!=="draft"?"row-clarify":""}
      onRowClick=${h=>Y(h.inv.status==="draft"?`/invoices/${h.inv.id}/edit`:`/invoices/${h.inv.id}`)}
      empty=${v.invoices.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`:l`<${pe} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${E} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Erste Rechnung schreiben<//>
          <//>`} />
    ${o&&l`<${Ra} doc=${o} coll="invoices" mode="reminder" onClose=${()=>c(null)} />`}
  `}function yo({inv:e,refund:t,payment:n,onClose:a}){let s=!!n,i=s?n.amountCents<0:!!t,r=s?Qe(e.id).filter(G=>G.id!==n.id):Qe(e.id),o=e.totals?e.totals.totalCents:0,c=i?_e(r):s?Math.max(o-_e(r),0):Sa(e),p=v.settings.paymentMethods||[],[d,u]=D(s?{date:n.date,amountCents:Math.abs(n.amountCents),method:n.method||"",note:n.note||""}:{date:V(),amountCents:c,method:p[0]||"",note:""}),[m,g]=D(!1),[$,b]=D(""),[y,f]=D(!1),h=G=>N=>u(A=>({...A,[G]:N})),C=i?"Erstattung":"Zahlung",S=!i&&!s?c-(Number(d.amountCents)||0):0,k=d.method&&!p.includes(d.method)?[d.method,...p]:p;async function R(){f(!0);let G=S>0&&m?$.trim()||`Differenz von ${j(S,e.currency)} offen (eingegangen: ${j(d.amountCents,e.currency)} am ${F(d.date)}).`:"",N=await _(()=>s?fc(n.id,d):i?$c(e.id,d):as(e.id,{...d,clarify:G}));f(!1),N&&(s?U(`${C} geändert`,"good"):i?U("Erstattung eingetragen","good"):S>0?U(G?"Teilzahlung eingetragen – Klärung vermerkt":"Teilzahlung eingetragen","good"):U("Zahlung eingetragen – Rechnung ist bezahlt","good"),a())}return l`<${Le} title=${`${C} zu ${e.number}${s?" ändern":""}`} onClose=${a} size="sm" onSubmit=${R}
    footer=${l`<${E} onClick=${a}>Abbrechen<//><${E} variant="primary" type="submit" busy=${y}>${s?"Änderung speichern":`${C} eintragen`}<//>`}>
    <p class="dialog-text">${i?`${s?"Höchstens":"Eingegangen und noch nicht erstattet sind"} ${j(c,e.currency)}.`:s?`Höchstens ${j(c,e.currency)} – mehr weist die Rechnung nicht aus.`:`Offen sind ${j(c,e.currency)}.`}</p>
    <div class="form-grid">
      <${Re} class="span-3" label=${`Betrag (${e.currency})`} mode="money" value=${d.amountCents} onChange=${h("amountCents")} min=${0} />
      <${Me} class="span-3" label=${i?"Datum":"Zahlungsdatum"} value=${d.date} onInput=${h("date")} max=${V()} />
      <${ae} class="span-6" label="Zahlungsart" value=${d.method} onChange=${h("method")} options=${k} placeholder="Keine Angabe" />
      <${q} class="span-6" label="Notiz" value=${d.note} onInput=${h("note")} />
    </div>
    ${S>0&&l`<div class="pay-rest">
      <p class="pay-rest-line">Es bleiben <strong>${j(S,e.currency)}</strong> offen.</p>
      <${Ge} label="Differenz muss geklärt werden" checked=${m} onChange=${g}
        hint="Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst." />
      ${m&&l`<${ie} label="Was ist zu klären?" value=${$} onInput=${b} rows=${2}
        placeholder="z. B. Kunde hat Bankgebühren abgezogen – nachfragen" />`}
    </div>`}
  <//>`}async function vo(e){let t=It(e.prev.doc,"invoices"),n=await Ia(fs(t));Je(n,t.fileName.replace(/\.pdf$/,` (Fassung bis ${F(sa(new Date(e.at)))}).pdf`))}function wo({entityId:e}){let[t,n]=D(""),a=v.audit.filter(i=>i.entityId===e).sort((i,r)=>i.at<r.at?1:-1);if(!a.length)return l`<p class="muted-text">Noch keine Einträge.</p>`;let s=async i=>{n(i.id),await _(()=>vo(i)),n("")};return l`<ol class="timeline">
    ${a.map(i=>l`<li key=${i.id}>
      <div class="timeline-what">${i.action}</div>
      <div class="timeline-when">${Ye(i.at)}, ${i.user}</div>
      ${i.entity==="invoices"&&i.prev&&i.prev.doc&&l`<div class="timeline-extra">
        <${E} small icon="download" busy=${t===i.id} onClick=${()=>s(i)}>Bisherige Fassung (PDF)<//>
      </div>`}
    </li>`)}
  </ol>`}function dd({id:e}){ge();let t=w("invoices",e),[n,a]=D(null),[s,i]=D(t&&t.internalNotes||""),[r,o]=D("");if(!t)return l`<${pe} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${E} onClick=${()=>Y("/invoices")}>Zu den Rechnungen<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/invoices/${e}/edit`,{replace:!0}),0),null;let c=bi(t),p=[...Qe(e)].sort((T,X)=>T.date<X.date?-1:1),d=[...yn(e)].sort((T,X)=>T.createdAt<X.createdAt?-1:1),u=_e(p),m=Sa(t),g=t.type==="credit_note",$=It(t,"invoices"),b=t.relatedInvoiceId?w("invoices",t.relatedInvoiceId):null,y=t.creditNoteId?w("invoices",t.creditNoteId):null,f=t.quoteId?w("quotes",t.quoteId):null,h=!g&&m>0,C=!g&&t.status==="credited"&&u>0,S=!g&&["issued","sent"].includes(t.status),k=t.fx?Number(t.fx.usdToEur):null;async function R(){o("pdf"),await _(()=>Vi(t,"invoices")),o("")}async function G(){if(u>0){U("Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.","bad");return}let T=await ue({title:`Rechnung ${t.number} stornieren?`,text:"Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Du kannst das Storno später zurücknehmen.",input:{label:"Grund (intern)",placeholder:"z. B. falscher Betrag",multiline:!1},confirmLabel:"Stornieren",danger:!0});if(T===null)return;await _(async()=>(await di(e,T),!0))&&U("Rechnung storniert","good")}async function N(){if(!await ue({title:`Rechnung ${t.number} zurück in den Entwurf?`,text:`Die Rechnung behält ihre Nummer. Du kannst sie ändern und danach neu erstellen – es wird keine neue Nummer vergeben. Bis dahin zählt sie nicht zum Umsatz und gilt nicht als offen. Die bisherige Fassung bleibt im Verlauf abrufbar.${p.length?` Die eingetragenen Zahlungen (${j(u,t.currency)}) bleiben erhalten und gelten danach wieder.`:""}${t.status==="sent"?" Diese Rechnung ist als versendet markiert: Der Kunde hat die bisherige Fassung. Schick ihm nach dem Ändern die neue.":""}`,confirmLabel:"Zurück in den Entwurf"}))return;await _(()=>pc(e))&&(U(`${t.number} ist wieder ein Entwurf`,"good"),Y(`/invoices/${e}/edit`))}async function A(){if(!await ue({title:`Stornierung von ${t.number} zurücknehmen?`,text:"Die Rechnung gilt wieder wie vor dem Storno: Sie zählt wieder zum Umsatz und ist wieder offen.",confirmLabel:"Stornierung zurücknehmen"}))return;await _(()=>yc(e))&&U("Stornierung zurückgenommen","good")}async function x(){let T=g?t:y,X=g?b:t;if(!T||!await ue({title:`Gutschrift ${T.number} zurücknehmen?`,text:`Die Gutschrift wird gelöscht, ihre Nummer wird wieder frei.${X?` Die Rechnung ${X.number} gilt wieder wie vorher und zählt wieder voll zum Umsatz.`:""} Im Protokoll bleibt der Vorgang mit der Gutschrift stehen.`,confirmLabel:"Gutschrift zurücknehmen",danger:!0}))return;let O=await _(()=>Mr(T.id));O&&(U(`Gutschrift ${O.creditNumber} zurückgenommen`,"good"),g&&Y(O.invoiceId?`/invoices/${O.invoiceId}`:"/invoices",{replace:!0}))}async function B(){await Ti(t)&&Y("/invoices",{replace:!0})}async function I(){let T=await ue({title:t.clarify?"Klärungsvermerk ändern":`Klärung zu ${t.number} vermerken`,text:"Die Rechnung wird gelb mit „Klärung nötig“ markiert, bis du die Klärung abhakst. Der Vermerk ist intern und erscheint nicht auf dem Beleg.",input:{label:"Was ist zu klären?",value:t.clarify?t.clarify.note:"",placeholder:"z. B. Kunde hat 50 $ weniger überwiesen",multiline:!0},confirmLabel:"Vermerk speichern"});if(T===null)return;await _(()=>gc(e,T))&&U("Klärung vermerkt","good")}async function K(){let T=await ue({title:"Klärung erledigt?",text:`Der Vermerk „${t.clarify.note}“ wird entfernt.${m>0?` Offen bleiben ${j(m,t.currency)}, bis eine Zahlung dafür eingetragen ist.`:""}`,input:{label:"Ergebnis (optional, steht im Verlauf)",placeholder:"z. B. Kunde überweist den Rest",multiline:!1},confirmLabel:"Als geklärt abhaken"});if(T===null)return;await _(()=>hc(e,T))&&U("Klärung erledigt","good")}async function P(){let T=await ue({title:`Gutschrift zu ${t.number} erstellen?`,text:`Es entsteht ein eigener Beleg über ${j(-t.totals.totalCents,t.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Du kannst die Gutschrift später zurücknehmen.${u>0?` Zu dieser Rechnung sind bereits ${j(u,t.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.`:""}`,input:{label:"Text auf der Gutschrift (optional)",placeholder:"z. B. Grund der Gutschrift",multiline:!0},confirmLabel:"Gutschrift erstellen",danger:!0});if(T===null)return;let X=await _(()=>mi(e,T));X&&(U(`Gutschrift ${X.number} erstellt`,"good"),Y(`/invoices/${X.id}`))}async function z(T){if(!await ue({title:"Zahlung löschen?",text:`Die Zahlung über ${j(T.amountCents,t.currency)} vom ${F(T.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,confirmLabel:"Zahlung löschen",danger:!0}))return;await _(async()=>(await bc(T.id),!0))&&U("Zahlung gelöscht","good")}async function ee(){await _(async()=>(await ui("invoices",e,s),!0))&&U("Notiz gespeichert","good")}return l`
    <${ke} title=${l`${g?"Gutschrift":"Rechnung"} ${t.number}`} back=${{href:"#/invoices",label:"Rechnungen"}}
      sub=${l`<${Sn} inv=${t} /> <span class="head-meta">${Ve(t)}</span>`}>
      <${E} icon="download" busy=${r==="pdf"} onClick=${R}>PDF<//>
      ${!g&&t.status==="issued"&&l`<${E} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${c==="overdue"&&l`<${E} icon="clock" onClick=${()=>a("reminder")}>Erinnern<//>`}
      ${h&&l`<${E} variant="primary" icon="money" onClick=${()=>a("payment")}>Zahlung eintragen<//>`}
      <${xt} items=${[!g&&t.status==="issued"&&{label:"Als versendet markieren",icon:"check",onClick:()=>_(()=>Yn(e,!0))},!g&&t.status==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},!g&&t.status==="sent"&&{label:"Versand zurücknehmen",icon:"undo",onClick:()=>_(()=>Yn(e,!1))},!g&&m>0&&c!=="overdue"&&{label:"Zahlungserinnerung",icon:"clock",onClick:()=>a("reminder")},S&&{label:"Zurück in den Entwurf",icon:"edit",onClick:N},!g&&{label:t.clarify?"Klärungsvermerk ändern":"Klärung vermerken",icon:"warn",onClick:I},!g&&{label:"Als neue Rechnung kopieren",icon:"copy",onClick:()=>Y(`/invoices/new?copy=${e}`)},t.status==="cancelled"&&{label:"Stornierung zurücknehmen",icon:"undo",onClick:A},(g||t.status==="credited"&&y)&&{label:"Gutschrift zurücknehmen",icon:"undo",danger:g,onClick:x},S&&{label:"Gutschrift erstellen",icon:"undo",danger:!0,onClick:P},S&&{label:"Stornieren",icon:"x",danger:!0,onClick:G},!g&&{label:"Rechnung löschen",icon:"trash",danger:!0,onClick:B}]} />
    <//>

    ${t.clarify&&l`<${xe} tone="warn" action=${l`<div class="notice-actions">
        <${E} small onClick=${I}>Ändern<//>
        <${E} small variant="primary" icon="check" onClick=${K}>Geklärt<//>
      </div>`}>
      <strong>Klärung nötig:</strong> ${t.clarify.note}
      <div class="notice-sub">Vermerkt am ${Ye(t.clarify.at)} · ${m>0?`offen sind ${j(m,t.currency)}`:"kein Betrag mehr offen"}</div>
    <//>`}
    ${t.status==="cancelled"&&l`<${xe} tone="warn" action=${l`<${E} small icon="undo" onClick=${A}>Zurücknehmen<//>`}>
      Diese Rechnung wurde am ${Ye(t.cancelledAt)} storniert${t.cancelReason?` (${t.cancelReason})`:""}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${y&&l`<${xe} tone="info" action=${l`<${E} small onClick=${()=>Y(`/invoices/${y.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${y.number} erstellt.
    <//>`}
    ${b&&l`<${xe} tone="info" action=${l`<${E} small onClick=${()=>Y(`/invoices/${b.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${b.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${Ta} model=${$} />
      </div>
      <aside class="split-side">
        <${J} title="Stand">
          <${kn} rows=${[["Unternehmen",l`<${Pe} id=${t.companyId} />`],["Kunde",l`<a href=${`#/customers/${t.customerId}`}>${Ve(t)}</a>`],["Gesamtbetrag",l`<${Pt} doc=${t} />`],!g&&["Bezahlt",j(u,t.currency)],!g&&["Offen",l`<span class=${c==="overdue"?"tone-bad strong":"strong"}>${j(m,t.currency)}</span>`],!g&&t.dueDate&&["Fällig am",l`${F(t.dueDate)}${c==="overdue"?l` <span class="tone-bad">(seit ${gn(t.dueDate,V())} Tagen)</span>`:""}`],[t.revision?"Neu erstellt":"Erstellt",Ye(t.finalizedAt)],t.revision&&t.firstFinalizedAt&&["Erstmals erstellt",Ye(t.firstFinalizedAt)],t.sentAt&&["Versendet",Ye(t.sentAt)],f&&["Aus Angebot",l`<a href=${`#/quotes/${f.id}`}>${We(f)}</a>`],t.contractId&&w("contracts",t.contractId)&&["Zu Vertrag",l`<a href=${`#/contracts?open=${t.contractId}`}>${w("contracts",t.contractId).title}</a>`]]} />
        <//>

        ${!g&&l`<${J} title="Zahlungen" action=${h?l`<${E} small icon="plus" onClick=${()=>a("payment")}>Zahlung<//>`:C&&l`<${E} small icon="undo" onClick=${()=>a("refund")}>Erstattung<//>`}>
          ${p.length?l`<ul class="plain-list">
                ${p.map(T=>l`<li class="row-between" key=${T.id}>
                  <span><span class="strong">${j(T.amountCents,t.currency)}</span>
                    <span class="cell-sub">${T.amountCents<0?"Erstattung, ":""}${F(T.date)}${T.method?`, ${T.method}`:""}${T.note?` – ${T.note}`:""}</span></span>
                  <span class="row-actions">
                    <${E} variant="ghost" small icon="edit" title=${T.amountCents<0?"Erstattung ändern":"Zahlung ändern"} onClick=${()=>a({edit:T})} />
                    <${E} variant="ghost" small icon="trash" title=${T.amountCents<0?"Erstattung löschen":"Zahlung löschen"} onClick=${()=>z(T)} />
                  </span>
                </li>`)}
              </ul>`:l`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${d.length>0&&l`<${J} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${d.map(T=>l`<li class="row-between" key=${T.id}>
              <span>${(Dt.find(X=>X.id===T.level)||{}).label||"Erinnerung"}</span>
              <span class="muted-text">${F(T.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${J} title="Wechselkurs">
          ${k?l`<p class="strong">1 USD = ${va(k)} EUR</p>
                <p class="field-hint">${t.fx.manual?t.fx.source:`Quelle: ${t.fx.source}`}${t.fx.date?`, Stand ${F(t.fx.date)}`:""}. Mit der Rechnung festgeschrieben.</p>`:l`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${J} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${E} small variant="primary" onClick=${ee}>Notiz speichern<//></div>`}
        <//>

        <${J} title="Verlauf"><${wo} entityId=${e} /><//>
      </aside>
    </div>

    ${n==="payment"&&l`<${yo} inv=${t} onClose=${()=>a(null)} />`}
    ${n==="refund"&&l`<${yo} inv=${t} refund onClose=${()=>a(null)} />`}
    ${n&&n.edit&&l`<${yo} inv=${t} payment=${n.edit} onClose=${()=>a(null)} />`}
    ${n==="send"&&l`<${Ra} doc=${t} coll="invoices" mode="send" onClose=${()=>a(null)} />`}
    ${n==="reminder"&&l`<${Ra} doc=${t} coll="invoices" mode="reminder" onClose=${()=>a(null)} />`}
  `}function rf({quote:e}){return l`<span class="cell-main">${We(e)}</span>${e.source==="upload"&&l` <span class="pdf-tag" title="Hochgeladenes PDF">PDF</span>`}
    ${e.source==="upload"&&e.refNumber&&e.title&&l`<div class="cell-sub">${e.title}</div>`}`}var md=[{id:"all",label:"Alle",test:()=>!0},{id:"draft",label:"Entwürfe",test:e=>e==="draft"},{id:"open",label:"Offen",test:e=>e==="open"||e==="sent"},{id:"accepted",label:"Angenommen",test:e=>e==="accepted"||e==="invoiced"},{id:"closed",label:"Abgelehnt oder abgelaufen",test:e=>e==="declined"||e==="expired"}];function pd(){ge();let[e,t]=D(""),[n,a]=D("all"),[s,i]=D(null),r=!de(),o=V(),c=Se(()=>v.quotes.filter(Ke).map(u=>({quote:u,status:zt(u,o)})),[v.version,v.settings.activeCompany]),p=c.filter(u=>md.find(m=>m.id===n).test(u.status)).filter(u=>Ne(e,u.quote.number,u.quote.refNumber,u.quote.title,Ve(u.quote),(u.quote.items||[]).map(m=>m.name).join(" "))),d=[{key:"number",label:"Nummer",class:"nw",sort:u=>We(u.quote),render:u=>l`<${rf} quote=${u.quote} />`},{key:"customer",label:"Kontakt",sort:u=>Ve(u.quote),render:u=>Ve(u.quote)},...r?[{key:"company",label:"Unternehmen",render:u=>l`<${Pe} id=${u.quote.companyId} />`}]:[],{key:"date",label:"Datum",sort:u=>u.quote.issueDate,render:u=>F(u.quote.issueDate)},{key:"valid",label:"Gültig bis",sort:u=>u.quote.validUntil||"",render:u=>F(u.quote.validUntil)},{key:"total",label:"Betrag",align:"right",sort:u=>ct(u.quote.totals?u.quote.totals.totalCents:0,u.quote.currency,u.quote.fx)||0,render:u=>l`<${Pt} doc=${u.quote} />`},{key:"status",label:"Status",sort:u=>u.status,render:u=>l`<${ls} quote=${u.quote} />`}];return l`
    <${ke} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung. Extern gestaltete Angebote lädst du als PDF hoch.">
      <${E} icon="upload" onClick=${()=>i(ea())}>PDF hochladen<//>
      <${E} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Neues Angebot<//>
    <//>
    ${v.quotes.length>0&&l`<div class="filters">
      <${gt} value=${e} onInput=${t} placeholder="Nummer, Kontakt, Leistung" />
      <${ft} label="Status" value=${n} onChange=${a}
        options=${md.map(u=>({id:u.id,label:u.label,count:c.filter(m=>u.test(m.status)).length}))} />
    </div>`}
    <${Xe} columns=${d} rows=${p} rowKey=${u=>u.quote.id} initialSort=${{key:"date",dir:"desc"}}
      onRowClick=${u=>Y(u.quote.status==="draft"?`/quotes/${u.quote.id}/edit`:`/quotes/${u.quote.id}`)}
      empty=${v.quotes.length?l`<${pe} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`:l`<${pe} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${E} variant="primary" icon="plus" onClick=${()=>Y("/quotes/new")}>Erstes Angebot schreiben<//>
            <${E} icon="upload" onClick=${()=>i(ea())}>PDF hochladen<//>
          <//>`} />
    ${s&&l`<${Ss} quote=${s} onClose=${()=>i(null)} onSaved=${u=>Y(`/quotes/${u.id}`)} />`}
  `}function fd({id:e}){ge();let t=w("quotes",e),[n,a]=D(null),[s,i]=D(t&&t.internalNotes||""),[r,o]=D("");if(!t)return l`<${pe} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${E} onClick=${()=>Y("/quotes")}>Zu den Angeboten<//>
    <//>`;if(t.status==="draft")return setTimeout(()=>Y(`/quotes/${e}/edit`,{replace:!0}),0),null;let c=zt(t,V()),p=t.source==="upload",d=p?null:It(t,"quotes"),u=v.contracts.filter(S=>S.quoteId===e),m=We(t),g=t.invoiceId?w("invoices",t.invoiceId):null,$=["open","sent","expired"].includes(c);async function b(){o("pdf"),await _(()=>p?oo((t.attachmentIds||[])[0]):Vi(t,"quotes")),o("")}async function y(){if(!await ue({title:"Angebot löschen?",text:`„${m}“ wird samt PDF gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Cc(e),!0))&&(U("Angebot gelöscht","good"),Y("/quotes"))}async function f(S,k){await _(async()=>(await Jn(e,S),!0))&&U(k,"good")}async function h(){if(!await ue({title:"In Rechnung umwandeln?",text:p?`Aus dem Angebot „${m}“ entsteht ein Rechnungsentwurf mit dem Angebotsbetrag als Position. Du kannst ihn vor dem Erstellen noch anpassen, z. B. in einzelne Leistungen aufteilen.`:`Aus dem Angebot ${m} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,confirmLabel:"Rechnungsentwurf anlegen"}))return;o("convert");let k=await _(()=>xc(e));o(""),k&&(U("Rechnungsentwurf angelegt","good"),Y(`/invoices/${k.id}/edit`))}async function C(){await _(async()=>(await ui("quotes",e,s),!0))&&U("Notiz gespeichert","good")}return l`
    <${ke} title=${`Angebot ${m}`} back=${{href:"#/quotes",label:"Angebote"}}
      sub=${l`<${ls} quote=${t} />${p?l` <span class="pdf-tag">PDF</span>`:""} <span class="head-meta">${Ve(t)}</span>`}>
      <${E} icon="download" busy=${r==="pdf"} onClick=${b}>PDF<//>
      ${p&&l`<${E} icon="edit" onClick=${()=>a("edit")}>Bearbeiten<//>`}
      ${!p&&c==="open"&&l`<${E} icon="mail" onClick=${()=>a("send")}>Versenden<//>`}
      ${["accepted","invoiced"].includes(c)&&!u.length&&l`<${E} icon="file" onClick=${()=>a({contract:Ds(t)})}>Vertrag anlegen<//>`}
      ${!g&&c!=="declined"&&l`<${E} variant="primary" icon="invoice" busy=${r==="convert"} onClick=${h}>In Rechnung umwandeln<//>`}
      <${xt} items=${[$&&{label:"Als angenommen markieren",icon:"check",onClick:()=>f("accepted","Angebot angenommen")},$&&{label:"Als abgelehnt markieren",icon:"x",onClick:()=>f("declined","Angebot abgelehnt")},p&&c==="open"&&{label:"Als versendet markieren",icon:"send",onClick:()=>f("sent","Als versendet markiert")},!p&&c==="sent"&&{label:"Erneut versenden",icon:"mail",onClick:()=>a("send")},["accepted","declined"].includes(c)&&!g&&{label:"Wieder öffnen",icon:"undo",onClick:()=>f("open","Angebot wieder geöffnet")},u.length>0&&{label:"Weiteren Vertrag anlegen",icon:"file",onClick:()=>a({contract:Ds(t)})},!p&&{label:"Als neues Angebot kopieren",icon:"copy",onClick:()=>Y(`/quotes/new?copy=${e}`)},p&&{label:"Löschen",icon:"trash",danger:!0,disabled:!!g,onClick:y}]} />
    <//>

    ${g&&l`<${xe} tone="info" action=${l`<${E} small onClick=${()=>Y(`/invoices/${g.id}${g.status==="draft"?"/edit":""}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${g.status==="draft"?"einen Rechnungsentwurf":`die Rechnung ${g.number}`}.
    <//>`}
    ${c==="expired"&&l`<${xe} tone="warn">Dieses Angebot ist seit dem ${F(t.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main">${p?l`<div class="doc-upload">${(t.attachmentIds||[])[0]?l`<${ws} attachmentId=${t.attachmentIds[0]} />`:l`<${xe} tone="warn">Zu diesem Angebot ist kein PDF gespeichert.<//>`}</div>`:l`<${Ta} model=${d} />`}</div>
      <aside class="split-side">
        <${J} title="Stand">
          <${kn} rows=${[["Unternehmen",l`<${Pe} id=${t.companyId} />`],["Kontakt",l`<a href=${`#/customers/${t.customerId}`}>${Ve(t)}</a>`],p&&["Bezeichnung",t.title],p&&t.refNumber&&["Nummer im Dokument",t.refNumber],["Angebotssumme",l`<${Pt} doc=${t} />`],["Angebotsdatum",F(t.issueDate)],["Gültig bis",F(t.validUntil)],[p?"Hochgeladen":"Erstellt",Ye(t.finalizedAt)],t.sentAt&&["Versendet",Ye(t.sentAt)],t.decidedAt&&["Entschieden",Ye(t.decidedAt)]]} />
        <//>
        ${u.length>0&&l`<${J} title="Vertrag">
          <ul class="plain-list linked-list">${u.map(S=>l`<li key=${S.id}>
            <button type="button" class="link-btn" onClick=${()=>a({contract:S})}>${S.title}</button>
            <${Mi} contract=${S} /> <span class="muted-text">${xs(S)}</span></li>`)}</ul>
        <//>`}
        <${J} title="Interne Notiz">
          <${ie} value=${s} onInput=${i} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${s!==(t.internalNotes||"")&&l`<div class="panel-actions"><${E} small variant="primary" onClick=${C}>Notiz speichern<//></div>`}
        <//>
        <${J} title="Verlauf"><${wo} entityId=${e} /><//>
      </aside>
    </div>
    ${n==="send"&&l`<${Ra} doc=${t} coll="quotes" mode="send" onClose=${()=>a(null)} />`}
    ${n==="edit"&&l`<${Ss} quote=${t} onClose=${()=>a(null)} />`}
    ${n&&n.contract&&l`<${Cs} key=${n.contract.id} contract=${n.contract} onClose=${()=>a(null)} />`}
  `}function $d(e="year"){let[t,n]=D(e),[a,s]=D({from:`${V().slice(0,4)}-01-01`,to:V()}),i=yt(t,V(),a);return{period:t,setPeriod:n,custom:a,setCustom:s,range:i}}function of(e){let t=Rn.find(n=>n.id===e.period);return e.period==="all"?"Gesamter Zeitraum":`${t?t.label:""}: ${F(e.range.from)} bis ${F(e.range.to)}`}function bd({p:e}){let t=de();return l`<div class="filters">
    <select class="input select filter-select" value=${e.period} aria-label="Zeitraum" onChange=${n=>e.setPeriod(n.target.value)}>
      ${Rn.map(n=>l`<option value=${n.id}>${n.label}</option>`)}
    </select>
    ${e.period==="custom"&&l`
      <input class="input filter-date" type="date" aria-label="Von" value=${e.custom.from} max=${e.custom.to}
        onInput=${n=>$e(n.target.value)&&e.setCustom({...e.custom,from:n.target.value})} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${e.custom.to} min=${e.custom.from}
        onInput=${n=>$e(n.target.value)&&e.setCustom({...e.custom,to:n.target.value})} />`}
    <span class="filter-note">${t?t.name:"Alle Unternehmen"}${e.period!=="all"&&e.period!=="custom"?l`, ${F(e.range.from)} bis ${F(e.range.to)}`:""}</span>
  </div>`}var yd=(e,t)=>t?St(Math.round(e/t*1e3)/10):"–",De=e=>({v:e/100,t:se(e)}),An=e=>({v:e/100,t:Fe(e)}),He=(e,t)=>({v:e/100,t:j(e,t)}),_a=e=>({v:e||"",t:e?F(e):""}),be={align:"right",type:"money"},Tn={align:"right",type:"number"};function vd(){ge();let e=$d("year"),t=V(),n=ht(),a=de(),s=ln(),i=Se(()=>{let u={companyId:n,range:e.range},m=jr(e.range,s,n),g=m.slice(-24);return{summary:su(s,u,t),truncated:m.length>g.length,series:g.length?gs(s,{companyId:n,months:g,range:e.range}):[],byCompany:$s(s,u),byCustomer:hs(s,u),byService:bs(s,u),byCategory:Hr(s,u)}},[v.version,n,e.range.from,e.range.to]),r=i.summary,o=[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],c=i.series.map(u=>({key:u.key,label:ia(u.key),title:Ot(u.key),values:{rev:M(u,"revenue"),exp:M(u,"expense")}})),p={columns:["Monat","Einnahmen","Ausgaben","Gewinn","Zahlungseingänge"],rows:i.series.map(u=>[Ot(u.key),se(M(u,"revenue")),se(M(u,"expense")),se(M(u,"profit")),se(M(u,"payments"))])},d=u=>[...u].sort((m,g)=>M(g)-M(m));return l`
    <${ke} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${oe()}, ${Cn()} als Zweitwert.`}>
      <${E} icon="reports" onClick=${()=>Y("/reports")}>Reports und Export<//>
    <//>
    <${bd} p=${e} />

    <div class="stat-row stat-row-3">
      <${Oe} label="Einnahmen" value=${se(M(r.income))} sub=${`≈ ${Fe(Te(r.income))}, ${r.income.count} Rechnungen`} />
      <${Oe} label="Ausgaben" value=${se(M(r.expenses))} sub=${`≈ ${Fe(Te(r.expenses))}, ${r.expenses.count} Belege`} />
      <${Oe} label="Gewinn" value=${se(M(r.profit))} tone=${M(r.profit)<0?"bad":"good"} sub=${`≈ ${Fe(Te(r.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Oe} label="Zahlungseingänge" value=${se(M(r.payments))} sub=${`≈ ${Fe(Te(r.payments))}, ${r.payments.count} Zahlungen`} />
      <${Oe} label="Offene Forderungen (heute)" value=${se(M(r.receivables))} sub=${`≈ ${Fe(Te(r.receivables))}, ${r.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Oe} label="Steuern (Saldo)" value=${se(M(r.taxBalance))}
        sub=${`berechnet ${se(M(r.taxCollected))}, in Ausgaben ${se(M(r.taxPaid))}`} />
    </div>

    ${i.series.length>0&&l`<${As} title="Einnahmen und Ausgaben je Monat"
      sub=${i.truncated?`Netto in ${oe()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.`:`Netto in ${oe()}`} series=${o} table=${p}>
      <${Ts} groups=${c} series=${o} mode="grouped" format=${u=>se(u)} axisFormat=${u=>Ya(u,oe())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!a&&l`<${J} title="Umsatz pro Unternehmen">
        <${un} rows=${d(i.byCompany).map(u=>({key:u.id,label:u.name,value:M(u),display:se(M(u)),color:Ns(u.color)}))} />
      <//>`}
      <${J} title="Umsatz pro Kunde">
        <${un} rows=${d(i.byCustomer).map(u=>({key:u.id,label:u.name,value:M(u),display:se(M(u)),href:`#/customers/${u.id}`}))} />
      <//>
      <${J} title="Umsatz pro Leistung">
        <${un} rows=${d(i.byService).map(u=>({key:u.key,label:u.name,value:M(u),display:se(M(u))}))} />
      <//>
      <${J} title="Ausgaben nach Kategorie">
        <${un} rows=${d(i.byCategory).map(u=>({key:u.name,label:u.name,value:M(u),display:se(M(u)),color:"var(--series-2)"}))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `}function ko(e,t,n,a,s){let i=nu(e,t,n),r=i.reduce((o,c)=>({c:o.c+M(c),a:o.a+Te(c),tax:o.tax+M(c,"tax"),count:o.count+c.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:s},{label:"Belege",...Tn},{label:`Umsatz netto (${oe()})`,...be},{label:`Umsatz netto (${Cn()})`,...be},{label:`Steuer (${oe()})`,...be}],rows:i.map(o=>[a(o.key),o.count,De(M(o)),An(Te(o)),De(M(o,"tax"))]),totals:["Summe",r.count,De(r.c),An(r.a),De(r.tax)],chart:{series:[{id:"rev",label:"Umsatz",color:"var(--series-1)"}],groups:i.map(o=>({key:o.key,label:n==="month"?ia(o.key):a(o.key),title:a(o.key),values:{rev:M(o)}}))}}}function xo(e,t,n=[]){let a=[...e].sort((i,r)=>M(r)-M(i)),s=a.reduce((i,r)=>({c:i.c+M(r),a:i.a+Te(r)}),{c:0,a:0});return{columns:[{label:t},...n.map(i=>i.col),{label:`Umsatz netto (${oe()})`,...be},{label:`Umsatz netto (${Cn()})`,...be},{label:"Anteil",align:"right"}],rows:a.map(i=>[i.name,...n.map(r=>r.cell(i)),De(M(i)),An(Te(i)),yd(M(i),s.c)]),totals:["Summe",...n.map(()=>""),De(s.c),An(s.a),""]}}function gd(e,t,n,a){let s=Nn(e,{companyId:t.companyId},n);a&&(s=s.filter(o=>o.status==="overdue"));let i=s.reduce((o,c)=>o+M(c,"open"),0),r=eu.map(o=>({...o,value:s.filter(c=>c.bucket===o.id).reduce((c,p)=>c+M(p,"open"),0),count:s.filter(c=>c.bucket===o.id).length}));return{columns:[{label:"Nummer"},{label:"Kunde"},{label:"Unternehmen"},{label:"Rechnungsdatum",type:"date"},{label:"Fällig",type:"date"},{label:"Tage überfällig",...Tn},{label:"Währung"},{label:"Rechnungsbetrag",...be},{label:"Offen",...be},{label:`Offen (${oe()})`,...be}],rows:s.map(o=>[o.inv.number,Ve(o.inv),(w("companies",o.inv.companyId)||{}).name||"",_a(o.inv.issueDate),_a(o.inv.dueDate),o.overdueDays,o.inv.currency,He(o.inv.totals.totalCents,o.inv.currency),He(o.openCents,o.inv.currency),De(M(o,"open"))]),totals:["Summe","","","","","","","","",De(i)],aging:a?null:r,note:"Stichtag heute – unabhängig vom gewählten Zeitraum."}}var Do=[{id:"month",label:"Umsatz nach Monat",build:(e,t)=>ko(e,t,"month",Ot,"Monat")},{id:"quarter",label:"Umsatz nach Quartal",build:(e,t)=>ko(e,t,"quarter",n=>n.replace("-Q",", Quartal "),"Quartal")},{id:"year",label:"Umsatz nach Jahr",build:(e,t)=>ko(e,t,"year",n=>n,"Jahr")},{id:"customer",label:"Umsatz nach Kunde",build:(e,t)=>xo(hs(e,t),"Kunde",[{col:{label:"Rechnungen",...Tn},cell:n=>n.count}])},{id:"company",label:"Umsatz nach Unternehmen",build:(e,t)=>xo($s(e,t),"Unternehmen",[{col:{label:"Rechnungen",...Tn},cell:n=>n.count}])},{id:"service",label:"Umsatz nach Leistung",build:(e,t)=>xo(bs(e,t),"Leistung",[{col:{label:"Kategorie"},cell:n=>n.category||""},{col:{label:"Menge",...Tn},cell:n=>({v:Math.round(n.qty*1e3)/1e3,t:qn(n.qty)})}])},{id:"currency",label:"Umsatz nach Währung (USD und EUR)",build:(e,t)=>{let n=au(e,t);return{columns:[{label:"Rechnungswährung"},{label:"Rechnungen",...Tn},{label:"Netto",...be},{label:"Steuer",...be},{label:"Brutto",...be},{label:"Netto in USD",...be},{label:"Netto in EUR",...be}],rows:n.map(a=>[a.currency,a.count,He(a.netCents,a.currency),He(a.taxCents,a.currency),He(a.totalCents,a.currency),He(a.usd,"USD"),He(a.eur,"EUR")]),totals:["Summe",n.reduce((a,s)=>a+s.count,0),"","","",He(n.reduce((a,s)=>a+s.usd,0),"USD"),He(n.reduce((a,s)=>a+s.eur,0),"EUR")]}}},{id:"open",label:"Offene Forderungen",build:(e,t,n)=>gd(e,t,n,!1)},{id:"overdue",label:"Überfällige Rechnungen",build:(e,t,n)=>gd(e,t,n,!0)},{id:"profit",label:"Gewinnübersicht",build:(e,t)=>{let n=jr(t.range,e,t.companyId),a=n.length?gs(e,{companyId:t.companyId,months:n,range:t.range}):[],s=a.reduce((i,r)=>({rev:i.rev+M(r,"revenue"),exp:i.exp+M(r,"expense"),alt:i.alt+Te(r,"profit")}),{rev:0,exp:0,alt:0});return{columns:[{label:"Monat"},{label:`Einnahmen (${oe()})`,...be},{label:`Ausgaben (${oe()})`,...be},{label:`Gewinn (${oe()})`,...be},{label:`Gewinn (${Cn()})`,...be}],rows:a.map(i=>[Ot(i.key),De(M(i,"revenue")),De(M(i,"expense")),De(M(i,"profit")),An(Te(i,"profit"))]),totals:["Summe",De(s.rev),De(s.exp),De(s.rev-s.exp),An(s.alt)],chart:{mode:"grouped",series:[{id:"rev",label:"Einnahmen",color:"var(--series-1)"},{id:"exp",label:"Ausgaben",color:"var(--series-2)"}],groups:a.slice(-24).map(i=>({key:i.key,label:ia(i.key),title:Ot(i.key),values:{rev:M(i,"revenue"),exp:M(i,"expense")}}))}}}},{id:"costs",label:"Kostenübersicht",build:(e,t)=>{let n=[...Hr(e,t)].sort((s,i)=>M(i)-M(s)),a=n.reduce((s,i)=>({c:s.c+M(i),a:s.a+Te(i),tax:s.tax+M(i,"tax"),count:s.count+i.count}),{c:0,a:0,tax:0,count:0});return{columns:[{label:"Kategorie"},{label:"Belege",...Tn},{label:`Netto (${oe()})`,...be},{label:`Netto (${Cn()})`,...be},{label:`Steuer (${oe()})`,...be},{label:"Anteil",align:"right"}],rows:n.map(s=>[s.name,s.count,De(M(s)),An(Te(s)),De(M(s,"tax")),yd(M(s),a.c)]),totals:["Summe",a.count,De(a.c),An(a.a),De(a.tax),""]}}},{id:"tax",label:"Steuerübersicht",build:(e,t)=>{let n=iu(e,t);return{columns:[{label:"Position"},{label:"Währung"},{label:"Nettobetrag",...be},{label:"Steuer",...be},{label:`Steuer (${oe()})`,...be}],rows:[...n.collected.map(a=>[`Berechnet in Rechnungen, Satz ${St(a.rate)}`,a.currency,He(a.netCents,a.currency),He(a.taxCents,a.currency),De(M(a,"tax"))]),["In Ausgaben enthaltene Steuer",oe(),"","",De(-M(n,"paid"))]],totals:["Saldo","","","",De(M(n,"collected")-M(n,"paid"))],note:"Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung."}}},{id:"invoices",label:"Rechnungsliste",build:(e,t,n)=>{let a=ut(e,t).sort((i,r)=>i.date<r.date?-1:1),s=a.reduce((i,r)=>({net:i.net+M(r,"net"),tax:i.tax+M(r,"tax"),total:i.total+M(r,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Nummer"},{label:"Datum",type:"date"},{label:"Kunde"},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...be},{label:"Steuer",...be},{label:"Brutto",...be},{label:`Netto (${oe()})`,...be},{label:"Kurs USD/EUR",...Tn},{label:"Bezahlt",...be},{label:"Status"}],rows:a.map(i=>{let r=i.inv,o=Qe(r.id),c=Qt(r,o,n);return[r.number,_a(r.issueDate),Ve(r),(w("companies",r.companyId)||{}).name||"",r.currency,He(r.totals.netCents,r.currency),He(r.totals.taxCents,r.currency),He(r.totals.totalCents,r.currency),De(M(i,"net")),r.fx?{v:Number(r.fx.usdToEur),t:qn(r.fx.usdToEur,"de",4)}:"",He(_e(o),r.currency),(Va[c]||{}).label||c]}),totals:["Summe","","","",oe(),De(s.net),De(s.tax),De(s.total),De(s.net),"","",""],note:`Die Summenzeile ist in ${oe()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`}}},{id:"payments",label:"Zahlungseingänge",build:(e,t)=>{let n=Ci(e,t).sort((a,s)=>a.date<s.date?-1:1);return{columns:[{label:"Datum",type:"date"},{label:"Rechnung"},{label:"Kunde"},{label:"Zahlungsart"},{label:"Währung"},{label:"Betrag",...be},{label:`Betrag (${oe()})`,...be}],rows:n.map(a=>[_a(a.date),a.inv.number,Ve(a.inv),a.pay.method||"",a.inv.currency,He(a.pay.amountCents,a.inv.currency),De(M(a))]),totals:["Summe","","","","","",De(n.reduce((a,s)=>a+M(s),0))]}}},{id:"expenses",label:"Ausgabenliste",build:(e,t)=>{let n=Ea(e,t).sort((s,i)=>s.date<i.date?-1:1),a=n.reduce((s,i)=>({net:s.net+M(i,"net"),tax:s.tax+M(i,"tax"),total:s.total+M(i,"total")}),{net:0,tax:0,total:0});return{columns:[{label:"Datum",type:"date"},{label:"Lieferant"},{label:"Kategorie"},{label:"Beschreibung"},{label:"Rechnungsnr."},{label:"Unternehmen"},{label:"Währung"},{label:"Netto",...be},{label:"Steuer",...be},{label:"Gesamt",...be},{label:`Gesamt (${oe()})`,...be},{label:"Bezahlt am",type:"date"},{label:"Zahlungsart"}],rows:n.map(s=>{let i=s.exp;return[_a(i.invoiceDate),i.vendor,i.category,i.description,i.invoiceNumber,(w("companies",i.companyId)||{}).name||"",i.currency,He(i.netCents,i.currency),He(i.taxCents,i.currency),He(i.totalCents,i.currency),De(M(s,"total")),_a(i.paymentDate),i.paymentMethod]}),totals:["Summe","","","","","",oe(),De(a.net),De(a.tax),De(a.total),De(a.total),"",""],note:`Die Summenzeile ist in ${oe()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`}}}],hd=e=>e&&typeof e=="object"?e.t:e==null?"":String(e);function wd({params:e}){ge();let[t,n]=D(e&&e.r&&Do.find(y=>y.id===e.r)?e.r:"month"),a=$d("year"),[s,i]=D(""),r=V(),o=ht(),c=de(),p=ln(),d=Do.find(y=>y.id===t),u=Se(()=>d.build(p,{companyId:o,range:a.range},r),[v.version,t,o,a.range.from,a.range.to,oe()]),m=t==="open"||t==="overdue",g=`${c?c.name:"Alle Unternehmen"}, ${m?`Stichtag ${F(r)}`:of(a)}`,$={title:d.label,subtitle:g,fileName:`${d.label} ${c?c.shortName||c.name:"Alle Unternehmen"} ${r}`,columns:u.columns,rows:u.rows,totals:u.totals};async function b(y){i(y),await _(async()=>{y==="csv"?Ui($):y==="xlsx"?await gu($):await hu($)}),i("")}return l`
    <${ke} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${E} icon="download" busy=${s==="csv"} disabled=${!u.rows.length} onClick=${()=>b("csv")}>CSV<//>
      <${E} icon="download" busy=${s==="xlsx"} disabled=${!u.rows.length} onClick=${()=>b("xlsx")}>Excel<//>
      <${E} icon="download" busy=${s==="pdf"} disabled=${!u.rows.length} onClick=${()=>b("pdf")}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${Do.map(y=>l`<button type="button" class=${`report-link${y.id===t?" is-on":""}`} aria-current=${y.id===t?"true":void 0}
          onClick=${()=>n(y.id)}>${y.label}</button>`)}
      </nav>
      <div class="report-body">
        <${bd} p=${a} />
        ${u.note&&l`<p class="footnote">${u.note}</p>`}
        ${u.aging&&l`<div class="stat-row stat-row-5">
          ${u.aging.map(y=>l`<${Oe} label=${y.label} value=${se(y.value)} sub=${`${y.count} ${y.count===1?"Rechnung":"Rechnungen"}`} tone=${y.id!=="current"&&y.value?"bad":""} />`)}
        </div>`}
        ${u.chart&&u.chart.groups.length>1&&l`<${As} title=${d.label} sub=${`Netto in ${oe()}`} series=${u.chart.series}>
          <${Ts} groups=${u.chart.groups} series=${u.chart.series} mode=${u.chart.mode||"stacked"}
            format=${y=>se(y)} axisFormat=${y=>Ya(y,oe())} ariaLabel=${d.label} />
        <//>`}
        ${u.rows.length?l`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${u.columns.map(y=>l`<th class=${y.align==="right"?"r":""}>${y.label}</th>`)}</tr></thead>
              <tbody>${u.rows.map(y=>l`<tr>${y.map((f,h)=>l`<td class=${u.columns[h].align==="right"?"r":""}>${hd(f)}</td>`)}</tr>`)}</tbody>
              ${u.totals&&l`<tfoot><tr>${u.totals.map((y,f)=>l`<td class=${u.columns[f].align==="right"?"r":""}>${hd(y)}</td>`)}</tr></tfoot>`}
            </table></div>`:l`<${pe} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `}function kd(){ge();let[e,t]=D({}),n=[...v.companies].sort((a,s)=>a.archived===s.archived?a.createdAt<s.createdAt?-1:1:a.archived?1:-1);return ce(()=>{let a=!0;return Promise.all(n.map(s=>ts(s,"invoice",V()).catch(()=>""))).then(s=>{a&&t(Object.fromEntries(n.map((i,r)=>[i.id,s[r]])))}),()=>{a=!1}},[v.version]),l`
    <${ke} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${E} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Neues Unternehmen<//>
    <//>
    ${n.length===0?l`<${pe} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${E} variant="primary" icon="plus" onClick=${()=>Y("/companies/new")}>Unternehmen anlegen<//>
        <//>`:l`<ul class="company-list">
        ${n.map(a=>{let s=[!a.street||!a.city?"Adresse":"",!a.iban&&!a.altBank&&!a.otherPayment?"Zahlungsinformationen":"",a.logoAssetId?"":"Logo"].filter(Boolean);return l`<li key=${a.id}>
            <a class=${`company-card${a.archived?" is-archived":""}`} href=${`#/companies/${a.id}`}>
              <span class="company-swatch" style=${`background:${a.brandColor}`}>
                ${nn(a.logoAssetId)?l`<img src=${nn(a.logoAssetId)} alt="" />`:(a.invoicePrefix||a.name.slice(0,2)).slice(0,3)}
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
  `}function xd({id:e}){ge();let t=e&&e!=="new"?w("companies",e):null,[n,a]=D(()=>t?ve(t):qa()),[s,i]=D(null),[r,o]=D(!1),[c,p]=D(!1),[d,u]=D({}),[m,g]=D(null),$=ye(null),b=V(),y=B=>{a(B),o(!0)},f=B=>I=>y(K=>({...K,[B]:I}));if(ce(()=>(r?Ws(Qs):an(),()=>an()),[r]),ce(()=>{let B=!0;return Promise.all(["invoice","quote","credit"].map(I=>ts(n,I,b).catch(()=>""))).then(([I,K,P])=>{B&&u({invoice:I,quote:K,credit:P})}),()=>{B=!1}},[n.invoicePrefix,n.invoicePattern,n.quotePrefix,n.quotePattern,n.creditPrefix,n.creditPattern,n.numberDigits,v.version]),e&&e!=="new"&&!t)return l`<${pe} icon="company" title="Unternehmen nicht gefunden"><${E} onClick=${()=>Y("/companies")}>Zur Übersicht<//><//>`;let h=t?w("counters",jn(t.id,"invoice",Lt(t,"invoice").pattern,b)):null,C=h?h.last:0,S=s||nn(n.logoAssetId),k={invoice:Yt(n.invoicePattern),quote:Yt(n.quotePattern),credit:Yt(n.creditPattern)};async function R(B){if(!B)return;let I=await _(()=>uu(B));I&&(i(I),o(!0))}async function G(){p(!0);let B=await _(()=>Xa(n,s));p(!1),B&&(i(null),a(ve(B)),o(!1),an(),U("Unternehmen gespeichert","good"),t||vn(`/companies/${B.id}`))}async function N(){if(m==null||!t||!await ue({title:"Nummernkreis anpassen?",text:`Die zuletzt vergebene laufende Nummer für ${b.slice(0,4)} wird auf ${m} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,confirmLabel:"Anpassen"}))return;await _(async()=>(await mc(t,"invoice",b,m),!0))&&(U("Nummernkreis angepasst","good"),g(null))}async function A(){await _(async()=>(await Jl(t.id,!t.archived),!0))&&(U(t.archived?"Unternehmen reaktiviert":"Unternehmen archiviert","good"),a(I=>({...I,archived:!t.archived})))}async function x(){if(!await ue({title:"Unternehmen löschen?",text:`${t.name} wird endgültig gelöscht.`,confirmLabel:"Löschen",danger:!0}))return;await _(async()=>(await Xl(t.id),!0))&&(U("Unternehmen gelöscht","good"),vn("/companies"))}return l`
    <${ke} title=${t?t.name:"Neues Unternehmen"} back=${{href:"#/companies",label:"Unternehmen"}}>
      ${t&&l`<${xt} items=${[{label:t.archived?"Reaktivieren":"Archivieren",icon:"file",onClick:A},{label:"Löschen",icon:"trash",danger:!0,disabled:Nr(t.id),onClick:x}]} />`}
      <${E} variant="primary" icon="check" busy=${c} onClick=${G}>Unternehmen speichern<//>
    <//>
    ${t&&t.archived&&l`<${xe} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${J} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${q} class="span-4" label="Unternehmensname" value=${n.name} onInput=${f("name")} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${q} class="span-2" label="Kurzname" value=${n.shortName} onInput=${f("shortName")} hint="Für den Company Switcher" />
          <${q} class="span-2" label="Rechtsform" value=${n.legalForm} onInput=${f("legalForm")} />
          <${we} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${n.brandColor} onInput=${B=>f("brandColor")(B.target.value)} />
              <span class="mono-num">${n.brandColor}</span>
            </div>
          <//>
          <${we} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${S?l`<img src=${S} alt="Logo-Vorschau" />`:l`<span class="muted-text">Kein Logo</span>`}</div>
              <${E} icon="upload" onClick=${()=>$.current&&$.current.click()}>${S?"Logo ersetzen":"Logo hochladen"}<//>
              ${S&&l`<${E} variant="ghost" icon="trash" onClick=${()=>{i(null),f("logoAssetId")("")}}>Entfernen<//>`}
              <input ref=${$} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${B=>{R(B.target.files[0]),B.target.value=""}} />
            </div>
          <//>
        </div>
      <//>

      <${J} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${q} class="span-6" label="Straße und Hausnummer" value=${n.street} onInput=${f("street")} />
          <${q} class="span-2" label="PLZ" value=${n.zip} onInput=${f("zip")} />
          <${q} class="span-4" label="Ort" value=${n.city} onInput=${f("city")} />
          <${q} class="span-3" label="Bundesland / Region" value=${n.region} onInput=${f("region")} />
          <${q} class="span-3" label="Land" value=${n.country} onInput=${f("country")} />
          <${q} class="span-2" label="Telefon" value=${n.phone} onInput=${f("phone")} />
          <${q} class="span-2" label="E-Mail" type="email" value=${n.email} onInput=${f("email")} />
          <${q} class="span-2" label="Website" value=${n.website} onInput=${f("website")} />
        </div>
      <//>

      <${J} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${q} class="span-3" label="Steuernummer / Tax ID" value=${n.taxId} onInput=${f("taxId")} />
          <${q} class="span-3" label="USt-IdNr. / VAT ID" value=${n.vatId} onInput=${f("vatId")} />
          <${q} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${n.registerInfo} onInput=${f("registerInfo")} />
        </div>
      <//>

      <${J} title="Bank und Zahlung">
        <div class="form-grid">
          <${q} class="span-3" label="Kontoinhaber" value=${n.accountHolder} onInput=${f("accountHolder")} />
          <${q} class="span-3" label="Bank" value=${n.bankName} onInput=${f("bankName")} />
          <${q} class="span-4" label="IBAN" value=${n.iban} onInput=${f("iban")} />
          <${q} class="span-2" label="BIC" value=${n.bic} onInput=${f("bic")} />
          <${ie} class="span-6" label="Weitere Bankdaten" value=${n.altBank} onInput=${f("altBank")} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${ie} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${n.otherPayment} onInput=${f("otherPayment")} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${J} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${q} class="span-2" label="Präfix Rechnungen" value=${n.invoicePrefix} onInput=${f("invoicePrefix")} placeholder="z. B. HL" />
          <${q} class="span-3" label="Muster Rechnungen" value=${n.invoicePattern} onInput=${f("invoicePattern")} error=${k.invoice}
            hint=${d.invoice?`Nächste Rechnung: ${d.invoice}`:""} />
          <${Re} class="span-1" label="Stellen" value=${n.numberDigits} digits=${0} min=${1} max=${8} onChange=${f("numberDigits")} />
          <${q} class="span-2" label="Präfix Angebote" value=${n.quotePrefix} onInput=${f("quotePrefix")} placeholder=${`${n.invoicePrefix||"HL"} A`} />
          <${q} class="span-4" label="Muster Angebote" value=${n.quotePattern} onInput=${f("quotePattern")} error=${k.quote}
            hint=${d.quote?`Nächstes Angebot: ${d.quote}`:""} />
          <${q} class="span-2" label="Präfix Gutschriften" value=${n.creditPrefix} onInput=${f("creditPrefix")} placeholder=${`${n.invoicePrefix||"HL"} GS`} />
          <${q} class="span-4" label="Muster Gutschriften" value=${n.creditPattern} onInput=${f("creditPattern")} error=${k.credit}
            hint=${d.credit?`Nächste Gutschrift: ${d.credit}`:""} />
        </div>
        ${t&&l`<div class="counter-row">
          <${we} label=${`Zuletzt vergebene laufende Rechnungsnummer ${b.slice(0,4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${st} id="counter-last" value=${m??C} digits=${0} min=${0} onChange=${B=>g(B)} />
              <${E} disabled=${m==null||m===C} onClick=${N}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${J} title="Standards für neue Belege">
        <div class="form-grid">
          <${ae} class="span-2" label="Währung" value=${n.currency} onChange=${f("currency")} options=${Ae} />
          <${ae} class="span-2" label="Belegsprache" value=${n.language} onChange=${f("language")} options=${At} />
          <${Re} class="span-2" label="Zahlungsziel" value=${n.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${f("paymentTermDays")} />
          <${Re} class="span-2" label="Standard-Steuersatz" value=${n.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${f("defaultTaxRate")}
            hint="0, wenn du keine Steuer ausweist" />
          <${q} class="span-2" label="Bezeichnung der Steuer" value=${n.taxLabel} onInput=${f("taxLabel")} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${ie} class="span-6" label="Steuerhinweis auf Belegen" value=${n.taxNote} onInput=${f("taxNote")} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${Ge} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${n.showSecondary} onChange=${f("showSecondary")}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${Ge} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${n.showFxNote!==!1} onChange=${f("showFxNote")} /></div>
        </div>
      <//>

      <${J} title="Termine und Meetings">
        <p class="panel-intro">Standard für neue Termine über dieses Unternehmen. Der Link und die Zugangsdaten stehen dann automatisch in der Einladung und in der Kalenderdatei; im einzelnen Termin lässt sich alles ändern.</p>
        <div class="form-grid">
          <${ae} class="span-2" label="Meeting-Dienst" value=${n.meetingProvider||""} onChange=${f("meetingProvider")}
            placeholder="Keiner" options=${la} />
          <${q} class="span-4" label="Meeting-Link" value=${n.meetingUrl||""} onInput=${f("meetingUrl")} placeholder="https://teams.microsoft.com/… oder https://zoom.us/j/…"
            hint="Zum Beispiel dein persönlicher Zoom-Raum oder ein fester Teams-Besprechungslink" />
          <${ie} class="span-6" label="Zugangsdaten" value=${n.meetingDetails||""} onInput=${f("meetingDetails")} rows=${2}
            placeholder="z. B. Meeting-ID 123 456 789, Kenncode 4711, Einwahl +49 …" />
          <${Re} class="span-2" label="Standarddauer" value=${n.meetingDuration||60} digits=${0} min=${5} max=${600} suffix="Min." onChange=${f("meetingDuration")} />
          <${ae} class="span-4" label="Zeitzone für Termine" value=${n.meetingTimeZone||""} onChange=${f("meetingTimeZone")}
            placeholder=${`Zeitzone dieses Geräts (${at()})`} options=${Vs.map(B=>({id:B,label:B.replace(/_/g," ")}))}
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
        <${E} variant="primary" icon="check" busy=${c} onClick=${G}>Unternehmen speichern<//>
      </div>
    </div>
  `}var Dd=["aiApiKey"],Sd=["lastBackupAt","changesSinceBackup"],Cd="bbc-finance-backup";function lf(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n(a.error),a.readAsDataURL(e)})}function cf(e){let t=/^data:([^,]*),/.exec(String(e).slice(0,300));if(!t)throw new Error("Ungültige Datei im Backup");let n=t[1],a=String(e).slice(t[0].length),s=/;base64$/i.test(n),i=n.replace(/;base64$/i,"")||"application/octet-stream";if(s){let r=atob(a),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);return new Blob([o],{type:i})}return new Blob([decodeURIComponent(a)],{type:i})}function Id(e=new Date){let t=n=>String(n).padStart(2,"0");return`bbc-finance-backup-${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}async function So({includeFiles:e=!0}={}){let t={};for(let o of dt)t[o]=await fa(o);let n=await fa("settings"),a={};for(let o of n)Dd.includes(o.key)||Sd.includes(o.key)||(a[o.key]=o.value);let s={format:Cd,schemaVersion:rr,exportedAt:ne(),includesFiles:e,counts:Object.fromEntries(dt.map(o=>[o,t[o].length])),settings:a,data:t},r=[`${JSON.stringify(s).slice(0,-1)},"files":{`];if(e){let o=await fa("blobs");for(let c=0;c<o.length;c++){let p=await lf(o[c].blob);r.push(new Blob([`
${JSON.stringify(o[c].id)}:${JSON.stringify(p)}${c<o.length-1?",":""}`]))}}return r.push(`
}}
`),new Blob(r,{type:"application/json"})}async function Ed(){await Q(async e=>{await e.setting("lastBackupAt",ne()),await e.setting("changesSinceBackup",0)})}async function Nd(e){let t=new Map,n=0,a=(d,u)=>{try{t.set(d,cf(u))}catch{n+=1}},s=null,i="",r=0,o=!1,c=d=>{r+=1;let u=d.trim();if(!u)return;if(r===1&&/"files":\{$/.test(u)){s=JSON.parse(`${u}}}`),o=!0;return}if(!o)throw new SyntaxError("kein Zeilenformat");if(u==="}}")return;let m=JSON.parse(`{${u.replace(/,$/,"")}}`);for(let[g,$]of Object.entries(m))a(g,$)},p=async()=>{let d;try{d=JSON.parse(await e.text())}catch{throw new Error("Die Datei ist kein gültiges JSON.")}if(d&&typeof d=="object"&&d.files&&typeof d.files=="object"){for(let[u,m]of Object.entries(d.files))a(u,m);delete d.files}return d};if(!e.stream||typeof TextDecoderStream>"u")return s=await p(),{json:s,files:t,badFiles:n};try{let d=e.stream().pipeThrough(new TextDecoderStream).getReader();for(;;){let{value:u,done:m}=await d.read();if(m)break;i+=u;let g=i.indexOf(`
`);for(;g>=0;)c(i.slice(0,g)),i=i.slice(g+1),g=i.indexOf(`
`);if(!o&&i.length>64*1024*1024)throw new SyntaxError("kein Zeilenformat")}if(i.trim()&&c(i),!o||!s)throw new SyntaxError("kein Zeilenformat")}catch(d){if(!(d instanceof SyntaxError))throw d;t.clear(),n=0,s=await p()}return{json:s,files:t,badFiles:n}}var dn=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Ma=e=>typeof e=="number"&&Number.isFinite(e);function Co(e,t){if(!dn(e)||e.format!==Cd)throw new Error("Das ist keine Backup-Datei von BBC Finance.");if(!Number.isInteger(e.schemaVersion)||e.schemaVersion>rr)throw new Error("Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.");if(!dn(e.data))throw new Error("Das Backup enthält keine Daten.");let n=(s,i)=>new Error(`Das Backup ist beschädigt (Sammlung „${s}“: ${i}).`);for(let s of dt){let i=e.data[s];if(i==null)continue;if(!Array.isArray(i))throw n(s,"keine Liste");let r=pa(s);for(let o of i)if(!dn(o)||typeof o[r]!="string"||!o[r])throw n(s,"Datensatz ohne Schlüssel")}if(!Array.isArray(e.data.companies)||e.data.companies.length===0)throw new Error("Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.");for(let s of["invoices","quotes"]){let i=new Set;for(let r of e.data[s]||[]){if(!Array.isArray(r.items))throw n(s,"Beleg ohne Positionsliste");if(typeof r.status!="string")throw n(s,"Beleg ohne Status");if(r.number!=null&&typeof r.number!="string")throw n(s,"ungültige Belegnummer");if(r.status!=="draft"){if(!dn(r.totals)||!Ma(r.totals.totalCents)||!Ma(r.totals.netCents)||!Ma(r.totals.taxCents))throw n(s,`Beleg ${r.number||""} ohne Summen`);if(!r.number&&!(s==="quotes"&&r.source==="upload"))throw n(s,"erstellter Beleg ohne Nummer")}if(r.number){if(i.has(r.number))throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);i.add(r.number)}}}for(let s of e.data.payments||[])if(!Ma(s.amountCents)||typeof s.invoiceId!="string")throw n("payments","Zahlung ohne Betrag oder Rechnung");for(let s of e.data.expenses||[])if(![s.netCents,s.taxCents,s.totalCents].every(Ma))throw n("expenses","Ausgabe ohne Beträge");for(let s of e.data.assets||[])if(typeof s.dataUrl!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(s.dataUrl))throw n("assets","ungültiges Logo");let a=Object.fromEntries(dt.map(s=>[s,(e.data[s]||[]).length]));return{exportedAt:typeof e.exportedAt=="string"?e.exportedAt:null,includesFiles:!!e.includesFiles,counts:a,fileCount:t?t.size:dn(e.files)?Object.keys(e.files).length:0}}function uf(e){let t={};if(!dn(e))return t;for(let n of Object.keys(Zt)){if(!Object.hasOwn(e,n)||Dd.includes(n)||Sd.includes(n))continue;let a=Zt[n],s=e[n];if(Array.isArray(a)){let i=typeof a[0]=="number";if(!Array.isArray(s)||!s.every(r=>i?Ma(r):typeof r=="string"))continue;t[n]=s}else dn(a)?dn(s)&&(t[n]=s):typeof s==typeof a&&(t[n]=s)}return t.theme&&!["auto","light","dark"].includes(t.theme)&&delete t.theme,t}async function Td({json:e,files:t,badFiles:n=0}){Co(e,t);let a=v.settings.aiApiKey||"",s=uf(e.settings);return await Pn(Ut,async r=>{for(let o of Ut)await r.clear(o);for(let o of dt)for(let c of e.data[o]||[])await r.put(o,c);for(let[o,c]of t)await r.put("blobs",{id:o,blob:c});for(let[o,c]of Object.entries(s))await r.put("settings",{key:o,value:c});a&&await r.put("settings",{key:"aiApiKey",value:a}),await r.put("settings",{key:"seeded",value:!0}),await r.put("settings",{key:"lastBackupAt",value:typeof e.exportedAt=="string"?e.exportedAt:ne()}),await r.put("settings",{key:"changesSinceBackup",value:0}),await r.put("audit",{id:je(),at:ne(),user:v.settings.userName||"Lokaler Benutzer",action:"Backup eingespielt",entity:"system",entityId:"",label:typeof e.exportedAt=="string"?e.exportedAt:"",prev:null,next:{counts:dn(e.counts)?e.counts:null}})}),await On(),Wa(),{missingFiles:(e.data.attachments||[]).filter(r=>!t.has(r.id)).length,badFiles:n}}async function Ad(){await Pn(Ut,async e=>{for(let t of Ut)await e.clear(t)}),await On(),Wa()}var df="bbc-finance-device",Zi="handles",Io="backupFolder",Eo=()=>typeof window<"u"&&typeof window.showDirectoryPicker=="function"&&window.isSecureContext!==!1;function mf(){return new Promise((e,t)=>{let n=indexedDB.open(df,1);n.onupgradeneeded=()=>{n.result.objectStoreNames.contains(Zi)||n.result.createObjectStore(Zi)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function No(e,t){let n=await mf();try{return await new Promise((a,s)=>{let i=n.transaction(Zi,e),r=t(i.objectStore(Zi));i.oncomplete=()=>a(r&&r.result),i.onerror=()=>s(i.error),i.onabort=()=>s(i.error)})}finally{n.close()}}async function To(){if(!Eo())return null;try{return await No("readonly",e=>e.get(Io))||null}catch{return null}}async function Bd(){let e;try{e=await window.showDirectoryPicker({id:"bbc-finance-backups",mode:"readwrite",startIn:"documents"})}catch(t){if(t&&t.name==="AbortError")return null;throw new Error("Der Ordner konnte nicht gewählt werden. Systemordner wie „Downloads“ oder der Schreibtisch selbst sind teils gesperrt – bitte einen Unterordner wählen.")}return await No("readwrite",t=>t.put(e,Io)),e}async function Rd(){try{await No("readwrite",e=>e.delete(Io))}catch{}}async function pf(e){let t={mode:"readwrite"};return typeof e.queryPermission=="function"&&await e.queryPermission(t)==="granted"?!0:typeof e.requestPermission=="function"?await e.requestPermission(t)==="granted":typeof e.queryPermission!="function"}async function Ud(e,t){let n=await To();if(!n)return{saved:!1,reason:"none"};let a=!1;try{a=await pf(n)}catch{a=!1}if(!a)return{saved:!1,reason:"denied",folder:n.name};let s=await t();try{let r=await(await n.getFileHandle(e,{create:!0})).createWritable();return await r.write(s),await r.close(),{saved:!0,folder:n.name,size:s.size,blob:s}}catch(i){return{saved:!1,reason:"error",folder:n.name,blob:s,message:i&&i.message}}}async function Bo(e=!0){let t=Id(),n=await Ud(t,()=>So({includeFiles:e})),a="";if(!n.saved){let s=n.blob||await So({includeFiles:e});Je(s,t),n.size=s.size,n.reason==="denied"&&(a=`Kein Zugriff auf den Ordner „${n.folder}“ – unter Downloads gespeichert.`),n.reason==="error"&&(a=`Der Ordner „${n.folder}“ war nicht beschreibbar (verschoben oder gelöscht?) – unter Downloads gespeichert.`)}return await Ed(),{size:n.size,folder:n.saved?n.folder:"",note:a}}function Ro(e){if(e){if(e.note){U(e.note,"info",9e3);return}U(e.folder?`Backup im Ordner „${e.folder}“ gespeichert (${Vt(e.size)})`:`Backup gespeichert (${Vt(e.size)})`,"good")}}function ff(){let[e,t]=D(void 0);if(ce(()=>{To().then(s=>t(s?s.name:""))},[]),!Eo())return l`<p class="field-hint">Einen festen Backup-Ordner kann nur Chrome oder Edge ansteuern. In diesem Browser landen Backups im Download-Ordner.</p>`;if(e===void 0)return null;async function n(){let s=await _(()=>Bd());s&&(t(s.name),U(`Backups werden ab jetzt im Ordner „${s.name}“ gespeichert.`,"good"))}async function a(){await Rd(),t(""),U("Backups landen wieder im Download-Ordner.","info")}return l`<div class="backup-folder">
    <div class="backup-folder-info">
      <span class="backup-folder-label">Backup-Ordner</span>
      ${e?l`<strong class="backup-folder-name"><${W} name="file" size=${15} /> ${e}</strong>`:l`<span class="muted-text">Download-Ordner des Browsers</span>`}
    </div>
    <div class="button-row">
      <${E} small icon="file" onClick=${n}>${e?"Anderen Ordner wählen":"Ordner wählen"}<//>
      ${e&&l`<${E} small variant="ghost" onClick=${a}>Wieder Downloads verwenden<//>`}
    </div>
    <p class="field-hint">${e?"Ein Klick auf „Backup“ speichert direkt in diesen Ordner. Nach einem Neustart von Chrome fragt der Browser beim ersten Backup einmal nach der Erlaubnis – „Bei jedem Besuch erlauben“ wählen, dann entfällt auch das.":"Wähle einmal einen Ordner, z. B. „BBC Finance Backups“ in Dokumenten oder in deinem Cloud-Ordner. Danach genügt ein Klick auf „Backup“."}</p>
  </div>`}function gf(){let[e,t]=D(""),[n,a]=D(null),s=ye(null);ce(()=>{bl().then(a)},[v.version]);async function i(c){t(c?"full":"lite");let p=await _(()=>Bo(c));t(""),Ro(p)}async function r(c){c&&(t("restore"),await _(async()=>{let p=await Nd(c),d=Co(p.json,p.files),u=d.counts;if(!await ue({title:"Backup einspielen?",text:`Das Backup vom ${d.exportedAt?Ye(d.exportedAt):"unbekannten Zeitpunkt"} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,list:[`${u.companies} Unternehmen, ${u.customers} Kunden, ${u.services} Leistungen`,`${u.invoices} Rechnungen, ${u.quotes} Angebote, ${u.payments} Zahlungen`,`${u.expenses} Ausgaben, ${d.includesFiles?`${d.fileCount} Dateien (Belege, PDFs)`:"ohne Dateien"}`,...u.contracts?[`${u.contracts} Verträge`]:[],...u.appointments||u.notes||u.todos?[`${u.appointments||0} Termine, ${u.notes||0} Einträge in der Kundendokumentation, ${u.todos||0} To-dos`]:[]],confirmLabel:"Daten ersetzen",danger:!0}))return;let g=await Td(p);U(g.missingFiles?`Backup eingespielt. ${g.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.`:"Backup eingespielt","good",7e3),Y("/")}),t(""))}let o=v.settings;return l`<${J} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${kn} rows=${[["Letztes Backup",o.lastBackupAt?Ye(o.lastBackupAt):"Noch keines"],["Änderungen seitdem",String(o.changesSinceBackup||0)],n&&n.usage!=null&&["Belegter Speicher",`${Vt(n.usage)}${n.quota?` von ${Vt(n.quota)} verfügbar`:""}`]]} />
    <div class="button-row">
      <${E} variant="primary" icon="download" busy=${e==="full"} disabled=${!!e} onClick=${()=>i(!0)}>Backup herunterladen<//>
      <${E} icon="download" busy=${e==="lite"} disabled=${!!e} onClick=${()=>i(!1)}>Ohne Dateien<//>
      <${E} icon="upload" busy=${e==="restore"} disabled=${!!e} onClick=${()=>s.current&&s.current.click()}>Backup einspielen<//>
      <input ref=${s} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${c=>{r(c.target.files[0]),c.target.value=""}} />
    </div>
    <${ff} />
    <${Ge} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${o.warnOnClose!==!1}
      onChange=${c=>_(()=>ot("warnOnClose",c))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`}function hf(){let e=v.settings,[t,n]=D(e.aiApiKey||""),[a,s]=D(e.aiModel||Zt.aiModel),[i,r]=D(!1),[o,c]=D(""),p=t!==(e.aiApiKey||"")||a!==(e.aiModel||"");async function d(){c("save");let m=await _(async()=>(await El({aiApiKey:t.trim(),aiModel:a.trim()||Zt.aiModel}),!0));c(""),m&&U("KI-Einstellungen gespeichert","good")}async function u(){c("test");let m=await _(()=>Su({apiKey:t.trim(),model:a.trim()}));c(""),m&&U("Verbindung steht – der API-Key funktioniert.","good")}return l`<${J} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${we} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${i?"text":"password"} autocomplete="off" spellcheck="false" value=${t}
            placeholder="sk-ant-…" onInput=${m=>n(m.target.value)} />
          <${E} onClick=${()=>r(!i)}>${i?"Verbergen":"Zeigen"}<//>
        </div>
      <//>
      <${we} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${a} onInput=${m=>s(m.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${E} variant="primary" busy=${o==="save"} disabled=${!p} onClick=${d}>Speichern<//>
      <${E} busy=${o==="test"} disabled=${!t.trim()} onClick=${u}>Verbindung testen<//>
      ${e.aiApiKey&&l`<${E} variant="ghost" icon="trash" onClick=${async()=>{n(""),await _(()=>ot("aiApiKey","")),U("API-Key entfernt","good")}}>Key entfernen<//>`}
    </div>
    <${Ge} label="Belegfotos beim Hochladen verkleinern" checked=${e.shrinkImages!==!1}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${m=>_(()=>ot("shrinkImages",m))} />
  <//>`}function Ao({label:e,settingKey:t,hint:n}){let a=(Array.isArray(v.settings[t])?v.settings[t]:[]).join(`
`),[s,i]=D(a);ce(()=>{i(a)},[a]);async function r(){let o=[...new Set(s.split(`
`).map(p=>p.trim()).filter(Boolean))];await _(async()=>(await ot(t,o),!0))&&U("Liste gespeichert","good")}return l`<div class="span-2">
    <${ie} label=${e} value=${s} onInput=${i} rows=${8} hint=${n} />
    ${s!==a&&l`<${E} small variant="primary" onClick=${r}>Speichern<//>`}
  </div>`}function $f(){let e=v.settings,[t,n]=D("de"),[a,s]=D("invoice"),i=/^r\d$/.test(a),r=a==="appointment",o=i?Number(a.slice(1)):0,c=r?(e.appointmentTemplates||{})[t]||{subject:"",body:""}:i?((e.reminderTemplates||{})[t]||{})[o]||{subject:"",body:""}:((e.emailTemplates||{})[t]||{})[a]||{subject:"",body:""},[p,d]=D(c.subject),[u,m]=D(c.body);ce(()=>{d(c.subject),m(c.body)},[t,a,v.version]);let g=p!==c.subject||u!==c.body,$=e.reminderDays||[7,14,21];async function b(){await _(async()=>{if(r){let f=JSON.parse(JSON.stringify(e.appointmentTemplates||{}));f[t]={subject:p,body:u},await ot("appointmentTemplates",f)}else if(i){let f=JSON.parse(JSON.stringify(e.reminderTemplates||{}));f[t]={...f[t]||{},[o]:{subject:p,body:u}},await ot("reminderTemplates",f)}else{let f=JSON.parse(JSON.stringify(e.emailTemplates||{}));f[t]={...f[t]||{},[a]:{subject:p,body:u}},await ot("emailTemplates",f)}return!0})&&U("Vorlage gespeichert","good")}return l`<${J} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${we} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${Dt.map((y,f)=>l`<label class="mini-field">
            <span>${y.label}</span>
            <${st} value=${$[f]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${y.label}: Tage nach Fälligkeit`}
              onChange=${h=>{let C=[...$];C[f]=h,_(()=>ot("reminderDays",C))}} />
          </label>`)}
        </div>
      <//>
      <${ae} class="span-4" label="Vorlage" value=${a} onChange=${s} options=${[{id:"invoice",label:"Rechnung versenden"},{id:"quote",label:"Angebot versenden"},...Dt.map(y=>({id:`r${y.id}`,label:y.label})),{id:"appointment",label:"Termineinladung"}]} />
      <${we} class="span-2" label="Sprache">
        <${wt} label="Sprache der Vorlage" value=${t} onChange=${n} options=${[{id:"de",label:"Deutsch"},{id:"en",label:"Englisch"}]} />
      <//>
      ${r&&l`<p class="span-6 field-hint">Platzhalter für Termine: {CONTACT}, {CUSTOMER}, {TITLE}, {DATE}, {TIME}, {END}, {TIMEZONE},
        {MEETING} (Link und Zugangsdaten bzw. Ort – je nach Art des Termins), {LINK}, {ACCESS}, {PROVIDER}, {LOCATION}, {AGENDA}, {SENDER}, {COMPANY}.</p>`}
      <${q} class="span-6" label="Betreff" value=${p} onInput=${d} />
      <${ie} class="span-6" label="Text" value=${u} onInput=${m} rows=${9} />
    </div>
    ${g&&l`<div class="button-row"><${E} variant="primary" onClick=${b}>Vorlage speichern<//></div>`}
  <//>`}function bf(){let[e,t]=D(""),n=v.customers.length||v.invoices.length||v.expenses.length||v.services.length;async function a(){t("demo");let r=await _(async()=>(await qi(),!0));t(""),r&&(U("Beispieldaten geladen","good"),Y("/"))}async function s(){if(!await ue({title:"Alle Kunden, Leistungen und Belege löschen?",text:"Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Verträge, hochgeladene PDFs, Termine, Kundendokumentation, To-dos, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.",confirmLabel:"Löschen",danger:!0}))return;t("clear");let o=await _(async()=>(await ld(),!0));t(""),o&&(U("Daten gelöscht","good"),Y("/"))}async function i(){let r=await ue({title:"Wirklich alles löschen?",text:"Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.",input:{label:"Zum Bestätigen LÖSCHEN eintippen",placeholder:"LÖSCHEN"},confirmLabel:"Alles löschen",danger:!0});if(r===null)return;if(String(r).trim().toUpperCase()!=="LÖSCHEN"){U("Nicht gelöscht – die Bestätigung stimmt nicht.","info");return}t("wipe");let o=await _(async()=>(await Ad(),await go(),!0));t(""),o&&(U("Alle Daten gelöscht","good"),Y("/"))}return l`<${J} title="Daten">
    ${v.settings.demoLoaded&&l`<${xe} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${E} icon="sparkle" busy=${e==="demo"} disabled=${!!n||!!e} onClick=${a}
        title=${n?"Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind":""}>Beispieldaten laden<//>
      <${E} icon="trash" busy=${e==="clear"} disabled=${!n||!!e} onClick=${s}>Kunden, Leistungen und Belege löschen<//>
      <${E} variant="danger" icon="trash" busy=${e==="wipe"} disabled=${!!e} onClick=${i}>Alles löschen<//>
    </div>
  <//>`}var yf=[["Anmeldung, Benutzerrollen, Steuerberater-Zugang","Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten."],["Gemeinsame Daten auf mehreren Geräten","Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei."],["E-Mail-Versand aus dem Tool, automatische Erinnerungen","Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm."],["Automatisches Anlegen wiederkehrender Rechnungen","Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an."],["Teilgutschriften, Mahngebühren, Verzugszinsen","Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen."],["Belege in nicht lateinischer Schrift","Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin."],["Stripe, PayPal, Bankabgleich, DATEV-Export","Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit."],["Zeiterfassung, Projekte, Kundenportal","Nicht enthalten."]];function _d(){ge();let e=v.settings,[t,n]=D(e.userName||"");return ce(()=>{n(e.userName||"")},[e.userName]),l`
    <${ke} title="Einstellungen" />
    <div class="form-page">
      <${J} title="Profil und Darstellung">
        <div class="form-grid">
          <${we} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${t} onInput=${a=>n(a.target.value)} />
              <${E} disabled=${t===(e.userName||"")} onClick=${async()=>{await _(async()=>(await ot("userName",t.trim()),!0))&&U("Name gespeichert","good")}}>Speichern<//>
            </div>
          <//>
          <${we} class="span-2" label="Darstellung">
            <${wt} label="Darstellung" value=${e.theme||"auto"} onChange=${a=>_(()=>ot("theme",a))}
              options=${[{id:"auto",label:"System"},{id:"light",label:"Hell"},{id:"dark",label:"Dunkel"}]} />
          <//>
        </div>
      <//>
      <${gf} />
      <${hf} />
      <${J} title="Auswahllisten">
        <div class="form-grid">
          <${Ao} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${Ao} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${Ao} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${$f} />
      <${bf} />
      <${J} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${yf.map(([a,s])=>l`<div><dt>${a}</dt><dd>${s}</dd></div>`)}
        </dl>
      <//>
    </div>
  `}var Uo={invoices:"Rechnungen",quotes:"Angebote",customers:"Kontakte",services:"Leistungen",expenses:"Ausgaben",companies:"Unternehmen",recurring:"Wiederkehrend",appointments:"Termine",notes:"Kundendokumentation",todos:"To-dos",system:"System"},vf={status:"Status",totalCents:"Betrag",amountCents:"Betrag",paidCents:"Bezahlt",number:"Nummer",usdToEur:"Kurs USD/EUR",fxSource:"Kursquelle",fxManual:"Kurs von Hand",reason:"Grund",date:"Datum",method:"Zahlungsart",level:"Stufe",currency:"Währung",name:"Name",company:"Unternehmen",email:"E-Mail",iban:"IBAN",bic:"BIC",last:"Zählerstand",creditNote:"Gutschrift",internalNotes:"Interne Notiz",vendor:"Lieferant",category:"Kategorie",note:"Notiz",netCents:"Netto",taxCents:"Steuer",invoiceDate:"Rechnungsdatum",paymentDate:"Zahlungsdatum",priceCents:"Preis",logoAssetId:"Logo",brandColor:"Markenfarbe",invoicePrefix:"Präfix Rechnungen",invoicePattern:"Muster Rechnungen",defaultTaxRate:"Standard-Steuersatz",paymentTermDays:"Zahlungsziel",accountHolder:"Kontoinhaber",bankName:"Bank",street:"Straße",zip:"PLZ",city:"Ort",country:"Land",taxId:"Steuernummer",vatId:"USt-IdNr.",active:"Aktiv",issueDate:"Belegdatum",customer:"Kunde",paymentsDeleted:"Gelöschte Zahlungen",remindersDeleted:"Gelöschte Erinnerungen",freedNumber:"Nummer wieder frei",result:"Ergebnis",start:"Beginn",end:"Ende",title:"Titel",outcome:"Ergebnis",nextSteps:"Nächste Schritte",todos:"To-dos",due:"Fällig",done:"Erledigt",kind:"Art",text:"Text",timeZone:"Zeitzone",meetingUrl:"Meeting-Link",meetingProvider:"Meeting-Dienst",agenda:"Themen",attendees:"Teilnehmer",contactName:"Gesprächspartner",customerId:"Kunde (ID)",companyId:"Unternehmen (ID)",nextDate:"Nächster Termin",invoiceDraftId:"Rechnungsentwurf",counts:"Umfang"};function Md(e,t){if(t==null||t==="")return"–";if(/Cents$/.test(e)&&typeof t=="number")return(t/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2});if(typeof t=="boolean")return t?"Ja":"Nein";if(e==="logoAssetId")return t?"gesetzt":"–";if(typeof t=="object"){let a=JSON.stringify(t);return a.length>140?`${a.slice(0,140)} …`:a}let n=String(t);return n.length>140?`${n.slice(0,140)} …`:n}function wf({entry:e}){let t=[...new Set([...Object.keys(e.prev||{}),...Object.keys(e.next||{})])].filter(n=>!["id","createdAt","updatedAt","items","totals","snapshot","fx","ai","attachmentIds","doc","related"].includes(n));return t.length?l`<ul class="changes">
    ${t.slice(0,10).map(n=>l`<li key=${n}>
      <span class="changes-key">${vf[n]||n}</span>
      ${e.prev&&n in e.prev&&l`<span class="changes-old">${Md(n,e.prev[n])}</span>`}
      ${e.next&&n in e.next&&l`<span class="changes-new">${Md(n,e.next[n])}</span>`}
    </li>`)}
    ${t.length>10&&l`<li class="muted-text">und ${t.length-10} weitere Felder</li>`}
  </ul>`:l`<span class="muted-text">–</span>`}function zd(){ge();let[e,t]=D(""),[n,a]=D(""),[s,i]=D(200),[r,o]=D(""),p=Se(()=>[...v.audit].sort((u,m)=>u.at<m.at?1:-1),[v.version]).filter(u=>(!n||u.entity===n)&&Ne(e,u.action,u.label,u.user));function d(){Ui({title:"Protokoll",fileName:`Protokoll ${new Date().toISOString().slice(0,10)}`,columns:[{label:"Zeitpunkt"},{label:"Benutzer"},{label:"Vorgang"},{label:"Bereich"},{label:"Betrifft"},{label:"Vorher"},{label:"Nachher"}],rows:p.map(u=>[u.at,u.user,u.action,Uo[u.entity]||u.entity,u.label,u.prev?JSON.stringify(u.prev):"",u.next?JSON.stringify(u.next):""])})}return l`
    <${ke} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${E} icon="download" disabled=${!p.length} onClick=${d}>CSV<//>
    <//>
    <div class="filters">
      <${gt} value=${e} onInput=${t} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${n} aria-label="Bereich" onChange=${u=>a(u.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(Uo).map(([u,m])=>l`<option value=${u}>${m}</option>`)}
      </select>
      <span class="filter-note">${p.length} ${p.length===1?"Eintrag":"Einträge"}</span>
    </div>
    ${p.length===0?l`<${pe} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`:l`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${p.slice(0,s).map(u=>l`<tr key=${u.id}>
              <td class="nw">${Ye(u.at)}</td>
              <td><span class="cell-main">${u.action}</span><div class="cell-sub">${Uo[u.entity]||u.entity}</div></td>
              <td>${u.label}</td>
              <td><${wf} entry=${u} />
                ${u.entity==="invoices"&&u.prev&&u.prev.doc&&l`<${E} small icon="download" busy=${r===u.id}
                  onClick=${async()=>{o(u.id),await _(()=>vo(u)),o("")}}>Fassung als PDF<//>`}</td>
              <td>${u.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${p.length>s&&l`<div class="button-row center"><${E} onClick=${()=>i(s+300)}>Weitere Einträge zeigen<//></div>`}
  `}var kf=[[{path:"/",label:"Dashboard",icon:"dashboard",exact:!0}],[{path:"/invoices",label:"Rechnungen",icon:"invoice"},{path:"/quotes",label:"Angebote",icon:"quote"},{path:"/contracts",label:"Verträge",icon:"file"},{path:"/recurring",label:"Wiederkehrend",icon:"repeat"}],[{path:"/customers",label:"Kontakte",icon:"customers"},{path:"/appointments",label:"Termine",icon:"calendar"},{path:"/todos",label:"To-dos",icon:"check"},{path:"/services",label:"Leistungen",icon:"services"}],[{path:"/expenses",label:"Ausgaben",icon:"expense"},{path:"/finance",label:"Finanzübersicht",icon:"finance"},{path:"/reports",label:"Reports",icon:"reports"}],[{path:"/companies",label:"Unternehmen",icon:"company"},{path:"/settings",label:"Einstellungen",icon:"settings"},{path:"/audit",label:"Protokoll",icon:"log"}]];function xf(){let[e,t]=D(!1),n=ye(null),a=de(),s=re();ce(()=>{if(!e)return;let o=p=>{n.current&&!n.current.contains(p.target)&&t(!1)},c=p=>{p.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",c)}},[e]);let i=o=>{t(!1),_(()=>ot("activeCompany",o))},r=o=>o?l`<span class="sw" style=${`background:${o.brandColor}`}>${nn(o.logoAssetId)?l`<img src=${nn(o.logoAssetId)} alt="" />`:""}</span>`:l`<span class="sw sw-all">${s.slice(0,4).map(c=>l`<i style=${`background:${c.brandColor}`}></i>`)}</span>`;return l`<div class="switcher" ref=${n}>
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
  </div>`}function Gi(e,t){let n=hn(e);if(Number.isNaN(n)||t==null)return!1;let a=t/100;return Math.abs(a-n)<.005||Number.isInteger(n)&&Math.floor(Math.abs(a))===Math.abs(n)}function Df(e){let t=[],n=(s,i)=>{i.length&&t.push({group:s,items:i.slice(0,5)})};n("Kontakte",v.customers.filter(s=>Ne(e,s.number,s.company,s.firstName,s.lastName,s.contact,s.email,s.city)).map(s=>({key:s.id,label:Z(s),sub:[s.number,s.city].filter(Boolean).join(", "),href:`/customers/${s.id}`})));let a=s=>Z(w("customers",s.customerId)||s.snapshot&&s.snapshot.customer);return n("Rechnungen",v.invoices.filter(s=>Ne(e,s.number,a(s),(s.items||[]).map(i=>i.name).join(" "))||Gi(e,s.totals&&s.totals.totalCents)).sort((s,i)=>s.issueDate<i.issueDate?1:-1).map(s=>({key:s.id,label:`${s.number||"Entwurf"}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/invoices/${s.id}/edit`:`/invoices/${s.id}`}))),n("Angebote",v.quotes.filter(s=>Ne(e,s.number,s.refNumber,s.title,a(s),(s.items||[]).map(i=>i.name).join(" "))||Gi(e,s.totals&&s.totals.totalCents)).map(s=>({key:s.id,label:`${We(s)}${s.source==="upload"?" (PDF)":""}, ${a(s)||"ohne Kunde"}`,sub:j(s.totals?s.totals.totalCents:0,s.currency),href:s.status==="draft"?`/quotes/${s.id}/edit`:`/quotes/${s.id}`}))),n("Verträge",v.contracts.filter(s=>Ne(e,s.title,s.refNumber,a(s),s.notes)||Gi(e,s.amountCents)).map(s=>({key:s.id,label:`${s.title}, ${a(s)||"ohne Kontakt"}`,sub:[s.refNumber,s.amountCents!=null?j(s.amountCents,s.currency):""].filter(Boolean).join(", "),href:`/contracts?open=${s.id}`}))),n("Termine",v.appointments.filter(s=>Ne(e,s.title,s.contactName,a(s),s.agenda,s.outcome)).sort((s,i)=>`${s.date}${s.start}`<`${i.date}${i.start}`?1:-1).map(s=>({key:s.id,label:s.title,sub:`${s.date.split("-").reverse().join(".")}, ${s.start} Uhr`,href:`/appointments?open=${s.id}`}))),n("To-dos",v.todos.filter(s=>Ne(e,s.title,s.note,a(s))).sort((s,i)=>Number(s.done)-Number(i.done)).map(s=>({key:s.id,label:`${s.done?"✓ ":""}${s.title}`,sub:[a(s),s.due?`fällig ${s.due.split("-").reverse().join(".")}`:""].filter(Boolean).join(", "),href:s.customerId?`/customers/${s.customerId}`:"/todos"}))),n("Leistungen",v.services.filter(s=>Ne(e,s.name,s.internalName,s.category,s.description)).map(s=>({key:s.id,label:s.name,sub:j(s.priceCents,s.currency),href:"/services"}))),n("Ausgaben",v.expenses.filter(s=>Ne(e,s.vendor,s.description,s.invoiceNumber,s.category)||Gi(e,s.totalCents)).sort((s,i)=>(s.invoiceDate||"")<(i.invoiceDate||"")?1:-1).map(s=>({key:s.id,label:s.vendor||"Beleg",sub:`${s.category||"Ausgabe"}, ${j(s.totalCents,s.currency)}`,href:"/expenses"}))),n("Unternehmen",v.companies.filter(s=>Ne(e,s.name,s.shortName,s.invoicePrefix)).map(s=>({key:s.id,label:s.name,sub:s.invoicePrefix,href:`/companies/${s.id}`}))),t}function Sf(){let[e,t]=D(""),[n,a]=D(!1),[s,i]=D(0),r=ye(null),o=ye(null),c=Se(()=>fn(e).trim().length>=2?Df(e):[],[e,v.version]),p=c.flatMap(g=>g.items);ce(()=>{let g=b=>{(b.metaKey||b.ctrlKey)&&b.key.toLowerCase()==="k"&&(b.preventDefault(),o.current&&o.current.focus())},$=b=>{r.current&&!r.current.contains(b.target)&&a(!1)};return document.addEventListener("keydown",g),document.addEventListener("mousedown",$),()=>{document.removeEventListener("keydown",g),document.removeEventListener("mousedown",$)}},[]);function d(g){a(!1),t(""),o.current&&o.current.blur(),Y(g.href)}function u(g){g.key==="ArrowDown"?(g.preventDefault(),i($=>Math.min($+1,p.length-1))):g.key==="ArrowUp"?(g.preventDefault(),i($=>Math.max($-1,0))):g.key==="Enter"&&p[s]?(g.preventDefault(),d(p[s])):g.key==="Escape"&&(a(!1),g.target.blur())}let m=-1;return l`<div class="gsearch" ref=${r} role="search">
    <${W} name="search" size=${17} />
    <input ref=${o} class="gsearch-input" type="search" placeholder="Suchen: Kontakt, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${e}
      onInput=${g=>{t(g.target.value),a(!0),i(0)}}
      onFocus=${()=>a(!0)} onKeyDown=${u} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Strg K"}</kbd>
    ${n&&fn(e).trim().length>=2&&l`<div class="gsearch-list">
      ${c.length===0&&l`<div class="gsearch-empty">Nichts gefunden für „${e}“</div>`}
      ${c.map(g=>l`<div class="gsearch-group" key=${g.group}>
        <div class="gsearch-head">${g.group}</div>
        ${g.items.map($=>{m+=1;let b=m;return l`<button type="button" key=${$.key} class=${`gsearch-item${b===s?" is-active":""}`}
            onMouseEnter=${()=>i(b)} onMouseDown=${y=>{y.preventDefault(),d($)}}>
            <span>${$.label}</span><span class="cell-sub">${$.sub}</span>
          </button>`})}
      </div>`)}
    </div>`}
  </div>`}function Cf(){let e=v.settings.displayCurrency==="EUR"?"EUR":"USD";return l`<div class="cur-toggle" title="Anzeigewährung für Dashboard, Finanzübersicht und Reports">
    <${wt} label="Anzeigewährung" value=${e} onChange=${t=>_(()=>ot("displayCurrency",t))}
      options=${[{id:"USD",label:"USD"},{id:"EUR",label:"EUR"}]} />
  </div>`}function If(){let[e,t]=D(!1),n=v.settings.changesSinceBackup||0;async function a(){t(!0);let s=await _(()=>Bo(!0));t(!1),Ro(s)}return l`<button type="button" class=${`backup-btn${n?" has-changes":""}`} onClick=${a} disabled=${e}
    title=${n?`${n} ${n===1?"Änderung":"Änderungen"} seit dem letzten Backup`:"Alles gesichert"}>
    <${W} name=${e?"refresh":"download"} class=${e?"spin":""} />
    <span>Backup</span>
    ${n>0&&l`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n>99?"99+":n}</span>`}
  </button>`}function Ef({route:e}){let[t,n,a]=e.parts,s=e.params;return t?t==="invoices"?n?n==="new"?l`<${vs} coll="invoices" id="new" params=${s} />`:a==="edit"?l`<${vs} coll="invoices" id=${n} params=${s} />`:l`<${dd} id=${n} />`:l`<${ud} params=${s} />`:t==="quotes"?n?n==="new"?l`<${vs} coll="quotes" id="new" params=${s} />`:a==="edit"?l`<${vs} coll="quotes" id=${n} params=${s} />`:l`<${fd} id=${n} />`:l`<${pd} />`:t==="customers"?n?l`<${Zu} id=${n} />`:l`<${qu} />`:t==="appointments"?l`<${Xu} params=${s} />`:t==="todos"?l`<${Mc} />`:t==="contracts"?l`<${zu} key=${s.open||"list"} params=${s} />`:t==="services"?l`<${vu} />`:t==="expenses"?l`<${Eu} />`:t==="recurring"?l`<${wu} />`:t==="finance"?l`<${vd} />`:t==="reports"?l`<${wd} params=${s} />`:t==="companies"?n?l`<${xd} id=${n} />`:l`<${kd} />`:t==="settings"?l`<${_d} />`:t==="audit"?l`<${zd} />`:l`<${pe} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${E} onClick=${()=>Y("/")}>Zum Dashboard<//><//>`:l`<${cd} />`}function Nf({route:e}){let[t,n]=il(a=>{console.error(a)});return ce(()=>{t&&n()},[e.raw]),t?l`<${pe} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${t.message||t}`}>
      <${E} onClick=${()=>{n(),Y("/")}}>Zum Dashboard<//>
    <//>`:l`<${Ef} key=${e.raw} route=${e} />`}function Tf(){ge();let e=Bl(),[t,n]=D(!1),a=de(),s=re();ce(()=>{n(!1)},[e.raw]),ce(()=>{let u=v.settings.theme;u==="light"||u==="dark"?document.documentElement.setAttribute("data-theme",u):document.documentElement.removeAttribute("data-theme")},[v.settings.theme]),ce(()=>{let u=m=>{if(_l())return;let g=Al(),$=v.settings.warnOnClose!==!1&&(v.settings.changesSinceBackup||0)>0;(g||$)&&(m.preventDefault(),m.returnValue="")};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[]);let[i,r]=D(!1);ce(()=>{let u=()=>r(!0);return window.addEventListener("bbc-db-replaced",u),()=>window.removeEventListener("bbc-db-replaced",u)},[]);let o=u=>u.exact?e.path===u.path:e.path===u.path||e.path.startsWith(`${u.path}/`),c=v.expenses.filter(u=>u.status==="review").length,p=co().length,d=Uc();return l`
    <div class="brandband" aria-hidden="true">
      ${a?l`<i style=${`background:${a.brandColor}`}></i>`:s.length?s.map(u=>l`<i key=${u.id} style=${`background:${u.brandColor}`}></i>`):l`<i></i>`}
    </div>
    <div class=${`shell${t?" nav-open":""}`} style=${`--brand:${a?a.brandColor:"var(--ink)"}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${kf.map((u,m)=>l`<ul class="nav-group" key=${m}>
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
          <${xf} />
          <${Sf} />
          <div class="topbar-actions">
            <${id} />
            <${Cf} />
            <${If} />
            <${E} variant="primary" icon="plus" onClick=${()=>Y("/invoices/new")}>Neue Rechnung<//>
          </div>
        </header>
        ${i&&l`<div class="demo-strip replaced-strip" role="alert">
          In einem anderen Tab wurde eine neuere Fassung von BBC Finance geöffnet. Bitte diesen Tab neu laden, bevor du weiterarbeitest.
          <button type="button" class="link-btn" onClick=${()=>{ga(),location.reload()}}>Jetzt neu laden</button>
        </div>`}
        ${v.settings.demoLoaded&&l`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${Nf} route=${e} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${()=>n(!1)}></div>
    </div>
    <${Yu} />
    <${sd} />
    <${ql} />
    <${Zl} />
  `}async function Af(){let e=document.getElementById("app"),t=location.protocol==="file:";try{let n,a=new Promise((s,i)=>{n=setTimeout(()=>i(new Error("keine Antwort nach 15 Sekunden")),15e3)});try{await Promise.race([(async()=>{await Dl(),await rd()})(),a])}finally{clearTimeout(n)}}catch(n){console.error(n),e.innerHTML="";let a=document.createElement("div");a.className="boot-error";let s=document.createElement("h1");s.textContent="Das Tool konnte nicht starten";let i=document.createElement("p");if(i.textContent=`Die lokale Datenbank dieses Browsers ist nicht erreichbar (${n&&n.message?n.message:n}). Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.`,a.append(s,i),t){let r=document.createElement("p");r.textContent="Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.",a.append(r)}e.append(a);return}e.innerHTML="",tr(l`<${Tf} />`,e),Bf()}async function Bf(){if(v.settings.appVersion===or)return;let e={invoices:v.invoices.length,customers:v.customers.length,expenses:v.expenses.length,quotes:v.quotes.length},t=e.invoices+e.customers+e.expenses+e.quotes>0;try{await ot("appVersion",or)}catch{}t&&!v.settings.demoLoaded&&U(`BBC Finance wurde aktualisiert. Alle Daten sind übernommen: ${e.invoices} Rechnungen, ${e.quotes} Angebote, ${e.customers} Kontakte, ${e.expenses} Ausgaben. ${fl}`,"good",15e3)}Vl(e=>U(e,"bad",9e3));window.addEventListener("unhandledrejection",e=>{e.reason&&ha(e.reason)});Af();})();
