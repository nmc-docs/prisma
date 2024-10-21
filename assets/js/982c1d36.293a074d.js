"use strict";(self.webpackChunknextjs=self.webpackChunknextjs||[]).push([[1],{4563:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var c=i(4848),h=i(8453);const t={sidebar_position:4},s="@relation()",r={id:"relations/@relation",title:"@relation()",description:"- Trong Prisma, decorator @relation() \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a m\u1ed1i quan h\u1ec7 gi\u1eefa hai m\xf4 h\xecnh (models) trong c\u01a1 s\u1edf d\u1eef li\u1ec7u. C\xe1c tham s\u1ed1 c\u1ee7a @relation() gi\xfap x\xe1c \u0111\u1ecbnh c\xe1ch c\xe1c b\u1ea3ng trong c\u01a1 s\u1edf d\u1eef li\u1ec7u li\xean k\u1ebft v\u1edbi nhau.",source:"@site/docs/relations/@relation.md",sourceDirName:"relations",slug:"/relations/@relation",permalink:"/prisma/relations/@relation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quan h\u1ec7 n - n",permalink:"/prisma/relations/many-to-many-relation"},next:{title:"Raw Query",permalink:"/prisma/raw-query"}},l={},d=[{value:"fields",id:"fields",level:2},{value:"references",id:"references",level:2},{value:"name",id:"name",level:2},{value:"onDelete / onUpdate",id:"ondelete--onupdate",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,h.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"relation",children:(0,c.jsx)(e.code,{children:"@relation()"})})}),"\n",(0,c.jsx)(e.admonition,{type:"info",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Trong Prisma, decorator ",(0,c.jsx)(e.code,{children:"@relation()"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a m\u1ed1i quan h\u1ec7 gi\u1eefa hai m\xf4 h\xecnh (models) trong c\u01a1 s\u1edf d\u1eef li\u1ec7u. C\xe1c tham s\u1ed1 c\u1ee7a ",(0,c.jsx)(e.code,{children:"@relation()"})," gi\xfap x\xe1c \u0111\u1ecbnh c\xe1ch c\xe1c b\u1ea3ng trong c\u01a1 s\u1edf d\u1eef li\u1ec7u li\xean k\u1ebft v\u1edbi nhau."]}),"\n",(0,c.jsxs)(e.li,{children:["D\u01b0\u1edbi \u0111\xe2y l\xe0 c\xe1c tham s\u1ed1 quan tr\u1ecdng c\u1ee7a ",(0,c.jsx)(e.code,{children:"@relation()"})," v\xe0 c\xe1ch ch\xfang ho\u1ea1t \u0111\u1ed9ng"]}),"\n"]})}),"\n",(0,c.jsx)(e.h2,{id:"fields",children:"fields"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u0110\xe2y l\xe0 m\u1ed9t m\u1ea3ng c\xe1c tr\u01b0\u1eddng (fields) trong m\xf4 h\xecnh hi\u1ec7n t\u1ea1i, \u0111\xf3ng vai tr\xf2 l\xe0 c\xe1c kh\xf3a ngo\u1ea1i (foreign keys) k\u1ebft n\u1ed1i v\u1edbi m\xf4 h\xecnh kh\xe1c."}),"\n",(0,c.jsx)(e.li,{children:"M\u1ed7i tr\u01b0\u1eddng trong m\u1ea3ng n\xe0y ph\u1ea3i t\u01b0\u01a1ng \u1ee9ng v\u1edbi m\u1ed9t c\u1ed9t trong b\u1ea3ng c\u1ee7a m\xf4 h\xecnh, v\xe0 n\xf3 s\u1ebd l\u01b0u gi\xe1 tr\u1ecb kh\xf3a ngo\u1ea1i c\u1ee7a m\xf4 h\xecnh li\xean quan."}),"\n"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729523362286",src:i(3061).A+"",width:"1258",height:"656"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u1ede \u0111\xe2y, ",(0,c.jsx)(e.code,{children:"userId"})," trong m\xf4 h\xecnh ",(0,c.jsx)(e.code,{children:"Post"})," l\xe0 tr\u01b0\u1eddng kh\xf3a ngo\u1ea1i, \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh trong ",(0,c.jsx)(e.code,{children:"fields"}),"."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"references",children:"references"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u0110\xe2y l\xe0 m\u1ea3ng c\xe1c tr\u01b0\u1eddng trong m\xf4 h\xecnh \u0111\u01b0\u1ee3c li\xean k\u1ebft, \u0111\xf3ng vai tr\xf2 l\xe0m kh\xf3a ch\xednh (ho\u1eb7c c\xe1c tr\u01b0\u1eddng duy nh\u1ea5t) m\xe0 kh\xf3a ngo\u1ea1i s\u1ebd tham chi\u1ebfu \u0111\u1ebfn."}),"\n",(0,c.jsxs)(e.li,{children:["C\xe1c tr\u01b0\u1eddng trong ",(0,c.jsx)(e.code,{children:"references"})," ph\u1ea3i l\xe0 c\xe1c c\u1ed9t trong b\u1ea3ng c\u1ee7a m\xf4 h\xecnh \u0111\xedch m\xe0 ",(0,c.jsx)(e.code,{children:"fields"})," \u0111ang tham chi\u1ebfu \u0111\u1ebfn."]}),"\n",(0,c.jsxs)(e.li,{children:["\u1ede v\xed d\u1ee5 tr\xean, tr\u01b0\u1eddng ",(0,c.jsx)(e.code,{children:"id"})," c\u1ee7a m\xf4 h\xecnh ",(0,c.jsx)(e.code,{children:"User"})," \u0111\u01b0\u1ee3c tham chi\u1ebfu t\u1eeb ",(0,c.jsx)(e.code,{children:"Post"})," th\xf4ng qua tr\u01b0\u1eddng ",(0,c.jsx)(e.code,{children:"userId"}),"."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"name",children:"name"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u0110\xe2y l\xe0 t\xean c\u1ee7a m\u1ed1i quan h\u1ec7 v\xe0 gi\xfap \u0111\u1ecbnh danh m\u1ed1i quan h\u1ec7 n\xe0y khi c\xf3 nhi\u1ec1u quan h\u1ec7 c\xf9ng m\u1ed9t ki\u1ec3u gi\u1eefa hai m\xf4 h\xecnh."}),"\n",(0,c.jsx)(e.li,{children:"N\u1ebfu kh\xf4ng ch\u1ec9 \u0111\u1ecbnh, Prisma s\u1ebd t\u1ef1 \u0111\u1ed9ng t\u1ea1o t\xean d\u1ef1a tr\xean c\xe1c t\xean m\xf4 h\xecnh."}),"\n",(0,c.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729523555590",src:i(4083).A+"",width:"1600",height:"616"})}),"\n",(0,c.jsx)(e.h2,{id:"ondelete--onupdate",children:"onDelete / onUpdate"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Tham s\u1ed1 n\xe0y \u0111\u1ecbnh ngh\u0129a h\xe0nh \u0111\u1ed9ng s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n khi m\u1ed9t b\u1ea3n ghi trong m\xf4 h\xecnh tham chi\u1ebfu b\u1ecb x\xf3a ho\u1eb7c \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt"}),"\n",(0,c.jsxs)(e.li,{children:["C\xe1c gi\xe1 tr\u1ecb c\xf3 th\u1ec3 l\xe0:","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"Cascade"}),": Khi b\u1ea3n ghi \u1edf m\xf4 h\xecnh tham chi\u1ebfu b\u1ecb x\xf3a, t\u1ea5t c\u1ea3 c\xe1c b\u1ea3n ghi li\xean quan c\u0169ng s\u1ebd b\u1ecb x\xf3a theo."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"SetNull"}),": Khi b\u1ea3n ghi \u1edf m\xf4 h\xecnh tham chi\u1ebfu b\u1ecb x\xf3a, kh\xf3a ngo\u1ea1i s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1eb7t th\xe0nh ",(0,c.jsx)(e.code,{children:"null"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"Restrict"}),": Ng\u0103n kh\xf4ng cho x\xf3a b\u1ea3n ghi n\u1ebfu c\xf3 b\u1ea3n ghi kh\xe1c tham chi\u1ebfu \u0111\u1ebfn n\xf3."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"NoAction"}),": Kh\xf4ng th\u1ef1c hi\u1ec7n h\xe0nh \u0111\u1ed9ng g\xec."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729523610367",src:i(9441).A+"",width:"1960",height:"656"})}),"\n",(0,c.jsx)(e.p,{children:"\u27a1\ufe0f Trong v\xed d\u1ee5 tr\xean:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Khi m\u1ed9t ",(0,c.jsx)(e.code,{children:"User"})," b\u1ecb x\xf3a, t\u1ea5t c\u1ea3 c\xe1c ",(0,c.jsx)(e.code,{children:"Post"})," li\xean quan c\u0169ng s\u1ebd t\u1ef1 \u0111\u1ed9ng b\u1ecb x\xf3a."]}),"\n",(0,c.jsxs)(e.li,{children:["Khi ",(0,c.jsx)(e.code,{children:"User"})," c\u1eadp nh\u1eadt ",(0,c.jsx)(e.code,{children:"id"}),", t\u1ea5t c\u1ea3 c\xe1c ",(0,c.jsx)(e.code,{children:"Post"})," li\xean quan s\u1ebd t\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt theo ",(0,c.jsx)(e.code,{children:"userId"})," m\u1edbi."]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,h.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},3061:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729523362286-cd0d21e54368683538c5a4248556291b.png"},4083:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729523555590-19a299923db419ff73822f4a1b0639cc.png"},9441:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729523610367-a05d1cc2d69d884be4c19c96e8c86556.png"},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>r});var c=i(6540);const h={},t=c.createContext(h);function s(n){const e=c.useContext(t);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(h):n.components||h:s(n.components),c.createElement(t.Provider,{value:e},n.children)}}}]);