let myDiv = document.querySelector('left2');

myDiv.addEventListener('mouseover', () => {
	myDiv.style.backgroundImage = `url('..images/kopi.jpeg')`

})

myDiv.addEventListener('mouseleave', () => {
	myDiv.style.backgroundImage = `url('..images/wolf.jpeg')`
})