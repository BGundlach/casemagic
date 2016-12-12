// ==UserScript==
// @name         CaseMagic
// @namespace    https://raw.githubusercontent.com/BGundlach/casemagic/master/casemagic-script.js
// @version      0.4
// @description  open an entire class of trackingsheets
// @author       Brian Gundlach
// @match        https://casemagic.net/WATCH/home/
// @grant        GM_addstyle
// ==/UserScript==

function getConsumerTrackingSheet(name){
	$('input#search_box').attr({value:name});
	searchCaseload();
	$('table.case_table a[title*="towards case goals"').click();
	$('a')[1].click();
}
function getConsumerTrackingSheets(names){
	for (var i = 0; i < names.length(); i++){
	setTimeout(getConsumerTrackingSheet(names[i]),2000);
	}
}
var AdvocateGroup = [[171, "Josiah"],[20,"Kevin Bass"],[158, "Annika"],[39,"Carol"],[140,"Breanne"],[183,"Karissa"],[180,"Leahana"]];
function loadAdvocateGroup(AdvocateGroup){
	for (var i = 0; i < AdvocateGroup.length; i++){
		loadTrackingSheet(AdvocateGroup[i][0],AdvocateGroup[i][1],"","");
	}
}
function go(event){
	loadAdvocateGroup(AdvocateGroup);
}
function go(){
	loadAdvocateGroup(AdvocateGroup);
}
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'Advocate Group Tracking</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", go, false
);
//--- Style our newly added elements using CSS.
GM_addStyle ( multilineStr ( function () {/*!
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              16px;
        background:             cyan;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                222;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
*/} ) );

function multilineStr (dummyFunc) {
    var str = dummyFunc.toString ();
    str     = str.replace (/^[^\/]+\/\*!?/, '') // Strip function () { /*!
            .replace (/\s*\*\/\s*\}\s*$/, '')   // Strip */ }
            .replace (/\/\/.+$/gm, '') // Double-slash comments wreck CSS. Strip them.
            ;
    return str;
}
