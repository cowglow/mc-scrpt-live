import{P as k,Q as b,R as N,K as w,S as B}from"./runtime.BYJ5JQWo.js";import{e as A,f as K}from"./disclose-version.CQFg5J4u.js";import{a as M,n as P,b as R}from"./utils.DxcAWsds.js";function S(s,i){if(i){const o=document.body;s.autofocus=!0,k(()=>{document.activeElement===o&&s.focus()})}}function q(s,i,o,u){var _=s.__attributes??(s.__attributes={});w&&(_[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||_[i]!==(_[i]=o)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[b]=o),o==null?s.removeAttribute(i):typeof o!="string"&&L(s).includes(i)?s[i]=o:s.setAttribute(i,o))}function Q(s,i,o,u,_=!1,l=!1,z=!1){var a=i||{},O=s.tagName==="OPTION";for(var p in i)p in o||(o[p]=null);o.class=o.class?o.class+" "+u:u;var T=L(s),E=s.__attributes??(s.__attributes={}),y=[];for(const r in o){let f=o[r];if(O&&r==="value"&&f==null){s.value=s.__value="",a[r]=f;continue}var d=a[r];if(f!==d){a[r]=f;var g=r[0]+r[1];if(g!=="$$"){if(g==="on"){const n={},v="$$"+r;let t=r.slice(2);var e=R(t);if(M(t)&&(t=t.slice(0,-7),n.capture=!0),!e&&d){if(f!=null)continue;s.removeEventListener(t,a[v],n),a[v]=null}if(f!=null)if(e)s[`__${t}`]=f,K([t]);else{let h=function(I){a[r].call(this,I)};i?a[v]=A(t,s,h,n):y.push([r,f,()=>a[v]=A(t,s,h,n)])}}else if(r==="style"&&f!=null)s.style.cssText=f+"";else if(r==="autofocus")S(s,!!f);else if(r==="__value"||r==="value"&&f!=null)s.value=s[r]=s.__value=f;else{var c=r;_||(c=P(c)),f==null&&!l?(E[r]=null,s.removeAttribute(r)):T.includes(c)&&(l||typeof f!="string")?s[c]=f:typeof f!="function"&&(w&&(c==="src"||c==="href"||c==="srcset")||q(s,c,f))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return i||k(()=>{if(s.isConnected)for(const[r,f,n]of y)a[r]===f&&n()}),a}var $=new Map;function L(s){var i=$.get(s.nodeName);if(i)return i;$.set(s.nodeName,i=[]);for(var o,u=N(s),_=Element.prototype;_!==u;){o=B(u);for(var l in o)o[l].set&&i.push(l);u=N(u)}return i}export{Q as a,q as s};