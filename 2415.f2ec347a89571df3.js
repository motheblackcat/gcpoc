"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2415],{8078:(E,w,l)=>{l.d(w,{a:()=>h,b:()=>a,p:()=>m});const m=(c,...g)=>console.warn(`[Ionic Warning]: ${c}`,...g),a=(c,...g)=>console.error(`[Ionic Error]: ${c}`,...g),h=(c,...g)=>console.error(`<${c.tagName.toLowerCase()}> must be used inside ${g.join(" or ")}.`)},2415:(E,w,l)=>{l.r(w),l.d(w,{ion_toast:()=>T});var m=l(467),a=l(1705),h=l(6160),c=l(625),g=l(8078),u=l(4070),v=l(6652),e=l(1596),i=l(435);l(8745);const k=(t,o)=>{const r=(0,e.c)(),n=(0,e.c)(),d=(0,i.g)(t).querySelector(".toast-wrapper");switch(n.addElement(d),o){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const x=Math.floor(t.clientHeight/2-d.clientHeight/2);d.style.top=`${x}px`,n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return r.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},_=(t,o)=>{const r=(0,e.c)(),n=(0,e.c)(),d=(0,i.g)(t).querySelector(".toast-wrapper");switch(n.addElement(d),o){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return r.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},y=(t,o)=>{const r=(0,e.c)(),n=(0,e.c)(),d=(0,i.g)(t).querySelector(".toast-wrapper");switch(n.addElement(d),o){case"top":d.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":const x=Math.floor(t.clientHeight/2-d.clientHeight/2);d.style.top=`${x}px`,n.fromTo("opacity",.01,1);break;default:d.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return r.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},D=t=>{const o=(0,e.c)(),r=(0,e.c)(),s=(0,i.g)(t).querySelector(".toast-wrapper");return r.addElement(s).fromTo("opacity",.99,0),o.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},T=class{constructor(t){(0,a.r)(this,t),this.didPresent=(0,a.e)(this,"ionToastDidPresent",7),this.willPresent=(0,a.e)(this,"ionToastWillPresent",7),this.willDismiss=(0,a.e)(this,"ionToastWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionToastDidDismiss",7),this.customHTMLEnabled=h.c.get("innerHTMLTemplatesEnabled",c.E),this.presented=!1,this.duration=h.c.getNumber("toastDuration",0),this.layout="baseline",this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=o=>{if((0,u.i)(o.detail.role)){const n=this.getButtons().find(s=>"cancel"===s.role);this.callButtonHandler(n)}}}connectedCallback(){(0,u.e)(this.el)}present(){var t=this;return(0,m.A)(function*(){yield(0,u.d)(t,"toastEnter",k,y,t.position),t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration))})()}dismiss(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,u.f)(this,t,o,"toastLeave",_,D,this.position)}onDidDismiss(){return(0,u.g)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,u.g)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(o=>"string"==typeof o?{text:o}:o):[]}buttonClick(t){var o=this;return(0,m.A)(function*(){const r=t.role;return(0,u.i)(r)||(yield o.callButtonHandler(t))?o.dismiss(void 0,r):Promise.resolve()})()}callButtonHandler(t){return(0,m.A)(function*(){if(t?.handler)try{if(!1===(yield(0,u.s)(t.handler)))return!1}catch(o){console.error(o)}return!0})()}renderButtons(t,o){if(0===t.length)return;const r=(0,h.b)(this);return(0,a.h)("div",{class:{"toast-button-group":!0,[`toast-button-group-${o}`]:!0}},t.map(s=>(0,a.h)("button",{type:"button",class:M(s),tabIndex:0,onClick:()=>this.buttonClick(s),part:"button"},(0,a.h)("div",{class:"toast-button-inner"},s.icon&&(0,a.h)("ion-icon",{icon:s.icon,slot:void 0===s.text?"icon-only":void 0,class:"toast-button-icon"}),s.text),"md"===r&&(0,a.h)("ion-ripple-effect",{type:void 0!==s.icon&&void 0===s.text?"unbounded":"bounded"}))))}renderToastMessage(){const{customHTMLEnabled:t,message:o}=this;return t?(0,a.h)("div",{class:"toast-message",part:"message",innerHTML:(0,c.a)(o)}):(0,a.h)("div",{class:"toast-message",part:"message"},o)}render(){const{layout:t,el:o}=this,r=this.getButtons(),n=r.filter(x=>"start"===x.side),s=r.filter(x=>"start"!==x.side),d=(0,h.b)(this),b={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0},f=r.length>0?"dialog":"status";return"stacked"===t&&n.length>0&&s.length>0&&(0,g.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",o),(0,a.h)(a.H,Object.assign({"aria-live":"polite","aria-atomic":"true",role:f,tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,v.c)(this.color,Object.assign(Object.assign({[d]:!0},(0,v.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,a.h)("div",{class:b},(0,a.h)("div",{class:"toast-container",part:"container"},this.renderButtons(n,"start"),void 0!==this.icon&&(0,a.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,a.h)("div",{class:"toast-content"},void 0!==this.header&&(0,a.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&this.renderToastMessage()),this.renderButtons(s,"end"))))}get el(){return(0,a.i)(this)}},M=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},(0,v.g)(t.cssClass));T.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-baseline .toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-layout-stacked .toast-button-group-start{margin-right:8px;margin-top:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-stacked .toast-button-group-start{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-layout-baseline .toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-baseline .toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-layout-stacked .toast-button-group-end{margin-right:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-stacked .toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},6652:(E,w,l)=>{l.d(w,{c:()=>h,g:()=>g,h:()=>a,o:()=>v});var m=l(467);const a=(e,i)=>null!==i.closest(e),h=(e,i)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},i):i,g=e=>{const i={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(e).forEach(p=>i[p]=!0),i},u=/^[a-z][a-z0-9+\-.]*:/,v=function(){var e=(0,m.A)(function*(i,p,k,_){if(null!=i&&"#"!==i[0]&&!u.test(i)){const y=document.querySelector("ion-router");if(y)return p?.preventDefault(),y.push(i,k,_)}return!1});return function(p,k,_,y){return e.apply(this,arguments)}}()}}]);