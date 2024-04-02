(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7121:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c});var r=s(482),n=s(9108),i=s(2563),a=s.n(i),l=s(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,5831)),"C:\\Users\\Hp\\Desktop\\mobiai\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=[],p="/_not-found",x={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8545:(e,t,s)=>{Promise.resolve().then(s.bind(s,9565))},3538:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},6824:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(5344),n=s(6506);let i=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex items-center justify-center text-center",children:(0,r.jsxs)(n.default,{className:"group bg-transparent border-2 border-secondary py-2 px-5 font-rubik rounded-xl transition-all duration-300 text-black font-bold hover:text-gray-50 hover:bg-secondary",href:"/",children:[r.jsx("button",{children:"Get Started"}),r.jsx("span",{className:"inline-block ml-3 font-extrabold transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transform-none",children:"⇒"})]})})})},9565:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5344),n=s(3729),i=s(9111),a=s(1495),l=s(6506),o=s(9410),c=s(6824);let d=()=>{let[e,t]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{window.scrollY>80?d(!0):d(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),r.jsx("section",{className:`bg-transparent z-50 relative  ${e?"sticky--nav":s?" sticky--nav":""}`,children:(0,r.jsxs)("div",{className:"container border-b-2 mx-auto  border-gray-500",children:[(0,r.jsxs)("div",{className:"flex items-center font-medium justify-around",children:[(0,r.jsxs)("div",{className:"z-[1000] p-0 px-3 md:w-auto w-full flex justify-between",children:[r.jsx(l.default,{href:"/home",children:r.jsx(o.default,{src:"/mobilogo.svg",alt:"logo",width:100,height:80,className:"logo md:cursor-pointer",onClick:()=>t(!1)})}),r.jsx("div",{className:"text-3x1 mt-7 md:hidden",onClick:()=>t(!e),children:e?r.jsx(a.nfZ,{}):r.jsx(i.rp2,{})})]}),(0,r.jsxs)("ul",{className:"md:flex hidden text-[#333333] items-center gap-8 font-rubik font-bold ",children:[r.jsx("li",{className:"uppercase hover:text-secondary font-bold transition-all",children:r.jsx(l.default,{href:"/home",className:" py-4 px-1 inline-block",children:"Home"})}),r.jsx("li",{className:"uppercase hover:text-secondary font-bold transition-all py-2 px-1 ",children:r.jsx(l.default,{href:"/usage",className:"py-4 px-1 inline-block",children:"Usage"})}),r.jsx("li",{className:"uppercase hover:text-secondary font-bold transition-all",children:r.jsx(l.default,{href:"/pricing",className:"py-4 px-1 inline-block",children:"Pricing"})}),r.jsx("li",{className:"uppercase hover:text-secondary font-bold transition-all",children:r.jsx(l.default,{href:"/contact",className:"py-4 px-1 inline-block",children:"Contact"})})]}),r.jsx("div",{className:" flex items-center justify-center gap-8 text-center",children:r.jsx("div",{className:"md:block hidden",children:r.jsx(c.Z,{})})})]}),(0,r.jsxs)("ul",{className:`absolute  md:hidden  text-[#333333] bg-white  font-rubik md:uppercase z-[100] font-bold w-full min-h-screen h-full top-0 py-24 pl-4 duration-500 ${e?"right-0":"right-[100%]"}`,children:[r.jsx("li",{className:" hover:text-secondary transition-all",children:r.jsx(l.default,{href:"/home",className:"py-4 mt-3 pl-5 uppercase  px-3 inline-block",onClick:()=>t(!1),children:"Home"})}),r.jsx("li",{className:" hover:text-secondary transition-all",children:r.jsx(l.default,{href:"/usage",className:"py-4 mt-3 pl-5 uppercase  px-3 inline-block",onClick:()=>t(!1),children:"Usage"})}),r.jsx("li",{className:" hover:text-secondary transition-all",children:r.jsx(l.default,{href:"/pricing",className:"py-4 mt-3 pl-5 uppercase  px-3 inline-block",onClick:()=>t(!1),children:"Pricing"})}),r.jsx("li",{className:" hover:text-secondary transition-all",children:r.jsx(l.default,{href:"/contact",className:"py-4 mt-3 pl-5 uppercase  px-3 inline-block",onClick:()=>t(!1),children:"Contact"})}),r.jsx("div",{className:"py-7 pl-3 inline-block",onClick:()=>t(!1),children:r.jsx(c.Z,{})})]})]})})}},5831:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>o});var r=s(5036);s(7272);let n=(0,s(6843).createProxy)(String.raw`C:\Users\Hp\Desktop\mobiai\components\Header.jsx`),{__esModule:i,$$typeof:a}=n,l=n.default,o={title:"Mobi AI | Empowering Healthcare Research with AI-Driven Analytics",description:"MobiAI was created to give researchers a secure, easy-to-use platform for data analysis. We believe this will speed up healthcare research and ultimately lead to better discoveries and improved lives."};function c({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{children:[r.jsx(l,{}),e]})})}},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,170],()=>s(7121));module.exports=r})();