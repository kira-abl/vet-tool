(this["webpackJsonptiho-react"]=this["webpackJsonptiho-react"]||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),i=n(19),a=n(8),c=(n(64),n(10)),l=(n(51),n(6)),r=(n(15),n(43)),d=(n(65),n(0));r.StylesManager.applyTheme("modern");var b=n(57),j=n.n(b),u=n(58),h=n.n(u),x=(n(74),n(75),function(e){return Object(d.jsxs)("div",{className:e.frameDesign,children:[Object(d.jsxs)("div",{className:"innerFrame",children:[Object(d.jsx)("div",{className:"elipse",children:Object(d.jsx)("img",{src:"/assets/images/icon.png"})}),Object(d.jsx)("div",{style:{textAlign:"center"},children:Object(d.jsxs)("p",{className:"text",children:[e.text,"  "]})})]}),Object(d.jsxs)("div",{className:e.design,children:[Object(d.jsx)("div",{style:{height:"100%"},children:e.image}),Object(d.jsx)("div",{style:{padding:"10px",minWidth:"33%",textAlign:"left"},children:Object(d.jsxs)("p",{className:"text",style:{fontSize:"10px"},children:[e.caption,"  "]})}),Object(d.jsx)("div",{children:e.icon})]}),e.button]})}),p=(n(76),function(e){var t=e.list,n={display:t?"block":"none"},o={display:t?"none":"block",fontSize:"14px",lineHeight:"23.8px",textAlign:"center"};return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"logos",children:[Object(d.jsx)("img",{src:"/assets/images/tech4logo.png",className:"image"}),Object(d.jsx)("img",{src:"/assets/images/staylogo.png",className:"image"})]}),Object(d.jsxs)("div",{children:[e.h3,Object(d.jsxs)("div",{className:"mainText",children:[Object(d.jsx)("ol",{start:e.start,style:n,children:Object(d.jsx)("li",{children:e.textNormal})}),Object(d.jsxs)("div",{style:o,children:["  ",e.textNormal,"   "]})]})]})]})}),g=(n(77),function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onClick:e.function,className:e.className,style:{width:e.width,backgroundColor:e.bcolor,height:e.height,color:e.color,border:e.border},children:[" ",e.children," "]})})}),O=function(e){Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=Object(o.useState)(null),n=Object(l.a)(t,2),s=n[0],i=n[1],c=Object(o.useState)(null),r=Object(l.a)(c,2),b=r[0],j=r[1],u=Object(o.useState)("No file chosen"),h=Object(l.a)(u,2),O=h[0],m=h[1],f=Object(o.useState)(""),v=Object(l.a)(f,2),y=v[0],N=v[1],S=Object(o.useState)("hide"),w=Object(l.a)(S,2),C=w[0],F=w[1],D=Object(o.useState)("frame"),B=Object(l.a)(D,2),A=B[0],k=B[1],R=Object(o.useRef)(),T=function(e){""===e.target.value||e.target.src.includes("close-circle.png")?(m("No file chosen"),N(""),R.current.value="",console.log("Ref",R.current.value),F("hide"),k("frame")):(console.log(e.target.src),m(e.target.files[0].name+" added successfuly"),N(e.target.files[0].name),j(URL.createObjectURL(e.target.files[0])))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Canine Body Condition Score"}),textNormal:Object(d.jsx)("p",{children:"Take a side-view picture of the dog (see example below)"}),start:"1",list:"true"}),Object(d.jsx)("div",{className:"form",children:Object(d.jsx)("input",{ref:R,type:"file",multiple:!0,onChange:function(e){!function(e){console.log(s),i(e.target.files[0]),F("show"),k("frameLarge")}(e),T(e)}})}),Object(d.jsx)(x,{text:O,caption:y,image:Object(d.jsx)("img",{src:b,className:"imageSmall"}),design:C,frameDesign:A,icon:Object(d.jsx)("img",{src:"/assets/images/close-circle.png",style:{padding:"10px"},onClick:function(e){T(e)}}),button:Object(d.jsxs)("button",{onClick:function(){R.current.click(),console.log("Ref",R.current.value)},className:"button",children:[" ","Choose file"," "]})}),Object(d.jsx)("div",{className:"example",children:Object(d.jsx)("img",{src:"/assets/images/dog_side.jpeg"})}),Object(d.jsxs)("div",{className:"buttonBox",children:[Object(d.jsx)(a.b,{to:"/validation",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"white",height:"40px",color:"#0A0A0B",className:"buttonNav1",border:"1px solid #000000",children:[" ","Back"," "]})}),Object(d.jsx)(a.b,{to:"/upload1",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"#F26A56",height:"40px",color:"#FFFFFF",className:"buttonNav1",border:"0px",children:[" ","Next"," "]})})]})]})},m=(n(78),function(e){Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=Object(o.useState)(null),n=Object(l.a)(t,2),s=n[0],i=n[1],c=Object(o.useState)(null),r=Object(l.a)(c,2),b=r[0],j=r[1],u=Object(o.useState)("No file chosen"),h=Object(l.a)(u,2),O=h[0],m=h[1],f=Object(o.useState)(""),v=Object(l.a)(f,2),y=v[0],N=v[1],S=Object(o.useState)("hide"),w=Object(l.a)(S,2),C=w[0],F=w[1],D=Object(o.useRef)(),B=Object(o.useState)("frame"),A=Object(l.a)(B,2),k=A[0],R=A[1],T=function(e){""===e.target.value||e.target.src.includes("close-circle.png")?(m("No file chosen"),N(""),D.current.value="",console.log("Ref",D.current.value),F("hide"),R("frame")):(console.log(e.target.src),m(e.target.files[0].name+" added successfuly"),N(e.target.files[0].name),j(URL.createObjectURL(e.target.files[0])))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Canine Body Condition Score"}),textNormal:Object(d.jsx)("p",{children:"Take a picture from above (see example below):"}),start:"2",list:"true"}),Object(d.jsx)("div",{className:"form",children:Object(d.jsx)("input",{ref:D,type:"file",multiple:!0,onChange:function(e){!function(e){console.log(s),i(e.target.files[0]),F("show"),R("frameLarge")}(e),T(e)}})}),Object(d.jsx)(x,{text:O,caption:y,image:Object(d.jsx)("img",{src:b,className:"imageSmall"}),design:C,frameDesign:k,icon:Object(d.jsx)("img",{src:"/assets/images/close-circle.png",style:{padding:"10px"},onClick:function(e){T(e)}}),button:Object(d.jsxs)("button",{onClick:function(){D.current.click()},className:"button",children:[" ","Choose file"," "]})}),Object(d.jsx)("div",{className:"exampleAbove",children:Object(d.jsx)("img",{src:"/assets/images/dog_above.jpeg"})}),Object(d.jsxs)("div",{className:"buttonBox",children:[Object(d.jsx)(a.b,{to:"upload",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"white",height:"40px",color:"#0A0A0B",className:"buttonNav1",border:"1px solid #000000",children:[" ","Back"," "]})}),Object(d.jsx)(a.b,{to:"upload2",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"#F26A56",height:"40px",color:"#FFFFFF",className:"buttonNav1",border:"0px",children:[" ","Next"," "]})})]})]})}),f=(n(79),function(e){Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=Object(o.useState)(null),n=Object(l.a)(t,2),s=n[0],i=n[1],c=Object(o.useState)(null),r=Object(l.a)(c,2),b=r[0],j=r[1],u=Object(o.useState)("No file chosen"),h=Object(l.a)(u,2),O=h[0],m=h[1],f=Object(o.useState)(""),v=Object(l.a)(f,2),y=v[0],N=v[1],S=Object(o.useState)("hide"),w=Object(l.a)(S,2),C=w[0],F=w[1],D=Object(o.useRef)(),B=Object(o.useState)("frame"),A=Object(l.a)(B,2),k=A[0],R=A[1],T=function(e){""===e.target.value||e.target.src.includes("close-circle.png")?(m("No file chosen"),N(""),D.current.value="",console.log("Ref",D.current.value),F("hide"),R("frame")):(console.log(e.target.src),m(e.target.files[0].name+" added successfuly"),N(e.target.files[0].name),j(URL.createObjectURL(e.target.files[0])))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Canine Body Condition Score"}),textNormal:Object(d.jsx)("p",{children:"Take a picture from the rear (see example below):"}),start:"3",list:"true"}),Object(d.jsx)("div",{className:"form",children:Object(d.jsx)("input",{ref:D,type:"file",multiple:!0,onChange:function(e){!function(e){console.log(s),i(e.target.files[0]),F("show"),R("frameLarge")}(e),T(e)}})}),Object(d.jsx)(x,{text:O,caption:y,image:Object(d.jsx)("img",{src:b,className:"imageSmall"}),design:C,frameDesign:k,icon:Object(d.jsx)("img",{src:"/assets/images/close-circle.png",style:{padding:"10px"},onClick:function(e){T(e)}}),button:Object(d.jsxs)("button",{onClick:function(){D.current.click()},className:"button",children:[" ","Choose file"," "]})}),Object(d.jsx)("div",{className:"example",children:Object(d.jsx)("img",{src:"/assets/images/dog_rear.jpeg"})}),Object(d.jsxs)("div",{className:"buttonBox",children:[Object(d.jsx)(a.b,{to:"upload1",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"white",height:"40px",color:"#0A0A0B",className:"buttonNav1",border:"1px solid #000000",children:[" ","Back"," "]})}),Object(d.jsx)(a.b,{to:"charts",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"#F26A56",height:"40px",color:"#FFFFFF",className:"buttonNav1",border:"0px",children:[" ","Next"," "]})})]})]})}),v=(n(80),function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Canine Body Condition Score"}),textNormal:Object(d.jsx)("p",{children:"Welcome to our Canine Body Condition Score App. This app is part of a research collaboration between Tech4Animals Lab, University of Haifa and Stay Labs."}),start:"1"}),Object(d.jsxs)("div",{className:"blue",children:[Object(d.jsx)("div",{className:"rectangle"}),Object(d.jsx)("div",{className:"motto",children:Object(d.jsx)("h6",{style:{color:"white"},children:"STAY HAPPY. STAY HEALTHY. STAY IN THE IDEAL BODY COMPOSITION SCORE."})}),Object(d.jsx)("img",{src:"/assets/images/dog_blueBG.png"})]}),Object(d.jsx)("div",{className:"smallText",children:Object(d.jsx)("p",{children:"Canine body condition score is a hand-on assessment and scoring tool to assess dogs' nutrition and wellbeing. Thank you for taking the time to help us in improving dogs' wellbeing."})}),Object(d.jsx)(a.b,{to:"/validation",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"165px",bcolor:"#F26A56",height:"48px",color:"#FFFFFF",className:"buttonNav",border:"0px",children:[" ","Start Now"," "]})}),Object(d.jsx)("p",{style:{textAlign:"center",fontFamily:"Poppins",fontSize:"10px",lineHeight:"17px",marginBottom:"107px"},children:"Please view our Terms and Conditions Policy"})]})}),y=(n(81),n(2)),N=n(59);n(84);function S(e){var t={defaultExpanded:e.defaultExpanded||!1,collapsedHeight:e.collapsedHeight||0},n=Object(N.a)(t),o=n.getCollapseProps,s=n.getToggleProps,i=n.isExpanded;return Object(d.jsxs)("div",{className:"collapsible",children:[Object(d.jsxs)("div",Object(y.a)(Object(y.a)({className:i?"headersHidden":"headers"},s()),{},{children:[Object(d.jsx)("div",{className:"title",children:e.title}),Object(d.jsx)("div",{className:"icon",style:{color:"#F26A56"},children:Object(d.jsx)("i",{className:"fa-solid fa-chevron-"+(i?"down":"right")})})]})),Object(d.jsx)("div",Object(y.a)(Object(y.a)({},o()),{},{children:Object(d.jsx)("div",{className:"content",children:e.children})}))]})}var w=function(){return Object(d.jsxs)("div",{className:"preferences",children:[Object(d.jsx)(S,{title:"Type 1",children:Object(d.jsx)("p",{children:"Ribs, lumbar vertebrae, pelvic bones and all bony prominences evident from a distance. No discernible body fat. Obvious loss of muscle mass."})}),Object(d.jsx)(S,{title:"Type 2",children:Object(d.jsx)("p",{children:"Ribs, lumbar vertebrae and pelvic bones easily visible. No palpable fat. Some evidence of other bony prominence. Minimal loss of muscle mass.                "})}),Object(d.jsx)(S,{title:"Type 3",children:Object(d.jsx)("p",{children:"Ribs easily palpated and may be visible with no palpable fat. Tops of lumbar vertebrae visible. Pelvic bones becoming prominent. Obvious waist.                "})}),Object(d.jsx)(S,{title:"Type 4",children:Object(d.jsx)("p",{children:"Ribs easily palpable, with minimal fat covering. Waist easily noted, viewed from above. Abdominal tuck evident.               "})}),Object(d.jsx)(S,{title:"Type 5",children:Object(d.jsx)("p",{children:"Ribs palpable without excess fat covering. Waist observed behind ribs when viewed from above. Abdomen tucked up when viewed.               "})}),Object(d.jsx)(S,{title:"Type 6",children:Object(d.jsx)("p",{children:"Ribs palpable with slight excess fat covering. Waist is discernible viewed from above but is not prominent. Abdominal tuck apparent.               "})}),Object(d.jsx)(S,{title:"Type 7",children:Object(d.jsx)("p",{children:"Ribs palpable with difficulty; heavy fat cover. Noticeable fat deposits over lumbar area and base of tail. Waist absent or barely visible. Abdominal tuck may be present.               "})}),Object(d.jsx)(S,{title:"Type 8",children:Object(d.jsx)("p",{children:"Ribs not palpable under very heavy fat cover, or palpable only with significant pressure. Heavy fat deposits over lumbar area and base of tail. Waist absent. No abdominal tuck. Obvious abdominal distension may be present               "})}),Object(d.jsx)(S,{title:"Type 9",children:Object(d.jsx)("p",{children:"Massive fat deposits over thorax, spine and base of tail. Waist and abdominal tuck absent. Fat deposits on neck and limbs. Obvious abdominal distention               "})})]})},C=n(37),F=n(38),D=n(42),B=n(41),A=n(3),k=n(33),R=[{value:"1",label:"1 - Under Ideal",color:"red"},{value:"2",label:"2 - Under Ideal",color:"#00B8D9"},{value:"3",label:"3 - Under Ideal",color:"#0052CC"},{value:"4",label:"4 - Ideal",color:"#5243AA"},{value:"5",label:"5 - Ideal",color:"#FF5630"},{value:"6",label:"6 - Over Ideal",color:"#FF8B00"},{value:"7",label:"7 - Over Ideal",color:"#FFC400"},{value:"8",label:"8 - Over Ideal",color:"#36B37E"},{value:"9",label:"9 - Over Ideal",color:"#00875A"}],T=[{value:"Unknow Mixed Breed",label:"Unknow Mixed Breed",rating:"safe"},{value:"Affenprinscher",label:"Affenprinscher",rating:"good"},{value:"Afgan Hound\t",label:"Afgan Hound\t",rating:"wild"},{value:"Afgan Shepherd\t",label:"Afgan Shepherd\t",rating:"crazy"}],I=n(30),L=n(28),E=function(e){Object(D.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(C.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isClearable:!0,isDisabled:!1,isLoading:!1,isRtl:!1,isSearchable:!0,selectedOption:null},e.props=void 0,e.handleChange=function(t,n){console.log("Option selected when clicked:",t),null===t?e.props.setData("none"):e.props.setData(t.value)},e.toggleClearable=function(){return e.setState((function(e){return{isClearable:!e.isClearable}}))},e.toggleDisabled=function(){return e.setState((function(e){return{isDisabled:!e.isDisabled}}))},e.toggleLoading=function(){return e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleRtl=function(){return e.setState((function(e){return{isRtl:!e.isRtl}}))},e.toggleSearchable=function(){return e.setState((function(e){return{isSearchable:!e.isSearchable}}))},e.toggleMenuIsOpen=function(){return e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}))},e.togglesIsFocused=function(){return e.setState((function(e){return{isFocused:!e.isFocused}}))},e}return Object(F.a)(n,[{key:"render",value:function(){this.toggleClearable,this.toggleDisabled,this.toggleLoading,this.toggleRtl,this.toggleSearchable,this.toggleMenuIsOpen,this.togglesIsFocused;var e=this.props.selectedOption,t=this.props.data;this.props.show;console.log("The current state of data is:",t);var n=this.state,s=n.isClearable,i=n.isSearchable,a=n.isDisabled,c=n.isLoading,l=n.isRtl,r=(n.menuIsOpen,n.isSelected),b=n.isFocused;n.ControlProps;return Object(d.jsx)(o.Fragment,{children:Object(d.jsx)(k.a,{styles:{placeholder:function(e){return Object(y.a)(Object(y.a)({},e),{},{fontSize:"14px",lineHeight:"23.8px",font:"Poppins",fontColor:"#87898E",fontWeight:400})},container:function(e){return Object(y.a)(Object(y.a)({},e),{},{padding:5,margin:"26px 16px auto 16px"})},control:function(e,n){return Object(y.a)(Object(y.a)({},e),{},{borderColor:"none"===t||"null"===t.value?"#87898E":"red",borderWidth:"0px 0px 1px 0px",borderRadius:"0px",boxShadow:"none",paddingLeft:0})},valueContainer:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{paddingLeft:0})},option:function(e,t){var n=t.isDisabled,o=t.isFocused,s=t.isSelected;return Object(y.a)(Object(y.a)({},e),{},{backgroundColor:n?void 0:s||o?"rgba(238, 115, 92, 0.1)":void 0,color:"rgba(24, 39, 58, 0.94)",borderRadius:"4px",margin:"auto",width:"93%",fontSize:"16px",lineHeight:"27.2.8px",font:"Poppins",fontColor:"rgba(24, 39, 58, 0.94)",fontWeight:400})},singleValue:function(e){return Object(y.a)(Object(y.a)({},e),function(){return{alignItems:"center",display:"flex",":before":{backgroundColor:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transparent",borderRadius:10,content:'"\u2713"',display:"block",color:"#EE735C",marginRight:8,height:16,width:10}}}())}},components:{DropdownIndicator:function(e){return e.selectProps.menuIsOpen?Object(d.jsx)(A.q.DropdownIndicator,Object(y.a)(Object(y.a)({},e),{},{children:Object(d.jsx)(I.a,{icon:L.b,style:{color:"#0D0D0D"}})})):Object(d.jsx)(A.q.DropdownIndicator,Object(y.a)(Object(y.a)({},e),{},{children:Object(d.jsx)(I.a,{icon:L.a,style:{color:"#0D0D0D"}})}))}},value:e,onChange:this.handleChange,placeholder:"Score by choosing from the list",className:"basic-single",classNamePrefix:"select",isDisabled:a,isLoading:c,isClearable:s,isRtl:l,isSearchable:i,name:"color",options:R,menuPlacement:"top",isSelected:r,isFocused:b})})}}]),n}(o.Component),P=function(e){Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=s.a.useState("none"),n=Object(l.a)(t,2),i=n[0],c=n[1],r=s.a.useState("hidden"),b=Object(l.a)(r,2),j=b[0],u=b[1];console.log(i),console.log(j);var h=function(e){var t=e.children;return"none"!==i?(console.log("In conditional link data is",i),Object(d.jsx)(a.b,{to:"dogs",style:{textDecoration:"none"},children:t})):(console.log("Data is empty",i),Object(d.jsx)(d.Fragment,{children:t}))};return Object(o.useEffect)((function(){"visible"===j&&"none"!==i&&u("hidden")}),[i]),Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Canine Body Condition Score"}),textNormal:Object(d.jsx)("p",{children:"Consider the following chart and evaluate the dog's body condition score (BCS*):"}),list:"true",start:"4"}),Object(d.jsx)("div",{className:"strip",children:Object(d.jsx)("img",{src:"/assets/images/condition.png"})}),Object(d.jsx)("p",{className:"smallHeader",children:"BSC:"}),Object(d.jsx)(w,{}),Object(d.jsx)(E,{data:i,setData:c,show:j,setShow:j}),Object(d.jsx)("div",{className:j,children:Object(d.jsx)("p",{style:{color:"#F26A56",marginBottom:"0px"},children:"No score chosen"})}),Object(d.jsxs)("div",{className:"buttonBox",children:[Object(d.jsx)(a.b,{to:"upload2",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"white",height:"40px",color:"#0A0A0B",className:"buttonNav1",border:"1px solid #000000",children:[" ","Back"," "]})}),Object(d.jsx)(h,{children:Object(d.jsxs)(g,{function:function(e){"none"===i&&(u("visible"),console.log("Button",j))},width:"104px",bcolor:"#F26A56",height:"40px",color:"#FFFFFF",className:"buttonNav1",border:"0px",children:[" ","Next"," "]})})]})]})},H=(n(103),n(40)),W=(n(55),function(e){Object(D.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(C.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isClearable:!0,isDisabled:!1,isLoading:!1,isRtl:!1,isSearchable:!0,selectedOption:null},e.props=void 0,e.handleChange=function(t,n){console.log("Option selected when clicked:",t),null===t?e.props.setData("none"):e.props.setData(t.value)},e.toggleClearable=function(){return e.setState((function(e){return{isClearable:!e.isClearable}}))},e.toggleDisabled=function(){return e.setState((function(e){return{isDisabled:!e.isDisabled}}))},e.toggleLoading=function(){return e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleRtl=function(){return e.setState((function(e){return{isRtl:!e.isRtl}}))},e.toggleSearchable=function(){return e.setState((function(e){return{isSearchable:!e.isSearchable}}))},e.toggleMenuIsOpen=function(){return e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}))},e.togglesIsFocused=function(){return e.setState((function(e){return{isFocused:!e.isFocused}}))},e}return Object(F.a)(n,[{key:"render",value:function(){this.toggleClearable,this.toggleDisabled,this.toggleLoading,this.toggleRtl,this.toggleSearchable,this.toggleMenuIsOpen,this.togglesIsFocused;var e=this.props.selectedOption,t=this.props.data;this.props.show;console.log("The current state of data is:",t);var n=this.state,s=n.isClearable,i=n.isSearchable,a=n.isDisabled,c=n.isLoading,l=n.isRtl,r=(n.menuIsOpen,n.isSelected),b=n.isFocused;n.ControlProps;return Object(d.jsx)(o.Fragment,{children:Object(d.jsx)(k.a,{styles:{placeholder:function(e){return Object(y.a)(Object(y.a)({},e),{},{fontSize:"14px",lineHeight:"21px",font:"Lato",fontColor:"#87898E",fontWeight:400,letterSpacing:"0.005em",marginLeft:"16px"})},container:function(e){return Object(y.a)(Object(y.a)({},e),{},{padding:5,margin:"0px 16px auto 16px"})},control:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{borderColor:"#87898E",height:"48px",width:"288px",borderWidth:"1px",borderRadius:"8px",boxShadow:"none",paddingLeft:0})},valueContainer:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{paddingLeft:0})},option:function(e,t){var n=t.isDisabled,o=t.isFocused,s=t.isSelected;return Object(y.a)(Object(y.a)({},e),{},{backgroundColor:n?void 0:s||o?"rgba(238, 115, 92, 0.1)":void 0,color:"rgba(24, 39, 58, 0.94)",borderRadius:"4px",margin:"auto",width:"93%",fontSize:"16px",lineHeight:"27.2.8px",font:"Poppins",fontColor:"rgba(24, 39, 58, 0.94)",fontWeight:400})},singleValue:function(e){return Object(y.a)(Object(y.a)({},e),function(){return{alignItems:"center",display:"flex",":before":{backgroundColor:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transparent",borderRadius:10,content:'"\u2713"',display:"block",color:"#EE735C",marginRight:8,height:16,width:10}}}())}},components:{DropdownIndicator:function(e){return e.selectProps.menuIsOpen?Object(d.jsx)(A.q.DropdownIndicator,Object(y.a)(Object(y.a)({},e),{},{children:Object(d.jsx)(I.a,{icon:L.b,style:{color:"#0D0D0D"}})})):Object(d.jsx)(A.q.DropdownIndicator,Object(y.a)(Object(y.a)({},e),{},{children:Object(d.jsx)(I.a,{icon:L.a,style:{color:"#0D0D0D"}})}))}},value:e,onChange:this.handleChange,placeholder:"Breed",className:"basic-single",classNamePrefix:"select",isDisabled:a,isLoading:c,isClearable:s,isRtl:l,isSearchable:i,name:"color",options:T,menuPlacement:"bottom",isSelected:r,isFocused:b})})}}]),n}(o.Component));function U(){var e=Object(H.a)(),t=e.register,n=e.getValues,o=e.handleSubmit,i=e.formState.errors,a=s.a.useState("none"),c=Object(l.a)(a,2),r=c[0],b=c[1],j=s.a.useState("hidden"),u=Object(l.a)(j,2),h=u[0];u[1];console.log(r),console.log(h);var x=n();console.log(x);var p=s.a.useState("radioBox"),g=Object(l.a)(p,2),O=g[0],m=g[1],f=s.a.useState("radioBox"),v=Object(l.a)(f,2),N=v[0],S=v[1],w=s.a.useState("radioBox"),C=Object(l.a)(w,2),F=C[0],D=C[1],B=s.a.useState("radioBox"),A=Object(l.a)(B,2),k=A[0],R=A[1],T=function(e){console.log(e.target.id),"radio"===e.target.id&&(m("radioBoxColor"),S("radioBox")),"radio2"===e.target.id&&(S("radioBoxColor"),m("radioBox")),"spayed"===e.target.id&&(D("radioBoxColor"),R("radioBox")),"spayed2"===e.target.id&&(R("radioBoxColor"),D("radioBox"))};return console.log(i),Object(d.jsxs)("form",{onSubmit:o((function(e){return console.log(e.value)})),children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{for:"age",children:"Age (years)"}),Object(d.jsx)("input",Object(y.a)({type:"text",id:"name",placeholder:"Age"},t("Age",{required:!0,maxLength:80})))]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{for:"weight",children:"Weight (kg)"}),Object(d.jsx)("input",Object(y.a)({type:"text",id:"name",placeholder:"Weight"},t("Weight",{required:!0,maxLength:80})))]}),Object(d.jsx)("div",{style:{marginBottom:"16px"},children:Object(d.jsx)("p",{className:"label",children:"Sex"})}),Object(d.jsxs)("div",{className:"radio",onChange:T,children:[Object(d.jsx)("div",{className:O,id:"radioBox",children:Object(d.jsxs)("label",{class:"form-control",children:[Object(d.jsx)("input",{type:"radio",name:"radio",id:"radio"}),"Male"]})}),Object(d.jsx)("div",{className:N,children:Object(d.jsxs)("label",{class:"form-control",children:[Object(d.jsx)("input",{type:"radio",name:"radio",id:"radio2"}),"Female"]})})]}),Object(d.jsx)("div",{style:{marginBottom:"16px"},children:Object(d.jsx)("p",{className:"label",children:"Spayed/Neutered"})}),Object(d.jsxs)("div",{className:"radio",onChange:T,children:[Object(d.jsx)("div",{className:F,id:"radioBox1",children:Object(d.jsxs)("label",{class:"form-control",children:[Object(d.jsx)("input",{type:"radio",name:"radio1",id:"spayed"}),"Yes"]})}),Object(d.jsx)("div",{className:k,children:Object(d.jsxs)("label",{class:"form-control",children:[Object(d.jsx)("input",{type:"radio",name:"radio1",id:"spayed2"}),"No"]})})]}),Object(d.jsx)("div",{style:{marginBottom:"16px"},children:Object(d.jsx)("p",{className:"label",children:"Breed"})}),Object(d.jsx)(W,{style:{marginTop:"0px"},data:r,setData:b,show:h,setShow:h}),Object(d.jsx)("input",{type:"submit"})]})}var M=function(e){return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Tell Us More About Your Dog"}),textNormal:Object(d.jsx)("p",{children:"Dogs' energy and nutritional requirements change as they age"})}),Object(d.jsx)(U,{}),Object(d.jsxs)("div",{className:"buttonBox",children:[Object(d.jsx)(a.b,{to:"charts",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"white",height:"40px",color:"#0A0A0B",className:"buttonNav1",border:"1px solid #000000",children:[" ","Back"," "]})}),Object(d.jsx)(a.b,{to:"thanks",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"104px",bcolor:"#F26A56",height:"40px",color:"#FFFFFF",className:"buttonNav1",border:"0px",children:[" ","Next"," "]})})]})]})},q=(n(105),function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Thank You!"}),textNormal:Object(d.jsx)("p",{children:"Your answers are being saved. Please wait to be redirected. Thanks for using our app!"}),start:"1"}),Object(d.jsx)(a.b,{to:"/",style:{textDecoration:"none",color:"#F26A56"},children:Object(d.jsxs)("p",{style:{textAlign:"center",fontWeight:"700",fontFamily:"Lato, sans-serif",fontSize:"16px",lineHeight:"20.8px",marginBottom:"107px"},children:["Start Again Without Saving ","\u2192"]})})]})});function Y(){var e=Object(H.a)(),t=e.register,n=e.getValues,o=e.handleSubmit,i=e.formState.errors,a=n();console.log(a);var c=s.a.useState("radioBox"),r=Object(l.a)(c,2),b=r[0],j=r[1],u=s.a.useState("radioBox"),h=Object(l.a)(u,2),x=h[0],p=h[1];return console.log(i),Object(d.jsxs)("form",{onSubmit:o((function(e){return console.log(e.value)})),children:[Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("input",Object(y.a)({type:"text",id:"name",placeholder:"Email Address"},t("Email",{required:!0,maxLength:80})))}),Object(d.jsx)("div",{style:{marginTop:"0px"},children:Object(d.jsx)("p",{style:{textAlign:"center",fontWeight:"400",fontFamily:"Poppins",fontSize:"14px",lineHeight:"23.8px",marginBottom:"16px",marginTop:"0px"},children:"I am a licensed veterinarian:"})}),Object(d.jsxs)("div",{className:"radio",onChange:function(e){console.log(e.target.id),"yes"===e.target.id&&(j("radioBoxColor"),p("radioBox")),"no"===e.target.id&&(p("radioBoxColor"),j("radioBox"))},children:[Object(d.jsx)("div",{className:b,id:"radioBox1",children:Object(d.jsxs)("label",{class:"form-control",children:[Object(d.jsx)("input",{type:"radio",name:"radio1",id:"yes"}),"Yes"]})}),Object(d.jsx)("div",{className:x,children:Object(d.jsxs)("label",{class:"form-control",children:[Object(d.jsx)("input",{type:"radio",name:"radio1",id:"no"}),"No"]})})]}),Object(d.jsx)("input",{type:"submit"})]})}var z=function(e){return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{h3:Object(d.jsx)("h3",{children:"Placeholder Text"}),textNormal:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"}),start:"1"}),Object(d.jsx)(Y,{}),Object(d.jsx)(a.b,{to:"/upload",style:{textDecoration:"none"},children:Object(d.jsxs)(g,{width:"165px",bcolor:"#F26A56",height:"48px",color:"#FFFFFF",className:"buttonNav",border:"0px",children:[" ","Continue"," "]})})]})},V=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(c.d,{children:[Object(d.jsx)(c.b,{exact:!0,path:"/",component:v}),Object(d.jsx)(c.b,{path:"/upload",component:O}),Object(d.jsx)(c.b,{path:"/upload1",component:m}),Object(d.jsx)(c.b,{path:"/upload2",component:f}),Object(d.jsx)(c.b,{path:"/menu",component:j.a}),Object(d.jsx)(c.b,{path:"/dashboard",component:h.a}),Object(d.jsx)(c.b,{path:"/charts",component:P}),Object(d.jsx)(c.b,{path:"/dogs",component:M}),Object(d.jsx)(c.b,{path:"/thanks",component:q}),Object(d.jsx)(c.b,{path:"/validation",component:z})]})})};Object(i.render)(Object(d.jsx)(a.a,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))},51:function(e,t,n){},55:function(e,t,n){},57:function(e,t){},58:function(e,t){},64:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.fd42e1f6.chunk.js.map