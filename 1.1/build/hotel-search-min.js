/*! tsearch - v1.1 - 2013-08-09 2:32:24 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add(function(a,b,c){var d={cn:"http://kezhan.trip.taobao.com/citysuggest.do?t=0&q={query}",cnHot:"http://www.taobao.com/go/rgn/trip/hotelhotcityv2_jsonp.php",oversea:"http://kezhan.trip.taobao.com/citysuggest.do?t=1&q={query}",overseaHot:"http://www.taobao.com/go/rgn/trip/hotoverseav2_jsonp.php"},e=c.formatDate(c.setDate(new Date,3)).yymmdd,f=c.formatDate(c.setDate(new Date,4)).yymmdd,g=function(a){var g={};a.isLodge||(g[".J_Radio"]={widgets:{Tradio:{node:".J_Radio"}}}),g[".J_ArrCity"]={widgets:{TripAutocomplete:{hotel:{inputNode:".J_ArrCity",codeInputNode:".J_ArrCityCode"}},Placeholder:{node:".J_ArrCity"}},validation:[{type:"required",tip:"\u8bf7\u586b\u5165\u4f4f\u57ce\u5e02"}]},g[".J_ArrCityCode"]={},g[".J_EndDate"]={val:f,widgets:{Placeholder:{node:".J_EndDate"}},validation:[{type:"required",tip:"\u8bf7\u586b\u5199\u79bb\u5e97\u65e5\u671f"},{type:"dateformat",tip:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u65e5\u671f\u683c\u5f0f \u5982\uff1a2018-01-01"},{type:"mindate",minDate:".J_DepDate",tip:"\u79bb\u5e97\u65e5\u671f\u4e0d\u80fd\u65e9\u4e8e\u5165\u4f4f\u65e5\u671f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9"},{type:"custom",tip:"\u9152\u5e97\u9884\u8ba2\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc728\u5929\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",validateFn:function(a,b){return c.getDateInterval(b.fields[".J_DepDate"].node.val(),this.node.val())<=28}}]},g[".J_DepDate"]={val:e,widgets:{Placeholder:{node:".J_DepDate"},Calendar:{triggerNode:".J_DepDate",finalTriggerNode:".J_EndDate",minDate:new Date,isDateInfo:1,isDateIcon:1,isHoliday:1,isKeyup:!1,startDate:e,endDate:f,afterDays:89}},validation:[{type:"required",tip:"\u8bf7\u586b\u5165\u4f4f\u65e5\u671f"},{type:"dateformat",tip:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u65e5\u671f\u683c\u5f0f \u5982\uff1a2018-01-01"},{type:"mindate",minDate:new Date-864e5,tip:"\u5165\u4f4f\u65e5\u671f\u4e0d\u80fd\u65e9\u4e8e\u4eca\u5929"}],autoSwitch:{nextField:".J_EndDate"}},g[".J_Keywords"]={widgets:{Placeholder:{node:".J_Keywords"}}};var h=new b({form:a.form,fields:g,validation_order:[".J_ArrCity",".J_DepDate",".J_EndDate"]}),i=h.fields[".J_EndDate"];if(i.Calendar&&(i.Calendar.currentNode=i.node,i.Calendar._setDateInfo(i.node.val())),a.isLodge)return h;var j=function(){var a=h.fields[".J_Radio"].Tradio,b=h.get("fields")[".J_ArrCity"],c=b.TripAutocomplete;a.on("afterValueChange",function(a){b.node.val(""),"0"===a.newVal?(c.set("source",d.cn),c.set("hotSource",d.cnHot)):(c.set("source",d.oversea),c.set("hotSource",d.overseaHot))})};return j(),h};return g},{requires:["./tsearch","./common"]});