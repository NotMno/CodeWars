
function createPlayer(name, health, atk, atkchance, def, defchance, maxhealth){
	return {
		"name" : name,
		"health": health,
		"attack" : [atk, atkchance],
		"defense" : [def, defchance],
		"fight" : ()=>{
			let finaldmg = 0;
			if(Math.random()*100 >= atkchance){
				finaldmg += atk
			}
			return finaldmg;
		},
		"defend" : ()=>{
			let finaldef = 0;
			if(Math.random()*100 >= defchance){
				finaldef += def;
			}
			return finaldef;
		},
		"maxhealth": maxhealth ?? health
	};
}

function fight([...players], teams = 0, battleType){

	function createTeams(teams){

		if(teams <= 1 || teams > players.length){
			return new Error("cant fight with one team")
		}

		if(teams == 0){
			let teamList = []
			for(let i = 0; i<players.length; i++){
				teamList.push(players[i]);
			}
			return teamList
		}

		let playerPick = players.slice()
		let teamList = []

		for(let i = 0; i < teams; i++){
			teamList.push([]);
			for(let j = 0; j < Math.floor(players.length / teams); j++){
				teamList[teamList.length-1].push(playerPick.splice(Math.floor(Math.random() * (playerPick.length - 1)), 1)[0]);
			}
		}
		if(players.length % teams)teamList.push([...playerPick])

		return teamList;
	}
	let newteams = createTeams(teams);

	while(newteams.length > 1){
		console.log(newteams)
		let team1 = newteams.splice(Math.floor((Math.random()*(newteams.length))), 1).flat();
		let team2 = newteams.splice(Math.floor((Math.random()*(newteams.length))), 1).flat();
		console.log(team1)
		console.log(team2)
		console.log("!!!!!!--------------------!!!!!!\n", newteams)
		console.log(`Team ${team1[0].name} has been chosen to fight against Team ${team2[0].name}!`);

		while(team1.length > 0 && team2.length > 0){
			if(team1.length < 1 || team2.length < 1){
				continue;
			}
		// all of team1's players attack randomly.
			for(let i=0; i<team1.length; i++){

				let player = team1[i];
				let enemyIndex = Math.floor((Math.random()*(team2.length)));
				let enemy = team2[enemyIndex];
				console.log(i, enemyIndex, enemy, "team 2", team2, team2.length)
				console.log(`------------------ \n Team 1's ${player.name} has chosen to fight ${enemy.name}!! \n------------------`)

				let dmg = player.fight() - enemy.defend()
				let prevHealth = enemy.health
				enemy.health -= dmg
				if(enemy.health > enemy.maxhealth)enemy.health = enemy.maxhealth;
				console.log(`${player.name} has dealt ${dmg} damage to ${enemy.name}! \n _previous enemy health : ${prevHealth}_ \n _current enemy health : ${enemy.health}_`)
				if(enemy.health < 1){
					console.log(`${enemy.name} has DIED !!!`)
					team2.splice(enemyIndex, 1);
				}
			}

			for(let i=0; i<team2.length; i++){
				let player = team2[i];
				let enemyIndex = Math.floor((Math.random()*(team1.length)));
				let enemy = team1[enemyIndex];
				console.log(i, enemyIndex, enemy, "team 1", team1, team1.length)
				console.log(`------------------ \n Team 2's ${player.name} has chosen to fight ${enemy.name}!! \n------------------`)

				let dmg = player.fight() - enemy.defend()
				let prevHealth = enemy.health
				enemy.health -= dmg
				if(enemy.health > enemy.maxhealth)enemy.health = enemy.maxhealth;
				console.log(`${player.name} has dealt ${dmg} damage to ${enemy.name}! \n _previous enemy health : ${prevHealth}_ \n _current enemy health : ${enemy.health}_`)
				if(enemy.health < 1){
					console.log(`${enemy.name} has DIED !!!`)
					team1.splice(enemyIndex, 1);
				}
			}
		}
		if(team1.length < 0){
			newteams.push(team2)
		}else {
			newteams.push(team1);
		}
	}

}

// player( name, health, damage, attack chance, defense, defense chance)
const player1 = createPlayer("bart", 100, 10, 50, 5, 50);
const player2 = createPlayer("bert", 100, 10, 50, 5, 50);
const player3 = createPlayer("bobert", 100, 10, 50, 5, 50);
const player4 = createPlayer("baart", 100, 10, 50, 5, 50);
const player5 = createPlayer("birt", 100, 10, 50, 5, 50);
const player6 = createPlayer("bobbart", 100, 10, 50, 5, 50);

let players = [player1, player2, player3, player4, player5, player6]
console.log(fight(players, 3));
