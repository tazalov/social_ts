"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[940],{940:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,s,i,u=t(5671),a=t(3144),l=t(136),c=t(3668),p=t(390),f=t(4424),d=t(8028),g=t(6369),h=t(168),m=t(7309),w=t(8590),x=t(2503),j={User:(0,m.ZP)(w.C.FlexWrapper)(r||(r=(0,h.Z)(["\n  padding: 10px;\n  transition: all 0.3s ease;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.thirdBg})),Name:m.ZP.div(o||(o=(0,h.Z)(["\n  ",";\n  font-size: 22px;\n"])),x.F.Subtitle),Status:m.ZP.div(s||(s=(0,h.Z)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(n){var e=n.theme,t=e.name,r=e.colors;return"light"===t?r.primaryFont:r.secondaryFont}))},v=t(4873),Z=t(5077),P=t(5419),C=t(2559),y=function(n){var e=n.user,t=n.follow,r=n.unfollow,o=n.progressFollow,s=e.id,i=e.name,u=e.status,a=e.followed,l=e.photos,c=u?(0,P.z)(u,15):"No status";return(0,C.jsxs)(j.User,{$direction:"column",$align:"center",$gap:"20px",children:[(0,C.jsx)(g.OL,{to:"/profile/".concat(s),children:(0,C.jsx)(Z.qE,{img:l.small||v,w:100,h:100})}),(0,C.jsx)(j.Name,{children:(0,P.z)(i,10)}),(0,C.jsx)(j.Status,{children:c}),o.userId.some((function(n){return n===s}))?(0,C.jsx)(Z.gb,{}):(0,C.jsx)(Z.EJ,{title:a?"unfollow":"follow",callback:a?function(){return r(s)}:function(){return t(s)},disable:o.userId.includes(s)})]})},z={Users:(0,m.ZP)(w.C.ShadowContainer)(i||(i=(0,h.Z)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n"])))},F=t(5158),U=t(9936),b=function(n){(0,l.Z)(t,n);var e=(0,c.Z)(t);function t(){return(0,u.Z)(this,t),e.apply(this,arguments)}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.list,t=n.pageSize,r=n.currentPage,o=n.getUsers;e.length||o(r,t)}},{key:"componentDidUpdate",value:function(n){var e=this.props,t=e.pageSize,r=e.currentPage,o=e.getUsers;r!==n.currentPage&&o(r,t)}},{key:"render",value:function(){var n=this.props,e=n.list,t=n.totalCount,r=n.pageSize,o=n.currentPage,s=n.isPageLoading,i=n.setFollow,u=n.setUnfollow,a=n.setCurrentPage,l=n.progressFollow;return s?(0,C.jsx)(Z.p9,{size:150}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z.nw,{pageSize:r,currentPage:o,totalCount:t,setPage:a}),(0,C.jsx)(z.Users,{children:e.map((function(n){return(0,C.jsx)(y,{user:n,follow:i,unfollow:u,progressFollow:l},n.id)}))})]})}}]),t}(p.Component),k=(0,d.qC)((0,f.$j)(F.tK,{setFollow:F.vl,setUnfollow:F.mj,setCurrentPage:F.D4,getUsers:F.Rf}),U.r)(b)},9936:function(n,e,t){t.d(e,{r:function(){return l}});var r=t(1413),o=t(5987),s=(t(390),t(4424)),i=t(971),u=t(2559),a=["isAuth"],l=function(n){return(0,s.$j)((function(n){return{isAuth:n.app.isAuth}}))((function(e){var t=e.isAuth,s=(0,o.Z)(e,a);return t?(0,u.jsx)(n,(0,r.Z)({},s)):(0,u.jsx)(i.l_,{to:"/login"})}))}},5419:function(n,e,t){t.d(e,{z:function(){return r}});var r=function(n,e){return n.length>e?"".concat(n.slice(0,e-1),"..."):n}},4873:function(n,e,t){n.exports=t.p+"static/media/anynft.a2c31cf8619462c6524b.webp"}}]);
//# sourceMappingURL=940.8624837c.chunk.js.map