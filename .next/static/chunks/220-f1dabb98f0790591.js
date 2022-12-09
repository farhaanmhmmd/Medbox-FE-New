"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{98053:function(a,b,c){c.d(b,{T:function(){return f}});var d=c(67294),e=c(19251);function f(a){let{value:b,defaultValue:c,onChange:f,shouldUpdate:g=(a,b)=>a!==b}=a,h=(0,e.W)(f),i=(0,e.W)(g),[j,k]=(0,d.useState)(c),l=void 0!==b,m=l?b:j,n=(0,e.W)(a=>{let b="function"==typeof a?a(m):a;i(m,b)&&(l||k(b),h(b))},[l,h,m,i]);return[m,n]}},22220:function(a,b,c){c.d(b,{OK:function(){return O},td:function(){return L},x4:function(){return M},nP:function(){return N},mQ:function(){return K}});var d=c(67294),e=c(32067),f=c(28387),g=c(54520),h=c(76734),i=a=>a?"":void 0;function j(a){let b=a.target,{tagName:c,isContentEditable:d}=b;return"INPUT"!==c&&"TEXTAREA"!==c&& !0!==d}function k(a){return a.sort((a,b)=>{let c=a.compareDocumentPosition(b);if(c&Node.DOCUMENT_POSITION_FOLLOWING||c&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(c&Node.DOCUMENT_POSITION_PRECEDING||c&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(c&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(c&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var l=a=>"object"==typeof a&&"nodeType"in a&&a.nodeType===Node.ELEMENT_NODE;function m(a,b,c){let d=a+1;return c&&d>=b&&(d=0),d}function n(a,b,c){let d=a-1;return c&&d<0&&(d=b),d}var o="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,p=a=>a,q=class{descendants=new Map;register=a=>{if(null!=a)return l(a)?this.registerNode(a):b=>{this.registerNode(b,a)}};unregister=a=>{this.descendants.delete(a);let b=k(Array.from(this.descendants.keys()));this.assignIndex(b)};destroy=()=>{this.descendants.clear()};assignIndex=a=>{this.descendants.forEach(b=>{let c=a.indexOf(b.node);b.index=c,b.node.dataset.index=b.index.toString()})};count=()=>this.descendants.size;enabledCount=()=>this.enabledValues().length;values=()=>{let a=Array.from(this.descendants.values());return a.sort((a,b)=>a.index-b.index)};enabledValues=()=>this.values().filter(a=>!a.disabled);item=a=>{if(0!==this.count())return this.values()[a]};enabledItem=a=>{if(0!==this.enabledCount())return this.enabledValues()[a]};first=()=>this.item(0);firstEnabled=()=>this.enabledItem(0);last=()=>this.item(this.descendants.size-1);lastEnabled=()=>{let a=this.enabledValues().length-1;return this.enabledItem(a)};indexOf=a=>{var b;return a?(null==(b=this.descendants.get(a))?void 0:b.index)?? -1:-1};enabledIndexOf=a=>null==a?-1:this.enabledValues().findIndex(b=>b.node.isSameNode(a));next=(a,b=!0)=>{let c=m(a,this.count(),b);return this.item(c)};nextEnabled=(a,b=!0)=>{let c=this.item(a);if(!c)return;let d=this.enabledIndexOf(c.node),e=m(d,this.enabledCount(),b);return this.enabledItem(e)};prev=(a,b=!0)=>{let c=n(a,this.count()-1,b);return this.item(c)};prevEnabled=(a,b=!0)=>{let c=this.item(a);if(!c)return;let d=this.enabledIndexOf(c.node),e=n(d,this.enabledCount()-1,b);return this.enabledItem(e)};registerNode=(a,b)=>{if(!a||this.descendants.has(a))return;let c=Array.from(this.descendants.keys()).concat(a),d=k(c);(null==b?void 0:b.disabled)&&(b.disabled=!!b.disabled);let e={node:a,index:-1,...b};this.descendants.set(a,e),this.assignIndex(d)}},[r,s]=(0,f.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=c(44040),u=c(98053),v=c(34031),w=(...a)=>a.filter(Boolean).join(" ");function x(...a){return function(b){a.some(a=>(null==a||a(b),null==b?void 0:b.defaultPrevented))}}var[y,z,A,B]=function(){let a=p(r),b=()=>p(s()),c=a=>(function(a){let b=s(),[c,e]=(0,d.useState)(-1),f=(0,d.useRef)(null);o(()=>()=>{f.current&&b.unregister(f.current)},[]),o(()=>{if(!f.current)return;let a=Number(f.current.dataset.index);c==a||Number.isNaN(a)||e(a)});let g=a?p(b.register(a)):p(b.register);return{descendants:b,index:c,enabledIndex:b.enabledIndexOf(f.current),register:(0,h.lq)(g,f)}})(a),e=()=>(function(){let a=(0,d.useRef)(new q);return o(()=>()=>a.current.destroy()),a.current})();return[a,b,e,c]}(),[C,D]=(0,f.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),[E,F]=(0,f.k)({});function G(a,b){return`${a}--tab-${b}`}function H(a,b){return`${a}--tabpanel-${b}`}var[I,J]=(0,f.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),K=(0,e.Gp)(function(a,b){let c=(0,e.jC)("Tabs",a),{children:f,className:h,...i}=(0,g.Lr)(a),{htmlProps:j,descendants:k,...l}=function(a){let{defaultIndex:b,onChange:c,index:e,isManual:f,isLazy:g,lazyBehavior:h="unmount",orientation:i="horizontal",direction:j="ltr",...k}=a,[l,m]=(0,d.useState)(b??0),[n,o]=(0,u.T)({defaultValue:b??0,value:e,onChange:c});(0,d.useEffect)(()=>{null!=e&&m(e)},[e]);let p=A(),q=(0,d.useId)(),r=a.id??q,s=`tabs-${r}`;return{id:s,selectedIndex:n,focusedIndex:l,setSelectedIndex:o,setFocusedIndex:m,isManual:f,isLazy:g,lazyBehavior:h,orientation:i,descendants:p,direction:j,htmlProps:k}}(i),m=(0,d.useMemo)(()=>l,[l]),{isFitted:n,...o}=j;return d.createElement(y,{value:k},d.createElement(C,{value:m},d.createElement(I,{value:c},d.createElement(e.m$.div,{className:w("chakra-tabs",h),ref:b,...o,__css:c.root},f))))});K.displayName="Tabs",(0,e.Gp)(function(a,b){let c=function(){let a=D(),b=z(),{selectedIndex:c,orientation:e}=a,f="horizontal"===e,g="vertical"===e,[h,i]=(0,d.useState)(()=>f?{left:0,width:0}:g?{top:0,height:0}:void 0),[j,k]=(0,d.useState)(!1);return(0,t.G)(()=>{if(null==c)return;let a=b.item(c);if(null==a)return;f&&i({left:a.node.offsetLeft,width:a.node.offsetWidth}),g&&i({top:a.node.offsetTop,height:a.node.offsetHeight});let d=requestAnimationFrame(()=>{k(!0)});return()=>{d&&cancelAnimationFrame(d)}},[c,f,g,b]),{position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:j?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",...h}}(),f={...a.style,...c},g=J();return d.createElement(e.m$.div,{ref:b,...a,className:w("chakra-tabs__tab-indicator",a.className),style:f,__css:g.indicator})}).displayName="TabIndicator";var L=(0,e.Gp)(function(a,b){let c=function(a){let{focusedIndex:b,orientation:c,direction:e}=D(),f=z(),g=(0,d.useCallback)(a=>{let d=()=>{var a;let c=f.nextEnabled(b);c&&(null==(a=c.node)||a.focus())},g=()=>{var a;let c=f.prevEnabled(b);c&&(null==(a=c.node)||a.focus())},h=()=>{var a;let b=f.firstEnabled();b&&(null==(a=b.node)||a.focus())},i=()=>{var a;let b=f.lastEnabled();b&&(null==(a=b.node)||a.focus())},j="horizontal"===c,k="vertical"===c,l=a.key,m={["ltr"===e?"ArrowLeft":"ArrowRight"]:()=>j&&g(),["ltr"===e?"ArrowRight":"ArrowLeft"]:()=>j&&d(),ArrowDown:()=>k&&d(),ArrowUp:()=>k&&g(),Home:h,End:i}[l];m&&(a.preventDefault(),m(a))},[f,b,c,e]);return{...a,role:"tablist","aria-orientation":c,onKeyDown:x(a.onKeyDown,g)}}({...a,ref:b}),f=J(),g={display:"flex",...f.tablist};return d.createElement(e.m$.div,{...c,className:w("chakra-tabs__tablist",a.className),__css:g})});L.displayName="TabList";var M=(0,e.Gp)(function(a,b){let c=function(a){let{children:b,...c}=a,{isLazy:e,lazyBehavior:f}=D(),{isSelected:g,id:h,tabId:i}=F(),j=(0,d.useRef)(!1);g&&(j.current=!0);let k=function(a){let{wasSelected:b,enabled:c,isSelected:d,mode:e="unmount"}=a;return!c||!!d||"keepMounted"===e&&!!b}({wasSelected:j.current,isSelected:g,enabled:e,mode:f});return{tabIndex:0,...c,children:k?b:null,role:"tabpanel","aria-labelledby":i,hidden:!g,id:h}}({...a,ref:b}),f=J();return d.createElement(e.m$.div,{outline:"0",...c,className:w("chakra-tabs__tab-panel",a.className),__css:f.tabpanel})});M.displayName="TabPanel";var N=(0,e.Gp)(function(a,b){let c=function(a){let b=D(),{id:c,selectedIndex:e}=b,f=(0,v.W)(a.children),g=f.map((a,b)=>(0,d.createElement)(E,{key:b,value:{isSelected:b===e,id:H(c,b),tabId:G(c,b),selectedIndex:e}},a));return{...a,children:g}}(a),f=J();return d.createElement(e.m$.div,{...c,width:"100%",ref:b,className:w("chakra-tabs__tab-panels",a.className),__css:f.tabpanels})});N.displayName="TabPanels";var O=(0,e.Gp)(function(a,b){let c=J(),f=function(a){let{isDisabled:b,isFocusable:c,...e}=a,{setSelectedIndex:f,isManual:g,id:k,setFocusedIndex:l,selectedIndex:m}=D(),{index:n,register:o}=B({disabled:b&&!c}),p=n===m,q=()=>{f(n)},r=()=>{l(n),g||b&&c||f(n)},s=function(a={}){let{ref:b,isDisabled:c,isFocusable:e,clickOnEnter:f=!0,clickOnSpace:g=!0,onMouseDown:k,onMouseUp:l,onClick:m,onKeyDown:n,onKeyUp:o,tabIndex:p,onMouseOver:q,onMouseLeave:r,...s}=a,[t,u]=(0,d.useState)(!0),[v,w]=(0,d.useState)(!1),x=function(){let a=(0,d.useRef)(new Map),b=a.current,c=(0,d.useCallback)((b,c,d,e)=>{a.current.set(d,{type:c,el:b,options:e}),b.addEventListener(c,d,e)},[]),e=(0,d.useCallback)((b,c,d,e)=>{b.removeEventListener(c,d,e),a.current.delete(d)},[]);return(0,d.useEffect)(()=>()=>{b.forEach((a,b)=>{e(a.el,a.type,b,a.options)})},[e,b]),{add:c,remove:e}}(),y=a=>{a&&"BUTTON"!==a.tagName&&u(!1)},z=c&&!e,A=(0,d.useCallback)(a=>{if(c){a.stopPropagation(),a.preventDefault();return}let b=a.currentTarget;b.focus(),null==m||m(a)},[c,m]),B=(0,d.useCallback)(a=>{v&&j(a)&&(a.preventDefault(),a.stopPropagation(),w(!1),x.remove(document,"keyup",B,!1))},[v,x]),C=(0,d.useCallback)(a=>{if(null==n||n(a),c||a.defaultPrevented||a.metaKey||!j(a.nativeEvent)||t)return;let b=f&&"Enter"===a.key,d=g&&" "===a.key;if(d&&(a.preventDefault(),w(!0)),b){a.preventDefault();let e=a.currentTarget;e.click()}x.add(document,"keyup",B,!1)},[c,t,n,f,g,x,B]),D=(0,d.useCallback)(a=>{if(null==o||o(a),c||a.defaultPrevented||a.metaKey||!j(a.nativeEvent)||t)return;let b=g&&" "===a.key;if(b){a.preventDefault(),w(!1);let d=a.currentTarget;d.click()}},[g,t,c,o]),E=(0,d.useCallback)(a=>{0===a.button&&(w(!1),x.remove(document,"mouseup",E,!1))},[x]),F=(0,d.useCallback)(a=>{if(0!==a.button)return;if(c){a.stopPropagation(),a.preventDefault();return}t||w(!0);let b=a.currentTarget;b.focus({preventScroll:!0}),x.add(document,"mouseup",E,!1),null==k||k(a)},[c,t,k,x,E]),G=(0,d.useCallback)(a=>{0===a.button&&(t||w(!1),null==l||l(a))},[l,t]),H=(0,d.useCallback)(a=>{if(c){a.preventDefault();return}null==q||q(a)},[c,q]),I=(0,d.useCallback)(a=>{v&&(a.preventDefault(),w(!1)),null==r||r(a)},[v,r]),J=(0,h.lq)(b,y);return t?{...s,ref:J,type:"button","aria-disabled":z?void 0:c,disabled:z,onClick:A,onMouseDown:k,onMouseUp:l,onKeyUp:o,onKeyDown:n,onMouseOver:q,onMouseLeave:r}:{...s,ref:J,role:"button","data-active":i(v),"aria-disabled":c?"true":void 0,tabIndex:z?void 0:t?p:p||0,onClick:A,onMouseDown:F,onMouseUp:G,onKeyUp:D,onKeyDown:C,onMouseOver:H,onMouseLeave:I}}({...e,ref:(0,h.lq)(o,a.ref),isDisabled:b,isFocusable:c,onClick:x(a.onClick,q)});return{...s,id:G(k,n),role:"tab",tabIndex:p?0:-1,type:"button","aria-selected":p,"aria-controls":H(k,n),onFocus:b?void 0:x(a.onFocus,r)}}({...a,ref:b}),g={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...c.tab};return d.createElement(e.m$.button,{...f,className:w("chakra-tabs__tab",a.className),__css:g})});O.displayName="Tab"}}])