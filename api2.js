
fetch("https://rickandmortyapi.com/api/character/?page=17")

	.then(response => response.json())
	.then(data => charMOREINFO(data.results))

	function charMOREINFO(charactersArray){
		//console.log(data)
		const cardContainer = document.querySelector('#open4')
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

