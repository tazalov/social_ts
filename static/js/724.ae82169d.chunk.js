"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[724],{9724:function(e,r,a){a.r(r),a.d(r,{Login:function(){return h},default:function(){return x}});var t=a(4424),s=a(971),i=a(885),n=a(2163),c=a(390),l=a(8590),p=a(4262),o=a(8012),u=a(2559),m=function(e){var r=e.captcha,a=e.error,t=e.loginUser,s={email:"",password:"",captcha:r,remember:!1},m=(0,c.useState)(!0),d=(0,i.Z)(m,2),h=d[0],x=d[1];(0,c.useEffect)((function(){return x(!0),function(){x(!1)}}),[]);return(0,u.jsx)(n.J9,{initialValues:s,onSubmit:function(e,r){t(e.email,e.password,e.remember,e.captcha),h&&r.setSubmitting(!1)},validationSchema:o.p,children:function(e){var t=e.errors,s=e.touched,i=e.isSubmitting;return(0,u.jsx)(n.l0,{style:{maxWidth:"500px",margin:"20px auto"},children:(0,u.jsxs)(l.C.FlexWrapper,{$direction:"column",$gap:"20px",$justify:"center",$align:"center",children:[(0,u.jsx)(n.gN,{as:p.II,label:"E-mail *",name:"email",type:"email",placeholder:"Enter you email",error:t.email&&s.email,errorText:t.email,style:{padding:"10px"}}),(0,u.jsx)(n.gN,{as:p.II,label:"Password *",name:"password",type:"password",placeholder:"Enter your password",error:t.password&&s.password,errorText:t.password,style:{padding:"10px"}}),(0,u.jsx)(n.gN,{as:p.II,label:"Remember me",name:"remember",type:"checkbox"}),r&&(0,u.jsx)(n.gN,{as:p.II,label:(0,u.jsx)("img",{src:r,alt:"asd"}),name:"captcha",type:"text",placeholder:"Enter captcha",error:t.captcha&&s.captcha,errorText:t.captcha,style:{padding:"10px"}}),a&&(0,u.jsx)(p.ME,{children:a}),i?(0,u.jsx)(p.gb,{}):(0,u.jsx)(p.zx,{type:"submit",title:"login",disable:Object.keys(t).length>0})]})})}})},d=a(3999),h=function(e){var r=e.isAuth,a=e.captcha,t=e.error,i=e.loginUser;return r?(0,u.jsx)(s.l_,{to:"/profile"}):(0,u.jsxs)(l.C.FlexWrapper,{$gap:"10px",$direction:"column",$justify:"center",$shadow:!0,children:[(0,u.jsx)(p.Eq,{title:"LOGIN"}),(0,u.jsx)(m,{error:t,captcha:a,loginUser:i})]})},x=(0,t.$j)((function(e){return{isAuth:e.app.isAuth,captcha:e.app.captcha,error:e.app.error}}),{loginUser:d.pH})(h)}}]);
//# sourceMappingURL=724.ae82169d.chunk.js.map