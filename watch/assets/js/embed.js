(function(g){var window=this;var V4=function(a){g.S.call(this,{D:"button",W:["ytp-button","ytp-back-button"],K:[{D:"div",I:"ytp-arrow-back-icon",K:[g.X?{D:"div",W:["ytp-icon","ytp-icon-arrow-back"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 -12 36 36",width:"100%"},K:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",Ma:!0,N:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",fill:"#fff"}}]}]}]});this.u=a;g.qu(this,a.P().showBackButton);this.ha("click",this.w)},W4=function(a,b){g.S.call(this,{D:"div",
I:"ytp-pause-overlay"});this.u=a;this.ca=b;this.A=new g.Ts(this);g.B(this,this.A);this.U=new g.kN(this,1E3,!1,100);g.B(this,this.U);var c=a.P();"0"==c.controlsType&&g.K(g.kL(a),"ytp-pause-overlay-controls-hidden");this.C=[];this.w=[];this.F=0;this.ea=c.u;this.Y=!1;this.ra=0;this.S=new g.S({D:"h2",I:"ytp-related-title",V:"{{title}}"});g.B(this,this.S);this.S.aa(this.element);this.G=new g.S({D:"div",I:"ytp-suggestions"});g.B(this,this.G);this.G.aa(this.element);this.O=new g.S({D:"button",W:["ytp-button",
"ytp-previous"],N:{"aria-label":"\u663e\u793a\u4e4b\u524d\u7684\u63a8\u8350\u89c6\u9891"},K:[g.oN()]});g.B(this,this.O);this.O.aa(this.element);this.O.ha("click",this.FG,this);var d=g.Ms||g.kh?{style:"will-change: opacity"}:null;this.ga=new g.WN((0,g.x)(this.dy,this));g.B(this,this.ga);for(var e=this.ka=this.Z=this.B=0;16>e;e++){var f=new g.S({D:"a",I:"ytp-suggestion-link",N:{href:"{{link}}",target:c.A,"aria-label":"{{aria_label}}"},K:[{D:"div",I:"ytp-suggestion-image"},{D:"div",I:"ytp-suggestion-overlay",
N:d,K:[{D:"div",I:"ytp-suggestion-title",V:"{{title}}"},{D:"div",I:"ytp-suggestion-author",V:"{{author_and_views}}"},{D:"div",N:{"data-is-live":"{{is_live}}"},I:"ytp-suggestion-duration",V:"{{duration}}"}]}]});g.B(this,f);f.aa(this.G.element);var k=f.o["ytp-suggestion-link"];g.hh(k,"transitionDelay",e/20+"s");this.A.L(k,"click",g.Na(this.GG,e));this.C.push(f)}this.J=new g.S({D:"button",W:["ytp-button","ytp-next"],N:{"aria-label":"\u663e\u793a\u66f4\u591a\u63a8\u8350\u89c6\u9891"},K:[g.pN()]});g.B(this,
this.J);this.J.aa(this.element);this.J.ha("click",this.EG,this);c=new g.S({D:"button",W:["ytp-button","ytp-collapse"],N:{"aria-label":"\u5173\u95ed"},K:[g.X?{D:"div",W:["ytp-icon","ytp-icon-small-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 16 16",width:"100%"},K:[{D:"path",N:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.B(this,c);c.aa(this.element);c.ha("click",this.IJ,this);this.H=new g.S({D:"button",W:["ytp-button","ytp-expand"],V:"\u66f4\u591a\u89c6\u9891"});
g.B(this,this.H);this.H.aa(this.element);this.H.ha("click",this.JJ,this);this.A.L(this.u,"appresize",this.Gr);this.A.L(this.u,"fullscreentoggled",this.HG);this.A.L(this.u,"presentingplayerstatechange",this.IG);this.A.L(this.u,"videodatachange",this.JG);this.Gr(g.jL(this.u).getPlayerSize())},bqa=function(a,b){var c=g.jd(b,a.F-a.w.length*(a.Z+8),0);
a.ga.start(a.B,c,1E3);a.B=c;X4(a)},X4=function(a){var b=a.ca.Xb();
b=a.ka/2+(b?32:16);a.J.element.style.bottom=b+"px";a.O.element.style.bottom=b+"px";b=a.B;var c=a.F-a.w.length*(a.Z+8);g.L(a.element,"ytp-scroll-min",0<=b);g.L(a.element,"ytp-scroll-max",b<=c)},cqa=function(a){for(var b=0;b<a.w.length;b++){var c=a.w[b].xa(),d=a.C[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.M0.test(c.title)&&(d.o["ytp-suggestion-title"].dir="rtl");g.M0.test(e)&&(d.o["ytp-suggestion-author"].dir="rtl");var f=void 0;c.ua?f="\u76f4\u64ad":f=c.lengthSeconds?g.gN(c.lengthSeconds):"";var k=c.ri();g.ey(a.u.P())&&(k=g.Tg(k,g.aE({},"emb_rel_pause")));d.update({author_and_views:e,duration:f,link:k,title:c.title,aria_label:c.Cj||null,is_live:c.ua});d=d.o["ytp-suggestion-image"];c=c.uc();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.C.length;b++)a.C[b].element.style.display=
"none";X4(a)},Y4=function(a){g.VQ.call(this,a);
this.o=a;this.load()};
g.r(V4,g.S);V4.prototype.w=function(){this.u.ma("BACK_CLICKED")};g.r(W4,g.S);g.h=W4.prototype;g.h.hide=function(){g.fn(g.kL(this.u),"ytp-expand-pause-overlay");g.S.prototype.hide.call(this)};
g.h.IJ=function(){this.Y=!0;g.fn(g.kL(this.u),"ytp-expand-pause-overlay");this.H.focus()};
g.h.JJ=function(){this.Y=!1;g.K(g.kL(this.u),"ytp-expand-pause-overlay")};
g.h.EG=function(){bqa(this,this.B-this.F)};
g.h.FG=function(){bqa(this,this.B+this.F)};
g.h.GG=function(a,b){if(1E3>(0,g.Pq)()-this.ra)g.jr(b),document.activeElement.blur();else{var c=this.w[a],d=c.Gb;if(g.bO(b,this.u,this.ea,d||void 0)){var e=c.xa().videoId;c=c.getPlaylistId();g.IU(this.u.app,e,d,c,void 0,void 0)}}};
g.h.HG=function(){this.Gr(g.jL(this.u).getPlayerSize())};
g.h.IG=function(a){if(!(g.W(a.state,1)||g.W(a.state,16)||g.W(a.state,32))){var b=!g.T(this.u.P().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.W(a.state,2048);!g.W(a.state,4)||g.W(a.state,2)||b?this.U.hide():this.w.length&&(this.Y||(g.K(g.kL(this.u),"ytp-expand-pause-overlay"),X4(this)),this.U.show(),this.ra=(0,g.Pq)())}};
g.h.Gr=function(a){var b=16/9,c=this.ca.Xb();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.C.length;d++){var e=this.C[d].o["ytp-suggestion-image"];e.style.width=c+"px";e.style.height=b+"px"}this.G.element.style.height=b+"px";this.Z=c;this.ka=b;this.F=a;this.B=0;this.dy(0);X4(this)};
g.h.JG=function(){var a=this,b=this.u.P(),c=this.u.getVideoData();this.ea=c.jc?!1:b.u;if(c.suggestions){var d=(0,g.Rd)(c.suggestions,function(e){return e&&!e.list});
this.w=(0,g.wf)(d,function(e){e=g.VN(b,e);g.B(a,e);return e})}else this.w.length=0;
cqa(this);c.jc?this.S.update({title:g.UN("\u6765\u81ea\u201c$DNI_RELATED_CHANNEL\u201d\u9891\u9053\u7684\u66f4\u591a\u89c6\u9891",{DNI_RELATED_CHANNEL:c.author})}):this.S.update({title:"\u66f4\u591a\u89c6\u9891"})};
g.h.dy=function(a){this.G.element.scrollLeft=-a};g.r(Y4,g.VQ);Y4.prototype.nf=function(){return!1};
Y4.prototype.create=function(){var a=this.o.P(),b=g.rD(this.o);if(a.showBackButton){var c=g.zd("ytp-chrome-top",g.kL(this.o));this.u=new V4(this.o);g.B(this,this.u);this.u.aa(c)}a.Ja&&(this.w=new W4(this.o,b),g.B(this,this.w),g.EL(this.o,this.w.element,4));g.BL(this.player,"embed")};g.jR.embed=Y4;})(_yt_player);
