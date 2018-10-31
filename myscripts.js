function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
	document.getElementById("board").style.marginLeft = "200px";
	
	document.getElementById("board").style.transition = "0.3s";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-200px";
	document.getElementById("board").style.marginLeft = "50px";
	
	document.getElementById("board").style.transition = "0.3s";
}

function openNavR() {
    document.getElementById("mySidenavR").style.right = "0px";
}

function closeNavR() {
    
	document.getElementById("mySidenavR").style.right = "-200px";
}