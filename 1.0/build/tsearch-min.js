/*! tsearch - v1.0 - 2013-06-26 1:55:55 AM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add(function(a,b,c,d,e,f){function g(a){var b=this;g.superclass.constructor.call(b,a),this.initializer()}var h={TripAutocomplete:c,Calendar:e,Placeholder:f,Tradio:d};return a.extend(g,b,{initializer:function(){return this.form=this.get("form"),this.form?(this.fields=this.get("fields"),a.each(this.fields,function(b,c){var d=a.one(c);return d?(b.node=d,b.val&&b.node.val(b.val),this.bindWidgets(b),b.autoSwitch&&this.setSwitchInput(c),void 0):(a.log(c+"is not find.."),!1)},this),this.bindEvent(),void 0):(a.log("TSearch:\u6ca1\u6709\u627e\u5230\u8868\u5355\u8282\u70b9,\u521d\u59cb\u5316\u5931\u8d25"),void 0)},bindEvent:function(){this.form.on("submit",this._doSubmit,this),this.get("switchSearchType")&&this.initRadioSwitch();var b=this.get("swapper");b&&a.Event.on(b.trigger,"click",function(a){a.halt(),this.swap()},this)},addField:function(){},bindWidgets:function(b){var c=this;a.each(b.widgets,function(d,e){var f=h[e];f&&("TripAutocomplete"==e?a.each(b.widgets[e],function(a,c){b[e]=f[c](a)}):b[e]=new f(d),"Calendar"===e&&d.finalTriggerNode&&c.fields[d.finalTriggerNode]&&(c.fields[d.finalTriggerNode][e]=b[e]))}),b.showTip=function(a){return a.TripAutocomplete?function(b){a.node[0].focus(),a.TripAutocomplete.showMessage(b)}:a.Calendar?function(b){a.node[0].focus(),a.Calendar.currentNode=a.node,a.Calendar.set("message",b),a.Calendar.showMessage(b)}:void 0}(b)},swap:function(){a.each(this.get("swapper").list,function(a,b){this._swapItem(b,a)},this)},_swapItem:function(a,b){var c;a=this.fields[a],b=this.fields[b],c=a.node.val(),a.node.val(b.node.val()),b.node.val(c)},setSwitchInput:function(a){return!1},initRadioSwitch:function(){var b=this.get("switchSearchType"),c=this.fields,d=(a.one(b.back_container),c[b.back_input].node),e=c[b.trigger].Tradio,f=c[b.go_input].Calendar;return e?(e.on("afterValueChange",function(a){"0"===a.newVal&&(d.val(""),f.currentNode=d,f._setDateInfo("")),this._setSearchType(a.newVal)},this),d.on("valuechange",function(a){""===a.newVal&&e.val("0")}),f.on("dateclick",function(){this.currentNode.attr("id")===b.back_input.replace("#","")&&e.val("1")}),this._setSearchType(e.val()),void 0):this},_setSearchType:function(b){var c=this.get("switchSearchType"),d=this.fields,e=a.one(c.back_container);"1"===b?(e.removeClass("disabled"),d[c.go_input].autoSwitch&&(d[c.back_input].disabled=!1)):(e.addClass("disabled"),d[c.go_input].autoSwitch&&(d[c.back_input].disabled=!0))},_doSubmit:function(a){return this.validate()?(this.fire("submit",{form:this.form,fields:this.fields}),void 0):(a.preventDefault(),!1)},_isResetDate:function(a){return a=a.split("-"),new Date>new Date(a[0],a[1]-1,a[2])},getDate:function(a){function b(a){return a+="",1==a.length?"0"+a:a}a=a||0;var c,d,e,f=new Date;return f.setDate(f.getDate()+a),c=f.getFullYear(),d=b(f.getMonth()+1),e=b(f.getDate()),[c,d,e].join("-")},validate:function(){var a,b,c,d,e,f,g,h=this.fields,i=this,j=!0;for(b=0,d=this.get("validation_order"),e=d.length;e>b&&(a=d[b],h[a].validation&&j&&!h[a].disabled);b++){for(c=0,f=h[a].validation,g=f.length;g>c;c++){var k=f[c];if(!i._validateRule(k,h[a])){i.fire("validate",{rule:k,field:h[a]}),"function"==typeof k.onValidateFailure?k.onValidateFailure.call(h[a],k):h[a].showTip&&h[a].showTip(k.tip),j=!1;break}}if(0==j)break}return j},_validateRule:function(a,b){var c=function(a){var b=a.split("-");return new Date(b[0],b[1]-1,b[2])};switch(a.type){case"required":return""!=b.node.val();case"dateformat":var d=b.node.val();return 10==d.length&&/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(d);case"mindate":var e,d=b.node.val(),f=c(d);return e="string"==typeof a.minDate?c(this.fields[a.minDate].node.val()):a.minDate,f>=e;case"identical":var d=b.node.val(),g=this.fields[a.identicalWidth];return d!=g.node.val();case"custom":return"function"==typeof a.validateFn?a.validateFn.call(b,a.arg,this):!0}return!0}},{ATTRS:{form:{value:"",setter:function(b){return b instanceof a.NodeList?b:a.one(b)}},fields:{value:{"#J_FlightDepCity":{input_node:null,widgets:{Placeholder:{inputNode:null},TripAutocompleteV2:{}},validation:[{blur:[{required:""}]}]}}},validate_order:{value:[]},swapper:{value:{trigger:"#J_Pi_Search_FlightSwap",children:{from:"to"}}},switchSearchType:{value:null},storage:{value:!1},validation_order:{value:null}}}),g},{requires:["base","./trip-autocomplete","./radio-button","gallery/calendar/1.1/index","gallery/placeholder/1.0/index","node","base"]});