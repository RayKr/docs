(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{874:function(e,t,a){"use strict";var s=a(6935),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,r,o,i,l,c,d,h,x=!1;t||(t={}),o=t.debug||!1;try{if(l=s(),c=document.createRange(),d=document.getSelection(),(h=document.createElement("span")).textContent=e,h.ariaHidden="true",h.style.all="unset",h.style.position="fixed",h.style.top=0,h.style.clip="rect(0, 0, 0, 0)",h.style.whiteSpace="pre",h.style.webkitUserSelect="text",h.style.MozUserSelect="text",h.style.msUserSelect="text",h.style.userSelect="text",h.addEventListener("copy",function(a){if(a.stopPropagation(),t.format){if(a.preventDefault(),void 0===a.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=n[t.format]||n.default;window.clipboardData.setData(s,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e)}t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(h),c.selectNodeContents(h),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");x=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),x=!0}catch(s){o&&console.error("unable to copy using clipboardData: ",s),o&&console.error("falling back to prompt"),a="message"in t?t.message:"Copy to clipboard: #{key}, Enter",r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=a.replace(/#{\s*key\s*}/g,r),window.prompt(i,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),h&&document.body.removeChild(h),l()}return x}},5539:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/docker",function(){return a(5922)}])},8537:function(e,t,a){"use strict";a.d(t,{C:function(){return i}});var s=a(1527),n=a(959),r=a(874),o=a.n(r);function i(e){let{variableNames:t}=e,[a,r]=(0,n.useState)(Array(t.length).fill("")),i=()=>{let e=t.map((e,t)=>"".concat(e.key,"=").concat(a[t])).join("\n");o()(e)},l=(e,t)=>{let s=[...a];s[e]=t,r(s)};return(0,s.jsxs)("div",{className:"p-4 mt-2",children:[t.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center space-x-4 mb-4",children:[(0,s.jsx)("input",{type:"text",className:"border rounded px-2 py-2 w-1/2 bg-transparent focus:outline-none focus:border-black hover:border-white-400 transition duration-300 font-[400] font-sans text-sm cursor-not-allowed dark:border-gray-700 dark:text-gray-300",value:e.name||e.key,"data-tip":e.key,onMouseOver:e=>{e.target.style.color="transparent",setTimeout(()=>{e.target.style.color="inherit",e.target.value=e.target.dataset.tip},300)},onMouseLeave:t=>{t.target.style.color="transparent",setTimeout(()=>{t.target.style.color="inherit",t.target.value=e.name||e.key},300)},disabled:!0}),(0,s.jsx)("input",{type:"text",className:"border rounded px-2 py-2 w-1/2 focus:outline-none focus:border-black hover:border-gray-400 transition duration-300 font-[400] font-sans text-sm dark:border-gray-700 dark:text-gray-300",style:{outline:"none",boxShadow:"none"},placeholder:"Enter value...",value:a[t],onChange:e=>l(t,e.target.value)})]},"".concat(e.key))),(0,s.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,s.jsx)("h2",{className:"sr-only",children:"环境变量配置"}),(0,s.jsx)("button",{type:"button",className:"border bg-black w-full text-white px-4 py-2 rounded-lg text-sm transform transition-all duration-300 focus:outline-none hover:bg-gray-700 dark:border-gray-700 dark:text-gray-300",onClick:i,children:"复制"})]})]})}},3380:function(e,t,a){"use strict";a.d(t,{G:function(){return n}});var s=a(1527);function n(e){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M12.71 8.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"})})}},4106:function(e,t,a){"use strict";a.d(t,{D:function(){return n}});var s=a(1527);function n(e){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"})})}},8076:function(e,t,a){"use strict";var s=a(1527),n=a(5903),r=a.n(n);a(959);var o=a(7634),i=a(1689);let l=(0,s.jsxs)("span",{className:"jsx-ce537a1fc447edae",children:[(0,s.jsx)("img",{src:"/logo.png",className:"jsx-ce537a1fc447edae"}),"Mix Space",(0,s.jsx)(r(),{id:"ce537a1fc447edae",children:"span.jsx-ce537a1fc447edae{padding:.5rem .5rem .5rem 0;-webkit-mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-moz-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-o-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:linear-gradient(60deg,black 25%,rgba(0,0,0,.2)50%,black 75%);-webkit-mask-size:400%;mask-size:400%;-webkit-mask-position:0%;mask-position:0%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;font-weight:600}img.jsx-ce537a1fc447edae{margin-right:8px;height:24px}span.jsx-ce537a1fc447edae:hover{-webkit-mask-position:100%;mask-position:100%;-webkit-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-moz-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-o-transition:mask-position 1s ease,-webkit-mask-position 1s ease;transition:mask-position 1s ease,-webkit-mask-position 1s ease}"})]}),c={logo:l,head:function(){let{title:e}=(0,o.ZR)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("link",{rel:"dns-prefetch",href:"//pan.vinua.cn"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,s.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:"A flexible, modular CMS Blog System."}),(0,s.jsx)("meta",{name:"og:description",content:"A flexible, modular CMS Blog System."}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:site:domain",content:"mog.js.org"}),(0,s.jsx)("meta",{name:"twitter:url",content:"https://mog.js.org"}),(0,s.jsx)("meta",{name:"og:title",content:e?e+" | Mix Space":"Mix Space"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Mix Space"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.png",type:"image/png"})]})},project:{link:"https://github.com/mx-space/core"},docsRepositoryBase:"https://github.com/mx-space/docs/blob/main",footer:{text:(0,s.jsx)("div",{className:"flex w-full flex-col items-center sm:items-start",children:(0,s.jsxs)("p",{className:"text-xs",children:["\xa9 ",new Date().getFullYear()," This project is licensed under AGPLv3 with additional terms, and this documentation is licensed under CC BY 4.0. All licensed. 2021-present Mix Space Team"]})})},useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();if("/"!==e)return{titleTemplate:"%s | Mix Space"}},editLink:{text:"Edit this page on GitHub →"},banner:{key:"theme-shiro",text:(0,s.jsx)("a",{href:"https://mx-space.js.org/themes/shiro",target:"_blank",children:"\uD83C\uDFA8 New Mix Space theme `Shiro` is released. Read more →"})}};t.Z=c},5922:function(e,t,a){"use strict";a.r(t);var s=a(1527),n=a(985),r=a(7634),o=a(8076);a(9941),a(1365);var i=a(6736);a(8823);var l=a(5032),c=a(4106),d=a(3380),h=a(8537);let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/docs/docker.mdx",route:"/docs/docker",headings:[{depth:1,value:"Docker 部署",id:"docker-部署"},{depth:3,value:"安装 Docker",id:"安装-docker"},{depth:3,value:"拉取配置文件",id:"拉取配置文件"},{depth:3,value:"配置 Core 启动配置文件",id:"配置-core-启动配置文件"},{depth:3,value:"启动 Core",id:"启动-core"},{depth:3,value:"完成",id:"完成"},{depth:2,value:"相关链接",id:"相关链接"}],pageMap:[{kind:"Meta",data:{index:{type:"page",title:"Mix Space",display:"hidden",theme:{layout:"raw"}},docs:{type:"page",title:"部署文档"},usage:{type:"page",title:"使用指南"},themes:{type:"page",title:"前端主题",theme:{layout:"raw"}},development:{title:"系统开发",type:"page"}}},{kind:"Folder",name:"development",route:"/development",children:[{kind:"Meta",data:{index:"前言",frontend:"前端开发指南",admin:"后台单独部署"}},{kind:"MdxPage",name:"admin",route:"/development/admin"},{kind:"MdxPage",name:"frontend",route:"/development/frontend"},{kind:"MdxPage",name:"index",route:"/development"}]},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"引言",features:"主要功能","-- advanced":{type:"separator",title:"部署"},docker:"Docker 部署",scripts:"预设脚本部署",advanced:"进阶部署",extra:"相关内容",community:"社区分享"}},{kind:"MdxPage",name:"advanced",route:"/docs/advanced"},{kind:"MdxPage",name:"community",route:"/docs/community"},{kind:"MdxPage",name:"docker",route:"/docs/docker"},{kind:"MdxPage",name:"extra",route:"/docs/extra"},{kind:"MdxPage",name:"features",route:"/docs/features"},{kind:"MdxPage",name:"index",route:"/docs",frontMatter:{title:"引言"}},{kind:"MdxPage",name:"scripts",route:"/docs/scripts"}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Mix Space - An Alternative Personal Space."}},{kind:"Folder",name:"themes",route:"/themes",children:[{kind:"Meta",data:{index:{title:"主题目录"},shiro:{title:"部署 Shiro 主题",theme:{layout:"default"}},kami:{title:"部署 Kami 主题",theme:{layout:"default"}},yun:{title:"部署 Yun 主题",theme:{layout:"default"}}}},{kind:"MdxPage",name:"index",route:"/themes",frontMatter:{title:"前端主题"}},{kind:"MdxPage",name:"kami",route:"/themes/kami"},{kind:"Folder",name:"shiro",route:"/themes/shiro",children:[{kind:"Meta",data:{index:"部署主题",extra:"额外功能",config:"配置项"}},{kind:"MdxPage",name:"config",route:"/themes/shiro/config"},{kind:"MdxPage",name:"extra",route:"/themes/shiro/extra"},{kind:"MdxPage",name:"index",route:"/themes/shiro"}]},{kind:"MdxPage",name:"yun",route:"/themes/yun"}]},{kind:"Folder",name:"usage",route:"/usage",children:[{kind:"Meta",data:{index:"使用指南","-- built-in":{type:"separator",title:"官方指南"},serverless:"云函数",xlog:"xLog 集成",search:"Algolia Search",backup:"备份与回滚",update:"更新 Mix Space",security:"Key 加密与安全性","-- community":{type:"separator",title:"社区使用指南"}}},{kind:"MdxPage",name:"backup",route:"/usage/backup"},{kind:"MdxPage",name:"index",route:"/usage"},{kind:"MdxPage",name:"search",route:"/usage/search"},{kind:"MdxPage",name:"security",route:"/usage/security"},{kind:"MdxPage",name:"serverless",route:"/usage/serverless"},{kind:"MdxPage",name:"update",route:"/usage/update"},{kind:"MdxPage",name:"xlog",route:"/usage/xlog"}]}],flexsearch:{codeblocks:!1},title:"Docker 部署"},pageNextRoute:"/docs/docker",nextraLayout:r.ZP,themeConfig:o.Z};function p(e){let t=Object.assign({h1:"h1",h3:"h3",p:"p",pre:"pre",code:"code",span:"span",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",a:"a",h2:"h2"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Docker 部署"}),"\n","\n",(0,s.jsxs)(l.Rg,{children:[(0,s.jsx)(t.h3,{id:"安装-docker",children:"安装 Docker"}),(0,s.jsx)(t.p,{children:"如果你的服务器在国内，建议使用阿里云的镜像加速，安装命令如下："}),(0,s.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-fsSL"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"https://get.docker.com"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-s"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"docker"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--mirror"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"Aliyun"})]})})}),(0,s.jsx)(t.p,{children:"在国外，可以直接使用官方脚本安装："}),(0,s.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-fsSL"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"https://get.docker.com"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-s"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"docker"})]})})}),(0,s.jsx)(t.p,{children:"如果您成功安装了 Docker 和 Docker-Compose，可以通过以下命令查看版本："}),(0,s.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-v"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"compose"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"version"})]})]})}),(0,s.jsx)(t.h3,{id:"拉取配置文件",children:"拉取配置文件"}),(0,s.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"mkdir"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-p"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"mx-space/core"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" $_"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"# 拉取 docker-compose.yml 文件"})}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"wget"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml"})]})]})}),(0,s.jsx)(t.h3,{id:"配置-core-启动配置文件",children:"配置 Core 启动配置文件"}),(0,s.jsxs)(t.p,{children:["在下方的表格里填入你的配置，然后点击复制，创建一个 ",(0,s.jsx)(t.code,{children:".env"})," 文件，将复制的内容粘贴进去，保存即可。"]}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"鼠标悬停在下方的表格中，可以查看对应的配置项名字。"}),"\n"]}),(0,s.jsx)(h.C,{variableNames:[{key:"JWT_SECRET",name:"[JWT 密钥] 长度不小于 16 个字符，不大于 32 个字符"},{key:"ALLOWED_ORIGINS",name:"[被允许的域名] 如果允许多个域名访问，用英文逗号，分隔"},{key:"ENCRYPT_ENABLE",name:"[是否开启加密] true 为开启，false 为关闭"},{key:"ENCRYPT_KEY",name:"[加密密钥] 详情请见下方提示"}]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"JWT 密钥"})}),"：需要填写长度不小于 16 个字符，不大于 32 个字符的字符串，用于加密用户的 JWT，务必保存好自己的密钥，不要泄露给他人。"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"被允许的域名"})}),"：需要填写被允许的域名，通常是前端的域名，如果允许多个域名访问，用英文逗号，分隔。"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"是否开启加密"})}),"：如果你确定要开启加密，将 false 改为 true，开启加密后，你需要在下方填写加密密钥。"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"加密密钥"})}),"：如果你不知道这是什么，那么不建议开启此功能，具体内容可参考 ",(0,s.jsx)(t.a,{href:"https://mx-space.js.org/usage/security.html",children:"https://mx-space.js.org/usage/security.html"})]}),"\n"]}),(0,s.jsxs)(l.UW,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["若开启加密，则需注意密钥长度",(0,s.jsx)(t.strong,{children:"必须为 64 位且只有小写字母和数字"}),"，不然会在初始化时报错。注意这是",(0,s.jsx)(t.strong,{children:"不可逆"}),"的，务必保存自己的秘钥。所以并不是非常推荐使用，除非你真的需要加密\nAPI Key."]}),(0,s.jsxs)(t.p,{children:["密钥可以通过 ",(0,s.jsx)(t.code,{children:"openssl rand -hex 32"})," 命令生成。请务必牢记。"]})]}),(0,s.jsx)(t.h3,{id:"启动-core",children:"启动 Core"}),(0,s.jsx)(t.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"docker"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"compose"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"up"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"-d"})]})})}),(0,s.jsx)(t.h3,{id:"完成",children:"完成"}),(0,s.jsxs)(t.p,{children:["恭喜你完成了 Core 部署，不过仅仅如此是不够的，你需要配置好反向代理之后登录后台进行初始化，这里不再赘述。除此之外，如引言所述还需要部署一个",(0,s.jsx)(t.strong,{children:"前端"}),"主题用于展示，请参考 ",(0,s.jsx)(t.a,{href:"https://mx-space.js.org/themes",children:"前端主题文档"})," 继续完成部署前端主题的步骤。"]})]}),"\n",(0,s.jsx)(t.h2,{id:"相关链接",children:"相关链接"}),"\n",(0,s.jsxs)(l.oy,{num:2,children:[(0,s.jsx)(l.Zb,{arrow:!0,title:"反向代理配置",href:"/docs/extra#反向代理",icon:(0,s.jsx)(c.D,{})}),(0,s.jsx)(l.Zb,{arrow:!0,title:"前端主题部署",href:"/themes",icon:(0,s.jsx)(c.D,{})}),(0,s.jsx)(l.Zb,{arrow:!0,title:"使用指南",href:"/usage",icon:(0,s.jsx)(d.G,{})})]})]})}t.default=(0,n.j)(x)},6935:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],s=0;s<e.rangeCount;s++)a.push(e.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[163,774,888,179],function(){return e(e.s=5539)}),_N_E=e.O()}]);