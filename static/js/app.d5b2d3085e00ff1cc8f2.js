webpackJsonp([0],{"+Ktz":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"}},[e("wv-tab",[e("wv-navbar",{attrs:{items:t.items,selected:t.selected},on:{"update:selected":function(a){t.selected=a}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_0,expression:"show_0"}],staticClass:"weui-tab__panel tab-panel"},[e("p",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticClass:"weui-tab__panel tab-panel"},[e("p",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticClass:"weui-tab__panel tab-panel"},[e("p",{staticStyle:{"text-align":"center"}},[t._v("3")])])],1)],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},"1qah":function(t,a,e){"use strict";a.a={name:"navbar",data:function(){return{items:["选项一","选项二","选项三"],selected:1}},computed:{show_0:function(){return 0===this.selected},show_1:function(){return 1===this.selected},show_2:function(){return 2===this.selected}}}},"2CrD":function(t,a,e){"use strict";var s=e("7+uW"),n=e("/ocq"),i=e("PWjF"),l=e("i6JC"),r=e("iSv0"),o=e("eyo9"),c=e("wv4L"),v=e("huH9"),u=e("kHmC"),p=e("RIiq"),_=e("GTLN"),d=e("ewGH"),m=e("Qmpj"),w=e("ghM3"),h=e("EHoA"),g=e("qVOh"),f=e("5vpR"),b=e("C02y");s.a.use(n.a),a.a=new n.a({routes:[{path:"/",name:"Index",component:i.a},{path:"/action-sheet",name:"ActionSheet",component:l.a},{path:"/button",name:"Button",component:r.a},{path:"/cell",name:"Cell",component:o.a},{path:"/toast",name:"Toast",component:c.a},{path:"/dialog",name:"Dialog",component:v.a},{path:"/progress",name:"Progress",component:u.a},{path:"/message",name:"Message",component:p.a},{path:"/article",name:"Article",component:_.a},{path:"/icon",name:"Icon",component:d.a},{path:"/panel",name:"Panel",component:m.a},{path:"/girds",name:"Girds",component:w.a},{path:"/tabbar",name:"Tabbar",component:h.a},{path:"/navbar",name:"Navbar",component:g.a},{path:"/search",name:"SearchBar",component:f.a},{path:"/bar",name:"Bar",component:b.a}]})},"2ikh":function(t,a,e){"use strict";a.a={name:"tabbar",data:function(){return{imageUrl:"http://pic.zijian92.cn/icon_tabbar.png",isOn:!0}}}},"3Obm":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page toast"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-button",{attrs:{type:"default"},nativeOn:{click:function(a){t.showToast(a)}}},[t._v("点击弹出Toast")]),t._v(" "),e("wv-button",{attrs:{type:"default"},nativeOn:{click:function(a){t.showLoadingToast(a)}}},[t._v("点击弹出Loading Toast")])],1),t._v(" "),e("wv-toast",{directives:[{name:"show",rawName:"v-show",value:t.toastShow,expression:"toastShow"}]},[t._v("\n    完成\n  ")]),t._v(" "),e("wv-toast",{directives:[{name:"show",rawName:"v-show",value:t.loadingToastShow,expression:"loadingToastShow"}],attrs:{type:"loading"}},[t._v("\n    数据加载中\n  ")])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Toast")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},"4wqO":function(t,a,e){"use strict";function s(t){e("YEco")}var n=e("PxlA"),i=e("D/FX"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,null,null);a.a=o.exports},"5ost":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{},[e("wv-panel",{attrs:{access:!0}},[e("wv-panel-header",[t._v("图文组合列表")]),t._v(" "),e("wv-panel-body",[e("wv-media-box",{attrs:{type:"appmsg"}},[e("wv-media-header",[e("h1",[t._v("H1")])]),t._v(" "),e("wv-media-body",[e("wv-media-title",[t._v("标题一")]),t._v(" "),e("wv-media-description",[t._v("由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。")])],1)],1),t._v(" "),e("wv-media-box",{attrs:{type:"appmsg",link:"javascript:;"}},[e("wv-media-header",[e("wv-media-appmsg-thumb",{attrs:{src:"http://pic.zijian92.cn/icon_tabbar.png"}})],1),t._v(" "),e("wv-media-body",[e("wv-media-title",[t._v("标题二")]),t._v(" "),e("wv-media-description",[t._v("由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。")])],1)],1)],1),t._v(" "),e("wv-panel-footer",{attrs:{to:""}},[t._v("查看更多")])],1),t._v(" "),e("wv-panel",{attrs:{access:""}},[e("wv-panel-header",[t._v("文字组合列表")]),t._v(" "),e("wv-panel-body",[e("wv-media-box",{attrs:{type:"text"}},[e("wv-media-body",[e("wv-media-title",[t._v("标题一")]),t._v(" "),e("wv-media-description",[t._v("\n              由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。\n            ")])],1)],1),t._v(" "),e("wv-media-box",{attrs:{type:"text"}},[e("wv-media-body",[e("wv-media-title",[t._v("标题二")]),t._v(" "),e("wv-media-description",[t._v("\n              由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。\n            ")])],1)],1)],1),t._v(" "),e("wv-panel-footer",{attrs:{to:""}},[t._v("查看更多")])],1),t._v(" "),e("wv-panel",[e("wv-panel-header",[t._v("小图文组合列表")]),t._v(" "),e("wv-panel-body",[e("wv-media-box",{attrs:{type:"small-appmsg"}},[e("wv-media-body",[e("wv-cells",{attrs:{type:"access"}},[e("wv-link-cell",{attrs:{to:""}},[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{slot:"header",src:"http://pic.zijian92.cn/icon_tabbar.png"},slot:"header"}),t._v(" "),e("p",{attrs:{slot:"body"},slot:"body"},[t._v("文字标题")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),e("wv-link-cell",{attrs:{to:""}},[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{slot:"header",src:"http://pic.zijian92.cn/icon_tabbar.png"},slot:"header"}),t._v(" "),e("p",{attrs:{slot:"body"},slot:"body"},[t._v("文字标题")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"})])],1)],1)],1)],1)],1),t._v(" "),e("wv-panel",[e("wv-panel-header",[t._v("文字列表附来源")]),t._v(" "),e("wv-panel-body",[e("wv-media-box",{attrs:{type:"text"}},[e("wv-media-body",[e("wv-media-title",[t._v("标题一")]),t._v(" "),e("wv-media-description",[t._v("由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。")]),t._v(" "),e("wv-media-info",[e("wv-media-info-meta",[t._v("文字来源")]),t._v(" "),e("wv-media-info-meta",[t._v("时间")]),t._v(" "),e("wv-media-info-meta",{attrs:{extra:""}},[t._v("其他信息")])],1)],1)],1)],1)],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Panel")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},"5vpR":function(t,a,e){"use strict";function s(t){e("i+H2")}var n=e("JDnj"),i=e("Wg46"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,null,null);a.a=o.exports},"6ySL":function(t,a){},"70x6":function(t,a){},"7bWn":function(t,a,e){"use strict";a.a={}},"7dor":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("wv-grids",[e("wv-grid",{attrs:{to:t.to,imageUrl:t.imageUrl,label:"1"}}),t._v(" "),e("wv-grid",{attrs:{to:t.to,imageUrl:t.imageUrl,label:"2"}}),t._v(" "),e("wv-grid",{attrs:{to:t.to,imageUrl:t.imageUrl,label:"2"}}),t._v(" "),e("wv-grid",{attrs:{to:t.to,imageUrl:t.imageUrl,label:"1"}}),t._v(" "),e("wv-grid",{attrs:{to:t.to,imageUrl:t.imageUrl,label:"2"}}),t._v(" "),e("wv-grid",{attrs:{to:t.to,imageUrl:t.imageUrl,label:"2"}})],1)],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},BalY:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-button",{attrs:{type:"default"},nativeOn:{click:function(a){t.toNavbar(a)}}},[t._v("Navbar")]),t._v(" "),e("wv-button",{attrs:{type:"default"},nativeOn:{click:function(a){t.toTabbar(a)}}},[t._v("Tabbar")])],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Bar")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},C02y:function(t,a,e){"use strict";var s=e("mN6c"),n=e("BalY"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},CJjQ:function(t,a,e){"use strict";a.a={name:"action-sheet",data:function(){return{title:"操作内容",actionsheetShow:!0,actionSheetMenus:{menu1:"示例菜单",menu2:"示例菜单",menu3:"示例菜单",menu4:"示例菜单"},actionSheetActions:{action1:"取消"}}},methods:{onEvent:function(t){console.log(t)}}}},"D/FX":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},EHoA:function(t,a,e){"use strict";function s(t){e("Ilpa")}var n=e("2ikh"),i=e("vpFi"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,null,null);a.a=o.exports},GTLN:function(t,a,e){"use strict";var s=e("lkBP"),n=e("oIBX"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},Ilpa:function(t,a){},JDnj:function(t,a,e){"use strict";a.a={data:function(){return{placeholder:"搜索"}},methods:{event:function(t){console.log(t)}}}},"K/Q5":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-icon",{attrs:{name:"success",type:"message"}}),t._v(" "),e("wv-icon",{attrs:{name:"info",type:"message"}}),t._v(" "),e("wv-icon",{attrs:{name:"warn",type:"message"}}),t._v(" "),e("wv-icon",{attrs:{name:"waiting",type:"message"}}),t._v(" "),e("wv-icon",{attrs:{name:"success",type:"safe"}}),t._v(" "),e("wv-icon",{attrs:{name:"warn",type:"safe"}}),t._v(" "),e("div",{staticClass:"icon_sp_area"},[e("wv-icon",{attrs:{name:"success"}}),t._v(" "),e("wv-icon",{attrs:{name:"success-circle"}}),t._v(" "),e("wv-icon",{attrs:{name:"success-no-circle"}}),t._v(" "),e("wv-icon",{attrs:{name:"info"}}),t._v(" "),e("wv-icon",{attrs:{name:"waiting"}}),t._v(" "),e("wv-icon",{attrs:{name:"waiting-circle"}}),t._v(" "),e("wv-icon",{attrs:{name:"circle"}}),t._v(" "),e("wv-icon",{attrs:{name:"warn"}}),t._v(" "),e("wv-icon",{attrs:{name:"download"}}),t._v(" "),e("wv-icon",{attrs:{name:"info-circle"}}),t._v(" "),e("wv-icon",{attrs:{name:"cancel"}})],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Icons")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},KZXK:function(t,a){},PWjF:function(t,a,e){"use strict";function s(t){e("oYXk")}var n=e("cpMT"),i=e("rlmf"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,"data-v-3e822ad6",null);a.a=o.exports},PxlA:function(t,a,e){"use strict";a.a={name:"app"}},Qmpj:function(t,a,e){"use strict";var s=e("rQBL"),n=e("5ost"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},QrFB:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-button",{attrs:{type:"default"},nativeOn:{click:function(a){t.showDialog(1)}}},[t._v("点击弹出Dialog样式一")]),t._v(" "),e("wv-button",{attrs:{type:"default"},nativeOn:{click:function(a){t.showDialog(2)}}},[t._v("点击弹出Dialog样式二")])],1),t._v(" "),e("wv-dialog",{directives:[{name:"show",rawName:"v-show",value:t.dialog1Show,expression:"dialog1Show"}],attrs:{type:"confirm",title:"弹窗标题","confirm-button":"确认","cancel-button":"取消"},on:{"wv-dialog-confirm":function(a){t.handleDialogAction(1)},"wv-dialog-cancel":function(a){t.handleDialogAction(1)}}},[t._v("\n    自定义弹窗内容\n  ")]),t._v(" "),e("wv-dialog",{directives:[{name:"show",rawName:"v-show",value:t.dialog2Show,expression:"dialog2Show"}],attrs:{type:"alert",title:"弹窗标题"},on:{"wv-dialog-confirm":function(a){t.handleDialogAction(2)}}},[t._v("\n    弹窗内容，告知当前页面信息等\n  ")])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Dialog")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},RIiq:function(t,a,e){"use strict";var s=e("fZJk"),n=e("lbOa"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},RN5b:function(t,a){},"RP/5":function(t,a,e){"use strict";a.a={data:function(){return{hasCancelButton:!0}},methods:{test:function(){console.log("dfsfg")}}}},"SR/C":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{},[e("div",{staticClass:"bd"},[e("wv-cells-title",[t._v("带说明的列表项")]),t._v(" "),e("wv-cells",[e("wv-cell",[e("span",{attrs:{slot:"body"},slot:"body"},[t._v("标题文字")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])])],1),t._v(" "),e("wv-cells-title",[t._v("带图标、说明的列表项")]),t._v(" "),e("wv-cells",{attrs:{type:"split"}},[e("wv-cell",[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{slot:"header",src:t.imageUrl,alt:""},slot:"header"}),t._v(" "),e("span",{attrs:{slot:"body"},slot:"body"},[t._v("标题文字")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])]),t._v(" "),e("wv-cell",[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{slot:"header",src:t.imageUrl,alt:""},slot:"header"}),t._v(" "),e("span",{attrs:{slot:"body"},slot:"body"},[t._v("标题文字")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])])],1),t._v(" "),e("wv-cells-title",[t._v("带跳转的列表项")]),t._v(" "),e("wv-cells",{attrs:{type:"access"}},[e("wv-link-cell",{attrs:{to:"javascript:;"}},[e("span",{attrs:{slot:"body"},slot:"body"},[t._v("cell standard")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),e("wv-link-cell",{attrs:{to:"javascript:;"}},[e("span",{attrs:{slot:"body"},slot:"body"},[t._v("cell standard")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"})])],1),t._v(" "),e("wv-cells-title",[t._v("带说明、跳转的列表项")]),t._v(" "),e("wv-cells",{attrs:{type:"access"}},[e("wv-link-cell",{attrs:{to:"javascript:;"}},[e("span",{attrs:{slot:"body"},slot:"body"},[t._v("cell standard")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])]),t._v(" "),e("wv-link-cell",{attrs:{to:"javascript:;"}},[e("span",{attrs:{slot:"body"},slot:"body"},[t._v("cell standard")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])])],1),t._v(" "),e("wv-cells-title",[t._v("带图标、说明、跳转的列表项")]),t._v(" "),e("wv-cells",{attrs:{type:"access"}},[e("wv-link-cell",{attrs:{to:"javascript:;"}},[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{slot:"header",src:t.imageUrl,alt:""},slot:"header"}),t._v(" "),e("span",{attrs:{slot:"body"},slot:"body"},[t._v("cell standard")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])]),t._v(" "),e("wv-link-cell",{attrs:{to:"javascript:;"}},[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{slot:"header",src:t.imageUrl,alt:""},slot:"header"}),t._v(" "),e("span",{attrs:{slot:"body"},slot:"body"},[t._v("cell standard")]),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("说明文字")])])],1),t._v(" "),e("wv-cells-title",[t._v("单选列表项")]),t._v(" "),e("wv-cells",{attrs:{type:"radio"}},[e("wv-radio-cell",{attrs:{id:"x11",name:"radio1",value:"One",label:"cell standard"}}),t._v(" "),e("wv-radio-cell",{attrs:{id:"x12",name:"radio1",value:"Two",label:"cell standard"}})],1),t._v(" "),e("wv-cells-title",[t._v("复选列表项")]),t._v(" "),e("wv-cells",{attrs:{type:"checkbox"}},[e("wv-checkbox-cell",{attrs:{id:"s11",name:"checkbox1",value:"One",label:"standard is dealt for u."}}),t._v(" "),e("wv-checkbox-cell",{attrs:{id:"s12",name:"checkbox1",value:"Two",label:"standard is dealicient for u."}})],1),t._v(" "),e("wv-cells-title",[t._v("开关")]),t._v(" "),e("wv-cells",{attrs:{type:"form"}},[e("wv-switch-cell",{attrs:{name:"switch",label:"标题文字"}})],1),t._v(" "),e("wv-cells-title",[t._v("表单")]),t._v(" "),e("wv-cells",{attrs:{type:"form"}},[e("wv-input-cell",{attrs:{type:"text",label:"qq",placeholder:"请输入qq号"}}),t._v(" "),e("wv-input-cell",{attrs:{type:"text",label:"验证码",placeholder:"请输入验证码",vcode:t.vcode}}),t._v(" "),e("wv-input-cell",{attrs:{type:"number",label:"银行卡",placeholder:"请输入银行卡号"}}),t._v(" "),e("wv-input-cell",{attrs:{type:"text",label:"验证码",placeholder:"请输入验证码",vcode:t.vcode,warn:!0}})],1),t._v(" "),e("wv-cells-tips",[t._v("底部说明文字底部说明文字")]),t._v(" "),e("wv-button-area",[e("wv-button",{attrs:{type:"primary"}},[t._v("确定")])],1),t._v(" "),e("wv-cells-title",[t._v("上传")]),t._v(" "),e("wv-cells",{attrs:{type:"form"}},[e("wv-cell",[e("wv-uploader",{attrs:{slot:"body",count:3,maxlength:5},slot:"body"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("图片上传")]),t._v(" "),e("wv-uploader-files",{attrs:{slot:"uploader-files"},slot:"uploader-files"},[e("wv-uploader-file",{attrs:{imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"}}),t._v(" "),e("wv-uploader-file",{attrs:{imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"}}),t._v(" "),e("wv-uploader-file",{attrs:{imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"}}),t._v(" "),e("wv-uploader-file",{attrs:{imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg","has-status":""}}),t._v(" "),e("wv-uploader-file",{attrs:{imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg","has-status":""}},[e("span",{attrs:{slot:"status"},slot:"status"},[t._v("50%")])])],1)],1)],1)],1),t._v(" "),e("wv-cells-title",[t._v("文本域")]),t._v(" "),e("wv-cells",{attrs:{type:"form"}},[e("wv-input-cell",{attrs:{type:"textarea",placeholder:"请输入评论",maxlength:200,rows:t.rows,value:t.value,name:"textarea"},on:{"update:value":function(a){t.value=a}}})],1),t._v(" "),e("wv-toptips",{directives:[{name:"show",rawName:"v-show",value:t.toptipsCount>0,expression:"toptipsCount > 0"}]},[t._v("错误提醒")]),t._v(" "),e("wv-cells-title",[t._v("表单报错"+t._s(t.cardValue))]),t._v(" "),e("wv-cells",{attrs:{type:"form"}},[e("wv-input-cell",{attrs:{type:"number",label:"卡号",placeholder:"请输入卡号",value:t.cardValue,warn:!0},on:{"update:value":function(a){t.cardValue=a}}}),t._v(" "),e("wv-input-cell",{attrs:{type:"date",label:"日期",value:t.dateValue},on:{"update:value":function(a){t.dateValue=a}}}),t._v(" "),e("wv-input-cell",{attrs:{type:"datetime-local",label:"时间",value:t.datetimeValue},on:{"update:value":function(a){t.datetimeValue=a}}})],1),t._v(" "),e("wv-cells-title",[t._v("选择")]),t._v(" "),e("wv-cells",{attrs:{type:"split"}},[e("wv-select-cell",{attrs:{before:!0,options:t.areaCodeOptions,selected:0}},[e("wv-cell-input",{attrs:{slot:"body",type:"text",placeholder:"请输入号码",value:t.phoneValue},on:{"update:value":function(a){t.phoneValue=a}},slot:"body"})],1)],1),t._v(" "),e("wv-cells-title",[t._v("选择")]),t._v(" "),e("wv-cells",{attrs:{type:"split"}},[e("wv-select-cell",{attrs:{after:!0,options:t.nationOptions,selected:t.mySelect},on:{"update:selected":function(a){t.mySelect=a}}},[e("label",{staticClass:"weui-label",attrs:{slot:"header"},slot:"header"},[t._v("国家/地区")])])],1)],1)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Button")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},Teoq:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-button",{attrs:{type:"primary"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"primary",disabled:"true"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"warn"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"warn",disabled:"true"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"default"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"default",disabled:"true"}},[t._v("按钮")]),t._v(" "),e("wv-button-area",[e("wv-button",{attrs:{type:"primary"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"primary",disabled:"true"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"warn"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"warn",disabled:"true"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"default"}},[t._v("按钮")]),t._v(" "),e("wv-button",{attrs:{type:"default",disabled:"true"}},[t._v("按钮")])],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Button")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},Tlbk:function(t,a,e){"use strict";a.a={data:function(){return{dialog1Show:!1,dialog2Show:!1}},methods:{showDialog:function(t){this["dialog"+t+"Show"]=!0},handleDialogAction:function(t){this["dialog"+t+"Show"]=!1}}}},Wg46:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("wv-search-bar",{attrs:{placeholder:t.placeholder,cancelText:"取消",value:""},on:{"wv-search-bar-submit":t.event}})],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},YEco:function(t,a){},cpMT:function(t,a,e){"use strict";a.a={name:"index",data:function(){return{to:"",imageUrl1:"http://pic.zijian92.cn/icon_nav_button.png",imageUrl2:"http://pic.zijian92.cn/icon_nav_cell.png",imageUrl3:"http://pic.zijian92.cn/icon_nav_toast.png",imageUrl4:"http://pic.zijian92.cn/icon_nav_dialog.png",imageUrl5:"http://pic.zijian92.cn/icon_nav_progress.png",imageUrl6:"http://pic.zijian92.cn/icon_nav_msg.png",imageUrl7:"http://pic.zijian92.cn/icon_nav_article.png",imageUrl8:"http://pic.zijian92.cn/icon_nav_actionSheet.png",imageUrl9:"http://pic.zijian92.cn/icon_nav_icons.png",imageUrl10:"http://pic.zijian92.cn/icon_nav_panel.png",imageUrl11:"http://pic.zijian92.cn/icon_nav_tab.png",imageUrl12:"http://pic.zijian92.cn/icon_nav_search_bar.png"}}}},ewGH:function(t,a,e){"use strict";var s=e("7bWn"),n=e("K/Q5"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},eyo9:function(t,a,e){"use strict";var s=e("lxHO"),n=e("SR/C"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},fZJk:function(t,a,e){"use strict";a.a={}},ghM3:function(t,a,e){"use strict";function s(t){e("70x6")}var n=e("wvJz"),i=e("7dor"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,null,null);a.a=o.exports},huH9:function(t,a,e){"use strict";function s(t){e("KZXK")}var n=e("Tlbk"),i=e("QrFB"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,"data-v-4f971f64",null);a.a=o.exports},hzw0:function(t,a){},"i+H2":function(t,a){},i6JC:function(t,a,e){"use strict";function s(t){e("RN5b")}var n=e("CJjQ"),i=e("vf5l"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,null,null);a.a=o.exports},iSv0:function(t,a,e){"use strict";function s(t){e("6ySL")}var n=e("mEru"),i=e("Teoq"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,"data-v-73eb9e0e",null);a.a=o.exports},iXgl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n=e("4wqO"),i=e("2CrD"),l=e("prvP"),r=e.n(l),o=e("phT0");e.n(o);s.a.config.productionTip=!1,s.a.use(r.a),new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},j4sm:function(t,a,e){"use strict";a.a={name:"toast",data:function(){return{toastShow:!1,loadingToastShow:!1}},methods:{showToast:function(){var t=this;t.toastShow=!0,setTimeout(function(){t.toastShow=!1},2e3)},showLoadingToast:function(){var t=this;t.loadingToastShow=!0,setTimeout(function(){t.loadingToastShow=!1},3e3)}}}},kHmC:function(t,a,e){"use strict";var s=e("RP/5"),n=e("uoUS"),i=e("VU/8"),l=i(s.a,n.a,!1,null,null,null);a.a=l.exports},lbOa:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("wv-message",{attrs:{icon:"success",title:"操作成功"}},[e("span",{attrs:{slot:"content"},slot:"content"},[t._v("内容详情，可根据实际需要安排")]),t._v(" "),e("wv-button-area",{attrs:{slot:"operation"},slot:"operation"},[e("wv-button",{attrs:{type:"primary"}},[t._v("确定")]),t._v(" "),e("wv-button",{attrs:{type:"default"}},[t._v("取消")])],1),t._v(" "),e("a",{attrs:{slot:"extra",href:""},slot:"extra"},[t._v("查看详情")])],1)],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},lkBP:function(t,a,e){"use strict";a.a={}},lxHO:function(t,a,e){"use strict";a.a={data:function(){return{imageUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg",vcode:"http://pic.zijian92.cn/vcode.jpg",rows:3,value:"123",toptipsCount:3,cardValue:"",dateValue:"",datetimeValue:"",phoneValue:"",areaCodeOptions:{0:"+86",1:"+65",2:"+66"},nationOptions:{0:"安道尔",1:"中国",2:"法国"},mySelect:0}},methods:{},components:{}}},mEru:function(t,a,e){"use strict";a.a={name:"button",data:function(){return{}},methods:{}}},mN6c:function(t,a,e){"use strict";a.a={name:"bar",methods:{toNavbar:function(){this.$router.push({path:"/navbar"})},toTabbar:function(){this.$router.push({path:"/tabbar"})}}}},oIBX:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-article",[e("h1",[t._v("大标题")]),t._v(" "),e("section",[e("h2",{staticClass:"title"},[t._v("章标题")]),t._v(" "),e("section",[e("h3",[t._v("1.1 节标题")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat. Duis aute")])]),t._v(" "),e("section",[e("h3",[t._v("1.2 节标题")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])])],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Button")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},oYXk:function(t,a){},phT0:function(t,a){},qVOh:function(t,a,e){"use strict";function s(t){e("rJjV")}var n=e("1qah"),i=e("+Ktz"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,null,null);a.a=o.exports},rJjV:function(t,a){},rQBL:function(t,a,e){"use strict";a.a={}},rlmf:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{},[e("wv-grids",[e("wv-grid",{attrs:{to:"button",imageUrl:t.imageUrl1,label:"Button"}}),t._v(" "),e("wv-grid",{attrs:{to:"cell",imageUrl:t.imageUrl2,label:"Cell"}}),t._v(" "),e("wv-grid",{attrs:{to:"toast",imageUrl:t.imageUrl3,label:"Toast"}}),t._v(" "),e("wv-grid",{attrs:{to:"dialog",imageUrl:t.imageUrl4,label:"Dialog"}}),t._v(" "),e("wv-grid",{attrs:{to:"progress",imageUrl:t.imageUrl5,label:"Progress"}}),t._v(" "),e("wv-grid",{attrs:{to:"message",imageUrl:t.imageUrl6,label:"Msg Page"}}),t._v(" "),e("wv-grid",{attrs:{to:"article",imageUrl:t.imageUrl7,label:"Article Page"}}),t._v(" "),e("wv-grid",{attrs:{to:"action-sheet",imageUrl:t.imageUrl8,label:"ActionSheet"}}),t._v(" "),e("wv-grid",{attrs:{to:"icon",imageUrl:t.imageUrl9,label:"Icons"}}),t._v(" "),e("wv-grid",{attrs:{to:"panel",imageUrl:t.imageUrl10,label:"Panel"}}),t._v(" "),e("wv-grid",{attrs:{to:"bar",imageUrl:t.imageUrl11,label:"Tab"}}),t._v(" "),e("wv-grid",{attrs:{to:"search",imageUrl:t.imageUrl12,label:"SearchBar"}})],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("div",{staticClass:"logo"},[e("img",{staticStyle:{width:"88px"},attrs:{src:"http://pic.zijian92.cn/logo.png"}})]),t._v(" "),e("h1",{staticClass:"page_title"}),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},uoUS:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"page__bd"},[e("wv-progress",{attrs:{progress:0,hasCancelButton:t.hasCancelButton}}),t._v(" "),e("br"),t._v(" "),e("wv-progress",{attrs:{progress:50,hasCancelButton:t.hasCancelButton}}),t._v(" "),e("br"),t._v(" "),e("wv-progress",{attrs:{progress:80,hasCancelButton:t.hasCancelButton},on:{"wv-progress-cancel":t.test}})],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page__hd"},[e("h1",{staticClass:"page_title"},[t._v("Progress")]),t._v(" "),e("p",{staticClass:"page_desc"},[t._v("基于WeUI设计的Vue.js组件库")])])}],i={render:s,staticRenderFns:n};a.a=i},vf5l:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("wv-action-sheet",{attrs:{show:t.actionsheetShow,menus:t.actionSheetMenus,actions:t.actionSheetActions,title:t.title},on:{"wv-menu-click":t.onEvent}})],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},vpFi:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"}},[e("wv-tab",[e("wv-tabbar",[e("wv-tabbar-item",{attrs:{imageUrl:t.imageUrl,to:"",isOn:t.isOn}},[t._v("\n        菜单一\n      ")]),t._v(" "),e("wv-tabbar-item",{attrs:{imageUrl:t.imageUrl,to:""}},[t._v("\n        菜单二\n      ")]),t._v(" "),e("wv-tabbar-item",{attrs:{imageUrl:t.imageUrl,to:"",badge:"5"}},[t._v("\n        菜单三\n      ")]),t._v(" "),e("wv-tabbar-item",{attrs:{imageUrl:t.imageUrl,to:""}},[t._v("\n        菜单四\n      ")])],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},wv4L:function(t,a,e){"use strict";function s(t){e("hzw0")}var n=e("j4sm"),i=e("3Obm"),l=e("VU/8"),r=s,o=l(n.a,i.a,!1,r,"data-v-470738e0",null);a.a=o.exports},wvJz:function(t,a,e){"use strict";a.a={data:function(){return{to:"",imageUrl:"http://img.qq745.com/uploads/allimg/170516/14-1F516152034-52.png"}}}}},["iXgl"]);
//# sourceMappingURL=app.d5b2d3085e00ff1cc8f2.js.map