/*! tsearch - v1.0 - 2013-07-26 1:37:38 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add(function(a,b,c){var d={cn:"http://kezhan.trip.taobao.com/citysuggest.do?t=0&q={query}",cnHot:"http://www.taobao.com/go/rgn/trip/hotelhotcityv2_jsonp.php",oversea:"http://kezhan.trip.taobao.com/citysuggest.do?t=1&q={query}",overseaHot:"http://www.taobao.com/go/rgn/trip/hotoverseav2_jsonp.php"},e=c.formatDate(c.setDate(new Date,3)).yymmdd,f=c.formatDate(c.setDate(new Date,4)).yymmdd,g=function(a){var g={};a.radio&&(g[a.radio]={widgets:{Tradio:{node:a.radio,name:a.radioName}}}),g[a.HotelToCity]={widgets:{TripAutocomplete:{hotel:{inputNode:a.HotelToCity,codeInputNode:a.Omni}},Placeholder:{node:a.HotelToCity}},validation:[{type:"required",tip:"\u8bf7\u586b\u5165\u4f4f\u57ce\u5e02"}]},g[a.Omni]={},g[a.HotelEndDate]={val:f,widgets:{Placeholder:{node:a.HotelEndDate}},validation:[{type:"required",tip:"\u8bf7\u586b\u5199\u79bb\u5e97\u65e5\u671f"},{type:"dateformat",tip:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u65e5\u671f\u683c\u5f0f \u5982\uff1a2018-01-01"},{type:"mindate",minDate:a.HotelDepDate,tip:"\u79bb\u5e97\u65e5\u671f\u4e0d\u80fd\u65e9\u4e8e\u5165\u4f4f\u65e5\u671f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9"},{type:"custom",tip:"\u9152\u5e97\u9884\u8ba2\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc728\u5929\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",validateFn:function(b,d){return c.getDateInterval(d.fields[a.HotelDepDate].node.val(),this.node.val())<=28}}]},g[a.HotelDepDate]={val:e,widgets:{Placeholder:{node:a.HotelDepDate},Calendar:{triggerNode:a.HotelDepDate,finalTriggerNode:a.HotelEndDate,minDate:new Date,isDateInfo:1,isDateIcon:1,isHoliday:1,isKeyup:!1,startDate:e,endDate:f,afterDays:89}},validation:[{type:"required",tip:"\u8bf7\u586b\u5165\u4f4f\u65e5\u671f"},{type:"dateformat",tip:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u65e5\u671f\u683c\u5f0f \u5982\uff1a2018-01-01"},{type:"mindate",minDate:new Date-864e5,tip:"\u5165\u4f4f\u65e5\u671f\u4e0d\u80fd\u65e9\u4e8e\u4eca\u5929"}],autoSwitch:{nextField:a.HotelEndDate}},g[a.HotelSearchKeywords]={widgets:{Placeholder:{node:a.HotelSearchKeywords}}};var h=new b({form:a.form,fields:g,validation_order:[a.HotelToCity,a.HotelDepDate,a.HotelEndDate]}),i=h.fields[a.HotelEndDate];if(i.Calendar&&(i.Calendar.currentNode=i.node,i.Calendar._setDateInfo(i.node.get("value"))),!a.radio)return h;var j=function(){var b=h.fields[a.radio].Tradio,c=h.get("fields")[a.HotelToCity],e=c.TripAutocomplete;b.on("afterValueChange",function(a){c.node.val(""),"0"===a.newVal?(e.set("source",d.cn),e.set("hotSource",d.cnHot)):(e.set("source",d.oversea),e.set("hotSource",d.overseaHot))})};return j(),h};return g},{requires:["./tsearch","./common"]});