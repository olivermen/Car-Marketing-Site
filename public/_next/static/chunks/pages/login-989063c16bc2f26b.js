(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{42070:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(72038)}])},88942:function(e,n,r){"use strict";var t=r(85893),o=r(11496),a=r(79172),i=(0,o.ZP)(a.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));n.Z=function(e){var n=e.children;return(0,t.jsx)(i,{className:"layout-wrapper",children:(0,t.jsx)(a.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:n})})}},72038:function(e,n,r){"use strict";r.r(n);var t=r(85893),o=r(67294),a=r(41664),i=r.n(a),s=r(50122),l=r(63030),d=r(69368),c=r(50135),u=r(33841),m=r(93946),p=r(79172),h=r(94054),f=r(98396),x=r(57709),g=r(11496),w=r(2734),v=r(56815),b=r(87109),j=r(15861),Z=r(50480),y=r(95898),k=r(42218),P=r(74231),C=r(42283),W=r(95496),S=r(17288),_=r(19550),E=r(51514),N=r(30152),O=r(88942);function B(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}(0,g.ZP)(p.Z)((function(e){var n=e.theme;return B({padding:n.spacing(0),paddingRight:"0 !important"},n.breakpoints.down("lg"),{padding:n.spacing(0)})})),(0,g.ZP)("img")((function(e){var n,r=e.theme;return B(n={maxWidth:"100vw",height:"100vh"},r.breakpoints.down("xl"),{maxWidth:"100%"}),B(n,r.breakpoints.down("lg"),{maxWidth:"100%"}),n}));var I=(0,g.ZP)("img")((function(e){var n,r=e.theme;return B(n={maxWidth:"15rem"},r.breakpoints.down("xl"),{maxWidth:"11rem"}),B(n,r.breakpoints.down("lg"),{maxWidth:"7rem"}),n})),z=(0,g.ZP)(p.Z)((function(e){var n,r=e.theme;return B(n={width:"100%"},r.breakpoints.up("md"),{maxWidth:400}),B(n,r.breakpoints.up("lg"),{maxWidth:450}),n})),F=(0,g.ZP)(p.Z)((function(e){return B({width:"100%"},e.theme.breakpoints.down("md"),{maxWidth:400})})),H=(0,g.ZP)(j.Z)((function(e){var n=e.theme;return B({fontWeight:600,letterSpacing:"0.18px",marginBottom:n.spacing(1.5)},n.breakpoints.down("md"),{marginTop:n.spacing(8)})})),L=(0,g.ZP)(Z.Z)((function(e){return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:e.theme.palette.text.secondary}}})),X=P.Ry().shape({email:P.Z_().email().required(),password:P.Z_().min(5).required()}),q={password:"admin",email:"admin@materialize.com"};var M=function(){var e=(0,o.useState)(!1),n=e[0],r=e[1],a=(0,o.useState)("Email and Password are incorrect!"),g=(a[0],a[1],(0,o.useState)(!1)),Z=(g[0],g[1],(0,o.useState)(!1)),P=(Z[0],Z[1]),O=(0,o.useState)(0),M=O[0],R=O[1],D=(0,S.a)(),T=(0,w.Z)(),Q=((0,_.Z)(),(0,E.r)()),V=Q.settings,A=Q.saveSettings,G=(0,f.Z)(T.breakpoints.down("md")),J=V.skin;(0,o.useEffect)((function(){A(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){B(e,n,r[n])}))}return e}({},V,B({},"mode","dark")))}),[]);var K=(0,C.cI)({defaultValues:q,mode:"onBlur",resolver:(0,W.X)(X)}),U=K.control,Y=K.setError,$=K.handleSubmit,ee=K.formState.errors,ne="bordered"===J?"auth-v2-login-illustration-bordered":"auth-v2-login-illustration";return(0,t.jsxs)(p.Z,{className:"content-right",children:[G?null:(0,t.jsx)(p.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,t.jsx)("div",{style:{background:"url(/images/pages/".concat(ne,"-").concat(T.palette.mode,".png)"),bakcgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",height:"100vh"}})}),(0,t.jsx)(z,{sx:"bordered"!==J||G?{}:{borderLeft:"1px solid ".concat(T.palette.divider)},children:(0,t.jsx)(p.Z,{sx:{p:7,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper"},children:(0,t.jsxs)(F,{children:[(0,t.jsx)(p.Z,{sx:{top:30,left:40,display:"flex",position:"absolute",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(i(),{href:"http://inspecturo.com",children:(0,t.jsx)(I,{alt:"login-title",src:"/images/pages/".concat("inspecturo-turo-owner-software-logo","-").concat(T.palette.mode,".png")})})}),(0,t.jsxs)(p.Z,{sx:{mb:6},children:[(0,t.jsx)(H,{variant:"h5",children:"Welcome to ".concat(N.Z.templateName,"! \ud83d\udc4b\ud83c\udffb")}),(0,t.jsxs)(j.Z,{variant:"body2",children:[" ","Please sign-in to your account and open up a world of opportunities and data"]})]}),(0,t.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:$((function(e){if(3!=M){R((function(e){return e+1})),P(!0);var n=e.email,r=e.password;D.login({email:n,password:r},(function(e){var n=e.email?"email":"password",r=e.email?e.email:e.password;Y(n,{type:"manual",message:r})})),P(!1)}})),children:[(0,t.jsxs)(h.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(C.Qr,{name:"email",control:U,rules:{required:!0},render:function(e){var n=e.field,r=n.value,o=n.onChange,a=n.onBlur;return(0,t.jsx)(c.Z,{autoFocus:!0,label:"Email",value:r,onBlur:a,onChange:o,error:Boolean(ee.email),placeholder:"admin@materialize.com"})}}),ee.email&&(0,t.jsx)(v.Z,{sx:{color:"error.main"},children:ee.email.message})]}),(0,t.jsxs)(h.Z,{fullWidth:!0,children:[(0,t.jsx)(u.Z,{htmlFor:"auth-login-v2-password",error:Boolean(ee.password),children:"Password"}),(0,t.jsx)(C.Qr,{name:"password",control:U,rules:{required:!0},render:function(e){var o=e.field,a=o.value,i=o.onChange,s=o.onBlur;return(0,t.jsx)(x.Z,{value:a,onBlur:s,label:"Password",onChange:i,id:"auth-login-v2-password",error:Boolean(ee.password),type:n?"text":"password",endAdornment:(0,t.jsx)(b.Z,{position:"end",children:(0,t.jsx)(m.Z,{edge:"end",onMouseDown:function(e){return e.preventDefault()},onClick:function(){return r(!n)},children:n?(0,t.jsx)(y.Z,{}):(0,t.jsx)(k.Z,{})})})})}}),ee.password&&(0,t.jsx)(v.Z,{sx:{color:"error.main"},id:"",children:ee.password.message})]}),(0,t.jsxs)(p.Z,{sx:{mb:4,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,t.jsx)(L,{label:"Remember Me",control:(0,t.jsx)(d.Z,{}),sx:{"& .MuiFormControlLabel-label":{color:"text.primary"}}}),(0,t.jsx)(i(),{passHref:!0,href:"/forgot-password",children:(0,t.jsx)(j.Z,{component:s.Z,variant:"body2",sx:{color:"primary.main"},children:"Forgot Password?"})})]}),(0,t.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:7},children:"Login"}),(0,t.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,t.jsx)(j.Z,{component:"div",sx:{mr:2,color:"text.secondary"},children:"New on our platform?"}),(0,t.jsx)(j.Z,{children:(0,t.jsx)(i(),{passHref:!0,href:"/register",children:(0,t.jsx)(j.Z,{component:s.Z,sx:{color:"primary.main"},children:"Create an account"})})})]})]})]})})})]})};M.getLayout=function(e){return(0,t.jsx)(O.Z,{children:e})},M.guestGuard=!0,n.default=M}},function(e){e.O(0,[959,531,585,774,888,179],(function(){return n=42070,e(e.s=n);var n}));var n=e.O();_N_E=n}]);