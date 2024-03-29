(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{1329:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/themes/shiro/config",function(){return i(8830)}])},8160:function(e,n,i){"use strict";i.d(n,{g:function(){return r}});var s=i(1527),d=i(5341);let l=e=>{let{children:n,className:i}=e;return(0,s.jsx)("div",{className:(0,d.Z)("inline-block text-xs text-white p-1 rounded-md bg-cyan-600 dark:bg-cyan-500",i),children:n})},r=()=>(0,s.jsx)(l,{className:"absolute translate-y-2 translate-x-2 z-[10]",children:(0,s.jsx)("span",{title:"此功能仅闭源版本提供",children:"闭源版本"})})},8830:function(e,n,i){"use strict";i.r(n);var s=i(1527),d=i(985),l=i(6736);i(8823);var r=i(8160);function c(e){let n=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"配置项"}),"\n",(0,s.jsxs)(n.h2,{id:"站点信息-site",children:["站点信息 (",(0,s.jsx)(n.code,{children:"site"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"此部分包含了网站的基础信息设置，例如 favicon（网站图标）的配置。"}),"\n",(0,s.jsx)(n.h3,{id:"favicon",children:"Favicon"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"favicon"})}),": 设置网站在浅色模式下使用的图标。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"faviconDark"})}),": 设置网站在深色模式下使用的图标。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hero-部分-hero",children:["Hero 部分 (",(0,s.jsx)(n.code,{children:"hero"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hero"})," 部分定义了网站首页的主要欢迎信息或介绍部分，这是访问者首次进入网站时看到的部分。"]}),"\n",(0,s.jsxs)(n.h3,{id:"title-模板-titletemplate",children:["Title 模板 (",(0,s.jsx)(n.code,{children:"title.template"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["包括多个元素（如 ",(0,s.jsx)(n.code,{children:"h1"}),", ",(0,s.jsx)(n.code,{children:"code"}),", ",(0,s.jsx)(n.code,{children:"span"}),"），每个元素都可以自定义文本内容和样式（通过 CSS 类）。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如何使用"}),": 修改 ",(0,s.jsx)(n.code,{children:"text"})," 和 ",(0,s.jsx)(n.code,{children:"class"})," 字段来自定义标题的文本内容和样式。你可以通过添加或删除元素来调整标题的结构。"]}),"\n",(0,s.jsxs)(n.h3,{id:"描述-description",children:["描述 (",(0,s.jsx)(n.code,{children:"description"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["提供了对 ",(0,s.jsx)(n.code,{children:"hero"})," 部分的简短描述。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如何使用"}),": 直接修改 ",(0,s.jsx)(n.code,{children:"description"})," 的值以更改介绍文本。"]}),"\n",(0,s.jsxs)(n.h2,{id:"模块-module",children:["模块 (",(0,s.jsx)(n.code,{children:"module"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"此部分配置了网站的一些特定功能模块，比如活动跟踪、捐赠支持、社交媒体链接等。"}),"\n",(0,s.jsxs)(n.h3,{id:"实时活动-activity-模块",children:["实时活动 (",(0,s.jsx)(n.code,{children:"activity"}),") 模块"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enable"})}),": 控制模块是否启用。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"endpoint"})}),": 指定活动更新的服务器端点。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如何使用"}),": 若需开启活动跟踪功能，将 ",(0,s.jsx)(n.code,{children:"enable"})," 设为 ",(0,s.jsx)(n.code,{children:"true"})," 并设置 ",(0,s.jsx)(n.code,{children:"endpoint"})," 为处理活动数据的服务器地址。"]}),"\n",(0,s.jsxs)(n.h3,{id:"捐赠-donate-模块",children:["捐赠 (",(0,s.jsx)(n.code,{children:"donate"}),") 模块"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enable"})}),": 控制捐赠模块是否启用。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"link"})}),": 提供捐赠页面的链接。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"qrcode"})}),": 提供一或多个捐赠二维码图片的链接。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如何使用"}),": 启用捐赠功能，并提供捐赠链接或捐赠二维码，以便支持者可以直接进行捐赠。"]}),"\n",(0,s.jsxs)(n.h3,{id:"社交媒体-bilibili-模块",children:["社交媒体 (",(0,s.jsx)(n.code,{children:"bilibili"}),") 模块"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"liveId"})}),": b 站直播间 ID"]}),"\n"]}),"\n","\n",(0,s.jsxs)(n.h3,{id:"openpanel-",children:[(0,s.jsx)(n.a,{href:"https://openpanel.dev",children:"OpenPanel"})," ",(0,s.jsx)(r.g,{})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enable"})}),": 控制 OpenPanel 功能是否启用。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"id"})}),": OpenPanel 的 ID。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"url"})}),": OpenPanel 的访问地址。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"如何使用"}),": 如果你使用 OpenPanel 提供交互式面板或其他功能，通过这些配置连接并显示面板。"]})]})}n.default=(0,d.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/themes/shiro/config.mdx",route:"/themes/shiro/config",headings:[{depth:1,value:"配置项",id:"配置项"},{depth:2,value:"站点信息 (site)",id:"站点信息-site"},{depth:3,value:"Favicon",id:"favicon"},{depth:2,value:"Hero 部分 (hero)",id:"hero-部分-hero"},{depth:3,value:"Title 模板 (title.template)",id:"title-模板-titletemplate"},{depth:3,value:"描述 (description)",id:"描述-description"},{depth:2,value:"模块 (module)",id:"模块-module"},{depth:3,value:"实时活动 (activity) 模块",id:"实时活动-activity-模块"},{depth:3,value:"捐赠 (donate) 模块",id:"捐赠-donate-模块"},{depth:3,value:"社交媒体 (bilibili) 模块",id:"社交媒体-bilibili-模块"},{depth:3,value:"OpenPanel ",id:"openpanel-"}],title:"配置项"},pageNextRoute:"/themes/shiro/config"})},5341:function(e,n,i){"use strict";n.Z=function(){for(var e,n,i=0,s="";i<arguments.length;)(e=arguments[i++])&&(n=function e(n){var i,s,d="";if("string"==typeof n||"number"==typeof n)d+=n;else if("object"==typeof n){if(Array.isArray(n))for(i=0;i<n.length;i++)n[i]&&(s=e(n[i]))&&(d&&(d+=" "),d+=s);else for(i in n)n[i]&&(d&&(d+=" "),d+=i)}return d}(e))&&(s&&(s+=" "),s+=n);return s}}},function(e){e.O(0,[985,774,888,179],function(){return e(e.s=1329)}),_N_E=e.O()}]);