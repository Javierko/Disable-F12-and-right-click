<!--Here starts F12 and CTRL functions--> 
	$(document).keydown(function (event) 
	{
		if (event.keyCode == 123) 
		{ // Prevent F12
			return false;
			alert('Fuck Off :)');
		} 
		else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) 
		{ // Prevent Ctrl+Shift+I        
			return false;
		}
	}); 

	document.onkeydown = function(e) 
	{
      if (e.keyCode === 123) 
	  {
        return false;
      }
     };
<!--Here ends F12 and CTRL functions--> 	 

<!--Here is right click-->
	var isNS = (navigator.appName == "Netscape") ? 1 : 0;
	if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
	function mischandler()
	{
		return false;
	}
	function mousehandler(e)
	{
		var myevent = (isNS) ? e : event;
		var eventbutton = (isNS) ? myevent.which : myevent.button;
		if((eventbutton==2)||(eventbutton==3)) return false;
	}
	document.oncontextmenu = mischandler;
	document.onmousedown = mousehandler;
	document.onmouseup = mousehandler;
<!--Here ends right click-->