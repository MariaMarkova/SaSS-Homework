/**
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
	//console.log('content loaded');
	/*<div id="contact-us">
			<button>Contact us!<span class="fa fa-chevron-up"></span></button>			
		</div>*/
	/*	position: fixed;
		top: 650px;
		left: 1025px;
		z-index: 1;*/
	
	var btn = document.createElement('button');
	var span = document.createElement('span');
	
	span.className = 'fa fa-chevron-up';
	btn.id = "b-js";	
	btn.innerHTML = 'Contact us!';
	
	btn.appendChild(span);
	document.getElementById('contact-us').appendChild(btn);
	
	var w = (window.innerWidth - 340) + 'px';
	var h = (window.innerHeight - 42) + 'px';
	
	document.getElementById('b-js').style.position = 'fixed';	
	document.getElementById('b-js').style.top = h;	
	document.getElementById('b-js').style.left = w;
	
	document.getElementById('b-js').style.zIndex = '1';		
	
	var collectionInputFields = document.getElementsByClassName('input');
	
	collectionInputFields[0].addEventListener("focus", function() {		
		collectionInputFields[0].className = 'input input--yoshiko input--filled';
		console.log('fosuc');
	}, true);
	collectionInputFields[1].addEventListener("focus", function() {		
		collectionInputFields[1].className = 'input input--yoshiko input--filled';
		console.log('fosuc');
	}, true);
	collectionInputFields[2].addEventListener("focus", function() {		
		collectionInputFields[2].className = 'input input--yoshiko input--filled';
		console.log('fosuc');
	}, true);
	
	collectionInputFields[0].addEventListener("blur", function() {		
		console.log('blur');
		if ( (collectionInputFields[0].getElementsByTagName('input')[0].value).length === 0){
			collectionInputFields[0].className = 'input input--yoshiko';
		}		
	}, true);
	collectionInputFields[1].addEventListener("blur", function() {		
		console.log('blur');
		if ( (collectionInputFields[1].getElementsByTagName('input')[0].value).length === 0){
			collectionInputFields[1].className = 'input input--yoshiko';
		}		
	}, true);
	collectionInputFields[2].addEventListener("blur", function() {		
		console.log('blur');
		if ( (collectionInputFields[2].getElementsByTagName('input')[0].value).length === 0){
			collectionInputFields[2].className = 'input input--yoshiko';
		}		
	}, true);
	
//	document.getElementById('perant').addEventListener('focus', function(e) {
//		console.log(e.target);	
//		console.log(e.target.value);	
//		e.target.className = 'input input--yoshiko input--filled';
//	}, true);
//	
//	document.getElementById('perant').addEventListener('blur', function(e) {
//		console.log(e.target);	
//		console.log(e.target.value.length);	
//		if(e.target.value.length === 0){
//			e.target.className = 'input input--yoshiko';
//		}else {
//			e.target.className = 'input input--yoshiko input--filled';
//		}
//		
//	}, true);
	
}, false);


/*var img = document.getElementById('popular'),
var style = img.currentStyle || window.getComputedStyle(img, false),
var url = style.backgroundImage.slice(4, -1);
*/