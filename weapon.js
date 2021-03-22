let weapon;

function Weapon(classType, health, mana, strength, agility, speed) {
this.classType = classType;
this.health = health;
this.mana = mana;
this.strength = strength;
this.agility = agility;
this.speed = speed;
}

let WeaponMoves = {
	calcAttack: function() {

		let getWeaponSpeed = weapon.speed;
		let getFoodSpeed = food.speed;
		let weaponAttack = function() {
		let calcBaseDamage;
		if (weapon.mana > 0) {
			calcBaseDamage = weapon.strength * weapon.mana / 1000;
		} else {
			calcBaseDamage = weapon.strength * weapon.agility / 1000; 
		}
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage; 

let numberOfHits = Math.floor(Math.random() * Math.floor(weapon.agility / 10) / 2) + 1;
		let attackValues = [calcOutputDamage, numberOfHits];
		return attackValues;
		}

			let foodAttack = function() {
		let calcBaseDamage;
		if (food.mana > 0) {
			calcBaseDamage = food.strength * food.mana / 1000;
		} else {
			calcBaseDamage = food.strength * food.agility / 1000; 
		}
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage; 

		let numberOfHits = Math.floor(Math.random() * Math.floor(weapon.agility / 10) / 2) + 1;
		let attackValues = [calcOutputDamage, numberOfHits];
		return attackValues;
		}
		let getWeaponHealth = document.querySelector(".health-weapon");
		let getFoodHealth = document.querySelector(".health-food");

		if(getWeaponSpeed >= getWeaponSpeed) {
			let weaponAttackValues = weaponAttack(); 
			let totalDamage = weaponAttackValues[0] * weaponAttackValues[1];
			food.health = food.health - totalDamage;
			alert("You hit" + weaponAttackValues[0] + " damage " + weaponAttackValues[1] + " times. ");
			if (food.health <=0) {
				alert("You have defeated the food creatures and reclaimed your kitchen! Congratulations"); 
				getWeaponHealth.innerHTML = 'Health: ' + weapon.health;
				getFoodHealth.innerHTML = 'Health: 0';
			} else {
				getFoodHealth.innerHTML = 'Health: ' + food.health;
// Food 
				let foodAttackValues = foodAttack();
				let totalDamage = foodAttackValues[0] * foodAttackValues[1];
			weapon.health = weapon.health - totalDamage;
			alert("You have been hit" + foodAttackValues[0] + " damage " + foodAttackValues[1] + " times. ");
			if (weapon.health <=0) {
				alert("You have been slain. The food creatures have taken over your home. GAME OVER."); 
				getWeaponHealth.innerHTML = 'Health: 0';
				getFoodHealth.innerHTML = 'Health: 0' + food.health;
			} else {

				getWeaponHealth.innerHTML = 'Health: 0' + weapon.health;
			}
		}
	}
// else if statements
else if(getFoodSpeed >= getWeaponSpeed) {
			let foodAttackValues = foodAttack(); 
			let totalDamage = foodAttackValues[0] * foodAttackValues[1];
			weapon.health = weapon.health - totalDamage;
			alert("You have been hit" + foodAttackValues[0] + " damage " + foodAttackValues[1] + " times. ");
			if (weapon.health <=0) {
				alert("You have been slain. Your home has been taken over by food creatures. GAME OVER."); 
				getFoodHealth.innerHTML = 'Health: ' + food.health;
				getWeaponHealth.innerHTML = 'Health: 0';
			} else {
				getWeaponHealth.innerHTML = 'Health: ' + weapon.health;
// Food 
				let weaponAttackValues = weaponAttack();
				let totalDamage = weaponAttackValues[0] * foodAttackValues[1];
			food.health = food.health - totalDamage;
			alert("You hit " + weaponAttackValues[0] + " damage " + weaponAttackValues[1] + " times. ");
			if (food.health <=0) {
				alert("You have defeated the food creatures and reclaimed your kitchen! Congratulations"); 
				getFoodHealth.innerHTML = 'Health: 0';
				getWeaponHealth.innerHTML = 'Health: 0' + weapon.health;
			} else {

				getFoodHealth.innerHTML = 'Health: 0' + food.health;
			}
		}
	}
	}




}