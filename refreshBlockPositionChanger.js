var refreshBlockPositionChanger = function(elementId, distanceFromTop) {
	
	var element = document.getElementById(elementId);
		
	//This function is called whenever the user scrolls
	function checkScrollState() {
			
			if(window.scrollY > distanceFromTop && !shouldPrepareForSiteOffset()) {
			
				/*This here will activate only when the window offset is more than 
				the element's top offset*/	
				
				element.style.top = "0px";
				element.style.position = "fixed";
				
			}else {
	
				if(shouldPrepareForSiteOffset()) {
					makeAnyNecessaryChange();		
				}else{
					element.style.position = "relative";
					element.style.top = "0px";
				}
				
			}

	}
			
	function makeAnyNecessaryChange() {
		if(navigator.platform == "MacIntel") {
			element.style.top = "-" + getPageOffset() + "px";
		}
	}
	
	function getPageOffset() {
		var offset = (window.scrollY + window.innerHeight) - document.height;
		return offset; 
	}
			
	//This function helps to determine if the application should bother 
	//attaching the block to the bottom, or ignore it, given that it has already done.
	function shouldPrepareForSiteOffset() {
		if((window.scrollY + window.innerHeight) >= document.height - 100) {
			return true;
		}
		return false;
	}
		
	//Event Listeners
	document.addEventListener("scroll", checkScrollState);
}
