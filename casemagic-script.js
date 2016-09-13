// ==UserScript==
// @name         CaseMagic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  tools for case magic
// @author       Brian Gundlach
// @match        https://casemagic.net/WATCH/home/
// @grant        none
// ==/UserScript==

function getConsumerTrackingSheet(name){
	$('input#search_box').attr({value:name});
	searchCaseload();
	$('table.case_table a[title*="towards case goals"').click();
	$('a')[1].click();
}
function getConsumerTrackingSheets(names){
	for (var i = 0; i < names.length; i++){
	setTimeout(getConsumerTrackingSheet(names[i]),2000);
	}
}
var AdvocateGroup = [[171, "Josiah"],[20,"Kevin Bass"],[158, "Annika"],[39,"Carol"],[140,"Breanne"],[183,"Karissa"],[180,"Leahana"]]
function loadAdvocateGroup(AdvocateGroup){
	for (var i = 0; i < AdvocateGroup.length; i++){
		loadTrackingSheet(AdvocateGroup[i][0],AdvocateGroup[i][1],"","");
	}
}
