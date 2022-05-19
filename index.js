const container = document.querySelector('.grid-container');

for (let i = 0; i < 2500; i++) {
	let counter = 100;
	const spot = document.createElement('div');
	spot.classList.add('spot');
	container.appendChild(spot);

	spot.addEventListener('mouseover', () => {
		if (counter > 0) {
			counter -= 10;
		}
		spot.style.backgroundColor = `hsl(269, 100%, ${counter}%)`;
		console.log(spot.style.backgroundColor);
	});
}
