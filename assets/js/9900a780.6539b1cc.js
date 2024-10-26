"use strict";(self.webpackChunknextjs=self.webpackChunknextjs||[]).push([[725],{2869:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>j,frontMatter:()=>t,metadata:()=>h,toc:()=>r});var c=i(4848),d=i(8453);const t={sidebar_position:2},s="\u0110\u1ecbnh ngh\u0129a c\u1ed9t",h={id:"model-definition/column",title:"\u0110\u1ecbnh ngh\u0129a c\u1ed9t",description:"- M\u1ed9t field trong 1 model \u0111\u01b0\u1ee3c h\xecnh th\xe0nh b\u1edfi c\u1ea5u tr\xfac sau:",source:"@site/docs/model-definition/column.md",sourceDirName:"model-definition",slug:"/model-definition/column",permalink:"/prisma/model-definition/column",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0110\u1ecbnh ngh\u0129a model",permalink:"/prisma/model-definition/model"},next:{title:"enum v\xe0 type",permalink:"/prisma/model-definition/enum-type"}},l={},r=[{value:"Field name",id:"field-name",level:2},{value:"Field type",id:"field-type",level:2},{value:"Default type mapping",id:"default-type-mapping",level:3},{value:"Native type mapping",id:"native-type-mapping",level:3},{value:"Field type modifiers",id:"field-type-modifiers",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Field-level Attributes (Thu\u1ed9c t\xednh c\u1ea5p tr\u01b0\u1eddng)",id:"field-level-attributes-thu\u1ed9c-t\xednh-c\u1ea5p-tr\u01b0\u1eddng",level:3},{value:"Model-level Attributes (Thu\u1ed9c t\xednh c\u1ea5p m\xf4 h\xecnh)",id:"model-level-attributes-thu\u1ed9c-t\xednh-c\u1ea5p-m\xf4-h\xecnh",level:3},{value:"Attribute function",id:"attribute-function",level:2}];function x(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\u0111\u1ecbnh-ngh\u0129a-c\u1ed9t",children:"\u0110\u1ecbnh ngh\u0129a c\u1ed9t"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["M\u1ed9t field trong 1 model \u0111\u01b0\u1ee3c h\xecnh th\xe0nh b\u1edfi c\u1ea5u tr\xfac sau:","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"field_name"}),": t\xean c\u1ed9t"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"field_type"}),": ki\u1ec3u d\u1eef li\u1ec7u cho c\u1ed9t"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"field_type_modifiers"}),": l\xe0 c\xe1c k\xfd hi\u1ec7u ho\u1eb7c t\u1eeb kh\xf3a \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh th\xeam c\xe1c thu\u1ed9c t\xednh ho\u1eb7c s\u1eeda \u0111\u1ed5i \u0111\u1eb7c \u0111i\u1ec3m c\u1ee7a m\u1ed9t tr\u01b0\u1eddng (field) trong m\xf4 h\xecnh d\u1eef li\u1ec7u (model)"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"attributes"}),": l\xe0 c\xe1c ch\xfa th\xedch \u0111\u1eb7c bi\u1ec7t \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe1c \u0111\u1ecbnh th\xeam th\xf4ng tin ho\u1eb7c r\xe0ng bu\u1ed9c cho c\xe1c tr\u01b0\u1eddng (fields) v\xe0 m\xf4 h\xecnh (models) trong file ",(0,c.jsx)(e.code,{children:"schema.prisma"}),". Attributes gi\xfap \u0111\u1ecbnh ngh\u0129a c\xe1c quy t\u1eafc \u0111\u1eb7c bi\u1ec7t li\xean quan \u0111\u1ebfn c\xe1ch d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef, truy xu\u1ea5t, v\xe0 quan h\u1ec7 gi\u1eefa c\xe1c b\u1ea3ng (m\xf4 h\xecnh) trong c\u01a1 s\u1edf d\u1eef li\u1ec7u. C\xe1c attributes th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1eb1ng c\xfa ph\xe1p ",(0,c.jsx)(e.code,{children:"@attribute_name"}),", v\xe0 ch\xfang c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng tr\xean c\u1ea3 ",(0,c.jsx)(e.strong,{children:"tr\u01b0\u1eddng"})," l\u1eabn ",(0,c.jsx)(e.strong,{children:"m\xf4 h\xecnh"})," ."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"attribute_function"}),": Th\u01b0\u1eddng n\u1eb1m trong attribute \u0111\u1ec3 t\u1ef1 \u0111\u1ed9ng t\u1ea1o ra gi\xe1 tr\u1ecb."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521048333",src:i(2173).A+"",width:"1044",height:"416"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Trong v\xed d\u1ee5 tr\xean:","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"field_name"}),": ",(0,c.jsx)(e.code,{children:"id"}),", ",(0,c.jsx)(e.code,{children:"email"}),", ",(0,c.jsx)(e.code,{children:"name"}),",..."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"field_type"}),": ",(0,c.jsx)(e.code,{children:"Int"}),", ",(0,c.jsx)(e.code,{children:"String"}),", ",(0,c.jsx)(e.code,{children:"DateTime"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"field_type_modifiers"}),": ",(0,c.jsx)(e.code,{children:"?"})," (\u1edf c\u1ed9t name cho bi\u1ebft c\u1ed9t n\xe0y c\xf3 th\u1ec3 nh\u1eadn gi\xe1 tr\u1ecb ",(0,c.jsx)(e.code,{children:"null"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"attributes"}),": ",(0,c.jsx)(e.code,{children:"@id"})," (ch\u1ec9 \u0111\u1ecbnh \u0111\xe2y l\xe0 kh\xf3a ch\xednh c\u1ee7a entity), ",(0,c.jsx)(e.code,{children:"@default"}),", ",(0,c.jsx)(e.code,{children:"@updatedAt"}),",..."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"attribute_function"}),": ",(0,c.jsx)(e.code,{children:"autoincrement()"})," (ch\u1ec9 \u0111\u1ecbnh kh\xf3a ch\xednh c\xf3 gi\xe1 tr\u1ecb t\u0103ng d\u1ea7n khi th\xeam d\u1eef li\u1ec7u)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"field-name",children:"Field name"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Quy t\u1eafc \u0111\u1eb7t t\xean:","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"B\u1eaft \u0111\u1ea7u b\u1eb1ng ch\u1eef c\xe1i"}),"\n",(0,c.jsx)(e.li,{children:"Ch\u1ec9 ch\u1ee9a c\xe1c k\xed t\u1ef1 ch\u1eef c\xe1i, ch\u1eef s\u1ed1, d\u1ea5u g\u1ea1ch d\u01b0\u1edbi"}),"\n",(0,c.jsx)(e.li,{children:"Tu\xe2n theo quy t\u1eafc \u0111\u1eb7t t\xean camelCase (v\xed d\u1ee5 nh\u01b0 userName, categoryName,...)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"field-type",children:"Field type"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Sau \u0111\xe2y l\xe0 c\xe1c lo\u1ea1i ki\u1ec3u d\u1eef li\u1ec7u m\xe0 Prisma h\u1ed7 tr\u1ee3:","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"String"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"Boolean"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"Int"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"BigInt"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"Float"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"Decimal"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"DateTime"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"Json"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"Bytes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"default-type-mapping",children:"Default type mapping"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Khi ta s\u1eed d\u1ee5ng c\xe1c ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a Prisma b\xean tr\xean, v\u1edbi c\xe1c CSDL, n\xf3 s\u1ebd t\u01b0\u01a1ng \u1ee9ng nh\u01b0 sau:"}),"\n"]}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{}),(0,c.jsx)(e.th,{children:"MySQL"}),(0,c.jsx)(e.th,{children:"PostgreSQL"}),(0,c.jsx)(e.th,{children:"MongoDB"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"String"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"varchar(191)"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"text"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"String"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Boolean"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"TINYINT(1)"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"boolean"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"Bool"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Int"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"INT"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"integer"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"Int"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BigInt"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"BIGINT"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"bigint"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"Long"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Float"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"DOUBLE"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"double precision"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"Double"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Decimal"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"DECIMAL(65,30)"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"decimal(65,30)"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.strong,{children:"Not Supported"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"DateTime"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"DATETIME(3)"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"timestamp(3)"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"Timestamp"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Json"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"JSON"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"jsonb"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"BSON"})})]})]})]}),"\n",(0,c.jsx)(e.h3,{id:"native-type-mapping",children:"Native type mapping"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Native type mapping"})," trong Prisma l\xe0 c\u01a1 ch\u1ebf cho ph\xe9p ta \xe1nh x\u1ea1 (mapping) c\xe1c ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a Prisma sang c\xe1c ki\u1ec3u d\u1eef li\u1ec7u c\u1ee5 th\u1ec3 c\u1ee7a c\u01a1 s\u1edf d\u1eef li\u1ec7u m\xe0 ta \u0111ang s\u1eed d\u1ee5ng. \u0110i\u1ec1u n\xe0y gi\xfap ta t\u1eadn d\u1ee5ng t\u1ed1i \u0111a c\xe1c ki\u1ec3u d\u1eef li\u1ec7u \u0111\u1eb7c bi\u1ec7t ho\u1eb7c t\u1ed1i \u01b0u h\u01a1n c\u1ee7a c\u01a1 s\u1edf d\u1eef li\u1ec7u m\xe0 Prisma kh\xf4ng cung c\u1ea5p tr\u1ef1c ti\u1ebfp."]}),"\n",(0,c.jsxs)(e.li,{children:["M\u1eb7c \u0111\u1ecbnh, Prisma s\u1eed d\u1ee5ng m\u1ed9t t\u1eadp h\u1ee3p c\xe1c ",(0,c.jsx)(e.strong,{children:"ki\u1ec3u d\u1eef li\u1ec7u chung"})," (generic types) nh\u01b0 ",(0,c.jsx)(e.code,{children:"String"}),", ",(0,c.jsx)(e.code,{children:"Int"}),", ",(0,c.jsx)(e.code,{children:"Boolean"}),", ",(0,c.jsx)(e.code,{children:"DateTime"}),"... Nh\u1eefng ki\u1ec3u n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \xe1nh x\u1ea1 t\u1ef1 \u0111\u1ed9ng sang ki\u1ec3u d\u1eef li\u1ec7u ph\xf9 h\u1ee3p c\u1ee7a c\u01a1 s\u1edf d\u1eef li\u1ec7u t\u01b0\u01a1ng \u1ee9ng. Tuy nhi\xean, n\u1ebfu ta mu\u1ed1n c\xf3 s\u1ef1 ki\u1ec3m so\xe1t nhi\u1ec1u h\u01a1n ho\u1eb7c t\u1eadn d\u1ee5ng c\xe1c ki\u1ec3u d\u1eef li\u1ec7u c\u1ee5 th\u1ec3 c\u1ee7a t\u1eebng h\u1ec7 qu\u1ea3n tr\u1ecb c\u01a1 s\u1edf d\u1eef li\u1ec7u (MySQL, PostgreSQL, SQL Server, MongoDB), ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng t\xednh n\u0103ng ",(0,c.jsx)(e.strong,{children:"native types mapping"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:["Ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng native types mapping b\u1eb1ng c\xe1ch th\xeam ",(0,c.jsx)(e.strong,{children:"ch\xfa th\xedch native type"})," ngay sau ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a tr\u01b0\u1eddng trong m\xf4 h\xecnh Prisma. Ch\xfa th\xedch n\xe0y s\u1eed d\u1ee5ng c\xfa ph\xe1p ",(0,c.jsx)(e.code,{children:"@db.nativeType"}),", trong \u0111\xf3 ",(0,c.jsx)(e.code,{children:"nativeType"})," l\xe0 t\xean c\u1ee7a ki\u1ec3u d\u1eef li\u1ec7u c\u1ee5 th\u1ec3 c\u1ee7a c\u01a1 s\u1edf d\u1eef li\u1ec7u ta mu\u1ed1n s\u1eed d\u1ee5ng."]}),"\n",(0,c.jsx)(e.li,{children:"C\xfa ph\xe1p t\u1ed5ng qu\xe1t:"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-prisma",children:"model ModelName {\n  fieldName FieldType @db.nativeType\n}\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["V\xed d\u1ee5, trong MySQL, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng native types nh\u01b0 ",(0,c.jsx)(e.code,{children:"VARCHAR"}),", ",(0,c.jsx)(e.code,{children:"TEXT"}),", ",(0,c.jsx)(e.code,{children:"DECIMAL"}),", v.v."]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729520532610",src:i(7086).A+"",width:"1656",height:"376"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["PostgreSQL Native Type Mapping. PostgreSQL h\u1ed7 tr\u1ee3 c\xe1c ki\u1ec3u d\u1eef li\u1ec7u nh\u01b0 ",(0,c.jsx)(e.code,{children:"UUID"}),", ",(0,c.jsx)(e.code,{children:"TEXT"}),", ",(0,c.jsx)(e.code,{children:"BIGINT"}),", ",(0,c.jsx)(e.code,{children:"TIMESTAMPTZ"}),", v.v."]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729520593317",src:i(2481).A+"",width:"2142",height:"416"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["SQL Server Native Type Mapping. SQL Server c\xf3 c\xe1c ki\u1ec3u nh\u01b0 ",(0,c.jsx)(e.code,{children:"NVARCHAR"}),", ",(0,c.jsx)(e.code,{children:"DATETIME2"}),", ",(0,c.jsx)(e.code,{children:"BIT"}),", v.v."]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729520617884",src:i(3883).A+"",width:"1692",height:"376"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"L\u1ee3i \xedch c\u1ee7a Native Type Mapping:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"T\u1ed1i \u01b0u h\xf3a hi\u1ec7u su\u1ea5t"}),": Vi\u1ec7c s\u1eed d\u1ee5ng c\xe1c ki\u1ec3u d\u1eef li\u1ec7u native c\u1ee7a c\u01a1 s\u1edf d\u1eef li\u1ec7u gi\xfap t\u1eadn d\u1ee5ng t\u1ed1i \u0111a hi\u1ec7u n\u0103ng v\xe0 t\xednh n\u0103ng m\xe0 c\u01a1 s\u1edf d\u1eef li\u1ec7u cung c\u1ea5p."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Ki\u1ec3m so\xe1t chi ti\u1ebft"}),": ta c\xf3 th\u1ec3 ki\u1ec3m so\xe1t ch\xednh x\xe1c ki\u1ec3u d\u1eef li\u1ec7u v\xe0 dung l\u01b0\u1ee3ng c\u1ee7a c\xe1c tr\u01b0\u1eddng, ch\u1eb3ng h\u1ea1n nh\u01b0 \u0111\u1ed9 d\xe0i chu\u1ed7i, \u0111\u1ed9 ch\xednh x\xe1c s\u1ed1 h\u1ecdc (precision), v.v."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"T\u01b0\u01a1ng th\xedch v\u1edbi c\u1ea5u tr\xfac d\u1eef li\u1ec7u hi\u1ec7n c\xf3"}),": N\u1ebfu ta l\xe0m vi\u1ec7c v\u1edbi m\u1ed9t c\u01a1 s\u1edf d\u1eef li\u1ec7u hi\u1ec7n c\xf3 v\u1edbi c\xe1c ki\u1ec3u d\u1eef li\u1ec7u c\u1ee5 th\u1ec3, ta c\xf3 th\u1ec3 \xe1nh x\u1ea1 tr\u1ef1c ti\u1ebfp c\xe1c tr\u01b0\u1eddng sang ki\u1ec3u native m\xe0 kh\xf4ng c\u1ea7n thay \u0111\u1ed5i c\u1ea5u tr\xfac d\u1eef li\u1ec7u."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"H\u1ea1n ch\u1ebf:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Kh\u1ea3 n\u0103ng t\u01b0\u01a1ng th\xedch"}),": Native type mapping l\xe0m cho Prisma schema c\u1ee7a ta ph\u1ee5 thu\u1ed9c v\xe0o lo\u1ea1i c\u01a1 s\u1edf d\u1eef li\u1ec7u c\u1ee5 th\u1ec3. N\u1ebfu ta chuy\u1ec3n sang m\u1ed9t h\u1ec7 qu\u1ea3n tr\u1ecb c\u01a1 s\u1edf d\u1eef li\u1ec7u kh\xe1c, ta c\xf3 th\u1ec3 c\u1ea7n ph\u1ea3i thay \u0111\u1ed5i c\xe1c ki\u1ec3u native cho t\u01b0\u01a1ng th\xedch."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"field-type-modifiers",children:"Field type modifiers"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"C\xf3 2 lo\u1ea1i modifiers:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"[]"}),": \u0111\xe1nh d\u1ea5u m\u1ed9t field l\xe0 m\u1ed9t list"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"?"}),": \u0111\xe1nh d\u1ea5u m\u1ed9t field l\xe0 optional"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["V\xed d\u1ee5 v\u1ec1 ",(0,c.jsx)(e.code,{children:"[]"})," modifier:"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521124898",src:i(930).A+"",width:"1224",height:"296"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["V\xed d\u1ee5 v\u1ec1 ",(0,c.jsx)(e.code,{children:"?"})," modifier:"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521141969",src:i(4369).A+"",width:"936",height:"296"})}),"\n",(0,c.jsx)(e.h2,{id:"attributes",children:"Attributes"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Trong Prisma, c\xf3 ",(0,c.jsx)(e.strong,{children:"2 c\xe1ch ch\xednh"})," \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a ",(0,c.jsx)(e.strong,{children:"attributes"}),":","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Field-level Attributes"})," (Thu\u1ed9c t\xednh c\u1ea5p tr\u01b0\u1eddng)"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Model-level Attributes"})," (Thu\u1ed9c t\xednh c\u1ea5p m\xf4 h\xecnh)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"field-level-attributes-thu\u1ed9c-t\xednh-c\u1ea5p-tr\u01b0\u1eddng",children:"Field-level Attributes (Thu\u1ed9c t\xednh c\u1ea5p tr\u01b0\u1eddng)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Field-level attributes"})," \u0111\u01b0\u1ee3c g\xe1n cho c\xe1c tr\u01b0\u1eddng (fields) trong m\u1ed9t m\xf4 h\xecnh. Ch\xfang x\xe1c \u0111\u1ecbnh c\xe1c r\xe0ng bu\u1ed9c, h\xe0nh vi ho\u1eb7c c\xe1c t\xednh n\u0103ng \u0111\u1eb7c bi\u1ec7t cho tr\u01b0\u1eddng \u0111\xf3. ",(0,c.jsx)(e.strong,{children:"Field-level attributes"})," th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a ngay sau lo\u1ea1i tr\u01b0\u1eddng (field type)."]}),"\n",(0,c.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521158832",src:i(2013).A+"",width:"2142",height:"376"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["C\xe1c ",(0,c.jsx)(e.strong,{children:"field-level attributes"})," ph\u1ed5 bi\u1ebfn:"]}),"\n"]}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"Field-level attributes"}),(0,c.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@id"})}),(0,c.jsx)(e.td,{children:"\u0110\u1ecbnh ngh\u0129a kh\xf3a ch\xednh cho tr\u01b0\u1eddng."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@unique"})}),(0,c.jsx)(e.td,{children:"T\u1ea1o r\xe0ng bu\u1ed9c duy nh\u1ea5t cho tr\u01b0\u1eddng."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@updatedAt"})}),(0,c.jsx)(e.td,{children:"T\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt gi\xe1 tr\u1ecb m\u1ed7i khi b\u1ea3n ghi \u0111\u01b0\u1ee3c thay \u0111\u1ed5i."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@default()"})}),(0,c.jsx)(e.td,{children:"\u0110\u1eb7t gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho tr\u01b0\u1eddng."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@map()"})}),(0,c.jsx)(e.td,{children:"\u0110\u1ed5i t\xean tr\u01b0\u1eddng trong c\u01a1 s\u1edf d\u1eef li\u1ec7u m\xe0 kh\xf4ng \u0111\u1ed5i t\xean trong m\xe3 Prisma."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@relation()"})}),(0,c.jsx)(e.td,{children:"\u0110\u1ecbnh ngh\u0129a quan h\u1ec7 gi\u1eefa c\xe1c m\xf4 h\xecnh."})]})]})]}),"\n",(0,c.jsx)(e.h3,{id:"model-level-attributes-thu\u1ed9c-t\xednh-c\u1ea5p-m\xf4-h\xecnh",children:"Model-level Attributes (Thu\u1ed9c t\xednh c\u1ea5p m\xf4 h\xecnh)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Model-level attributes \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng cho to\xe0n b\u1ed9 m\xf4 h\xecnh v\xe0 c\xf3 th\u1ec3 t\xe1c \u0111\u1ed9ng \u0111\u1ebfn nhi\u1ec1u tr\u01b0\u1eddng ho\u1eb7c \u0111\u1ebfn c\xe1ch d\u1eef li\u1ec7u c\u1ee7a m\xf4 h\xecnh \u0111\xf3 \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd. Ch\xfang th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1eb7t d\u01b0\u1edbi c\xf9ng c\u1ee7a m\xf4 h\xecnh v\u1edbi c\xfa ph\xe1p b\u1eaft \u0111\u1ea7u b\u1eb1ng ",(0,c.jsx)(e.code,{children:"@@"}),"."]}),"\n",(0,c.jsx)(e.li,{children:"V\xed d\u1ee5:"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521177590",src:i(3099).A+"",width:"2052",height:"496"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["C\xe1c ",(0,c.jsx)(e.strong,{children:"model-level attributes"})," ph\u1ed5 bi\u1ebfn:"]}),"\n"]}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"Model-level attributes"}),(0,c.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@@index([])"})}),(0,c.jsx)(e.td,{children:"T\u1ea1o index tr\xean m\u1ed9t ho\u1eb7c nhi\u1ec1u tr\u01b0\u1eddng \u0111\u1ec3 c\u1ea3i thi\u1ec7n hi\u1ec7u su\u1ea5t truy v\u1ea5n."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@@unique([])"})}),(0,c.jsx)(e.td,{children:"T\u1ea1o r\xe0ng bu\u1ed9c duy nh\u1ea5t tr\xean nhi\u1ec1u tr\u01b0\u1eddng c\xf9ng l\xfac."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@@map()"})}),(0,c.jsx)(e.td,{children:"\u0110\u1ed5i t\xean b\u1ea3ng trong c\u01a1 s\u1edf d\u1eef li\u1ec7u m\xe0 kh\xf4ng \u0111\u1ed5i t\xean m\xf4 h\xecnh trong Prisma."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"@@id([])"})}),(0,c.jsx)(e.td,{children:"\u0110\u1eb7t kh\xf3a ch\xednh g\u1ed3m nhi\u1ec1u tr\u01b0\u1eddng (composite primary key)."})]})]})]}),"\n",(0,c.jsx)(e.p,{children:"V\xed d\u1ee5 t\u1ed5ng h\u1ee3p c\u1ea3 hai lo\u1ea1i attributes:"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521205227",src:i(7410).A+"",width:"1710",height:"496"})}),"\n",(0,c.jsx)(e.h2,{id:"attribute-function",children:"Attribute function"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Trong Prisma, ",(0,c.jsx)(e.strong,{children:"attribute functions"})," l\xe0 c\xe1c h\xe0m \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\xean trong attributes \u0111\u1ec3 x\xe1c \u0111\u1ecbnh c\xe1c h\xe0nh vi \u0111\u1eb7c bi\u1ec7t cho tr\u01b0\u1eddng d\u1eef li\u1ec7u. Ch\xfang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ch\u1ee7 y\u1ebfu \u0111\u1ec3 x\xe1c \u0111\u1ecbnh c\xe1c gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh ho\u1eb7c thao t\xe1c v\u1edbi c\xe1c gi\xe1 tr\u1ecb t\u1ef1 \u0111\u1ed9ng."]}),"\n",(0,c.jsx)(e.li,{children:"D\u01b0\u1edbi \u0111\xe2y l\xe0 c\xe1c attribute function:"}),"\n"]}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"Attribute function"}),(0,c.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"auto()"})}),(0,c.jsx)(e.td,{children:"Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh \u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi database. Ch\u1ec9 h\u1ed7 tr\u1ee3 MongoDB."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"autoincrement()"})}),(0,c.jsx)(e.td,{children:"T\u1ef1 \u0111\u1ed9ng t\u1ea1o gi\xe1 tr\u1ecb number t\u0103ng d\u1ea7n (kh\xf4ng h\u1ed7 tr\u1ee3 trong MongoDB)"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"cuid()"})}),(0,c.jsx)(e.td,{children:"T\u1ef1 \u0111\u1ed9ng t\u1ea1o gi\xe1 tr\u1ecb cuid"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"uuid()"})}),(0,c.jsx)(e.td,{children:"T\u1ef1 \u0111\u1ed9ng t\u1ea1o gi\xe1 tr\u1ecb uuid"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"now()"})}),(0,c.jsx)(e.td,{children:"Thi\u1ebft l\u1eadp gi\xe1 tr\u1ecb timestemp khi m\u1ed9t record (row) \u0111\u01b0\u1ee3c t\u1ea1o"})]})]})]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["V\xed d\u1ee5 v\u1ec1 ",(0,c.jsx)(e.code,{children:"auto()"}),":"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521303387",src:i(5124).A+"",width:"1224",height:"296"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["V\xed d\u1ee5 v\u1ec1 ",(0,c.jsx)(e.code,{children:"uuid()"}),", ",(0,c.jsx)(e.code,{children:"now()"}),":"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"1729521280336",src:i(5378).A+"",width:"882",height:"296"})})]})}function j(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},7086:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729520532610-f6ddb2c78ea92a413341cd6441d6b98d.png"},2481:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729520593317-c5a3b984c8eb4b66eeaee4f9ffc04332.png"},3883:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729520617884-f9e2efbdec4f8636d04c1808fd6d0357.png"},2173:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521048333-358a8129409f7ef60d2415454c73fe06.png"},930:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521124898-f730bfd32aec4933a0f579c09eabc612.png"},4369:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521141969-82780b9ef7fea6ba42cbbb78cc476985.png"},2013:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521158832-0f117f1efda21492cd4824e32279f801.png"},3099:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521177590-f332c310bd87a06969b4498848b70c29.png"},7410:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521205227-7af46feb5e2fcefb73ae315fe4f3b8dc.png"},5378:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521280336-3f4c3cfcc25cf3cf4bf3aebdfa4dd44f.png"},5124:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/1729521303387-684a2ff668abe4fde0a3495190cdbc38.png"},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>h});var c=i(6540);const d={},t=c.createContext(d);function s(n){const e=c.useContext(t);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),c.createElement(t.Provider,{value:e},n.children)}}}]);