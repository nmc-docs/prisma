"use strict";(self.webpackChunknextjs=self.webpackChunknextjs||[]).push([[438],{4402:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(4848),t=r(8453);const i={sidebar_position:4},a="Raw Query",c={id:"raw-query",title:"Raw Query",description:"C\xe1ch s\u1eed d\u1ee5ng raw query trong Prisma",source:"@site/docs/raw-query.md",sourceDirName:".",slug:"/raw-query",permalink:"/prisma/raw-query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"@relation()",permalink:"/prisma/relations/@relation"},next:{title:"T\u1ea1o ER Diagram t\u1eeb Prisma Schema",permalink:"/prisma/er-diagram-generator"}},o={},l=[{value:"C\xe1ch s\u1eed d\u1ee5ng raw query trong Prisma",id:"c\xe1ch-s\u1eed-d\u1ee5ng-raw-query-trong-prisma",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"raw-query",children:"Raw Query"})}),"\n",(0,s.jsx)(e.h2,{id:"c\xe1ch-s\u1eed-d\u1ee5ng-raw-query-trong-prisma",children:"C\xe1ch s\u1eed d\u1ee5ng raw query trong Prisma"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Trong file prisma/schema.prisma, ta th\xeam ",(0,s.jsx)(e.code,{children:'previewFeatures = ["typedSql"]'}),":"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"1729526657012",src:r(3721).A+"",width:"1960",height:"1136"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["T\u1ea1o th\u01b0 m\u1ee5c ",(0,s.jsx)(e.strong,{children:"sql"})," b\xean trong th\u01b0 m\u1ee5c ",(0,s.jsx)(e.strong,{children:"prisma"})," v\xe0 th\xeam c\xe1c file ",(0,s.jsx)(e.strong,{children:".sql"})," v\xe0o \u0111\xf3 \u0111\u1ec3 vi\u1ebft raw query, v\xed d\u1ee5:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",metastring:'title="prisma/sql/getUsersByAge.sql"',children:"SELECT\n  *\nFROM\n  `user`\nWHERE\n  age > ?\n  AND age < ?;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ti\u1ebfp theo \u0111\xf3, ta ch\u1ea1y l\u1ec7nh:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"prisma generate --sql --watch\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Cu\u1ed1i c\xf9ng, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng h\xe0m do Prisma t\u1ea1o ra \u0111\u1ec3 th\u1ef1c hi\u1ec7n raw query:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:'import { PrismaClient } from "@prisma/client";\nimport { getUsersByAge } from "@prisma/client/sql";\n\nconst prisma = new PrismaClient();\n\nasync function main() {\n  const data = await prisma.$queryRawTyped(getUsersByAge(18, 30));\n  console.log(data);\n}\n\nmain();\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Trong v\xed d\u1ee5 tr\xean, ta t\u1ea1o file ",(0,s.jsx)(e.strong,{children:"getUsersByAge.sql"})," nh\u1eadn v\xe0o 2 tham s\u1ed1 l\xe0 ",(0,s.jsx)(e.strong,{children:"minAge"})," v\xe0 ",(0,s.jsx)(e.strong,{children:"maxAge"})," th\xf4ng qua d\u1ea5u ",(0,s.jsx)(e.code,{children:"?"})]}),"\n"]})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},3721:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/1729526657012-207197cdbbb26138e093a95180df197c.png"},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);