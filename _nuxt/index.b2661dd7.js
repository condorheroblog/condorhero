const v=["script","style","noscript"],S=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],k=["og:image","og:video","og:audio","og:locale:alternate","video:actor","video:director","video:writer","video:tag","article:author","article:tag","book:tag","book:author","music:album","music:musician"];function C(r){const{props:c,tag:i}=r;if(S.includes(i))return i;if(i==="link"&&c.rel==="canonical")return"canonical";if(c.charset)return"charset";const o=["id"];i==="meta"&&o.push("name","property","http-equiv");for(const s of o)if(typeof c[s]<"u"){const b=String(c[s]);return k.findIndex(e=>b.startsWith(e))!==-1?!1:`${i}:${s}:${b}`}return!1}async function M(r,c={}){const i={shouldRender:!0};if(await r.hooks.callHook("dom:beforeRender",i),!i.shouldRender)return;const o=c.document||window.document,s=r._popSideEffectQueue();r.headEntries().map(e=>e._sde).forEach(e=>{Object.entries(e).forEach(([h,n])=>{s[h]=n})});const b=(e,h)=>{var w;if(e.tag==="title"&&e.children)return o.title=e.children,o.head.querySelector("title");const n=e._d||e._p,m=(t,l)=>{t=`${n}:${t}`,h._sde[t]=l,delete s[t]},g=(t,l=!0)=>{Object.entries(e.props).forEach(([u,f])=>{f=String(f);const p=`attr:${u}`;if(u==="class"){for(const y of f.split(" ")){const T=`${p}:${y}`;l&&m(T,()=>t.classList.remove(y)),t.classList.contains(y)||t.classList.add(y)}return}l&&!u.startsWith("data-h-")&&m(p,()=>t.removeAttribute(u)),t.getAttribute(u)!==f&&t.setAttribute(u,f)}),v.includes(e.tag)&&t.innerHTML!==(e.children||"")&&(t.innerHTML=e.children||"")};if(e.tag==="htmlAttrs"||e.tag==="bodyAttrs"){const t=o[e.tag==="htmlAttrs"?"documentElement":"body"];return g(t),t}let a=o.createElement(e.tag);g(a,!1);let d=r._elMap[n];const E=o[(w=e.tagPosition)!=null&&w.startsWith("body")?"body":"head"];if(!d&&e._hash&&(d=E.querySelector(`${e.tag}[data-h-${e._hash}]`)),!d)for(const t of e.tagPosition==="bodyClose"?[...E.children].reverse():E.children){const l=t.tagName.toLowerCase();if(l!==e.tag)continue;if(C({tag:l,props:t.getAttributeNames().reduce((f,p)=>({...f,[p]:t.getAttribute(p)}),{})})===e._d||t.isEqualNode(a)){d=t;break}}const A=t=>{r._elMap[n]=t,m("el",()=>{t==null||t.remove(),delete r._elMap[n]})};if(d)return A(d),g(d,!1),d;switch(e.tagPosition){case"bodyClose":a=o.body.appendChild(a);break;case"bodyOpen":a=o.body.insertBefore(a,o.body.firstChild);break;case"head":default:a=o.head.appendChild(a);break}return A(a),a};for(const e of await r.resolveTags()){const h=r.headEntries().find(m=>m._i===Number(e._e)),n={$el:null,shouldRender:!0,tag:e,entry:h,queuedSideEffects:s};await r.hooks.callHook("dom:beforeRenderTag",n),n.shouldRender&&(n.$el=b(n.tag,n.entry),await r.hooks.callHook("dom:renderTag",n))}Object.values(s).forEach(e=>e())}let _=null;async function R(r,c={}){function i(){return _=null,M(r,c)}const o=c.delayFn||(s=>setTimeout(s,10));return _=_||new Promise(s=>o(()=>s(i())))}export{R as debouncedRenderDOMHead,_ as domUpdatePromise,M as renderDOMHead};
