function i(e){const{eventName:n,eventDate:t,eventStartTime:o,eventLocation:s,eventLink:c}=e,r=new Date(t),a=new Date(o);return{name:n,date:new Date(r.getFullYear(),r.getMonth(),r.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()),venue:s,link:c}}function u(e){return e.map(i)}async function g(e,n){try{return await(await n(e)).json()}catch(t){console.log(t)}}const l=e=>{const n=Date.now();return e.filter(({date:t})=>Date.parse(t.toUTCString())<n.valueOf())},D=e=>{const n=Date.now();return e.filter(({date:t})=>Date.parse(t.toUTCString())>n.valueOf())};export{l as a,u as c,g as d,D as g};