// ==UserScript==
// @name         CaseMagic
// @namespace    https://raw.githubusercontent.com/BGundlach/casemagic/master/casemagic-script.js
// @version      0.1
// @description  open an entire class of trackingsheets
// @author       Brian Gundlach
// @match        https://casemagic.net/WATCH/home/
// @grant        none
// ==/UserScript==

function getConsumerTrackingSheet(array name){
	$('input#search_box').attr({value:name});
	searchCaseload();
	$('table.case_table a[title*="towards case goals"').click();
	$('a')[1].click();
}
function getConsumerTrackingSheets(names[]){
	for (var i = 0; i < names.length(); i++){
	setTimeout(getConsumerTrackingSheet(names[i]),2000);
	}
}
var AdvocateGroup = [[171, "Josiah"],[20,"Kevin Bass"],[158, "Annika"],[39,"Carol"],[140,"Breanne"],[183,"Karissa"],[180,"Leahana"]]
function loadAdvocateGroup(AdvocateGroup){
	for (var i = 0; i < AdvocateGroup.length; i++){
		loadTrackingSheet(AdvocateGroup[i][0],AdvocateGroup[i][1],"","");
	}
}
function go(){
	loadAdvocateGroup(AdvocateGroup)
}
function loadCaseNote4Tracking (consumerID, name, i, k, j, l, m, n, o) {
	loadCaseNote(consumerID, name, '',0)
}

addJS_Node (loadCaseNote4Tracking);

function addJS_Node (text, s_URL, funcToRun, runOnLoad) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    if (runOnLoad) {
        scriptNode.addEventListener ("load", runOnLoad, false);
    }
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}
