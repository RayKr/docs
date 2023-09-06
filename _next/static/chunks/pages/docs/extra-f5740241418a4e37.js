(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{6419:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/extra",function(){return n(9754)}])},9754:function(s,e,n){"use strict";n.r(e);var l=n(1527),i=n(2027),r=n(6736);n(421);var c=n(9173);function a(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",span:"span"},(0,r.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"拓展内容"}),"\n","\n",(0,l.jsx)(c.UW,{type:"warning",emoji:"⚠️",children:(0,l.jsx)(e.p,{children:"此部分内容是可选的，在正常情况，你不需要参考这部分内容。以下部分仅针对有特定需求的用户进行参考。"})}),"\n",(0,l.jsx)(e.h2,{id:"配置其他-redis-服务",children:"配置其他 Redis 服务"}),"\n",(0,l.jsxs)(e.p,{children:["如果你需要使用来自 (远端 / 非容器) 的 Redis 服务，你可以通过使用 ",(0,l.jsx)(e.code,{children:"argv"})," 来动态传入对应的配置项。"]}),"\n",(0,l.jsx)(e.p,{children:"支持传入如下值："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"redis_host"})," Redis 服务地址，域名、IP 都可以"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"redis_port"})," Redis 服务端口"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"redis_password"})," Redis 服务密码"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"在默认情况下，我们认为这样已经足够了。"}),"\n",(0,l.jsx)(e.h3,{id:"对于进阶部署",children:"对于进阶部署"}),"\n",(0,l.jsxs)(e.p,{children:["针对这种部署方式，我们可以修改 ",(0,l.jsx)(e.code,{children:"ecosystem.config.js"})," 在 12 行，也就是 ",(0,l.jsx)(e.code,{children:"script"})," 这一项，添加你需要传入的值，如下所示："]}),"\n",(0,l.jsx)(e.pre,{"data-language":"diff","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"diff","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const { cpus } = require('os')"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const { execSync } = require('child_process')"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const nodePath = execSync(`npm root --quiet -g`, { encoding: 'utf-8' }).split("})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  '\\n',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")[0]"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const cpuLen = cpus().length"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"module.exports = {"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  apps: ["})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      name: 'mx-server',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#EF6270"},children:"-     script: 'out/index.js,"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#4BB74A"},children:"+     script: 'out/index.js --redis_host=远端地址 --redis_password=redis?passwd',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      autorestart: true,"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      exec_mode: 'cluster',"})})]})}),"\n",(0,l.jsx)(e.p,{children:"当你修改完成，你需要重新构建，并重启服务："}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"bundle"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"prod:pm2"})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"配置其他-mongodb-服务",children:"配置其他 MongoDB 服务"}),"\n",(0,l.jsxs)(e.p,{children:["如果你需要使用来自 (远端 / 非容器) 的 MongoDB 服务，你可以通过使用 ",(0,l.jsx)(e.code,{children:"argv"})," 来动态传入对应的配置项。"]}),"\n",(0,l.jsx)(e.p,{children:"支持传入如下值："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"collection_name"})," 数据库集合名字"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"db_host"})," MongoDB 服务地址，域名、IP 都可以"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"db_port"})," MongoDB 服务端口"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"db_user"})," MongoDB 服务用户名"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"db_password"})," MongoDB 服务密码"]}),"\n"]}),"\n",(0,l.jsx)(c.UW,{type:"warning",emoji:"⚠️",children:(0,l.jsx)(e.p,{children:"如果你需要使用密码登录，你不仅仅需要传入 password，还需要传入 user，建议你对数据库集合划分好用户权限"})}),"\n",(0,l.jsx)(e.h3,{id:"对于进阶部署-1",children:"对于进阶部署"}),"\n",(0,l.jsxs)(e.p,{children:["和 Redis 一样，我们可以修改 ",(0,l.jsx)(e.code,{children:"ecosystem.config.js"})," 在 12 行，也就是 ",(0,l.jsx)(e.code,{children:"script"})," 这一项，添加你需要传入的值，如下所示："]}),"\n",(0,l.jsx)(e.pre,{"data-language":"diff","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"diff","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const { cpus } = require('os')"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const { execSync } = require('child_process')"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const nodePath = execSync(`npm root --quiet -g`, { encoding: 'utf-8' }).split("})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  '\\n',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")[0]"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const cpuLen = cpus().length"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"module.exports = {"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  apps: ["})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      name: 'mx-server',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#4BB74A"},children:"+     script: 'out/index.js --db_host=远端地址 --db_user=mongodb-test --db_password=db?passwd',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      autorestart: true,"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      exec_mode: 'cluster',"})})]})}),"\n",(0,l.jsx)(e.p,{children:"当你修改完成，你需要重新构建，并重启服务："}),"\n",(0,l.jsx)(e.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,l.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"bundle"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"prod:pm2"})]})]})})]})}e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(a,{...s})}):a(s)},pageOpts:{filePath:"pages/docs/extra.mdx",route:"/docs/extra",headings:[{depth:1,value:"拓展内容",id:"拓展内容"},{depth:2,value:"配置其他 Redis 服务",id:"配置其他-redis-服务"},{depth:3,value:"对于进阶部署",id:"对于进阶部署"},{depth:2,value:"配置其他 MongoDB 服务",id:"配置其他-mongodb-服务"},{depth:3,value:"对于进阶部署",id:"对于进阶部署-1"}],title:"拓展内容"},pageNextRoute:"/docs/extra"})}},function(s){s.O(0,[48,774,888,179],function(){return s(s.s=6419)}),_N_E=s.O()}]);