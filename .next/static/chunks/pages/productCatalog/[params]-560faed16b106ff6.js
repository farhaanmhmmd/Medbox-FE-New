(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{10803:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productCatalog/[params]",function(){return c(67975)}])},56556:function(a,b,c){"use strict";var d=c(34727),e=c(34051),f=c.n(e),g=c(85893),h=c(67294),i=c(23887),j=c(47741),k=c(41664),l=c.n(k),m=c(33299);b.Z=function(a){var b=(0,h.useState)(a.session),c=b[0],e=b[1],k=(0,h.useState)(""),n=k[0],o=k[1];function p(){return(p=(0,d.Z)(f().mark(function a(){var b,c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,m.getSession)();case 2:(b=a.sent)&&o(c=b.user.user.user_id),e(b);case 5:case"end":return a.stop()}},a)}))).apply(this,arguments)}return(0,h.useEffect)(function(){(function a(){return p.apply(this,arguments)})()},[]),(0,g.jsx)("div",{className:"h-[100px] flex items-end desktop:h-[72px] shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",children:(0,g.jsxs)("div",{className:"flex w-[100%] h-[70px] desktop:h-[100%] items-center justify-between",children:[(0,g.jsxs)("div",{className:"flex ml-[7vw] h-[70%] items-center",children:[(0,g.jsx)(l(),{href:"/",children:(0,g.jsx)(i.Ee,{className:"hover:cursor-pointer",src:"/landingpage/Medbox.svg",alt:"medbox-logo",width:"20vh"})}),(0,g.jsxs)("div",{className:"desktop:flex ml-[5vw] justify-between w-[20vw] hidden",children:[(0,g.jsx)(l(),{href:"/",children:(0,g.jsx)("p",{className:"duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",children:"Beranda"})}),(0,g.jsx)(l(),{href:"/productCatalog",children:(0,g.jsx)("p",{className:"duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",children:"Toko Obat"})}),(0,g.jsx)(l(),{href:"/transaction/".concat(n),children:(0,g.jsx)("p",{className:"duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",children:"Riwayat"})})]})]}),(0,g.jsx)("div",{className:"grow"}),(0,g.jsxs)("div",{className:"flex mr-[7vw] h-[70%] items-center w-[25vw] desktop:w-[10vw]",children:[(0,g.jsx)("div",{className:"w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(i.Ee,{src:"/landingpage/Bell.svg",alt:"bell-logo",width:"2vw"})}),(0,g.jsx)("div",{className:"w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(l(),{href:"/cart/".concat(n),children:(0,g.jsx)(i.Ee,{src:"/landingpage/Cart.svg",alt:"cart-logo",width:"2vw"})})}),(0,g.jsx)("div",{className:"desktop:hidden w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(i.Ee,{src:"/landingpage/Menu.svg",alt:"menu-logo",width:"2vw"})}),c?(0,g.jsx)("div",{className:"hidden desktop:inline w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(l(),{href:"/profile",children:(0,g.jsx)(i.Ee,{src:"/landingpage/Account.svg",alt:"menu-logo",layout:"responsive",width:20,height:20})})}):""]}),c?(0,g.jsx)("div",{className:"hidden desktop:flex desktop:ml-[-5vw]",children:(0,g.jsx)(j.zx,{onClick:function(){(0,m.signOut)()},variant:"outline",colorScheme:"linkedin",sx:{width:"6vw",height:"5vh",borderRadius:"1.2vh",marginRight:"2vw"},children:"Logout"})}):(0,g.jsx)("div",{className:"hidden desktop:flex desktop:ml-[-8vw]",children:(0,g.jsx)(l(),{href:"/login",children:(0,g.jsx)(j.zx,{variant:"outline",colorScheme:"linkedin",sx:{width:"6vw",height:"5vh",borderRadius:"1.2vh",marginRight:"2vw"},children:"Login"})})})]})})}},39499:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(77220).API_URL;a.exports={api_origin:d}},67975:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return o}});var d=c(85893),e=c(47741),f=c(20979),g=c(67294),h=c(56556),i=c(99603),j=c(59417),k=c(11163),l=c(25675),m=c.n(l),n=c(39499),o=!0;b.default=function(a){var b=function(){s(!r)},c=function(){v(!u)},l=(0,g.useState)(""),o=l[0],p=l[1],q=(0,g.useState)(!1),r=q[0],s=q[1],t=(0,g.useState)(!1),u=t[0],v=t[1],w=(0,g.useState)(a.products),x=w[0],y=w[1],z=(0,g.useState)(1),A=z[0],B=z[1],C=(0,g.useState)(""),D=C[0],E=C[1],F=(0,g.useState)(!1);F[0],F[1];var G=(0,k.useRouter)();return a.session,(0,g.useEffect)(function(){var b=G.query.params;p(b),y(a.products),!b.includes("sort")&&!b.includes("semuaObat")&&E(b.split("=")[0])}),(0,d.jsxs)("div",{className:"w-[100vw] h-[100vh] flex flex-col overflow-hidden",children:[(0,d.jsx)(h.Z,{}),(0,d.jsx)("div",{className:"flex w-[100%] h-[92%] items-end justify-center",children:(0,d.jsxs)("div",{className:"flex w-[92%] h-[96%]",children:[(0,d.jsxs)("div",{className:"bg-cya-500 bg-white w-[14%] h-[100%] flex flex-col pr-[.5vw]",children:[(0,d.jsx)("div",{className:"border-b-[.1px] border-black p-[1vh]",children:(0,d.jsx)("p",{onClick:function(){G.replace("/productCatalog/semuaObat=1"),B(1),E("")},className:o.includes("semuaObat")?"text-[1.2rem] font-[500] py-[1vh] px-[2vh] rounded-[2vw] border-solid border-[1px] rounded-[2vw] border-[#008DEB] cursor-pointer bg-cyan-100":"text-[1.2rem] font-[500] py-[1vh] px-[2vh] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",children:"Semua Obat"})}),(0,d.jsxs)("div",{id:"categories",className:"border-b-[.1px] border-black p-[1vh]",children:[(0,d.jsxs)("div",{onClick:b,className:"text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between",children:[(0,d.jsx)("p",{children:"Kategori"}),(0,d.jsx)("div",{className:r?"w-[5%] flex items-center justify-center rotate-90 transition duration-100":"w-[5%] flex items-center justify-center transition duration-100",children:(0,d.jsx)(i.G,{icon:j.I4f})})]}),(0,d.jsx)("div",{className:r?"overflow-auto scrollbar h-[35vh]":"",children:r?a.categoriesLists.categories.map(function(a){return(0,d.jsx)("div",{onClick:function(){G.replace("/productCatalog/".concat(a.category,"=1")),B(1),E("")},className:o.includes(a.category)?"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100":"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",children:a.category.length<=15?a.category:"".concat(a.category.slice(0,15),"...")},a.category_id)}):""})]}),(0,d.jsxs)("div",{id:"sort",className:"border-b-[.1px] border-black p-[1vh]",children:[(0,d.jsxs)("div",{onClick:c,className:"text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between",children:[(0,d.jsx)("p",{className:"text-[1.2rem] font-[500]",children:"Sort By"}),(0,d.jsx)("div",{className:u?"w-[5%] flex items-center justify-center rotate-90 transition duration-100":"w-[5%] flex items-center justify-center transition duration-100",children:(0,d.jsx)(i.G,{icon:j.I4f})})]}),(0,d.jsxs)("div",{className:u?"flex flex-col mt-[2vh]":"hidden",children:[(0,d.jsx)("div",{onClick:function(){G.replace("/productCatalog/sort=productPrice=ASC=1"),B(1),E("")},className:o.includes("sort=productPrice=ASC")?"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100":"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",children:"Price Asc"}),(0,d.jsx)("div",{onClick:function(){G.replace("/productCatalog/sort=productPrice=DESC=1"),B(1),E("")},className:o.includes("sort=productPrice=DESC")?"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100":"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",children:"Price Desc"}),(0,d.jsx)("div",{onClick:function(){G.replace("/productCatalog/sort=productName=ASC=1"),B(1),E("")},className:o.includes("sort=productName=ASC")?"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100":"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",children:"Name Asc"}),(0,d.jsx)("div",{onClick:function(){G.replace("/productCatalog/sort=productName=DESC=1"),B(1),E("")},className:o.includes("sort=productName=DESC")?"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100":"p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",children:"Name Desc"})]})]})]}),(0,d.jsxs)("div",{className:"w-[86%] h-[100%] flex flex-col",children:[(0,d.jsx)("div",{className:"flex w-[80%] justify-between",children:(0,d.jsxs)("div",{id:"searchbar desktop",className:"bg-[#F5F6F6] flex w-[35vw] h-[7vh] z-[2] left-[15vw] bottom-[88px] justify-end ml-[5vw]",children:[(0,d.jsx)(f.II,{onChange:function(a){E(a.target.value)},value:D,variant:"unstyled",placeholder:"Cari Obat",sx:{paddingLeft:"5%"}}),(0,d.jsx)("div",{onClick:function(){G.replace("/productCatalog/".concat(D,"=1")),B(1)},className:"bg-[#008DEB] flex items-center justify-center w-[20%] hover:cursor-pointer",children:(0,d.jsx)(m(),{src:"/landingpage/Search-desktop.png",alt:"arrow-logo",layout:"fixed",width:24,height:24})})]})}),(0,d.jsx)("div",{className:"h-[85%] flex flex-wrap overflow-auto scrollbar",children:null==x?void 0:x.map(function(b){var c;return(0,d.jsxs)("div",{className:"w-[13%] mx-[2vw] mb-[-2vh] h-[35vh] flex-none flex flex-col items-center shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",children:[(0,d.jsx)("div",{className:"w-[100%] my-[3vh] hover:cursor-pointer",children:(0,d.jsx)(m(),{unoptimized:!0,alt:"resep-logo",layout:"responsive",width:100,height:70,src:n.api_origin+b.productImage,loader:function(){return n.api_origin+b.productImage}})}),(0,d.jsx)("p",{className:"text-[12px] w-[100%]",children:b.productName.length<=25?b.productName:"".concat(b.productName.slice(0,20),"...")}),(0,d.jsxs)("div",{className:"flex bg-white w-[100%] items-center text-[#6E6E6E]",children:[(0,d.jsx)("p",{className:"text-[10px] font-[400]",children:b.packageType}),(0,d.jsx)("p",{className:"text-[10px] font-[400] mx-[1vw]",children:"-"}),(0,d.jsxs)("p",{className:"text-[10px] font-[400]",children:["Stok ",b.productStock]})]}),(0,d.jsxs)("p",{className:"font-[500] text-[12px] w-[100%]",children:["Rp.",b.productPrice.toLocaleString("id")]}),(0,d.jsx)("div",{className:"grow"}),(0,d.jsx)("div",{className:"w-[100%]",children:(0,d.jsx)(e.zx,{variant:"outline",onClick:function(){var c;(null===(c=a.session)|| void 0===c?void 0:c.user.user.isVerified)?G.replace("/detailPage/".concat(b.product_id)):G.replace("/login")},colorScheme:"linkedin",sx:{width:"100%",height:"5vh"},disabled:!(null===(c=a.session)|| void 0===c?void 0:c.user.user.isVerified),children:(0,d.jsx)("p",{className:"text-[12px]",children:"Tambah"})})})]},b.product_id)})}),(0,d.jsx)("div",{className:"w-[100%] flex justify-end",children:(0,d.jsxs)("div",{className:"w-[10%] flex justify-between",children:[(0,d.jsx)(e.zx,{size:"lg",disabled:A<=1,colorScheme:"linkedin",onClick:function(){B(A-1);var a=G.query.params.split("=");a[a.length-1]=parseInt(a[a.length-1])-1;var b=a.join("=");G.replace("/productCatalog/".concat(b))},children:"<"}),(0,d.jsx)("div",{className:"h-[100%] w-[7vw] flex items-center justify-center",children:A}),(0,d.jsx)(e.zx,{onClick:function(){B(A+1);var a=G.query.params.split("=");a[a.length-1]=parseInt(a[a.length-1])+1;var b=a.join("=");G.replace("/productCatalog/".concat(b))},disabled:!a.hasMore,size:"lg",colorScheme:"linkedin",children:">"})]})})]})]})})]})}},77220:function(a,b,c){"use strict";c.r(b),c.d(b,{API_URL:function(){return f}});var d=c(9669),e=c.n(d),f="http://localhost:8000",g=e().create({baseURL:f});b.default=g}},function(a){a.O(0,[976,357,675,61,859,774,888,179],function(){var b;return a(a.s=10803)}),_N_E=a.O()}])