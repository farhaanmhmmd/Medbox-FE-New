(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{14843:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transaction/[user_id]",function(){return c(44334)}])},56556:function(a,b,c){"use strict";var d=c(34727),e=c(34051),f=c.n(e),g=c(85893),h=c(67294),i=c(23887),j=c(47741),k=c(41664),l=c.n(k),m=c(33299);b.Z=function(a){var b=(0,h.useState)(a.session),c=b[0],e=b[1],k=(0,h.useState)(""),n=k[0],o=k[1];function p(){return(p=(0,d.Z)(f().mark(function a(){var b,c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,m.getSession)();case 2:(b=a.sent)&&o(c=b.user.user.user_id),e(b);case 5:case"end":return a.stop()}},a)}))).apply(this,arguments)}return(0,h.useEffect)(function(){(function a(){return p.apply(this,arguments)})()},[]),(0,g.jsx)("div",{className:"h-[100px] flex items-end desktop:h-[72px] shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",children:(0,g.jsxs)("div",{className:"flex w-[100%] h-[70px] desktop:h-[100%] items-center justify-between",children:[(0,g.jsxs)("div",{className:"flex ml-[7vw] h-[70%] items-center",children:[(0,g.jsx)(l(),{href:"/",children:(0,g.jsx)(i.Ee,{className:"hover:cursor-pointer",src:"/landingpage/Medbox.svg",alt:"medbox-logo",width:"20vh"})}),(0,g.jsxs)("div",{className:"desktop:flex ml-[5vw] justify-between w-[20vw] hidden",children:[(0,g.jsx)(l(),{href:"/",children:(0,g.jsx)("p",{className:"duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",children:"Beranda"})}),(0,g.jsx)(l(),{href:"/productCatalog",children:(0,g.jsx)("p",{className:"duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",children:"Toko Obat"})}),(0,g.jsx)(l(),{href:"/transaction/".concat(n),children:(0,g.jsx)("p",{className:"duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",children:"Riwayat"})})]})]}),(0,g.jsx)("div",{className:"grow"}),(0,g.jsxs)("div",{className:"flex mr-[7vw] h-[70%] items-center w-[25vw] desktop:w-[10vw]",children:[(0,g.jsx)("div",{className:"w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(i.Ee,{src:"/landingpage/Bell.svg",alt:"bell-logo",width:"2vw"})}),(0,g.jsx)("div",{className:"w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(l(),{href:"/cart/".concat(n),children:(0,g.jsx)(i.Ee,{src:"/landingpage/Cart.svg",alt:"cart-logo",width:"2vw"})})}),(0,g.jsx)("div",{className:"desktop:hidden w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(i.Ee,{src:"/landingpage/Menu.svg",alt:"menu-logo",width:"2vw"})}),c?(0,g.jsx)("div",{className:"hidden desktop:inline w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",children:(0,g.jsx)(l(),{href:"/profile",children:(0,g.jsx)(i.Ee,{src:"/landingpage/Account.svg",alt:"menu-logo",layout:"responsive",width:20,height:20})})}):""]}),c?(0,g.jsx)("div",{className:"hidden desktop:flex desktop:ml-[-5vw]",children:(0,g.jsx)(j.zx,{onClick:function(){(0,m.signOut)()},variant:"outline",colorScheme:"linkedin",sx:{width:"6vw",height:"5vh",borderRadius:"1.2vh",marginRight:"2vw"},children:"Logout"})}):(0,g.jsx)("div",{className:"hidden desktop:flex desktop:ml-[-8vw]",children:(0,g.jsx)(l(),{href:"/login",children:(0,g.jsx)(j.zx,{variant:"outline",colorScheme:"linkedin",sx:{width:"6vw",height:"5vh",borderRadius:"1.2vh",marginRight:"2vw"},children:"Login"})})})]})})}},39499:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(77220).API_URL;a.exports={api_origin:d}},71210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},48418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(39274).Z;c(25654).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(12845).Z,f=c(38774).Z,g=e(c(67294)),h=c(76273),i=c(22725),j=c(63462),k=c(21018),l=c(57190),m=c(71210),n=c(98684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},21018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(12845).Z)(c(67294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},44334:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return s},default:function(){return t}});var d=c(34727),e=c(34051),f=c.n(e),g=c(85893),h=c(48641),i=c(22220),j=c(33299),k=c(67294),l=c(56556),m=c(47741),n=c(25675),o=c.n(n),p=c(39499);function q(a){var b=a.trans_id,c=a.productName,d=(a.transactions,a.totalPrice),e=a.status,f=a.productImage,i=e.split("_");return(0,g.jsx)("div",{children:(0,g.jsxs)(h.Ug,{bg:"gray.50",h:100,spacing:"95",my:"10",ml:"20",mr:"20",px:6,rounded:6,boxShadow:"lg",children:[(0,g.jsx)(o(),{unoptimized:!0,alt:"resep-logo",width:70,height:70,src:p.api_origin+f}),(0,g.jsx)(h.xu,{w:"180px",fontSize:"md",fontWeight:"bold",children:c}),(0,g.jsxs)(h.xu,{w:"180px",children:["Status: ",i.join(" ")]}),(0,g.jsxs)(h.xu,{w:"180px",children:["Total Price: Rp. ",d.toLocaleString("id")]}),(0,g.jsx)(h.rU,{href:"/transactionDetail/".concat(b),children:(0,g.jsx)(m.zx,{color:"linkedin.400",variant:"link",children:"Lihat Pesanan"})})]})})}var r=c(77220),s=!0,t=function(a){var b=function(){return null==e?void 0:e.map(function(b,c){return(0,g.jsx)(q,{productName:b.transaction_details[0].product.productName,productImage:b.transaction_details[0].product.productImage,status:b.status,totalPrice:b.totalPrice,trans_id:b.transaction_id,props:a},b.transaction_id)})};a.user_id;var c=(0,k.useState)([]),e=c[0],m=c[1];console.warn(e);var n=(0,k.useState)([]);n[0],n[1];var o,p=(0,k.useState)(0),s=p[0],t=p[1];(0,k.useEffect)(function(){u()},[s]);var u=(o=(0,d.Z)(f().mark(function a(){var b,c,d,e,g;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,j.getSession)();case 3:return c=(b=a.sent).user.user.user_id,d=b.user.user_token,e={headers:{Authorization:"Bearer ".concat(d)}},console.log({selected:s}),a.next=10,r.default.get("/transactions/getTransactionsByIndex/".concat(c,"/").concat(s),e);case 10:m((g=a.sent).data.data.resFetchTransactions),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),alert(a.t0.message);case 17:case"end":return a.stop()}},a,null,[[0,14]])})),function(){return o.apply(this,arguments)});return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{children:(0,g.jsx)(l.Z,{})}),(0,g.jsx)(h.xv,{fontSize:30,fontWeight:"semibold",my:8,ml:20,children:"Riwayat Pemesanan"}),(0,g.jsxs)(i.mQ,{onChange:function(a){return t(a)},mx:100,children:[(0,g.jsxs)(i.td,{children:[(0,g.jsx)(i.OK,{children:"Semua"}),(0,g.jsx)(i.OK,{children:"Diproses"}),(0,g.jsx)(i.OK,{children:"Sedang Dikirim"}),(0,g.jsx)(i.OK,{children:"Berhasil"}),(0,g.jsx)(i.OK,{children:"Tidak Berhasil"}),(0,g.jsx)(i.OK,{children:"Menunggu Pembayaran"}),(0,g.jsx)(i.OK,{children:"Menunggu Konfirmasi Pembayaran"})]}),(0,g.jsxs)(i.nP,{children:[(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})}),(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})}),(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})}),(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})}),(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})}),(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})}),(0,g.jsx)(i.x4,{children:(0,g.jsx)("div",{children:b()})})]})]})]})}},77220:function(a,b,c){"use strict";c.r(b),c.d(b,{API_URL:function(){return f}});var d=c(9669),e=c.n(d),f="http://localhost:8000",g=e().create({baseURL:f});b.default=g},41664:function(a,b,c){a.exports=c(48418)}},function(a){a.O(0,[357,675,228,220,774,888,179],function(){var b;return a(a.s=14843)}),_N_E=a.O()}])