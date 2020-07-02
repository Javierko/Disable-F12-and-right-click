$(document).keydown(function(e) {
	if(e.keyCode == 123) {
		return false;
	} else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		return false;
	}
});

document.onkeydown = function(e) {
	if(e.keyCode === 123) {
		return false;
	}
};

const isNetScape = navigator.appName == "Netscape" ? 1 : 0;

if(isNetScape) {
	document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
}

function mischandler() {
	return false;
}

function mousehandler(e) {
	let customEvent = (isNetScape) ? e : event;
	let eventButton = (isNetScape) ? customEvent.which : customEvent.button;
	
	if(eventButton == 2 || eventButton == 3) {
		return false;
	}
}

document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
