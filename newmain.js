const fetchCharacters1 = fetch('https://rickandmortyapi.com/api/character/?page=2');
	const fetchCharacters2 = fetch('https://rickandmortyapi.com/api/character/');

	Promise.all([fetchCharacters1, fetchCharacters2]).then(values => {//console.log(values);
	return Promise.all(values.map(r => r.json()));
	}).then(([Characters1, Characters2]) => {
		console.log(Characters1);
		console.log(Characters2);
	}); 

fetch("https://rickandmortyapi.com/api/character/?page=2")

	.then(response => response.json())
	.then(data => makeCards(data.results))

	function makeCards(charactersArray){
		//console.log(data)
		const cardContainer = document.querySelector('#open2')
		charactersArray.forEach(character => {

			//console.log('test iterating')
			cardContainer.innerHTML = cardContainer.innerHTML + `<div id='charcter-card-${character.id}'

			
			<center><img src=${character.image}></img>
			<br>
			${character.name}
			${character.status}
			${character.gender}
			${character.species}<br>
			<div class="info">
			<span><br>Mouse over for more info</span>
			<span class="info-full"><span><br>Origin: ${character.origin.name}</span>
				<span>Last Seen: ${character.location.name}</span> 
			</span></div>
			<br>
			</center>


		</div>


			`

		})
	}

