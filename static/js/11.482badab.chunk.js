(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{295:function(e,a,t){"use strict";t.r(a);var n,r=t(62),i=t(7),l=t(0),o=t.n(l),c=t(211),m=t(300),u=t(239),s=t(233),d=t(285),p=t(43),b=t.n(p),f=t(18);a.default=function(){var e=Object(l.useContext)(f.a),a=Object(i.a)(e,2);Object(r.a)(a[0]);var t=a[1],p=o.a.useCallback(function(e){t({type:"setSnackbarMsg",snippet:e})},[t]),g=o.a.useState(!1),y=Object(i.a)(g,2),h=y[0],E=y[1],v=o.a.useRef(null);o.a.useEffect(function(){Object(d.loadReCaptcha)("6Le1toEUAAAAAITyNwqEMaz3hFAYzciSJDMomrgN")},[]);return o.a.createElement(c.a,{component:"form",ref:v,onSubmit:function(e){E(!0);var a=new FormData(v.current),t=a.get("name"),r=a.get("email"),i=a.get("message");e.preventDefault();var l={name:t,email:r,message:i,captcha:n};b.a.post("https://xmailerr.glitch.me/contact",l).then(function(e){console.log(e.data.status),v.current.reset(),p(e.data.status),E(!1)}).catch(function(e){e.response&&429===e.response.status&&(v.current.reset(),p("We accept limited feedback!")),E(!1)})},container:!0,required:!0,justify:"center",style:{width:"90%",maxWidth:"500px",margin:"0 auto"}},o.a.createElement(d.ReCaptcha,{sitekey:"6Le1toEUAAAAAITyNwqEMaz3hFAYzciSJDMomrgN",action:"action_name",verifyCallback:function(e){n=e,document.querySelector(".grecaptcha-badge").remove()}}),o.a.createElement(m.a,{id:"outlined-email-input",label:"Name",type:"text",name:"name",autoComplete:"name",margin:"normal",variant:"outlined",fullWidth:!0,color:"primary",required:!0}),o.a.createElement(m.a,{id:"outlined-email-input",label:"Email",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",fullWidth:!0,color:"primary",required:!0}),o.a.createElement(m.a,{id:"outlined-email-input",label:"Feedback",multiline:!0,rows:"4",type:"text",name:"message",autoComplete:"feedback",margin:"normal",variant:"outlined",fullWidth:!0,color:"primary",required:!0}),h?o.a.createElement(u.a,{style:{width:"100%",transform:"translateY(-12px)",borderRadius:"2px"}}):null,o.a.createElement(s.a,{style:{marginTop:"10px"},variant:"outlined",color:"primary",type:"submit",disabled:!!h},h?"Sending Feedback":"Send Feedback"))}}}]);
//# sourceMappingURL=11.482badab.chunk.js.map