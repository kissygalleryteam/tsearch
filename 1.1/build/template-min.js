/*! tsearch - v1.1 - 2013-11-01 2:36:04 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add("gallery/tsearch/1.1/template",function(){return{searchTemplate:'<div class="mod-search" id="J_Pi_Search_SearchModule"><div class="search-hd"><div class="search-nav"><ul class="J_Pi_Search_SearchTabNav"><li class="swing-slice-indicator J_Pi_Search_NavItemFlight selected"><s class="search-nav-flight"></s><a href="http://trip.taobao.com/jipiao" hidefocus="true">\u56fd\u5185\u673a\u7968</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemIFlight"><s class="search-nav-iflight"></s><a href="http://trip.taobao.com/ijipiao" hidefocus="true">\u56fd\u9645 &#8226 \u6e2f\u6fb3\u53f0</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemHotel"><s class="search-nav-hotel"></s><a href="http://trip.taobao.com/jiudian" hidefocus="true">\u9152\u5e97</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemLodge"><s class="search-nav-lodge"></s><a href="http://trip.taobao.com/kezhan" hidefocus="true">\u5ba2\u6808</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemTicket"><s class="search-nav-ticket"></s><a href="http://trip.taobao.com/menpiao" hidefocus="true">\u666f\u70b9\u95e8\u7968</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemTravel"><s class="search-nav-travel"></s><a href="http://trip.taobao.com/dujia" hidefocus="true">\u65c5\u6e38\u5ea6\u5047</a></li><li class="swing-slice-indicator J_Pi_Search_NavItemCar"><s class="search-nav-car"></s><a href="http://trip.taobao.com/zuche" hidefocus="true">\u79df\u8f66</a></li></ul></div></div><div class="search-bd"><div class="search-item swing-slice J_Pi_Search_TabPannel"><form method="get" target="_blank" action="http://s.jipiao.trip.taobao.com/flight_search_result.htm"class="search-form search-jipiao" id="J_Pi_Search_jipiao_form"><a href="javascript:void(0)" target="_self" class="search-trade" id="J_Pi_Search_FlightSwap">\u4e92\u6362\u51fa\u53d1\u5230\u8fbe\u57ce\u5e02</a><fieldset><input type="hidden" name="spm" value="181.1113091.a1z0v.1"/><div class="search-field"><label class="search-item-intro search-tit">\u51fa\u53d1\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="depCityName" id="J_Pi_Search_jipiao_depCity" placeholder="\u57ce\u5e02\u540d" value=""/><input name="depCity" type="hidden" id="J_Pi_Search_jipiao_depCity_code" data-trade="J_Pi_Search_jipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u5230\u8fbe\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="arrCityName"id="J_Pi_Search_jipiao_arrCity" placeholder="\u57ce\u5e02\u540d" value="" data-description="\u5230\u8fbe\u57ce\u5e02"/><input name="arrCity" type="hidden" id="J_Pi_Search_jipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u822a\u7a0b\u7c7b\u578b\uff1a</label><div class="search-inputarea"><div class="search-radio" id="J_Pi_Search_FlightRadio"><label for="J_Pi_Search_jipiao_FlightTypeRadio_1" class="flight-type-radio first-label"><input type="radio" name="tripType" id="J_Pi_Search_jipiao_FlightTypeRadio_1" class="J_Pi_Search_type_radio" value="0" checked="checked"/>\u5355\u7a0b</label><label for="J_Pi_Search_jipiao_FlightTypeRadio_2" class="flight-type-radio last-label"><input type="radio" name="tripType" id="J_Pi_Search_jipiao_FlightTypeRadio_2" class="J_Pi_Search_type_radio" value="1"/>\u5f80\u8fd4</label></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\u51fa\u53d1\u65e5\u671f\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required dateformat J_Pi_Search_DateInput J_Pi_Search_depDate" name="depDate" id="J_Pi_Search_FlightDepDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-field disabled" id="J_Pi_Search_FlightBackField"><label class="search-item-intro search-tit">\u8fd4\u7a0b\u65e5\u671f\uff1a</label><div class="search-inputarea"><input type="text" class="search-input J_Pi_Search_DateInput J_Pi_Search_endDate" name="arrDate" maxlength="10" id="J_Pi_Search_FlightArrDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" action="http://s.ijipiao.trip.taobao.com/ie/flight_search.htm"class="search-form search-jipiao" id="J_Pi_Search_ijipiao_form"><input type="hidden" name="spm" value="181.1113091.a1z0v.2"/><a href="javascript:void(0)" target="_self" class="search-trade" id="J_Pi_Search_IFlightSwap">\u4e92\u6362\u51fa\u53d1\u5230\u8fbe\u57ce\u5e02</a><fieldset><div class="search-field"><label class="search-item-intro search-tit">\u51fa\u53d1\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="_fmie.ie._0.st"id="J_Pi_Search_ijipiao_depCity" placeholder="\u57ce\u5e02\u540d" value=""data-trade="J_Pi_Search_ijipiao_arrCity" data-autotab="J_Pi_Search_ijipiao_arrCity"data-description="\u51fa\u53d1\u57ce\u5e02"/><input name="_fmie.ie._0.s" type="hidden" id="J_Pi_Search_ijipiao_depCity_code"data-trade="J_Pi_Search_ijipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u5230\u8fbe\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="_fmie.ie._0.en"id="J_Pi_Search_ijipiao_arrCity" placeholder="\u57ce\u5e02\u540d" value="" data-description="\u5230\u8fbe\u57ce\u5e02"/><input name="_fmie.ie._0.e" type="hidden" id="J_Pi_Search_ijipiao_arrCity_code"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u822a\u7a0b\u7c7b\u578b\uff1a</label><div class="search-inputarea"><div class="search-radio" id="J_Pi_Search_IFlightRadio"><label for="J_Pi_Search_ijipiao_FlightTypeRadio_1" class="flight-type-radio first-label"><input type="radio" name="_fmie.ie._0.t" id="J_Pi_Search_ijipiao_FlightTypeRadio_1" class="J_Pi_Search_type_radio" value="0"/>\u5355\u7a0b</label><label for="J_Pi_Search_ijipiao_FlightTypeRadio_2" class="flight-type-radio last-label"><input type="radio" name="_fmie.ie._0.t" id="J_Pi_Search_ijipiao_FlightTypeRadio_2" class="J_Pi_Search_type_radio" value="1" checked="checked"/>\u5f80\u8fd4</label></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\u51fa\u53d1\u65e5\u671f\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required dateformat J_Pi_Search_DateInput J_Pi_Search_depDate" name="_fmie.ie._0.sta" id="J_Pi_Search_IFlightDepDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-field" id="J_Pi_Search_IFlightBackField"><label class="search-item-intro search-tit">\u8fd4\u7a0b\u65e5\u671f\uff1a</label><div class="search-inputarea"><input type="text" class="search-input J_Pi_Search_DateInput J_Pi_Search_endDate J_Pi_Search_ieEndDate required" name="_fmie.ie._0.end" id="J_Pi_Search_IFlightArrDate" placeholder="yyyy-mm-dd" value="" autocomplete="off" /></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" id="J_Pi_Search_HotelForm" action="http://kezhan.trip.taobao.com/hotel_list2.htm" class="search-form search-jiudian"><input type="hidden" name="spm" value="181.1113091.a1z0v.3"/><input type="hidden" id="J_Pi_Search_HotelSearchAction" name="action" value="hotel_list_action2"/><input type="hidden" id="J_Pi_Search_HotelSearchDoSearch" name="event_submit_do_search" value="submit"/><fieldset><div class="search-field"><div class="search-radio" id="J_Pi_Search_HotelLocationRadio"><label for="J_Pi_Search_HotelLocal" class="first-label"><input id="J_Pi_Search_HotelLocal" type="radio" value="0" name="_fmd.h._0.r" checked="checked" class="flight-type-radio">\u56fd\u5185/\u6e2f\u6fb3\u53f0</label><label for="J_Pi_Search_HotelInternational" class="last-label"><input id="J_Pi_Search_HotelInternational" type="radio" value="1" name="_fmd.h._0.r" class="flight-type-radio">\u6d77\u5916</label></div></div><div class="search-field"><label class="search-item-intro search-tit J_Pi_Search_HotelToPlaceIndicator">\u76ee\u7684\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" id="J_Pi_Search_HotelToCity"placeholder="\u57ce\u5e02\u540d" name="city" value="" data-description="\u76ee\u7684\u57ce\u5e02"/><input name="c" type="hidden" id="J_Pi_Search_OmniCode" value=""/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u5165\u4f4f\u65e5\u671f\uff1a</label><div class="search-inputarea"><div id="J_Pi_Search_jiudian_depDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_depDate"name="_fmd.h._0.ch" id="J_Pi_Search_HotelDepDate" placeholder="yyyy-mm-dd"value="" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\u79bb\u5e97\u65e5\u671f\uff1a</label><div class="search-inputarea"><div id="J_Pi_Search_jiudian_endDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_endDate"name="_fmd.h._0.che" id="J_Pi_Search_HotelEndDate" placeholder="yyyy-mm-dd"value="" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\u3000\u5173\u952e\u5b57\uff1a</label><div class="search-inputarea"><input type="text" class="search-input" name="_fmd.h._0.n" id="J_Pi_Search_HotelSearchKeywords" placeholder="\u8f93\u5165\u9152\u5e97\u540d\u3001\u5546\u5708\u3001\u5730\u6807\u7b49" value=""/></div></div><div class="search-submitarea"><button type="submit" class="J_Pi_Search_HotelListSearch search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" id="J_Pi_Search_LodgeForm" action="http://kezhan.trip.taobao.com/hotel_list2.htm" class="search-form search-jiudian"><input type="hidden" name="spm" value="181.1113091.a1z0v.4"/><input type="hidden" id="J_Pi_Search_LodgeSearchAction" name="action" value="hotel_list_action2"/><input type="hidden" id="J_Pi_Search_LodgeSearchDoSearch" name="event_submit_do_search" value="submit"/><input type="hidden" name="from" value="kezhan"/><input type="hidden" name="searchBy" value="trip-kezhan"/><input type="hidden" name="_fmd.h._0.l" value="0"/><fieldset><div class="search-field"><label class="search-item-intro search-tit J_Pi_Search_HotelToPlaceIndicator">\u76ee\u7684\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" id="J_Pi_Search_LodgeToCity"placeholder="\u57ce\u5e02\u540d" name="city" value="" data-description="\u76ee\u7684\u57ce\u5e02"/><input name="c" type="hidden" id="J_Pi_Search_LodgeOmniCode" value=""/><input type="text" class="search-input required hidden" id="J_Pi_Search_LodgeToOversea"placeholder="\u57ce\u5e02\u540d" value="" data-description="\u76ee\u7684\u57ce\u5e02"/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u5165\u4f4f\u65e5\u671f\uff1a</label><div class="search-inputarea"><div id="J_Pi_Search_LodgeDepDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_depDate"name="_fmd.h._0.ch" id="J_Pi_Search_LodgeDepDate" placeholder="yyyy-mm-dd"value="" data-autotab="J_Pi_Search_LodgeEndDate" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\u79bb\u5e97\u65e5\u671f\uff1a</label><div class="search-inputarea"><div id="J_Pi_Search_LodgeEndDateBox" class="cal-input"><input type="text" class="search-input required dateformat J_Pi_Search_endDate"name="_fmd.h._0.che" id="J_Pi_Search_LodgeEndDate" placeholder="yyyy-mm-dd"value="" autocomplete="off"/></div></div></div><div class="search-field"><label class="search-item-intro search-tit">\u3000\u5173\u952e\u5b57\uff1a</label><div class="search-inputarea"><input type="text" class="search-input" name="_fmd.h._0.n" id="J_Pi_Search_LodgeSearchKeywords" placeholder="\u8f93\u5165\u9152\u5e97\u540d\u3001\u5546\u5708\u3001\u5730\u6807\u7b49" value=""/></div></div><div class="search-submitarea"><button type="submit" class="J_Pi_Search_HotelListSearch search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" action="http://s.taobao.com/search?commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=2&cat=50037979&from=compass&navlog=compass-1-c-50037979" class="search-form search-menpiao" target="_blank" id="J_Pi_Search_menpiao_form"><fieldset><input type="hidden" name="cat" value="50037979"/><input type="hidden" name="spm" value="181.1113091.a1z0v.5"/><div class="search-field"><label class="search-tit">\u641c\u7d22\u95e8\u7968\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="q" id="J_Pi_Search_menpiao_arrCity" placeholder="\u666f\u70b9\u540d\u6216\u57ce\u5e02\u540d" value=""/></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" target="_blank" id="J_Pi_Search_dujia_form" action="http://dujia.trip.taobao.com/search.htm"class="search-form search-dujia"><fieldset><input type="hidden" name="spm" value="181.1113091.a1z0v.6"/><div class="search-field"><label class="search-item-intro search-tit">\u51fa\u53d1\u57ce\u5e02\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="cq" id="J_Pi_Search_dujia_depCity"placeholder="\u57ce\u5e02\u540d" value=""/></div></div><div class="search-field"><label class="search-item-intro search-tit">\u3000\u76ee\u7684\u5730\uff1a</label><div class="search-inputarea"><input type="text" class="search-input required" name="mq" id="J_Pi_Search_dujia_arrCity"placeholder="\u666f\u70b9\u540d\u6216\u57ce\u5e02\u540d" value=""/></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div><div class="search-item swing-slice J_Pi_Search_TabPannel hidden"><form method="get" action="http://s.taobao.com/search?commend=all&tab=coefp&cd=false&ssid=s5-e&fs=1&bcoffset=1&bcoffset=2&cat=50036351&from=compass&navlog=compass-7-c-50036351" class="search-form search-zuche" target="_blank" id="J_Pi_Search_zuche_form"><fieldset><input type="hidden" name="cat" value="50036351"/><input type="hidden" name="spm" value="181.1113091.a1z0v.7"/><div class="search-field"><div class="search-inputarea"><label class="search-item-intro search-tit" for="J_Pi_Search_zuche_arrCity">\u79df\u8f66\u57ce\u5e02\uff1a</label><input type="text" class="search-input required" name="q" id="J_Pi_Search_zuche_arrCity"placeholder="\u57ce\u5e02\u540d" value=""/></div></div><div class="search-submitarea"><button type="submit" class="search-submit-btn">\u641c\u7d22</button></div></fieldset></form></div></div></div>'}});