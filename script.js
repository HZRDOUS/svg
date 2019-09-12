window.onload = function(){
	var blur = document.querySelector('feGaussianBlur')

	var deviation = 0
	requestAnimationFrame(function loop() {
	  blur.setAttribute('stdDeviation', 5*(Math.sin(deviation+=0.1)+1))
	  requestAnimationFrame(loop)
	})
}