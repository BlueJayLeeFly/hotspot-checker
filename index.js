const container = document.querySelector('.grid-container');

const createSpots = (x, y) => {
	container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${y}, 1fr)`;

	for (let i = 0; i < x * y; i++) {
		let counter = 100;
		const spot = document.createElement('div');
		container.appendChild(spot);

		spot.addEventListener('mouseover', () => {
			if (counter > 0) {
				counter -= 10;
			}
			spot.style.backgroundColor = `hsl(269, 100%, ${counter}%)`;
		});
	}
};

createSpots(100, 100);
