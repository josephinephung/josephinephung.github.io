let GameManager = {
	setGameStart: function(classType) {
		this.resetWeapon(classType);
		this.setPreFight(); 

	},
	resetWeapon: function(classType) {
		switch (classType) {
		case "bottleOpener":
		weapon = new Weapon(classType, 80, 0, 50, 150, 35);
		break;
		case "spork":
		weapon = new Weapon(classType, 85, 0, 50, 200, 55);
		break;
		case "teaKettle":
		weapon = new Weapon(classType, 120, 0, 50, 200, 100);
		break;

		}

		let getInterface = document.querySelector(".interface");
		getInterface.innerHTML = '<img src="classType.toLowerCase() + '.png" class="img-weapon"><div><h3>' + classType + '</h3><p class="health-weapon">Health: ' + weapon.health + '</p><p>Mana: ' + weapon.mana + '</p><p>Strength: ' + weapon.strength + '</p><p>Agility: ' + weapon.agility + '</p><p>Speed: ' + weapon.speed + '</p></div>';

	},

	setPreFight: function() { 
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getArena = document.querySelector(".arena");
		getHeader.innerHTML = '<p>Reclaim your kitchen! It is fight time!</p>';
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Lets Fight.</a>';
		getArena.style.visibility = "visible";
	},
	setFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getFood = document.querySelector(".food");
		let food00 = new Food("hamburger", 100, 0, 50, 100, 100);
		let food01 = new Food("cookie monster", 110, 0, 200, 80, 150);
		let food02 = new Food("mr banana", 115, 0, 100, 70, 100);
		let food03 = new Food("mr peanut", 130, 0, 200, 100, 50);
		let chooseRandomFood = Math.floor(Math.random() * Math.floor(4));
		switch (chooseRandomFood) {
		case 0: 
		food = food00; 
		break; 
		case 1:
		food = food01; 
		break; 
		case 2:
		food = food02; 
		break; 
		case 3:
		food = food03; 
		break; 
	}
	getHeader.innerHTML = '<p>ITS GO TIME. </p>';
	getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="WeaponMoves.calcAttack()">ATTACK!</a>';
	getFood.innerHTML = '<img src="food.foodType.toLowerCase() + '.jpg" class="img-food"><div><h3>' + food.foodType + '</h3><p class="health-food">Health: ' + food.health + '</p><p>Mana: ' + food.mana + '</p><p>Strength: ' + food.strength + '</p><p>Agility: ' + food.agility + '</p><p>Speed: ' + food.speed + '</p></div>';

	}
	}



 
